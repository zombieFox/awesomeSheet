var nav = (function() {

  function _closeNavScrollToTop() {
    if (window.innerWidth < 550) {
      navClose();
      window.scrollTo(0, 0);
    };
  };

  function _fullscreen() {
    var fullscreen = helper.e(".js-fullscreen");
    var root = window.document;
    var icon = fullscreen.querySelector(".icon");
    var rootElement = root.documentElement;
    var requestFullScreen = rootElement.requestFullscreen || rootElement.mozRequestFullScreen || rootElement.webkitRequestFullScreen || rootElement.msRequestFullscreen;
    var cancelFullScreen = root.exitFullscreen || root.mozCancelFullScreen || root.webkitExitFullscreen || root.msExitFullscreen;
    if (!root.fullscreenElement && !root.mozFullScreenElement && !root.webkitFullscreenElement && !root.msFullscreenElement) {
      requestFullScreen.call(rootElement);
      helper.toggleClass(fullscreen, "is-active");
      helper.toggleClass(icon, "icon-fullscreen-exit");
      helper.toggleClass(icon, "icon-fullscreen");
    } else {
      cancelFullScreen.call(root);
      helper.toggleClass(fullscreen, "is-active");
      helper.toggleClass(icon, "icon-fullscreen-exit");
      helper.toggleClass(icon, "icon-fullscreen");
    };
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

    // define elements
    var uniqueId = helper.randomId(10);

    var navCharacter = document.createElement("li");
    navCharacter.setAttribute("class", "m-nav-character");

    var input = document.createElement("input");
    input.setAttribute("id", characterName.replace(/\s+/g, "-").toLowerCase() + "-" + uniqueId);
    input.setAttribute("name", "js-nav-all-characters");
    input.setAttribute("class", "js-nav-character-input");
    input.setAttribute("type", "radio");
    input.setAttribute("tabindex", 10);

    var label = document.createElement("label");
    label.setAttribute("for", characterName.replace(/\s+/g, "-").toLowerCase() + "-" + uniqueId);
    label.setAttribute("class", "u-full-width js-nav-character-label character-index-" + characterIndex);
    label.setAttribute("data-character-index", characterIndex);

    var nameSpan = document.createElement("span");
    nameSpan.setAttribute("class", "m-nav-characters-name js-nav-characters-name");
    nameSpan.textContent = helper.truncate(characterName, 30, true);

    var classSpan = document.createElement("span");
    classSpan.setAttribute("class", "m-nav-characters-class js-nav-characters-class");
    classSpan.textContent = helper.truncate(characterClass, 20, true) + " ";

    var levelSpan = document.createElement("span");
    levelSpan.setAttribute("class", "m-nav-characters-level js-nav-characters-level");
    levelSpan.textContent = helper.truncate(characterLevel, 10);

    // build module
    label.appendChild(nameSpan);
    label.appendChild(classSpan);
    label.appendChild(levelSpan);
    navCharacter.appendChild(input);
    navCharacter.appendChild(label);

    // bind
    _bind_characterOption(navCharacter);
    return navCharacter;
  };

  function _bind_characterOption(characterLink) {
    var label = characterLink.querySelector(".js-nav-character-label");
    var input = characterLink.querySelector(".js-nav-character-input");
    input.addEventListener("change", function() {
      _switch_character(label);
      sheet.storeCharacters();
    }, false);
  };

  function _switch_character(characterLink) {
    var newIndex = characterLink.dataset.characterIndex;
    sheet.setIndex(newIndex);
    sheet.clear();
    sheet.render();
    var name = sheet.getCharacter().basics.name;
    if (typeof name == "undefined" || name == "") {
      name = "New character";
    };
    snack.render(helper.truncate(name, 50, true) + " now in the game.", false);
    _closeNavScrollToTop();
  };

  function updateNavCharacters(input) {
    var inputType = input.dataset.characterNav;
    var inputValue = input.value;
    if (inputType == "name") {
      if (typeof inputValue == "undefined" || inputValue == "") {
        inputValue = "New character";
      };
      helper.e(".character-index-" + sheet.getIndex()).querySelector(".js-nav-characters-name").textContent = helper.truncate(inputValue, 30, true);
    } else if (inputType == "class") {
      if (typeof inputValue == "undefined" || inputValue == "") {
        inputValue = "Class";
      };
      helper.e(".character-index-" + sheet.getIndex()).querySelector(".js-nav-characters-class").textContent = helper.truncate(inputValue, 20, true) + " ";
    } else if (inputType == "level") {
      if (typeof inputValue == "undefined" || inputValue == "") {
        inputValue = "Level";
      };
      helper.e(".character-index-" + sheet.getIndex()).querySelector(".js-nav-characters-level").textContent = helper.truncate(inputValue, 10, false);
    };
  };

  function clear() {
    var all_navCharacters = helper.eA(".js-nav-characters");
    for (var i = 0; i < all_navCharacters.length; i++) {
      while (all_navCharacters[i].lastChild) {
        all_navCharacters[i].removeChild(all_navCharacters[i].lastChild);
      };
    };
  };

  function render() {
    var characters = sheet.getAllCharacters();
    var navCharacters = helper.e(".js-nav-characters");
    for (var i in characters) {
      var characterAnchor = _render_navCharacters(characters[i].basics.name, characters[i].basics.class, characters[i].basics.level, i);
      navCharacters.appendChild(characterAnchor);
    };
    var all_navCharacterSelect = helper.eA(".js-nav-character-input");
    all_navCharacterSelect[sheet.getIndex()].checked = true;
    _render_quickNav();
  };

  function _render_quickNav() {
    window.onscroll = function() {
      var quickNav = helper.e(".js-quick-nav");
      var quickNavLinks = helper.eA(".js-quick-nav-link");
      var all_section = helper.eA(".js-section");
      var menu = parseInt(getComputedStyle(quickNav).height, 10);
      for (var i = 0; i < all_section.length; i++) {
        // console.log(all_section[i].id + " top = " + all_section[i].getBoundingClientRect().top + "\t\t|\t\tbottom = " + all_section[i].getBoundingClientRect().bottom);

        var sectionHeading = all_section[i].querySelector(".js-section-heading");
        var sectionHeadingHeight = parseInt(getComputedStyle(document.querySelector(".js-section-heading")).height, 10);

        if (all_section[i].getBoundingClientRect().bottom < (menu + sectionHeadingHeight)) {
          if (sectionHeading) {
            helper.addClass(sectionHeading, "is-faded");
            // sectionHeading.setAttribute("style", "top:" + (all_section[i].getBoundingClientRect().bottom - sectionHeadingHeight) + "px");
          };
        } else {
          if (sectionHeading) {
            helper.removeClass(sectionHeading, "is-faded");
            // sectionHeading.removeAttribute("style");
          };
        };

        if (all_section[i].getBoundingClientRect().top <= menu && all_section[i].getBoundingClientRect().bottom > menu) {
          for (var j = 0; j < quickNavLinks.length; j++) {
            helper.removeClass(quickNavLinks[j], "is-active");
          };
          helper.addClass(quickNavLinks[i], "is-active");
          if (sectionHeading) {
            helper.addClass(all_section[i], "is-pinned");
            helper.addClass(sectionHeading, "is-pinned");
          };
        } else {
          helper.removeClass(quickNavLinks[i], "is-active");
          if (sectionHeading) {
            helper.removeClass(all_section[i], "is-pinned");
            helper.removeClass(sectionHeading, "is-pinned");
          };
        };

      };
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        var lastQuickLink = helper.e(".js-quick-nav-last-link");
        for (var i = 0; i < quickNavLinks.length; i++) {
          helper.removeClass(quickNavLinks[i], "is-active");
        };
        helper.addClass(lastQuickLink, "is-active");
      };
    };
  };

  function checkBodyForOpenNav() {
    var body = helper.e("body");
    var nav = helper.e(".js-is-open");
    if (nav) {
      helper.addClass(body, "is-onscreen-nav");
    } else {
      helper.removeClass(body, "is-onscreen-nav");
    };
  };

  function navClose() {
    helper.removeClass(helper.e(".js-nav"), "is-open");
    helper.removeClass(helper.e(".js-nav"), "js-is-open");
    helper.removeClass(helper.e(".js-hamburger"), "is-open");
    checkBodyForOpenNav();
  };

  function navOpen() {
    helper.addClass(helper.e(".js-nav"), "is-open");
    helper.addClass(helper.e(".js-nav"), "js-is-open");
    helper.addClass(helper.e(".js-hamburger"), "is-open");
    checkBodyForOpenNav();
  };

  function navToggle() {
    helper.toggleClass(helper.e(".js-nav"), "is-open");
    helper.toggleClass(helper.e(".js-nav"), "js-is-open");
    helper.toggleClass(helper.e(".js-hamburger"), "is-open");
    checkBodyForOpenNav();
  };

  function remove() {
    var name;
    if (sheet.getCharacter().basics.name) {
      name = sheet.getCharacter().basics.name;
    } else {
      name = "New character";
    };
    prompt.render("Remove " + name + "?", "This can not be undone.", "Remove", sheet.removeCharacter);
  };

  function resize() {
    var body = helper.e("body");
    var nav = helper.e(".js-nav");
    if (window.innerWidth >= 550) {
      var height = window.innerHeight - 60;
      nav.style.maxHeight = height + "px";
    } else {
      nav.removeAttribute("style");
    };
  };

  function bind() {
    var nav = helper.e(".js-nav");
    var navToggleElement = helper.e(".js-nav-toggle");
    var fullscreen = helper.e(".js-fullscreen");
    var clearAll = helper.e(".js-clear-all");
    var characterAdd = helper.e(".js-character-add");
    var characterRemove = helper.e(".js-character-remove");
    var characterExport = helper.e(".js-character-export");
    navToggleElement.addEventListener("click", function() {
      navToggle();
    }, false);
    fullscreen.addEventListener("click", function() {
      _fullscreen();
    }, false);
    clearAll.addEventListener("click", function() {
      prompt.render("Are you sure?", "All characters will be removed. This can not be undone.", "Remove all", sheet.destroy);
      navClose();
    }, false);
    characterExport.addEventListener("click", function() {
      sheet.print();
      navClose();
    }, false);
    characterAdd.addEventListener("click", function() {
      sheet.addCharacter();
      snack.render("New character added.", false);
      _closeNavScrollToTop();
    }, false);
    characterRemove.addEventListener("click", function() {
      remove();
      navClose();
    }, false);
    window.addEventListener('click', function(event) {
      if (event.target != nav && event.target != navToggleElement && helper.getClosest(event.target, ".js-nav") != nav && helper.getClosest(event.target, ".js-nav-toggle") != navToggleElement) {
        navClose();
      };
    }, false);
    window.addEventListener("keydown", function(event) {
      if (event.which == 8 && event.ctrlKey) {
        prompt.render("Are you sure?", "All characters will be removed. This can not be undone.", "Delete all", sheet.destroy);
        navClose();
      };
      if (event.which == 69 && event.ctrlKey) {
        sheet.print();
        navClose();
      };
      if (event.keyCode == 27 && event.ctrlKey) {
        navClose();
      };
      if (event.keyCode == 77 && event.ctrlKey) {
        navToggle();
      };
      if (event.keyCode == 68 && event.ctrlKey) {
        display.toggle();
      };
      if (event.keyCode == 27) {
        navClose();
      };
    }, false);
    // window.addEventListener("resize", function(event) {
    //   resize();
    // }, false);
  };

  // exposed methods
  return {
    resize: resize,
    bind: bind,
    clear: clear,
    render: render,
    update: updateNavCharacters,
    open: navOpen,
    close: navClose,
    toggle: navToggle
  }

})();
