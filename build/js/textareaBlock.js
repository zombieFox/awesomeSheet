var textareaBlock = (function() {

  function _store(element) {
    var key = element.id.replace("textarea-", "").replace(/-/g, "_");
    sheet.currentCharacter.textarea[key] = element.innerHTML;
    sheet.storeCharacter();
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
    for (var i in sheet.currentCharacter.textarea) {
      var id = "#" + "textarea-" + i.replace(/_/g, '-');
      helper.e(id).innerHTML = sheet.currentCharacter.textarea[i];
    };
  };

  // exposed methods
  return {
    render: render,
    bind: bind
  };

})();