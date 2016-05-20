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
    nav.render();
  };

  function removeCharacter() {
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
    helper.delayFunction(function() {
      document.location.reload(true);
    }, 200);
  };

  function printCharacterObject(index) {
    var name;
    if (getCharacter().basics.name) {
      name = getCharacter().basics.name;
    } else {
      name = "New character";
    };
    var exportData = JSON.stringify(getCharacter(), null, " ");
    prompt.render("Download " + name, "Save this character as a JSON file.", "Download", "download");
    if (helper.e(".prompt pre")) {
      helper.selectText(".prompt pre");
    };
  };

  function bind() {
    prompt.bind();
    modal.bind();
    snack.bind();
    inputBlock.bind();
    textareaBlock.bind();
    stats.bind();
    clone.bind();
    totalBlock.bind();
    spells.bind();
    display.bind();
  };

  function render() {
    inputBlock.render();
    textareaBlock.render();
    stats.render();
    clone.render();
    totalBlock.render();
    totalBlock.update();
    spells.render();
    display.render();
  };

  function clear() {
    inputBlock.clear();
    textareaBlock.clear();
    stats.render();
    clone.clear();
    totalBlock.clear();
    totalBlock.update();
    spells.clear();
    display.clear();
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
