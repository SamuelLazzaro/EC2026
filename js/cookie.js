/* ═══════════════════════════════════════════════════════════
   cookie.js – Gestione banner cookie (GDPR / D.Lgs. 196/2003)
   ═══════════════════════════════════════════════════════════ */

const TECH_KEY = 'ec2026-cookie-consent';
const MAPS_KEY = 'ec2026-maps-consent';

const MAP_SRC = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2789.1419734654373!2d8.755507275796447!3d45.64797057107753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786621e97732ca7%3A0xf3e767fe66f8c607!2sPista%20di%20Pattinaggio%20Cardano%20al%20Campo!5e1!3m2!1sit!2sit!4v1772272559520!5m2!1sit!2sit';

const banner    = document.getElementById('cookieBanner');
const acceptBtn = document.getElementById('cookieAcceptBtn');
const rejectBtn = document.getElementById('cookieRejectBtn');
const prefBtn   = document.getElementById('cookiePrefBtn');

/* ═══════════════════════════════════════════════════════════
   Map – iframe loading
   ═══════════════════════════════════════════════════════════
   Per-container override (optional data-attributes):
     - data-map-src           → custom iframe src (default: MAP_SRC)
     - data-map-title         → custom iframe title (a11y)
     - data-map-center        → "lat,lng" of the map center (`ll` param)
     - data-map-zoom-desktop  → Google Maps zoom when viewport > 860px
     - data-map-zoom-tablet   → zoom when viewport 641–860px
     - data-map-zoom-mobile   → zoom when viewport ≤ 640px
   When both center and zoom are set, they are merged into the URL as
   `ll` and `z` to force the initial viewport. Without these attributes
   the URL is used as-is (so the `#mapContainer` map keeps its default).
   ═══════════════════════════════════════════════════════════ */
/**
 * Picks the right zoom level for the current viewport width.
 * Falls back to the desktop value when narrower-breakpoint attributes
 * are missing; returns null if no zoom attribute is set at all.
 * @param {HTMLElement} container
 * @returns {string|null}
 */
function pickMapZoom(container) {
  const w = window.innerWidth;
  const desktop = container.dataset.mapZoomDesktop || null;
  const tablet  = container.dataset.mapZoomTablet  || desktop;
  const mobile  = container.dataset.mapZoomMobile  || tablet;
  if (w <= 640) return mobile;
  if (w <= 860) return tablet;
  return desktop;
}

/**
 * Builds the iframe src for a given container, merging the optional
 * `ll`/`z` parameters into the base map URL when both center and a
 * breakpoint-appropriate zoom are configured.
 * @param {HTMLElement} container
 * @returns {string}
 */
function buildMapSrc(container) {
  const baseSrc = container.dataset.mapSrc || MAP_SRC;
  const center  = container.dataset.mapCenter;
  const zoom    = pickMapZoom(container);
  if (!center || !zoom) return baseSrc;
  try {
    const url = new URL(baseSrc);
    url.searchParams.set('ll', center);
    url.searchParams.set('z', zoom);
    return url.toString();
  } catch (_e) {
    return baseSrc;
  }
}

function replaceWithIframe(container) {
  container.innerHTML = '';
  const iframe = document.createElement('iframe');
  iframe.src = buildMapSrc(container);
  iframe.className = 'map-iframe';
  iframe.style.border = '0';
  iframe.allowFullscreen = true;
  iframe.loading = 'lazy';
  iframe.referrerPolicy = 'no-referrer-when-downgrade';
  iframe.title = container.dataset.mapTitle || 'Pista di Pattinaggio Cardano al Campo';
  container.appendChild(iframe);
}

/**
 * Renders every map container in the DOM that hasn't been rendered yet.
 * Maps consent (MAPS_KEY) is global, so once it is granted — from the
 * cookie banner OR from any single per-container "accept" button — every
 * map on the page should appear at once, not just the one that was clicked.
 */
function renderAllConsentedMaps() {
  document.querySelectorAll('.map-container').forEach(function (container) {
    if (!container.querySelector('iframe')) {
      replaceWithIframe(container);
    }
  });
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
        renderAllConsentedMaps();
      });
    }
  }
}

/**
 * Re-renders the iframe in a container that already has consent.
 * Safe to call at any time: if consent has not been granted yet, the
 * placeholder is left untouched. Useful for refreshing the iframe `src`
 * when the viewport crosses a responsive breakpoint and the zoom level
 * configured via data-attributes should change accordingly.
 * @param {HTMLElement} container
 */
function ec2026RefreshMap(container) {
  if (!container) return;
  if (localStorage.getItem(MAPS_KEY) === 'accepted') {
    replaceWithIframe(container);
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
  /* Carica subito ogni mappa già montata nel DOM (Luogo, Maratona, ecc.) */
  renderAllConsentedMaps();
});

/* Solo tecnici: rifiuta i cookie di terze parti */
rejectBtn?.addEventListener('click', function () {
  localStorage.setItem(TECH_KEY, 'accepted');
  hideBannerShowFab();
});

initBanner();
