var consumable = (function() {

  // add consumable checks on total increase
  function _addConsumableChecks(element) {
    var clone = helper.getClosest(element, ".clone");
    var consumableCounts = clone.querySelector(".consumable-counts");
    var consumableTotal_value = parseInt(element.value, 10) || 0;
    var checkGroup = consumableCounts.querySelector(".check-group");
    var all_checks = consumableCounts.querySelectorAll(".check").length;
    // make check group
    function _addCheckGroup() {
      var checkGroup = document.createElement("div");
      checkGroup.setAttribute("class", "check-group");
      consumableCounts.appendChild(checkGroup);
      // consumableCounts.insertBefore(checkGroup, consumableCounts.firstChild);
    };
    // if no check group is present and the input value is more than 0 make a check group
    if (!checkGroup) {
      if (consumableTotal_value > 0) {
        _addCheckGroup();
      };
    };
    // while all the checks in the block is less than the consumable value add a check to the check group
    while (all_checks < consumableTotal_value) {
      var checkGroup = consumableCounts.lastChild;
      // if check group children is more than or equal to 10 make a new check group and make that the new target
      if (checkGroup.children.length >= 10) {
        _addCheckGroup();
        checkGroup = consumableCounts.lastChild;
      };
      // make a check
      var check = document.createElement("span");
      check.setAttribute("class", "check");
      // add check to check group
      checkGroup.appendChild(check);
      all_checks++;
    };
    // while all the checks in the block is more than the consumable value remove a check to the check group
    while (all_checks > consumableTotal_value) {
      var checkGroup = consumableCounts.lastChild;
      // if check group children is more than 0 remove a check
      if (checkGroup.children.length > 0) {
        checkGroup.removeChild(checkGroup.lastChild);
      };
      // if check group children is less that or equal to 0 remove check group and set new check group as tatget  if it exists
      if (checkGroup.children.length <= 0) {
        checkGroup.remove();
        if (all_checks > 0) {
          checkGroup = consumableCounts.querySelector(".check-group");
        };
      };
      all_checks--;
    };
    _toggleConsumableChecks(element);
  };

  // toggle consumable check when used value is changed
  function _toggleConsumableChecks(element) {
    var clone = helper.getClosest(element, ".clone");
    var consumableCounts = clone.querySelector(".consumable-counts");
    var consumableUsed = clone.querySelector(".consumable-used");
    var consumableUsed_value = parseInt(consumableUsed.value, 10) || 0;
    var all_checks = consumableCounts.querySelectorAll(".check");
    var remainingUses = all_checks.length - consumableUsed_value;
    // add used class to all checks
    for (var i = 0; i < all_checks.length; i++) {
      helper.addClass(all_checks[i], "used");
    };
    // remove used class from remaing checks
    for (var i = 0; i < remainingUses; i++) {
      helper.removeClass(all_checks[i], "used");
    };
  };

  function render() {
    var all_totals = helper.e(".clone-block.consumable").querySelectorAll(".consumable-total");
    for (var i = 0; i < all_totals.length; i++) {
      _addConsumableChecks(all_totals[i]);
    };
  };

  function update() {
    var all_used = helper.e(".clone-block.consumable").querySelectorAll(".consumable-used");
    for (var i = 0; i < all_used.length; i++) {
      _toggleConsumableChecks(all_used[i]);
    };
  };

  // exposed methods
  return {
    render: render,
    update: update
  };

})();
