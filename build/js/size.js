var size = (function() {

  var changeSizeTimer = null;

  function bind(input) {
    var size = helper.e(".js-size");
    var selectBlockDropdown = size.querySelector(".js-select-block-dropdown");
    selectBlockDropdown.addEventListener("change", function() {
      clearTimeout(changeSizeTimer);
      changeSizeTimer = setTimeout(update, 300, this);
    }, false);
  };

  function update() {
    render();
    totalBlock.render();
    textBlock.render();
    if (display.state()) {
      display.clear();
      display.render();
    };
  };

  function render() {
    var size = helper.e(".js-size");
    var selectBlockDropdown = size.querySelector(".js-select-block-dropdown");
    var index = selectBlockDropdown.selectedIndex;
    var object = _create_sizeObject(index);
    helper.setObject({
      object: sheet.get(),
      path: "basics.size.size_modifier",
      newValue: object.size_modifier
    });
    helper.setObject({
      object: sheet.get(),
      path: "basics.size.special_size_modifier",
      newValue: object.special_size_modifier
    });
    helper.setObject({
      object: sheet.get(),
      path: "basics.size.size_modifier_fly",
      newValue: object.size_modifier_fly
    });
    helper.setObject({
      object: sheet.get(),
      path: "basics.size.size_modifier_stealth",
      newValue: object.size_modifier_stealth
    });
    sheet.store();
  };

  function _create_sizeObject(index) {
    var allSize = {};
    var all_size_modifier = [0, 8, 4, 2, 1, 0, -1, -2, -4, -8];
    var all_special_size_modifier = [0, -8, -4, -2, -1, 0, 1, 2, 4, 8];
    var all_size_modifier_fly = [0, 8, 6, 4, 2, 0, -2, -4, -6, -8];
    var all_size_modifier_stealth = [0, 16, 12, 8, 4, 0, -4, -8, -12, -16];
    allSize.size_modifier = all_size_modifier[index];
    allSize.special_size_modifier = all_special_size_modifier[index];
    allSize.size_modifier_fly = all_size_modifier_fly[index];
    allSize.size_modifier_stealth = all_size_modifier_stealth[index];
    return allSize;
  };

  function _create_encumbranceObject(str) {};

  // exposed methods
  return {
    bind: bind,
    render: render
  };

})();
