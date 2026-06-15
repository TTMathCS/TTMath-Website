"use strict";

// Add future courses here. The catalog derives filters, search, and totals from
// these entries. Paths must point to local course index pages.
window.UOFT_COURSES = Object.freeze([
  Object.freeze({
    code: "MAT137",
    title: "Calculus with Proofs",
    path: "MAT137/index.html",
    subject: "Calculus",
    term: "Full year",
    chapters: 14,
    status: "Complete guide",
    description: "The proof-based calculus on-ramp: logic, limits, derivatives, integrals, sequences, and series.",
    topics: Object.freeze(["Proofs", "Limits", "Derivatives", "Integrals", "Series"])
  }),
  Object.freeze({
    code: "MAT158H1",
    title: "Analysis 1A",
    path: "MAT158H1/index.html",
    subject: "Analysis",
    term: "Fall",
    chapters: 11,
    status: "Complete guide",
    description: "Rigorous first-semester analysis, built from completeness of the real numbers through the Fundamental Theorem of Calculus.",
    topics: Object.freeze(["Real numbers", "Continuity", "Derivatives", "Riemann integral", "Proofs"])
  }),
  Object.freeze({
    code: "MAT159H1",
    title: "Analysis 1B",
    path: "MAT159H1/index.html",
    subject: "Analysis",
    term: "Winter",
    chapters: 7,
    status: "Complete guide",
    description: "The second analysis course: improper integrals, Taylor's theorem, series, uniform convergence, and power series.",
    topics: Object.freeze(["Integrals", "Sequences", "Taylor theorem", "Uniform convergence", "Power series"])
  }),
  Object.freeze({
    code: "MAT240H1",
    title: "Algebra I",
    path: "MAT240H1/index.html",
    subject: "Algebra",
    term: "Fall",
    chapters: 10,
    status: "Complete guide",
    description: "Proof-based linear algebra over arbitrary fields, from vector spaces and linear maps to diagonalization.",
    topics: Object.freeze(["Vector spaces", "Linear maps", "Matrices", "Determinants", "Eigenvalues"])
  })
]);
