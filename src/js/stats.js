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
  var changeEncumbranceTimer = null;

  function delayUpdate(element) {
    _render_stat(element);
    classes.render();
    textBlock.render();
    totalBlock.render();
    if (body.dataset.displayMode == "true") {
      display.clear();
      display.render();
    };
  };

  function delayUpdateEncumbrance() {
    console.log(_encumbrance(get_score("str")));
  };

  function bind() {
    _bind_all_stats();
    _bind_str();
  };

  function _encumbrance(str) {
    var allCapacity = [];
    var lightLoad;
    var mediumLoad;
    var heavyLoad;
    var base = [25, 28.75, 32.5, 37.5, 43.75, 50, 57.5, 65, 75, 87.5];
    if (str <= 10) {
      heavyLoad = 10 * str;
    } else {
      var index = (1 + str - 10 * parseInt(str / 10)) - 1;
      heavyLoad = base[index] * Math.pow(4, parseInt(str / 10));
    };
    allCapacity.push(parseInt(heavyLoad / 3) + " lbs. or less");
    allCapacity.push(parseInt(heavyLoad/3) + 1 + " - " + parseInt((2 * heavyLoad) / 3) + " lbs.");
    allCapacity.push(parseInt((2 * heavyLoad) / 3) + 1 + " - " + heavyLoad + " lbs.");
    return allCapacity;
  };

  function _bind_str() {
    var statsStrScore = helper.e("#statistics-stats-str-score");
    var statsStrTempScore = helper.e("#statistics-stats-str-temp-score");
    statsStrScore.addEventListener("input", function() {
      clearTimeout(changeEncumbranceTimer);
      changeEncumbranceTimer = setTimeout(delayUpdateEncumbrance, 350);
    }, false);
    statsStrTempScore.addEventListener("input", function() {
      clearTimeout(changeEncumbranceTimer);
      changeEncumbranceTimer = setTimeout(delayUpdateEncumbrance, 350);
    }, false);
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

  function get_mod(key) {
    var value = 0;
    if (sheet.getCharacter().statistics.stats[key].temp_score != "") {
      value = sheet.getCharacter().statistics.stats[key].temp_modifier;
    } else {
      value = sheet.getCharacter().statistics.stats[key].modifier;
    };
    return value;
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

  // exposed methods
  return {
    render: render,
    bind: bind,
    getMod: get_mod,
    getScore: get_score,
  };

})();
