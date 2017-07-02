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
    var totalBonuses = (totalBlock.dataset.totalBonuses == "true") || false;
    // console.log("------ total blck", "\t", totalPath, cloneCount, totalBonuses, totalPathAddition, totalPathSubtraction);
    var object;
    if (totalPath && cloneCount) {
      object = helper.getObject(sheet.getCharacter(), totalPath, [cloneCount]);
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
    if (totalPathAddition) {
      for (var i = 0; i < totalPathAddition.length; i++) {
        // console.log("\t\t", totalPathAddition[i], "=", object[totalPathAddition[i]]);
        value = parseInt(object[totalPathAddition[i]], 10) || 0;
        sum.push(value);
      };
    };
    // console.log("\t\t minus ----");
    if (totalPathSubtraction) {
      for (var i = 0; i < totalPathSubtraction.length; i++) {
        // console.log("\t\t", totalPathSubtraction[i], "=", object[totalPathSubtraction[i]]);
        value = parseInt(-object[totalPathSubtraction[i]], 10) || 0;
        sum.push(value);
      };
    };
    // console.log("\t\t", sum);
    grandTotal = sum.reduce(function(a, b) {
      return a + b;
    });
    object.current = grandTotal;
    // add + to bonus totals
    if (totalType == "bonus" && grandTotal > 0) {
      grandTotal = "+" + grandTotal;
    };
    totalElement.textContent = grandTotal;
  };

  function _render_all_totalBlock() {
    var all_totalBlock = helper.eA(".js-total-block");
    for (var i = 0; i < all_totalBlock.length; i++) {
      _render_totalBlock(all_totalBlock[i]);
    };
  };

  function update() {
    // var all_totalBlock = helper.eA(".js-total-block");
    // console.log(all_totalBlock);
    // for (var i = 0; i < all_totalBlock.length; i++) {
    //   // var totalPathAddition = JSON.parse(all_totalBlock[i].dataset.totalPathAddition);
    //   var totalPath = all_totalBlock[i].dataset.totalPath;
    //   var totalPathAddition = all_totalBlock[i].dataset.totalPathAddition.split(",");
    //   var totalPathSubtraction = all_totalBlock[i].dataset.totalPathAddition.split(",");
    //   var object = helper.getObject(sheet.getCharacter(), totalPath);
    //   var modifiers = [];
    //   console.log(object, totalPathAddition);
    //   for (var j = 0; j < totalPathAddition.length; j++) {
    //     modifiers.push(object[totalPathAddition[j]]);
    //   };
    //   console.log(modifiers);



    // var total = all_totalBlock[i].querySelector(".js-total-block-total");
    // var totalPath = total.dataset.path;
    // var totalType = all_totalBlock[i].dataset.totalType;
    // var all_inputBlockField = all_totalBlock[i].querySelectorAll(".js-input-block-field");
    // var modifiers = [];
    // var modifiers_total = 0;
    // // if there are any input fields in total block
    // if (all_inputBlockField.length > 0) {
    //   // iterate over all input fields
    //   for (var i = 0; i < all_inputBlockField.length; i++) {
    //     var value;
    //     // find the path for input field
    //     var inputPath = all_inputBlockField[i].dataset.path;
    //     // if path is found
    //     if (inputPath) {
    //       // get the value of path from character
    //       value = parseInt(helper.getObject(sheet.getCharacter(), inputPath), 10);
    //     } else {
    //       // get the value from input
    //       // needed because clone consumable total blocks dont have data paths
    //       value = parseInt(all_inputBlockField[i].value, 10) || 0;
    //     };
    //     // if the value is not a NaN
    //     if (!isNaN(value)) {
    //       // check if the input is to add or subtract
    //       if (all_inputBlockField[i].dataset.total == "addition") {
    //         // push to array
    //         modifiers.push(value);
    //       };
    //       // check if the inpuy is to add or subtract
    //       if (all_inputBlockField[i].dataset.total == "subtract") {
    //         // push to array
    //         modifiers.push(-value);
    //       };
    //     };
    //   };
    // };


    // };

  };

  function _bonusTextLable(bonusType) {
    if (bonusType == "str-bonus" || bonusType == "str_bonus") {
      return "Str Bonus";
    };
    if (bonusType == "dex-bonus" || bonusType == "dex_bonus") {
      return "Dex Bonus";
    };
    if (bonusType == "con-bonus" || bonusType == "con_bonus") {
      return "Con Bonus";
    };
    if (bonusType == "int-bonus" || bonusType == "int_bonus") {
      return "Int Bonus";
    };
    if (bonusType == "wis-bonus" || bonusType == "wis_bonus") {
      return "Wis Bonus";
    };
    if (bonusType == "cha-bonus" || bonusType == "cha_bonus") {
      return "Cha Bonus";
    };
    if (bonusType == "bab") {
      return "Base Attack Bonus";
    };
    if (bonusType == "size") {
      return "Size Bonus";
    };
    if (bonusType == "level") {
      return "Level";
    };
    if (bonusType == "half-level" || bonusType == "half_level") {
      return "Half Level";
    };
    if (bonusType == "plus-ten" || bonusType == "plus_ten") {
      return "Plus 10";
    };
    if (bonusType == "ac-armor" || bonusType == "ac_armor") {
      return "Armor";
    };
    if (bonusType == "ac-shield" || bonusType == "ac_shield") {
      return "Shield";
    };
    if (bonusType == "ac-deflect" || bonusType == "ac_deflect") {
      return "Deflect";
    };
    if (bonusType == "ac-dodge" || bonusType == "ac_dodge") {
      return "Dodge";
    };
    if (bonusType == "ac-natural" || bonusType == "ac_natural") {
      return "Natural Armor";
    };
    if (bonusType == "class-skill" || bonusType == "class_skill") {
      return "Class Skill";
    };
    if (bonusType == "check-penalty" || bonusType == "check_penalty") {
      return "Check Penalty";
    };
    if (bonusType == "max-dex" || bonusType == "max_dex") {
      return "Max Dex Bonus";
    };
  };

  function _totalBlockModalContent(element) {
    var totalBlock = helper.getClosest(element, ".js-total-block");
    var totalPath = totalBlock.dataset.totalPath;
    var cloneCount = totalBlock.dataset.cloneCount || false;
    var object;
    if (totalPath && cloneCount) {
      object = helper.getObject(sheet.getCharacter(), totalPath, [cloneCount]);
    } else if (totalPath) {
      object = helper.getObject(sheet.getCharacter(), totalPath);
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

  function _bind_bonusCheck(element) {
    element.addEventListener("change", function() {
      _update_bonuses(this);
      render();
      sheet.storeCharacters();
    }, false);
  };

  function _bind_bonusButton(element) {
    element.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      _totalBlockModalContent(this);
    }, false);
  };

  function bind() {
    var all_totalBlockBonuses = helper.eA(".js-total-block-bonuses");
    var all_totalBlockBonusCheck = helper.eA(".js-total-block-bonus-check");
    for (var i = 0; i < all_totalBlockBonuses.length; i++) {
      if (all_totalBlockBonuses[i].dataset.clone != "true") {
        _bind_bonusButton(all_totalBlockBonuses[i]);
      };
    };
    for (var i = 0; i < all_totalBlockBonusCheck.length; i++) {
      if (all_totalBlockBonusCheck[i].dataset.clone != "true") {
        _bind_bonusCheck(all_totalBlockBonusCheck[i]);
      };
    };
  };

  function bindControlCheck(element) {
    _bind_bonusCheck(element);
  };

  function bindControlButton(element) {
    _bind_bonusButton(element);
  };

  function _update_bonuses(input) {
    var bonusType = input.dataset.bonusType.replace(/-+/g, "_");
    var totalBlock = helper.getClosest(input, ".js-total-block") || helper.getClosest(input, ".js-total-block-control");
    var totalPath = totalBlock.dataset.totalPath;
    var bonusesPath;
    var bonusesObject;
    if (totalBlock.dataset.clone == "true") {
      console.log(1);
      var cloneCount = totalBlock.dataset.cloneCount;
      object = helper.getObject(sheet.getCharacter(), totalPath, cloneCount);
      object.bonuses[bonusType] = input.checked;
    } else {
      console.log(2);
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
    bindControlCheck: bindControlCheck,
    bindControlButton: bindControlButton,
    update: update,
    render: render
  };

})();
