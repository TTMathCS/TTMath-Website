(function () {
  "use strict";

  var courses = Array.isArray(window.UOFT_COURSES) ? window.UOFT_COURSES : [];
  var grid = document.getElementById("course-grid");
  var filters = document.getElementById("course-filters");
  var search = document.getElementById("course-search");
  var resultCount = document.getElementById("result-count");
  var courseCount = document.getElementById("course-count");
  var guideCount = document.getElementById("guide-count");
  var chapterCount = document.getElementById("chapter-count");
  var activeSubject = "All";
  var localCoursePath = /^[A-Za-z0-9_-]+\/index\.html$/;
  var levelOrder = ["Year 1", "Year 2", "Year 3", "Year 4"];

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

  function hasLocalGuide(course) {
    return course.path && localCoursePath.test(course.path);
  }

  function makeCourseCard(course) {
    var card = hasLocalGuide(course)
      ? element("a", "course-card")
      : element("article", "course-card planned-card");
    var top = element("div", "card-top");
    var identity = element("div");
    var code = element("span", "course-code", course.code);
    var title = element("h3", "", course.title);
    var subject = element("span", "subject-tag", course.subject);
    var description = element("p", "course-description", course.description);
    var facts = element("dl", "course-facts");
    var topics = element("div", "topic-list");
    var action = element("span", "card-action", hasLocalGuide(course)
      ? "Open course guide"
      : "Planned guide entry");

    if (hasLocalGuide(course)) {
      card.href = course.path;
    }
    identity.append(code, title);
    top.append(identity, subject);

    [
      ["Level", course.term],
      ["Guide", course.chapters ? String(course.chapters) + " chapters" : "Not built"],
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

  function levelSort(first, second) {
    var firstIndex = levelOrder.indexOf(first);
    var secondIndex = levelOrder.indexOf(second);
    if (firstIndex === -1) {
      firstIndex = levelOrder.length;
    }
    if (secondIndex === -1) {
      secondIndex = levelOrder.length;
    }
    return firstIndex === secondIndex
      ? first.localeCompare(second)
      : firstIndex - secondIndex;
  }

  function makeCourseGroup(level, groupCourses) {
    var section = element("section", "course-year-group");
    var heading = element("div", "year-heading");
    var title = element("h3", "", level);
    var count = element("p", "", groupCourses.length + (
      groupCourses.length === 1 ? " course" : " courses"
    ));
    var cards = element("div", "course-grid");

    groupCourses.forEach(function (course) {
      cards.append(makeCourseCard(course));
    });

    heading.append(title, count);
    section.append(heading, cards);
    return section;
  }

  function renderCourses() {
    var query = search.value.trim().toLowerCase();
    var visible = courses.filter(function (course) {
      var matchesSubject = activeSubject === "All" || course.subject === activeSubject;
      var matchesQuery = !query || searchableText(course).indexOf(query) !== -1;
      return matchesSubject && matchesQuery;
    });

    grid.replaceChildren();
    if (!visible.length) {
      grid.append(element("p", "empty-state", "No courses match this search yet."));
    } else {
      var groups = {};
      visible.forEach(function (course) {
        var level = course.term || "Other";
        if (!groups[level]) {
          groups[level] = [];
        }
        groups[level].push(course);
      });

      Object.keys(groups).sort(levelSort).forEach(function (level) {
        grid.append(makeCourseGroup(level, groups[level]));
      });
    }

    resultCount.textContent = visible.length === courses.length
      ? "Showing all " + courses.length + " courses, grouped by year."
      : "Showing " + visible.length + " of " + courses.length + " courses, grouped by year.";
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
  if (guideCount) {
    guideCount.textContent = String(courses.filter(hasLocalGuide).length);
  }
  chapterCount.textContent = String(courses.reduce(function (total, course) {
    return total + course.chapters;
  }, 0));

  search.addEventListener("input", renderCourses);
  renderFilters();
  renderCourses();
}());
