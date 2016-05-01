var inputBlock = (function() {

  function _store(element) {
    var path = element.dataset.path;
    helper.updateObject(sheet.getCharacter(), path, element.value);
    sheet.storeCharacters();
  };

  function focus(element) {
    var inputBlock = helper.getClosest(element, ".js-input-block");
    var inputBlockField = inputBlock.querySelector(".js-input-block-field");
    var inputBlockLabel;
    if (inputBlock.querySelector(".js-input-block-label")) {
      var inputBlockLabel = inputBlock.querySelector(".js-input-block-label");
    };
    if (inputBlock.querySelector(".js-input-block-label")) {
      if (inputBlockField == document.activeElement) {
        helper.addClass(inputBlockLabel, "is-active");
      } else {
        helper.removeClass(inputBlockLabel, "is-active");
      };
      if (element.value == "" && inputBlockField != document.activeElement) {
        helper.removeClass(inputBlockLabel, "is-active");
      } else {
        helper.addClass(inputBlockLabel, "is-active");
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
    var all_inputControls = helper.eA(".js-input-controls");
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
    var all_inputBlock = helper.eA(".js-input-block");
    for (var i = 0; i < all_inputBlock.length; i++) {
      var input = all_inputBlock[i].querySelector(".js-input-block-field");
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
    var input = helper.e(".js-character-name");
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
    var all_inputBlockField = helper.eA(".js-input-block-field");
    for (var i = 0; i < all_inputBlockField.length; i++) {
      var path = all_inputBlockField[i].dataset.path;
      var content = helper.getObject(sheet.getCharacter(), path);
      all_inputBlockField[i].value = content;
      updateInputBlock(all_inputBlockField[i]);
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
