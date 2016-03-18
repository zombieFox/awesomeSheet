var textareaBlock = (function() {

  function _store(element) {
    var path = element.dataset.path;
    helper.updateObject(sheet.getCharacter(), path, element.innerHTML);
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
    var all_textareaBlock = helper.eA(".textarea-block");
    for (var i = 0; i < all_textareaBlock.length; i++) {
      var path = all_textareaBlock[i].dataset.path;
      var content = helper.getObject(sheet.getCharacter(), path);
      all_textareaBlock[i].innerHTML = content;
    };
  };

  // exposed methods
  return {
    render: render,
    bind: bind
  };

})();
