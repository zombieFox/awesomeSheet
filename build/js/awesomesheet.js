function awesomesheet() {

  // --------------------------------------------------------------------------
  // vars
  // --------------------------------------------------------------------------

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

  var all_inputTotalBlock = eA(".input-total-block");
  var all_inputBlock = eA(".input-block");

  var all_textareas = eA(".textarea");

  var all_skill_inputs = eA(".skill-value");

  var all_addSpell = eA(".add-spell");
  var all_removeSpell = eA(".remove-spell");

  var nav = e("nav");
  var navToggle = e(".nav-toggle");

  // --------------------------------------------------------------------------
  // helper functions
  // --------------------------------------------------------------------------

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

  // check value
  function checkValue(element) {
    var value = parseInt(element.value, 10) || 0;
    return value;
  };

  // --------------------------------------------------------------------------
  // nav
  // --------------------------------------------------------------------------

  navToggle.addEventListener("click", function() {
    toggleClass(nav, "open");
  }, false);

  window.addEventListener('click', function(event) {
    if (event.target != nav && event.target.parentNode != nav) {
      toggleClass(nav, "open");
    }
  });


  // --------------------------------------------------------------------------
  // stats
  // --------------------------------------------------------------------------

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

  // update mods
  function update_scoreModifiers() {
    var stats = eA(".stats");
    for (var i = 0; i < stats.length; i++) {
      var score = stats[i].querySelector(".score");
      var modifier = stats[i].querySelector(".modifier");
      var tempScore = stats[i].querySelector(".temp-score");
      var tempModifier = stats[i].querySelector(".temp-modifier");
      if (score.value !== "") {
        changeMod(score, modifier);
      } else {
        modifier.innerHTML = "";
      };
      if (tempScore.value !== "") {
        changeMod(tempScore, tempModifier);
      } else {
        tempModifier.innerHTML = "";
      };
    };
  };

  // add listeners to stats
  function addListenerTo_stats() {
    var score = eA(".stats .score");
    var tempScore = eA(".stats .temp-score");
    // primary scores
    for (var i = 0; i < score.length; i++) {
      score[i].addEventListener("input", function() {
        update_scoreModifiers();
        update_skillTotal();
        update_inputTotalBlock();
        // update_ac();
        store_stats();
      }, false);
    };

    // temp scores
    for (var i = 0; i < tempScore.length; i++) {
      tempScore[i].addEventListener("input", function() {
        update_scoreModifiers();
        update_skillTotal();
        update_inputTotalBlock();
        // update_ac();
        store_stats();
      }, false);
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

  // --------------------------------------------------------------------------
  // spells
  // --------------------------------------------------------------------------

  // add listeners to all spell know items
  function addListenerTo_all_spellKnownItem() {
    var all_spellKnownItem = eA(".spell-known-item");
    for (var i = 0; i < all_spellKnownItem.length; i++) {
      // stop addListenerTo_all_spellKnownItem from stacking event listeners on the same element
      var doesSpellHaveListener = all_spellKnownItem[i].dataset.eventListener;
      if (doesSpellHaveListener == "false") {
        all_spellKnownItem[i].dataset.eventListener = "true";
        all_spellKnownItem[i].addEventListener("click", function() {
          copyOrDeleteSpell(this);
          store_preparedList();
          update_preparedListStatus();
        }, false);
      };
    };
  };

  // add listeners to prepared spells
  function addListenerTo_all_spellPreparedItem() {
    var all_spellPreparedItem = eA(".spell-prepared-item");
    for (var i = 0; i < all_spellPreparedItem.length; i++) {
      // stop addListenerTo_all_spellPreparedItem from stacking event listeners on the same element
      var doesSpellHaveListener = all_spellPreparedItem[i].dataset.eventListener;
      if (doesSpellHaveListener == "false") {
        all_spellPreparedItem[i].dataset.eventListener = "true";
        all_spellPreparedItem[i].addEventListener("click", function() {
          update_spellState(this);
          store_preparedList();
          update_preparedListStatus();
        }, false);
      };
    };
  };

  // reset data attributes on page reload
  // this is needed after spells are populated from local storage 
  function changeData_all_spellKnownItem() {
    var all_spellKnownItem = eA(".spell-known-item");
    for (var i = 0; i < all_spellKnownItem.length; i++) {
      all_spellKnownItem[i].dataset.eventListener = "false";
    };
  };

  // reset data attributes on page reload
  // this is needed after spells are populated from local storage 
  function changeData_all_spellPreparedItem() {
    var all_spellPreparedItem = eA(".spell-prepared-item");
    for (var i = 0; i < all_spellPreparedItem.length; i++) {
      all_spellPreparedItem[i].dataset.eventListener = "false";
    };
  };

  // add listeners to add new spell button
  function addListenerTo_all_addSpell() {
    for (var i = 0; i < all_addSpell.length; i++) {
      all_addSpell[i].addEventListener("click", function() {
        addNewSpell(this);
        store_knownList();
        update_removeSpellButton();
      }, false);
    };
  };

  // add listeners to remove spell button
  function addListenerTo_all_removeSpell() {
    for (var i = 0; i < all_removeSpell.length; i++) {
      all_removeSpell[i].addEventListener("click", function() {
        changeData_deleteSpellState(this);
        update_removeSpellButton();
      }, false);
    };
  };

  // activate delete state on all saved spell lists
  function changeData_deleteSpellState(element) {
    var knownListToChangeState = getClosest(element, ".spell-level").querySelector(".spells-known");
    var deleteState = knownListToChangeState.dataset.deleteSpellState;
    // if spells known has children
    if (knownListToChangeState.children.length > 0) {
      var all_spellKnownItem = knownListToChangeState.querySelectorAll(".spell-known-item");
      var icon = element.querySelector(".icon");
      var text = element.querySelector(".text");
      if (element.classList.contains("active")) {
        toggleClass(element, "active");
        toggleClass(element, "button-primary");
        toggleClass(element, "button-secondary");
        toggleClass(icon, "icon-close");
        toggleClass(icon, "icon-radio-button-unchecked");
        text.innerHTML = "Delete a spell";
      } else {
        toggleClass(element, "active");
        toggleClass(element, "button-primary");
        toggleClass(element, "button-secondary");
        toggleClass(icon, "icon-close");
        toggleClass(icon, "icon-radio-button-unchecked");
        text.innerHTML = "Done deleting spells";
      };
      // add close icon to known list item
      for (var i = 0; i < all_spellKnownItem.length; i++) {
        var icon = all_spellKnownItem[i].querySelector("span");
        toggleClass(icon, "icon-bookmark-outline");
        toggleClass(icon, "icon-close");
      };
      // toggle delete spell data attribute
      if (deleteState == "true") {
        knownListToChangeState.dataset.deleteSpellState = "false";
        toggleClass(knownListToChangeState, "delete-state");
      };
      if (deleteState == "false") {
        knownListToChangeState.dataset.deleteSpellState = "true";
        toggleClass(knownListToChangeState, "delete-state");
      };
    };
  };

  // update remove spell button
  function update_removeSpellButton() {
    var all_spellsKnown = eA(".spells-known");
    for (var i = 0; i < all_spellsKnown.length; i++) {
      var spellLevel = getClosest(all_spellsKnown[i], ".spell-level");
      var knownListToCheck = spellLevel.querySelector(".spells-known");
      var removeSpellButton = spellLevel.querySelector(".remove-spell");
      var icon = removeSpellButton.querySelector(".icon");
      var text = removeSpellButton.querySelector(".text");
      // if all_spellsKnown[i] has no children remove data attributes and classes
      if (all_spellsKnown[i].children.length > 0) {
        removeClass(removeSpellButton, "hidden");
      } else {
        knownListToCheck.dataset.deleteSpellState = "false";
        removeClass(knownListToCheck, "delete-state");
        removeClass(removeSpellButton, "active");
        addClass(removeSpellButton, "hidden");
        removeClass(removeSpellButton, "button-primary");
        addClass(removeSpellButton, "button-secondary");
        removeClass(icon, "icon-radio-button-unchecked");
        addClass(icon, "icon-close");
        text.innerHTML = "Delete a spell";
      };
    };
  };

  // add listeners to add new spell input
  function addListenerTo_all_addSpell_input() {
    for (var i = 0; i < all_addSpell.length; i++) {
      var newSpellRoot = getClosest(all_addSpell[i], ".new-spell");
      var all_addSpell_input = newSpellRoot.querySelector("input");
      all_addSpell_input.addEventListener("keypress", function() {
        addNewSpellOnEnter(this);
      }, false);
    };
  };

  // add new spell on input enter
  function addNewSpellOnEnter(element) {
    var keystroke = event.keyCode || event.which;
    if (keystroke == 13) {
      addNewSpell(element);
      store_knownList();
    };
  };

  // copy the selected spell to the prepared list
  function copyOrDeleteSpell(spell) {
    var spellLevel = getClosest(spell, ".spell-level");
    var deleteState = spellLevel.querySelector(".spells-known").dataset.deleteSpellState;
    var name = spell.innerHTML;
    var level = spellLevel.dataset.spellLevel;
    var preparedListToSaveTo = e(".spells-prepared.spell-level-" + level);
    var spellToCopy = document.createElement("a");
    spellToCopy.setAttribute("href", "javascript:void(0)");
    spellToCopy.setAttribute("class", "spell-prepared-item button button-primary");
    spellToCopy.setAttribute("data-cast", "false");
    spellToCopy.setAttribute("data-event-listener", "false");
    spellToCopy.innerHTML = name;
    if (deleteState == "true") {
      spell.remove();
    };
    if (deleteState == "false") {
      preparedListToSaveTo.appendChild(spellToCopy);
    };
    store_knownList();
    addListenerTo_all_spellPreparedItem();
    update_removeSpellButton();
  };

  // change spell class to cast and then remove
  function update_spellState(spell) {
    var icon = spell.querySelector(".icon-bookmark-outline");
    var isSpellCast = spell.dataset.cast;
    if (isSpellCast == "true") {
      spell.remove();
      store_preparedList();
    };
    if (isSpellCast == "false") {
      spell.dataset.cast = "true";
      toggleClass(spell, "spell-cast");
      toggleClass(icon, "icon-bookmark-outline");
      toggleClass(icon, "icon-close");
      store_preparedList();
    };
  };

  // store spell preparedList
  function store_preparedList() {
    var all_spellsPrepared = eA(".spells-prepared");
    for (var i = 0; i < all_spellsPrepared.length; i++) {
      var level = i;
      var saveName = "spell-prepared-level-" + level;
      var preparedListToSave = e(".spells-prepared.spell-level-" + level);
      localStoreAdd(saveName, preparedListToSave.innerHTML);
    };
  };

  // read spell preparedList
  function read_preparedList() {
    var all_spellsPrepared = eA(".spells-prepared");
    for (var i = 0; i < all_spellsPrepared.length; i++) {
      var level = i;
      var readName = "spell-prepared-level-" + level;
      var preparedListToRead = localStoreRead(readName);
      var preparedListToSaveTo = e(".spells-prepared.spell-level-" + level);
      if (localStoreRead(readName)) {
        preparedListToSaveTo.innerHTML = preparedListToRead;
      };
    };
  };

  // add new spell to known spells
  function addNewSpell(element) {
    var level = getClosest(element, ".spell-level").dataset.spellLevel;
    var newSpellRoot = getClosest(element, ".new-spell");
    var knownListToSaveTo = getClosest(element, ".spell-level").querySelector(".spells-known");
    var newSpellName = newSpellRoot.querySelector("input");
    var newSpellName_value = newSpellName.value;
    var newSpell = document.createElement("a");
    newSpell.setAttribute("href", "javascript:void(0)");
    newSpell.setAttribute("data-event-listener", "false");
    newSpell.setAttribute("class", "spell-known-item button button-secondary");
    newSpell.innerHTML = newSpellName_value;
    var icon = document.createElement("span");
    icon.setAttribute("class", "icon-bookmark-outline");
    // if input value is not empty
    if (newSpellName_value !== "") {
      knownListToSaveTo.appendChild(newSpell);
      newSpell.insertBefore(icon, newSpell.firstChild);
      // clear input field
      newSpellName.value = "";
    };
    addListenerTo_all_spellKnownItem();
    update_removeSpellButton();
  };

  // store spell preparedList
  function store_knownList() {
    var all_spellsKnown = eA(".spells-known");
    for (var i = 0; i < all_spellsKnown.length; i++) {
      var level = i;
      var saveName = "spell-known-level-" + level;
      var knownListToSave = all_spellsKnown[i];
      localStoreAdd(saveName, knownListToSave.innerHTML);
    };
  };

  // read spell preparedList
  function read_knownList() {
    var all_spellsKnown = eA(".spells-known");
    for (var i = 0; i < all_spellsKnown.length; i++) {
      var level = i;
      var readName = "spell-known-level-" + level;
      var knownListToRead = localStoreRead(readName);
      var knownListToSaveTo = all_spellsKnown[i];
      if (localStoreRead(readName)) {
        knownListToSaveTo.innerHTML = knownListToRead;
      };
    };
  };

  // add class to active prepared lists
  function update_preparedListStatus() {
    var all_spellsPrepared = eA(".spells-prepared");
    for (var i = 0; i < all_spellsPrepared.length; i++) {
      var level = i;
      var readName = "spell-prepared-level-" + level;
      var preparedListToCheck = e(".spells-prepared.spell-level-" + level);
      var rowToHide = e(".spells-prepared" + ".spell-level-" + level).parentNode.parentNode;
      if (preparedListToCheck.children.length > 0) {
        removeClass(rowToHide, "hidden");
      } else {
        addClass(rowToHide, "hidden");
      };
    };
  };


  // --------------------------------------------------------------------------
  // textarea
  // --------------------------------------------------------------------------

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

  // add listeners to textareas
  function addListenerTo_all_textareass() {
    for (var i = 0; i < all_textareas.length; i++) {
      all_textareas[i].addEventListener("input", function() {
        store_textareas(this);
      }, false);
    };
  };

  // --------------------------------------------------------------------------
  // ac
  // --------------------------------------------------------------------------

  // // store ac
  // function store_ac() {
  //   localStoreAdd("ac_armor", ac.children[5].children[0].value);
  //   localStoreAdd("ac_shield", ac.children[7].children[0].value);
  //   localStoreAdd("ac_deflection", ac.children[9].children[0].value);
  //   localStoreAdd("ac_misc", ac.children[11].children[0].value);
  //   localStoreAdd("acTouch_deflection", acTouch.children[5].children[0].value);
  //   localStoreAdd("acTouch_misc", acTouch.children[7].children[0].value);
  //   localStoreAdd("acFlatFooted_armor", acFlatFooted.children[3].children[0].value);
  //   localStoreAdd("acFlatFooted_shield", acFlatFooted.children[5].children[0].value);
  //   localStoreAdd("acFlatFooted_deflection", acFlatFooted.children[7].children[0].value);
  //   localStoreAdd("acFlatFooted_misc", acFlatFooted.children[9].children[0].value);
  // };

  // // read ac
  // function read_ac() {
  //   if (localStoreRead("ac_armor")) {
  //     ac.children[5].children[0].value = localStoreRead("ac_armor");
  //   };
  //   if (localStoreRead("ac_shield")) {
  //     ac.children[7].children[0].value = localStoreRead("ac_shield");
  //   };
  //   if (localStoreRead("ac_deflection")) {
  //     ac.children[9].children[0].value = localStoreRead("ac_deflection");
  //   };
  //   if (localStoreRead("ac_misc")) {
  //     ac.children[11].children[0].value = localStoreRead("ac_misc");
  //   };
  //   if (localStoreRead("acTouch_deflection")) {
  //     acTouch.children[5].children[0].value = localStoreRead("acTouch_deflection");
  //   };
  //   if (localStoreRead("acTouch_misc")) {
  //     acTouch.children[7].children[0].value = localStoreRead("acTouch_misc");
  //   };
  //   if (localStoreRead("acFlatFooted_armor")) {
  //     acFlatFooted.children[3].children[0].value = localStoreRead("acFlatFooted_armor");
  //   };
  //   if (localStoreRead("acFlatFooted_shield")) {
  //     acFlatFooted.children[5].children[0].value = localStoreRead("acFlatFooted_shield");
  //   };
  //   if (localStoreRead("acFlatFooted_deflection")) {
  //     acFlatFooted.children[7].children[0].value = localStoreRead("acFlatFooted_deflection");
  //   };
  //   if (localStoreRead("acFlatFooted_misc")) {
  //     acFlatFooted.children[9].children[0].value = localStoreRead("acFlatFooted_misc");
  //   };
  // };

  // // upage ac totals and mods
  // function update_ac() {
  //   //  loop through ac for dex
  //   for (var i = 0; i < ac.children.length; i++) {
  //     if (ac.children[i].classList.contains("dex")) {
  //       ac.children[i].innerHTML = parseInt(stats_dexMod.innerHTML, 10) + " Dex";
  //     };
  //   };
  //   //  loop through acTouch for dex
  //   for (var i = 0; i < acTouch.children.length; i++) {
  //     if (acTouch.children[i].classList.contains("dex")) {
  //       acTouch.children[i].innerHTML = parseInt(stats_dexMod.innerHTML, 10) + " Dex";
  //     };
  //   };
  //   function acTotal(acType) {
  //     var base = 10;
  //     var dex = acType.querySelector(".dex");
  //     var armor = acType.querySelector(".armor input")
  //     var shield = acType.querySelector(".shield input")
  //     var deflection = acType.querySelector(".deflection input")
  //     var misc = acType.querySelector(".misc input")
  //     var acCombined = base;

  //     if (dex != null) {
  //       acCombined = acCombined + parseInt(dex.innerHTML, 10);
  //     };

  //     if (armor != null) {
  //       if (armor.value != "") {
  //         acCombined = acCombined + parseInt(armor.value, 10);
  //       };
  //     };

  //     if (shield != null) {
  //       if (shield.value != "") {
  //         acCombined = acCombined + parseInt(shield.value, 10);
  //       };
  //     };

  //     if (deflection != null) {
  //       if (deflection.value != "") {
  //         acCombined = acCombined + parseInt(deflection.value, 10);
  //       };
  //     };

  //     if (misc != null) {
  //       if (misc.value != "") {
  //         acCombined = acCombined + parseInt(misc.value, 10);
  //       };
  //     };

  //     acType.querySelector(".total").innerHTML = acCombined;

  //     // console.log(dex);
  //     // console.log(armor);
  //     // console.log(shield);
  //     // console.log(deflection);
  //     // console.log(misc);
  //     // console.log("acCombined = " + acCombined);
  //   };
  //   acTotal(ac);
  //   acTotal(acTouch);
  //   acTotal(acFlatFooted);
  // };

  // // add listeners to stats
  // function addListenerTo_acInputs() {
  //   function addListener(acType) {
  //     var armor = acType.querySelector(".armor input");
  //     var shield = acType.querySelector(".shield input");
  //     var deflection = acType.querySelector(".deflection input");
  //     var misc = acType.querySelector(".misc input");
  //     if (armor != null) {
  //       armor.addEventListener("input", function() {
  //         update_ac();
  //         store_ac();
  //       }, false);
  //     };
  //     if (shield != null) {
  //       shield.addEventListener("input", function() {
  //         update_ac();
  //         store_ac();
  //       }, false);
  //     };
  //     if (deflection != null) {
  //       deflection.addEventListener("input", function() {
  //         update_ac();
  //         store_ac();
  //       }, false);
  //     };
  //     if (misc != null) {
  //       misc.addEventListener("input", function() {
  //         update_ac();
  //         store_ac();
  //       }, false);
  //     };
  //   };
  //   addListener(ac);
  //   addListener(acTouch);
  //   addListener(acFlatFooted);
  // };

  // --------------------------------------------------------------------------
  // skills
  // --------------------------------------------------------------------------

  // store skills
  function store_skills() {
    var skill_values = [];
    for (var i = 0; i < all_skill_inputs.length; i++) {
      skill_values.push(all_skill_inputs[i].value);
    };
    localStoreAdd("input-skill-list", skill_values);
  };

  // store skills
  function read_skills() {
    // read stored vaules
    var read_skill_values = localStoreRead("input-skill-list");
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

  // update skill total
  function update_skillTotal() {
    for (var i = 0; i < all_skillList_skillDetails.length; i++) {
      var skillAbility = all_skillList_skillDetails[i].querySelector(".name.skill-value").dataset.ability;
      var skillMod;
      if (skillAbility == "str") {
        // if ability temp mod is empty
        if (stats_strTempMod.innerHTML == "") {
          skillMod = parseInt(stats_strMod.innerHTML, 10);
        } else {
          skillMod = parseInt(stats_strTempMod.innerHTML, 10);
        };
      } else if (skillAbility == "dex") {
        // if ability temp mod is empty
        if (stats_dexTempMod.innerHTML == "") {
          skillMod = parseInt(stats_dexMod.innerHTML, 10);
        } else {
          skillMod = parseInt(stats_dexTempMod.innerHTML, 10);
        };
      } else if (skillAbility == "con") {
        // if ability temp mod is empty
        if (stats_conTempMod.innerHTML == "") {
          skillMod = parseInt(stats_conMod.innerHTML, 10);
        } else {
          skillMod = parseInt(stats_conTempMod.innerHTML, 10);
        };
      } else if (skillAbility == "int") {
        // if ability temp mod is empty
        if (stats_intTempMod.innerHTML == "") {
          skillMod = parseInt(stats_intMod.innerHTML, 10);
        } else {
          skillMod = parseInt(stats_intTempMod.innerHTML, 10);
        };
      } else if (skillAbility == "wis") {
        // if ability temp mod is empty
        if (stats_wisTempMod.innerHTML == "") {
          skillMod = parseInt(stats_wisMod.innerHTML, 10);
        } else {
          skillMod = parseInt(stats_wisTempMod.innerHTML, 10);
        };
      } else if (skillAbility == "cha") {
        // if ability temp mod is empty
        if (stats_chaTempMod.innerHTML == "") {
          skillMod = parseInt(stats_chaMod.innerHTML, 10);
        } else {
          skillMod = parseInt(stats_chaTempMod.innerHTML, 10);
        };
      };
      // check if skillMod is NaN
      if (isNaN(skillMod)) {
        skillMod = 0;
      };
      var skillRanks = checkValue(all_skillList_skillDetails[i].querySelector(".ranks.skill-value"));
      var skillMisc = checkValue(all_skillList_skillDetails[i].querySelector(".misc.skill-value"));
      var skillTotal = skillMod + skillRanks + skillMisc;
      all_skillList_skillDetails[i].querySelector(".total.skill-value").innerHTML = skillTotal;
    };
  };

  // add listeners to skills
  function addListenerTo_skillInputs() {
    var skillRanks = eA(".ranks.skill-value");
    var skillMisc = eA(".misc.skill-value");
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

  // --------------------------------------------------------------------------
  // fullscreen
  // --------------------------------------------------------------------------

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

  // --------------------------------------------------------------------------
  // input blocks
  // --------------------------------------------------------------------------

  // move label down when input has a value
  function inputBlock_focus(element) {
    var inputBlockRoot = element.parentNode;
    var inputField = inputBlockRoot.querySelector(".input-field");
    var inputLabel;
    if (inputBlockRoot.querySelector(".input-label")) {
      var inputLabel = inputBlockRoot.querySelector(".input-label");
    };
    if (inputBlockRoot.querySelector(".input-label")) {
      if (inputField == document.activeElement) {
        addClass(inputLabel, "input-label-focus");
      } else {
        removeClass(inputLabel, "input-label-focus");
      };
    };
    // if (inputBlockRoot.querySelector(".input-label")) {
    //   if (inputField.value !== "") {
    //     addClass(inputLabel, "input-label-focus");
    //   } else if (inputField !== document.activeElement) {
    //     removeClass(inputLabel, "input-label-focus");
    //   } else {
    //     addClass(inputLabel, "input-label-focus");
    //   };
    // };
  };

  // update input totals
  function update_inputTotalBlock() {
    for (var i = 0; i < all_inputTotalBlock.length; i++) {
      var strBonus = 0;
      var dexBonus = 0;
      var conBonus = 0;
      var intBonus = 0;
      var wisBonus = 0;
      var chaBonus = 0;
      var babBonus = 0;
      var sizeBonus = 0;
      var specialSizeBonus = 0;
      var levelBonus = 0;
      var plusTenBonus = 0;
      var acArmor = 0;
      var acShield = 0;
      var acDeflect = 0;
      var acDodge = 0;
      var acNatural = 0;
      var total = all_inputTotalBlock[i].querySelector(".total");
      var total_value = parseInt(all_inputTotalBlock[i].querySelector(".total").innerHTML, 10) || 0;
      var all_inputField = all_inputTotalBlock[i].querySelectorAll(".input-field");
      var modifiers = [];
      var modifiers_total = 0;
      for (var q = 0; q < all_inputField.length; q++) {
        if (all_inputField.length > 0) {
          if (all_inputField[q].dataset.modifier == "true") {
            modifiers.push(parseInt(all_inputField[q].value, 10) || 0);
          };
        };
      };
      // if modifiers array has values total them 
      function totalAllModifiers() {
        if (modifiers.length > 0) {
          modifiers_total = modifiers.reduce(function(a, b) {
            return a + b;
          });
        };
      };
      totalAllModifiers();
      // str
      if (all_inputTotalBlock[i].dataset.strBonus == "true") {
        // if ability temp mod is empty
        if (stats_strTempMod.innerHTML == "") {
          strBonus = parseInt(stats_strMod.innerHTML, 10 || 0);
        } else {
          strBonus = parseInt(stats_strTempMod.innerHTML, 10 || 0);
        };
      };
      // dex
      if (all_inputTotalBlock[i].dataset.dexBonus == "true") {
        // if ability temp mod is empty
        if (stats_dexTempMod.innerHTML == "") {
          dexBonus = parseInt(stats_dexMod.innerHTML, 10 || 0);
        } else {
          dexBonus = parseInt(stats_dexTempMod.innerHTML, 10 || 0);
        };
      };
      // con
      if (all_inputTotalBlock[i].dataset.conBonus == "true") {
        // if ability temp mod is empty
        if (stats_conTempMod.innerHTML == "") {
          conBonus = parseInt(stats_conMod.innerHTML, 10 || 0);
        } else {
          conBonus = parseInt(stats_conTempMod.innerHTML, 10 || 0);
        };
      };
      // int
      if (all_inputTotalBlock[i].dataset.intBonus == "true") {
        // if ability temp mod is empty
        if (stats_intTempMod.innerHTML == "") {
          intBonus = parseInt(stats_intMod.innerHTML, 10 || 0);
        } else {
          intBonus = parseInt(stats_intTempMod.innerHTML, 10 || 0);
        };
      };
      // wis
      if (all_inputTotalBlock[i].dataset.wisBonus == "true") {
        // if ability temp mod is empty
        if (stats_wisTempMod.innerHTML == "") {
          wisBonus = parseInt(stats_wisMod.innerHTML, 10 || 0);
        } else {
          wisBonus = parseInt(stats_wisTempMod.innerHTML, 10 || 0);
        };
      };
      // cha
      if (all_inputTotalBlock[i].dataset.chaBonus == "true") {
        // if ability temp mod is empty
        if (stats_chaTempMod.innerHTML == "") {
          chaBonus = parseInt(stats_chaMod.innerHTML, 10 || 0);
        } else {
          chaBonus = parseInt(stats_chaTempMod.innerHTML, 10 || 0);
        };
      };
      // bab
      if (all_inputTotalBlock[i].dataset.babBonus == "true") {
        babBonus = parseInt(e("#input-base-attack").value, 10 || 0);
      };
      // size
      if (all_inputTotalBlock[i].dataset.sizeBonus == "true") {
        sizeBonus = parseInt(e("#input-size-bonus").value, 10 || 0);
      };
      // special size
      if (all_inputTotalBlock[i].dataset.specialSizeBonus == "true") {
        specialSizeBonus = parseInt(e("#input-special-size-bonus").value, 10 || 0);
      };
      // level
      if (all_inputTotalBlock[i].dataset.levelBonus == "true") {
        levelBonus = parseInt(e("#input-level").value, 10 || 0);
      };
      // ac armor
      if (all_inputTotalBlock[i].dataset.acArmor == "true") {
        acArmor = parseInt(e("#input-ac-armor").value, 10 || 0);
      };
      // ac shield
      if (all_inputTotalBlock[i].dataset.acShield == "true") {
        acShield = parseInt(e("#input-ac-shield").value, 10 || 0);
      };
      // ac deflect
      if (all_inputTotalBlock[i].dataset.acDeflect == "true") {
        acDeflect = parseInt(e("#input-ac-deflect").value, 10 || 0);
      };
      // ac dodge
      if (all_inputTotalBlock[i].dataset.acDodge == "true") {
        acDodge = parseInt(e("#input-ac-dodge").value, 10 || 0);
      };
      // ac natural
      if (all_inputTotalBlock[i].dataset.acNatural == "true") {
        acNatural = parseInt(e("#input-ac-natural").value, 10 || 0);
      };
      // 10
      if (all_inputTotalBlock[i].dataset.plusTenBonus == "true") {
        plusTenBonus = 10;
      };
      // check if any bonus is NaN
      if (isNaN(levelBonus)) {
        levelBonus = 0;
      };
      if (isNaN(strBonus)) {
        strBonus = 0;
      };
      if (isNaN(dexBonus)) {
        dexBonus = 0;
      };
      if (isNaN(conBonus)) {
        conBonus = 0;
      };
      if (isNaN(intBonus)) {
        intBonus = 0;
      };
      if (isNaN(wisBonus)) {
        wisBonus = 0;
      };
      if (isNaN(chaBonus)) {
        chaBonus = 0;
      };
      if (isNaN(babBonus)) {
        babBonus = 0;
      };
      if (isNaN(sizeBonus)) {
        sizeBonus = 0;
      };
      if (isNaN(specialSizeBonus)) {
        specialSizeBonus = 0;
      };
      if (isNaN(levelBonus)) {
        levelBonus = 0;
      };
      if (isNaN(plusTenBonus)) {
        plusTenBonus = 0;
      };
      if (isNaN(acArmor)) {
        acArmor = 0;
      };
      if (isNaN(acShield)) {
        acShield = 0;
      };
      if (isNaN(acDeflect)) {
        acDeflect = 0;
      };
      if (isNaN(acDodge)) {
        acDodge = 0;
      };
      if (isNaN(acNatural)) {
        acNatural = 0;
      };
      // grand total
      var grandTotal = modifiers_total + levelBonus + babBonus + sizeBonus + specialSizeBonus + plusTenBonus + strBonus + dexBonus + conBonus + intBonus + wisBonus + chaBonus + acArmor + acShield + acDeflect + acDodge + acNatural;
      total.innerHTML = grandTotal;
    };
  };

  // check and move label down when input has a value
  function update_inputBlock_focus() {
    for (var i = 0; i < all_inputBlock.length; i++) {
      var inputBlockRoot = all_inputBlock[i];
      var inputField = inputBlockRoot.querySelector(".input-field");
      if (inputBlockRoot.querySelector(".input-label")) {
        var inputLabel = inputBlockRoot.querySelector(".input-label");
      };
      if (inputBlockRoot.querySelector(".input-label")) {
        if (inputField == document.activeElement) {
          addClass(inputLabel, "input-label-focus");
        } else {
          removeClass(inputLabel, "input-label-focus");
        };
      };
    };
  };

  // add listeners to inputBlock
  function addListenerTo_all_inputBlock() {
    for (var i = 0; i < all_inputBlock.length; i++) {
      var inputLabel = all_inputBlock[i].querySelector(".input-field");
      inputLabel.addEventListener("input", function() {
        inputBlock_focus(this);
        store_inputBlock(this);
        update_inputTotalBlock();
      }, false);
      inputLabel.addEventListener("focus", function() {
        inputBlock_focus(this);
        store_inputBlock(this);
        update_inputTotalBlock();
      }, false);
      inputLabel.addEventListener("blur", function() {
        inputBlock_focus(this);
        store_inputBlock(this);
        update_inputTotalBlock();
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

  // --------------------------------------------------------------------------
  // utilities
  // --------------------------------------------------------------------------

  clearLocalStorage.addEventListener("click", function() {
    localStorage.clear();
  }, false);

  toggleFullscreen.addEventListener("click", function() {
    toggleFullScreen();
  }, false);

  // --------------------------------------------------------------------------
  // run on page load
  // --------------------------------------------------------------------------


  read_preparedList();
  read_knownList();
  read_textarea();
  read_inputBlock();
  read_skills();
  read_stats();
  // read_ac();
  update_preparedListStatus();
  update_removeSpellButton();
  changeData_all_spellKnownItem();
  changeData_all_spellPreparedItem();
  addListenerTo_all_spellPreparedItem();
  addListenerTo_all_spellKnownItem();
  addListenerTo_stats();
  addListenerTo_skillInputs();
  addListenerTo_all_addSpell();
  addListenerTo_all_addSpell_input();
  addListenerTo_all_removeSpell();
  // addListenerTo_acInputs();
  addListenerTo_all_textareass();
  addListenerTo_all_inputBlock();
  update_scoreModifiers();
  update_skillTotal();
  // update_ac();
  update_inputBlock_focus();
  update_inputTotalBlock();

};

awesomesheet();
smoothScroll.init();
