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
        button.setAttribute("class", "button button-icon u-inline-with-input");
        var buttonText = document.createElement("span");
        buttonText.setAttribute("class", "button-text");
        buttonText.textContent = value;
        var buttonIcon = document.createElement("span");
        if (addMinus) {
          if (addMinus == "add") {
            buttonIcon.setAttribute("class", "icon-add");
          } else if (addMinus == "minus") {
            buttonIcon.setAttribute("class", "icon-remove");
          };
          button.appendChild(buttonIcon);
        };
        button.appendChild(buttonText);
        return button;
      };

      function _makeEditBoxItem(size, child) {
        var editBoxItem = document.createElement("div");
        editBoxItem.setAttribute("class", "m-edit-box-item-" + size);
        if (child) {
          editBoxItem.appendChild(child);
        };
        return editBoxItem;
      };

      var quickValueControl = document.createElement("div");
      quickValueControl.setAttribute("class", "m-input-block-quick-value");
      quickValueControl.setAttribute("data-quick-value-damage", helper.getObject(sheet.getCharacter(), "defense.hp.damage"));

      var damageEditBox = document.createElement("div");
      damageEditBox.setAttribute("class", "m-edit-box m-edit-box-head-small");
      var damageEditBoxHead = document.createElement("div");
      damageEditBoxHead.setAttribute("class", "m-edit-box-head");
      var damageEditBoxHeadTitle = document.createElement("h2");
      damageEditBoxHeadTitle.setAttribute("class", "m-edit-box-title");
      damageEditBoxHeadTitle.textContent = "Damage to apply";
      var damageEditBoxBody = document.createElement("div");
      damageEditBoxBody.setAttribute("class", "m-edit-box-body");
      var damageEditBoxContent = document.createElement("div");
      damageEditBoxContent.setAttribute("class", "m-edit-box-content m-edit-box-content-margin-large");
      var damageEditBoxGroup = document.createElement("div");
      damageEditBoxGroup.setAttribute("class", "m-edit-box-item-large m-edit-box-group m-input-block-quick-value-button-group");

      var damageCount = document.createElement("p");
      damageCount.setAttribute("class", "m-edit-box-text");
      damageCount.textContent = 0;

      damageEditBoxGroup.appendChild(_makeEditBoxItem("button-small", _makeButton(1, "add")));
      damageEditBoxGroup.appendChild(_makeEditBoxItem("button-small", _makeButton(3, "add")));
      damageEditBoxGroup.appendChild(_makeEditBoxItem("button-small", _makeButton(5, "add")));
      damageEditBoxGroup.appendChild(_makeEditBoxItem("button-small", _makeButton(10, "add")));
      damageEditBoxGroup.appendChild(_makeEditBoxItem("button-small", _makeButton("Clear")));

      damageEditBoxContent.appendChild(_makeEditBoxItem("total", damageCount));
      damageEditBoxContent.appendChild(damageEditBoxGroup);
      damageEditBoxBody.appendChild(damageEditBoxContent);
      damageEditBoxHead.appendChild(damageEditBoxHeadTitle);
      damageEditBox.appendChild(damageEditBoxHead);
      damageEditBox.appendChild(damageEditBoxBody);

      var healingEditBox = document.createElement("div");
      healingEditBox.setAttribute("class", "m-edit-box m-edit-box-head-small");
      var healingEditBoxHead = document.createElement("div");
      healingEditBoxHead.setAttribute("class", "m-edit-box-head");
      var healingEditBoxHeadTitle = document.createElement("h2");
      healingEditBoxHeadTitle.setAttribute("class", "m-edit-box-title");
      healingEditBoxHeadTitle.textContent = "Healing to apply";
      var healingEditBoxBody = document.createElement("div");
      healingEditBoxBody.setAttribute("class", "m-edit-box-body");
      var healingEditBoxContent = document.createElement("div");
      healingEditBoxContent.setAttribute("class", "m-edit-box-content m-edit-box-content-margin-large");
      var healingEditBoxGroup = document.createElement("div");
      healingEditBoxGroup.setAttribute("class", "m-edit-box-item-large m-edit-box-group m-input-block-quick-value-button-group");

      var healingCount = document.createElement("p");
      healingCount.setAttribute("class", "m-edit-box-text");
      healingCount.textContent = 0;

      healingEditBoxGroup.appendChild(_makeEditBoxItem("button-small", _makeButton(1, "add")));
      healingEditBoxGroup.appendChild(_makeEditBoxItem("button-small", _makeButton(3, "add")));
      healingEditBoxGroup.appendChild(_makeEditBoxItem("button-small", _makeButton(5, "add")));
      healingEditBoxGroup.appendChild(_makeEditBoxItem("button-small", _makeButton(10, "add")));
      healingEditBoxGroup.appendChild(_makeEditBoxItem("button-small", _makeButton("Clear")));

      healingEditBoxContent.appendChild(_makeEditBoxItem("total", healingCount));
      healingEditBoxContent.appendChild(healingEditBoxGroup);
      healingEditBoxBody.appendChild(healingEditBoxContent);
      healingEditBoxHead.appendChild(healingEditBoxHeadTitle);
      healingEditBox.appendChild(healingEditBoxHead);
      healingEditBox.appendChild(healingEditBoxBody);

      quickValueControl.appendChild(damageEditBox);
      quickValueControl.appendChild(healingEditBox);

      return quickValueControl;
    };

    var modalContent = _create_quickValueModal();

    modal.render(heading, modalContent, "Apply", function() {
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
