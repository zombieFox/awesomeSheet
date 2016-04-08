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

  function _render_navCharacters(characterName, characterClass, characterLevel, characterIndex) {
    if (typeof characterName == "undefined" || characterName == "") {
      characterName = "New character";
    };
    if (typeof characterClass == "undefined" || characterClass == "") {
      characterClass = "Class";
    };
    if (typeof characterLevel == "undefined" || characterLevel == "") {
      characterLevel = "Level";
    };
    var navLi = document.createElement("li");
    var icon = document.createElement("span");
    icon.setAttribute("class", "icon icon-check-box-unchecked");
    var character = document.createElement("div");
    character.setAttribute("class", "character");
    var nameSpan = document.createElement("span");
    nameSpan.setAttribute("class", "name");
    var classSpan = document.createElement("span");
    classSpan.setAttribute("class", "class");
    var levelSpan = document.createElement("span");
    levelSpan.setAttribute("class", "level");
    nameSpan.textContent = helper.truncate(characterName, 30, true) + " ";
    classSpan.textContent = "(" + helper.truncate(characterClass, 20, true) + " ";
    levelSpan.textContent = helper.truncate(characterLevel, 6) + ")";
    var navAnchor = document.createElement("a");
    navAnchor.setAttribute("href", "javascript:void(0)");
    navAnchor.setAttribute("data-character-index", characterIndex);
    navAnchor.setAttribute("class", "clearfix character-toggle character-index-" + characterIndex);
    navAnchor.setAttribute("tabindex", 10);
    navAnchor.appendChild(icon);
    character.appendChild(nameSpan);
    character.appendChild(classSpan);
    character.appendChild(levelSpan);
    navAnchor.appendChild(character);
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
    var name = sheet.getCharacter().basics.name;
    if (typeof name == "undefined" || name == "") {
      name = "New character";
    };
    snack.render(helper.truncate(name, 50, true) + " now active.", false, false);
  };

  function clear() {
    var navCharacters = helper.e(".nav-characters");
    navCharacters.innerHTML = "";
  };

  function render(array) {
    var navCharacters = helper.e(".nav-characters");
    for (var i in array) {
      var characterAnchor = _render_navCharacters(array[i].basics.name, array[i].basics.class, array[i].basics.level, i);
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
    render_quickNav();
  };

  function render_quickNav() {
    window.onscroll = function() {
      var quickNav = helper.e("#quick-nav");
      var quickNavLinks = helper.eA(".quick-link");
      var sections = helper.eA("section");
      var menu = 70;
      var preMenu = 140;
      for (var i = 0; i < sections.length; i++) {
        // console.log(sections[i].id + " top = " + sections[i].getBoundingClientRect().top + " | bottom = " + sections[i].getBoundingClientRect().bottom);
        if (sections[i].getBoundingClientRect().top <= menu && sections[i].getBoundingClientRect().bottom > menu) {
          helper.addClass(quickNavLinks[i], "active");
          helper.addClass(sections[i], "pinned");
        } else {
          helper.removeClass(quickNavLinks[i], "active");
          helper.removeClass(sections[i], "pinned");
        };
      };
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        var lastQuickLink = helper.e(".quick-link.notes");
        for (var i = 0; i < quickNavLinks.length; i++) {
          helper.removeClass(quickNavLinks[i], "active");
        };
        helper.addClass(lastQuickLink, "active");
      };
    };
  };

  function navClose() {
    helper.removeClass(helper.e(".nav-list"), "open");
    helper.removeClass(helper.e(".nav-toggle"), "open");
  };

  function navOpen() {
    helper.addClass(helper.e(".nav-list"), "open");
    helper.addClass(helper.e(".nav-toggle"), "open");
  };

  function navToggle() {
    helper.toggleClass(helper.e(".nav-list"), "open");
    helper.toggleClass(helper.e(".nav-toggle"), "open");
  };

  function remove() {
    var name;
    if (sheet.getCharacter().basics.name) {
      name = sheet.getCharacter().basics.name;
    } else {
      name = "New character";
    };
    prompt.render("confirm", "Remove " + name + "?", "This character will be removed. This can not be undone.", "clear character");
  };

  function resize() {
    var navList = helper.e(".nav-list");
    var height = window.innerHeight - 130;
    navList.style.maxHeight = height + "px";
  };

  function bind() {
    var navList = helper.e(".nav-list");
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
      snack.render("New character added.", false, false);
    }, false);
    characterRemove.addEventListener("click", function() {
      remove();
    }, false);
    window.addEventListener('click', function(event) {
      if (event.target != navList && helper.getClosest(event.target, ".nav-list") != navList && event.target != navToggleElement && helper.getClosest(event.target, ".nav-toggle") != navToggleElement) {
        navClose();
      };
    }, false);
    window.addEventListener("keydown", function(event) {
      if (event.which == 8 && event.ctrlKey) {
        prompt.render("confirm", "Are you sure?", "All characters will be removed. This can not be undone.", "clear all");
        navClose();
      };
    }, false);
    window.addEventListener("keydown", function(event) {
      if (event.which == 69 && event.ctrlKey) {
        sheet.print();
        navClose();
      };
    }, false);
    window.addEventListener("keydown", function(event) {
      if (event.keyCode == 27) {
        navClose();
      };
    }, false);
    window.addEventListener("keydown", function(event) {
      if (event.keyCode == 77 && event.ctrlKey) {
        navToggle();
      };
    }, false);
    window.addEventListener("resize", function(event) {
      resize();
    }, false);
  };

  // exposed methods
  return {
    bind: bind,
    resize: resize,
    clear: clear,
    render: render,
    open: navOpen,
    close: navClose,
    toggle: navToggle
  }

})();
