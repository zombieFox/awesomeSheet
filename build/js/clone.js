var clone = (function() {

  function _newConsumable(index) {
    var cloneString =
      '<div class="row">' +
      '<div class="col-xs-12">' +
      '<div class="js-total-block">' +
      '<div class="row no-gutter">' +
      '<div class="col-xs-6">' +
      '<div class="m-input-block js-input-block">' +
      '<label class="m-input-block-label js-input-block-label" for="consumable-item-' + index + '">Item</label>' +
      '<input id="consumable-item-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-consumable-item" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-2">' +
      '<p class="u-text-center u-no-margin u-inline-with-input u-underline-with-input js-total-block-total js-clone-consumable-current">0</p>' +
      '</div>' +
      '<div class="col-xs-2">' +
      '<div class="m-input-block js-input-block">' +
      '<label class="m-input-block-label js-input-block-label" for="consumable-total-' + index + '">Total</label>' +
      '<input id="consumable-total-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-consumable-total" data-total="addition" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-2">' +
      '<div class="m-input-block js-input-block">' +
      '<label class="m-input-block-label js-input-block-label" for="consumable-used-' + index + '">Used</label>' +
      '<input id="consumable-used-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-consumable-used" data-total="subtract" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-3 col-xs-offset-9">' +
      '<div class="m-clone-block-delete-controls">' +
      '<button class="button button-primary button-block js-clone-block-delete" tabindex="3"><span class="icon-close"></span></button>' +
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
      '<div class="m-input-block js-input-block">' +
      '<label class="m-input-block-label js-input-block-label" for="attack-melee-weapon-' + index + '">Melee Weapon</label>' +
      '<input id="attack-melee-weapon-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-attack-melee-weapon" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-2 col-md-2">' +
      '<div class="m-input-block js-input-block">' +
      '<label class="m-input-block-label js-input-block-label" for="attack-melee-attack-' + index + '">Attack</label>' +
      '<input id="attack-melee-attack-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-attack-melee-attack" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-3 col-md-3">' +
      '<div class="m-input-block js-input-block">' +
      '<label class="m-input-block-label js-input-block-label" for="attack-melee-damage-' + index + '">Damage</label>' +
      '<input id="attack-melee-damage-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-attack-melee-damage" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-2 col-md-3">' +
      '<div class="m-input-block js-input-block">' +
      '<label class="m-input-block-label js-input-block-label" for="attack-melee-critical-' + index + '">Critical</label>' +
      '<input id="attack-melee-critical-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-attack-melee-critical" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-3 col-xs-offset-9">' +
      '<div class="m-clone-block-delete-controls">' +
      '<button class="button button-primary button-block js-clone-block-delete" tabindex="3"><span class="icon-close"></span></button>' +
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
      '<div class="col-xs-6 col-xl-4">' +
      '<div class="m-input-block js-input-block">' +
      '<label class="m-input-block-label js-input-block-label" for="attack-ranged-weapon-' + index + '">Ranged Weapon</label>' +
      '<input id="attack-ranged-weapon-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-attack-ranged-weapon" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-3 col-xl-2">' +
      '<div class="m-input-block js-input-block">' +
      '<label class="m-input-block-label js-input-block-label" for="attack-ranged-attack-' + index + '">Attack</label>' +
      '<input id="attack-ranged-attack-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-attack-ranged-attack" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-3 col-xl-2">' +
      '<div class="m-input-block js-input-block">' +
      '<label class="m-input-block-label js-input-block-label" for="attack-ranged-damage-' + index + '">Damage</label>' +
      '<input id="attack-ranged-damage-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-attack-ranged-damage" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-3 col-xs-offset-3 col-xl-2 col-xl-offset-0">' +
      '<div class="m-input-block js-input-block">' +
      '<label class="m-input-block-label js-input-block-label" for="attack-ranged-critical-' + index + '">Critical</label>' +
      '<input id="attack-ranged-critical-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-attack-ranged-critical" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-3 col-xl-1">' +
      '<div class="m-input-block js-input-block">' +
      '<label class="m-input-block-label js-input-block-label" for="attack-ranged-range-' + index + '">Range</label>' +
      '<input id="attack-ranged-range-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-attack-ranged-range" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-3 col-xl-1">' +
      '<div class="m-input-block js-input-block">' +
      '<label class="m-input-block-label js-input-block-label" for="attack-ranged-ammo-' + index + '">Ammo</label>' +
      '<input id="attack-ranged-ammo-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-attack-ranged-ammo" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-3 col-xs-offset-9">' +
      '<div class="m-clone-block-delete-controls">' +
      '<button class="button button-primary button-block js-clone-block-delete" tabindex="3"><span class="icon-close"></span></button>' +
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

  function bindControls() {
    var cloneBlockConsumable = helper.e(".js-clone-block-consumable");
    var cloneBlockAttack = helper.e(".js-clone-block-attack");
    var cloneAddConsumable = cloneBlockConsumable.querySelector(".js-clone-add-consumable");
    var cloneRemoveConsumable = cloneBlockConsumable.querySelector(".js-clone-remove");
    var attackCloneAddMelee = cloneBlockAttack.querySelector(".js-clone-add-melee");
    var attackCloneAddRanged = cloneBlockAttack.querySelector(".js-clone-add-ranged");
    var attackCloneRemove = cloneBlockAttack.querySelector(".js-clone-remove");
    cloneAddConsumable.addEventListener("click", function() {
      _render_clone(1, "consumable");
      _updateCloneConsumable();
      sheet.storeCharacters();
      // consumable.render();
      if (_getCloneCount("consumable") <= 99) {
        snack.render("Consumable added.", false, false);
      };
    }, false);
    cloneRemoveConsumable.addEventListener("click", function() {
      _changeCloneState("consumable");
      _updateCloneConsumable();
      sheet.storeCharacters();
    }, false);
    attackCloneAddMelee.addEventListener("click", function() {
      _render_clone(1, "attack-melee");
      _updateCloneAttackMelee();
      sheet.storeCharacters();
      if (_getCloneCount("attack-melee") <= 99) {
        snack.render("Melee attack added.", false, false);
      };
    }, false);
    attackCloneAddRanged.addEventListener("click", function() {
      _render_clone(1, "attack-ranged");
      _updateCloneAttackRanged();
      sheet.storeCharacters();
      if (_getCloneCount("attack-ranged") <= 99) {
        snack.render("Ranged attack added.", false, false);
      };
    }, false);
    attackCloneRemove.addEventListener("click", function() {
      _changeCloneState("attack");
      _updateCloneAttackMelee();
      _updateCloneAttackRanged();
      sheet.storeCharacters();
    }, false);
  };

  function _render_clone(numberOfClones, cloneType) {
    var cloneBlock;
    var cloneTarget;
    if (cloneType == "attack-melee") {
      cloneBlock = helper.e(".js-clone-block-attack");
      cloneTarget = cloneBlock.querySelector(".js-clone-block-target-attack-melee");
    };
    if (cloneType == "attack-ranged") {
      cloneBlock = helper.e(".js-clone-block-attack");
      cloneTarget = cloneBlock.querySelector(".js-clone-block-target-attack-ranged");
    };
    if (cloneType == "consumable") {
      cloneBlock = helper.e(".js-clone-block-consumable");
      cloneTarget = cloneBlock.querySelector(".js-clone-block-target-consumable");
    };
    for (var i = 0; i < numberOfClones; i++) {
      var cloneCount = cloneTarget.querySelectorAll(".js-clone").length;
      var cloneString;
      var index = i;
      // make new clone node
      var newNode = document.createElement("div");
      newNode.setAttribute("class", "m-clone js-clone");
      // newNode.setAttribute("data-attack-type", cloneType);
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
          _bind_cloneConsumableInput(newNode.querySelectorAll(".js-input-block"));
        };
        if (cloneType == "attack-melee") {
          _bind_cloneAttackMeleeInput(newNode.querySelectorAll(".js-input-block"));
        };
        if (cloneType == "attack-ranged") {
          _bind_cloneAttackRangedInput(newNode.querySelectorAll(".js-input-block"));
        };
        _bind_cloneRemoveButton(newNode.querySelector(".js-clone-block-delete"), cloneType);
      };
    };
  };

  function _render_cloneInput(array, cloneType) {
    var cloneBlock;
    var cloneTarget;
    if (cloneType == "attack-melee") {
      cloneBlock = helper.e(".js-clone-block-attack");
      cloneTarget = cloneBlock.querySelector(".js-clone-block-target-attack-melee");
    };
    if (cloneType == "attack-ranged") {
      cloneBlock = helper.e(".js-clone-block-attack");
      cloneTarget = cloneBlock.querySelector(".js-clone-block-target-attack-ranged");
    };
    if (cloneType == "consumable") {
      cloneBlock = helper.e(".js-clone-block-consumable");
      cloneTarget = cloneBlock.querySelector(".js-clone-block-target-consumable");
    };
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
        if (input) {
          input.value = array[i][j];
          inputBlock.update(input);
        };
      };
    };
  };

  function _getCloneCount(cloneType) {
    var cloneBlock;
    var cloneTarget;
    var cloneCount;
    if (cloneType == "attack-melee") {
      cloneBlock = helper.e(".js-clone-block-attack");
      cloneTarget = cloneBlock.querySelector(".js-clone-block-target-attack-melee");
      cloneCount = cloneTarget.querySelectorAll(".js-clone").length;
    };
    if (cloneType == "attack-melee" || cloneType == "attack-ranged") {
      cloneBlock = helper.e(".js-clone-block-attack");
      cloneTarget = cloneBlock.querySelector(".js-clone-block-target-attack-ranged");
      cloneCount = cloneTarget.querySelectorAll(".js-clone").length;
    };
    if (cloneType == "consumable") {
      cloneBlock = helper.e(".js-clone-block-consumable");
      cloneTarget = cloneBlock.querySelector(".js-clone-block-target-consumable");
      cloneCount = cloneTarget.querySelectorAll(".js-clone").length;
    };
    return cloneCount;
  };

  function _checkCloneState(cloneType) {
    var cloneBlock;
    var cloneTarget;
    if (cloneType == "attack-melee") {
      cloneBlock = helper.e(".js-clone-block-attack");
      cloneTarget = cloneBlock.querySelector(".js-clone-block-target-attack-melee");
    };
    if (cloneType == "attack-ranged") {
      cloneBlock = helper.e(".js-clone-block-attack");
      cloneTarget = cloneBlock.querySelector(".js-clone-block-target-attack-ranged");
    };
    if (cloneType == "consumable") {
      cloneBlock = helper.e(".js-clone-block-consumable");
      cloneTarget = cloneBlock.querySelector(".js-clone-block-target-consumable");
    };
    var cloneCount = cloneBlock.querySelectorAll(".js-clone");
    var cloneControls = cloneBlock.querySelector(".js-clone-controls");
    var cloneRemoveButton = cloneControls.querySelector(".js-clone-remove");
    if (cloneCount.length == 0) {
      cloneBlock.dataset.deleteCloneState = "false";
      helper.removeClass(cloneBlock, "is-delete-state");
      helper.removeClass(cloneRemoveButton, "is-active");
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
        _checkCloneState("consumable");
        snack.render("Consumable removed.", false, false);
      };
      if (cloneType == "attack-melee") {
        _checkCloneState("attack-melee");
        snack.render("Melee attack removed.", false, false);
      };
      if (cloneType == "attack-ranged") {
        _checkCloneState("attack-ranged");
        snack.render("Ranged attack removed.", false, false);
      };
    }, false);
  };

  var storeInputTimer = null;
  var storeBlurTimer = null;

  function delayUpdate(type) {
    if (type == "attack-melee") {
      _updateCloneAttackMelee();
    };
    if (type == "attack-ranged") {
      _updateCloneAttackRanged();
    };
    if (type == "consumable") {
      _updateCloneConsumable();
    };
    totalBlock.update();
    sheet.storeCharacters();
  };

  function _bind_cloneAttackMeleeInput(array) {
    for (var i = 0; i < array.length; i++) {
      var input = array[i].querySelector(".js-input-block-field");
      input.addEventListener("input", function() {
        clearTimeout(storeInputTimer);
        storeInputTimer = setTimeout(delayUpdate, 1000, "attack-melee");
      }, false);
      input.addEventListener("focus", function() {
        inputBlock.focus(this);
      }, false);
      input.addEventListener("blur", function() {
        clearTimeout(storeInputTimer);
        storeBlurTimer = setTimeout(delayUpdate, 1000, "attack-melee");
        inputBlock.focus(this);
      }, false);
    };
  };

  function _bind_cloneAttackRangedInput(array) {
    for (var i = 0; i < array.length; i++) {
      var input = array[i].querySelector(".js-input-block-field");
      input.addEventListener("input", function() {
        clearTimeout(storeInputTimer);
        storeInputTimer = setTimeout(delayUpdate, 1000, "attack-ranged");
      }, false);
      input.addEventListener("focus", function() {
        inputBlock.focus(this);
      }, false);
      input.addEventListener("blur", function() {
        clearTimeout(storeInputTimer);
        storeBlurTimer = setTimeout(delayUpdate, 1000, "attack-ranged");
        inputBlock.focus(this);
      }, false);
    };
  };

  function _bind_cloneConsumableInput(array) {
    for (var i = 0; i < array.length; i++) {
      var input = array[i].querySelector(".js-input-block-field");
      if (input.classList.contains("consumable-used") || input.classList.contains("consumable-total")) {
        input.addEventListener("input", function() {
          _minMaxCountLimit(this);
        }, false);
      };
      input.addEventListener("input", function() {
        clearTimeout(storeInputTimer);
        storeInputTimer = setTimeout(delayUpdate, 1000, "consumable");
      }, false);
      input.addEventListener("focus", function() {
        inputBlock.focus(this);
      }, false);
      input.addEventListener("blur", function() {
        clearTimeout(storeInputTimer);
        storeInputTimer = setTimeout(delayUpdate, 1000, "consumable");
        inputBlock.focus(this);
      }, false);
    };
  };

  function _changeCloneState(cloneType) {
    var cloneBlock = helper.e(".js-clone-block-" + cloneType);
    var cloneControls = cloneBlock.querySelector(".js-clone-controls");
    var cloneRemoveButton = cloneControls.querySelector(".js-clone-remove");
    var cloneCount = cloneBlock.querySelectorAll(".js-clone").length;
    // change clone remove button
    helper.toggleClass(cloneRemoveButton, "is-active");
    // change clone block state
    if (cloneBlock.dataset.deleteCloneState == "true") {
      helper.removeClass(cloneBlock, "is-delete-state");
      cloneBlock.dataset.deleteCloneState = "false";
    } else if (cloneBlock.dataset.deleteCloneState == "false") {
      helper.addClass(cloneBlock, "is-delete-state");
      cloneBlock.dataset.deleteCloneState = "true";
    };
    // if clone count us 0 remove restore all classes to normal
    if (cloneCount == 0) {
      helper.removeClass(cloneBlock, "is-delete-state");
      cloneBlock.dataset.deleteCloneState = "false";
      helper.removeClass(cloneRemoveButton, "is-active");
    };
  };

  function _destroy_clone(element) {
    var cloneToRemove = helper.getClosest(element, ".js-clone");
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

  function _createConsumableObject(item, current, total, used) {
    return {
      item: this.item = item,
      current: this.current = current,
      total: this.total = total,
      used: this.used = used
    };
  };

  function _updateCloneAttackMelee() {
    console.log("delayed fire");
    var cloneTarget = helper.e(".js-clone-block-target-attack-melee");
    var all_clone = cloneTarget.querySelectorAll(".js-clone");
    var cloneAttack = [];
    for (var i = 0; i < all_clone.length; i++) {
      var weapon = all_clone[i].querySelector(".js-clone-attack-melee-weapon").value || "";
      var attack = all_clone[i].querySelector(".js-clone-attack-melee-attack").value || "";
      var damage = all_clone[i].querySelector(".js-clone-attack-melee-damage").value || "";
      var critical = all_clone[i].querySelector(".js-clone-attack-melee-critical").value || "";
      var newAttackMelee = new _createAttackMeleeObject(weapon, attack, damage, critical);
      cloneAttack.push(newAttackMelee);
    };
    sheet.getCharacter().offense.attack.melee = cloneAttack;
  };

  function _updateCloneAttackRanged() {
    console.log("delayed fire");
    var cloneTarget = helper.e(".js-clone-block-target-attack-ranged");
    var all_clone = cloneTarget.querySelectorAll(".js-clone");
    var cloneAttack = [];
    for (var i = 0; i < all_clone.length; i++) {
      var weapon = all_clone[i].querySelector(".js-clone-attack-ranged-weapon").value || "";
      var attack = all_clone[i].querySelector(".js-clone-attack-ranged-attack").value || "";
      var damage = all_clone[i].querySelector(".js-clone-attack-ranged-damage").value || "";
      var critical = all_clone[i].querySelector(".js-clone-attack-ranged-critical").value || "";
      var range = all_clone[i].querySelector(".js-clone-attack-ranged-range").value || "";
      var ammo = all_clone[i].querySelector(".js-clone-attack-ranged-ammo").value || "";
      var newAttackRanged = new _createAttackRangedObject(weapon, attack, damage, critical, range, ammo);
      cloneAttack.push(newAttackRanged);
    };
    sheet.getCharacter().offense.attack.ranged = cloneAttack;
  };

  function _updateCloneConsumable() {
    console.log("delayed fire");
    var cloneTarget = helper.e(".js-clone-block-target-consumable");
    var all_clone = cloneTarget.querySelectorAll(".js-clone");
    var cloneConsumable = [];
    for (var i = 0; i < all_clone.length; i++) {
      var item = all_clone[i].querySelector(".js-clone-consumable-item").value || "";
      var current = all_clone[i].querySelector(".js-clone-consumable-current").innerHTML || "";
      var total = all_clone[i].querySelector(".js-clone-consumable-total").value || "";
      var used = all_clone[i].querySelector(".js-clone-consumable-used").value || "";
      var newConsumable = new _createConsumableObject(item, current, total, used);
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

  function clear() {
    // console.log("--- clone clear fired ---");
    // not sure why clear is firing twice on character change, must investigate 
    var all_cloneTarget = helper.eA(".js-clone-block-target");
    for (var i = 0; i < all_cloneTarget.length; i++) {
      // console.log("\t for running on " + all_cloneTarget[i].classList[2]);
      while (all_cloneTarget[i].lastChild) {
        all_cloneTarget[i].removeChild(all_cloneTarget[i].lastChild);
      };
    };
  };

  // exposed methods
  return {
    bind: bindControls,
    clear: clear,
    render: render
  };

})();
