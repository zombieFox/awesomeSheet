var spells = (function() {

  var _bind_spellControls = (function() {
    var all_addSpell = helper.eA(".add-spell");
    for (var i = 0; i < all_addSpell.length; i++) {
      all_addSpell[i].addEventListener("click", function() {
        _addNewSpell(helper.getClosest(this, ".new-spell").querySelector(".spell-name"));
        _updateSpells(true);
        sheet.storeCharacters();
      }, false);
    };
    for (var i = 0; i < all_addSpell.length; i++) {
      var newSpellRoot = helper.getClosest(all_addSpell[i], ".new-spell");
      var all_addSpell_input = newSpellRoot.querySelector("input");
      all_addSpell_input.addEventListener("keypress", function() {
        _addNewSpellOnEnter(this);
      }, false);
    };
    helper.e("#spells .prepare-spell").addEventListener("click", function() {
      _changeSpellState(this);
    }, false);
    helper.e("#spells .unprepare-spell").addEventListener("click", function() {
      _changeSpellState(this);
    }, false);
    helper.e("#spells .cast-spell").addEventListener("click", function() {
      _changeSpellState(this);
    }, false);
    helper.e("#spells .active-spell").addEventListener("click", function() {
      _changeSpellState(this);
    }, false);
    helper.e("#spells .remove-spell").addEventListener("click", function() {
      _changeSpellState(this);
    }, false);
  })();

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
      _changeSpellKnowItem(this);
      sheet.storeCharacters();
      _checkSpellState();
    }, false);
  };

  function _changeSpellKnowItem(spell) {
    var spellRoot = helper.getClosest(spell, "#spells");
    var spellLevel = helper.getClosest(spell, ".spell-level").dataset.spellLevel;
    var spellMarks = spell.querySelector(".spell-marks");
    var spellActive = spell.querySelector(".spell-active");
    var spellState = spellRoot.dataset.spellState;
    // state prepare
    if (spellState == "prepare") {
      var preparedIcon = document.createElement("span");
      preparedIcon.setAttribute("class", "icon icon-radio-button-checked");
      if (spellMarks.children.length <= 15) {
        // spellMarks.insertBefore(preparedIcon, spellMarks.firstChild);
        spellMarks.appendChild(preparedIcon);
      };
      if (spellMarks.children.length > 0) {
        helper.addClass(spell, "button-primary");
        helper.removeClass(spell, "button-tertiary");
        helper.removeClass(spell, "hidable");
      };
    };
    // state unprepare
    if (spellState == "unprepare") {
      if (spellMarks.lastChild) {
        spellMarks.lastChild.remove();
      };
      if (spellMarks.children.length <= 0) {
        helper.removeClass(spell, "button-primary");
        helper.addClass(spell, "button-tertiary");
        helper.addClass(spell, "hidable");
      };
    };
    // state cast
    if (spellState == "cast") {
      var all_spellsMarks = spellMarks.children;
      var all_spellsCast = 0;
      for (var i = 0; i < all_spellsMarks.length; i++) {
        if (all_spellsMarks[i].classList.contains("icon-radio-button-checked")) {
          helper.toggleClass(all_spellsMarks[i], "icon-radio-button-checked");
          helper.toggleClass(all_spellsMarks[i], "icon-radio-button-unchecked");
          break
        };
      };
      // if no checked icons can be found change the var allSpellCast to true
      for (var i = 0; i < all_spellsMarks.length; i++) {
        if (all_spellsMarks[i].classList.contains("icon-radio-button-checked")) {
          all_spellsCast++;
        };
      };
      // allSpellCast to true change spell button class
      if (all_spellsCast <= 0) {
        helper.removeClass(spell, "button-primary");
        helper.addClass(spell, "button-tertiary");
      };
    };
    // state active
    if (spellState == "active") {
      var activeIcon = document.createElement("span");
      activeIcon.setAttribute("class", "icon icon-play-arrow");
      if (spellMarks.children.length > 0) {
        if (spellActive.children.length > 0) {
          spellActive.firstChild.remove();
        } else {
          spellActive.appendChild(activeIcon);
        };
      };
      if (spellMarks.children.length <= 0) {
        if (spellActive.children.length > 0) {
          spellActive.firstChild.remove();
        };
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
    var spellRoot = helper.getClosest(element, "#spells");
    var prepareStateButton = spellRoot.querySelector(".prepare-spell");
    var unprepareStateButton = spellRoot.querySelector(".unprepare-spell");
    var castStateButton = spellRoot.querySelector(".cast-spell");
    var activeStateButton = spellRoot.querySelector(".active-spell");
    var removeStateButton = spellRoot.querySelector(".remove-spell");
    var all_spellStateControls = spellRoot.querySelectorAll(".spell-state-control");
    var all_spellKnownItem = spellRoot.querySelectorAll(".spell-known-item");
    // if this button is active
    if (spellRoot.dataset.spellState != element.dataset.state) {
      spellRoot.dataset.spellState = element.dataset.state;
      for (var i = 0; i < all_spellStateControls.length; i++) {
        helper.removeClass(all_spellStateControls[i], "active");
        helper.removeClass(all_spellStateControls[i], "button-primary");
        helper.addClass(all_spellStateControls[i], "button-tertiary");
      };
      helper.addClass(element, "active");
      if (element == removeStateButton) {
        helper.addClass(element, "button-primary");
        helper.removeClass(element, "button-tertiary");
      };
    } else {
      spellRoot.dataset.spellState = "false";
      helper.removeClass(element, "active");
      if (element == removeStateButton) {
        helper.removeClass(element, "button-primary");
        helper.addClass(element, "button-tertiary");
      };
    };
  };

  function _addNewSpell(element) {
    var level = helper.getClosest(element, ".spell-level").dataset.spellLevel;
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

  function _checkSpellState() {
    var spellRoot = helper.e("#spells");
    var prepareStateButton = spellRoot.querySelector(".prepare-spell");
    var unprepareStateButton = spellRoot.querySelector(".unprepare-spell");
    var castStateButton = spellRoot.querySelector(".cast-spell");
    var activeStateButton = spellRoot.querySelector(".active-spell");
    var removeStateButton = spellRoot.querySelector(".remove-spell");
    var all_spellStateControls = spellRoot.querySelectorAll(".spell-state-control");
    var all_spellKnownItem = helper.eA(".spell-known-item");
    if (all_spellKnownItem.length == 0) {
      for (var i = 0; i < all_spellStateControls.length; i++) {
        helper.removeClass(all_spellStateControls[i], "active");
      };
      spellRoot.dataset.spellState = "false";
      helper.removeClass(removeStateButton, "button-primary");
      helper.addClass(removeStateButton, "button-tertiary");
    };
  };

  function _createSpellButton(spellName) {
    var spellButton = document.createElement("button");
    spellButton.setAttribute("data-spell-name", spellName.replace(/\s+/g, "-").toLowerCase());
    spellButton.setAttribute("id", spellName.replace(/\s+/g, "-").toLowerCase());
    spellButton.setAttribute("class", "spell-known-item button button-tertiary hidable");
    var spellActive = document.createElement("span");
    spellActive.setAttribute("class", "spell-active");
    spellButton.appendChild(spellActive);
    var spellNameSpan = document.createElement("span");
    spellNameSpan.setAttribute("class", "spell-name");
    spellNameSpan.textContent = spellName;
    spellButton.appendChild(spellNameSpan);
    var spellMarks = document.createElement("span");
    spellMarks.setAttribute("class", "spell-marks");
    spellButton.appendChild(spellMarks);
    var spellRemove = document.createElement("span");
    spellRemove.setAttribute("class", "spell-remove");
    spellButton.appendChild(spellRemove);
    var spellRemoveIcon = document.createElement("span");
    spellRemoveIcon.setAttribute("class", "icon-close");
    spellRemove.appendChild(spellRemoveIcon);
    return spellButton;
  };

  function _createSpellObject(spellName, spellPrepared, spellActive, spellCast) {
    return {
      name: this.name = spellName,
      prepared: this.prepared = spellPrepared || 0,
      active: this.active = spellActive || false,
      cast: this.cast = spellCast || 0
    };
  };

  function _updateSpells(force) {
    var spellRoot = helper.e("#spells");
    var spellState = spellRoot.dataset.spellState;
    var all_spellLevels = spellRoot.querySelectorAll(".spell-level");
    if (spellState == "prepare" || spellState == "unprepare" || spellState == "cast" || spellState == "active" || spellState == "remove" || force) {
      // loop over all spell level blocks
      for (var i = 0; i < all_spellLevels.length; i++) {
        var all_spellsToUpdate = [];
        // find all spell items in this level block
        var all_spellKnownItems = all_spellLevels[i].querySelectorAll(".spell-known-item");
        // loop ovre all spell items found
        for (var j = 0; j < all_spellKnownItems.length; j++) {
          var name = all_spellKnownItems[j].textContent;
          var prepared = all_spellKnownItems[j].querySelector(".spell-marks").children.length;
          var cast = all_spellKnownItems[j].querySelector(".spell-marks").querySelectorAll(".icon-radio-button-unchecked").length;
          var active = all_spellKnownItems[j].querySelector(".spell-active").children.length;
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
        };
        _render_spell(spellsToRender, i);
      };
    };
  };

  function _render_spell(array, level) {
    // read spells and add them to spell lists
    for (var i = 0; i < array.length; i++) {
      var spellObject = array[i];
      // find spell list to add too
      var knownListToSaveTo = helper.e(".spells-known.spell-level-" + level);
      // append new spell to spell list
      var spellButton = _createSpellButton(spellObject.name);
      knownListToSaveTo.appendChild(spellButton);
      // find spell mark parent
      var spellMarks = spellButton.querySelector(".spell-marks");
      var spellActive = spellButton.querySelector(".spell-active");
      // add spell marks
      if (spellObject.prepared > 0) {
        helper.removeClass(spellButton, "hidable");
        helper.removeClass(spellButton, "button-tertiary");
        helper.addClass(spellButton, "button-primary");
        for (var j = 0; j < spellObject.prepared; j++) {
          var preparedIcon = document.createElement("span");
          preparedIcon.setAttribute("class", "icon icon-radio-button-checked");
          spellMarks.insertBefore(preparedIcon, spellMarks.firstChild);
        };
      };
      // cast spells if cast > 0
      if (spellObject.cast > 0) {
        var all_check = spellMarks.querySelectorAll(".icon-radio-button-checked");
        for (var j = 0; j < spellObject.cast; j++) {
          if (all_check[j]) {
            helper.removeClass(all_check[j], "icon-radio-button-checked");
            helper.addClass(all_check[j], "icon-radio-button-unchecked");
          };
        };
        if (spellObject.cast >= spellObject.prepared) {
          helper.removeClass(spellButton, "button-primary");
          helper.addClass(spellButton, "button-tertiary");
        };
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

  // exposed methods
  return {
    render: render
  };

})();
