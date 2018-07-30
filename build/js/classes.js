var classes = (function() {

  var delayUpdateTimer = null;

  function delayUpdate(element) {
    render();
    totalBlock.render();
    textBlock.render();
  };

  function bind(inputBlock) {
    var input = inputBlock.querySelector(".js-input-block-field");
    if (input) {
      input.addEventListener("input", function() {
        clearTimeout(delayUpdateTimer);
        delayUpdateTimer = setTimeout(delayUpdate, 300, this);
      }, false);
    };
  };

  function render() {
    var all_classes = helper.getObject({
      object: sheet.get(),
      path: "basics.classes.all"
    });
    var _makeTotal = function(allClasses, path) {
      var total = 0;
      allClasses.forEach(function(arrayItem) {
        var valueToAdd = helper.getObject({
          object: arrayItem,
          path: path
        });
        if (valueToAdd != "" || valueToAdd != undefined && typeof valueToAdd == "number") {
          total = total + valueToAdd;
        };
      });
      return total;
    };
    var _classLevel = function() {
      helper.setObject({
        object: sheet.get(),
        path: "basics.experience.level.class_total",
        newValue: _makeTotal(all_classes, "level")
      });
    };
    var _className = function() {
      var classAndLevel = "";
      if (all_classes.length > 0) {
        all_classes.forEach(function(arrayItem, index) {
          var name = arrayItem.name || "No class";
          var level = arrayItem.level || "No level";
          classAndLevel = classAndLevel + name + " " + level;
          if (index < (all_classes.length - 1)) {
            classAndLevel = classAndLevel + ", ";
          };
        });
      };
      helper.setObject({
        object: sheet.get(),
        path: "basics.classes.string",
        newValue: classAndLevel
      });
    };
    var _hp = function() {
      var classLevel = helper.getObject({
        object: sheet.get(),
        path: "basics.experience.level.class_total"
      });
      var total = 0;
      all_classes.forEach(function(arrayItem, index) {
        var classTotal = 0;
        if (arrayItem.hp.base != "" || arrayItem.hp.base != undefined && typeof arrayItem.hp.base == "number") {
          classTotal = classTotal + arrayItem.hp.base;
        };
        if (arrayItem.hp.favoured != "" || arrayItem.hp.favoured != undefined && typeof arrayItem.hp.favoured == "number") {
          classTotal = classTotal + arrayItem.hp.favoured;
        };
        helper.setObject({
          object: sheet.get(),
          path: "basics.classes.all[" + index + "].hp.current",
          newValue: classTotal
        });
        total = total + classTotal;
      });
      if (classLevel > 0) {
        total = total + (stats.get.mod("con") * classLevel);
      } else {
        total = total + stats.get.mod("con");
      };
      helper.setObject({
        object: sheet.get(),
        path: "defense.hp.total",
        newValue: total
      });
    };
    var _ranks = function() {
      var classLevel = helper.getObject({
        object: sheet.get(),
        path: "basics.experience.level.class_total"
      });
      var total = 0;
      all_classes.forEach(function(arrayItem, index) {
        var classTotal = 0;
        if (arrayItem.ranks.base != "" || arrayItem.ranks.base != undefined && typeof arrayItem.ranks.base == "number") {
          classTotal = classTotal + arrayItem.ranks.base;
        };
        if (arrayItem.ranks.favoured != "" || arrayItem.ranks.favoured != undefined && typeof arrayItem.ranks.favoured == "number") {
          classTotal = classTotal + arrayItem.ranks.favoured;
        };
        helper.setObject({
          object: sheet.get(),
          path: "basics.classes.all[" + index + "].ranks.current",
          newValue: classTotal
        });
        total = total + classTotal;
      });
      if (classLevel > 0) {
        total = total + (stats.get.mod("int") * classLevel);
      } else {
        total = total + stats.get.mod("int");
      };
      helper.setObject({
        object: sheet.get(),
        path: "skills.ranks.total",
        newValue: total
      });
    };
    var _bab = function() {
      var _makeBaseAttackBonuses = function(totalBab) {
        var allBab = [];
        if (totalBab < 100) {
          if (totalBab >= 5) {
            while (totalBab > 0) {
              allBab.push("+" + totalBab);
              totalBab = totalBab - 5;
            };
          } else {
            if (totalBab > 0) {
              allBab.push("+" + totalBab);
            } else {
              allBab.push(totalBab);
            };
          };
        } else {
          allBab.push("BAB exceeds maximum calculation");
        };
        if (allBab.length > 1) {
          allBab = allBab.join(" / ");
        } else {
          allBab = allBab[0];
        };
        return allBab;
      };
      helper.setObject({
        object: sheet.get(),
        path: "offense.stats.base_attack.bonus",
        newValue: _makeTotal(all_classes, "bab")
      });
      helper.setObject({
        object: sheet.get(),
        path: "offense.stats.base_attack.string",
        newValue: _makeBaseAttackBonuses(_makeTotal(all_classes, "bab"))
      });
    };
    var _saves = function() {
      helper.setObject({
        object: sheet.get(),
        path: "defense.saves.fortitude.base",
        newValue: _makeTotal(all_classes, "saves.fortitude")
      });
      helper.setObject({
        object: sheet.get(),
        path: "defense.saves.reflex.base",
        newValue: _makeTotal(all_classes, "saves.reflex")
      });
      helper.setObject({
        object: sheet.get(),
        path: "defense.saves.will.base",
        newValue: _makeTotal(all_classes, "saves.will")
      });
    };
    _classLevel();
    _className();
    _hp();
    _ranks();
    _bab();
    _saves();
  };

  // exposed methods
  return {
    bind: bind,
    render: render
  };

})();
