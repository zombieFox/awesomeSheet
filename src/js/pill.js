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
    if (defaultOptions.object != null) {

    } else {
      if (defaultOptions.input) {
        var name = defaultOptions.input.value;
        var pillBlock = helper.getClosest(defaultOptions.input, ".js-pill-block");
        var pillBlockOptions = helper.makeObject(pillBlock.dataset.pillBlockOptions);
        var newIndex = _get_pillCount(pillBlockOptions.path);
        var newObject = _create_pillObject({
          name: defaultOptions.input.value
        });
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

  function _create_spellButton(name) {
    var spellButton = document.createElement("button");
    spellButton.setAttribute("class", "m-pill-item button button-medium");
    spellButton.setAttribute("type", "button");
    spellButton.setAttribute("tabindex", "1");
    // if (_spellState.get(level) == "remove") {
    //   helper.addClass(spellButton, "button-primary");
    // } else if (_spellState.get(level) == "prepare" || _spellState.get(level) == "unprepare" || _spellState.get(level) == "cast" || _spellState.get(level) == "active") {
    //   helper.addClass(spellButton, "button-secondary");
    // };
    var nameSpan = document.createElement("span");
    nameSpan.setAttribute("class", "button-text");
    nameSpan.textContent = name;
    spellButton.appendChild(nameSpan);
    return spellButton;
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
      pillBlockArea.appendChild(_create_spellButton(arrayItem.name));
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