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
const sectionIds = ['home', 'luogo', 'parcheggi', 'impianto', 'sponsor', 'comunicazioni', 'biglietti', 'programma', 'maratona', 'classifiche', 'alloggi', 'ristorazione', 'contatti'];

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
   Init: Ristorazione – Menù giornaliero della mensa (Sagre Prelibate)
   ═══════════════════════════════════════════════════════════ */
/**
 * Build the daily canteen-menu widget inside the Ristorazione section.
 *
 * The data (MENSA_MENU, from js/menu-data.js) is a list of days, each with a
 * `lunch` and `dinner` array of options; every option is a list of course
 * lines available in Italian and English. Only IT/EN exist in the source, so
 * dish text uses Italian for the `it` locale and English for every other
 * language (the same EN fallback used across the site). Fixed labels
 * (Lunch/Dinner/…, weekday names) are localised in all six languages via the
 * i18n `t()` helper and `Intl`.
 *
 * UI: a horizontal day selector (defaulting to today while the event runs,
 * otherwise the first day) plus one panel showing that day's lunch and dinner.
 * Re-renders on the `langchange` event.
 * @param {HTMLElement|null} root - The Ristorazione section root element.
 */
function initMensaMenu(root) {
  if (!root || typeof MENSA_MENU === 'undefined') return;

  const selector = root.querySelector('#mensaDaySelector');
  const panel    = root.querySelector('#mensaDayPanel');
  const jumpBtn  = root.querySelector('#mensaMenuJump');
  if (!selector || !panel || MENSA_MENU.length === 0) return;

  // i18n key for the label of each meal option, by position (3rd = vegetarian).
  const OPTION_LABEL_KEYS = ['ristorazione.opt_menu1', 'ristorazione.opt_menu2', 'ristorazione.opt_veg'];
  const VEGETARIAN_INDEX  = 2;

  // Dish text is stored only in IT/EN: use Italian for the IT locale, English
  // (the site-wide fallback) for every other language.
  const dishLang = () => (currentLang === 'it' ? 'it' : 'en');

  // Day shown first: today if the championship is running, otherwise day one.
  // 'en-CA' formats the local date as YYYY-MM-DD, matching the data `date` key.
  const todayIso = new Date().toLocaleDateString('en-CA');
  let selectedIndex = MENSA_MENU.findIndex(day => day.date === todayIso);
  if (selectedIndex === -1) selectedIndex = 0;

  /**
   * Build one meal card (lunch or dinner) with its labelled options.
   * @param {string} mealKey - 'lunch' or 'dinner' (used for the i18n label).
   * @param {Array<{it:string[],en:string[]}>} options - Options for the day.
   * @returns {string} Meal-card HTML, or '' when there are no options.
   */
  const renderMeal = (mealKey, options) => {
    if (!options || options.length === 0) return '';
    const lang = dishLang();

    const optionsHtml = options.map((option, index) => {
      // A null slot means that position is not served that day while a later
      // one is (e.g. only menu 1 + the vegetarian option 3). The index is kept
      // so the remaining options keep their label and the vegetarian tag.
      if (!option) return '';
      const labelKey     = OPTION_LABEL_KEYS[index] || OPTION_LABEL_KEYS[OPTION_LABEL_KEYS.length - 1];
      const isVegetarian = index === VEGETARIAN_INDEX;
      const courseLines  = (option[lang] || option.it || [])
        .map(line => `<span class="mensa-dish-line">${line}</span>`)
        .join('');
      return `
        <div class="mensa-option${isVegetarian ? ' is-veg' : ''}">
          <span class="mensa-option-label">${t(labelKey)}</span>
          <div class="mensa-dish">${courseLines}</div>
        </div>`;
    }).join('');

    return `
      <div class="mensa-meal">
        <div class="mensa-meal-head">${t('ristorazione.meal_' + mealKey)}</div>
        <div class="mensa-option-list">${optionsHtml}</div>
      </div>`;
  };

  /** Render the lunch/dinner panel for the currently selected day. */
  const renderPanel = () => {
    const day        = MENSA_MENU[selectedIndex];
    const hasLunch   = day.lunch && day.lunch.length > 0;
    const noLunchNote = hasLunch
      ? ''
      : `<p class="mensa-note">${t('ristorazione.mensa_no_lunch')}</p>`;
    panel.innerHTML =
      `<div class="mensa-meals">${renderMeal('lunch', day.lunch)}${renderMeal('dinner', day.dinner)}</div>${noLunchNote}`;
  };

  /** (Re)build the day-selector buttons in the active language. */
  const renderSelector = () => {
    selector.innerHTML = '';
    MENSA_MENU.forEach((day, index) => {
      const date    = new Date(day.date + 'T00:00:00');
      const weekday = date.toLocaleDateString(currentLang, { weekday: 'short' });
      const dayNum  = date.getDate();

      const btn = document.createElement('button');
      btn.type      = 'button';
      btn.className = 'mensa-day-btn' + (index === selectedIndex ? ' active' : '');
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', index === selectedIndex ? 'true' : 'false');
      btn.innerHTML =
        `<span class="mensa-day-weekday">${weekday}</span><span class="mensa-day-num">${dayNum}</span>`;

      btn.addEventListener('click', () => {
        selectedIndex = index;
        selector.querySelectorAll('.mensa-day-btn').forEach((otherBtn, otherIndex) => {
          const isActive = otherIndex === selectedIndex;
          otherBtn.classList.toggle('active', isActive);
          otherBtn.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });
        renderPanel();
      });
      selector.appendChild(btn);
    });
  };

  const render = () => {
    renderSelector();
    renderPanel();
  };

  render();

  // "Vedi il menù" button on the Sagre Prelibate card: smooth-scroll to this
  // block without touching the hash-based section routing.
  if (jumpBtn) {
    jumpBtn.addEventListener('click', e => {
      e.preventDefault();
      root.querySelector('#menuMensa').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // Language switch: re-render dish text, weekday and fixed labels.
  document.addEventListener('langchange', render);
}

/* ═══════════════════════════════════════════════════════════
   Init: Comunicazioni – Avvisi ufficiali/urgenti
   ═══════════════════════════════════════════════════════════ */
/**
 * Render the official-notices ("Comunicazioni") section from the
 * COMUNICAZIONI data array (js/comunicazioni-data.js).
 *
 * What it does and why:
 *  - Notices are sorted by urgency (urgent → warning → info) so the
 *    most important always surfaces first, regardless of array order.
 *    A stable sort keeps same-level notices in their authored order.
 *  - Each notice becomes a card with a coloured level badge (label
 *    localised via i18n keys `comunicazioni.level_*`) and its title /
 *    body taken from the notice's own per-language objects.
 *  - A notice body may embed the token "{link}"; it is replaced by an
 *    inline anchor whose click smooth-scrolls to the element named in
 *    `notice.link.target` (used to point to the detailed-schedule
 *    button in the Programma section) instead of following an href.
 *  - Re-renders on the `langchange` event so text and labels follow
 *    the active language, mirroring the other localized widgets.
 *
 * @param {HTMLElement|null} root - The Comunicazioni section root element.
 */
function initComunicazioni(root) {
  if (!root || typeof COMUNICAZIONI === 'undefined') return;

  const list = root.querySelector('#comunicazioniList');
  if (!list || COMUNICAZIONI.length === 0) return;

  // Lower rank = higher on the page. Unknown levels fall to the bottom.
  const LEVEL_RANK = { urgent: 0, warning: 1, info: 2 };
  const rankOf = (level) => (level in LEVEL_RANK ? LEVEL_RANK[level] : 99);

  // Inline SVG icon per level (kept here, not in data, since it is
  // presentation and shared by every notice of the same level).
  const LEVEL_ICONS = {
    urgent:
      '<path d="M12 2 1 21h22L12 2z"></path><line x1="12" y1="9" x2="12" y2="14"></line><line x1="12" y1="17.5" x2="12.01" y2="17.5"></line>',
    warning:
      '<path d="M12 2 1 21h22L12 2z"></path><line x1="12" y1="9" x2="12" y2="14"></line><line x1="12" y1="17.5" x2="12.01" y2="17.5"></line>',
    info:
      '<circle cx="12" cy="12" r="9"></circle><line x1="12" y1="11" x2="12" y2="16"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>'
  };

  // Pick the active-language string, falling back to EN then IT.
  const pick = (byLang) => byLang[currentLang] || byLang.en || byLang.it || '';

  /**
   * Turn a notice body into HTML, replacing the "{link}" token (if any)
   * with an inline anchor carrying the scroll target in a data-attr.
   * @param {object} notice
   * @returns {string}
   */
  const renderBody = (notice) => {
    const text = pick(notice.body);
    if (!notice.link || !text.includes('{link}')) return text;
    const label  = pick(notice.link.label);
    const anchor =
      `<a class="comunicazione-link" href="#" data-target="${notice.link.target}">${label}</a>`;
    return text.replace('{link}', anchor);
  };

  const render = () => {
    const ordered = COMUNICAZIONI
      .map((notice, index) => ({ notice, index }))
      .sort((a, b) =>
        rankOf(a.notice.level) - rankOf(b.notice.level) || a.index - b.index)
      .map(entry => entry.notice);

    list.innerHTML = ordered.map(notice => {
      const iconPaths = LEVEL_ICONS[notice.level] || LEVEL_ICONS.info;
      return `
        <li class="comunicazione" data-level="${notice.level}">
          <div class="comunicazione-head">
            <svg class="comunicazione-icon" viewBox="0 0 24 24" width="20" height="20" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              aria-hidden="true">${iconPaths}</svg>
            <span class="comunicazione-level">${t('comunicazioni.level_' + notice.level)}</span>
          </div>
          <h3 class="comunicazione-title">${pick(notice.title)}</h3>
          <p class="comunicazione-body">${renderBody(notice)}</p>
        </li>`;
    }).join('');

    // Wire the internal inline links (those with a data-target) to
    // smooth-scroll to their target element (e.g. the detailed-schedule
    // button) without changing the hash. Links without data-target
    // (e.g. an external Google Maps link) keep their normal behaviour.
    list.querySelectorAll('.comunicazione-link[data-target]').forEach(anchor => {
      anchor.addEventListener('click', e => {
        e.preventDefault();
        const target = document.getElementById(anchor.dataset.target);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    });
  };

  render();
  document.addEventListener('langchange', render);
}

/* ═══════════════════════════════════════════════════════════
   Init: Luogo – Mappa condizionale (consenso cookie)
   ═══════════════════════════════════════════════════════════ */
function initLuogo(root) {
  const container = root.querySelector('#mapContainer');
  if (container && window.ec2026InitMap) window.ec2026InitMap(container);
}

/* ═══════════════════════════════════════════════════════════
   Init: Parcheggi – Mappe condizionali (consenso cookie)
   ═══════════════════════════════════════════════════════════ */
function initParcheggi(root) {
  /* Parking maps: same consent gating as the main venue map */
  const parkingContainer = root.querySelector('#parkingMapContainer');
  if (parkingContainer && window.ec2026InitMap) window.ec2026InitMap(parkingContainer);

  const parkingContainer2 = root.querySelector('#parkingMapContainer2');
  if (parkingContainer2 && window.ec2026InitMap) window.ec2026InitMap(parkingContainer2);

  const parkingContainer3 = root.querySelector('#parkingMapContainer3');
  if (parkingContainer3 && window.ec2026InitMap) window.ec2026InitMap(parkingContainer3);
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
      '.hotel-card, .transport-card, .lang-fab-item, ' +
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
initMensaMenu(document.getElementById('ristorazione'));
initComunicazioni(document.getElementById('comunicazioni'));
initLuogo(document.getElementById('luogo'));
initParcheggi(document.getElementById('parcheggi'));
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
