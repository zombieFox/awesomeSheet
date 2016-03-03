var inputBlock = (function() {

  // add class to label when input is in focus
  function input_focus(element) {
    var inputBlockRoot = element.parentNode;
    var inputField = inputBlockRoot.querySelector(".input-field");
    var inputLabel;
    if (inputBlockRoot.querySelector(".input-label")) {
      var inputLabel = inputBlockRoot.querySelector(".input-label");
    };
    if (inputBlockRoot.querySelector(".input-label")) {
      if (inputField == document.activeElement) {
        helper.addClass(inputLabel, "input-label-focus");
      } else {
        helper.removeClass(inputLabel, "input-label-focus");
      };
    };
  };

  // add listeners to inputBlock
  function _addListenerTo_all_inputBlock() {
    var all_inputBlock = helper.eA(".input-block");
    for (var i = 0; i < all_inputBlock.length; i++) {
      var inputLabel = all_inputBlock[i].querySelector(".input-field");
      inputLabel.addEventListener("input", function() {
        input_focus(this);
        store_input(this);
        totalBlock.total();
      }, false);
      inputLabel.addEventListener("focus", function() {
        input_focus(this);
        store_input(this);
        totalBlock.total();
      }, false);
      inputLabel.addEventListener("blur", function() {
        input_focus(this);
        store_input(this);
        totalBlock.total();
      }, false);
    };
  };

  function store_input(element) {
    var key = element.id.replace("input-", "").replace(/-/g, "_");
    sheet.currentCharacter.input[key] = element.value;
    sheet.store_character();
  };

  // remove inputBlock
  function remove_inputBlock(element) {
    // collect all inputBlock classes
    var inputBlockId = element.id;
    // remove all inputBlock from storage
    sheet.remove(inputBlockId);
  };

  // read inputBlock
  function _read_inputBlock() {
    var all_inputBlock = helper.eA(".input-block");
    for (var i = 0; i < all_inputBlock.length; i++) {
      // collect all inputBlock classes
      var inputBlockId = all_inputBlock[i].querySelector(".input-field").id;
      // if inputBlock local store exists
      if (sheet.currentCharacter[inputBlockId]) {
        helper.e("#" + inputBlockId).value = sheet.currentCharacter[inputBlockId];
      };
    };
  };

  _addListenerTo_all_inputBlock();
  _read_inputBlock();

  // exposed methods
  return {
    focus: focus,
    input_focus: input_focus
  }

})();