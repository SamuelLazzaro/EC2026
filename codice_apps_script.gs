/**
 * Ordini pasti - Campionato Europeo Pattinaggio Cardano 2026
 * Riceve i dati dal form e li scrive sul Google Sheet, tutto in italiano.
 *
 * DEPLOY:
 *  1) Crea un Google Sheet nuovo.
 *  2) Estensioni > Apps Script, incolla questo codice, salva.
 *  3) Distribuisci > Nuova distribuzione > tipo "App web".
 *     - Esegui come: Me stesso
 *     - Chi ha accesso: Chiunque
 *  4) Copia l'URL che termina con /exec e incollalo in SCRIPT_URL nell'HTML.
 *
 *  NB: se avevi gia' creato il foglio con la versione inglese, elimina il
 *  foglio "Ordini" (o la riga di intestazione) cosi' viene rigenerato in italiano.
 */

const SHEET_NAME = "Ordini";
const SQUADRE_SHEET = "Squadre";   // foglio con la tabella Token -> Nazione
const TIMEZONE = "Europe/Rome";

// Progetto Apps Script standalone: non c'e' un foglio "attivo", quindi indichiamo
// esplicitamente su quale Google Sheet lavorare. Incolla qui l'ID del foglio,
// che trovi nel suo URL:  .../spreadsheets/d/<QUESTO_E_L_ID>/edit
const SPREADSHEET_ID = "1hQCtIUuQ6oHnOenhxRbZnXMLaAiL3kNCx83QVO7cZJA";

const HEADERS = ["Data invio","Nazione","Giorno","Pranzo 1","Pranzo 2","Pranzo 3 (Veg)",
                 "Cena 1","Cena 2","Cena 3 (Veg)","Totale","Note"];

// Nomi Paesi: valore inviato dal form (inglese) -> etichetta italiana per il foglio.
const PAESI_IT = {
  "Denmark":"Danimarca", "France":"Francia", "Germany":"Germania",
  "Great Britain":"Gran Bretagna", "Hungary":"Ungheria", "Italy":"Italia",
  "Latvia":"Lettonia", "Netherlands":"Paesi Bassi", "Poland":"Polonia",
  "Portugal":"Portogallo", "Spain":"Spagna", "Switzerland":"Svizzera",
  "Ukraine":"Ucraina", "Austria":"Austria", "Czechia":"Repubblica Ceca",
  "Slovakia":"Slovacchia", "Belgium":"Belgio"
};

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    // Anti-bot: se il campo honeypot e' pieno, ignora silenziosamente.
    if (data.website) return json({ status: "success" });

    // Verifica del token: la nazione e' determinata dal server a partire dal
    // token, non dal client. Un token assente o sconosciuto viene rifiutato
    // senza scrivere nulla (impedisce di ordinare per conto di un'altra nazione).
    const countryEn = getSquadraFromToken_(data.token);
    if (!countryEn) return json({ status: "error", message: "Token non valido" });

    const sheet = getSheet_();

    const l1 = clamp_(data.l1), l2 = clamp_(data.l2), l3 = clamp_(data.l3);
    const d1 = clamp_(data.d1), d2 = clamp_(data.d2), d3 = clamp_(data.d3);
    const total = l1 + l2 + l3 + d1 + d2 + d3;

    const nazione = PAESI_IT[countryEn] || countryEn;
    const giorno = parseDate_(data.date);   // Date reale: si ordina e si mostra come 17/07/2026

    sheet.appendRow([
      new Date(),         // Data invio (data + ora)
      nazione,            // Nazione (in italiano)
      giorno,             // Giorno del pasto
      l1, l2, l3, d1, d2, d3, total,
      String(data.notes || "")   // Note: nella lingua scritta dal team
    ]);

    return json({ status: "success" });
  } catch (err) {
    return json({ status: "error", message: String(err) });
  }
}

// GET ?t=TOKEN -> restituisce la nazione associata al token, che il form usa
// solo per mostrarla all'utente ("Stai ordinando per: ..."). La verifica vera
// resta nel doPost. Senza token, risponde con un semplice ping di stato.
function doGet(e) {
  const token = e && e.parameter ? e.parameter.t : "";
  if (token) {
    const countryEn = getSquadraFromToken_(token);
    if (countryEn) return json({ status: "ok", country: countryEn });
    return json({ status: "error", message: "Token non valido" });
  }
  return json({ status: "ok", info: "Endpoint ordini pasti attivo" });
}

// Restituisce lo spreadsheet su cui lavorare. Progetto standalone -> openById.
function getSpreadsheet_() {
  return SpreadsheetApp.openById(SPREADSHEET_ID);
}

function getSheet_() {
  const ss = getSpreadsheet_();
  let sheet = ss.getSheetByName(SHEET_NAME);
  const nuovo = !sheet;
  if (nuovo) sheet = ss.insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    // Imposta lingua italiana del foglio (date in gg/mm/aaaa) alla prima scrittura.
    try { ss.setSpreadsheetLocale("it_IT"); } catch (ignore) {}
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
    sheet.setFrozenRows(1);
    // Formati data espliciti, indipendenti dalle impostazioni utente.
    sheet.getRange("A2:A").setNumberFormat("dd/mm/yyyy hh:mm");
    sheet.getRange("C2:C").setNumberFormat("dd/mm/yyyy");
  }
  return sheet;
}

// "2026-07-17" -> oggetto Date locale (evita lo scarto di fuso orario).
function parseDate_(iso) {
  if (!iso) return "";
  const p = String(iso).split("-");
  if (p.length !== 3) return String(iso);
  return new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]));
}

function clamp_(v) {
  const n = parseInt(v, 10);
  if (isNaN(n)) return 0;
  return Math.max(0, Math.min(100, n));
}

/**
 * Cerca un token nel foglio "Squadre" e restituisce il nome della nazione
 * (in inglese, coerente con le chiavi di PAESI_IT) oppure null se il token
 * non esiste o e' stato disattivato.
 *
 * Struttura attesa del foglio "Squadre":
 *   A: Token   |   B: Nazione (inglese)   |   C: Attivo (SI/NO, opzionale)
 *
 * La colonna C e' facoltativa: se assente o vuota, la squadra e' considerata
 * attiva. Impostare "NO" permette di revocare un link senza cancellare la riga.
 */
function getSquadraFromToken_(token) {
  const tokenPulito = String(token || "").trim();
  if (!tokenPulito) return null;

  const ss = getSpreadsheet_();
  const sheet = ss.getSheetByName(SQUADRE_SHEET);
  if (!sheet || sheet.getLastRow() < 2) return null;

  // dati[0] e' l'intestazione: si parte da i = 1.
  const dati = sheet.getDataRange().getValues();
  for (let i = 1; i < dati.length; i++) {
    const tokenRiga = String(dati[i][0] || "").trim();
    if (tokenRiga && tokenRiga === tokenPulito) {
      const attivo = dati[i].length > 2 ? String(dati[i][2] || "SI").trim().toUpperCase() : "SI";
      if (attivo === "NO") return null;
      return String(dati[i][1] || "").trim();
    }
  }
  return null;
}

/**
 * ESEGUI dall'editor Apps Script (menu "Esegui") per popolare il foglio
 * "Squadre" con un token univoco per ogni nazione.
 *
 * E' SICURA DA RIESEGUIRE: crea il foglio se manca e aggiunge solo le nazioni
 * ANCORA ASSENTI. Le righe gia' presenti (e quindi i link gia' distribuiti)
 * non vengono toccate. Al termine, il log ("Esecuzione" > "Log") elenca cosa
 * e' stato aggiunto.
 *
 * In "Squadre" trovi Token | Nazione | Attivo. Il link da inviare a ogni
 * squadra ha il formato:  .../meal_ordering.html?t=TOKEN
 */
function generaSquadre() {
  // Prefisso leggibile per nazione (solo estetico: la verifica usa il token intero).
  const PREFISSI = {
    "Denmark": "DK", "France": "FR", "Germany": "DE", "Great Britain": "GB",
    "Hungary": "HU", "Italy": "IT", "Latvia": "LV", "Netherlands": "NL",
    "Poland": "PL", "Portugal": "PT", "Spain": "ES", "Switzerland": "CH",
    "Ukraine": "UA", "Austria": "AT", "Czechia": "CZ",
    "Slovakia": "SK", "Belgium": "BE"
  };

  const ss = getSpreadsheet_();
  let sheet = ss.getSheetByName(SQUADRE_SHEET);
  if (!sheet) {
    sheet = ss.insertSheet(SQUADRE_SHEET);
    sheet.appendRow(["Token", "Nazione", "Attivo"]);
    sheet.getRange(1, 1, 1, 3).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }

  // Nazioni gia' presenti nel foglio (colonna B), per non aggiungerle due volte.
  const presenti = {};
  if (sheet.getLastRow() >= 2) {
    const nazioniEsistenti = sheet.getRange(2, 2, sheet.getLastRow() - 1, 1).getValues();
    nazioniEsistenti.forEach(function (riga) { presenti[String(riga[0]).trim()] = true; });
  }

  const aggiunte = [];
  Object.keys(PREFISSI).forEach(function (nazione) {
    if (presenti[nazione]) return;
    const token = PREFISSI[nazione] + "-" + randomToken_(10);
    sheet.appendRow([token, nazione, "SI"]);
    aggiunte.push(nazione + " -> " + token);
  });

  Logger.log(aggiunte.length ? "Aggiunte:\n" + aggiunte.join("\n") : "Nessuna nuova squadra da aggiungere.");
}

/**
 * Genera una stringa casuale di lunghezza "len".
 * L'alfabeto esclude i caratteri ambigui (0/O, 1/I/L) per evitare errori di
 * trascrizione quando i token vengono copiati o letti a voce.
 */
function randomToken_(len) {
  const alfabeto = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
  let s = "";
  for (let i = 0; i < len; i++) {
    s += alfabeto.charAt(Math.floor(Math.random() * alfabeto.length));
  }
  return s;
}

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
