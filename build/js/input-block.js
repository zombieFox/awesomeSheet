var inputBlock = (function() {

  var _timer_store = null;
  var _timer_updateNav = null;
  var _timer_delayWealth = null;

  function bind(inputBlock) {
    if (inputBlock) {
      _bind_inputBlock(inputBlock);
    } else {
      _bind_all_inputBlock();
      _bind_all_inputBlockIncrement();
      _bind_all_inputBlockAggregate();
      _bind_all_inputBlockAggregateControl();
      _bind_all_inputBlockAggregateClear();
      _bind_all_inputBlockQuickValue();
      _bind_name();
    };
  };

  function _bind_all_inputBlock() {
    var all_inputBlock = helper.eA(".js-input-block");
    for (var i = 0; i < all_inputBlock.length; i++) {
      var options = helper.makeObject(all_inputBlock[i].dataset.inputBlockOptions);
      if (!options.clone) {
        _bind_inputBlock(all_inputBlock[i]);
      };
    };
  };

  function _bind_inputBlock(inputBlock) {
    var input = inputBlock.querySelector(".js-input-block-field");
    if (input) {
      input.addEventListener("input", function() {
        clearTimeout(_timer_store);
        _timer_store = setTimeout(delayStoreUpdate, 300, this);
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

  function _bind_all_inputBlockIncrement() {
    var all_inputBlockIncrement = helper.eA(".js-input-block-increment");
    for (var i = 0; i < all_inputBlockIncrement.length; i++) {
      var options = helper.makeObject(all_inputBlockIncrement[i].dataset.inputBlockIncrementOptions);
      if (!options.clone) {
        bind_inputBlockIncrement(all_inputBlockIncrement[i]);
      };
    };
  };

  function bind_inputBlockIncrement(inputBlockIncrement) {
    inputBlockIncrement.addEventListener("click", function(event) {
      _increment(this, event);
      exp.render();
      wealth.render();
      totalBlock.render();
      textBlock.render();
      sheet.store();
    }, false);
  };

  function _bind_all_inputBlockAggregate() {
    var all_inputBlockAggregate = helper.eA(".js-input-block-aggregate");
    for (var i = 0; i < all_inputBlockAggregate.length; i++) {
      _bind_inputBlockAggregate(all_inputBlockAggregate[i]);
    };
  };

  function _bind_inputBlockAggregate(inputBlockAggregate) {
    var input = inputBlockAggregate.querySelector(".js-input-block-field");
    if (input) {
      input.addEventListener("keydown", function(event) {
        // if enter
        if (event.keyCode == 13) {
          _render_aggregate(this);
          exp.render();
          wealth.render();
          totalBlock.render();
          textBlock.render();
          sheet.store();
        };
      }, false);
    };
  };

  function _bind_all_inputBlockAggregateControl() {
    var all_inputBlockAggregateControl = helper.eA(".js-input-block-aggregate-control");
    for (var i = 0; i < all_inputBlockAggregateControl.length; i++) {
      _bind_inputBlockAggregateControl(all_inputBlockAggregateControl[i]);
    };
  };

  function _bind_inputBlockAggregateControl(inputBlockAggregateControl) {
    if (inputBlockAggregateControl) {
      inputBlockAggregateControl.addEventListener("click", function() {
        _render_aggregateControl(this);
        exp.render();
        wealth.render();
        totalBlock.render();
        textBlock.render();
        sheet.store();
      }, false);
    };
  };

  function _bind_all_inputBlockAggregateClear() {
    var all_inputBlockAggregateClear = helper.eA(".js-input-block-aggregate-clear");
    for (var i = 0; i < all_inputBlockAggregateClear.length; i++) {
      _bind_inputBlockAggregateClear(all_inputBlockAggregateClear[i]);
    };
  };

  function _bind_inputBlockAggregateClear(inputBlockAggregateClear) {
    if (inputBlockAggregateClear) {
      inputBlockAggregateClear.addEventListener("click", function() {
        _render_aggregateClear(this);
      }, false);
    };
  };

  function _bind_all_inputBlockQuickValue() {
    var all_inputBlockQuickValues = helper.eA(".js-input-block-quick-value");
    for (var i = 0; i < all_inputBlockQuickValues.length; i++) {
      _bind_inputBlockQuickValue(all_inputBlockQuickValues[i]);
    };
  };

  function _bind_inputBlockQuickValue(inputBlockQuickValues) {
    if (inputBlockQuickValues) {
      inputBlockQuickValues.addEventListener("click", function() {
        _render_quickValueControls(this);
        page.update();
      }, false);
    };
  };

  function _bind_name() {
    var inputBlock = helper.e(".js-basics-character-name");
    var input = inputBlock.querySelector(".js-input-block-field");
    input.addEventListener("input", function() {
      clearTimeout(_timer_updateNav);
      _timer_updateNav = setTimeout(characterSelect.update, 300, this);
    }, false);
  };

  function bind_classLevel(inputBlock) {
    var input = inputBlock.querySelector(".js-input-block-field");
    input.addEventListener("input", function() {
      clearTimeout(_timer_updateNav);
      _timer_updateNav = setTimeout(characterSelect.update, 300, this);
    }, false);
  };

  function bind_wealth(inputBlock) {
    var input = inputBlock.querySelector(".js-input-block-field");
    input.addEventListener("input", function() {
      clearTimeout(_timer_delayWealth);
      _timer_delayWealth = setTimeout(function() {
        wealth.render();
        textBlock.render();
      }, 300, this);
    }, false);
  };

  function _store(element) {
    var inputBlock = helper.getClosest(element, ".js-input-block");
    var inputBlockOptions = helper.makeObject(inputBlock.dataset.inputBlockOptions);
    var newData = element.value;
    if (inputBlockOptions.type == "integer") {
      newData = parseInt(newData, 10);
      if (isNaN(newData)) {
        newData = "";
      };
    } else if (inputBlockOptions.type == "float") {
      newData = parseFloat(newData);
      if (isNaN(newData)) {
        newData = "";
      };
    };
    if (inputBlockOptions.path) {
      helper.setObject({
        object: sheet.get(),
        path: inputBlockOptions.path,
        newValue: newData
      });
    };
  };

  function delayStoreUpdate(element) {
    _store(element);
    exp.render();
    wealth.render();
    totalBlock.render();
    textBlock.render();
    sheet.store();
    display.clear();
    display.render();
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

  function _render_inputBlock(inputBlock) {
    var inputBlockField = inputBlock.querySelector(".js-input-block-field");
    var options = helper.makeObject(inputBlock.dataset.inputBlockOptions);
    var data;
    if (options.path) {
      data = helper.getObject({
        object: sheet.get(),
        path: options.path
      });
      inputBlockField.value = data;
    };
  };

  function _render_aggregate(input) {
    var inputBlockAggregate = helper.getClosest(input, ".js-input-block-aggregate");
    var options = helper.makeObject(inputBlockAggregate.dataset.inputBlockAggregateOptions);
    var valueToAggregate = parseInt(input.value.replace(/,/g, ""), 10);
    // if the value in the input is a number
    if (!isNaN(valueToAggregate)) {
      _aggregate({
        path: options.path,
        action: options.action,
        value: valueToAggregate,
        snackMessage: options.snackMessage
      });
      input.value = "";
      var eventObject = {
        aggregate_value: valueToAggregate
      };
      events.store(options.eventType, eventObject);
    };
  };

  function _render_aggregateControl(button) {
    var options = helper.makeObject(button.dataset.inputBlockAggregateOptions);
    var inputBlockField = helper.e("#" + options.target);
    var inputBlock = helper.getClosest(inputBlockField, ".js-input-block");
    var inputBlockOptions = helper.makeObject(inputBlock.dataset.inputBlockAggregateOptions);
    var valueToAggregate = parseInt(inputBlockField.value.replace(/,/g, ""), 10);
    // if the value in the input is a number
    if (!isNaN(valueToAggregate)) {
      _aggregate({
        path: inputBlockOptions.path,
        action: options.action,
        value: valueToAggregate,
        snackMessage: inputBlockOptions.snackMessage
      });
      inputBlockField.value = "";
      var eventObject = {
        aggregate_value: valueToAggregate
      };
      events.store(inputBlockOptions.eventType, eventObject);
    };
  };

  function _render_aggregateClear(button) {
    var options = helper.makeObject(button.dataset.inputBlockAggregateOptions);
    var inputBlockField = helper.e("#" + options.target);
    var inputBlock = helper.getClosest(inputBlockField, ".js-input-block");
    var inputBlockOptions = helper.makeObject(inputBlock.dataset.inputBlockAggregateOptions);
    var foundValue = false;
    var _checkForValue = function() {
      var value = helper.getObject({
        object: sheet.get(),
        path: inputBlockOptions.path
      });
      if (value != "") {
        foundValue = true;
      };
    };
    var _makeEvent = function() {
      var type = button.dataset.eventType;
      var note;
      if (inputBlockOptions.eventType == "xp") {
        note = "EXP cleared";
      } else if (inputBlockOptions.eventType == "platinum") {
        note = "PP cleared";
      } else if (inputBlockOptions.eventType == "gold") {
        note = "GP cleared";
      } else if (inputBlockOptions.eventType == "silver") {
        note = "SP cleared";
      } else if (inputBlockOptions.eventType == "copper") {
        note = "CP cleared";
      };
      var eventObject = {
        note: note
      };
      events.store(inputBlockOptions.eventType, eventObject);
    };
    var _clearValue = function() {
      _aggregateClear({
        path: inputBlockOptions.path,
        action: options.action,
        snackMessage: options.snackMessage
      });
      inputBlockField.value = "";
      _makeEvent();
      exp.render();
      wealth.render();
      totalBlock.render();
      textBlock.render();
      sheet.store();
    };
    _checkForValue();
    if (foundValue) {
      prompt.render({
        heading: options.promptHeading,
        message: options.promptMessage,
        actionText: "Clear",
        action: _clearValue
      });
    } else {
      snack.render({
        message: "Nothing to clear."
      });
    };
  };

  function _aggregateClear(options) {
    var defaultOptions = {
      path: null,
      action: null,
      snackMessage: null
    };
    if (options) {
      defaultOptions = helper.applyOptions(defaultOptions, options);
    };
    _aggregate({
      path: defaultOptions.path,
      action: defaultOptions.action,
      snackMessage: defaultOptions.snackMessage
    });
  };

  function _aggregate(options) {
    var defaultOptions = {
      path: null,
      action: null,
      value: null,
      snackMessage: null
    };
    if (options) {
      defaultOptions = helper.applyOptions(defaultOptions, options);
    };
    var oldData;
    var newData;
    var undoData;

    var _store_lastAggregate = function(path, oldData) {
      var object = {
        path: path,
        oldData: oldData
      };
      helper.store("lastAggregate", JSON.stringify(object));
    };

    var _restore_lastAggregate = function() {
      events.undo();
      var undoObject = JSON.parse(helper.read("lastAggregate"));
      helper.setObject({
        object: sheet.get(),
        path: undoObject.path,
        newValue: undoObject.oldData
      });
      exp.render();
      wealth.render();
      totalBlock.render();
      textBlock.render();
      sheet.store();
      _clear_lastRemovedAggregate();
    };

    var _clear_lastRemovedAggregate = function() {
      helper.remove("lastAggregate");
    };

    var _store_undoData = function(oldData) {
      if (oldData == undefined || isNaN(oldData)) {
        oldData = "";
      };
      undoData = oldData;
    };

    var _get_oldData = function() {
      oldData = parseInt(helper.getObject({
        object: sheet.get(),
        path: defaultOptions.path
      }), 10);
      _store_undoData(oldData);
      if (isNaN(oldData)) {
        oldData = 0;
      };
    };

    var _aggregateData = function() {
      if (defaultOptions.action == "aggregate") {
        newData = oldData + defaultOptions.value;
        if (defaultOptions.value >= 0) {
          defaultOptions.snackMessage = "+" + defaultOptions.value.toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          }) + " " + defaultOptions.snackMessage;
        } else {
          defaultOptions.snackMessage = defaultOptions.value.toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          }) + " " + defaultOptions.snackMessage;
        };
      } else if (defaultOptions.action == "clear") {
        newData = "";
      };
    };

    var _store_data = function() {
      helper.setObject({
        object: sheet.get(),
        path: defaultOptions.path,
        newValue: newData
      });
      _store_lastAggregate(defaultOptions.path, undoData);
      snack.render({
        message: defaultOptions.snackMessage,
        button: "Undo",
        action: _restore_lastAggregate,
        destroyDelay: 8000
      });
    };

    _get_oldData();
    _aggregateData();
    _store_data();
  };

  function _render_quickValueControls(button) {
    var options = helper.makeObject(button.dataset.inputBlockQuickValueOptions);
    var inputBlockField = helper.e("#" + options.target);
    var inputBlock = helper.getClosest(inputBlockField, ".js-input-block");
    var inputBlockOptions = helper.makeObject(inputBlock.dataset.inputBlockOptions);
    var newQuickValue = 0;
    var _store_data = function() {
      var oldData = helper.getObject({
        object: sheet.get(),
        path: inputBlockOptions.path
      });
      if (oldData == "") {
        oldData = 0;
      };
      if (options.action == "addition") {
        newQuickValue = oldData + newQuickValue;
      } else if (options.action == "subtraction") {
        newQuickValue = oldData - newQuickValue;
      };
      if (newQuickValue < inputBlockOptions.minimum) {
        newQuickValue = inputBlockOptions.minimum;
      };
      if (newQuickValue == 0) {
        newQuickValue = "";
      };
      // if negative healing is applied
      if (inputBlockOptions.path == "defense.hp.damage" && options.action == "subtraction" && newQuickValue <= 0) {
        // console.log("negative healing found | stored", newQuickValue);
        newQuickValue = "";
      };
      helper.setObject({
        object: sheet.get(),
        path: inputBlockOptions.path,
        newValue: newQuickValue
      });
    };
    var _hold_data = function(value) {
      if (value == "clear") {
        newQuickValue = 0;
      } else {
        newQuickValue = newQuickValue + value;
      };
    };
    var _render_count = function(total) {
      total.textContent = newQuickValue;
    };
    var _render_button = function(text, icon, value, size, total) {
      var button = document.createElement("button");
      if (size == "large") {
        button.setAttribute("class", "button button-icon button-large");
      } else if (size == "medium") {
        button.setAttribute("class", "button button-icon");
      } else if (size == "small") {
        button.setAttribute("class", "button button-icon button-small");
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
        _hold_data(value);
        _render_count(total);
      }, false);
      return button;
    };
    var _render_editBoxItem = function(size, child) {
      var editBoxItem = document.createElement("div");
      editBoxItem.setAttribute("class", "m-edit-box-item-" + size);
      if (child) {
        editBoxItem.appendChild(child);
      };
      return editBoxItem;
    };
    var _render_quickValueModal = function() {
      var quickValueControl = document.createElement("div");
      quickValueControl.setAttribute("class", "m-input-block-quick-value");

      var editBox = document.createElement("div");
      editBox.setAttribute("class", "m-edit-box");
      var editBoxBody = document.createElement("div");
      editBoxBody.setAttribute("class", "m-edit-box-body");
      var editBoxBodyMessage = document.createElement("p");
      editBoxBodyMessage.textContent = options.modalMessage;
      var editBoxContent = document.createElement("div");
      editBoxContent.setAttribute("class", "m-edit-box-content m-edit-box-content-margin-large");
      var editBoxGroup = document.createElement("div");
      editBoxGroup.setAttribute("class", "m-edit-box-item-100 m-edit-box-group");
      var buttonGroup1 = document.createElement("div");
      buttonGroup1.setAttribute("class", "m-input-block-quick-value-button-group button-group button-group-line u-no-margin");
      var buttonGroup2 = document.createElement("div");
      buttonGroup2.setAttribute("class", "m-input-block-quick-value-button-group button-group button-group-line u-no-margin");

      var quickValueTotal = document.createElement("p");
      quickValueTotal.setAttribute("class", "m-edit-box-total js-input-block-quick-value");
      quickValueTotal.textContent = 0;

      var clearButton = document.createElement("button");
      clearButton.setAttribute("class", "button button-icon button-large button-slim u-inline-with-input");
      var clearButtonIcon = document.createElement("span");
      clearButtonIcon.setAttribute("class", "icon-close");
      clearButton.appendChild(clearButtonIcon);
      clearButton.addEventListener("click", function() {
        _hold_data("clear");
        _render_count(quickValueTotal);
      }, false);

      editBoxGroup.appendChild(_render_editBoxItem("total", quickValueTotal));
      editBoxGroup.appendChild(_render_editBoxItem("button-lg", clearButton));

      buttonGroup1.appendChild(_render_button(1, "icon-add", 1, "large", quickValueTotal));
      buttonGroup1.appendChild(_render_button(2, "icon-add", 2, "large", quickValueTotal));
      buttonGroup1.appendChild(_render_button(3, "icon-add", 3, "large", quickValueTotal));
      buttonGroup1.appendChild(_render_button(5, "icon-add", 5, "large", quickValueTotal));
      buttonGroup1.appendChild(_render_button(10, "icon-add", 10, "large", quickValueTotal));
      buttonGroup1.appendChild(_render_button(20, "icon-add", 20, "large", quickValueTotal));
      buttonGroup2.appendChild(_render_button(1, "icon-remove", -1, "large", quickValueTotal));
      buttonGroup2.appendChild(_render_button(2, "icon-remove", -2, "large", quickValueTotal));
      buttonGroup2.appendChild(_render_button(3, "icon-remove", -3, "large", quickValueTotal));
      buttonGroup2.appendChild(_render_button(5, "icon-remove", -5, "large", quickValueTotal));
      buttonGroup2.appendChild(_render_button(10, "icon-remove", -10, "large", quickValueTotal));
      buttonGroup2.appendChild(_render_button(20, "icon-remove", -20, "large", quickValueTotal));

      editBoxContent.appendChild(_render_editBoxItem("100", editBoxBodyMessage));
      editBoxContent.appendChild(editBoxGroup);
      editBoxContent.appendChild(_render_editBoxItem("100", buttonGroup1));
      editBoxContent.appendChild(_render_editBoxItem("100", buttonGroup2));
      editBoxBody.appendChild(editBoxContent);
      editBox.appendChild(editBoxBody);

      quickValueControl.appendChild(editBox);

      return quickValueControl;
    };
    var modalContent = _render_quickValueModal();
    var modalAction = function() {
      _store_data();
      render(inputBlock);
      totalBlock.render();
      textBlock.render();
      display.clear();
      display.render();
      sheet.store();
    };
    modal.render({
      heading: options.modalHeading,
      content: modalContent,
      action: modalAction,
      actionText: "Apply",
      size: "medium"
    });
  };

  function _increment(button, event) {
    var options = helper.makeObject(button.dataset.inputBlockIncrementOptions);
    var inputBlockField = helper.e("#" + options.target);
    var inputBlock = helper.getClosest(inputBlockField, ".js-input-block");
    var inputBlockOptions = helper.makeObject(inputBlock.dataset.inputBlockOptions);
    var shift = event.shiftKey;
    var oldData;
    var newData;

    var _store_data = function() {
      if (inputBlockOptions.path) {
        helper.setObject({
          path: inputBlockOptions.path,
          object: sheet.get(),
          newValue: newData
        });
      };
    };

    var _get_oldData = function() {
      if (inputBlockOptions.path) {
        oldData = helper.getObject({
          object: sheet.get(),
          path: inputBlockOptions.path
        });
      };
      if (isNaN(oldData) || typeof oldData == "string" || oldData == "") {
        oldData = 0;
      };
    };

    var _change = function() {
      if (options.action == "addition") {
        if (shift) {
          newData = oldData + 10;
        } else {
          newData = oldData + 1;
        };
      } else if (options.action == "subtraction") {
        if (shift) {
          newData = oldData - 10;
        } else {
          newData = oldData - 1;
        };
      };
      if (inputBlockOptions.minimum != null) {
        if (newData < parseInt(inputBlockOptions.minimum, 10)) {
          newData = parseInt(inputBlockOptions.minimum, 10);
        };
      };
      if (inputBlockOptions.noZero) {
        if (newData == 0) {
          newData = "";
        };
      };
    };

    var _clear = function() {
      if (inputBlockOptions.noZero) {
        newData = "";
      } else {
        newData = 0;
      };
      _store_data();
      render(inputBlock);
      exp.render();
      wealth.render();
      totalBlock.render();
      textBlock.render();
      sheet.store();
    };

    var _checkAction = function() {
      _get_oldData();
      if (options.action == "addition" || options.action == "subtraction") {
        _change();
        _store_data();
        render(inputBlock);
      } else if (options.action == "clear") {
        if (oldData == "" || oldData == undefined) {
          snack.render({
            message: "Nothing to clear."
          });
        } else {
          prompt.render({
            heading: options.promptHeading,
            message: options.promptMessage,
            actionText: "Clear",
            cancelText: "Cancel",
            action: _clear
          });
        };
      };
    };

    _checkAction();
  };

  // exposed methods
  return {
    render: render,
    bind: bind,
    bind_classLevel: bind_classLevel,
    bind_wealth: bind_wealth,
    bind_inputBlockIncrement: bind_inputBlockIncrement,
    clear: clear
  };

})();