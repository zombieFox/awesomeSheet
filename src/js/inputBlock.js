var inputBlock = (function() {

  function _store(element) {
    var type = element.dataset.store;
    // var character = sheet.getCharacter();
    // var basics = character.basics;
    // var statistics = character.statistics;
    // var equipment = character.equipment;
    // var defense = character.defense;
    // var offense = character.offense;
    // var skills = character.skills;
    // var spells = character.spells;
    // var notes = character.notes;
    // basics
    if (type == "basics") {
      var key = element.id.replace("basics-", "").replace(/-/g, "_");
      sheet.getCharacter().basics[key] = element.value;
    };
    // basics
    if (type == "stat") {
      var stat = element.id.replace("stat-", "").replace(/-/g, "_");
      var key = element.id.replace("stat-", "").replace(/-/g, "_").substring(0, 3);
      if (stat.substring(4, 9) == "score") {
        sheet.getCharacter().statistics.stats[key].score = element.value;
      };
      if (stat.substring(4, 8) == "temp") {
        sheet.getCharacter().statistics.stats[key].temp = element.value;
      };
    };
    sheet.storeCharacters();
  };

  function focus(element) {
    var inputBlockRoot = helper.getClosest(element, ".input-block");
    var inputField = inputBlockRoot.querySelector(".input-field");
    var inputLabel;
    if (inputBlockRoot.querySelector(".input-label")) {
      var inputLabel = inputBlockRoot.querySelector(".input-label");
    };
    if (inputBlockRoot.querySelector(".input-label")) {
      if (inputField == document.activeElement) {
        helper.addClass(inputLabel, "input-label-focus");
      } else {
        helper.removeClass(inputLabel, "input-label-focus");
      };
    };
  };

  function bind(array) {
    for (var i = 0; i < array.length; i++) {
      if (array[i].dataset.inputStore) {
        var input = array[i].querySelector(".input-field");
        input.addEventListener("input", function() {
          _store(this);
          focus(this);
          totalBlock.render();
        }, false);
        input.addEventListener("focus", function() {
          _store(this);
          focus(this);
          totalBlock.render();
        }, false);
        input.addEventListener("blur", function() {
          _store(this);
          focus(this);
          totalBlock.render();
        }, false);
      };
    };
    _bind_awesomeName();
  };

  function _bind_awesomeName() {
    var input = helper.e(".awesome-name input");
    input.addEventListener("input", function() {
      _render_characterLink(this.value);
      _maxLengthWarning(this.value);
    }, false);
    input.addEventListener("focus", function() {
      _render_characterLink(this.value);
    }, false);
    input.addEventListener("blur", function() {
      _render_characterLink(this.value);
    }, false);
  };

  function _render_characterLink(awesomeNameValue) {
    var name = helper.e(".character-index-" + sheet.getIndex()).querySelector(".name");
    name.textContent = awesomeNameValue;
  };

  function _maxLengthWarning(awesomeNameValue) {
    if (awesomeNameValue.length >= 150) {
      snack.render("Character name is too long.", false, false);
    };
  };

  function render() {
    var character = sheet.getCharacter();
    var basics = character.basics;
    var statistics = character.statistics;
    var equipment = character.equipment;
    var defense = character.defense;
    var offense = character.offense;
    var skills = character.skills;
    var spells = character.spells;
    var notes = character.notes;
    // basics
    for (var i in basics) {
      var id = "#basics-" + i.replace(/_/g, "-");
      helper.e(id).value = basics[i];
    };
    // statistics.stats
    for (var i in statistics) {
      if (i == "stats") {
        for (var j in statistics[i]) {
          var score = statistics[i][j].score;
          var temp = statistics[i][j].temp;
          var scoreId = "#stat-" + j.replace(/_/g, "-") + "-score";
          var tempId = "#stat-" + j.replace(/_/g, "-") + "-temp";
          helper.e(scoreId).value = score;
          helper.e(tempId).value = temp;
        };
      };
    };

    // if (sheet.getCharacter().input) {
    //   for (var i in sheet.getCharacter().input) {
    //     var id = "#input-" + i.replace(/_/g, "-");
    //     helper.e(id).value = sheet.getCharacter().input[i];
    //   };
    // };
  };

  // exposed methods
  return {
    focus: focus,
    render: render,
    bind: bind
  };

})();
