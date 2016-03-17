var textareaBlock = (function() {

  function _store(element) {
    var type = element.dataset.store;
    // statistics
    if (type == "statistics") {
      var key = element.id.replace("statistics-", "").replace(/-/g, "_");
      sheet.getCharacter().statistics[key] = element.innerHTML;
    };
    // equipment
    if (type == "equipment") {
      var key = element.id.replace("equipment-", "").replace(/-/g, "_");
      sheet.getCharacter().equipment[key] = element.innerHTML;
    };
    sheet.storeCharacters();
  };

  function bind(array) {
    for (var i = 0; i < array.length; i++) {
      var textarea = array[i];
      textarea.addEventListener("input", function() {
        _store(this);
      }, false);
      textarea.addEventListener("focus", function() {
        _store(this);
      }, false);
      textarea.addEventListener("blur", function() {
        _store(this);
      }, false);
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
    // statistics
    for (var i in statistics) {
      if (i == "feats" || i == "traits" || i == "languages" || i == "special_abilities") {
        var id = "#statistics-" + i.replace(/_/g, "-");
        var element = helper.e(id);
        var content = statistics[i];
        element.innerHTML = content;
      };
    };
    // equipment
    for (var i in equipment) {
      if (i == "gear" || i == "magic_gear") {
        var id = "#equipment-" + i.replace(/_/g, "-");
        var element = helper.e(id);
        var content = equipment[i];
        element.innerHTML = content;
      };
    };
  };

  // exposed methods
  return {
    render: render,
    bind: bind
  };

})();