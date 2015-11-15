function awesomesheet() {

  var stats_strMod = e(".stats.str .modifier");
  var stats_dexMod = e(".stats.dex .modifier");
  var stats_conMod = e(".stats.con .modifier");
  var stats_intMod = e(".stats.int .modifier");
  var stats_wisMod = e(".stats.wis .modifier");
  var stats_chaMod = e(".stats.cha .modifier");
  var skillList = eA(".skill-list .skill-details");

  // get element by class or id
  function e(selector) {
    return document.querySelector(selector);
  };

  // get all elements by class or id
  function eA(selector) {
    return document.querySelectorAll(selector);
  };

  // toggle class
  function toggleClass(element, theClassName) {
    element.classList.toggle(theClassName);
  };

  // add class
  function addClass(element, theClassName) {
    element.classList.add(theClassName);
  };

  // remove class
  function removeClass(element, theClassName) {
    element.classList.remove(theClassName);
  };

  // get parent element
  var getClosest = function(element, selector) {
    var firstChar = selector.charAt(0);
    // Get closest match
    for (; element && element !== document; element = element.parentNode) {
      // If selector is a class
      if (firstChar === '.') {
        if (element.classList.contains(selector.substr(1))) {
          return element;
        };
      };
      // If selector is an ID
      if (firstChar === '#') {
        if (element.id === selector.substr(1)) {
          return element;
        };
      };
      // If selector is a data attribute
      if (firstChar === '[') {
        if (element.hasAttribute(selector.substr(1, selector.length - 2))) {
          return element;
        };
      };
      // If selector is a tag
      if (element.tagName.toLowerCase() === selector) {
        return element;
      };
    };
    return false;
  };

  function calculateModifer(element) {
    var modifier = Math.floor((element.value - 10) / 2);
    return modifier;
  };

  function changeMod(element, field) {
    var stat = checkValue(element);
    var modifier = calculateModifer(element);
    field.value = modifier;
  };

  function checkValue(element) {
    var value = parseInt(element.value, 10) || 0;
    return value;
  };

  // add listeners to saved formula buttons and inputs
  function addListenerTo_stats() {
    var stats = eA(".stats");
    var stats_scrore = eA(".stats .scrore");
    var stats_modifier = eA(".stats .modifier");
    // var stats_tempScrore = eA(".stats .temp-scrore");
    // var stats_tempModifier = eA(".stats .temp-modifier");

    for (var i = 0; i < stats.length; i++) {
      stats_scrore[i].addEventListener("input", function() {
        var parent = getClosest(this, ".stats");
        var modifier = parent.children[2];
        changeMod(this, modifier);
        update_skillModifier();
        update_skillTotal();
      }, false);
    };

    // for (var i = 0; i < stats.length; i++) {
    //   stats_tempScrore[i].addEventListener("input", function() {
    //     var parent = getClosest(this, ".stats");
    //     var modifier = parent.children[4];
    //     changeMod(this, modifier);
    //     update_skillModifier();
    //     update_skillTotal();
    //   }, false);
    // };

  };

  // add listeners to saved formula buttons and inputs
  function addListenerTo_skillInputs() {
    var skillRanks = eA(".skill-ranks input");
    var skillMisc = eA(".skill-misc input");

    for (var i = 0; i < skillRanks.length; i++) {
      skillRanks[i].addEventListener("input", function() {
        update_skillTotal();
      }, false);
    };

    for (var i = 0; i < skillMisc.length; i++) {
      skillMisc[i].addEventListener("input", function() {
        update_skillTotal();
      }, false);
    };

  };

  // update skill total
  function update_skillTotal() {

    for (var i = 0; i < skillList.length; i++) {
      var skillMod = parseInt(skillList[i].children[3].innerHTML, 10) || 0;
      var skillRanks = parseInt(skillList[i].children[4].children[0].value, 10) || 0;
      var skillMisc = parseInt(skillList[i].children[5].children[0].value, 10) || 0;
      var skillTotal = skillMod + skillRanks + skillMisc;
      skillList[i].children[1].innerHTML = skillTotal;
    };

  };

  // update skill modifiers from stats
  function update_skillModifier() {

    for (var i = 0; i < skillList.length; i++) {
      var ability = skillList[i].children[2].innerHTML;
      var whichAbility = function() {
        if (ability == "STR") {
          skillList[i].children[3].innerHTML = stats_strMod.value;
        } else if (ability == "DEX") {
          skillList[i].children[3].innerHTML = stats_dexMod.value;
        } else if (ability == "CON") {
          skillList[i].children[3].innerHTML = stats_conMod.value;
        } else if (ability == "INT") {
          skillList[i].children[3].innerHTML = stats_intMod.value;
        } else if (ability == "WIS") {
          skillList[i].children[3].innerHTML = stats_wisMod.value;
        } else if (ability == "CHA") {
          skillList[i].children[3].innerHTML = stats_chaMod.value;
        };
      };
      whichAbility();
    };

  };

  addListenerTo_stats();
  addListenerTo_skillInputs();
  update_skillModifier();
  update_skillTotal();

};

awesomesheet();
smoothScroll.init();
