var exp = (function() {

  var renderTimer = null;

  function bind() {
    var advancementSpeed = helper.e(".js-advancement-speed");
    var selectBlockDropdown = advancementSpeed.querySelector(".js-select-block-dropdown");
    selectBlockDropdown.addEventListener("change", function() {
      clearTimeout(renderTimer);
      renderTimer = setTimeout(delayUpdate, 300, this);
    }, false);
  };

  function delayUpdate(element) {
    render();
    sheet.store();
    textBlock.render();
  };

  function render() {
    var track = {
      slow: [0, 3000, 7500, 14000, 23000, 35000, 53000, 77000, 115000, 160000, 235000, 330000, 475000, 665000, 955000, 1350000, 1900000, 2700000, 3850000, 5350000],
      medium: [0, 2000, 5000, 9000, 15000, 23000, 35000, 51000, 75000, 105000, 155000, 220000, 315000, 445000, 635000, 890000, 1300000, 1800000, 2550000, 3600000],
      fast: [0, 1300, 3300, 6000, 10000, 15000, 23000, 34000, 50000, 71000, 105000, 145000, 210000, 295000, 425000, 600000, 850000, 1200000, 1700000, 2400000],
      pathfinderSociety: [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57]
    };
    var selectedTrack = false;
    var speed = helper.getObject({
      object: sheet.get(),
      path: "basics.experience.advancement"
    });
    var nextLevel;
    var nextLevelXpMileStone;
    var nextLevelXpNeeded;
    var nextLevelIndex;
    var currentXp = helper.getObject({
      object: sheet.get(),
      path: "basics.experience.total"
    });
    if (speed == "Slow") {
      selectedTrack = track.slow;
    } else if (speed == "Medium") {
      selectedTrack = track.medium;
    } else if (speed == "Fast") {
      selectedTrack = track.fast;
    } else if (speed == "Pathfinder Society") {
      selectedTrack = track.pathfinderSociety;
    };
    var _nextXp = function() {
      selectedTrack.forEach(function(item, index, array) {
        if (selectedTrack[index] <= currentXp) {
          nextLevelIndex = index + 1;
        };
      });
      nextLevelXpMileStone = selectedTrack[nextLevelIndex];
      nextLevelXpNeeded = nextLevelXpMileStone - currentXp;
      if (nextLevelXpMileStone == undefined || isNaN(nextLevelXpMileStone)) {
        nextLevelXpMileStone = "";
        nextLevelXpNeeded = "";
      };
      helper.setObject({
        object: sheet.get(),
        path: "basics.experience.level.current",
        newValue: nextLevelIndex
      });
      helper.setObject({
        object: sheet.get(),
        path: "basics.experience.next_level",
        newValue: nextLevelXpMileStone
      });
      helper.setObject({
        object: sheet.get(),
        path: "basics.experience.needed",
        newValue: nextLevelXpNeeded
      });
    };
    var _level20 = function() {
      helper.setObject({
        object: sheet.get(),
        path: "basics.experience.level.current",
        newValue: 20
      });
      helper.setObject({
        object: sheet.get(),
        path: "basics.experience.next_level",
        newValue: ""
      });
      helper.setObject({
        object: sheet.get(),
        path: "basics.experience.needed",
        newValue: ""
      });
    };
    var _clear = function() {
      helper.setObject({
        object: sheet.get(),
        path: "basics.experience.level.current",
        newValue: ""
      });
      helper.setObject({
        object: sheet.get(),
        path: "basics.experience.next_level",
        newValue: ""
      });
      helper.setObject({
        object: sheet.get(),
        path: "basics.experience.needed",
        newValue: ""
      });
    };
    // if xp is less than level 20 for any advancement speed
    if (selectedTrack) {
      if (currentXp != "") {
        if (currentXp <= selectedTrack[selectedTrack.length - 1]) {
          _nextXp();
        } else {
          _level20();
        };
      } else {
        _nextXp();
      }
    } else {
      _clear();
    };
  };

  // exposed methods
  return {
    bind: bind,
    render: render
  };

})();
