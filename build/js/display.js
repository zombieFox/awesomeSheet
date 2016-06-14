var display = (function() {

  function bind() {
    var fabButton = helper.e(".js-fab-button");
    var displayBlockQuickEdit = helper.eA(".js-display-block-quick-edit");
    fabButton.addEventListener("click", toggle, false);
    for (var i = 0; i < displayBlockQuickEdit.length; i++) {
      displayBlockQuickEdit[i].addEventListener("click", function(event) {
        _toggleQuickEdit(this);
        totalBlock.update();
        clear();
        render();
        event.stopPropagation();
        event.preventDefault()
      }, false);
    };
  };

  function _toggleQuickEdit(element) {
    var node = helper.e(".js-" + element.dataset.miniView);
    // helper.toggleClass(node, "is-collapsed");
    // var height = getComputedStyle(node).height;
    // helper.toggleClass(node, "is-collapsed");
    // node.style.height = height + "px";
    // getComputedStyle(node).height;
    // if (node.style.height) {
    //   node.removeAttribute("style");
    // } else {
    //   node.setAttribute("style", "height:" + height + " !important");
    // };
    helper.toggleClass(node, "is-expanded");
  };

  function toggle() {
    var body = helper.e("body");
    var fabIcon = helper.e(".js-fab-icon");
    var quickNavLink = helper.e(".js-quick-nav");
    var hamburger = helper.e(".js-hamburger");
    var all_quickNavLink = helper.eA(".js-quick-nav-link");
    var all_sectionEdit = helper.eA(".js-section-edit");
    var all_sectionDisplay = helper.eA(".js-section-display");
    if (body.dataset.awesomeMode == "edit" || typeof body.dataset.awesomeMode == "undefined" || body.dataset.awesomeMode == "") {
      body.dataset.awesomeMode = "display";
      for (var i = 0; i < all_quickNavLink.length; i++) {
        helper.addClass(all_quickNavLink[i], "is-invisible");
      };
      for (var i = 0; i < all_sectionEdit.length; i++) {
        all_sectionEdit[i].removeAttribute("style");
        helper.addClass(all_sectionEdit[i], "is-collapsed");
        helper.addClass(all_sectionEdit[i], "m-quick-edit");
        helper.removeClass(all_sectionEdit[i], "is-pinned");
        var sectionHeading = all_sectionEdit[i].querySelector(".js-section-heading");
        if (sectionHeading) {
          helper.removeClass(sectionHeading, "is-pinned");
        };
      };
      for (var i = 0; i < all_sectionDisplay.length; i++) {
        helper.removeClass(all_sectionDisplay[i], "is-hidden");
      };
      helper.addClass(quickNavLink, "m-quick-nav-display");
      helper.addClass(hamburger, "m-hamburger-dark");
      helper.addClass(fabIcon, "icon-edit");
      helper.removeClass(fabIcon, "icon-reader-mode");
    } else if (body.dataset.awesomeMode == "display" || typeof body.dataset.awesomeMode == "undefined") {
      body.dataset.awesomeMode = "edit";
      for (var i = 0; i < all_quickNavLink.length; i++) {
        helper.removeClass(all_quickNavLink[i], "is-invisible");
      };
      for (var i = 0; i < all_sectionEdit.length; i++) {
        helper.removeClass(all_sectionEdit[i], "is-collapsed");
        helper.removeClass(all_sectionEdit[i], "m-quick-edit");
      };
      for (var i = 0; i < all_sectionDisplay.length; i++) {
        helper.addClass(all_sectionDisplay[i], "is-hidden");
      };
      helper.removeClass(quickNavLink, "m-quick-nav-display");
      helper.removeClass(hamburger, "m-hamburger-dark");
      helper.removeClass(fabIcon, "icon-edit");
      helper.addClass(fabIcon, "icon-reader-mode");
      nav.lastSectionHeight();
    };
    totalBlock.update();
    clear();
    render();
  };

  function clear() {
    var all_displayItem = helper.eA(".js-display-block");
    var displaySpell = helper.e(".js-display-block-spell");
    var displayAttack = helper.e(".js-display-block-attack");
    var displayConsumable = helper.e(".js-display-block-consumable");

    var removeAllChildren = function(parent) {
      while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
      };
    };

    for (var i = 0; i < all_displayItem.length; i++) {
      removeAllChildren(all_displayItem[i]);
    };

    removeAllChildren(displaySpell);
    removeAllChildren(displayAttack);
    removeAllChildren(displayConsumable);
  };

  function render() {

    function _displayItem() {
      var all_displayBlock = helper.eA(".js-display-block");
      for (var i = 0; i < all_displayBlock.length; i++) {
        if (all_displayBlock[i].dataset.display) {
          var itemsToDisplay = all_displayBlock[i].dataset.display.split(',');
        };
        for (var j = 0; j < itemsToDisplay.length; j++) {
          var path = itemsToDisplay[j];
          var data = helper.getObject(sheet.getCharacter(), path);

          var makeDisplayItem = function(addressToCompare, beforeString, afterString) {
            if (typeof data != "undefined" && data != "" && itemsToDisplay[j] == addressToCompare) {
              data = beforeString + data + afterString;
              return data;
            } else {
              return data;
            };
          };

          var hp = function(addressToCompare) {
            if (typeof data != "undefined" && data != "" && itemsToDisplay[j] == addressToCompare) {
              data = "<strong>HP " + data + "</strong> / " + helper.getObject(sheet.getCharacter(), "defense.hp.total");
              return data;
            };
          };

          var customSkillName = function(data) {
            if (typeof data != "undefined" && data != "") {
              return data;
            } else {
              return "Custom skill";
            };
          };

          var skillVariantName = function(data) {
            if (typeof data != "undefined" && data != "") {
              return " (" + data + ") ";
            } else {
              return "";
            };
          };

          makeDisplayItem("basics.speed", "Speed ", "");
          makeDisplayItem("basics.initiative", "Initiative ", "");
          makeDisplayItem("basics.xp", "", " xp");
          makeDisplayItem("basics.age", "", " years old");
          makeDisplayItem("basics.hero_points", "", " hero point");
          makeDisplayItem("basics.luck_points", "", " luck point");

          makeDisplayItem("statistics.stats.str.score", "<strong>Str</strong> ", "");
          makeDisplayItem("statistics.stats.str.temp", "<strong>Str temp</strong> ", "");
          makeDisplayItem("statistics.stats.dex.score", "<strong>Dex</strong> ", "");
          makeDisplayItem("statistics.stats.dex.temp", "<strong>Dex temp</strong> ", "");
          makeDisplayItem("statistics.stats.con.score", "<strong>Con</strong> ", "");
          makeDisplayItem("statistics.stats.con.temp", "<strong>Con temp</strong> ", "");
          makeDisplayItem("statistics.stats.int.score", "<strong>Int</strong> ", "");
          makeDisplayItem("statistics.stats.int.temp", "<strong>Int temp</strong> ", "");
          makeDisplayItem("statistics.stats.wis.score", "<strong>Wis</strong> ", "");
          makeDisplayItem("statistics.stats.wis.temp", "<strong>Wis temp</strong> ", "");
          makeDisplayItem("statistics.stats.cha.score", "<strong>Cha</strong> ", "");
          makeDisplayItem("statistics.stats.cha.temp", "<strong>Cha temp</strong> ", "");
          makeDisplayItem("statistics.feats", "<strong>Feats</strong> ", "");
          makeDisplayItem("statistics.traits", "<strong>Traits</strong> ", "");
          makeDisplayItem("statistics.special_abilities", "<strong>Special Abilities</strong> ", "");
          makeDisplayItem("statistics.languages", "<strong>Languages</strong> ", "");

          makeDisplayItem("equipment.gear", "<strong>Gear</strong> ", "");
          makeDisplayItem("equipment.magic_gear", "<strong>Magic Gear</strong> ", "");
          makeDisplayItem("equipment.body_slots.armor", "<strong>Armor</strong> ", "");
          makeDisplayItem("equipment.body_slots.belts", "<strong>Belts</strong> ", "");
          makeDisplayItem("equipment.body_slots.body", "<strong>Body</strong> ", "");
          makeDisplayItem("equipment.body_slots.chest", "<strong>Chest</strong> ", "");
          makeDisplayItem("equipment.body_slots.eyes", "<strong>Eyes</strong> ", "");
          makeDisplayItem("equipment.body_slots.feet", "<strong>Feet</strong> ", "");
          makeDisplayItem("equipment.body_slots.hands", "<strong>Hands</strong> ", "");
          makeDisplayItem("equipment.body_slots.head", "<strong>Head</strong> ", "");
          makeDisplayItem("equipment.body_slots.headband", "<strong>Headband</strong> ", "");
          makeDisplayItem("equipment.body_slots.neck", "<strong>Neck</strong> ", "");
          makeDisplayItem("equipment.body_slots.ring_left_hand", "<strong>Ring (Left Hand)</strong> ", "");
          makeDisplayItem("equipment.body_slots.ring_right_hand", "<strong>Ring (Right Hand)</strong> ", "");
          makeDisplayItem("equipment.body_slots.shield", "<strong>Shield</strong> ", "");
          makeDisplayItem("equipment.body_slots.shoulders", "<strong>Shoulders</strong> ", "");
          makeDisplayItem("equipment.body_slots.wrist", "<strong>Wrist</strong> ", "");
          makeDisplayItem("equipment.wealth.platinum", "<strong>PP</strong> ", "");
          makeDisplayItem("equipment.wealth.gold", "<strong>GP</strong> ", "");
          makeDisplayItem("equipment.wealth.silver", "<strong>SP</strong> ", "");
          makeDisplayItem("equipment.wealth.copper", "<strong>CP</strong> ", "");

          hp("defense.hp.current");
          makeDisplayItem("defense.hp.temp", "<strong>Temp HP </strong> ", "");
          makeDisplayItem("defense.hp.non_lethal_damage", "<strong>Nonlethal Damage</strong> ", "");
          makeDisplayItem("defense.ac.current", "<strong>AC</strong> ", "");
          makeDisplayItem("defense.flat_footed.current", "<strong>Flat Footed</strong> ", "");
          makeDisplayItem("defense.touch.current", "<strong>Touch</strong> ", "");
          makeDisplayItem("defense.fortitude.current", "<strong>Fortitude</strong> ", "");
          makeDisplayItem("defense.reflex.current", "<strong>Reflex</strong> ", "");
          makeDisplayItem("defense.will.current", "<strong>Will</strong> ", "");

          makeDisplayItem("offense.base_attack", "<strong>BAB</strong> ", "");
          makeDisplayItem("offense.concentration", "<strong>Concentration</strong> ", "");
          makeDisplayItem("offense.cmb.current", "<strong>CMB</strong> ", "");
          makeDisplayItem("offense.cmd.current", "<strong>CMD</strong> ", "");
          makeDisplayItem("offense.melee_attack.current", "<strong>Melee</strong> ", "");
          makeDisplayItem("offense.ranged_attack.current", "<strong>Ranged</strong> ", "");

          makeDisplayItem("skills.acrobatics.current", "Acrobatics <strong>", "</strong>");
          makeDisplayItem("skills.appraise.current", "Appraise <strong>", "</strong>");
          makeDisplayItem("skills.bluff.current", "Bluff <strong>", "</strong>");
          makeDisplayItem("skills.climb.current", "Climb <strong>", "</strong>");
          makeDisplayItem("skills.craft_1.current", "Craft" + skillVariantName(sheet.getCharacter().skills.craft_1.variant_name) + " <strong>", "</strong>");
          makeDisplayItem("skills.craft_2.current", "Craft" + skillVariantName(sheet.getCharacter().skills.craft_2.variant_name) + " <strong>", "</strong>");
          makeDisplayItem("skills.diplomacy.current", "Diplomacy <strong>", "</strong>");
          makeDisplayItem("skills.disable_device.current", "Disable Device <strong>", "</strong>");
          makeDisplayItem("skills.disguise.current", "Disguise <strong>", "</strong>");
          makeDisplayItem("skills.escape_artist.current", "Escape Artist <strong>", "</strong>");
          makeDisplayItem("skills.fly.current", "Fly <strong>", "</strong>");
          makeDisplayItem("skills.handle_animal.current", "Handle Animal <strong>", "</strong>");
          makeDisplayItem("skills.heal.current", "Heal <strong>", "</strong>");
          makeDisplayItem("skills.intimidate.current", "Intimidate <strong>", "</strong>");
          makeDisplayItem("skills.knowledge_arcana.current", "Knowledge (Arcana) <strong>", "</strong>");
          makeDisplayItem("skills.knowledge_dungeoneering.current", "Knowledge (Dungeoneering) <strong>", "</strong>");
          makeDisplayItem("skills.knowledge_engineering.current", "Knowledge (Engineering) <strong>", "</strong>");
          makeDisplayItem("skills.knowledge_geography.current", "Knowledge (Geography) <strong>", "</strong>");
          makeDisplayItem("skills.knowledge_history.current", "Knowledge (History) <strong>", "</strong>");
          makeDisplayItem("skills.knowledge_local.current", "Knowledge (Local) <strong>", "</strong>");
          makeDisplayItem("skills.knowledge_nature.current", "Knowledge (Nature) <strong>", "</strong>");
          makeDisplayItem("skills.knowledge_nobility.current", "Knowledge (Nobility) <strong>", "</strong>");
          makeDisplayItem("skills.knowledge_planes.current", "Knowledge (Planes) <strong>", "</strong>");
          makeDisplayItem("skills.knowledge_religion.current", "Knowledge (Religion) <strong>", "</strong>");
          makeDisplayItem("skills.linguistics.current", "Linguistics <strong>", "</strong>");
          makeDisplayItem("skills.perception.current", "Perception <strong>", "</strong>");
          makeDisplayItem("skills.perform_1.current", "Perform" + skillVariantName(sheet.getCharacter().skills.perform_1.variant_name) + " <strong>", "</strong>");
          makeDisplayItem("skills.perform_2.current", "Perform" + skillVariantName(sheet.getCharacter().skills.perform_2.variant_name) + " <strong>", "</strong>");
          makeDisplayItem("skills.profession_1.current", "Profession" + skillVariantName(sheet.getCharacter().skills.profession_1.variant_name) + " <strong>", "</strong>");
          makeDisplayItem("skills.profession_2.current", "Profession" + skillVariantName(sheet.getCharacter().skills.profession_2.variant_name) + " <strong>", "</strong>");
          makeDisplayItem("skills.ride.current", "Ride <strong>", "</strong>");
          makeDisplayItem("skills.sense_motive.current", "Sense Motive <strong>", "</strong>");
          makeDisplayItem("skills.sleight_of_hand.current", "Sleight Of Hand <strong>", "</strong>");
          makeDisplayItem("skills.spellcraft.current", "Spellcraft <strong>", "</strong>");
          makeDisplayItem("skills.stealth.current", "Stealth <strong>", "</strong>");
          makeDisplayItem("skills.survival.current", "Survival <strong>", "</strong>");
          makeDisplayItem("skills.swim.current", "Swim <strong>", "</strong>");
          makeDisplayItem("skills.use_magic_device.current", "Use Magic Device <strong>", "</strong>");
          makeDisplayItem("skills.custom_1.current", customSkillName(sheet.getCharacter().skills.custom_1.name) + " <strong>", "</strong>");
          makeDisplayItem("skills.custom_2.current", customSkillName(sheet.getCharacter().skills.custom_2.name) + " <strong>", "</strong>");
          makeDisplayItem("skills.custom_3.current", customSkillName(sheet.getCharacter().skills.custom_3.name) + " <strong>", "</strong>");
          makeDisplayItem("skills.custom_4.current", customSkillName(sheet.getCharacter().skills.custom_4.name) + " <strong>", "</strong>");

          makeDisplayItem("notes.character", "", "");
          makeDisplayItem("notes.story", "", "");

          if (typeof data != "undefined" && data != "") {
            var text = document.createElement("span");
            text.setAttribute("class", "m-display-item");
            text.innerHTML = data;
            all_displayBlock[i].appendChild(text);
          };
        };
      };
    };

    function _displaySpell() {
      // build an array of spell objects
      var spellsToRender;
      // iterate over all objects keys to find spells
      if (sheet.getCharacter().spells.book) {
        for (var i in sheet.getCharacter().spells.book) {
          for (var j in sheet.getCharacter().spells.book[i]) {
            spellsToRender = sheet.getCharacter().spells.book[i][j];
            _render_displaySpell(spellsToRender, i);
          };
        };
      };
    };

    function _displayAttackMelee() {
      var attacksToRender;
      if (sheet.getCharacter().offense.attack.melee) {
        for (var i in sheet.getCharacter().offense.attack.melee) {
          _render_displayClone(sheet.getCharacter().offense.attack.melee[i], helper.e(".js-display-block-attack"));
        };
      };
    };

    function _displayAttackRanged() {
      var attacksToRender;
      if (sheet.getCharacter().offense.attack.ranged) {
        for (var i in sheet.getCharacter().offense.attack.ranged) {
          _render_displayClone(sheet.getCharacter().offense.attack.ranged[i], helper.e(".js-display-block-attack"));
        };
      };
    };

    function _displayConsumable() {
      var attacksToRender;
      if (sheet.getCharacter().equipment.consumable) {
        for (var i in sheet.getCharacter().equipment.consumable) {
          _render_displayClone(sheet.getCharacter().equipment.consumable[i], helper.e(".js-display-block-consumable"));
        };
      };
    };

    function _render_displaySpell(array, level) {
      var displaySpell = helper.e(".js-display-block-spell");
      // read spells and add them to spell lists
      for (var i = 0; i < array.length; i++) {
        var spellObject = array[i];
        // find spell list to add too
        var knownListToSaveTo;
        if (helper.e(".js-display-spell-level-" + level)) {
          knownListToSaveTo = helper.e(".js-display-spell-level-" + level);
        } else {
          knownListToSaveTo = document.createElement("p");
          knownListToSaveTo.setAttribute("class", "m-display-block js-display-spell-level-" + level);
          var para = document.createElement("p");
          para.setAttribute("class", "m-display-block");
          var strong = document.createElement("strong");
          strong.innerHTML = "Level " + level;
          para.appendChild(strong);
          displaySpell.appendChild(para);
          displaySpell.appendChild(knownListToSaveTo);
        };
        // make spell
        var spell = document.createElement("span");
        spell.setAttribute("class", "m-display-spell");
        var name = document.createElement("span");
        name.setAttribute("class", "m-display-spell-name");
        name.innerHTML = spellObject.name;
        spell.appendChild(name);
        // add spell marks
        if (spellObject.prepared > 0) {
          var marks = document.createElement("span");
          marks.setAttribute("class", "m-display-spell-marks js-display-spell-marks");
          spell.appendChild(marks);
          var spellMarks = spell.querySelector(".js-display-spell-marks");
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
              helper.toggleClass(all_check[j], "icon-radio-button-checked");
              helper.toggleClass(all_check[j], "icon-radio-button-unchecked");
              helper.toggleClass(all_check[j], "js-display-spell-mark-checked");
              helper.toggleClass(all_check[j], "js-display-spell-mark-unchecked");
            };
          };
          if (spellObject.cast >= spellObject.prepared) {
            helper.removeClass(spell, "button-primary");
          };
        };
        // if spell is active
        if (spellObject.active) {
          var active = document.createElement("span");
          active.setAttribute("class", "m-display-spell-active js-display-spell-active");
          spell.insertBefore(active, spell.firstChild);
          var spellActive = spell.querySelector(".js-display-spell-active");
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
        knownListToSaveTo.appendChild(spell);
      };
    };

    function _render_displayClone(object, displayTarget) {
      var displayAttack = helper.e(".js-display-attack");
      var para = document.createElement("p");
      para.setAttribute("class", "m-display-block");
      for (var i in object) {
        var data = object[i];

        var makeDisplayItem = function(addressToCompare, beforeString, afterString) {
          if (typeof data != "undefined" && data != "" && i == addressToCompare) {
            return data = beforeString + data + afterString;
          } else {
            return data;
          };
        };

        makeDisplayItem("weapon", "<strong>", "</strong>");
        makeDisplayItem("attack", "<strong>", "</strong>");
        makeDisplayItem("damage", "", "");
        makeDisplayItem("critical", "Critical ", "");
        makeDisplayItem("range", "Range ", "");
        makeDisplayItem("ammo", "Ammo ", "");
        makeDisplayItem("item", "<strong>", "</strong>");
        makeDisplayItem("current", "<strong>", "</strong>");
        makeDisplayItem("used", "Used ", "");
        makeDisplayItem("total", "Total ", "");

        var span = document.createElement("span");
        span.setAttribute("class", "m-display-item");
        span.innerHTML = data;

        if (typeof data != "undefined" && data != "") {
          para.appendChild(span);
        };

      };
      displayTarget.appendChild(para);
    };

    _displayItem();
    _displaySpell();
    _displayAttackMelee();
    _displayAttackRanged();
    _displayConsumable();

  };

  // exposed methods
  return {
    toggle: toggle,
    bind: bind,
    render: render,
    clear: clear
  };

})();
