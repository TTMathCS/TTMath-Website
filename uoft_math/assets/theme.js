"use strict";

// Light/dark theme: applied before paint to avoid a flash, remembered per
// browser, and defaulting to the operating-system preference.
(function () {
  var KEY = "uoft-theme";
  var root = document.documentElement;

  function saved() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  function prefersDark() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function apply(theme) { root.setAttribute("data-theme", theme); }

  apply(saved() || (prefersDark() ? "dark" : "light"));

  document.addEventListener("DOMContentLoaded", function () {
    var button = document.createElement("button");
    button.type = "button";
    button.className = "theme-toggle";
    button.setAttribute("aria-label", "Toggle dark mode");

    function label() {
      button.textContent = root.getAttribute("data-theme") === "dark" ? "☀ Light" : "☾ Dark";
    }
    label();

    button.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      apply(next);
      try { localStorage.setItem(KEY, next); } catch (e) { /* ignore */ }
      label();
    });

    document.body.appendChild(button);
  });
}());
