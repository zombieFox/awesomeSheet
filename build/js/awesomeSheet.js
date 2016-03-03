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

  // add listners to all clone block controls
  function addListenerTo_all_cloneBlock() {
    var consumablesCloneAdd = helper.e(".consumables .clone-add");
    var consumablesCloneRemove = helper.e(".consumables .clone-remove");
    var attacksCloneAdd = helper.e(".attacks .clone-add");
    var attacksCloneRemove = helper.e(".attacks .clone-remove");
    consumablesCloneAdd.addEventListener("click", function() {
      cloneBlockAdd(".consumables");
      snack.render("Consumables block added.", false, false);
    }, false);
    consumablesCloneRemove.addEventListener("click", function() {
      changeCloneState(".consumables");
    }, false);
    attacksCloneAdd.addEventListener("click", function() {
      cloneBlockAdd(".attacks");
      snack.render("Attack block added.", false, false);
    }, false);
    attacksCloneRemove.addEventListener("click", function() {
      changeCloneState(".attacks");
    }, false);
  };

  // clone a block where needed
  function cloneBlockAdd(blockToClone) {
    var cloneBlock = helper.e(blockToClone);
    var cloneControls = cloneBlock.querySelector(".clone-controls");
    var cloneTarget = cloneBlock.querySelector(".clone-target");
    var all_clone = cloneTarget.querySelectorAll(".clone");
    var all_clone_count = all_clone.length;
    // advance count
    all_clone_count++;
    // log count in local storage
    if (blockToClone == ".consumables") {
      sheet.currentCharacter.clone["consumable_count"] = all_clone_count;
      sheet.storeCharacter();
    };
    if (blockToClone == ".attacks") {
      sheet.currentCharacter.clone["attack_count"] = all_clone_count;
      sheet.storeCharacter();
    };
    // create div wrapper element
    var newNode = document.createElement("div");
    newNode.setAttribute("class", "clone");
    newNode.setAttribute("data-clone-count", all_clone_count);
    // insert div
    if (all_clone_count <= 99) {
      cloneTarget.appendChild(newNode);
      // what to go inside the clone
      var newConsumable =
        '<div class="row">' +
        '<div class="col-xs-8">' +
        '<div class="input-block">' +
        '<label class="input-label" for="input-consumable-' + all_clone_count + '">Item</label>' +
        '<input class="input-field" id="input-consumable-' + all_clone_count + '" type="text" tabindex="3">' +
        '</div>' +
        '</div>' +
        '<div class="col-xs-4">' +
        '<div class="row no-gutter">' +
        '<div class="col-xs-6">' +
        '<div class="input-block">' +
        '<label class="input-label" for="input-consumable-total-' + all_clone_count + '">Total</label>' +
        '<input class="input-field consumable-total" id="input-consumable-total-' + all_clone_count + '" type="number" tabindex="3">' +
        '</div>' +
        '</div>' +
        '<div class="col-xs-6">' +
        '<div class="input-block">' +
        '<label class="input-label" for="input-consumable-used-' + all_clone_count + '">Used</label>' +
        '<input class="input-field consumable-used" id="input-consumable-used-' + all_clone_count + '" type="number" tabindex="3">' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="col-xs-12">' +
        '<div class="consumable-counts clearfix"></div>' +
        '<div class="clone-delete-controls">' +
        '<button class="button button-primary button-small button-icon" id="remove-consumable-' + all_clone_count + '" tabindex="3"><span class="icon-close"></span> Remove</button>' +
        '</div>' +
        '</div>' +
        '</div>';
      var newAttack =
        '<div class="row no-gutter">' +
        '<div class="col-xs-6">' +
        '<div class="input-block">' +
        '<label class="input-label" for="input-weapon-' + all_clone_count + '">Weapon</label>' +
        '<input class="input-field" id="input-weapon-' + all_clone_count + '" type="text" tabindex="3">' +
        '</div>' +
        '</div>' +
        '<div class="col-xs-3">' +
        '<div class="input-block">' +
        '<label class="input-label" for="input-attack-' + all_clone_count + '">Attack</label>' +
        '<input class="input-field" id="input-attack-' + all_clone_count + '" type="text" tabindex="3">' +
        '</div>' +
        '</div>' +
        '<div class="col-xs-3">' +
        '<div class="input-block">' +
        '<label class="input-label" for="input-damage-' + all_clone_count + '">Damage</label>' +
        '<input class="input-field" id="input-damage-' + all_clone_count + '" type="text" tabindex="3">' +
        '</div>' +
        '</div>' +
        '<div class="col-xs-4">' +
        '<div class="input-block">' +
        '<label class="input-label" for="input-range-' + all_clone_count + '">Range</label>' +
        '<input class="input-field" id="input-range-' + all_clone_count + '" type="text" tabindex="3">' +
        '</div>' +
        '</div>' +
        '<div class="col-xs-4">' +
        '<div class="input-block">' +
        '<label class="input-label" for="input-ammo-' + all_clone_count + '">Ammo</label>' +
        '<input class="input-field" id="input-ammo-' + all_clone_count + '" type="text" tabindex="3">' +
        '</div>' +
        '</div>' +
        '<div class="col-xs-4">' +
        '<div class="input-block">' +
        '<label class="input-label" for="input-critical-' + all_clone_count + '">Critical</label>' +
        '<input class="input-field" id="input-critical-' + all_clone_count + '" type="text" tabindex="3">' +
        '</div>' +
        '</div>' +
        '<div class="col-xs-12">' +
        '<div class="clone-delete-controls">' +
        '<button class="button button-primary button-small button-icon" id="remove-attack-' + all_clone_count + '" tabindex="3"><span class="icon-close"></span> Remove</button>' +
        '</div>' +
        '</div>' +
        '</div>';
      // add div contents
      if (blockToClone == ".consumables") {
        newNode.innerHTML = newConsumable;
      };
      if (blockToClone == ".attacks") {
        newNode.innerHTML = newAttack;
      };
    };
    // add listners to new elements
    function addListenerTo_newNode_input_focus(element) {
      if (element) {
        element.addEventListener("input", function() {
          inputBlock.input_focus(element);
        }, false);
        element.addEventListener("focus", function() {
          inputBlock.input_focus(element);
        }, false);
        element.addEventListener("blur", function() {
          inputBlock.input_focus(element);
        }, false);
      };
    };

    function addListenerTo_newNode_input_store(element) {
      if (element) {
        element.addEventListener("input", function() {
          store_inputBlock(element);
        }, false);
        element.addEventListener("focus", function() {
          store_inputBlock(element);
        }, false);
        element.addEventListener("blur", function() {
          store_inputBlock(element);
        }, false);
      };
    };

    function addListenerTo_newNode_input_minMax(element) {
      if (element) {
        element.addEventListener("input", function() {
          minMaxCountLimit(element);
        }, false);
        element.addEventListener("focus", function() {
          minMaxCountLimit(element);
        }, false);
        element.addEventListener("blur", function() {
          minMaxCountLimit(element);
        }, false);
      };
    };

    function addListenerTo_newNode_input_checks(element) {
      if (element) {
        element.addEventListener("input", function() {
          addConsumableChecks(element);
        }, false);
        element.addEventListener("focus", function() {
          addConsumableChecks(element);
        }, false);
        element.addEventListener("blur", function() {
          addConsumableChecks(element);
        }, false);
      };
    };

    function addListenerTo_newNode_input_toggleChecks(element) {
      if (element) {
        element.addEventListener("input", function() {
          toggleConsumableChecks(element);
        }, false);
        element.addEventListener("focus", function() {
          toggleConsumableChecks(element);
        }, false);
        element.addEventListener("blur", function() {
          toggleConsumableChecks(element);
        }, false);
      };
    };

    function addListenerTo_newNode_consumableRemove_button(element) {
      if (element) {
        element.addEventListener("click", function() {
          cloneBlockRemove(element, blockToClone);
        }, false);
      };
    };
    if (blockToClone == ".consumables") {
      // find inputs
      if (newNode.querySelector("#input-consumable-" + all_clone_count)) {
        var newNode_consumableName_input = newNode.querySelector("#input-consumable-" + all_clone_count);
      };
      if (newNode.querySelector("#input-consumable-total-" + all_clone_count)) {
        var newNode_consumableTotal_input = newNode.querySelector("#input-consumable-total-" + all_clone_count);
      };
      if (newNode.querySelector("#input-consumable-used-" + all_clone_count)) {
        var newNode_consumableUsed_input = newNode.querySelector("#input-consumable-used-" + all_clone_count);
      };
      if (newNode.querySelector("#remove-consumable-" + all_clone_count)) {
        var newNode_consumableRemove_button = newNode.querySelector("#remove-consumable-" + all_clone_count);
      };
      // add listners to consumable name
      addListenerTo_newNode_input_focus(newNode_consumableName_input);
      addListenerTo_newNode_input_store(newNode_consumableName_input);
      // add listners to consumable total
      addListenerTo_newNode_input_focus(newNode_consumableTotal_input);
      addListenerTo_newNode_input_store(newNode_consumableTotal_input);
      addListenerTo_newNode_input_minMax(newNode_consumableTotal_input);
      addListenerTo_newNode_input_checks(newNode_consumableTotal_input);
      // add listners to consumable used
      addListenerTo_newNode_input_focus(newNode_consumableUsed_input);
      addListenerTo_newNode_input_store(newNode_consumableUsed_input);
      addListenerTo_newNode_input_minMax(newNode_consumableUsed_input);
      addListenerTo_newNode_input_toggleChecks(newNode_consumableUsed_input);
      // add listners to remove button
      addListenerTo_newNode_consumableRemove_button(newNode_consumableRemove_button);
    };
    if (blockToClone == ".attacks") {
      // find inputs
      if (newNode.querySelector("#input-weapon-" + all_clone_count)) {
        var newNode_attackWeapon_input = newNode.querySelector("#input-weapon-" + all_clone_count);
      };
      if (newNode.querySelector("#input-attack-" + all_clone_count)) {
        var newNode_attackAttack_input = newNode.querySelector("#input-attack-" + all_clone_count);
      };
      if (newNode.querySelector("#input-range-" + all_clone_count)) {
        var newNode_attackRange_input = newNode.querySelector("#input-range-" + all_clone_count);
      };
      if (newNode.querySelector("#input-ammo-" + all_clone_count)) {
        var newNode_attackAmmo_input = newNode.querySelector("#input-ammo-" + all_clone_count);
      };
      if (newNode.querySelector("#input-damage-" + all_clone_count)) {
        var newNode_attackDamage_input = newNode.querySelector("#input-damage-" + all_clone_count);
      };
      if (newNode.querySelector("#input-critical-" + all_clone_count)) {
        var newNode_attackCritical_input = newNode.querySelector("#input-critical-" + all_clone_count);
      };
      if (newNode.querySelector("#remove-attack-" + all_clone_count)) {
        var newNode_consumableRemove_button = newNode.querySelector("#remove-attack-" + all_clone_count);
      };
      // add listners to attack weapon
      addListenerTo_newNode_input_focus(newNode_attackWeapon_input);
      addListenerTo_newNode_input_store(newNode_attackWeapon_input);
      // add listners to attack attack
      addListenerTo_newNode_input_focus(newNode_attackAttack_input);
      addListenerTo_newNode_input_store(newNode_attackAttack_input);
      // add listners to attack range
      addListenerTo_newNode_input_focus(newNode_attackRange_input);
      addListenerTo_newNode_input_store(newNode_attackRange_input);
      // add listners to attack ammo
      addListenerTo_newNode_input_focus(newNode_attackAmmo_input);
      addListenerTo_newNode_input_store(newNode_attackAmmo_input);
      // add listners to attack damage
      addListenerTo_newNode_input_focus(newNode_attackDamage_input);
      addListenerTo_newNode_input_store(newNode_attackDamage_input);
      // add listners to attack critical
      addListenerTo_newNode_input_focus(newNode_attackCritical_input);
      addListenerTo_newNode_input_store(newNode_attackCritical_input);
      // add listners to remove button
      addListenerTo_newNode_consumableRemove_button(newNode_consumableRemove_button);
    };
  };

  function cloneBlockRemove(element, blockToRemove) {
    var cloneBlock = helper.getClosest(element, ".clone-block");
    var cloneTarget = cloneBlock.querySelector(".clone-target");
    var cloneToRemove = helper.getClosest(element, ".clone");
    var cloneToRemove_input = cloneToRemove.querySelectorAll("input");
    // remove block
    cloneToRemove.remove();
    // remove clone inputs from current character
    for (var i = 0; i < cloneToRemove_input.length; i++) {
      // if (sheet.currentCharacter[cloneToRemove_input[i].id]) {
      delete sheet.currentCharacter[cloneToRemove_input[i].id];
      // };
    };
    // recount remaining blocks and length
    var all_clone = cloneTarget.querySelectorAll(".clone");
    var all_clone_count = all_clone.length;
    // if clone count is 0 restore clone block state or start recounting and renumbering clone blocks
    if (all_clone_count == 0) {
      changeCloneState(blockToRemove);
    } else {
      // renumber remaining block count
      for (var i = 0; i < all_clone_count; i++) {
        // start a count
        var newCount = i + 1;
        // renumber the clone
        all_clone[i].dataset.cloneCount = newCount;
      };
      // recount remaining blocks and length
      all_clone = cloneTarget.querySelectorAll(".clone");
      all_clone_count = all_clone.length;
      // all clone blocks are reprocessed
      for (var i = 0; i < all_clone_count; i++) {
        // start a count
        var newCount = i + 1;
        var all_inputs = all_clone[i].querySelectorAll("input");
        var all_label = all_clone[i].querySelectorAll("label");
        // change all input ids
        for (var q = 0; q < all_inputs.length; q++) {
          // remove local strage for this input
          // remove_inputBlock(all_inputs[q]);
          // make new id
          var currentId = all_inputs[q].id;
          var currentId_noNumber = currentId.replace(/\d+/g, '');
          var newId = currentId_noNumber + newCount;
          all_inputs[q].id = newId;
          // store local storage for this input
          store_inputBlock(all_inputs[q]);
        };
        // change all label for attributes
        for (var x = 0; x < all_label.length; x++) {
          var currentFor = all_label[x].htmlFor;
          var currentFor_noNumber = currentFor.replace(/\d+/g, '');
          var newFor = currentFor_noNumber + newCount;
          all_label[x].htmlFor = newFor;
        };
      };
    };
    // set or remove clone counts
    if (blockToRemove == ".consumables") {
      sheet.currentCharacter.clone["consumable_count"] = all_clone_count;
      sheet.storeCharacter();
    };
    if (blockToRemove == ".attacks") {
      sheet.currentCharacter.clone["attack_count"] = all_clone_count;
      sheet.storeCharacter();
    };
    // if count is 0 or less remove count
    if (all_clone_count <= 0) {
      if (blockToRemove == ".consumables") {
        delete sheet.currentCharacter.clone["consumable_count"];
        sheet.storeCharacter();
      };
      if (blockToRemove == ".attacks") {
        delete sheet.currentCharacter.clone["attack_count"];
        sheet.storeCharacter();
      };
    };
    // snack bar message
    if (blockToRemove == ".consumables") {
      snack.render("Consumables block removed.", false, false);
    };
    if (blockToRemove == ".attacks") {
      snack.render("Attack block removed.", false, false);
    };
  };

  function changeCloneState(cloneBlockType) {
    var cloneBlock = helper.e(cloneBlockType);
    var cloneControls = cloneBlock.querySelector(".clone-controls");
    var cloneRemove = cloneControls.querySelector(".clone-remove");
    var cloneDeleteControls = cloneBlock.querySelectorAll(".clone-delete-controls");
    var cloneTarget = cloneBlock.querySelector(".clone-target");
    var all_clone = cloneTarget.querySelectorAll(".clone");
    var all_clone_count = all_clone.length;
    // change clone remove button
    helper.toggleClass(cloneRemove, "active");
    helper.toggleClass(cloneRemove, "button-primary");
    helper.toggleClass(cloneRemove, "button-secondary");
    // change clone block state
    if (cloneBlock.dataset.deleteCloneState == "true") {
      helper.removeClass(cloneBlock, "delete-state");
      cloneBlock.dataset.deleteCloneState = "false";
    } else if (cloneBlock.dataset.deleteCloneState == "false") {
      helper.addClass(cloneBlock, "delete-state");
      cloneBlock.dataset.deleteCloneState = "true";
    };
    // if clone count us 0 remove restore all classes to normal
    if (all_clone_count == 0) {
      helper.removeClass(cloneBlock, "delete-state");
      cloneBlock.dataset.deleteCloneState = "false";
      helper.removeClass(cloneRemove, "active");
      helper.removeClass(cloneRemove, "button-primary");
      helper.addClass(cloneRemove, "button-secondary");
    };
  };

  function read_cloneBlocks() {
    var consumables_cloneCount = sheet.currentCharacter.clone["consumable_count"];
    var attacks_cloneCount = sheet.currentCharacter.clone["attack_count"];
    for (var i = 0; i < consumables_cloneCount; i++) {
      cloneBlockAdd(".consumables");
    };
    for (var i = 0; i < attacks_cloneCount; i++) {
      cloneBlockAdd(".attacks");
    };
  };

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

  read_cloneBlocks();



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
  addListenerTo_all_cloneBlock();

})();
