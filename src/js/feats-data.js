var featsData = (function() {

  var _all_featsObject = null;

  function get() {
    return _all_featsObject;
  };

  function load() {
    var _cleanUpSpellObject = function(arrayItem) {
      for (var key in arrayItem) {
        // console.log(key, arrayItem[key]);
      };
    };
    var _get_allSpells = function(data) {
      _all_featsObject = helper.csvToJSON(data);
      _all_featsObject.forEach(function(arrayItem) {
        _cleanUpSpellObject(arrayItem);
      });
      // console.log(_all_featsObject);
    };
    helper.loadCsv("db/feats.csv", function(data) {
      _get_allSpells(data);
    });
  };

  // exposed methods
  return {
    load: load,
    get: get
  };

})();
