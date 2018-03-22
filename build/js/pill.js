var pill = (function() {

  var _timer_onEnterAction = null;

  var _pillState = (function() {
    var pillState = {};
    var get = function(type) {
      return pillState[type];
    };
    var set = function(type, state) {
      if (pillState[type] == null || pillState[type] != state) {
        pillState[type] = state;
      } else {
        pillState[type] = null;
      };
      // console.log("states:", type, pillState);
    };
    // exposed methods
    return {
      set: set,
      get: get
    };
  })();

  function bind() {
    _bind_all_pillBlockField();
    _bind_all_pillBlockAdd();
    _bind_all_pillControl();
  };

  function _bind_all_pillBlockField(pillBlockField) {
    if (pillBlockField) {
      _bind_pillBlockField(pillBlockField);
    } else {
      var all_pillBlockField = helper.eA(".js-pill-block-field");
      for (var i = 0; i < all_pillBlockField.length; i++) {
        _bind_pillBlockField(all_pillBlockField[i]);
      };
    };
  };

  function _bind_pillBlockField(pillBlockField) {
    pillBlockField.addEventListener("keypress", function(event) {
      if (event.keyCode == 13) {
        clearTimeout(_timer_onEnterAction);
        _timer_onEnterAction = setTimeout(_onEnterAction, 100, this, event);
      };
    }, false);
  };

  function _bind_all_pillBlockAdd(pillBlockAdd) {
    if (pillBlockAdd) {
      _bind_pillBlockAdd(pillBlockAdd);
    } else {
      var all_pillBlockAdd = helper.eA(".js-pill-block-add");
      for (var i = 0; i < all_pillBlockAdd.length; i++) {
        _bind_pillBlockAdd(all_pillBlockAdd[i]);
      };
    };
  };

  function _bind_pillBlockAdd(pillBlockAdd) {
    pillBlockAdd.addEventListener("click", function(event) {
      var pillBlock = helper.getClosest(this, ".js-pill-block");
      var all_pillBlockField = pillBlock.querySelector(".js-pill-block-field");
      clearTimeout(_timer_onEnterAction);
      _timer_onEnterAction = setTimeout(_onEnterAction, 100, all_pillBlockField, event);
    }, false);
  };

  function _bind_all_pillControl() {
    var all_pillControl = helper.eA(".js-pill-control");
    for (var i = 0; i < all_pillControl.length; i++) {
      all_pillControl[i].addEventListener("click", function() {
        _pillControl(this);
      }, false);
    };
  };

  function _onEnterAction(input, event) {
    add({
      input: input
    });
    sheet.store();
  };

  function _get_pillCount(type) {
    var paths = {
      abilities: "statistics.abilities.all",
      feats: "statistics.feats.all",
      traits: "statistics.traits.all",
      languages: "statistics.languages.all"
    };
    return helper.getObject({
      object: sheet.get(),
      path: paths[type]
    }).length;
  };

  function _pillControl(button) {
    var options = helper.makeObject(button.dataset.pillControlOptions);
    if (options.action == "changeState") {
      _pillMode(button);
      // } else if (options.action == "reset") {
      //   _resetAllSpells(button);
    } else if (options.action == "sort") {
      _sortAllPills(button);
    };
  };

  function _pillMode(button) {
    var options = helper.makeObject(button.dataset.pillControlOptions);
    var pillBlock = helper.getClosest(button, ".js-pill-block");
    var pillBlockOptions = helper.makeObject(pillBlock.dataset.pillBlockOptions);
    if (_get_pillCount(pillBlockOptions.type) > 0) {
      _update_pillState(button);
      _update_pillControl(button);
      _update_pillItem(button);
      _update_pillBlockArea(button);
    } else {
      _pillState.set(options.type, null);
      _update_pillControl(button);
      _reset_pillControl(pillBlock);
    };
  };

  function _sortAllPills(button) {
    var options = helper.makeObject(button.dataset.pillControlOptions);
    var pillBlock = helper.getClosest(button, ".js-pill-block");
    var pillBlockOptions = helper.makeObject(pillBlock.dataset.pillBlockOptions);
    var sort = function() {
      var all_pill = helper.getObject({
        object: sheet.get(),
        path: pillBlockOptions.path
      });
      var newSpellBook = helper.sortObject(all_pill, "name");
      helper.setObject({
        object: sheet.get(),
        path: pillBlockOptions.path,
        newValue: newSpellBook
      });
    };
    var promotAction = function() {
      sort();
      clear(pillBlock);
      render(pillBlock);
      sheet.store();
      snack.render({
        message: "All " + helper.capFirstLetter(pillBlockOptions.type) + " alphabetically sorted."
      });
    };
    if (_get_pillCount(pillBlockOptions.type)) {
      prompt.render({
        heading: "Sort " + helper.capFirstLetter(pillBlockOptions.type),
        message: "Sort all " + pillBlockOptions.type + " in alphabetical order?",
        actionText: "Sort",
        action: promotAction
      });
      page.update();
    };
  };

  function update(button) {
    _render_pillControl(button);
  };

  function _update_pillState(button) {
    var options = helper.makeObject(button.dataset.pillControlOptions);
    _pillState.set(options.type, options.state);
  };

  function _update_pillControl(button) {
    var options = helper.makeObject(button.dataset.pillControlOptions);
    var pillBlock = helper.getClosest(button, ".js-pill-block");
    var all_pillControl = pillBlock.querySelectorAll(".js-pill-control");
    var _resetAllControl = function() {
      all_pillControl.forEach(function(arrayItem) {
        if (arrayItem.classList.contains("button-primary")) {
          helper.removeClass(arrayItem, "button-primary");
        };
        if (arrayItem.classList.contains("button-secondary")) {
          helper.removeClass(arrayItem, "button-secondary");
        };
      });
    };
    var _activateControl = function() {
      if (_pillState.get(options.type) == "remove") {
        helper.addClass(button, "button-primary");
      } else if (_pillState.get(options.type) == null) {
        helper.removeClass(button, "button-primary");
      };
    };
    if (_pillState.get(options.type) != null) {
      _resetAllControl();
      _activateControl();
    } else {
      _resetAllControl();
    };
  };

  function _update_pillItem(button) {
    var pillBlock = helper.getClosest(button, ".js-pill-block");
    var pillBlockOptions = helper.makeObject(pillBlock.dataset.pillBlockOptions);
    var all_pillItem = pillBlock.querySelectorAll(".js-pill-item");
    var _resetAllPill = function() {
      all_pillItem.forEach(function(arrayItem) {
        if (arrayItem.classList.contains("button-primary")) {
          helper.removeClass(arrayItem, "button-primary");
        };
      });
    };
    var _activateAllPill = function() {
      all_pillItem.forEach(function(arrayItem) {
        helper.addClass(arrayItem, "button-primary");
      });
    };
    if (_pillState.get(pillBlockOptions.type) == "remove") {
      _activateAllPill();
    } else {
      _resetAllPill();
    };
  };

  function _update_pillBlockArea(button) {
    var pillBlock = helper.getClosest(button, ".js-pill-block");
    var pillBlockOptions = helper.makeObject(pillBlock.dataset.pillBlockOptions);
    var pillBlockArea = pillBlock.querySelector(".js-pill-block-area");
    var _resetPillArea = function() {
      helper.removeClass(pillBlockArea, "is-state-remove");
    };
    var _activatePillArea = function() {
      helper.addClass(pillBlockArea, "is-state-remove");
    };
    if (_pillState.get(pillBlockOptions.type) == "remove") {
      _activatePillArea();
    } else {
      _resetPillArea();
    };
  };

  function _reset_pillControl(pillBlock) {
    var all_pillControl = pillBlock.querySelectorAll(".js-pill-control");
    for (var i = 0; i < all_pillControl.length; i++) {
      helper.removeClass(all_pillControl[i], "button-primary");
    };
  };

  function add(options) {
    var defaultOptions = {
      object: null,
      input: null
    };
    if (options) {
      defaultOptions = helper.applyOptions(defaultOptions, options);
    };
    if (defaultOptions.input != null) {
      var pillName;
      var dataIndex;
      if (defaultOptions.object != null) {
        pillName = defaultOptions.object.name;
        dataIndex = defaultOptions.object.index;
      } else {
        pillName = defaultOptions.input.value;
        dataIndex = false;
      };
      if (pillName != "") {
        var pillBlock = helper.getClosest(defaultOptions.input, ".js-pill-block");
        var pillBlockArea = pillBlock.querySelector(".js-pill-block-area");
        var pillBlockOptions = helper.makeObject(pillBlock.dataset.pillBlockOptions);
        var newIndex = _get_pillCount(pillBlockOptions.type);
        var newPillObject;
        newPillObject = new _create_pillObject({
          name: pillName,
          index: dataIndex
        });
        if (newPillObject != undefined) {
          var newIndex = _get_pillCount(pillBlockOptions.type);
          helper.setObject({
            object: sheet.get(),
            path: pillBlockOptions.path + "[" + newIndex + "]",
            newValue: newPillObject
          });
          defaultOptions.input.value = "";
          _render_pillItem({
            pillBlockArea: pillBlockArea,
            pillObject: newPillObject,
            index: newIndex,
            type: pillBlockOptions.type,
            newPill: true
          });
          _render_pillPlaceholder(pillBlockOptions.type);
        };
      };
    };
  };

  function clear(pillBlock) {
    if (pillBlock) {
      var pillBlockArea = pillBlock.querySelector(".js-pill-block-area");
      var pillBlockOptions = helper.makeObject(pillBlock.dataset.pillBlockOptions);
      while (pillBlockArea.lastChild) {
        pillBlockArea.removeChild(pillBlockArea.lastChild);
        _render_pillPlaceholder(pillBlockOptions.type);
      };
    } else {
      var all_pillBlock = helper.eA(".js-pill-block");
      for (var i = 0; i < all_pillBlock.length; i++) {
        var pillBlockArea = all_pillBlock[i].querySelector(".js-pill-block-area");
        var pillBlockOptions = helper.makeObject(all_pillBlock[i].dataset.pillBlockOptions);
        while (pillBlockArea.lastChild) {
          pillBlockArea.removeChild(pillBlockArea.lastChild);
          _render_pillPlaceholder(pillBlockOptions.type);
        };
      };
    };
  };

  function _bind_pillButton(button) {
    button.addEventListener("click", function() {
      _pillButton(this);
    }, false);
  };

  function _pillButton(button) {
    var options = helper.makeObject(button.dataset.pillButtonOptions);
    var pillBlock = helper.getClosest(button, ".js-pill-block");
    var pillBlockOptions = helper.makeObject(pillBlock.dataset.pillBlockOptions);
    if (_pillState.get(pillBlockOptions.type) == null) {
      _render_pillControl(button);
    } else if (_pillState.get(pillBlockOptions.type) == "remove") {
      _update_pillObjects(button);
    };
    if (_get_pillCount(pillBlockOptions.type) <= 0) {
      _pillState.set(pillBlockOptions.type, null);
      _reset_pillControl(pillBlock);
      _update_pillBlockArea(pillBlock);
      _render_pillPlaceholder(pillBlockOptions.type);
    };
  };

  function _update_pillObjects(button) {
    var options = helper.makeObject(button.dataset.pillButtonOptions);
    var pillBlock = helper.getClosest(button, ".js-pill-block");
    var pillBlockOptions = helper.makeObject(pillBlock.dataset.pillBlockOptions);
    if (_pillState.get(pillBlockOptions.type) == "remove") {
      var pillObject = JSON.parse(JSON.stringify(helper.getObject({
        object: sheet.get(),
        path: pillBlockOptions.path + "[" + options.index + "]"
      })));
      var snackMessage = {
        abilities: "Ability " + helper.truncate(pillObject.name, 40, true) + " removed.",
        feats: "Feat " + helper.truncate(pillObject.name, 40, true) + " removed.",
        traits: "Trait " + helper.truncate(pillObject.name, 40, true) + " removed.",
        languages: "Language " + helper.truncate(pillObject.name, 40, true) + " removed."
      };
      _store_lastRemovedPill({
        type: pillBlockOptions.type,
        path: pillBlockOptions.path,
        index: options.index,
        object: pillObject
      });
      helper.getObject({
        object: sheet.get(),
        path: pillBlockOptions.path
      }).splice(options.index, 1);
      snack.render({
        message: snackMessage[pillBlockOptions.type],
        button: "Undo",
        action: _restore_lastRemovedSpell,
        destroyDelay: 8000
      });
      sheet.store();
      clear(pillBlock);
      render(pillBlock);
    };
  };

  function _store_lastRemovedPill(options) {
    var defaultOptions = {
      type: null,
      path: null,
      index: null,
      object: null
    };
    if (options) {
      defaultOptions = helper.applyOptions(defaultOptions, options);
    };
    var object = {
      type: defaultOptions.type,
      path: defaultOptions.path,
      index: defaultOptions.index,
      object: defaultOptions.object
    };
    helper.store("lastRemovedPill", JSON.stringify(object));
  };

  function _restore_lastRemovedSpell() {
    var undoData = JSON.parse(helper.read("lastRemovedPill"));
    _restore_pillObject({
      type: undoData.type,
      path: undoData.path,
      index: undoData.index,
      object: undoData.object
    });
    _remove_lastRemovedPill();
  };

  function _restore_pillObject(options) {
    var defaultOptions = {
      type: null,
      path: null,
      index: null,
      object: null
    };
    if (options) {
      defaultOptions = helper.applyOptions(defaultOptions, options);
    };
    helper.getObject({
      object: sheet.get(),
      path: defaultOptions.path
    }).splice(defaultOptions.index, 0, defaultOptions.object);
    clear(helper.e(".js-pill-block-" + defaultOptions.type));
    render(helper.e(".js-pill-block-" + defaultOptions.type));
    sheet.store();
  };

  function _remove_lastRemovedPill() {
    helper.remove("lastRemovedPill");
  };

  function _render_pillControl(button, force) {
    var options = helper.makeObject(button.dataset.pillButtonOptions);
    var pillBlock = helper.getClosest(button, ".js-pill-block");
    var pillBlockOptions = helper.makeObject(pillBlock.dataset.pillBlockOptions);

    var pillObject = helper.getObject({
      object: sheet.get(),
      path: pillBlockOptions.path + "[" + options.index + "]"
    });

    var tempPillObject = JSON.parse(JSON.stringify(pillObject));

    var _store_data = function(pillControl) {
      tempPillObject.note = pillControl.querySelector(".js-pill-control-textarea-note").innerHTML;
      if (tempPillObject.note == " " || tempPillObject.note == "&nbsp;" || tempPillObject.note == "<br/>" || tempPillObject.note == "<br>") {
        tempPillObject.note = "";
      };
      tempPillObject.name = pillControl.querySelector(".js-pill-control-input-name").value;
      helper.setObject({
        object: sheet.get(),
        path: pillBlockOptions.path + "[" + options.index + "]",
        newValue: tempPillObject
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

    var _create_pillModal = function() {
      var pillControl = document.createElement("div");
      pillControl.setAttribute("class", "m-pill-control js-pill-control");

      var _create_controls = function() {
        var renameInput = document.createElement("input");
        renameInput.setAttribute("class", "js-pill-control-input-name");
        renameInput.setAttribute("type", "text");
        renameInput.setAttribute("tabindex", "1");
        renameInput.value = tempPillObject.name;

        var noteTextarea = document.createElement("div");
        noteTextarea.setAttribute("class", "m-textarea-block-field textarea textarea-large u-full-width js-pill-control-textarea-note");
        noteTextarea.setAttribute("contenteditable", "true");
        noteTextarea.setAttribute("tabindex", "1");
        noteTextarea.innerHTML = tempPillObject.note;
        noteTextarea.addEventListener("paste", function(event) {
          helper.pasteStrip(event);
        });

        pillControl.appendChild(_create_editBox({
          title: "Rename",
          guides: true,
          boxSize: "m-edit-box-item-100",
          content: [renameInput]
        }));

        var snackTitle = {
          abilities: "Abilities notes",
          feats: "Feats notes",
          traits: "Traits notes",
          languages: "Languages notes"
        };

        pillControl.appendChild(_create_editBox({
          title: "Notes",
          guides: true,
          boxSize: "m-edit-box-item-100",
          content: [noteTextarea]
        }));

      };

      var _create_dataBlock = function() {
        var dataObject = data.get({
          type: pillBlockOptions.type,
          index: tempPillObject.index
        });
        var _featsData = function() {
          if (dataObject.description.base != "") {
            var para = document.createElement("p");
            para.textContent = dataObject.description.base;
            pillControl.appendChild(_create_editBox({
              textOnly: true,
              guides: true,
              content: [para],
              boxSize: "m-edit-box-item-100"
            }));
          };

          if (dataObject.type.string != "") {
            var para = document.createElement("p");
            para.textContent = dataObject.type.string;
            pillControl.appendChild(_create_editBox({
              title: "Type",
              textOnly: true,
              guides: true,
              content: [para],
              boxSize: "m-edit-box-item-100"
            }));
          };

          if (dataObject.prerequisites.string != "") {
            var para = document.createElement("p");
            para.textContent = dataObject.prerequisites.string;
            pillControl.appendChild(_create_editBox({
              title: "Prerequisites",
              textOnly: true,
              guides: true,
              content: [para],
              boxSize: "m-edit-box-item-100"
            }));
          };

          if (dataObject.description.benefit != "") {
            var para = document.createElement("p");
            para.textContent = dataObject.description.benefit;
            pillControl.appendChild(_create_editBox({
              title: "Benefit",
              textOnly: true,
              guides: true,
              content: [para],
              boxSize: "m-edit-box-item-100"
            }));
          };

          if (dataObject.description.normal != "") {
            var para = document.createElement("p");
            para.textContent = dataObject.description.normal;
            pillControl.appendChild(_create_editBox({
              title: "Normal",
              textOnly: true,
              guides: true,
              content: [para],
              boxSize: "m-edit-box-item-100"
            }));
          };

          if (dataObject.description.goal != "") {
            var para = document.createElement("p");
            para.textContent = dataObject.description.goal;
            pillControl.appendChild(_create_editBox({
              title: "Goal",
              textOnly: true,
              guides: true,
              content: [para],
              boxSize: "m-edit-box-item-100"
            }));
          };

          if (dataObject.description.completion != "") {
            var para = document.createElement("p");
            para.textContent = dataObject.description.completion;
            pillControl.appendChild(_create_editBox({
              title: "Completion benefit",
              textOnly: true,
              guides: true,
              content: [para],
              boxSize: "m-edit-box-item-100"
            }));
          };

          if (dataObject.description.special != "") {
            var para = document.createElement("p");
            para.textContent = dataObject.description.special;
            pillControl.appendChild(_create_editBox({
              title: "Special",
              textOnly: true,
              guides: true,
              content: [para],
              boxSize: "m-edit-box-item-100"
            }));
          };

          if (dataObject.description.note != "") {
            var para = document.createElement("p");
            para.textContent = dataObject.description.note;
            pillControl.appendChild(_create_editBox({
              title: "Note",
              textOnly: true,
              guides: true,
              content: [para],
              boxSize: "m-edit-box-item-100"
            }));
          };

          if (dataObject.description.suggested_traits != "") {
            var para = document.createElement("p");
            para.textContent = dataObject.description.suggested_traits;
            pillControl.appendChild(_create_editBox({
              title: "Suggested traits",
              textOnly: true,
              guides: true,
              content: [para],
              boxSize: "m-edit-box-item-100"
            }));
          };

          if (dataObject.source != "") {
            var para = document.createElement("p");
            para.textContent = dataObject.source;
            pillControl.appendChild(_create_editBox({
              title: "Source",
              textOnly: true,
              guides: true,
              content: [para],
              boxSize: "m-edit-box-item-100"
            }));
          };
        };
        var _traitsData = function() {
          if (dataObject.type != "") {
            var para = document.createElement("p");
            para.textContent = dataObject.type;
            pillControl.appendChild(_create_editBox({
              title: "Type",
              textOnly: true,
              guides: true,
              content: [para],
              boxSize: "m-edit-box-item-100"
            }));
          };

          if (dataObject.category != "") {
            var para = document.createElement("p");
            para.textContent = dataObject.category;
            pillControl.appendChild(_create_editBox({
              title: "Category",
              textOnly: true,
              guides: true,
              content: [para],
              boxSize: "m-edit-box-item-100"
            }));
          };

          if (dataObject.requirement.alignment != "" || dataObject.requirement.class != "" || dataObject.requirement.faith != "" || dataObject.requirement.other != "" || dataObject.requirement.place != "" || dataObject.requirement.race != "" || dataObject.requirement.subrace != "") {
            var para = document.createElement("p");
            var string = "";
            for (var key in dataObject.requirement) {
              if (dataObject.requirement[key] != "") {
                string = string + helper.capFirstLetter(key) + ": " + helper.capFirstLetter(dataObject.requirement[key]) + ", ";
              };
            };
            string = string.replace(/,\s*$/, "");
            para.textContent = string;
            pillControl.appendChild(_create_editBox({
              title: "Requirement",
              textOnly: true,
              guides: true,
              content: [para],
              boxSize: "m-edit-box-item-100"
            }));
          };

          if (dataObject.description.base != "") {
            var para = document.createElement("p");
            para.textContent = dataObject.description.base;
            pillControl.appendChild(_create_editBox({
              title: "Description",
              textOnly: true,
              guides: true,
              content: [para],
              boxSize: "m-edit-box-item-100"
            }));
          };

          if (dataObject.source != "") {
            var para = document.createElement("p");
            para.textContent = dataObject.source;
            pillControl.appendChild(_create_editBox({
              title: "Source",
              textOnly: true,
              guides: true,
              content: [para],
              boxSize: "m-edit-box-item-100"
            }));
          };
        };
        var _languagesData = function() {

          if (dataObject.race != "") {
            var para = document.createElement("p");
            para.textContent = dataObject.race;
            pillControl.appendChild(_create_editBox({
              title: "Races",
              textOnly: true,
              guides: true,
              content: [para],
              boxSize: "m-edit-box-item-100"
            }));
          };
        };

        if (pillBlockOptions.type == "feats") {
          _featsData();
        } else if (pillBlockOptions.type == "traits") {
          _traitsData();
        } else if (pillBlockOptions.type == "languages") {
          _languagesData();
        };

      };

      if ("index" in tempPillObject && (tempPillObject.index) || typeof tempPillObject.index == "number" && tempPillObject.index >= 0) {
        _create_dataBlock();
      };

      _create_controls();
      return pillControl;
    };

    if (_pillState.get(pillBlockOptions.type) == null || force) {
      var options = helper.makeObject(button.dataset.pillButtonOptions);
      var pillBlock = helper.getClosest(button, ".js-pill-block");
      var pillBlockOptions = helper.makeObject(pillBlock.dataset.pillBlockOptions);
      var modalContent = _create_pillModal();
      var modalAction = function() {
        _store_data(this);
        clear();
        render();
        sheet.store();
        display.clear();
        display.render();
      }.bind(modalContent);

      modal.render({
        heading: pillObject.name,
        content: modalContent,
        action: modalAction,
        actionText: "Save",
        size: "large"
      });
      page.update();
    };
  };

  function render(pillBlock) {
    if (pillBlock) {
      _render_pillBlock(pillBlock);
    } else {
      var all_pillBlock = helper.eA(".js-pill-block");
      for (var i = 0; i < all_pillBlock.length; i++) {
        _render_pillBlock(all_pillBlock[i]);
      };
    };
  };

  function _render_pillBlock(pillBlock) {
    var options = helper.makeObject(pillBlock.dataset.pillBlockOptions);
    var pillBlockArea = pillBlock.querySelector(".js-pill-block-area");
    var all_pillObjects = helper.getObject({
      object: sheet.get(),
      path: options.path
    });
    all_pillObjects.forEach(function(arrayItem, index) {
      _render_pillItem({
        pillBlockArea: pillBlockArea,
        pillObject: arrayItem,
        index: index,
        type: options.type
      });
    });
  };

  function _render_pillItem(options) {
    var defaultOptions = {
      pillBlockArea: null,
      pillObject: null,
      index: null,
      type: null,
      newPill: false
    };
    if (options) {
      defaultOptions = helper.applyOptions(defaultOptions, options);
    };
    var pillButton = _create_pillButton({
      name: defaultOptions.pillObject.name,
      index: defaultOptions.index,
      type: defaultOptions.type,
      newPill: defaultOptions.newPill
    });
    _bind_pillButton(pillButton);
    defaultOptions.pillBlockArea.appendChild(pillButton);
    _render_pillPlaceholder(defaultOptions.type);
  };

  function _create_pillButton(options) {
    var defaultOptions = {
      name: null,
      index: null,
      type: null,
      newPill: false
    };
    if (options) {
      defaultOptions = helper.applyOptions(defaultOptions, options);
    };
    var pillitem = document.createElement("button");
    pillitem.setAttribute("class", "m-pill-item button button-medium js-pill-item");
    pillitem.setAttribute("type", "button");
    pillitem.setAttribute("tabindex", "1");
    pillitem.setAttribute("data-pill-button-options", "index:#" + defaultOptions.index);
    var pillitemRemove = document.createElement("span");
    pillitemRemove.setAttribute("class", "m-pill-item-remove");
    var pillitemRemoveIcon = document.createElement("span");
    pillitemRemoveIcon.setAttribute("class", "icon-close");
    pillitemRemove.appendChild(pillitemRemoveIcon);

    if (_pillState.get(options.type) == "remove") {
      helper.addClass(pillitem, "button-primary");
    };
    if (defaultOptions.newPill) {
      var pillFlash = document.createElement("span");
      pillFlash.setAttribute("class", "m-pill-flash");
      pillFlash.addEventListener("animationend", function(event, elapsed) {
        this.remove();
      }.bind(pillFlash), false);
      pillitem.appendChild(pillFlash);
    };
    var pillItemName = document.createElement("span");
    pillItemName.setAttribute("class", "m-pill-item-name button-text");
    pillItemName.textContent = defaultOptions.name;
    pillitem.appendChild(pillItemName);
    pillitem.appendChild(pillitemRemove);
    return pillitem;
  };

  function _create_pillObject(options) {
    var defaultOptions = {
      name: "",
      note: "",
      index: false
    };
    if (options) {
      defaultOptions = helper.applyOptions(defaultOptions, options);
    };
    return {
      name: defaultOptions.name,
      note: defaultOptions.note,
      index: defaultOptions.index
    };
  };

  function _render_pillPlaceholder(type) {
    var placeholder = helper.e(".js-pill-block-placeholder-" + type);
    if (_get_pillCount(type) > 0) {
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
    add: add,
    update: update
  };

})();
