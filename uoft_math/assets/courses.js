"use strict";

// Add future course pages here when a planned entry becomes a guide. The catalog
// accepts entries without paths, so upper-year courses can be searched before the
// full guide is built.
(function () {
  function freezeTopics(topics) {
    return Object.freeze(topics);
  }

  function entry(code, title, subject, level, status, description, topics, path, chapters) {
    return Object.freeze({
      code: code,
      title: title,
      path: path || "",
      subject: subject,
      term: level,
      chapters: chapters || 0,
      status: status,
      description: description,
      topics: freezeTopics(topics)
    });
  }

  function guide(code, title, path, subject, level, chapters, description, topics) {
    return entry(code, title, subject, level, "Complete guide", description, topics, path, chapters);
  }

  function planned(code, title, subject, level, description, topics) {
    return entry(code, title, subject, level, "Planned guide", description, topics);
  }

  function flexible(code, title, subject, level, description, topics) {
    return entry(code, title, subject, level, "Flexible / varies", description, topics);
  }

  window.UOFT_COURSES = Object.freeze([
    guide(
      "MAT137",
      "Calculus with Proofs",
      "MAT137/index.html",
      "Calculus",
      "Year 1",
      14,
      "The proof-based calculus on-ramp: logic, limits, derivatives, integrals, sequences, and series.",
      ["Proofs", "Limits", "Derivatives", "Integrals", "Series"]
    ),
    guide(
      "MAT158H1",
      "Analysis 1A",
      "MAT158H1/index.html",
      "Analysis",
      "Year 1",
      11,
      "Rigorous first-semester analysis, built from completeness of the real numbers through the Fundamental Theorem of Calculus.",
      ["Real numbers", "Continuity", "Derivatives", "Riemann integral", "Proofs"]
    ),
    guide(
      "MAT159H1",
      "Analysis 1B",
      "MAT159H1/index.html",
      "Analysis",
      "Year 1",
      7,
      "The second analysis course: improper integrals, Taylor's theorem, series, uniform convergence, and power series.",
      ["Integrals", "Sequences", "Taylor theorem", "Uniform convergence", "Power series"]
    ),
    guide(
      "MAT240H1",
      "Algebra I",
      "MAT240H1/index.html",
      "Algebra",
      "Year 1",
      10,
      "Proof-based linear algebra over arbitrary fields, from vector spaces and linear maps to diagonalization.",
      ["Vector spaces", "Linear maps", "Matrices", "Determinants", "Eigenvalues"]
    ),

    planned("MAT223H1", "Linear Algebra I", "Foundation", "Year 2", "Computational and geometric linear algebra in R^n.", ["Systems", "Bases", "Rank-nullity", "Eigenvalues"]),
    planned("MAT224H1", "Linear Algebra II", "Foundation", "Year 2", "Second linear algebra course with inner products, spectral theory, and canonical forms.", ["Inner products", "Spectral theorem", "Jordan form"]),
    planned("MAT235H1", "Vector Calculus I", "Foundation", "Year 2", "First half of multivariable/vector calculus for non-specialist tracks.", ["Multivariable calculus", "Derivatives", "Integrals"]),
    planned("APM236H1", "Applications of Linear Programming", "Applied Math", "Year 2", "Linear programming methods and applications.", ["Optimization", "Linear programming", "Applications"]),
    planned("MAT236H1", "Vector Calculus II", "Foundation", "Year 2", "Vector calculus continuation with line/surface integrals and classical theorems.", ["Vector fields", "Line integrals", "Surface integrals"]),
    planned("MAT237Y1", "Multivariable Calculus with Proofs", "Analysis", "Year 2", "Proof-based multivariable calculus for math and statistics pathways.", ["Topology of Rn", "Differentiation", "Integration"]),
    planned("MAT244H1", "Introduction to Ordinary Differential Equations", "Applied Math", "Year 2", "Applied ODEs, modelling, solution methods, and phase-plane analysis.", ["ODEs", "Modelling", "Systems"]),
    planned("MAT245H1", "Mathematical Methods in Data Science", "Data Science", "Year 2", "Mathematical tools for data science pathways.", ["Linear algebra", "Data science", "Methods"]),
    planned("MAT246H1", "Concepts in Abstract Mathematics", "Foundation", "Year 2", "Bridge course for abstract proof, sets, relations, and mathematical structures.", ["Proofs", "Sets", "Abstract structures"]),
    planned("MAT247H1", "Algebra II", "Algebra", "Year 2", "Theoretical linear algebra: inner products, adjoints, spectral theorem, and canonical forms.", ["Inner products", "Adjoints", "Canonical forms"]),
    planned("MAT257Y1", "Analysis II", "Analysis", "Year 2", "Specialist multivariable analysis, manifolds, integration, and Stokes' theorem.", ["Topology", "Manifolds", "Stokes theorem"]),
    planned("MAT267H1", "Advanced Ordinary Differential Equations", "Applied Math", "Year 2", "Theoretical ODEs, existence/uniqueness, power series, and qualitative theory.", ["ODE theory", "Stability", "Power series"]),

    planned("MAT301H1", "Groups and Symmetries", "Algebra", "Year 3", "Group theory through symmetries, actions, quotient groups, and examples.", ["Groups", "Actions", "Quotients"]),
    planned("MAT309H1", "Introduction to Mathematical Logic", "Logic", "Year 3", "Formal logic, proof systems, and foundations.", ["Logic", "Proof systems", "Foundations"]),
    planned("MAT315H1", "Introduction to Number Theory", "Number Theory", "Year 3", "Elementary number theory, arithmetic functions, characters, and quadratic reciprocity.", ["Congruences", "Quadratic reciprocity", "Arithmetic functions"]),
    planned("MAT327H1", "Introduction to Topology", "Topology", "Year 3", "Point-set topology for analysis, geometry, and graduate preparation.", ["Topological spaces", "Compactness", "Connectedness"]),
    planned("MAT332H1", "Introduction to Graph Theory", "Discrete Math", "Year 3", "Graphs, trees, connectivity, matchings, colourings, planarity, and flows.", ["Graphs", "Planarity", "Network flows"]),
    planned("MAT334H1", "Complex Variables", "Analysis", "Year 3", "Computational complex variables and applications.", ["Holomorphic functions", "Residues", "Conformal maps"]),
    planned("MAT335H1", "Chaos, Fractals and Dynamics", "Dynamical Systems", "Year 3", "One-dimensional dynamics, attractors, bifurcation, and fractals.", ["Dynamics", "Fractals", "Bifurcation"]),
    planned("MAT336H1", "Elements of Analysis", "Analysis", "Year 3", "Analysis foundations for students moving into proof-heavy applications.", ["Topology of Rn", "Inverse theorem", "Integration"]),
    planned("MAT337H1", "Introduction to Real Analysis", "Analysis", "Year 3", "Metric spaces, convergence of functions, Fourier series, and fixed-point methods.", ["Metric spaces", "Function spaces", "Fourier series"]),
    planned("MAT344H1", "Introduction to Combinatorics", "Discrete Math", "Year 3", "Counting, generating functions, graph algorithms, and designs.", ["Counting", "Generating functions", "Designs"]),
    planned("APM346H1", "Partial Differential Equations", "Applied Math", "Year 3", "Applied PDE methods and classical equations.", ["PDEs", "Fourier methods", "Applications"]),
    planned("MAT347Y1", "Groups, Rings and Fields", "Algebra", "Year 3", "Abstract algebra from groups through rings, modules, fields, and Galois theory.", ["Groups", "Rings", "Fields", "Galois theory"]),
    planned("APM348H1", "Mathematical Modelling", "Applied Math", "Year 3", "Modelling methods across applied mathematics.", ["Modelling", "Applied analysis", "Applications"]),
    planned("MAT351Y1", "Partial Differential Equations", "Analysis", "Year 3", "Theoretical PDEs, well-posedness, Green's functions, Fourier methods, and nonlinear phenomena.", ["PDEs", "Energy methods", "Distributions"]),
    planned("MAT354H1", "Complex Analysis I", "Analysis", "Year 3", "Proof-based complex analysis: Cauchy theory, series, maximum modulus, and residues.", ["Cauchy theorem", "Laurent series", "Residues"]),
    planned("MAT357H1", "Foundations of Real Analysis", "Analysis", "Year 3", "Function spaces, Banach/Hilbert spaces, Lebesgue integration, and convergence theorems.", ["Measure", "Lebesgue integral", "Banach spaces"]),
    planned("MAT363H1", "Geometry of Curves and Surfaces", "Geometry", "Year 3", "Curves, surfaces, curvature, geodesics, minimal surfaces, and Gauss-Bonnet.", ["Curvature", "Geodesics", "Gauss-Bonnet"]),
    planned("MAT367H1", "Differential Geometry", "Geometry", "Year 3", "Geometry beyond curves and surfaces.", ["Manifolds", "Curvature", "Differential geometry"]),
    planned("MAT370H1", "Introduction to Mathematical Probability", "Probability", "Year 3", "Mathematical probability for students with strong calculus and algebra background.", ["Probability", "Random variables", "Limit theorems"]),
    planned("MAT377H1", "Mathematical Probability Theory", "Probability", "Year 3", "Proof-based probability theory for math/statistics students.", ["Probability theory", "Convergence", "Stochastic ideas"]),

    planned("MAT401H1", "Polynomial Equations and Fields", "Algebra", "Year 4", "Advanced algebra around polynomial equations and field theory.", ["Fields", "Polynomials", "Algebra"]),
    planned("MAT402H1", "Classical Geometries", "Geometry", "Year 4", "Classical geometry from an advanced viewpoint.", ["Geometry", "Transformations", "Classical methods"]),
    planned("MAT403H1", "Classical Geometries II", "Geometry", "Year 4", "Continuation of classical geometry.", ["Geometry", "Advanced topics", "Transformations"]),
    planned("MAT409H1", "Set Theory", "Logic", "Year 4", "Axiomatic set theory and foundations.", ["Set theory", "Foundations", "Logic"]),
    planned("MAT415H1", "Algebraic Number Theory", "Number Theory", "Year 4", "Number fields, rings of integers, ideals, and arithmetic structure.", ["Number fields", "Ideals", "Algebraic integers"]),
    planned("MAT417H1", "Analytic Number Theory", "Number Theory", "Year 4", "Analytic methods in number theory.", ["Prime numbers", "Analytic methods", "Dirichlet series"]),
    planned("APM421H1", "Mathematical Foundations of Quantum Mechanics and Quantum Information Theory", "Applied Math", "Year 4", "Mathematical foundations for quantum theory and information.", ["Quantum mechanics", "Hilbert spaces", "Information"]),
    planned("MAT425H1", "Differential Topology", "Topology", "Year 4", "Smooth manifolds and topology through differentiable methods.", ["Manifolds", "Transversality", "Topology"]),
    planned("APM426H1", "General Relativity", "Applied Math", "Year 4", "Mathematical general relativity.", ["Relativity", "Geometry", "Physics"]),
    planned("MAT436H1", "Introduction to Linear Operators", "Analysis", "Year 4", "Linear operators and functional analysis background.", ["Operators", "Functional analysis", "Hilbert spaces"]),
    planned("MAT437H1", "K-Theory and C* Algebras", "Analysis", "Year 4", "Operator algebras and K-theoretic ideas.", ["C* algebras", "K-theory", "Operators"]),
    planned("APM441H1", "Asymptotic and Perturbation Methods", "Applied Math", "Year 4", "Asymptotic expansions and perturbation methods.", ["Asymptotics", "Perturbation", "Approximation"]),
    planned("MAT445H1", "Representation Theory", "Algebra", "Year 4", "Representations of groups and algebraic structures.", ["Representations", "Characters", "Modules"]),
    planned("APM446H1", "Applied Nonlinear Equations", "Applied Math", "Year 4", "Nonlinear equations in applied mathematics.", ["Nonlinear equations", "Applied analysis", "Dynamics"]),
    planned("MAT448H1", "Introduction to Commutative Algebra and Algebraic Geometry", "Algebra", "Year 4", "Commutative algebra and algebraic geometry foundations.", ["Rings", "Ideals", "Algebraic geometry"]),
    planned("MAT449H1", "Algebraic Curves", "Algebra", "Year 4", "Algebraic curves and related geometry.", ["Curves", "Algebraic geometry", "Fields"]),
    planned("MAT454H1", "Complex Analysis II", "Analysis", "Year 4", "Advanced complex analysis.", ["Complex analysis", "Riemann surfaces", "Advanced topics"]),
    planned("MAT457H1", "Advanced Real Analysis I", "Analysis", "Year 4", "Graduate-prep real analysis.", ["Measure", "Integration", "Functional analysis"]),
    planned("MAT458H1", "Advanced Real Analysis II", "Analysis", "Year 4", "Continuation of advanced real analysis.", ["Functional analysis", "Measure theory", "Advanced analysis"]),
    planned("APM461H1", "Combinatorial Methods", "Discrete Math", "Year 4", "Advanced combinatorial methods.", ["Combinatorics", "Methods", "Applications"]),
    planned("MAT461H1", "Hamiltonian Mechanics", "Applied Math", "Year 4", "Mathematical Hamiltonian mechanics.", ["Mechanics", "Hamiltonian systems", "Geometry"]),
    planned("APM462H1", "Nonlinear Optimization", "Applied Math", "Year 4", "First and second order optimization, constraints, convexity, and calculus of variations.", ["Optimization", "KKT conditions", "Convexity"]),
    planned("MAT464H1", "Riemannian Geometry", "Geometry", "Year 4", "Riemannian manifolds and curvature.", ["Manifolds", "Metrics", "Curvature"]),
    planned("APM466H1", "Mathematical Theory of Finance", "Applied Math", "Year 4", "Mathematical finance theory.", ["Finance", "Stochastic models", "Optimization"]),
    planned("MAT475H1", "Problem Solving Seminar", "Seminar", "Year 4", "Advanced mathematical problem solving and presentation.", ["Problem solving", "Proofs", "Communication"]),
    planned("MAT477H1", "Seminar in Mathematics", "Seminar", "Year 4", "Advanced seminar with varying topic and student presentations.", ["Seminar", "Research", "Presentation"]),
    planned("MAT478H1", "Seminar in Mathematics", "Seminar", "Year 4", "Advanced seminar with varying topic and student presentations.", ["Seminar", "Research", "Presentation"]),

    planned("STA237H1", "Probability, Statistics and Data Analysis I", "Statistics", "Year 2", "Probability, statistics, and data analysis foundation.", ["Probability", "Statistics", "Data analysis"]),
    planned("STA238H1", "Probability, Statistics and Data Analysis II", "Statistics", "Year 2", "Continuation of probability, statistics, and data analysis.", ["Inference", "Models", "Data analysis"]),
    planned("STA247H1", "Probability with Computer Applications", "Statistics", "Year 2", "Probability with computational applications.", ["Probability", "Computing", "Simulation"]),
    planned("STA248H1", "Statistics for Computer Scientists", "Statistics", "Year 2", "Statistics course oriented toward computer science students.", ["Statistics", "Computing", "Inference"]),
    planned("STA255H1", "Statistical Theory", "Statistics", "Year 2", "Theory-oriented statistics foundation.", ["Statistical theory", "Inference", "Probability"]),
    planned("STA257H1", "Probability and Statistics I", "Statistics", "Year 2", "Theoretical probability and statistics foundation.", ["Probability", "Statistics", "Theory"]),
    planned("STA261H1", "Probability and Statistics II", "Statistics", "Year 2", "Continuation of theoretical probability and statistics.", ["Inference", "Distributions", "Theory"]),
    planned("STA302H1", "Methods of Data Analysis I", "Statistics", "Year 3", "Core data analysis methods for statistics programs.", ["Regression", "Data analysis", "Models"]),
    planned("STA303H1", "Methods of Data Analysis II", "Statistics", "Year 3", "Continuation of data analysis methods.", ["Models", "Data analysis", "Applications"]),
    planned("STA304H1", "Surveys, Sampling and Observational Data", "Statistics", "Year 3", "Sampling, survey methods, and observational data.", ["Sampling", "Surveys", "Observational data"]),
    planned("STA305H1", "Design and Analysis of Experiments", "Statistics", "Year 3", "Experimental design and analysis.", ["Experiments", "ANOVA", "Design"]),
    planned("STA313H1", "Data Visualization", "Statistics", "Year 3", "Statistical graphics and communication.", ["Visualization", "Communication", "Data"]),
    planned("STA314H1", "Statistical Methods for Machine Learning I", "Statistics", "Year 3", "Machine learning methods from a statistical perspective.", ["Machine learning", "Prediction", "Models"]),
    planned("STA347H1", "Probability", "Probability", "Year 3", "Upper-year probability course.", ["Probability", "Random variables", "Limit theorems"]),
    planned("STA355H1", "Theory of Statistical Practice", "Statistics", "Year 3", "Theoretical foundations behind statistical practice.", ["Inference", "Practice", "Theory"]),
    planned("STA357H1", "Theoretical Probability", "Probability", "Year 3", "Theoretical probability for statistics specialists.", ["Probability theory", "Convergence", "Distributions"]),
    planned("STA365H1", "Applied Bayesian Statistics", "Statistics", "Year 3", "Bayesian modelling and applied inference.", ["Bayesian statistics", "Models", "Computation"]),
    planned("STA410H1", "Statistical Computation", "Statistics", "Year 4", "Computational methods for statistics.", ["Computation", "Simulation", "Algorithms"]),
    planned("STA414H1", "Statistical Methods for Machine Learning II", "Statistics", "Year 4", "Advanced statistical machine learning.", ["Machine learning", "Inference", "Prediction"]),
    planned("STA422H1", "Theory of Statistical Inference", "Statistics", "Year 4", "Theoretical statistical inference.", ["Inference", "Estimators", "Testing"]),
    planned("STA437H1", "Methods for Multivariate Data", "Statistics", "Year 4", "Multivariate statistical methods.", ["Multivariate data", "Models", "Dimension"]),
    planned("STA442H1", "Methods of Applied Statistics", "Statistics", "Year 4", "Advanced applied statistics methods.", ["Applied statistics", "Models", "Data analysis"]),
    planned("STA447H1", "Stochastic Processes", "Probability", "Year 4", "Stochastic processes for probability/statistics pathways.", ["Stochastic processes", "Markov chains", "Probability"]),
    planned("STA450H1", "Topics in Statistics", "Statistics", "Year 4", "Special topic in statistics; content varies.", ["Topics", "Statistics", "Flexible"]),
    planned("STA452H1", "Mathematical Statistics I", "Statistics", "Year 4", "Mathematical statistics for theory-oriented students.", ["Mathematical statistics", "Inference", "Theory"]),
    planned("STA453H1", "Mathematical Statistics II", "Statistics", "Year 4", "Continuation of mathematical statistics.", ["Mathematical statistics", "Asymptotics", "Theory"]),
    planned("STA457H1", "Time Series Analysis", "Statistics", "Year 4", "Time series models and inference.", ["Time series", "Forecasting", "Dependence"]),
    planned("STA465H1", "Spatial Data Analysis", "Statistics", "Year 4", "Spatial statistical modelling and analysis.", ["Spatial data", "Models", "Applications"]),
    planned("STA475H1", "Survival Analysis", "Statistics", "Year 4", "Survival and event-time analysis.", ["Survival analysis", "Hazards", "Censoring"]),
    planned("STA480H1", "Fundamentals of Statistical Genetics", "Statistics", "Year 4", "Statistical genetics foundations.", ["Genetics", "Statistics", "Applications"]),
    planned("STA490Y1", "Statistical Consultation, Communication, and Collaboration", "Statistics", "Year 4", "Consulting, collaboration, and communication in statistical work.", ["Consulting", "Communication", "Collaboration"]),
    planned("STA492H1", "Seminar in Statistical Science", "Statistics", "Year 4", "Seminar course in statistical science.", ["Seminar", "Research", "Presentation"]),

    flexible("MAT282H1", "Topics in Mathematics", "Flexible", "Year 2", "Topic varies by offering.", ["Topics", "Flexible", "Mathematics"]),
    flexible("MAT295H1", "Independent Reading in Mathematics", "Flexible", "Year 2", "Independent reading course in mathematics.", ["Reading", "Independent study", "Mathematics"]),
    flexible("MAT296H1", "Independent Reading in Mathematics", "Flexible", "Year 2", "Independent reading course in mathematics.", ["Reading", "Independent study", "Mathematics"]),
    flexible("MAT297Y1", "Research Project in Mathematics", "Flexible", "Year 2", "Research project in mathematics.", ["Research", "Project", "Mathematics"]),
    flexible("MAT299H1", "Research Opportunity Program", "Flexible", "Year 2", "Research Opportunity Program course.", ["ROP", "Research", "Mathematics"]),
    flexible("MAT299Y1", "Research Opportunity Program", "Flexible", "Year 2", "Research Opportunity Program course.", ["ROP", "Research", "Mathematics"]),
    flexible("MAT382H1", "Topics in Mathematics", "Flexible", "Year 3", "Topic varies by offering.", ["Topics", "Flexible", "Mathematics"]),
    flexible("MAT395H1", "Independent Reading in Mathematics", "Flexible", "Year 3", "Independent reading course in mathematics.", ["Reading", "Independent study", "Mathematics"]),
    flexible("MAT396H1", "Independent Reading in Mathematics", "Flexible", "Year 3", "Independent reading course in mathematics.", ["Reading", "Independent study", "Mathematics"]),
    flexible("APM396H1", "Independent Reading in Applied Mathematics", "Flexible", "Year 3", "Independent reading course in applied mathematics.", ["Reading", "Applied math", "Independent study"]),
    flexible("MAT397Y1", "Research Project in Mathematics", "Flexible", "Year 3", "Research project in mathematics.", ["Research", "Project", "Mathematics"]),
    flexible("MAT399H1", "Research Opportunity Program", "Flexible", "Year 3", "Research Opportunity Program course.", ["ROP", "Research", "Mathematics"]),
    flexible("MAT399Y1", "Research Opportunity Program", "Flexible", "Year 3", "Research Opportunity Program course.", ["ROP", "Research", "Mathematics"]),
    flexible("MAT482H1", "Topics in Mathematics", "Flexible", "Year 4", "Topic varies by offering.", ["Topics", "Flexible", "Mathematics"]),
    flexible("MAT483H1", "Topics in Mathematics", "Flexible", "Year 4", "Topic varies by offering.", ["Topics", "Flexible", "Mathematics"]),
    flexible("MAT495H1", "Independent Reading in Mathematics", "Flexible", "Year 4", "Independent reading course in mathematics.", ["Reading", "Independent study", "Mathematics"]),
    flexible("APM496H1", "Independent Readings in Applied Mathematics", "Flexible", "Year 4", "Independent reading course in applied mathematics.", ["Reading", "Applied math", "Independent study"]),
    flexible("MAT496H1", "Independent Reading in Mathematics", "Flexible", "Year 4", "Independent reading course in mathematics.", ["Reading", "Independent study", "Mathematics"]),
    flexible("MAT497Y1", "Research Project in Mathematics", "Flexible", "Year 4", "Research project in mathematics.", ["Research", "Project", "Mathematics"]),
    flexible("MAT499Y1", "Readings in Mathematics", "Flexible", "Year 4", "Readings course in mathematics.", ["Readings", "Independent study", "Mathematics"]),
    flexible("STA299H1", "Research Opportunity Program", "Statistics Flex", "Year 2", "Research Opportunity Program course in statistics.", ["ROP", "Research", "Statistics"]),
    flexible("STA299Y1", "Research Opportunity Program", "Statistics Flex", "Year 2", "Research Opportunity Program course in statistics.", ["ROP", "Research", "Statistics"]),
    flexible("STA399H1", "Research Opportunity Program", "Statistics Flex", "Year 3", "Research Opportunity Program course in statistics.", ["ROP", "Research", "Statistics"]),
    flexible("STA399Y1", "Research Opportunity Program", "Statistics Flex", "Year 3", "Research Opportunity Program course in statistics.", ["ROP", "Research", "Statistics"]),
    flexible("STA496H1", "Readings in Statistics", "Statistics Flex", "Year 4", "Readings course in statistics.", ["Readings", "Independent study", "Statistics"]),
    flexible("STA497H1", "Readings in Statistics", "Statistics Flex", "Year 4", "Readings course in statistics.", ["Readings", "Independent study", "Statistics"]),
    flexible("STA498Y1", "Readings in Statistics", "Statistics Flex", "Year 4", "Readings course in statistics.", ["Readings", "Independent study", "Statistics"]),
    flexible("STA499Y1", "Readings in Statistics", "Statistics Flex", "Year 4", "Readings course in statistics.", ["Readings", "Independent study", "Statistics"])
  ]);
}());
