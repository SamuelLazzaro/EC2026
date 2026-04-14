/* ═══════════════════════════════════════════════════════════
   main.js – Navigazione smooth-scroll, countdown, sezioni
   ═══════════════════════════════════════════════════════════ */

const mainContent  = document.getElementById('mainContent');
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navDrawer    = document.getElementById('navDrawer');
const navBackdrop  = document.getElementById('navBackdrop');
const logoHome     = document.getElementById('logoHome');


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
   Navigazione: click sui link del drawer
   ═══════════════════════════════════════════════════════════ */
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const section = link.dataset.section;
    const target  = document.getElementById(section);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
    const hash = section === 'home' ? '' : '#' + section;
    history.pushState(null, '', location.pathname + location.search + hash);
    closeNav();
  });
});

/* ── Click sul logo → home ───────────────────────────────── */
logoHome.addEventListener('click', e => {
  e.preventDefault();
  const target = document.getElementById('home');
  if (target) target.scrollIntoView({ behavior: 'smooth' });
  history.pushState(null, '', location.pathname + location.search);
  closeNav();
});

/* ── Navigazione back/forward del browser ────────────────── */
window.addEventListener('popstate', () => {
  const id     = location.hash.slice(1) || 'home';
  const target = document.getElementById(id);
  if (target) target.scrollIntoView({ behavior: 'smooth' });
});


/* ═══════════════════════════════════════════════════════════
   IntersectionObserver – aggiorna il link attivo durante lo scroll
   ═══════════════════════════════════════════════════════════ */
const sectionIds = ['home', 'luogo', 'news', 'sponsor', 'alloggi', 'ristorazione', 'classifiche', 'contatti'];

const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      document.querySelectorAll('.nav-link').forEach(l =>
        l.classList.toggle('active', l.dataset.section === id)
      );
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sectionIds.forEach(id => {
  const el = document.getElementById(id);
  if (el) navObserver.observe(el);
});


/* ═══════════════════════════════════════════════════════════
   Init: Home – Countdown
   ═══════════════════════════════════════════════════════════ */
function initHome() {
  const root      = document.getElementById('home');
  const eventDate = new Date('2026-07-19T00:00:00');

  function updateCountdown() {
    const now  = new Date();
    const diff = eventDate - now;
    if (diff <= 0) {
      ['cd-days', 'cd-hours', 'cd-min', 'cd-sec'].forEach(id => {
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
    set('cd-days',  days);
    set('cd-hours', hours);
    set('cd-min',   minutes);
    set('cd-sec',   seconds);
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
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
initHome();
initClassifiche(document.getElementById('classifiche'));
initAlloggi(document.getElementById('alloggi'));
initRistorazione(document.getElementById('ristorazione'));
initLuogo(document.getElementById('luogo'));

// Scroll iniziale se l'URL contiene un hash
const initialId = location.hash.slice(1);
if (initialId) {
  const initialEl = document.getElementById(initialId);
  if (initialEl) {
    // Piccolo delay per consentire al browser di renderizzare la pagina
    requestAnimationFrame(() => initialEl.scrollIntoView({ behavior: 'auto' }));
  }
}
