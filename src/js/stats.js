var stats = (function() {

  function render() {
    var stats = helper.eA(".js-stats");
    for (var i = 0; i < stats.length; i++) {
      _render_stat(stats[i]);
    };
  };

  function _render_stat(element) {
    var statsScore = element.querySelector(".js-stats-score");
    var statsModifier = element.querySelector(".js-stats-modifier");
    var statsTempScore = element.querySelector(".js-stats-temp-score");
    var statsTempModifier = element.querySelector(".js-stats-temp-modifier");
    _changeModifer(statsScore, statsModifier);
    _changeModifer(statsTempScore, statsTempModifier);
  };

  function _changeModifer(scoreElement, totalElement) {
    var modifier = _calculateModifer(helper.getObject(sheet.getCharacter(), scoreElement.dataset.path));
    var path = totalElement.dataset.path;
    // store the modifier
    helper.setObject(sheet.getCharacter(), path, modifier);
    // add a + if greater than 0
    if (modifier > 0) {
      modifier = "+" + modifier
    };
    // render modifier
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
    _render_stat(element);
    classes.render();
    textBlock.render();
    totalBlock.render();
    if (display.state()) {
      display.clear();
      display.render();
    };
  };

  function bind() {
    _bind_all_stats();
  };

  function _bind_all_stats() {
    var score = helper.eA(".js-stats-score");
    var tempScore = helper.eA(".js-stats-temp-score");
    for (var i = 0; i < score.length; i++) {
      score[i].addEventListener("input", function() {
        clearTimeout(changeModiferTimer);
        changeModiferTimer = setTimeout(delayUpdate, 350, helper.getClosest(this, ".js-stats"));
      }, false);
    };
    for (var i = 0; i < tempScore.length; i++) {
      tempScore[i].addEventListener("input", function() {
        clearTimeout(changeModiferTimer);
        changeModiferTimer = setTimeout(delayUpdate, 350, helper.getClosest(this, ".js-stats"));
      }, false);
    };
  };

  function get_score(key) {
    var value = 0;
    if (sheet.getCharacter().statistics.stats[key].temp_score != "") {
      value = sheet.getCharacter().statistics.stats[key].temp_score;
    } else {
      value = sheet.getCharacter().statistics.stats[key].score;
    };
    return value;
  };

  function get_mod(key) {
    var value = 0;
    if (sheet.getCharacter().statistics.stats[key].temp_score != "") {
      value = sheet.getCharacter().statistics.stats[key].temp_modifier;
    } else {
      value = sheet.getCharacter().statistics.stats[key].modifier;
    };
    return value;
  };

  // exposed methods
  return {
    render: render,
    bind: bind,
    getMod: get_mod,
    getScore: get_score,
  };

})();
