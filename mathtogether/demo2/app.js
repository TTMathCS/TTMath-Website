var reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
var stage = document.querySelector('.launch-stage');
var focus = document.querySelector('.legend-focus');
var focusImg = focus.querySelector('img');
var focusName = focus.querySelector('h2');
var focusNote = focus.querySelector('span');
var route = document.querySelector('.mission-output');
var routeTitle = route.querySelector('strong');
var routeCopy = route.querySelector('p');

document.querySelectorAll('.orbit-card').forEach(function (button) {
  button.addEventListener('click', function () {
    document.querySelectorAll('.orbit-card').forEach(function (item) {
      item.classList.toggle('active', item === button);
    });
    focusImg.src = button.dataset.img;
    focusImg.alt = button.dataset.name + ' portrait';
    focusName.textContent = button.dataset.name;
    focusNote.textContent = button.dataset.note;
    focus.animate([
      { opacity: 0.55, transform: 'translateY(10px)' },
      { opacity: 1, transform: 'translateY(0)' }
    ], { duration: reduceMotion ? 0 : 240, easing: 'ease-out' });
  });
});

document.querySelectorAll('.mission-card').forEach(function (button) {
  button.addEventListener('click', function () {
    document.querySelectorAll('.mission-card').forEach(function (item) {
      item.classList.toggle('active', item === button);
    });
    routeTitle.textContent = button.dataset.title;
    routeCopy.textContent = button.dataset.copy;
    route.animate([
      { opacity: 0.5, transform: 'translateY(-8px)' },
      { opacity: 1, transform: 'translateY(0)' }
    ], { duration: reduceMotion ? 0 : 220, easing: 'ease-out' });
  });
});

if (stage && !reduceMotion) {
  stage.addEventListener('mousemove', function (event) {
    var box = stage.getBoundingClientRect();
    var x = ((event.clientX - box.left) / box.width - 0.5) * 12;
    var y = ((event.clientY - box.top) / box.height - 0.5) * 12;
    stage.style.setProperty('--tilt-x', y.toFixed(2) + 'deg');
    stage.style.setProperty('--tilt-y', (-x).toFixed(2) + 'deg');
  });
}

document.querySelectorAll('[data-count]').forEach(function (node) {
  if (reduceMotion) return;
  var target = Number(node.dataset.count);
  var prefix = node.textContent.trim().charAt(0) === '$' ? '$' : '';
  var suffix = node.textContent.trim().slice(-1) === '+' ? '+' : '';
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

var revealItems = document.querySelectorAll('main section, .mission-card, .story, .member, .proof-card');
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
    item.style.transitionDelay = Math.min(index % 6, 5) * 45 + 'ms';
    observer.observe(item);
  });
} else {
  revealItems.forEach(function (item) { item.classList.add('in'); });
}
