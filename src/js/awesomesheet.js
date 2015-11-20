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

  var skillList = e(".skill-list");
  var all_skillList_skillDetails = eA(".skill-list .skill-details");

  var ac = e(".ac");
  var acTouch = e(".ac-touch");
  var acFlatFooted = e(".ac-flat-footed");

  var clearLocalStorage = e(".clear-local-storage");
  var toggleFullscreen = e(".toggle-fullscreen");

  var spellCheck = eA(".spell-check");

  var all_inputBlock = eA(".input-block");

  var all_textareas = eA(".textarea");

  var all_skill_inputs = eA("input.skill-value");

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
  function getClosest(element, selector) {
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

  // store stats
  function store_stats() {

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

  // read stats
  function read_stats() {
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

  // store spell check
  function store_spellCheck() {
    var spellCheck_state = [];
    for (var i = 0; i < spellCheck.length; i++) {
      spellCheck_state.push(spellCheck[i].classList);
    };
    localStoreAdd("spellCheck", spellCheck_state);
  };

  // read spell check
  function read_spellCheck() {
    // read stored vaules
    var spellCheck_state = localStoreRead("spellCheck");
    // convert stored values into an array
    if (spellCheck_state) {
      var spellCheck_classes = spellCheck_state.split(',');
    };

    // put values into spellCheck elements
    if (spellCheck_state) {
      for (var i = 0; i < spellCheck.length; i++) {
        spellCheck[i].className = spellCheck_classes[i];
      };
    };
  };

  // store textareas
  function store_textareas(textarea) {
    // collect all textarea classes
    var textareaClassList = textarea.classList;
    // add all textarea to storage
    localStoreAdd(textareaClassList[1], textarea.innerHTML)
  };

  // read textareas
  function read_textarea() {
    for (var i = 0; i < all_textareas.length; i++) {
      // collect all textarea classes
      var textareaClassList = all_textareas[i].classList;
      // if textarea local store exists
      if (localStoreRead(textareaClassList[1])) {
        // search for textarea class and add innerhtml from local storage
        e("." + textareaClassList[1]).innerHTML = localStoreRead(textareaClassList[1]);
      };
    };
  };

  // store ac
  function store_ac() {

    localStoreAdd("ac_armor", ac.children[5].children[0].value);
    localStoreAdd("ac_shield", ac.children[7].children[0].value);
    localStoreAdd("ac_deflection", ac.children[9].children[0].value);
    localStoreAdd("ac_misc", ac.children[11].children[0].value);

    localStoreAdd("acTouch_deflection", acTouch.children[5].children[0].value);
    localStoreAdd("acTouch_misc", acTouch.children[7].children[0].value);

    localStoreAdd("acFlatFooted_armor", acFlatFooted.children[3].children[0].value);
    localStoreAdd("acFlatFooted_shield", acFlatFooted.children[5].children[0].value);
    localStoreAdd("acFlatFooted_deflection", acFlatFooted.children[7].children[0].value);
    localStoreAdd("acFlatFooted_misc", acFlatFooted.children[9].children[0].value);

  };

  // read ac
  function read_ac() {

    if (localStoreRead("ac_armor")) {
      ac.children[5].children[0].value = localStoreRead("ac_armor");
    };
    if (localStoreRead("ac_shield")) {
      ac.children[7].children[0].value = localStoreRead("ac_shield");
    };
    if (localStoreRead("ac_deflection")) {
      ac.children[9].children[0].value = localStoreRead("ac_deflection");
    };
    if (localStoreRead("ac_misc")) {
      ac.children[11].children[0].value = localStoreRead("ac_misc");
    };
    if (localStoreRead("acTouch_deflection")) {
      acTouch.children[5].children[0].value = localStoreRead("acTouch_deflection");
    };
    if (localStoreRead("acTouch_misc")) {
      acTouch.children[7].children[0].value = localStoreRead("acTouch_misc");
    };
    if (localStoreRead("acFlatFooted_armor")) {
      acFlatFooted.children[3].children[0].value = localStoreRead("acFlatFooted_armor");
    };
    if (localStoreRead("acFlatFooted_shield")) {
      acFlatFooted.children[5].children[0].value = localStoreRead("acFlatFooted_shield");
    };
    if (localStoreRead("acFlatFooted_deflection")) {
      acFlatFooted.children[7].children[0].value = localStoreRead("acFlatFooted_deflection");
    };
    if (localStoreRead("acFlatFooted_misc")) {
      acFlatFooted.children[9].children[0].value = localStoreRead("acFlatFooted_misc");
    };

  };

  // store skills
  function store_skills() {
    var skill_values = [];
    for (var i = 0; i < all_skill_inputs.length; i++) {
      skill_values.push(all_skill_inputs[i].value);
    };
    localStoreAdd("skill_list", skill_values);
  };

  // store skills
  function read_skills() {
    // read stored vaules
    var read_skill_values = localStoreRead("skill_list");
    // convert stored values into an array
    if (read_skill_values) {
      var skill_values = read_skill_values.split(',');
    };
    // put values into skill-value elements
    if (read_skill_values) {
      for (var i = 0; i < all_skill_inputs.length; i++) {
        all_skill_inputs[i].value = parseInt(skill_values[i], 10);
      };
    };
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

  // upage ac totals and mods
  function update_ac() {

    //  loop through ac for dex
    for (var i = 0; i < ac.children.length; i++) {
      if (ac.children[i].classList.contains("dex")) {
        ac.children[i].innerHTML = parseInt(stats_dexMod.innerHTML, 10) + " Dex";
      };
    };

    //  loop through acTouch for dex
    for (var i = 0; i < acTouch.children.length; i++) {
      if (acTouch.children[i].classList.contains("dex")) {
        acTouch.children[i].innerHTML = parseInt(stats_dexMod.innerHTML, 10) + " Dex";
      };
    };

    function acTotal(acType) {

      var base = 10;
      var dex = acType.querySelector(".dex");
      var armor = acType.querySelector(".armor input")
      var shield = acType.querySelector(".shield input")
      var deflection = acType.querySelector(".deflection input")
      var misc = acType.querySelector(".misc input")
      var acCombined = base;

      if (dex != null) {
        acCombined = acCombined + parseInt(dex.innerHTML, 10);
      };

      if (armor != null) {
        if (armor.value != "") {
          acCombined = acCombined + parseInt(armor.value, 10);
        };
      };

      if (shield != null) {
        if (shield.value != "") {
          acCombined = acCombined + parseInt(shield.value, 10);
        };
      };

      if (deflection != null) {
        if (deflection.value != "") {
          acCombined = acCombined + parseInt(deflection.value, 10);
        };
      };

      if (misc != null) {
        if (misc.value != "") {
          acCombined = acCombined + parseInt(misc.value, 10);
        };
      };

      acType.querySelector(".total").innerHTML = acCombined;

      // console.log(dex);
      // console.log(armor);
      // console.log(shield);
      // console.log(deflection);
      // console.log(misc);
      // console.log("acCombined = " + acCombined);

    };

    acTotal(ac);
    acTotal(acTouch);
    acTotal(acFlatFooted);

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

    for (var i = 0; i < all_skillList_skillDetails.length; i++) {
      var skillMod = parseInt(all_skillList_skillDetails[i].children[3].children[0].innerHTML, 10) || 0;
      var skillRanks = checkValue(all_skillList_skillDetails[i].children[4].children[0]);
      var skillMisc = checkValue(all_skillList_skillDetails[i].children[5].children[0]);
      var skillTotal = skillMod + skillRanks + skillMisc;
      all_skillList_skillDetails[i].children[1].children[0].innerHTML = skillTotal;
    };

  };

  // update skill modifiers from stats
  function update_skillModifier() {

    for (var i = 0; i < all_skillList_skillDetails.length; i++) {
      var ability = all_skillList_skillDetails[i].children[2].children[0].innerHTML;

      function whichAbility() {
        // if the skill has STR or DEX or CON or INT or WIS or CHA in its ability 
        if (ability == "STR") {

          // if temp score mod has content
          if (stats_strTempMod.innerHTML == "") {
            all_skillList_skillDetails[i].children[3].children[0].innerHTML = stats_strMod.innerHTML;
          } else {
            all_skillList_skillDetails[i].children[3].children[0].innerHTML = stats_strTempMod.innerHTML;
          };

        } else if (ability == "DEX") {
          // if temp score mod has content
          if (stats_dexTempMod.innerHTML == "") {
            all_skillList_skillDetails[i].children[3].children[0].innerHTML = stats_dexMod.innerHTML;
          } else {
            all_skillList_skillDetails[i].children[3].children[0].innerHTML = stats_dexTempMod.innerHTML;
          };

        } else if (ability == "CON") {

          // if temp score mod has content
          if (stats_conTempMod.innerHTML == "") {
            all_skillList_skillDetails[i].children[3].children[0].innerHTML = stats_conMod.innerHTML;
          } else {
            all_skillList_skillDetails[i].children[3].children[0].innerHTML = stats_conTempMod.innerHTML;
          };

        } else if (ability == "INT") {

          // if temp score mod has content
          if (stats_intTempMod.innerHTML == "") {
            all_skillList_skillDetails[i].children[3].children[0].innerHTML = stats_intMod.innerHTML;
          } else {
            all_skillList_skillDetails[i].children[3].children[0].innerHTML = stats_intTempMod.innerHTML;
          };

        } else if (ability == "WIS") {

          // if temp score mod has content
          if (stats_wisTempMod.innerHTML == "") {
            all_skillList_skillDetails[i].children[3].children[0].innerHTML = stats_wisMod.innerHTML;
          } else {
            all_skillList_skillDetails[i].children[3].children[0].innerHTML = stats_wisTempMod.innerHTML;
          };

        } else if (ability == "CHA") {

          // if temp score mod has content
          if (stats_chaTempMod.innerHTML == "") {
            all_skillList_skillDetails[i].children[3].children[0].innerHTML = stats_chaMod.innerHTML;
          } else {
            all_skillList_skillDetails[i].children[3].children[0].innerHTML = stats_chaTempMod.innerHTML;
          };

        };
      };
      whichAbility();
    };

  };

  // toggle fullscreen
  function toggleFullScreen() {
    var root = window.document;
    var rootElement = root.documentElement;
    var requestFullScreen = rootElement.requestFullscreen || rootElement.mozRequestFullScreen || rootElement.webkitRequestFullScreen || rootElement.msRequestFullscreen;
    var cancelFullScreen = root.exitFullscreen || root.mozCancelFullScreen || root.webkitExitFullscreen || root.msExitFullscreen;
    if (!root.fullscreenElement && !root.mozFullScreenElement && !root.webkitFullscreenElement && !root.msFullscreenElement) {
      requestFullScreen.call(rootElement);
      toggleClass(toggleFullscreen, "active");
      toggleClass(toggleFullscreen.querySelector("span"), "icon-fullscreen-exit");
      toggleClass(toggleFullscreen.querySelector("span"), "icon-fullscreen");
    } else {
      cancelFullScreen.call(root);
      toggleClass(toggleFullscreen, "active");
      toggleClass(toggleFullscreen.querySelector("span"), "icon-fullscreen-exit");
      toggleClass(toggleFullscreen.querySelector("span"), "icon-fullscreen");
    }
  };

  // move label down when input has a value
  function inputBlock_focus(element) {
    var inputBlockRoot = element.parentNode;
    var inputLabel = inputBlockRoot.querySelector(".input-label");
    var inputField = inputBlockRoot.querySelector(".input-field");
    if (inputField.value !== "") {
      addClass(inputLabel, "input-label-focus");
    } else if (inputField !== document.activeElement) {
      removeClass(inputLabel, "input-label-focus");
    } else {
      addClass(inputLabel, "input-label-focus");
    };
  };

  // check and move label down when input has a value
  function update_inputBlock_focus() {
    for (var i = 0; i < all_inputBlock.length; i++) {
      var inputBlockRoot = all_inputBlock[i];
      var inputLabel = inputBlockRoot.querySelector(".input-label");
      var inputField = inputBlockRoot.querySelector(".input-field");
      if (inputField.value !== "") {
        addClass(inputLabel, "input-label-focus");
      } else if (inputField !== document.activeElement) {
        removeClass(inputLabel, "input-label-focus");
      } else {
        addClass(inputLabel, "input-label-focus");
      };
    };
  };

  // add listeners to stats
  function addListenerTo_acInputs() {

    function addListener(acType) {

      var armor = acType.querySelector(".armor input");
      var shield = acType.querySelector(".shield input");
      var deflection = acType.querySelector(".deflection input");
      var misc = acType.querySelector(".misc input");

      if (armor != null) {
        armor.addEventListener("input", function() {
          update_ac();
          store_ac();
        }, false);
      };

      if (shield != null) {
        shield.addEventListener("input", function() {
          update_ac();
          store_ac();
        }, false);
      };

      if (deflection != null) {
        deflection.addEventListener("input", function() {
          update_ac();
          store_ac();
        }, false);
      };

      if (misc != null) {
        misc.addEventListener("input", function() {
          update_ac();
          store_ac();
        }, false);
      };

    };

    addListener(ac);
    addListener(acTouch);
    addListener(acFlatFooted);

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
        // update sheet when stats are modified
        update_skillModifier();
        update_skillTotal();
        update_ac();
        store_stats();
        store_ac();
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
        // update sheet when stats are modified
        update_skillModifier();
        update_skillTotal();
        update_ac();
        store_stats();
        store_ac();
      }, false);
    };

  };

  // add listeners to spells
  function addListenerTo_spellCheck() {

    for (var i = 0; i < spellCheck.length; i++) {
      spellCheck[i].addEventListener("click", function() {
        // if box is unchecked
        if (this.classList.contains("icon-check-box-unchecked")) {
          removeClass(this, "icon-check-box-unchecked");
          addClass(this, "icon-check-box-checked");
          store_spellCheck();
        } else if (this.classList.contains("spell-cast")) {
          addClass(this, "icon-check-box-unchecked");
          removeClass(this, "icon-check-box-checked");
          removeClass(this, "spell-cast");
          store_spellCheck();
        } else if (this.classList.contains("icon-check-box-checked")) {
          addClass(this, "spell-cast");
          store_spellCheck();
        };
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
        store_skills();
      }, false);
    };

    for (var i = 0; i < skillMisc.length; i++) {
      skillMisc[i].addEventListener("input", function() {
        update_skillTotal();
        store_skills();
      }, false);
    };

  };

  // add listeners to textareas
  function addListenerTo_textareass() {
    for (var i = 0; i < all_textareas.length; i++) {
      all_textareas[i].addEventListener("input", function() {
        store_textareas(this);
      }, false);
    };
  };

  // add listeners to inputBlock
  function addListenerTo_inputBlock() {
    for (var i = 0; i < all_inputBlock.length; i++) {
      var inputLabel = all_inputBlock[i].querySelector(".input-field");
      inputLabel.addEventListener("input", function() {
        inputBlock_focus(this);
        store_inputBlock(this);
      }, false);
      inputLabel.addEventListener("focus", function() {
        inputBlock_focus(this);
        store_inputBlock(this);
      }, false);
      inputLabel.addEventListener("blur", function() {
        inputBlock_focus(this);
        store_inputBlock(this);
      }, false);
    };
  };

  // store inputBlock
  function store_inputBlock(element) {
    // collect all inputBlock classes
    var inputBlockId = element.id;
    // add all inputBlock to storage
    localStoreAdd(inputBlockId, element.value)
  };

  // read inputBlock
  function read_inputBlock() {
    for (var i = 0; i < all_inputBlock.length; i++) {
      // collect all inputBlock classes
      var inputBlockId = all_inputBlock[i].querySelector(".input-field").id;
      // if inputBlock local store exists
      if (localStoreRead(inputBlockId)) {
        // search for inputBlock class and add innerhtml from local storage
        e("#" + inputBlockId).value = localStoreRead(inputBlockId);
      };
    };
  };

  // listners

  clearLocalStorage.addEventListener("click", function() {
    localStorage.clear();
  }, false);

  toggleFullscreen.addEventListener("click", function() {
    toggleFullScreen();
  }, false);

  addListenerTo_spellCheck();
  addListenerTo_stats();
  addListenerTo_skillInputs();
  addListenerTo_acInputs();
  addListenerTo_textareass();
  addListenerTo_inputBlock();
  read_textarea();
  read_inputBlock();
  read_spellCheck();
  read_skills();
  read_stats();
  read_ac();
  update_scoreModifiers();
  update_skillModifier();
  update_skillTotal();
  update_ac();
  update_inputBlock_focus()

};

awesomesheet();
smoothScroll.init();
