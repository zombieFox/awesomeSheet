var armorShield = (function() {

  var _timer_render = null;

  function bind(input) {
    var equipmentArmorArmorCheckPenalty = helper.e("#equipment-armor-armor-check-penalty");
    var equipmentArmorArmorMaxDex = helper.e("#equipment-armor-armor-max-dex");
    var equipmentArmorArmorArcaneSpellFailure = helper.e("#equipment-armor-armor-arcane-spell-failure");
    var equipmentArmorShieldCheckPenalty = helper.e("#equipment-armor-shield-check-penalty");
    var equipmentArmorShieldMaxDex = helper.e("#equipment-armor-shield-max-dex");
    var equipmentArmorShieldArcaneSpellFailure = helper.e("#equipment-armor-shield-arcane-spell-failure");

    equipmentArmorArmorCheckPenalty.addEventListener("input", function() {
      clearTimeout(_timer_render);
      _timer_render = setTimeout(update, 350);
    }, false);

    equipmentArmorArmorMaxDex.addEventListener("input", function() {
      clearTimeout(_timer_render);
      _timer_render = setTimeout(update, 350);
    }, false);

    equipmentArmorArmorArcaneSpellFailure.addEventListener("input", function() {
      clearTimeout(_timer_render);
      _timer_render = setTimeout(update, 350);
    }, false);

    equipmentArmorShieldCheckPenalty.addEventListener("input", function() {
      clearTimeout(_timer_render);
      _timer_render = setTimeout(update, 350);
    }, false);

    equipmentArmorShieldMaxDex.addEventListener("input", function() {
      clearTimeout(_timer_render);
      _timer_render = setTimeout(update, 350);
    }, false);

    equipmentArmorShieldArcaneSpellFailure.addEventListener("input", function() {
      clearTimeout(_timer_render);
      _timer_render = setTimeout(update, 350);
    }, false);

  };

  function update() {
    render();
    totalBlock.render();
    textBlock.render();
    display.clear();
    display.render();
  };

  function render() {
    _render_armorShield();
  };

  function _render_armorShield() {
    var _maxDex = function() {
      var maxDex = "";
      var armorMaxDex = helper.getObject({
        object: sheet.get(),
        path: "equipment.armor.armor.max_dex"
      });
      var shieldMaxDex = helper.getObject({
        object: sheet.get(),
        path: "equipment.armor.shield.max_dex"
      });
      if (armorMaxDex == "" && armorMaxDex !== 0) {
        armorMaxDex = null;
      };
      if (shieldMaxDex == "" && shieldMaxDex !== 0) {
        shieldMaxDex = null;
      };
      // if both armor and shield have a max dex
      if ((armorMaxDex != null || armorMaxDex === 0) && (shieldMaxDex != null || shieldMaxDex === 0)) {
        // find the lowest max dex
        if (armorMaxDex < shieldMaxDex) {
          maxDex = armorMaxDex;
        } else {
          maxDex = shieldMaxDex;
        };
        // if only armor has max dex
      } else if (armorMaxDex != null || armorMaxDex === 0) {
        maxDex = armorMaxDex;
        // if only shield has max dex
      } else if (shieldMaxDex != null || shieldMaxDex === 0) {
        maxDex = shieldMaxDex;
      };
      helper.setObject({
        object: sheet.get(),
        path: "equipment.armor.stats.max_dex.current",
        newValue: maxDex
      });
    };
    var _arcaneSpellFailure = function() {
      var arcaneSpellFailure = 0;
      var armorArcaneSpellFailure = helper.getObject({
        object: sheet.get(),
        path: "equipment.armor.armor.arcane_spell_failure"
      });
      var shieldArcaneSpellFailure = helper.getObject({
        object: sheet.get(),
        path: "equipment.armor.shield.arcane_spell_failure"
      });
      if (armorArcaneSpellFailure != "") {
        arcaneSpellFailure = arcaneSpellFailure + armorArcaneSpellFailure;
      };
      if (shieldArcaneSpellFailure != "") {
        arcaneSpellFailure = arcaneSpellFailure + shieldArcaneSpellFailure;
      };
      helper.setObject({
        object: sheet.get(),
        path: "equipment.armor.stats.arcane_spell_failure.current",
        newValue: arcaneSpellFailure
      });
    };
    var _checkPenalty = function() {
      var checkPenalty = 0;
      var armorCheckPenalty = helper.getObject({
        object: sheet.get(),
        path: "equipment.armor.armor.check_penalty"
      });
      var shieldCheckPenalty = helper.getObject({
        object: sheet.get(),
        path: "equipment.armor.shield.check_penalty"
      });
      if (armorCheckPenalty != "") {
        checkPenalty = checkPenalty + armorCheckPenalty;
      };
      if (shieldCheckPenalty != "") {
        checkPenalty = checkPenalty + shieldCheckPenalty;
      };
      helper.setObject({
        object: sheet.get(),
        path: "equipment.armor.stats.check_penalty.current",
        newValue: checkPenalty
      });
    };
    _maxDex();
    _arcaneSpellFailure();
    _checkPenalty();
  };

  // exposed methods
  return {
    bind: bind,
    render: render
  };

})();
