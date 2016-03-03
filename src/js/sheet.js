var sheet = (function() {


  var currentCharacter;

  function setCharacter() {
    // if there is a character in local storage read it or use an external js file
    if (read("character")) {
      currentCharacter = JSON.parse(read("character"));
    } else {
      currentCharacter = nif;
      store_character();
    };
  };

  function update() {
    // iterate over the character object and find id for element and populate the value
    for (var i in currentCharacter.input) {
      var id = "#" + "input-" + i.replace(/_/g, '-');
      helper.e(id).value = currentCharacter.input[i];
    };
    // iterate over the character object and find id for element and populate the value
    for (var i in currentCharacter.textarea) {
      var id = "#" + "textarea-" + i.replace(/_/g, '-');
      helper.e(id).innerHTML = currentCharacter.textarea[i];
    };
  };

  function store_character() {
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

  setCharacter();

  // exposed methods
  return {
    currentCharacter: currentCharacter,
    destroy: destroy,
    store: store,
    remove: remove,
    read: read,
    update: update,
    store_character: store_character
  };

})();
