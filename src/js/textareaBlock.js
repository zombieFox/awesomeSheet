var textareaBlock = (function() {

  function _store(element) {
    var key = element.id.replace("textarea-", "").replace(/-/g, "_");
    sheet.allCharacters[sheet.currentCharacterIndex].textarea[key] = element.innerHTML;
    sheet.storeCharacters();
  };

  function bind(array) {
    for (var i = 0; i < array.length; i++) {
      var textarea = array[i];
      textarea.addEventListener("input", function() {
        _store(this);
      }, false);
      textarea.addEventListener("focus", function() {
        _store(this);
      }, false);
      textarea.addEventListener("blur", function() {
        _store(this);
      }, false);
    };
  };

  function render() {
    if (sheet.allCharacters[sheet.currentCharacterIndex].textarea) {
      for (var i in sheet.allCharacters[sheet.currentCharacterIndex].textarea) {
        var id = "#" + "textarea-" + i.replace(/_/g, '-');
        helper.e(id).innerHTML = sheet.allCharacters[sheet.currentCharacterIndex].textarea[i];
      };
    };
  };

  // exposed methods
  return {
    render: render,
    bind: bind
  };

})();