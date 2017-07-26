var inputBlock = (function() {

  function _store(element) {
    var inputBlock = helper.getClosest(element, ".js-input-block");
    var inputBlockField = inputBlock.querySelector(".js-input-block-field");
    var path = inputBlockField.dataset.path;
    var type = inputBlockField.dataset.type;
    var data;
    if (type == "integer") {
      data = parseInt(element.value, 10);
      if (isNaN(data) && type == "integer") {
        data = "";
      };
    } else if (type == "float") {
      data = parseFloat(element.value);
      if (isNaN(data)) {
        data = "";
      };
    } else {
      data = element.value;
    };
    if (path) {
      if (inputBlock.dataset.clone == "true") {
        var pathCloneKey = inputBlockField.dataset.pathCloneKey;
        var cloneCount = inputBlock.dataset.cloneCount;
        var object = helper.getObject(sheet.getCharacter(), path, cloneCount);
        object[pathCloneKey] = data;
      } else {
        helper.setObject(sheet.getCharacter(), path, data);
      };
    };
  };

  var storeInputTimer = null;
  var updateNavTimer = null;

  function delayUpdate(element) {
    _store(element);
    sheet.storeCharacters();
    totalBlock.render();
    if (body.dataset.displayMode == "true") {
      display.clear();
      display.render();
    };
  };

  function _focus(element) {
    var inputBlock = helper.getClosest(element, ".js-input-block");
    if (element == document.activeElement) {
      helper.addClass(inputBlock, "is-focus");
    } else {
      helper.removeClass(inputBlock, "is-focus");
    };
  };

  function clear() {
    var all_inputBlock = helper.eA(".js-input-block");
    for (var i = 0; i < all_inputBlock.length; i++) {
      all_inputBlock[i].querySelector(".js-input-block-field").value = "";
    };
  };

  function _quickValue(button) {
    var target = button.dataset.valueTarget;
    var heading = button.dataset.modalHeading;
    var inputBlockField = helper.e("#" + target);
    var inputBlock = helper.getClosest(inputBlockField, ".js-input-block");
    var path = inputBlockField.dataset.path;

    function _create_quickValueModal() {
      function _makeButton(value, addMinus) {
        var button = document.createElement("button");
        button.setAttribute("class", "button button-icon");
        var buttonText = document.createElement("span");
        buttonText.setAttribute("class", "button-text");
        buttonText.textContent = value;
        var buttonIcon = document.createElement("span");
        if (addMinus == "add") {
          buttonIcon.setAttribute("class", "icon-add");
        } else if (addMinus == "minus") {
          buttonIcon.setAttribute("class", "icon-remove");
        };
        button.appendChild(buttonIcon);
        button.appendChild(buttonText);
        return button;
      };

      var quickValueControl = document.createElement("div");
      quickValueControl.setAttribute("class", "m-input-block-quick-value");
      quickValueControl.setAttribute("data-quick-value-damage", "");

      var container = document.createElement("div");
      container.setAttribute("class", "container");
      var row = document.createElement("div");
      row.setAttribute("class", "row");
      var col1 = document.createElement("div");
      col1.setAttribute("class", "col-xs-12 col-sm-6");
      var col2 = document.createElement("div");
      col2.setAttribute("class", "col-xs-12 col-sm-6");

      var heading = document.createElement("h1");
      heading.setAttribute("class", "m-modal-heading");
      heading.textContent = "Apply 0 Damage";

      var buttonGroupPlus = document.createElement("div");
      buttonGroupPlus.setAttribute("class", "button-group m-input-block-quick-value-button-group");
      var buttonGroupMinus = document.createElement("div");
      buttonGroupMinus.setAttribute("class", "button-group m-input-block-quick-value-button-group");

      buttonGroupPlus.appendChild(_makeButton(1, "add"));
      buttonGroupPlus.appendChild(_makeButton(2, "add"));
      buttonGroupPlus.appendChild(_makeButton(3, "add"));
      buttonGroupPlus.appendChild(_makeButton(4, "add"));
      buttonGroupPlus.appendChild(_makeButton(5, "add"));
      buttonGroupPlus.appendChild(_makeButton(6, "add"));
      buttonGroupPlus.appendChild(_makeButton(7, "add"));
      buttonGroupPlus.appendChild(_makeButton(8, "add"));
      buttonGroupPlus.appendChild(_makeButton(9, "add"));
      buttonGroupPlus.appendChild(_makeButton(10, "add"));

      buttonGroupMinus.appendChild(_makeButton(1, "minus"));
      buttonGroupMinus.appendChild(_makeButton(2, "minus"));
      buttonGroupMinus.appendChild(_makeButton(3, "minus"));
      buttonGroupMinus.appendChild(_makeButton(4, "minus"));
      buttonGroupMinus.appendChild(_makeButton(5, "minus"));
      buttonGroupMinus.appendChild(_makeButton(6, "minus"));
      buttonGroupMinus.appendChild(_makeButton(7, "minus"));
      buttonGroupMinus.appendChild(_makeButton(8, "minus"));
      buttonGroupMinus.appendChild(_makeButton(9, "minus"));
      buttonGroupMinus.appendChild(_makeButton(10, "minus"));

      col1.appendChild(heading);
      col1.appendChild(buttonGroupPlus);
      col1.appendChild(buttonGroupMinus);

      row.appendChild(col1);
      row.appendChild(col2);
      container.appendChild(row);
      container.appendChild(row);
      quickValueControl.appendChild(container);

      return quickValueControl;
    };

    var modalContent = _create_quickValueModal();

    modal.render(false, modalContent, "Apply", function() {
      console.log(this);
    }.bind(modalContent));
  };

  function _increment(button) {
    var increment = button.dataset.increment;
    var target = button.dataset.incrementTarget;
    var inputBlockField = helper.e("#" + target);
    var inputBlock = helper.getClosest(inputBlockField, ".js-input-block");
    var path = inputBlockField.dataset.path;
    if (increment == "add") {
      helper.setObject(sheet.getCharacter(), path, ((parseInt(helper.getObject(sheet.getCharacter(), path), 10) || 0) + 1));
    } else if (increment == "minus") {
      helper.setObject(sheet.getCharacter(), path, ((parseInt(helper.getObject(sheet.getCharacter(), path), 10) || 0) - 1));
    } else if (increment == "clear") {
      helper.setObject(sheet.getCharacter(), path, "");
    };
    _render_inputBlock(inputBlock);
    sheet.storeCharacters();
    totalBlock.render();
  };

  function bind(inputBlock) {
    if (inputBlock) {
      _bind_inputBlock(inputBlock);
    } else {
      _bind_all_inputBlock();
      _bind_inputBlockIncrement();
      _bind_inputBlockQuickValue();
      _bind_name();
    };
  };

  function _bind_inputBlockIncrement() {
    var all_inputBlockIncrement = helper.eA(".js-input-block-increment");
    for (var i = 0; i < all_inputBlockIncrement.length; i++) {
      all_inputBlockIncrement[i].addEventListener("click", function() {
        _increment(this);
      }, false);
    };
  };

  function _bind_inputBlockQuickValue() {
    var all_inputBlockQuickValues = helper.eA(".js-input-block-quick-value");
    for (var i = 0; i < all_inputBlockQuickValues.length; i++) {
      all_inputBlockQuickValues[i].addEventListener("click", function() {
        _quickValue(this);
      }, false);
    };
  };

  function _bind_all_inputBlock() {
    var all_inputBlock = helper.eA(".js-input-block");
    for (var i = 0; i < all_inputBlock.length; i++) {
      if (all_inputBlock[i].dataset.clone != "true") {
        _bind_inputBlock(all_inputBlock[i]);
      };
    };
  };

  function _bind_inputBlock(inputBlock) {
    var input = inputBlock.querySelector(".js-input-block-field");
    if (input) {
      input.addEventListener("input", function() {
        clearTimeout(storeInputTimer);
        storeInputTimer = setTimeout(delayUpdate, 300, this);
      }, false);
      input.addEventListener("focus", function() {
        _focus(this);
      }, false);
      input.addEventListener("blur", function() {
        _store(this);
        _focus(this);
      }, false);
    };
  };

  function _bind_name() {
    var inputBlock = helper.e(".js-basics-name");
    var input = inputBlock.querySelector(".js-input-block-field");
    input.addEventListener("input", function() {
      clearTimeout(updateNavTimer);
      updateNavTimer = setTimeout(nav.update, 300, this);
    }, false);
    input.addEventListener("keydown", function(event) {
      // enter
      if (event.keyCode == 13) {
        if (input.value == "restore all") {
          sheet.all();
        };
        _focus(this);
      };
    }, false);
  };

  function bind_classLevel(inputBlock) {
    var input = inputBlock.querySelector(".js-input-block-field");
    input.addEventListener("input", function() {
      clearTimeout(updateNavTimer);
      updateNavTimer = setTimeout(nav.update, 300, this);
    }, false);
  };

  function _render_inputBlock(inputBlock) {
    var inputBlockField = inputBlock.querySelector(".js-input-block-field");
    var path = inputBlockField.dataset.path;
    if (path) {
      if (inputBlock.dataset.clone == "true") {
        var pathCloneKey = inputBlockField.dataset.pathCloneKey;
        var cloneCount = inputBlock.dataset.cloneCount;
        var object = helper.getObject(sheet.getCharacter(), path, cloneCount);
        // console.log("found clone input", path, pathCloneKey, inputBlock.dataset.cloneCount, inputBlock);
        inputBlockField.value = object[pathCloneKey];
      } else {
        var content = helper.getObject(sheet.getCharacter(), path);
        inputBlockField.value = content;
      };
    };
  };

  function render(inputBlock) {
    if (inputBlock) {
      _render_inputBlock(inputBlock);
    } else {
      var all_inputBlock = helper.eA(".js-input-block");
      for (var i = 0; i < all_inputBlock.length; i++) {
        _render_inputBlock(all_inputBlock[i]);
      };
    };
  };

  // exposed methods
  return {
    render: render,
    bind: bind,
    bind_classLevel: bind_classLevel,
    clear: clear
  };

})();
