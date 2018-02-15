var pill = (function() {

  function _create_pillObecjtState() {
    return {
      state: null
    };
  };

  function _create_featObject(options) {
    var defaultOptions = {
      name: null,
      note: "",
      index: false
    };
    if (options) {
      defaultOptions = helper.applyOptions(defaultOptions, options);
    };
    this.name = defaultOptions.name;
    this.note = defaultOptions.note;
    this.index = defaultOptions.index;
  };

  function bind() {

  };

  function clear() {

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
    // console.log(all_pillObjects);
    // console.log(pillBlockArea);
  };

  function add(data) {
    // console.log(data);
    console.log(new _create_featObject({
      name: data.name,
      index: data.index
    }));
  };

  // exposed methods
  return {
    clear: clear,
    bind: bind,
    render: render,
    add: add
  };

})();
