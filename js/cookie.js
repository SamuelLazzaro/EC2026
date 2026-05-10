/* ═══════════════════════════════════════════════════════════
   cookie.js – Gestione banner cookie (GDPR / D.Lgs. 196/2003)
   ═══════════════════════════════════════════════════════════ */

const TECH_KEY        = 'ec2026-cookie-consent';
const MAPS_KEY        = 'ec2026-maps-consent';
const EVENTBRITE_KEY  = 'ec2026-eventbrite-consent';

const MAP_SRC = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2789.1419734654373!2d8.755507275796447!3d45.64797057107753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786621e97732ca7%3A0xf3e767fe66f8c607!2sPista%20di%20Pattinaggio%20Cardano%20al%20Campo!5e1!3m2!1sit!2sit!4v1772272559520!5m2!1sit!2sit';

const EVENTBRITE_EVENT  = '1989140716429';
const EVENTBRITE_SCRIPT = 'https://www.eventbrite.it/static/widgets/eb_widgets.js';
let g_eventbriteLoaded  = false;

const banner    = document.getElementById('cookieBanner');
const acceptBtn = document.getElementById('cookieAcceptBtn');
const rejectBtn = document.getElementById('cookieRejectBtn');
const prefBtn   = document.getElementById('cookiePrefBtn');

/* ═══════════════════════════════════════════════════════════
   Mappa – caricamento iframe
   ═══════════════════════════════════════════════════════════ */
function replaceWithIframe(container) {
  container.innerHTML = '';
  const iframe = document.createElement('iframe');
  iframe.src = MAP_SRC;
  iframe.className = 'map-iframe';
  iframe.style.border = '0';
  iframe.allowFullscreen = true;
  iframe.loading = 'lazy';
  iframe.referrerPolicy = 'no-referrer-when-downgrade';
  iframe.title = 'Pista di Pattinaggio Cardano al Campo';
  container.appendChild(iframe);
}

/* ═══════════════════════════════════════════════════════════
   Banner – utilità
   ═══════════════════════════════════════════════════════════ */
function hideBannerShowFab() {
  banner.classList.add('hidden');
  if (prefBtn) prefBtn.classList.remove('hidden');
}

/* ═══════════════════════════════════════════════════════════
   Eventbrite – caricamento widget
   ═══════════════════════════════════════════════════════════ */

/**
 * Replace the consent placeholder with the live "Buy" button and
 * dynamically inject the Eventbrite widget script (once per page),
 * then create the checkout widget targeting the new button.
 * @param {HTMLElement} container - The #eventbriteContainer element.
 */
function loadEventbriteWidget(container) {
  /* Replace placeholder with the actual buy button */
  const buyBtn = document.createElement('button');
  buyBtn.id = 'eventbrite-widget-modal-trigger-' + EVENTBRITE_EVENT;
  buyBtn.type = 'button';
  buyBtn.className = 'biglietti-buy-btn';
  buyBtn.setAttribute('data-i18n', 'biglietti.cta');
  buyBtn.textContent = 'Acquista su Eventbrite';
  container.innerHTML = '';
  container.appendChild(buyBtn);

  /* Re-apply i18n so the new button gets the active language */
  if (typeof applyTranslations === 'function') {
    applyTranslations(container);
  }

  const createWidget = function () {
    if (!window.EBWidgets) return;
    window.EBWidgets.createWidget({
      widgetType: 'checkout',
      eventId: EVENTBRITE_EVENT,
      themeSettings: {
        brandColor: '#c9a84c',
        fontColor:  '#f0f4f8',
        background: '#1c2f52'
      },
      modal: true,
      modalTriggerElementId: buyBtn.id
    });
  };

  /* Inject script only once per page lifetime */
  if (g_eventbriteLoaded && window.EBWidgets) {
    createWidget();
    return;
  }
  const script = document.createElement('script');
  script.src   = EVENTBRITE_SCRIPT;
  script.async = true;
  script.onload = function () {
    g_eventbriteLoaded = true;
    createWidget();
  };
  document.head.appendChild(script);
}


/* ═══════════════════════════════════════════════════════════
   API pubblica – chiamata da main.js
   ═══════════════════════════════════════════════════════════ */

/**
 * Chiamata da initLuogo() in main.js dopo il caricamento della sezione.
 * Se il consenso per le mappe è già stato dato, carica subito l'iframe;
 * altrimenti attacca il listener al pulsante placeholder.
 */
function ec2026InitMap(container) {
  if (localStorage.getItem(MAPS_KEY) === 'accepted') {
    replaceWithIframe(container);
  } else {
    const btn = container.querySelector('.map-consent-btn');
    if (btn) {
      btn.addEventListener('click', function () {
        localStorage.setItem(MAPS_KEY, 'accepted');
        replaceWithIframe(container);
      });
    }
  }
}

/**
 * Called by initBiglietti() in main.js after the section is loaded.
 * If consent already given, load the widget immediately; otherwise
 * wire the placeholder button to grant consent on click.
 * @param {HTMLElement} container - The #eventbriteContainer element.
 */
function ec2026InitEventbrite(container) {
  if (localStorage.getItem(EVENTBRITE_KEY) === 'accepted') {
    loadEventbriteWidget(container);
    return;
  }
  const btn = container.querySelector('.biglietti-consent-btn');
  if (!btn) return;
  btn.addEventListener('click', function () {
    localStorage.setItem(EVENTBRITE_KEY, 'accepted');
    loadEventbriteWidget(container);
  });
}

/**
 * Riapre il banner cookie azzerando i consensi salvati.
 * Esposta globalmente per eventuali link "Gestisci preferenze".
 */
function ec2026ShowPreferences() {
  localStorage.removeItem(TECH_KEY);
  localStorage.removeItem(MAPS_KEY);
  localStorage.removeItem(EVENTBRITE_KEY);
  banner.classList.remove('hidden');
  prefBtn.classList.add('hidden');
}

/* ═══════════════════════════════════════════════════════════
   Banner & FAB – inizializzazione
   ═══════════════════════════════════════════════════════════ */

/* FAB: riapertura preferenze (listener sempre attaccato) */
prefBtn?.addEventListener('click', ec2026ShowPreferences);

function initBanner() {
  if (!banner || !acceptBtn) return;

  /* Se il consenso tecnico è già stato registrato, nascondi subito il banner */
  if (localStorage.getItem(TECH_KEY) === 'accepted') {
    hideBannerShowFab();
    return;
  }
}

/* Accetta tutti: cookie tecnici + Google Maps + Eventbrite */
acceptBtn.addEventListener('click', function () {
  localStorage.setItem(TECH_KEY, 'accepted');
  localStorage.setItem(MAPS_KEY, 'accepted');
  localStorage.setItem(EVENTBRITE_KEY, 'accepted');
  hideBannerShowFab();
  /* Se la sezione Luogo è già caricata, carica subito la mappa */
  const mapContainer = document.getElementById('mapContainer');
  if (mapContainer && !mapContainer.querySelector('iframe')) {
    replaceWithIframe(mapContainer);
  }
  /* Se la sezione Biglietti è già caricata, carica subito il widget Eventbrite */
  const ebContainer = document.getElementById('eventbriteContainer');
  if (ebContainer && ebContainer.querySelector('.biglietti-consent-btn')) {
    loadEventbriteWidget(ebContainer);
  }
});

/* Solo tecnici: rifiuta i cookie di terze parti */
rejectBtn?.addEventListener('click', function () {
  localStorage.setItem(TECH_KEY, 'accepted');
  hideBannerShowFab();
});

initBanner();
