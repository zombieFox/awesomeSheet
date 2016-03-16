var sheet = (function() {

  var allCharacters = [{
    clone: {},
    input: {},
    textarea: {},
    spells: []
  }];

  var currentCharacterIndex = 0;

  var saveHardCodedCharacters = (function() {
    if (read("allCharacters")) {
      allCharacters = JSON.parse(read("allCharacters"));
    } else if (typeof hardCodedCharacters !== "undefined") {
      allCharacters = hardCodedCharacters.load;
    };
    storeCharacters();
  })();

  var setCurrentCharacterIndex = (function() {
    if (read("charactersIndex")) {
      currentCharacterIndex = read("charactersIndex");
    };
  })();

  function storeCharacters() {
    store("allCharacters", JSON.stringify(allCharacters));
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
    store("charactersIndex", currentCharacterIndex);
  };

  function addCharacter() {
    allCharacters.push({
      clone: {},
      input: {},
      textarea: {},
      spells: []
    });
    var newIndex = getAllCharacters().length - 1;
    setIndex(newIndex);
    storeCharacters();
    clear();
    render();
    nav.clear();
    nav.render(getAllCharacters());
    snack.render("New character added.", false, false);
  };

  function removeCharacter() {
    var name = allCharacters[currentCharacterIndex].input.name || "New character";
    allCharacters.splice(getIndex(), 1)
    var newIndex = getAllCharacters().length - 1;
    if (newIndex < 0) {
      allCharacters = [{
        clone: {},
        input: {},
        textarea: {},
        spells: []
      }];
      setIndex(0);
    } else {
      setIndex(newIndex);
    };
    clear();
    render();
    storeCharacters();
    nav.clear();
    nav.render(getAllCharacters());
    snack.render(name + " removed.", false, false);
  };

  function store(key, data) {
    if (localStorage.getItem) {
      localStorage.setItem(key, data);
    };
  };

  function remove(key) {
    if (localStorage.getItem) {
      localStorage.removeItem(key);
    };
  };

  function read(key) {
    if (localStorage.getItem(key) == "") {
      localStorage.removeItem(key);
    } else if (localStorage.getItem(key)) {
      return localStorage.getItem(key);
    };
  };

  function destroy() {
    localStorage.clear();
    prompt.destroy();
    snack.destroy();
    document.location.reload(true);
    // destroy and reset without reload
    // localStorage.clear();
    // prompt.destroy();
    // snack.destroy();
    // allCharacters = [{
    //     clone: {},
    //     input: {},
    //     textarea: {},
    //     spells: []
    //   }];
    // if (typeof hardCodedCharacters !== "undefined") {
    //   allCharacters = hardCodedCharacters.load;
    // };
    // currentCharacterIndex = 0;
    // storeCharacters();
    // setIndex(currentCharacterIndex);
    // clear();
    // render();
    // nav.clear();
    // nav.render(sheet.getAllCharacters());
    // snack.render("All characters removed.", false, false);
  };

  function clear() {
    var allInputBlock = helper.eA(".input-block");
    var allTextareaBlock = helper.eA(".textarea-block");
    var allCloneTarget = helper.eA(".clone-target");
    var allSpellsKnown = helper.eA(".spells-known");
    for (var i = 0; i < allInputBlock.length; i++) {
      var input = allInputBlock[i].querySelector(".input-field");
      helper.e("#" + input.id).value = "";
    };
    for (var i = 0; i < allTextareaBlock.length; i++) {
      helper.e("#" + allTextareaBlock[i].id).innerHTML = "";
    };
    for (var i = 0; i < allCloneTarget.length; i++) {
      allCloneTarget[i].innerHTML = "";
    };
    for (var i = 0; i < allSpellsKnown.length; i++) {
      allSpellsKnown[i].innerHTML = "";
    };
    stats.render();
    totalBlock.render();
  };

  function printCharacterObject(index) {
    var exportData = JSON.stringify(allCharacters[currentCharacterIndex], null, " ");
    prompt.render("code", "Character object data:", exportData, "download");
    helper.selectText(".prompt pre");
  };

  function downloadCharacterObject(element) {
    var object = allCharacters[currentCharacterIndex];
    var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(object), null, " ");
    element.href = "data:" + data;
  };

  function render() {
    clone.render();
    consumable.render();
    inputBlock.render();
    textareaBlock.render();
    stats.render();
    spells.render();
    totalBlock.render();
    var name = allCharacters[currentCharacterIndex].input.name;
    // snack.render(name + " loaded.", false, false);
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
    store: store,
    remove: remove,
    read: read,
    clear: clear,
    download: downloadCharacterObject,
    print: printCharacterObject,
    render: render
  };

})();
