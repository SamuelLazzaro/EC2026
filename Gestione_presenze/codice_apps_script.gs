/**
 * Gestione presenze - Campionato Europeo Pattinaggio Cardano 2026
 * Riceve le presenze dal form (Gestione_presenze/presenze.html) e le scrive
 * sul Google Sheet, sempre ordinate per giorno.
 *
 * DEPLOY:
 *  1) Crea un Google Sheet nuovo e copia il suo ID dall'URL:
 *     .../spreadsheets/d/<QUESTO_E_L_ID>/edit
 *  2) Vai su script.google.com > Nuovo progetto, incolla questo codice,
 *     imposta SPREADSHEET_ID qui sotto e salva.
 *     (in alternativa: dal foglio, Estensioni > Apps Script)
 *  3) Distribuisci > Nuova distribuzione > tipo "App web".
 *     - Esegui come: Me stesso
 *     - Chi ha accesso: Chiunque
 *     Alla prima distribuzione Google chiede di autorizzare lo script.
 *  4) Copia l'URL che termina con /exec e incollalo in SCRIPT_URL
 *     dentro Gestione_presenze/js/constants.js.
 *
 * COMPORTAMENTO REINVIO: ogni invio riguarda UN solo giorno. Un nuovo
 * invio con lo stesso nome+cognome per lo stesso giorno SOSTITUISCE la
 * riga precedente di quella persona per quel giorno; gli altri giorni
 * gia' registrati non vengono toccati.
 */

const SHEET_NAME = "Presenze";

// Progetto Apps Script standalone: non c'e' un foglio "attivo", quindi
// indichiamo esplicitamente su quale Google Sheet lavorare.
const SPREADSHEET_ID = "1vmDc5qJBoud6_IiOBFLCZuv0zvUfqhvUVqeWRDRxs-c";

const HEADERS = ["Giorno", "Fascia", "Cognome", "Nome", "Note", "Ultimo invio"];

// Indici (0-based) delle colonne, per leggibilita' nel codice sotto.
const COL_GIORNO = 0, COL_FASCIA = 1, COL_COGNOME = 2, COL_NOME = 3;

// Fascia inviata dal form -> etichetta italiana scritta sul foglio.
const FASCE_IT = {
  "morning": "Mattina",
  "afternoon": "Pomeriggio",
  "full": "Tutto il giorno"
};

// Giorni ammessi: 19-26 luglio 2026. Tutto il resto viene scartato.
const GIORNI_VALIDI = [
  "2026-07-19", "2026-07-20", "2026-07-21", "2026-07-22",
  "2026-07-23", "2026-07-24", "2026-07-25", "2026-07-26"
];

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    // Anti-bot: se il campo honeypot e' pieno, ignora silenziosamente.
    if (data.website) return json({ status: "success" });

    const nome = pulisciNome_(data.firstName);
    const cognome = pulisciNome_(data.lastName);
    if (!nome || !cognome) {
      return json({ status: "error", message: "Nome e cognome obbligatori" });
    }

    const dataIso = String(data.date || "");
    const fascia = String(data.slot || "");
    if (GIORNI_VALIDI.indexOf(dataIso) === -1) {
      return json({ status: "error", message: "Giorno non valido" });
    }
    if (!FASCE_IT.hasOwnProperty(fascia)) {
      return json({ status: "error", message: "Fascia non valida" });
    }

    const note = String(data.notes || "").slice(0, 500);

    // Lock: evita che due invii simultanei si sovrascrivano a vicenda
    // durante la sequenza leggi -> filtra -> riscrivi -> ordina.
    const lock = LockService.getScriptLock();
    lock.waitLock(20000);
    try {
      scriviPresenza_(nome, cognome, dataIso, fascia, note);
    } finally {
      lock.releaseLock();
    }

    return json({ status: "success" });
  } catch (err) {
    return json({ status: "error", message: String(err) });
  }
}

// Semplice ping di stato, utile per verificare che la Web App sia attiva.
function doGet() {
  return json({ status: "ok", info: "Endpoint gestione presenze attivo" });
}

/**
 * Aggiorna il foglio con la presenza di una persona per UN giorno:
 *  1) legge tutte le righe esistenti,
 *  2) elimina l'eventuale riga della stessa persona per lo stesso giorno
 *     (confronto su nome+cognome normalizzati: maiuscole/minuscole e
 *     spazi extra non contano); gli altri giorni restano intatti,
 *  3) aggiunge la nuova riga,
 *  4) riscrive tutto ordinato per Giorno, poi Cognome, poi Nome.
 * Cosi' il foglio resta sempre ordinato per giorno e senza duplicati.
 */
function scriviPresenza_(nome, cognome, dataIso, fascia, note) {
  const sheet = getSheet_();
  const chiavePersona = chiave_(nome, cognome);
  const giorno = parseDate_(dataIso);

  // 1) Righe esistenti (sotto l'intestazione).
  let righe = [];
  if (sheet.getLastRow() > 1) {
    righe = sheet.getRange(2, 1, sheet.getLastRow() - 1, HEADERS.length).getValues();
  }

  // 2) Scarta solo la riga stessa persona + stesso giorno (se presente).
  righe = righe.filter(function (riga) {
    const stessaPersona = chiave_(riga[COL_NOME], riga[COL_COGNOME]) === chiavePersona;
    const stessoGiorno = riga[COL_GIORNO] instanceof Date &&
      riga[COL_GIORNO].getTime() === giorno.getTime();
    return !(stessaPersona && stessoGiorno);
  });

  // 3) Nuova riga per il giorno inviato.
  righe.push([
    giorno,               // Giorno (Date reale: ordina e si mostra come 19/07/2026)
    FASCE_IT[fascia],     // Fascia in italiano
    cognome,
    nome,
    note,
    new Date()            // Ultimo invio (data + ora)
  ]);

  // 4) Ordina per Giorno, poi Cognome, poi Nome (alfabetico, no accenti/case).
  righe.sort(function (a, b) {
    const diffGiorno = a[COL_GIORNO].getTime() - b[COL_GIORNO].getTime();
    if (diffGiorno !== 0) return diffGiorno;
    const diffCognome = confrontaTesti_(a[COL_COGNOME], b[COL_COGNOME]);
    if (diffCognome !== 0) return diffCognome;
    return confrontaTesti_(a[COL_NOME], b[COL_NOME]);
  });

  // Riscrittura completa: pulisce l'area dati e scrive in un colpo solo.
  if (sheet.getLastRow() > 1) {
    sheet.getRange(2, 1, sheet.getLastRow() - 1, HEADERS.length).clearContent();
  }
  if (righe.length > 0) {
    sheet.getRange(2, 1, righe.length, HEADERS.length).setValues(righe);
  }
}

// Restituisce lo spreadsheet su cui lavorare. Progetto standalone -> openById.
function getSpreadsheet_() {
  return SpreadsheetApp.openById(SPREADSHEET_ID);
}

function getSheet_() {
  const ss = getSpreadsheet_();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    // Imposta lingua italiana del foglio (date in gg/mm/aaaa) alla prima scrittura.
    try { ss.setSpreadsheetLocale("it_IT"); } catch (ignore) {}
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
    sheet.setFrozenRows(1);
    // Formati data espliciti, indipendenti dalle impostazioni utente.
    sheet.getRange("A2:A").setNumberFormat("dd/mm/yyyy");
    sheet.getRange("F2:F").setNumberFormat("dd/mm/yyyy hh:mm");
  }
  return sheet;
}

// "2026-07-19" -> oggetto Date locale (evita lo scarto di fuso orario).
function parseDate_(iso) {
  const p = String(iso).split("-");
  return new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]));
}

// Pulisce un nome: stringa, trim, spazi interni singoli, max 60 caratteri.
function pulisciNome_(valore) {
  return String(valore || "").trim().replace(/\s+/g, " ").slice(0, 60);
}

/**
 * Chiave di identita' della persona: nome+cognome normalizzati.
 * "  Mario  ROSSI " e "mario rossi" contano come la stessa persona.
 */
function chiave_(nome, cognome) {
  return normalizza_(nome) + "|" + normalizza_(cognome);
}

function normalizza_(testo) {
  return String(testo || "").trim().replace(/\s+/g, " ").toLowerCase();
}

// Confronto alfabetico che ignora maiuscole e accenti (es. "e'" ~ "e").
function confrontaTesti_(a, b) {
  return String(a).localeCompare(String(b), "it", { sensitivity: "base" });
}

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
