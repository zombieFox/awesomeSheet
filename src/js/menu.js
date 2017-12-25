var menu = (function() {

  function toggle() {
    modal.destroy();
    prompt.destroy();
    characterSelect.close();
    var body = helper.e("body");
    var menu = helper.e(".js-menu");
    var hamburger = helper.e(".js-hamburger");
    var state = (body.dataset.menuOpen == "true");
    if (state) {
      close();
      shade.destroy();
    } else {
      open();
      shade.render({
        action: function() {
          close();
          page.update();
        }
      });
    };
  };

  function close() {
    var body = helper.e("body");
    var menu = helper.e(".js-menu");
    var menuToggle = helper.e(".js-menu-toggle");
    helper.removeClass(menu, "is-open");
    helper.removeClass(menuToggle, "is-active");
    body.dataset.menuOpen = false;
  };

  function open() {
    var body = helper.e("body");
    var menu = helper.e(".js-menu");
    var menuToggle = helper.e(".js-menu-toggle");
    helper.addClass(menu, "is-open");
    helper.addClass(menuToggle, "is-active");
    body.dataset.menuOpen = true;
  };

  function _bind_shortcutKeys() {
    window.addEventListener("keydown", function(event) {
      // ctrl+alt+f
      if (event.ctrlKey && event.altKey && event.keyCode == 70) {
        fullscreen.toggle();
      };
      // ctrl+alt+i
      if (event.ctrlKey && event.altKey && event.keyCode == 73) {
        shade.destroy();
        sheet.import();
        page.update();
      };
      // ctrl+alt+e
      if (event.ctrlKey && event.altKey && event.keyCode == 69) {
        shade.destroy();
        sheet.export();
        page.update();
      };
      // ctrl+alt+m
      if (event.ctrlKey && event.altKey && event.keyCode == 77) {
        toggle();
        page.update();
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
        close();
      };
    }, false);
    // key debugging
    // window.addEventListener("keydown", function(event) {
    //   console.log(event.keyCode);
    //   console.log(event.metaKey);
    //   console.log(event);
    // });
  };

  function _bind_menuLinks() {
    var menuToggle = helper.e(".js-menu-toggle");
    var menuLinkChnageLog = helper.e(".js-menu-link-chnage-log");
    var menuLinkNightMode = helper.e(".js-menu-link-night-mode");
    var menuLinkFullscreenMode = helper.e(".js-menu-link-fullscreen-mode");
    var menuLinkClearAll = helper.e(".js-menu-link-clear-all");
    var menuLinkRestoreDemoCharacters = helper.e(".js-menu-link-restore-demo-characters");
    menuLinkChnageLog.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      close();
      log.changeLog();
    }, false);
    menuLinkNightMode.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      night.toggle();
    }, false);
    menuLinkFullscreenMode.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      fullscreen.toggle();
    }, false);
    menuLinkClearAll.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      close();
      prompt.render({
        heading: "Clear All Characters?",
        message: "All characters will be removed. This can not be undone. Have you backed up your characters by Exporting?",
        actionText: "Remove all",
        action: sheet.destroy
      });
    }, false);
    menuLinkRestoreDemoCharacters.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      close();
      prompt.render({
        heading: "Restore Demo Characters?",
        message: "All characters will be removed and the demo characters will be restored. This can not be undone. Have you backed up your characters by Exporting?",
        actionText: "Restore",
        action: sheet.restore
      });
    }, false);
    menuToggle.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      characterSelect.close();
      toggle();
      page.update();
    }, false);
  };

  function bind() {
    _bind_menuLinks();
    _bind_shortcutKeys();
  };

  // exposed methods
  return {
    bind: bind,
    close: close,
    open: open,
    toggle: toggle
  };

})();
