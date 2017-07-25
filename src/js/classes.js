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
    if (totalBab < 100) {
      if (totalBab >= 5) {
        while (totalBab > 0) {
          allBab.push("+" + totalBab);
          totalBab = totalBab - 5;
        };
      } else {
        allBab.push("+" + totalBab);
      };
    } else {
      allBab.push("BAB exceeds maximum calculation");
    };
    allBab = allBab.join(" / ");
    return allBab;
  };

  function delayUpdate(element) {
    render();
    textBlock.render();
    totalBlock.render();
  };

  var delayUpdateTimer = null;

  function bind(inputBlock) {
    var input = inputBlock.querySelector(".js-input-block-field");
    if (input) {
      input.addEventListener("input", function() {
        clearTimeout(delayUpdateTimer);
        delayUpdateTimer = setTimeout(delayUpdate, 300, this);
      }, false);
    };
  };

  function render() {
    var all_classes = helper.getObject(sheet.getCharacter(), "basics.classes");
    var totalLevels = _total(all_classes, "level");
    var totalHP = _total(all_classes, "hp") + (totalLevels * stats.getMod("con"));
    var totalBab = _total(all_classes, "bab");
    var totalRanks = _total(all_classes, "ranks") + (totalLevels * stats.getMod("int"));
    var totalFortitude = _total(all_classes, "fortitude");
    var totalReflex = _total(all_classes, "reflex");
    var totalWill = _total(all_classes, "will");
    var baseAttackBonuses = _makeBaseAttackBonuses(totalBab);
    helper.setObject(sheet.getCharacter(), "basics.level", totalLevels);
    helper.setObject(sheet.getCharacter(), "defense.hp.total", totalHP);
    helper.setObject(sheet.getCharacter(), "offense.base_attack", totalBab);
    helper.setObject(sheet.getCharacter(), "offense.base_attack_bonuses", baseAttackBonuses);
    helper.setObject(sheet.getCharacter(), "skills.ranks.total", totalRanks);
    helper.setObject(sheet.getCharacter(), "defense.fortitude.base", totalFortitude);
    helper.setObject(sheet.getCharacter(), "defense.reflex.base", totalReflex);
    helper.setObject(sheet.getCharacter(), "defense.will.base", totalWill);
  };

  // exposed methods
  return {
    bind: bind,
    render: render
  };

})();
