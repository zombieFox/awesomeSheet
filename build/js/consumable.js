var consumable = (function() {

  function _render_consumablePercentage(element) {
    var clone = helper.getClosest(element, ".clone");
    var consumableBarPercentage = clone.querySelector(".consumable-bar-percentage");
    var percentageTotal = clone.querySelector(".percentage-total");
    var consumableTotal = clone.querySelector(".consumable-total");
    var consumableUsed = clone.querySelector(".consumable-used");
    var consumableTotal_value = parseInt(consumableTotal.value, 10) || 0;
    var consumableUsed_value = parseInt(consumableUsed.value, 10) || 0;
    var pencentage = ((consumableTotal_value - consumableUsed_value) / consumableTotal_value) * 100;
    consumableBarPercentage.style.width = pencentage + "%";
    percentageTotal.textContent = consumableTotal_value - consumableUsed_value;
    if (consumableUsed_value >= consumableTotal_value) {
      helper.addClass(consumableBarPercentage, "empty");
      consumableBarPercentage.style.width = "0%";
      percentageTotal.textContent = "0";
    } else {
      helper.removeClass(consumableBarPercentage, "empty");
    };
  };

  function render() {
    var all_totals = helper.e(".clone-block.consumable").querySelectorAll(".consumable-total");
    for (var i = 0; i < all_totals.length; i++) {
      // _addConsumableChecks(all_totals[i]);
      _render_consumablePercentage(all_totals[i]);
    };
  };

  function update() {
    var all_used = helper.e(".clone-block.consumable").querySelectorAll(".consumable-used");
    for (var i = 0; i < all_used.length; i++) {
      // _toggleConsumableChecks(all_used[i]);
      _render_consumablePercentage(all_used[i]);
    };
  };

  // exposed methods
  return {
    render: render,
    update: update
  };

})();
