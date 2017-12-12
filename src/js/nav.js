var nav = (function() {

  var previousNavShade = null;

  function _destroy_navShade() {
    var navShade = helper.e(".js-nav-shade");
    if (navShade) {
      getComputedStyle(navShade).opacity;
      helper.removeClass(navShade, "is-opaque");
      helper.addClass(navShade, "is-transparent");
    };
  };

  function _render_navShade() {
    var nav = helper.e(".js-nav");
    var body = helper.e("body");
    var displayMode = (helper.e(".js-fab").dataset.displayMode == "true");
    var navShade = document.createElement("div");

    navShade.setAttribute("class", "m-nav-shade js-nav-shade");
    if (displayMode) {
      helper.addClass(navShade, "is-display-mode");
    };
    navShade.destroy = function() {
      helper.removeClass(navShade, "is-opaque");
      helper.addClass(navShade, "is-transparent");
    };

    navShade.addEventListener("transitionend", function(event, elapsed) {
      if (event.propertyName === "opacity" && getComputedStyle(this).opacity == 0) {
        this.parentElement.removeChild(this);
      };
    }.bind(navShade), false);

    navShade.addEventListener("click", function() {
      navClose();
      _destroy_navShade();
    }, false);

    if (previousNavShade) {
      previousNavShade.destroy();
    };

    previousNavShade = navShade;

    body.insertBefore(navShade, nav);

    getComputedStyle(navShade).opacity;

    helper.removeClass(navShade, "is-transparent");
    helper.addClass(navShade, "is-opaque");
  };

  function scrollToTop() {
    if (window.innerWidth < 550) {
      window.scrollTo(0, 0);
    } else {
      smoothScroll.animateScroll(null, "#body");
    };
  };

  function render() {
    _render_quickNav();
  };

  function _render_quickNav() {
    var body = helper.e("body");
    window.onscroll = function() {

      var quickNav = helper.e(".js-quick-nav");
      var all_quickNavLinks = helper.eA(".js-quick-nav-link");
      var all_section = helper.eA(".js-section");

      var offset = parseInt(getComputedStyle(quickNav).height, 10);
      // if nav is on the left after 900px wide viewport
      if (document.documentElement.clientWidth >= 900) {
        offset = 0;
      };

      var all_editControls = helper.eA(".js-edit-controls");

      for (var i = 0; i < all_editControls.length; i++) {
        var pinWatch = helper.e("." + all_editControls[i].dataset.pinWatch);
        var section = helper.getClosest(pinWatch, ".js-section");
        var fillWidth = parseInt(getComputedStyle(all_editControls[i]).width, 10);
        var fillHeight = parseInt(getComputedStyle(all_editControls[i]).height, 10) + parseInt(getComputedStyle(all_editControls[i]).marginTop, 10) + parseInt(getComputedStyle(all_editControls[i]).marginBottom, 10);
        if (section.dataset.minimise == "false" || !section.dataset.minimise && section.dataset.displayMode == "false" || !section.dataset.displayMode) {
          if (pinWatch.getBoundingClientRect().top <= (offset - fillHeight) && pinWatch.getBoundingClientRect().bottom >= (offset + fillHeight)) {
            // console.log("fire", pinWatch);
            helper.addClass(pinWatch, "is-pinned");
            if (!pinWatch.hasAttribute("style")) {
              all_editControls[i].setAttribute("style", "width: " + fillWidth + "px");
              pinWatch.setAttribute("style", "padding-top: " + fillHeight + "px");
            };
          } else {
            helper.removeClass(pinWatch, "is-pinned");
            pinWatch.removeAttribute("style");
            all_editControls[i].removeAttribute("style");
          };
        } else if (section.dataset.minimise == "true" || section.dataset.minimise && section.dataset.displayMode == "true" || section.dataset.displayMode) {
          helper.removeClass(pinWatch, "is-pinned");
          pinWatch.removeAttribute("style");
          all_editControls[i].removeAttribute("style");
        };
      };

      for (var i = 0; i < all_section.length; i++) {
        // console.log(all_section[i].id, "--- top", (all_section[i].getBoundingClientRect().top - parseInt(getComputedStyle(document.querySelector(".js-edit")).marginTop, 10)), "bottom", all_section[i].getBoundingClientRect().bottom);
        if ((all_section[i].getBoundingClientRect().top - parseInt(getComputedStyle(all_section[i]).marginTop, 10)) <= offset && (all_section[i].getBoundingClientRect().bottom + parseInt(getComputedStyle(all_section[i]).marginBottom, 10)) > offset) {
          for (var j = 0; j < all_quickNavLinks.length; j++) {
            helper.removeClass(all_quickNavLinks[j], "is-active");
          };
          helper.addClass(all_quickNavLinks[i], "is-active");
        } else {
          helper.removeClass(all_quickNavLinks[i], "is-active");
        };
      };

    };
  };

  function navClose() {
    var body = helper.e("body");
    var nav = helper.e(".js-nav");
    var hamburger = helper.e(".js-hamburger");
    helper.removeClass(nav, "is-open");
    helper.removeClass(hamburger, "is-open");
    body.dataset.navOpen = false;
    _destroy_navShade();
    page.update();
  };

  function navOpen() {
    var body = helper.e("body");
    var nav = helper.e(".js-nav");
    var hamburger = helper.e(".js-hamburger");
    helper.addClass(nav, "is-open");
    helper.addClass(hamburger, "is-open");
    body.dataset.navOpen = true;
    _render_navShade();
    page.update();
  };

  function toggle() {
    var body = helper.e("body");
    var nav = helper.e(".js-nav");
    var hamburger = helper.e(".js-hamburger");
    if (body.dataset.navOpen == "true") {
      helper.removeClass(nav, "is-open");
      helper.removeClass(hamburger, "is-open");
      body.dataset.navOpen = false;
      _destroy_navShade();
      page.update();
    } else {
      helper.addClass(nav, "is-open");
      helper.addClass(hamburger, "is-open");
      body.dataset.navOpen = true;
      _render_navShade();
      page.update();
    };
  };

  function _quickLinkSmoothScroll(element) {
    var id = element.dataset.link;
    var all_section = helper.eA(".js-section");
    var quickNav = helper.e(".js-quick-nav");
    var offset;
    var options;
    // if nav is on the left after 900px wide viewport
    if (document.documentElement.clientWidth >= 900) {
      offset = parseInt(getComputedStyle(all_section[1]).marginTop, 10);
    } else {
      offset = parseInt(getComputedStyle(all_section[1]).marginTop, 10) + parseInt(getComputedStyle(quickNav).height, 10);
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
    navClose();
    smoothScroll.animateScroll(null, id, options);
  };

  function _bind_navLinks() {
    var navToggle = helper.e(".js-nav-toggle");
    var fullscreenModeToggle = helper.e(".js-fullscreen-mode");
    var nightMode = helper.e(".js-night-mode");
    var chnageLog = helper.e(".js-chnage-log");
    var clearAll = helper.e(".js-clear-all");
    var restoreDemoPcs = helper.e(".js-restore-demo-pcs");

    navToggle.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      characterSelect.close();
      toggle();
    }, false);

    fullscreenModeToggle.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      fullscreen.toggle();
    }, false);

    nightMode.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      night.toggle();
    }, false);

    chnageLog.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      navClose();
      log.changeLog();
    }, false);

    clearAll.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      navClose();
      prompt.render("Clear all characters?", "All characters will be removed. This can not be undone.", "Remove all", sheet.destroy);
    }, false);

    restoreDemoPcs.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      navClose();
      prompt.render("Restore demo PCs?", "All characters will be removed and the demo characters will be restored. Have you backed up your characters by Exporting?", "Restore", sheet.restore);
    }, false);
  };

  function _bind_quickNavLinks() {
    var all_quickNavLink = helper.eA(".js-quick-nav-link");
    for (var i = 0; i < all_quickNavLink.length; i++) {
      all_quickNavLink[i].addEventListener("click", function(event) {
        event.stopPropagation();
        event.preventDefault();
        navClose();
        _quickLinkSmoothScroll(this);
      }, false);
    };
  };

  function _bind_shortcutKeys() {

    window.addEventListener("keydown", function(event) {
      // ctrl+alt+delete
      if (event.ctrlKey && event.altKey && event.keyCode == 8) {
        prompt.render("Clear all characters?", "All characters will be removed. This can not be undone.", "Delete all", sheet.destroy);
        // navClose();
      };
      // ctrl+alt+i
      if (event.ctrlKey && event.altKey && event.keyCode == 73) {
        sheet.import();
        // navClose();
      };
      // ctrl+alt+e
      if (event.ctrlKey && event.altKey && event.keyCode == 69) {
        sheet.export();
        // navClose();
      };
      // ctrl+alt+m
      if (event.ctrlKey && event.altKey && event.keyCode == 77) {
        toggle();
        helper.e(".js-nav-title").focus(this);
      };
      // ctrl+alt+d
      if (event.ctrlKey && event.altKey && event.keyCode == 68) {
        display.clear();
        display.render();
        display.toggle();
      };
      // ctrl+alt+n
      if (event.ctrlKey && event.altKey && event.keyCode == 78) {
        night.toggle();
      };
      // esc
      if (event.keyCode == 27) {
        navClose();
      };
    }, false);

    // window.addEventListener('click', function(event) {
    //   if (event.target != nav && event.target != navToggle && helper.getClosest(event.target, ".js-nav") != nav && helper.getClosest(event.target, ".js-nav-toggle") != navToggle) {
    //     navClose();
    //   };
    // }, false);

    // key debugging
    // window.addEventListener("keydown", function(event) {
    //   console.log(event.keyCode);
    //   console.log(event.metaKey);
    //   console.log(event);
    // });

  };

  function bind() {
    _bind_navLinks();
    _bind_shortcutKeys();
    _bind_quickNavLinks();
  };

  // exposed methods
  return {
    bind: bind,
    render: render,
    open: navOpen,
    close: navClose,
    toggle: toggle,
    scrollToTop: scrollToTop
  }

})();
