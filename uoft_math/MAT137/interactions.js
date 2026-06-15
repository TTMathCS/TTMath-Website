"use strict";

function svgPoint(x, y, bounds) {
  return {
    x: bounds.left + (x - bounds.xMin) * (bounds.right - bounds.left) / (bounds.xMax - bounds.xMin),
    y: bounds.bottom - (y - bounds.yMin) * (bounds.bottom - bounds.top) / (bounds.yMax - bounds.yMin)
  };
}

function setLine(line, from, to) {
  line.setAttribute("x1", from.x);
  line.setAttribute("y1", from.y);
  line.setAttribute("x2", to.x);
  line.setAttribute("y2", to.y);
}

function setupLimitDiagram() {
  const svg = document.getElementById("limit-diagram");
  const slider = document.getElementById("epsilon-control");
  if (!svg || !slider) return;

  const bounds = {left: 58, right: 652, top: 24, bottom: 338, xMin: 0.5, xMax: 3.5, yMin: 0, yMax: 10};
  const curve = svg.querySelector("[data-role='curve']");
  const points = [];
  for (let x = bounds.xMin; x <= bounds.xMax + 0.001; x += 0.03) {
    const point = svgPoint(x, x * x, bounds);
    points.push(`${points.length ? "L" : "M"}${point.x.toFixed(2)},${point.y.toFixed(2)}`);
  }
  curve.setAttribute("d", points.join(" "));

  const inputBand = svg.querySelector("[data-role='input-band']");
  const outputBand = svg.querySelector("[data-role='output-band']");
  const epsilonReadout = document.getElementById("epsilon-readout");
  const deltaReadout = document.getElementById("delta-readout");

  function update() {
    const epsilon = Number(slider.value);
    const delta = Math.min(1, epsilon / 5);
    const xLow = svgPoint(2 - delta, 0, bounds).x;
    const xHigh = svgPoint(2 + delta, 0, bounds).x;
    const yHigh = svgPoint(0, 4 + epsilon, bounds).y;
    const yLow = svgPoint(0, 4 - epsilon, bounds).y;

    inputBand.setAttribute("x", xLow);
    inputBand.setAttribute("width", xHigh - xLow);
    outputBand.setAttribute("y", yHigh);
    outputBand.setAttribute("height", yLow - yHigh);
    epsilonReadout.value = `epsilon = ${epsilon.toFixed(2)}`;
    deltaReadout.value = `delta = min(1, epsilon/5) = ${delta.toFixed(2)}`;
  }

  slider.addEventListener("input", update);
  update();
}

function setupDerivativeDiagram() {
  const svg = document.getElementById("derivative-diagram");
  const slider = document.getElementById("h-control");
  if (!svg || !slider) return;

  const bounds = {left: 58, right: 652, top: 24, bottom: 338, xMin: -0.3, xMax: 2.6, yMin: -0.2, yMax: 7};
  const curve = svg.querySelector("[data-role='curve']");
  const points = [];
  for (let x = bounds.xMin; x <= bounds.xMax + 0.001; x += 0.03) {
    const point = svgPoint(x, x * x, bounds);
    points.push(`${points.length ? "L" : "M"}${point.x.toFixed(2)},${point.y.toFixed(2)}`);
  }
  curve.setAttribute("d", points.join(" "));

  const secant = svg.querySelector("[data-role='secant']");
  const tangent = svg.querySelector("[data-role='tangent']");
  const movingPoint = svg.querySelector("[data-role='moving-point']");
  const hReadout = document.getElementById("h-readout");
  const slopeReadout = document.getElementById("slope-readout");
  const animateButton = document.getElementById("animate-derivative");
  const lineStart = 0.15;
  const lineEnd = 2.45;

  setLine(
    tangent,
    svgPoint(lineStart, 1 + 2 * (lineStart - 1), bounds),
    svgPoint(lineEnd, 1 + 2 * (lineEnd - 1), bounds)
  );

  function update() {
    const h = Number(slider.value);
    const slope = 2 + h;
    setLine(
      secant,
      svgPoint(lineStart, 1 + slope * (lineStart - 1), bounds),
      svgPoint(lineEnd, 1 + slope * (lineEnd - 1), bounds)
    );
    const point = svgPoint(1 + h, (1 + h) ** 2, bounds);
    movingPoint.setAttribute("cx", point.x);
    movingPoint.setAttribute("cy", point.y);
    hReadout.value = `h = ${h.toFixed(2)}`;
    slopeReadout.value = `secant slope = 2 + h = ${slope.toFixed(2)}`;
  }

  slider.addEventListener("input", update);
  animateButton.addEventListener("click", function () {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      slider.value = slider.min;
      update();
      return;
    }
    const start = performance.now();
    const duration = 2400;
    const max = Number(slider.max);
    const min = Number(slider.min);
    function frame(now) {
      const progress = Math.min(1, (now - start) / duration);
      slider.value = max - (max - min) * progress;
      update();
      if (progress < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  });
  update();
}

document.addEventListener("DOMContentLoaded", function () {
  setupLimitDiagram();
  setupDerivativeDiagram();
});
