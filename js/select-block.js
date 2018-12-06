var selectBlock = (function() {

  function _store(element) {
    var selectBlock = helper.getClosest(element, ".js-select-block");
    var selectBlockOptions = helper.makeObject(selectBlock.dataset.selectBlockOptions);
    var selectBlockDropdown = selectBlock.querySelector(".js-select-block-dropdown");
    var newValue = selectBlockDropdown.options[selectBlockDropdown.selectedIndex].value;
    if (selectBlockOptions.path) {
      helper.setObject({
        path: selectBlockOptions.path,
        object: sheet.get(),
        newValue: newValue
      });
    };
  };

  var storeDropdownTimer = null;

  function delayUpdate(element) {
    _store(element);
    sheet.store();
    totalBlock.render();
    textBlock.render();
    display.clear();
    display.render();
  };

  function _focus(element) {
    var selectBlock = helper.getClosest(element, ".js-select-block");
    if (element == document.activeElement) {
      helper.addClass(selectBlock, "is-focus");
    } else {
      helper.removeClass(selectBlock, "is-focus");
    };
  };

  function clear() {
    var all_selectBlock = helper.eA(".js-select-block");
    for (var i = 0; i < all_selectBlock.length; i++) {
      all_selectBlock[i].querySelector(".js-select-block-dropdown").selectedIndex = 0;
    };
  };

  function bind(selectBlock) {
    if (selectBlock) {
      _bind_selectBlock(selectBlock);
    } else {
      var all_selectBlock = helper.eA(".js-select-block");
      for (var i = 0; i < all_selectBlock.length; i++) {
        if (all_selectBlock[i].dataset.clone != "true") {
          _bind_selectBlock(all_selectBlock[i]);
        };
      };
    };
  };

  function _bind_selectBlock(selectBlock) {
    var selectBlockDropdown = selectBlock.querySelector(".js-select-block-dropdown");
    if (selectBlockDropdown) {
      selectBlockDropdown.addEventListener("change", function() {
        clearTimeout(storeDropdownTimer);
        storeDropdownTimer = setTimeout(delayUpdate, 300, this);
      }, false);
      selectBlockDropdown.addEventListener("focus", function() {
        _focus(this);
      }, false);
      selectBlockDropdown.addEventListener("blur", function() {
        _focus(this);
      }, false);
    };
  };

  function _render_selectBlock(selectBlock) {
    var options = helper.makeObject(selectBlock.dataset.selectBlockOptions);
    var selectBlockDropdown = selectBlock.querySelector(".js-select-block-dropdown");
    // var selected = selectBlockDropdown.options.selectedIndex;
    if (options.path) {
      var selection =
        helper.getObject({
          object: sheet.get(),
          path: options.path
        });
      helper.setDropdown(selectBlockDropdown, selection);
    };
  };

  function render(selectBlock) {
    if (all_selectBlock) {
      _render_selectBlock(selectBlock);
    } else {
      var all_selectBlock = helper.eA(".js-select-block");
      for (var i = 0; i < all_selectBlock.length; i++) {
        _render_selectBlock(all_selectBlock[i]);
      };
    };
  };

  // exposed methods
  return {
    render: render,
    bind: bind,
    clear: clear
  };

})();