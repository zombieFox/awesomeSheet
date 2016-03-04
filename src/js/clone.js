var clone = (function() {

  var _bind_cloneControls = (function() {
    var consumablesCloneAdd = helper.e(".consumables .clone-add");
    var consumablesCloneRemove = helper.e(".consumables .clone-remove");
    var attacksCloneAdd = helper.e(".attacks .clone-add");
    var attacksCloneRemove = helper.e(".attacks .clone-remove");
    consumablesCloneAdd.addEventListener("click", function() {
      _render_clone("consumables");
      snack.render("Consumables block added.", false, false);
    }, false);
    consumablesCloneRemove.addEventListener("click", function() {
      changeCloneState("consumables");
    }, false);
    attacksCloneAdd.addEventListener("click", function() {
      _render_clone("attacks");
      snack.render("Attack block added.", false, false);
    }, false);
    attacksCloneRemove.addEventListener("click", function() {
      changeCloneState("attacks");
    }, false);
  })();

  function cloneBlockRemove(element, cloneType) {
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
      changeCloneState(cloneType);
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
    if (cloneType == ".consumables") {
      sheet.currentCharacter.clone["consumable_count"] = all_clone_count;
      sheet.storeCharacter();
    };
    if (cloneType == ".attacks") {
      sheet.currentCharacter.clone["attack_count"] = all_clone_count;
      sheet.storeCharacter();
    };
    // if count is 0 or less remove count
    if (all_clone_count <= 0) {
      if (cloneType == ".consumables") {
        delete sheet.currentCharacter.clone["consumable_count"];
        sheet.storeCharacter();
      };
      if (cloneType == ".attacks") {
        delete sheet.currentCharacter.clone["attack_count"];
        sheet.storeCharacter();
      };
    };
    // snack bar message
    if (cloneType == ".consumables") {
      snack.render("Consumables block removed.", false, false);
    };
    if (cloneType == ".attacks") {
      snack.render("Attack block removed.", false, false);
    };
  };

  function changeCloneState(cloneType) {
    var cloneBlock = helper.e("." + cloneType);
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

  // clone a block where needed
  function _render_clone(cloneType) {
    var cloneBlock = helper.e("." + cloneType);
    // var cloneControls = cloneBlock.querySelector(".clone-controls");
    var cloneTarget = cloneBlock.querySelector(".clone-target");
    var all_clone = cloneTarget.querySelectorAll(".clone");
    var all_clone_count = all_clone.length;
    // advance count
    all_clone_count++;
    // log count in local storage
    // if (cloneType == "consumables") {
    //   sheet.currentCharacter.clone["consumable_count"] = all_clone_count;
    //   sheet.storeCharacter();
    // };
    // if (cloneType == "attacks") {
    //   sheet.currentCharacter.clone["attack_count"] = all_clone_count;
    //   sheet.storeCharacter();
    // };
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
      if (cloneType == "consumables") {
        newNode.innerHTML = newConsumable;
      };
      if (cloneType == "attacks") {
        newNode.innerHTML = newAttack;
      };
    };
    // add listners to new elements
    // function addListenerTo_newNode_input_focus(element) {
    //   if (element) {
    //     element.addEventListener("input", function() {
    //       inputBlock.input_focus(element);
    //     }, false);
    //     element.addEventListener("focus", function() {
    //       inputBlock.input_focus(element);
    //     }, false);
    //     element.addEventListener("blur", function() {
    //       inputBlock.input_focus(element);
    //     }, false);
    //   };
    // };
    // function addListenerTo_newNode_input_store(element) {
    //   if (element) {
    //     element.addEventListener("input", function() {
    //       store_inputBlock(element);
    //     }, false);
    //     element.addEventListener("focus", function() {
    //       store_inputBlock(element);
    //     }, false);
    //     element.addEventListener("blur", function() {
    //       store_inputBlock(element);
    //     }, false);
    //   };
    // };
    // function addListenerTo_newNode_input_minMax(element) {
    //   if (element) {
    //     element.addEventListener("input", function() {
    //       minMaxCountLimit(element);
    //     }, false);
    //     element.addEventListener("focus", function() {
    //       minMaxCountLimit(element);
    //     }, false);
    //     element.addEventListener("blur", function() {
    //       minMaxCountLimit(element);
    //     }, false);
    //   };
    // };
    // function addListenerTo_newNode_input_checks(element) {
    //   if (element) {
    //     element.addEventListener("input", function() {
    //       addConsumableChecks(element);
    //     }, false);
    //     element.addEventListener("focus", function() {
    //       addConsumableChecks(element);
    //     }, false);
    //     element.addEventListener("blur", function() {
    //       addConsumableChecks(element);
    //     }, false);
    //   };
    // };
    // function addListenerTo_newNode_input_toggleChecks(element) {
    //   if (element) {
    //     element.addEventListener("input", function() {
    //       toggleConsumableChecks(element);
    //     }, false);
    //     element.addEventListener("focus", function() {
    //       toggleConsumableChecks(element);
    //     }, false);
    //     element.addEventListener("blur", function() {
    //       toggleConsumableChecks(element);
    //     }, false);
    //   };
    // };
    // function addListenerTo_newNode_consumableRemove_button(element) {
    //   if (element) {
    //     element.addEventListener("click", function() {
    //       cloneBlockRemove(element, cloneType);
    //     }, false);
    //   };
    // };
    // if (cloneType == "consumables") {
    //   // find inputs
    //   if (newNode.querySelector("#input-consumable-" + all_clone_count)) {
    //     var newNode_consumableName_input = newNode.querySelector("#input-consumable-" + all_clone_count);
    //   };
    //   if (newNode.querySelector("#input-consumable-total-" + all_clone_count)) {
    //     var newNode_consumableTotal_input = newNode.querySelector("#input-consumable-total-" + all_clone_count);
    //   };
    //   if (newNode.querySelector("#input-consumable-used-" + all_clone_count)) {
    //     var newNode_consumableUsed_input = newNode.querySelector("#input-consumable-used-" + all_clone_count);
    //   };
    //   if (newNode.querySelector("#remove-consumable-" + all_clone_count)) {
    //     var newNode_consumableRemove_button = newNode.querySelector("#remove-consumable-" + all_clone_count);
    //   };
    //   // add listners to consumable name
    //   addListenerTo_newNode_input_focus(newNode_consumableName_input);
    //   addListenerTo_newNode_input_store(newNode_consumableName_input);
    //   // add listners to consumable total
    //   addListenerTo_newNode_input_focus(newNode_consumableTotal_input);
    //   addListenerTo_newNode_input_store(newNode_consumableTotal_input);
    //   addListenerTo_newNode_input_minMax(newNode_consumableTotal_input);
    //   addListenerTo_newNode_input_checks(newNode_consumableTotal_input);
    //   // add listners to consumable used
    //   addListenerTo_newNode_input_focus(newNode_consumableUsed_input);
    //   addListenerTo_newNode_input_store(newNode_consumableUsed_input);
    //   addListenerTo_newNode_input_minMax(newNode_consumableUsed_input);
    //   addListenerTo_newNode_input_toggleChecks(newNode_consumableUsed_input);
    //   // add listners to remove button
    //   addListenerTo_newNode_consumableRemove_button(newNode_consumableRemove_button);
    // };
    // if (cloneType == "attacks") {
    //   // find inputs
    //   if (newNode.querySelector("#input-weapon-" + all_clone_count)) {
    //     var newNode_attackWeapon_input = newNode.querySelector("#input-weapon-" + all_clone_count);
    //   };
    //   if (newNode.querySelector("#input-attack-" + all_clone_count)) {
    //     var newNode_attackAttack_input = newNode.querySelector("#input-attack-" + all_clone_count);
    //   };
    //   if (newNode.querySelector("#input-range-" + all_clone_count)) {
    //     var newNode_attackRange_input = newNode.querySelector("#input-range-" + all_clone_count);
    //   };
    //   if (newNode.querySelector("#input-ammo-" + all_clone_count)) {
    //     var newNode_attackAmmo_input = newNode.querySelector("#input-ammo-" + all_clone_count);
    //   };
    //   if (newNode.querySelector("#input-damage-" + all_clone_count)) {
    //     var newNode_attackDamage_input = newNode.querySelector("#input-damage-" + all_clone_count);
    //   };
    //   if (newNode.querySelector("#input-critical-" + all_clone_count)) {
    //     var newNode_attackCritical_input = newNode.querySelector("#input-critical-" + all_clone_count);
    //   };
    //   if (newNode.querySelector("#remove-attack-" + all_clone_count)) {
    //     var newNode_consumableRemove_button = newNode.querySelector("#remove-attack-" + all_clone_count);
    //   };
    //   // add listners to attack weapon
    //   addListenerTo_newNode_input_focus(newNode_attackWeapon_input);
    //   addListenerTo_newNode_input_store(newNode_attackWeapon_input);
    //   // add listners to attack attack
    //   addListenerTo_newNode_input_focus(newNode_attackAttack_input);
    //   addListenerTo_newNode_input_store(newNode_attackAttack_input);
    //   // add listners to attack range
    //   addListenerTo_newNode_input_focus(newNode_attackRange_input);
    //   addListenerTo_newNode_input_store(newNode_attackRange_input);
    //   // add listners to attack ammo
    //   addListenerTo_newNode_input_focus(newNode_attackAmmo_input);
    //   addListenerTo_newNode_input_store(newNode_attackAmmo_input);
    //   // add listners to attack damage
    //   addListenerTo_newNode_input_focus(newNode_attackDamage_input);
    //   addListenerTo_newNode_input_store(newNode_attackDamage_input);
    //   // add listners to attack critical
    //   addListenerTo_newNode_input_focus(newNode_attackCritical_input);
    //   addListenerTo_newNode_input_store(newNode_attackCritical_input);
    //   // add listners to remove button
    //   addListenerTo_newNode_consumableRemove_button(newNode_consumableRemove_button);
    // };
  };

  function render() {
     console.log("clone count consumable " + sheet.currentCharacter.clone["consumable_count"]);
     console.log("clone count attack " + sheet.currentCharacter.clone["attack_count"]);
    if (sheet.currentCharacter.clone) {
      for (var i = 0; i < sheet.currentCharacter.clone["consumable_count"]; i++) {
        _render_clone("consumables");
      };
    };
    if (sheet.currentCharacter.clone) {
      for (var i = 0; i < sheet.currentCharacter.clone["attack_count"]; i++) {
        _render_clone("attacks");
      };
    };
  };

  // exposed methods
  return {
    render: render
  };

})();
