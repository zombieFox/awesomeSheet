var textareaBlock = (function() {

  function _store(element) {
    var type = element.dataset.store;
    // statistics
    if (type == "statistics") {
      var key = element.id.replace("statistics-", "").replace(/-/g, "_");
      sheet.getCharacter().statistics[key] = element.innerHTML;
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


    // if (sheet.getCharacter().textarea) {
    //   for (var i in sheet.getCharacter().textarea) {
    //     var id = "#" + "textarea-" + i.replace(/_/g, "-");
    //     helper.e(id).innerHTML = sheet.getCharacter().textarea[i];
    //   };
    // };
  };

  // exposed methods
  return {
    render: render,
    bind: bind
  };

})();