var clone = (function() {

  function _newConsumable(index) {
    var cloneString =
      '<div class="row">' +
      '<div class="col-xs-12">' +
      '<div class="row no-gutter">' +
      '<div class="col-xs-12">' +
      '<div class="consumable-bar">' +
      '<div class="consumable-bar-percentage"><span class="percentage-total">100%</span></div>' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-8">' +
      '<div class="input-block">' +
      '<label class="input-label" for="consumable-item-' + index + '">Item</label>' +
      '<input class="input-field consumable-item" id="consumable-item-' + index + '" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-2">' +
      '<div class="input-block">' +
      '<label class="input-label" for="consumable-total-' + index + '">Total</label>' +
      '<input class="input-field consumable-total" id="consumable-total-' + index + '" type="number" tabindex="3">' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-2">' +
      '<div class="input-block">' +
      '<label class="input-label" for="consumable-used-' + index + '">Used</label>' +
      '<input class="input-field consumable-used" id="consumable-used-' + index + '" type="number" tabindex="3">' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-4 col-xs-offset-4">' +
      '<div class="clone-delete-controls">' +
      '<button class="button button-primary button-block" tabindex="3"><span class="icon-close"></span></button>' +
      '</div>' +
      '</div>' +
      '</div>';
    return cloneString;
  };

  function _newAttackMelee(index) {
    var cloneString =
      '<div class="row">' +
      '<div class="col-xs-12">' +
      '<div class="row no-gutter">' +
      '<div class="col-xs-5 col-md-4">' +
      '<div class="input-block">' +
      '<label class="input-label" for="attack-melee-weapon-' + index + '">Melee Weapon</label>' +
      '<input class="input-field attack-melee-weapon" id="attack-melee-weapon-' + index + '" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-2 col-md-2">' +
      '<div class="input-block">' +
      '<label class="input-label" for="attack-melee-attack-' + index + '">Attack</label>' +
      '<input class="input-field attack-melee-attack" id="attack-melee-attack-' + index + '" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-3 col-md-3">' +
      '<div class="input-block">' +
      '<label class="input-label" for="attack-melee-damage-' + index + '">Damage</label>' +
      '<input class="input-field attack-melee-damage" id="attack-melee-damage-' + index + '" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-2 col-md-3">' +
      '<div class="input-block">' +
      '<label class="input-label" for="attack-melee-critical-' + index + '">Critical</label>' +
      '<input class="input-field attack-melee-critical" id="attack-melee-critical-' + index + '" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="row">' +
      '<div class="col-xs-4 col-xs-offset-4">' +
      '<div class="clone-delete-controls">' +
      '<button class="button button-primary button-block" tabindex="3"><span class="icon-close"></span></button>' +
      '</div>' +
      '</div>' +
      '</div>';
    return cloneString;
  };

  function _newAttackRanged(index) {
    var cloneString =
      '<div class="row">' +
      '<div class="col-xs-12">' +
      '<div class="row no-gutter">' +
      '<div class="col-xs-6 col-md-4">' +
      '<div class="input-block">' +
      '<label class="input-label" for="attack-ranged-weapon-' + index + '">Ranged Weapon</label>' +
      '<input class="input-field attack-ranged-weapon" id="attack-ranged-weapon-' + index + '" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-3 col-md-2">' +
      '<div class="input-block">' +
      '<label class="input-label" for="attack-ranged-attack-' + index + '">Attack</label>' +
      '<input class="input-field attack-ranged-attack" id="attack-ranged-attack-' + index + '" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-3 col-md-2">' +
      '<div class="input-block">' +
      '<label class="input-label" for="attack-ranged-damage-' + index + '">Damage</label>' +
      '<input class="input-field attack-ranged-damage" id="attack-ranged-damage-' + index + '" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-3 col-xs-offset-3 col-md-2 col-md-offset-0">' +
      '<div class="input-block">' +
      '<label class="input-label" for="attack-ranged-critical-' + index + '">Critical</label>' +
      '<input class="input-field attack-ranged-critical" id="attack-ranged-critical-' + index + '" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-3 col-md-1">' +
      '<div class="input-block">' +
      '<label class="input-label" for="attack-ranged-range-' + index + '">Range</label>' +
      '<input class="input-field attack-ranged-range" id="attack-ranged-range-' + index + '" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-3 col-md-1">' +
      '<div class="input-block">' +
      '<label class="input-label" for="attack-ranged-ammo-' + index + '">Ammo</label>' +
      '<input class="input-field attack-ranged-ammo" id="attack-ranged-ammo-' + index + '" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="row">' +
      '<div class="col-xs-4 col-xs-offset-4">' +
      '<div class="clone-delete-controls">' +
      '<button class="button button-primary button-block" tabindex="3"><span class="icon-close"></span></button>' +
      '</div>' +
      '</div>' +
      '</div>';
    return cloneString;
  };

  function _minMaxCountLimit(input) {
    if (input.value <= 0) {
      input.value = "";
    } else if (input.value >= 100) {
      input.value = 100;
    };
  };

  var _bind_cloneControls = (function() {
    var consumableCloneAdd = helper.e(".consumable .clone-add");
    var consumableCloneRemove = helper.e(".consumable .clone-remove");
    var attackCloneAddMelee = helper.e(".attack .clone-add-melee");
    var attackCloneAddRanged = helper.e(".attack .clone-add-ranged");
    var attackCloneRemove = helper.e(".attack .clone-remove");
    consumableCloneAdd.addEventListener("click", function() {
      _render_clone(1, "consumable");
      _updateCloneConsumable();
      sheet.storeCharacters();
      consumable.render();
      if (getCloneCount("consumable") <= 99) {
        snack.render("Consumable added.", false, false);
      };
    }, false);
    consumableCloneRemove.addEventListener("click", function() {
      _changeCloneState("consumable");
      _updateCloneConsumable();
      sheet.storeCharacters();
    }, false);
    attackCloneAddMelee.addEventListener("click", function() {
      _render_clone(1, "attack-melee");
      _updateCloneAttackMelee();
      sheet.storeCharacters();
      if (getCloneCount("attack-melee") <= 99) {
        snack.render("Melee attack added.", false, false);
      };
    }, false);
    attackCloneAddRanged.addEventListener("click", function() {
      _render_clone(1, "attack-ranged");
      _updateCloneAttackRanged();
      sheet.storeCharacters();
      if (getCloneCount("attack-ranged") <= 99) {
        snack.render("Ranged attack added.", false, false);
      };
    }, false);
    attackCloneRemove.addEventListener("click", function() {
      _changeCloneState("attack");
      _updateCloneAttackMelee();
      _updateCloneAttackRanged();
      sheet.storeCharacters();
    }, false);
  })();

  function _render_clone(clone, cloneType) {
    var cloneBlock;
    var cloneTarget;
    if (cloneType == "attack-melee") {
      cloneBlock = helper.e(".attack");
      cloneTarget = cloneBlock.querySelector(".clone-target.attack-melee")
    };
    if (cloneType == "attack-ranged") {
      cloneBlock = helper.e(".attack");
      cloneTarget = cloneBlock.querySelector(".clone-target.attack-ranged")
    };
    if (cloneType == "consumable") {
      cloneBlock = helper.e(".consumable");
      cloneTarget = cloneBlock.querySelector(".clone-target")
    };
    for (var i = 0; i < clone; i++) {
      var cloneCount = getCloneCount(cloneType);
      var cloneString;
      var index = i;
      // make new clone node
      var newNode = document.createElement("div");
      newNode.setAttribute("class", "clone");
      newNode.setAttribute("data-attack-type", cloneType);
      // check if adding new node or adding to clone target with already existing clones
      if (index < cloneCount) {
        index = cloneCount;
      };
      if (cloneType == "consumable") {
        cloneString = _newConsumable(index);
      };
      if (cloneType == "attack-melee") {
        cloneString = _newAttackMelee(index);
      };
      if (cloneType == "attack-ranged") {
        cloneString = _newAttackRanged(index);
      };
      // add content
      newNode.innerHTML = cloneString;
      // max of 100 clones
      if (cloneCount <= 99) {
        // append new clone
        cloneTarget.appendChild(newNode);
        // bind listeners
        if (cloneType == "consumable") {
          _bind_cloneConsumableInput(newNode.querySelectorAll(".input-block"));
        };
        if (cloneType == "attack-melee") {
          _bind_cloneAttackMeleeInput(newNode.querySelectorAll(".input-block"));
        };
        if (cloneType == "attack-ranged") {
          _bind_cloneAttackRangedInput(newNode.querySelectorAll(".input-block"));
        };
        _bind_cloneRemoveButton(newNode.querySelector(".clone-delete-controls button"), cloneType);
      };
    };
  };

  function getCloneCount(cloneType) {
    var cloneTarget;
    if (cloneType == "attack-melee") {
      cloneBlock = helper.e(".attack");
      cloneTarget = cloneBlock.querySelector(".clone-target.attack-melee")
    };
    if (cloneType == "attack-ranged") {
      cloneBlock = helper.e(".attack");
      cloneTarget = cloneBlock.querySelector(".clone-target.attack-ranged")
    };
    if (cloneType == "consumable") {
      cloneBlock = helper.e(".consumable");
      cloneTarget = cloneBlock.querySelector(".clone-target")
    };
    var cloneCount = cloneTarget.querySelectorAll(".clone").length;
    return cloneCount;
  };

  function _render_cloneInput(array, cloneType) {
    var cloneBlock;
    var cloneTarget;
    var all_clone;
    if (cloneType == "attack-melee") {
      cloneBlock = helper.e(".attack");
      cloneTarget = cloneBlock.querySelector(".clone-target.attack-melee");
      all_clone = cloneTarget.querySelectorAll(".clone");
    };
    if (cloneType == "attack-ranged") {
      cloneBlock = helper.e(".attack");
      cloneTarget = cloneBlock.querySelector(".clone-target.attack-ranged");
      all_clone = cloneTarget.querySelectorAll(".clone");
    };
    if (cloneType == "consumable") {
      cloneBlock = helper.e(".consumable");
      cloneTarget = cloneBlock.querySelector(".clone-target");
      all_clone = cloneTarget.querySelectorAll(".clone");
    };
    // for (var i = 0; i < all_clone.length; i++) {
    //   console.log(all_clone[i]);
    //   var all_input = all_clone[i].querySelectorAll(".input-field");
    //   for (var j = 0; j < all_input.length; j++) {
    //     console.log(all_input[j]);
    //     console.log(array[i]);
    //   };
    // };
    for (var i = 0; i < array.length; i++) {
      for (var j in array[i]) {
        var input;
        if (cloneType == "consumable") {
          input = cloneTarget.querySelector("#consumable-" + j.replace(/_/g, "-") + "-" + i);
        };
        if (cloneType == "attack-melee") {
          input = cloneTarget.querySelector("#attack-melee-" + j.replace(/_/g, "-") + "-" + i);
        };
        if (cloneType == "attack-ranged") {
          input = cloneTarget.querySelector("#attack-ranged-" + j.replace(/_/g, "-") + "-" + i);
        };
        input.value = array[i][j];
        inputBlock.update(input);
      };
    };
  };

  function _bind_cloneRemoveButton(button, cloneType) {
    button.addEventListener("click", function() {
      _destroy_clone(this, cloneType);
      _updateCloneAttackMelee();
      _updateCloneAttackRanged();
      _updateCloneConsumable();
      sheet.storeCharacters();
      if (cloneType == "consumable") {
        _checkCloneCount("consumable");
        snack.render("Consumable removed.", false, false);
      };
      if (cloneType == "attack-melee") {
        _checkCloneCount("attack");
        snack.render("Melee attack removed.", false, false);
      };
      if (cloneType == "attack-ranged") {
        _checkCloneCount("attack");
        snack.render("Ranged attack removed.", false, false);
      };
    }, false);
  };

  function _bind_cloneAttackMeleeInput(array) {
    for (var i = 0; i < array.length; i++) {
      var input = array[i].querySelector(".input-field");
      input.addEventListener("input", function() {
        _updateCloneAttackMelee();
        sheet.storeCharacters();
        inputBlock.focus(this);
      }, false);
      input.addEventListener("focus", function() {
        _updateCloneAttackMelee();
        sheet.storeCharacters();
        inputBlock.focus(this);
      }, false);
      input.addEventListener("blur", function() {
        _updateCloneAttackMelee();
        sheet.storeCharacters();
        inputBlock.focus(this);
      }, false);
    };
  };

  function _bind_cloneAttackRangedInput(array) {
    for (var i = 0; i < array.length; i++) {
      var input = array[i].querySelector(".input-field");
      input.addEventListener("input", function() {
        _updateCloneAttackRanged();
        sheet.storeCharacters();
        inputBlock.focus(this);
      }, false);
      input.addEventListener("focus", function() {
        _updateCloneAttackRanged();
        sheet.storeCharacters();
        inputBlock.focus(this);
      }, false);
      input.addEventListener("blur", function() {
        _updateCloneAttackRanged();
        sheet.storeCharacters();
        inputBlock.focus(this);
      }, false);
    };
  };

  function _bind_cloneConsumableInput(array) {
    for (var i = 0; i < array.length; i++) {
      var input = array[i].querySelector(".input-field");
      if (input.classList.contains("consumable-used") || input.classList.contains("consumable-total")) {
        input.addEventListener("input", function() {
          _minMaxCountLimit(this);
        }, false);
        input.addEventListener("focus", function() {
          _minMaxCountLimit(this);
        }, false);
        input.addEventListener("blur", function() {
          _minMaxCountLimit(this);
        }, false);
      };
      input.addEventListener("input", function() {
        _updateCloneConsumable();
        consumable.render();
        consumable.update();
        sheet.storeCharacters();
        inputBlock.focus(this);
      }, false);
      input.addEventListener("focus", function() {
        _updateCloneConsumable();
        consumable.render();
        consumable.update();
        sheet.storeCharacters();
        inputBlock.focus(this);
      }, false);
      input.addEventListener("blur", function() {
        _updateCloneConsumable();
        consumable.render();
        consumable.update();
        sheet.storeCharacters();
        inputBlock.focus(this);
      }, false);
    };
  };

  function _changeCloneState(cloneType) {
    var cloneBlock = helper.e("." + cloneType);
    var cloneControls = cloneBlock.querySelector(".clone-controls");
    var cloneRemove = cloneControls.querySelector(".clone-remove");
    var cloneDeleteControls = cloneBlock.querySelectorAll(".clone-delete-controls");
    var cloneTarget = cloneBlock.querySelector(".clone-target");
    var all_clone = cloneBlock.querySelectorAll(".clone");
    var cloneCount = all_clone.length;
    // change clone remove button
    helper.toggleClass(cloneRemove, "active");
    helper.toggleClass(cloneRemove, "button-primary");
    helper.toggleClass(cloneRemove, "button-tertiary");
    // change clone block state
    if (cloneBlock.dataset.deleteCloneState == "true") {
      helper.removeClass(cloneBlock, "delete-state");
      cloneBlock.dataset.deleteCloneState = "false";
    } else if (cloneBlock.dataset.deleteCloneState == "false") {
      helper.addClass(cloneBlock, "delete-state");
      cloneBlock.dataset.deleteCloneState = "true";
    };
    // if clone count us 0 remove restore all classes to normal
    if (cloneCount == 0) {
      helper.removeClass(cloneBlock, "delete-state");
      cloneBlock.dataset.deleteCloneState = "false";
      helper.removeClass(cloneRemove, "active");
      helper.removeClass(cloneRemove, "button-primary");
      helper.addClass(cloneRemove, "button-tertiary");
    };
  };

  function _checkCloneCount(cloneType) {
    var cloneBlock = helper.e("." + cloneType);
    var cloneControls = cloneBlock.querySelector(".clone-controls");
    var cloneRemove = cloneControls.querySelector(".clone-remove");
    var cloneDeleteControls = cloneBlock.querySelectorAll(".clone-delete-controls");
    var cloneTarget = cloneBlock.querySelector(".clone-target");
    var all_clone = cloneBlock.querySelectorAll(".clone");
    var cloneCount = all_clone.length;
    if (cloneCount == 0) {
      cloneBlock.dataset.deleteCloneState = "false";
      helper.removeClass(cloneBlock, "delete-state");
      helper.removeClass(cloneRemove, "active");
      helper.removeClass(cloneRemove, "button-primary");
      helper.addClass(cloneRemove, "button-secondary");
    };
  };

  function _destroy_clone(element, cloneType) {
    var cloneBlock = helper.getClosest(element, ".clone-block");
    var cloneTarget = cloneBlock.querySelector(".clone-target");
    var cloneToRemove = helper.getClosest(element, ".clone");
    cloneToRemove.remove();
  };

  function _createAttackMeleeObject(weapon, attack, damage, critical) {
    return {
      weapon: this.weapon = weapon,
      attack: this.attack = attack,
      damage: this.damage = damage,
      critical: this.critical = critical
    };
  };

  function _createAttackRangedObject(weapon, attack, damage, critical, range, ammo) {
    return {
      weapon: this.weapon = weapon,
      attack: this.attack = attack,
      damage: this.damage = damage,
      critical: this.critical = critical,
      range: this.range = range,
      ammo: this.ammo = ammo,
    };
  };

  function _createConsumableObject(item, total, used) {
    return {
      item: this.item = item,
      total: this.total = total,
      used: this.used = used
    };
  };

  function _updateCloneAttackMelee() {
    var cloneBlock = helper.e(".clone-block.attack");
    var cloneTarget = cloneBlock.querySelector(".clone-target.attack-melee");
    var all_clone = cloneTarget.querySelectorAll(".clone");
    var cloneAttack = [];
    for (var i = 0; i < all_clone.length; i++) {
      var weapon = all_clone[i].querySelector(".attack-melee-weapon").value || "";
      var attack = all_clone[i].querySelector(".attack-melee-attack").value || "";
      var damage = all_clone[i].querySelector(".attack-melee-damage").value || "";
      var critical = all_clone[i].querySelector(".attack-melee-critical").value || "";
      var newAttackMelee = new _createAttackMeleeObject(weapon, attack, damage, critical);
      cloneAttack.push(newAttackMelee);
    };
    sheet.getCharacter().offense.attack.melee = cloneAttack;
  };

  function _updateCloneAttackRanged() {
    var cloneBlock = helper.e(".clone-block.attack");
    var cloneTarget = cloneBlock.querySelector(".clone-target.attack-ranged");
    var all_clone = cloneTarget.querySelectorAll(".clone");
    var cloneAttack = [];
    for (var i = 0; i < all_clone.length; i++) {
      var weapon = all_clone[i].querySelector(".attack-ranged-weapon").value || "";
      var attack = all_clone[i].querySelector(".attack-ranged-attack").value || "";
      var damage = all_clone[i].querySelector(".attack-ranged-damage").value || "";
      var critical = all_clone[i].querySelector(".attack-ranged-critical").value || "";
      var range = all_clone[i].querySelector(".attack-ranged-range").value || "";
      var ammo = all_clone[i].querySelector(".attack-ranged-ammo").value || "";
      var newAttackRanged = new _createAttackRangedObject(weapon, attack, damage, critical, range, ammo);
      cloneAttack.push(newAttackRanged);
    };
    sheet.getCharacter().offense.attack.ranged = cloneAttack;
  };

  function _updateCloneConsumable() {
    var cloneBlock = helper.e(".clone-block.consumable");
    var cloneTarget = cloneBlock.querySelector(".clone-target");
    var all_clone = cloneTarget.querySelectorAll(".clone");
    var cloneConsumable = [];
    for (var i = 0; i < all_clone.length; i++) {
      var item = all_clone[i].querySelector(".consumable-item").value || "";
      var total = all_clone[i].querySelector(".consumable-total").value || "";
      var used = all_clone[i].querySelector(".consumable-used").value || "";
      var newConsumable = new _createConsumableObject(item, total, used);
      cloneConsumable.push(newConsumable);
    };
    sheet.getCharacter().equipment.consumable = cloneConsumable;
  };

  function render() {
    var all_attackMelee = sheet.getCharacter().offense.attack.melee;
    var all_attackRanged = sheet.getCharacter().offense.attack.ranged;
    var all_consumable = sheet.getCharacter().equipment.consumable;
    _render_clone(all_attackMelee.length, "attack-melee");
    _render_clone(all_attackRanged.length, "attack-ranged");
    _render_clone(all_consumable.length, "consumable");
    _render_cloneInput(all_attackMelee, "attack-melee");
    _render_cloneInput(all_attackRanged, "attack-ranged");
    _render_cloneInput(all_consumable, "consumable");
  };

  // exposed methods
  return {
    render: render
  };

})();