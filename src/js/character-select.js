var characterSelect = (function() {

  function _switchCharacter(characterLink) {
    var newIndex = parseInt(characterLink.dataset.characterIndex, 10);
    sheet.switch(newIndex);
    var name = sheet.getCharacter().basics.name;
    if (typeof name == "undefined" || name == "") {
      name = "New character";
    };
    snack.render(helper.truncate(name, 50, true) + " now in the game.", false);
  };

  function _bind_characterOption(characterLink) {
    var label = characterLink.querySelector(".js-character-index-list-item-label");
    var input = characterLink.querySelector(".js-character-index-list-item-input");
    input.addEventListener("change", function() {
      _switchCharacter(label);
      sheet.storeCharacters();
      nav.scrollToTop();
      toggle();
    }, false);
  };

  function _bind_characterSelectToggle() {
    var characterSelectCurrent = helper.e(".js-character-select-toggle");
    characterSelectCurrent.addEventListener("click", function(event) {
      menu.close();
      toggle();
    }, false);
    characterSelectCurrent.addEventListener("keydown", function(event) {
      // enter
      if (event.keyCode == 13) {
        toggle();
      };
    }, false);
  };

  function _bind_characterSelectControls() {
    var headerControlButtonAdd = helper.e(".js-header-control-button-add");
    var headerControlButtonRemove = helper.e(".js-header-control-button-remove");
    var headerControlButtonImport = helper.e(".js-header-control-button-import");
    var headerControlButtonExport = helper.e(".js-header-control-button-export");

    headerControlButtonAdd.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      menu.close();
      close();
      sheet.addCharacter();
    }, false);

    headerControlButtonRemove.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      menu.close();
      close();
      sheet.removeCharacter();
    }, false);

    headerControlButtonImport.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      menu.close();
      close();
      sheet.import();
    }, false);

    headerControlButtonExport.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      menu.close();
      close();
      sheet.export();
    }, false);
  }

  function _bind_shortcutKeys() {
    window.addEventListener("keydown", function(event) {
      // console.log(event.keyCode);
      // esc
      if (event.keyCode == 27) {
        close();
      };
      // ctrl+alt+c
      if (event.ctrlKey && event.altKey && event.keyCode == 67) {
        toggle();
      };
    }, false);
  };

  function bind() {
    _bind_characterSelectToggle();
    _bind_characterSelectControls();
    _bind_shortcutKeys();
  };

  function toggle() {
    modal.destroy();
    prompt.destroy();
    menu.close();
    var body = helper.e("body");
    var characterSelect = helper.e(".js-character-select");
    var state = (characterSelect.dataset.characterSelectOpen == "true");
    if (state) {
      close();
      shade.destroy();
    } else {
      open();
      shade.render({
        action: close
      });
    };
    page.update();
  };

  function open() {
    var body = helper.e("body");
    var characterIndex = helper.e(".js-character-index");
    var characterSelect = helper.e(".js-character-select");
    body.dataset.characterSelectOpen = true;
    characterSelect.dataset.characterSelectOpen = true;
    helper.addClass(characterSelect, "is-open");
    helper.addClass(characterIndex, "is-open");
  };

  function close() {
    var body = helper.e("body");
    var characterIndex = helper.e(".js-character-index");
    var characterSelect = helper.e(".js-character-select");
    body.dataset.characterSelectOpen = false;
    characterSelect.dataset.characterSelectOpen = false;
    helper.removeClass(characterSelect, "is-open");
    helper.removeClass(characterIndex, "is-open");
  };

  function update() {
    clear();
    render();
  };

  function clear() {
    var charactersIndexList = helper.eA(".js-character-index-list");
    for (var i = 0; i < charactersIndexList.length; i++) {
      while (charactersIndexList[i].lastChild) {
        charactersIndexList[i].removeChild(charactersIndexList[i].lastChild);
      };
    };
  };

  function _render_allCharacterItems() {
    var character = sheet.getAllCharacters();
    var characterIndexList = helper.e(".js-character-index-list");
    for (var key in character) {
      characterIndexList.appendChild(_createCharacterItem(character[key], key));
    };
    var all_characterIndexInput = helper.eA(".js-character-index-list-item-input");
    all_characterIndexInput[sheet.getIndex()].checked = true;
  };

  function _render_currentCharacter() {
    var characterSelectTitle = helper.e(".js-character-select-title");
    characterSelectTitle.textContent = _get_name(sheet.getCharacter());
  };

  function _get_name(characterObject) {
    var characterName = characterObject.basics.name;
    if (typeof characterName == "undefined" || characterName == "") {
      characterName = "New Character";
    };
    return characterName;
  };

  function _createCharacterItem(characterObject, characterIndex) {
    var classLevel = classes.getClassLevel(characterObject);
    var characterName = _get_name(characterObject);

    var uniqueId = helper.randomId(10);

    var navCharacter = document.createElement("li");
    navCharacter.setAttribute("class", "m-character-index-list-item js-character-index-list-item-" + characterIndex);

    var input = document.createElement("input");
    input.setAttribute("id", characterName.replace(/\s+/g, "-").toLowerCase() + "-" + uniqueId);
    input.setAttribute("name", "js-all-characters");
    input.setAttribute("class", "js-character-index-list-item-input");
    input.setAttribute("type", "radio");
    input.setAttribute("tabindex", 1);

    var label = document.createElement("label");
    label.setAttribute("for", characterName.replace(/\s+/g, "-").toLowerCase() + "-" + uniqueId);
    label.setAttribute("class", "u-full-width js-character-index-list-item-label");
    label.setAttribute("data-character-index", characterIndex);

    var detailsSpan = document.createElement("span");
    detailsSpan.setAttribute("class", "m-character-index-details");

    var nameSpan = document.createElement("span");
    nameSpan.setAttribute("class", "m-character-index-name");
    nameSpan.textContent = characterName;

    var classLevelSpan = document.createElement("span");
    classLevelSpan.setAttribute("class", "m-character-index-class-level");
    classLevelSpan.textContent = classLevel;

    // build module
    detailsSpan.appendChild(nameSpan);
    detailsSpan.appendChild(classLevelSpan);
    label.appendChild(detailsSpan);
    navCharacter.appendChild(input);
    navCharacter.appendChild(label);

    // bind
    _bind_characterOption(navCharacter);
    return navCharacter;
  };

  function render() {
    _render_allCharacterItems();
    _render_currentCharacter();
  };

  // exposed methods
  return {
    toggle: toggle,
    open: open,
    close: close,
    bind: bind,
    update: update,
    clear: clear,
    render: render
  };

})();
