var textBlock = (function() {

  function clear() {
    var all_textBlock = helper.eA(".js-text-block");
    for (var i = 0; i < all_textBlock.length; i++) {
      all_textBlock[i].textContent = "";
    };
  };

  function _render_textBlock(textBlock) {
    var path = textBlock.dataset.path;
    var textType = textBlock.dataset.textType;
    var content;
    if (path) {
      content = helper.getObject(sheet.getCharacter(), path);
    };
    if (textType) {
      if (textType == "currency") {
        if (content != "") {
          content = parseFloat(content).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          }) + " gp";
        };
      } else if (textType == "number") {
        if (content != "") {
          content = parseFloat(content).toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          });
        } else {
          content = 0;
        };
      };
    };
    textBlock.textContent = content;
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
