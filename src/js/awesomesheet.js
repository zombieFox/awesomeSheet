function awesomesheet() {

  var stats_strScore = e(".stats.str .score");
  var stats_dexScore = e(".stats.dex .score");
  var stats_conScore = e(".stats.con .score");
  var stats_intScore = e(".stats.int .score");
  var stats_wisScore = e(".stats.wis .score");
  var stats_chaScore = e(".stats.cha .score");

  var stats_strMod = e(".stats.str .modifier");
  var stats_dexMod = e(".stats.dex .modifier");
  var stats_conMod = e(".stats.con .modifier");
  var stats_intMod = e(".stats.int .modifier");
  var stats_wisMod = e(".stats.wis .modifier");
  var stats_chaMod = e(".stats.cha .modifier");

  var stats_strTempScore = e(".stats.str .temp-score");
  var stats_dexTempScore = e(".stats.dex .temp-score");
  var stats_conTempScore = e(".stats.con .temp-score");
  var stats_intTempScore = e(".stats.int .temp-score");
  var stats_wisTempScore = e(".stats.wis .temp-score");
  var stats_chaTempScore = e(".stats.cha .temp-score");

  var stats_strTempMod = e(".stats.str .temp-modifier");
  var stats_dexTempMod = e(".stats.dex .temp-modifier");
  var stats_conTempMod = e(".stats.con .temp-modifier");
  var stats_intTempMod = e(".stats.int .temp-modifier");
  var stats_wisTempMod = e(".stats.wis .temp-modifier");
  var stats_chaTempMod = e(".stats.cha .temp-modifier");

  var skillList = eA(".skill-list .skill-details");

  // local storage add
  function localStoreAdd(key, data) {
    if (localStorage.getItem) {
      localStorage.setItem(key, data);
      // console.log("added " + key + " + " + data);
    };
  };

  // local storage read
  function localStoreRead(key) {
    if (localStorage.getItem(key) == "") {
      localStorage.removeItem(key);
      // console.log(key + " was deleted");
    } else if (localStorage.getItem(key)) {
      return localStorage.getItem(key);
      // data = localStorage.getItem(key);
      // console.log("read and displayed " + key + " + " + data);
    };
  };

  function store_sheet() {

    localStoreAdd("stats_str", stats_strScore.value);
    localStoreAdd("stats_dex", stats_dexScore.value);
    localStoreAdd("stats_con", stats_conScore.value);
    localStoreAdd("stats_int", stats_intScore.value);
    localStoreAdd("stats_wis", stats_wisScore.value);
    localStoreAdd("stats_cha", stats_chaScore.value);

    localStoreAdd("stats_strTemp", stats_strTempScore.value);
    localStoreAdd("stats_dexTemp", stats_dexTempScore.value);
    localStoreAdd("stats_conTemp", stats_conTempScore.value);
    localStoreAdd("stats_intTemp", stats_intTempScore.value);
    localStoreAdd("stats_wisTemp", stats_wisTempScore.value);
    localStoreAdd("stats_chaTemp", stats_chaTempScore.value);

  };

  function read_sheet() {

    if (localStoreRead("stats_str")) {
      stats_strScore.value = localStoreRead("stats_str");
    };
    if (localStoreRead("stats_dex")) {
      stats_dexScore.value = localStoreRead("stats_dex");
    };
    if (localStoreRead("stats_con")) {
      stats_conScore.value = localStoreRead("stats_con");
    };
    if (localStoreRead("stats_int")) {
      stats_intScore.value = localStoreRead("stats_int");
    };
    if (localStoreRead("stats_wis")) {
      stats_wisScore.value = localStoreRead("stats_wis");
    };
    if (localStoreRead("stats_cha")) {
      stats_chaScore.value = localStoreRead("stats_cha");
    };
    if (localStoreRead("stats_strTemp")) {
      stats_strTempScore.value = localStoreRead("stats_strTemp");
    };
    if (localStoreRead("stats_dexTemp")) {
      stats_dexTempScore.value = localStoreRead("stats_dexTemp");
    };
    if (localStoreRead("stats_conTemp")) {
      stats_conTempScore.value = localStoreRead("stats_conTemp");
    };
    if (localStoreRead("stats_intTemp")) {
      stats_intTempScore.value = localStoreRead("stats_intTemp");
    };
    if (localStoreRead("stats_wisTemp")) {
      stats_wisTempScore.value = localStoreRead("stats_wisTemp");
    };
    if (localStoreRead("stats_chaTemp")) {
      stats_chaTempScore.value = localStoreRead("stats_chaTemp");
    };

  };


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
    // console.log("stat = " + stat);
    var modifier = calculateModifer(element);
    // console.log("modifier = " + modifier);
    field.innerHTML = modifier;
    // console.log("field = ");
    // console.log(field);
  };

  // calculate mod
  function calculateModifer(element) {
    var modifier = Math.floor((element.value - 10) / 2);
    return modifier;
  };

  // check value
  function checkValue(element) {
    var value = parseInt(element.value, 10) || 0;
    return value;
  };

  // update mods
  function update_scoreModifiers() {

    changeMod(stats_strScore, stats_strMod);
    changeMod(stats_dexScore, stats_dexMod);
    changeMod(stats_conScore, stats_conMod);
    changeMod(stats_intScore, stats_intMod);
    changeMod(stats_wisScore, stats_wisMod);
    changeMod(stats_chaScore, stats_chaMod);

    // if score temp is not empty calculte the temp mod
    if (stats_strTempScore.value !== "") {
      changeMod(stats_strTempScore, stats_strTempMod);
    };

    // if score temp is not empty calculte the temp mod
    if (stats_dexTempScore.value !== "") {
      changeMod(stats_dexTempScore, stats_dexTempMod);
    };

    // if score temp is not empty calculte the temp mod
    if (stats_conTempScore.value !== "") {
      changeMod(stats_conTempScore, stats_conTempMod);
    };

    // if score temp is not empty calculte the temp mod
    if (stats_intTempScore.value !== "") {
      changeMod(stats_intTempScore, stats_intTempMod);
    };

    // if score temp is not empty calculte the temp mod
    if (stats_wisTempScore.value !== "") {
      changeMod(stats_wisTempScore, stats_wisTempMod);
    };

    // if score temp is not empty calculte the temp mod
    if (stats_chaTempScore.value !== "") {
      changeMod(stats_chaTempScore, stats_chaTempMod);
    };

  };


  // update skill total
  function update_skillTotal() {

    for (var i = 0; i < skillList.length; i++) {
      var skillMod = parseInt(skillList[i].children[3].children[0].innerHTML, 10) || 0;
      var skillRanks = checkValue(skillList[i].children[4].children[0]);
      var skillMisc = checkValue(skillList[i].children[5].children[0]);
      var skillTotal = skillMod + skillRanks + skillMisc;
      skillList[i].children[1].children[0].innerHTML = skillTotal;
    };

  };

  // update skill modifiers from stats
  function update_skillModifier() {

    for (var i = 0; i < skillList.length; i++) {
      var ability = skillList[i].children[2].children[0].innerHTML;
      var whichAbility = function() {
        // if the skill has STR or DEX or CON or INT or WIS or CHA in its ability 
        if (ability == "STR") {

          // if temp score mod has content
          if (stats_strTempMod.innerHTML == "") {
            skillList[i].children[3].children[0].innerHTML = stats_strMod.innerHTML;
          } else {
            skillList[i].children[3].children[0].innerHTML = stats_strTempMod.innerHTML;
          };

        } else if (ability == "DEX") {
          // if temp score mod has content
          if (stats_dexTempMod.innerHTML == "") {
            skillList[i].children[3].children[0].innerHTML = stats_dexMod.innerHTML;
          } else {
            skillList[i].children[3].children[0].innerHTML = stats_dexTempMod.innerHTML;
          };

        } else if (ability == "CON") {

          // if temp score mod has content
          if (stats_conTempMod.innerHTML == "") {
            skillList[i].children[3].children[0].innerHTML = stats_conMod.innerHTML;
          } else {
            skillList[i].children[3].children[0].innerHTML = stats_conTempMod.innerHTML;
          };

        } else if (ability == "INT") {

          // if temp score mod has content
          if (stats_intTempMod.innerHTML == "") {
            skillList[i].children[3].children[0].innerHTML = stats_intMod.innerHTML;
          } else {
            skillList[i].children[3].children[0].innerHTML = stats_intTempMod.innerHTML;
          };

        } else if (ability == "WIS") {

          // if temp score mod has content
          if (stats_wisTempMod.innerHTML == "") {
            skillList[i].children[3].children[0].innerHTML = stats_wisMod.innerHTML;
          } else {
            skillList[i].children[3].children[0].innerHTML = stats_wisTempMod.innerHTML;
          };

        } else if (ability == "CHA") {

          // if temp score mod has content
          if (stats_chaTempMod.innerHTML == "") {
            skillList[i].children[3].children[0].innerHTML = stats_chaMod.innerHTML;
          } else {
            skillList[i].children[3].children[0].innerHTML = stats_chaTempMod.innerHTML;
          };

        };
      };
      whichAbility();
    };

  };

  // add listeners to stats
  function addListenerTo_stats() {
    var stats = eA(".stats");
    var stats_score = eA(".stats .score");
    var stats_modifier = eA(".stats .modifier");
    var stats_tempScore = eA(".stats .temp-score");
    var stats_tempModifier = eA(".stats .temp-modifier");

    // primary scores
    for (var i = 0; i < stats.length; i++) {
      stats_score[i].addEventListener("input", function() {
        var parent = getClosest(this, ".stats");
        var modifier = parent.children[2];
        changeMod(this, modifier);
        update_skillModifier();
        update_skillTotal();
        store_sheet();
      }, false);
    };

    // temp scores
    for (var i = 0; i < stats.length; i++) {
      stats_tempScore[i].addEventListener("input", function() {
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
        store_sheet();
      }, false);
    };

  };

  // add listeners to skills
  function addListenerTo_skillInputs() {
    var skillRanks = eA(".ranks input");
    var skillMisc = eA(".misc input");

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
  read_sheet();
  update_scoreModifiers();
  update_skillModifier();
  update_skillTotal();

};

awesomesheet();
smoothScroll.init();
