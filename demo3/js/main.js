const BASE = document.querySelector('meta[name="base-path"]')?.content || '';
const PARTIAL_BASE = BASE + '/partials';

async function loadPartials() {
  const slots = [
    [document.getElementById('site-header'), `${PARTIAL_BASE}/header.html`],
    [document.getElementById('site-footer'), `${PARTIAL_BASE}/footer.html`]
  ];
  await Promise.all(slots.map(async ([el, url]) => {
    if (!el) return;
    try {
      const r = await fetch(url, { cache: 'no-cache' });
      if (r.ok) el.innerHTML = await r.text();
    } catch (e) { console.warn('Partial load failed:', url, e); }
  }));
}

function setupScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const t = document.querySelector(a.getAttribute('href'));
      if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function setupHeaderShadow() {
  const h = document.querySelector('.header');
  if (!h) return;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        h.classList.toggle('scrolled', window.scrollY > 40);
        ticking = false;
      });
      ticking = true;
    }
  });
}

function setupNavToggle() {
  const btn = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('mobile-open');
    btn.setAttribute('aria-expanded', open);
  });
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('mobile-open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
  // close on outside click
  document.addEventListener('click', e => {
    if (!nav.contains(e.target) && !btn.contains(e.target) && nav.classList.contains('mobile-open')) {
      nav.classList.remove('mobile-open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
}

function setupLang() {
  const sel = document.querySelector('.lang-select');
  const apply = lang => {
    document.querySelectorAll('[data-i18n-en]').forEach(el => {
      el.textContent = el.getAttribute(`data-i18n-${lang}`) || el.getAttribute('data-i18n-en');
    });
    document.querySelectorAll('[data-i18n-placeholder-en]').forEach(el => {
      el.placeholder = el.getAttribute(`data-i18n-placeholder-${lang}`) || el.getAttribute('data-i18n-placeholder-en');
    });
  };
  if (!sel) return;
  const lang = localStorage.getItem('ttmath-lang') || sel.value || 'en';
  sel.value = lang;
  apply(lang);
  sel.addEventListener('change', () => {
    localStorage.setItem('ttmath-lang', sel.value);
    apply(sel.value);
  });
}

// Intersection observer for reveal + counter
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('revealed');
      if (e.target.classList.contains('stat-card')) animateCounter(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

function setupReveal() {
  const sel = '.stat-card,.showcase-card,.program-card-large,.news-card,.card,.highlight-card,.note-card,.announcement-bar,.achievement-card,.contact-item,.section-head,.contest-hero-content,.timeline-node,.deadline-card,.subnav-inner,.compact-upcoming,.contest-index-row,.pathway-card,.experience-card,.track-card,.intro-panel,.focus-card,.math-path-card,.math-domain-card,.course-card';
  document.querySelectorAll(sel).forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${(i % 4) * 80}ms`;
    io.observe(el);
  });
  document.querySelectorAll('.section-title,.page-header h1').forEach(el => {
    el.classList.add('reveal');
    io.observe(el);
  });
}

function animateCounter(el) {
  const n = el.querySelector('.stat-number');
  if (!n || n.dataset.done) return;
  n.dataset.done = '1';
  const txt = n.textContent, m = txt.match(/(\d+)/);
  if (!m) return;
  const target = +m[0], suffix = txt.replace(m[0], '');
  let cur = 0;
  const step = target / 50, iv = setInterval(() => {
    cur += step;
    if (cur >= target) { clearInterval(iv); n.textContent = target + suffix; }
    else n.textContent = Math.floor(cur) + suffix;
  }, 25);
}

function setupImages() {
  document.querySelectorAll('img').forEach(img => {
    if (img.complete) img.classList.add('loaded');
    else img.addEventListener('load', () => img.classList.add('loaded'));
  });
}

function setActiveNav() {
  const p = location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav a').forEach(a => {
    const h = (a.getAttribute('href') || '').replace(/\/$/, '') || '/';
    a.classList.toggle('active', p === h || p.endsWith(h) || (h === '/' && (p === '/' || p.endsWith('index.html'))));
  });
}

function setupForm() {
  document.querySelectorAll('form').forEach(f => {
    f.addEventListener('submit', e => {
      let ok = true;
      f.querySelectorAll('[required]').forEach(i => {
        if (!i.value.trim()) { ok = false; i.classList.add('error'); }
        else i.classList.remove('error');
      });
      if (!ok) e.preventDefault();
    });
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  document.body.classList.add('layout-loading');
  await loadPartials();
  document.body.classList.add('layout-ready');
  document.body.classList.remove('layout-loading');
  document.body.classList.add('is-loaded');
  setupScroll();
  setupHeaderShadow();
  setupNavToggle();
  setupLang();
  setupReveal();
  setupImages();
  setActiveNav();
  setupForm();
});
