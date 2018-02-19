var pill = (function() {

  var _timer_onEnterAction = null;

  var _pillState = (function() {
    var pillState = {
      feats: null
    };
    var get = function(type) {
      return pillState[type];
    };
    var set = function(type, state) {
      if (pillState[type] == null || pillState[type] != state) {
        pillState[type] = state;
      } else {
        pillState[type] = null;
      };
      console.log(type, pillState[type]);
    };
    // exposed methods
    return {
      set: set,
      get: get
    };
  })();

  function _create_pillObecjtState() {
    return {
      state: null
    };
  };

  function bind() {
    _bind_all_pillBlock();
    _bind_all_pillControl();
  };

  function _bind_all_pillControl() {
    var all_pillControl = helper.eA(".js-pill-control");
    for (var i = 0; i < all_pillControl.length; i++) {
      all_pillControl[i].addEventListener("click", function() {
        _pillControl(this);
      }, false);
    };
  };

  function _bind_all_pillBlock(pillBlock) {
    if (pillBlock) {
      _bind_pillBlock(pillBlock);
    } else {
      var all_pillBlock = helper.eA(".js-pill-block");
      for (var i = 0; i < all_pillBlock.length; i++) {
        _bind_pillBlock(all_pillBlock[i]);
      };
    };
  };

  function _bind_pillBlock(pillBlock) {
    var pillBlockField = pillBlock.querySelector(".js-pill-block-field");
    pillBlockField.addEventListener("keypress", function(event) {
      if (event.keyCode == 13) {
        clearTimeout(_timer_onEnterAction);
        _timer_onEnterAction = setTimeout(_onEnterAction, 100, this, event);
      };
    }, false);
  };

  function _onEnterAction(input, event) {
    add({
      input: input
    });
    sheet.store();
  };

  function _get_pillCount(type) {
    if (type == "feats") {
      return helper.getObject({
        object: sheet.get(),
        path: "statistics.abilities.feats.all"
      }).length;
    };
  };

  function _pillControl(button) {
    var options = helper.makeObject(button.dataset.pillControlOptions);
    if (options.action == "changeState") {
      _pillMode(button);
    } else if (options.action == "reset") {
      // _resetAllSpells(button);
    } else if (options.action == "sort") {
      // _sortAllSpells(button);
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
    var spellBlockOptions = helper.makeObject(pillBlock.dataset.spellBlockOptions);
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
      var pillBlock = helper.getClosest(defaultOptions.input, ".js-pill-block");
      var pillBlockArea = pillBlock.querySelector(".js-pill-block-area");
      var pillBlockOptions = helper.makeObject(pillBlock.dataset.pillBlockOptions);
      var newIndex = _get_pillCount(pillBlockOptions.type);
      var newPillObject;
      if (defaultOptions.object != null) {
        newPillObject = new _create_pillObject({
          name: defaultOptions.object.name,
          index: defaultOptions.object.index
        });
      } else {
        newPillObject = _create_pillObject({
          name: defaultOptions.input.value,
          index: false
        });
      };
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
      };
    };
  };

  function clear(pillBlock) {
    if (pillBlock) {
      var pillBlockArea = pillBlock.querySelector(".js-pill-block-area");
      while (pillBlockArea.lastChild) {
        pillBlockArea.removeChild(pillBlockArea.lastChild);
      };
    } else {
      var all_pillBlockArea = helper.eA(".js-pill-block-area");
      for (var i = 0; i < all_pillBlockArea.length; i++) {
        while (all_pillBlockArea[i].lastChild) {
          all_pillBlockArea[i].removeChild(all_pillBlockArea[i].lastChild);
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
    _update_pillObjects(button);
    _render_pillControl(button);
    if (_get_pillCount(pillBlockOptions.type) <= 0) {
      _pillState.set(pillBlockOptions.type, null);
      _reset_pillControl(pillBlock);
      _update_pillBlockArea(pillBlock);
    };
  };

  function _update_pillObjects(button) {
    var options = helper.makeObject(button.dataset.pillButtonOptions);
    var pillBlock = helper.getClosest(button, ".js-pill-block");
    var pillBlockOptions = helper.makeObject(pillBlock.dataset.pillBlockOptions);
    // var all_pillObjects = helper.getObject({
    //   object: sheet.get(),
    //   path: pillBlockOptions.path
    // });
    if (_pillState.get(pillBlockOptions.type) == null) {
      console.log("null", options.index);

      var pillObject = helper.getObject({
        object: sheet.get(),
        path: pillBlockOptions.path + "[" + options.index + "]"
      });
      console.log(data.get({
        type: pillBlockOptions.type,
        index: pillObject.index
      }));

    } else if (_pillState.get(pillBlockOptions.type) == "remove") {
      console.log("remove", options.index);

      var pillObject = JSON.parse(JSON.stringify(helper.getObject({
        object: sheet.get(),
        path: pillBlockOptions.path + "[" + options.index + "]"
      })));

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

      console.log(pillObject);

      snack.render({
        message: helper.truncate(pillObject.name, 40, true) + " removed.",
        button: "Undo",
        action: _restore_lastRemovedSpell,
        destroyDelay: 9999998000
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

    var _store_data = function(spellControl) {
      tempPillObject.note = spellControl.querySelector(".js-pill-control-textarea-note").innerHTML;
      if (tempPillObject.note == " " || tempPillObject.note == "&nbsp;" || tempPillObject.note == "<br/>" || tempPillObject.note == "<br>") {
        tempPillObject.note = "";
      };
      tempPillObject.name = spellControl.querySelector(".js-pill-control-input-name").value;
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
          boxSize: "m-edit-box-item-max",
          content: [renameInput]
        }));

        pillControl.appendChild(_create_editBox({
          title: "Feat notes",
          guides: true,
          boxSize: "m-edit-box-item-max",
          content: [noteTextarea]
        }));
      };

      var _create_dataBlock = function() {

        var dataObject = data.get({
          type: pillBlockOptions.type,
          index: tempPillObject.index
        });

        if (dataObject.description.base != "") {
          var para = document.createElement("p");
          para.textContent = dataObject.description.base;
          pillControl.appendChild(_create_editBox({
            textOnly: true,
            guides: true,
            content: [para],
            boxSize: "m-edit-box-item-max"
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
            boxSize: "m-edit-box-item-max"
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
            boxSize: "m-edit-box-item-max"
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
            boxSize: "m-edit-box-item-max"
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
            boxSize: "m-edit-box-item-max"
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
            boxSize: "m-edit-box-item-max"
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
            boxSize: "m-edit-box-item-max"
          }));
        };

      };

      if ("index" in tempPillObject && (tempPillObject.index) || typeof tempPillObject.index == "number" && tempPillObject.index >= 0) {
        _create_dataBlock();
      };

      _create_controls();
      return pillControl;
    };

    if (_pillState.get(pillBlockOptions.type) == null || force) {
      var modalContent = _create_pillModal();
      var modalAction = function() {
        _store_data(this);
        sheet.store();
        clear(helper.e(".js-pill-block-" + pillBlockOptions.type));
        render(helper.e(".js-pill-block-" + pillBlockOptions.type));
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
        var state = _create_pillObecjtState(all_pillBlock[i]);
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

  // exposed methods
  return {
    clear: clear,
    bind: bind,
    render: render,
    add: add
  };

})();