var update = (function() {

  var history = [{
    version: "3.19.2",
    list: [
      "Refactor Nav open and close logic and performance."
    ]
  }, {
    version: "3.19.1",
    list: [
      "Fix bug where invisible line breaks would cause empty Textarea Blocks to render in Display mode."
    ]
  }, {
    version: "3.19.0",
    list: [
      "Introduced Tabs to improve Edit layout."
    ]
  }, {
    version: "3.18.0",
    list: [
      "Added Character Description."
    ]
  }, {
    version: "3.17.0",
    list: [
      "*Added Wealth totaling.",
      "Improved Display layout.",
      "General UI fixes to Card design."
    ]
  }, {
    version: "3.16.1",
    list: [
      "*Added automatic Encumbrance calculation.",
      "Improved Display layout.",
      "Added more Tips.",
      "General refactoring and UI fixes."
    ]
  }, {
    version: "3.15.0",
    list: [
      "Added Alphabetical Spell sort."
    ]
  }, {
    version: "3.14.0",
    list: [
      "Improved Total Bonus modal layout."
    ]
  }, {
    version: "3.13.1",
    list: [
      "Added more Tips.",
      "Fixing bug where Tips would not be removed from the DOM."
    ]
  }, {
    version: "3.12.0",
    list: [
      "Added Caster Level Check support.",
      "Updated demo PCs."
    ]
  }, {
    version: "3.10.0",
    list: [
      "Improved Damage, Temp and Non Leathal HP controls."
    ]
  }, {
    version: "3.9.1",
    list: [
      "Update print styles to use columns."
    ]
  }, {
    version: "3.9.0",
    list: [
      "*Added Multi class support!",
      "Added areas for more than one Class.",
      "Added skill rank totals.",
      "Improved edit mode layout and general UI fixes."
    ]
  }, {
    version: "3.8.0",
    list: [
      "Redesigned layout of Display mode.",
      "Improved Log design."
    ]
  }, {
    version: "3.7.0",
    list: [
      "*Offline use feature added. AwesomeSheet will now work offline if it has been cached."
    ]
  }, {
    version: "3.6.1",
    list: [
      "Added Feat and Trait inputs to Saves, removing Racial inputs on Saves.",
      "*Added Size categories with auto calculation and Alignment dropdown. You may need to re-enter you size and Alignment.",
      "Moved Armor and Shield to Equipment section."
    ]
  }, {
    version: "3.5.2",
    list: [
      "Added Item list total weight.",
      "Updated character object repair for concentration bonuses."
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

  function currentVersion() {
    return history[0].version;
  };

  // exposed methods
  return {
    ver: currentVersion,
    history: history
  };

})();
