/* ═══════════════════════════════════════════════════════════
   cookie.js – Gestione banner cookie (GDPR / D.Lgs. 196/2003)
   ═══════════════════════════════════════════════════════════ */

const TECH_KEY = 'ec2026-cookie-consent';
const MAPS_KEY = 'ec2026-maps-consent';

const MAP_SRC = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2789.1419734654373!2d8.755507275796447!3d45.64797057107753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786621e97732ca7%3A0xf3e767fe66f8c607!2sPista%20di%20Pattinaggio%20Cardano%20al%20Campo!5e0!3m2!1sit!2sit!4v1772272559520!5m2!1sit!2sit';

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
 * Riapre il banner cookie azzerando i consensi salvati.
 * Esposta globalmente per eventuali link "Gestisci preferenze".
 */
function ec2026ShowPreferences() {
  localStorage.removeItem(TECH_KEY);
  localStorage.removeItem(MAPS_KEY);
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

/* Accetta tutti: cookie tecnici + Google Maps */
acceptBtn.addEventListener('click', function () {
  localStorage.setItem(TECH_KEY, 'accepted');
  localStorage.setItem(MAPS_KEY, 'accepted');
  hideBannerShowFab();
  /* Se la sezione Luogo è già caricata, carica subito la mappa */
  const mapContainer = document.getElementById('mapContainer');
  if (mapContainer && !mapContainer.querySelector('iframe')) {
    replaceWithIframe(mapContainer);
  }
});

/* Solo tecnici: rifiuta i cookie di terze parti */
rejectBtn?.addEventListener('click', function () {
  localStorage.setItem(TECH_KEY, 'accepted');
  hideBannerShowFab();
});

initBanner();
