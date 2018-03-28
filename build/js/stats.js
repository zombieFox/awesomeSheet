var stats = (function() {

  var renderTimer = null;

  function render() {
    var stats = helper.eA(".js-stats");
    for (var i = 0; i < stats.length; i++) {
      _render_stat(stats[i]);
      _render_modifer(stats[i]);
    };
  };

  function _render_stat(stats) {
    var options = helper.makeObject(stats.dataset.statsOptions);
    var path = stats.dataset.path;
    var statObject = helper.getObject({
      object: sheet.get(),
      path: options.path
    });
    var toSum = [];
    var _reduceSum = function(array) {
      var total;
      if (array.length > 0) {
        total = array.reduce(function(a, b) {
          return a + b;
        });
      } else {
        total = 0;
      };
      return total;
    };
    var _push_internalValues = function() {
      for (var i = 0; i < options.addition.length; i++) {
        if (statObject[options.addition[i]] != "" && !isNaN(statObject[options.addition[i]])) {
          toSum.push(statObject[options.addition[i]]);
        };
      };
    };
    _push_internalValues();
    var grandTotal = _reduceSum(toSum);
    helper.setObject({
      object: sheet.get(),
      path: options.path + ".current",
      newValue: grandTotal
    });
  };

  function _render_modifer(stats) {
    var options = helper.makeObject(stats.dataset.statsOptions);
    var modifierPath = options.path + ".modifier";
    var modifier = _calculateModifer(helper.getObject({
      object: sheet.get(),
      path: options.path + ".current"
    }));
    helper.setObject({
      object: sheet.get(),
      path: modifierPath,
      newValue: modifier
    });
  };

  function _calculateModifer(value) {
    var modifier = Math.floor((parseInt(value, 10) - 10) / 2);
    if (isNaN(modifier)) {
      modifier = "";
    };
    return modifier;
  };

  function delayUpdate(element) {
    _render_stat(element);
    _render_modifer(element);
    encumbrance.render();
    classes.render();
    totalBlock.render();
    textBlock.render();
    display.clear();
    display.render();
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

  var get = (function() {
    var score = function(key) {
      var value = 0;
      var score = helper.getObject({
        object: sheet.get(),
        path: "statistics.stats." + key.toLowerCase() + ".current"
      });
      if (score != "" || !isNaN(score)) {
        value = score;
      };
      return value;
    };
    var mod = function(key) {
      var value = 0;
      var mod = helper.getObject({
        object: sheet.get(),
        path: "statistics.stats." + key.toLowerCase() + ".modifier"
      });
      if (mod != "" || !isNaN(mod)) {
        value = mod;
      };
      return value;
    };
    // exposed methods
    return {
      score: score,
      mod: mod
    };
  })();

  // exposed methods
  return {
    render: render,
    bind: bind,
    get: get
  };

})();
