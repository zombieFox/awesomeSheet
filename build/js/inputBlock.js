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

  function bind() {
    _bind_inputBlock();
    _bind_awesomeName();
    _bind_class();
    _bind_level();
    _bind_inputControls();
  };

  function _bind_inputControls() {
    var all_inputControls = helper.eA(".input-controls");
    for (var i = 0; i < all_inputControls.length; i++) {
      var add = all_inputControls[i].querySelector(".add");
      var minus = all_inputControls[i].querySelector(".minus");
      add.addEventListener("click", function() {
        _addOrMinusInput(this);
      }, false);
      minus.addEventListener("click", function() {
        _addOrMinusInput(this);
      }, false);
    };
  };

  function _addOrMinusInput(element) {
    var target;
    if (element.dataset.add) {
      target = helper.e("#" + element.dataset.add);
      target.value = (parseInt(target.value, 10) || 0) + 1;
    };
    if (element.dataset.minus) {
      target = helper.e("#" + element.dataset.minus);
      target.value = (parseInt(target.value, 10) || 0) - 1;
    };
    _store(target);
    updateInputBlock(target);
    totalBlock.render();
  };

  function _bind_inputBlock() {
    var all_inputBlock = helper.eA(".input-block");
    for (var i = 0; i < all_inputBlock.length; i++) {
      var input = all_inputBlock[i].querySelector(".input-field");
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
  };

  function _bind_awesomeName() {
    var input = helper.e(".awesome-name input");
    input.addEventListener("input", function() {
      nav.update(this);
      _maxLengthWarning(this);
    }, false);
    input.addEventListener("focus", function() {
      nav.update(this);
    }, false);
    input.addEventListener("blur", function() {
      nav.update(this);
    }, false);
  };

  function _bind_class() {
    var input = helper.e("#basics-class");
    input.addEventListener("input", function() {
      nav.update(this);
    }, false);
    input.addEventListener("focus", function() {
      nav.update(this);
    }, false);
    input.addEventListener("blur", function() {
      nav.update(this);
    }, false);
  };

  function _bind_level() {
    var input = helper.e("#basics-level");
    input.addEventListener("input", function() {
      nav.update(this);
    }, false);
    input.addEventListener("focus", function() {
      nav.update(this);
    }, false);
    input.addEventListener("blur", function() {
      nav.update(this);
    }, false);
  };

  function _maxLengthWarning(input) {
    if (input.value.length >= 150) {
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
