var pill = (function() {

  function _create_pillObecjtState() {
    return {
      state: null
    };
  };

  function bind() {

  };

  function clear() {

  };

  function _create_spellButton(name) {
    var spellButton = document.createElement("button");
    spellButton.setAttribute("class", " button button-medium js-spell");
    spellButton.setAttribute("type", "button");
    spellButton.setAttribute("tabindex", "1");
    if (_spellState.get(level) == "remove") {
      helper.addClass(spellButton, "button-primary");
    } else if (_spellState.get(level) == "prepare" || _spellState.get(level) == "unprepare" || _spellState.get(level) == "cast" || _spellState.get(level) == "active") {
      helper.addClass(spellButton, "button-secondary");
    };
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
    pillBlock.state = null;
    console.log(pillBlock);
    console.log(pillBlock.state);
    // var options = helper.makeObject(pillBlock.dataset.pillBlockOptions);
    // var pillBlockArea = pillBlock.querySelector(".js-pill-block-area");
    // var all_pillObjects = helper.getObject({
    //   object: sheet.get(),
    //   path: options.path
    // });
    // console.log(all_pillObjects);
  };

  function add() {

  };

  // exposed methods
  return {
    clear: clear,
    bind: bind,
    render: render,
    add: add
  };

})();