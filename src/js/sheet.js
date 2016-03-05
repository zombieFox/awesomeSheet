var sheet = (function() {

  var newCharacter = [{
    clone: {},
    input: {},
    textarea: {},
    spells: []
  }];

  var allCharacters = newCharacter;
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
    console.log("laoded Character is " + allCharacters[currentCharacterIndex].input.name);
    console.log("laoded Character index is " + currentCharacterIndex);
    console.log(allCharacters);
  })();

  function storeCharacters() {
    store("allCharacters", JSON.stringify(allCharacters));
    // console.log(allCharacters);
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
    document.location.reload(true);
    prompt.destroy();
  };

  // exposed methods
  return {
    allCharacters: allCharacters,
    currentCharacterIndex: currentCharacterIndex,
    storeCharacters: storeCharacters,
    destroy: destroy,
    store: store,
    remove: remove,
    read: read,
  };

})();
