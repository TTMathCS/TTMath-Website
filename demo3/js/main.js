// Shared header/footer for subpages
(function() {
  var base = '/TTMath-Website/demo3';
  var headerEl = document.getElementById('site-header');
  var footerEl = document.getElementById('site-footer');
  if (headerEl) {
    headerEl.innerHTML = '<header class="header"><div class="container">' +
      '<a href="' + base + '/" class="logo"><img src="' + base + '/images/logo.png" alt="TTMath School" class="logo-img"></a>' +
      '<nav class="nav">' +
      '<a href="' + base + '/" data-i18n-en="Home" data-i18n-zh="首页">Home</a>' +
      '<a href="' + base + '/about/" data-i18n-en="About Us" data-i18n-zh="关于我们">About Us</a>' +
      '<a href="' + base + '/curriculum/" data-i18n-en="Curriculum" data-i18n-zh="课程体系">Curriculum</a>' +
      '<a href="' + base + '/contest/" data-i18n-en="Contests" data-i18n-zh="竞赛">Contests</a>' +
      '<a href="' + base + '/ccc-submission-dashboard/" data-i18n-en="CCC Dashboard" data-i18n-zh="CCC 报告">CCC Dashboard</a>' +
      '<a href="' + base + '/achievements/" data-i18n-en="Achievements" data-i18n-zh="成就">Achievements</a>' +
      '<a href="' + base + '/contact/" data-i18n-en="Contact" data-i18n-zh="联系">Contact</a>' +
      '</nav>' +
      '<div class="header-right">' +
      '<button class="nav-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false">' +
      '<span class="nav-toggle-text" data-i18n-en="Menu" data-i18n-zh="菜单">Menu</span>' +
      '<span class="nav-toggle-icon"></span></button>' +
      '<select class="lang-select"><option value="en">EN</option><option value="zh">中文</option></select>' +
      '</div></div></header>';
  }
  if (footerEl) {
    footerEl.innerHTML = '<footer class="footer"><div class="container"><div class="footer-grid">' +
      '<div class="footer-brand"><img src="' + base + '/images/logo.png" alt="TTMath School" class="footer-logo">' +
      '<p data-i18n-en="Excellence in mathematics education since 2010." data-i18n-zh="自2010年以来专注数学教育。">Excellence in mathematics education since 2010.</p></div>' +
      '<div><h4 data-i18n-en="Programs" data-i18n-zh="课程">Programs</h4>' +
      '<a href="' + base + '/curriculum/" data-i18n-en="Competition Math" data-i18n-zh="竞赛数学">Competition Math</a>' +
      '<a href="' + base + '/curriculum/" data-i18n-en="Computer Science" data-i18n-zh="计算机科学">Computer Science</a>' +
      '<a href="' + base + '/curriculum/" data-i18n-en="Funmath" data-i18n-zh="趣味数学">Funmath</a></div>' +
      '<div><h4 data-i18n-en="Quick Links" data-i18n-zh="快速链接">Quick Links</h4>' +
      '<a href="' + base + '/about/" data-i18n-en="About Us" data-i18n-zh="关于我们">About Us</a>' +
      '<a href="' + base + '/achievements/" data-i18n-en="Achievements" data-i18n-zh="成就">Achievements</a>' +
      '<a href="' + base + '/contact/" data-i18n-en="Contact" data-i18n-zh="联系">Contact</a></div>' +
      '<div><h4 data-i18n-en="Contact" data-i18n-zh="联系">Contact</h4>' +
      '<p>info@ttmath.ca</p><p>905-604-9339</p><p>590 Alden Rd Unit 101<br>Markham, ON L3R 8N2</p></div>' +
      '</div><div class="footer-bottom">' +
      '<p data-i18n-en="© 2025 TTMath School. All rights reserved." data-i18n-zh="© 2025 TTMath School. 保留所有权利。">© 2025 TTMath School. All rights reserved.</p>' +
      '</div></div></footer>';
  }
})();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.pageYOffset > 50);
});

const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      if (entry.target.classList.contains('stat-card')) animateCounter(entry.target);
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('is-loaded');

  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  const languageSelect = document.querySelector('.lang-select');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('mobile-open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (nav.classList.contains('mobile-open')) {
          nav.classList.remove('mobile-open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  const applyLanguage = (lang) => {
    document.querySelectorAll('[data-i18n-en]').forEach(el => {
      const v = el.getAttribute(`data-i18n-${lang}`) || el.getAttribute('data-i18n-en');
      if (v) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-placeholder-en]').forEach(el => {
      const v = el.getAttribute(`data-i18n-placeholder-${lang}`) || el.getAttribute('data-i18n-placeholder-en');
      if (v) el.setAttribute('placeholder', v);
    });
  };

  if (languageSelect) {
    const saved = localStorage.getItem('ttmath-lang');
    const lang = saved || languageSelect.value || 'en';
    languageSelect.value = lang;
    applyLanguage(lang);
    languageSelect.addEventListener('change', () => {
      const l = languageSelect.value;
      localStorage.setItem('ttmath-lang', l);
      applyLanguage(l);
    });
  }

  const revealEls = document.querySelectorAll(
    '.stat-card, .showcase-card, .program-card-large, .news-card, .card, .highlight-card, .note-card, .announcement-bar, .achievement-card, .contact-item, .section-head, .contest-hero-content, .timeline-node, .deadline-card, .subnav-inner, .compact-upcoming, .contest-index-row, .pathway-card, .experience-card, .track-card, .intro-panel, .focus-card, .math-path-card, .math-domain-card, .course-card'
  );
  revealEls.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${i % 4 * 0.1}s`;
    observer.observe(el);
  });

  document.querySelectorAll('.section-title, .page-header h1').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
});

function animateCounter(el) {
  const n = el.querySelector('.stat-number');
  if (!n || n.dataset.animated) return;
  n.dataset.animated = 'true';
  const text = n.textContent, match = text.match(/(\d+)/);
  if (!match) return;
  const target = parseInt(match[0]), suffix = text.replace(match[0], '');
  const dur = 1200;
  const start = performance.now();
  function ease(t) { return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; }
  function tick(now) {
    const t = Math.min((now - start) / dur, 1);
    const v = Math.floor(ease(t) * target);
    n.textContent = v + suffix;
    if (t < 1) requestAnimationFrame(tick);
    else n.textContent = target + suffix;
  }
  requestAnimationFrame(tick);
}

document.querySelectorAll('img').forEach(img => {
  if (img.complete) img.classList.add('loaded');
  else img.addEventListener('load', () => img.classList.add('loaded'));
});

var path = window.location.pathname;
document.querySelectorAll('.nav a').forEach(link => {
  var href = link.getAttribute('href');
  var match = (href === path) || (href + 'index.html' === path) ||
    (path.endsWith('/') && href.endsWith('/') && path === href);
  link.classList.toggle('active', match);
});

document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', function(e) {
    let valid = true;
    form.querySelectorAll('input[required], select[required], textarea[required]').forEach(input => {
      if (!input.value.trim()) { valid = false; input.classList.add('error'); }
      else input.classList.remove('error');
    });
    if (!valid) e.preventDefault();
  });
});
