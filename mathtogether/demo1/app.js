var still = matchMedia('(prefers-reduced-motion: reduce)').matches;
var sky = document.querySelector('.sky-stage');
var coords = sky.querySelector('.coords');
var lastLegendName = '';

var formulas = [
  {
    title: 'Euler identity',
    formula: 'e^(iπ) + 1 = 0',
    formulaHtml: 'e<sup>iπ</sup> + 1 = 0',
    note: 'Five essential constants meeting in one line.'
  },
  {
    title: 'Pythagorean theorem',
    formula: 'a^2 + b^2 = c^2',
    formulaHtml: 'a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>',
    note: 'The oldest right-triangle compass.'
  },
  {
    title: 'Cauchy-Schwarz',
    formula: '(Σa_i b_i)^2 ≤ (Σa_i^2)(Σb_i^2)',
    formulaHtml: '(<span class="sigma">Σ</span>a<sub>i</sub>b<sub>i</sub>)<sup>2</sup> ≤ ' +
      '(<span class="sigma">Σ</span>a<sub>i</sub><sup>2</sup>)(<span class="sigma">Σ</span>b<sub>i</sub><sup>2</sup>)',
    note: 'A quiet engine behind olympiad inequalities.'
  },
  {
    title: "Fermat's little theorem",
    formula: 'a^p ≡ a (mod p)',
    formulaHtml: 'a<sup>p</sup> ≡ a <span class="mod">(mod&nbsp;p)</span>',
    note: 'Prime numbers leaving a modular fingerprint.'
  },
  {
    title: 'Pascal identity',
    formula: 'C(n,k) = C(n-1,k-1) + C(n-1,k)',
    formulaHtml: '<span class="binom"><span>n</span><span>k</span></span> = ' +
      '<span class="binom"><span>n − 1</span><span>k − 1</span></span> + ' +
      '<span class="binom"><span>n − 1</span><span>k</span></span>',
    note: 'Combinations growing one row at a time.'
  },
  {
    title: 'Bayes theorem',
    formula: 'P(A|B) = P(B|A)P(A) / P(B)',
    formulaHtml: 'P(A|B) = <span class="math-frac"><span>P(B|A)P(A)</span><span>P(B)</span></span>',
    note: 'A rule for updating belief when evidence arrives.'
  },
  {
    title: 'Infinite primes',
    formula: 'There are infinitely many primes.',
    formulaHtml: '∀N ∈ ℕ, ∃ prime p &gt; N',
    note: 'Euclid made infinity feel inevitable.'
  },
  {
    title: 'Golden ratio',
    formula: 'φ = (1 + √5) / 2',
    formulaHtml: 'φ = <span class="math-frac"><span>1 + √5</span><span>2</span></span>',
    note: 'A recurrence, a spiral, and a proportion.'
  }
];

var conjectures = [
  {
    kicker: 'Open conjecture',
    title: 'Riemann hypothesis',
    formulaHtml: 'ζ(s) = 0 ⇒ Re(s) = <span class="math-frac"><span>1</span><span>2</span></span>',
    note: 'The hidden rhythm of prime numbers may sit on one critical line.'
  },
  {
    kicker: 'Open conjecture',
    title: 'Collatz conjecture',
    formulaHtml: 'n → <span class="piecewise"><span>n / 2</span><span>3n + 1</span></span> → 1 ?',
    note: 'A rule simple enough for middle school, still undefeated.'
  },
  {
    kicker: 'Open conjecture',
    title: 'Goldbach conjecture',
    formulaHtml: 'Every even n &gt; 2 = p + q',
    note: 'Can every even number split into two primes? We still do not know.'
  },
  {
    kicker: 'Open conjecture',
    title: 'Twin prime conjecture',
    formulaHtml: 'Infinitely many p where p + 2 is prime?',
    note: 'Prime pairs keep appearing; proving they never run out is another story.'
  },
  {
    kicker: 'Open conjecture',
    title: 'P vs NP',
    formulaHtml: 'P ?= NP',
    note: 'If solutions are easy to check, are they always easy to find?'
  },
  {
    kicker: 'Open conjecture',
    title: 'Birch and Swinnerton-Dyer',
    formulaHtml: 'rank E(ℚ) ↔ order of zero of L(E,s)',
    note: 'A bridge between rational points and the analytic behavior of elliptic curves.'
  }
];

var topics = [
  {
    kicker: 'Math world',
    title: 'Topology',
    formulaHtml: 'shape without measuring',
    note: 'Study what survives stretching, twisting, and continuous deformation.'
  },
  {
    kicker: 'Math world',
    title: 'Fractals and chaos',
    formulaHtml: 'z → z<sup>2</sup> + c',
    note: 'Tiny changes, infinite detail, and patterns that never quite settle.'
  },
  {
    kicker: 'Math world',
    title: 'Graph theory',
    formulaHtml: 'vertices + edges = networks',
    note: 'The math of routes, friendships, competitions, maps, and algorithms.'
  },
  {
    kicker: 'Math world',
    title: 'Modular arithmetic',
    formulaHtml: 'a ≡ b <span class="mod">(mod&nbsp;n)</span>',
    note: 'Clock math that powers contests, cryptography, and number theory.'
  },
  {
    kicker: 'Math world',
    title: 'Game theory',
    formulaHtml: 'strategy + incentives',
    note: 'A way to reason about choices when everyone else is thinking too.'
  },
  {
    kicker: 'Math world',
    title: 'Combinatorics',
    formulaHtml: 'count the impossible-looking set',
    note: 'Arrangements, invariants, clever counting, and olympiad problem magic.'
  }
];

var legends = [
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
  },
  {
    name: 'Blaise Pascal',
    src: '../assets/img/legends/pascal.jpg',
    note: 'Probability, projective geometry, pressure, and Pascal triangle.'
  },
  {
    name: 'Sofia Kovalevskaya',
    src: '../assets/img/legends/sofia-kovalevskaya.jpg',
    note: 'Analysis, differential equations, and a path-breaking math career.'
  },
  {
    name: 'Albert Einstein',
    src: '../assets/img/legends/einstein.jpg',
    note: 'Relativity, spacetime, and physics powered by mathematical imagination.'
  },
  {
    name: 'Marie Curie',
    src: '../assets/img/legends/curie.jpg',
    note: 'Radioactivity, chemistry, physics, and two Nobel Prizes.'
  },
  {
    name: 'Katherine Johnson',
    src: '../assets/img/legends/katherine-johnson.jpg',
    note: 'Orbital mechanics and calculations that helped send astronauts to space.'
  },
  {
    name: 'Galileo Galilei',
    src: '../assets/img/legends/galileo.jpg',
    note: 'Motion, astronomy, experiments, and the language of mathematics.'
  },
  {
    name: 'Charles Darwin',
    src: '../assets/img/legends/darwin.jpg',
    note: 'Evolution, natural selection, and the patient art of evidence.'
  },
  {
    name: 'Grace Hopper',
    src: '../assets/img/legends/grace-hopper.jpg',
    note: 'Programming languages, compilers, and making computers more human.'
  }
];

function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function pickLegend() {
  var choices = legends.filter(function (m) {
    return m.name !== lastLegendName;
  });
  var item = pick(choices.length ? choices : legends);
  lastLegendName = item.name;
  return item;
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

// Sprinkle a night sky inside the observatory-sized Cartesian panel.
for (var i = 0; i < 120; i++) {
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
  title.textContent = item.kicker ? item.kicker + ' · ' + item.title : item.title;
  formula.innerHTML = item.formulaHtml;
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
  var roll = Math.random();
  var kind = roll < 0.3 ? 'portrait' : roll < 0.6 ? 'formula' :
    roll < 0.85 ? 'conjecture' : 'topic';
  var item = kind === 'portrait' ? pickLegend() :
    kind === 'formula' ? pick(formulas) :
    kind === 'conjecture' ? pick(conjectures) : pick(topics);

  if (kind === 'portrait') showPortrait(safeX, safeY, item);
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
