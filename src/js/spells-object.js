var spellsObject = (function() {


  var xxx = function(data) {
    console.log(helper.csvToJSON(data)[1000]);
    // var allSpellNames = JSON.parse(data);
    // allSpellNames.forEach(function(arrayItem, index) {
    //   if (arrayItem.toLowerCase().includes(searchString.toLowerCase())) {
    //     console.log(index, arrayItem);
    //     machedIndex.push(index);
    //   };
    // });
    // _render_machedIndex(data);
  };

  function get(index) {
    var _all_spellObject = helper.loadCsv("../db/spells.csv", xxx);
    // _all_spellObject;
    // return helper.csvToJSON(_all_spellObject)[index];

  };

  // exposed methods
  return {
    get: get
  };

})();
