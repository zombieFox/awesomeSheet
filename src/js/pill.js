var pill = (function() {

  var _timer_onEnterAction = null;

  function _create_pillObecjtState() {
    return {
      state: null
    };
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

  function bind() {
    _bind_all_pillBlock();
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
        _timer_onEnterAction = setTimeout(_onEnterAction, 300, this, event);
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

  function add(options) {
    var defaultOptions = {
      object: null,
      input: null
    };
    if (options) {
      defaultOptions = helper.applyOptions(defaultOptions, options);
    };
    var pillBlock = helper.getClosest(defaultOptions.input, ".js-pill-block");
    var pillBlockOptions = helper.makeObject(pillBlock.dataset.pillBlockOptions);
    var newIndex = _get_pillCount(pillBlockOptions.path);
    if (defaultOptions.input != null) {
      if (defaultOptions.object != null) {
        var newObject = _create_pillObject({
          name: defaultOptions.object.name,
          index: defaultOptions.object.index
        });
      } else {
        var name = defaultOptions.input.value;
        var newObject = _create_pillObject({
          name: defaultOptions.input.value
        });
      };
      if (newObject != undefined) {
        helper.setObject({
          object: sheet.get(),
          path: pillBlockOptions.path + "[" + newIndex + "]",
          newValue: newObject
        });
        defaultOptions.input.value = "";
        clear();
        render();
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

  function _create_pillButton(name, index) {
    var pillButton = document.createElement("button");
    pillButton.setAttribute("class", "m-pill-item button button-medium");
    pillButton.setAttribute("type", "button");
    pillButton.setAttribute("tabindex", "1");
    pillButton.setAttribute("data-pill-button-options", "index:#" + index);
    // if (_pillState.get(level) == "remove") {
    //   helper.addClass(pillButton, "button-primary");
    // } else if (_pillState.get(level) == "prepare" || _pillState.get(level) == "unprepare" || _pillState.get(level) == "cast" || _pillState.get(level) == "active") {
    //   helper.addClass(pillButton, "button-secondary");
    // };
    var nameSpan = document.createElement("span");
    nameSpan.setAttribute("class", "button-text");
    nameSpan.textContent = name;
    pillButton.appendChild(nameSpan);
    return pillButton;
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
      var pillButton = _create_pillButton(arrayItem.name, arrayItem.index);
      _bind_pillButton(pillButton);
      pillBlockArea.appendChild(pillButton);
    });
  };

  // exposed methods
  return {
    clear: clear,
    bind: bind,
    render: render,
    add: add
  };

})();
