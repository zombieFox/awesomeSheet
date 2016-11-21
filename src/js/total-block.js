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
    var all_totalBlock = helper.eA(".js-total-block");
    for (var i = 0; i < all_totalBlock.length; i++) {
      // var statsStrModifier = helper.e(".js-stats-str-modifier");
      // var statsDexModifier = helper.e(".js-stats-dex-modifier");
      var statsConModifier = helper.e(".js-stats-con-modifier");
      var statsIntModifier = helper.e(".js-stats-int-modifier");
      var statsWisModifier = helper.e(".js-stats-wis-modifier");
      var statsChaModifier = helper.e(".js-stats-cha-modifier");
      var statsStrModifierTemp = helper.e(".js-stats-str-modifier-temp");
      var statsDexModifierTemp = helper.e(".js-stats-dex-modifier-temp");
      var statsConModifierTemp = helper.e(".js-stats-con-modifier-temp");
      var statsIntModifierTemp = helper.e(".js-stats-int-modifier-temp");
      var statsWisModifierTemp = helper.e(".js-stats-wis-modifier-temp");
      var statsChaModifierTemp = helper.e(".js-stats-cha-modifier-temp");
      var possibleBonuses
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
        // if temp str modifier is empty
        if (sheet.getCharacter().statistics.stats.str.temp_modifier == "") {
          // use str modifier
          strBonus = sheet.getCharacter().statistics.stats.str.modifier;
        } else {
          // use str temp modifier
          strBonus = sheet.getCharacter().statistics.stats.str.temp_modifier;
        };
      };
      // if dex data attribute is true
      if (all_totalBlock[i].dataset.dexBonus == "true") {
        // if temp dex modifier is empty
        if (sheet.getCharacter().statistics.stats.dex.temp_modifier == "") {
          // use dex modifier
          dexBonus = sheet.getCharacter().statistics.stats.dex.modifier;
        } else {
          // use dex temp modifier
          dexBonus = sheet.getCharacter().statistics.stats.dex.temp_modifier;
        };
      };
      // if con data attribute is true
      if (all_totalBlock[i].dataset.conBonus == "true") {
        // if temp con modifier is empty
        if (sheet.getCharacter().statistics.stats.con.temp_modifier == "") {
          // use con modifier
          conBonus = sheet.getCharacter().statistics.stats.con.modifier;
        } else {
          // use con temp modifier
          conBonus = sheet.getCharacter().statistics.stats.con.temp_modifier;
        };
      };
      // if int data attribute is true
      if (all_totalBlock[i].dataset.intBonus == "true") {
        // if temp int modifier is empty
        if (sheet.getCharacter().statistics.stats.int.temp_modifier == "") {
          // use int modifier
          intBonus = sheet.getCharacter().statistics.stats.int.modifier;
        } else {
          // use int temp modifier
          intBonus = sheet.getCharacter().statistics.stats.int.temp_modifier;
        };
      };
      // if wis data attribute is true
      if (all_totalBlock[i].dataset.wisBonus == "true") {
        // if temp wis modifier is empty
        if (sheet.getCharacter().statistics.stats.wis.temp_modifier == "") {
          // use wis modifier
          wisBonus = sheet.getCharacter().statistics.stats.wis.modifier;
        } else {
          // use wis temp modifier
          wisBonus = sheet.getCharacter().statistics.stats.wis.temp_modifier;
        };
      };
      // if cha data attribute is true
      if (all_totalBlock[i].dataset.chaBonus == "true") {
        // if temp cha modifier is empty
        if (sheet.getCharacter().statistics.stats.cha.temp_modifier == "") {
          // use cha modifier
          chaBonus = sheet.getCharacter().statistics.stats.cha.modifier;
        } else {
          // use cha temp modifier
          chaBonus = sheet.getCharacter().statistics.stats.cha.temp_modifier;
        };
      };
      // if bab data attribute is true
      if (all_totalBlock[i].dataset.babBonus == "true") {
        babBonus = parseInt(sheet.getCharacter().offense.base_attack, 10) || 0;
      };
      // size
      if (all_totalBlock[i].dataset.sizeBonus == "true") {
        sizeBonus = parseInt(sheet.getCharacter().defense.ac.size_bonus, 10 || 0);
      };
      // level
      if (all_totalBlock[i].dataset.levelBonus == "true") {
        levelBonus = parseInt(sheet.getCharacter().basics.level, 10 || 0);
      };
      // half level
      if (all_totalBlock[i].dataset.halfLevelBonus == "true") {
        halfLevelBonus = Math.floor(parseInt(sheet.getCharacter().basics.level, 10 || 0) / 2) || 0;
      };
      // ac armor
      if (all_totalBlock[i].dataset.acArmor == "true") {
        acArmor = parseInt(sheet.getCharacter().defense.ac.armor, 10 || 0);
      };
      // ac shield
      if (all_totalBlock[i].dataset.acShield == "true") {
        acShield = parseInt(sheet.getCharacter().defense.ac.shield, 10 || 0);
      };
      // ac deflect
      if (all_totalBlock[i].dataset.acDeflect == "true") {
        acDeflect = parseInt(sheet.getCharacter().defense.ac.deflect, 10 || 0);
      };
      // ac dodge
      if (all_totalBlock[i].dataset.acDodge == "true") {
        acDodge = parseInt(sheet.getCharacter().defense.ac.dodge, 10 || 0);
      };
      // ac natural
      if (all_totalBlock[i].dataset.acNatural == "true") {
        acNatural = parseInt(sheet.getCharacter().defense.ac.natural, 10 || 0);
      };
      // armor check penalty
      if (all_totalBlock[i].dataset.checkPenalty == "true") {
        checkPenalty = parseInt(sheet.getCharacter().defense.ac.check_penalty, 10 || 0);
      };
      // class skill
      if (all_totalBlock[i].dataset.classSkill == "true") {
        var input = all_totalBlock[i].querySelector(".js-input-block-field-ranks") || all_totalBlock[i].querySelector(".js-input-block-field-custom-ranks");
        var path = input.dataset.path;
        var ranks = helper.getObject(sheet.getCharacter(), path);
        if (ranks > 0) {
          classSkill = 3;
        } else {
          classSkill = 0;
        };
      };
      // 10
      if (all_totalBlock[i].dataset.plusTenBonus == "true") {
        plusTenBonus = 10;
      };
      // check if any bonus is NaN
      if (isNaN(levelBonus)) {
        levelBonus = 0;
      };
      if (isNaN(strBonus)) {
        strBonus = 0;
      };
      if (isNaN(dexBonus)) {
        dexBonus = 0;
      };
      if (isNaN(conBonus)) {
        conBonus = 0;
      };
      if (isNaN(intBonus)) {
        intBonus = 0;
      };
      if (isNaN(wisBonus)) {
        wisBonus = 0;
      };
      if (isNaN(chaBonus)) {
        chaBonus = 0;
      };
      if (isNaN(babBonus)) {
        babBonus = 0;
      };
      if (isNaN(sizeBonus)) {
        sizeBonus = 0;
      };
      if (isNaN(levelBonus)) {
        levelBonus = 0;
      };
      if (isNaN(plusTenBonus)) {
        plusTenBonus = 0;
      };
      if (isNaN(acArmor)) {
        acArmor = 0;
      };
      if (isNaN(acShield)) {
        acShield = 0;
      };
      if (isNaN(acDeflect)) {
        acDeflect = 0;
      };
      if (isNaN(acDodge)) {
        acDodge = 0;
      };
      if (isNaN(acNatural)) {
        acNatural = 0;
      };
      if (isNaN(classSkill)) {
        classSkill = 0;
      };
      if (isNaN(checkPenalty)) {
        checkPenalty = 0;
      };
      var total = all_totalBlock[i].querySelector(".js-total-block-total");
      var totalPath = total.dataset.path;
      var all_inputBlockField = all_totalBlock[i].querySelectorAll(".js-input-block-field");
      var modifiers = [];
      var modifiers_total = 0;
      // if there are any input fields in total block
      if (all_inputBlockField.length > 0) {
        // iterate over all input fields
        for (var q = 0; q < all_inputBlockField.length; q++) {
          // find the path for input field
          var inputPath = all_inputBlockField[q].dataset.path;
          // if path is found
          if (inputPath) {
            // get the value of path from character
            var value = parseInt(helper.getObject(sheet.getCharacter(), inputPath), 10);
            // if the valye is not a NaN
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
      };
      // if modifiers array has values total them
      if (modifiers.length > 0) {
        modifiers_total = modifiers.reduce(function(a, b) {
          return a + b;
        });
      };
      // grand total
      var grandTotal = modifiers_total + levelBonus + halfLevelBonus + babBonus + sizeBonus + plusTenBonus + strBonus + dexBonus + conBonus + intBonus + wisBonus + chaBonus + acArmor + acShield + acDeflect + acDodge + acNatural + classSkill + checkPenalty;
      // update total
      total.textContent = grandTotal;
      // store current to character object
      if (totalPath) {
        helper.setObject(sheet.getCharacter(), totalPath, parseInt(total.innerHTML, 10) || 0);
      };
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
