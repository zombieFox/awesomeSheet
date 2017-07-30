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

  function _update_quickValueControls(button) {
    var target = button.dataset.quickValueTarget;
    var change = button.dataset.quickValueChange;
    var heading = button.dataset.modalHeading;
    var inputBlockField = helper.e("#" + target);
    var inputBlock = helper.getClosest(inputBlockField, ".js-input-block");
    var path = inputBlockField.dataset.path;

    function _render_count(quickValueControl) {
      var currentValue = parseInt(quickValueControl.dataset.quickValue, 10);
      var inputBlockQuickValue = quickValueControl.querySelector(".js-input-block-quick-value");
      inputBlockQuickValue.textContent = currentValue;
    };

    function _store_data(quickValueControl, value) {
      var currentValue = parseInt(quickValueControl.dataset.quickValue, 10);
      if (value == 0) {
        quickValueControl.dataset.quickValue = 0;
      } else {
        quickValueControl.dataset.quickValue = currentValue + value;
      };
    };

    function _makeButton(quickValueControl, text, icon, value, large) {
      var button = document.createElement("button");
      if (large) {
        button.setAttribute("class", "button button-icon button-large u-inline-with-input");
      } else {
        button.setAttribute("class", "button button-icon u-inline-with-input");
      };
      if (icon) {
        var buttonIcon = document.createElement("span");
        buttonIcon.setAttribute("class", icon);
        button.appendChild(buttonIcon);
      };
      if (text) {
        var buttonText = document.createElement("span");
        buttonText.setAttribute("class", "button-text");
        buttonText.textContent = text;
        button.appendChild(buttonText);
      };
      button.addEventListener("click", function() {
        _store_data(quickValueControl, value);
        _render_count(quickValueControl);
      }, false);
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

    function _update_value(quickValueControl) {
      var newValue = parseInt(quickValueControl.dataset.quickValue, 10);
      var currentValue = parseInt(helper.getObject(sheet.getCharacter(), path), 10);
      if (isNaN(currentValue)) {
        currentValue = 0;
      };
      if (change == "positive") {
        newValue = currentValue + newValue;
      } else if (change == "negative") {
        newValue = currentValue - newValue;
      };

      if (path == "defense.hp.damage" || path == "defense.hp.temp" || path == "defense.hp.non_lethal_damage") {
        if (newValue <= 0) {
          helper.setObject(sheet.getCharacter(), path, "");
        } else {
          helper.setObject(sheet.getCharacter(), path, newValue);
        };
      } else {
        if (newValue == 0) {
          helper.setObject(sheet.getCharacter(), path, "");
        } else {
          helper.setObject(sheet.getCharacter(), path, newValue);
        };
      };

    };

    function _create_quickValueModal() {
      var quickValueControl = document.createElement("div");
      quickValueControl.setAttribute("class", "m-input-block-quick-value");
      quickValueControl.setAttribute("data-quick-value", 0);

      var editBox = document.createElement("div");
      editBox.setAttribute("class", "m-edit-box m-edit-box-head-small");
      var editBoxHead = document.createElement("div");
      editBoxHead.setAttribute("class", "m-edit-box-head");
      var editBoxHeadTitle = document.createElement("h2");
      editBoxHeadTitle.setAttribute("class", "m-edit-box-title");
      editBoxHeadTitle.textContent = "To apply";
      var editBoxBody = document.createElement("div");
      editBoxBody.setAttribute("class", "m-edit-box-body");
      var editBoxContent = document.createElement("div");
      editBoxContent.setAttribute("class", "m-edit-box-content m-edit-box-content-margin-large");
      var editBoxGroup1 = document.createElement("div");
      editBoxGroup1.setAttribute("class", "m-edit-box-item-max m-edit-box-group");
      var editBoxGroup2 = document.createElement("div");
      editBoxGroup2.setAttribute("class", "m-edit-box-item-max m-edit-box-group m-input-block-quick-value-button-group");

      var Count = document.createElement("p");
      Count.setAttribute("class", "m-edit-box-text js-input-block-quick-value");
      Count.textContent = 0;

      editBoxContent.appendChild(_makeEditBoxItem("total", Count));
      editBoxContent.appendChild(_makeEditBoxItem("button-large", _makeButton(quickValueControl, false, "icon-close", 0, "large")));

      editBoxGroup1.appendChild(_makeEditBoxItem("button-large", _makeButton(quickValueControl, 1, "icon-add", 1, false)));
      editBoxGroup1.appendChild(_makeEditBoxItem("button-large", _makeButton(quickValueControl, 2, "icon-add", 2, false)));
      editBoxGroup1.appendChild(_makeEditBoxItem("button-large", _makeButton(quickValueControl, 3, "icon-add", 3, false)));
      editBoxGroup1.appendChild(_makeEditBoxItem("button-large", _makeButton(quickValueControl, 5, "icon-add", 5, false)));
      editBoxGroup1.appendChild(_makeEditBoxItem("button-large", _makeButton(quickValueControl, 10, "icon-add", 10, false)));
      editBoxGroup1.appendChild(_makeEditBoxItem("button-large", _makeButton(quickValueControl, 20, "icon-add", 20, false)));
      editBoxGroup2.appendChild(_makeEditBoxItem("button-large", _makeButton(quickValueControl, 1, "icon-remove", -1, false)));
      editBoxGroup2.appendChild(_makeEditBoxItem("button-large", _makeButton(quickValueControl, 2, "icon-remove", -2, false)));
      editBoxGroup2.appendChild(_makeEditBoxItem("button-large", _makeButton(quickValueControl, 3, "icon-remove", -3, false)));
      editBoxGroup2.appendChild(_makeEditBoxItem("button-large", _makeButton(quickValueControl, 5, "icon-remove", -5, false)));
      editBoxGroup2.appendChild(_makeEditBoxItem("button-large", _makeButton(quickValueControl, 10, "icon-remove", -10, false)));
      editBoxGroup2.appendChild(_makeEditBoxItem("button-large", _makeButton(quickValueControl, 20, "icon-remove", -20, false)));

      editBoxContent.appendChild(editBoxGroup1);
      editBoxContent.appendChild(editBoxGroup2);
      editBoxBody.appendChild(editBoxContent);
      editBoxHead.appendChild(editBoxHeadTitle);
      editBox.appendChild(editBoxHead);
      editBox.appendChild(editBoxBody);

      quickValueControl.appendChild(editBox);

      return quickValueControl;
    };

    var modalContent = _create_quickValueModal();

    modal.render(heading, modalContent, "Apply", function() {
      var defenceSection = helper.e(".js-section-defense");
      _update_value(this, change);
      sheet.storeCharacters();
      render(helper.e("#" + this.dataset.valueTarget));
      totalBlock.render();
      display.clear(defenceSection);
      display.render(defenceSection);
    }.bind(modalContent));
  };

  function _increment(button) {
    var increment = button.dataset.increment;
    var target = button.dataset.incrementTarget;
    var inputBlockField = helper.e("#" + target);
    var inputBlock = helper.getClosest(inputBlockField, ".js-input-block");
    var path = inputBlockField.dataset.path;
    var oldValue = parseInt(helper.getObject(sheet.getCharacter(), path), 10);
    if (isNaN(oldValue)) {
      oldValue = 0;
    };
    var newValue;
    if (increment == "addition") {
      newValue = oldValue + 1;
    } else if (increment == "subtraction") {
      newValue = oldValue - 1;
    } else if (increment == "clear") {
      newValue = 0;
    };

    if (path == "defense.hp.damage" || path == "defense.hp.temp" || path == "defense.hp.non_lethal_damage") {
      if (newValue <= 0) {
        helper.setObject(sheet.getCharacter(), path, "");
      } else {
        helper.setObject(sheet.getCharacter(), path, newValue);
      };
    } else {
      if (newValue == 0) {
        helper.setObject(sheet.getCharacter(), path, "");
      } else {
        helper.setObject(sheet.getCharacter(), path, newValue);
      };
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
        _update_quickValueControls(this);
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
    // input.addEventListener("keydown", function(event) {
    //   // enter
    //   if (event.keyCode == 13) {
    //     if (input.value == "restore all") {
    //       sheet.all();
    //     };
    //     _focus(this);
    //   };
    // }, false);
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
