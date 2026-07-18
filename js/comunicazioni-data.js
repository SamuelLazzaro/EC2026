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
    id: 'controllo-passaporti-atleti',
    level: 'urgent',
    title: {
      it: "Controllo passaporti atleti – domenica 19 luglio, ore 16:30",
      en: "Athletes' passport check – Sunday 19 July, 4:30 p.m.",
      fr: "Contrôle des passeports des athlètes – dimanche 19 juillet, 16h30",
      de: "Passkontrolle der Athleten – Sonntag, 19. Juli, 16:30 Uhr",
      es: "Control de pasaportes de los atletas – domingo 19 de julio, 16:30",
      pt: "Controlo dos passaportes dos atletas – domingo, 19 de julho, 16h30"
    },
    body: {
      it: "Durante la riunione tecnica di domenica 19 luglio, alle ore 16:30, si svolgerà il controllo dei passaporti degli atleti.",
      en: "During the technical meeting on Sunday 19 July, at 4:30 p.m., the athletes' passport check will take place.",
      fr: "Lors de la réunion technique du dimanche 19 juillet, à 16h30, aura lieu le contrôle des passeports des athlètes.",
      de: "Während der technischen Besprechung am Sonntag, den 19. Juli, findet um 16:30 Uhr die Passkontrolle der Athleten statt.",
      es: "Durante la reunión técnica del domingo 19 de julio, a las 16:30, se llevará a cabo el control de pasaportes de los atletas.",
      pt: "Durante a reunião técnica de domingo, 19 de julho, às 16h30, realizar-se-á o controlo dos passaportes dos atletas."
    }
  },
  {
    id: 'riunione-tecnica',
    level: 'urgent',
    title: {
      it: "Riunione tecnica – domenica 19 luglio",
      en: "Technical meeting – Sunday 19 July",
      fr: "Réunion technique – dimanche 19 juillet",
      de: "Technische Besprechung – Sonntag, 19. Juli",
      es: "Reunión técnica – domingo 19 de julio",
      pt: "Reunião técnica – domingo, 19 de julho"
    },
    body: {
      it: "Domenica 19 luglio alle ore 16:00 è prevista una riunione tecnica presso l'Aula Magna della <a class=\"comunicazione-link\" href=\"https://maps.app.goo.gl/UhSxmjzrpu6PEZtS6\" target=\"_blank\" rel=\"noopener noreferrer\">Scuola Secondaria M. Montessori in via Carreggia n°2, Cardano al Campo</a>. Sono invitati a partecipare le delegazioni e lo staff delle nazionali, i giudici e i membri di World Skate e Skate Italia.",
      en: "On Sunday 19 July at 4:00 p.m. a technical meeting will be held in the Aula Magna of the <a class=\"comunicazione-link\" href=\"https://maps.app.goo.gl/UhSxmjzrpu6PEZtS6\" target=\"_blank\" rel=\"noopener noreferrer\">M. Montessori Secondary School, via Carreggia no. 2, Cardano al Campo</a>. National delegations and staff, judges and members of World Skate and Skate Italia are invited to attend.",
      fr: "Le dimanche 19 juillet à 16h00 se tiendra une réunion technique dans l'Aula Magna de l'<a class=\"comunicazione-link\" href=\"https://maps.app.goo.gl/UhSxmjzrpu6PEZtS6\" target=\"_blank\" rel=\"noopener noreferrer\">école secondaire M. Montessori, via Carreggia n°2, Cardano al Campo</a>. Les délégations et le staff des équipes nationales, les juges et les membres de World Skate et Skate Italia sont invités à y participer.",
      de: "Am Sonntag, den 19. Juli, um 16:00 Uhr findet eine technische Besprechung in der Aula Magna der <a class=\"comunicazione-link\" href=\"https://maps.app.goo.gl/UhSxmjzrpu6PEZtS6\" target=\"_blank\" rel=\"noopener noreferrer\">Sekundarschule M. Montessori, via Carreggia Nr. 2, Cardano al Campo</a>, statt. Die Delegationen und das Personal der Nationalmannschaften, die Kampfrichter sowie die Mitglieder von World Skate und Skate Italia sind eingeladen teilzunehmen.",
      es: "El domingo 19 de julio a las 16:00 se celebrará una reunión técnica en el Aula Magna de la <a class=\"comunicazione-link\" href=\"https://maps.app.goo.gl/UhSxmjzrpu6PEZtS6\" target=\"_blank\" rel=\"noopener noreferrer\">Escuela Secundaria M. Montessori, via Carreggia n.º 2, Cardano al Campo</a>. Están invitados a participar las delegaciones y el personal de las selecciones nacionales, los jueces y los miembros de World Skate y Skate Italia.",
      pt: "No domingo, 19 de julho, às 16h00, realizar-se-á uma reunião técnica no Aula Magna da <a class=\"comunicazione-link\" href=\"https://maps.app.goo.gl/UhSxmjzrpu6PEZtS6\" target=\"_blank\" rel=\"noopener noreferrer\">Escola Secundária M. Montessori, via Carreggia n.º 2, Cardano al Campo</a>. Estão convidados a participar as delegações e o staff das seleções nacionais, os juízes e os membros da World Skate e da Skate Italia."
    }
  }
];
