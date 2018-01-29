var spellsObject = (function() {

  var _all_spellsObject = null;

  function get(array) {
    var _get_allSpells = function(data) {
      _all_spellsObject = helper.csvToJSON(data);
      return _findSpell();
    };
    var _findSpell = function() {
      if (array) {
        array.forEach(function(arrayItem) {
          return _all_spellsObject[arrayItem.index];
        });
      } else {
        return _all_spellsObject;
      };
    };
    if (_all_spellsObject == null) {
      helper.loadCsv("../db/spells.csv", function(data) {
        _get_allSpells(data);
      });
    } else {
      return _findSpell();
    };
  };

  // exposed methods
  return {
    get: get
  };

})();
