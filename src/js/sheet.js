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
    store();
  })();

  var setCurrentCharacterIndex = (function() {
    if (helper.read("charactersIndex")) {
      currentCharacterIndex = parseInt(helper.read("charactersIndex"), 10);
    };
  })();

  function store() {
    helper.store("allCharacters", JSON.stringify(allCharacters));
  };

  function getAll() {
    return allCharacters;
  };

  function get() {
    return allCharacters[currentCharacterIndex];
  };

  function getIndex() {
    return currentCharacterIndex;
  };

  function setIndex(index) {
    currentCharacterIndex = index;
    helper.store("charactersIndex", currentCharacterIndex);
  };

  function add(newCharacter) {
    var dataToAdd = newCharacter || JSON.parse(JSON.stringify(blank.data));
    allCharacters.push(dataToAdd);
    setIndex(getAll().length - 1);
    clear();
    render();
    nav.scrollToTop();
    store();
    snack.render({
      message: "New character added."
    });
  };

  function replace(newCharacter) {
    var dataToAdd = newCharacter;
    allCharacters.splice(getIndex(), 1);
    allCharacters.splice(getIndex(), 0, dataToAdd);
    clear();
    render();
    nav.scrollToTop();
    store();
  };

  function remove() {
    var _destroy = function() {
      allCharacters.splice(getIndex(), 1);
      var message = helper.truncate(name, 50, true) + " removed.";
      if (allCharacters.length == 0) {
        add();
        message = message + " New character added.";
      };
      setIndex(0);
      clear();
      render();
      store();
      characterSelect.clear();
      characterSelect.render();
      nav.scrollToTop();
      snack.render({
        message: message
      });
    };
    var name = helper.getObject({
      object: get(),
      path: "basics.name"
    });
    if (name == "" || name == undefined) {
      name = "New character";
    };
    prompt.render({
      heading: "Remove " + name + "?",
      message: "The current character will be removed. This can not be undone. Have you backed up this character by Exporting?",
      actionText: "Remove",
      action: _destroy
    });
  };

  function all() {
    localStorage.clear();
    prompt.destroy();
    snack.destroy();
    // helper.store("backupAllCharacters", JSON.stringify(allCharacters));
    allCharacters = JSON.parse(JSON.stringify(hardCodedCharacters.all()));
    repair.render({
      debug: true
    });
    setIndex(0);
    store();
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
    repair.render({
      debug: true
    })
    setIndex(0);
    store();
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
    store();
    clear();
    render();
    characterSelect.clear();
    characterSelect.render();
    nav.scrollToTop();
    snack.render({
      message: "All characters cleared."
    });
  };

  function render() {
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

  function clear() {
    characterSelect.clear();
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

  function bind() {
    shortcuts();
    scroll();
    resize();
    characterSelect.bind();
    stats.bind();
    autoSuggest.bind();
    inputBlock.bind();
    inputRangeBlock.bind();
    selectBlock.bind();
    checkBlock.bind();
    radioBlock.bind();
    textareaBlock.bind();
    clone.bind();
    spells.bind();
    skills.bind();
    wealth.bind();
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
    }, false);
  };

  function resize() {
    window.addEventListener("resize", function(event) {
      header.resize();
    }, false);
  };

  function load() {
    spellsData.load();
  };

  function switcher(index) {
    var switcheroo = function(index) {
      setIndex(index);
      clear();
      render();
      characterSelect.clear();
      characterSelect.render();
    };
    if (index < 0 || index > getAll().length || typeof index != "number") {
      index = 0;
    };
    switcheroo(index);
  };

  function replaceJson() {
    var name = helper.getObject({
      object: get(),
      path: "basics.name"
    });
    modal.render({
      heading: "Replace " + name,
      content: _importJsonModal({
        message: "Replace " + name + " with a previously exported file (JSON). Useful for when updating this character from another device. This can not be undone. Are you sure you want to Replace this character?",
        action: _validateJsonFile
      }),
      action: _replaceJsonFile,
      actionText: "Replace"
    });
  };

  function importJson() {
    modal.render({
      heading: "Import character",
      content: _importJsonModal({
        message: "Import a previously exported character file (JSON) from this or another device.",
        action: _validateJsonFile
      }),
      action: _addJsonFile,
      actionText: "Import"
    });
  };

  function _importJsonModal(options) {
    var defaultOptions = {
      message: null,
      action: null
    };
    if (options) {
      var defaultOptions = helper.applyOptions(defaultOptions, options);
    };
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
    message.textContent = defaultOptions.message;
    label.appendChild(icon);
    label.appendChild(labelText);
    importSelect.appendChild(input);
    importSelect.appendChild(label);
    importSelectWrapper.appendChild(importSelect);
    col.appendChild(message);
    col.appendChild(importSelectWrapper);
    row.appendChild(col);
    container.appendChild(row);
    input.addEventListener("change", defaultOptions.action, false);
    return container;
  };

  function _addJsonFile() {
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
        if (data.awesomeSheet || data.awesomeSheet.awesome) {
          add(repair.render({
            object: data,
            debug: true
          }));
          var name = get().basics.name || get().basics.character.name || "New character";
          // var name = helper.getObject({
          //   object: get(),
          //   path: basics.name
          // }) || helper.getObject({
          //   object: get(),
          //   path: basics.character.name
          // }) || "New character";
          snack.render({
            message: helper.truncate(name, 40, true) + " imported and back in the game."
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

  function _replaceJsonFile() {
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
        if (data.awesomeSheet || data.awesomeSheet.awesome) {
          replace(repair.render({
            object: data,
            debug: true
          }));
          var name = get().basics.name || get().basics.character.name || "New character";
          // var name = helper.getObject({
          //   object: get(),
          //   path: basics.name
          // }) || helper.getObject({
          //   object: get(),
          //   path: basics.character.name
          // }) || "New character";
          snack.render({
            message: helper.truncate(name, 40, true) + " replaced and back in the game."
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

  function _validateJsonFile() {
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
        if (JSON.parse(event.target.result).awesomeSheet || JSON.parse(event.target.result).awesomeSheet.awesome) {
          // console.log("awesome true");
          importSelectLabelText.textContent = fileList[0].name;
          helper.addClass(importSelectLabel, "m-import-select-label-ok");
          helper.removeClass(importSelectLabel, "m-import-select-label-error");
          helper.removeClass(importSelectLabelIcon, "icon-file-upload");
          helper.removeClass(importSelectLabelIcon, "icon-error-outline");
          helper.addClass(importSelectLabelIcon, "icon-check");
        } else {
          // console.log("awesome false");
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

  function exportJson() {
    var fileName;
    var characterName = helper.getObject({
      object: get(),
      path: "basics.character.name"
    });
    var classLevel = classes.getClassLevel(sheet.get());
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
      actionUrl: "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(get()), null, " "),
      customAttribute: {
        key: "download",
        value: fileName + ".json"
      }
    });
  };

  function shortcuts() {
    window.addEventListener("keydown", function(event) {
      //  esc
      if (event.keyCode == 27) {
        autoSuggest.destroy();
        snack.destroy();
        modal.destroy();
        prompt.destroy();
        characterSelect.close();
        menu.close();
        shade.destroy();
        log.destroy();
        page.update();
      };
      // ctrl+alt+f
      if (event.ctrlKey && event.altKey && event.keyCode == 70) {
        fullscreen.toggle();
      };
      // ctrl+alt+i
      if (event.ctrlKey && event.altKey && event.keyCode == 73) {
        importJson();
        page.update();
      };
      // ctrl+alt+r
      if (event.ctrlKey && event.altKey && event.keyCode == 82) {
        replaceJson();
        page.update();
      };
      // ctrl+alt+e
      if (event.ctrlKey && event.altKey && event.keyCode == 69) {
        exportJson();
        page.update();
      };
      // ctrl+alt+m
      if (event.ctrlKey && event.altKey && event.keyCode == 77) {
        menu.toggle();
        page.update();
      };
      // ctrl+alt+d
      if (event.ctrlKey && event.altKey && event.keyCode == 68) {
        display.clear();
        display.render();
        display.toggle();
        themeColor.update();
      };
      // ctrl+alt+n
      if (event.ctrlKey && event.altKey && event.keyCode == 78) {
        night.toggle();
      };
      // ctrl+alt+c
      if (event.ctrlKey && event.altKey && event.keyCode == 67) {
        characterSelect.toggle();
        page.update();
      };
    }, false);
    // key debugging
    // window.addEventListener("keydown", function(event) {
    //   console.log(event.keyCode);
    //   console.log(event.metaKey);
    //   console.log(event);
    // });
  };

  // exposed methods
  return {
    getAll: getAll,
    get: get,
    store: store,
    add: add,
    remove: remove,
    destroy: destroy,
    clear: clear,
    all: all,
    restore: restore,
    replace: replaceJson,
    import: importJson,
    export: exportJson,
    render: render,
    load: load,
    switcher: switcher,
    getIndex: getIndex,
    setIndex: setIndex,
    bind: bind
  };

})();
