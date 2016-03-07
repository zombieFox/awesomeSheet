var nav = (function() {


  function _fullscreen() {
    var fullscreen = helper.e(".fullscreen");
    var root = window.document;
    var icon = fullscreen.querySelector("span");
    var rootElement = root.documentElement;
    var requestFullScreen = rootElement.requestFullscreen || rootElement.mozRequestFullScreen || rootElement.webkitRequestFullScreen || rootElement.msRequestFullscreen;
    var cancelFullScreen = root.exitFullscreen || root.mozCancelFullScreen || root.webkitExitFullscreen || root.msExitFullscreen;
    if (!root.fullscreenElement && !root.mozFullScreenElement && !root.webkitFullscreenElement && !root.msFullscreenElement) {
      requestFullScreen.call(rootElement);
      helper.toggleClass(fullscreen, "active");
      helper.toggleClass(icon, "icon-fullscreen-exit");
      helper.toggleClass(icon, "icon-fullscreen");
    } else {
      cancelFullScreen.call(root);
      helper.toggleClass(fullscreen, "active");
      helper.toggleClass(icon, "icon-fullscreen-exit");
      helper.toggleClass(icon, "icon-fullscreen");
    }
  };

  function _render_navAnchor(characterName, characterIndex) {
    var navLi = document.createElement("li");
    var icon = document.createElement("span");
    icon.setAttribute("class", "icon icon-check-box-unchecked");
    var text = document.createElement("span");
    text.textContent = characterName;
    text.setAttribute("class", "name");
    var navAnchor = document.createElement("a");
    navAnchor.setAttribute("href", "javascript:void(0)");
    navAnchor.setAttribute("data-character-index", characterIndex);
    navAnchor.setAttribute("class", "clearfix character-toggle character-index-" + characterIndex);
    navAnchor.setAttribute("tabindex", 10);
    navAnchor.appendChild(icon);
    navAnchor.appendChild(text);
    navLi.appendChild(navAnchor);
    _bind_characterOption(navAnchor);
    return navLi;
  };

  function _bind_characterOption(characterLink) {
    characterLink.addEventListener("click", function() {
      _switch_character(this);
      navClose();
      sheet.storeCharacters();
      sheet.storeCharacterIndex();
      sheet.clear();
      sheet.render();
    }, false);
  };

  function _switch_character(characterLink) {
    var newIndex = characterLink.dataset.characterIndex;
    var allCharacterToggle = helper.eA(".character-toggle");
    sheet.setIndex(newIndex);
    for (var i = 0; i < allCharacterToggle.length; i++) {
      var icon = allCharacterToggle[i].querySelector(".icon");
      helper.removeClass(icon, "icon-check-box-checked");
      helper.addClass(icon, "icon-check-box-unchecked");
      helper.removeClass(allCharacterToggle[i], "active");
    };
    var icon = characterLink.querySelector(".icon");
    helper.removeClass(icon, "icon-check-box-unchecked");
    helper.addClass(icon, "icon-check-box-checked");
    helper.addClass(characterLink, "active");
  };

  function render(array) {
    var navCharacters = helper.e(".nav-characters");
    for (i in array) {
      if (array[i].input.name) {
        var characterToggle = _render_navAnchor(array[i].input.name, i);
        navCharacters.appendChild(characterToggle);
        if (i == sheet.getIndex()) {
          var icon = characterToggle.querySelector(".icon");
          var anchor = characterToggle.querySelector("a");
          helper.removeClass(icon, "icon-check-box-unchecked");
          helper.addClass(icon, "icon-check-box-checked");
          helper.addClass(icon, "icon-check-box-checked");
          helper.addClass(anchor, "active");
        };
      } else {
        var characterToggle = _render_navAnchor("Unnamed Character", i);
        navCharacters.appendChild(characterToggle);
      };
    };
  };

  function navClose() {
    helper.removeClass(helper.e("nav"), "open");
  };

  function navOpen() {
    helper.addClass(helper.e("nav"), "open");
  };

  function navToggle() {
    helper.toggleClass(helper.e("nav"), "open");
  };

  function bind() {
    var nav = helper.e("nav");
    var navToggleElement = helper.e(".nav-toggle");
    var fullscreen = helper.e(".fullscreen");
    var clearAll = helper.e(".clear-all");
    var exportCharacter = helper.e(".export-character");
    navToggleElement.addEventListener("click", function() {
      navToggle();
    }, false);
    fullscreen.addEventListener("click", function() {
      _fullscreen();
    }, false);
    clearAll.addEventListener("click", function() {
      prompt.render("Are you sure?", "All characters will be removed. This can not be undone.", "clear all", true);
      navClose();
    }, false);
    exportCharacter.addEventListener("click", function() {
      sheet.export(sheet.getIndex());
      navClose();
    }, false);
    window.addEventListener('click', function(event) {
      if (event.target != nav && helper.getClosest(event.target, "nav") != nav) {
        navClose();
      };
    }, false);
    window.addEventListener("keydown", function(event) {
      if (event.keyCode == 27) {
        navClose();
      };
    }, false);
  };

  // exposed methods
  return {
    bind: bind,
    render: render,
    navOpen: navOpen,
    navClose: navClose,
    navToggle: navToggle
  }

})();
