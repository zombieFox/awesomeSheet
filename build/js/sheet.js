var sheet = (function() {

  var index = (function() {

    var _characterIndex = 0;

    var _render = (function() {
      if (helper.read("charactersIndex")) {
        _characterIndex = parseInt(helper.read("charactersIndex"), 10);
      };
    })();

    var get = function(level) {
      return _characterIndex;
    };

    var set = function(index) {
      if (typeof index == "number") {
        _characterIndex = index;
        helper.store("charactersIndex", _characterIndex);
      } else {
        return false;
      };
    };

    // exposed methods
    return {
      set: set,
      get: get
    };
  })();

  var _all_characters = JSON.parse(JSON.stringify([blank.data]));

  function init() {
    console.log("===================================================");
    console.log("awesomeSheet v", sheet.ver());
    console.log("===================================================");
    if (helper.read("allCharacters")) {
      // if characters are found in local storage repair them
      _all_characters = JSON.parse(helper.read("allCharacters"));
      _all_characters.forEach(function(item, index, array) {
        console.log("### character", index, "###");
        array[index] = repair.render({
          object: item,
          debug: true
        });
        console.log("---------------------------------------------------");
      });
    } else {
      // else load demo characters
      _all_characters = JSON.parse(JSON.stringify(hardCodedCharacters.demo()));
      var newBlank = JSON.parse(JSON.stringify(blank.data));
      newBlank.awesomeSheet.version = update.version();
      _all_characters.unshift(newBlank);
      console.log("### loading default characters ###");
      console.log("---------------------------------------------------");
    };
    store();
  };

  function store() {
    helper.store("allCharacters", JSON.stringify(_all_characters));
  };

  function get(options) {
    var defaultOptions = {
      all: null,
      index: null
    };
    if (options) {
      defaultOptions = helper.applyOptions(defaultOptions, options);
    };
    if (defaultOptions.index != null) {
      return _all_characters[defaultOptions.index];
    } else {
      if (defaultOptions.all != null && defaultOptions.all) {
        return _all_characters;
      } else {
        return _all_characters[index.get()];
      };
    };
  };

  function add(newCharacter) {
    var dataToAdd = newCharacter || JSON.parse(JSON.stringify(blank.data));
    dataToAdd.awesomeSheet.version = update.version();
    _all_characters.push(dataToAdd);
    index.set(sheet.get({
      all: true
    }).length - 1);
    clear();
    render();
    nav.scrollToTop();
    store();
    minimise.reset();
    tabs.reset();
    snack.render({
      message: "New character added."
    });
  };

  function replace(newCharacter) {
    var dataToAdd = newCharacter;
    _all_characters.splice(index.get(), 1);
    _all_characters.splice(index.get(), 0, dataToAdd);
    clear();
    render();
    nav.scrollToTop();
    store();
  };

  function remove() {
    var _destroy = function() {
      _all_characters.splice(index.get(), 1);
      var message = helper.truncate(name, 50, true) + " removed.";
      if (_all_characters.length == 0) {
        add();
        message = message + " New character added.";
      };
      index.set(0);
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
      path: "basics.character.name"
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
    console.log("===================================================");
    console.log("awesomeSheet restore all");
    console.log("===================================================");
    localStorage.clear();
    prompt.destroy();
    snack.destroy();
    _all_characters = JSON.parse(JSON.stringify(hardCodedCharacters.all()));
    _all_characters.forEach(function(item, index, array) {
      array[index] = repair.render({
        object: item,
        debug: true
      });
      console.log("---------------------------------------------------");
    });
    index.set(0);
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
    prompt.destroy();
    snack.destroy();
    _all_characters.push(hardCodedCharacters.single().izlara);
    _all_characters.push(hardCodedCharacters.single().ravich);
    index.set(_all_characters.length - 2);
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
    var dataToAdd = JSON.parse(JSON.stringify(blank.data));
    dataToAdd.awesomeSheet.version = update.version();
    _all_characters = [dataToAdd];
    index.set(0);
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
    stats.render();
    classes.render();
    characterSelect.render();
    clone.render();
    inputBlock.render();
    inputRangeBlock.render();
    selectBlock.render();
    checkBlock.render();
    radioBlock.render();
    textareaBlock.render();
    skills.render();
    spells.render();
    armorShield.render();
    encumbrance.render();
    size.render();
    exp.render();
    wealth.render();
    totalBlock.render();
    textBlock.render();
    characterImage.render();
    pill.render();
    display.render();
    demo.render();
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
    pill.clear();
    display.clear();
  };

  function bind() {
    shortcuts();
    scroll();
    resize();
    print();
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
    armorShield.bind();
    encumbrance.bind();
    size.bind();
    totalBlock.bind();
    display.bind();
    card.bind();
    tip.bind();
    events.bind();
    exp.bind();
    characterImage.bind();
    pill.bind();
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
    data.load();
  };

  function print() {
    var previousNightState;
    var previousDisplayState;
    var previousMinimiseState;
    window.onbeforeprint = function() {
      previousNightState = JSON.parse(JSON.stringify(night.state.get()));
      previousDisplayState = JSON.parse(JSON.stringify(display.state.get()));
      previousMinimiseState = JSON.parse(JSON.stringify(minimise.state.get()));
      menu.close();
      characterSelect.close();
      modal.destroy();
      prompt.destroy();
      shade.destroy();
      night.toggle({
        force: false
      });
      minimise.toggle({
        force: false
      });
      display.toggle({
        force: true
      });
    };
    window.onafterprint = function() {
      night.toggle({
        force: previousNightState
      });
      for (var key in previousMinimiseState) {
        minimise.toggle({
          force: previousMinimiseState[key],
          section: key
        });
      };
      for (var key in previousDisplayState) {
        display.toggle({
          force: previousDisplayState[key],
          section: key
        });
      };
    };
  };

  function switcher(newIndex) {
    var switcheroo = function(newIndex) {
      index.set(newIndex);
      minimise.reset();
      tabs.reset();
      clear();
      render();
      characterSelect.clear();
      characterSelect.render();
    };
    if (newIndex < 0 || newIndex > sheet.get({
        all: true
      }).length || typeof newIndex != "number") {
      newIndex = 0;
    };
    switcheroo(newIndex);
  };

  function replaceJson() {
    var name = get().basics.character.name || "New character";
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
      defaultOptions = helper.applyOptions(defaultOptions, options);
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
          console.log("---------------------------------------------------");
          var name = get().basics.character.name || "New character";
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
          var name = get().basics.character.name || "New character";
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
    var classLevel = helper.getObject({
      object: sheet.get(),
      path: "basics.classes.string"
    });
    if (characterName != "") {
      fileName = characterName;
    } else {
      fileName = "New character";
    };
    if (classLevel != "") {
      fileName = fileName + " - " + classLevel;
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
        tip.destroy();
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
        display.toggle({
          all: true
        });
        themeColor.render();
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

  function ver() {
    return update.version();
  };

  // exposed methods
  return {
    init: init,
    ver: ver,
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
    index: index,
    bind: bind
  };

})();
