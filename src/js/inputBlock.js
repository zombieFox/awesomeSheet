var inputBlock = (function() {

  function _store(element) {
    var type = element.dataset.store;
    // basics
    if (type == "basics") {
      var key = element.id.replace("basics-", "").replace(/-/g, "_");
      sheet.getCharacter().basics[key] = element.value;
    };
    // statistics.stats
    if (type == "statistics-stats") {
      var stat = element.id.replace("stats-", "").replace(/-/g, "_");
      var key = element.id.replace("stats-", "").replace(/-/g, "_").substring(0, 3);
      if (stat.substring(4, 9) == "score") {
        sheet.getCharacter().statistics.stats[key].score = element.value;
      };
      if (stat.substring(4, 8) == "temp") {
        sheet.getCharacter().statistics.stats[key].temp = element.value;
      };
    };
    // equipment.encumbrance
    if (type == "equipment-encumbrance") {
      var key = element.id.replace("equipment-encumbrance-", "").replace(/-/g, "_");
      sheet.getCharacter().equipment.body_slots[key] = element.value;
    };
    // equipment.body_slots
    if (type == "equipment-body-slots") {
      var key = element.id.replace("equipment-body-slots-", "").replace(/-/g, "_");
      sheet.getCharacter().equipment.body_slots[key] = element.value;
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
          var scoreId = "#stats-" + j.replace(/_/g, "-") + "-score";
          var tempId = "#stats-" + j.replace(/_/g, "-") + "-temp";
          helper.e(scoreId).value = score;
          helper.e(tempId).value = temp;
        };
      };
    };


    // equipment.encumbrance
    // equipment.body_slots
    for (var i in equipment) {
      if (i == "encumbrance" || i == "body_slots") {
        if (i == "encumbrance") {
          for (var j in equipment[i]) {
            var content = equipment[i][j];
            var element = helper.e("#equipment-encumbrance-" + j.replace(/_/g, "-"));
            element.value = content;
          };
        };
        if (i == "body_slots") {
          for (var j in equipment[i]) {
            var content = equipment[i][j];
            var element = helper.e("#equipment-body-slots-" + j.replace(/_/g, "-"));
            element.value = content;
          };
        };
      };
    };


  };

  // exposed methods
  return {
    focus: focus,
    render: render,
    bind: bind
  };

})();
