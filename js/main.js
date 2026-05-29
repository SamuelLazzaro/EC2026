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
const sectionIds = ['home', 'luogo', 'impianto', 'news', 'sponsor', 'programma', 'alloggi', 'ristorazione', 'maratona', 'classifiche', 'contatti'];

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
   Init: Maratona – Mappa percorso condizionale (consenso cookie)
   ═══════════════════════════════════════════════════════════ */
/**
 * Initialize the marathon route map. The map iframe is loaded only
 * after the user has granted consent for third-party Google Maps
 * cookies (same gating used in the Luogo section).
 *
 * The map URL is built dynamically from data-attributes on the
 * container (see cookie.js): when the viewport crosses one of the
 * configured breakpoints we reload the iframe so that Google Maps
 * picks up the right zoom level for the new viewport width — the
 * embed has no native auto-fit, so this reload is what keeps the
 * full marathon route visible on every screen size.
 * @param {HTMLElement} root - The Maratona section root element.
 */
function initMaratona(root) {
  const container = root.querySelector('#maratonaMapContainer');
  if (!container || !window.ec2026InitMap) return;
  window.ec2026InitMap(container);

  if (!window.ec2026RefreshMap) return;
  const mqMobile = window.matchMedia('(max-width: 640px)');
  const mqTablet = window.matchMedia('(max-width: 860px)');
  const onBreakpointChange = () => window.ec2026RefreshMap(container);
  mqMobile.addEventListener('change', onBreakpointChange);
  mqTablet.addEventListener('change', onBreakpointChange);
}

/* ═══════════════════════════════════════════════════════════
   Init: Venue carousel – scroll-snap + indicator sync
   ═══════════════════════════════════════════════════════════ */
/**
 * Initialize the venue photo carousel inside the Impianto section.
 * Highlights the active indicator via IntersectionObserver and
 * lets the user jump to a slide by clicking on an indicator bar.
 * @param {HTMLElement} root - The Impianto section root element.
 */
function initVenueCarousel(root) {
  const track = root.querySelector('#venueCarouselTrack');
  const indicators = root.querySelector('#venueCarouselIndicators');
  if (!track || !indicators) return;

  const slides = Array.from(track.children);
  const bars = Array.from(indicators.querySelectorAll('.venue-carousel-bar'));
  if (slides.length === 0 || slides.length !== bars.length) return;

  bars.forEach((bar, index) => {
    bar.addEventListener('click', () => {
      slides[index].scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
      });
    });
  });

  const prevBtn = root.querySelector('#venueCarouselPrev');
  const nextBtn = root.querySelector('#venueCarouselNext');
  let currentIndex = 0;

  /**
   * Scroll the carousel to a given slide index and refresh arrow disabled state.
   * @param {number} index
   */
  const goToSlide = (index) => {
    const clamped = Math.max(0, Math.min(slides.length - 1, index));
    slides[clamped].scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest'
    });
  };

  const updateArrowState = () => {
    if (prevBtn) prevBtn.disabled = currentIndex === 0;
    if (nextBtn) nextBtn.disabled = currentIndex === slides.length - 1;
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
        const index = slides.indexOf(entry.target);
        if (index === -1) return;
        currentIndex = index;
        bars.forEach((b, i) => b.classList.toggle('is-active', i === index));
        updateArrowState();
      }
    });
  }, {
    root: track,
    threshold: [0.6]
  });

  slides.forEach((slide) => observer.observe(slide));

  if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));
  updateArrowState();
}

/* ═══════════════════════════════════════════════════════════
   Init: Venue videos – stacked vs side-by-side responsive layout
   ═══════════════════════════════════════════════════════════ */
/**
 * Switch the venue videos layout from stacked (column) to side-by-side
 * (row) when both videos can't fit vertically inside the visible
 * viewport area (viewport height minus the sticky header).
 * Re-evaluates on window resize.
 * @param {HTMLElement} root - The Impianto section root element.
 */
function initVenueVideosLayout(root) {
  const wrapper = root.querySelector('.venue-videos');
  if (!wrapper) return;
  const videos = Array.from(wrapper.querySelectorAll('.venue-video'));
  if (videos.length < 2) return;

  const VIDEO_RATIO = 9 / 16;
  // Tolerance >1 keeps the layout stacked even when it slightly overflows the
  // viewport, postponing the switch to side-by-side until the wrapper is wide
  // enough that two videos in a row are still comfortably sized (otherwise
  // there is a range of widths in which side-by-side videos look tiny).
  const STACKED_OVERFLOW_TOLERANCE = 1.3;

  const evaluateLayout = () => {
    const wrapperWidth = wrapper.clientWidth;
    if (wrapperWidth === 0) return;
    const gapPx = parseFloat(
      getComputedStyle(wrapper).rowGap || getComputedStyle(wrapper).gap || '0'
    ) || 0;
    const stackedHeight = videos.length * (wrapperWidth * VIDEO_RATIO) + (videos.length - 1) * gapPx;
    const headerH = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue('--header-h')
    ) || 0;
    const availableHeight = (window.innerHeight - headerH) * STACKED_OVERFLOW_TOLERANCE;
    wrapper.classList.toggle('is-side-by-side', stackedHeight > availableHeight);
  };

  evaluateLayout();
  window.addEventListener('resize', evaluateLayout);
}

/* ═══════════════════════════════════════════════════════════
   Init: Venue videos – pause when out of viewport
   ═══════════════════════════════════════════════════════════ */
/**
 * Pauses each venue video when it scrolls out of the viewport and
 * resumes it when it scrolls back in. Saves bandwidth/CPU on long
 * sessions where the user is far from the Impianto section.
 * @param {HTMLElement} root - The Impianto section root element.
 */
function initVenueVideosVisibility(root) {
  const videos = Array.from(root.querySelectorAll('.venue-video'));
  if (videos.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const video = entry.target;
      if (entry.isIntersecting) {
        const playPromise = video.play();
        if (playPromise && typeof playPromise.catch === 'function') {
          // Browsers may reject play() (e.g. autoplay policy on some setups);
          // ignore — the user can press the controls manually.
          playPromise.catch(() => {});
        }
      } else if (!video.paused) {
        video.pause();
      }
    });
  }, {
    threshold: 0
  });

  videos.forEach((video) => observer.observe(video));
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
initMaratona(document.getElementById('maratona'));
initVenueCarousel(document.getElementById('impianto'));
initVenueVideosLayout(document.getElementById('impianto'));
initVenueVideosVisibility(document.getElementById('impianto'));

// Scroll iniziale se l'URL contiene un hash
const initialId = location.hash.slice(1);
if (initialId) {
  const initialEl = document.getElementById(initialId);
  if (initialEl) {
    // Piccolo delay per consentire al browser di renderizzare la pagina
    requestAnimationFrame(() => initialEl.scrollIntoView({ behavior: 'auto' }));
  }
}
