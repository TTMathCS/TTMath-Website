var reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

var surprises = [
  { kicker: 'Legend ticket', title: 'Maryam Mirzakhani', formula: 'geometry + imagination', note: 'A reminder that deep mathematical creativity can feel like drawing maps of new worlds.', img: '../assets/img/legends/mirzakhani.jpg' },
  { kicker: 'Legend ticket', title: 'Emmy Noether', formula: 'symmetry -> structure', note: 'Her ideas connect symmetry, algebra, and modern physics.', img: '../assets/img/mathematicians/noether.jpg' },
  { kicker: 'Legend ticket', title: 'Albert Einstein', formula: 'E = mc²', note: 'Thought experiments, geometry, and physics meet in one famous formula.', img: '../assets/img/legends/einstein.jpg' },
  { kicker: 'Theorem flash', title: 'Cauchy-Schwarz', formula: '(Σaᵢbᵢ)² ≤ (Σaᵢ²)(Σbᵢ²)', note: 'A powerful inequality that appears often in olympiad solutions.', symbol: '≤' },
  { kicker: 'Theorem flash', title: 'Euler Identity', formula: 'e^{iπ} + 1 = 0', note: 'Five famous constants meet in one tiny equation.', symbol: 'e' },
  { kicker: 'Conjecture flash', title: 'Collatz Conjecture', formula: '3x + 1', note: 'Simple enough to play in seconds, hard enough that nobody has proved it fully.', symbol: '3x' },
  { kicker: 'Conjecture flash', title: 'Riemann Hypothesis', formula: 'ζ(s) = 0', note: 'One of the deepest mysteries behind the pattern of prime numbers.', symbol: 'ζ' },
  { kicker: 'Topic flash', title: 'Graph theory', formula: 'G = (V,E)', note: 'Friendships, routes, tournaments, and networks become solvable structures.', symbol: 'G' },
  { kicker: 'Topic flash', title: 'Expected value', formula: 'E[X] = ΣxP(x)', note: 'A contest superpower for games, probability, and smart guessing.', symbol: 'P' },
  { kicker: 'MTC story', title: 'Summer camp teamwork', formula: 'puzzles + friends -> momentum', note: 'Hands-on contest math, group solving, and final challenge days.', img: '../assets/img/news-summer-camp-2025.jpg' },
  { kicker: 'MTC story', title: 'Charity Math Competition', formula: 'math + kindness = impact', note: 'Community contests that raise funds and make problem solving social.', img: '../assets/img/news-charity-2025.png' },
  { kicker: 'Legend ticket', title: 'Katherine Johnson', formula: 'orbit = calculation + courage', note: 'Precision mathematics that helped guide spaceflight.', img: '../assets/img/legends/katherine-johnson.jpg' }
];

var segments = [
  ['legend', '#ff496c', '#fff'],
  ['theorem', '#2777ff', '#fff'],
  ['topic', '#00b8b0', '#fff'],
  ['story', '#ff9f1c', '#101827'],
  ['conjecture', '#6c4bd8', '#fff'],
  ['legend', '#ff496c', '#fff'],
  ['theorem', '#2777ff', '#fff'],
  ['topic', '#00b8b0', '#fff'],
  ['story', '#ff9f1c', '#101827'],
  ['conjecture', '#6c4bd8', '#fff']
];
var kindOf = {
  'Legend ticket': 'legend',
  'Theorem flash': 'theorem',
  'Conjecture flash': 'conjecture',
  'Topic flash': 'topic',
  'MTC story': 'story'
};
var segStep = 360 / segments.length;

var lastSurprise = -1;
var wheelRotation = 0;
var hero = document.querySelector('.hero');
var wheelStage = document.querySelector('.wheel-stage');
var wheelArt = document.querySelector('.wheel-art');
var spotlight = document.querySelector('.spotlight');
var spotKicker = document.querySelector('.spot-kicker');
var spotTitle = document.querySelector('.spotlight h2');
var spotFormula = document.querySelector('.spot-formula');
var spotNote = document.querySelector('.spot-note');
var spotSymbol = document.querySelector('.spot-symbol');
var spotImage = document.querySelector('.spot-image');

function svgNode(name, attrs) {
  var el = document.createElementNS('http://www.w3.org/2000/svg', name);
  for (var key in attrs) el.setAttribute(key, attrs[key]);
  wheelArt.appendChild(el);
  return el;
}

function buildWheel() {
  svgNode('circle', { cx: 340, cy: 340, r: 326, fill: '#101827' });
  segments.forEach(function (seg, i) {
    var a0 = (i * segStep - 90) * Math.PI / 180;
    var a1 = a0 + segStep * Math.PI / 180;
    svgNode('path', {
      d: 'M340 340 L' + (340 + 302 * Math.cos(a0)).toFixed(1) + ' ' + (340 + 302 * Math.sin(a0)).toFixed(1) +
        ' A302 302 0 0 1 ' + (340 + 302 * Math.cos(a1)).toFixed(1) + ' ' + (340 + 302 * Math.sin(a1)).toFixed(1) + ' Z',
      fill: seg[1], stroke: '#101827', 'stroke-width': 3
    });
    var label = svgNode('text', {
      x: 340, y: 130, fill: seg[2],
      transform: 'rotate(' + (i * segStep + segStep / 2) + ' 340 340)'
    });
    label.textContent = seg[0];
  });
  for (var i = 0; i < 20; i += 1) {
    var a = i * 18 * Math.PI / 180;
    svgNode('circle', {
      cx: (340 + 314 * Math.cos(a)).toFixed(1), cy: (340 + 314 * Math.sin(a)).toFixed(1),
      r: 6, fill: i % 2 ? '#ffd94d' : '#fff'
    });
  }
}
if (wheelArt) buildWheel();

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

function spinSurprise() {
  if (wheelStage && wheelStage.classList.contains('spinning')) return;
  var seg = Math.floor(Math.random() * segments.length);
  var pool = [];
  surprises.forEach(function (item, i) {
    if (kindOf[item.kicker] === segments[seg][0] && i !== lastSurprise) pool.push(i);
  });
  var next = pool[Math.floor(Math.random() * pool.length)];
  lastSurprise = next;
  if (hero) hero.dataset.spin = 'surprise';
  if (wheelStage && !reduceMotion) {
    wheelStage.classList.add('spinning');
    var landing = 360 - (seg * segStep + segStep / 2) + (Math.random() * 16 - 8);
    var delta = ((landing - wheelRotation) % 360 + 360) % 360;
    wheelRotation += 1440 + delta;
    if (wheelArt) wheelArt.style.setProperty('--spin', wheelRotation + 'deg');
    setTimeout(function () { setSpotlight(surprises[next]); }, 3250);
    setTimeout(function () { wheelStage.classList.remove('spinning'); }, 3400);
  } else {
    setSpotlight(surprises[next]);
  }
}

document.querySelectorAll('[data-spin]').forEach(function (button) {
  button.addEventListener('click', function (event) {
    event.stopPropagation();
    spinSurprise();
  });
});

if (wheelStage) {
  wheelStage.addEventListener('click', function () { spinSurprise(); });
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
  '.scene, .proof-tickets article, .ride-track article, .scoreboard a, .story-strip article, .badge-wall article, .final-ticket'
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
  var formulas = ['π', 'Σ', '√', '∞', '∫', 'φ', 'AIME', 'CMO', 'QED', 'AMC', 'COMC', 'Gauss'];

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
    var count = Math.min(42, Math.max(20, Math.floor(box.width / 34)));
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
      ctx.globalAlpha = .20;
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
