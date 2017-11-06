var wealth = (function() {

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
      var platinum = wealth.platinum * 10;
      if (!isNaN(platinum)) {
        wealthInGp.push(platinum);
      };
    };
    if ("gold" in wealth) {
      var gold = wealth.gold;
      if (!isNaN(gold)) {
        wealthInGp.push(gold);
      };
    };
    if ("silver" in wealth) {
      var silver = wealth.silver / 10;
      if (!isNaN(silver)) {
        wealthInGp.push(silver);
      };
    };
    if ("copper" in wealth) {
      var copper = wealth.copper / 100;
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
    update: update,
    render: render,
  };

})();
