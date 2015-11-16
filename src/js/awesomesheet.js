function awesomesheet() {

  var stats_strScore = e(".stats.str .scrore");
  var stats_dexScore = e(".stats.dex .scrore");
  var stats_conScore = e(".stats.con .scrore");
  var stats_intScore = e(".stats.int .scrore");
  var stats_wisScore = e(".stats.wis .scrore");
  var stats_chaScore = e(".stats.cha .scrore");

  var stats_strMod = e(".stats.str .modifier");
  var stats_dexMod = e(".stats.dex .modifier");
  var stats_conMod = e(".stats.con .modifier");
  var stats_intMod = e(".stats.int .modifier");
  var stats_wisMod = e(".stats.wis .modifier");
  var stats_chaMod = e(".stats.cha .modifier");

  var stats_strTempScrore = e(".stats.str .temp-scrore");
  var stats_dexTempScrore = e(".stats.dex .temp-scrore");
  var stats_conTempScrore = e(".stats.con .temp-scrore");
  var stats_intTempScrore = e(".stats.int .temp-scrore");
  var stats_wisTempScrore = e(".stats.wis .temp-scrore");
  var stats_chaTempScrore = e(".stats.cha .temp-scrore");

  var stats_strTempMod = e(".stats.str .temp-modifier");
  var stats_dexTempMod = e(".stats.dex .temp-modifier");
  var stats_conTempMod = e(".stats.con .temp-modifier");
  var stats_intTempMod = e(".stats.int .temp-modifier");
  var stats_wisTempMod = e(".stats.wis .temp-modifier");
  var stats_chaTempMod = e(".stats.cha .temp-modifier");

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

  // change mod
  function changeMod(element, field) {
    var stat = checkValue(element);
    var modifier = calculateModifer(element);
    field.innerHTML = modifier;
  };

  // calculate mod
  function calculateModifer(element) {
    var modifier = Math.floor((element.value - 10) / 2);
    return modifier;
  };

  // check value
  function checkValue(element) {
    var value = parseInt(element.value, 10) || parseInt(element.innerHTML, 10) || 0;
    return value;
  };

  // update skill total
  function update_skillTotal() {

    for (var i = 0; i < skillList.length; i++) {
      var skillMod = checkValue(skillList[i].children[3]);
      var skillRanks = checkValue(skillList[i].children[4].children[0]);
      var skillMisc = checkValue(skillList[i].children[5].children[0]);
      var skillTotal = skillMod + skillRanks + skillMisc;
      // console.log("skillMod === " + skillMod);
      // console.log("skillRanks === " + skillRanks);
      // console.log("skillMisc === " + skillMisc);
      // console.log("skillTotal === " + skillTotal);
      skillList[i].children[1].innerHTML = skillTotal;
    };

  };

  // update skill modifiers from stats
  function update_skillModifier() {

    for (var i = 0; i < skillList.length; i++) {
      var ability = skillList[i].children[2].innerHTML;
      var whichAbility = function() {
        // if the skill has STR or DEX or CON or INT or WIS or CHA in its ability 
        if (ability == "STR") {

          // if temp scores have content
          if (checkValue(stats_strTempMod) === "") {
            skillList[i].children[3].innerHTML = checkValue(stats_strMod);
          } else {
            skillList[i].children[3].innerHTML = checkValue(stats_strTempMod);
          };

        } else if (ability == "DEX") {
          // if temp scores have content
          if (checkValue(stats_dexTempMod) === "") {
            skillList[i].children[3].innerHTML = checkValue(stats_dexMod);
          } else {
            skillList[i].children[3].innerHTML = checkValue(stats_dexTempMod);
          };

        } else if (ability == "CON") {

          // if temp scores have content
          if (checkValue(stats_conTempMod) === "") {
            skillList[i].children[3].innerHTML = checkValue(stats_conMod);
          } else {
            skillList[i].children[3].innerHTML = checkValue(stats_conTempMod);
          };

        } else if (ability == "INT") {

          // if temp scores have content
          if (checkValue(stats_intTempMod) === "") {
            skillList[i].children[3].innerHTML = checkValue(stats_intMod);
          } else {
            skillList[i].children[3].innerHTML = checkValue(stats_intTempMod);
          };

        } else if (ability == "WIS") {

          // if temp scores have content
          if (checkValue(stats_wisTempMod) === "") {
            skillList[i].children[3].innerHTML = checkValue(stats_wisMod);
          } else {
            skillList[i].children[3].innerHTML = checkValue(stats_wisTempMod);
          };

        } else if (ability == "CHA") {

          // if temp scores have content
          if (checkValue(stats_chaTempMod) === "") {
            skillList[i].children[3].innerHTML = checkValue(stats_chaMod);
          } else {
            skillList[i].children[3].innerHTML = checkValue(stats_chaTempMod);
          };

        };
      };
      whichAbility();
    };

  };

  // add listeners to saved formula buttons and inputs
  function addListenerTo_stats() {
    var stats = eA(".stats");
    var stats_scrore = eA(".stats .scrore");
    var stats_modifier = eA(".stats .modifier");
    var stats_tempScrore = eA(".stats .temp-scrore");
    var stats_tempModifier = eA(".stats .temp-modifier");

    // primary scores
    for (var i = 0; i < stats.length; i++) {
      stats_scrore[i].addEventListener("input", function() {
        var parent = getClosest(this, ".stats");
        var modifier = parent.children[2];
        changeMod(this, modifier);
        update_skillModifier();
        update_skillTotal();
      }, false);
    };

    // temp scores
    for (var i = 0; i < stats.length; i++) {
      stats_tempScrore[i].addEventListener("input", function() {
        var parent = getClosest(this, ".stats");
        var tempStat = parent.children[3];
        var tempModifier = parent.children[4];
        changeMod(this, tempModifier);
        // if temp stat is null remove temp mod content
        if (tempStat.value == "") {
          tempModifier.innerHTML = null;
        };
        update_skillModifier();
        update_skillTotal();
      }, false);
    };

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

  addListenerTo_stats();
  addListenerTo_skillInputs();
  update_skillModifier();
  update_skillTotal();

};

awesomesheet();
smoothScroll.init();
