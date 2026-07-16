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
    id: 'servizio-mensa-domani',
    level: 'urgent',
    title: {
      it: "Servizio mensa disponibile anche domani a pranzo",
      en: "Canteen service also available tomorrow at lunch",
      fr: "Service de restauration également disponible demain à midi",
      de: "Mensa-Service auch morgen mittags verfügbar",
      es: "Servicio de comedor también disponible mañana al mediodía",
      pt: "Serviço de cantina também disponível amanhã ao almoço"
    },
    body: {
      it: "Anche domani, giovedì 16 luglio, a pranzo sarà disponibile il servizio mensa presso l'impianto. A breve sarà possibile effettuare l'ordine tramite il link già inviato alle nazionali via email.",
      en: "Tomorrow, Thursday 16 July, the canteen service will also be available at the venue at lunchtime. It will soon be possible to place your order via the link already sent to the national teams by email.",
      fr: "Demain, jeudi 16 juillet, le service de restauration sera également disponible à midi sur le site. Il sera bientôt possible de passer commande via le lien déjà envoyé aux équipes nationales par e-mail.",
      de: "Auch morgen, Donnerstag, den 16. Juli, steht mittags der Mensa-Service an der Anlage zur Verfügung. In Kürze kann die Bestellung über den Link erfolgen, der den Nationalmannschaften bereits per E-Mail zugesandt wurde.",
      es: "También mañana, jueves 16 de julio, estará disponible el servicio de comedor en la instalación a la hora del almuerzo. En breve será posible realizar el pedido a través del enlace ya enviado a las selecciones nacionales por correo electrónico.",
      pt: "Também amanhã, quinta-feira, 16 de julho, ao almoço estará disponível o serviço de cantina na instalação. Em breve será possível efetuar o pedido através do link já enviado às seleções nacionais por e-mail."
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
