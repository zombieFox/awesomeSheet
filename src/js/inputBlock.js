var inputBlock = (function() {

  function _store(element) {
    var key = element.id.replace("input-", "").replace(/-/g, "_");
    sheet.getCharacter(sheet.getIndex()).input[key] = element.value;
    sheet.storeCharacters();
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
    _bind_awesomeName();
  };

  function _bind_awesomeName() {
    var input = helper.e(".awesome-name input");
    input.addEventListener("input", function() {
      _render_characterLink(this.value);
      _maxLengthWarning(this.value);
    }, false);
    input.addEventListener("focus", function() {
      _render_characterLink(this.value);
    }, false);
    input.addEventListener("blur", function() {
      _render_characterLink(this.value);
    }, false);
  };

  function _render_characterLink(awesomeNameValue) {
    var name = helper.e(".character-index-" + sheet.getIndex()).querySelector(".name");
    name.textContent = awesomeNameValue;
  };

  function _maxLengthWarning(awesomeNameValue) {
    if (awesomeNameValue.length >= 150) {
      snack.render("Character name is too long.", false, false);
    };
  };

  function render() {
    if (sheet.getCharacter(sheet.getIndex()).input) {
      for (var i in sheet.getCharacter(sheet.getIndex()).input) {
        var id = "#input-" + i.replace(/_/g, "-");
        helper.e(id).value = sheet.getCharacter(sheet.getIndex()).input[i];
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
