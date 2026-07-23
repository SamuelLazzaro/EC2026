/* ═══════════════════════════════════════════════════════════
   comunicazioni-data.js – Avvisi ufficiali / urgenti

   Data source for the "Comunicazioni" section. Each entry is one
   official notice rendered as a card by initComunicazioni()
   (js/main.js).

   Entry shape:
     {
       id:    unique slug (stable, used as key / DOM data-attr),
       level: 'urgent' | 'warning' | 'info'
              → drives the card colour and the badge label; also
                the sort order (urgent first, info last),
       title: { <lang>: string }  short heading, one per language,
       body:  { <lang>: string }  full text, one per language.
                May contain the placeholder token "{link}" which is
                replaced at render time by an inline anchor,
       link:  optional {                only when body has "{link}"
                target: element id to smooth-scroll to on click,
                label:  { <lang>: string }  anchor text per language
              }
     }

   Languages: it · en · fr · de · es · pt (site-wide set). Missing
   languages fall back to English, then Italian.

   To add/remove a notice: edit this array. No other file needs to
   change unless a new `level` value is introduced.
   ═══════════════════════════════════════════════════════════ */

const COMUNICAZIONI = [
  {
    id: 'ingresso-pubblico-orario',
    level: 'urgent',
    title: {
      it: "Ingresso pubblico – apertura alle ore 8:15 ogni giorno",
      en: "Public entry – opens at 8:15 a.m. every day",
      fr: "Entrée du public – ouverture à 8h15 chaque jour",
      de: "Publikumseinlass – täglich ab 8:15 Uhr",
      es: "Entrada del público – apertura a las 8:15 cada día",
      pt: "Entrada do público – abertura às 8h15 todos os dias"
    },
    body: {
      it: "L'ingresso per il pubblico inizierà ogni giorno alle ore 8:15, dall'ingresso vicino alla tribuna.",
      en: "Public entry will start every day at 8:15 a.m., through the entrance next to the grandstand.",
      fr: "L'entrée du public commencera chaque jour à 8h15, par l'entrée située à côté de la tribune.",
      de: "Der Einlass für das Publikum beginnt täglich um 8:15 Uhr am Eingang neben der Tribüne.",
      es: "La entrada del público comenzará cada día a las 8:15, por el acceso situado junto a la tribuna.",
      pt: "A entrada do público começará todos os dias às 8h15, pelo acesso junto à bancada."
    }
  }
];
