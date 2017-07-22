var classes = (function() {

  function _total(classObjects, key) {
    var currentTotal = 0;
    for (var i = 0; i < classObjects.length; i++) {
      currentTotal = currentTotal + classObjects[i][key];
    };
    return parseInt(currentTotal, 10);
  };

  function _makeBaseAttackBonuses(totalBab) {
    var allBab = [];
    if (totalBab >= 5) {
      while (totalBab > 0) {
        allBab.push("+" + totalBab);
        totalBab = totalBab - 5;
      };
    } else {
      allBab.push("+" + totalBab);
    };
    allBab = allBab.join("/");
    return allBab;
  };

  function render() {
    var all_classes = helper.getObject(sheet.getCharacter(), "basics.class");
    var totalLevels = _total(all_classes, "level");
    var totalHP = _total(all_classes, "hp");
    var totalBab = _total(all_classes, "bab");
    var totalRanks = _total(all_classes, "ranks");
    var totalFortitude = _total(all_classes, "fortitude");
    var totalReflex = _total(all_classes, "reflex");
    var totalWill = _total(all_classes, "will");
    var baseAttackBonuses = _makeBaseAttackBonuses(totalBab);

    helper.setObject(sheet.getCharacter(), "basics.level", totalLevels);
    helper.setObject(sheet.getCharacter(), "defense.hp.total", totalHP);
    helper.setObject(sheet.getCharacter(), "offense.base_attack", baseAttackBonuses);
    helper.setObject(sheet.getCharacter(), "defense.fortitude.base", totalFortitude);
    helper.setObject(sheet.getCharacter(), "defense.reflex.base", totalReflex);
    helper.setObject(sheet.getCharacter(), "defense.will.base", totalWill);
  };

  function clear() {
    console.log(456);
  };

  // exposed methods
  return {
    render: render,
    clear: clear
  };

})();
