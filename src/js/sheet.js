var sheet = (function() {

  var allCharacters = JSON.parse(JSON.stringify([blank.data]));

  var currentCharacterIndex = 0;

  var saveHardCodedCharacters = (function() {
    if (helper.read("allCharacters")) {
      allCharacters = JSON.parse(helper.read("allCharacters"));
    } else if (typeof hardCodedCharacters !== "undefined") {
      allCharacters = JSON.parse(JSON.stringify(hardCodedCharacters.demo())); // for demo load sample characters
      // allCharacters = [blank.data]; // for production load blank character
    };
    storeCharacters();
  })();

  var setCurrentCharacterIndex = (function() {
    if (helper.read("charactersIndex")) {
      currentCharacterIndex = parseInt(helper.read("charactersIndex"), 10);
    };
  })();

  function storeCharacters() {
    helper.store("allCharacters", JSON.stringify(allCharacters));
  };

  function getAllCharacters() {
    return allCharacters;
  };

  function getCharacter() {
    return allCharacters[currentCharacterIndex];
  };

  function getIndex() {
    return currentCharacterIndex;
  };

  function setIndex(index) {
    currentCharacterIndex = index;
    helper.store("charactersIndex", currentCharacterIndex);
  };

  function addCharacter(newCharacter) {
    var dataToAdd = newCharacter || JSON.parse(JSON.stringify(blank.data));
    allCharacters.push(dataToAdd);
    var newIndex = getAllCharacters().length - 1;
    setIndex(newIndex);
    storeCharacters();
    clear();
    render();
    nav.clear();
    nav.render();
    nav.scrollToTop();
  };

  function removeCharacter() {
    var name;
    if (sheet.getCharacter().basics.name) {
      name = sheet.getCharacter().basics.name;
    } else {
      name = "New character";
    };
    prompt.render("Remove " + name + "?", "This can not be undone.", "Remove", destroyCharacter);
  };

  function destroyCharacter() {
    var name = allCharacters[getIndex()].basics.name || "New character";
    allCharacters.splice(getIndex(), 1);
    var lastCharacterRemoved = false;
    if (allCharacters.length == 0) {
      addCharacter();
      lastCharacterRemoved = true;
    };
    setIndex(0);
    clear();
    render();
    storeCharacters();
    nav.clear();
    nav.render();
    if (lastCharacterRemoved) {
      snack.render(helper.truncate(name, 40, true) + " removed. New character added.", false, false);
    } else {
      nav.scrollToTop();
      snack.render(helper.truncate(name, 50, true) + " removed.", false, false);
    };
  };

  function all() {
    localStorage.clear();
    prompt.destroy();
    snack.destroy();
    allCharacters = JSON.parse(JSON.stringify(hardCodedCharacters.all()));
    setIndex(0);
    storeCharacters();
    clear();
    render();
    nav.clear();
    nav.render();
    nav.scrollToTop();
    snack.render("All characters restored.", false, false);
  };

  function restore() {
    localStorage.clear();
    prompt.destroy();
    snack.destroy();
    allCharacters = JSON.parse(JSON.stringify(hardCodedCharacters.demo()));
    setIndex(0);
    storeCharacters();
    clear();
    render();
    nav.clear();
    nav.render();
    nav.scrollToTop();
    snack.render("Default characters restored.", false, false);
  };

  function destroy() {
    localStorage.clear();
    prompt.destroy();
    snack.destroy();
    allCharacters = JSON.parse(JSON.stringify([blank.data]));
    setIndex(0);
    storeCharacters();
    clear();
    render();
    nav.clear();
    nav.render();
    nav.scrollToTop();
    snack.render("All characters cleared.", false, false);
  };

  function _createImportModal() {
    var container = document.createElement("div");
    container.setAttribute("class", "container");
    var row = document.createElement("div");
    row.setAttribute("class", "row");
    var col = document.createElement("div");
    col.setAttribute("class", "col-xs-12");
    var importSelectWrapper = document.createElement("div");
    importSelectWrapper.setAttribute("class", "m-import-select-wrapper");
    var importSelect = document.createElement("div");
    importSelect.setAttribute("class", "m-import-select");
    var input = document.createElement("input");
    input.setAttribute("id", "import-select");
    input.setAttribute("type", "file");
    input.setAttribute("class", "m-import-select-input js-import-select-input");
    var label = document.createElement("label");
    label.setAttribute("tabindex", "1");
    label.setAttribute("for", "import-select");
    label.setAttribute("class", "m-import-select-label button button-icon button-large js-import-select-label");
    var labelText = document.createElement("span");
    labelText.textContent = "Select a file";
    labelText.setAttribute("class", "js-import-select-label-text");
    var icon = document.createElement("span");
    icon.setAttribute("class", "icon-file-upload js-import-select-label-icon");
    var message = document.createElement("p");
    message.setAttribute("class", "m-import-select-message");
    message.textContent = "Import a previously exported character JSON file from another device.";
    label.appendChild(icon);
    label.appendChild(labelText);
    importSelect.appendChild(input);
    importSelect.appendChild(label);
    importSelectWrapper.appendChild(importSelect);
    col.appendChild(message);
    col.appendChild(importSelectWrapper);
    row.appendChild(col);
    container.appendChild(row);
    input.addEventListener("change", _handleFiles, false);
    return container;
  };

  function _handleFiles() {
    var importSelectLabel = helper.e(".js-import-select-label");
    var importSelectLabelText = helper.e(".js-import-select-label-text");
    var importSelectLabelIcon = helper.e(".js-import-select-label-icon");
    var fileList = this.files;
    helper.removeClass(importSelectLabel, "m-import-select-label-ok");
    helper.removeClass(importSelectLabel, "m-import-select-label-error");
    helper.removeClass(importSelectLabelIcon, "icon-check");
    helper.removeClass(importSelectLabelIcon, "icon-error-outline");
    helper.addClass(importSelectLabelIcon, "icon-file-upload");
    // console.log(fileList);

    var readFile = new FileReader();
    readFile.onload = function(event) {
      if (helper.isJsonString(event.target.result)) {
        // console.log("JSON true");
        if (JSON.parse(event.target.result).awesomeSheet) {
          // console.log("awesome key true");
          importSelectLabelText.textContent = fileList[0].name;
          helper.addClass(importSelectLabel, "m-import-select-label-ok");
          helper.removeClass(importSelectLabel, "m-import-select-label-error");
          helper.removeClass(importSelectLabelIcon, "icon-file-upload");
          helper.removeClass(importSelectLabelIcon, "icon-error-outline");
          helper.addClass(importSelectLabelIcon, "icon-check");
        } else {
          // console.log("awesome key false");
          importSelectLabelText.textContent = "JSON file not recognised by awesomeSheet";
          helper.removeClass(importSelectLabel, "m-import-select-label-ok");
          helper.addClass(importSelectLabel, "m-import-select-label-error");
          helper.removeClass(importSelectLabelIcon, "icon-file-upload");
          helper.removeClass(importSelectLabelIcon, "icon-check");
          helper.addClass(importSelectLabelIcon, "icon-error-outline");
        };
      } else {
        // console.log("JSON false");
        importSelectLabelText.textContent = "Not a JSON file";
        helper.removeClass(importSelectLabel, "m-import-select-label-ok");
        helper.addClass(importSelectLabel, "m-import-select-label-error");
        helper.removeClass(importSelectLabelIcon, "icon-file-upload");
        helper.removeClass(importSelectLabelIcon, "icon-check");
        helper.addClass(importSelectLabelIcon, "icon-error-outline");
      };
    };
    if (fileList.length > 0) {
      readFile.readAsText(fileList.item(0));
      // console.log(readFile.result);
    } else {
      importSelectLabelText.textContent = "Select a file";
    };
  };

  var _readJsonFile = function() {
    var fileList = helper.e(".js-import-select-input").files;

    // if no JSON file is selected
    if (fileList.length <= 0) {
      snack.render("No file selected.", false, false);
      return false;
    };

    var readFile = new FileReader();
    readFile.onload = function(event) {
      // console.log(event);
      if (helper.isJsonString(event.target.result)) {
        var data = JSON.parse(event.target.result);
        if (data.awesomeSheet) {
          addCharacter(data);
          var name = allCharacters[getIndex()].basics.name || "New character";
          snack.render(helper.truncate(name, 40, true) + " imported and now in the game.", false, false);
        } else {
          snack.render("JSON file not recognised by awesomeSheet.", false, false);
        };
      } else {
        snack.render("Not a JSON file.", false, false);
      };
    };

    readFile.readAsText(fileList.item(0));
  };

  function importJson() {
    modal.render("Import character", _createImportModal(), "Import", _readJsonFile);
  };

  function exportJson() {
    var fileName;
    var characterName = getCharacter().basics.name;
    var classLevel = classes.getClassLevel(sheet.getCharacter());
    if (characterName != "") {
      fileName = characterName;
    } else {
      fileName = "New character";
    };
    if (classLevel != "") {
      fileName = fileName + ", " + classLevel;
    };
    prompt.render("Export " + characterName, "Download " + characterName + " as a JSON file. This file can later be imported on another deivce.", "Download", false, "data:" + "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(getCharacter()), null, " "), "download", fileName + ".json");
  };

  function render() {
    repair.render(getCharacter(getIndex()));
    stats.render();
    clone.render();
    classes.render();
    inputBlock.render();
    selectBlock.render();
    radioBlock.render();
    textareaBlock.render();
    skills.render();
    spells.render();
    encumbrance.render();
    size.render();
    xp.render();
    wealth.render();
    totalBlock.render();
    textBlock.render();
    characterImage.render();
    display.render();
  };

  function bind() {
    prompt.bind();
    modal.bind();
    snack.bind();
    stats.bind();
    inputBlock.bind();
    selectBlock.bind();
    radioBlock.bind();
    textareaBlock.bind();
    clone.bind();
    spells.bind();
    skills.bind();
    encumbrance.bind();
    size.bind();
    totalBlock.bind();
    display.bind();
    card.bind();
    tip.bind();
    events.bind();
    xp.bind();
    characterImage.bind();
    registerServiceWorker.bind();
  };

  function clear() {
    totalBlock.clear();
    clone.clear();
    textBlock.clear();
    inputBlock.clear();
    selectBlock.clear();
    radioBlock.clear();
    textareaBlock.clear();
    characterImage.clear();
    spells.clear();
    display.clear();
  };

  function switchCharacter(index) {
    if (index >= 0 && index <= getAllCharacters().length) {
      setIndex(index);
      clear();
      render();
      nav.clear();
      nav.render();
      var name = sheet.getCharacter().basics.name;
      snack.render(helper.truncate(name, 50, true) + " now in the game.", false);
      nav.close();
    } else {
      snack.render("No character with that index.", false);
    };
  };

  // exposed methods
  return {
    getAllCharacters: getAllCharacters,
    getCharacter: getCharacter,
    addCharacter: addCharacter,
    removeCharacter: removeCharacter,
    getIndex: getIndex,
    setIndex: setIndex,
    storeCharacters: storeCharacters,
    destroy: destroy,
    clear: clear,
    all: all,
    restore: restore,
    import: importJson,
    export: exportJson,
    render: render,
    bind: bind,
    switch: switchCharacter
  };

})();
