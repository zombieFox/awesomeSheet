(function() {

  // --------------------------------------------------------------------------
  // consumable block
  // --------------------------------------------------------------------------

  // limit input count to 0 to 100
  function minMaxCountLimit(element) {
    if (element.value <= 0) {
      element.value = "";
    } else if (element.value >= 100) {
      element.value = 100;
    };
  };

  // add consumable checks on total increase
  function addConsumableChecks(element) {
    var clone = helper.getClosest(element, ".clone");
    var consumableCounts = clone.querySelector(".consumable-counts");
    var consumableTotal_value = parseInt(element.value, 10) || 0;
    var checkGroup = consumableCounts.querySelector(".check-group");
    var all_checks = consumableCounts.querySelectorAll(".check").length;
    // make check group
    function addCheckGroup() {
      var checkGroup = document.createElement("div");
      checkGroup.setAttribute("class", "check-group");
      consumableCounts.appendChild(checkGroup);
      // consumableCounts.insertBefore(checkGroup, consumableCounts.firstChild);
    };
    // if no check group is present and the input value is more than 0 make a check group
    if (!checkGroup) {
      if (consumableTotal_value > 0) {
        addCheckGroup();
      };
    };
    // while all the checks in the block is less than the consumable value add a check to the check group
    while (all_checks < consumableTotal_value) {
      var checkGroup = consumableCounts.lastChild;
      // if check group children is more than or equal to 10 make a new check group and make that the new target
      if (checkGroup.children.length >= 10) {
        addCheckGroup();
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
    toggleConsumableChecks(element);
  };

  // toggle consumable check when used value is changed
  function toggleConsumableChecks(element) {
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

  function update_consumableTotal() {
    var all_consumableTotal = helper.eA(".consumable-total");
    for (var i = 0; i < all_consumableTotal.length; i++) {
      addConsumableChecks(all_consumableTotal[i]);
    };
  };

  function update_consumableUsed() {
    var all_consumableUsed = helper.eA(".consumable-used");
    for (var i = 0; i < all_consumableUsed.length; i++) {
      toggleConsumableChecks(all_consumableUsed[i]);
    };
  };

  // --------------------------------------------------------------------------
  // clone 
  // --------------------------------------------------------------------------



  // --------------------------------------------------------------------------
  // hidable block
  // --------------------------------------------------------------------------

  function addListenerTo_all_hidableBlock() {
    var all_hidableBlock = helper.eA(".hidable-block");
    for (var i = 0; i < all_hidableBlock.length; i++) {
      var hidableToggle = all_hidableBlock[i].querySelector(".hidable-toggle");
      hidableToggle.addEventListener("click", function() {
        toggleAllHidable(this);
      }, false);
    };
  };

  function toggleAllHidable(element) {
    var buttonLable = element.textContent;
    var icon = element.querySelector(".icon");
    var text = element.querySelector(".text");
    var hidableBlock = helper.getClosest(element, ".hidable-block");
    var all_hidable = hidableBlock.querySelectorAll(".hidable");
    var all_hidableOnEmptyInput = hidableBlock.querySelectorAll(".hidable-on-empty-input");
    var all_hideableOnEmptyTextarea = hidableBlock.querySelectorAll(".hidable-on-empty-textarea");
    // if hide button data all hidden is true remove all hidden classes and change date hidden to false
    if (hidableBlock.dataset.allHidden == "true") {
      for (var i = 0; i < all_hidable.length; i++) {
        helper.removeClass(all_hidable[i], "hidden");
      };
      for (var i = 0; i < all_hidableOnEmptyInput.length; i++) {
        helper.removeClass(all_hidableOnEmptyInput[i], "hidden");
      };
      for (var i = 0; i < all_hideableOnEmptyTextarea.length; i++) {
        helper.removeClass(all_hideableOnEmptyTextarea[i], "hidden");
      };
      hidableBlock.dataset.allHidden = "false";
      helper.toggleClass(icon, "icon-unfold-less");
      helper.toggleClass(icon, "icon-unfold-more");
      text.textContent = "Hide";
      // if hide button data all hidden is false loop through all hidable and hide all with empty inputs and change date hidden to true 
    } else if (hidableBlock.dataset.allHidden == "false") {
      for (var i = 0; i < all_hidableOnEmptyInput.length; i++) {
        var input = all_hidableOnEmptyInput[i].querySelector(".input-field");
        if (input.value == null || input.value == "") {
          helper.addClass(all_hidableOnEmptyInput[i], "hidden");
        };
      };
      for (var i = 0; i < all_hidable.length; i++) {
        helper.addClass(all_hidable[i], "hidden");
      };
      for (var i = 0; i < all_hideableOnEmptyTextarea.length; i++) {
        var textarea = all_hideableOnEmptyTextarea[i].querySelector(".textarea");
        if (textarea.textContent == null || textarea.textContent == "") {
          helper.addClass(all_hideableOnEmptyTextarea[i], "hidden");
        };
      };
      hidableBlock.dataset.allHidden = "true";
      helper.toggleClass(icon, "icon-unfold-less");
      helper.toggleClass(icon, "icon-unfold-more");
      text.textContent = "Show";
    };
  };

  // --------------------------------------------------------------------------
  // spells
  // --------------------------------------------------------------------------


  // --------------------------------------------------------------------------
  // run on page load
  // --------------------------------------------------------------------------




  // read_cloneBlocks();
  // read_stats();
  // read_spells();
  // read_textarea();
  // read_inputBlock();
  // update_all_spellKnownItem();
  // update_scoreModifiers();
  // update_inputTotalBlock();
  update_consumableTotal();
  update_consumableUsed();
  // addListenerTo_all_spellKnownItem();
  // addListenerTo_all_stats();
  // addListenerTo_all_addSpell();
  // addListenerTo_all_addSpell_input();
  // addListenerTo_prepareSpell();
  // addListenerTo_unprepareSpell();
  // addListenerTo_castSpell();
  // addListenerTo_activeSpell();
  // addListenerTo_removeSpell();
  addListenerTo_all_hidableBlock();
  // addListenerTo_all_textareas();
  // addListenerTo_all_inputBlock();
  // addListenerTo_all_cloneBlock();

})();
