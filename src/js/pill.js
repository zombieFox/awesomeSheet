var pill = (function() {

  var _timer_onEnterAction = null;

  var _pillState = (function() {
    var pillState = {
      feats: null
    };
    var get = function(type) {
      return pillState[type];
    };
    var set = function(type, state) {
      if (pillState[type] == null || pillState[type] != state) {
        pillState[type] = state;
      } else {
        pillState[type] = null;
      };
      console.log(type, pillState[type]);
    };
    // exposed methods
    return {
      set: set,
      get: get
    };
  })();

  function _create_pillObecjtState() {
    return {
      state: null
    };
  };

  function bind() {
    _bind_all_pillBlock();
    _bind_all_pillControl();
  };

  function _bind_all_pillControl() {
    var all_pillControl = helper.eA(".js-pill-control");
    for (var i = 0; i < all_pillControl.length; i++) {
      all_pillControl[i].addEventListener("click", function() {
        _pillControl(this);
      }, false);
    };
  };

  function _bind_all_pillBlock(pillBlock) {
    if (pillBlock) {
      _bind_pillBlock(pillBlock);
    } else {
      var all_pillBlock = helper.eA(".js-pill-block");
      for (var i = 0; i < all_pillBlock.length; i++) {
        _bind_pillBlock(all_pillBlock[i]);
      };
    };
  };

  function _bind_pillBlock(pillBlock) {
    var pillBlockField = pillBlock.querySelector(".js-pill-block-field");
    pillBlockField.addEventListener("keypress", function(event) {
      if (event.keyCode == 13) {
        clearTimeout(_timer_onEnterAction);
        _timer_onEnterAction = setTimeout(_onEnterAction, 100, this, event);
      };
    }, false);
  };

  function _onEnterAction(input, event) {
    add({
      input: input
    });
    sheet.store();
  };

  function _get_pillCount(type) {
    if (type == "feats") {
      return helper.getObject({
        object: sheet.get(),
        path: "statistics.abilities.feats.all"
      }).length;
    };
  };

  function _pillControl(button) {
    var options = helper.makeObject(button.dataset.pillControlOptions);
    if (options.action == "changeState") {
      _pillMode(button);
    } else if (options.action == "reset") {
      // _resetAllSpells(button);
    } else if (options.action == "sort") {
      // _sortAllSpells(button);
    };
  };

  function _pillMode(button) {
    var options = helper.makeObject(button.dataset.pillControlOptions);
    var pillBlock = helper.getClosest(button, ".js-pill-block");
    var pillBlockOptions = helper.makeObject(pillBlock.dataset.pillBlockOptions);
    if (_get_pillCount(pillBlockOptions.type) > 0) {
      _update_pillState(button);
      _update_pillControl(button);
      _update_pillItem(button);
      _update_pillBlockArea(button);
    } else {
      _pillState.set(options.type, null);
      _update_pillControl(button);
      _reset_pillControl(pillBlock);
    };
  };

  function _update_pillState(button) {
    var options = helper.makeObject(button.dataset.pillControlOptions);
    _pillState.set(options.type, options.state);
  };

  function _update_pillControl(button) {
    var options = helper.makeObject(button.dataset.pillControlOptions);
    var pillBlock = helper.getClosest(button, ".js-pill-block");
    var all_pillControl = pillBlock.querySelectorAll(".js-pill-control");
    var _resetAllControl = function() {
      all_pillControl.forEach(function(arrayItem) {
        if (arrayItem.classList.contains("button-primary")) {
          helper.removeClass(arrayItem, "button-primary");
        };
        if (arrayItem.classList.contains("button-secondary")) {
          helper.removeClass(arrayItem, "button-secondary");
        };
      });
    };
    var _activateControl = function() {
      if (_pillState.get(options.type) == "remove") {
        helper.addClass(button, "button-primary");
      } else if (_pillState.get(options.type) == null) {
        helper.removeClass(button, "button-primary");
      };
    };
    if (_pillState.get(options.type) != null) {
      _resetAllControl();
      _activateControl();
    } else {
      _resetAllControl();
    };
  };

  function _update_pillItem(button) {
    var pillBlock = helper.getClosest(button, ".js-pill-block");
    var pillBlockOptions = helper.makeObject(pillBlock.dataset.pillBlockOptions);
    var all_pillItem = pillBlock.querySelectorAll(".js-pill-item");
    var _resetAllPill = function() {
      all_pillItem.forEach(function(arrayItem) {
        if (arrayItem.classList.contains("button-primary")) {
          helper.removeClass(arrayItem, "button-primary");
        };
      });
    };
    var _activateAllPill = function() {
      all_pillItem.forEach(function(arrayItem) {
        helper.addClass(arrayItem, "button-primary");
      });
    };
    if (_pillState.get(pillBlockOptions.type) == "remove") {
      _activateAllPill();
    } else {
      _resetAllPill();
    };
  };

  function _update_pillBlockArea(button) {
    var pillBlock = helper.getClosest(button, ".js-pill-block");
    var pillBlockOptions = helper.makeObject(pillBlock.dataset.pillBlockOptions);
    var pillBlockArea = pillBlock.querySelector(".js-pill-block-area");
    var _resetPillArea = function() {
      helper.removeClass(pillBlockArea, "is-state-remove");
    };
    var _activatePillArea = function() {
      helper.addClass(pillBlockArea, "is-state-remove");
    };
    if (_pillState.get(pillBlockOptions.type) == "remove") {
      _activatePillArea();
    } else {
      _resetPillArea();
    };
  };

  function _reset_pillControl(pillBlock) {
    var spellBlockOptions = helper.makeObject(pillBlock.dataset.spellBlockOptions);
    var all_pillControl = pillBlock.querySelectorAll(".js-pill-control");
    for (var i = 0; i < all_pillControl.length; i++) {
      helper.removeClass(all_pillControl[i], "button-primary");
    };
  };

  function add(options) {
    var defaultOptions = {
      object: null,
      input: null
    };
    if (options) {
      defaultOptions = helper.applyOptions(defaultOptions, options);
    };
    if (defaultOptions.input != null) {
      var pillBlock = helper.getClosest(defaultOptions.input, ".js-pill-block");
      var pillBlockArea = pillBlock.querySelector(".js-pill-block-area");
      var pillBlockOptions = helper.makeObject(pillBlock.dataset.pillBlockOptions);
      var newIndex = _get_pillCount(pillBlockOptions.type);
      var newPillObject;
      if (defaultOptions.object != null) {
        newPillObject = _create_pillObject({
          name: defaultOptions.object.name,
          index: defaultOptions.object.index
        });
      } else {
        newPillObject = _create_pillObject({
          name: defaultOptions.input.value,
          index: false
        });
      };
      if (newPillObject != undefined) {
        helper.setObject({
          object: sheet.get(),
          path: pillBlockOptions.path + "[" + newIndex + "]",
          newValue: newPillObject
        });
        defaultOptions.input.value = "";
        _render_pillItem({
          pillBlockArea: pillBlockArea,
          pillObject: newPillObject,
          type: pillBlockOptions.type,
          newPill: true
        });
      };
    };
  };

  function clear(pillBlock) {
    if (pillBlock) {
      var pillBlockArea = pillBlock.querySelector(".js-pill-block-area");
      while (pillBlockArea.lastChild) {
        pillBlockArea.removeChild(pillBlockArea.lastChild);
      };
    } else {
      var all_pillBlockArea = helper.eA(".js-pill-block-area");
      for (var i = 0; i < all_pillBlockArea.length; i++) {
        while (all_pillBlockArea[i].lastChild) {
          all_pillBlockArea[i].removeChild(all_pillBlockArea[i].lastChild);
        };
      };
    };
  };

  function _bind_pillButton(button) {
    button.addEventListener("click", function() {
      _pillButton(this);
    }, false);
  };

  function _pillButton(button) {
    var options = helper.makeObject(button.dataset.pillButtonOptions);
    var pillBlock = helper.getClosest(button, ".js-pill-block");
    var pillBlockOptions = helper.makeObject(pillBlock.dataset.pillBlockOptions);
    _update_pillObjects(button);
    if (_get_pillCount(pillBlockOptions.type) <= 0) {
      _pillState.set(pillBlockOptions.type, null);
      _reset_pillControl(pillBlock);
      _update_pillBlockArea(pillBlock);
    };
  };

  function _update_pillObjects(button) {
    var options = helper.makeObject(button.dataset.pillButtonOptions);
    var pillBlock = helper.getClosest(button, ".js-pill-block");
    var pillBlockOptions = helper.makeObject(pillBlock.dataset.pillBlockOptions);
    var all_pillObjects = helper.getObject({
      object: sheet.get(),
      path: pillBlockOptions.path
    });
    if (_pillState.get(pillBlockOptions.type) == null) {
      console.log("null");

      var pillObject = helper.getObject({
        object: sheet.get(),
        path: pillBlockOptions.path + "[" + options.index + "]"
      });
      console.log(data.get({
        type: pillBlockOptions.type,
        index: pillObject.index
      }));
      modal.render();

    } else if (_pillState.get(pillBlockOptions.type) == "remove") {
      console.log("remove");

      var pillObject = JSON.parse(JSON.stringify(helper.getObject({
        object: sheet.get(),
        path: pillBlockOptions.path + "[" + options.index + "]"
      })));

      _store_lastRemovedPill({
        type: pillBlockOptions.type,
        path: pillBlockOptions.path,
        index: options.index,
        object: pillObject
      });

      helper.getObject({
        object: sheet.get(),
        path: pillBlockOptions.path
      }).splice(options.index, 1);

      snack.render({
        message: helper.truncate(pillObject.name, 40, true) + " removed.",
        button: "Undo",
        action: _restore_lastRemovedSpell,
        destroyDelay: 9999998000
      });

      sheet.store();
      clear(pillBlock);
      render(pillBlock);
    };
  };

  function _store_lastRemovedPill(options) {
    var defaultOptions = {
      type: null,
      path: null,
      index: null,
      object: null
    };
    if (options) {
      defaultOptions = helper.applyOptions(defaultOptions, options);
    };
    var object = {
      type: defaultOptions.type,
      path: defaultOptions.path,
      index: defaultOptions.index,
      object: defaultOptions.object
    };
    helper.store("lastRemovedPill", JSON.stringify(object));
  };

  function _restore_lastRemovedSpell() {
    var undoData = JSON.parse(helper.read("lastRemovedPill"));
    _restore_pillObject({
      type: undoData.type,
      path: undoData.path,
      index: undoData.index,
      object: undoData.object
    });
    _remove_lastRemovedPill();
  };

  function _restore_pillObject(options) {
    var defaultOptions = {
      type: null,
      path: null,
      index: null,
      object: null
    };
    if (options) {
      defaultOptions = helper.applyOptions(defaultOptions, options);
    };
    helper.getObject({
      object: sheet.get(),
      path: defaultOptions.path
    }).splice(defaultOptions.index, 0, defaultOptions.object);
    clear(helper.e(".js-pill-block-feats-" + defaultOptions.type));
    render(helper.e(".js-pill-block-feats-" + defaultOptions.type));
    sheet.store();
  };

  function _remove_lastRemovedPill() {
    helper.remove("lastRemovedPill");
  };

  function render(pillBlock) {
    if (pillBlock) {
      _render_pillBlock(pillBlock);
    } else {
      var all_pillBlock = helper.eA(".js-pill-block");
      for (var i = 0; i < all_pillBlock.length; i++) {
        _render_pillBlock(all_pillBlock[i]);
        var state = _create_pillObecjtState(all_pillBlock[i]);
      };
    };
  };

  function _render_pillBlock(pillBlock) {
    var options = helper.makeObject(pillBlock.dataset.pillBlockOptions);
    var pillBlockArea = pillBlock.querySelector(".js-pill-block-area");
    var all_pillObjects = helper.getObject({
      object: sheet.get(),
      path: options.path
    });
    all_pillObjects.forEach(function(arrayItem, index) {
      _render_pillItem({
        pillBlockArea: pillBlockArea,
        pillObject: arrayItem,
        index: index,
        type: options.type
      });
    });
  };

  function _render_pillItem(options) {
    var defaultOptions = {
      pillBlockArea: null,
      pillObject: null,
      index: null,
      type: null,
      newPill: false
    };
    if (options) {
      defaultOptions = helper.applyOptions(defaultOptions, options);
    };
    var pillButton = _create_pillButton({
      name: defaultOptions.pillObject.name,
      index: defaultOptions.index,
      type: defaultOptions.type,
      newPill: defaultOptions.newPill
    });
    _bind_pillButton(pillButton);
    defaultOptions.pillBlockArea.appendChild(pillButton);
  };

  function _create_pillButton(options) {
    var defaultOptions = {
      name: null,
      index: null,
      type: null,
      newPill: false
    };
    if (options) {
      defaultOptions = helper.applyOptions(defaultOptions, options);
    };
    var pillitem = document.createElement("button");
    pillitem.setAttribute("class", "m-pill-item button button-medium js-pill-item");
    pillitem.setAttribute("type", "button");
    pillitem.setAttribute("tabindex", "1");
    pillitem.setAttribute("data-pill-button-options", "index:#" + defaultOptions.index);
    var pillitemRemove = document.createElement("span");
    pillitemRemove.setAttribute("class", "m-pill-item-remove");
    var pillitemRemoveIcon = document.createElement("span");
    pillitemRemoveIcon.setAttribute("class", "icon-close");
    pillitemRemove.appendChild(pillitemRemoveIcon);

    if (_pillState.get(options.type) == "remove") {
      helper.addClass(pillitem, "button-primary");
    };
    if (defaultOptions.newPill) {
      var pillFlash = document.createElement("span");
      pillFlash.setAttribute("class", "m-pill-flash");
      pillFlash.addEventListener("animationend", function(event, elapsed) {
        this.remove();
      }.bind(pillFlash), false);
      pillitem.appendChild(pillFlash);
    };
    var pillItemName = document.createElement("span");
    pillItemName.setAttribute("class", "m-pill-item-name button-text");
    pillItemName.textContent = defaultOptions.name;
    pillitem.appendChild(pillItemName);
    pillitem.appendChild(pillitemRemove);
    return pillitem;
  };

  function _create_pillObject(options) {
    var defaultOptions = {
      name: "",
      note: "",
      index: false
    };
    if (options) {
      defaultOptions = helper.applyOptions(defaultOptions, options);
    };
    return {
      name: defaultOptions.name,
      note: defaultOptions.note,
      index: defaultOptions.index
    };
  };

  // exposed methods
  return {
    clear: clear,
    bind: bind,
    render: render,
    add: add
  };

})();
