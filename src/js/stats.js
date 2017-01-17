var stats = (function() {

  function render() {
    var stats = helper.eA(".js-stats");
    for (var i = 0; i < stats.length; i++) {
      var statsScore = stats[i].querySelector(".js-stats-score");
      var statsModifier = stats[i].querySelector(".js-stats-modifier");
      var statsTempScore = stats[i].querySelector(".js-stats-temp-score");
      var statsTempModifier = stats[i].querySelector(".js-stats-temp-modifier");
      _changeModifer(statsScore, statsModifier);
      _changeModifer(statsTempScore, statsTempModifier);
    };
  };

  function _changeModifer(scoreElement, totalElement) {
    var modifier = _calculateModifer(helper.getObject(sheet.getCharacter(), scoreElement.dataset.path));
    var path = totalElement.dataset.path;
    helper.setObject(sheet.getCharacter(), path, modifier);
    totalElement.textContent = modifier;
  };

  function _calculateModifer(value) {
    var modifier = Math.floor((parseInt(value, 10) - 10) / 2);
    if (isNaN(modifier)) {
      modifier = "";
    };
    return modifier;
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
    render: render,
    bind: bind
  };

})();
