var inputRangeBlock = (function() {

  function _store(input) {
    var inputRangeBlock = helper.getClosest(input, ".js-input-range-block");
    var inputRangeBlockField = inputRangeBlock.querySelector(".js-input-range-block-field");
    var inputRangeBlockOptions = helper.makeObject(inputRangeBlock.dataset.inputRangeBlockOptions);
    var data;
    if (inputRangeBlockOptions.type == "integer") {
      data = parseInt(input.value, 10);
    } else if (inputRangeBlockOptions.type == "float") {
      data = parseFloat(input.value);
    } else {
      data = input.value;
    };
    if (isNaN(data)) {
      data = 0;
    };
    if (inputRangeBlockOptions.path) {
      helper.setObject({
        object: sheet.get(),
        path: inputRangeBlockOptions.path,
        newValue: data
      });
    };
  };

  function bind(inputRangeBlock) {
    if (inputRangeBlock) {
      _bind_inputRangeBlock(inputRangeBlock);
    } else {
      _bind_all_inputRangeBlock();
    };
  };

  function _bind_all_inputRangeBlock() {
    var all_inputRangeBlock = helper.eA(".js-input-range-block");
    for (var i = 0; i < all_inputRangeBlock.length; i++) {
      _bind_inputRangeBlock(all_inputRangeBlock[i]);
    };
  };

  function _bind_inputRangeBlock(inputRangeBlock) {
    var input = inputRangeBlock.querySelector(".js-input-range-block-field");
    if (input) {
      input.addEventListener("input", function() {
        _store(this);
        sheet.store();
      }, false);
    };
  };

  function render(inputRangeBlock) {
    if (inputRangeBlock) {
      _render_inputRangeBlock(inputRangeBlock);
    } else {
      var all_inputRangeBlock = helper.eA(".js-input-range-block");
      for (var i = 0; i < all_inputRangeBlock.length; i++) {
        _render_inputRangeBlock(all_inputRangeBlock[i]);
      };
    };
  };

  function _render_inputRangeBlock(inputRangeBlock) {
    var options = helper.makeObject(inputRangeBlock.dataset.inputRangeBlockOptions);
    var inputRangeBlockField = inputRangeBlock.querySelector(".js-input-range-block-field");
    if (options.path) {
      var data = helper.getObject({
        object: sheet.get(),
        path: options.path
      });
      if (options.type == "integer" && typeof data == "string") {
        data = parseInt(data, 10);
        if (isNaN(data)) {
          data = 0;
        };
      };
      inputRangeBlockField.value = data;
    };
  };

  // exposed methods
  return {
    bind: bind,
    render: render
  };

})();
