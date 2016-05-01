var checkBlock = (function() {

  function _store(element) {
    var totalBlock = helper.getClosest(element, ".total-block");
    var path = element.dataset.path;
    helper.updateObject(sheet.getCharacter(), path, element.checked);
    sheet.storeCharacters();
  };

  function destroy(element) {
    var totalBlock = helper.getClosest(element, ".total-block");
    var bonusType = element.dataset.bonusType;
    if (bonusType == "str-bonus") {
      totalBlock.removeAttribute("data-str-bonus");
    };
    if (bonusType == "dex-bonus") {
      totalBlock.removeAttribute("data-dex-bonus");
    };
    if (bonusType == "con-bonus") {
      totalBlock.removeAttribute("data-con-bonus");
    };
    if (bonusType == "int-bonus") {
      totalBlock.removeAttribute("data-int-bonus");
    };
    if (bonusType == "wis-bonus") {
      totalBlock.removeAttribute("data-wis-bonus");
    };
    if (bonusType == "cha-bonus") {
      totalBlock.removeAttribute("data-cha-bonus");
    };
    if (bonusType == "bab") {
      totalBlock.removeAttribute("data-bab-bonus");
    };
    if (bonusType == "size") {
      totalBlock.removeAttribute("data-size-bonus");
    };
    if (bonusType == "special-size") {
      totalBlock.removeAttribute("data-special-size-bonus");
    };
    if (bonusType == "level") {
      totalBlock.removeAttribute("data-level-bonus");
    };
    if (bonusType == "half-level") {
      totalBlock.removeAttribute("data-half-level-bonus");
    };
    if (bonusType == "plus-ten") {
      totalBlock.removeAttribute("data-plus-ten-bonus");
    };
    if (bonusType == "ac-armor") {
      totalBlock.removeAttribute("data-ac-armor");
    };
    if (bonusType == "ac-shield") {
      totalBlock.removeAttribute("data-ac-shield");
    };
    if (bonusType == "ac-deflect") {
      totalBlock.removeAttribute("data-ac-seflect");
    };
    if (bonusType == "ac-dodge") {
      totalBlock.removeAttribute("data-ac-dodge");
    };
    if (bonusType == "ac-natural") {
      totalBlock.removeAttribute("data-acnatural");
    };
    if (bonusType == "class-skill") {
      totalBlock.removeAttribute("data-class-skill");
    };
  };

  function _toggle(element) {
    var totalBlock = helper.getClosest(element, ".total-block");
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

  function bind() {
    var all_checkBlock = helper.eA(".check-block");
    for (var i = 0; i < all_checkBlock.length; i++) {
      var checkbox = all_checkBlock[i].querySelector(".input-check");
      if (checkbox) {
        checkbox.addEventListener("click", function() {
          _toggle(this);
          _store(this);
          totalBlock.render();
        }, false);
      };
    };
  };

  function render() {
    var all_checkBlock = helper.eA(".check-block");
    // var all_inputCheck = helper.eA(".input-check");
    for (var i = 0; i < all_checkBlock.length; i++) {
      var checkbox = all_checkBlock[i].querySelector(".input-check");
      var path = checkbox.dataset.path;
      var bonusType = checkbox.dataset.bonusType;
      var state = helper.getObject(sheet.getCharacter(), path);
      var totalBlock = helper.getClosest(checkbox, ".total-block");
      checkbox.checked = state;
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

  // exposed methods
  return {
    render: render,
    destroy: destroy,
    bind: bind
  };

})();
