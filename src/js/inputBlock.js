var inputBlock = (function() {

  function _store(element) {
    var key = element.id.replace("input-", "").replace(/-/g, "_");
    sheet.currentCharacter.input[key] = element.value;
    sheet.storeCharacter();
  };

  function focus(element) {
    var inputBlockRoot = helper.getClosest(element, ".input-block");
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

  function bind(array) {
    for (var i = 0; i < array.length; i++) {
      if (array[i].dataset.inputStore) {
        var input = array[i].querySelector(".input-field");
        input.addEventListener("input", function() {
          _store(this);
          focus(this);
          totalBlock.render();
        }, false);
        input.addEventListener("focus", function() {
          _store(this);
          focus(this);
          totalBlock.render();
        }, false);
        input.addEventListener("blur", function() {
          _store(this);
          focus(this);
          totalBlock.render();
        }, false);
      };
    };
  };

  function render() {
    if (sheet.currentCharacter.input) {
      for (var i in sheet.currentCharacter.input) {
        var id = "#input-" + i.replace(/_/g, "-");
        helper.e(id).value = sheet.currentCharacter.input[i];
        // console.log(sheet.currentCharacter.input[i]);
      };
    };
  };

  // exposed methods
  return {
    focus: focus,
    render: render,
    bind: bind
  };

})();
