var encumbrance = (function() {

  var changeEncumbranceTimer = null;

  function bind(input) {
    console.log('encumbrance bind');
    var statsStrScore = helper.e("#statistics-stats-str-score");
    var statsStrTempScore = helper.e("#statistics-stats-str-temp-score");
    statsStrScore.addEventListener("input", function() {
      clearTimeout(changeEncumbranceTimer);
      changeEncumbranceTimer = setTimeout(render, 350);
    }, false);
    statsStrTempScore.addEventListener("input", function() {
      clearTimeout(changeEncumbranceTimer);
      changeEncumbranceTimer = setTimeout(render, 350);
    }, false);
  };

  function render() {
    console.log('encumbrance render');
    var object = _create_encumbranceObject(stats.getScore("str"));
    helper.setObject(sheet.getCharacter(), "equipment.encumbrance", object);
    sheet.storeCharacters();
    textBlock.render();
  };

  function _create_encumbranceObject(str) {
    var allEncumbrance = {};
    var maxLoad;
    var base = [25, 28.75, 32.5, 37.5, 43.75, 50, 57.5, 65, 75, 87.5];
    if (str <= 10) {
      maxLoad = 10 * str;
    } else {
      var index = (1 + str - 10 * parseInt(str / 10)) - 1;
      maxLoad = base[index] * Math.pow(4, parseInt(str / 10));
    };
    allEncumbrance.light = parseInt(maxLoad / 3) + " lbs. or less";
    allEncumbrance.medium = parseInt(maxLoad / 3) + 1 + " - " + parseInt((2 * maxLoad) / 3) + " lbs.";
    allEncumbrance.heavy = parseInt((2 * maxLoad) / 3) + 1 + " - " + maxLoad + " lbs.";
    allEncumbrance.lift = parseInt(2 * maxLoad) + " lbs.";
    allEncumbrance.drag = parseInt(5 * maxLoad) + " lbs.";
    // console.log(allEncumbrance);
    return allEncumbrance;
  };

  // exposed methods
  return {
    bind: bind,
    render: render
  };

})();
