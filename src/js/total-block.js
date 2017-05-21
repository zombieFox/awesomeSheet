var totalBlock = (function() {


  function render() {
    var all_totalBlockBonuses = helper.eA(".js-total-block-bonuses");
    var all_totalBlockToggleCheck = helper.eA(".js-total-block-toggle-check");
    for (var i = 0; i < all_totalBlockBonuses.length; i++) {
      var path = all_totalBlockBonuses[i].dataset.bonusPath;
      var totalBlock = helper.getClosest(all_totalBlockBonuses[i], ".js-total-block");
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
    for (var i = 0; i < all_totalBlockToggleCheck.length; i++) {
      var path = all_totalBlockToggleCheck[i].dataset.path;
      var state = helper.getObject(sheet.getCharacter(), path);
      all_totalBlockToggleCheck[i].checked = state;
    };
  };

  function update() {

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
      var input = totalBlock.querySelector(".js-input-block-field-ranks") || totalBlock.querySelector(".js-input-block-field-custom-ranks");
      var path = input.dataset.path;
      var ranks = helper.getObject(sheet.getCharacter(), path);
      var value;
      if (ranks > 0) {
        classSkill = 3;
      } else {
        classSkill = 0;
      };
      return value;
    };

    var all_totalBlock = helper.eA(".js-total-block");
    for (var i = 0; i < all_totalBlock.length; i++) {
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
      if (all_totalBlock[i].dataset.strBonus == "true") {
        strBonus = _checkForTempModifier(sheet.getCharacter().statistics.stats.str.modifier, sheet.getCharacter().statistics.stats.str.temp_modifier);
      };
      // if dex data attribute is true
      if (all_totalBlock[i].dataset.dexBonus == "true") {
        dexBonus = _checkForTempModifier(sheet.getCharacter().statistics.stats.dex.modifier, sheet.getCharacter().statistics.stats.dex.temp_modifier);
      };
      // if dex data attribute is true
      if (all_totalBlock[i].dataset.dexBonus == "true") {
        dexBonus = _checkForTempModifier(sheet.getCharacter().statistics.stats.dex.modifier, sheet.getCharacter().statistics.stats.dex.temp_modifier);
      };
      // if con data attribute is true
      if (all_totalBlock[i].dataset.conBonus == "true") {
        conBonus = _checkForTempModifier(sheet.getCharacter().statistics.stats.con.modifier, sheet.getCharacter().statistics.stats.con.temp_modifier);
      };
      // if int data attribute is true
      if (all_totalBlock[i].dataset.intBonus == "true") {
        intBonus = _checkForTempModifier(sheet.getCharacter().statistics.stats.int.modifier, sheet.getCharacter().statistics.stats.int.temp_modifier);
      };
      // if wis data attribute is true
      if (all_totalBlock[i].dataset.wisBonus == "true") {
        wisBonus = _checkForTempModifier(sheet.getCharacter().statistics.stats.wis.modifier, sheet.getCharacter().statistics.stats.wis.temp_modifier);
      };
      // if cha data attribute is true
      if (all_totalBlock[i].dataset.chaBonus == "true") {
        chaBonus = _checkForTempModifier(sheet.getCharacter().statistics.stats.cha.modifier, sheet.getCharacter().statistics.stats.cha.temp_modifier);
      };
      // if max dex data attribute is true
      if (all_totalBlock[i].dataset.maxDex == "true") {
        // if max dex is less than dex bonus
        if (sheet.getCharacter().defense.ac.max_dex < _checkForTempModifier(sheet.getCharacter().statistics.stats.dex.modifier, sheet.getCharacter().statistics.stats.dex.temp_modifier) && sheet.getCharacter().defense.ac.max_dex != "") {
          // set dex bonuse to mac dex
          dexBonus = sheet.getCharacter().defense.ac.max_dex;
        };
      };
      // if bab data attribute is true
      if (all_totalBlock[i].dataset.babBonus == "true") {
        babBonus = _checkValue(sheet.getCharacter().offense.base_attack);
      };
      // size
      if (all_totalBlock[i].dataset.sizeBonus == "true") {
        sizeBonus = _checkValue(sheet.getCharacter().defense.ac.size_bonus);
      };
      // level
      if (all_totalBlock[i].dataset.levelBonus == "true") {
        levelBonus = _checkValue(sheet.getCharacter().basics.level);
      };
      // half level
      if (all_totalBlock[i].dataset.halfLevelBonus == "true") {
        halfLevelBonus = Math.floor(_checkValue(sheet.getCharacter().basics.level) / 2);
      };
      // ac armor
      if (all_totalBlock[i].dataset.acArmor == "true") {
        acArmor = _checkValue(sheet.getCharacter().defense.ac.armor);
      };
      // ac shield
      if (all_totalBlock[i].dataset.acShield == "true") {
        acShield = _checkValue(sheet.getCharacter().defense.ac.shield);
      };
      // ac deflect
      if (all_totalBlock[i].dataset.acDeflect == "true") {
        acDeflect = _checkValue(sheet.getCharacter().defense.ac.deflect);
      };
      // ac dodge
      if (all_totalBlock[i].dataset.acDodge == "true") {
        acDodge = _checkValue(sheet.getCharacter().defense.ac.dodge);
      };
      // ac natural
      if (all_totalBlock[i].dataset.acNatural == "true") {
        acNatural = _checkValue(sheet.getCharacter().defense.ac.natural);
      };
      // armor check penalty
      if (all_totalBlock[i].dataset.checkPenalty == "true") {
        checkPenalty = _checkValue(sheet.getCharacter().defense.ac.check_penalty);
      };
      // class skill
      if (all_totalBlock[i].dataset.classSkill == "true") {
        _checkClassSkill(all_totalBlock[i]);
      };
      // 10
      if (all_totalBlock[i].dataset.plusTenBonus == "true") {
        plusTenBonus = 10;
      };
      var total = all_totalBlock[i].querySelector(".js-total-block-total");
      var totalType = all_totalBlock[i].dataset.totalType;
      var totalPath = total.dataset.path;
      var all_inputBlockField = all_totalBlock[i].querySelectorAll(".js-input-block-field");
      var modifiers = [];
      var modifiers_total = 0;
      // if there are any input fields in total block
      if (all_inputBlockField.length > 0) {
        // iterate over all input fields
        for (var q = 0; q < all_inputBlockField.length; q++) {
          var value;
          // find the path for input field
          var inputPath = all_inputBlockField[q].dataset.path;
          // if path is found
          if (inputPath) {
            // get the value of path from character
            value = parseInt(helper.getObject(sheet.getCharacter(), inputPath), 10);
          } else {
            // get the value from input
            // needed because clone consumable total blocks dont have data paths
            value = parseInt(all_inputBlockField[q].value, 10) || 0;
          };
          // if the value is not a NaN
          if (!isNaN(value)) {
            // check if the inpuy is to add or subtract
            if (all_inputBlockField[q].dataset.total == "addition") {
              // push to array
              modifiers.push(value);
            };
            // check if the inpuy is to add or subtract
            if (all_inputBlockField[q].dataset.total == "subtract") {
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
    var path = element.dataset.bonusPath;
    var bonuses = element.dataset.bonuses.split(",");
    var heading = element.dataset.modalHeading || "Bonuses to add to this ability";
    var container = document.createElement("div");
    container.setAttribute("class", "container");
    var row = document.createElement("div");
    row.setAttribute("class", "row");

    if (bonuses) {
      var data = helper.getObject(sheet.getCharacter(), path);
      for (var i = 0; i < bonuses.length; i++) {
        var col = document.createElement("div");
        col.setAttribute("class", "col-xs-6 col-xl-4");

        var div = document.createElement("div");
        div.setAttribute("class", "m-total-block-toggle js-total-block-toggle");

        var input = document.createElement("input");
        input.setAttribute("id", bonuses[i].replace(/_+/g, "-"));
        input.setAttribute("class", "m-total-block-toggle-check");
        input.setAttribute("data-path", path + "." + bonuses[i]);
        input.setAttribute("data-bonus-type", bonuses[i].replace(/_+/g, "-"));
        input.setAttribute("type", "checkbox");
        input.setAttribute("tabindex", "3");
        input.checked = data[bonuses[i]];

        var label = document.createElement("label");
        label.setAttribute("for", bonuses[i].replace(/_+/g, "-"));
        label.setAttribute("class", "label-left u-full-width");
        label.textContent = _bonusTextLable(bonuses[i]);

        div.appendChild(input);
        div.appendChild(label);
        col.appendChild(div);
        row.appendChild(col);

        _bind_bonusTypeChecks(input, totalBlock);

      };
    };
    container.appendChild(row);
    modal.render(heading, container, "Done");
  };

  function _bind_bonusTypeChecks(element, totalBlock) {
    element.addEventListener("change", function() {
      _addRemoveBonus(this, totalBlock);
      _store(this, totalBlock);
      update();
    }, false);
  };

  function _bind_classSkillToggle(element) {
    var totalBlock = helper.getClosest(element, ".js-total-block");
    element.addEventListener("change", function() {
      _addRemoveBonus(this, totalBlock);
      _store(this, totalBlock);
      update();
    }, false);
  };

  function _bind_bonusButtons(element) {
    if (element.nodeName.toLowerCase() == "a") {
      element.addEventListener("click", function(event) {
        event.stopPropagation();
        event.preventDefault();
        _totalBlockModalContent(this);
      }, false);
    };
  };

  function _store(input, totalBlock) {
    var totalBlock = helper.getClosest(input, ".js-total-block") || totalBlock;
    var path = input.dataset.path;
    helper.setObject(sheet.getCharacter(), path, input.checked);
    sheet.storeCharacters();
  };

  function bind() {
    var all_totalBlockBonuses = helper.eA(".js-total-block-bonuses");
    var all_totalBlockToggleCheck = helper.eA(".js-total-block-toggle-check");
    for (var i = 0; i < all_totalBlockBonuses.length; i++) {
      _bind_bonusButtons(all_totalBlockBonuses[i]);
    };
    for (var i = 0; i < all_totalBlockToggleCheck.length; i++) {
      _bind_classSkillToggle(all_totalBlockToggleCheck[i]);
    };
  };

  function _addRemoveBonus(input, totalBlock) {
    var totalBlock = helper.getClosest(input, ".js-total-block") || totalBlock;
    var bonusType = input.dataset.bonusType;
    if (input.checked) {
      if (bonusType == "str-bonus") {
        totalBlock.dataset.strBonus = "true";
      };
      if (bonusType == "dex-bonus") {
        totalBlock.dataset.dexBonus = "true";
      };
      if (bonusType == "con-bonus") {
        totalBlock.dataset.conBonus = "true";
      };
      if (bonusType == "int-bonus") {
        totalBlock.dataset.intBonus = "true";
      };
      if (bonusType == "wis-bonus") {
        totalBlock.dataset.wisBonus = "true";
      };
      if (bonusType == "cha-bonus") {
        totalBlock.dataset.chaBonus = "true";
      };
      if (bonusType == "bab") {
        totalBlock.dataset.babBonus = "true";
      };
      if (bonusType == "size") {
        totalBlock.dataset.sizeBonus = "true";
      };
      if (bonusType == "level") {
        totalBlock.dataset.levelBonus = "true";
      };
      if (bonusType == "half-level") {
        totalBlock.dataset.halfLevelBonus = "true";
      };
      if (bonusType == "plus-ten") {
        totalBlock.dataset.plusTenBonus = "true";
      };
      if (bonusType == "ac-armor") {
        totalBlock.dataset.acArmor = "true";
      };
      if (bonusType == "ac-shield") {
        totalBlock.dataset.acShield = "true";
      };
      if (bonusType == "ac-deflect") {
        totalBlock.dataset.acDeflect = "true";
      };
      if (bonusType == "ac-dodge") {
        totalBlock.dataset.acDodge = "true";
      };
      if (bonusType == "ac-natural") {
        totalBlock.dataset.acNatural = "true";
      };
      if (bonusType == "class-skill") {
        totalBlock.dataset.classSkill = "true";
      };
      if (bonusType == "check-penalty") {
        totalBlock.dataset.checkPenalty = "true";
      };
      if (bonusType == "max-dex") {
        totalBlock.dataset.maxDex = "true";
      };
    } else {
      if (bonusType == "str-bonus") {
        totalBlock.dataset.strBonus = "false";
      };
      if (bonusType == "dex-bonus") {
        totalBlock.dataset.dexBonus = "false";
      };
      if (bonusType == "con-bonus") {
        totalBlock.dataset.conBonus = "false";
      };
      if (bonusType == "int-bonus") {
        totalBlock.dataset.intBonus = "false";
      };
      if (bonusType == "wis-bonus") {
        totalBlock.dataset.wisBonus = "false";
      };
      if (bonusType == "cha-bonus") {
        totalBlock.dataset.chaBonus = "false";
      };
      if (bonusType == "bab") {
        totalBlock.dataset.babBonus = "false";
      };
      if (bonusType == "size") {
        totalBlock.dataset.sizeBonus = "false";
      };
      if (bonusType == "level") {
        totalBlock.dataset.levelBonus = "false";
      };
      if (bonusType == "half-level") {
        totalBlock.dataset.halfLevelBonus = "false";
      };
      if (bonusType == "plus-ten") {
        totalBlock.dataset.plusTenBonus = "false";
      };
      if (bonusType == "ac-armor") {
        totalBlock.dataset.acArmor = "false";
      };
      if (bonusType == "ac-shield") {
        totalBlock.dataset.acShield = "false";
      };
      if (bonusType == "ac-deflect") {
        totalBlock.dataset.acDeflect = "false";
      };
      if (bonusType == "ac-dodge") {
        totalBlock.dataset.acDodge = "false";
      };
      if (bonusType == "ac-natural") {
        totalBlock.dataset.acNatural = "false";
      };
      if (bonusType == "class-skill") {
        totalBlock.dataset.classSkill = "false";
      };
      if (bonusType == "check-penalty") {
        totalBlock.dataset.checkPenalty = "false";
      };
      if (bonusType == "max-dex") {
        totalBlock.dataset.maxDex = "false";
      };
    };
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
