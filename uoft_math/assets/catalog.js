(function () {
  "use strict";

  var courses = Array.isArray(window.UOFT_COURSES) ? window.UOFT_COURSES : [];
  var grid = document.getElementById("course-grid");
  var filters = document.getElementById("course-filters");
  var search = document.getElementById("course-search");
  var resultCount = document.getElementById("result-count");
  var courseCount = document.getElementById("course-count");
  var chapterCount = document.getElementById("chapter-count");
  var activeSubject = "All";
  var localCoursePath = /^[A-Za-z0-9_-]+\/index\.html$/;

  function element(tag, className, text) {
    var node = document.createElement(tag);
    if (className) {
      node.className = className;
    }
    if (text !== undefined) {
      node.textContent = text;
    }
    return node;
  }

  function searchableText(course) {
    return [
      course.code,
      course.title,
      course.subject,
      course.term,
      course.description
    ].concat(course.topics || []).join(" ").toLowerCase();
  }

  function safeCoursePath(path) {
    return localCoursePath.test(path) ? path : "#";
  }

  function makeCourseCard(course) {
    var card = element("a", "course-card");
    var top = element("div", "card-top");
    var identity = element("div");
    var code = element("span", "course-code", course.code);
    var title = element("h3", "", course.title);
    var subject = element("span", "subject-tag", course.subject);
    var description = element("p", "course-description", course.description);
    var facts = element("dl", "course-facts");
    var topics = element("div", "topic-list");
    var action = element("span", "card-action", "Open course guide");

    card.href = safeCoursePath(course.path);
    identity.append(code, title);
    top.append(identity, subject);

    [
      ["Term", course.term],
      ["Chapters", String(course.chapters)],
      ["Status", course.status]
    ].forEach(function (fact) {
      facts.append(element("dt", "", fact[0]), element("dd", "", fact[1]));
    });

    (course.topics || []).forEach(function (topic) {
      topics.append(element("span", "", topic));
    });

    card.append(top, description, facts, topics, action);
    return card;
  }

  function renderCourses() {
    var query = search.value.trim().toLowerCase();
    var visible = courses.filter(function (course) {
      var matchesSubject = activeSubject === "All" || course.subject === activeSubject;
      var matchesQuery = !query || searchableText(course).indexOf(query) !== -1;
      return matchesSubject && matchesQuery;
    });

    grid.replaceChildren();
    visible.forEach(function (course) {
      grid.append(makeCourseCard(course));
    });

    if (!visible.length) {
      grid.append(element("p", "empty-state", "No courses match this search yet."));
    }

    resultCount.textContent = visible.length === courses.length
      ? "Showing all " + courses.length + " courses."
      : "Showing " + visible.length + " of " + courses.length + " courses.";
  }

  function renderFilters() {
    var subjects = ["All"];
    courses.forEach(function (course) {
      if (subjects.indexOf(course.subject) === -1) {
        subjects.push(course.subject);
      }
    });

    filters.replaceChildren();
    subjects.forEach(function (subject) {
      var button = element("button", "", subject);
      button.type = "button";
      button.setAttribute("aria-pressed", subject === activeSubject ? "true" : "false");
      button.addEventListener("click", function () {
        activeSubject = subject;
        renderFilters();
        renderCourses();
      });
      filters.append(button);
    });
  }

  courseCount.textContent = String(courses.length);
  chapterCount.textContent = String(courses.reduce(function (total, course) {
    return total + course.chapters;
  }, 0));

  search.addEventListener("input", renderCourses);
  renderFilters();
  renderCourses();
}());
