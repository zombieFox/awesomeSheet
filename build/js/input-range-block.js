var inputRangeBlock = (function() {

  function _store(element) {
    var inputRangeBlock = helper.getClosest(element, ".js-input-range-block");
    var inputRangeBlockField = inputRangeBlock.querySelector(".js-input-range-block-field");
    var path = inputRangeBlockField.dataset.path;
    var type = inputRangeBlockField.dataset.type;
    var clone = (inputRangeBlock.dataset.clone == "true");
    var data;
    if (type == "integer") {
      data = parseInt(element.value, 10);
    } else if (type == "float") {
      data = parseFloat(element.value);
    } else {
      data = element.value;
    };
    if (isNaN(data)) {
      data = 0;
    };
    if (path) {
      helper.setObject(sheet.getCharacter(), path, data);
      // console.log(typeof helper.getObject(sheet.getCharacter(), path), helper.getObject(sheet.getCharacter(), path));
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
        sheet.storeCharacters();
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
    // console.log(inputRangeBlock);
    var inputRangeBlockField = inputRangeBlock.querySelector(".js-input-range-block-field");
    var path = inputRangeBlockField.dataset.path;
    var type = inputRangeBlockField.dataset.type;
    if (path) {
      var content = helper.getObject(sheet.getCharacter(), path);
      if (type == "integer" && typeof content == "string") {
        content = parseInt(content, 10);
        if (isNaN(content)) {
          content = 0;
        };
      };
      inputRangeBlockField.value = content;
    };
  };

  // exposed methods
  return {
    bind: bind,
    render: render
  };

})();
