var stats = (function() {

  function _changeModifer(element, field) {
    var stat = element.value;
    var modifier = _calculateModifer(stat);
    var modifierPath = element.dataset.modifierPath;
    var type = element.dataset.type;
    helper.setObject(sheet.getCharacter(), modifierPath, modifier);
    field.textContent = modifier;
  };

  function _calculateModifer(value) {
    var modifier = Math.floor((parseInt(value, 10) - 10) / 2);
    if (isNaN(modifier)) {
      modifier = "";
    };
    return modifier;
  };

  function update() {

  };

  var changeModiferTimer = null;

  function delayUpdate(element) {
    render();
    totalBlock.update();
    if (body.dataset.displayMode == "true") {
      display.clear();
      display.render();
    };
  };

  function render() {
    var stats = helper.eA(".js-stats");
    for (var i = 0; i < stats.length; i++) {
      var score = stats[i].querySelector(".js-stats-score");
      var modifier = stats[i].querySelector(".js-stats-modifier");
      var tempScore = stats[i].querySelector(".js-stats-temp-score");
      var tempModifier = stats[i].querySelector(".js-stats-temp-modifier");
      _changeModifer(score, modifier);
      _changeModifer(tempScore, tempModifier);
      // if (score.value !== "") {
      //   _changeModifer(score, modifier);
      // } else {
      //   modifier.textContent = "";
      // };
      // if (tempScore.value !== "") {
      //   _changeModifer(tempScore, tempModifier);
      // } else {
      //   tempModifier.textContent = "";
      // };
    };
  };

  function bind() {
    var score = helper.eA(".js-stats-score");
    var tempScore = helper.eA(".js-stats-temp-score");
    for (var i = 0; i < score.length; i++) {
      score[i].addEventListener("input", function() {
        clearTimeout(changeModiferTimer);
        changeModiferTimer = setTimeout(delayUpdate, 1000);
      }, false);
    };
    for (var i = 0; i < tempScore.length; i++) {
      tempScore[i].addEventListener("input", function() {
        clearTimeout(changeModiferTimer);
        changeModiferTimer = setTimeout(delayUpdate, 1000);
      }, false);
    };
  };

  // exposed methods
  return {
    update: update,
    render: render,
    bind: bind
  };

})();
