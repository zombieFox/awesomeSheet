var xp = (function() {

  var renderTimer = null;

  function bind() {
    var advancementSpeed = helper.e(".js-advancement-speed");
    advancementSpeed.addEventListener("change", function() {
      clearTimeout(renderTimer);
      renderTimer = setTimeout(delayUpdate, 300, this);
    }, false);
  };

  function delayUpdate(element) {
    render();
    sheet.storeCharacters();
    textBlock.render();
  };

  function render() {
    var trackSlow = [0, 3000, 7500, 14000, 23000, 35000, 53000, 77000, 115000, 160000, 235000, 330000, 475000, 665000, 955000, 1350000, 1900000, 2700000, 3850000, 5350000];
    var trackMedium = [0, 2000, 5000, 9000, 15000, 23000, 35000, 51000, 75000, 105000, 155000, 220000, 315000, 445000, 635000, 890000, 1300000, 1800000, 2550000, 3600000];
    var trackFast = [0, 1300, 3300, 6000, 10000, 15000, 23000, 34000, 50000, 71000, 105000, 145000, 210000, 295000, 425000, 600000, 850000, 1200000, 1700000, 2400000];
    var selectedTrack = false;
    var speed = helper.getObject(sheet.getCharacter(), "basics.xp.advancement_speed");
    var nextLevel;
    var nextLevelXpMileStone;
    var nextLevelXpNeeded;
    var nextLevelIndex;
    var currentXp = helper.getObject(sheet.getCharacter(), "basics.xp.total");
    if (speed == "Slow") {
      selectedTrack = trackSlow;
    } else if (speed == "Medium") {
      selectedTrack = trackMedium;
    } else if (speed == "Fast") {
      selectedTrack = trackFast;
    };
    var _render_nextXp = function() {
      if (selectedTrack) {
        selectedTrack.forEach(function(item, index, array) {
          if (selectedTrack[index] <= currentXp) {
            nextLevelIndex = (index + 1);
          };
        });
        nextLevelXpMileStone = selectedTrack[nextLevelIndex];
        nextLevelXpNeeded = nextLevelXpMileStone - helper.getObject(sheet.getCharacter(), "basics.xp.total");
        if (nextLevelXpMileStone == undefined || isNaN(nextLevelXpMileStone)) {
          nextLevelXpMileStone = "";
          nextLevelXpNeeded = "";
        };
        helper.setObject(sheet.getCharacter(), "basics.xp.next_level", nextLevelXpMileStone);
        helper.setObject(sheet.getCharacter(), "basics.xp.needed", nextLevelXpNeeded);
      } else {
        helper.setObject(sheet.getCharacter(), "basics.xp.next_level", "");
        helper.setObject(sheet.getCharacter(), "basics.xp.needed", "");
      };
    };
    var _clear_nextXp = function() {
      helper.setObject(sheet.getCharacter(), "basics.xp.next_level", "");
      helper.setObject(sheet.getCharacter(), "basics.xp.needed", "");
    };
    // if xp is less than level 20 for any advancement speed
    if (currentXp <= selectedTrack[selectedTrack.length - 1]) {
      _render_nextXp();
    } else {
      _clear_nextXp();
    };
  };

  // exposed methods
  return {
    bind: bind,
    render: render
  };

})();
