var nav = (function() {

  function scrollToTop() {
    if (window.innerWidth < 550) {
      window.scrollTo(0, 0);
    } else {
      smoothScroll.animateScroll(null, "#body");
    };
  };

  function scroll() {
    var header = helper.e(".js-header");
    var nav = helper.e(".js-nav");
    var all_navLinks = helper.eA(".js-nav-link");
    var all_section = helper.eA(".js-section");
    var offset;

    // if nav is on the left after 900px wide viewport
    if (document.documentElement.clientWidth >= 900) {
      if (body.dataset.headerPinned == "true") {
        offset = 0;
      } else {
        offset = parseInt(getComputedStyle(header).height, 10);
      };
    } else {
      if (body.dataset.headerPinned == "true") {
        offset = parseInt(getComputedStyle(header).height, 10);
      } else {
        offset = parseInt(getComputedStyle(header).height, 10) + parseInt(getComputedStyle(nav).height, 10);
      };
    };

    for (var i = 0; i < all_section.length; i++) {
      // console.log(all_section[i].id, "--- top", (all_section[i].getBoundingClientRect().top - parseInt(getComputedStyle(document.querySelector(".js-edit")).marginTop, 10)), "bottom", all_section[i].getBoundingClientRect().bottom);
      if ((all_section[i].getBoundingClientRect().top - parseInt(getComputedStyle(all_section[i]).marginTop, 10)) <= offset && (all_section[i].getBoundingClientRect().bottom + parseInt(getComputedStyle(all_section[i]).marginBottom, 10)) > offset) {
        for (var j = 0; j < all_navLinks.length; j++) {
          helper.removeClass(all_navLinks[j], "is-active");
        };
        helper.addClass(all_navLinks[i], "is-active");
      } else {
        helper.removeClass(all_navLinks[i], "is-active");
      };
    };
  };

  function _quickLink(element) {
    var id = "#" + element.dataset.link;
    var section = helper.e(id);
    var sectionWrapper = helper.e(".js-section-wrapper");
    var header = helper.e(".js-header");
    var nav = helper.e(".js-nav");
    var offset;
    var options;

    // if nav is on the left after 900px wide viewport
    if (document.documentElement.clientWidth >= 900) {

      // if the header is pinned or the section is outside the header threshold and will become pinned while the section scrolls up
      if ((section.getBoundingClientRect().top - parseInt(getComputedStyle(section).marginTop, 10)) < -30) {
        // console.log(1, "top", section.getBoundingClientRect().top);
        offset = parseInt(getComputedStyle(header).height, 10) + parseInt(getComputedStyle(section).marginTop, 10);
      } else if ((section.getBoundingClientRect().top - parseInt(getComputedStyle(section).marginTop, 10)) > 100) {
        // console.log(2, "top", section.getBoundingClientRect().top);
        offset = parseInt(getComputedStyle(section).marginTop, 10);
      } else {
        // console.log(3, "top", section.getBoundingClientRect().top);
        if (body.dataset.headerPinned == "true") {
          offset = parseInt(getComputedStyle(section).marginTop, 10);
        } else {
          offset = parseInt(getComputedStyle(header).height, 10) + parseInt(getComputedStyle(section).marginTop, 10);
        };
      };

    } else {

      // if the header is pinned or the section is outside the header threshold and will become pinned while the section scrolls up
      if ((section.getBoundingClientRect().top - parseInt(getComputedStyle(section).marginTop, 10)) < -30) {
        // console.log(1, "top", section.getBoundingClientRect().top);
        offset = parseInt(getComputedStyle(header).height, 10) + parseInt(getComputedStyle(nav).height, 10) + parseInt(getComputedStyle(section).marginTop, 10);
      } else if ((section.getBoundingClientRect().top - parseInt(getComputedStyle(section).marginTop, 10)) > 100) {
        // console.log(2, "top", section.getBoundingClientRect().top);
        offset = parseInt(getComputedStyle(nav).height, 10) + parseInt(getComputedStyle(section).marginTop, 10);
      } else {
        // console.log(3, "top", section.getBoundingClientRect().top);
        if (body.dataset.headerPinned == "true") {
          offset = parseInt(getComputedStyle(nav).height, 10) + parseInt(getComputedStyle(section).marginTop, 10);
        } else {
          offset = parseInt(getComputedStyle(header).height, 10) + parseInt(getComputedStyle(nav).height, 10) + parseInt(getComputedStyle(section).marginTop, 10);
        };
      };

    };
    if (window.innerWidth < 550) {
      options = {
        speed: 150,
        offset: offset
      };
    } else {
      options = {
        speed: 300,
        offset: offset
      };
    };
    smoothScroll.animateScroll(null, id, options);
  };

  function bind() {
    var all_navLink = helper.eA(".js-nav-link");
    for (var i = 0; i < all_navLink.length; i++) {
      all_navLink[i].addEventListener("click", function(event) {
        event.stopPropagation();
        event.preventDefault();
        _quickLink(this);
      }, false);
    };
  };

  // exposed methods
  return {
    bind: bind,
    scroll: scroll,
    scrollToTop: scrollToTop
  }

})();
