var display = (function() {

  function bind() {
    _bind_fab();
    _bind_selfLink();
  };

  function _bind_fab() {
    var fabButton = helper.e(".js-fab-button");
    fabButton.addEventListener("click", toggle, false);
  };

  function _bind_selfLink() {
    var all_displaySelfLink = helper.eA(".js-display-self-link");
    for (var i = 0; i < all_displaySelfLink.length; i++) {
      all_displaySelfLink[i].addEventListener("click", function(event) {
        event.stopPropagation();
        event.preventDefault();
        _selfLink(this);
      }, false);
    };
  };

  function _selfLink(element) {
    var target = "#" + element.dataset.selfLink;
    smoothScroll.animateScroll(null, target);
  };

  var scrollTopEdit = 0;
  var scrollTopDisplay = 0;

  function toggle() {
    var body = helper.e("body");
    var fabIcon = helper.e(".js-fab-icon");
    var quickNavList = helper.e(".js-quick-nav-list");
    var quickNavDisplay = helper.e(".js-quick-nav-display");
    var all_edit = helper.eA(".js-edit");
    var all_display = helper.eA(".js-display");

    function _displayOn() {
      // record scroll top var
      scrollTopEdit = window.scrollY;
      helper.addClass(body, "is-display-mode");
      helper.addClass(quickNavList, "is-hidden");
      helper.removeClass(quickNavDisplay, "is-hidden");

      // iterate over all edit sections
      for (var i = 0; i < all_edit.length; i++) {
        // make them visable
        helper.addClass(all_edit[i], "is-hidden");
      };
      // iterate over all display sections
      for (var i = 0; i < all_display.length; i++) {
        // make them visable
        helper.removeClass(all_display[i], "is-hidden");
      };
      // change fab icon
      helper.addClass(fabIcon, "icon-edit");
      helper.removeClass(fabIcon, "icon-reader-mode");
      // scroll to
      window.scrollTo(0, scrollTopDisplay);
      // if body is in display state
    };

    function _displayOff() {
      // record scroll top var
      scrollTopDisplay = window.scrollY;
      helper.removeClass(body, "is-display-mode");
      helper.removeClass(quickNavList, "is-hidden");
      helper.addClass(quickNavDisplay, "is-hidden");
      // iterate over all edit sections
      for (var i = 0; i < all_edit.length; i++) {
        // make them visable
        helper.removeClass(all_edit[i], "is-hidden");
      };
      // iterate over all display sections
      for (var i = 0; i < all_display.length; i++) {
        // hide display section
        helper.addClass(all_display[i], "is-hidden");
      };
      // change fab icon
      helper.removeClass(fabIcon, "icon-edit");
      helper.addClass(fabIcon, "icon-reader-mode");
      // scroll to
      window.scrollTo(0, scrollTopEdit);
    };

    if (body.dataset.displayMode == "true") {
      body.dataset.displayMode = "false";
      _displayOff();
    } else if (body.dataset.displayMode == "false" || !body.dataset.displayMode) {
      body.dataset.displayMode = "true";
      _displayOn();
    };

    totalBlock.update();
    clear();
    render();
  };

  function clear___xxxx() {
    var all_displayItem = helper.eA(".js-display-block");
    var displaySpell = helper.e(".js-display-block-spell").querySelector(".js-display-block-target");
    var displaySkills = helper.e(".js-display-block-skills").querySelector(".js-display-block-target");
    var displayAttack = helper.e(".js-display-block-attack").querySelector(".js-display-block-target");
    var displayNote = helper.e(".js-display-block-note").querySelector(".js-display-block-target");
    var displayConsumable = helper.e(".js-display-block-consumable").querySelector(".js-display-block-target");

    function _removeAllChildren(parent) {
      while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
      };
    };

    for (var i = 0; i < all_displayItem.length; i++) {
      var target = all_displayItem[i].querySelector(".js-display-block-target");
      _removeAllChildren(target);
    };

    _removeAllChildren(displaySpell);
    _removeAllChildren(displaySkills);
    _removeAllChildren(displayAttack);
    _removeAllChildren(displayNote);
    _removeAllChildren(displayConsumable);
  };

  function clear() {
    var all_displayBlock = helper.eA(".js-display-block");
    var _removeAllChildren = function(parent) {
      while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
      };
    };
    for (var i = 0; i < all_displayBlock.length; i++) {
      var target;
      var displayType = all_displayBlock[i].dataset.displayType;
      if (displayType == "stat" || displayType == "modifier" || displayType == "text-snippet" || displayType == "text-block" || displayType == "spell") {
        target = all_displayBlock[i].querySelector(".js-display-block-target");
      } else if (displayType == "list" || displayType == "clone" || displayType == "skill") {
        target = all_displayBlock[i];
      };
      _removeAllChildren(target);
    };
  };

  function _get_stat(path, target) {
    var data;
    if (path == "statistics.stats.str.score" && sheet.getCharacter().statistics.stats.str.temp_score) {
      data = sheet.getCharacter().statistics.stats.str.temp_score;
    } else if (path == "statistics.stats.dex.score" && sheet.getCharacter().statistics.stats.dex.temp_score) {
      data = sheet.getCharacter().statistics.stats.dex.temp_score;
    } else if (path == "statistics.stats.con.score" && sheet.getCharacter().statistics.stats.con.temp_score) {
      data = sheet.getCharacter().statistics.stats.con.temp_score;
    } else if (path == "statistics.stats.int.score" && sheet.getCharacter().statistics.stats.int.temp_score) {
      data = sheet.getCharacter().statistics.stats.int.temp_score;
    } else if (path == "statistics.stats.wis.score" && sheet.getCharacter().statistics.stats.wis.temp_score) {
      data = sheet.getCharacter().statistics.stats.wis.temp_score;
    } else if (path == "statistics.stats.cha.score" && sheet.getCharacter().statistics.stats.cha.temp_score) {
      data = sheet.getCharacter().statistics.stats.cha.temp_score;
    } else if (path == "statistics.stats.str.modifier" && sheet.getCharacter().statistics.stats.str.temp_score) {
      data = sheet.getCharacter().statistics.stats.str.temp_modifier;
    } else if (path == "statistics.stats.dex.modifier" && sheet.getCharacter().statistics.stats.dex.temp_score) {
      data = sheet.getCharacter().statistics.stats.dex.temp_modifier;
    } else if (path == "statistics.stats.con.modifier" && sheet.getCharacter().statistics.stats.con.temp_score) {
      data = sheet.getCharacter().statistics.stats.con.temp_modifier;
    } else if (path == "statistics.stats.int.modifier" && sheet.getCharacter().statistics.stats.int.temp_score) {
      data = sheet.getCharacter().statistics.stats.int.temp_modifier;
    } else if (path == "statistics.stats.wis.modifier" && sheet.getCharacter().statistics.stats.wis.temp_score) {
      data = sheet.getCharacter().statistics.stats.wis.temp_modifier;
    } else if (path == "statistics.stats.cha.modifier" && sheet.getCharacter().statistics.stats.cha.temp_score) {
      data = sheet.getCharacter().statistics.stats.cha.temp_modifier;
    } else {
      data = helper.getObject(sheet.getCharacter(), path);
    };
    if (typeof data == "undefined" || data == "") {
      data = 0;
    };
    var span = document.createElement("span");
    span.setAttribute("class", "m-display-item");
    span.textContent = data;
    target.appendChild(span);
  };

  function _get_modifier(path, target) {
    var data;
    if (path == "statistics.stats.str.modifier" && sheet.getCharacter().statistics.stats.str.temp_score) {
      data = sheet.getCharacter().statistics.stats.str.temp_modifier;
    } else if (path == "statistics.stats.dex.modifier" && sheet.getCharacter().statistics.stats.dex.temp_score) {
      data = sheet.getCharacter().statistics.stats.dex.temp_modifier;
    } else if (path == "statistics.stats.con.modifier" && sheet.getCharacter().statistics.stats.con.temp_score) {
      data = sheet.getCharacter().statistics.stats.con.temp_modifier;
    } else if (path == "statistics.stats.int.modifier" && sheet.getCharacter().statistics.stats.int.temp_score) {
      data = sheet.getCharacter().statistics.stats.int.temp_modifier;
    } else if (path == "statistics.stats.wis.modifier" && sheet.getCharacter().statistics.stats.wis.temp_score) {
      data = sheet.getCharacter().statistics.stats.wis.temp_modifier;
    } else if (path == "statistics.stats.cha.modifier" && sheet.getCharacter().statistics.stats.cha.temp_score) {
      data = sheet.getCharacter().statistics.stats.cha.temp_modifier;
    } else {
      data = helper.getObject(sheet.getCharacter(), path);
    };
    if (typeof data == "undefined" || data == "" || data == 0) {
      data = "0";
    } else if (parseInt(data, 10) > 0) {
      data = "+" + data;
    };
    var span = document.createElement("span");
    span.setAttribute("class", "m-display-item");
    span.textContent = data;
    target.appendChild(span);
  };

  function _get_textSnippet(path, target, title, prefix, suffix) {
    var data = helper.getObject(sheet.getCharacter(), path);
    if (typeof data != "undefined" && data != "") {
      var displayItem = document.createElement("span");
      displayItem.setAttribute("class", "m-display-item m-display-item-snippet");
      var value = document.createElement("span");
      value.setAttribute("class", "m-display-item-value");
      value.innerHTML = data;
      if (title) {
        var spanTitle = document.createElement("span");
        spanTitle.setAttribute("class", "m-display-item-title");
        spanTitle.textContent = title;
        displayItem.appendChild(spanTitle);
      };
      if (prefix) {
        var spanPrefix = document.createElement("span");
        spanPrefix.setAttribute("class", "m-display-item-prefix");
        spanPrefix.textContent = prefix;
        displayItem.appendChild(spanPrefix);
      };
      displayItem.appendChild(value);
      if (suffix) {
        var spanSuffix = document.createElement("span");
        spanSuffix.setAttribute("class", "m-display-item-suffix");
        spanSuffix.textContent = suffix;
        displayItem.appendChild(spanSuffix);
      };
      target.appendChild(displayItem);
    };
  };

  function _get_textBlock(path, target) {
    var data = helper.getObject(sheet.getCharacter(), path);
    if (typeof data != "undefined" && data != "") {
      var displayItem = document.createElement("span");
      displayItem.setAttribute("class", "m-display-item m-display-item-block");
      var value = document.createElement("span");
      value.setAttribute("class", "m-display-item-value");
      value.innerHTML = data;
      displayItem.appendChild(value);
      target.appendChild(displayItem);
    };
  };

  function _get_list(path, target, prefix, suffix) {
    var data = helper.getObject(sheet.getCharacter(), path);
    if (typeof data != "undefined" && data != "") {
      var li = document.createElement("li");
      li.setAttribute("class", "m-display-col");
      var div = document.createElement("div");
      div.setAttribute("class", "m-display-item m-display-item-list");
      var value = document.createElement("span");
      value.setAttribute("class", "m-display-item-value");
      value.innerHTML = data;
      if (prefix) {
        var spanPrefix = document.createElement("span");
        spanPrefix.setAttribute("class", "m-display-item-prefix");
        spanPrefix.textContent = prefix;
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

  function _get_skill(path, target, prefix, suffix) {
    var object = helper.getObject(sheet.getCharacter(), path);
    if (typeof object != "undefined" && object != "") {

      if (object.ranks != "undefined" && object.ranks != "") {
        var li = document.createElement("li");
        li.setAttribute("class", "m-display-col");
        var div = document.createElement("div");
        div.setAttribute("class", "m-display-item m-display-item-col");
        var value = document.createElement("span");
        value.setAttribute("class", "m-display-item-value");
        value.textContent = object.current;


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
      spellBookPage.setAttribute("class", "m-display-grid-multi-col u-list-unstyled");

      displayBody.appendChild(displayBodyTitle);

      // add known, spells per day and dc
      if (known != "" || known == "undefined" || perDay != "" || perDay == "undefined" || spellDc != "" || spellDc == "undefined") {
        var spellDc = sheet.getCharacter().spells.dc["level_" + level];
        var perDay = sheet.getCharacter().spells.per_day["level_" + level];
        var known = sheet.getCharacter().spells.known["level_" + level];
        var para = document.createElement("p");
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
          para.appendChild(knownSpan);
          displayBody.appendChild(para);
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
          para.appendChild(perDaySpan);
          displayBody.appendChild(para);
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
          para.appendChild(spellDcSpan);
          displayBody.appendChild(para);
        };
      };

      // add spall pages
      for (var i = 0; i < array.length; i++) {

        var spellObject = array[i];
        var displayCol = document.createElement("li");
        displayCol.setAttribute("class", "m-display-col");
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

  function _get_clone(path, target) {

    var _render_displayClone = function(object, target, cloneType) {
      var li = document.createElement("li");
      li.setAttribute("class", "m-display-col");
      var displayItem = document.createElement("div");
      if (cloneType == "consumable") {
        displayItem.setAttribute("class", "m-display-item m-display-item-col");
      } else if (cloneType == "attack-melee") {
        displayItem.setAttribute("class", "m-display-item m-display-item-list");
      } else if (cloneType == "attack-ranged") {
        displayItem.setAttribute("class", "m-display-item m-display-item-list");
      } else if (cloneType == "note-character") {
        displayItem.setAttribute("class", "m-display-item m-display-item-list");
      } else if (cloneType == "note-story") {
        displayItem.setAttribute("class", "m-display-item m-display-item-list");
      };

      if (cloneType == "consumable") {
        for (var i in object) {

          if (i == "item") {
            var data = object[i];
            if (typeof data != "undefined" && data != "") {
              var span = document.createElement("span");
              span.setAttribute("class", "m-display-item-prefix");
              span.textContent = data;
              displayItem.appendChild(span);
            };
          } else if (i == "current") {
            var data = object[i];
            if (typeof data != "undefined" && data != "" || data == 0) {
              var span = document.createElement("span");
              span.setAttribute("class", "m-display-item-value");
              span.textContent = data;
              displayItem.appendChild(span);
            };
          };

        };

        li.appendChild(displayItem);
        target.appendChild(li);
      };

      if (cloneType == "attack-melee" || cloneType == "attack-ranged") {
        var div = document.createElement("div");
        div.setAttribute("class", "m-display-" + cloneType + "-item");
        for (var i in object) {

          if (i == "weapon" || i == "attack" || i == "damage" || i == "critical" || i == "range" || i == "ammo") {
            var data = object[i];
            if (typeof data != "undefined" && data != "") {
              var span = document.createElement("span");
              span.setAttribute("class", "m-display-" + cloneType + "-item-" + i);
              span.textContent = data;
              div.appendChild(span);
            };
          };

        };

        displayItem.appendChild(div);
        li.appendChild(displayItem);
        target.appendChild(li);
      };

      if (cloneType == "note-character" || cloneType == "note-story") {
        for (var i in object) {

          var data = object[i];
          if (typeof data != "undefined" && data != "") {
            displayItem.innerHTML = data;
          };

        };

        li.appendChild(displayItem);
        target.appendChild(li);
      };

    };

    var cloneType;
    if (path == "equipment.consumable") {
      cloneType = "consumable";
    };
    if (path == "offense.attack.melee") {
      cloneType = "attack-melee";
    };
    if (path == "offense.attack.ranged") {
      cloneType = "attack-ranged";
    };
    if (path == "notes.character") {
      cloneType = "note-character";
    };
    if (path == "notes.story") {
      cloneType = "note-story";
    };

    var all_clones = helper.getObject(sheet.getCharacter(), path);
    for (var i in all_clones) {
      var testForValues = false;
      for (var j in all_clones[i]) {
        if (typeof all_clones[i][j] != "undefined" && all_clones[i][j] != "") {
          testForValues = true;
        };
      };
      if (testForValues) {
        _render_displayClone(all_clones[i], target, cloneType);
      };
    };

  };

  function _render_stat(itemsToDisplay, target) {
    for (var i = 0; i < itemsToDisplay.length; i++) {
      var path = itemsToDisplay[i];
      var data = _get_stat(path, target);
    };
  };

  function _render_modifier(itemsToDisplay, target) {
    for (var i = 0; i < itemsToDisplay.length; i++) {
      var path = itemsToDisplay[i];
      var data = _get_modifier(path, target);
    };
  };

  function _render_textSnippet(itemsToDisplay, target, displayTitle, displayPrefix, displaySuffix) {
    for (var i = 0; i < itemsToDisplay.length; i++) {
      var path = itemsToDisplay[i];
      var title = displayTitle[i];
      var prefix = displayPrefix[i];
      var suffix = displaySuffix[i];
      var data = _get_textSnippet(path, target, title, prefix, suffix);
    };
  };

  function _render_textBlock(itemsToDisplay, target) {
    for (var i = 0; i < itemsToDisplay.length; i++) {
      var path = itemsToDisplay[i];
      var data = _get_textBlock(path, target);
    };
  };

  function _render_list(itemsToDisplay, target, displayPrefix, displaySuffix) {
    for (var i = 0; i < itemsToDisplay.length; i++) {
      var path = itemsToDisplay[i];
      var prefix = displayPrefix[i];
      var suffix = displaySuffix[i];
      var data = _get_list(path, target, prefix, suffix);
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

  function _render_clone(itemsToDisplay, target) {
    for (var i = 0; i < itemsToDisplay.length; i++) {
      var path = itemsToDisplay[i];
      var data = _get_clone(path, target);
    };
  };

  function _render_spell(target) {
    var data = _get_spell(target);
  };

  function _render_displayBlock() {
    var all_displayBlock = helper.eA(".js-display-block");
    for (var i = 0; i < all_displayBlock.length; i++) {

      var target = all_displayBlock[i].querySelector(".js-display-block-target");
      var itemsToDisplay;
      var displayTitle;
      var displayPrefix;
      var displaySuffix;
      var displayType = all_displayBlock[i].dataset.displayType;

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
      };

      if (displayType == "stat") {
        _render_stat(itemsToDisplay, target);
      } else if (displayType == "modifier") {
        _render_modifier(itemsToDisplay, target);
      } else if (displayType == "text-snippet") {
        _render_textSnippet(itemsToDisplay, target, displayTitle, displayPrefix, displaySuffix);
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
  };

  // exposed methods
  return {
    toggle: toggle,
    bind: bind,
    render: render,
    clear: clear
  };

})();
