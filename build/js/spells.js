var spells = (function() {

  var _spellState = (function() {
    var spellState = {
      level_0: null,
      level_1: null,
      level_2: null,
      level_3: null,
      level_4: null,
      level_5: null,
      level_6: null,
      level_7: null,
      level_8: null,
      level_9: null
    };
    var get = function(level) {
      return spellState["level_" + level];
    };
    var set = function(level, state) {
      if (spellState["level_" + level] == null || spellState["level_" + level] != state) {
        spellState["level_" + level] = state;
      } else {
        spellState["level_" + level] = null;
      };
    };
    // exposed methods
    return {
      set: set,
      get: get
    };
  })();

  var addSpellTimer = null;

  function _delayAddSpell(element, event) {
    _addNewSpellOnEnter(element, event);
    sheet.store();
  };

  function _destroy_spellBook(level) {
    var spellBlockKnown = helper.e(".js-spell-block-known-level-" + level);
    while (spellBlockKnown.lastChild) {
      spellBlockKnown.removeChild(spellBlockKnown.lastChild);
    };
  };

  function _store_lastRemovedSpell(level, index, spell) {
    var object = {
      level: level,
      index: index,
      spell: spell
    };
    helper.store("lastRemovedSpell", JSON.stringify(object));
  };

  function _restore_lastRemovedSpell() {
    var undoData = JSON.parse(helper.read("lastRemovedSpell"));
    _restore_spellObject(undoData.level, undoData.index, undoData.spell);
    _remove_lastRemovedSpell();
    _spellState.set();
  };

  function _restore_spellObject(level, index, spell) {
    var spellBook = helper.getObject({
      object: sheet.get(),
      path: "spells.book.level_" + level + ".all"
    });
    spellBook.splice(index, 0, spell);
    _destroy_spellBook(level);
    _render_all_spells(spellBook, level);
    sheet.store();
  };

  function _remove_lastRemovedSpell() {
    helper.remove("lastRemovedSpell");
  };

  function clear() {
    var all_spellBookKnown = helper.eA(".js-spell-block-known");
    for (var i = 0; i < all_spellBookKnown.length; i++) {
      while (all_spellBookKnown[i].lastChild) {
        all_spellBookKnown[i].removeChild(all_spellBookKnown[i].lastChild);
      };
    };
  };

  function bind() {
    _bind_all_spellControl();
    _bind_all_addNewSpell();
    _bind_all_addNewSpellField();
  };

  function _bind_all_addNewSpell() {
    var all_addNewSpell = helper.eA(".js-add-new-spell");
    for (var i = 0; i < all_addNewSpell.length; i++) {
      all_addNewSpell[i].addEventListener("click", function() {
        _addNewSpell(this);
        sheet.store();
      }, false);
    };
  };

  function _bind_all_addNewSpellField() {
    var addNewSpellField = helper.eA(".js-add-new-spell-field");
    for (var i = 0; i < addNewSpellField.length; i++) {
      addNewSpellField[i].addEventListener("keypress", function(event) {
        clearTimeout(addSpellTimer);
        addSpellTimer = setTimeout(_delayAddSpell, 300, this, event);
      }, false);
    };
  };

  function _bind_all_spellControl() {
    var all_spellControl = helper.eA(".js-spell-control");
    for (var i = 0; i < all_spellControl.length; i++) {
      all_spellControl[i].addEventListener("click", function() {
        _spellControl(this);
      }, false);
    };
  };

  function _bind_spellKnownItem(button) {
    button.addEventListener("click", function() {
      _spellKnownItem(this);
    }, false);
  };

  function add(element, spellIndex) {
    var spellData = data.get({
      type: "spells",
      index: spellIndex
    });
    _addNewSpell(element, spellIndex, spellData);
  };

  function _addNewSpell(element, spellIndex, spellData) {
    var spellBlock = helper.getClosest(element, ".js-spell-block");
    var spellBlockOptions = helper.makeObject(spellBlock.dataset.spellBlockOptions);
    var addNewSpellField = spellBlock.querySelector(".js-add-new-spell-field");
    var spellName;
    if (spellData) {
      spellName = spellData.name;
    } else {
      spellName = addNewSpellField.value;
    };
    if (spellName != "") {
      var newSpellObject = new _create_spellObject(spellName, 0, false, 0, "", spellIndex);
      var newIndex = _get_spellBookCount(spellBlockOptions.level);
      helper.setObject({
        object: sheet.get(),
        path: spellBlockOptions.path + "[" + newIndex + "]",
        newValue: newSpellObject
      });
      _render_spell(newSpellObject, spellBlockOptions.level, newIndex, true);
      addNewSpellField.value = "";
      _render_spellPlaceholder(spellBlockOptions.level);
    };
  };

  function _addNewSpellOnEnter(input, event) {
    if (event.keyCode == 13) {
      _addNewSpell(input);
    };
  };

  function _create_spellObject(spellName, spellPrepared, spellActive, spellCast, spellNote, spellIndex) {
    if (spellIndex >= 0) {
      spellIndex = spellIndex
    } else {
      spellIndex = false
    };
    return {
      name: this.name = spellName || "",
      note: this.note = spellNote || "",
      prepared: this.prepared = spellPrepared || 0,
      active: this.active = spellActive || false,
      cast: this.cast = spellCast || 0,
      index: spellIndex
    };
  };

  function _spellKnownItem(button) {
    var options = helper.makeObject(button.dataset.spellButtonOptions);
    var spellBlock = helper.getClosest(button, ".js-spell-block");
    var spellBlockOptions = helper.makeObject(spellBlock.dataset.spellBlockOptions);
    // depending on spell state change the spell object
    _update_spellObject(button);
    // depending on spell state change the spell button
    _update_spellButton(button);
    // depending on spell state show spell quick controls
    _render_quickSpellControl(button);
    // depending on spell state show easter egg
    _fireball(options.level, options.index);
    // if no spell left reset controls and placeholder
    if (_get_spellBookCount(spellBlockOptions.level) == 0) {
      _spellState.set(spellBlockOptions.level, null);
      _reset_stateSpellControl(spellBlock);
      _render_spellPlaceholder(spellBlockOptions.level);
    };
  };

  function _fireball(level, index) {
    var spellObject = helper.getObject({
      object: sheet.get(),
      path: "spells.book.level_" + level + ".all[" + index + "]"
    });
    if (_spellState.get(level) == "cast") {
      var fireballName = ["Fireball", "fireball", "Fire ball", "fire Ball", "fire ball", "Fire Ball", "FIREBALL", "FIREBALL!", "FIREBALL!!", "FIREBALL!!!", "FIREBALL!!!!"];
      if (fireballName.indexOf(spellObject.name) > -1) {
        // easter egg fireball!
        fireball.render();
      };
    };
  };

  function update(button) {
    _render_quickSpellControl(button);
  };

  function _update_spellObject(button) {
    var options = helper.makeObject(button.dataset.spellButtonOptions);
    var spellObject = helper.getObject({
      object: sheet.get(),
      path: "spells.book.level_" + options.level + ".all[" + options.index + "]"
    });
    if (_spellState.get(options.level) != null) {
      if (_spellState.get(options.level) == "prepare") {
        if (spellObject.prepared < 50) {
          spellObject.prepared++;
        };
      } else if (_spellState.get(options.level) == "unprepare") {
        if (spellObject.prepared > 0) {
          spellObject.prepared--;
        };
        if (spellObject.prepared < spellObject.cast) {
          spellObject.cast = spellObject.prepared;
        };
      } else if (_spellState.get(options.level) == "cast") {
        if (spellObject.cast < 50) {
          spellObject.cast++;
        };
        if (spellObject.cast > spellObject.prepared) {
          spellObject.prepared = spellObject.cast;
        };
      } else if (_spellState.get(options.level) == "active") {
        if (spellObject.active) {
          spellObject.active = false;
        } else {
          spellObject.active = true;
        };
      } else if (_spellState.get(options.level) == "remove") {
        // store undo data
        _store_lastRemovedSpell(options.level, options.index, spellObject);
        // remove spell from spellbook
        helper.getObject({
          object: sheet.get(),
          path: "spells.book.level_" + options.level + ".all"
        }).splice(options.index, 1);
        // snack with undo option
        snack.render({
          message: "Spell " + helper.truncate(spellObject.name, 40, true) + " removed.",
          button: "Undo",
          action: _restore_lastRemovedSpell,
          destroyDelay: 8000
        });
      };
      // console.log(spellObject);
      sheet.store();
    };
  };

  function _update_spellButton(button, force) {
    var options = helper.makeObject(button.dataset.spellButtonOptions);
    var spellObject = helper.getObject({
      object: sheet.get(),
      path: "spells.book.level_" + options.level + ".all[" + options.index + "]"
    });
    var spellName = button.querySelector(".js-spell-name");
    var spellMarks = button.querySelector(".js-spell-marks");
    var spellActive = button.querySelector(".js-spell-active");
    if (_spellState.get(options.level) == "prepare" || _spellState.get(options.level) == "unprepare" || _spellState.get(options.level) == "cast" || _spellState.get(options.level) == "active" || force) {
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
    } else if (_spellState.get(options.level) == "remove") {
      _destroy_spellBook(options.level);
      _render_all_spells(helper.getObject({
        object: sheet.get(),
        path: "spells.book.level_" + options.level + ".all"
      }), options.level);
    };
  };

  function _render_quickSpellControl(button, force) {
    var options = helper.makeObject(button.dataset.spellButtonOptions);
    var spellObject = helper.getObject({
      object: sheet.get(),
      path: "spells.book.level_" + options.level + ".all[" + options.index + "]"
    });
    var tempSpellObject = JSON.parse(JSON.stringify(spellObject));
    var _hold_data = function(action, type) {
      if (type == "prepared") {
        if (action == "plus" && tempSpellObject.prepared < 50) {
          tempSpellObject.prepared++;
        } else if (action == "minus" && tempSpellObject.prepared > 0) {
          tempSpellObject.prepared--;
        } else if (action == "clear" && tempSpellObject.prepared > 0) {
          tempSpellObject.prepared = 0;
        };
        if (tempSpellObject.cast > tempSpellObject.prepared) {
          tempSpellObject.cast = tempSpellObject.prepared;
        };
      };
      if (type == "cast") {
        if (action == "plus" && tempSpellObject.cast < 50) {
          tempSpellObject.cast++;
        } else if (action == "minus" && tempSpellObject.cast > 0) {
          tempSpellObject.cast--;
        } else if (action == "clear" && tempSpellObject.cast > 0) {
          tempSpellObject.cast = 0;
        };
        if (tempSpellObject.prepared < tempSpellObject.cast) {
          tempSpellObject.prepared = tempSpellObject.cast;
        };
      };
      if (type == "active" && action == "toggle") {
        if (tempSpellObject.active) {
          tempSpellObject.active = false;
        } else {
          tempSpellObject.active = true;
        };
      };
    };
    var _render_count = function(spellControl) {
      var spellControlPreparedCount = spellControl.querySelector(".js-spell-control-prepared-count");
      var spellControlCastCount = spellControl.querySelector(".js-spell-control-cast-count");
      spellControlPreparedCount.textContent = tempSpellObject.prepared;
      spellControlCastCount.textContent = tempSpellObject.cast;
    };
    var _store_data = function(spellControl) {
      tempSpellObject.note = spellControl.querySelector(".js-spell-control-textarea-note").innerHTML;
      if (tempSpellObject.note == " " || tempSpellObject.note == "&nbsp;" || tempSpellObject.note == "<br/>" || tempSpellObject.note == "<br>") {
        tempSpellObject.note = "";
      };
      tempSpellObject.name = spellControl.querySelector(".js-spell-control-input-name").value;
      helper.setObject({
        object: sheet.get(),
        path: "spells.book.level_" + options.level + ".all[" + options.index + "]",
        newValue: tempSpellObject
      });
    };
    var _create_editBox = function(options) {
      var defaultOptions = {
        title: null,
        textOnly: null,
        guides: null,
        boxSize: null,
        content: null,
        contentMargin: null
      };
      if (options) {
        defaultOptions = helper.applyOptions(defaultOptions, options);
      };
      var box = document.createElement("div");
      box.setAttribute("class", "m-edit-box m-edit-box-indent");
      if (options.textOnly != null) {
        helper.addClass(box, "m-edit-box-text-only");
      };
      if (options.guides != null) {
        helper.addClass(box, "m-edit-box-guides");
      };
      if (options.title != null) {
        helper.addClass(box, "m-edit-box-head-small");
        var head = document.createElement("div");
        head.setAttribute("class", "m-edit-box-head");
        var title = document.createElement("h2");
        title.setAttribute("class", "m-edit-box-title");
        title.textContent = options.title;
        head.appendChild(title);
        box.appendChild(head);
      } else {
        helper.addClass(box, "m-edit-box-no-head-small");
      };
      var body = document.createElement("div");
      body.setAttribute("class", "m-edit-box-body");
      var boxContent = document.createElement("div");
      if (options.contentMargin != null) {
        boxContent.setAttribute("class", "m-edit-box-content m-edit-box-content-margin-" + options.contentMargin + " m-edit-box-content-nowrap");
      } else {
        boxContent.setAttribute("class", "m-edit-box-content m-edit-box-content-nowrap");
      };
      if (options.content != null) {
        options.content.forEach(function(arrayItem) {
          if (options.boxSize != null) {
            boxContent.appendChild(_create_editBoxItem(options.boxSize, arrayItem));
          } else {
            boxContent.appendChild(arrayItem);
          };
        });
      };
      body.appendChild(boxContent);
      box.appendChild(body);
      return box;
    };
    var _create_editBoxItem = function(size, child) {
      var editBoxItem = document.createElement("div");
      editBoxItem.setAttribute("class", size);
      if (child) {
        editBoxItem.appendChild(child);
      };
      return editBoxItem;
    };
    var _create_spellModal = function() {
      var spellControl = document.createElement("div");
      spellControl.setAttribute("class", "m-spell-control js-spell-control");

      var _create_controls = function() {
        var preparedGroup = document.createElement("div");
        preparedGroup.setAttribute("class", "m-edit-box-item-12 m-edit-box-group");
        var preparedCount = document.createElement("p");
        preparedCount.setAttribute("class", "m-edit-box-total js-spell-control-prepared-count");
        preparedCount.textContent = tempSpellObject.prepared;
        var preparedPlus = document.createElement("button");
        preparedPlus.setAttribute("class", "u-inline-with-input button button-large button-thin button-icon");
        preparedPlus.setAttribute("tabindex", "1");
        var preparedPlusIcon = document.createElement("span");
        preparedPlusIcon.setAttribute("class", "icon-add");
        preparedPlus.addEventListener("click", function() {
          _hold_data("plus", "prepared");
          _render_count(spellControl);
        }, false);
        var preparedMinus = document.createElement("button");
        preparedMinus.setAttribute("class", "u-inline-with-input button button-large button-thin button-icon");
        preparedMinus.setAttribute("tabindex", "1");
        var preparedMinusIcon = document.createElement("span");
        preparedMinusIcon.setAttribute("class", "icon-remove");
        preparedMinus.addEventListener("click", function() {
          _hold_data("minus", "prepared");
          _render_count(spellControl);
        }, false);
        var preparedClear = document.createElement("button");
        preparedClear.setAttribute("class", "u-inline-with-input button button-large button-slim button-icon u-no-margin");
        preparedClear.setAttribute("tabindex", "1");
        var preparedClearIcon = document.createElement("span");
        preparedClearIcon.setAttribute("class", "icon-close");
        preparedClear.addEventListener("click", function() {
          _hold_data("clear", "prepared");
          _render_count(spellControl);
        }, false);
        preparedMinus.appendChild(preparedMinusIcon);
        preparedPlus.appendChild(preparedPlusIcon);
        preparedClear.appendChild(preparedClearIcon);
        preparedGroup.appendChild(_create_editBoxItem("m-edit-box-item-button-md", preparedMinus));
        preparedGroup.appendChild(_create_editBoxItem("m-edit-box-item-100", preparedCount));
        preparedGroup.appendChild(_create_editBoxItem("m-edit-box-item-button-md", preparedPlus));

        var castGroup = document.createElement("div");
        castGroup.setAttribute("class", "m-edit-box-item-12 m-edit-box-group");
        var castCount = document.createElement("p");
        castCount.setAttribute("class", "m-edit-box-total js-spell-control-cast-count");
        castCount.textContent = tempSpellObject.cast;
        var castPlus = document.createElement("button");
        castPlus.setAttribute("class", "u-inline-with-input button button-large button-thin button-icon");
        castPlus.setAttribute("tabindex", "1");
        var castPlusIcon = document.createElement("span");
        castPlusIcon.setAttribute("class", "icon-add");
        castPlus.addEventListener("click", function() {
          _hold_data("plus", "cast");
          _render_count(spellControl);
        }, false);
        var castMinus = document.createElement("button");
        castMinus.setAttribute("class", "u-inline-with-input button button-large button-thin button-icon");
        castMinus.setAttribute("tabindex", "1");
        var castMinusIcon = document.createElement("span");
        castMinusIcon.setAttribute("class", "icon-remove");
        castMinus.addEventListener("click", function() {
          _hold_data("minus", "cast");
          _render_count(spellControl);
        }, false);
        var castClear = document.createElement("button");
        castClear.setAttribute("class", "u-inline-with-input button button-large button-slim button-icon u-no-margin");
        castClear.setAttribute("tabindex", "1");
        var castClearIcon = document.createElement("span");
        castClearIcon.setAttribute("class", "icon-close");
        castClear.addEventListener("click", function() {
          _hold_data("clear", "cast");
          _render_count(spellControl);
        }, false);
        castMinus.appendChild(castMinusIcon);
        castPlus.appendChild(castPlusIcon);
        castClear.appendChild(castClearIcon);
        castGroup.appendChild(_create_editBoxItem("m-edit-box-item-button-md", castMinus));
        castGroup.appendChild(_create_editBoxItem("m-edit-box-item-100", castCount));
        castGroup.appendChild(_create_editBoxItem("m-edit-box-item-button-md", castPlus));

        var activeCheck = document.createElement("div");
        activeCheck.setAttribute("class", "m-check-block");
        var activeInput = document.createElement("input");
        activeInput.setAttribute("type", "checkbox");
        activeInput.setAttribute("id", "spell-active");
        activeInput.setAttribute("class", "m-check-block-check js-spell-control-active");
        activeInput.setAttribute("tabindex", "1");
        activeInput.checked = tempSpellObject.active;
        activeInput.addEventListener("change", function() {
          _hold_data("toggle", "active");
          _render_count(spellControl);
        }, false);
        var activeIcon = document.createElement("span");
        activeIcon.setAttribute("class", "m-check-block-check-icon");
        activeCheck.appendChild(activeInput);
        activeCheck.appendChild(activeIcon);

        var renameInput = document.createElement("input");
        renameInput.setAttribute("class", "js-spell-control-input-name");
        renameInput.setAttribute("type", "text");
        renameInput.setAttribute("tabindex", "1");
        renameInput.value = tempSpellObject.name;

        var noteTextarea = document.createElement("div");
        noteTextarea.setAttribute("class", "m-textarea-block-field textarea textarea-large u-full-width js-spell-control-textarea-note");
        noteTextarea.setAttribute("contenteditable", "true");
        noteTextarea.setAttribute("tabindex", "1");
        noteTextarea.innerHTML = tempSpellObject.note;
        noteTextarea.addEventListener("paste", function(event) {
          helper.pasteStrip(event);
        });

        spellControl.appendChild(_create_editBox({
          title: "Prepared",
          guides: true,
          content: [preparedGroup, _create_editBoxItem("m-edit-box-item-button-md", preparedClear)]
        }));
        spellControl.appendChild(_create_editBox({
          title: "Cast",
          guides: true,
          content: [castGroup, _create_editBoxItem("m-edit-box-item-button-md", castClear)]
        }));
        spellControl.appendChild(_create_editBox({
          title: "Active",
          guides: true,
          boxSize: "m-edit-box-item-check",
          content: [activeCheck]
        }));
        spellControl.appendChild(_create_editBox({
          title: "Rename",
          guides: true,
          boxSize: "m-edit-box-item-100",
          content: [renameInput]
        }));
        spellControl.appendChild(_create_editBox({
          title: "Spell notes",
          guides: true,
          boxSize: "m-edit-box-item-100",
          content: [noteTextarea]
        }));
      };

      var _create_spellblock = function() {

        var spellData = data.get({
          type: "spells",
          index: tempSpellObject.index
        });

        if (spellData.school.base != "") {
          var para = document.createElement("p");
          var string = helper.capFirstLetter(spellData.school.base);
          if (spellData.school.subschool != "") {
            string = string + " (" + helper.capFirstLetter(spellData.school.subschool) + ")";
          };
          if (spellData.descriptor.string != "") {
            string = string + " [" + helper.capFirstLetter(spellData.descriptor.string) + "]";
          };
          para.textContent = string;
          spellControl.appendChild(_create_editBox({
            title: "School",
            textOnly: true,
            guides: true,
            content: [para],
            boxSize: "m-edit-box-item-100"
          }));
        };

        if (spellData.level.string != "") {
          var para = document.createElement("p");
          var string = "";
          for (var key in spellData.level) {
            if (key != "string" && key != "sla" && spellData.level[key] != null) {
              string = string + helper.capFirstLetter(key) + " " + spellData.level[key] + ", ";
            };
          };
          string = string.replace(/,\s*$/, "");
          para.textContent = string;
          spellControl.appendChild(_create_editBox({
            title: "Level",
            textOnly: true,
            guides: true,
            content: [para],
            boxSize: "m-edit-box-item-100"
          }));
        };

        if (spellData.casting.time != "") {
          var para = document.createElement("p");
          para.textContent = helper.capFirstLetter(spellData.casting.time);
          spellControl.appendChild(_create_editBox({
            title: "Casting time",
            textOnly: true,
            guides: true,
            content: [para],
            boxSize: "m-edit-box-item-100"
          }));
        };

        if (spellData.components.string != "") {
          var para = document.createElement("p");
          para.textContent = spellData.components.string;
          spellControl.appendChild(_create_editBox({
            title: "Components",
            textOnly: true,
            guides: true,
            content: [para],
            boxSize: "m-edit-box-item-100"
          }));
        };

        if (spellData.casting.range != "") {
          var para = document.createElement("p");
          para.textContent = helper.capFirstLetter(spellData.casting.range);
          spellControl.appendChild(_create_editBox({
            title: "Range",
            textOnly: true,
            guides: true,
            content: [para],
            boxSize: "m-edit-box-item-100"
          }));
        };

        if (spellData.description.effect != "") {
          var para = document.createElement("p");
          para.textContent = helper.capFirstLetter(spellData.description.effect);
          spellControl.appendChild(_create_editBox({
            title: "Effect",
            textOnly: true,
            guides: true,
            content: [para],
            boxSize: "m-edit-box-item-100"
          }));
        };

        if (spellData.casting.area != "") {
          var para = document.createElement("p");
          var string = helper.capFirstLetter(spellData.casting.area);
          if (spellData.casting.shapeable) {
            string = string + " (S)";
          };
          para.textContent = string;
          spellControl.appendChild(_create_editBox({
            title: "Area",
            textOnly: true,
            guides: true,
            content: [para],
            boxSize: "m-edit-box-item-100"
          }));
        };

        if (spellData.casting.targets != "") {
          var para = document.createElement("p");
          para.textContent = helper.capFirstLetter(spellData.casting.targets);
          spellControl.appendChild(_create_editBox({
            title: "Targets",
            textOnly: true,
            guides: true,
            content: [para],
            boxSize: "m-edit-box-item-100"
          }));
        };

        if (spellData.casting.duration != "") {
          var para = document.createElement("p");
          var string = helper.capFirstLetter(spellData.casting.duration);
          if (spellData.casting.dismissible) {
            string = string + " (D)";
          };
          para.textContent = string;
          spellControl.appendChild(_create_editBox({
            title: "Duration",
            textOnly: true,
            guides: true,
            content: [para],
            boxSize: "m-edit-box-item-100"
          }));
        };

        if (spellData.casting.saving != "") {
          var para = document.createElement("p");
          para.textContent = helper.capFirstLetter(spellData.casting.saving);
          spellControl.appendChild(_create_editBox({
            title: "Saving Throw",
            textOnly: true,
            guides: true,
            content: [para],
            boxSize: "m-edit-box-item-100"
          }));
        };

        if (spellData.casting.spell_resistence != "") {
          var para = document.createElement("p");
          para.textContent = helper.capFirstLetter(spellData.casting.spell_resistence);
          spellControl.appendChild(_create_editBox({
            title: "Spell Resistence",
            textOnly: true,
            guides: true,
            content: [para],
            boxSize: "m-edit-box-item-100"
          }));
        };

        if (spellData.description.formated != "") {
          var div = document.createElement("div");
          div.innerHTML = spellData.description.formated;
          spellControl.appendChild(_create_editBox({
            title: "Description",
            textOnly: true,
            guides: true,
            content: [div],
            boxSize: "m-edit-box-item-100"
          }));
        };

        if (spellData.mythic.mythic && spellData.mythic.text != "") {
          var para = document.createElement("p");
          para.textContent = spellData.mythic.text;
          spellControl.appendChild(_create_editBox({
            title: "Mythic",
            textOnly: true,
            guides: true,
            content: [para],
            boxSize: "m-edit-box-item-100"
          }));
        };

        if (spellData.mythic.mythic && spellData.mythic.augmented != "") {
          var para = document.createElement("p");
          para.textContent = spellData.mythic.augmented;
          spellControl.appendChild(_create_editBox({
            content: [para],
            textOnly: true,
            guides: true,
            boxSize: "m-edit-box-item-100"
          }));
        };

        if (spellData.source != "") {
          var para = document.createElement("p");
          para.textContent = spellData.source;
          spellControl.appendChild(_create_editBox({
            title: "Source",
            textOnly: true,
            guides: true,
            content: [para],
            boxSize: "m-edit-box-item-100"
          }));
        };
      };

      if ("index" in tempSpellObject && (tempSpellObject.index) || typeof tempSpellObject.index == "number" && tempSpellObject.index >= 0) {
        _create_spellblock();
      };

      _create_controls();
      return spellControl;
    };
    if (_spellState.get(options.level) == null || force) {
      var modalContent = _create_spellModal();
      var modalAction = function() {
        _store_data(this);
        _update_spellButton(button, true);
        sheet.store();
        display.clear();
        display.render();
      }.bind(modalContent);

      modal.render({
        heading: spellObject.name,
        content: modalContent,
        action: modalAction,
        actionText: "Save",
        size: "large"
      });
      page.update();
    };
  };

  function _spellControl(button) {
    var options = helper.makeObject(button.dataset.spellControlOptions);
    if (options.action == "changeState") {
      _update_stateSpellEditMode(button);
    } else if (options.action == "reset") {
      _resetAllSpells(button);
    } else if (options.action == "sort") {
      _sortAllSpells(button);
    };
  };

  function _resetAllSpells(button) {
    var options = helper.makeObject(button.dataset.spellControlOptions);
    var spellBlock = helper.getClosest(button, ".js-spell-block");
    var spellBlockOptions = helper.makeObject(spellBlock.dataset.spellBlockOptions);
    var reset = function() {
      var spellBook = helper.getObject({
        object: sheet.get(),
        path: spellBlockOptions.path
      });
      for (var i in spellBook) {
        spellBook[i].prepared = 0;
        spellBook[i].cast = 0;
        spellBook[i].active = false;
      };
    };
    var promotAction = function() {
      reset();
      clear();
      render();
      sheet.store();
      snack.render({
        message: "All level " + spellBlockOptions.level + " spells reset."
      });
    };
    if (_get_spellBookCount(spellBlockOptions.level)) {
      prompt.render({
        heading: "Reset level " + spellBlockOptions.level + " spells?",
        message: "All level " + spellBlockOptions.level + " Prepared, Cast and Active spells will be set to normal states.",
        actionText: "Reset",
        action: promotAction
      });
      page.update();
    };
  };

  function _sortAllSpells(button) {
    var options = helper.makeObject(button.dataset.spellControlOptions);
    var spellBlock = helper.getClosest(button, ".js-spell-block");
    var spellBlockOptions = helper.makeObject(spellBlock.dataset.spellBlockOptions);
    var sort = function() {
      var spellBook = helper.getObject({
        object: sheet.get(),
        path: spellBlockOptions.path
      });
      var newSpellBook = helper.sortObject(spellBook, "name");
      helper.setObject({
        object: sheet.get(),
        path: spellBlockOptions.path,
        newValue: newSpellBook
      });
    };
    var promotAction = function() {
      sort();
      clear();
      render();
      sheet.store();
      snack.render({
        message: "All level " + spellBlockOptions.level + " spells alphabetically sorted."
      });
    };
    if (_get_spellBookCount(spellBlockOptions.level)) {
      prompt.render({
        heading: "Sort level " + spellBlockOptions.level + " spells",
        message: "Sort all level " + spellBlockOptions.level + " spells in alphabetical order?",
        actionText: "Sort",
        action: promotAction
      });
      page.update();
    };
  };

  function _update_stateSpellEditMode(button) {
    var options = helper.makeObject(button.dataset.spellControlOptions);
    var spellBlock = helper.getClosest(button, ".js-spell-block");
    var spellBlockOptions = helper.makeObject(spellBlock.dataset.spellBlockOptions);
    if (_get_spellBookCount(spellBlockOptions.level) > 0) {
      _spellState.set(spellBlockOptions.level, options.state);
      _render_stateSpellControl(button);
      _render_stateSpellBlock(spellBlock, spellBlockOptions.level);
      _render_stateSpellBlockItem(spellBlock, spellBlockOptions.level);
    } else {
      _spellState.set(spellBlockOptions.level, null);
      _render_stateSpellControl(button);
    };
  };

  function _get_spellBookCount(level) {
    return helper.getObject({
      object: sheet.get(),
      path: "spells.book.level_" + level + ".all"
    }).length;
  };

  function render(spellBlock) {
    if (spellBlock) {
      _render_spellBlock(spellBlock);
    } else {
      var all_spellBlock = helper.eA(".js-spell-block");
      for (var i = 0; i < all_spellBlock.length; i++) {
        _render_spellBlock(all_spellBlock[i]);
      };
    };
  };

  function _render_spellBlock(spellBlock) {
    var options = helper.makeObject(spellBlock.dataset.spellBlockOptions);
    var all_spells = helper.getObject({
      object: sheet.get(),
      path: options.path
    });
    for (var i = 0; i < all_spells.length; i++) {
      var spellBlockKnown = spellBlock.querySelector(".js-spell-block-known");
      var spellObject = all_spells[i];
      var spellButtonCol = document.createElement("div");
      spellButtonCol.setAttribute("class", "m-spell-col js-spell-col");
      // append new spell to spell list
      var spellButton = _create_spellButton(spellObject, options.level, i);
      spellButtonCol.appendChild(spellButton);
      spellBlockKnown.appendChild(spellButtonCol);
      _bind_spellKnownItem(spellButton);
    };
    _render_spellPlaceholder(options.level);
  };

  function _render_all_spells(array, level) {
    // read spells and add them to spell lists
    for (var i = 0; i < array.length; i++) {
      var spellObject = array[i];
      var spellButtonCol = document.createElement("div");
      spellButtonCol.setAttribute("class", "m-spell-col js-spell-col");
      // find spell list to add too
      var knownListToSaveTo = helper.e(".js-spell-block-known-level-" + level);
      // append new spell to spell list
      var spellButton = _create_spellButton(spellObject, level, i);
      spellButtonCol.appendChild(spellButton);
      knownListToSaveTo.appendChild(spellButtonCol);
      _bind_spellKnownItem(spellButton);
    };
    _render_spellPlaceholder(level);
  };

  function _render_spell(spellObject, level, spellIndex) {
    // read spell and add them to spell lists
    var spellButtonCol = document.createElement("div");
    spellButtonCol.setAttribute("class", "m-spell-col js-spell-col");
    // find spell list to add too
    var knownListToSaveTo = helper.e(".js-spell-block-known-level-" + level);
    // append new spell to spell list
    var spellButton = _create_spellButton(spellObject, level, spellIndex, true);
    spellButtonCol.appendChild(spellButton);
    knownListToSaveTo.appendChild(spellButtonCol);
    _bind_spellKnownItem(spellButton);
  };

  function _create_spellButton(spellObject, level, index, newSpell) {
    var spellButton = document.createElement("button");
    spellButton.setAttribute("data-spell-button-options", "level:#" + level + ",index:#" + index);
    spellButton.setAttribute("class", "m-spell button button-medium js-spell");
    spellButton.setAttribute("type", "button");
    spellButton.setAttribute("tabindex", "1");
    if (_spellState.get(level) == "remove") {
      helper.addClass(spellButton, "button-primary");
    } else if (_spellState.get(level) == "prepare" || _spellState.get(level) == "unprepare" || _spellState.get(level) == "cast" || _spellState.get(level) == "active") {
      helper.addClass(spellButton, "button-secondary");
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

  function _render_stateSpellBlockItem(spellBook, level) {
    var all_spellBookItem = spellBook.querySelectorAll(".js-spell");
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
    if (_spellState.get(level) == "remove") {
      _normalStateSpellItems();
      _remove_stateSpellItems();
    } else if (_spellState.get(level) == "prepare" || _spellState.get(level) == "unprepare" || _spellState.get(level) == "cast" || _spellState.get(level) == "active") {
      _activeStateSpellItems();
    } else {
      _normalStateSpellItems();
    };
  };

  function _render_stateSpellBlock(spellBook, level) {
    if (_spellState.get(level) == "remove") {
      helper.addClass(spellBook, "is-state-remove");
    } else {
      helper.removeClass(spellBook, "is-state-remove");
    };
  };

  function _render_stateSpellControl(button) {
    var spellBlock = helper.getClosest(button, ".js-spell-block");
    var spellBlockOptions = helper.makeObject(spellBlock.dataset.spellBlockOptions);
    var all_spellControl = spellBlock.querySelectorAll(".js-spell-control");
    var _resetAllControl = function() {
      for (var i = 0; i < all_spellControl.length; i++) {
        if (all_spellControl[i].classList.contains("button-primary")) {
          helper.removeClass(all_spellControl[i], "button-primary");
        };
        if (all_spellControl[i].classList.contains("button-secondary")) {
          helper.removeClass(all_spellControl[i], "button-secondary");
        };
      };
    };
    var _activateControl = function() {
      if (_spellState.get(spellBlockOptions.level) == "remove") {
        helper.addClass(button, "button-primary");
      } else if (_spellState.get(spellBlockOptions.level) == null) {
        helper.removeClass(button, "button-primary");
      };
      if (_spellState.get(spellBlockOptions.level) == "prepare" || _spellState.get(spellBlockOptions.level) == "unprepare" || _spellState.get(spellBlockOptions.level) == "cast" || _spellState.get(spellBlockOptions.level) == "active") {
        // helper.addClass(button, "is-live");
        helper.addClass(button, "button-secondary");
      } else if (_spellState.get(spellBlockOptions.level) == null) {
        // helper.removeClass(button, "is-live");
        helper.removeClass(button, "button-secondary");
      };
    };
    if (_spellState.get(spellBlockOptions.level) != null) {
      _resetAllControl();
      _activateControl();
    } else {
      _resetAllControl();
    };
  };

  function _reset_stateSpellControl(spellBook) {
    var spellBlockOptions = helper.makeObject(spellBook.dataset.spellBlockOptions);
    var all_spellControl = spellBook.querySelectorAll(".js-spell-control");
    if (_get_spellBookCount(spellBlockOptions.level) == 0) {
      for (var i = 0; i < all_spellControl.length; i++) {
        if (all_spellControl[i].classList.contains("button-primary")) {
          helper.removeClass(all_spellControl[i], "button-primary");
          helper.removeClass(all_spellControl[i], "button-secondary");
        };
      };
      _render_stateSpellBlock(spellBook, spellBlockOptions.level);
    };
  };

  function _render_spellPlaceholder(level) {
    var placeholder = helper.e(".js-placeholder-spell-level-" + level);
    if (_get_spellBookCount(level) > 0) {
      helper.addClass(placeholder, "is-hidden");
    } else {
      helper.removeClass(placeholder, "is-hidden");
    };
  };

  // exposed methods
  return {
    clear: clear,
    bind: bind,
    render: render,
    update: update,
    add: add
  };

})();
