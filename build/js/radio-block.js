var radioBlock = (function() {

  var storeRadioTimer = null;

  function _store(input) {
    var radioBlock = helper.getClosest(input, ".js-radio-block");
    var radioBlockOptions = helper.makeObject(radioBlock.dataset.radioBlockOptions);
    var newValue = input.value;
    if (radioBlockOptions.path) {
      helper.setObject({
        object: sheet.get(),
        path: radioBlockOptions.path,
        newValue: newValue
      });
    };
  };

  function delayUpdate(input) {
    _store(input);
    sheet.store();
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
        _bind_radioBlock(all_radioBlock[i]);
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
      var selection = helper.getObject({
        object: sheet.get(),
        path: options.path
      });
      if (value == selection) {
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
