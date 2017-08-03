var totalBlock = (function() {

  function sizeModifierCalculate(index) {
    if (!index) {
      var size = helper.e(".js-size");
      var selectBlockDropdown = size.querySelector(".js-select-block-dropdown");
      index = selectBlockDropdown.selectedIndex;
    };
    // console.log(index);
    var size_modifier;
    var special_size_modifier;
    var size_modifier_fly;
    var size_modifier_stealth;
    if (index == 1) {
      size_modifier = 8;
      special_size_modifier = -8;
      size_modifier_fly = 8;
      size_modifier_stealth = 16;
    } else if (index == 2) {
      size_modifier = 4;
      special_size_modifier = -4;
      size_modifier_fly = 6;
      size_modifier_stealth = 12;
    } else if (index == 3) {
      size_modifier = 2;
      special_size_modifier = -2;
      size_modifier_fly = 4;
      size_modifier_stealth = 8;
    } else if (index == 4) {
      size_modifier = 1;
      special_size_modifier = -1;
      size_modifier_fly = 2;
      size_modifier_stealth = 4;
    } else if (index == 5) {
      size_modifier = 0;
      special_size_modifier = 0;
      size_modifier_fly = 0;
      size_modifier_stealth = 0;
    } else if (index == 6) {
      size_modifier = -1;
      special_size_modifier = 1;
      size_modifier_fly = -2;
      size_modifier_stealth = -4;
    } else if (index == 7) {
      size_modifier = -2;
      special_size_modifier = 2;
      size_modifier_fly = -4;
      size_modifier_stealth = -8;
    } else if (index == 8) {
      size_modifier = -4;
      special_size_modifier = 4;
      size_modifier_fly = -6;
      size_modifier_stealth = -12;
    } else if (index == 9) {
      size_modifier = -8;
      special_size_modifier = 8;
      size_modifier_fly = -8;
      size_modifier_stealth = -16;
    } else if (index == 0 || !index) {
      size_modifier = 0;
      special_size_modifier = 0;
      size_modifier_fly = 0;
      size_modifier_stealth = 0;
    };
    helper.setObject(sheet.getCharacter(), "basics.size.size_modifier", size_modifier);
    helper.setObject(sheet.getCharacter(), "basics.size.special_size_modifier", special_size_modifier);
    helper.setObject(sheet.getCharacter(), "basics.size.size_modifier_fly", size_modifier_fly);
    helper.setObject(sheet.getCharacter(), "basics.size.size_modifier_stealth", size_modifier_stealth);
  };

  function render(totalBlock) {
    if (totalBlock) {
      _render_totalBlock(totalBlock);
    } else {
      _render_all_totalBlock();
    };
  };

  function _render_totalBlock(totalBlock) {
    // console.log(totalBlock);
    var _checkValue = function(data) {
      var value;
      if (typeof data == "number") {
        value = data;
      } else if (typeof data == "string") {
        value = parseInt(data, 10) || 0;
      };
      if (isNaN(value)) {
        value = 0;
      };
      return value;
    };
    var _checkClassSkill = function(totalObject) {
      var classSkill;
      if (totalObject.ranks > 0) {
        classSkill = 3;
      } else {
        classSkill = 0;
      };
      return classSkill;
    };
    var _get_externalBonus = function(key, totalObject) {
      var externalBouns;
      if (key == "str_bonus") {
        externalBouns = _checkValue(stats.getMod("str"));
      };
      // if dex data attribute is true
      if (key == "dex_bonus") {
        // if max dex is true
        if (totalObject.bonuses.max_dex) {
          if (sheet.getCharacter().equipment.armor.max_dex < _checkValue(stats.getMod("dex")) && sheet.getCharacter().equipment.armor.max_dex != "") {
            externalBouns = sheet.getCharacter().equipment.armor.max_dex;
          } else {
            externalBouns = _checkValue(stats.getMod("dex"));
          };
        } else {
          externalBouns = _checkValue(stats.getMod("dex"));
        };
      };
      // if con data attribute is true
      if (key == "con_bonus") {
        externalBouns = _checkValue(stats.getMod("con"));
      };
      // if int data attribute is true
      if (key == "int_bonus") {
        externalBouns = _checkValue(stats.getMod("int"));
      };
      // if wis data attribute is true
      if (key == "wis_bonus") {
        externalBouns = _checkValue(stats.getMod("wis"));
      };
      // if cha data attribute is true
      if (key == "cha_bonus") {
        externalBouns = _checkValue(stats.getMod("cha"));
      };
      // if bab data attribute is true
      if (key == "bab") {
        externalBouns = _checkValue(sheet.getCharacter().offense.base_attack);
      };
      // size
      if (key == "size") {
        externalBouns = _checkValue(sheet.getCharacter().basics.size.size_modifier);
      };
      // special size
      if (key == "special_size") {
        externalBouns = _checkValue(sheet.getCharacter().basics.size.special_size_modifier);
      };
      // level
      if (key == "level") {
        externalBouns = _checkValue(sheet.getCharacter().basics.level);
      };
      // half level
      if (key == "half_level") {
        externalBouns = Math.floor(_checkValue(sheet.getCharacter().basics.level) / 2);
      };
      // ac armor
      if (key == "ac_armor") {
        externalBouns = _checkValue(sheet.getCharacter().defense.ac.armor);
      };
      // ac shield
      if (key == "ac_shield") {
        externalBouns = _checkValue(sheet.getCharacter().defense.ac.shield);
      };
      // ac deflect
      if (key == "ac_deflect") {
        externalBouns = _checkValue(sheet.getCharacter().defense.ac.deflect);
      };
      // ac dodge
      if (key == "ac_dodge") {
        externalBouns = _checkValue(sheet.getCharacter().defense.ac.dodge);
      };
      // ac natural
      if (key == "ac_natural") {
        externalBouns = _checkValue(sheet.getCharacter().defense.ac.natural);
      };
      // armor check penalty
      if (key == "check_penalty") {
        externalBouns = _checkValue(sheet.getCharacter().equipment.armor.check_penalty);
      };
      // class skill
      if (key == "class_skill") {
        externalBouns = _checkClassSkill(totalObject);
      };
      // class skill
      if (key == "size_modifier_fly") {
        externalBouns = _checkValue(sheet.getCharacter().basics.size.size_modifier_fly);
      };
      // class skill
      if (key == "size_modifier_stealth") {
        externalBouns = _checkValue(sheet.getCharacter().basics.size.size_modifier_stealth);
      };
      // 10
      if (key == "plus_ten") {
        externalBouns = 10;
      };
      // console.log("\t\t\t", key, externalBouns);
      return externalBouns;
    };
    var _get_totalObject = function(character, totalPath, cloneCount, totalCloneSet) {
      var object;
      // console.log(cloneCount);
      if (totalPath && !isNaN(cloneCount) ) {
        // console.log(1);
        object = helper.getObject(character, totalPath, cloneCount);
      } else if (totalPath && totalCloneSet) {
        // console.log(2);
        object = helper.getObject(character, totalPath);
      } else if (totalPath) {
        // console.log(3);
        object = helper.getObject(character, totalPath);
      };
      return object;
    };
    var _get_all_additionSubtractionPaths = function(addOrMinus) {
      if (addOrMinus == "add") {
        if (totalBlock.dataset.totalPathAddition) {
          return totalBlock.dataset.totalPathAddition.split(",");
        } else {
          return false;
        };
      } else if (addOrMinus == "minus"); {
        if (totalBlock.dataset.totalPathSubtraction) {
          return totalBlock.dataset.totalPathSubtraction.split(",");
        } else {
          return false;
        };
      };
    };
    var _addPrefixSuffix = function(grandTotal, totalType) {
      var total;
      if (totalType == "bonus" && grandTotal > 0) {
        total = grandTotal = "+" + grandTotal;
      } else if (totalType == "weight" && grandTotal > 0) {
        total = grandTotal = grandTotal + "lbs";
      } else {
        total = grandTotal;
      };
      return total;
    };
    var _updateCheck = function(check, object) {
      var bonusType = check.dataset.bonusType.replace(/-+/g, "_");
      check.checked = object[bonusType];
    };
    var _updateAllCheck = function(allCheck, totalObject) {
      if (allCheck.length > 0) {
        for (var i = 0; i < allCheck.length; i++) {
          _updateCheck(allCheck[i], totalObject.bonuses);
          // if (totalObject.length > 0) {
          //   // console.log(totalObject.length);
          //   _updateCheck(allCheck[i], totalObject[0].bonuses);
          // } else {
          //   // console.log(totalObject);
          //   _updateCheck(allCheck[i], totalObject.bonuses);
          // };
        };
      };
    };

    // the total render target
    var totalElement = totalBlock.querySelector(".js-total-block-total");
    // prefix or suffix type
    var totalType = totalBlock.dataset.totalType;
    // total variable location
    var totalPath = totalBlock.dataset.totalPath;
    // console.log(totalPath);
    // is this a clone
    var cloneCount = parseInt(totalBlock.dataset.cloneCount, 10);
    // are we totalling variable from multiple clones
    var totalCloneSet = (totalBlock.dataset.totalCloneSet == "true");
    // check to see if there are total bonuses to include
    var totalBonuses = (totalBlock.dataset.totalBonuses == "true");
    // console.log("bonuses", totalBonuses);
    // are there exposed bonuses with checkboxes
    var all_bonusCheck = totalBlock.querySelectorAll(".js-total-block-bonus-check");
    // the paths to add
    var totalPathAddition = _get_all_additionSubtractionPaths("add");
    // the paths to subtract
    var totalPathSubtraction = _get_all_additionSubtractionPaths("false");

    var totalObject = _get_totalObject(sheet.getCharacter(), totalPath, cloneCount, totalCloneSet);
    // console.log(totalObject);
    var toSum = [];
    var grandTotal;

    _updateAllCheck(all_bonusCheck, totalObject);

    // push all external bonuses to sum array
    if (totalBonuses) {
      for (var key in totalObject.bonuses) {
        // max dex is not a bonus too add or subtract but a value to limit the dex modifier
        if (totalObject.bonuses[key] && key != "max_dex") {
          // console.log("\t\t\t  adding:", key, totalObject.bonuses[key]);
          toSum.push(_get_externalBonus(key, totalObject));
        };
      };
    };

    // if adding
    if (totalPathAddition && totalCloneSet) {
      // if adding a set of clones
      for (var i = 0; i < totalObject.length; i++) {
        for (var j = 0; j < totalPathAddition.length; j++) {
          toSum.push(parseFloat(totalObject[i][totalPathAddition[j]]) || 0);
        };
      };
    } else {
      for (var i = 0; i < totalPathAddition.length; i++) {
        toSum.push(parseInt(totalObject[totalPathAddition[i]], 10) || 0);
      };
    };

    // if subtracting
    if (totalPathSubtraction && totalCloneSet) {
      // if subtracting a set of clones
      for (var i = 0; i < totalObject.length; i++) {
        for (var j = 0; j < totalPathSubtraction.length; j++) {
          toSum.push(parseFloat(-totalObject[i][totalPathSubtraction[j]]) || 0);
        };
      };
    } else {
      for (var i = 0; i < totalPathSubtraction.length; i++) {
        toSum.push(parseInt(-totalObject[totalPathSubtraction[i]], 10) || 0);
      };
    };

    // console.log("\t\t\t", toSum);

    if (toSum.length > 0) {
      grandTotal = toSum.reduce(function(a, b) {
        return a + b;
      });
      if (grandTotal != parseInt(grandTotal, 10)) {
        grandTotal = parseFloat(grandTotal).toFixed(2);
      };
    } else {
      grandTotal = 0;
    };

    if (totalObject) {
      // if ("current" in totalObject) {
      totalObject.current = grandTotal;
      // };
    };

    totalElement.textContent = _addPrefixSuffix(grandTotal, totalType);
    // console.log("------------------------------");
  };

  function _render_all_totalBlock() {
    var all_totalBlock = helper.eA(".js-total-block");
    for (var i = 0; i < all_totalBlock.length; i++) {
      _render_totalBlock(all_totalBlock[i]);
    };
  };

  function _bonusTextLable(bonusType) {
    if (bonusType == "str-bonus" || bonusType == "str_bonus") {
      return "STR Bonus";
    } else if (bonusType == "dex-bonus" || bonusType == "dex_bonus") {
      return "DEX Bonus";
    } else if (bonusType == "con-bonus" || bonusType == "con_bonus") {
      return "CON Bonus";
    } else if (bonusType == "int-bonus" || bonusType == "int_bonus") {
      return "INT Bonus";
    } else if (bonusType == "wis-bonus" || bonusType == "wis_bonus") {
      return "WIS Bonus";
    } else if (bonusType == "cha-bonus" || bonusType == "cha_bonus") {
      return "CHA Bonus";
    } else if (bonusType == "bab") {
      return "Base Attack Bonus";
    } else if (bonusType == "size") {
      return "Size Bonus";
    } else if (bonusType == "special_size") {
      return "Special Size Bonus";
    } else if (bonusType == "size_modifier_fly") {
      return "Size Fly Bonus";
    } else if (bonusType == "size_modifier_stealth") {
      return "Size Stealth Bonus";
    } else if (bonusType == "level") {
      return "Level";
    } else if (bonusType == "half-level" || bonusType == "half_level") {
      return "Half Level";
    } else if (bonusType == "plus-ten" || bonusType == "plus_ten") {
      return "Plus 10";
    } else if (bonusType == "ac-armor" || bonusType == "ac_armor") {
      return "Armor Bonus";
    } else if (bonusType == "ac-shield" || bonusType == "ac_shield") {
      return "Shield Bonus";
    } else if (bonusType == "ac-deflect" || bonusType == "ac_deflect") {
      return "Deflect Bonus";
    } else if (bonusType == "ac-dodge" || bonusType == "ac_dodge") {
      return "Dodge Bonus";
    } else if (bonusType == "ac-natural" || bonusType == "ac_natural") {
      return "Natural Armor Bonus";
    } else if (bonusType == "class-skill" || bonusType == "class_skill") {
      return "Class Skill";
    } else if (bonusType == "check-penalty" || bonusType == "check_penalty") {
      return "Armor Check Penalty";
    } else if (bonusType == "max-dex" || bonusType == "max_dex") {
      return "Max Dex Bonus";
    } else {
      return bonusType;
    };
  };

  function _update_totalBlockControls(element) {
    var totalBlock = helper.getClosest(element, ".js-total-block");
    var totalPath = totalBlock.dataset.totalPath;
    var cloneCount = totalBlock.dataset.cloneCount || false;
    // collect all bonuses which should apply to this total block
    var totalBonuses = (totalBlock.dataset.totalBonuses == "true");
    var totalBonusesInclude = false;
    if (totalBonuses) {
      totalBonusesInclude = totalBlock.dataset.totalBonusesInclude.split(",");
    };
    // get the right total object or clone total object
    var object;
    if (totalPath && cloneCount) {
      object = helper.getObject(sheet.getCharacter(), totalPath, cloneCount);
    } else if (totalPath) {
      object = helper.getObject(sheet.getCharacter(), totalPath);
    };
    // if a key is not in the object bonuses add it
    if (totalBonusesInclude.length > 0) {
      for (var i = 0; i < totalBonusesInclude.length; i++) {
        if (!(totalBonusesInclude[i] in object.bonuses)) {
          object.bonuses[totalBonusesInclude[i]] = false;
        };
      };
    };

    // get heading
    var heading = element.dataset.modalHeading || "Bonuses to add to this ability";

    function _update_objectBonuses(totalBlockControls) {
      var storedBonuses = JSON.parse(totalBlockControls.dataset.bonuses);
      object.bonuses = storedBonuses;
    };

    function _store_data(totalBlockControls, input, key) {
      var storedBonuses = JSON.parse(totalBlockControls.dataset.bonuses);
      storedBonuses[key] = input.checked;
      totalBlockControls.dataset.bonuses = JSON.stringify(storedBonuses);
    };

    function _create_check(totalBlockControls, key) {
      var checkBlock = document.createElement("div");
      checkBlock.setAttribute("class", "m-check-block");
      var checkBlockCheck = document.createElement("input");
      checkBlockCheck.setAttribute("class", "m-check-block-check");
      checkBlockCheck.setAttribute("type", "checkbox");
      checkBlockCheck.setAttribute("id", key);
      checkBlockCheck.checked = object.bonuses[key];
      var checkBlockCheckIcon = document.createElement("span");
      checkBlockCheckIcon.setAttribute("class", "m-check-block-check-icon");
      checkBlock.appendChild(checkBlockCheck);
      checkBlock.appendChild(checkBlockCheckIcon);
      checkBlockCheck.addEventListener("change", function() {
        _store_data(totalBlockControls, this, key);
      }, false);
      return checkBlock;
    };

    function _create_checkLabel(text, key) {
      var editBoxText = document.createElement("label");
      editBoxText.setAttribute("class", "m-edit-box-check-label");
      editBoxText.setAttribute("for", key);
      editBoxText.textContent = text;
      return editBoxText;
    };

    function _create_editBoxItem(size, child) {
      var editBoxItem = document.createElement("div");
      editBoxItem.setAttribute("class", "m-edit-box-item-" + size);
      if (child) {
        editBoxItem.appendChild(child);
      };
      return editBoxItem;
    };

    function _create_editBox(nodes) {
      var editBox = document.createElement("div");
      editBox.setAttribute("class", "m-edit-box");
      var editBoxHead = document.createElement("div");
      editBoxHead.setAttribute("class", "m-edit-box-head");
      var editBoxBody = document.createElement("div");
      editBoxBody.setAttribute("class", "m-edit-box-body");
      var editBoxContent = document.createElement("div");
      editBoxContent.setAttribute("class", "m-edit-box-content m-edit-box-content-margin-large");
      var editBoxGroup = document.createElement("div");
      editBoxGroup.setAttribute("class", "m-edit-box-item-max m-edit-box-group");
      for (var i = 0; i < arguments.length; i++) {
        editBoxGroup.appendChild(arguments[i]);
      };
      editBoxContent.appendChild(editBoxGroup);
      editBoxBody.appendChild(editBoxContent);
      editBox.appendChild(editBoxBody);
      return editBox;
    };

    function _create_totalBlockControls() {
      var totalBlockControls = document.createElement("div");
      totalBlockControls.setAttribute("data-bonuses", JSON.stringify(object.bonuses));
      if (object) {
        // order the bonuses for rendering in modal
        var orderedBonuses = [];
        if ("str_bonus" in object.bonuses) {
          orderedBonuses.push({"str_bonus": object.bonuses["str_bonus"]})
        };
        if ("dex_bonus" in object.bonuses) {
          orderedBonuses.push({"dex_bonus": object.bonuses["dex_bonus"]})
        };
        if ("con_bonus" in object.bonuses) {
          orderedBonuses.push({"con_bonus": object.bonuses["con_bonus"]})
        };
        if ("int_bonus" in object.bonuses) {
          orderedBonuses.push({"int_bonus": object.bonuses["int_bonus"]})
        };
        if ("wis_bonus" in object.bonuses) {
          orderedBonuses.push({"wis_bonus": object.bonuses["wis_bonus"]})
        };
        if ("cha_bonus" in object.bonuses) {
          orderedBonuses.push({"cha_bonus": object.bonuses["cha_bonus"]})
        };
        if ("bab" in object.bonuses) {
          orderedBonuses.push({"bab": object.bonuses["bab"]})
        };
        if ("level" in object.bonuses) {
          orderedBonuses.push({"level": object.bonuses["level"]})
        };
        if ("half_level" in object.bonuses) {
          orderedBonuses.push({"half_level": object.bonuses["half_level"]})
        };
        if ("class_skill" in object.bonuses) {
          orderedBonuses.push({"class_skill": object.bonuses["class_skill"]})
        };
        if ("max_dex" in object.bonuses) {
          orderedBonuses.push({"max_dex": object.bonuses["max_dex"]})
        };
        if ("check_penalty" in object.bonuses) {
          orderedBonuses.push({"check_penalty": object.bonuses["check_penalty"]})
        };
        if ("plus_ten" in object.bonuses) {
          orderedBonuses.push({"plus_ten": object.bonuses["plus_ten"]})
        };
        if ("ac_armor" in object.bonuses) {
          orderedBonuses.push({"ac_armor": object.bonuses["ac_armor"]})
        };
        if ("ac_shield" in object.bonuses) {
          orderedBonuses.push({"ac_shield": object.bonuses["ac_shield"]})
        };
        if ("ac_deflect" in object.bonuses) {
          orderedBonuses.push({"ac_deflect": object.bonuses["ac_deflect"]})
        };
        if ("ac_dodge" in object.bonuses) {
          orderedBonuses.push({"ac_dodge": object.bonuses["ac_dodge"]})
        };
        if ("ac_natural" in object.bonuses) {
          orderedBonuses.push({"ac_natural": object.bonuses["ac_natural"]})
        };
        if ("size" in object.bonuses) {
          orderedBonuses.push({"size": object.bonuses["size"]})
        };
        if ("special_size" in object.bonuses) {
          orderedBonuses.push({"special_size": object.bonuses["special_size"]})
        };
        if ("size_modifier_fly" in object.bonuses) {
          orderedBonuses.push({"size_modifier_fly": object.bonuses["size_modifier_fly"]})
        };
        if ("size_modifier_stealth" in object.bonuses) {
          orderedBonuses.push({"size_modifier_stealth": object.bonuses["size_modifier_stealth"]})
        };
        for (var i = 0; i < orderedBonuses.length; i++) {
          for (var key in orderedBonuses[i]) {
            var title = _bonusTextLable(key);
            var check = _create_check(totalBlockControls, key);
            var label = _create_checkLabel(title, key);
            var editBoxItem1 = _create_editBoxItem("large", label);
            var editBoxItem2 = _create_editBoxItem("check", check);
            var editBox = _create_editBox(editBoxItem1, editBoxItem2);
            totalBlockControls.appendChild(editBox);
          };
        };
      };
      return totalBlockControls;
    };

    var modalContent = _create_totalBlockControls();

    modal.render(heading, modalContent, "Apply", function() {
      _update_objectBonuses(this);
      sheet.storeCharacters();
      render();
      display.clear();
      display.render();
    }.bind(modalContent), "small");
  };

  function bind(totalBlock) {
    if (totalBlock) {
      _bind_totalBlock(totalBlock);
    } else {
      var all_totalBlock = helper.eA(".js-total-block");
      for (var i = 0; i < all_totalBlock.length; i++) {
        if (all_totalBlock[i].dataset.clone != "true") {
          _bind_totalBlock(all_totalBlock[i]);
        };
      };
    };
  };

  function _bind_totalBlock(totalBlock) {
    var totalBlockBonuses = totalBlock.querySelector(".js-total-block-bonuses");
    var totalBlockBonusCheck = totalBlock.querySelector(".js-total-block-bonus-check");
    if (totalBlockBonusCheck) {
      _bind_bonusCheck(totalBlockBonusCheck);
    };
    if (totalBlockBonuses) {
      _bind_bonusButton(totalBlockBonuses);
    };
  };

  function _bind_bonusCheck(check) {
    check.addEventListener("change", function() {
      _update_bonuses(this);
      render();
      sheet.storeCharacters();
    }, false);
  };

  function _bind_bonusButton(button) {
    button.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      _update_totalBlockControls(this);
    }, false);
  };

  function _update_bonuses(input) {
    var bonusType = input.dataset.bonusType.replace(/-+/g, "_");
    var totalBlock = helper.getClosest(input, ".js-total-block") || helper.getClosest(input, ".js-total-block-control");
    var totalPath = totalBlock.dataset.totalPath;
    var bonusesPath;
    var bonusesObject;
    var object;
    if (totalBlock.dataset.clone == "true") {
      // console.log(1);
      var cloneCount = totalBlock.dataset.cloneCount;
      object = helper.getObject(sheet.getCharacter(), totalPath, cloneCount);
      object.bonuses[bonusType] = input.checked;
    } else {
      // console.log(2);
      bonusesPath = totalPath + ".bonuses";
      bonusesObject = helper.getObject(sheet.getCharacter(), bonusesPath);
      bonusesObject[bonusType] = input.checked;
    };
  };

  function clear() {
    var all_total = helper.eA(".js-total-block-total");
    for (var i = 0; i < all_total.length; i++) {
      all_total[i].textContent = "";
    };
  };

  // exposed methods
  return {
    size: sizeModifierCalculate,
    clear: clear,
    bind: bind,
    render: render
  };

})();
