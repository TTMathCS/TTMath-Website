var still = matchMedia('(prefers-reduced-motion: reduce)').matches;
var sky = document.querySelector('.sky-stage');
var coords = sky.querySelector('.coords');
var discovery = sky.querySelector('.discovery-card');
var constellation = sky.querySelector('.constellations polyline');
var trail = [];

var formulas = [
  {
    title: 'Euler identity',
    formula: 'e^(iπ) + 1 = 0',
    note: 'Five essential constants meeting in one line.'
  },
  {
    title: 'Pythagorean theorem',
    formula: 'a^2 + b^2 = c^2',
    note: 'The oldest right-triangle compass.'
  },
  {
    title: 'Cauchy-Schwarz',
    formula: '(Σa_i b_i)^2 ≤ (Σa_i^2)(Σb_i^2)',
    note: 'A quiet engine behind olympiad inequalities.'
  },
  {
    title: "Fermat's little theorem",
    formula: 'a^p ≡ a (mod p)',
    note: 'Prime numbers leaving a modular fingerprint.'
  },
  {
    title: 'Pascal identity',
    formula: 'C(n,k) = C(n-1,k-1) + C(n-1,k)',
    note: 'Combinations growing one row at a time.'
  },
  {
    title: 'Bayes theorem',
    formula: 'P(A|B) = P(B|A)P(A) / P(B)',
    note: 'A rule for updating belief when evidence arrives.'
  },
  {
    title: 'Infinite primes',
    formula: 'There are infinitely many primes.',
    note: 'Euclid made infinity feel inevitable.'
  },
  {
    title: 'Golden ratio',
    formula: 'φ = (1 + √5) / 2',
    note: 'A recurrence, a spiral, and a proportion.'
  }
];

var mathematicians = [
  {
    name: 'Archimedes',
    src: '../assets/img/mathematicians/archimedes.jpg',
    note: 'Geometry, levers, and the method of exhaustion.'
  },
  {
    name: 'Leonhard Euler',
    src: '../assets/img/mathematicians/euler.jpg',
    note: 'Graph theory, analysis, notation, and the identity.'
  },
  {
    name: 'Carl Friedrich Gauss',
    src: '../assets/img/mathematicians/gauss.jpg',
    note: 'Number theory, geometry, statistics, and magnetism.'
  },
  {
    name: 'Ada Lovelace',
    src: '../assets/img/mathematicians/lovelace.jpg',
    note: 'An early vision of symbolic computation.'
  },
  {
    name: 'Isaac Newton',
    src: '../assets/img/mathematicians/newton.jpg',
    note: 'Calculus, motion, optics, and mathematical physics.'
  },
  {
    name: 'Emmy Noether',
    src: '../assets/img/mathematicians/noether.jpg',
    note: 'Symmetry, conservation laws, and modern algebra.'
  },
  {
    name: 'Srinivasa Ramanujan',
    src: '../assets/img/mathematicians/ramanujan.jpg',
    note: 'Infinite series, partitions, and startling identities.'
  },
  {
    name: 'Alan Turing',
    src: '../assets/img/mathematicians/turing.jpg',
    note: 'Computability, codebreaking, and machine intelligence.'
  }
];

function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

// The two hero curves draw themselves on load.
document.querySelectorAll('.curve').forEach(function (p, i) {
  if (still) return;
  var L = p.getTotalLength();
  p.style.strokeDasharray = L;
  p.style.strokeDashoffset = L;
  p.style.transition = 'stroke-dashoffset 1.7s ease ' + (0.4 + i * 0.35) + 's';
  requestAnimationFrame(function () {
    requestAnimationFrame(function () { p.style.strokeDashoffset = 0; });
  });
});

// Sprinkle a night sky inside the compact Cartesian panel.
for (var i = 0; i < 72; i++) {
  var s = document.createElement('span');
  s.className = 'star';
  var sz = 1 + Math.random() * 1.6;
  s.style.cssText = 'left:' + (Math.random() * 100) + '%;top:' + (Math.random() * 92) +
    '%;width:' + sz + 'px;height:' + sz + 'px;animation-duration:' +
    (2 + Math.random() * 4) + 's;animation-delay:-' + (Math.random() * 4) + 's';
  sky.insertBefore(s, sky.firstChild);
}

// A shooting star crosses the panel every so often.
function meteor() {
  var m = document.createElement('div');
  m.className = 'meteor';
  m.style.top = (Math.random() * 55) + '%';
  m.style.left = (20 + Math.random() * 68) + '%';
  sky.appendChild(m);
  m.addEventListener('animationend', function () { m.remove(); });
  setTimeout(meteor, 3200 + Math.random() * 6000);
}
if (!still) setTimeout(meteor, 1600);

// Live (x, y) readout: the panel is a real coordinate plane, 26px per unit.
sky.addEventListener('mousemove', function (e) {
  var r = sky.getBoundingClientRect();
  var x = ((e.clientX - r.left) / 26).toFixed(1);
  var y = ((r.bottom - e.clientY) / 26).toFixed(1);
  coords.textContent = '(x, y) = (' + x + ', ' + y + ')';
});

function updateDiscovery(kind, item) {
  discovery.classList.remove('pulse');
  void discovery.offsetWidth;
  discovery.classList.add('pulse');
  while (discovery.firstChild) discovery.firstChild.remove();

  if (kind === 'portrait') {
    var wrap = document.createElement('div');
    var img = document.createElement('img');
    var text = document.createElement('div');
    var kicker = document.createElement('p');
    var name = document.createElement('h3');
    var note = document.createElement('p');

    wrap.className = 'discovery-person';
    kicker.className = 'discovery-kicker';
    img.src = item.src;
    img.alt = item.name + ' portrait';
    kicker.textContent = 'Mathematician cameo';
    name.textContent = item.name;
    note.textContent = item.note;
    text.appendChild(kicker);
    text.appendChild(name);
    text.appendChild(note);
    wrap.appendChild(img);
    wrap.appendChild(text);
    discovery.appendChild(wrap);
    return;
  }

  var label = document.createElement('p');
  var title = document.createElement('h3');
  var formula = document.createElement('p');
  var explainer = document.createElement('p');

  label.className = 'discovery-kicker';
  formula.className = 'formula';
  label.textContent = 'Theorem flash';
  title.textContent = item.title;
  formula.textContent = item.formula;
  explainer.textContent = item.note;
  discovery.appendChild(label);
  discovery.appendChild(title);
  discovery.appendChild(formula);
  discovery.appendChild(explainer);
}

function plotPoint(px, py, r) {
  var d = document.createElement('div');
  d.className = 'dot';
  d.style.left = px + 'px';
  d.style.top = py + 'px';
  d.innerHTML = '<i></i><span>(' + (px / 26).toFixed(1) + ', ' +
                ((r.height - py) / 26).toFixed(1) + ')</span>';
  sky.appendChild(d);

  trail.push([(px / r.width * 100).toFixed(2), (py / r.height * 100).toFixed(2)]);
  if (trail.length > 9) trail.shift();
  constellation.setAttribute('points', trail.map(function (p) { return p[0] + ',' + p[1]; }).join(' '));

  var dots = sky.querySelectorAll('.dot');
  if (dots.length > 18) dots[0].remove();
}

function showFormula(x, y, item) {
  var b = document.createElement('div');
  var star = document.createElement('span');
  var label = document.createElement('span');
  var title = document.createElement('b');
  var formula = document.createElement('em');

  b.className = 'spark-burst';
  b.style.left = x + 'px';
  b.style.top = y + 'px';
  star.className = 'spark-star';
  label.className = 'spark-formula';
  title.textContent = item.title;
  formula.textContent = item.formula;
  label.appendChild(title);
  label.appendChild(formula);
  b.appendChild(star);
  b.appendChild(label);
  sky.appendChild(b);

  b.addEventListener('animationend', function () { b.remove(); });
  cap('.spark-burst', 4);
}

function showPortrait(x, y, item) {
  var card = document.createElement('div');
  var img = document.createElement('img');
  var name = document.createElement('b');
  var note = document.createElement('span');

  card.className = 'portrait-burst';
  card.style.left = x + 'px';
  card.style.top = y + 'px';
  img.src = item.src;
  img.alt = item.name + ' portrait';
  name.textContent = item.name;
  note.textContent = 'legend unlocked';
  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(note);
  sky.appendChild(card);

  card.addEventListener('animationend', function () { card.remove(); });
  cap('.portrait-burst', 3);
}

function cap(selector, limit) {
  var nodes = sky.querySelectorAll(selector);
  while (nodes.length > limit) {
    nodes[0].remove();
    nodes = sky.querySelectorAll(selector);
  }
}

function discover(px, py) {
  var r = sky.getBoundingClientRect();
  var safeX = clamp(px, 86, r.width - 86);
  var safeY = clamp(py, 70, r.height - 110);
  var portrait = Math.random() < 0.44;
  var item = portrait ? pick(mathematicians) : pick(formulas);

  plotPoint(px, py, r);
  updateDiscovery(portrait ? 'portrait' : 'formula', item);
  if (portrait) showPortrait(safeX, safeY, item);
  else showFormula(safeX, safeY, item);
}

sky.addEventListener('click', function (e) {
  var r = sky.getBoundingClientRect();
  discover(e.clientX - r.left, e.clientY - r.top);
});

sky.addEventListener('keydown', function (e) {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  e.preventDefault();
  var r = sky.getBoundingClientRect();
  discover(90 + Math.random() * (r.width - 180), 80 + Math.random() * (r.height - 170));
});

// The fixed y-axis ruler tracks scroll depth.
var marker = document.querySelector('.yaxis .marker');
function ruler() {
  var max = document.documentElement.scrollHeight - innerHeight;
  var p = max > 0 ? scrollY / max : 0;
  var track = marker.parentElement.clientHeight - 12;
  marker.style.top = p * track + 'px';
  marker.setAttribute('data-v', Math.round(p * 100));
}
addEventListener('scroll', function () { requestAnimationFrame(ruler); }, { passive: true });
ruler();

// Fade blocks in on scroll, grid items staggered.
var items = document.querySelectorAll(
  'main section>h2, .section-lede, #about>p, blockquote, .cards article, ' +
  '.live-points li, h3.sub, .sessions, .story, .tier-label, .member, ' +
  '#involved p, #involved .cta-row, .faq');

document.querySelectorAll('.cards, .news-grid, .team-grid').forEach(function (g) {
  [].forEach.call(g.children, function (c, i) { c.dataset.d = Math.min(i, 5) * 80; });
});

var io = new IntersectionObserver(function (es) {
  es.forEach(function (e) {
    if (!e.isIntersecting) return;
    e.target.style.transitionDelay = (e.target.dataset.d || 0) + 'ms';
    e.target.classList.add('in');
    io.unobserve(e.target);
  });
}, { threshold: 0.1 });

items.forEach(function (el) { el.classList.add('reveal'); io.observe(el); });

// Count the hero stats up from zero.
document.querySelectorAll('.stats b').forEach(function (b) {
  var m = b.textContent.match(/^([^0-9]*)([\d,]+)(.*)$/);
  if (!m || still) return;
  var end = +m[2].replace(/,/g, ''), t0 = null;
  function step(ts) {
    if (!t0) t0 = ts;
    var p = Math.min((ts - t0) / 900, 1), e = 1 - Math.pow(1 - p, 3);
    b.textContent = m[1] + Math.round(end * e).toLocaleString('en-CA') + m[3];
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
});
