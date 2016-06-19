var spells = (function() {

  function bind() {
    var spellPrepareButton = helper.e(".js-spell-prepare");
    var spellUnprepareButton = helper.e(".js-spell-unprepare");
    var spellCastButton = helper.e(".js-spell-cast");
    var spellActiveButton = helper.e(".js-spell-active");
    var spellRemoveButton = helper.e(".js-spell-remove");
    var spellResetButton = helper.e(".js-spell-reset");
    var all_newSpellAdd = helper.eA(".js-new-spell-add");
    for (var i = 0; i < all_newSpellAdd.length; i++) {
      all_newSpellAdd[i].addEventListener("click", function() {
        _addNewSpell(helper.getClosest(this, ".js-new-spell").querySelector(".js-new-spell-field"));
        _updateSpells(true);
        sheet.storeCharacters();
      }, false);
    };
    for (var i = 0; i < all_newSpellAdd.length; i++) {
      var newSpell = helper.getClosest(all_newSpellAdd[i], ".js-new-spell");
      var newSpellField = newSpell.querySelector(".js-new-spell-field");
      newSpellField.addEventListener("keypress", function() {
        _addNewSpellOnEnter(this);
      }, false);
    };
    spellPrepareButton.addEventListener("click", function() {
      _changeSpellState(this);
    }, false);
    spellUnprepareButton.addEventListener("click", function() {
      _changeSpellState(this);
    }, false);
    spellCastButton.addEventListener("click", function() {
      _changeSpellState(this);
    }, false);
    spellActiveButton.addEventListener("click", function() {
      _changeSpellState(this);
    }, false);
    spellRemoveButton.addEventListener("click", function() {
      _changeSpellState(this);
    }, false);
    spellResetButton.addEventListener("click", function() {
      _resetAllSpells();
    }, false);
  };

  function _resetAllSpells() {
    var all_spellRoot = helper.eA(".js-spell");
    for (var i = 0; i < all_spellRoot.length; i++) {
      if (all_spellRoot[i].classList.contains("button-primary")) {
        helper.removeClass(all_spellRoot[i], "button-primary");
      };
      var spellActive = all_spellRoot[i].querySelector(".js-spell-active");
      var spellMarks = all_spellRoot[i].querySelector(".js-spell-marks");
      var removeAllChildren = function(parent) {
        while (parent.lastChild) {
          parent.removeChild(parent.lastChild);
        };
      };
      removeAllChildren(spellActive);
      removeAllChildren(spellMarks);
    };
    _updateSpells(true);
    sheet.storeCharacters();
  };

  function _addNewSpellOnEnter(element) {
    var keystroke = event.keyCode || event.which;
    if (keystroke == 13) {
      _addNewSpell(element);
      _updateSpells(true);
      sheet.storeCharacters();
    };
  };

  function _bind_spellKnownItem(element) {
    element.addEventListener("click", function() {
      clearTimeout(storeSpellTimer);
      storeSpellTimer = setTimeout(delayUpdate, 1000, this);
      _changeSpell(this);
      _checkSpellState();
    }, false);
  };

  function _changeSpell(spell) {
    var spellRoot = helper.getClosest(spell, ".js-spells");
    var spellLevel = helper.getClosest(spell, ".js-spell-book").dataset.spellLevel;
    var spellMarks = spell.querySelector(".js-spell-marks");
    var spellActive = spell.querySelector(".js-spell-active");
    var spellState = spellRoot.dataset.spellState;
    // state prepare
    if (spellState == "prepare") {
      var preparedIcon = document.createElement("span");
      preparedIcon.setAttribute("class", "icon icon-radio-button-checked js-spell-mark-checked");
      if (spellMarks.children.length <= 30) {
        // spellMarks.insertBefore(preparedIcon, spellMarks.firstChild);
        spellMarks.appendChild(preparedIcon);
      };
      if (spellMarks.children.length > 0) {
        helper.addClass(spell, "button-primary");
      };
    };
    // state unprepare
    if (spellState == "unprepare") {
      if (spellMarks.lastChild) {
        spellMarks.lastChild.remove();
      };
      if (spellMarks.children.length <= 0) {
        helper.removeClass(spell, "button-primary");
      };
    };
    // state cast
    if (spellState == "cast") {
      var all_spellsMarks = spellMarks.children;
      var all_remainingPreparedSpells = spellMarks.querySelectorAll(".js-spell-mark-checked").length;
      for (var i = 0; i < all_spellsMarks.length; i++) {
        if (all_spellsMarks[i].classList.contains("js-spell-mark-checked")) {
          helper.toggleClass(all_spellsMarks[i], "icon-radio-button-checked");
          helper.toggleClass(all_spellsMarks[i], "icon-radio-button-unchecked");
          helper.toggleClass(all_spellsMarks[i], "js-spell-mark-checked");
          helper.toggleClass(all_spellsMarks[i], "js-spell-mark-unchecked");
          break
        };
      };
      // if there are no spell marks add cast mark for spontaneous casters
      if (all_remainingPreparedSpells <= 0) {
        if (spellMarks.children.length <= 30) {
          var castIcon = document.createElement("span");
          castIcon.setAttribute("class", "icon icon-radio-button-unchecked js-spell-mark-unchecked");
          spellMarks.appendChild(castIcon);
        };
      };
      if (spellMarks.children.length > 0) {
        helper.addClass(spell, "button-primary");
      };
      // if no checked icons can be found change the var allSpellCast to true
      for (var i = 0; i < all_spellsMarks.length; i++) {
        if (all_spellsMarks[i].classList.contains("js-spell-mark-checked")) {
          all_remainingPreparedSpells--;
        };
      };
      // allSpellCast to true change spell button class
      // if (all_remainingPreparedSpells <= 0) {
      //   helper.removeClass(spell, "button-primary");
      // };
    };
    // state active
    if (spellState == "active") {
      var activeIcon = document.createElement("span");
      activeIcon.setAttribute("class", "icon icon-play-arrow");
      if (spellActive.children.length > 0) {
        spellActive.firstChild.remove();
      } else {
        spellActive.appendChild(activeIcon);
      };
    };
    // state remove
    if (spellState == "remove") {
      var spellName = spell.textContent;
      spell.remove();
      snack.render(helper.truncate(spellName, 40, true) + " removed.", false, false);
    };
    _updateSpells();
  };

  function _changeSpellState(element) {
    var all_spellLevels = helper.eA(".js-spell-book-known");
    var spellsFound = false;
    var spellRoot = helper.e(".js-spells");
    var spellPrepareButton = helper.e(".js-spell-prepare");
    var spellUnprepareButton = helper.e(".js-spell-unprepare");
    var spellCastButton = helper.e(".js-spell-cast");
    var spellActiveButton = helper.e(".js-spell-active");
    var spellRemoveButton = helper.e(".js-spell-remove");
    var all_spellStateControls = spellRoot.querySelectorAll(".js-spell-state-control");
    var all_spellBookItem = helper.eA(".js-spell");
    for (var i = 0; i < all_spellLevels.length; i++) {
      if (all_spellLevels[i].children.length > 0) {
        spellsFound = true;
      };
    };
    if (spellsFound) {
      // if this button is active
      if (spellRoot.dataset.spellState != element.dataset.state) {
        helper.removeClass(element, "is-active");
        helper.removeClass(spellRoot, "is-state-prepare");
        helper.removeClass(spellRoot, "is-state-unprepare");
        helper.removeClass(spellRoot, "is-state-cast");
        helper.removeClass(spellRoot, "is-state-active");
        helper.removeClass(spellRoot, "is-state-remove");
        helper.addClass(spellRoot, "is-state-" + element.dataset.state);
        spellRoot.dataset.spellState = element.dataset.state;
        for (var i = 0; i < all_spellStateControls.length; i++) {
          helper.removeClass(all_spellStateControls[i], "is-active");
        };
        helper.addClass(element, "is-active");
      } else {
        spellRoot.dataset.spellState = "false";
        helper.removeClass(element, "is-active");
        helper.removeClass(spellRoot, "is-state-prepare");
        helper.removeClass(spellRoot, "is-state-unprepare");
        helper.removeClass(spellRoot, "is-state-cast");
        helper.removeClass(spellRoot, "is-state-active");
        helper.removeClass(spellRoot, "is-state-remove");
      };
    } else {
      spellRoot.dataset.spellState = "false";
      helper.removeClass(element, "is-active");
      helper.removeClass(spellRoot, "is-state-prepare");
      helper.removeClass(spellRoot, "is-state-unprepare");
      helper.removeClass(spellRoot, "is-state-cast");
      helper.removeClass(spellRoot, "is-state-active");
      helper.removeClass(spellRoot, "is-state-remove");
    };
  };

  function _checkSpellState() {
    var spellRoot = helper.e(".js-spells");
    var spellPrepareButton = helper.e(".js-spell-prepare");
    var spellUnprepareButton = helper.e(".js-spell-unprepare");
    var spellCastButton = helper.e(".js-spell-cast");
    var spellActiveButton = helper.e(".js-spell-active");
    var spellRemoveButton = helper.e(".js-spell-remove");
    var all_spellStateControls = spellRoot.querySelectorAll(".js-spell-state-control");
    var all_spellBookItem = helper.eA(".js-spell");
    if (all_spellBookItem.length == 0) {
      for (var i = 0; i < all_spellStateControls.length; i++) {
        helper.removeClass(all_spellStateControls[i], "is-active");
      };
      spellRoot.dataset.spellState = "false";
    };
  };

  function _addNewSpell(element) {
    var level = helper.getClosest(element, ".js-spell-book").dataset.spellLevel;
    var spallName = element.value;
    var newSpell = new _createSpellObject(spallName, 0, false, 0);
    // if input value is not empty
    if (spallName !== "") {
      //  if first character is not a number
      if (isNaN(spallName.charAt(0))) {
        // add spell button to spell list
        // knownListToSaveTo.appendChild(newSpell);
        _render_spell([newSpell], level);
        // clear input field
        element.value = "";
        // add spell to current character object
        // sheet.getCharacter().spells.book.push(newSpell);
        // make a snack bar
        snack.render(helper.truncate(spallName, 40, true) + " added to spell level " + level + ".", false, false);
      } else {
        // error if the name starts with a number
        snack.render("Name can't start with a space or number.", false, false);
      };
    };
  };

  function _createSpellObject(spellName, spellPrepared, spellActive, spellCast) {
    return {
      name: this.name = spellName,
      prepared: this.prepared = spellPrepared || 0,
      active: this.active = spellActive || false,
      cast: this.cast = spellCast || 0
    };
  };

  var storeSpellTimer = null;

  function delayUpdate() {
    var spellRoot = helper.e(".js-spells");
    var spellState = spellRoot.dataset.spellState;
    if (spellState == "prepare" || spellState == "unprepare" || spellState == "cast" || spellState == "active" || spellState == "remove") {
      sheet.storeCharacters();
    };
    if (body.dataset.awesomeMode == "display") {
      display.clear();
      display.render();
    };
  };

  function _updateSpells(force) {
    var spellRoot = helper.e(".js-spells");
    var spellState = spellRoot.dataset.spellState;
    var all_spellLevels = spellRoot.querySelectorAll(".js-spell-book-known");
    if (spellState == "prepare" || spellState == "unprepare" || spellState == "cast" || spellState == "active" || spellState == "remove" || force) {
      // loop over all spell level blocks
      for (var i = 0; i < all_spellLevels.length; i++) {
        var all_spellsToUpdate = [];
        // find all spell items in this level block
        var all_spellKnownItems = all_spellLevels[i].querySelectorAll(".js-spell");
        // loop ovre all spell items found
        for (var j = 0; j < all_spellKnownItems.length; j++) {
          var name = all_spellKnownItems[j].textContent;
          var prepared = all_spellKnownItems[j].querySelector(".js-spell-marks").children.length;
          var cast = all_spellKnownItems[j].querySelector(".js-spell-marks").querySelectorAll(".js-spell-mark-unchecked").length;
          var active = all_spellKnownItems[j].querySelector(".js-spell-active").children.length;
          if (active > 0) {
            active = true;
          } else {
            active = false;
          };
          var newSpell = new _createSpellObject(name, prepared, active, cast);
          // add to current character object
          all_spellsToUpdate.push(newSpell);
        };
        sheet.getCharacter().spells.book[i]["level_" + i] = all_spellsToUpdate;
      };
    };
  };

  function render() {
    // build an array of spell objects
    var spellsToRender;
    // iterate over all objects keys to find spells then push those values to spellsToRender
    if (sheet.getCharacter().spells.book) {
      for (var i in sheet.getCharacter().spells.book) {
        for (var j in sheet.getCharacter().spells.book[i]) {
          spellsToRender = sheet.getCharacter().spells.book[i][j];
          _render_spell(spellsToRender, i);
        };
      };
    };
  };

  function _render_spell(array, level) {
    // read spells and add them to spell lists
    for (var i = 0; i < array.length; i++) {
      var spellObject = array[i];
      // find spell list to add too
      var knownListToSaveTo = helper.e(".js-spell-book-known-level-" + level);
      // append new spell to spell list
      var spellButton = _createSpellButton(spellObject.name);
      knownListToSaveTo.appendChild(spellButton);
      // find spell mark parent
      var spellMarks = spellButton.querySelector(".js-spell-marks");
      var spellActive = spellButton.querySelector(".js-spell-active");
      // add spell marks
      if (spellObject.prepared > 0) {
        helper.addClass(spellButton, "button-primary");
        for (var j = 0; j < spellObject.prepared; j++) {
          var preparedIcon = document.createElement("span");
          preparedIcon.setAttribute("class", "icon icon-radio-button-checked js-spell-mark-checked");
          spellMarks.insertBefore(preparedIcon, spellMarks.firstChild);
        };
      };
      // cast spells if cast > 0
      if (spellObject.cast > 0) {
        var all_check = spellMarks.querySelectorAll(".icon-radio-button-checked");
        for (var j = 0; j < spellObject.cast; j++) {
          if (all_check[j]) {
            helper.toggleClass(all_check[j], "icon-radio-button-checked");
            helper.toggleClass(all_check[j], "icon-radio-button-unchecked");
            helper.toggleClass(all_check[j], "js-spell-mark-checked");
            helper.toggleClass(all_check[j], "js-spell-mark-unchecked");
          };
        };
        // if (spellObject.cast >= spellObject.prepared) {
        //   helper.removeClass(spellButton, "button-primary");
        // };
      };
      // if spell is active
      if (spellObject.active) {
        var activeIcon = document.createElement("span");
        activeIcon.setAttribute("class", "icon icon-play-arrow");
        if (spellObject.prepared > 0) {
          if (spellActive.children.length > 0) {
            spellActive.firstChild.remove();
          } else {
            spellActive.appendChild(activeIcon);
          };
        };
      };
      _bind_spellKnownItem(spellButton);
    };
  };

  function _createSpellButton(spellName) {
    var spellButton = document.createElement("button");
    spellButton.setAttribute("data-spell-name", spellName.replace(/\s+/g, "-").toLowerCase());
    spellButton.setAttribute("id", spellName.replace(/\s+/g, "-").toLowerCase());
    spellButton.setAttribute("class", "m-spell button button-medium js-spell");
    var spellActive = document.createElement("span");
    spellActive.setAttribute("class", "m-spell-active js-spell-active");
    spellButton.appendChild(spellActive);
    var spellNameSpan = document.createElement("span");
    spellNameSpan.setAttribute("class", "m-spell-name js-spell-name");
    spellNameSpan.textContent = spellName;
    spellButton.appendChild(spellNameSpan);
    var spellMarks = document.createElement("span");
    spellMarks.setAttribute("class", "m-spell-marks js-spell-marks");
    spellButton.appendChild(spellMarks);
    var spellRemove = document.createElement("span");
    spellRemove.setAttribute("class", "m-spell-remove js-spell-remove");
    spellButton.appendChild(spellRemove);
    var spellRemoveIcon = document.createElement("span");
    spellRemoveIcon.setAttribute("class", "icon-close");
    spellRemove.appendChild(spellRemoveIcon);
    return spellButton;
  };

  function clear() {
    var all_spellBookKnown = helper.eA(".js-spell-book-known");
    for (var i = 0; i < all_spellBookKnown.length; i++) {
      while (all_spellBookKnown[i].lastChild) {
        all_spellBookKnown[i].removeChild(all_spellBookKnown[i].lastChild);
      };
    };
  };

  // exposed methods
  return {
    clear: clear,
    bind: bind,
    render: render
  };

})();
