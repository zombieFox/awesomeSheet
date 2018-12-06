var wealth = (function() {

  var _timer_render = null;

  function bind() {
    var equipmentWealthIncludeItem = helper.e(".js-equipment-wealth-include-item");
    equipmentWealthIncludeItem.addEventListener("change", function() {
      clearTimeout(_timer_render);
      _timer_render = setTimeout(function() {
        render();
        textBlock.render();
      }, 350, this);
    }, false);
  };

  function _render_wealth() {
    var _create_goldTotal = function(wealth) {
      var includeItem = helper.getObject({
        object: sheet.get(),
        path: "equipment.wealth.include_item"
      });
      var wealthInGp = [];
      if (includeItem) {
        wealthInGp.push(helper.getObject({
          object: sheet.get(),
          path: "equipment.item.value.current"
        }));
      };
      if ("platinum" in wealth) {
        var platinum = wealth.platinum * 10;
        if (!isNaN(platinum) && platinum != "") {
          wealthInGp.push(platinum);
        } else {
          wealthInGp.push(0);
        };
      };
      if ("gold" in wealth) {
        var gold = wealth.gold;
        if (!isNaN(gold) && gold != "") {
          wealthInGp.push(gold);
        } else {
          wealthInGp.push(0);
        };
      };
      if ("silver" in wealth) {
        var silver = wealth.silver / 10;
        if (!isNaN(silver) && silver != "") {
          wealthInGp.push(silver);
        } else {
          wealthInGp.push(0);
        };
      };
      if ("copper" in wealth) {
        var copper = wealth.copper / 100;
        if (!isNaN(copper) && copper != "") {
          wealthInGp.push(copper);
        } else {
          wealthInGp.push(0);
        };
      };
      var grandTotal;
      if (wealthInGp.length > 0) {
        grandTotal = wealthInGp.reduce(function(a, b) {
          return a + b;
        });
      } else {
        grandTotal = 0;
      };
      return grandTotal;
    };
    var total = _create_goldTotal(helper.getObject({
      object: sheet.get(),
      path: "equipment.wealth"
    }));
    helper.setObject({
      object: sheet.get(),
      path: "equipment.wealth.total",
      newValue: total
    });
    sheet.store();
  };

  function render() {
    clearTimeout(_timer_render);
    _timer_render = setTimeout(function() {
      _render_wealth();
      textBlock.render();
    }, 350, this);
  };

  // exposed methods
  return {
    bind: bind,
    render: render,
  };

})();
