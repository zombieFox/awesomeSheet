var stats = (function() {

  function _changeModifer(element, field) {
    var stat = parseInt(element.value, 10) || 0;
    var modifier = _calculateModifer(stat);
    var modifierPath = element.dataset.modifierPath;
    var type = element.dataset.type;
    console.log(type)
    field.textContent = modifier;
    if (modifierPath) {
      if (type == "number") {
        // helper.setObject(sheet.getCharacter(), modifierPath, parseInt(modifier, 10 || 0));
      } else {
        // helper.setObject(sheet.getCharacter(), modifierPath, modifier);
      };
    };
  };

  function update() {
    var score = helper.eA(".js-stats-score");
    var tempScore = helper.eA(".js-stats-temp-score");
    // for (var i = 0; i < score.length; i++) {
    //   score[i].addEventListener("input", function() {
    //     clearTimeout(changeModiferTimer);
    //     changeModiferTimer = setTimeout(delayUpdate, 1000);
    //   }, false);
    // };
    // for (var i = 0; i < tempScore.length; i++) {
    //   tempScore[i].addEventListener("input", function() {
    //     clearTimeout(changeModiferTimer);
    //     changeModiferTimer = setTimeout(delayUpdate, 1000);
    //   }, false);
    // };
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

  function _calculateModifer(value) {
    var modifier = Math.floor((value - 10) / 2);
    return modifier;
  };

  function render() {
    console.log("render fire");
    var stats = helper.eA(".js-stats");
    for (var i = 0; i < stats.length; i++) {
      // console.log("loop fire");
      var score = stats[i].querySelector(".js-stats-score");
      var modifier = stats[i].querySelector(".js-stats-modifier");
      var tempScore = stats[i].querySelector(".js-stats-temp-score");
      var tempModifier = stats[i].querySelector(".js-stats-temp-modifier");
      if (score.value !== "") {
        _changeModifer(score, modifier);
      } else {
        modifier.textContent = "";
      };
      if (tempScore.value !== "") {
        _changeModifer(tempScore, tempModifier);
      } else {
        tempModifier.textContent = "";
      };
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
