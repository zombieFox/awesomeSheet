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


  function toggleMenuItem(options) {
    var defaultOptions = {
      menuItem: null,
      state: null
    };
    if (options) {
      defaultOptions = helper.applyOptions(defaultOptions, options);
    };
    var _on = function(menuItem) {
      var options = helper.makeObject(menuItem.dataset.menuItemOptions);
      var menuLinkIcon = menuItem.querySelector(".js-menu-link-icon");
      var menuLinkText = menuItem.querySelector(".js-menu-link-text");
      menuItem.dataset.active = true;
      helper.addClass(menuItem, "is-active");
      if (options.mode == "display") {
        helper.addClass(menuLinkIcon, "icon-edit");
        helper.removeClass(menuLinkIcon, "icon-reader");
        menuLinkText.textContent = options.activeText;
      } else if (options.mode == "night") {
        helper.addClass(menuLinkIcon, "icon-sun");
        helper.removeClass(menuLinkIcon, "icon-moon");
        menuLinkText.textContent = options.activeText;
      } else if (options.mode == "fullscreen") {
        helper.addClass(menuLinkIcon, "icon-fullscreen-exit");
        helper.removeClass(menuLinkIcon, "icon-fullscreen");
        menuLinkText.textContent = options.activeText;
      };
    };
    var _off = function(menuItem) {
      var options = helper.makeObject(menuItem.dataset.menuItemOptions);
      var menuLinkIcon = menuItem.querySelector(".js-menu-link-icon");
      var menuLinkText = menuItem.querySelector(".js-menu-link-text");
      menuItem.dataset.active = false;
      helper.removeClass(menuItem, "is-active");
      if (options.mode == "display") {
        helper.addClass(menuLinkIcon, "icon-reader");
        helper.removeClass(menuLinkIcon, "icon-edit");
        menuLinkText.textContent = options.inactiveText;
      } else if (options.mode == "night") {
        helper.addClass(menuLinkIcon, "icon-moon");
        helper.removeClass(menuLinkIcon, "icon-sun");
        menuLinkText.textContent = options.inactiveText;
      } else if (options.mode == "fullscreen") {
        helper.addClass(menuLinkIcon, "icon-fullscreen");
        helper.removeClass(menuLinkIcon, "icon-fullscreen-exit");
        menuLinkText.textContent = options.inactiveText;
      };
    };
    if (defaultOptions.state != null) {
      if (defaultOptions.state == "active") {
        _on(defaultOptions.menuItem);
      } else if (defaultOptions.state == "inactive") {
        _off(defaultOptions.menuItem);
      };
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

  function _bind_menuLinks() {
    var menuToggle = helper.e(".js-menu-toggle");
    var menuLinkChnageLog = helper.e(".js-menu-link-chnage-log");
    var menuLinkNightMode = helper.e(".js-menu-link-night-mode");
    var menuLinkDisplayMode = helper.e(".js-menu-link-display-mode");
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
    menuLinkDisplayMode.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      display.clear();
      display.render();
      display.toggle({
        all: true
      });
      themeColor.render();
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
        message: "Existing characters will remain and the Demo characters, Izlara and Ravich, will be restored.",
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
  };

  // exposed methods
  return {
    bind: bind,
    close: close,
    open: open,
    toggle: toggle,
    toggleMenuItem: toggleMenuItem
  };

})();
