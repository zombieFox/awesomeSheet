var encumbrance = (function() {

  var _timer_render = null;
  var carryMove = {
    light: "",
    medium: "",
    heavy: "",
    lift: "",
    drag: ""
  };

  function bind(input) {
    var equipmentEncumbranceStr = helper.e("#equipment-encumbrance-str");
    equipmentEncumbranceStr.addEventListener("input", function() {
      clearTimeout(_timer_render);
      _timer_render = setTimeout(update, 350);
    }, false);
  };

  function update() {
    render();
    totalBlock.render();
    textBlock.render();
    display.clear();
    display.render();
  };

  function store() {
    helper.setObject({
      object: sheet.get(),
      path: "equipment.encumbrance.carry_move",
      newValue: carryMove
    });
    sheet.store();
  };

  function render() {
    _render_encumbrance();
    store();
  };

  function _render_encumbrance() {
    var str = stats.get.score("str");
    var encumbranceStr = helper.getObject({
      object: sheet.get(),
      path: "equipment.encumbrance.str"
    });
    var _create_moveCarryObject = function(strVale) {
      var object = {};
      if (strVale > 0 && strVale <= 200) {
        var maxLoad;
        var base = [25, 28.75, 32.5, 37.5, 43.75, 50, 57.5, 65, 75, 87.5];
        if (parseInt(strVale, 10) <= 10) {
          maxLoad = 10 * strVale;
        } else {
          var index = (1 + strVale - 10 * parseInt(strVale / 10)) - 1;
          maxLoad = base[index] * Math.pow(4, parseInt(strVale / 10));
        };
        var lightUpper = parseInt(maxLoad / 3).toLocaleString();
        var mediumUpper = parseInt((2 * maxLoad) / 3).toLocaleString();
        var mediumLower = (parseInt(maxLoad / 3) + 1).toLocaleString();
        var heavyUpper = maxLoad.toLocaleString();
        var heavyLower = (parseInt((2 * maxLoad) / 3) + 1).toLocaleString();
        var lift = parseInt(2 * maxLoad).toLocaleString();
        var drag = parseInt(5 * maxLoad).toLocaleString();
        object.light = lightUpper + " lbs. or less";
        object.medium = mediumLower + " - " + mediumUpper + " lbs.";
        object.heavy = heavyLower + " - " + heavyUpper + " lbs.";
        object.lift = lift + " lbs.";
        object.drag = drag + " lbs.";
      } else if (isNaN(strVale) || strVale <= 0) {
        object.light = 0;
        object.medium = 0;
        object.heavy = 0;
        object.lift = 0;
        object.drag = 0;
      } else {
        object.light = "STR exceeds maximum calculation";
        object.medium = "STR exceeds maximum calculation";
        object.heavy = "STR exceeds maximum calculation";
        object.lift = "STR exceeds maximum calculation";
        object.drag = "STR exceeds maximum calculation";
      };
      return object;
    };
    if (encumbranceStr != "" && !isNaN(encumbranceStr)) {
      carryMove = _create_moveCarryObject(encumbranceStr);
    } else {
      carryMove = _create_moveCarryObject(str);
    };
  };

  // exposed methods
  return {
    store: store,
    bind: bind,
    render: render
  };

})();
