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
    var totalPathBonusArrayIndex = totalBlock.dataset.totalPathBonusArrayIndex || false;
    var totalBonuses = (totalBlock.dataset.totalBonuses == "true") || false;
    // console.log("------ total blck", "\t", totalPath, totalPathBonusArrayIndex, totalBonuses, totalPathAddition, totalPathSubtraction);
    var object;
    if (totalPath && totalPathBonusArrayIndex) {
      object = helper.getObject(sheet.getCharacter(), totalPath, [totalPathBonusArrayIndex]);
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

  function xxxx_render_totalBlock(totalBlock) {
    var totalPathBonus = totalBlock.dataset.totalPathBonus;
    var totalPathBonusArrayIndex = totalBlock.dataset.totalPathBonusArrayIndex;
    var object;
    if (totalPathBonus && totalPathBonusArrayIndex) {
      object = helper.getObject(sheet.getCharacter(), totalPathBonus, [totalPathBonusArrayIndex]);
    } else if (totalPathBonus) {
      object = helper.getObject(sheet.getCharacter(), totalPathBonus);
    };
    if (object) {
      for (var key in object) {
        if (object[key]) {
          // console.log(totalBlock, key, object[key]);
          if (key == "str_bonus") {
            totalBlock.dataset.strBonus = "true";
          };
          if (key == "dex_bonus") {
            totalBlock.dataset.dexBonus = "true";
          };
          if (key == "con_bonus") {
            totalBlock.dataset.conBonus = "true";
          };
          if (key == "int_bonus") {
            totalBlock.dataset.intBonus = "true";
          };
          if (key == "wis_bonus") {
            totalBlock.dataset.wisBonus = "true";
          };
          if (key == "cha_bonus") {
            totalBlock.dataset.chaBonus = "true";
          };
          if (key == "bab") {
            totalBlock.dataset.babBonus = "true";
          };
          if (key == "size") {
            totalBlock.dataset.sizeBonus = "true";
          };
          if (key == "level") {
            totalBlock.dataset.levelBonus = "true";
          };
          if (key == "half_level") {
            totalBlock.dataset.halfLevelBonus = "true";
          };
          if (key == "plus_ten") {
            totalBlock.dataset.plusTenBonus = "true";
          };
          if (key == "ac_armor") {
            totalBlock.dataset.acArmor = "true";
          };
          if (key == "ac_shield") {
            totalBlock.dataset.acShield = "true";
          };
          if (key == "ac_deflect") {
            totalBlock.dataset.acDeflect = "true";
          };
          if (key == "ac_dodge") {
            totalBlock.dataset.acDodge = "true";
          };
          if (key == "ac_natural") {
            totalBlock.dataset.acNatural = "true";
          };
          if (key == "class_skill") {
            totalBlock.dataset.classSkill = "true";
          };
          if (key == "check_penalty") {
            totalBlock.dataset.checkPenalty = "true";
          };
          if (key == "max_dex") {
            totalBlock.dataset.maxDex = "true";
          };
        };
      };
    };
  };

  function xxxx_render_all_totalBlock() {
    var all_totalBlock = helper.eA(".js-total-block");
    for (var i = 0; i < all_totalBlock.length; i++) {
      _render_totalBlock(all_totalBlock[i]);
    };
  };

  function xxxx_render() {
    var all_totalBlockBonus = helper.eA(".js-total-block-bonuses");
    var all_totalBlockBonusCheck = helper.eA(".js-total-block-toggle-check");
    for (var i = 0; i < all_totalBlockBonus.length; i++) {
      var path = all_totalBlockBonus[i].dataset.bonusPath;
      var totalBlock = helper.getClosest(all_totalBlockBonus[i], ".js-total-block");
      if (path) {
        var object = helper.getObject(sheet.getCharacter(), path);
        for (var key in object) {
          if (object[key]) {
            if (key == "str_bonus") {
              totalBlock.dataset.strBonus = "true";
            };
            if (key == "dex_bonus") {
              totalBlock.dataset.dexBonus = "true";
            };
            if (key == "con_bonus") {
              totalBlock.dataset.conBonus = "true";
            };
            if (key == "int_bonus") {
              totalBlock.dataset.intBonus = "true";
            };
            if (key == "wis_bonus") {
              totalBlock.dataset.wisBonus = "true";
            };
            if (key == "cha_bonus") {
              totalBlock.dataset.chaBonus = "true";
            };
            if (key == "bab") {
              totalBlock.dataset.babBonus = "true";
            };
            if (key == "size") {
              totalBlock.dataset.sizeBonus = "true";
            };
            if (key == "level") {
              totalBlock.dataset.levelBonus = "true";
            };
            if (key == "half_level") {
              totalBlock.dataset.halfLevelBonus = "true";
            };
            if (key == "plus_ten") {
              totalBlock.dataset.plusTenBonus = "true";
            };
            if (key == "ac_armor") {
              totalBlock.dataset.acArmor = "true";
            };
            if (key == "ac_shield") {
              totalBlock.dataset.acShield = "true";
            };
            if (key == "ac_deflect") {
              totalBlock.dataset.acDeflect = "true";
            };
            if (key == "ac_dodge") {
              totalBlock.dataset.acDodge = "true";
            };
            if (key == "ac_natural") {
              totalBlock.dataset.acNatural = "true";
            };
            if (key == "class_skill") {
              totalBlock.dataset.classSkill = "true";
            };
            if (key == "check_penalty") {
              totalBlock.dataset.checkPenalty = "true";
            };
            if (key == "max_dex") {
              totalBlock.dataset.maxDex = "true";
            };
          };
        };
      };
    };
    for (var i = 0; i < all_totalBlockBonusCheck.length; i++) {
      var path = all_totalBlockBonusCheck[i].dataset.path;
      var state = helper.getObject(sheet.getCharacter(), path);
      all_totalBlockBonusCheck[i].checked = state;
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

  function xxxx_update(element) {

    function _checkValue(data) {
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

    function _checkForTempModifier(score, tempScore) {
      if (tempScore == "") {
        return _checkValue(score);
      } else {
        return _checkValue(tempScore);
      };
    };

    function _checkClassSkill(totalBlock) {
      var input = totalBlock.querySelector(".js-input-block-field-ranks");
      var path = input.dataset.path;
      var ranks = helper.getObject(sheet.getCharacter(), path);
      var value;
      if (ranks > 0) {
        value = 3;
      } else {
        value = 0;
      };
      return value;
    };

    function _update_totalBlock(totalBlock) {
      // console.log("total block update");
      var strBonus = 0;
      var dexBonus = 0;
      var conBonus = 0;
      var intBonus = 0;
      var wisBonus = 0;
      var chaBonus = 0;
      var babBonus = 0;
      var sizeBonus = 0;
      var levelBonus = 0;
      var halfLevelBonus = 0;
      var plusTenBonus = 0;
      var acArmor = 0;
      var acShield = 0;
      var acDeflect = 0;
      var acDodge = 0;
      var acNatural = 0;
      var classSkill = 0;
      var checkPenalty = 0;
      // if str data attribute is true
      if (totalBlock.dataset.strBonus == "true") {
        strBonus = _checkForTempModifier(sheet.getCharacter().statistics.stats.str.modifier, sheet.getCharacter().statistics.stats.str.temp_modifier);
      };
      // if dex data attribute is true
      if (totalBlock.dataset.dexBonus == "true") {
        dexBonus = _checkForTempModifier(sheet.getCharacter().statistics.stats.dex.modifier, sheet.getCharacter().statistics.stats.dex.temp_modifier);
      };
      // if dex data attribute is true
      if (totalBlock.dataset.dexBonus == "true") {
        dexBonus = _checkForTempModifier(sheet.getCharacter().statistics.stats.dex.modifier, sheet.getCharacter().statistics.stats.dex.temp_modifier);
      };
      // if con data attribute is true
      if (totalBlock.dataset.conBonus == "true") {
        conBonus = _checkForTempModifier(sheet.getCharacter().statistics.stats.con.modifier, sheet.getCharacter().statistics.stats.con.temp_modifier);
      };
      // if int data attribute is true
      if (totalBlock.dataset.intBonus == "true") {
        intBonus = _checkForTempModifier(sheet.getCharacter().statistics.stats.int.modifier, sheet.getCharacter().statistics.stats.int.temp_modifier);
      };
      // if wis data attribute is true
      if (totalBlock.dataset.wisBonus == "true") {
        wisBonus = _checkForTempModifier(sheet.getCharacter().statistics.stats.wis.modifier, sheet.getCharacter().statistics.stats.wis.temp_modifier);
      };
      // if cha data attribute is true
      if (totalBlock.dataset.chaBonus == "true") {
        chaBonus = _checkForTempModifier(sheet.getCharacter().statistics.stats.cha.modifier, sheet.getCharacter().statistics.stats.cha.temp_modifier);
      };
      // if max dex data attribute is true
      if (totalBlock.dataset.maxDex == "true") {
        // if max dex is less than dex bonus
        if (sheet.getCharacter().defense.ac.max_dex < _checkForTempModifier(sheet.getCharacter().statistics.stats.dex.modifier, sheet.getCharacter().statistics.stats.dex.temp_modifier) && sheet.getCharacter().defense.ac.max_dex != "") {
          // set dex bonuse to mac dex
          dexBonus = sheet.getCharacter().defense.ac.max_dex;
        };
      };
      // if bab data attribute is true
      if (totalBlock.dataset.babBonus == "true") {
        babBonus = _checkValue(sheet.getCharacter().offense.base_attack);
      };
      // size
      if (totalBlock.dataset.sizeBonus == "true") {
        sizeBonus = _checkValue(sheet.getCharacter().defense.ac.size_bonus);
      };
      // level
      if (totalBlock.dataset.levelBonus == "true") {
        levelBonus = _checkValue(sheet.getCharacter().basics.level);
      };
      // half level
      if (totalBlock.dataset.halfLevelBonus == "true") {
        halfLevelBonus = Math.floor(_checkValue(sheet.getCharacter().basics.level) / 2);
      };
      // ac armor
      if (totalBlock.dataset.acArmor == "true") {
        acArmor = _checkValue(sheet.getCharacter().defense.ac.armor);
      };
      // ac shield
      if (totalBlock.dataset.acShield == "true") {
        acShield = _checkValue(sheet.getCharacter().defense.ac.shield);
      };
      // ac deflect
      if (totalBlock.dataset.acDeflect == "true") {
        acDeflect = _checkValue(sheet.getCharacter().defense.ac.deflect);
      };
      // ac dodge
      if (totalBlock.dataset.acDodge == "true") {
        acDodge = _checkValue(sheet.getCharacter().defense.ac.dodge);
      };
      // ac natural
      if (totalBlock.dataset.acNatural == "true") {
        acNatural = _checkValue(sheet.getCharacter().defense.ac.natural);
      };
      // armor check penalty
      if (totalBlock.dataset.checkPenalty == "true") {
        checkPenalty = _checkValue(sheet.getCharacter().defense.ac.check_penalty);
      };
      // class skill
      if (totalBlock.dataset.classSkill == "true") {
        classSkill = _checkClassSkill(totalBlock);
      };
      // 10
      if (totalBlock.dataset.plusTenBonus == "true") {
        plusTenBonus = 10;
      };
      var total = totalBlock.querySelector(".js-total-block-total");
      var totalType = totalBlock.dataset.totalType;
      var totalPath = total.dataset.path;
      var all_inputBlockField = totalBlock.querySelectorAll(".js-input-block-field");
      var modifiers = [];
      var modifiers_total = 0;
      // if there are any input fields in total block
      if (all_inputBlockField.length > 0) {
        // iterate over all input fields
        for (var i = 0; i < all_inputBlockField.length; i++) {
          var value;
          // find the path for input field
          var inputPath = all_inputBlockField[i].dataset.path;
          // if path is found
          if (inputPath) {
            // get the value of path from character
            value = parseInt(helper.getObject(sheet.getCharacter(), inputPath), 10);
          } else {
            // get the value from input
            // needed because clone consumable total blocks dont have data paths
            value = parseInt(all_inputBlockField[i].value, 10) || 0;
          };
          // if the value is not a NaN
          if (!isNaN(value)) {
            // check if the inpuy is to add or subtract
            if (all_inputBlockField[i].dataset.total == "addition") {
              // push to array
              modifiers.push(value);
            };
            // check if the inpuy is to add or subtract
            if (all_inputBlockField[i].dataset.total == "subtract") {
              // push to array
              modifiers.push(-value);
            };
          };
        };
      };
      // if modifiers array has values total them
      if (modifiers.length > 0) {
        modifiers_total = modifiers.reduce(function(a, b) {
          return a + b;
        });
      };
      // grand total
      var grandTotal = modifiers_total + levelBonus + halfLevelBonus + babBonus + sizeBonus + plusTenBonus + strBonus + dexBonus + conBonus + intBonus + wisBonus + chaBonus + acArmor + acShield + acDeflect + acDodge + acNatural + classSkill + checkPenalty;
      // store current to character object
      if (totalPath) {
        helper.setObject(sheet.getCharacter(), totalPath, grandTotal || 0);
      };
      // add + to bonus totals
      if (totalType == "bonus" && grandTotal > 0) {
        grandTotal = "+" + grandTotal;
      };
      // update total
      total.textContent = grandTotal;
    };

    var all_totalBlock = helper.eA(".js-total-block");
    for (var i = 0; i < all_totalBlock.length; i++) {
      _update_totalBlock(all_totalBlock[i]);
    };
    sheet.storeCharacters();
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
    var totalPathBonusArrayIndex = totalBlock.dataset.totalPathBonusArrayIndex || false;
    var object;
    if (totalPath && totalPathBonusArrayIndex) {
      object = helper.getObject(sheet.getCharacter(), totalPath, [totalPathBonusArrayIndex]);
    } else if (totalPath) {
      object = helper.getObject(sheet.getCharacter(), totalPath);
    };
    var heading = element.dataset.modalHeading || "Bonuses to add to this ability";
    var totalBlockControl = document.createElement("div");
    totalBlockControl.setAttribute("class", "js-total-block-control");
    totalBlockControl.setAttribute("data-total-path", totalPath);
    var container = document.createElement("div");
    container.setAttribute("class", "container");
    var row = document.createElement("div");
    row.setAttribute("class", "row");
    if (object) {
      for (var key in object.bonuses) {
        // console.log(key, object.bonuses[key]);
        // totalBlockControl.setAttribute("data-" + key.replace(/_+/g, "-"), object.bonuses[key]);
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

  // function _bind_classSkillCheck(element) {
  //   var totalBlock = helper.getClosest(element, ".js-total-block");
  //   element.addEventListener("change", function() {
  //     _update_bonuses(this);
  //     render();
  //     // _store_bonuses(this, totalBlock);
  //   }, false);
  // };


  // function _store_bonuses(input, totalBlock) {
  //   console.log(input);
  //   var totalPath = totalBlock.dataset.totalPath;
  //   var totalPathBonusArrayIndex = totalBlock.dataset.totalPathBonusArrayIndex || false;
  //   var newBonuses = {};
  //   [].forEach.call(input.attributes, function(attribute) {
  //     if (/^data-/.test(attribute.name)) {
  //       var newKey = attribute.name.substr(5).replace(/-+/g, "_");
  //       newBonuses[newKey] = (attribute.value == "true");
  //     };
  //   });
  //   if (totalPath && totalPathBonusArrayIndex) {
  //     helper.setObject(sheet.getCharacter(), totalPath, newBonuses, totalPathBonusArrayIndex, "bonuses");
  //   } else if (totalPath) {
  //     helper.setObject(sheet.getCharacter(), totalPath, newBonuses, false, "bonuses");
  //   };
  // };

  function bind(totalBlock) {
    // if (totalBlock) {
    //   var totalBlockBonuses = totalBlock.querySelector(".js-total-block-bonuses");
    //   var totalBlockToggleCheck = totalBlock.querySelector(".js-total-block-toggle-check");
    //   if (totalBlockBonuses) {
    //     _bind_bonusButton(totalBlockBonuses);
    //   };
    //   if (totalBlockToggleCheck) {
    //     _bind_bonusCheck(totalBlockToggleCheck);
    //   };
    // } else {
      var all_totalBlockBonus = helper.eA(".js-total-block-bonuses");
      var all_totalBlockBonusCheck = helper.eA(".js-total-block-bonus-check");
      for (var i = 0; i < all_totalBlockBonus.length; i++) {
        _bind_bonusButton(all_totalBlockBonus[i]);
      };
      for (var i = 0; i < all_totalBlockBonusCheck.length; i++) {
        _bind_bonusCheck(all_totalBlockBonusCheck[i]);
      };
    // };
  };

  function _update_bonuses(input) {
    var bonusType = input.dataset.bonusType.replace(/-+/g, "_");
    var totalBlock = helper.getClosest(input, ".js-total-block") || helper.getClosest(input, ".js-total-block-control");
    var totalPath = totalBlock.dataset.totalPath;
    var bonusesPath = totalPath + ".bonuses";
    var bonusesObject = helper.getObject(sheet.getCharacter(), bonusesPath);
    bonusesObject[bonusType] = input.checked;


    // var totalBlock = helper.getClosest(input, ".js-total-block");
    // var totalBlockControl = helper.getClosest(input, ".js-total-block-control");
    // var path;
    // var totalPath;
    // var totalPathBonusArrayIndex;
    // if (totalBlockControl) {
    //   var bonusType = input.dataset.bonusType;
    //   if (bonusType == "str-bonus") {
    //     totalBlockControl.dataset.strBonus = input.checked;
    //   } else if (bonusType == "dex-bonus") {
    //     totalBlockControl.dataset.dexBonus = input.checked;
    //   } else if (bonusType == "con-bonus") {
    //     totalBlockControl.dataset.conBonus = input.checked;
    //   } else if (bonusType == "int-bonus") {
    //     totalBlockControl.dataset.intBonus = input.checked;
    //   } else if (bonusType == "wis-bonus") {
    //     totalBlockControl.dataset.wisBonus = input.checked;
    //   } else if (bonusType == "cha-bonus") {
    //     totalBlockControl.dataset.chaBonus = input.checked;
    //   } else if (bonusType == "bab") {
    //     totalBlockControl.dataset.bab = input.checked;
    //   } else if (bonusType == "size") {
    //     totalBlockControl.dataset.size = input.checked;
    //   } else if (bonusType == "level") {
    //     totalBlockControl.dataset.level = input.checked;
    //   } else if (bonusType == "half-level") {
    //     totalBlockControl.dataset.halfLevel = input.checked;
    //   } else if (bonusType == "plus-ten") {
    //     totalBlockControl.dataset.plusTen = input.checked;
    //   } else if (bonusType == "ac-armor") {
    //     totalBlockControl.dataset.acArmor = input.checked;
    //   } else if (bonusType == "ac-shield") {
    //     totalBlockControl.dataset.acShield = input.checked;
    //   } else if (bonusType == "ac-deflect") {
    //     totalBlockControl.dataset.acDeflect = input.checked;
    //   } else if (bonusType == "ac-dodge") {
    //     totalBlockControl.dataset.acDodge = input.checked;
    //   } else if (bonusType == "ac-natural") {
    //     totalBlockControl.dataset.acNatural = input.checked;
    //   } else if (bonusType == "class-skill") {
    //     totalBlockControl.dataset.classSkill = input.checked;
    //   } else if (bonusType == "check-penalty") {
    //     totalBlockControl.dataset.checkPenalty = input.checked;
    //   } else if (bonusType == "max-dex") {
    //     totalBlockControl.dataset.maxDex = input.checked;
    //   };
    // };
    // if (totalBlock) {
    //   path = input.dataset.path;
    //   totalPathBonusArrayIndex = totalBlock.dataset.totalPathBonusArrayIndex || false;
    //   if (totalPath && totalPathBonusArrayIndex) {
    //     console.log("total", 1);
    //
    //     helper.setObject(sheet.getCharacter(), totalPath, input.checked, totalPathBonusArrayIndex, "bonuses");
    //
    //   } else if (totalPath) {
    //     console.log("total", 2);
    //
    //     totalPath = totalPath + ".bonuses.class_skill";
    //     helper.setObject(sheet.getCharacter(), totalPath, input.checked);
    //
    //   };
    // };
  };

  function clear() {
    var all_totalBlock = helper.eA(".js-total-block");
    for (var i = 0; i < all_totalBlock.length; i++) {
      delete all_totalBlock[i].dataset.strBonus;
      delete all_totalBlock[i].dataset.dexBonus;
      delete all_totalBlock[i].dataset.conBonus;
      delete all_totalBlock[i].dataset.intBonus;
      delete all_totalBlock[i].dataset.wisBonus;
      delete all_totalBlock[i].dataset.chaBonus;
      delete all_totalBlock[i].dataset.babBonus;
      delete all_totalBlock[i].dataset.sizeBonus;
      delete all_totalBlock[i].dataset.levelBonus;
      delete all_totalBlock[i].dataset.halfLevelBonus;
      delete all_totalBlock[i].dataset.plusTenBonus;
      delete all_totalBlock[i].dataset.acArmor;
      delete all_totalBlock[i].dataset.acShield;
      delete all_totalBlock[i].dataset.acDeflect;
      delete all_totalBlock[i].dataset.acDodge;
      delete all_totalBlock[i].dataset.acNatural;
      delete all_totalBlock[i].dataset.classSkill;
      delete all_totalBlock[i].dataset.checkPenalty;
      delete all_totalBlock[i].dataset.maxDex;
    };
  };

  // exposed methods
  return {
    clear: clear,
    bind: bind,
    update: update,
    render: render
  };

})();
