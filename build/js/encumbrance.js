var encumbrance = (function() {

  var changeEncumbranceTimer = null;

  function bind(input) {
    var equipmentEncumbranceEncumbranceStr = helper.e("#equipment-encumbrance-encumbrance-str");
    equipmentEncumbranceEncumbranceStr.addEventListener("input", function() {
      clearTimeout(changeEncumbranceTimer);
      changeEncumbranceTimer = setTimeout(update, 350);
    }, false);
  };

  function update() {
    render();
    totalBlock.render();
    textBlock.render();
    if (display.state()) {
      display.clear();
      display.render();
    };
  };

  function render() {
    var object = _create_encumbranceObject(stats.getScore("str"));
    helper.setObject({
      object: sheet.get(),
      path: "equipment.encumbrance.carry_move",
      newValue: object
    });
    sheet.store();
  };

  function _create_encumbranceObject(value) {
    var encumbranceStr = sheet.get().equipment.encumbrance.encumbrance_str;
    if (sheet.get().equipment.encumbrance.encumbrance_str != "" && !isNaN(sheet.get().equipment.encumbrance.encumbrance_str)) {
      value = sheet.get().equipment.encumbrance.encumbrance_str;
    };
    if (!isNaN(value)) {
      var str = parseInt(value, 10);
    } else {
      str = value;
    };
    var allEncumbrance = {};
    if (str > 0 && str <= 200) {
      var maxLoad;
      var base = [25, 28.75, 32.5, 37.5, 43.75, 50, 57.5, 65, 75, 87.5];
      if (parseInt(str, 10) <= 10) {
        maxLoad = 10 * str;
      } else {
        var index = (1 + str - 10 * parseInt(str / 10)) - 1;
        maxLoad = base[index] * Math.pow(4, parseInt(str / 10));
      };
      // console.log("maxLoad", maxLoad);
      var lightUpper = parseInt(maxLoad / 3).toLocaleString();
      var mediumUpper = parseInt((2 * maxLoad) / 3).toLocaleString();
      var mediumLower = (parseInt(maxLoad / 3) + 1).toLocaleString();
      var heavyUpper = maxLoad.toLocaleString();
      var heavyLower = (parseInt((2 * maxLoad) / 3) + 1).toLocaleString();
      var lift = parseInt(2 * maxLoad).toLocaleString();
      var drag = parseInt(5 * maxLoad).toLocaleString();
      allEncumbrance.light = lightUpper + " lbs. or less";
      allEncumbrance.medium = mediumLower + " - " + mediumUpper + " lbs.";
      allEncumbrance.heavy = heavyLower + " - " + heavyUpper + " lbs.";
      allEncumbrance.lift = lift + " lbs.";
      allEncumbrance.drag = drag + " lbs.";
    } else if (isNaN(str) || str <= 0) {
      allEncumbrance.light = 0;
      allEncumbrance.medium = 0;
      allEncumbrance.heavy = 0;
      allEncumbrance.lift = 0;
      allEncumbrance.drag = 0;
    } else {
      allEncumbrance.light = "STR exceeds maximum calculation";
      allEncumbrance.medium = "STR exceeds maximum calculation";
      allEncumbrance.heavy = "STR exceeds maximum calculation";
      allEncumbrance.lift = "STR exceeds maximum calculation";
      allEncumbrance.drag = "STR exceeds maximum calculation";
    };
    return allEncumbrance;
  };

  // exposed methods
  return {
    bind: bind,
    render: render
  };

})();
