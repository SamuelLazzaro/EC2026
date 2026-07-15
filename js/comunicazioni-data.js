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
  },
  {
    id: 'orario-prove-tecniche',
    level: 'urgent',
    title: {
      it: "Orario prove tecniche pista/strada",
      en: "Track/road technical practice schedule",
      fr: "Horaire des essais techniques piste/route",
      de: "Zeitplan der technischen Trainings Bahn/Straße",
      es: "Horario de las pruebas técnicas pista/ruta",
      pt: "Horário dos treinos técnicos pista/estrada"
    },
    body: {
      it: "Nella sezione Programma → {link} è disponibile l'orario delle prove tecniche dell'impianto per tutte le nazionali nelle giornate del 17, 18, 19 e 23 luglio.",
      en: "In the Programme section → {link} you can find the venue technical practice schedule for all national teams on 17, 18, 19 and 23 July.",
      fr: "Dans la section Programme → {link} vous trouverez l'horaire des essais techniques du site pour toutes les équipes nationales les 17, 18, 19 et 23 juillet.",
      de: "Im Bereich Programm → {link} finden Sie den Zeitplan der technischen Trainings der Anlage für alle Nationalmannschaften am 17., 18., 19. und 23. Juli.",
      es: "En la sección Programa → {link} está disponible el horario de las pruebas técnicas de la instalación para todas las selecciones nacionales los días 17, 18, 19 y 23 de julio.",
      pt: "Na secção Programa → {link} está disponível o horário dos treinos técnicos da instalação para todas as seleções nacionais nos dias 17, 18, 19 e 23 de julho."
    },
    link: {
      target: 'programmaCtaDetail',
      label: {
        it: "Vedi programma dettagliato",
        en: "View detailed schedule",
        fr: "Voir le programme détaillé",
        de: "Detailliertes Programm anzeigen",
        es: "Ver programa detallado",
        pt: "Ver programa detalhado"
      }
    }
  },
  {
    id: 'biglietti-omaggio-bambini',
    level: 'info',
    title: {
      it: "Biglietti omaggio per bambini fino a 6 anni",
      en: "Free tickets for children up to 6 years old",
      fr: "Billets gratuits pour les enfants jusqu'à 6 ans",
      de: "Gratis-Tickets für Kinder bis 6 Jahre",
      es: "Entradas gratuitas para niños hasta 6 años",
      pt: "Bilhetes gratuitos para crianças até 6 anos"
    },
    body: {
      it: "Sono disponibili sul sito i biglietti omaggio per bambini fino a 6 anni. Sarà necessario mostrare all'ingresso la carta d'identità del bambino.",
      en: "Free tickets for children up to 6 years old are available on the website. The child's identity document must be shown at the entrance.",
      fr: "Des billets gratuits pour les enfants jusqu'à 6 ans sont disponibles sur le site. La pièce d'identité de l'enfant devra être présentée à l'entrée.",
      de: "Auf der Website sind Gratis-Tickets für Kinder bis 6 Jahre erhältlich. Am Eingang ist der Ausweis des Kindes vorzuzeigen.",
      es: "En el sitio web están disponibles entradas gratuitas para niños hasta 6 años. En la entrada será necesario mostrar el documento de identidad del niño.",
      pt: "No site estão disponíveis bilhetes gratuitos para crianças até 6 anos. À entrada será necessário apresentar o documento de identidade da criança."
    }
  }
];
