var update = (function() {

  var history = [{
    version: "3.5.2",
    list: [
      "Added Item list total weight.",
      "Updated character object repair for concentration bonuses"
    ]
  }, {
    version: "3.5.1",
    list: [
      "Improve Clone and Import UI."
    ]
  }, {
    version: "3.5.0",
    list: [
      "Refactored Clones, Input and Textarea modules.",
      "*New Items feature added.",
      "*New Custom Skills feature added."
    ]
  }, {
    version: "3.4.0",
    list: [
      "Redesigned edit mode layout and style for ease of reading."
    ]
  }, {
    version: "3.3.0",
    list: [
      "Optimise Consumable, Attack and Note modules for faster page load.",
      "Fixed a bug with Skill totals not recognising class skill."
    ]
  }, {
    version: "3.2.2",
    list: [
      "Refactored change log module.",
      "*Customisable Initiative block added. You will have to re-enter you Initiative bonuses if any.",
      "Fixed a bug with Update Prompt not hiding and Change Log control in the Nav not working.",
      "UI fixes and updates."
    ]
  }, {
    version: "3.1.0",
    list: [
      "Added a new feature Update Prompt. You're looking at it.",
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
