"use strict";

// Archimedes' method, the way the ancients actually did it. The circumference of a
// diameter-1 circle equals pi. Trap it between the perimeters of an inscribed and a
// circumscribed regular polygon, then DOUBLE the number of sides. Each doubling uses
// only arithmetic and a square root -- no sine or tangent tables, which would need
// the very calculus this predates:
//     a' = 2 a b / (a + b)   (circumscribed perimeter, a harmonic mean)
//     b' = sqrt(a' b)        (inscribed perimeter, a geometric mean)
// Both a and b converge to pi. Drawing the polygons on screen still uses cos/sin to
// place pixels, but the pi bounds themselves come only from the recurrence above.
function setupExhaustionDiagram() {
  const svg = document.getElementById("exhaustion-diagram");
  if (!svg) return;

  const cx = 270;
  const cy = 190;
  const rPix = 100;
  const inPoly = svg.querySelector("[data-role='inpoly']");
  const outPoly = svg.querySelector("[data-role='outpoly']");
  const row = svg.parentElement;
  const sidesReadout = document.getElementById("sides-readout");
  const calcIn = row.querySelector("[data-role='calc-in']");
  const calcOut = row.querySelector("[data-role='calc-out']");
  const calcPi = row.querySelector("[data-role='calc-pi']");
  const doubleButton = document.getElementById("double-sides");
  const resetButton = document.getElementById("reset-sides");

  let n, aPer, bPer, prevA, prevB, started;

  function f(x) { return x.toFixed(6); }

  function polygonPoints(sides, radius, offset) {
    const points = [];
    for (let k = 0; k < sides; k += 1) {
      const ang = -Math.PI / 2 + offset + k * 2 * Math.PI / sides;
      points.push(
        (cx + radius * Math.cos(ang)).toFixed(2) + "," +
        (cy + radius * Math.sin(ang)).toFixed(2)
      );
    }
    return points.join(" ");
  }

  function render() {
    inPoly.setAttribute("points", polygonPoints(n, rPix, 0));
    outPoly.setAttribute("points", polygonPoints(n, rPix / Math.cos(Math.PI / n), Math.PI / n));
    sidesReadout.value = "n = " + n + (n === 6 ? " (hexagon)" : "");

    if (!started) {
      calcOut.textContent = "circumscribed perimeter  a = 2√3 = " + f(aPer);
      calcIn.textContent = "inscribed perimeter      b = 6 · ½ = " + f(bPer);
    } else {
      calcOut.textContent = "a = 2·a·b/(a+b) = 2·" + f(prevA) + "·" + f(prevB) +
        " / " + f(prevA + prevB) + " = " + f(aPer);
      calcIn.textContent = "b = √(a·b) = √(" + f(aPer) + " · " + f(prevB) + ") = " + f(bPer);
    }
    calcPi.innerHTML = "<span class=\"res\">" + f(bPer) + "</span> &lt; " +
      "<span class=\"pi\">π = 3.141593</span> &lt; <span class=\"res\">" + f(aPer) +
      "</span>&nbsp;&nbsp;(gap " + f(aPer - bPer) + ")";
  }

  function reset() {
    n = 6;
    bPer = 3;                  // inscribed hexagon: 6 sides, each = radius = 1/2
    aPer = 2 * Math.sqrt(3);   // circumscribed hexagon perimeter, diameter 1
    started = false;
    render();
  }

  function step() {
    prevA = aPer;
    prevB = bPer;
    aPer = 2 * prevA * prevB / (prevA + prevB);
    bPer = Math.sqrt(aPer * prevB);
    n *= 2;
    started = true;
    render();
  }

  doubleButton.addEventListener("click", function () {
    if (n < 1536) step();   // already far past Archimedes' 96-gon by here
  });
  resetButton.addEventListener("click", reset);

  reset();
}

document.addEventListener("DOMContentLoaded", setupExhaustionDiagram);
