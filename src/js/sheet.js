var sheet = (function() {

  var currentCharacter = {
    clone: {},
    input: {},
    textarea: {},
    spells: []
  };

  var setCharacter = (function() {
    // if there is a character in local storage read it or use an external js file
    if (typeof savedCharacterObject !== "undefined") {
      // found hard coded character, setting currentCharacter as it
      currentCharacter = savedCharacterObject;
    };
    if (read("character")) {
      // found local stored character, setting currentCharacter as it
      currentCharacter = JSON.parse(read("character"));
    };
  })();

  function storeCharacter() {
    store("character", JSON.stringify(currentCharacter));
    console.log(currentCharacter);
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
    currentCharacter: currentCharacter,
    destroy: destroy,
    store: store,
    remove: remove,
    read: read,
    storeCharacter: storeCharacter
  };

})();
