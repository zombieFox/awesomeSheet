var radioBlock = (function() {
  
  var storeRadioTimer = null;

  function _store(element) {
    var radioBlock = helper.getClosest(element, ".js-radio-block");
    var radioBlockOptions = helper.makeObject(radioBlock.dataset.radioBlockOptions);
    var newValue = element.value;
    if (radioBlockOptions.path) {
      helper.xxx_setObject({
        object: sheet.getCharacter(),
        path: radioBlockOptions.path,
        newValue: newValue
      });
    };
  };

  function delayUpdate(element) {
    _store(element);
    sheet.storeCharacters();
  };

  function clear() {
    var all_radioBlock = helper.eA(".js-radio-block");
    for (var i = 0; i < all_radioBlock.length; i++) {
      all_radioBlock[i].querySelector(".js-radio-block-input").checked = false;
    };
  };

  function bind(radioBlock) {
    if (radioBlock) {
      _bind_radioBlock(radioBlock);
    } else {
      var all_radioBlock = helper.eA(".js-radio-block");
      for (var i = 0; i < all_radioBlock.length; i++) {
        if (all_radioBlock[i].dataset.clone != "true") {
          _bind_radioBlock(all_radioBlock[i]);
        };
      };
    };
  };

  function _bind_radioBlock(radioBlock) {
    var radioBlockInput = radioBlock.querySelector(".js-radio-block-input");
    if (radioBlockInput) {
      radioBlockInput.addEventListener("change", function() {
        clearTimeout(storeRadioTimer);
        storeRadioTimer = setTimeout(delayUpdate, 300, this);
      }, false);
    };
  };

  function render(radioBlock) {
    if (radioBlock) {
      _render_radioBlock(radioBlock);
    } else {
      var all_radioBlock = helper.eA(".js-radio-block");
      for (var i = 0; i < all_radioBlock.length; i++) {
        _render_radioBlock(all_radioBlock[i]);
      };
    };
  };

  function _render_radioBlock(radioBlock) {
    var options = helper.makeObject(radioBlock.dataset.radioBlockOptions);
    var radioBlockInput = radioBlock.querySelector(".js-radio-block-input");
    var value = radioBlockInput.value;
    if (options.path) {
      var selection = helper.xxx_getObject({
        object: sheet.getCharacter(),
        path: options.path
      });
      if (selection == value) {
        radioBlockInput.checked = true;
      };
    };
  };

  // exposed methods
  return {
    render: render,
    bind: bind,
    clear: clear
  };

})();
