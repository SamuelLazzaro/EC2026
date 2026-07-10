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
const TIMEZONE = "Europe/Rome";

const HEADERS = ["Data invio","Nazione","Giorno","Pranzo 1","Pranzo 2","Pranzo 3 (Veg)",
                 "Cena 1","Cena 2","Cena 3 (Veg)","Totale","Note"];

// Nomi Paesi: valore inviato dal form (inglese) -> etichetta italiana per il foglio.
const PAESI_IT = {
  "Denmark":"Danimarca", "France":"Francia", "Germany":"Germania",
  "United Kingdom":"Regno Unito", "Hungary":"Ungheria", "Italy":"Italia",
  "Latvia":"Lettonia", "Netherlands":"Paesi Bassi", "Poland":"Polonia",
  "Portugal":"Portogallo", "Spain":"Spagna", "Switzerland":"Svizzera",
  "Ukraine":"Ucraina", "Austria":"Austria", "Czechia":"Repubblica Ceca"
};

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    // Anti-bot: se il campo honeypot e' pieno, ignora silenziosamente.
    if (data.website) return json({ status: "success" });

    const sheet = getSheet_();

    const l1 = clamp_(data.l1), l2 = clamp_(data.l2), l3 = clamp_(data.l3);
    const d1 = clamp_(data.d1), d2 = clamp_(data.d2), d3 = clamp_(data.d3);
    const total = l1 + l2 + l3 + d1 + d2 + d3;

    const nazione = PAESI_IT[data.country] || String(data.country || "");
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

// Apri l'URL /exec nel browser per verificare che l'app web sia attiva.
function doGet() {
  return json({ status: "ok", info: "Endpoint ordini pasti attivo" });
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
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

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
