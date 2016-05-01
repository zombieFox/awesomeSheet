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
      characterClass = "No class";
    };
    if (typeof characterLevel == "undefined" || characterLevel == "") {
      characterLevel = "0";
    };

    // <li class="m-nav-character">
      
    //   <input id="name1" name="test" type="radio" tabindex="10">
    //   <label for="name1" class="u-full-width">
    //     <span class="m-nav-characters-name">Character Name</span>
    //     <span class="m-nav-characters-class">Class</span>
    //     <span class="m-nav-characters-level">10</span>
    //   </label>

    // </li>

    // define elements
    var uniqueId = helper.randomId(10);
    console.log(uniqueId);

    var navCharacter = document.createElement("li");
    navCharacter.setAttribute("class", "m-nav-character");
    // navCharacter.setAttribute("class", "character-index-" + characterIndex);
    navCharacter.setAttribute("data-character-index", characterIndex);

    var input = document.createElement("input");
    input.setAttribute("id", characterName + "-" + uniqueId);
    input.setAttribute("name", "js-nav-all-characters");
    input.setAttribute("class", "js-nav-character-select");
    input.setAttribute("type", "radio");
    input.setAttribute("tabindex", 10);

    var label = document.createElement("label");
    label.setAttribute("for", characterName + "-" + uniqueId);
    label.setAttribute("class", "u-full-width");

    var nameSpan = document.createElement("span");
    nameSpan.setAttribute("class", "m-nav-characters-name");
    nameSpan.textContent = helper.truncate(characterName, 30, true);

    var classSpan = document.createElement("span");
    classSpan.setAttribute("class", "m-nav-characters-class");
    classSpan.textContent = helper.truncate(characterClass, 20, true) + " ";

    var levelSpan = document.createElement("span");
    levelSpan.setAttribute("class", "m-nav-characters-level");
    levelSpan.textContent = helper.truncate(characterLevel, 10);
    
    // build module
    label.appendChild(nameSpan);
    label.appendChild(classSpan);
    label.appendChild(levelSpan);
    navCharacter.appendChild(input);
    navCharacter.appendChild(label);

    // bind
    _bind_characterOption(navCharacter, characterIndex);
    return navCharacter;
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

  function updateNavCharacters(input) {
    var inputType = input.dataset.characterNav;
    var inputValue = input.value;
    if (inputType == "name") {
      if (typeof inputValue == "undefined" || inputValue == "") {
        inputValue = "New character";
      };
      helper.e(".character-index-" + sheet.getIndex()).querySelector(".name").textContent = helper.truncate(inputValue, 30, true);
    } else if (inputType == "class") {
      if (typeof inputValue == "undefined" || inputValue == "") {
        inputValue = "No class";
      };
      helper.e(".character-index-" + sheet.getIndex()).querySelector(".class").textContent = helper.truncate(inputValue, 20, true) + " ";
    } else if (inputType == "level") {
      if (typeof inputValue == "undefined" || inputValue == "") {
        inputValue = "0";
      };
      helper.e(".character-index-" + sheet.getIndex()).querySelector(".level").textContent = helper.truncate(inputValue, 10, false);
    };
  };

  function clear() {
    var navCharacters = helper.e(".m-nav-characters");
    navCharacters.innerHTML = "";
  };

  function render(array) {
    var navCharacters = helper.e(".m-nav-characters");
    for (var i in array) {
      var characterAnchor = _render_navCharacters(array[i].basics.name, array[i].basics.class, array[i].basics.level, i);
      navCharacters.appendChild(characterAnchor);
      if (i == sheet.getIndex()) {
        var input = navCharacters.querySelector(".js-nav-character-select");
        input.checked = true;
      };
    };
    render_quickNav();
  };

  function render_quickNav() {
    window.onscroll = function() {
      var quickNav = helper.e(".js-quick-nav");
      var quickNavLinks = helper.eA(".js-quick-nav-link");
      var sections = helper.eA("section");
      var menu;
      if (window.innerWidth < 550) {
        menu = 50;
      } else {
        menu = 70;
      };
      for (var i = 0; i < sections.length; i++) {
        // console.log(sections[i].id + " top = " + sections[i].getBoundingClientRect().top + " | bottom = " + sections[i].getBoundingClientRect().bottom);
        if (sections[i].getBoundingClientRect().top <= menu && sections[i].getBoundingClientRect().bottom > menu) {
          helper.addClass(quickNavLinks[i], "is-active");
          helper.addClass(sections[i], "is-pinned");
        } else {
          helper.removeClass(quickNavLinks[i], "is-active");
          helper.removeClass(sections[i], "is-pinned");
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

  function navClose() {
    helper.removeClass(helper.e(".js-nav"), "is-open");
    helper.removeClass(helper.e(".js-nav-toggle"), "is-open");
  };

  function navOpen() {
    helper.addClass(helper.e(".js-nav"), "is-open");
    helper.addClass(helper.e(".js-nav-toggle"), "is-open");
  };

  function navToggle() {
    helper.toggleClass(helper.e(".js-nav"), "is-open");
    helper.toggleClass(helper.e(".js-nav-toggle"), "is-open");
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
    var nav = helper.e(".js-nav");
    var height = window.innerHeight - 130;
    nav.style.maxHeight = height + "px";
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
      if (event.target != nav && helper.getClosest(event.target, ".js-nav") != nav && event.target != navToggleElement && helper.getClosest(event.target, ".js-nav-toggle") != navToggleElement) {
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
    update: updateNavCharacters,
    open: navOpen,
    close: navClose,
    toggle: navToggle
  }

})();
