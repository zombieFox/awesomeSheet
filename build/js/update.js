var update = (function() {

  var history = [{
    version: "3.2.1",
    list: [
      "Refactored change log module.",
      "*Customisable Initiative block added. You will have to re-enter you initiative bonuses if any."
    ]
  }, {
    version: "3.1.0",
    list: [
      "Added a new feature update prompt. You're looking at it.",
      "UI fixes and updates."
    ]
  }, {
    version: "3.0.0",
    list: [
      "Improve edit and display modes and introduce card layout."
    ]
  }];

  // exposed methods
  return {
    history: history
  };

})();
