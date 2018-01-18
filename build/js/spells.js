var spells = (function() {

  function bind() {
    var spellPrepareButton = helper.e(".js-spell-prepare");
    var spellUnprepareButton = helper.e(".js-spell-unprepare");
    var spellCastButton = helper.e(".js-spell-cast");
    var spellActiveButton = helper.e(".js-spell-active");
    var spellRemoveButton = helper.e(".js-spell-remove");
    var spellReset = helper.e(".js-spell-reset");
    var spellSort = helper.e(".js-spell-sort");
    var all_newSpellAdd = helper.eA(".js-new-spell-add");
    for (var i = 0; i < all_newSpellAdd.length; i++) {
      var spellBook = helper.getClosest(all_newSpellAdd[i], ".js-spell-book");
      var newSpellField = spellBook.querySelector(".js-new-spell-field");
      all_newSpellAdd[i].addEventListener("click", function() {
        _addNewSpell(helper.getClosest(this, ".js-spell-book").querySelector(".js-new-spell-field"));
        sheet.store();
      }, false);
      newSpellField.addEventListener("keypress", function() {
        _addNewSpellOnEnter(this);
        sheet.store();
      }, false);
    };
    spellPrepareButton.addEventListener("click", function() {
      _change_spellState(this);
    }, false);
    spellUnprepareButton.addEventListener("click", function() {
      _change_spellState(this);
    }, false);
    spellCastButton.addEventListener("click", function() {
      _change_spellState(this);
    }, false);
    spellActiveButton.addEventListener("click", function() {
      _change_spellState(this);
    }, false);
    spellRemoveButton.addEventListener("click", function() {
      _change_spellState(this);
    }, false);
    spellReset.addEventListener("click", function() {
      prompt.render({
        heading: "Reset all spells?",
        message: "All Prepared, Cast and Active spells will be set to normal states.",
        actionText: "Reset",
        action: _resetAllSpells
      });
      page.update();
    }, false);
    spellSort.addEventListener("click", function() {
      prompt.render({
        heading: "Sort Spells",
        message: "Sort all Spells in alphabetical order?",
        actionText: "Sort",
        action: _sortAllSpells
      });
      page.update();
    }, false);
  };

  function _resetAllSpells() {
    var all_spells = helper.eA(".js-spell");
    if (all_spells.length > 0) {
      for (var i in sheet.get().spells.book) {
        for (var j in sheet.get().spells.book[i]) {
          for (var k in sheet.get().spells.book[i][j]) {
            sheet.get().spells.book[i][j][k].prepared = 0;
            sheet.get().spells.book[i][j][k].cast = 0;
            sheet.get().spells.book[i][j][k].active = false;
            // console.log(sheet.get().spells.book[i][j][k]);
          };
        };
      };
      clear();
      render();
      sheet.store();
      snack.render({
        message: "All spells reset."
      });
    };
  };

  function _sortAllSpells() {
    for (var i in sheet.get().spells.book) {
      for (var j in sheet.get().spells.book[i]) {
        helper.sortObject(sheet.get().spells.book[i][j], "name");
      };
    };
    sheet.store();
    clear();
    render();
    snack.render({
      message: "All spells alphabetically sorted."
    });
  };

  function _addNewSpell(element) {
    var spellLevel = helper.getClosest(element, ".js-spell-book").dataset.spellLevel;
    var spellName = element.value;
    var newSpell = new _create_spellObject(spellName, 0, false, 0);
    // if input value is not empty
    if (spellName !== "") {
      // add spell to current character known spells
      sheet.get().spells.book[spellLevel]["level_" + spellLevel].push(newSpell);
      var newSpellIndex = sheet.get().spells.book[spellLevel]["level_" + spellLevel].length - 1;
      _render_spell(sheet.get().spells.book[spellLevel]["level_" + spellLevel][newSpellIndex], spellLevel, newSpellIndex);
      // clear input field
      element.value = "";
    };
  };

  function _addNewSpellOnEnter(element) {
    var keystroke = event.keyCode || event.which;
    if (keystroke == 13) {
      _addNewSpell(element);
    };
  };

  function _bind_spellKnownItem(element) {
    element.addEventListener("click", function() {
      _update_spellObject(this);
      _update_spellButton(this);
      _update_spellControls(this);
      _checkSpellState();
      _castFireball(this);
    }, false);
  };

  function _castFireball(button) {
    var spellLevel = parseInt(button.dataset.spellLevel, 10);
    var spellCount = parseInt(button.dataset.spellCount, 10);
    var spellRoot = helper.getClosest(button, ".js-spells") || helper.e(".js-spells");
    var spellState = spellRoot.dataset.spellState;
    var spellObject = sheet.get().spells.book[spellLevel]["level_" + spellLevel][spellCount];

    if (spellState == "cast") {
      var fireballName = ["Fireball", "fireball", "Fire ball", "fire Ball", "fire ball", "Fire Ball", "FIREBALL", "FIREBALL!", "FIREBALL!!", "FIREBALL!!!", "FIREBALL!!!!"];
      if (fireballName.indexOf(spellObject.name) > -1) {
        // easter egg fireball!
        fireball.render();
      };
    };

  };

  function _update_spellControls(button, force) {

    var spellLevel = parseInt(button.dataset.spellLevel, 10);
    var spellCount = parseInt(button.dataset.spellCount, 10);
    var spellRoot = helper.getClosest(button, ".js-spells") || helper.e(".js-spells");
    var spellState = spellRoot.dataset.spellState;
    var spellObject = sheet.get().spells.book[spellLevel]["level_" + spellLevel][spellCount];

    function _render_count(spellControl) {
      var currentPreparedCount = parseInt(spellControl.dataset.spellPrepared, 10);
      var currentCastCount = parseInt(spellControl.dataset.spellCast, 10);
      var spellControlPreparedCount = spellControl.querySelector(".js-spell-control-prepared-count");
      var spellControlCastCount = spellControl.querySelector(".js-spell-control-cast-count");
      spellControlPreparedCount.textContent = currentPreparedCount;
      spellControlCastCount.textContent = currentCastCount;
    };

    function _store_data(spellControl, action, type) {
      var newCount;
      var currentActive = spellControl.dataset.spellActive;
      var currentPreparedCount = parseInt(spellControl.dataset.spellPrepared, 10);
      var currentCastCount = parseInt(spellControl.dataset.spellCast, 10);
      if (type == "prepared") {
        if (action == "plus" && currentPreparedCount < 50) {
          spellControl.dataset.spellPrepared = currentPreparedCount + 1;
        } else if (action == "minus" && currentPreparedCount > 0) {
          spellControl.dataset.spellPrepared = currentPreparedCount - 1;
        } else if (action == "clear" && currentPreparedCount > 0) {
          spellControl.dataset.spellPrepared = 0;
        };
        if (parseInt(spellControl.dataset.spellCast, 10) > parseInt(spellControl.dataset.spellPrepared, 10)) {
          spellControl.dataset.spellCast = parseInt(spellControl.dataset.spellPrepared, 10);
        };
      };
      if (type == "cast") {
        if (action == "plus" && currentCastCount < 50) {
          spellControl.dataset.spellCast = currentCastCount + 1;
        } else if (action == "minus" && currentCastCount > 0) {
          spellControl.dataset.spellCast = currentCastCount - 1;
        } else if (action == "clear" && currentCastCount > 0) {
          spellControl.dataset.spellCast = 0;
        };
        if (parseInt(spellControl.dataset.spellPrepared, 10) < parseInt(spellControl.dataset.spellCast, 10)) {
          spellControl.dataset.spellPrepared = parseInt(spellControl.dataset.spellCast, 10);
        };
      };
      if (type == "active" && action == "toggle") {
        if (currentActive == "true") {
          spellControl.dataset.spellActive = false;
        } else {
          spellControl.dataset.spellActive = true;
        };
      };
    };

    function _update_spellObject(spellControl) {
      var spellLevel = parseInt(spellControl.dataset.spellLevel, 10);
      var spellCount = parseInt(spellControl.dataset.spellCount, 10);
      var spellObject = sheet.get().spells.book[spellLevel]["level_" + spellLevel][spellCount];
      if (spellControl.dataset.spellActive == "true") {
        spellObject.active = true;
      } else {
        spellObject.active = false;
      };
      spellObject.prepared = parseInt(spellControl.dataset.spellPrepared, 10);
      spellObject.cast = parseInt(spellControl.dataset.spellCast, 10);
      spellObject.name = spellControl.querySelector(".js-spell-control-input-name").value;
      spellObject.note = spellControl.querySelector(".js-spell-control-textarea-note").innerHTML;
      if (spellObject.note == " " || spellObject.note == "&nbsp;" || spellObject.note == "<br/>" || spellObject.note == "<br>") {
        spellObject.note = "";
      };
    };

    function _create_editBoxItem(size, child) {
      var editBoxItem = document.createElement("div");
      editBoxItem.setAttribute("class", "m-edit-box-item-" + size);
      if (child) {
        editBoxItem.appendChild(child);
      };
      return editBoxItem;
    };

    function _create_spellControlModal() {
      var spellControl = document.createElement("div");
      spellControl.setAttribute("class", "m-spell-control js-spell-control");
      spellControl.setAttribute("data-spell-level", spellLevel);
      spellControl.setAttribute("data-spell-count", spellCount);
      spellControl.setAttribute("data-spell-name", spellObject.name);
      spellControl.setAttribute("data-spell-active", spellObject.active);
      spellControl.setAttribute("data-spell-prepared", spellObject.prepared);
      spellControl.setAttribute("data-spell-cast", spellObject.cast);

      var nameEditBox = document.createElement("div");
      nameEditBox.setAttribute("class", "m-edit-box m-edit-box-indent m-edit-box-head-small");
      var nameEditBoxHead = document.createElement("div");
      nameEditBoxHead.setAttribute("class", "m-edit-box-head");
      var nameEditBoxHeadTitle = document.createElement("h2");
      nameEditBoxHeadTitle.setAttribute("class", "m-edit-box-title");
      nameEditBoxHeadTitle.textContent = "Name";
      var nameEditBoxBody = document.createElement("div");
      nameEditBoxBody.setAttribute("class", "m-edit-box-body");
      var nameEditBoxContent = document.createElement("div");
      nameEditBoxContent.setAttribute("class", "m-edit-box-content m-edit-box-content-margin-large m-edit-box-content-nowrap");
      var nameEditBoxBodyInput = document.createElement("input");
      nameEditBoxBodyInput.setAttribute("class", "js-spell-control-input-name");
      nameEditBoxBodyInput.setAttribute("type", "text");
      nameEditBoxBodyInput.setAttribute("tabindex", "1");
      nameEditBoxBodyInput.value = spellObject.name;

      nameEditBoxContent.appendChild(_create_editBoxItem("max", nameEditBoxBodyInput));
      nameEditBoxBody.appendChild(nameEditBoxContent);
      nameEditBoxHead.appendChild(nameEditBoxHeadTitle);
      nameEditBox.appendChild(nameEditBoxHead);
      nameEditBox.appendChild(nameEditBoxBody);

      var preparedEditBox = document.createElement("div");
      preparedEditBox.setAttribute("class", "m-edit-box m-edit-box-indent m-edit-box-head-small");
      var preparedEditBoxHead = document.createElement("div");
      preparedEditBoxHead.setAttribute("class", "m-edit-box-head");
      var preparedEditBoxHeadTitle = document.createElement("h2");
      preparedEditBoxHeadTitle.setAttribute("class", "m-edit-box-title");
      preparedEditBoxHeadTitle.textContent = "Prepared";
      var preparedEditBoxBody = document.createElement("div");
      preparedEditBoxBody.setAttribute("class", "m-edit-box-body");
      var preparedEditBoxContent = document.createElement("div");
      preparedEditBoxContent.setAttribute("class", "m-edit-box-content m-edit-box-content-margin-large m-edit-box-content-nowrap");
      var preparedEditBoxGroup = document.createElement("div");
      preparedEditBoxGroup.setAttribute("class", "m-edit-box-item m-edit-box-group-control-set");
      var preparedCount = document.createElement("p");
      preparedCount.setAttribute("class", "m-edit-box-total js-spell-control-prepared-count");
      preparedCount.textContent = spellObject.prepared;
      var preparedPlus = document.createElement("button");
      preparedPlus.setAttribute("class", "u-inline-with-input button button-large button-thin button-icon");
      preparedPlus.setAttribute("tabindex", "1");
      var preparedPlusIcon = document.createElement("span");
      preparedPlusIcon.setAttribute("class", "icon-add");
      preparedPlus.addEventListener("click", function() {
        _store_data(spellControl, "plus", "prepared");
        _render_count(spellControl);
      }, false);
      var preparedMinus = document.createElement("button");
      preparedMinus.setAttribute("class", "u-inline-with-input button button-large button-thin button-icon");
      preparedMinus.setAttribute("tabindex", "1");
      var preparedMinusIcon = document.createElement("span");
      preparedMinusIcon.setAttribute("class", "icon-remove");
      preparedMinus.addEventListener("click", function() {
        _store_data(spellControl, "minus", "prepared");
        _render_count(spellControl);
      }, false);
      var preparedClear = document.createElement("button");
      preparedClear.setAttribute("class", "u-inline-with-input button button-large button-thin button-icon");
      preparedClear.setAttribute("tabindex", "1");
      var preparedClearIcon = document.createElement("span");
      preparedClearIcon.setAttribute("class", "icon-close");
      preparedClear.addEventListener("click", function() {
        _store_data(spellControl, "clear", "prepared");
        _render_count(spellControl);
      }, false);

      preparedMinus.appendChild(preparedMinusIcon);
      preparedPlus.appendChild(preparedPlusIcon);
      preparedClear.appendChild(preparedClearIcon);

      preparedEditBoxGroup.appendChild(_create_editBoxItem("button-large", preparedMinus));
      preparedEditBoxGroup.appendChild(_create_editBoxItem("max", preparedCount));
      preparedEditBoxGroup.appendChild(_create_editBoxItem("button-large", preparedPlus));
      preparedEditBoxContent.appendChild(preparedEditBoxGroup);
      preparedEditBoxContent.appendChild(_create_editBoxItem("button-large", preparedClear));
      preparedEditBoxBody.appendChild(preparedEditBoxContent);
      preparedEditBoxHead.appendChild(preparedEditBoxHeadTitle);
      preparedEditBox.appendChild(preparedEditBoxHead);
      preparedEditBox.appendChild(preparedEditBoxBody);

      var castEditBox = document.createElement("div");
      castEditBox.setAttribute("class", "m-edit-box m-edit-box-indent m-edit-box-head-small");
      var castEditBoxHead = document.createElement("div");
      castEditBoxHead.setAttribute("class", "m-edit-box-head");
      var castEditBoxHeadTitle = document.createElement("h2");
      castEditBoxHeadTitle.setAttribute("class", "m-edit-box-title");
      castEditBoxHeadTitle.textContent = "Cast";
      var castEditBoxBody = document.createElement("div");
      castEditBoxBody.setAttribute("class", "m-edit-box-body");
      var castEditBoxContent = document.createElement("div");
      castEditBoxContent.setAttribute("class", "m-edit-box-content m-edit-box-content-margin-large m-edit-box-content-nowrap");
      var castEditBoxGroup = document.createElement("div");
      castEditBoxGroup.setAttribute("class", "m-edit-box-item m-edit-box-group-control-set");
      var castCount = document.createElement("p");
      castCount.setAttribute("class", "m-edit-box-total js-spell-control-cast-count");
      castCount.textContent = spellObject.cast;
      var castPlus = document.createElement("button");
      castPlus.setAttribute("class", "u-inline-with-input button button-large button-thin button-icon");
      castPlus.setAttribute("tabindex", "1");
      var castPlusIcon = document.createElement("span");
      castPlusIcon.setAttribute("class", "icon-add");
      castPlus.addEventListener("click", function() {
        _store_data(spellControl, "plus", "cast");
        _render_count(spellControl);
      }, false);
      var castMinus = document.createElement("button");
      castMinus.setAttribute("class", "u-inline-with-input button button-large button-thin button-icon");
      castMinus.setAttribute("tabindex", "1");
      var castMinusIcon = document.createElement("span");
      castMinusIcon.setAttribute("class", "icon-remove");
      castMinus.addEventListener("click", function() {
        _store_data(spellControl, "minus", "cast");
        _render_count(spellControl);
      }, false);
      var castClear = document.createElement("button");
      castClear.setAttribute("class", "u-inline-with-input button button-large button-thin button-icon");
      castClear.setAttribute("tabindex", "1");
      var castClearIcon = document.createElement("span");
      castClearIcon.setAttribute("class", "icon-close");
      castClear.addEventListener("click", function() {
        _store_data(spellControl, "clear", "cast");
        _render_count(spellControl);
      }, false);

      castMinus.appendChild(castMinusIcon);
      castPlus.appendChild(castPlusIcon);
      castClear.appendChild(castClearIcon);

      castEditBoxGroup.appendChild(_create_editBoxItem("button-large", castMinus));
      castEditBoxGroup.appendChild(_create_editBoxItem("max", castCount));
      castEditBoxGroup.appendChild(_create_editBoxItem("button-large", castPlus));
      castEditBoxContent.appendChild(castEditBoxGroup);
      castEditBoxContent.appendChild(_create_editBoxItem("button-large", castClear));
      castEditBoxBody.appendChild(castEditBoxContent);
      castEditBoxHead.appendChild(castEditBoxHeadTitle);
      castEditBox.appendChild(castEditBoxHead);
      castEditBox.appendChild(castEditBoxBody);

      var activeEditBox = document.createElement("div");
      activeEditBox.setAttribute("class", "m-edit-box m-edit-box-indent m-edit-box-head-small");
      var activeEditBoxHead = document.createElement("div");
      activeEditBoxHead.setAttribute("class", "m-edit-box-head");
      var activeEditBoxHeadTitle = document.createElement("h2");
      activeEditBoxHeadTitle.setAttribute("class", "m-edit-box-title");
      activeEditBoxHeadTitle.textContent = "Active";
      var activeEditBoxBody = document.createElement("div");
      activeEditBoxBody.setAttribute("class", "m-edit-box-body");
      var activeEditBoxContent = document.createElement("div");
      activeEditBoxContent.setAttribute("class", "m-edit-box-content m-edit-box-content-margin-large m-edit-box-content-nowrap");
      var activeCheck = document.createElement("div");
      activeCheck.setAttribute("class", "m-check-block");
      var activeInput = document.createElement("input");
      activeInput.setAttribute("type", "checkbox");
      activeInput.setAttribute("id", "spell-active");
      activeInput.setAttribute("class", "m-check-block-check js-spell-control-active");
      activeInput.setAttribute("tabindex", "1");
      activeInput.checked = spellObject.active;
      activeInput.addEventListener("change", function() {
        _store_data(spellControl, "toggle", "active");
        _render_count(spellControl);
      }, false);
      var activeIcon = document.createElement("span");
      activeIcon.setAttribute("class", "m-check-block-check-icon");

      activeCheck.appendChild(activeInput);
      activeCheck.appendChild(activeIcon);
      activeEditBoxContent.appendChild(_create_editBoxItem("check", activeCheck));
      activeEditBoxBody.appendChild(activeEditBoxContent);
      activeEditBoxHead.appendChild(activeEditBoxHeadTitle);
      activeEditBox.appendChild(activeEditBoxHead);
      activeEditBox.appendChild(activeEditBoxBody);

      var noteEditBox = document.createElement("div");
      noteEditBox.setAttribute("class", "m-edit-box m-edit-box-indent m-edit-box-head-small");
      var noteEditBoxHead = document.createElement("div");
      noteEditBoxHead.setAttribute("class", "m-edit-box-head");
      var noteEditBoxHeadTitle = document.createElement("h2");
      noteEditBoxHeadTitle.setAttribute("class", "m-edit-box-title");
      noteEditBoxHeadTitle.textContent = "Spell Notes";
      var noteEditBoxBody = document.createElement("div");
      noteEditBoxBody.setAttribute("class", "m-edit-box-body");
      var noteEditBoxContent = document.createElement("div");
      noteEditBoxContent.setAttribute("class", "m-edit-box-content m-edit-box-content-margin-large m-edit-box-content-nowrap");
      var noteTextarea = document.createElement("div");
      noteTextarea.setAttribute("class", "m-textarea-block-field textarea textarea-large u-full-width js-spell-control-textarea-note");
      noteTextarea.setAttribute("contenteditable", "true");
      noteTextarea.setAttribute("tabindex", "1");
      noteTextarea.innerHTML = spellObject.note;
      noteTextarea.addEventListener("paste", function(event) {
        helper.pasteStrip(event);
      });

      noteEditBoxContent.appendChild(_create_editBoxItem("max", noteTextarea));
      noteEditBoxBody.appendChild(noteEditBoxContent);
      noteEditBoxHead.appendChild(noteEditBoxHeadTitle);
      noteEditBox.appendChild(noteEditBoxHead);
      noteEditBox.appendChild(noteEditBoxBody);

      spellControl.appendChild(nameEditBox);
      spellControl.appendChild(preparedEditBox);
      spellControl.appendChild(castEditBox);
      spellControl.appendChild(activeEditBox);
      spellControl.appendChild(noteEditBox);

      return spellControl;
    };

    if (spellState == "false" || force) {
      var modalContent = _create_spellControlModal();

      modal.render({
        heading: spellObject.name,
        content: modalContent,
        action: function() {
          var spellSection = helper.e(".js-section-spells");
          _update_spellObject(this);
          _update_spellButton(button, true);
          sheet.store();
          display.clear(spellSection);
          display.render(spellSection);
        }.bind(modalContent),
        actionText: "Save",
        size: "medium"
      });
      page.update();
    };

  };

  function _update_spellButton(button, force) {
    var spellLevel = parseInt(button.dataset.spellLevel, 10);
    var spellCount = parseInt(button.dataset.spellCount, 10);
    var spellRoot = helper.getClosest(button, ".js-spells") || helper.e(".js-spells");
    var spellName = button.querySelector(".js-spell-name");
    var spellMarks = button.querySelector(".js-spell-marks");
    var spellActive = button.querySelector(".js-spell-active");
    var spellState = spellRoot.dataset.spellState;
    var spellObject = sheet.get().spells.book[spellLevel]["level_" + spellLevel][spellCount];
    if (spellState == "prepare" || spellState == "unprepare" || spellState == "cast" || spellState == "active" || force) {
      if (spellMarks.lastChild) {
        while (spellMarks.lastChild) {
          spellMarks.removeChild(spellMarks.lastChild);
        };
      };
      if (spellActive.lastChild) {
        while (spellActive.lastChild) {
          spellActive.removeChild(spellActive.lastChild);
        };
      };
      if (spellObject.prepared > 0) {
        for (var i = 0; i < spellObject.prepared; i++) {
          var preparedIcon = document.createElement("span");
          preparedIcon.setAttribute("class", "icon-radio-button-checked js-spell-mark-checked");
          spellMarks.insertBefore(preparedIcon, spellMarks.firstChild);
        };
      };
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
      };
      if (spellObject.active) {
        var activeIcon = document.createElement("span");
        activeIcon.setAttribute("class", "icon-play-arrow");
        if (spellObject.active) {
          spellActive.appendChild(activeIcon);
        };
      };
      spellName.textContent = spellObject.name;
    } else if (spellState == "remove") {
      _destroy_spellBook(spellLevel);
      _render_all_spells(sheet.get().spells.book[spellLevel]["level_" + spellLevel], spellLevel);
    };
  };

  function _update_spellObject(button) {
    var spellRoot = helper.getClosest(button, ".js-spells");
    var spellState = spellRoot.dataset.spellState;
    var spellLevel = parseInt(button.dataset.spellLevel, 10);
    var spellCount = parseInt(button.dataset.spellCount, 10);
    if (spellState == "prepare") {
      if (sheet.get().spells.book[spellLevel]["level_" + spellLevel][spellCount].prepared < 50) {
        sheet.get().spells.book[spellLevel]["level_" + spellLevel][spellCount].prepared++;
      };
      // console.log(sheet.get().spells.book[spellLevel]["level_" + spellLevel][spellCount]);
    } else if (spellState == "unprepare") {
      if (sheet.get().spells.book[spellLevel]["level_" + spellLevel][spellCount].prepared > 0) {
        sheet.get().spells.book[spellLevel]["level_" + spellLevel][spellCount].prepared--;
      };
      if (sheet.get().spells.book[spellLevel]["level_" + spellLevel][spellCount].prepared < sheet.get().spells.book[spellLevel]["level_" + spellLevel][spellCount].cast) {
        sheet.get().spells.book[spellLevel]["level_" + spellLevel][spellCount].cast = sheet.get().spells.book[spellLevel]["level_" + spellLevel][spellCount].prepared;
      };
      // console.log(sheet.get().spells.book[spellLevel]["level_" + spellLevel][spellCount]);
    } else if (spellState == "cast") {
      if (sheet.get().spells.book[spellLevel]["level_" + spellLevel][spellCount].cast < 50) {
        sheet.get().spells.book[spellLevel]["level_" + spellLevel][spellCount].cast++;
      };
      if (sheet.get().spells.book[spellLevel]["level_" + spellLevel][spellCount].cast > sheet.get().spells.book[spellLevel]["level_" + spellLevel][spellCount].prepared) {
        sheet.get().spells.book[spellLevel]["level_" + spellLevel][spellCount].prepared = sheet.get().spells.book[spellLevel]["level_" + spellLevel][spellCount].cast;
      };
      // console.log(sheet.get().spells.book[spellLevel]["level_" + spellLevel][spellCount]);
    } else if (spellState == "active") {
      if (sheet.get().spells.book[spellLevel]["level_" + spellLevel][spellCount].active) {
        sheet.get().spells.book[spellLevel]["level_" + spellLevel][spellCount].active = false;
      } else {
        sheet.get().spells.book[spellLevel]["level_" + spellLevel][spellCount].active = true;
      };
      // console.log(sheet.get().spells.book[spellLevel]["level_" + spellLevel][spellCount]);
    } else if (spellState == "remove") {
      // console.log(sheet.get().spells.book[spellLevel]["level_" + spellLevel][spellCount]);
      var spellName = sheet.get().spells.book[spellLevel]["level_" + spellLevel][spellCount].name;
      _store_lastRemovedSpell(spellLevel, spellCount, sheet.get().spells.book[spellLevel]["level_" + spellLevel][spellCount]);
      sheet.get().spells.book[spellLevel]["level_" + spellLevel].splice(spellCount, 1);
      snack.render({
        message: helper.truncate(spellName, 40, true) + " removed.",
        button: "Undo",
        action: _restore_lastRemovedSpell,
        destroyDelay: 8000
      });
    };
    // console.log(sheet.get().spells.book[spellLevel]["level_" + spellLevel][spellCount]);
    sheet.store();
  };

  function _store_lastRemovedSpell(spellLevel, spellCount, spell) {
    var object = {
      spellLevel: spellLevel,
      spellCount: spellCount,
      spell: spell
    };
    helper.store("lastRemovedSpell", JSON.stringify(object));
  };

  function _remove_lastRemovedSpell() {
    helper.remove("lastRemovedSpell");
  };

  function _restore_lastRemovedSpell() {
    var undoData = JSON.parse(helper.read("lastRemovedSpell"));
    _restore_spellObject(undoData.spellLevel, undoData.spellCount, undoData.spell);
    _remove_lastRemovedSpell();
    _checkSpellState();
  };

  function _restore_spellObject(spellLevel, spellCount, spell) {
    sheet.get().spells.book[spellLevel]["level_" + spellLevel].splice(spellCount, 0, spell);
    _destroy_spellBook(spellLevel);
    _render_all_spells(sheet.get().spells.book[spellLevel]["level_" + spellLevel], spellLevel);
    sheet.store();
  };

  function _change_spellState(button) {
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

    var _normalStateSpellItems = function() {
      for (var i = 0; i < all_spellBookItem.length; i++) {
        helper.removeClass(all_spellBookItem[i], "button-primary");
        helper.removeClass(all_spellBookItem[i], "button-secondary");
      };
    };

    var _activeStateSpellItems = function() {
      for (var i = 0; i < all_spellBookItem.length; i++) {
        helper.addClass(all_spellBookItem[i], "button-secondary");
      };
    };

    var _remove_stateSpellItems = function() {
      for (var i = 0; i < all_spellBookItem.length; i++) {
        helper.addClass(all_spellBookItem[i], "button-primary");
      };
    };

    var _reset_allControls = function() {
      for (var i = 0; i < all_spellStateControls.length; i++) {
        helper.removeClass(all_spellStateControls[i], "is-live");
      };
    };

    // change spell state
    if (spellsFound) {
      if (button.dataset.state != spellRoot.dataset.spellState) {
        spellRoot.dataset.spellState = button.dataset.state;
        _reset_allControls();
        if (button.dataset.state == "prepare" || button.dataset.state == "unprepare" || button.dataset.state == "cast" || button.dataset.state == "active") {
          helper.addClass(button, "is-live");
        };
      } else {
        spellRoot.dataset.spellState = false;
        _reset_allControls();
      };
    };

    // change spells to reflect state
    if (spellRoot.dataset.spellState == "remove") {
      _normalStateSpellItems();
      _remove_stateSpellItems();
      helper.addClass(spellRoot, "is-state-remove");
      helper.addClass(spellRemoveButton, "button-primary");
      helper.removeClass(spellRemoveButton, "button-secondary");
    } else if (spellRoot.dataset.spellState != "false") {
      _activeStateSpellItems();
      helper.removeClass(spellRoot, "is-state-remove");
      helper.removeClass(spellRemoveButton, "button-primary");
      helper.addClass(spellRemoveButton, "button-secondary");
    } else {
      _normalStateSpellItems();
      helper.removeClass(spellRoot, "is-state-remove");
      helper.removeClass(spellRemoveButton, "button-primary");
      helper.addClass(spellRemoveButton, "button-secondary");
    };
  };

  function _checkSpellState() {
    var spellRoot = helper.e(".js-spells");
    var all_spellStateControls = spellRoot.querySelectorAll(".js-spell-state-control");
    var all_spellBookItem = helper.eA(".js-spell");
    var spellRemoveButton = helper.e(".js-spell-remove");
    if (all_spellBookItem.length == 0) {
      helper.removeClass(spellRoot, "is-state-remove");
      for (var i = 0; i < all_spellStateControls.length; i++) {
        helper.removeClass(all_spellStateControls[i], "is-live");
        helper.removeClass(spellRemoveButton, "button-primary");
        helper.addClass(spellRemoveButton, "button-secondary");
      };
      spellRoot.dataset.spellState = "false";
    };
  };

  function _create_spellObject(spellName, spellPrepared, spellActive, spellCast, spellNote) {
    return {
      name: this.name = spellName || "",
      prepared: this.prepared = spellPrepared || 0,
      active: this.active = spellActive || false,
      cast: this.cast = spellCast || 0,
      note: this.note = spellNote || ""
    };
  };

  function delayUpdate() {
    var spellRoot = helper.e(".js-spells");
    var spellState = spellRoot.dataset.spellState;
    if (spellState == "prepare" || spellState == "unprepare" || spellState == "cast" || spellState == "active" || spellState == "remove") {
      sheet.store();
    };
    if (display.state()) {
      display.clear();
      display.render();
    };
  };

  function render() {
    // build an array of spell objects
    var spellsToRender;
    // iterate over all objects keys to find spells then push those values to spellsToRender
    if (sheet.get().spells.book) {
      for (var i in sheet.get().spells.book) {
        for (var j in sheet.get().spells.book[i]) {
          spellsToRender = sheet.get().spells.book[i][j];
          _render_all_spells(spellsToRender, i);
        };
      };
    };
  };

  function _render_all_spells(array, level) {
    // console.log(array, level);
    // read spells and add them to spell lists
    for (var i = 0; i < array.length; i++) {
      var spellObject = array[i];
      var spellButtonCol = document.createElement("div");
      spellButtonCol.setAttribute("class", "m-spell-col js-spell-col");
      // find spell list to add too
      var knownListToSaveTo = helper.e(".js-spell-book-known-level-" + level);
      // append new spell to spell list
      var spellButton = _create_spellButton(spellObject, level, i);
      spellButtonCol.appendChild(spellButton);
      knownListToSaveTo.appendChild(spellButtonCol);
      _bind_spellKnownItem(spellButton);
    };
  };

  function _render_spell(spellObject, level, spellIndex) {
    // read spell and add them to spell lists
    var spellButtonCol = document.createElement("div");
    spellButtonCol.setAttribute("class", "m-spell-col js-spell-col");
    // find spell list to add too
    var knownListToSaveTo = helper.e(".js-spell-book-known-level-" + level);
    // append new spell to spell list
    var spellButton = _create_spellButton(spellObject, level, spellIndex, true);
    spellButtonCol.appendChild(spellButton);
    knownListToSaveTo.appendChild(spellButtonCol);
    _bind_spellKnownItem(spellButton);
  };

  function _create_spellButton(spellObject, level, index, newSpell) {
    var spellRoot = helper.e(".js-spells");
    var spellButton = document.createElement("button");
    spellButton.setAttribute("data-spell-level", level);
    spellButton.setAttribute("data-spell-count", index);
    spellButton.setAttribute("class", "m-spell button button-medium js-spell");
    spellButton.setAttribute("type", "button");
    spellButton.setAttribute("tabindex", "1");
    if (spellRoot.dataset.spellState == "remove") {
      helper.addClass(spellButton, "button-primary");
    };
    var spellActive = document.createElement("span");
    spellActive.setAttribute("class", "m-spell-active js-spell-active");
    spellButton.appendChild(spellActive);
    var spellNameSpan = document.createElement("span");
    spellNameSpan.setAttribute("class", "m-spell-name js-spell-name");
    spellNameSpan.textContent = spellObject.name;
    spellButton.appendChild(spellNameSpan);
    var spellMarks = document.createElement("span");
    spellMarks.setAttribute("class", "m-spell-marks js-spell-marks");
    spellButton.appendChild(spellMarks);
    if (spellObject.prepared > 0) {
      for (var i = 0; i < spellObject.prepared; i++) {
        var preparedIcon = document.createElement("span");
        preparedIcon.setAttribute("class", "icon-radio-button-checked js-spell-mark-checked");
        spellMarks.insertBefore(preparedIcon, spellMarks.firstChild);
      };
    };
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
    };
    if (spellObject.active) {
      var activeIcon = document.createElement("span");
      activeIcon.setAttribute("class", "icon-play-arrow");
      if (spellActive.children.length > 0) {
        spellActive.firstChild.remove();
      } else {
        spellActive.appendChild(activeIcon);
      };
    };
    var spellRemove = document.createElement("span");
    spellRemove.setAttribute("class", "m-spell-remove js-spell-remove");
    spellButton.appendChild(spellRemove);
    var spellRemoveIcon = document.createElement("span");
    spellRemoveIcon.setAttribute("class", "icon-close");
    spellRemove.appendChild(spellRemoveIcon);
    if (newSpell) {
      var newSpellFlash = document.createElement("span");
      newSpellFlash.setAttribute("class", "m-spell-flash");
      newSpellFlash.addEventListener("animationend", function(event, elapsed) {
        this.remove();
      }.bind(newSpellFlash), false);
      spellButton.appendChild(newSpellFlash);
    };
    return spellButton;
  };

  function _destroy_spellBook(level) {
    var spellBook = helper.e(".js-spell-book-known-level-" + level);
    while (spellBook.lastChild) {
      spellBook.removeChild(spellBook.lastChild);
    };
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
    render: render,
    update: _update_spellControls
  };

})();
