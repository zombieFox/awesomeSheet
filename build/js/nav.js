var nav = (function() {

  function scrollToTop() {
    if (window.innerWidth < 550) {
      window.scrollTo(0, 0);
    } else {
      var options = {
        speed: 600,
        easing: "easeInOutQuad"
      };
      var scroll = new SmoothScroll();
      scroll.animateScroll(helper.e('#body'), null, options);
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
      if (body.dataset.navPinned == "true") {
        offset = parseInt(getComputedStyle(header).height, 10);
      } else {
        offset = parseInt(getComputedStyle(header).height, 10) + parseInt(getComputedStyle(nav).height, 10);
      };
    };

    for (var i = 0; i < all_section.length; i++) {
      // console.log(all_section[i].id, "--- top", (all_section[i].getBoundingClientRect().top - parseInt(getComputedStyle(document.querySelector(".js-edit")).marginTop, 10)), "bottom", all_section[i].getBoundingClientRect().bottom);
      var safety = parseFloat(getComputedStyle(helper.e("body")).fontSize) * 2; // 2em
      var top = Math.round((all_section[i].getBoundingClientRect().top - parseInt(getComputedStyle(all_section[i]).marginTop, 10))) - safety;
      var bottom = Math.round((all_section[i].getBoundingClientRect().bottom + parseInt(getComputedStyle(all_section[i]).marginBottom, 10)));
      if (top <= offset && bottom > offset) {
        for (var j = 0; j < all_navLinks.length; j++) {
          helper.removeClass(all_navLinks[j], "is-active");
        };
        helper.addClass(all_navLinks[i], "is-active");
      } else {
        helper.removeClass(all_navLinks[i], "is-active");
      };
    };
  };

  function scrollToSection(id) {
    var section = helper.e(id);
    var sectionMargin = parseInt(getComputedStyle(section).marginTop, 10);
    var sectionTop = section.getBoundingClientRect().top - sectionMargin;
    var header = helper.e(".js-header");
    var headerHeight = parseInt(getComputedStyle(header).height, 10);
    var nav = helper.e(".js-nav");
    var navHeight = parseInt(getComputedStyle(nav).height, 10);
    var zeroPoint;
    var offset;
    var options;
    var speed;
    // if nav is on the left after 900px wide viewport
    if (document.documentElement.clientWidth >= 900) {
      offset = headerHeight + sectionMargin;
      // // is the nav pinned
      // if (body.dataset.navPinned == "true") {
      //   zeroPoint = 0;
      // } else {
      //   zeroPoint = headerHeight;
      // };
      // // if the section top is above the zero point
      // if (sectionTop < zeroPoint) {
      //   // if the section top is above the pin threshold above zero point
      //   if (sectionTop <= zeroPoint - 30) {
      //     offset = headerHeight + sectionMargin;
      //   } else {
      //     offset = zeroPoint + sectionMargin;
      //   };
      //   // if the section top is below the zero point
      // } else if (sectionTop > zeroPoint) {
      //   // if the section top is above the unpin threshold below zero point
      //   if (sectionTop >= zeroPoint + 100) {
      //     offset = sectionMargin;
      //   } else {
      //     offset = zeroPoint + sectionMargin;
      //   };
      // } else if (sectionTop == zeroPoint) {
      //   offset = zeroPoint + sectionMargin;
      // } else {
      //   offset = headerHeight + sectionMargin;
      // };
    } else {
      // is the nav pinned
      if (body.dataset.navPinned == "true") {
        zeroPoint = navHeight;
      } else {
        zeroPoint = headerHeight + navHeight;
      };
      // console.log("sectionTop", sectionTop);
      // if the section top is above the zero point
      if (sectionTop < zeroPoint) {
        // if the section top is above the pin threshold above zero point
        if (sectionTop <= zeroPoint - 30) {
          // console.log("option", 1);
          offset = headerHeight + navHeight + sectionMargin;
        } else {
          // console.log("option", 2);
          offset = zeroPoint + sectionMargin;
        };
        // if the section top is below the zero point
      } else if (sectionTop > zeroPoint) {
        // if the section top is above the unpin threshold below zero point
        if (sectionTop >= zeroPoint + 100) {
          // console.log("option", 3);
          offset = navHeight + sectionMargin;
        } else {
          // console.log("option", 4);
          offset = zeroPoint + sectionMargin;
        };
      } else if (sectionTop == zeroPoint) {
        // console.log("option", 5);
        offset = zeroPoint + sectionMargin;
      } else {
        // console.log("option", 6);
        offset = headerHeight + navHeight + sectionMargin;
      };
    };
    // console.log("offset", offset);
    if (window.innerWidth < 550) {
      speed = 150;
    } else {
      speed = 300;
    };
    options = {
      speed: speed,
      offset: offset,
      easing: "easeInOutQuad"
    };
    var scroll = new SmoothScroll();
    var scrollAnchor = document.querySelector(id);
    scroll.animateScroll(scrollAnchor, null, options);
  };

  function _navLink(element) {
    var id = "#" + element.dataset.link;
    scrollToSection(id);
  };

  function bind() {
    var all_navLink = helper.eA(".js-nav-link");
    for (var i = 0; i < all_navLink.length; i++) {
      all_navLink[i].addEventListener("click", function(event) {
        event.stopPropagation();
        event.preventDefault();
        _navLink(this);
      }, false);
    };
  };

  function unpin() {
    var body = helper.e("body");
    var nav = helper.e(".js-nav");
    helper.removeClass(body, "is-nav-pinned");
    helper.removeClass(nav, "is-pinned");
    body.dataset.navPinned = false;
  };

  function pin() {
    var body = helper.e("body");
    var nav = helper.e(".js-nav");
    helper.addClass(body, "is-nav-pinned");
    helper.addClass(nav, "is-pinned");
    body.dataset.navPinned = true;
  };

  // exposed methods
  return {
    pin: pin,
    unpin: unpin,
    bind: bind,
    scroll: scroll,
    scrollToTop: scrollToTop,
    scrollToSection: scrollToSection
  }

})();
