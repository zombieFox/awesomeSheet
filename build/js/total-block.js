var totalBlock = (function() {

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
    var _checkClassSkill = function(object) {
      var classSkill;
      if (object.ranks > 0) {
        classSkill = 3;
      } else {
        classSkill = 0;
      };
      return classSkill;
    };
    var totalElement = totalBlock.querySelector(".js-total-block-total");
    var sum = [];
    var totalPath = totalBlock.dataset.totalPath;
    var totalType = totalBlock.dataset.totalType;
    var totalCloneSet = (totalBlock.dataset.totalCloneSet == "true");
    var all_bonusCheck = totalBlock.querySelectorAll(".js-total-block-bonus-check");
    var totalPathAddition = false;
    if (totalBlock.dataset.totalPathAddition) {
      totalPathAddition = totalBlock.dataset.totalPathAddition.split(",");
    };
    var totalPathSubtraction = false;
    if (totalBlock.dataset.totalPathSubtraction) {
      totalPathSubtraction = totalBlock.dataset.totalPathSubtraction.split(",");
    };
    var cloneCount = totalBlock.dataset.cloneCount || false;
    var totalBonuses = (totalBlock.dataset.totalBonuses == "true");
    // console.log("totalCloneSet", totalCloneSet);
    // console.log("------ total blck", "\t", totalPath, cloneCount, totalBonuses, totalPathAddition, totalPathSubtraction);
    var object;
    var array;
    var value;
    if (totalPath && cloneCount) {
      object = helper.getObject(sheet.getCharacter(), totalPath, cloneCount);
    } else if (totalPath && totalCloneSet) {
      array = helper.getObject(sheet.getCharacter(), totalPath);
    } else if (totalPath) {
      object = helper.getObject(sheet.getCharacter(), totalPath);
    };
    // console.log("--- ", totalBlock, object);
    if (totalBonuses) {
      // console.log("\t\t", "totalBonuses = ", totalBonuses, object.bonuses);
      if (object.bonuses.str_bonus) {
        sum.push(_checkForTempModifier(sheet.getCharacter().statistics.stats.str.modifier, sheet.getCharacter().statistics.stats.str.temp_modifier));
      };
      // if dex data attribute is true
      if (object.bonuses.dex_bonus) {
        // if max dex is true
        if (object.bonuses.max_dex) {
          if (sheet.getCharacter().defense.ac.max_dex < _checkForTempModifier(sheet.getCharacter().statistics.stats.dex.modifier, sheet.getCharacter().statistics.stats.dex.temp_modifier) && sheet.getCharacter().defense.ac.max_dex != "") {
            sum.push(sheet.getCharacter().defense.ac.max_dex);
          } else {
            sum.push(_checkForTempModifier(sheet.getCharacter().statistics.stats.dex.modifier, sheet.getCharacter().statistics.stats.dex.temp_modifier));
          };
        } else {
          sum.push(_checkForTempModifier(sheet.getCharacter().statistics.stats.dex.modifier, sheet.getCharacter().statistics.stats.dex.temp_modifier));
        };
      };
      // if con data attribute is true
      if (object.bonuses.con_bonus) {
        sum.push(_checkForTempModifier(sheet.getCharacter().statistics.stats.con.modifier, sheet.getCharacter().statistics.stats.con.temp_modifier));
      };
      // if int data attribute is true
      if (object.bonuses.int_bonus) {
        sum.push(_checkForTempModifier(sheet.getCharacter().statistics.stats.int.modifier, sheet.getCharacter().statistics.stats.int.temp_modifier));
      };
      // if wis data attribute is true
      if (object.bonuses.wis_bonus) {
        sum.push(_checkForTempModifier(sheet.getCharacter().statistics.stats.wis.modifier, sheet.getCharacter().statistics.stats.wis.temp_modifier));
      };
      // if cha data attribute is true
      if (object.bonuses.cha_bonus) {
        sum.push(_checkForTempModifier(sheet.getCharacter().statistics.stats.cha.modifier, sheet.getCharacter().statistics.stats.cha.temp_modifier));
      };
      // if bab data attribute is true
      if (object.bonuses.bab) {
        sum.push(_checkValue(sheet.getCharacter().offense.base_attack));
      };
      // size
      if (object.bonuses.size) {
        sum.push(_checkValue(sheet.getCharacter().defense.ac.size_bonus));
      };
      // level
      if (object.bonuses.level) {
        sum.push(_checkValue(sheet.getCharacter().basics.level));
      };
      // half level
      if (object.bonuses.half_level) {
        sum.push(Math.floor(_checkValue(sheet.getCharacter().basics.level) / 2));
      };
      // ac armor
      if (object.bonuses.ac_armor) {
        sum.push(_checkValue(sheet.getCharacter().defense.ac.armor));
      };
      // ac shield
      if (object.bonuses.ac_shield) {
        sum.push(_checkValue(sheet.getCharacter().defense.ac.shield));
      };
      // ac deflect
      if (object.bonuses.ac_deflect) {
        sum.push(_checkValue(sheet.getCharacter().defense.ac.deflect));
      };
      // ac dodge
      if (object.bonuses.ac_dodge) {
        sum.push(_checkValue(sheet.getCharacter().defense.ac.dodge));
      };
      // ac natural
      if (object.bonuses.ac_natural) {
        sum.push(_checkValue(sheet.getCharacter().defense.ac.natural));
      };
      // armor check penalty
      if (object.bonuses.check_penalty) {
        sum.push(_checkValue(sheet.getCharacter().defense.ac.check_penalty));
      };
      // class skill
      if (object.bonuses.class_skill) {
        sum.push(_checkClassSkill(object));
      };
      // 10
      if (object.bonuses.plus_ten) {
        sum.push(10);
      };
    };
    if (all_bonusCheck.length > 0) {
      for (var i = 0; i < all_bonusCheck.length; i++) {
        var bonusType = all_bonusCheck[i].dataset.bonusType.replace(/-+/g, "_");
        all_bonusCheck[i].checked = object.bonuses[bonusType];
      };
    };
    var grandTotal;
    // console.log("\t\t add ----");
    if (totalPathAddition && totalCloneSet) {
      for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < totalPathAddition.length; j++) {
          // console.log("\t\t", totalPathAddition[i], "=", array[i][totalPathAddition[j]]);
          value = parseFloat(array[i][totalPathAddition[j]]) || 0;
          sum.push(value);
        };
      };
    } else {
      for (var i = 0; i < totalPathAddition.length; i++) {
        // console.log("\t\t", totalPathAddition[i], "=", object[totalPathAddition[i]]);
        value = parseFloat(object[totalPathAddition[i]]) || 0;
        sum.push(value);
      };
    };
    // console.log("\t\t minus ----");
    if (totalPathSubtraction && totalCloneSet) {
      for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < totalPathSubtraction.length; j++) {
          // console.log("\t\t", totalPathSubtraction[i], "=", array[i][totalPathSubtraction[j]]);
          value = parseFloat(-array[i][totalPathSubtraction[j]]) || 0;
          sum.push(value);
        };
      };
    } else {
      for (var i = 0; i < totalPathSubtraction.length; i++) {
        // console.log("\t\t", totalPathSubtraction[i], "=", object[totalPathSubtraction[i]]);
        value = parseFloat(-object[totalPathSubtraction[i]]) || 0;
        sum.push(value);
      };
    };
    // console.log("\t\t", sum);
    if (sum.length > 0) {
      grandTotal = sum.reduce(function(a, b) {
        return a + b;
      });
    } else {
      grandTotal = 0;
    };
    if (object) {
      object.current = grandTotal;
    };
    // add + to bonus totals
    if (totalType == "bonus" && grandTotal > 0) {
      grandTotal = "+" + grandTotal;
    } else if (totalType == "weight" && grandTotal > 0) {
      grandTotal = grandTotal + "lbs";
    };
    totalElement.textContent = grandTotal;
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
      return "Check Penalty";
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
    clear: clear,
    bind: bind,
    render: render
  };

})();
