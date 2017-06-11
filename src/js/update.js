var update = (function() {

  var message = {
    version: "3.1.0",
    list: [
      // "An customisable Initiative block has been added. You will have to re-enter you initiative bonuses if any.",
      "Added a new feature update prompt. You're looking at it.",
      "UI fixes and updates."
    ]
  };

  var history = [{
    version: "3.0.0",
    list: [
      "Improve edit and display modes and introduce card layout."
    ]
  }];

  // exposed methods
  return {
    message: message,
    history: history
  };

})();
