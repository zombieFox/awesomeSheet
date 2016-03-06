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

  function _createNavAnchor(characterName, characterIndex) {
    var navLi = document.createElement("li");
    var icon = document.createElement("span");
    icon.setAttribute("class", "icon icon-check-box-unchecked");
    var text = document.createElement("span");
    text.textContent = characterName;
    text.setAttribute("class", "name");
    var navAnchor = document.createElement("a");
    navAnchor.setAttribute("href", "javascript:void(0)");
    navAnchor.setAttribute("data-character-index", characterIndex);
    navAnchor.setAttribute("class", "character-toggle character-index-" + characterIndex);
    navAnchor.setAttribute("tabindex", 10);
    navAnchor.appendChild(icon);
    navAnchor.appendChild(text);
    navLi.appendChild(navAnchor);
    _bindCharacterOption(navAnchor);
    return navLi;
  };

  function _bindCharacterOption(characterLink) {
    characterLink.addEventListener("click", function() {
      _switchCharacter(this);
    }, false);
  };

  function _switchCharacter(characterLink) {
    var newIndex = characterLink.dataset.characterIndex;
    var allCharacterToggle = helper.eA(".character-toggle");
    sheet.currentCharacterIndex = newIndex;
    sheet.clear();
    sheet.render();
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
        var characterToggle = _createNavAnchor(array[i].input.name, i);
        navCharacters.appendChild(characterToggle);
        if (i == sheet.currentCharacterIndex) {
          var icon = characterToggle.querySelector(".icon");
          var anchor = characterToggle.querySelector("a");
          helper.removeClass(icon, "icon-check-box-unchecked");
          helper.addClass(icon, "icon-check-box-checked");
          helper.addClass(icon, "icon-check-box-checked");
          helper.addClass(anchor, "active");
        };
      } else {
        var characterToggle = _createNavAnchor("Unnamed Character", i);
        navCharacters.appendChild(characterToggle);
      };
    };
  };

  function bind() {
    var nav = helper.e("nav");
    var toggleNav = helper.e(".toggle-nav");
    var fullscreen = helper.e(".fullscreen");
    var clearAll = helper.e(".clear-all");
    var exportCharacter = helper.e(".export-character");
    fullscreen.addEventListener("click", function() {
      _fullscreen();
    }, false);
    clearAll.addEventListener("click", function() {
      prompt.render("Are you sure?", "All characters will be removed. This can not be undone.", "clear all", true);
      helper.removeClass(nav, "open");
    }, false);
    toggleNav.addEventListener("click", function() {
      helper.toggleClass(nav, "open");
    }, false);
    exportCharacter.addEventListener("click", function() {
      sheet.export();
    }, false);
    window.addEventListener('click', function(event) {
      if (event.target != nav && helper.getClosest(event.target, "nav") != nav) {
        helper.removeClass(nav, "open");
      };
    }, false);
  };

  // exposed methods
  return {
    bind: bind,
    render: render
  }

})();
