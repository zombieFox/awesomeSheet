var characterSelect = (function() {

  function _switchCharacter(characterInput) {
    var newIndex = parseInt(characterInput.dataset.characterSelectIndex, 10);
    sheet.switcher(newIndex);
    menu.close();
    snack.render({
      message: helper.truncate(_get_name(sheet.get()), 50, true) + " now in the game."
    });
  };

  function _bind_characterOption(characterLink) {
    var input = characterLink.querySelector(".js-character-select-list-item-input");
    input.addEventListener("change", function() {
      _switchCharacter(input);
      close();
      shade.destroy();
      page.update();
      nav.scrollToTop();
    }, false);
  };

  function _bind_characterSelectToggle() {
    var characterSelectToggle = helper.e(".js-character-select-toggle");
    characterSelectToggle.addEventListener("click", function(event) {
      menu.close();
      toggle();
      page.update();
    }, false);
    characterSelectToggle.addEventListener("keydown", function(event) {
      // enter
      if (event.keyCode == 13) {
        toggle();
        page.update();
      };
    }, false);
  };

  function _bind_characterSelectControls() {
    var characterSelectAdd = helper.e(".js-character-select-add");
    var characterSelectRemove = helper.e(".js-character-select-remove");
    var characterSelectUpdate = helper.e(".js-character-select-update");
    var characterSelectImport = helper.e(".js-character-select-import");
    var characterSelectExport = helper.e(".js-character-select-export");
    var headerControlExport = helper.e(".js-header-control-export");

    characterSelectAdd.addEventListener("click", function(event) {
      menu.close();
      shade.destroy();
      close();
      sheet.add();
      page.update();
    }, false);

    characterSelectRemove.addEventListener("click", function(event) {
      close();
      sheet.remove();
      page.update();
    }, false);

    characterSelectImport.addEventListener("click", function(event) {
      close();
      sheet.import();
      page.update();
    }, false);

    characterSelectUpdate.addEventListener("click", function(event) {
      close();
      sheet.replace();
      page.update();
    }, false);

    characterSelectExport.addEventListener("click", function(event) {
      close();
      sheet.export();
      page.update();
    }, false);

    headerControlExport.addEventListener("click", function(event) {
      close();
      sheet.export();
      page.update();
    }, false);
  };

  function bind() {
    _bind_characterSelectToggle();
    _bind_characterSelectControls();
  };

  function toggle() {
    modal.destroy();
    prompt.destroy();
    menu.close();
    var body = helper.e("body");
    var characterSelect = helper.e(".js-character-select");
    var state = (body.dataset.characterSelectOpen == "true");
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

  function open() {
    var body = helper.e("body");
    var characterSelect = helper.e(".js-character-select");
    var characterSelectToggle = helper.e(".js-character-select-toggle");
    body.dataset.characterSelectOpen = true;
    helper.addClass(characterSelect, "is-open");
    helper.addClass(characterSelectToggle, "is-active");
  };

  function close() {
    var body = helper.e("body");
    var characterSelect = helper.e(".js-character-select");
    var characterSelectToggle = helper.e(".js-character-select-toggle");
    body.dataset.characterSelectOpen = false;
    helper.removeClass(characterSelect, "is-open");
    helper.removeClass(characterSelectToggle, "is-active");
  };

  function update() {
    clear();
    render();
  };

  function clear() {
    var characterSelectList = helper.e(".js-character-select-list");
    while (characterSelectList.lastChild) {
      characterSelectList.removeChild(characterSelectList.lastChild);
    };
  };

  function _render_allCharacterItems() {
    var all_character = sheet.get({
      all: true
    });
    var characterSelectList = helper.e(".js-character-select-list");
    all_character.forEach(function(arrayItem, index) {
      characterSelectList.appendChild(_createCharacterItem(arrayItem, index));
    });
    var all_characterIndexInput = helper.eA(".js-character-select-list-item-input");
    all_characterIndexInput[sheet.index.get()].checked = true;
  };

  function _render_currentCharacter() {
    var characterSelectName = helper.e(".js-character-select-name");
    var characterSelectClassLevel = helper.e(".js-character-select-class-level");
    characterSelectName.textContent = _get_name(sheet.get());
    characterSelectClassLevel.textContent = helper.getObject({
      object: sheet.get(),
      path: "basics.classes.string"
    });
  };

  function _get_name(characterObject) {
    var characterName = characterObject.basics.character.name;
    if (typeof characterName == "undefined" || characterName == "" || characterName == " ") {
      characterName = "New character";
    };
    return characterName;
  };

  function _createCharacterItem(characterObject, characterIndex) {
    var characterName = _get_name(characterObject);
    var uniqueId = helper.randomString(10);
    var navCharacter = document.createElement("li");
    navCharacter.setAttribute("class", "m-character-select-list-item js-character-select-list-item-" + characterIndex);

    var input = document.createElement("input");
    input.setAttribute("id", characterName.replace(/\s+/g, "-").toLowerCase() + "-" + uniqueId);
    input.setAttribute("name", "js-all-characters");
    input.setAttribute("class", "js-character-select-list-item-input");
    input.setAttribute("type", "radio");
    input.setAttribute("tabindex", 1);
    input.setAttribute("data-character-select-index", characterIndex);

    var label = document.createElement("label");
    label.setAttribute("for", characterName.replace(/\s+/g, "-").toLowerCase() + "-" + uniqueId);
    label.setAttribute("class", "u-full-width js-character-select-list-item-label");

    var detailsSpan = document.createElement("span");
    detailsSpan.setAttribute("class", "m-character-select-list-item-details");

    var nameSpan = document.createElement("span");
    nameSpan.setAttribute("class", "m-character-select-list-item-name");
    nameSpan.textContent = characterName;

    var classLevelSpan = document.createElement("span");
    classLevelSpan.setAttribute("class", "m-character-select-list-item-class-level");
    classLevelSpan.textContent = helper.getObject({
      object: sheet.get({
        index: characterIndex
      }),
      path: "basics.classes.string"
    });

    if (characterObject.awesomeSheet.demo) {
      var demoSpan = document.createElement("span");
      demoSpan.setAttribute("class", "m-character-select-list-item-demo");
      demoSpan.textContent = "Demo";
      detailsSpan.appendChild(demoSpan);
    };

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