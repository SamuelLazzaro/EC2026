/* ═══════════════════════════════════════════════════════════
   main.js – Navigazione, caricamento sezioni, countdown
   ═══════════════════════════════════════════════════════════ */

const mainContent    = document.getElementById('mainContent');
const loadingSpinner = document.getElementById('loadingSpinner');
const hamburgerBtn   = document.getElementById('hamburgerBtn');
const navDrawer      = document.getElementById('navDrawer');
const navBackdrop    = document.getElementById('navBackdrop');
const logoHome       = document.getElementById('logoHome');


/* ═══════════════════════════════════════════════════════════
   Hamburger / Drawer
   ═══════════════════════════════════════════════════════════ */
function openNav() {
  navDrawer.style.display = 'flex';
  requestAnimationFrame(() => {
    navDrawer.classList.add('is-open');
    navBackdrop.classList.add('is-open');
    hamburgerBtn.classList.add('is-open');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
  });
}

function closeNav() {
  if (!navDrawer.classList.contains('is-open')) return;
  navDrawer.classList.remove('is-open');
  navBackdrop.classList.remove('is-open');
  hamburgerBtn.classList.remove('is-open');
  hamburgerBtn.setAttribute('aria-expanded', 'false');
  navDrawer.addEventListener('transitionend', () => {
    navDrawer.style.display = 'none';
  }, { once: true });
}

hamburgerBtn.addEventListener('click', () => {
  navDrawer.classList.contains('is-open') ? closeNav() : openNav();
});
navBackdrop.addEventListener('click', closeNav);

// Chiudi con Esc
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeNav();
});

/* ═══════════════════════════════════════════════════════════
   Caricamento sezioni
   ═══════════════════════════════════════════════════════════ */
async function loadSection(name) {

  // Mostra spinner
  loadingSpinner.classList.remove('hidden');
  // Rimuovi contenuto precedente (tranne spinner)
  [...mainContent.children].forEach(el => {
    if (!el.classList.contains('loading-spinner')) el.remove();
  });

  try {
    const res = await fetch(`sections/${name}.html`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();

    // Crea wrapper con animazione
    const wrapper = document.createElement('div');
    wrapper.className = 'section-content fade-up';
    wrapper.innerHTML = html;

    loadingSpinner.classList.add('hidden');
    mainContent.appendChild(wrapper);

    // Applica traduzioni all'HTML caricato
    applyTranslations(wrapper);

    // Inizializzatori specifici per sezione
    if (name === 'home')          initHome(wrapper);
    if (name === 'classifiche')   initClassifiche(wrapper);
    if (name === 'alloggi')       initAlloggi(wrapper);
    if (name === 'ristorazione')  initRistorazione(wrapper);
    if (name === 'luogo')         initLuogo(wrapper);

    // Aggiorna link attivo nel nav
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.toggle('active', link.dataset.section === name);
    });

    // Torna in cima
    window.scrollTo({ top: 0, behavior: 'smooth' });

  } catch (err) {
    loadingSpinner.classList.add('hidden');
    const errDiv = document.createElement('div');
    errDiv.style.cssText = 'padding:4rem 2rem;text-align:center;color:#6e8bab;';
    errDiv.innerHTML = `<p style="font-size:3rem;margin-bottom:1rem">⚠️</p>
                        <p>Impossibile caricare la sezione <strong>${name}</strong>.</p>
                        <p style="font-size:.8rem;margin-top:.5rem">${err.message}</p>`;
    mainContent.appendChild(errDiv);
    console.error('loadSection error:', err);
  }
}

/* ── Click sui link di navigazione ───────────────────────── */
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const section = link.dataset.section;
    if (section) {
      const url = section === 'home'
        ? location.pathname + location.search
        : location.pathname + location.search + '#' + section;
      history.pushState(null, '', url);
      loadSection(section);
    }
    closeNav();
  });
});

/* ── Click sul logo → home ───────────────────────────────── */
logoHome.addEventListener('click', e => {
  e.preventDefault();
  history.pushState(null, '', location.pathname + location.search);
  loadSection('home');
  closeNav();
});

/* ── Navigazione back/forward del browser ────────────────── */
window.addEventListener('popstate', () => {
  loadSection(location.hash.slice(1) || 'home');
});

/* ── Ri-carica sezione corrente al cambio lingua ─────────── */
document.addEventListener('langchange', () => {
  loadSection(location.hash.slice(1) || 'home');
});

/* ═══════════════════════════════════════════════════════════
   Init: Home – Countdown
   ═══════════════════════════════════════════════════════════ */
function initHome(root) {
  const eventDate = new Date('2026-07-19T00:00:00');

  function updateCountdown() {
    const now  = new Date();
    const diff = eventDate - now;
    if (diff <= 0) {
      // Evento in corso
      ['cd-days','cd-hours','cd-min','cd-sec'].forEach(id => {
        const el = root.querySelector(`#${id}`);
        if (el) el.textContent = '0';
      });
      return;
    }
    const days    = Math.floor(diff / 86400000);
    const hours   = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    const set = (id, val) => {
      const el = root.querySelector(`#${id}`);
      if (el) el.textContent = String(val).padStart(2, '0');
    };
    set('cd-days', days);
    set('cd-hours', hours);
    set('cd-min', minutes);
    set('cd-sec', seconds);
  }

  updateCountdown();
  const timer = setInterval(updateCountdown, 1000);
  // Pulisce l'intervallo se la sezione viene rimossa
  const obs = new MutationObserver(() => {
    if (!document.contains(root)) { clearInterval(timer); obs.disconnect(); }
  });
  obs.observe(mainContent, { childList: true });
}

/* ═══════════════════════════════════════════════════════════
   Init: Classifiche – Tab switcher
   ═══════════════════════════════════════════════════════════ */
function initClassifiche(root) {
  const tabs   = root.querySelectorAll('.tab-btn');
  const panels = root.querySelectorAll('.tab-panel');

  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const target = root.querySelector(`#panel-${btn.dataset.tab}`);
      if (target) target.classList.add('active');
    });
  });
}

/* ═══════════════════════════════════════════════════════════
   Init: Alloggi – Filter buttons
   ═══════════════════════════════════════════════════════════ */
function initAlloggi(root) {
  const filterBtns = root.querySelectorAll('.filter-btn');
  const cards      = root.querySelectorAll('.hotel-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const type = btn.dataset.filter;
      cards.forEach(card => {
        const show = type === 'all' || card.dataset.type === type;
        card.style.display = show ? '' : 'none';
      });
    });
  });
}

/* ═══════════════════════════════════════════════════════════
   Init: Ristorazione – Filter buttons
   ═══════════════════════════════════════════════════════════ */
function initRistorazione(root) {
  const filterBtns = root.querySelectorAll('.filter-btn');
  const cards      = root.querySelectorAll('.hotel-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const type = btn.dataset.filter;
      cards.forEach(card => {
        const show = type === 'all' || card.dataset.type === type;
        card.style.display = show ? '' : 'none';
      });
    });
  });
}

/* ═══════════════════════════════════════════════════════════
   Init: Luogo – Mappa condizionale (consenso cookie)
   ═══════════════════════════════════════════════════════════ */
function initLuogo(root) {
  const container = root.querySelector('#mapContainer');
  if (container && window.ec2026InitMap) window.ec2026InitMap(container);
}

/* ═══════════════════════════════════════════════════════════
   Language FAB – Toggle menu
   ═══════════════════════════════════════════════════════════ */
const langFabBtn  = document.getElementById('langFabBtn');
const langFabMenu = document.getElementById('langFabMenu');

function openFabMenu() {
  langFabMenu.style.display = 'flex';
  requestAnimationFrame(() => {
    langFabMenu.classList.add('open');
    langFabBtn.setAttribute('aria-expanded', 'true');
  });
}

function closeFabMenu() {
  if (!langFabMenu) return;
  if (!langFabMenu.classList.contains('open')) return;
  langFabMenu.classList.remove('open');
  langFabBtn.setAttribute('aria-expanded', 'false');
  function onTransitionEnd(e) {
    if (e.propertyName === 'opacity') {
      langFabMenu.style.display = 'none';
      langFabMenu.removeEventListener('transitionend', onTransitionEnd);
    }
  }
  langFabMenu.addEventListener('transitionend', onTransitionEnd);
}

if (langFabBtn && langFabMenu) {
  langFabBtn.addEventListener('click', e => {
    e.stopPropagation();
    if (langFabMenu.classList.contains('open')) {
      closeFabMenu();
    } else {
      openFabMenu();
    }
  });

  // Chiudi cliccando fuori
  document.addEventListener('click', e => {
    if (!document.getElementById('langFab').contains(e.target)) {
      closeFabMenu();
    }
  });

  // Chiudi con Esc
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeFabMenu();
  });
}

/* ═══════════════════════════════════════════════════════════
   Touch-active effect su <a href> (touch screen)
   ═══════════════════════════════════════════════════════════ */
(function () {
  if (!('ontouchstart' in window) && navigator.maxTouchPoints === 0) return;

  let touchLink       = null;
  let touchStartY     = 0;
  let scrollCancelled = false;

  document.addEventListener('touchstart', function (e) {
    const link = e.target.closest(
      'a[href], button, .card, .sponsor-card, .sponsor-main, ' +
      '.hotel-card, .transport-card, .news-card, .lang-fab-item, ' +
      '.contatti-card, .ds-contact-card'
    );
    if (!link) return;
    touchLink       = link;
    touchStartY     = e.touches[0].clientY;
    scrollCancelled = false;
    link.classList.add('touch-active');
  }, { passive: true });

  // Rimuove subito la classe se l'utente inizia a scorrere
  document.addEventListener('touchmove', function (e) {
    if (!touchLink || scrollCancelled) return;
    if (Math.abs(e.touches[0].clientY - touchStartY) > 10) {
      touchLink.classList.remove('touch-active');
      scrollCancelled = true;
    }
  }, { passive: true });

  document.addEventListener('touchend', function (e) {
    if (!touchLink) return;
    const link = touchLink;
    touchLink  = null;

    if (scrollCancelled) {
      scrollCancelled = false;
      return;
    }

    e.preventDefault(); // blocca il click sintetico del browser
    setTimeout(function () {
      link.classList.remove('touch-active');
      link.click(); // attiva gli handler esistenti (nav-link, logo, link esterni)
    }, 100);
  });

  document.addEventListener('touchcancel', function () {
    if (touchLink) {
      touchLink.classList.remove('touch-active');
      touchLink = null;
    }
    scrollCancelled = false;
  });
})();

/* ═══════════════════════════════════════════════════════════
   Avvio
   ═══════════════════════════════════════════════════════════ */
const initialSection = location.hash.slice(1) || 'home';
loadSection(initialSection);
