var sheet = (function() {

  var singleNewCharacter = [{
    clone: {},
    input: {},
    textarea: {},
    spells: []
  }];

  var allCharacters = singleNewCharacter;
  var currentCharacterIndex = 0;

  var saveAllCharacters = (function() {
    if (read("allCharacters")) {
      allCharacters = JSON.parse(read("allCharacters"));
    } else {
      if (typeof hardCodedCharacters !== "undefined") {
        allCharacters = hardCodedCharacters.load;
      };
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

  function getIndex() {
    return currentCharacterIndex;
  };

  function setIndex(index) {
    currentCharacterIndex = index;
  };

  function storeCharacterIndex() {
    store("charactersIndex", currentCharacterIndex);
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

  function exportCharacterObject(index) {
    var exportData = JSON.stringify(allCharacters[currentCharacterIndex], null, " ");
    prompt.render("code", "Character object data:", exportData, "close");
    helper.selectText(".prompt pre");
  };

  function render() {
    clone.render();
    consumable.render();
    inputBlock.render();
    textareaBlock.render();
    stats.render();
    spells.render();
    totalBlock.render();
  };

  // exposed methods
  return {
    allCharacters: allCharacters,
    currentCharacterIndex: currentCharacterIndex,
    getIndex: getIndex,
    setIndex: setIndex,
    storeCharacters: storeCharacters,
    storeCharacterIndex: storeCharacterIndex,
    destroy: destroy,
    store: store,
    remove: remove,
    read: read,
    clear: clear,
    export: exportCharacterObject,
    render: render
  };

})();
