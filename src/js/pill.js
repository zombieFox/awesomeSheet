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

  function _get_pillCount(path) {
    return helper.getObject({
      object: sheet.get(),
      path: path
    }).length;
  };

  function _pillControl(button) {
    var options = helper.makeObject(button.dataset.pillControlOptions);
    if (options.action == "changeState") {
      _update_pillState(button);
      _update_pillControl(button);
      _update_pillItem(button);
    } else if (options.action == "reset") {
      // _resetAllSpells(button);
    } else if (options.action == "sort") {
      // _sortAllSpells(button);
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
      var newIndex = _get_pillCount(pillBlockOptions.path);
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

  function clear() {
    var all_pillBlockArea = helper.eA(".js-pill-block-area");
    for (var i = 0; i < all_pillBlockArea.length; i++) {
      while (all_pillBlockArea[i].lastChild) {
        all_pillBlockArea[i].removeChild(all_pillBlockArea[i].lastChild);
      };
    };
  };

  function _bind_pillButton(button) {
    button.addEventListener("click", function() {
      console.log(data.get({
        type: "feats",
        index: helper.makeObject(this.dataset.pillButtonOptions).index
      }));
    }, false);
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
    all_pillObjects.forEach(function(arrayItem) {
      _render_pillItem({
        pillBlockArea: pillBlockArea,
        pillObject: arrayItem,
        type: options.type
      });
    });
  };

  function _render_pillItem(options) {
    var defaultOptions = {
      pillBlockArea: null,
      pillObject: null,
      type: null,
      newPill: false
    };
    if (options) {
      defaultOptions = helper.applyOptions(defaultOptions, options);
    };
    var pillButton = _create_pillButton({
      name: defaultOptions.pillObject.name,
      index: defaultOptions.pillObject.index,
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
    var pillButton = document.createElement("button");
    pillButton.setAttribute("class", "m-pill-item button button-medium js-pill-item");
    pillButton.setAttribute("type", "button");
    pillButton.setAttribute("tabindex", "1");
    pillButton.setAttribute("data-pill-button-options", "index:#" + defaultOptions.index);
    if (_pillState.get(options.type) == "remove") {
      helper.addClass(pillButton, "button-primary");
    };
    if (defaultOptions.newPill) {
      var pillFlash = document.createElement("span");
      pillFlash.setAttribute("class", "m-pill-flash");
      pillFlash.addEventListener("animationend", function(event, elapsed) {
        this.remove();
      }.bind(pillFlash), false);
      pillButton.appendChild(pillFlash);
    };
    var nameSpan = document.createElement("span");
    nameSpan.setAttribute("class", "button-text");
    nameSpan.textContent = defaultOptions.name;
    pillButton.appendChild(nameSpan);
    return pillButton;
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