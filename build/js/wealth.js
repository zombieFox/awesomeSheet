var wealth = (function() {

  var changeWealthTimer = null;

  function bind() {
    var equipmentWealthPlatinum = helper.e("#equipment-wealth-platinum");
    var equipmentWealthGold = helper.e("#equipment-wealth-gold");
    var equipmentWealthSilver = helper.e("#equipment-wealth-silver");
    var equipmentWealthCopper = helper.e("#equipment-wealth-copper");
    equipmentWealthPlatinum.addEventListener("input", function() {
      clearTimeout(changeWealthTimer);
      changeWealthTimer = setTimeout(update, 350);
    }, false);
    equipmentWealthGold.addEventListener("input", function() {
      clearTimeout(changeWealthTimer);
      changeWealthTimer = setTimeout(update, 350);
    }, false);
    equipmentWealthSilver.addEventListener("input", function() {
      clearTimeout(changeWealthTimer);
      changeWealthTimer = setTimeout(update, 350);
    }, false);
    equipmentWealthCopper.addEventListener("input", function() {
      clearTimeout(changeWealthTimer);
      changeWealthTimer = setTimeout(update, 350);
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
    var total = _create_goldTotal(helper.getObject(sheet.getCharacter(), "equipment.wealth"));
    helper.setObject(sheet.getCharacter(), "equipment.wealth.total", total);
    sheet.storeCharacters();
  };

  function _create_goldTotal(wealth) {
    var wealthInGp = [];
    if ("platinum" in wealth) {
      var platinum = parseInt(wealth.platinum, 10) * 10;
      if (!isNaN(platinum)) {
        wealthInGp.push(platinum);
      };
    };
    if ("gold" in wealth) {
      var gold = parseInt(wealth.gold, 10);
      if (!isNaN(gold)) {
        wealthInGp.push(gold);
      };
    };
    if ("silver" in wealth) {
      var silver = parseInt(wealth.silver, 10) / 10;
      if (!isNaN(silver)) {
        wealthInGp.push(silver);
      };
    };
    if ("copper" in wealth) {
      var copper = parseInt(wealth.copper, 10) / 100;
      if (!isNaN(copper)) {
        wealthInGp.push(copper);
      };
    };
    var grandTotal;
    if (wealthInGp.length > 0) {
      grandTotal = wealthInGp.reduce(function(a, b) {
        return a + b;
      });
      grandTotal = parseFloat(grandTotal).toFixed(2);
    } else {
      grandTotal = 0;
    };
    return grandTotal;
  };

  // exposed methods
  return {
    bind: bind,
    update: update,
    render: render,
  };

})();
