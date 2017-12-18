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
      offset = parseInt(getComputedStyle(header).height, 10);
    } else {
      offset = parseInt(getComputedStyle(nav).height, 10) + parseInt(getComputedStyle(header).height, 10);
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

  function _quickLinkSmoothScroll(element) {
    var id = element.dataset.link;
    var sectionWrapper = helper.e(".js-section-wrapper");
    var all_section = helper.eA(".js-section");
    var nav = helper.e(".js-nav");
    var offset;
    var options;
    // // if nav is on the left after 900px wide viewport
    // if (document.documentElement.clientWidth >= 900) {
    //   offset = parseInt(getComputedStyle(all_section[1]).marginTop, 10);
    // } else {
    //   offset = parseInt(getComputedStyle(all_section[1]).marginTop, 10) + parseInt(getComputedStyle(nav).height, 10);
    // };
    offset = parseInt(getComputedStyle(sectionWrapper).marginTop, 10) + parseInt(getComputedStyle(all_section[1]).marginTop, 10);
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
        _quickLinkSmoothScroll(this);
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
