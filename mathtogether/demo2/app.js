var reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

var exhibits = {
  calculus: {
    kicker: 'Calculus ride',
    title: 'Curves become motion.',
    formula: 'd/dx x² = 2x',
    note: 'Rates, areas, slopes, and motion turn into tools students can feel.',
    symbol: '∫'
  },
  number: {
    kicker: 'Prime parade',
    title: 'Numbers start hiding patterns.',
    formula: '2, 3, 5, 7, 11, ...',
    note: 'Prime numbers, modular tricks, divisibility, and olympiad shortcuts.',
    symbol: 'π'
  },
  probability: {
    kicker: 'Chance booth',
    title: 'Randomness becomes strategy.',
    formula: 'E[X] = Σ xP(x)',
    note: 'Expected value, games, Bayes thinking, and decisions under uncertainty.',
    symbol: 'P'
  },
  geometry: {
    kicker: 'Shape tent',
    title: 'Pictures become proof.',
    formula: 'a² + b² = c²',
    note: 'Angles, transformations, symmetry, invariants, and visual reasoning.',
    symbol: '△'
  },
  algebra: {
    kicker: 'Symbol machine',
    title: 'Equations become engines.',
    formula: 'Ax = b',
    note: 'Structures, systems, matrices, functions, and clean problem language.',
    symbol: 'A'
  },
  conjecture: {
    kicker: 'Mystery booth',
    title: 'Some doors are still locked.',
    formula: 'P ?= NP',
    note: 'Unsolved problems show students that math is still being invented.',
    symbol: '?'
  }
};

var surprises = [
  { kicker: 'Legend ticket', title: 'Emmy Noether', formula: 'symmetry -> conservation', note: 'A giant of modern algebra and theoretical physics.', img: '../assets/img/mathematicians/noether.jpg' },
  { kicker: 'Legend ticket', title: 'Maryam Mirzakhani', formula: 'geometry + dynamics', note: 'A reminder that imagination is a rigorous tool.', img: '../assets/img/legends/mirzakhani.jpg' },
  { kicker: 'Science ticket', title: 'Albert Einstein', formula: 'E = mc²', note: 'Geometry, thought experiments, and spacetime.', img: '../assets/img/legends/einstein.jpg' },
  { kicker: 'Theorem ticket', title: 'Euler Identity', formula: 'e^{iπ} + 1 = 0', note: 'Five famous constants share one tiny stage.', symbol: 'e' },
  { kicker: 'Conjecture ticket', title: 'Collatz Conjecture', formula: '3x + 1', note: 'Simple enough to play, difficult enough to humble everyone.', symbol: '3x' },
  { kicker: 'Topic ticket', title: 'Graph Theory', formula: 'G = (V,E)', note: 'Friendships, routes, tournaments, and networks become math.', symbol: 'G' },
  { kicker: 'Legend ticket', title: 'Katherine Johnson', formula: 'orbit = calculation + courage', note: 'Precision math that helped guide spaceflight.', img: '../assets/img/legends/katherine-johnson.jpg' },
  { kicker: 'Theorem ticket', title: 'Cauchy-Schwarz', formula: '(Σaᵢbᵢ)² ≤ (Σaᵢ²)(Σbᵢ²)', note: 'A powerful inequality behind many olympiad solutions.', symbol: '≤' }
];

var lastSurprise = -1;
var hero = document.querySelector('.hero');
var spotlight = document.querySelector('.spotlight');
var spotKicker = document.querySelector('.spot-kicker');
var spotTitle = document.querySelector('.spotlight h2');
var spotFormula = document.querySelector('.spot-formula');
var spotNote = document.querySelector('.spot-note');
var spotSymbol = document.querySelector('.spot-symbol');
var spotImage = document.querySelector('.spot-image');

function animateNode(node, frames, duration) {
  if (!node || reduceMotion || typeof node.animate !== 'function') return;
  node.animate(frames, { duration: duration, easing: 'cubic-bezier(.2,.8,.2,1)' });
}

function setSpotlight(item) {
  if (!item) return;
  if (spotKicker) spotKicker.textContent = item.kicker;
  if (spotTitle) spotTitle.textContent = item.title;
  if (spotFormula) spotFormula.textContent = item.formula;
  if (spotNote) spotNote.textContent = item.note;
  if (item.img) {
    spotImage.src = item.img;
    spotImage.alt = item.title;
    spotImage.hidden = false;
    spotSymbol.hidden = true;
  } else {
    spotSymbol.textContent = item.symbol || '∑';
    spotSymbol.hidden = false;
    spotImage.hidden = true;
    spotImage.removeAttribute('src');
  }
  animateNode(spotlight, [
    { opacity: .72, transform: 'translateY(12px) rotate(2deg)' },
    { opacity: 1, transform: 'translateY(0) rotate(-1deg)' }
  ], 260);
}

document.querySelectorAll('.exhibit-tab').forEach(function (button) {
  button.addEventListener('click', function () {
    var key = button.dataset.exhibit;
    document.querySelectorAll('.exhibit-tab').forEach(function (item) {
      item.classList.toggle('active', item === button);
    });
    if (hero) hero.dataset.exhibit = key;
    setSpotlight(exhibits[key]);
  });
});

var surpriseButton = document.querySelector('.surprise');
if (surpriseButton) {
  surpriseButton.addEventListener('click', function () {
    var next = Math.floor(Math.random() * surprises.length);
    if (surprises.length > 1) {
      while (next === lastSurprise) next = Math.floor(Math.random() * surprises.length);
    }
    lastSurprise = next;
    setSpotlight(surprises[next]);
  });
}

document.querySelectorAll('[data-count]').forEach(function (node) {
  if (reduceMotion) return;
  var raw = node.textContent.trim();
  var target = Number(node.dataset.count);
  var prefix = raw.charAt(0) === '$' ? '$' : '';
  var suffix = raw.slice(-1) === '+' ? '+' : '';
  var start = null;
  function step(time) {
    if (!start) start = time;
    var progress = Math.min((time - start) / 900, 1);
    var eased = 1 - Math.pow(1 - progress, 3);
    node.textContent = prefix + Math.round(target * eased).toLocaleString('en-CA') + suffix;
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
});

var revealItems = document.querySelectorAll(
  '.scene, .proof-tickets article, .ride-track article, .scoreboard a, .story-strip article, .mask-wall article, .lock-row article, .badge-wall article, .final-ticket'
);
if ('IntersectionObserver' in window && !reduceMotion) {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    });
  }, { threshold: .12 });
  revealItems.forEach(function (item, index) {
    item.classList.add('reveal');
    item.style.transitionDelay = Math.min(index % 7, 6) * 36 + 'ms';
    observer.observe(item);
  });
} else {
  revealItems.forEach(function (item) { item.classList.add('in'); });
}

var canvas = document.querySelector('.formula-canvas');
if (canvas && !reduceMotion) {
  var ctx = canvas.getContext('2d');
  var particles = [];
  var formulas = ['π', 'Σ', '√', 'ζ', '∞', '∫', 'φ', 'P?', 'AIME', 'CMO', 'QED', '3x+1'];

  function resizeCanvas() {
    var ratio = Math.min(window.devicePixelRatio || 1, 2);
    var box = canvas.getBoundingClientRect();
    canvas.width = Math.max(1, Math.floor(box.width * ratio));
    canvas.height = Math.max(1, Math.floor(box.height * ratio));
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function seedParticles() {
    particles = [];
    var box = canvas.getBoundingClientRect();
    var count = Math.min(64, Math.max(28, Math.floor(box.width / 24)));
    for (var i = 0; i < count; i += 1) {
      particles.push({
        x: Math.random() * box.width,
        y: Math.random() * box.height,
        vx: -.18 + Math.random() * .36,
        vy: .18 + Math.random() * .55,
        text: formulas[i % formulas.length],
        size: 13 + Math.random() * 15,
        color: ['#101827', '#ff496c', '#00b8b0', '#6c4bd8', '#2777ff'][i % 5]
      });
    }
  }

  function draw() {
    var box = canvas.getBoundingClientRect();
    ctx.clearRect(0, 0, box.width, box.height);
    ctx.font = '800 16px IBM Plex Mono, monospace';
    particles.forEach(function (p) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.y > box.height + 20) p.y = -20;
      if (p.x < -40) p.x = box.width + 40;
      if (p.x > box.width + 40) p.x = -40;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(Math.sin((p.y + p.x) / 90) * .16);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = .33;
      ctx.font = '900 ' + p.size + 'px IBM Plex Mono, monospace';
      ctx.fillText(p.text, 0, 0);
      ctx.restore();
    });
    requestAnimationFrame(draw);
  }

  resizeCanvas();
  seedParticles();
  draw();
  window.addEventListener('resize', function () {
    resizeCanvas();
    seedParticles();
  });
}
