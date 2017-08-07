var encumbrance = (function() {

  var changeEncumbranceTimer = null;

  function bind(input) {
    var statsStrScore = helper.e("#statistics-stats-str-score");
    var statsStrTempScore = helper.e("#statistics-stats-str-temp-score");
    statsStrScore.addEventListener("input", function() {
      clearTimeout(changeEncumbranceTimer);
      changeEncumbranceTimer = setTimeout(update, 350);
    }, false);
    statsStrTempScore.addEventListener("input", function() {
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
    helper.setObject(sheet.getCharacter(), "equipment.encumbrance", object);
    sheet.storeCharacters();
  };

  function _create_encumbranceObject(value) {
    if (!isNaN(value)) {
      var str = parseInt(value, 10);
    } else {
      str = value;
    };
    var allEncumbrance = {};
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
    // console.log(allEncumbrance);
    return allEncumbrance;
  };

  // exposed methods
  return {
    bind: bind,
    render: render
  };

})();
