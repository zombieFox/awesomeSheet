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
    var _checkForTempModifier = function(score, tempScore) {
      if (tempScore == "") {
        return _checkValue(score);
      } else {
        return _checkValue(tempScore);
      };
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
        externalBouns = _checkForTempModifier(sheet.getCharacter().statistics.stats.str.modifier, sheet.getCharacter().statistics.stats.str.temp_modifier);
      };
      // if dex data attribute is true
      if (key == "dex_bonus") {
        // if max dex is true
        if (totalObject.bonuses.max_dex) {
          if (sheet.getCharacter().equipment.armor.max_dex < _checkForTempModifier(sheet.getCharacter().statistics.stats.dex.modifier, sheet.getCharacter().statistics.stats.dex.temp_modifier) && sheet.getCharacter().equipment.armor.max_dex != "") {
            externalBouns = sheet.getCharacter().equipment.armor.max_dex;
          } else {
            externalBouns = _checkForTempModifier(sheet.getCharacter().statistics.stats.dex.modifier, sheet.getCharacter().statistics.stats.dex.temp_modifier);
          };
        } else {
          externalBouns = _checkForTempModifier(sheet.getCharacter().statistics.stats.dex.modifier, sheet.getCharacter().statistics.stats.dex.temp_modifier);
        };
      };
      // if con data attribute is true
      if (key == "con_bonus") {
        externalBouns = _checkForTempModifier(sheet.getCharacter().statistics.stats.con.modifier, sheet.getCharacter().statistics.stats.con.temp_modifier);
      };
      // if int data attribute is true
      if (key == "int_bonus") {
        externalBouns = _checkForTempModifier(sheet.getCharacter().statistics.stats.int.modifier, sheet.getCharacter().statistics.stats.int.temp_modifier);
      };
      // if wis data attribute is true
      if (key == "wis_bonus") {
        externalBouns = _checkForTempModifier(sheet.getCharacter().statistics.stats.wis.modifier, sheet.getCharacter().statistics.stats.wis.temp_modifier);
      };
      // if cha data attribute is true
      if (key == "cha_bonus") {
        externalBouns = _checkForTempModifier(sheet.getCharacter().statistics.stats.cha.modifier, sheet.getCharacter().statistics.stats.cha.temp_modifier);
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
      if (totalPath && cloneCount) {
        object = helper.getObject(character, totalPath, cloneCount);
      } else if (totalPath && totalCloneSet) {
        object = helper.getObject(character, totalPath);
      } else if (totalPath) {
        object = helper.getObject(character, totalPath);
      };
      return object;
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

    var totalElement = totalBlock.querySelector(".js-total-block-total");
    var totalType = totalBlock.dataset.totalType;
    var totalPath = totalBlock.dataset.totalPath;
    var cloneCount = totalBlock.dataset.cloneCount || false;
    var totalCloneSet = (totalBlock.dataset.totalCloneSet == "true");
    var totalBonuses = (totalBlock.dataset.totalBonuses == "true");
    var all_bonusCheck = totalBlock.querySelectorAll(".js-total-block-bonus-check");
    var totalPathAddition = false;
    if (totalBlock.dataset.totalPathAddition) {
      totalPathAddition = totalBlock.dataset.totalPathAddition.split(",");
    };
    var totalPathSubtraction = false;
    if (totalBlock.dataset.totalPathSubtraction) {
      totalPathSubtraction = totalBlock.dataset.totalPathSubtraction.split(",");
    };
    var totalObject = _get_totalObject(sheet.getCharacter(), totalPath, cloneCount, totalCloneSet);
    var toSum = [];
    var grandTotal;

    if (all_bonusCheck.length > 0) {
      for (var i = 0; i < all_bonusCheck.length; i++) {
        _updateCheck(all_bonusCheck[i], totalObject.bonuses);
      };
    };

    // console.log("\t", totalPath);
    // console.log("\t\ttotalObject = ", totalObject);

    if (totalBonuses) {
      for (var key in totalObject.bonuses) {
        // console.log("\t\t\t", key, totalObject.bonuses[key]);
        if (totalObject.bonuses[key] && key != "max_dex") {
          toSum.push(_get_externalBonus(key, totalObject));
        };
      };
    };

    if (totalPathAddition && totalCloneSet) {
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

    if (totalPathSubtraction && totalCloneSet) {
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
      if ("current" in totalObject) {
        totalObject.current = grandTotal;
      };
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
      return "Str Bonus";
    } else if (bonusType == "dex-bonus" || bonusType == "dex_bonus") {
      return "Dex Bonus";
    } else if (bonusType == "con-bonus" || bonusType == "con_bonus") {
      return "Con Bonus";
    } else if (bonusType == "int-bonus" || bonusType == "int_bonus") {
      return "Int Bonus";
    } else if (bonusType == "wis-bonus" || bonusType == "wis_bonus") {
      return "Wis Bonus";
    } else if (bonusType == "cha-bonus" || bonusType == "cha_bonus") {
      return "Cha Bonus";
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
      return "Armor";
    } else if (bonusType == "ac-shield" || bonusType == "ac_shield") {
      return "Shield";
    } else if (bonusType == "ac-deflect" || bonusType == "ac_deflect") {
      return "Deflect";
    } else if (bonusType == "ac-dodge" || bonusType == "ac_dodge") {
      return "Dodge";
    } else if (bonusType == "ac-natural" || bonusType == "ac_natural") {
      return "Natural Armor";
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

  function _totalBlockModalContent(element) {
    var totalBlock = helper.getClosest(element, ".js-total-block");
    var totalBonuses = (totalBlock.dataset.totalBonuses == "true") || false;
    var totalBonusesInclude = false;
    if (totalBonuses) {
      totalBonusesInclude = totalBlock.dataset.totalBonusesInclude.split(",");
    };
    var totalPath = totalBlock.dataset.totalPath;
    var cloneCount = totalBlock.dataset.cloneCount || false;
    var object;
    if (totalPath && cloneCount) {
      object = helper.getObject(sheet.getCharacter(), totalPath, cloneCount);
    } else if (totalPath) {
      object = helper.getObject(sheet.getCharacter(), totalPath);
    };
    if (totalBonusesInclude.length > 0) {
      for (var i = 0; i < totalBonusesInclude.length; i++) {
        if (totalBonusesInclude[i] in object.bonuses) {
          // console.log(1, "found", totalBonusesInclude[i]);
        } else {
          // console.log(2, "not found", totalBonusesInclude[i]);
          object.bonuses[totalBonusesInclude[i]] = false;
        };
      };
    };
    var heading = element.dataset.modalHeading || "Bonuses to add to this ability";
    var totalBlockControl = document.createElement("div");
    totalBlockControl.setAttribute("class", "js-total-block-control");
    totalBlockControl.setAttribute("data-total-path", totalPath);
    if (element.dataset.clone == "true") {
      totalBlockControl.setAttribute("data-clone", "true");
      totalBlockControl.setAttribute("data-clone-count", helper.getClosest(element, ".js-clone").dataset.cloneCount);
    };
    var container = document.createElement("div");
    container.setAttribute("class", "container");
    var row = document.createElement("div");
    row.setAttribute("class", "row");
    if (object) {
      for (var key in object.bonuses) {
        // console.log(key, object.bonuses[key]);
        var col = document.createElement("div");
        col.setAttribute("class", "col-xs-6 col-xl-4");
        var div = document.createElement("div");
        div.setAttribute("class", "js-total-block-toggle");
        var input = document.createElement("input");
        input.setAttribute("id", key.replace(/_+/g, "-"));
        input.setAttribute("class", "m-total-block-toggle-check");
        input.setAttribute("data-bonus-type", key.replace(/_+/g, "-"));
        input.setAttribute("type", "checkbox");
        input.setAttribute("tabindex", "3");
        input.checked = object.bonuses[key];
        var label = document.createElement("label");
        label.setAttribute("for", key.replace(/_+/g, "-"));
        label.setAttribute("class", "label-left u-full-width");
        label.textContent = _bonusTextLable(key);
        div.appendChild(input);
        div.appendChild(label);
        col.appendChild(div);
        row.appendChild(col);
        _bind_bonusCheck(input);
      };
    };
    container.appendChild(row);
    totalBlockControl.appendChild(container);
    modal.render(heading, totalBlockControl, "Done");
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
      _totalBlockModalContent(this);
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
