var sheet = (function() {

  var allCharacters = blank.data;

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
    allCharacters.push(JSON.parse(JSON.stringify(blank.data)));
    var newIndex = getAllCharacters().length - 1;
    setIndex(newIndex);
    storeCharacters();
    clear();
    render();
    nav.clear();
    nav.render(getAllCharacters());
  };

  function removeCharacter() {
    var name = allCharacters[currentCharacterIndex].basics.name || "New character";
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
    nav.render(getAllCharacters());
    if (lastCharacterRemoved) {
      snack.render(helper.truncate(name, 40, true) + " removed. New character added.", false, false);
    } else {
      snack.render(helper.truncate(name, 50, true) + " removed.", false, false);
    };
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

  function printCharacterObject(index) {
    var exportData = JSON.stringify(allCharacters[currentCharacterIndex], null, " ");
    prompt.render("download", "Character JSON data:", exportData, "download");
    if (helper.e(".prompt pre")) {
      helper.selectText(".prompt pre");
    };
  };

  function bind() {
    nav.bind();
    inputBlock.bind();
    textareaBlock.bind();
    stats.bind();
    clone.bind();
    totalBlock.bind();
    spells.bind();
  };

  function clear() {
    inputBlock.clear();
    textareaBlock.clear();
    stats.render();
    totalBlock.clear();
    totalBlock.update();
    clone.clear();
    // var all_spellsKnown = helper.eA(".spells-known");
    // for (var i = 0; i < all_cloneTarget.length; i++) {
    //   all_cloneTarget[i].innerHTML = "";
    // };
    // for (var i = 0; i < all_spellsKnown.length; i++) {
    //   all_spellsKnown[i].innerHTML = "";
    // };
  };

  function render() {
    nav.resize();
    inputBlock.render();
    textareaBlock.render();
    stats.render();
    totalBlock.render();
    totalBlock.update();
    clone.render();
    spells.render();
    // consumable.render();
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
    print: printCharacterObject,
    render: render,
    bind: bind
  };

})();
