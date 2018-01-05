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
    characterSelect.clear();
    characterSelect.render();
    nav.scrollToTop();
    snack.render({
      message: "New character added."
    });
  };

  function removeCharacter() {
    var name;
    if (sheet.getCharacter().basics.name) {
      name = sheet.getCharacter().basics.name;
    } else {
      name = "New character";
    };
    prompt.render({
      heading: "Remove " + name + "?",
      message: "The current character will be removed. This can not be undone. Have you backed up your characters by Exporting?",
      actionText: "Remove",
      action: destroyCharacter
    });
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
    characterSelect.clear();
    characterSelect.render();
    if (lastCharacterRemoved) {
      snack.render({
        message: helper.truncate(name, 40, true) + " removed. New character added."
      });
    } else {
      nav.scrollToTop();
      snack.render({
        message: helper.truncate(name, 50, true) + " removed."
      });
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
    characterSelect.clear();
    characterSelect.render();
    nav.scrollToTop();
    snack.render({
      message: "All characters restored."
    });
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
    characterSelect.clear();
    characterSelect.render();
    nav.scrollToTop();
    snack.render({
      message: "Demo characters restored."
    });
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
    characterSelect.clear();
    characterSelect.render();
    nav.scrollToTop();
    snack.render({
      message: "All characters cleared."
    });
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

  function _readJsonFile() {
    var fileList = helper.e(".js-import-select-input").files;

    // if no JSON file is selected
    if (fileList.length <= 0) {
      snack.render({
        message: "No file selected."
      });
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
          snack.render({
            message: helper.truncate(name, 40, true) + " imported and now in the game."
          });
        } else {
          snack.render({
            message: "JSON file not recognised by awesomeSheet."
          });
        };
      } else {
        snack.render({
          message: "Not a JSON file."
        });
      };
    };

    readFile.readAsText(fileList.item(0));
  };

  function importJson() {
    var modalContent = function() {
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
      labelText.setAttribute("class", "m-import-select-label-text js-import-select-label-text");
      var icon = document.createElement("span");
      icon.setAttribute("class", "icon-file-upload m-import-select-label-icon js-import-select-label-icon");
      var message = document.createElement("p");
      message.setAttribute("class", "m-import-select-message");
      message.textContent = "Import a previously exported character file (JSON) from this or another device.";
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
    modal.render({
      heading: "Import character",
      content: modalContent(),
      action: _readJsonFile,
      actionText: "Import"
    });
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
    prompt.render({
      heading: "Export " + characterName,
      message: "Download and backup " + characterName + " as a JSON file. This file can later be imported on this or another deivce.",
      actionText: "Download",
      actionUrl: "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(getCharacter()), null, " "),
      customAttribute: {
        key: "download",
        value: fileName + ".json"
      }
    });
  };

  function render() {
    repair.render();
    characterSelect.render();
    stats.render();
    clone.render();
    classes.render();
    inputBlock.render();
    inputRangeBlock.render();
    selectBlock.render();
    checkBlock.render();
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
    scroll();
    resize();
    characterSelect.bind();
    menu.bind();
    prompt.bind();
    modal.bind();
    shade.bind();
    snack.bind();
    stats.bind();
    inputBlock.bind();
    inputRangeBlock.bind();
    selectBlock.bind();
    checkBlock.bind();
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

  function scroll() {
    window.addEventListener("scroll", function(event) {
      header.scroll();
      nav.scroll();
      // disabled in favour of position: sticky
      // edit.scroll();
    }, false);
  };

  function resize() {
    window.addEventListener("resize", function(event) {
      header.resize();
    }, false);
  };

  function clear() {
    totalBlock.clear();
    clone.clear();
    textBlock.clear();
    inputBlock.clear();
    selectBlock.clear();
    checkBlock.clear();
    radioBlock.clear();
    textareaBlock.clear();
    characterImage.clear();
    spells.clear();
    display.clear();
  };

  function switchCharacter(index) {
    var switcheroo = function(index) {
      setIndex(index);
      clear();
      render();
      characterSelect.clear();
      characterSelect.render();
    };
    if (index < 0 || index > getAllCharacters().length || typeof index != "number") {
      index = 0;
    };
    switcheroo(index);
  };

  // exposed methods
  return {
    getAllCharacters: getAllCharacters,
    getCharacter: getCharacter,
    storeCharacters: storeCharacters,
    addCharacter: addCharacter,
    removeCharacter: removeCharacter,
    switchCharacter: switchCharacter,
    getIndex: getIndex,
    setIndex: setIndex,
    destroy: destroy,
    clear: clear,
    all: all,
    restore: restore,
    import: importJson,
    export: exportJson,
    render: render,
    bind: bind
  };

})();
