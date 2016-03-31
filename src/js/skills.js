var skills = (function() {

  function _store(element) {
    var path = element.dataset.path;
    helper.updateObject(sheet.getCharacter(), path, element.textContent);
    sheet.storeCharacters();
  };

  function toggle(element) {
    var stats = ["Str", "Dex", "Con", "Int", "Wis", "Cha", "Lvl", "Half Lvl", "Bab", ""];
    var totalBonus = ["str", "dex", "con", "int", "wis", "cha", "level", "half-level", "bab", ""];
    var totalBlock = helper.getClosest(element, ".input-total-block");
    var statIndex;
    var newStatIndex;
    if (element.textContent == "Stat") {
      statIndex = 0;
      newStatIndex = 0;
    } else {
      statIndex = stats.indexOf(element.textContent);
      newStatIndex = statIndex + 1;
    };
    if (newStatIndex >= statIndex.length) {
      newStatIndex = 0;
    };

    if (totalBlock.removeAttribute("data-" + totalBonus[statIndex] + "-bonus")) {
      totalBlock.removeAttribute("data-" + totalBonus[statIndex] + "-bonus");
    };

    totalBlock.setAttribute("data-" + totalBonus[newStatIndex] + "-bonus", "true");
    element.textContent = stats[newStatIndex];


    // if (newStatIndex > stats.length) {
    //   newStatIndex = 0;
    // };
    // if (newStatIndex == stats.length) {
    //   totalBlock.removeAttribute("data-" + totalBonus[statIndex] + "-bonus");
    // };
  };

  function bind(array) {
    for (var i = 0; i < array.length; i++) {
      array[i].addEventListener("click", function() {
        toggle(this);
        _store(this);
        totalBlock.render();
      }, false);
    };
  };

  function render() {
    // var all_statSelect = helper.eA(".stat-select");
    // for (var i = 0; i < all_statSelect.length; i++) {
    //   var totalBlock = helper.getClosest(all_statSelect[i], ".input-total-block");
    //   var path = all_statSelect[i].dataset.path;
    //   var stat = helper.getObject(sheet.getCharacter(), path);
    //   if (stat != "") {
    //     totalBlock.setAttribute("data-" + stat.toLowerCase() + "-bonus", "true");
    //   };
    //   all_statSelect[i].textContent = stat;
    // };
  };

  // exposed methods
  return {
    render: render,
    bind: bind
  };

})();
