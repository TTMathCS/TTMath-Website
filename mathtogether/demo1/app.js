var still = matchMedia('(prefers-reduced-motion: reduce)').matches;
var hero = document.querySelector('header');

// the two hero curves draw themselves on load
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

// live (x, y) readout — the hero is a real coordinate plane, 26px per unit
var coords = document.querySelector('.coords');
hero.addEventListener('mousemove', function (e) {
  var r = hero.getBoundingClientRect();
  var x = ((e.clientX - r.left) / 26).toFixed(1);
  var y = ((r.bottom - e.clientY) / 26).toFixed(1);
  coords.textContent = '(x, y) = (' + x + ', ' + y + ')';
});

// click to plot a point, capped so the plane stays readable
hero.addEventListener('click', function (e) {
  if (e.target.closest('a')) return;
  var r = hero.getBoundingClientRect();
  var px = e.clientX - r.left, py = e.clientY - r.top;
  var d = document.createElement('div');
  d.className = 'dot';
  d.style.left = px + 'px';
  d.style.top = py + 'px';
  d.innerHTML = '<i></i><span>(' + (px / 26).toFixed(1) + ', ' +
                ((r.height - py) / 26).toFixed(1) + ')</span>';
  hero.appendChild(d);
  var dots = hero.querySelectorAll('.dot');
  if (dots.length > 30) dots[0].remove();
});

// the fixed y-axis ruler tracks scroll depth
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

// fade blocks in on scroll, grid items staggered
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

// count the hero stats up from zero
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
