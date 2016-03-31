var inputBlock = (function() {

  function _store(element) {
    var path = element.dataset.path;
    helper.updateObject(sheet.getCharacter(), path, element.value);
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
        helper.addClass(inputLabel, "input-label-active");
      } else {
        helper.removeClass(inputLabel, "input-label-focus");
        helper.removeClass(inputLabel, "input-label-active");
      };
      if (element.value == "" && inputField != document.activeElement) {
        helper.removeClass(inputLabel, "input-label-active");
      } else {
        helper.addClass(inputLabel, "input-label-active");
      };
    };
  };

  function updateInputBlock(element) {
    focus(element);
  };

  function bind(array) {
    for (var i = 0; i < array.length; i++) {
      var input = array[i].querySelector(".input-field");
      if (input) {
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
    var all_inputField = helper.eA(".input-field");
    for (var i = 0; i < all_inputField.length; i++) {
      var path = all_inputField[i].dataset.path;
      var content = helper.getObject(sheet.getCharacter(), path);
      all_inputField[i].value = content;
      updateInputBlock(all_inputField[i]);
    };
  };

  // exposed methods
  return {
    update: updateInputBlock,
    focus: focus,
    render: render,
    bind: bind
  };

})();