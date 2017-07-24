var textBlock = (function() {

  function clear() {
    var all_textBlock = helper.eA(".js-text-block");
    for (var i = 0; i < all_textBlock.length; i++) {
      all_textBlock[i].textContent = "";
    };
  };

  function _render_textBlock(textBlock) {
    var path = textBlock.dataset.path;
    if (path) {
      var content = helper.getObject(sheet.getCharacter(), path);
      textBlock.textContent = content;
    };
  };

  function render(textBlock) {
    if (textBlock) {
      _render_textBlock(textBlock);
    } else {
      var all_textBlock = helper.eA(".js-text-block");
      for (var i = 0; i < all_textBlock.length; i++) {
        _render_textBlock(all_textBlock[i]);
      };
    };
  };

  // exposed methods
  return {
    render: render,
    clear: clear
  };

})();
