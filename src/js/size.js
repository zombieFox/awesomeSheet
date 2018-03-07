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
    display.clear();
    display.render();
  };

  function render() {
    var size = helper.e(".js-size");
    var selectBlockDropdown = size.querySelector(".js-select-block-dropdown");
    var index = selectBlockDropdown.selectedIndex;
    var modifier = _create_sizeObject(index);
    helper.setObject({
      object: sheet.get(),
      path: "basics.character.size.modifier.base",
      newValue: modifier.base
    });
    helper.setObject({
      object: sheet.get(),
      path: "basics.character.size.modifier.special",
      newValue: modifier.special
    });
    helper.setObject({
      object: sheet.get(),
      path: "basics.character.size.modifier.fly",
      newValue: modifier.fly
    });
    helper.setObject({
      object: sheet.get(),
      path: "basics.character.size.modifier.stealth",
      newValue: modifier.stealth
    });
    sheet.store();
  };

  function _create_sizeObject(index) {
    var modifier = {};
    var modifierBase = [0, 8, 4, 2, 1, 0, -1, -2, -4, -8];
    var modifierSpecial = [0, -8, -4, -2, -1, 0, 1, 2, 4, 8];
    var modifierFly = [0, 8, 6, 4, 2, 0, -2, -4, -6, -8];
    var modifierStealth = [0, 16, 12, 8, 4, 0, -4, -8, -12, -16];
    modifier.base = modifierBase[index];
    modifier.special = modifierSpecial[index];
    modifier.fly = modifierFly[index];
    modifier.stealth = modifierStealth[index];
    return modifier;
  };

  function _create_encumbranceObject(str) {};

  // exposed methods
  return {
    bind: bind,
    render: render
  };

})();