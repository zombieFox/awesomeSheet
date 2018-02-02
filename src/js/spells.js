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
    var spellBook = helper.e(".js-spell-book-known-level-" + level);
    while (spellBook.lastChild) {
      spellBook.removeChild(spellBook.lastChild);
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
      path: "spells.book[" + level + "]level_" + level
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
    var all_spellBookKnown = helper.eA(".js-spell-book-known");
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
        addNewSpell(this);
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

  function add(element, data) {
    addNewSpell(element, data);
  };

  function addNewSpell(element, data) {
    var spellBook = helper.getClosest(element, ".js-spell-book");
    var spellBookOptions = helper.makeObject(spellBook.dataset.spellBookOptions);
    var addNewSpellField = spellBook.querySelector(".js-add-new-spell-field");
    var spellName;
    if (data) {
      spellName = data.name;
    } else {
      spellName = addNewSpellField.value
    };
    if (spellName != "") {
      var newSpellObject = new _create_spellObject(spellName, 0, false, 0, "");
      if (data) {
        newSpellObject.data = data;
      };
      var newIndex = _get_spellBookCount(spellBookOptions.level);
      helper.setObject({
        object: sheet.get(),
        path: spellBookOptions.path + "[" + newIndex + "]",
        newValue: newSpellObject
      });
      _render_spell(newSpellObject, spellBookOptions.level, newIndex, true);
      addNewSpellField.value = "";
    };
  };

  function _addNewSpellOnEnter(input, event) {
    if (event.keyCode == 13) {
      addNewSpell(input);
    };
  };

  function _create_spellObject(spellName, spellPrepared, spellActive, spellCast, spellNote) {
    return {
      name: this.name = spellName || "",
      note: this.note = spellNote || "",
      state: {
        prepared: this.prepared = spellPrepared || 0,
        active: this.active = spellActive || false,
        cast: this.cast = spellCast || 0,
      }
    };
  };

  function _spellKnownItem(button) {
    var options = helper.makeObject(button.dataset.spellButtonOptions);
    var spellBook = helper.getClosest(button, ".js-spell-book");
    var spellBookOptions = helper.makeObject(spellBook.dataset.spellBookOptions);
    _update_spellObject(button);
    _update_spellButton(button);
    if (_get_spellBookCount(spellBookOptions.level) > 0) {
      _render_quickSpellControl(button);
      _fireball(options.level, options.index);
    } else {
      _spellState.set(spellBookOptions.level, null);
      _reset_stateSpellControl(spellBook);
    };
  };

  function _fireball(level, index) {
    var spellObject = helper.getObject({
      object: sheet.get(),
      path: "spells.book[" + level + "]level_" + level + "[" + index + "]"
    });
    if (_spellState.get(level) == "cast") {
      var fireballName = ["Fireball", "fireball", "Fire ball", "fire Ball", "fire ball", "Fire Ball", "FIREBALL", "FIREBALL!", "FIREBALL!!", "FIREBALL!!!", "FIREBALL!!!!"];
      if (fireballName.indexOf(spellObject.name) > -1) {
        // easter egg fireball!
        fireball.render();
      };
    };
  };

  function _update_spellObject(button) {
    var options = helper.makeObject(button.dataset.spellButtonOptions);
    var spellObject = helper.getObject({
      object: sheet.get(),
      path: "spells.book[" + options.level + "]level_" + options.level + "[" + options.index + "]"
    });
    if (_spellState.get(options.level) != null) {
      if (_spellState.get(options.level) == "prepare") {
        if (spellObject.state.prepared < 50) {
          spellObject.state.prepared++;
        };
      } else if (_spellState.get(options.level) == "unprepare") {
        if (spellObject.state.prepared > 0) {
          spellObject.state.prepared--;
        };
        if (spellObject.state.prepared < spellObject.state.cast) {
          spellObject.state.cast = spellObject.state.prepared;
        };
      } else if (_spellState.get(options.level) == "cast") {
        if (spellObject.state.cast < 50) {
          spellObject.state.cast++;
        };
        if (spellObject.state.cast > spellObject.state.prepared) {
          spellObject.state.prepared = spellObject.state.cast;
        };
      } else if (_spellState.get(options.level) == "active") {
        if (spellObject.state.active) {
          spellObject.state.active = false;
        } else {
          spellObject.state.active = true;
        };
      } else if (_spellState.get(options.level) == "remove") {
        // store undo data
        _store_lastRemovedSpell(options.level, options.index, spellObject);
        // remove spell from spellbook
        helper.getObject({
          object: sheet.get(),
          path: "spells.book[" + options.level + "]level_" + options.level
        }).splice(options.index, 1);
        // snack with undo option
        snack.render({
          message: helper.truncate(spellObject.name, 40, true) + " removed.",
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
      path: "spells.book[" + options.level + "]level_" + options.level + "[" + options.index + "]"
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
      if (spellObject.state.prepared > 0) {
        for (var i = 0; i < spellObject.state.prepared; i++) {
          var preparedIcon = document.createElement("span");
          preparedIcon.setAttribute("class", "icon-radio-button-checked js-spell-mark-checked");
          spellMarks.insertBefore(preparedIcon, spellMarks.firstChild);
        };
      };
      if (spellObject.state.cast > 0) {
        var all_check = spellMarks.querySelectorAll(".icon-radio-button-checked");
        for (var j = 0; j < spellObject.state.cast; j++) {
          if (all_check[j]) {
            helper.toggleClass(all_check[j], "icon-radio-button-checked");
            helper.toggleClass(all_check[j], "icon-radio-button-unchecked");
            helper.toggleClass(all_check[j], "js-spell-mark-checked");
            helper.toggleClass(all_check[j], "js-spell-mark-unchecked");
          };
        };
      };
      if (spellObject.state.active) {
        var activeIcon = document.createElement("span");
        activeIcon.setAttribute("class", "icon-play-arrow");
        if (spellObject.state.active) {
          spellActive.appendChild(activeIcon);
        };
      };
      spellName.textContent = spellObject.name;
    } else if (_spellState.get(options.level) == "remove") {
      _destroy_spellBook(options.level);
      _render_all_spells(helper.getObject({
        object: sheet.get(),
        path: "spells.book[" + options.level + "]level_" + options.level
      }), options.level);
    };
  };

  function _render_quickSpellControl(button, force) {
    var options = helper.makeObject(button.dataset.spellButtonOptions);
    var spellObject = helper.getObject({
      object: sheet.get(),
      path: "spells.book[" + options.level + "]level_" + options.level + "[" + options.index + "]"
    });
    var tempSpellObject = JSON.parse(JSON.stringify(spellObject));
    var _hold_data = function(action, type) {
      if (type == "prepared") {
        if (action == "plus" && tempSpellObject.state.prepared < 50) {
          tempSpellObject.state.prepared++;
        } else if (action == "minus" && tempSpellObject.state.prepared > 0) {
          tempSpellObject.state.prepared--;
        } else if (action == "clear" && tempSpellObject.state.prepared > 0) {
          tempSpellObject.state.prepared = 0;
        };
        if (tempSpellObject.state.cast > tempSpellObject.state.prepared) {
          tempSpellObject.state.cast = tempSpellObject.state.prepared;
        };
      };
      if (type == "cast") {
        if (action == "plus" && tempSpellObject.state.cast < 50) {
          tempSpellObject.state.cast++;
        } else if (action == "minus" && tempSpellObject.state.cast > 0) {
          tempSpellObject.state.cast--;
        } else if (action == "clear" && tempSpellObject.state.cast > 0) {
          tempSpellObject.state.cast = 0;
        };
        if (tempSpellObject.state.prepared < tempSpellObject.state.cast) {
          tempSpellObject.state.prepared = tempSpellObject.state.cast;
        };
      };
      if (type == "active" && action == "toggle") {
        if (tempSpellObject.state.active) {
          tempSpellObject.state.active = false;
        } else {
          tempSpellObject.state.active = true;
        };
      };
      // console.log("tempSpellObject", tempSpellObject);
    };
    var _render_count = function(spellControl) {
      var spellControlPreparedCount = spellControl.querySelector(".js-spell-control-prepared-count");
      var spellControlCastCount = spellControl.querySelector(".js-spell-control-cast-count");
      spellControlPreparedCount.textContent = tempSpellObject.state.prepared;
      spellControlCastCount.textContent = tempSpellObject.state.cast;
    };
    var _store_data = function(spellControl) {
      tempSpellObject.note = spellControl.querySelector(".js-spell-control-textarea-note").innerHTML;
      if (tempSpellObject.note == " " || tempSpellObject.note == "&nbsp;" || tempSpellObject.note == "<br/>" || tempSpellObject.note == "<br>") {
        tempSpellObject.note = "";
      };
      tempSpellObject.name = spellControl.querySelector(".js-spell-control-input-name").value;
      helper.setObject({
        object: sheet.get(),
        path: "spells.book[ " + options.level + "].level_" + options.level + "[" + options.index + "]",
        newValue: tempSpellObject
      });
    };
    var _create_editBox = function(options) {
      var defaultOptions = {
        title: null,
        boxSize: null,
        content: null,
        contentMargin: null
      };
      if (options) {
        var defaultOptions = helper.applyOptions(defaultOptions, options);
      };
      var box = document.createElement("div");
      if (options.title != null) {
        box.setAttribute("class", "m-edit-box m-edit-box-indent m-edit-box-head-small");
        var head = document.createElement("div");
        head.setAttribute("class", "m-edit-box-head");
        var title = document.createElement("h2");
        title.setAttribute("class", "m-edit-box-title");
        title.textContent = options.title;
        head.appendChild(title);
        box.appendChild(head);
      } else {
        box.setAttribute("class", "m-edit-box m-edit-box-indent m-edit-box-no-head-small");
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
    var _create_spellControlModal = function() {
      var spellControl = document.createElement("div");
      spellControl.setAttribute("class", "m-spell-control js-spell-control");

      var _create_controls = function() {
        var preparedGroup = document.createElement("div");
        preparedGroup.setAttribute("class", "m-edit-box-item m-edit-box-group-control-set");
        var preparedCount = document.createElement("p");
        preparedCount.setAttribute("class", "m-edit-box-total js-spell-control-prepared-count");
        preparedCount.textContent = tempSpellObject.state.prepared;
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
        preparedClear.setAttribute("class", "u-inline-with-input button button-large button-thin button-icon");
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
        preparedGroup.appendChild(_create_editBoxItem("m-edit-box-item-button-large", preparedMinus));
        preparedGroup.appendChild(_create_editBoxItem("m-edit-box-item-max", preparedCount));
        preparedGroup.appendChild(_create_editBoxItem("m-edit-box-item-button-large", preparedPlus));

        var castGroup = document.createElement("div");
        castGroup.setAttribute("class", "m-edit-box-item m-edit-box-group-control-set");
        var castCount = document.createElement("p");
        castCount.setAttribute("class", "m-edit-box-total js-spell-control-cast-count");
        castCount.textContent = tempSpellObject.state.cast;
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
        castClear.setAttribute("class", "u-inline-with-input button button-large button-thin button-icon");
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
        castGroup.appendChild(_create_editBoxItem("m-edit-box-item-button-large", castMinus));
        castGroup.appendChild(_create_editBoxItem("m-edit-box-item-max", castCount));
        castGroup.appendChild(_create_editBoxItem("m-edit-box-item-button-large", castPlus));

        var activeCheck = document.createElement("div");
        activeCheck.setAttribute("class", "m-check-block");
        var activeInput = document.createElement("input");
        activeInput.setAttribute("type", "checkbox");
        activeInput.setAttribute("id", "spell-active");
        activeInput.setAttribute("class", "m-check-block-check js-spell-control-active");
        activeInput.setAttribute("tabindex", "1");
        activeInput.checked = tempSpellObject.state.active;
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
          content: [preparedGroup, _create_editBoxItem("m-edit-box-item-button-large", preparedClear)],
          contentMargin: "large"
        }));
        spellControl.appendChild(_create_editBox({
          title: "Cast",
          content: [castGroup, _create_editBoxItem("m-edit-box-item-button-large", castClear)],
          contentMargin: "large"
        }));
        spellControl.appendChild(_create_editBox({
          title: "Active",
          boxSize: "m-edit-box-item-check",
          content: [activeCheck],
          contentMargin: "large"
        }));
        spellControl.appendChild(_create_editBox({
          title: "Rename",
          boxSize: "m-edit-box-item-max",
          content: [renameInput],
          contentMargin: "large"
        }));
        spellControl.appendChild(_create_editBox({
          title: "Spell notes",
          boxSize: "m-edit-box-item-max",
          content: [noteTextarea]
        }));
      };

      var _create_spellblock = function() {
        if (tempSpellObject.data.school.base != "") {
          var para = document.createElement("p");
          var string = helper.capFirstLetter(tempSpellObject.data.school.base);
          if (tempSpellObject.data.school.subschool != "") {
            string = string + " (" + helper.capFirstLetter(tempSpellObject.data.school.subschool) + ")";
          };
          if (tempSpellObject.data.descriptor.string != "") {
            string = string + " [" + helper.capFirstLetter(tempSpellObject.data.descriptor.string) + "]";
          };
          para.textContent = string;
          spellControl.appendChild(_create_editBox({
            title: "School",
            content: [para],
            boxSize: "m-edit-box-item-max",
            contentMargin: "small"
          }));
        };

        if (tempSpellObject.data.level.string != "") {
          var para = document.createElement("p");
          var string = "";
          for (var key in tempSpellObject.data.level) {
            if (key != "string" && key != "sla" && tempSpellObject.data.level[key] != null) {
              string = string + helper.capFirstLetter(key) + " " + tempSpellObject.data.level[key] + ", ";
            };
          };
          string = string.replace(/,\s*$/, "");
          para.textContent = string;
          spellControl.appendChild(_create_editBox({
            title: "Level",
            content: [para],
            boxSize: "m-edit-box-item-max",
            contentMargin: "small"
          }));
        };

        if (tempSpellObject.data.casting.time != "") {
          var para = document.createElement("p");
          para.textContent = helper.capFirstLetter(tempSpellObject.data.casting.time);
          spellControl.appendChild(_create_editBox({
            title: "Casting time",
            content: [para],
            boxSize: "m-edit-box-item-max",
            contentMargin: "small"
          }));
        };

        if (tempSpellObject.data.components.string != "") {
          var para = document.createElement("p");
          para.textContent = tempSpellObject.data.components.string;
          spellControl.appendChild(_create_editBox({
            title: "Components",
            content: [para],
            boxSize: "m-edit-box-item-max",
            contentMargin: "small"
          }));
        };

        if (tempSpellObject.data.casting.range != "") {
          var para = document.createElement("p");
          para.textContent = helper.capFirstLetter(tempSpellObject.data.casting.range);
          spellControl.appendChild(_create_editBox({
            title: "Range",
            content: [para],
            boxSize: "m-edit-box-item-max",
            contentMargin: "small"
          }));
        };

        if (tempSpellObject.data.casting.area != "") {
          var para = document.createElement("p");
          var string = helper.capFirstLetter(tempSpellObject.data.casting.area);
          if (tempSpellObject.data.casting.shapeable) {
            string = string + " (S)";
          };
          para.textContent = string;
          spellControl.appendChild(_create_editBox({
            title: "Area",
            content: [para],
            boxSize: "m-edit-box-item-max",
            contentMargin: "small"
          }));
        };

        if (tempSpellObject.data.casting.targets != "") {
          var para = document.createElement("p");
          para.textContent = helper.capFirstLetter(tempSpellObject.data.casting.targets);
          spellControl.appendChild(_create_editBox({
            title: "Targets",
            content: [para],
            boxSize: "m-edit-box-item-max",
            contentMargin: "small"
          }));
        };

        if (tempSpellObject.data.casting.duration != "") {
          var para = document.createElement("p");
          var string = helper.capFirstLetter(tempSpellObject.data.casting.duration);
          if (tempSpellObject.data.casting.dismissible) {
            string = string + " (D)";
          };
          para.textContent = string;
          spellControl.appendChild(_create_editBox({
            title: "Duration",
            content: [para],
            boxSize: "m-edit-box-item-max",
            contentMargin: "small"
          }));
        };

        if (tempSpellObject.data.casting.saving != "") {
          var para = document.createElement("p");
          para.textContent = helper.capFirstLetter(tempSpellObject.data.casting.saving);
          spellControl.appendChild(_create_editBox({
            title: "Saving Throw",
            content: [para],
            boxSize: "m-edit-box-item-max",
            contentMargin: "small"
          }));
        };

        if (tempSpellObject.data.casting.spell_resistence != "") {
          var para = document.createElement("p");
          para.textContent = helper.capFirstLetter(tempSpellObject.data.casting.spell_resistence);
          spellControl.appendChild(_create_editBox({
            title: "Spell Resistence",
            content: [para],
            boxSize: "m-edit-box-item-max",
            contentMargin: "small"
          }));
        };

        if (tempSpellObject.data.description.formated != "") {
          var div = document.createElement("div");
          div.innerHTML = tempSpellObject.data.description.formated;
          spellControl.appendChild(_create_editBox({
            title: "Description",
            content: [div],
            boxSize: "m-edit-box-item-max",
            contentMargin: "large"
          }));
        };

        if (tempSpellObject.data.source != "") {
          var para = document.createElement("p");
          para.textContent = "Source: " + tempSpellObject.data.source;
          para.setAttribute("class", "u-muted-text");
          spellControl.appendChild(_create_editBox({
            content: [para],
            boxSize: "m-edit-box-item-max"
          }));
        };

      };

      if ("data" in tempSpellObject) {
        _create_spellblock();
        spellControl.appendChild(document.createElement("hr"));
      };
      _create_controls();
      return spellControl;
    };
    if (_spellState.get(options.level) == null || force) {
      var modalContent = _create_spellControlModal();
      var modalAction = function() {
        _store_data(this);
        _update_spellButton(button, true);
        sheet.store();
        display.clear(helper.e(".js-section-spells"));
        display.render(helper.e(".js-section-spells"));
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
    var spellBook = helper.getClosest(button, ".js-spell-book");
    var spellBookOptions = helper.makeObject(spellBook.dataset.spellBookOptions);
    var reset = function() {
      var spellBook = helper.getObject({
        object: sheet.get(),
        path: spellBookOptions.path
      });
      for (var i in spellBook) {
        spellBook[i].state.prepared = 0;
        spellBook[i].state.cast = 0;
        spellBook[i].state.active = false;
      };
    };
    var promotAction = function() {
      reset();
      clear();
      render();
      sheet.store();
      snack.render({
        message: "All level " + spellBookOptions.level + " spells reset."
      });
    };
    if (_get_spellBookCount(spellBookOptions.level)) {
      prompt.render({
        heading: "Reset level " + spellBookOptions.level + " spells?",
        message: "All level " + spellBookOptions.level + " Prepared, Cast and Active spells will be set to normal states.",
        actionText: "Reset",
        action: promotAction
      });
      page.update();
    };
  };

  function _sortAllSpells(button) {
    var options = helper.makeObject(button.dataset.spellControlOptions);
    var spellBook = helper.getClosest(button, ".js-spell-book");
    var spellBookOptions = helper.makeObject(spellBook.dataset.spellBookOptions);
    var sort = function() {
      var spellBook = helper.getObject({
        object: sheet.get(),
        path: spellBookOptions.path
      });
      var newSpellBook = helper.sortObject(spellBook, "name");
      helper.setObject({
        object: sheet.get(),
        path: spellBookOptions.path,
        newValue: newSpellBook
      });
    };
    var promotAction = function() {
      sort();
      clear();
      render();
      sheet.store();
      snack.render({
        message: "All level " + spellBookOptions.level + " spells alphabetically sorted."
      });
    };
    if (_get_spellBookCount(spellBookOptions.level)) {
      prompt.render({
        heading: "Sort level " + spellBookOptions.level + " spells",
        message: "Sort all level " + spellBookOptions.level + " spells in alphabetical order?",
        actionText: "Sort",
        action: promotAction
      });
      page.update();
    };
  };

  function _update_stateSpellEditMode(button) {
    var options = helper.makeObject(button.dataset.spellControlOptions);
    var spellBook = helper.getClosest(button, ".js-spell-book");
    var spellBookOptions = helper.makeObject(spellBook.dataset.spellBookOptions);
    if (_get_spellBookCount(spellBookOptions.level) > 0) {
      _spellState.set(spellBookOptions.level, options.state);
      _render_stateSpellControl(button);
      _render_stateSpellBook(spellBook, spellBookOptions.level);
      _render_stateSpellBookItem(spellBook, spellBookOptions.level);
    } else {
      _spellState.set(spellBookOptions.level, null);
      _render_stateSpellControl(button);
    };
  };

  function _get_spellBookCount(level) {
    return helper.getObject({
      object: sheet.get(),
      path: "spells.book[" + level + "]level_" + level
    }).length;
  };

  function render() {
    var all_spellBook = helper.getObject({
      object: sheet.get(),
      path: "spells.book"
    });
    var spellsToRender;
    // iterate over all objects keys to find spells then push those values to spellsToRender
    if (all_spellBook) {
      for (var i = 0; i < all_spellBook.length; i++) {
        // console.log(all_spellBook[i]);
        for (var j in all_spellBook[i]) {
          // console.log(all_spellBook[i][j]);
          spellsToRender = all_spellBook[i][j];
          _render_all_spells(spellsToRender, i);
        };
      };
    };
  };

  function _render_all_spells(array, level) {
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
    if (spellObject.state.prepared > 0) {
      for (var i = 0; i < spellObject.state.prepared; i++) {
        var preparedIcon = document.createElement("span");
        preparedIcon.setAttribute("class", "icon-radio-button-checked js-spell-mark-checked");
        spellMarks.insertBefore(preparedIcon, spellMarks.firstChild);
      };
    };
    if (spellObject.state.cast > 0) {
      var all_check = spellMarks.querySelectorAll(".icon-radio-button-checked");
      for (var j = 0; j < spellObject.state.cast; j++) {
        if (all_check[j]) {
          helper.toggleClass(all_check[j], "icon-radio-button-checked");
          helper.toggleClass(all_check[j], "icon-radio-button-unchecked");
          helper.toggleClass(all_check[j], "js-spell-mark-checked");
          helper.toggleClass(all_check[j], "js-spell-mark-unchecked");
        };
      };
    };
    if (spellObject.state.active) {
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

  function _render_stateSpellBookItem(spellBook, level) {
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

  function _render_stateSpellBook(spellBook, level) {
    if (_spellState.get(level) == "remove") {
      helper.addClass(spellBook, "is-state-remove");
    } else {
      helper.removeClass(spellBook, "is-state-remove");
    };
  };

  function _render_stateSpellControl(button) {
    var spellBook = helper.getClosest(button, ".js-spell-book");
    var spellBookOptions = helper.makeObject(spellBook.dataset.spellBookOptions);
    var all_spellControl = spellBook.querySelectorAll(".js-spell-control");
    var _resetAllControl = function() {
      for (var i = 0; i < all_spellControl.length; i++) {
        if (all_spellControl[i].classList.contains("button-primary")) {
          helper.removeClass(all_spellControl[i], "button-primary");
          helper.addClass(all_spellControl[i], "button-secondary");
        };
        if (all_spellControl[i].classList.contains("is-live")) {
          helper.removeClass(all_spellControl[i], "is-live");
        };
      };
    };
    var _activateControl = function() {
      if (_spellState.get(spellBookOptions.level) == "remove") {
        helper.removeClass(button, "button-secondary");
        helper.addClass(button, "button-primary");
      } else if (_spellState.get(spellBookOptions.level) == null) {
        helper.addClass(button, "button-secondary");
        helper.removeClass(button, "button-primary");
      };
      if (_spellState.get(spellBookOptions.level) == "prepare" || _spellState.get(spellBookOptions.level) == "unprepare" || _spellState.get(spellBookOptions.level) == "cast" || _spellState.get(spellBookOptions.level) == "active") {
        helper.addClass(button, "is-live");
      } else if (_spellState.get(spellBookOptions.level) == null) {
        helper.removeClass(button, "is-live");
      };
    };
    if (_spellState.get(spellBookOptions.level) != null) {
      _resetAllControl();
      _activateControl();
    } else {
      _resetAllControl();
    };
  };

  function _reset_stateSpellControl(spellBook) {
    var spellBookOptions = helper.makeObject(spellBook.dataset.spellBookOptions);
    var all_spellControl = spellBook.querySelectorAll(".js-spell-control");
    if (_get_spellBookCount(spellBookOptions.level) == 0) {
      for (var i = 0; i < all_spellControl.length; i++) {
        if (all_spellControl[i].classList.contains("button-primary")) {
          helper.removeClass(all_spellControl[i], "button-primary");
          helper.addClass(all_spellControl[i], "button-secondary");
        };
        if (all_spellControl[i].classList.contains("is-live")) {
          helper.removeClass(all_spellControl[i], "is-live");
        };
      };
      _render_stateSpellBook(spellBook, spellBookOptions.level);
    };
  };

  // exposed methods
  return {
    clear: clear,
    bind: bind,
    render: render,
    update: _render_quickSpellControl,
    add: add
  };

})();
