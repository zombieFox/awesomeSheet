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
    var label = characterLink.querySelector(".js-character-select-label");
    var input = characterLink.querySelector(".js-character-select-input");
    input.addEventListener("change", function() {
      _switchCharacter(label);
      sheet.storeCharacters();
      nav.scrollToTop();
    }, false);
  };

  function _bind_characterSelect() {
    var characterSelectAdd = helper.e(".js-character-select-add");
    var characterSelectRemove = helper.e(".js-character-select-remove");
    var characterSelectImport = helper.e(".js-character-select-import");
    var characterSelectExport = helper.e(".js-character-select-export");

    characterSelectAdd.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      sheet.addCharacter();
      snack.render("New character added.", false);
    }, false);

    characterSelectRemove.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      sheet.removeCharacter();
    }, false);

    characterSelectImport.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      sheet.import();
    }, false);

    characterSelectExport.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      sheet.export();
    }, false);
  }

  function bind() {
    _bind_characterSelect();
  };

  function update() {
    clear();
    render();
  };

  function clear() {
    var characterSelectIndex = helper.eA(".js-character-select-index");
    for (var i = 0; i < characterSelectIndex.length; i++) {
      while (characterSelectIndex[i].lastChild) {
        characterSelectIndex[i].removeChild(characterSelectIndex[i].lastChild);
      };
    };
  };

  function _render_allCharacter() {
    var characters = sheet.getAllCharacters();
    var characterSelectIndex = helper.e(".js-character-select-index");
    for (var i in characters) {
      characterSelectIndex.appendChild(_createCharacterItem(characters[i], i));
    };
    var all_navCharacterInput = helper.eA(".js-character-select-input");
    all_navCharacterInput[sheet.getIndex()].checked = true;
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
    navCharacter.setAttribute("class", "m-character-select js-character-select-" + characterIndex);

    var input = document.createElement("input");
    input.setAttribute("id", characterName.replace(/\s+/g, "-").toLowerCase() + "-" + uniqueId);
    input.setAttribute("name", "js-all-characters");
    input.setAttribute("class", "js-character-select-input");
    input.setAttribute("type", "radio");
    input.setAttribute("tabindex", 1);

    var label = document.createElement("label");
    label.setAttribute("for", characterName.replace(/\s+/g, "-").toLowerCase() + "-" + uniqueId);
    label.setAttribute("class", "u-full-width js-character-select-label");
    label.setAttribute("data-character-index", characterIndex);

    var detailsSpan = document.createElement("span");
    detailsSpan.setAttribute("class", "m-character-select-details");

    var nameSpan = document.createElement("span");
    nameSpan.setAttribute("class", "m-character-select-name");
    nameSpan.textContent = characterName;

    var classLevelSpan = document.createElement("span");
    classLevelSpan.setAttribute("class", "m-character-select-class-level");
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
    _render_allCharacter();
  };

  // exposed methods
  return {
    bind: bind,
    update: update,
    clear: clear,
    render: render
  };

})();
