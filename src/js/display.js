var display = (function() {

  function bind() {
    _bind_fab();
  };

  function _bind_fab() {
    var fabButton = helper.e(".js-fab-button");
    fabButton.addEventListener("click", function() {
      toggle();
      themeColor.update();
    }, false);
  };

  function update() {
    _update_displayState();
    _update_displayPlaceholder();
  };

  function _update_displayPlaceholder() {
    var all_placeholder = helper.eA(".js-placeholder-display");
    for (var i = 0; i < all_placeholder.length; i++) {
      var section = helper.getClosest(all_placeholder[i], ".js-section");

    };
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
      helper.addClass(fabButton, "button-primary");
      helper.removeClass(fabButton, "button-secondary");
      helper.addClass(quickNav, "is-display-mode");
      themeColor.update();
    } else {
      fab.dataset.displayMode = "false";
      helper.removeClass(fabIcon, "icon-edit");
      helper.addClass(fabIcon, "icon-reader-mode");
      helper.removeClass(fabButton, "button-primary");
      helper.addClass(fabButton, "button-secondary");
      helper.removeClass(quickNav, "is-display-mode");
    };
    if (allSectionDisplay == all_section.length) {
      fab.dataset.displayMode = "true";
      themeColor.update();
    } else {
      fab.dataset.displayMode = "false";
      helper.removeClass(fabIcon, "icon-edit");
      helper.addClass(fabIcon, "icon-reader-mode");
      helper.removeClass(fabButton, "button-primary");
      helper.addClass(fabButton, "button-secondary");
      helper.removeClass(quickNav, "is-display-mode");
      themeColor.update();
    };
  };

  function _toggle_singleSection(element, forceToggle) {
    var icon = element.querySelector(".js-card-display-toggle-icon");
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
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // clear();
    // render();
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (section) {
      _toggle_singleSection(section);
    } else {
      _toggle_allSection();
    };
  };

  function clear() {
    // var all_displayBlock = helper.eA(".js-display-block");
    // var _removeAllChildren = function(parent) {
    //   while (parent.lastChild) {
    //     parent.removeChild(parent.lastChild);
    //   };
    // };
    // for (var i = 0; i < all_displayBlock.length; i++) {
    //   var target;
    //   var displayType = all_displayBlock[i].dataset.displayType;
    //   if (displayType == "stat" || displayType == "modifier" || displayType == "text-snippet" || displayType == "text-block" || displayType == "spell") {
    //     target = all_displayBlock[i].querySelector(".js-display-block-target");
    //   } else if (displayType == "list" || displayType == "clone" || displayType == "skill") {
    //     target = all_displayBlock[i];
    //   };
    //   _removeAllChildren(target);
    // };
  };






  function _get_skill(path, target, prefix, suffix) {
    var object = helper.getObject(sheet.getCharacter(), path);
    if (typeof object != "undefined" && object != "") {

      if (object.ranks != "undefined" && object.ranks != "") {
        var li = document.createElement("li");
        li.setAttribute("class", "m-display-col-three");
        var div = document.createElement("div");
        div.setAttribute("class", "m-display-item m-display-item-col");
        var value = document.createElement("span");
        value.setAttribute("class", "m-display-item-value");
        value.textContent = "+" + object.current;


        if (prefix || object["name"] || object["variant_name"]) {
          var spanPrefix = document.createElement("span");
          spanPrefix.setAttribute("class", "m-display-item-prefix");
          if (object["name"]) {
            spanPrefix.textContent = object["name"] + " ";
          } else if (object["variant_name"]) {
            spanPrefix.textContent = object["variant_name"] + " ";
          } else {
            spanPrefix.textContent = prefix;
          };
          div.appendChild(spanPrefix);
        };

        div.appendChild(value);

        if (suffix) {
          var spanSuffix = document.createElement("span");
          spanSuffix.setAttribute("class", "m-display-item-suffix");
          spanSuffix.textContent = suffix;
          div.appendChild(spanSuffix);
        };
        li.appendChild(div);
        target.appendChild(li);
      };

    };
  };

  function _get_spell(target) {

    var _render_displaySpell = function(array, level, target) {

      var displayBody = document.createElement("div");
      displayBody.setAttribute("class", "m-display-body");
      var displayBodyTitle = document.createElement("p");
      displayBodyTitle.setAttribute("class", "m-display-body-title");
      displayBodyTitle.textContent = "Level " + level;
      var spellBookPage = document.createElement("ul");
      spellBookPage.setAttribute("class", "m-display-grid u-list-unstyled");

      displayBody.appendChild(displayBodyTitle);

      // add known, spells per day and dc
      if (known != "" || known == "undefined" || perDay != "" || perDay == "undefined" || spellDc != "" || spellDc == "undefined") {
        var spellDc = sheet.getCharacter().spells.dc["level_" + level];
        var perDay = sheet.getCharacter().spells.per_day["level_" + level];
        var known = sheet.getCharacter().spells.known["level_" + level];
        var h2 = document.createElement("h2");
        if (known != "" || known == "undefined") {
          var knownSpan = document.createElement("span");
          knownSpan.setAttribute("class", "m-display-item m-display-item-snippet");
          var knownPrefixSpan = document.createElement("span");
          knownPrefixSpan.setAttribute("class", "m-display-item-prefix");
          knownPrefixSpan.textContent = "Known ";
          var knownValueSpan = document.createElement("span");
          knownValueSpan.setAttribute("class", "m-display-item-value");
          knownValueSpan.textContent = known;
          knownSpan.appendChild(knownPrefixSpan);
          knownSpan.appendChild(knownValueSpan);
          h2.appendChild(knownSpan);
        };
        if (perDay != "" || perDay == "undefined") {
          var perDaySpan = document.createElement("span");
          perDaySpan.setAttribute("class", "m-display-item m-display-item-snippet");
          var perDayPrefixSpan = document.createElement("span");
          perDayPrefixSpan.setAttribute("class", "m-display-item-prefix");
          perDayPrefixSpan.textContent = "Per Day ";
          var perDayValueSpan = document.createElement("span");
          perDayValueSpan.setAttribute("class", "m-display-item-value");
          perDayValueSpan.textContent = perDay;
          perDaySpan.appendChild(perDayPrefixSpan);
          perDaySpan.appendChild(perDayValueSpan);
          h2.appendChild(perDaySpan);
        };
        if (spellDc != "" || spellDc == "undefined") {
          var spellDcSpan = document.createElement("span");
          spellDcSpan.setAttribute("class", "m-display-item m-display-item-snippet");
          var spellDcPrefixSpan = document.createElement("span");
          spellDcPrefixSpan.setAttribute("class", "m-display-item-prefix");
          spellDcPrefixSpan.textContent = "DC ";
          var spellDcValueSpan = document.createElement("span");
          spellDcValueSpan.setAttribute("class", "m-display-item-value");
          spellDcValueSpan.textContent = spellDc;
          spellDcSpan.appendChild(spellDcPrefixSpan);
          spellDcSpan.appendChild(spellDcValueSpan);
          h2.appendChild(spellDcSpan);
        };
      };
      if (known != "" || known == "undefined" || perDay != "" || perDay == "undefined" || spellDc != "" || spellDc == "undefined") {
        displayBody.appendChild(h2);
      };

      // add spall pages
      for (var i = 0; i < array.length; i++) {

        var spellObject = array[i];
        var displayCol = document.createElement("li");
        displayCol.setAttribute("class", "m-display-col-three");
        var displayItem = document.createElement("div");
        displayItem.setAttribute("class", "m-display-item m-display-item-list");

        var spell = document.createElement("div");
        spell.setAttribute("class", "m-display-spell");

        var spellName = document.createElement("span");
        spellName.setAttribute("class", "m-display-spell-name");
        var spellNameSpan = document.createElement("span");
        spellNameSpan.textContent = spellObject.name;
        spellName.appendChild(spellNameSpan);

        var spellCount = document.createElement("span");
        spellCount.setAttribute("class", "m-display-spell-count");

        // prepared
        if (spellObject.prepared > 0) {
          // var marks = document.createElement("span");
          for (var j = 0; j < spellObject.prepared; j++) {
            var preparedIcon = document.createElement("span");
            preparedIcon.setAttribute("class", "icon-radio-button-checked");
            spellCount.insertBefore(preparedIcon, spellCount.firstChild);
          };
        };

        // cast
        if (spellObject.cast > 0) {
          var all_check = spellCount.querySelectorAll(".icon-radio-button-checked");
          for (var j = 0; j < spellObject.cast; j++) {
            if (all_check[j]) {
              helper.toggleClass(all_check[j], "icon-radio-button-checked");
              helper.toggleClass(all_check[j], "icon-radio-button-unchecked");
            };
          };
        };

        // active
        if (spellObject.active) {
          var spellActive = document.createElement("span");
          spellActive.setAttribute("class", "m-display-spell-active");
          var activeIcon = document.createElement("span");
          activeIcon.setAttribute("class", "icon-play-arrow");
          spellActive.appendChild(activeIcon);
          spellName.insertBefore(spellActive, spellName.firstChild);
        };

        spell.appendChild(spellName);
        spell.appendChild(spellCount);

        displayItem.appendChild(spell);
        displayCol.appendChild(displayItem);
        spellBookPage.appendChild(displayCol);

      };

      displayBody.appendChild(spellBookPage);
      target.appendChild(displayBody);

    };

    // build an array of spell objects
    var spellsToRender;
    // iterate over all objects keys to find spells
    if (sheet.getCharacter().spells.book) {
      for (var i in sheet.getCharacter().spells.book) {
        for (var j in sheet.getCharacter().spells.book[i]) {
          spellsToRender = sheet.getCharacter().spells.book[i][j];
          // console.log(spellsToRender, i);
          if (spellsToRender.length > 0) {
            _render_displaySpell(spellsToRender, i, target);
          };
        };
      };
    };

  };

  function _render_skill(itemsToDisplay, target, displayPrefix, displaySuffix) {
    for (var i = 0; i < itemsToDisplay.length; i++) {
      var path = itemsToDisplay[i];
      var prefix = displayPrefix[i];
      var suffix = displaySuffix[i];
      var data = _get_skill(path, target, prefix, suffix);
    };
  };

  function _render_spell(target) {
    var data = _get_spell(target);
  };



// /////////
// /////////
// /////////
// /////////


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
        displayListItem.setAttribute("class", "m-display-list-item");
        for (var i in object) {
          if (i == "weapon" || i == "damage" || i == "critical" || i == "range" || i == "ammo") {
            var data = object[i];
            if (typeof data != "undefined" && data != "") {
              var prefix = document.createElement("span");
              prefix.setAttribute("class", "m-display-list-item-prefix m-display-item-" + cloneType + "-" + i);
              prefix.textContent = data;
              displayListItem.appendChild(prefix);
            };
          } else if (i == "attack") {
            var data = object[i];
            if (typeof data != "undefined" && data != "") {
              var value = document.createElement("span");
              value.setAttribute("class", "m-display-list-item-value m-display-item-" + cloneType + "-" + i);
              value.textContent = data;
              displayListItem.appendChild(value);
            };
          };
        };
      };

      return displayListItem;

      // if (cloneType == "note-character" || cloneType == "note-story") {
      //   for (var i in object) {
      //
      //     var data = object[i];
      //     if (typeof data != "undefined" && data != "") {
      //       displayItem.innerHTML = data;
      //     };
      //
      //   };
      //
      //   li.appendChild(displayItem);
      //   target.appendChild(li);
      // };

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

  function _get_all_list(all_displayPath, all_displayPrefix, all_displaySuffix, displayBonusType) {
    var all_node = [];
    for (var i = 0; i < all_displayPath.length; i++) {
      var path = all_displayPath[i];
      var prefix = false;
      var suffix = false;
      if (all_displayPrefix[i]) {
        prefix = all_displayPrefix[i];
      };
      if (all_displaySuffix[i]) {
        suffix = all_displaySuffix[i];
      };
      all_node.push(_get_list(path, prefix, suffix, displayBonusType));
    };
    return all_node;
  };

  function _get_list(path, prefix, suffix, displayBonusType) {
    var data = helper.getObject(sheet.getCharacter(), path);
    var displayItem;
    if (typeof data != "undefined" && data != "") {
      if (displayBonusType == "bonus") {
        data = "+" + data;
      };
      displayItem = document.createElement("li");
      displayItem.setAttribute("class", "m-display-list-item");
      var value = document.createElement("span");
      value.setAttribute("class", "m-display-list-item-value");
      value.textContent = data;
      if (prefix) {
        var prefix = document.createElement("span");
        prefix.setAttribute("class", "m-display-list-item-prefix");
        prefix.textContent = prefix;
        displayItem.appendChild(prefix);
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

  function _get_all_modifier(all_displayPath, displayBonusType) {
    var all_node = [];
    for (var i = 0; i < all_displayPath.length; i++) {
      var path = all_displayPath[i];
      all_node.push(_get_modifier(path, displayBonusType));
    };
    return all_node;
  };

  function _get_modifier(path, displayBonusType) {
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
      if (displayBonusType) {
        if (displayBonusType == "bonus" && data > 0) {
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

  function _get_all_textSnippet(all_displayPath, all_displayTitle, all_displayPrefix, all_displaySuffix, displayBonusType) {
    var all_node = [];
    for (var i = 0; i < all_displayPath.length; i++) {
      var path = all_displayPath[i];
      var title = false;
      var prefix = false;
      var suffix = false;
      if (all_displayTitle[i]) {
        title = all_displayTitle[i];
      };
      if (all_displayPrefix[i]) {
        prefix = all_displayPrefix[i];
      };
      if (all_displaySuffix[i]) {
        suffix = all_displaySuffix[i];
      };
      all_node.push(_get_textSnippet(path, title, prefix, suffix, displayBonusType));
    };
    // console.log("all_node", all_node);
    return all_node;
  };

  function _get_textSnippet(path, title, prefix, suffix, displayBonusType) {
    var data = helper.getObject(sheet.getCharacter(), path);
    var displayItem;
    if (typeof data != "undefined" && data != "") {
      displayItem = document.createElement("span");
      displayItem.setAttribute("class", "m-display-item-text-snippet");
      var value = document.createElement("span");
      value.setAttribute("class", "m-display-item-text-snippet-value");
      if (displayBonusType == "bonus") {
        data = "+" + data;
      };
      value.innerHTML = data;
      if (title) {
        var spanTitle = document.createElement("span");
        spanTitle.setAttribute("class", "m-display-item-text-snippet-title");
        spanTitle.textContent = title;
        displayItem.appendChild(spanTitle);
      };
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

  function _render_displayBlock() {
    // find all display blocks
    var all_displayBlock = helper.eA(".js-display-block");
    // loop all display blocks
    for (var i = 0; i < all_displayBlock.length; i++) {
      // find all targets in this display blocks
      var all_displayBlockTarget = all_displayBlock[i].querySelectorAll(".js-display-block-target");
      // start a "path count"
      var displayBlockPathCount = 0;
      // start a "no data found at path" count
      var dataNotFoundAtPath = 0;

      // loop over each target in this display blocks
      for (var j = 0; j < all_displayBlockTarget.length; j++) {

        // get all data from display blocks target
        var target = all_displayBlockTarget[j];
        // var display = helper.getClosest(all_displayBlockTarget[j], ".js-display");
        var displayType = all_displayBlockTarget[j].dataset.displayType;
        var all_node = [];
        var all_displayPath;
        var all_displayTitle = false;
        var all_displayPrefix = false;
        var all_displaySuffix = false;
        var displayBonusType = false;

        if (all_displayBlockTarget[j].dataset.displayPath) {
          all_displayPath = all_displayBlockTarget[j].dataset.displayPath.split(",");
          if (all_displayBlockTarget[j].dataset.displayTitle) {
            all_displayTitle = all_displayBlockTarget[j].dataset.displayTitle.split(",");
          };
          if (all_displayBlockTarget[j].dataset.displayPrefix) {
            all_displayPrefix = all_displayBlockTarget[j].dataset.displayPrefix.split(",");
          };
          if (all_displayBlockTarget[j].dataset.displaySuffix) {
            all_displaySuffix = all_displayBlockTarget[j].dataset.displaySuffix.split(",");
          };
          displayBonusType = all_displayBlockTarget[j].dataset.displayBonusType;
          if (all_displayBlockTarget[j].dataset.displayBonusType) {
            displayBonusType = all_displayBlockTarget[j].dataset.displayBonusType;
          };
        };

        // increase the path count
        displayBlockPathCount = displayBlockPathCount + all_displayPath.length;

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

        // get an array of nodes using the array of paths
        if (displayType == "stat") {
          all_node = _get_all_stat(all_displayPath);
        } else if (displayType == "modifier") {
          all_node = _get_all_modifier(all_displayPath, displayBonusType);
        } else if (displayType == "text-snippet") {
          all_node = _get_all_textSnippet(all_displayPath, all_displayTitle, all_displayPrefix, all_displaySuffix, displayBonusType);
        } else if (displayType == "text-block") {
          all_node = _get_all_textBlock(all_displayPath);
        } else if (displayType == "list") {
          all_node = _get_all_list(all_displayPath, all_displayPrefix, all_displaySuffix, displayBonusType);
        } else if (displayType == "clone") {
          all_node = _get_all_clone(all_displayPath);
        };

        // loop over each node in array and append to target
        all_node.forEach(_appendToTarget);
      };
      // if the "no data found at path" count == total "path count" this display blocks target is empty so add a data vale to reflect this
      if (dataNotFoundAtPath == displayBlockPathCount) {
        all_displayBlock[i].dataset.displayContent = false;
      } else {
        all_displayBlock[i].dataset.displayContent = true;
      };

    };

  };

  function _update_placeholder() {
    var all_display = helper.eA(".js-display");
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

  function _render_displayBlock_xxxx() {
    var all_displayBlock = helper.eA(".js-display-block");
    for (var i = 0; i < all_displayBlock.length; i++) {

      var target = all_displayBlock[i].querySelector(".js-display-block-target");
      var display = helper.getClosest(all_displayBlock[i], ".js-display")
      var itemsToDisplay;
      var displayTitle;
      var displayPrefix;
      var displaySuffix;
      var displayBonusType = false;
      var displayType = all_displayBlock[i].dataset.displayType;
      var node;

      if (all_displayBlock[i].dataset.display) {
        itemsToDisplay = all_displayBlock[i].dataset.display.split(",");
        if (all_displayBlock[i].dataset.displayTitle) {
          displayTitle = all_displayBlock[i].dataset.displayTitle.split(",");
        } else {
          displayTitle = false;
        };
        if (all_displayBlock[i].dataset.displayPrefix) {
          displayPrefix = all_displayBlock[i].dataset.displayPrefix.split(",");
        } else {
          displayPrefix = false;
        };
        if (all_displayBlock[i].dataset.displaySuffix) {
          displaySuffix = all_displayBlock[i].dataset.displaySuffix.split(",");
        } else {
          displaySuffix = false;
        };
        if (all_displayBlock[i].dataset.displayTotalType) {
          displayBonusType = all_displayBlock[i].dataset.displayTotalType;
        };
      };

      if (displayType == "stat") {
        _render_stat(itemsToDisplay);
        if (node != false) {
          target.appendChild(node);
        };
      } else if (displayType == "modifier") {
        _render_modifier(itemsToDisplay, target);
      } else if (displayType == "text-snippet") {
        node = _get_all_textSnippet(itemsToDisplay, displayTitle, displayPrefix, displaySuffix, displayBonusType);
        if (node != false) {
          target.appendChild(node);
        };
      } else if (displayType == "text-block") {
        _render_textBlock(itemsToDisplay, target);
      } else if (displayType == "list") {
        _render_list(itemsToDisplay, all_displayBlock[i], displayPrefix, displaySuffix);
      } else if (displayType == "skill") {
        _render_skill(itemsToDisplay, all_displayBlock[i], displayPrefix, displaySuffix);
      } else if (displayType == "clone") {
        _render_clone(itemsToDisplay, all_displayBlock[i]);
      } else if (displayType == "spell") {
        _render_spell(target);
      };

    };
  };

  function render() {
    _render_displayBlock();
    _update_placeholder();
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
