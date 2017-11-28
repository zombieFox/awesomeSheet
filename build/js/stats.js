var stats = (function() {

  function render() {
    var stats = helper.eA(".js-stats");
    for (var i = 0; i < stats.length; i++) {
      _render_stat(stats[i]);
      _render_modifer(stats[i]);
    };
  };

  function _render_stat(element) {
    var path = element.dataset.path;
    var totalObject = helper.getObject(sheet.getCharacter(), path);
    var grandTotal;
    var toSum = [];
    for (var key in totalObject) {
      if (key == "base" || key == "enhancement" || key == "misc" || key == "racial" || key == "temp") {
        if (totalObject[key] != "") {
          toSum.push(totalObject[key]);
        };
      };
    };
    if (toSum.length > 0) {
      grandTotal = toSum.reduce(function(a, b) {
        return a + b;
      });
    } else {
      grandTotal = 0;
    };
    path = path + ".current";
    helper.setObject(sheet.getCharacter(), path, grandTotal);
  };

  function _render_modifer(element) {
    var path = element.dataset.path + ".current";
    var modifierPath = element.dataset.path + ".modifier";
    var modifier = _calculateModifer(helper.getObject(sheet.getCharacter(), path));
    helper.setObject(sheet.getCharacter(), modifierPath, modifier);
  };

  function _calculateModifer(value) {
    var modifier = Math.floor((parseInt(value, 10) - 10) / 2);
    if (isNaN(modifier)) {
      modifier = "";
    };
    return modifier;
  };

  var renderTimer = null;

  function delayUpdate(element) {
    _render_stat(element);
    _render_modifer(element);
    encumbrance.render();
    classes.render();
    textBlock.render();
    totalBlock.render();
    if (display.state()) {
      display.clear();
      display.render();
    };
  };

  function bind() {
    _bind_all_statField();
  };

  function _bind_all_statField() {
    var all_statsField = helper.eA(".js-stats-field");
    for (var i = 0; i < all_statsField.length; i++) {
      all_statsField[i].addEventListener("input", function() {
        clearTimeout(renderTimer);
        renderTimer = setTimeout(delayUpdate, 350, helper.getClosest(this, ".js-stats"));
      }, false);
    };
  };

  function get_score(key) {
    var value = 0;
    if (sheet.getCharacter().statistics.stats[key].current != "") {
      value = sheet.getCharacter().statistics.stats[key].current;
    };
    return value;
  };

  function get_mod(key) {
    var value = 0;
    if (sheet.getCharacter().statistics.stats[key].modifier != "") {
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
