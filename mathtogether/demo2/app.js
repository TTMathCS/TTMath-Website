var reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

var topics = {
  calculus: {
    kicker: 'Calculus portal',
    title: 'Curves become motion.',
    formula: 'd/dx x² = 2x',
    note: 'Derivatives, integrals, rates, areas, and motion.'
  },
  combinatorics: {
    kicker: 'Combinatorics portal',
    title: 'Patterns become choices.',
    formula: 'C(n,k)= n! / k!(n-k)!',
    note: 'Counting paths, Pascal triangles, cases, and clever shortcuts.'
  },
  probability: {
    kicker: 'Probability portal',
    title: 'Chance becomes strategy.',
    formula: 'P(A|B)= P(B|A)P(A) / P(B)',
    note: 'Randomness, games, expected value, and decisions under uncertainty.'
  },
  graph: {
    kicker: 'Graph theory portal',
    title: 'Friendships become maps.',
    formula: 'G = (V,E)',
    note: 'Networks, routes, tournaments, trees, coloring, and social math.'
  },
  algebra: {
    kicker: 'Algebra portal',
    title: 'Symbols become machines.',
    formula: 'Ax = b',
    note: 'Equations, matrices, symmetry, transformations, and structure.'
  },
  topology: {
    kicker: 'Topology portal',
    title: 'Shapes become stories.',
    formula: 'χ = V - E + F',
    note: 'Knots, surfaces, holes, maps, and geometry that can bend.'
  }
};

var topicCard = document.querySelector('.topic-card');
var topicKicker = topicCard && topicCard.querySelector('p');
var topicTitle = topicCard && topicCard.querySelector('h2');
var topicFormula = topicCard && topicCard.querySelector('.topic-formula');
var topicNote = topicCard && topicCard.querySelector('span');
var board = document.querySelector('.math-board');

function animateNode(node, frames, duration) {
  if (!node || reduceMotion || typeof node.animate !== 'function') return;
  node.animate(frames, { duration: duration, easing: 'cubic-bezier(.2,.8,.2,1)' });
}

function drawSpark(button, formula) {
  if (!board || reduceMotion) return;
  var spark = document.createElement('span');
  var box = button.getBoundingClientRect();
  var boardBox = board.getBoundingClientRect();
  spark.className = 'math-spark';
  spark.textContent = formula;
  spark.style.left = box.left - boardBox.left + box.width / 2 + 'px';
  spark.style.top = box.top - boardBox.top - 8 + 'px';
  board.appendChild(spark);
  animateNode(spark, [
    { opacity: 0, transform: 'translate(-50%, 8px) scale(.86)' },
    { opacity: 1, transform: 'translate(-50%, -14px) scale(1)' },
    { opacity: 0, transform: 'translate(-50%, -46px) scale(.92)' }
  ], 980);
  setTimeout(function () {
    spark.remove();
  }, 1040);
}

document.querySelectorAll('.hotspot').forEach(function (button) {
  button.addEventListener('click', function () {
    var topic = topics[button.dataset.topic] || topics.calculus;
    document.querySelectorAll('.hotspot').forEach(function (item) {
      item.classList.toggle('active', item === button);
    });
    if (topicKicker) topicKicker.textContent = topic.kicker;
    if (topicTitle) topicTitle.textContent = topic.title;
    if (topicFormula) topicFormula.textContent = topic.formula;
    if (topicNote) topicNote.textContent = topic.note;
    document.documentElement.dataset.topic = button.dataset.topic;
    animateNode(topicCard, [
      { opacity: 0.72, transform: 'translateY(12px) rotate(-1deg)' },
      { opacity: 1, transform: 'translateY(0) rotate(0)' }
    ], 260);
    drawSpark(button, topic.formula);
  });
});

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
  'main section, .proof-stack article, .program-grid article, .route-map a, .story, .legend-grid article, .team-grid article, .conjecture-card'
);
if ('IntersectionObserver' in window && !reduceMotion) {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  revealItems.forEach(function (item, index) {
    item.classList.add('reveal');
    item.style.transitionDelay = Math.min(index % 7, 6) * 38 + 'ms';
    observer.observe(item);
  });
} else {
  revealItems.forEach(function (item) { item.classList.add('in'); });
}
