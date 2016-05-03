var totalBlock = (function() {


  function render() {
    var all_totalBlockToggle = helper.eA(".js-total-block-toggle");
    for (var i = 0; i < all_totalBlockToggle.length; i++) {
      var check = all_totalBlockToggle[i].querySelector(".js-total-block-toggle-check");
      var path = check.dataset.path;
      var bonusType = check.dataset.bonusType;
      var state = helper.getObject(sheet.getCharacter(), path);
      var totalBlock = helper.getClosest(check, ".js-total-block");
      check.checked = state;
      if (state) {
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
        if (bonusType == "special-size") {
          totalBlock.dataset.specialSizeBonus = "true";
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
      };
    };
  };

  function update() {
    var all_totalBlock = helper.eA(".js-total-block");
    for (var i = 0; i < all_totalBlock.length; i++) {
      var statsStrModifier = helper.e(".js-stats-str-modifier");
      var statsDexModifier = helper.e(".js-stats-dex-modifier");
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
      var strBonus = 0;
      var dexBonus = 0;
      var conBonus = 0;
      var intBonus = 0;
      var wisBonus = 0;
      var chaBonus = 0;
      var babBonus = 0;
      var sizeBonus = 0;
      var specialSizeBonus = 0;
      var levelBonus = 0;
      var halfLevelBonus = 0;
      var plusTenBonus = 0;
      var acArmor = 0;
      var acShield = 0;
      var acDeflect = 0;
      var acDodge = 0;
      var acNatural = 0;
      var classSkill = 0;
      // str
      if (all_totalBlock[i].dataset.strBonus == "true") {
        // if ability temp mod is empty
        if (statsStrModifierTemp.textContent == "") {
          strBonus = parseInt(statsStrModifier.textContent, 10 || 0);
        } else {
          strBonus = parseInt(statsStrModifierTemp.textContent, 10 || 0);
        };
      };
      // dex
      if (all_totalBlock[i].dataset.dexBonus == "true") {
        // if ability temp mod is empty
        if (statsDexModifierTemp.textContent == "") {
          dexBonus = parseInt(statsDexModifier.textContent, 10 || 0);
        } else {
          dexBonus = parseInt(statsDexModifierTemp.textContent, 10 || 0);
        };
      };
      // con
      if (all_totalBlock[i].dataset.conBonus == "true") {
        // if ability temp mod is empty
        if (statsConModifierTemp.textContent == "") {
          conBonus = parseInt(statsConModifier.textContent, 10 || 0);
        } else {
          conBonus = parseInt(statsConModifierTemp.textContent, 10 || 0);
        };
      };
      // int
      if (all_totalBlock[i].dataset.intBonus == "true") {
        // if ability temp mod is empty
        if (statsIntModifierTemp.textContent == "") {
          intBonus = parseInt(statsIntModifier.textContent, 10 || 0);
        } else {
          intBonus = parseInt(statsIntModifierTemp.textContent, 10 || 0);
        };
      };
      // wis
      if (all_totalBlock[i].dataset.wisBonus == "true") {
        // if ability temp mod is empty
        if (statsWisModifierTemp.textContent == "") {
          wisBonus = parseInt(statsWisModifier.textContent, 10 || 0);
        } else {
          wisBonus = parseInt(statsWisModifierTemp.textContent, 10 || 0);
        };
      };
      // cha
      if (all_totalBlock[i].dataset.chaBonus == "true") {
        // if ability temp mod is empty
        if (statsChaModifierTemp.textContent == "") {
          chaBonus = parseInt(statsChaModifier.textContent, 10 || 0);
        } else {
          chaBonus = parseInt(statsChaModifierTemp.textContent, 10 || 0);
        };
      };
      // bab
      if (all_totalBlock[i].dataset.babBonus == "true") {
        babBonus = parseInt(helper.e("#offense-base-attack").value, 10 || 0);
      };
      // size
      if (all_totalBlock[i].dataset.sizeBonus == "true") {
        sizeBonus = parseInt(helper.e("#defense-ac-size-bonus").value, 10 || 0);
      };
      // special size
      if (all_totalBlock[i].dataset.specialSizeBonus == "true") {
        specialSizeBonus = parseInt(helper.e("#offense-special-size-bonus").value, 10 || 0);
      };
      // level
      if (all_totalBlock[i].dataset.levelBonus == "true") {
        levelBonus = parseInt(helper.e("#basics-level").value, 10 || 0);
      };
      // half level
      if (all_totalBlock[i].dataset.halfLevelBonus == "true") {
        halfLevelBonus = Math.floor(parseInt(helper.e("#basics-level").value, 10 || 0) / 2);
      };
      // ac armor
      if (all_totalBlock[i].dataset.acArmor == "true") {
        acArmor = parseInt(helper.e("#defense-ac-armor").value, 10 || 0);
      };
      // ac shield
      if (all_totalBlock[i].dataset.acShield == "true") {
        acShield = parseInt(helper.e("#defense-ac-shield").value, 10 || 0);
      };
      // ac deflect
      if (all_totalBlock[i].dataset.acDeflect == "true") {
        acDeflect = parseInt(helper.e("#defense-ac-deflect").value, 10 || 0);
      };
      // ac dodge
      if (all_totalBlock[i].dataset.acDodge == "true") {
        acDodge = parseInt(helper.e("#defense-ac-dodge").value, 10 || 0);
      };
      // ac natural
      if (all_totalBlock[i].dataset.acNatural == "true") {
        acNatural = parseInt(helper.e("#defense-ac-natural").value, 10 || 0);
      };
      // class skill
      if (all_totalBlock[i].dataset.classSkill == "true") {
        classSkill = 3;
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
      if (isNaN(specialSizeBonus)) {
        specialSizeBonus = 0;
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
      var total = all_totalBlock[i].querySelector(".js-total-block-total");
      var all_inputBlockField = all_totalBlock[i].querySelectorAll(".js-input-block-field");
      var modifiers = [];
      var modifiers_total = 0;
      for (var q = 0; q < all_inputBlockField.length; q++) {
        if (all_inputBlockField.length > 0) {
          if (all_inputBlockField[q].dataset.total == "addition") {
            modifiers.push(parseInt(all_inputBlockField[q].value, 10) || 0);
          };
          if (all_inputBlockField[q].dataset.total == "subtract") {
            modifiers.push(-parseInt(all_inputBlockField[q].value, 10) || 0);
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
      var grandTotal = modifiers_total + levelBonus + halfLevelBonus + babBonus + sizeBonus + specialSizeBonus + plusTenBonus + strBonus + dexBonus + conBonus + intBonus + wisBonus + chaBonus + acArmor + acShield + acDeflect + acDodge + acNatural + classSkill;
      total.textContent = grandTotal;
    };
  };

  function _store(element) {
    var totalBlock = helper.getClosest(element, ".js-total-block");
    var path = element.dataset.path;
    helper.updateObject(sheet.getCharacter(), path, element.checked);
    sheet.storeCharacters();
  };

  function bind() {
    var all_totalBlockToggle = helper.eA(".js-total-block-toggle");
    for (var i = 0; i < all_totalBlockToggle.length; i++) {
      var check = all_totalBlockToggle[i].querySelector(".js-total-block-toggle-check");
      check.addEventListener("click", function() {
        _addRemoveBonus(this);
        _store(this);
        update();
      }, false);
    };
  };

  function _addRemoveBonus(element) {
    var totalBlock = helper.getClosest(element, ".js-total-block");
    var bonusType = element.dataset.bonusType;
    if (element.checked) {
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
      if (bonusType == "special-size") {
        totalBlock.dataset.specialSizeBonus = "true";
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
      if (bonusType == "special-size") {
        totalBlock.dataset.specialSizeBonus = "false";
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
    };
  };

  // exposed methods
  return {
    bind: bind,
    update: update,
    render: render
  };

})();
