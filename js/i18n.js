/* ═══════════════════════════════════════════════════════════
   i18n – Sistema multilingue (IT · EN · FR · DE · ES · PT)
   ═══════════════════════════════════════════════════════════ */

const TRANSLATIONS = {

  /* ── ITALIANO ─────────────────────────────────────────── */
  it: {
    meta: {
      title: "Campionati Europei Pattinaggio Corsa a Rotelle 2026",
      desc:  "Campionati Europei di Pattinaggio Corsa a Rotelle 2026 – Cardano al Campo (VA), Italia, 19–26 luglio"
    },
    header: {
      title: "Campionati Europei Pattinaggio Corsa 2026",
      sub:   "19–26 luglio · Cardano al Campo, Italia"
    },
    nav: {
      home:        "Home",
      classifiche: "Classifiche",
      sponsor:     "Sponsor",
      alloggi:        "Alloggi",
      ristorazione:   "Ristorazione",
      luogo:       "Luogo",
      news:        "News",
      contatti:        "Contatti",
      diventa_sponsor: "Diventa Sponsor",
      footer:          "Cardano al Campo (VA), Italia · 19–26 luglio 2026"
    },
    footer: {
      rights: "© 2026 Campionati Europei Pattinaggio Corsa a Rotelle · Cardano al Campo (VA), Italia"
    },
    home: {
      badge:          "Cardano al Campo (VA), Italia",
      title1:         "CAMPIONATI",
      title2:         "EUROPEI",
      title3:         "PATTINAGGIO CORSA",
      date_label:     "Date",
      date_value:     "19–26 luglio 2026",
      loc_label:      "Luogo",
      loc_value:      "Cardano al Campo (VA)",
      country_label:  "Paese",
      country_value:  "Italia",
      disciplines:    "Pista &nbsp;&middot;&nbsp; Strada &nbsp;&middot;&nbsp; Maratona",
      cd_title:       "Conto alla rovescia",
      cd_days:        "Giorni",
      cd_hours:       "Ore",
      cd_min:         "Minuti",
      cd_sec:         "Secondi",
      stat_athletes:  "Atleti attesi",
      stat_nations:   "Nazioni",
      stat_disc:      "Discipline",
      stat_events:    "Gare in programma",
      organizer:      "La Cardano Skating S.r.l. SSD organizza dal 19 al 26 luglio 2026 i campionati europei di pattinaggio corsa a rotelle, con il Patrocinio del Comune di Cardano al Campo."
    },
    classifiche: {
      tag:            "Risultati",
      title:          "Classifiche",
      desc:           "Classifiche ufficiali delle competizioni su pista, strada e maratona.",
      tab_pista:      "Pista",
      tab_strada:     "Strada",
      tab_maratona:   "Maratona",
      col_pos:        "Pos",
      col_flag:       "🏳",
      col_athlete:    "Atleta",
      col_country:    "Nazione",
      col_time:       "Tempo / Punti",
      pista_500:      "500m",
      pista_1000:     "1000m",
      pista_5000:     "5000m Punti",
      strada_sprint:  "Sprint",
      strada_10:      "10 km",
      strada_20:      "20 km",
      maratona_42:    "Maratona 42 km",
      coming_soon:    "Risultati disponibili durante la manifestazione"
    },
    sponsor: {
      tag:    "Partner",
      title:  "I Nostri Sponsor",
      desc:   "Ringraziamo i partner che rendono possibile questa manifestazione.",
      main:   "Main Sponsor",
      other:  "Sponsor"
    },
    alloggi: {
      tag:       "Dove dormire",
      title:     "Alloggi Consigliati",
      desc:      "Strutture selezionate nelle vicinanze del centro sportivo.",
      filter_all: "Tutti",
      filter_hotel: "Hotel",
      filter_bb:    "B&B",
      filter_apt:   "Appartamenti",
      from:      "da",
      pernight:  "/ notte",
      dist:      "dal circuito",
      stars:     "stelle",
      note:      "Per prenotazioni e tariffe agevolate per atleti e delegazioni, contattare la segreteria organizzativa all'indirizzo <strong>info-2026european@cardanoskating.it</strong>"
    },
    ristorazione: {
      tag:               "Dove mangiare",
      title:             "Ristorazione",
      desc:              "Ristoranti, bar e pizzerie convenzionate.",
      filter_all:        "Tutti",
      filter_ristorante: "Ristorante",
      filter_bar:        "Bar",
      filter_pizzeria:   "Pizzeria"
    },
    luogo: {
      tag:            "Luogo",
      title:          "Luogo",
      desc:           "Cardano al Campo ospita i Campionati Europei di pattinaggio corsa a rotelle.",
      city:           "Cardano al Campo (VA), Italia",
      country:        "Varese · Lombardia · Italia",
      city_desc:      "Cardano al Campo è un comune della provincia di Varese, a pochi chilometri dall'aeroporto internazionale di Milano Malpensa, nominato Comune Europeo dello Sport 2023.",
      vd_track:       "Pista - Strada",
      vd_track_v:     "200m - 500m",
      vd_cap:         "Capienza",
      vd_cap_v:       "1.000 spettatori",
      vd_park:        "Parcheggio",
      vd_park_v:      "600 posti gratuiti",
      vd_wifi:        "Connettività",
      vd_wifi_v:      "Wi-Fi gratuito",
      vd_acc:         "Accessibilità",
      vd_acc_v:       "Pienamente accessibile",
      map_label:      "Mappa interattiva",
      map_sub:        "Cardano al Campo, Varese",
      map_open:       "Apri in Google Maps",
      transport_title: "Come arrivare",
      tr_fly:         "Aereo",
      tr_fly_d:       "Aeroporto Milano Malpensa (MXP) a 4 km.",
      tr_train:       "Treno",
      tr_train_d:     "Stazione FS di Gallarate (6 km). Collegamento diretto da Milano in 40 minuti.",
      tr_car:         "Auto",
      tr_car_d:       "Uscita A8 Gallarate/Busto Arsizio. Parcheggio gratuito disponibile in zona.",
      tr_bus:         "Bus navetta",
      tr_bus_d:       "Servizio navetta ufficiale dall'aeroporto di Malpensa e dal centro di Gallarate durante tutta la manifestazione.",
      map_consent:     "Per visualizzare la mappa è necessario accettare i cookie di terze parti (Google Maps).",
      map_consent_btn: "Accetta e mostra mappa"
    },
    news: {
      tag:      "Aggiornamenti",
      title:    "News",
      desc:     "Le ultime notizie dai Campionati Europei 2026.",
      readmore: "Leggi di più"
    },
    contatti: {
      tag:         "Informazioni",
      title:       "Contatti",
      desc:        "Per informazioni e richieste, contattaci via email, telefono o attraverso i nostri canali social.",
      email_label: "Email",
      phone_label: "Telefono"
    },
    cookie: {
      text:   "Questo sito utilizza cookie tecnici necessari e, nella sezione Luogo, Google Maps (cookie di terze parti). Puoi accettare tutti i cookie o solo quelli tecnici.",
      accept: "Accetta tutti",
      reject: "Solo tecnici",
      policy: "Privacy &amp; Cookie Policy",
      prefs:  "Gestisci preferenze cookie"
    },
    cookiepage: {
      back:      "← Torna al sito",
      tag:       "Informativa",
      date:      "Ultimo aggiornamento: marzo 2026",
      s1_title:  "1. Titolare del Trattamento",
      s1_p1:     "Il titolare del trattamento dei dati personali è la <strong>Cardano Skating S.R.L. S.S.D.</strong>, organizzatrice dei Campionati Europei di Pattinaggio Corsa a Rotelle 2026, con sede in Cardano al Campo (VA), Italia.",
      s1_p2:     "Per qualsiasi richiesta relativa alla privacy è possibile contattarci all'indirizzo: <a href=\"mailto:info-2026european@cardanoskating.it\">info-2026european@cardanoskating.it</a>",
      s2_title:  "2. Cosa sono i Cookie",
      s2_p1:     "I cookie sono piccoli file di testo salvati sul dispositivo dell'utente dal browser durante la navigazione. Questa informativa riguarda anche tecnologie analoghe come il <strong>localStorage</strong>, un'area di memoria del browser utilizzata da questo sito.",
      s3_title:  "3. Cookie Utilizzati da Questo Sito",
      s3_p1:     "Questo sito utilizza <strong>cookie tecnici strettamente necessari</strong> al suo corretto funzionamento e, previa accettazione, cookie di terze parti tramite il servizio Google Maps nella sezione <em>Luogo</em>.",
      s3_strong: "Cookie tecnici (sempre attivi)",
      s3_li1:    "Memorizza la lingua selezionata dall'utente (es. \"it\", \"en\"). Durata: permanente fino alla cancellazione manuale. Tipo: localStorage.",
      s3_li2:    "Registra l'avvenuta presa visione dell'informativa cookie. Durata: permanente fino alla cancellazione manuale. Tipo: localStorage.",
      s3_li3:    "Registra il consenso specifico al caricamento di Google Maps. Durata: permanente fino alla cancellazione manuale. Tipo: localStorage.",
      s3_p2:     "I dati tecnici non vengono mai trasmessi a server esterni e rimangono esclusivamente nel browser dell'utente.",
      s4_title:  "4. Servizi di Terze Parti",
      s4_p1:     "I font tipografici (Montserrat e Inter) utilizzati dal sito sono ospitati direttamente sui server del sito e non comportano alcuna trasmissione di dati a terze parti.",
      s4_p2:     "Le icone delle bandiere per la selezione della lingua sono anch'esse ospitate localmente e non richiedono il caricamento di risorse esterne.",
      s4_p3:     "La sezione <em>Luogo</em> utilizza <strong>Google Maps</strong> (Google LLC, USA) per visualizzare la mappa interattiva della sede dell'evento. Questo servizio viene caricato <strong>solo previo esplicito consenso</strong> dell'utente. Accettando, Google potrebbe impostare i seguenti cookie sul dispositivo dell'utente:",
      s4_li_nid: "Cookie di preferenza/personalizzazione Google. Durata: ~6 mesi. Dominio: .google.com.",
      s4_li_con: "Registra le scelte di consenso dell'utente per i servizi Google. Durata: variabile. Dominio: .google.com.",
      s4_p4:     "Per ulteriori informazioni su Google consultare la <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener noreferrer\">Privacy Policy di Google</a>.",
      s4_social: "Il sito include link ai canali social ufficiali dell'evento: <strong>Instagram</strong> (@cardano_skating) e <strong>Facebook</strong> (Cardano Skating), entrambi gestiti da <strong>Meta Platforms, Inc.</strong> (USA). Tali link sono semplici collegamenti di navigazione: nessun widget, pixel o script di Meta è incorporato nel sito. Cliccando questi link, l'utente accede ai rispettivi siti di Meta, soggetti alle loro politiche di privacy.",
      s4_li_ig:  "Collegamento alla pagina ufficiale su Instagram. Nessun contenuto incorporato nel sito. Dominio: instagram.com.",
      s4_li_fb:  "Collegamento alla pagina ufficiale su Facebook. Nessun contenuto incorporato nel sito. Dominio: facebook.com.",
      s4_social_p2: "Per informazioni sul trattamento dei dati da parte di Meta Platforms, Inc., consultare la <a href=\"https://www.facebook.com/privacy/policy/\" target=\"_blank\" rel=\"noopener noreferrer\">Informativa sulla privacy di Meta</a>.",
      s4_hosting:    "Il sito è ospitato tramite <strong>GitHub Pages</strong> (GitHub, Inc. / Microsoft Corporation, USA). Come parte dell'infrastruttura di distribuzione dei contenuti, GitHub Pages si avvale di <strong>Fastly CDN</strong> (Fastly, Inc., USA). Questi servizi elaborano automaticamente dati tecnici degli utenti nell'ambito della normale erogazione del servizio:",
      s4_li_github:  "Hosting e distribuzione di tutti i contenuti statici del sito. Raccoglie log tecnici (IP, user-agent, URL richiesti, timestamp). Dominio: pages.github.com / github.io.",
      s4_li_fastly:  "Rete di distribuzione dei contenuti (CDN) di GitHub Pages. Elabora gli stessi dati tecnici nel percorso di rete. Dominio: fastly.com.",
      s4_hosting_p2: "Per ulteriori informazioni consultare la <a href=\"https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement\" target=\"_blank\" rel=\"noopener noreferrer\">Privacy Policy di GitHub</a> e la <a href=\"https://www.fastly.com/privacy/\" target=\"_blank\" rel=\"noopener noreferrer\">Privacy Policy di Fastly</a>.",
      s5_title:  "5. Trasferimento dei Dati Extra-UE",
      s5_p1:     "Il servizio di terze parti utilizzato da questo sito (Google Maps) può trasferire i dati dell'utente (in particolare l'indirizzo IP) al di fuori dello Spazio Economico Europeo, in particolare negli <strong>Stati Uniti</strong>.",
      s5_p2:     "Tali trasferimenti avvengono nel rispetto delle garanzie previste dal GDPR (art. 46), in particolare attraverso le <strong>Clausole Contrattuali Standard</strong> (Standard Contractual Clauses) approvate dalla Commissione Europea e/o, per Google LLC, nell'ambito del <strong>Data Privacy Framework UE–USA</strong> (decisione di adeguatezza del 10 luglio 2023).",
      s5_p3:     "Anche <strong>GitHub Pages</strong> e <strong>Fastly CDN</strong> possono trasferire dati tecnici (log di accesso) negli <strong>Stati Uniti</strong> e in altri paesi. GitHub, Inc. è certificata nell'ambito del <strong>Data Privacy Framework UE–USA</strong>. Fastly, Inc. adotta le <strong>Clausole Contrattuali Standard</strong> per i trasferimenti extra-SEE.",
      s6_title:  "6. Dati Raccolti Direttamente dal Sito",
      s6_p1:     "Questo sito <strong>non raccoglie direttamente alcun dato personale</strong> degli utenti. Non sono presenti moduli di contatto, registrazioni, iscrizioni a newsletter o qualsiasi altro meccanismo che comporti l'invio di dati personali ai server del titolare.",
      s6_p2:     "I recapiti (email, telefono) presenti nella sezione <em>Contatti</em> sono forniti a titolo informativo. Qualsiasi comunicazione avviata dall'utente tramite tali canali è gestita al di fuori di questo sito web e soggetta alle politiche privacy del servizio di posta o telefonia utilizzato dall'utente.",
      s6_p3:     "Il sito è ospitato su <strong>GitHub Pages</strong>, che insieme alla CDN <strong>Fastly</strong> raccoglie automaticamente dati tecnici di accesso (indirizzo IP, tipo di browser, pagine visitate, timestamp) nell'ambito del normale funzionamento del servizio di hosting. Tali dati sono gestiti da GitHub/Fastly secondo le rispettive privacy policy e conservati per il periodo previsto dai rispettivi provider (GitHub: fino a 30 giorni; Fastly: secondo le proprie policy operative).",
      s7_title:  "7. Base Giuridica del Trattamento",
      s7_p1:     "Il trattamento dei dati tramite <strong>cookie tecnici</strong> è effettuato sulla base del <strong>legittimo interesse</strong> del titolare (art. 6, par. 1, lett. f del GDPR) e della <strong>necessità contrattuale</strong> di fornire il servizio richiesto dall'utente (art. 6, par. 1, lett. b del GDPR), poiché tali cookie sono indispensabili per il funzionamento del sito.",
      s7_p2:     "Il trattamento dei dati tramite <strong>Google Maps</strong> è effettuato sulla base del <strong>consenso esplicito</strong> dell'utente (art. 6, par. 1, lett. a del GDPR), espresso attraverso l'apposito pulsante nel banner cookie o direttamente nella sezione <em>Luogo</em>. Il consenso può essere revocato in qualsiasi momento cancellando i dati di navigazione del browser (localStorage).",
      s8_title:  "8. Come Disabilitare i Cookie",
      s8_p1:     "L'utente può eliminare i dati salvati in localStorage in qualsiasi momento tramite le impostazioni del proprio browser (Strumenti sviluppatore › Application › Local Storage) oppure cancellando la cronologia e i dati di navigazione.",
      s8_p2:     "Si noti che la disabilitazione potrebbe compromettere alcune funzionalità del sito (es. memorizzazione della lingua selezionata).",
      s9_title:  "9. Diritti dell'Interessato",
      s9_intro:  "Ai sensi degli artt. 15–22 del GDPR (Reg. UE 2016/679) e del D.Lgs. 196/2003 (come modificato dal D.Lgs. 101/2018), l'utente ha il diritto di:",
      s9_access: "Ottenere conferma del trattamento e copia dei dati.",
      s9_rect:   "Richiedere la correzione di dati inesatti.",
      s9_del:    "Richiedere la cancellazione dei dati (\"diritto all'oblio\").",
      s9_limit:  "Richiedere la limitazione del trattamento.",
      s9_obj:    "Opporsi al trattamento in qualsiasi momento.",
      s9_port:   "Ricevere i dati in formato strutturato e leggibile.",
      s9_comp:   "Proporre reclamo al Garante per la Protezione dei Dati Personali (<a href=\"https://www.garanteprivacy.it\" target=\"_blank\" rel=\"noopener noreferrer\">www.garanteprivacy.it</a>).",
      s9_p2:     "Per esercitare i propri diritti contattare: <a href=\"mailto:info-2026european@cardanoskating.it\">info-2026european@cardanoskating.it</a>",
      s10_title: "10. Modifiche alla Policy",
      s10_p1:    "Il titolare si riserva il diritto di aggiornare la presente informativa in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con indicazione della data di aggiornamento. Si invita a consultare periodicamente questa pagina."
    }
  },

  /* ── ENGLISH ──────────────────────────────────────────── */
  en: {
    meta: {
      title: "European Inline Speed Skating Championships 2026",
      desc:  "European Inline Speed Skating Championships 2026 – Cardano al Campo (VA), Italy, 19–26 July"
    },
    header: {
      title: "European Inline Speed Skating Championships 2026",
      sub:   "July 19–26 · Cardano al Campo, Italy"
    },
    nav: {
      home:        "Home",
      classifiche: "Rankings",
      sponsor:     "Sponsors",
      alloggi:        "Accommodation",
      ristorazione:   "Food & Beverage",
      luogo:       "Venue",
      news:        "News",
      contatti:        "Contacts",
      diventa_sponsor: "Diventa Sponsor",
      footer:          "Cardano al Campo (VA), Italy · 19–26 July 2026"
    },
    footer: {
      rights: "© 2026 European Inline Speed Skating Championships · Cardano al Campo (VA), Italy"
    },
    home: {
      badge:          "Cardano al Campo (VA), Italy",
      title1:         "EUROPEAN",
      title2:         "CHAMPIONSHIPS",
      title3:         "INLINE SPEED SKATING",
      date_label:     "Dates",
      date_value:     "19–26 July 2026",
      loc_label:      "Luogo",
      loc_value:      "Cardano al Campo (VA)",
      country_label:  "Country",
      country_value:  "Italy",
      disciplines:    "Track &nbsp;&middot;&nbsp; Road &nbsp;&middot;&nbsp; Marathon",
      cd_title:       "Countdown to the event",
      cd_days:        "Days",
      cd_hours:       "Hours",
      cd_min:         "Minutes",
      cd_sec:         "Seconds",
      stat_athletes:  "Expected athletes",
      stat_nations:   "Nations",
      stat_disc:      "Disciplines",
      stat_events:    "Scheduled events",
      organizer:      "Cardano Skating S.r.l. SSD organises the European Inline Speed Skating Championships from 19 to 26 July 2026, under the patronage of the Municipality of Cardano al Campo."
    },
    classifiche: {
      tag:            "Results",
      title:          "Rankings",
      desc:           "Official results for track, road and marathon competitions.",
      tab_pista:      "Track",
      tab_strada:     "Road",
      tab_maratona:   "Marathon",
      col_pos:        "Pos",
      col_flag:       "🏳",
      col_athlete:    "Athlete",
      col_country:    "Country",
      col_time:       "Time / Points",
      pista_500:      "500m",
      pista_1000:     "1000m",
      pista_5000:     "5000m Points",
      strada_sprint:  "Sprint",
      strada_10:      "10 km",
      strada_20:      "20 km",
      maratona_42:    "Marathon 42 km",
      coming_soon:    "Results available during the event"
    },
    sponsor: {
      tag:    "Partners",
      title:  "Our Sponsors",
      desc:   "We thank our partners who make this event possible.",
      main:   "Main Sponsor",
      other:  "Sponsors"
    },
    alloggi: {
      tag:          "Where to stay",
      title:        "Recommended Accommodation",
      desc:         "Selected facilities near the sports centre.",
      filter_all:   "All",
      filter_hotel: "Hotels",
      filter_bb:    "B&B",
      filter_apt:   "Apartments",
      from:         "from",
      pernight:     "/ night",
      dist:         "from the circuit",
      stars:        "stars",
      note:         "For bookings and special rates for athletes and delegations, contact the organising secretariat at <strong>info-2026european@cardanoskating.it</strong>"
    },
    ristorazione: {
      tag:               "Where to eat",
      title:             "Food & Beverage",
      desc:              "Affiliated restaurants, bars and pizzerias.",
      filter_all:        "All",
      filter_ristorante: "Restaurant",
      filter_bar:        "Bar",
      filter_pizzeria:   "Pizzeria"
    },
    luogo: {
      tag:            "Venue",
      title:          "Venue",
      desc:           "Cardano al Campo hosts the European Inline Speed Skating Championships.",
      city:           "Cardano al Campo (VA), Italy",
      country:        "Varese · Lombardy · Italy",
      city_desc:      "Cardano al Campo is a municipality in the province of Varese, a few kilometres from Milan Malpensa International Airport, named European Town of Sport 2023.",
      vd_track:       "Track - Road",
      vd_track_v:     "200m - 500m",
      vd_cap:         "Capacity",
      vd_cap_v:       "1,000 spectators",
      vd_park:        "Parking",
      vd_park_v:      "600 free spaces",
      vd_wifi:        "Connectivity",
      vd_wifi_v:      "Free Wi-Fi",
      vd_acc:         "Accessibility",
      vd_acc_v:       "Fully accessible",
      map_label:      "Interactive map",
      map_sub:        "Cardano al Campo, Varese",
      map_open:       "Open in Google Maps",
      transport_title: "How to get there",
      tr_fly:         "By plane",
      tr_fly_d:       "Milan Malpensa Airport (MXP) 4 km away.",
      tr_train:       "By train",
      tr_train_d:     "Gallarate railway station (6 km). Direct connection from Milan in 40 minutes.",
      tr_car:         "By car",
      tr_car_d:       "Exit A8 Gallarate/Busto Arsizio. Free parking available in the area.",
      tr_bus:         "Shuttle bus",
      tr_bus_d:       "Official shuttle service from Malpensa Airport and Gallarate city centre throughout the event.",
      map_consent:     "To view the map you need to accept third-party cookies (Google Maps).",
      map_consent_btn: "Accept and show map"
    },
    news: {
      tag:      "Updates",
      title:    "News",
      desc:     "The latest news from the 2026 European Championships.",
      readmore: "Read more"
    },
    contatti: {
      tag:         "Information",
      title:       "Contacts",
      desc:        "For information and enquiries, contact us by email, phone or through our social channels.",
      email_label: "Email",
      phone_label: "Phone"
    },
    cookie: {
      text:   "This website uses necessary technical cookies and, in the Venue section, Google Maps (third-party cookies). You can accept all cookies or only technical ones.",
      accept: "Accept all",
      reject: "Technical only",
      policy: "Privacy &amp; Cookie Policy",
      prefs:  "Manage cookie preferences"
    },
    cookiepage: {
      back:      "← Back to site",
      tag:       "Policy",
      date:      "Last updated: March 2026",
      s1_title:  "1. Data Controller",
      s1_p1:     "The data controller is <strong>Cardano Skating S.R.L. S.S.D.</strong>, organiser of the 2026 European Inline Speed Skating Championships, based in Cardano al Campo (VA), Italy.",
      s1_p2:     "For any privacy-related enquiry, please contact us at: <a href=\"mailto:info-2026european@cardanoskating.it\">info-2026european@cardanoskating.it</a>",
      s2_title:  "2. What Are Cookies",
      s2_p1:     "Cookies are small text files stored on the user's device by the browser during navigation. This policy also covers similar technologies such as <strong>localStorage</strong>, a browser storage area used by this site.",
      s3_title:  "3. Cookies Used by This Site",
      s3_p1:     "This site uses <strong>strictly necessary technical cookies</strong> for its correct functioning and, upon acceptance, third-party cookies through the Google Maps service in the <em>Venue</em> section.",
      s3_strong: "Technical cookies (always active)",
      s3_li1:    "Stores the language selected by the user (e.g. \"it\", \"en\"). Duration: permanent until manually deleted. Type: localStorage.",
      s3_li2:    "Records acknowledgment of the cookie notice. Duration: permanent until manually deleted. Type: localStorage.",
      s3_li3:    "Records specific consent for loading Google Maps. Duration: permanent until manually deleted. Type: localStorage.",
      s3_p2:     "Technical data is never transmitted to external servers and remains exclusively in the user's browser.",
      s4_title:  "4. Third-Party Services",
      s4_p1:     "The typographic fonts (Montserrat and Inter) used by the site are hosted directly on the site's servers and do not involve any transmission of data to third parties.",
      s4_p2:     "The flag icons for language selection are also hosted locally and do not require the loading of external resources.",
      s4_p3:     "The <em>Venue</em> section uses <strong>Google Maps</strong> (Google LLC, USA) to display an interactive map of the event venue. This service is loaded <strong>only upon the user's explicit consent</strong>. By accepting, Google may set the following cookies on the user's device:",
      s4_li_nid: "Google preference/personalisation cookie. Duration: ~6 months. Domain: .google.com.",
      s4_li_con: "Records user consent choices for Google services. Duration: variable. Domain: .google.com.",
      s4_p4:     "For more information about Google, see the <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener noreferrer\">Google Privacy Policy</a>.",
      s4_social: "The site includes links to the event's official social media channels: <strong>Instagram</strong> (@cardano_skating) and <strong>Facebook</strong> (Cardano Skating), both managed by <strong>Meta Platforms, Inc.</strong> (USA). These are simple navigation links: no Meta widgets, pixels, or scripts are embedded in the site. By clicking these links, users are directed to Meta's websites, which are subject to their own privacy policies.",
      s4_li_ig:  "Link to the official event page on Instagram. No embedded content on this site. Domain: instagram.com.",
      s4_li_fb:  "Link to the official event page on Facebook. No embedded content on this site. Domain: facebook.com.",
      s4_social_p2: "For information on how Meta Platforms, Inc. processes data, please refer to the <a href=\"https://www.facebook.com/privacy/policy/\" target=\"_blank\" rel=\"noopener noreferrer\">Meta Privacy Policy</a>.",
      s4_hosting:    "This website is hosted via <strong>GitHub Pages</strong> (GitHub, Inc. / Microsoft Corporation, USA). As part of its content delivery infrastructure, GitHub Pages relies on <strong>Fastly CDN</strong> (Fastly, Inc., USA). These services automatically process users' technical data as part of normal service delivery:",
      s4_li_github:  "Hosting and distribution of all static website content. Collects technical logs (IP address, user-agent, requested URLs, timestamps). Domain: pages.github.com / github.io.",
      s4_li_fastly:  "Content Delivery Network (CDN) used by GitHub Pages. Processes the same technical data along the network path. Domain: fastly.com.",
      s4_hosting_p2: "For more information, please see <a href=\"https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub's Privacy Policy</a> and <a href=\"https://www.fastly.com/privacy/\" target=\"_blank\" rel=\"noopener noreferrer\">Fastly's Privacy Policy</a>.",
      s5_title:  "5. Transfer of Data Outside the EU",
      s5_p1:     "The third-party service used by this site (Google Maps) may transfer user data (in particular the IP address) outside the European Economic Area, specifically to the <strong>United States</strong>.",
      s5_p2:     "Such transfers are carried out in compliance with the safeguards provided by the GDPR (Art. 46), in particular through the <strong>Standard Contractual Clauses</strong> approved by the European Commission and/or, for Google LLC, under the <strong>EU–US Data Privacy Framework</strong> (adequacy decision of 10 July 2023).",
      s5_p3:     "<strong>GitHub Pages</strong> and <strong>Fastly CDN</strong> may also transfer technical data (access logs) to the <strong>United States</strong> and other countries. GitHub, Inc. is certified under the <strong>EU–US Data Privacy Framework</strong>. Fastly, Inc. relies on <strong>Standard Contractual Clauses</strong> for transfers outside the EEA.",
      s6_title:  "6. Data Collected Directly by the Site",
      s6_p1:     "This site <strong>does not directly collect any personal data</strong> from users. There are no contact forms, registrations, newsletter sign-ups, or any other mechanism that involves sending personal data to the controller's servers.",
      s6_p2:     "The contact details (email, phone) in the <em>Contacts</em> section are provided for information purposes only. Any communication initiated by the user through these channels is handled outside this website and subject to the privacy policies of the mail or telephone service used by the user.",
      s6_p3:     "This website is hosted on <strong>GitHub Pages</strong>, which, together with the <strong>Fastly</strong> CDN, automatically collects technical access data (IP address, browser type, pages visited, timestamps) as part of the normal hosting service. This data is managed by GitHub/Fastly under their respective privacy policies and retained for the period specified by each provider (GitHub: up to 30 days; Fastly: as per their operational policies).",
      s7_title:  "7. Legal Basis for Processing",
      s7_p1:     "The processing of data through <strong>technical cookies</strong> is based on the <strong>legitimate interest</strong> of the controller (Art. 6(1)(f) GDPR) and the <strong>contractual necessity</strong> of providing the service requested by the user (Art. 6(1)(b) GDPR), as such cookies are essential for the site to function.",
      s7_p2:     "The processing of data through <strong>Google Maps</strong> is based on the <strong>explicit consent</strong> of the user (Art. 6(1)(a) GDPR), expressed via the relevant button in the cookie banner or directly in the <em>Venue</em> section. Consent may be withdrawn at any time by clearing browser storage (localStorage).",
      s8_title:  "8. How to Disable Cookies",
      s8_p1:     "Users can delete data stored in localStorage at any time via their browser settings (Developer Tools › Application › Local Storage) or by clearing browsing history and data.",
      s8_p2:     "Please note that disabling storage may impair some site features (e.g. remembering the selected language).",
      s9_title:  "9. Data Subject Rights",
      s9_intro:  "Under Arts. 15–22 of the GDPR (EU Reg. 2016/679) and Legislative Decree 196/2003 (as amended by Legislative Decree 101/2018), users have the right to:",
      s9_access: "Obtain confirmation of processing and a copy of the data.",
      s9_rect:   "Request the correction of inaccurate data.",
      s9_del:    "Request the deletion of data (\"right to be forgotten\").",
      s9_limit:  "Request the restriction of processing.",
      s9_obj:    "Object to processing at any time.",
      s9_port:   "Receive data in a structured, machine-readable format.",
      s9_comp:   "Lodge a complaint with the Italian Data Protection Authority (<a href=\"https://www.garanteprivacy.it\" target=\"_blank\" rel=\"noopener noreferrer\">www.garanteprivacy.it</a>).",
      s9_p2:     "To exercise your rights, contact: <a href=\"mailto:info-2026european@cardanoskating.it\">info-2026european@cardanoskating.it</a>",
      s10_title: "10. Changes to This Policy",
      s10_p1:    "The data controller reserves the right to update this policy at any time. Changes will be published on this page with an updated date. Users are encouraged to check this page periodically."
    }
  },

  /* ── FRANÇAIS ─────────────────────────────────────────── */
  fr: {
    meta: {
      title: "Championnats d'Europe de Patinage de Vitesse en Ligne 2026",
      desc:  "Championnats d'Europe de Patinage de Vitesse en Ligne 2026 – Cardano al Campo (VA), Italie, 20–26 Juillet"
    },
    header: {
      title: "Championnats d'Europe de Patinage en Ligne 2026",
      sub:   "19–26 Juillet · Cardano al Campo, Italie"
    },
    nav: {
      home:        "Accueil",
      classifiche: "Classements",
      sponsor:     "Sponsors",
      alloggi:        "Hébergements",
      ristorazione:   "Restauration",
      luogo:       "Lieu",
      news:        "Actualités",
      contatti:        "Contacts",
      diventa_sponsor: "Diventa Sponsor",
      footer:          "Cardano al Campo (VA), Italie · 20–26 juillet 2026"
    },
    footer: {
      rights: "© 2026 Championnats d'Europe de Patinage de Vitesse en Ligne · Cardano al Campo (VA), Italie"
    },
    home: {
      badge:          "Cardano al Campo (VA), Italie",
      title1:         "CHAMPIONNATS",
      title2:         "D'EUROPE",
      title3:         "PATINAGE EN LIGNE",
      date_label:     "Dates",
      date_value:     "20–26 Juillet 2026",
      loc_label:      "Lieu",
      loc_value:      "Cardano al Campo (VA)",
      country_label:  "Pays",
      country_value:  "Italie",
      disciplines:    "Piste &nbsp;&middot;&nbsp; Route &nbsp;&middot;&nbsp; Marathon",
      cd_title:       "Compte à rebours",
      cd_days:        "Jours",
      cd_hours:       "Heures",
      cd_min:         "Minutes",
      cd_sec:         "Secondes",
      stat_athletes:  "Athlètes attendus",
      stat_nations:   "Nations",
      stat_disc:      "Disciplines",
      stat_events:    "Épreuves prévues",
      organizer:      "La Cardano Skating S.r.l. SSD organise du 19 au 26 juillet 2026 les championnats d'Europe de patinage de vitesse en ligne, avec le patronage de la Commune de Cardano al Campo."
    },
    classifiche: {
      tag:            "Résultats",
      title:          "Classements",
      desc:           "Résultats officiels des compétitions sur piste, route et marathon.",
      tab_pista:      "Piste",
      tab_strada:     "Route",
      tab_maratona:   "Marathon",
      col_pos:        "Pos",
      col_flag:       "🏳",
      col_athlete:    "Athlète",
      col_country:    "Pays",
      col_time:       "Temps / Points",
      pista_500:      "500m",
      pista_1000:     "1000m",
      pista_5000:     "5000m Points",
      strada_sprint:  "Sprint",
      strada_10:      "10 km",
      strada_20:      "20 km",
      maratona_42:    "Marathon 42 km",
      coming_soon:    "Résultats disponibles pendant l'événement"
    },
    sponsor: {
      tag:    "Partenaires",
      title:  "Nos Sponsors",
      desc:   "Nous remercions nos partenaires qui rendent cet événement possible.",
      main:   "Sponsor Principal",
      other:  "Sponsors"
    },
    alloggi: {
      tag:          "Où séjourner",
      title:        "Hébergements Recommandés",
      desc:         "Structures sélectionnées à proximité du centre sportif.",
      filter_all:   "Tous",
      filter_hotel: "Hôtels",
      filter_bb:    "B&B",
      filter_apt:   "Appartements",
      from:         "à partir de",
      pernight:     "/ nuit",
      dist:         "du circuit",
      stars:        "étoiles",
      note:         "Pour les réservations et tarifs préférentiels pour les athlètes et délégations, contactez le secrétariat d'organisation : <strong>info-2026european@cardanoskating.it</strong>"
    },
    ristorazione: {
      tag:               "Où manger",
      title:             "Restauration",
      desc:              "Restaurants, bars et pizzerias conventionnés.",
      filter_all:        "Tous",
      filter_ristorante: "Restaurant",
      filter_bar:        "Bar",
      filter_pizzeria:   "Pizzeria"
    },
    luogo: {
      tag:            "Site",
      title:          "Le Lieu",
      desc:           "Cardano al Campo accueille les Championnats d'Europe de Patinage de Vitesse en Ligne.",
      city:           "Cardano al Campo (VA), Italie",
      country:        "Varese · Lombardie · Italie",
      city_desc:      "Cardano al Campo est une commune de la province de Varese, à quelques kilomètres de l'aéroport international de Milan Malpensa, nommée Commune Européenne du Sport 2023.",
      vd_track:       "Piste - Route",
      vd_track_v:     "200m - 500m",
      vd_cap:         "Capacité",
      vd_cap_v:       "1 000 spectateurs",
      vd_park:        "Parking",
      vd_park_v:      "600 places gratuites",
      vd_wifi:        "Connectivité",
      vd_wifi_v:      "Wi-Fi gratuit",
      vd_acc:         "Accessibilité",
      vd_acc_v:       "Entièrement accessible",
      map_label:      "Carte interactive",
      map_sub:        "Cardano al Campo, Varese",
      map_open:       "Ouvrir dans Google Maps",
      transport_title: "Comment s'y rendre",
      tr_fly:         "Avion",
      tr_fly_d:       "Aéroport de Milan Malpensa (MXP) à 4 km.",
      tr_train:       "Train",
      tr_train_d:     "Gare de Gallarate (6 km). Connexion directe depuis Milan en 40 minutes.",
      tr_car:         "Voiture",
      tr_car_d:       "Sortie A8 Gallarate/Busto Arsizio. Parking gratuit disponible dans la zone.",
      tr_bus:         "Navette",
      tr_bus_d:       "Service de navette officielle depuis l'aéroport de Malpensa et le centre de Gallarate pendant toute la manifestation.",
      map_consent:     "Pour afficher la carte, vous devez accepter les cookies tiers (Google Maps).",
      map_consent_btn: "Accepter et afficher la carte"
    },
    news: {
      tag:      "Actualités",
      title:    "Actualités",
      desc:     "Les dernières nouvelles des Championnats d'Europe 2026.",
      readmore: "Lire la suite"
    },
    contatti: {
      tag:         "Informations",
      title:       "Contacts",
      desc:        "Pour toute information ou demande, contactez-nous par email, téléphone ou via nos réseaux sociaux.",
      email_label: "Email",
      phone_label: "Téléphone"
    },
    cookie: {
      text:   "Ce site utilise des cookies techniques nécessaires et, dans la section Lieu, Google Maps (cookies tiers). Vous pouvez accepter tous les cookies ou seulement les techniques.",
      accept: "Tout accepter",
      reject: "Techniques uniquement",
      policy: "Privacy &amp; Cookie Policy",
      prefs:  "Gérer les préférences cookies"
    },
    cookiepage: {
      back:      "← Retour au site",
      tag:       "Politique",
      date:      "Dernière mise à jour : mars 2026",
      s1_title:  "1. Responsable du Traitement",
      s1_p1:     "Le responsable du traitement des données personnelles est <strong>Cardano Skating S.R.L. S.S.D.</strong>, organisateur des Championnats d'Europe de Patinage de Vitesse en Ligne 2026, dont le siège est à Cardano al Campo (VA), Italie.",
      s1_p2:     "Pour toute question relative à la vie privée, veuillez nous contacter à : <a href=\"mailto:info-2026european@cardanoskating.it\">info-2026european@cardanoskating.it</a>",
      s2_title:  "2. Que sont les Cookies",
      s2_p1:     "Les cookies sont de petits fichiers texte enregistrés sur l'appareil de l'utilisateur par le navigateur lors de la navigation. Cette politique couvre également des technologies similaires telles que le <strong>localStorage</strong>, une zone de stockage du navigateur utilisée par ce site.",
      s3_title:  "3. Cookies Utilisés par ce Site",
      s3_p1:     "Ce site utilise des <strong>cookies techniques strictement nécessaires</strong> à son bon fonctionnement et, après acceptation, des cookies tiers via le service Google Maps dans la section <em>Lieu</em>.",
      s3_strong: "Cookies techniques (toujours actifs)",
      s3_li1:    "Mémorise la langue sélectionnée par l'utilisateur (ex. « it », « en »). Durée : permanente jusqu'à suppression manuelle. Type : localStorage.",
      s3_li2:    "Enregistre la prise de connaissance de l'avis cookie. Durée : permanente jusqu'à suppression manuelle. Type : localStorage.",
      s3_li3:    "Enregistre le consentement spécifique au chargement de Google Maps. Durée : permanente jusqu'à suppression manuelle. Type : localStorage.",
      s3_p2:     "Les données techniques ne sont jamais transmises à des serveurs externes et restent exclusivement dans le navigateur de l'utilisateur.",
      s4_title:  "4. Services Tiers",
      s4_p1:     "Les polices typographiques (Montserrat et Inter) utilisées par le site sont hébergées directement sur les serveurs du site et n'impliquent aucune transmission de données à des tiers.",
      s4_p2:     "Les icônes de drapeaux pour la sélection de la langue sont également hébergées localement et ne nécessitent pas le chargement de ressources externes.",
      s4_p3:     "La section <em>Lieu</em> utilise <strong>Google Maps</strong> (Google LLC, USA) pour afficher une carte interactive du lieu de l'événement. Ce service n'est chargé <strong>qu'après le consentement explicite de l'utilisateur</strong>. En acceptant, Google peut installer les cookies suivants sur l'appareil de l'utilisateur :",
      s4_li_nid: "Cookie de préférence/personnalisation Google. Durée : ~6 mois. Domaine : .google.com.",
      s4_li_con: "Enregistre les choix de consentement de l'utilisateur pour les services Google. Durée : variable. Domaine : .google.com.",
      s4_p4:     "Pour plus d'informations sur Google, consultez la <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener noreferrer\">Politique de confidentialité de Google</a>.",
      s4_social: "Le site inclut des liens vers les canaux sociaux officiels de l'événement : <strong>Instagram</strong> (@cardano_skating) et <strong>Facebook</strong> (Cardano Skating), tous deux gérés par <strong>Meta Platforms, Inc.</strong> (USA). Ces liens sont de simples liens de navigation : aucun widget, pixel ou script de Meta n'est intégré dans le site. En cliquant sur ces liens, l'utilisateur est redirigé vers les sites respectifs de Meta, soumis à leurs propres politiques de confidentialité.",
      s4_li_ig:  "Lien vers la page officielle de l'événement sur Instagram. Aucun contenu intégré sur ce site. Domaine : instagram.com.",
      s4_li_fb:  "Lien vers la page officielle de l'événement sur Facebook. Aucun contenu intégré sur ce site. Domaine : facebook.com.",
      s4_social_p2: "Pour plus d'informations sur le traitement des données par Meta Platforms, Inc., consultez la <a href=\"https://www.facebook.com/privacy/policy/\" target=\"_blank\" rel=\"noopener noreferrer\">Politique de confidentialité de Meta</a>.",
      s4_hosting:    "Ce site est hébergé via <strong>GitHub Pages</strong> (GitHub, Inc. / Microsoft Corporation, États-Unis). Dans le cadre de son infrastructure de distribution de contenu, GitHub Pages s'appuie sur <strong>Fastly CDN</strong> (Fastly, Inc., États-Unis). Ces services traitent automatiquement les données techniques des utilisateurs dans le cadre du fonctionnement normal du service :",
      s4_li_github:  "Hébergement et distribution de l'ensemble du contenu statique du site. Collecte des journaux techniques (adresse IP, user-agent, URL demandées, horodatages). Domaine : pages.github.com / github.io.",
      s4_li_fastly:  "Réseau de distribution de contenu (CDN) utilisé par GitHub Pages. Traite les mêmes données techniques sur le chemin réseau. Domaine : fastly.com.",
      s4_hosting_p2: "Pour plus d'informations, consultez la <a href=\"https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement\" target=\"_blank\" rel=\"noopener noreferrer\">Politique de confidentialité de GitHub</a> et la <a href=\"https://www.fastly.com/privacy/\" target=\"_blank\" rel=\"noopener noreferrer\">Politique de confidentialité de Fastly</a>.",
      s5_title:  "5. Transfert de Données hors de l'UE",
      s5_p1:     "Le service tiers utilisé par ce site (Google Maps) peut transférer les données de l'utilisateur (notamment l'adresse IP) en dehors de l'Espace économique européen, et plus particulièrement aux <strong>États-Unis</strong>.",
      s5_p2:     "Ces transferts sont effectués dans le respect des garanties prévues par le RGPD (art. 46), notamment par les <strong>Clauses Contractuelles Types</strong> approuvées par la Commission européenne et/ou, pour Google LLC, dans le cadre du <strong>Cadre de Protection des Données UE–États-Unis</strong> (décision d'adéquation du 10 juillet 2023).",
      s5_p3:     "<strong>GitHub Pages</strong> et <strong>Fastly CDN</strong> peuvent également transférer des données techniques (journaux d'accès) vers les <strong>États-Unis</strong> et d'autres pays. GitHub, Inc. est certifiée dans le cadre du <strong>Cadre de protection des données UE–États-Unis</strong>. Fastly, Inc. s'appuie sur les <strong>Clauses Contractuelles Types</strong> pour les transferts hors EEE.",
      s6_title:  "6. Données Collectées Directement par le Site",
      s6_p1:     "Ce site <strong>ne collecte directement aucune donnée personnelle</strong> des utilisateurs. Il n'y a pas de formulaires de contact, d'inscriptions, d'abonnements à des newsletters ou tout autre mécanisme impliquant l'envoi de données personnelles aux serveurs du responsable du traitement.",
      s6_p2:     "Les coordonnées (e-mail, téléphone) présentes dans la section <em>Contacts</em> sont fournies à titre informatif. Toute communication initiée par l'utilisateur via ces canaux est gérée en dehors de ce site et soumise aux politiques de confidentialité du service de messagerie ou de téléphonie utilisé par l'utilisateur.",
      s6_p3:     "Ce site est hébergé sur <strong>GitHub Pages</strong>, qui, conjointement avec le CDN <strong>Fastly</strong>, collecte automatiquement des données techniques d'accès (adresse IP, type de navigateur, pages visitées, horodatages) dans le cadre du fonctionnement normal du service d'hébergement. Ces données sont gérées par GitHub/Fastly conformément à leurs politiques de confidentialité respectives et conservées pour la durée prévue par chaque fournisseur (GitHub : jusqu'à 30 jours ; Fastly : selon leurs politiques opérationnelles).",
      s7_title:  "7. Base Juridique du Traitement",
      s7_p1:     "Le traitement des données par les <strong>cookies techniques</strong> est fondé sur l'<strong>intérêt légitime</strong> du responsable du traitement (art. 6, par. 1, lett. f du RGPD) et sur la <strong>nécessité contractuelle</strong> de fournir le service demandé par l'utilisateur (art. 6, par. 1, lett. b du RGPD), ces cookies étant indispensables au fonctionnement du site.",
      s7_p2:     "Le traitement des données par <strong>Google Maps</strong> est fondé sur le <strong>consentement explicite</strong> de l'utilisateur (art. 6, par. 1, lett. a du RGPD), exprimé via le bouton correspondant dans la bannière cookie ou directement dans la section <em>Lieu</em>. Le consentement peut être retiré à tout moment en effaçant le stockage du navigateur (localStorage).",
      s8_title:  "8. Comment Désactiver les Cookies",
      s8_p1:     "L'utilisateur peut supprimer les données stockées dans le localStorage à tout moment via les paramètres de son navigateur (Outils de développement › Application › Local Storage) ou en effaçant l'historique et les données de navigation.",
      s8_p2:     "Veuillez noter que la désactivation du stockage peut altérer certaines fonctionnalités du site (ex. mémorisation de la langue sélectionnée).",
      s9_title:  "9. Droits de la Personne Concernée",
      s9_intro:  "En vertu des arts. 15–22 du RGPD (Règl. UE 2016/679) et du Décret législatif 196/2003 (tel que modifié par le Décret législatif 101/2018), l'utilisateur a le droit de :",
      s9_access: "Obtenir la confirmation du traitement et une copie des données.",
      s9_rect:   "Demander la correction de données inexactes.",
      s9_del:    "Demander la suppression des données (« droit à l'oubli »).",
      s9_limit:  "Demander la limitation du traitement.",
      s9_obj:    "S'opposer au traitement à tout moment.",
      s9_port:   "Recevoir les données dans un format structuré et lisible par machine.",
      s9_comp:   "Déposer une réclamation auprès de l'Autorité italienne de protection des données (<a href=\"https://www.garanteprivacy.it\" target=\"_blank\" rel=\"noopener noreferrer\">www.garanteprivacy.it</a>).",
      s9_p2:     "Pour exercer vos droits, contactez : <a href=\"mailto:info-2026european@cardanoskating.it\">info-2026european@cardanoskating.it</a>",
      s10_title: "10. Modifications de cette Politique",
      s10_p1:    "Le responsable du traitement se réserve le droit de mettre à jour cette politique à tout moment. Les modifications seront publiées sur cette page avec une date de mise à jour. Les utilisateurs sont encouragés à consulter cette page régulièrement."
    }
  },

  /* ── DEUTSCH ──────────────────────────────────────────── */
  de: {
    meta: {
      title: "Europameisterschaften Inline-Speedskating 2026",
      desc:  "Europameisterschaften Inline-Speedskating 2026 – Cardano al Campo (VA), Italien, 20.–26. Juli"
    },
    header: {
      title: "Europameisterschaften Inline-Schnelllauf 2026",
      sub:   "19.–26. Juli · Cardano al Campo, Italien"
    },
    nav: {
      home:        "Startseite",
      classifiche: "Ergebnisse",
      sponsor:     "Sponsoren",
      alloggi:        "Unterkünfte",
      ristorazione:   "Gastronomie",
      luogo:       "Veranstaltungsort",
      news:        "Neuigkeiten",
      contatti:        "Kontakt",
      diventa_sponsor: "Diventa Sponsor",
      footer:          "Cardano al Campo (VA), Italien · 20.–26. Juli 2026"
    },
    footer: {
      rights: "© 2026 Europameisterschaften Inline-Speedskating · Cardano al Campo (VA), Italien"
    },
    home: {
      badge:          "Cardano al Campo (VA), Italien",
      title1:         "EUROPA-",
      title2:         "MEISTER-",
      title3:         "INLINE-SCHNELLLAUF",
      date_label:     "Datum",
      date_value:     "20.–26. Juli 2026",
      loc_label:      "Ort",
      loc_value:      "Cardano al Campo (VA)",
      country_label:  "Land",
      country_value:  "Italien",
      disciplines:    "Bahn &nbsp;&middot;&nbsp; Stra&szlig;e &nbsp;&middot;&nbsp; Marathon",
      cd_title:       "Countdown zum Event",
      cd_days:        "Tage",
      cd_hours:       "Stunden",
      cd_min:         "Minuten",
      cd_sec:         "Sekunden",
      stat_athletes:  "Erwartete Athleten",
      stat_nations:   "Nationen",
      stat_disc:      "Disziplinen",
      stat_events:    "Geplante Wettbewerbe",
      organizer:      "Die Cardano Skating S.r.l. SSD veranstaltet vom 19. bis 26. Juli 2026 die Europameisterschaften im Inline-Speedskating, unter der Schirmherrschaft der Gemeinde Cardano al Campo."
    },
    classifiche: {
      tag:            "Ergebnisse",
      title:          "Ranglisten",
      desc:           "Offizielle Ergebnisse der Bahn-, Straßen- und Marathonwettbewerbe.",
      tab_pista:      "Bahn",
      tab_strada:     "Straße",
      tab_maratona:   "Marathon",
      col_pos:        "Pl.",
      col_flag:       "🏳",
      col_athlete:    "Athlet/in",
      col_country:    "Land",
      col_time:       "Zeit / Punkte",
      pista_500:      "500m",
      pista_1000:     "1000m",
      pista_5000:     "5000m Punkte",
      strada_sprint:  "Sprint",
      strada_10:      "10 km",
      strada_20:      "20 km",
      maratona_42:    "Marathon 42 km",
      coming_soon:    "Ergebnisse während der Veranstaltung verfügbar"
    },
    sponsor: {
      tag:    "Partner",
      title:  "Unsere Sponsoren",
      desc:   "Wir danken unseren Partnern, die diese Veranstaltung ermöglichen.",
      main:   "Hauptsponsor",
      other:  "Sponsoren"
    },
    alloggi: {
      tag:          "Unterkunft",
      title:        "Empfohlene Unterkünfte",
      desc:         "Ausgewählte Einrichtungen in der Nähe des Sportzentrums.",
      filter_all:   "Alle",
      filter_hotel: "Hotels",
      filter_bb:    "B&B",
      filter_apt:   "Apartments",
      from:         "ab",
      pernight:     "/ Nacht",
      dist:         "von der Strecke",
      stars:        "Sterne",
      note:         "Für Buchungen und Sonderkonditionen für Athleten und Delegationen wenden Sie sich bitte an das Organisationsbüro: <strong>info-2026european@cardanoskating.it</strong>"
    },
    ristorazione: {
      tag:               "Essen & Trinken",
      title:             "Gastronomie",
      desc:              "Vertragsrestaurants, Bars und Pizzerien.",
      filter_all:        "Alle",
      filter_ristorante: "Restaurant",
      filter_bar:        "Bar",
      filter_pizzeria:   "Pizzeria"
    },
    luogo: {
      tag:            "Veranstaltungsort",
      title:          "Der Veranstaltungsort",
      desc:           "Cardano al Campo richtet die Europameisterschaften im Inline-Speedskating aus.",
      city:           "Cardano al Campo (VA), Italien",
      country:        "Varese · Lombardei · Italien",
      city_desc:      "Cardano al Campo ist eine Gemeinde in der Provinz Varese, wenige Kilometer vom internationalen Flughafen Mailand Malpensa entfernt, ausgezeichnet als Europäische Sportgemeinde 2023.",
      vd_track:       "Bahn - Straße",
      vd_track_v:     "200m - 500m",
      vd_cap:         "Kapazität",
      vd_cap_v:       "1.000 Zuschauer",
      vd_park:        "Parkplatz",
      vd_park_v:      "600 kostenlose Plätze",
      vd_wifi:        "Konnektivität",
      vd_wifi_v:      "Kostenloses WLAN",
      vd_acc:         "Barrierefreiheit",
      vd_acc_v:       "Vollständig zugänglich",
      map_label:      "Interaktive Karte",
      map_sub:        "Cardano al Campo, Varese",
      map_open:       "In Google Maps öffnen",
      transport_title: "Anreise",
      tr_fly:         "Flugzeug",
      tr_fly_d:       "Flughafen Mailand Malpensa (MXP) 4 km entfernt.",
      tr_train:       "Zug",
      tr_train_d:     "Bahnhof Gallarate (6 km). Direktverbindung von Mailand in 40 Minuten.",
      tr_car:         "Auto",
      tr_car_d:       "Ausfahrt A8 Gallarate/Busto Arsizio. Kostenlose Parkplätze in der Umgebung verfügbar.",
      tr_bus:         "Shuttlebus",
      tr_bus_d:       "Offizieller Shuttleservice vom Flughafen Malpensa und dem Zentrum von Gallarate während der gesamten Veranstaltung.",
      map_consent:     "Um die Karte anzuzeigen, müssen Sie Drittanbieter-Cookies (Google Maps) akzeptieren.",
      map_consent_btn: "Akzeptieren und Karte anzeigen"
    },
    news: {
      tag:      "Neuigkeiten",
      title:    "Neuigkeiten",
      desc:     "Die neuesten Nachrichten von den Europameisterschaften 2026.",
      readmore: "Weiterlesen"
    },
    contatti: {
      tag:         "Informationen",
      title:       "Kontakt",
      desc:        "Für Informationen und Anfragen kontaktieren Sie uns per E-Mail, Telefon oder über unsere Social-Media-Kanäle.",
      email_label: "E-Mail",
      phone_label: "Telefon"
    },
    cookie: {
      text:   "Diese Website verwendet technisch notwendige Cookies und im Bereich Veranstaltungsort Google Maps (Drittanbieter-Cookies). Sie können alle Cookies oder nur technische akzeptieren.",
      accept: "Alle akzeptieren",
      reject: "Nur technische",
      policy: "Privacy &amp; Cookie Policy",
      prefs:  "Cookie-Einstellungen verwalten"
    },
    cookiepage: {
      back:      "← Zurück zur Website",
      tag:       "Richtlinie",
      date:      "Zuletzt aktualisiert: März 2026",
      s1_title:  "1. Verantwortlicher",
      s1_p1:     "Verantwortlicher für die Verarbeitung personenbezogener Daten ist die <strong>Cardano Skating S.R.L. S.S.D.</strong>, Veranstalterin der Europameisterschaften im Inline-Speedskating 2026 mit Sitz in Cardano al Campo (VA), Italien.",
      s1_p2:     "Für datenschutzbezogene Anfragen kontaktieren Sie uns bitte unter: <a href=\"mailto:info-2026european@cardanoskating.it\">info-2026european@cardanoskating.it</a>",
      s2_title:  "2. Was sind Cookies",
      s2_p1:     "Cookies sind kleine Textdateien, die während der Navigation vom Browser auf dem Gerät des Nutzers gespeichert werden. Diese Richtlinie gilt auch für ähnliche Technologien wie den <strong>localStorage</strong>, einen vom Browser bereitgestellten Speicherbereich, der von dieser Website genutzt wird.",
      s3_title:  "3. Von dieser Website verwendete Cookies",
      s3_p1:     "Diese Website verwendet <strong>technisch notwendige Cookies</strong>, die für ihr ordnungsgemäßes Funktionieren unerlässlich sind, sowie nach Einwilligung Drittanbieter-Cookies über den Dienst Google Maps im Bereich <em>Veranstaltungsort</em>.",
      s3_strong: "Technische Cookies (immer aktiv)",
      s3_li1:    "Speichert die vom Nutzer gewählte Sprache (z. B. \"it\", \"en\"). Dauer: dauerhaft bis zur manuellen Löschung. Typ: localStorage.",
      s3_li2:    "Registriert die Kenntnisnahme des Cookie-Hinweises. Dauer: dauerhaft bis zur manuellen Löschung. Typ: localStorage.",
      s3_li3:    "Registriert die spezifische Einwilligung zum Laden von Google Maps. Dauer: dauerhaft bis zur manuellen Löschung. Typ: localStorage.",
      s3_p2:     "Technische Daten werden niemals an externe Server übermittelt und verbleiben ausschließlich im Browser des Nutzers.",
      s4_title:  "4. Drittanbieterdienste",
      s4_p1:     "Die auf der Website verwendeten Schriftarten (Montserrat und Inter) werden direkt auf den Servern der Website gehostet und beinhalten keine Datenübertragung an Dritte.",
      s4_p2:     "Die Flaggensymbole zur Sprachauswahl sind ebenfalls lokal gespeichert und erfordern kein Laden externer Ressourcen.",
      s4_p3:     "Der Bereich <em>Veranstaltungsort</em> verwendet <strong>Google Maps</strong> (Google LLC, USA) zur Anzeige einer interaktiven Karte des Veranstaltungsortes. Dieser Dienst wird <strong>nur nach ausdrücklicher Einwilligung des Nutzers</strong> geladen. Bei Annahme kann Google folgende Cookies auf dem Gerät des Nutzers setzen:",
      s4_li_nid: "Google-Cookie für Präferenzen/Personalisierung. Dauer: ~6 Monate. Domain: .google.com.",
      s4_li_con: "Registriert die Einwilligungsentscheidungen des Nutzers für Google-Dienste. Dauer: variabel. Domain: .google.com.",
      s4_p4:     "Weitere Informationen zu Google finden Sie in der <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener noreferrer\">Google-Datenschutzerklärung</a>.",
      s4_social: "Die Website enthält Links zu den offiziellen Social-Media-Kanälen der Veranstaltung: <strong>Instagram</strong> (@cardano_skating) und <strong>Facebook</strong> (Cardano Skating), die beide von <strong>Meta Platforms, Inc.</strong> (USA) verwaltet werden. Diese Links sind einfache Navigationslinks: Es sind keine Meta-Widgets, Pixel oder Skripte in die Website eingebettet. Durch Klicken auf diese Links werden Nutzer auf die jeweiligen Meta-Seiten weitergeleitet, die ihren eigenen Datenschutzrichtlinien unterliegen.",
      s4_li_ig:  "Link zur offiziellen Veranstaltungsseite auf Instagram. Kein eingebetteter Inhalt auf dieser Website. Domain: instagram.com.",
      s4_li_fb:  "Link zur offiziellen Veranstaltungsseite auf Facebook. Kein eingebetteter Inhalt auf dieser Website. Domain: facebook.com.",
      s4_social_p2: "Informationen zur Datenverarbeitung durch Meta Platforms, Inc. finden Sie in der <a href=\"https://www.facebook.com/privacy/policy/\" target=\"_blank\" rel=\"noopener noreferrer\">Meta-Datenschutzrichtlinie</a>.",
      s4_hosting:    "Diese Website wird über <strong>GitHub Pages</strong> (GitHub, Inc. / Microsoft Corporation, USA) gehostet. Als Teil der Inhaltsbereitstellungsinfrastruktur nutzt GitHub Pages <strong>Fastly CDN</strong> (Fastly, Inc., USA). Diese Dienste verarbeiten automatisch technische Nutzerdaten als Teil des normalen Dienstbetriebs:",
      s4_li_github:  "Hosting und Bereitstellung aller statischen Website-Inhalte. Erfasst technische Protokolle (IP-Adresse, User-Agent, angeforderte URLs, Zeitstempel). Domain: pages.github.com / github.io.",
      s4_li_fastly:  "Content Delivery Network (CDN) von GitHub Pages. Verarbeitet dieselben technischen Daten auf dem Netzwerkpfad. Domain: fastly.com.",
      s4_hosting_p2: "Weitere Informationen finden Sie in der <a href=\"https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement\" target=\"_blank\" rel=\"noopener noreferrer\">Datenschutzerklärung von GitHub</a> und der <a href=\"https://www.fastly.com/privacy/\" target=\"_blank\" rel=\"noopener noreferrer\">Datenschutzerklärung von Fastly</a>.",
      s5_title:  "5. Datentransfer in Drittstaaten",
      s5_p1:     "Der von dieser Website genutzte Drittanbieterdienst (Google Maps) kann Nutzerdaten (insbesondere die IP-Adresse) in Länder außerhalb des Europäischen Wirtschaftsraums, insbesondere in die <strong>Vereinigten Staaten</strong>, übermitteln.",
      s5_p2:     "Solche Übermittlungen erfolgen unter Einhaltung der Garantien gemäß DSGVO (Art. 46), insbesondere durch die von der Europäischen Kommission genehmigten <strong>Standardvertragsklauseln</strong> und/oder, für Google LLC, im Rahmen des <strong>EU–US-Datenschutzrahmens</strong> (Angemessenheitsbeschluss vom 10. Juli 2023).",
      s5_p3:     "<strong>GitHub Pages</strong> und <strong>Fastly CDN</strong> können technische Daten (Zugriffsprotokolle) ebenfalls in die <strong>Vereinigten Staaten</strong> und andere Länder übermitteln. GitHub, Inc. ist im Rahmen des <strong>EU–US-Datenschutzrahmens</strong> zertifiziert. Fastly, Inc. verwendet <strong>Standardvertragsklauseln</strong> für Übermittlungen außerhalb des EWR.",
      s6_title:  "6. Direkt von der Website erhobene Daten",
      s6_p1:     "Diese Website <strong>erhebt keine personenbezogenen Daten</strong> direkt von Nutzern. Es gibt keine Kontaktformulare, Registrierungen, Newsletter-Anmeldungen oder sonstige Mechanismen, die eine Übermittlung personenbezogener Daten an die Server des Verantwortlichen beinhalten.",
      s6_p2:     "Die Kontaktdaten (E-Mail, Telefon) im Bereich <em>Kontakt</em> werden ausschließlich zu Informationszwecken bereitgestellt. Jede vom Nutzer über diese Kanäle initiierte Kommunikation erfolgt außerhalb dieser Website und unterliegt den Datenschutzbestimmungen des vom Nutzer verwendeten Mail- oder Telefondienstes.",
      s6_p3:     "Diese Website wird auf <strong>GitHub Pages</strong> gehostet, das gemeinsam mit dem <strong>Fastly</strong>-CDN automatisch technische Zugriffsdaten erfasst (IP-Adresse, Browsertyp, besuchte Seiten, Zeitstempel), als Teil des normalen Hosting-Dienstbetriebs. Diese Daten werden von GitHub/Fastly gemäß ihren jeweiligen Datenschutzrichtlinien verwaltet und für den von jedem Anbieter vorgesehenen Zeitraum aufbewahrt (GitHub: bis zu 30 Tage; Fastly: gemäß ihren Betriebsrichtlinien).",
      s7_title:  "7. Rechtsgrundlage der Verarbeitung",
      s7_p1:     "Die Verarbeitung von Daten durch <strong>technische Cookies</strong> erfolgt auf Grundlage des <strong>berechtigten Interesses</strong> des Verantwortlichen (Art. 6 Abs. 1 lit. f DSGVO) und der <strong>Vertragserfüllung</strong> zur Erbringung des vom Nutzer angeforderten Dienstes (Art. 6 Abs. 1 lit. b DSGVO), da diese Cookies für die Funktionsfähigkeit der Website unerlässlich sind.",
      s7_p2:     "Die Verarbeitung von Daten durch <strong>Google Maps</strong> erfolgt auf Grundlage der <strong>ausdrücklichen Einwilligung</strong> des Nutzers (Art. 6 Abs. 1 lit. a DSGVO), die über die entsprechende Schaltfläche im Cookie-Banner oder direkt im Bereich <em>Veranstaltungsort</em> erteilt wird. Die Einwilligung kann jederzeit durch Löschen des Browser-Speichers (localStorage) widerrufen werden.",
      s8_title:  "8. Cookies deaktivieren",
      s8_p1:     "Nutzer können im localStorage gespeicherte Daten jederzeit über die Einstellungen ihres Browsers (Entwicklertools › Anwendung › Local Storage) oder durch Löschen des Browserverlaufs und der Browserdaten entfernen.",
      s8_p2:     "Bitte beachten Sie, dass das Deaktivieren des Speichers einige Website-Funktionen beeinträchtigen kann (z. B. das Speichern der ausgewählten Sprache).",
      s9_title:  "9. Rechte der betroffenen Personen",
      s9_intro:  "Gemäß Art. 15–22 DSGVO (EU-Verordnung 2016/679) und Gesetzesdekret 196/2003 (in der durch Gesetzesdekret 101/2018 geänderten Fassung) haben Nutzer das Recht auf:",
      s9_access: "Auskunft über die Verarbeitung und Erhalt einer Kopie der Daten.",
      s9_rect:   "Berichtigung unrichtiger Daten.",
      s9_del:    "Löschung der Daten (\"Recht auf Vergessenwerden\").",
      s9_limit:  "Einschränkung der Verarbeitung.",
      s9_obj:    "Widerspruch gegen die Verarbeitung zu jeder Zeit.",
      s9_port:   "Empfang der Daten in einem strukturierten, maschinenlesbaren Format.",
      s9_comp:   "Beschwerde bei der Italienischen Datenschutzbehörde (<a href=\"https://www.garanteprivacy.it\" target=\"_blank\" rel=\"noopener noreferrer\">www.garanteprivacy.it</a>).",
      s9_p2:     "Um Ihre Rechte auszuüben, kontaktieren Sie: <a href=\"mailto:info-2026european@cardanoskating.it\">info-2026european@cardanoskating.it</a>",
      s10_title: "10. Änderungen dieser Richtlinie",
      s10_p1:    "Der Verantwortliche behält sich das Recht vor, diese Richtlinie jederzeit zu aktualisieren. Änderungen werden auf dieser Seite mit einem aktualisierten Datum veröffentlicht. Nutzer werden gebeten, diese Seite regelmäßig zu überprüfen."
    }
  },

  /* ── ESPAÑOL ──────────────────────────────────────────── */
  es: {
    meta: {
      title: "Campeonatos de Europa de Patinaje de Velocidad en Línea 2026",
      desc:  "Campeonatos de Europa de Patinaje de Velocidad en Línea 2026 – Cardano al Campo (VA), Italia, 20–26 Julio"
    },
    header: {
      title: "Campeonatos de Europa de Patinaje en Línea 2026",
      sub:   "19–26 de Julio · Cardano al Campo, Italia"
    },
    nav: {
      home:        "Inicio",
      classifiche: "Clasificaciones",
      sponsor:     "Patrocinadores",
      alloggi:        "Alojamientos",
      ristorazione:   "Restauración",
      luogo:       "Sede",
      news:        "Noticias",
      contatti:        "Contacto",
      diventa_sponsor: "Diventa Sponsor",
      footer:          "Cardano al Campo (VA), Italia · 20–26 de julio de 2026"
    },
    footer: {
      rights: "© 2026 Campeonatos de Europa de Patinaje de Velocidad en Línea · Cardano al Campo (VA), Italia"
    },
    home: {
      badge:          "Cardano al Campo (VA), Italia",
      title1:         "CAMPEONATOS",
      title2:         "DE EUROPA",
      title3:         "PATINAJE EN LÍNEA",
      date_label:     "Fechas",
      date_value:     "20–26 Julio 2026",
      loc_label:      "Sede",
      loc_value:      "Cardano al Campo (VA)",
      country_label:  "País",
      country_value:  "Italia",
      disciplines:    "Pista &nbsp;&middot;&nbsp; Ruta &nbsp;&middot;&nbsp; Marat&oacute;n",
      cd_title:       "Cuenta atrás",
      cd_days:        "Días",
      cd_hours:       "Horas",
      cd_min:         "Minutos",
      cd_sec:         "Segundos",
      stat_athletes:  "Atletas esperados",
      stat_nations:   "Naciones",
      stat_disc:      "Disciplinas",
      stat_events:    "Pruebas programadas",
      organizer:      "La Cardano Skating S.r.l. SSD organiza del 19 al 26 de julio de 2026 los campeonatos de Europa de patinaje de velocidad en línea, bajo el patrocinio del Municipio de Cardano al Campo."
    },
    classifiche: {
      tag:            "Resultados",
      title:          "Clasificaciones",
      desc:           "Resultados oficiales de las competiciones de pista, ruta y maratón.",
      tab_pista:      "Pista",
      tab_strada:     "Ruta",
      tab_maratona:   "Maratón",
      col_pos:        "Pos",
      col_flag:       "🏳",
      col_athlete:    "Atleta",
      col_country:    "País",
      col_time:       "Tiempo / Puntos",
      pista_500:      "500m",
      pista_1000:     "1000m",
      pista_5000:     "5000m Puntos",
      strada_sprint:  "Sprint",
      strada_10:      "10 km",
      strada_20:      "20 km",
      maratona_42:    "Maratón 42 km",
      coming_soon:    "Resultados disponibles durante el evento"
    },
    sponsor: {
      tag:    "Socios",
      title:  "Nuestros Patrocinadores",
      desc:   "Agradecemos a los socios que hacen posible este evento.",
      main:   "Patrocinador Principal",
      other:  "Patrocinadores"
    },
    alloggi: {
      tag:          "Dónde alojarse",
      title:        "Alojamientos Recomendados",
      desc:         "Instalaciones seleccionadas cerca del centro deportivo.",
      filter_all:   "Todos",
      filter_hotel: "Hoteles",
      filter_bb:    "B&B",
      filter_apt:   "Apartamentos",
      from:         "desde",
      pernight:     "/ noche",
      dist:         "del circuito",
      stars:        "estrellas",
      note:         "Para reservas y tarifas especiales para atletas y delegaciones, contacte con la secretaría organizadora: <strong>info-2026european@cardanoskating.it</strong>"
    },
    ristorazione: {
      tag:               "Dónde comer",
      title:             "Restauración",
      desc:              "Restaurantes, bares y pizzerías concertados.",
      filter_all:        "Todos",
      filter_ristorante: "Restaurante",
      filter_bar:        "Bar",
      filter_pizzeria:   "Pizzería"
    },
    luogo: {
      tag:            "Sede",
      title:          "La Sede",
      desc:           "Cardano al Campo acoge los Campeonatos de Europa de Patinaje de Velocidad en Línea.",
      city:           "Cardano al Campo (VA), Italia",
      country:        "Varese · Lombardía · Italia",
      city_desc:      "Cardano al Campo es un municipio de la provincia de Varese, a pocos kilómetros del aeropuerto internacional de Milán Malpensa, nombrado Municipio Europeo del Deporte 2023.",
      vd_track:       "Pista - Carretera",
      vd_track_v:     "200m - 500m",
      vd_cap:         "Aforo",
      vd_cap_v:       "1.000 espectadores",
      vd_park:        "Aparcamiento",
      vd_park_v:      "600 plazas gratuitas",
      vd_wifi:        "Conectividad",
      vd_wifi_v:      "Wi-Fi gratuito",
      vd_acc:         "Accesibilidad",
      vd_acc_v:       "Totalmente accesible",
      map_label:      "Mapa interactivo",
      map_sub:        "Cardano al Campo, Varese",
      map_open:       "Abrir en Google Maps",
      transport_title: "Cómo llegar",
      tr_fly:         "Avión",
      tr_fly_d:       "Aeropuerto de Milán Malpensa (MXP) a 4 km.",
      tr_train:       "Tren",
      tr_train_d:     "Estación de Gallarate (6 km). Conexión directa desde Milán en 40 minutos.",
      tr_car:         "Coche",
      tr_car_d:       "Salida A8 Gallarate/Busto Arsizio. Aparcamiento gratuito disponible en la zona.",
      tr_bus:         "Autobús lanzadera",
      tr_bus_d:       "Servicio oficial de lanzadera desde el aeropuerto de Malpensa y el centro de Gallarate durante todo el evento.",
      map_consent:     "Para ver el mapa debe aceptar las cookies de terceros (Google Maps).",
      map_consent_btn: "Aceptar y mostrar mapa"
    },
    news: {
      tag:      "Actualidad",
      title:    "Noticias",
      desc:     "Las últimas noticias de los Campeonatos de Europa 2026.",
      readmore: "Leer más"
    },
    contatti: {
      tag:         "Información",
      title:       "Contacto",
      desc:        "Para información y consultas, contáctenos por correo electrónico, teléfono o a través de nuestras redes sociales.",
      email_label: "Email",
      phone_label: "Teléfono"
    },
    cookie: {
      text:   "Este sitio utiliza cookies técnicas necesarias y, en la sección Lugar, Google Maps (cookies de terceros). Puede aceptar todas las cookies o solo las técnicas.",
      accept: "Aceptar todo",
      reject: "Solo técnicas",
      policy: "Privacy &amp; Cookie Policy",
      prefs:  "Gestionar preferencias de cookies"
    },
    cookiepage: {
      back:      "← Volver al sitio",
      tag:       "Política",
      date:      "Última actualización: marzo de 2026",
      s1_title:  "1. Responsable del Tratamiento",
      s1_p1:     "El responsable del tratamiento de datos personales es <strong>Cardano Skating S.R.L. S.S.D.</strong>, organizadora de los Campeonatos de Europa de Patinaje de Velocidad en Línea 2026, con sede en Cardano al Campo (VA), Italia.",
      s1_p2:     "Para cualquier consulta relacionada con la privacidad, póngase en contacto con nosotros en: <a href=\"mailto:info-2026european@cardanoskating.it\">info-2026european@cardanoskating.it</a>",
      s2_title:  "2. Qué son las Cookies",
      s2_p1:     "Las cookies son pequeños archivos de texto almacenados en el dispositivo del usuario por el navegador durante la navegación. Esta política también cubre tecnologías similares como el <strong>localStorage</strong>, un área de almacenamiento del navegador utilizada por este sitio.",
      s3_title:  "3. Cookies Utilizadas por este Sitio",
      s3_p1:     "Este sitio utiliza <strong>cookies técnicas estrictamente necesarias</strong> para su correcto funcionamiento y, previa aceptación, cookies de terceros a través del servicio Google Maps en la sección <em>Lugar</em>.",
      s3_strong: "Cookies técnicas (siempre activas)",
      s3_li1:    "Almacena el idioma seleccionado por el usuario (ej. «it», «en»). Duración: permanente hasta eliminación manual. Tipo: localStorage.",
      s3_li2:    "Registra la toma de conocimiento del aviso de cookies. Duración: permanente hasta eliminación manual. Tipo: localStorage.",
      s3_li3:    "Registra el consentimiento específico para cargar Google Maps. Duración: permanente hasta eliminación manual. Tipo: localStorage.",
      s3_p2:     "Los datos técnicos nunca se transmiten a servidores externos y permanecen exclusivamente en el navegador del usuario.",
      s4_title:  "4. Servicios de Terceros",
      s4_p1:     "Las fuentes tipográficas (Montserrat e Inter) utilizadas por el sitio están alojadas directamente en los servidores del sitio y no implican ninguna transmisión de datos a terceros.",
      s4_p2:     "Los iconos de banderas para la selección de idioma también están alojados localmente y no requieren la carga de recursos externos.",
      s4_p3:     "La sección <em>Lugar</em> utiliza <strong>Google Maps</strong> (Google LLC, EE. UU.) para mostrar un mapa interactivo del lugar del evento. Este servicio se carga <strong>únicamente con el consentimiento explícito del usuario</strong>. Al aceptar, Google puede instalar las siguientes cookies en el dispositivo del usuario:",
      s4_li_nid: "Cookie de preferencias/personalización de Google. Duración: ~6 meses. Dominio: .google.com.",
      s4_li_con: "Registra las elecciones de consentimiento del usuario para los servicios de Google. Duración: variable. Dominio: .google.com.",
      s4_p4:     "Para más información sobre Google, consulte la <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener noreferrer\">Política de privacidad de Google</a>.",
      s4_social: "El sitio incluye enlaces a los canales sociales oficiales del evento: <strong>Instagram</strong> (@cardano_skating) y <strong>Facebook</strong> (Cardano Skating), ambos gestionados por <strong>Meta Platforms, Inc.</strong> (EE. UU.). Estos enlaces son simples vínculos de navegación: no se integran widgets, píxeles ni scripts de Meta en el sitio. Al hacer clic en estos enlaces, el usuario accede a los respectivos sitios de Meta, sujetos a sus propias políticas de privacidad.",
      s4_li_ig:  "Enlace a la página oficial del evento en Instagram. Sin contenido incrustado en este sitio. Dominio: instagram.com.",
      s4_li_fb:  "Enlace a la página oficial del evento en Facebook. Sin contenido incrustado en este sitio. Dominio: facebook.com.",
      s4_social_p2: "Para más información sobre el tratamiento de datos por parte de Meta Platforms, Inc., consulte la <a href=\"https://www.facebook.com/privacy/policy/\" target=\"_blank\" rel=\"noopener noreferrer\">Política de privacidad de Meta</a>.",
      s4_hosting:    "Este sitio está alojado a través de <strong>GitHub Pages</strong> (GitHub, Inc. / Microsoft Corporation, EE. UU.). Como parte de su infraestructura de distribución de contenido, GitHub Pages utiliza <strong>Fastly CDN</strong> (Fastly, Inc., EE. UU.). Estos servicios procesan automáticamente datos técnicos de los usuarios como parte del funcionamiento normal del servicio:",
      s4_li_github:  "Alojamiento y distribución de todo el contenido estático del sitio. Recopila registros técnicos (dirección IP, user-agent, URLs solicitadas, marcas de tiempo). Dominio: pages.github.com / github.io.",
      s4_li_fastly:  "Red de distribución de contenido (CDN) utilizada por GitHub Pages. Procesa los mismos datos técnicos a lo largo del recorrido de red. Dominio: fastly.com.",
      s4_hosting_p2: "Para más información, consulte la <a href=\"https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement\" target=\"_blank\" rel=\"noopener noreferrer\">Política de privacidad de GitHub</a> y la <a href=\"https://www.fastly.com/privacy/\" target=\"_blank\" rel=\"noopener noreferrer\">Política de privacidad de Fastly</a>.",
      s5_title:  "5. Transferencia de Datos fuera de la UE",
      s5_p1:     "El servicio de terceros utilizado por este sitio (Google Maps) puede transferir datos del usuario (en particular la dirección IP) fuera del Espacio Económico Europeo, concretamente a los <strong>Estados Unidos</strong>.",
      s5_p2:     "Dichas transferencias se realizan en cumplimiento de las garantías previstas por el RGPD (art. 46), en particular mediante las <strong>Cláusulas Contractuales Estándar</strong> aprobadas por la Comisión Europea y/o, para Google LLC, en el marco del <strong>Marco de Privacidad de Datos UE–EE. UU.</strong> (decisión de adecuación del 10 de julio de 2023).",
      s5_p3:     "<strong>GitHub Pages</strong> y <strong>Fastly CDN</strong> también pueden transferir datos técnicos (registros de acceso) a los <strong>Estados Unidos</strong> y otros países. GitHub, Inc. está certificada en el marco del <strong>Marco de Privacidad de Datos UE–EE. UU.</strong> Fastly, Inc. utiliza <strong>Cláusulas Contractuales Estándar</strong> para las transferencias fuera del EEE.",
      s6_title:  "6. Datos Recopilados Directamente por el Sitio",
      s6_p1:     "Este sitio <strong>no recopila directamente ningún dato personal</strong> de los usuarios. No existen formularios de contacto, registros, suscripciones a boletines ni ningún otro mecanismo que implique el envío de datos personales a los servidores del responsable.",
      s6_p2:     "Los datos de contacto (correo electrónico, teléfono) presentes en la sección <em>Contactos</em> se facilitan a título informativo. Cualquier comunicación iniciada por el usuario a través de estos canales se gestiona fuera de este sitio web y está sujeta a las políticas de privacidad del servicio de correo o telefonía utilizado por el usuario.",
      s6_p3:     "Este sitio está alojado en <strong>GitHub Pages</strong>, que, junto con la CDN <strong>Fastly</strong>, recopila automáticamente datos técnicos de acceso (dirección IP, tipo de navegador, páginas visitadas, marcas de tiempo) como parte del funcionamiento normal del servicio de alojamiento. Estos datos son gestionados por GitHub/Fastly según sus respectivas políticas de privacidad y conservados durante el período previsto por cada proveedor (GitHub: hasta 30 días; Fastly: según sus políticas operativas).",
      s7_title:  "7. Base Jurídica del Tratamiento",
      s7_p1:     "El tratamiento de datos a través de <strong>cookies técnicas</strong> se basa en el <strong>interés legítimo</strong> del responsable (art. 6, apdo. 1, letra f del RGPD) y en la <strong>necesidad contractual</strong> de prestar el servicio solicitado por el usuario (art. 6, apdo. 1, letra b del RGPD), ya que dichas cookies son indispensables para el funcionamiento del sitio.",
      s7_p2:     "El tratamiento de datos a través de <strong>Google Maps</strong> se basa en el <strong>consentimiento explícito</strong> del usuario (art. 6, apdo. 1, letra a del RGPD), expresado mediante el botón correspondiente en el banner de cookies o directamente en la sección <em>Lugar</em>. El consentimiento puede revocarse en cualquier momento borrando el almacenamiento del navegador (localStorage).",
      s8_title:  "8. Cómo Deshabilitar las Cookies",
      s8_p1:     "El usuario puede eliminar los datos almacenados en localStorage en cualquier momento desde la configuración de su navegador (Herramientas para desarrolladores › Aplicación › Local Storage) o borrando el historial y los datos de navegación.",
      s8_p2:     "Tenga en cuenta que deshabilitar el almacenamiento puede afectar algunas funciones del sitio (ej. recordar el idioma seleccionado).",
      s9_title:  "9. Derechos del Interesado",
      s9_intro:  "De conformidad con los arts. 15–22 del RGPD (Regl. UE 2016/679) y el Decreto Legislativo 196/2003 (modificado por el Decreto Legislativo 101/2018), el usuario tiene derecho a:",
      s9_access: "Obtener confirmación del tratamiento y una copia de los datos.",
      s9_rect:   "Solicitar la corrección de datos inexactos.",
      s9_del:    "Solicitar la supresión de los datos («derecho al olvido»).",
      s9_limit:  "Solicitar la limitación del tratamiento.",
      s9_obj:    "Oponerse al tratamiento en cualquier momento.",
      s9_port:   "Recibir los datos en un formato estructurado y legible por máquina.",
      s9_comp:   "Presentar una reclamación ante la Autoridad Italiana de Protección de Datos (<a href=\"https://www.garanteprivacy.it\" target=\"_blank\" rel=\"noopener noreferrer\">www.garanteprivacy.it</a>).",
      s9_p2:     "Para ejercer sus derechos, contacte: <a href=\"mailto:info-2026european@cardanoskating.it\">info-2026european@cardanoskating.it</a>",
      s10_title: "10. Cambios en esta Política",
      s10_p1:    "El responsable se reserva el derecho de actualizar esta política en cualquier momento. Los cambios se publicarán en esta página con la fecha de actualización. Se recomienda a los usuarios consultar esta página periódicamente."
    }
  },

  /* ── PORTUGUÊS ────────────────────────────────────────── */
  pt: {
    meta: {
      title: "Campeonatos Europeus de Patinagem de Velocidade em Linha 2026",
      desc:  "Campeonatos Europeus de Patinagem de Velocidade em Linha 2026 – Cardano al Campo (VA), Itália, 20–26 Julho"
    },
    header: {
      title: "Campeonatos Europeus de Patinagem em Linha 2026",
      sub:   "19–26 de Julho · Cardano al Campo, Itália"
    },
    nav: {
      home:        "Início",
      classifiche: "Classificações",
      sponsor:     "Patrocinadores",
      alloggi:        "Alojamentos",
      ristorazione:   "Restauração",
      luogo:       "Local",
      news:        "Notícias",
      contatti:        "Contacto",
      diventa_sponsor: "Diventa Sponsor",
      footer:          "Cardano al Campo (VA), Itália · 20–26 de julho de 2026"
    },
    footer: {
      rights: "© 2026 Campeonatos Europeus de Patinagem de Velocidade em Linha · Cardano al Campo (VA), Itália"
    },
    home: {
      badge:          "Cardano al Campo (VA), Itália",
      title1:         "CAMPEONATOS",
      title2:         "EUROPEUS",
      title3:         "PATINAGEM EM LINHA",
      date_label:     "Datas",
      date_value:     "20–26 Julho 2026",
      loc_label:      "Local",
      loc_value:      "Cardano al Campo (VA)",
      country_label:  "País",
      country_value:  "Itália",
      disciplines:    "Pista &nbsp;&middot;&nbsp; Estrada &nbsp;&middot;&nbsp; Maratona",
      cd_title:       "Contagem decrescente",
      cd_days:        "Dias",
      cd_hours:       "Horas",
      cd_min:         "Minutos",
      cd_sec:         "Segundos",
      stat_athletes:  "Atletas esperados",
      stat_nations:   "Nações",
      stat_disc:      "Disciplinas",
      stat_events:    "Provas programadas",
      organizer:      "A Cardano Skating S.r.l. SSD organiza de 19 a 26 de julho de 2026 os campeonatos europeus de patinagem de velocidade em linha, com o patrocínio do Município de Cardano al Campo."
    },
    classifiche: {
      tag:            "Resultados",
      title:          "Classificações",
      desc:           "Resultados oficiais das competições de pista, estrada e maratona.",
      tab_pista:      "Pista",
      tab_strada:     "Estrada",
      tab_maratona:   "Maratona",
      col_pos:        "Pos",
      col_flag:       "🏳",
      col_athlete:    "Atleta",
      col_country:    "País",
      col_time:       "Tempo / Pontos",
      pista_500:      "500m",
      pista_1000:     "1000m",
      pista_5000:     "5000m Pontos",
      strada_sprint:  "Sprint",
      strada_10:      "10 km",
      strada_20:      "20 km",
      maratona_42:    "Maratona 42 km",
      coming_soon:    "Resultados disponíveis durante o evento"
    },
    sponsor: {
      tag:    "Parceiros",
      title:  "Os Nossos Patrocinadores",
      desc:   "Agradecemos aos parceiros que tornam este evento possível.",
      main:   "Patrocinador Principal",
      other:  "Patrocinadores"
    },
    alloggi: {
      tag:          "Onde ficar",
      title:        "Alojamentos Recomendados",
      desc:         "Instalações selecionadas perto do centro desportivo.",
      filter_all:   "Todos",
      filter_hotel: "Hotéis",
      filter_bb:    "B&B",
      filter_apt:   "Apartamentos",
      from:         "a partir de",
      pernight:     "/ noite",
      dist:         "do circuito",
      stars:        "estrelas",
      note:         "Para reservas e tarifas especiais para atletas e delegações, contacte a secretaria organizadora: <strong>info-2026european@cardanoskating.it</strong>"
    },
    ristorazione: {
      tag:               "Onde comer",
      title:             "Restauração",
      desc:              "Restaurantes, bares e pizzarias conveniados.",
      filter_all:        "Todos",
      filter_ristorante: "Restaurante",
      filter_bar:        "Bar",
      filter_pizzeria:   "Pizzaria"
    },
    luogo: {
      tag:            "Local",
      title:          "O Local",
      desc:           "Cardano al Campo acolhe os Campeonatos Europeus de Patinagem de Velocidade em Linha.",
      city:           "Cardano al Campo (VA), Itália",
      country:        "Varese · Lombardia · Itália",
      city_desc:      "Cardano al Campo é um município da província de Varese, a poucos quilómetros do Aeroporto Internacional de Milão Malpensa, nomeado Município Europeu do Desporto 2023.",
      vd_track:       "Pista - Estrada",
      vd_track_v:     "200m - 500m",
      vd_cap:         "Capacidade",
      vd_cap_v:       "1.000 espectadores",
      vd_park:        "Estacionamento",
      vd_park_v:      "600 lugares gratuitos",
      vd_wifi:        "Conectividade",
      vd_wifi_v:      "Wi-Fi gratuito",
      vd_acc:         "Acessibilidade",
      vd_acc_v:       "Totalmente acessível",
      map_label:      "Mapa interativo",
      map_sub:        "Cardano al Campo, Varese",
      map_open:       "Abrir no Google Maps",
      transport_title: "Como chegar",
      tr_fly:         "Avião",
      tr_fly_d:       "Aeroporto de Milão Malpensa (MXP) a 4 km.",
      tr_train:       "Comboio",
      tr_train_d:     "Estação de Gallarate (6 km). Ligação direta de Milão em 40 minutos.",
      tr_car:         "Carro",
      tr_car_d:       "Saída A8 Gallarate/Busto Arsizio. Estacionamento gratuito disponível na área.",
      tr_bus:         "Shuttle",
      tr_bus_d:       "Serviço oficial de shuttle do Aeroporto de Malpensa e do centro de Gallarate durante todo o evento.",
      map_consent:     "Para ver o mapa é necessário aceitar cookies de terceiros (Google Maps).",
      map_consent_btn: "Aceitar e mostrar mapa"
    },
    news: {
      tag:      "Atualidades",
      title:    "Notícias",
      desc:     "As últimas notícias dos Campeonatos Europeus 2026.",
      readmore: "Ler mais"
    },
    contatti: {
      tag:         "Informação",
      title:       "Contacto",
      desc:        "Para informações e pedidos, contacte-nos por email, telefone ou através dos nossos canais sociais.",
      email_label: "Email",
      phone_label: "Telefone"
    },
    cookie: {
      text:   "Este sítio utiliza cookies técnicos necessários e, na secção Local, Google Maps (cookies de terceiros). Pode aceitar todos os cookies ou apenas os técnicos.",
      accept: "Aceitar tudo",
      reject: "Só técnicos",
      policy: "Privacy &amp; Cookie Policy",
      prefs:  "Gerir preferências de cookies"
    },
    cookiepage: {
      back:      "← Voltar ao sítio",
      tag:       "Política",
      date:      "Última atualização: março de 2026",
      s1_title:  "1. Responsável pelo Tratamento",
      s1_p1:     "O responsável pelo tratamento dos dados pessoais é a <strong>Cardano Skating S.R.L. S.S.D.</strong>, organizadora dos Campeonatos Europeus de Patinagem de Velocidade em Linha 2026, com sede em Cardano al Campo (VA), Itália.",
      s1_p2:     "Para qualquer questão relacionada com a privacidade, contacte-nos em: <a href=\"mailto:info-2026european@cardanoskating.it\">info-2026european@cardanoskating.it</a>",
      s2_title:  "2. O que são Cookies",
      s2_p1:     "Os cookies são pequenos ficheiros de texto armazenados no dispositivo do utilizador pelo navegador durante a navegação. Esta política abrange também tecnologias similares como o <strong>localStorage</strong>, uma área de armazenamento do navegador utilizada por este sítio.",
      s3_title:  "3. Cookies Utilizados por este Sítio",
      s3_p1:     "Este sítio utiliza <strong>cookies técnicos estritamente necessários</strong> ao seu correto funcionamento e, após aceitação, cookies de terceiros através do serviço Google Maps na secção <em>Local</em>.",
      s3_strong: "Cookies técnicos (sempre ativos)",
      s3_li1:    "Armazena o idioma selecionado pelo utilizador (ex.: «it», «en»). Duração: permanente até eliminação manual. Tipo: localStorage.",
      s3_li2:    "Regista a tomada de conhecimento do aviso de cookies. Duração: permanente até eliminação manual. Tipo: localStorage.",
      s3_li3:    "Regista o consentimento específico para carregar o Google Maps. Duração: permanente até eliminação manual. Tipo: localStorage.",
      s3_p2:     "Os dados técnicos nunca são transmitidos a servidores externos e permanecem exclusivamente no navegador do utilizador.",
      s4_title:  "4. Serviços de Terceiros",
      s4_p1:     "Os tipos de letra tipográficos (Montserrat e Inter) utilizados pelo sítio estão alojados diretamente nos servidores do sítio e não implicam qualquer transmissão de dados a terceiros.",
      s4_p2:     "Os ícones de bandeiras para a seleção de idioma também estão alojados localmente e não requerem o carregamento de recursos externos.",
      s4_p3:     "A secção <em>Local</em> utiliza o <strong>Google Maps</strong> (Google LLC, EUA) para apresentar um mapa interativo do local do evento. Este serviço é carregado <strong>apenas após o consentimento explícito do utilizador</strong>. Ao aceitar, o Google pode instalar os seguintes cookies no dispositivo do utilizador:",
      s4_li_nid: "Cookie de preferências/personalização do Google. Duração: ~6 meses. Domínio: .google.com.",
      s4_li_con: "Regista as escolhas de consentimento do utilizador para os serviços Google. Duração: variável. Domínio: .google.com.",
      s4_p4:     "Para mais informações sobre o Google, consulte a <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener noreferrer\">Política de Privacidade do Google</a>.",
      s4_social: "O sítio inclui ligações para os canais sociais oficiais do evento: <strong>Instagram</strong> (@cardano_skating) e <strong>Facebook</strong> (Cardano Skating), ambos geridos pela <strong>Meta Platforms, Inc.</strong> (EUA). Estas ligações são simples links de navegação: nenhum widget, píxel ou script da Meta está incorporado no sítio. Ao clicar nestes links, o utilizador é redirecionado para os respetivos sítios da Meta, sujeitos às suas próprias políticas de privacidade.",
      s4_li_ig:  "Ligação para a página oficial do evento no Instagram. Sem conteúdo incorporado neste sítio. Domínio: instagram.com.",
      s4_li_fb:  "Ligação para a página oficial do evento no Facebook. Sem conteúdo incorporado neste sítio. Domínio: facebook.com.",
      s4_social_p2: "Para mais informações sobre o tratamento de dados pela Meta Platforms, Inc., consulte a <a href=\"https://www.facebook.com/privacy/policy/\" target=\"_blank\" rel=\"noopener noreferrer\">Política de Privacidade da Meta</a>.",
      s4_hosting:    "Este sítio é alojado através do <strong>GitHub Pages</strong> (GitHub, Inc. / Microsoft Corporation, EUA). Como parte da sua infraestrutura de distribuição de conteúdo, o GitHub Pages utiliza o <strong>Fastly CDN</strong> (Fastly, Inc., EUA). Estes serviços processam automaticamente dados técnicos dos utilizadores no âmbito do funcionamento normal do serviço:",
      s4_li_github:  "Alojamento e distribuição de todo o conteúdo estático do sítio. Recolhe registos técnicos (endereço IP, user-agent, URLs solicitados, marcas temporais). Domínio: pages.github.com / github.io.",
      s4_li_fastly:  "Rede de distribuição de conteúdo (CDN) utilizada pelo GitHub Pages. Processa os mesmos dados técnicos ao longo do percurso de rede. Domínio: fastly.com.",
      s4_hosting_p2: "Para mais informações, consulte a <a href=\"https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement\" target=\"_blank\" rel=\"noopener noreferrer\">Política de Privacidade do GitHub</a> e a <a href=\"https://www.fastly.com/privacy/\" target=\"_blank\" rel=\"noopener noreferrer\">Política de Privacidade do Fastly</a>.",
      s5_title:  "5. Transferência de Dados para Fora da UE",
      s5_p1:     "O serviço de terceiros utilizado por este sítio (Google Maps) pode transferir dados do utilizador (em particular o endereço IP) para fora do Espaço Económico Europeu, nomeadamente para os <strong>Estados Unidos</strong>.",
      s5_p2:     "Essas transferências são efetuadas em conformidade com as garantias previstas pelo RGPD (art. 46), nomeadamente através das <strong>Cláusulas Contratuais Padrão</strong> aprovadas pela Comissão Europeia e/ou, para a Google LLC, no âmbito do <strong>Quadro de Privacidade de Dados UE–EUA</strong> (decisão de adequação de 10 de julho de 2023).",
      s5_p3:     "O <strong>GitHub Pages</strong> e o <strong>Fastly CDN</strong> também podem transferir dados técnicos (registos de acesso) para os <strong>Estados Unidos</strong> e outros países. A GitHub, Inc. está certificada no âmbito do <strong>Quadro de Privacidade de Dados UE–EUA</strong>. A Fastly, Inc. utiliza <strong>Cláusulas Contratuais Padrão</strong> para transferências fora do EEE.",
      s6_title:  "6. Dados Recolhidos Diretamente pelo Sítio",
      s6_p1:     "Este sítio <strong>não recolhe diretamente quaisquer dados pessoais</strong> dos utilizadores. Não existem formulários de contacto, registos, subscrições de newsletters ou qualquer outro mecanismo que implique o envio de dados pessoais para os servidores do responsável.",
      s6_p2:     "Os contactos (e-mail, telefone) presentes na secção <em>Contactos</em> são fornecidos a título informativo. Qualquer comunicação iniciada pelo utilizador através destes canais é gerida fora deste sítio e sujeita às políticas de privacidade do serviço de correio eletrónico ou de telefonia utilizado pelo utilizador.",
      s6_p3:     "Este sítio é alojado no <strong>GitHub Pages</strong>, que, juntamente com o CDN <strong>Fastly</strong>, recolhe automaticamente dados técnicos de acesso (endereço IP, tipo de navegador, páginas visitadas, marcas temporais) como parte do funcionamento normal do serviço de alojamento. Estes dados são geridos pelo GitHub/Fastly de acordo com as respetivas políticas de privacidade e conservados pelo período previsto por cada fornecedor (GitHub: até 30 dias; Fastly: de acordo com as suas políticas operacionais).",
      s7_title:  "7. Base Jurídica do Tratamento",
      s7_p1:     "O tratamento de dados através de <strong>cookies técnicos</strong> baseia-se no <strong>interesse legítimo</strong> do responsável (art. 6.º, n.º 1, al. f) do RGPD) e na <strong>necessidade contratual</strong> de prestar o serviço solicitado pelo utilizador (art. 6.º, n.º 1, al. b) do RGPD), uma vez que esses cookies são indispensáveis ao funcionamento do sítio.",
      s7_p2:     "O tratamento de dados através do <strong>Google Maps</strong> baseia-se no <strong>consentimento explícito</strong> do utilizador (art. 6.º, n.º 1, al. a) do RGPD), expresso através do botão correspondente no banner de cookies ou diretamente na secção <em>Local</em>. O consentimento pode ser retirado a qualquer momento ao limpar o armazenamento do navegador (localStorage).",
      s8_title:  "8. Como Desativar os Cookies",
      s8_p1:     "O utilizador pode eliminar os dados armazenados no localStorage a qualquer momento através das definições do seu navegador (Ferramentas de programador › Aplicação › Local Storage) ou ao limpar o histórico e os dados de navegação.",
      s8_p2:     "Tenha em atenção que a desativação do armazenamento pode prejudicar algumas funcionalidades do sítio (ex.: memorização do idioma selecionado).",
      s9_title:  "9. Direitos do Titular dos Dados",
      s9_intro:  "Nos termos dos arts. 15.º a 22.º do RGPD (Reg. UE 2016/679) e do Decreto-Lei n.º 196/2003 (conforme alterado pelo Decreto-Lei n.º 101/2018), o utilizador tem direito a:",
      s9_access: "Obter confirmação do tratamento e uma cópia dos dados.",
      s9_rect:   "Solicitar a retificação de dados inexatos.",
      s9_del:    "Solicitar a eliminação dos dados («direito ao esquecimento»).",
      s9_limit:  "Solicitar a limitação do tratamento.",
      s9_obj:    "Opor-se ao tratamento a qualquer momento.",
      s9_port:   "Receber os dados num formato estruturado e legível por máquina.",
      s9_comp:   "Apresentar uma reclamação junto da Autoridade Italiana de Proteção de Dados (<a href=\"https://www.garanteprivacy.it\" target=\"_blank\" rel=\"noopener noreferrer\">www.garanteprivacy.it</a>).",
      s9_p2:     "Para exercer os seus direitos, contacte: <a href=\"mailto:info-2026european@cardanoskating.it\">info-2026european@cardanoskating.it</a>",
      s10_title: "10. Alterações a esta Política",
      s10_p1:    "O responsável reserva-se o direito de atualizar esta política a qualquer momento. As alterações serão publicadas nesta página com a data de atualização. Recomenda-se aos utilizadores que consultem esta página periodicamente."
    }
  }
};

/* ═══════════════════════════════════════════════════════════
   i18n Core
   ═══════════════════════════════════════════════════════════ */

let currentLang = 'it';

const LANG_FLAGS = { it: 'it', en: 'gb', fr: 'fr', de: 'de', es: 'es', pt: 'pt' };

/**
 * Risolve una chiave dot-notation (es. "nav.classifiche")
 * nelle traduzioni della lingua attiva.
 */
function t(key) {
  const parts = key.split('.');
  let node = TRANSLATIONS[currentLang];
  for (const p of parts) {
    if (node == null) return key;
    node = node[p];
  }
  return node ?? key;
}

/**
 * Applica le traduzioni a tutti gli elementi con [data-i18n]
 * presenti nel DOM (o nel container passato).
 */
function applyTranslations(root) {
  const scope = root || document;
  scope.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (el.tagName === 'TITLE' || el.tagName === 'META') {
      el.content !== undefined ? (el.content = val) : (el.textContent = val);
    } else {
      // innerHTML per supportare tag <strong> ecc. nelle note
      el.innerHTML = val;
    }
  });
  scope.querySelectorAll('[data-i18n-label]').forEach(el => {
    el.setAttribute('aria-label', t(el.getAttribute('data-i18n-label')));
  });
  // Aggiorna il title della pagina
  const titleEl = document.querySelector('title');
  if (titleEl) titleEl.textContent = t('meta.title');
  // Aggiorna lang attribute
  document.documentElement.lang = currentLang;
}

/**
 * Cambia lingua e riapplica tutte le traduzioni.
 */
function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem('ec2026-lang', lang);
  applyTranslations();
  // Aggiorna bottoni
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  // Aggiorna label e bandiera FAB, chiudi menu
  const fabLabel = document.getElementById('langFabLabel');
  if (fabLabel) fabLabel.textContent = lang.toUpperCase();
  const fabFlag = document.getElementById('langFabFlag');
  if (fabFlag) fabFlag.className = `fi fi-${LANG_FLAGS[lang] || 'it'}`;
  if (typeof closeFabMenu === 'function') closeFabMenu();
  // Notifica main.js per ri-tradurre la sezione corrente
  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}

/**
 * Rileva la lingua dal browser e dalla scelta precedente
 * dell'utente (localStorage).
 */
function detectLanguage() {
  const saved = localStorage.getItem('ec2026-lang');
  if (saved && TRANSLATIONS[saved]) return saved;
  const browser = (navigator.language || navigator.userLanguage || 'it').split('-')[0].toLowerCase();
  return TRANSLATIONS[browser] ? browser : 'it';
}

/* ── Inizializzazione ─────────────────────────────────── */
(function init() {
  currentLang = detectLanguage();
  applyTranslations();
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
  // Imposta label e bandiera iniziale del FAB
  const fabLabel = document.getElementById('langFabLabel');
  if (fabLabel) fabLabel.textContent = currentLang.toUpperCase();
  const fabFlag = document.getElementById('langFabFlag');
  if (fabFlag) fabFlag.className = `fi fi-${LANG_FLAGS[currentLang] || 'it'}`;

})();
