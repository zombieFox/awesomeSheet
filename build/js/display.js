var display = (function() {

  function bind() {
    _bind_fab();
  };

  function _bind_fab() {
    var fabButton = helper.e(".js-fab-button");
    fabButton.addEventListener("click", function() {
      totalBlock.update();
      clear();
      render();
      toggle();
      themeColor.update();
    }, false);
  };

  function update() {
    _update_displayState();
    _update_displayPlaceholder();
  };

  function _update_displayState() {
    var quickNav = helper.e(".js-quick-nav");
    var fab = helper.e(".js-fab");
    var fabButton = helper.e(".js-fab-button");
    var fabIcon = helper.e(".js-fab-icon");
    var all_section = helper.eA(".js-section");
    var anySectionDisplay = false;
    var allSectionDisplay = 0;
    for (var i = 0; i < all_section.length; i++) {
      if (all_section[i].dataset.displayMode == "true") {
        anySectionDisplay = true;
        allSectionDisplay ++;
      };
    };
    if (anySectionDisplay) {
      helper.addClass(fabIcon, "icon-edit");
      helper.removeClass(fabIcon, "icon-reader-mode");
      helper.removeClass(fabButton, "button-primary");
      helper.addClass(fabButton, "button-secondary");
      helper.addClass(quickNav, "is-display-mode");
      themeColor.update();
    } else {
      fab.dataset.displayMode = "false";
      helper.removeClass(fabIcon, "icon-edit");
      helper.addClass(fabIcon, "icon-reader-mode");
      helper.addClass(fabButton, "button-primary");
      helper.removeClass(fabButton, "button-secondary");
      helper.removeClass(quickNav, "is-display-mode");
    };
    if (allSectionDisplay == all_section.length) {
      fab.dataset.displayMode = "true";
      themeColor.update();
    } else {
      fab.dataset.displayMode = "false";
      helper.removeClass(fabIcon, "icon-edit");
      helper.addClass(fabIcon, "icon-reader-mode");
      helper.addClass(fabButton, "button-primary");
      helper.removeClass(fabButton, "button-secondary");
      helper.removeClass(quickNav, "is-display-mode");
      themeColor.update();
    };
  };

  function _toggle_singleSection(element, forceToggle) {
    var icon = element.querySelector(".js-card-toggle-icon");
    var section = helper.getClosest(element, ".js-section");
    var edit = section.querySelector(".js-edit");
    var all_display = section.querySelectorAll(".js-display");

    function _displayOn() {
      section.dataset.displayMode = "true";
      helper.addClass(section, "is-display-mode");
      helper.addClass(edit, "is-hidden");
      for (var i = 0; i < all_display.length; i++) {
        helper.removeClass(all_display[i], "is-hidden");
      };
      helper.addClass(icon, "icon-edit");
      helper.removeClass(icon, "icon-reader-mode");
    };

    function _displayOff() {
      section.dataset.displayMode = "false";
      helper.removeClass(section, "is-display-mode");
      helper.removeClass(edit, "is-hidden");
      for (var i = 0; i < all_display.length; i++) {
        helper.addClass(all_display[i], "is-hidden");
      };
      helper.removeClass(icon, "icon-edit");
      helper.addClass(icon, "icon-reader-mode");
    };

    if (forceToggle == true) {
      _displayOn();
    } else if(forceToggle == false) {
      _displayOff();
    } else {
      if (section.dataset.displayMode == "true") {
        _displayOff();
      } else if (section.dataset.displayMode == "false" || !section.dataset.displayMode) {
        _displayOn();
      };
    };

  };

  function _toggle_allSection() {
    var fab = helper.e(".js-fab");
    var all_section = helper.eA(".js-section");

    if (fab.dataset.displayMode == "true") {
      fab.dataset.displayMode = "false";
      for (var i = 0; i < all_section.length; i++) {
        _toggle_singleSection(all_section[i], false);
      };
    } else if (fab.dataset.displayMode == "false" || !fab.dataset.displayMode) {
      fab.dataset.displayMode = "true";
      for (var i = 0; i < all_section.length; i++) {
        _toggle_singleSection(all_section[i], true);
      };
    };

    update();
  };

  function toggle(section) {
    if (section) {
      _toggle_singleSection(section);
    } else {
      _toggle_allSection();
    };
  };

  function clear(section) {
    var _removeAllChildren = function(parent) {
      while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
      };
    };
    if (section) {
      var all_target = section.querySelectorAll(".js-display-block-target");
    } else {
      var all_target = helper.eA(".js-display-block-target");
    };
    for (var i = 0; i < all_target.length; i++) {
      var displayBlock = helper.getClosest(all_target[i], ".js-display-block");
      displayBlock.dataset.displayContent = false;
      _removeAllChildren(all_target[i]);
    };
  };

  function _get_all_spell(all_displayPath) {
    var all_node = [];
    for (var i = 0; i < all_displayPath.length; i++) {
      var bookPath = all_displayPath[i].split(".");
      var all_spells = sheet.getCharacter()[bookPath[0]][bookPath[1]][bookPath[2]]["level_" + bookPath[2]];
      if (all_spells.length == 0) {
        all_node.push(false);
      } else {
        for (var j = 0; j < all_spells.length; j++) {
          var spell = all_spells[j];
          all_node.push(_get_spell(spell, bookPath[2], j));
        };
      };
    };
    return all_node;
  };

  function _get_spell(spell, level, index) {
    var displayItem = document.createElement("li");
    displayItem.setAttribute("class", "m-display-list-item m-display-list-item-spell");
    var displayItemPrefix = document.createElement("span");
    displayItemPrefix.setAttribute("class", "m-display-list-item-spell-name");
    var spellName = document.createElement("span");
    spellName.textContent = spell.name;
    var displayItemValue = document.createElement("span");
    displayItemValue.setAttribute("class", "m-display-list-item-spell-count");
    displayItemPrefix.appendChild(spellName);
    displayItem.appendChild(displayItemPrefix);
    displayItem.appendChild(displayItemValue);
    displayItem.setAttribute("data-spell-level", level);
    displayItem.setAttribute("data-spell-count", index);
    // prepared
    if (spell.prepared > 0) {
      // var marks = document.createElement("span");
      for (var j = 0; j < spell.prepared; j++) {
        var preparedIcon = document.createElement("span");
        preparedIcon.setAttribute("class", "icon-radio-button-checked");
        displayItemValue.insertBefore(preparedIcon, displayItemValue.firstChild);
      };
    };
    // cast
    if (spell.cast > 0) {
      var all_check = displayItemValue.querySelectorAll(".icon-radio-button-checked");
      for (var j = 0; j < spell.cast; j++) {
        if (all_check[j]) {
          helper.toggleClass(all_check[j], "icon-radio-button-checked");
          helper.toggleClass(all_check[j], "icon-radio-button-unchecked");
        };
      };
    };
    // active
    if (spell.active) {
      var spellActive = document.createElement("span");
      spellActive.setAttribute("class", "m-display-list-item-spell-active");
      var activeIcon = document.createElement("span");
      activeIcon.setAttribute("class", "icon-play-arrow");
      spellActive.appendChild(activeIcon);
      spellName.insertBefore(spellActive, spellName.firstChild);
    };
    displayItem.addEventListener("click", function() {
      spells.update(helper.e(".js-spell-book-known-level-" + level).querySelectorAll(".js-spell-col")[index].querySelector(".js-spell"), true);
    }, false);
    return displayItem;
  };

  function _get_all_skill(all_displayPath, displayPrefix) {
    var all_node = [];
    for (var i = 0; i < all_displayPath.length; i++) {
      var path = all_displayPath[i];
      var prefix = displayPrefix[i];
      all_node.push(_get_skill(path, prefix));
    };
    return all_node;
  };

  function _get_skill(path, prefix) {
    var object = helper.getObject(sheet.getCharacter(), path);
    var displayItem;
    if (typeof object != "undefined" && object != "") {

      if (object.ranks != "undefined" && object.ranks != "") {
        displayItem = document.createElement("li");
        displayItem.setAttribute("class", "m-display-list-item");
        var value = document.createElement("span");
        value.setAttribute("class", "m-display-list-item-value");
        value.textContent = "+" + object.current;
        if (prefix || object["name"] || object["variant_name"]) {
          var displayItemPrefix = document.createElement("span");
          displayItemPrefix.setAttribute("class", "m-display-list-item-prefix");
          if (object["name"]) {
            displayItemPrefix.textContent = object["name"] + " ";
          } else if (object["variant_name"]) {
            displayItemPrefix.textContent = object["variant_name"] + " ";
          } else {
            displayItemPrefix.textContent = prefix;
          };
          displayItem.appendChild(displayItemPrefix);
        };
        displayItem.appendChild(value);
      } else {
        displayItem = false;
      };

    };
    return displayItem;
  };

  function _get_all_clone(all_displayPath) {
    var all_node = [];

    for (var i = 0; i < all_displayPath.length; i++) {
      var all_clones = helper.getObject(sheet.getCharacter(), all_displayPath[i]);
      if (all_clones.length == 0) {
        all_node.push(false);
      } else {
        for (var j = 0; j < all_clones.length; j++) {
          var cloneType;
          if (all_displayPath[i] == "equipment.consumable") {
            cloneType = "consumable";
          };
          if (all_displayPath[i] == "offense.attack.melee") {
            cloneType = "attack-melee";
          };
          if (all_displayPath[i] == "offense.attack.ranged") {
            cloneType = "attack-ranged";
          };
          if (all_displayPath[i] == "notes.character") {
            cloneType = "note-character";
          };
          if (all_displayPath[i] == "notes.story") {
            cloneType = "note-story";
          };
          all_node.push(_get_clone(all_clones[j], cloneType));
        };
      };
    };
    return all_node;
  };

  function _get_clone(object, cloneType) {
    var _get_cloneItem = function(object, cloneType) {
      var displayListItem;

      if (cloneType == "consumable") {
        displayListItem = document.createElement("li");
        displayListItem.setAttribute("class", "m-display-list-item");
        for (var i in object) {
          if (i == "item") {
            var data = object[i];
            if (typeof data != "undefined" && data != "") {
              var prefix = document.createElement("span");
              prefix.setAttribute("class", "m-display-list-item-prefix");
              prefix.textContent = data;
              displayListItem.appendChild(prefix);
            };
          } else if (i == "current") {
            var data = object[i];
            if (typeof data != "undefined" && data != "" || data == 0) {
              var value = document.createElement("span");
              value.setAttribute("class", "m-display-list-item-value");
              value.textContent = data;
              displayListItem.appendChild(value);
            };
          };
        };
      };

      if (cloneType == "attack-melee" || cloneType == "attack-ranged") {
        displayListItem = document.createElement("li");
        displayListItem.setAttribute("class", "m-display-list-item-" + cloneType);
        for (var i in object) {
          if (i == "weapon" || i == "damage" || i == "critical" || i == "range" || i == "ammo") {
            var data = object[i];
            if (typeof data != "undefined" && data != "") {
              var prefix = document.createElement("span");
              prefix.setAttribute("class", "m-display-list-item-" + cloneType + "-" + i);
              prefix.textContent = data;
              displayListItem.appendChild(prefix);
            };
          } else if (i == "attack") {
            var data = object[i];
            if (typeof data != "undefined" && data != "") {
              var value = document.createElement("h2");
              value.setAttribute("class", "m-display-list-item-" + cloneType + "-" + i);
              value.textContent = data;
              displayListItem.appendChild(value);
            };
          };
        };
      };

      if (cloneType == "note-character" || cloneType == "note-story") {
        displayListItem = document.createElement("li");
        displayListItem.setAttribute("class", "m-display-list-item");
        for (var i in object) {
          var data = object[i];
          if (typeof data != "undefined" && data != "") {
            displayListItem.innerHTML = data;
          };
        };
      };

      return displayListItem;
    };

    for (var i in object) {
      var testForValues = false;
      for (var j in object[i]) {
        if (typeof object[i][j] != "undefined" && object[i][j] != "") {
          testForValues = true;
        };
      };
      if (testForValues) {
        return _get_cloneItem(object, cloneType);
      } else {
        return false;
      };
    };

  };

  function _get_all_list(all_displayPath, all_displayPrefix, all_displaySuffix, displayValueType) {
    var all_node = [];
    for (var i = 0; i < all_displayPath.length; i++) {
      var path = all_displayPath[i];
      var prefix = false;
      var suffix = false;
      var valueType = false;
      if (all_displayPrefix[i]) {
        prefix = all_displayPrefix[i];
      };
      if (all_displaySuffix[i]) {
        suffix = all_displaySuffix[i];
      };
      if (displayValueType[i]) {
        valueType = displayValueType[i];
      };
      all_node.push(_get_list(path, prefix, suffix, valueType));
    };
    return all_node;
  };

  function _get_list(path, prefix, suffix, valueType) {
    var data = helper.getObject(sheet.getCharacter(), path);
    var displayItem;
    if (typeof data != "undefined" && data != "") {
      if (valueType == "bonus") {
        data = "+" + data;
      };
      displayItem = document.createElement("li");
      displayItem.setAttribute("class", "m-display-list-item");
      var value = document.createElement("span");
      value.setAttribute("class", "m-display-list-item-value");
      value.textContent = data;
      if (prefix) {
        var displayItemPrefix = document.createElement("span");
        displayItemPrefix.setAttribute("class", "m-display-list-item-prefix");
        displayItemPrefix.textContent = prefix;
        displayItem.appendChild(displayItemPrefix);
      };
      displayItem.appendChild(value);
      if (suffix) {
        var displayItemSuffix = document.createElement("span");
        displayItemSuffix.setAttribute("class", "m-display-list-item-suffix");
        displayItemSuffix.textContent = prefix;
        displayItem.appendChild(displayItemSuffix);
      };
    } else {
      displayItem = false;
    };
    return displayItem;
  };

  function _get_all_modifier(all_displayPath, displayValueType) {
    var all_node = [];
    for (var i = 0; i < all_displayPath.length; i++) {
      var path = all_displayPath[i];
      all_node.push(_get_modifier(path, displayValueType));
    };
    return all_node;
  };

  function _get_modifier(path, displayValueType) {
    var displayItem;
    var data;
    var modifierPath = path.split(".");
    if (sheet.getCharacter()[modifierPath[0]][modifierPath[1]][modifierPath[2]].temp_modifier) {
      data = sheet.getCharacter()[modifierPath[0]][modifierPath[1]][modifierPath[2]].temp_modifier;
    } else {
      data = helper.getObject(sheet.getCharacter(), path);
    };
    if (typeof data != "undefined" && data != "") {
      var displayItem = document.createElement("span");
      if (displayValueType) {
        if (displayValueType == "bonus" && data > 0) {
          data = "+" + data;
        };
      };
      displayItem.textContent = data;
    } else if (typeof data == "number" && data == 0) {
      var displayItem = document.createElement("span");
      displayItem.textContent = data;
    } else {
      displayItem = false;
    };
    return displayItem;
  };

  function _get_all_stat(all_displayPath) {
    var all_node = [];
    for (var i = 0; i < all_displayPath.length; i++) {
      var path = all_displayPath[i];
      all_node.push(_get_stat(path));
    };
    return all_node;
  };

  function _get_stat(path) {
    var displayItem;
    var data;
    var statPath = path.split(".");
    if (sheet.getCharacter()[statPath[0]][statPath[1]][statPath[2]].temp_score) {
      data = sheet.getCharacter()[statPath[0]][statPath[1]][statPath[2]].temp_score
    } else {
      data = helper.getObject(sheet.getCharacter(), path);
    };
    if (typeof data != "undefined" && data != "") {
      displayItem = document.createElement("span");
      displayItem.textContent = data;
    } else if (typeof data == "number" && data == 0) {
      var displayItem = document.createElement("span");
      displayItem.textContent = data;
    } else {
      displayItem = false;
    };
    return displayItem;
  };

  function _get_all_textBlock(all_displayPath) {
    var all_node = [];
    for (var i = 0; i < all_displayPath.length; i++) {
      var path = all_displayPath[i];
      all_node.push(_get_textBlock(path));
    };
    return all_node;
  };

  function _get_textBlock(path, target) {
    var data = helper.getObject(sheet.getCharacter(), path);
    var displayItem;
    if (typeof data != "undefined" && data != "") {
      displayItem = document.createElement("span");
      displayItem.setAttribute("class", "m-display-item-text-block");
      var value = document.createElement("span");
      value.setAttribute("class", "m-display-item-text-block-value");
      value.innerHTML = data;
      displayItem.appendChild(value);
    } else {
      displayItem = false;
    };
    return displayItem;
  };

  function _get_all_textSnippet(all_displayPath, all_displayPrefix, all_displaySuffix, displayValueType) {
    var all_node = [];
    for (var i = 0; i < all_displayPath.length; i++) {
      var path = all_displayPath[i];
      var prefix = false;
      var suffix = false;
      var valueType = false;
      if (all_displayPrefix[i]) {
        prefix = all_displayPrefix[i];
      };
      if (all_displaySuffix[i]) {
        suffix = all_displaySuffix[i];
      };
      if (displayValueType[i]) {
        valueType = displayValueType[i];
      };
      all_node.push(_get_textSnippet(path, prefix, suffix, valueType));
    };
    // console.log("all_node", all_node);
    return all_node;
  };

  function _get_textSnippet(path, prefix, suffix, valueType) {
    var data = helper.getObject(sheet.getCharacter(), path);
    var displayItem;
    if (typeof data != "undefined" && data != "") {
      displayItem = document.createElement("span");
      displayItem.setAttribute("class", "m-display-item-text-snippet");
      var value = document.createElement("span");
      value.setAttribute("class", "m-display-item-text-snippet-value");
      if (valueType == "bonus") {
        data = "+" + data;
      };
      value.innerHTML = data;
      if (prefix) {
        var spanPrefix = document.createElement("span");
        spanPrefix.setAttribute("class", "m-display-item-text-snippet-prefix");
        spanPrefix.textContent = prefix;
        displayItem.appendChild(spanPrefix);
      };
      displayItem.appendChild(value);
      if (suffix) {
        var spanSuffix = document.createElement("span");
        spanSuffix.setAttribute("class", "m-display-item-text-snippet-suffix");
        spanSuffix.textContent = suffix;
        displayItem.appendChild(spanSuffix);
      };
    } else {
      displayItem = false;
    };
    // console.log(path, displayItem);
    return displayItem;
  };

  function _render_displayBlock(section) {
    // find all display blocks
    var all_displayBlock;
    if (section) {
      all_displayBlock = section.querySelectorAll(".js-display-block");
    } else {
      all_displayBlock = helper.eA(".js-display-block");
    };
    // loop all display blocks
    for (var i = 0; i < all_displayBlock.length; i++) {
      // find all targets in this display blocks
      var all_displayBlockTarget = all_displayBlock[i].querySelectorAll(".js-display-block-target");
      // start a "no data found at path" count
      var dataNotFoundAtPath = 0;
      var totalNodeLength = 0;
      var all_node = [];

      // loop over each target in this display blocks
      for (var j = 0; j < all_displayBlockTarget.length; j++) {

        // get all data from display blocks target
        var target = all_displayBlockTarget[j];
        // var display = helper.getClosest(all_displayBlockTarget[j], ".js-display");
        var displayType = all_displayBlockTarget[j].dataset.displayType;
        var all_displayPath;
        var all_displayPrefix = false;
        var all_displaySuffix = false;
        var displayValueType = false;

        if (all_displayBlockTarget[j].dataset.displayPath) {
          all_displayPath = all_displayBlockTarget[j].dataset.displayPath.split(",");
        };
        if (all_displayBlockTarget[j].dataset.displayPrefix) {
          all_displayPrefix = all_displayBlockTarget[j].dataset.displayPrefix.split(",");
        };
        if (all_displayBlockTarget[j].dataset.displaySuffix) {
          all_displaySuffix = all_displayBlockTarget[j].dataset.displaySuffix.split(",");
        };
        if (all_displayBlockTarget[j].dataset.displayValueType) {
          displayValueType = all_displayBlockTarget[j].dataset.displayValueType.split(",");
        };

        // get an array of nodes using the array of paths
        if (displayType == "stat") {
          all_node = _get_all_stat(all_displayPath);
        } else if (displayType == "modifier") {
          all_node = _get_all_modifier(all_displayPath, displayValueType);
        } else if (displayType == "text-snippet") {
          all_node = _get_all_textSnippet(all_displayPath, all_displayPrefix, all_displaySuffix, displayValueType);
        } else if (displayType == "text-block") {
          all_node = _get_all_textBlock(all_displayPath);
        } else if (displayType == "list") {
          all_node = _get_all_list(all_displayPath, all_displayPrefix, all_displaySuffix, displayValueType);
        } else if (displayType == "clone") {
          all_node = _get_all_clone(all_displayPath);
        } else if (displayType == "skill") {
          all_node = _get_all_skill(all_displayPath, all_displayPrefix);
        } else if (displayType == "spell") {
          all_node = _get_all_spell(all_displayPath);
        };

        // function for later use to check the element from node array for false or data
        var _appendToTarget = function(element) {
          if (element != false) {
            // append to target
            target.appendChild(element);
          } else {
            // or increment the "no data found at path" count
            dataNotFoundAtPath++;
          };
        };

        // loop over each node in array and append to target
        all_node.forEach(_appendToTarget);
        totalNodeLength = totalNodeLength + all_node.length;
      };
      // if the "no data found at path" count == total "path count" this display blocks target is empty so add a data vale to reflect this
      if (totalNodeLength > dataNotFoundAtPath) {
        all_displayBlock[i].dataset.displayContent = true;
      } else {
        all_displayBlock[i].dataset.displayContent = false;
      };

    };

  };

  function _update_displayPlaceholder(section) {
    var all_display
    if (section) {
      all_display = [section];
    } else {
      all_display = helper.eA(".js-display");
    };
    for (var i = 0; i < all_display.length; i++) {
      var placeholderDisplay = all_display[i].querySelector(".js-placeholder-display");
      var all_displayBlock = all_display[i].querySelectorAll(".js-display-block");
      var contentFound = false;
      var lastActiveDisplayBlock;

      for (var j = 0; j < all_displayBlock.length; j++) {
        if (all_displayBlock[j].dataset.displayContent == "true") {
          lastActiveDisplayBlock = all_displayBlock[j];
          contentFound = true;
          helper.removeClass(all_displayBlock[j], "is-hidden");
        } else {
          helper.addClass(all_displayBlock[j], "is-hidden");
        };
      };
      for (var j = 0; j < all_displayBlock.length; j++) {
        helper.removeClass(all_displayBlock[j], "m-display-block-last");
      };
      if (lastActiveDisplayBlock) {
        helper.addClass(lastActiveDisplayBlock, "m-display-block-last");
      };
      if (contentFound) {
        helper.addClass(placeholderDisplay, "is-hidden")
      } else {
        helper.removeClass(placeholderDisplay, "is-hidden")
      };
    };
  };

  function render(section) {
    _render_displayBlock(section);
    _update_displayPlaceholder(section);
  };

  // exposed methods
  return {
    toggle: toggle,
    bind: bind,
    update: update,
    render: render,
    clear: clear
  };

})();
