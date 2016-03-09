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

  function _render_navCharacters(characterName, characterIndex) {
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
    _bind_characterOption(navAnchor, characterIndex);
    return navLi;
  };

  function _bind_characterOption(characterLink, newIndex) {
    characterLink.addEventListener("click", function() {
      _switch_character(this);
      sheet.storeCharacters();
      sheet.setIndex(newIndex);
      sheet.clear();
      sheet.render();
    }, false);
  };

  function _switch_character(characterLink) {
    var newIndex = characterLink.dataset.characterIndex;
    var allCharacterAnchor = helper.eA(".character-toggle");
    sheet.setIndex(newIndex);
    for (var i = 0; i < allCharacterAnchor.length; i++) {
      var icon = allCharacterAnchor[i].querySelector(".icon");
      helper.removeClass(icon, "icon-check-box-checked");
      helper.addClass(icon, "icon-check-box-unchecked");
      helper.removeClass(allCharacterAnchor[i], "active");
    };
    var icon = characterLink.querySelector(".icon");
    helper.removeClass(icon, "icon-check-box-unchecked");
    helper.addClass(icon, "icon-check-box-checked");
    helper.addClass(characterLink, "active");
  };

  function clear() {
    var navCharacters = helper.e(".nav-characters");
    navCharacters.innerHTML = "";
  };

  function render(array) {
    var navCharacters = helper.e(".nav-characters");
    for (i in array) {
      var characterAnchor;
      if (array[i].input.name) {
        characterAnchor = _render_navCharacters(array[i].input.name, i)
      } else {
        characterAnchor = _render_navCharacters("New Character", i)
      };
      navCharacters.appendChild(characterAnchor);
      if (i == sheet.getIndex()) {
        var icon = characterAnchor.querySelector(".icon");
        var anchor = characterAnchor.querySelector("a");
        helper.removeClass(icon, "icon-check-box-unchecked");
        helper.addClass(icon, "icon-check-box-checked");
        helper.addClass(icon, "icon-check-box-checked");
        helper.addClass(anchor, "active");
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

  function remove() {
    var name;
    if (sheet.getCharacter(sheet.getIndex()).input.name) {
      name = sheet.getCharacter(sheet.getIndex()).input.name;
    } else {
      name = "New Character";
    };
    prompt.render("confirm", "Remove " + name + "?", "This character will be removed. This can not be undone.", "clear character");
  };

  function bind() {
    var nav = helper.e("nav");
    var navToggleElement = helper.e(".nav-toggle");
    var fullscreen = helper.e(".fullscreen");
    var clearAll = helper.e(".clear-all");
    var characterAdd = helper.e(".character-add");
    var characterRemove = helper.e(".character-remove");
    var characterExport = helper.e(".character-export");
    navToggleElement.addEventListener("click", function() {
      navToggle();
    }, false);
    fullscreen.addEventListener("click", function() {
      _fullscreen();
    }, false);
    clearAll.addEventListener("click", function() {
      prompt.render("confirm", "Are you sure?", "All characters will be removed. This can not be undone.", "clear all");
      navClose();
    }, false);
    characterExport.addEventListener("click", function() {
      sheet.print();
      navClose();
    }, false);
    characterAdd.addEventListener("click", function() {
      sheet.addCharacter();
    }, false);
    characterRemove.addEventListener("click", function() {
      remove();
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
    clear: clear,
    render: render,
    open: navOpen,
    close: navClose,
    toggle: navToggle
  }

})();
