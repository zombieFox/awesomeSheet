var display = (function() {

  function update() {};

  function clear() {
    var all_displayItems = helper.eA(".js-display-item");
    var displaySpell = helper.e(".js-display-spell");
    for (var i = 0; i < all_displayItems.length; i++) {
      while (all_displayItems[i].lastChild) {
        all_displayItems[i].removeChild(all_displayItems[i].lastChild);
      };
    };
    while (displaySpell.lastChild) {
      displaySpell.removeChild(displaySpell.lastChild);
    };
  };

  function render() {

    var all_displayItems = helper.eA(".js-display-item");
    for (var i = 0; i < all_displayItems.length; i++) {
      if (all_displayItems[i].dataset.display) {
        var itemsToDisplay = all_displayItems[i].dataset.display.split(',');
      };
      for (var j = 0; j < itemsToDisplay.length; j++) {
        var path = itemsToDisplay[j];
        var data = helper.getObject(sheet.getCharacter(), path);

        var makeDisplayItem = function(addressToCompare, beforeString, afterString) {
          if (typeof data != "undefined" && data != "" && itemsToDisplay[j] == addressToCompare) {
            return data = beforeString + data + afterString;
          } else {
            return data;
          };
        };

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

        makeDisplayItem("defense.hp.current", "<strong>HP</strong> ", "");
        makeDisplayItem("defense.hp.total", "<strong>Total HP</strong> ", "");
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

        makeDisplayItem("skills.acrobatics.current", "<strong>Acrobatics</strong> ", "");
        makeDisplayItem("skills.appraise.current", "<strong>Appraise</strong> ", "");
        makeDisplayItem("skills.bluff.current", "<strong>Bluff</strong> ", "");
        makeDisplayItem("skills.climb.current", "<strong>Climb</strong> ", "");
        makeDisplayItem("skills.craft_1.current", "<strong>Craft</strong> ", "");
        makeDisplayItem("skills.craft_2.current", "<strong>Craft</strong> ", "");
        makeDisplayItem("skills.diplomacy.current", "<strong>Diplomacy</strong> ", "");
        makeDisplayItem("skills.disable_device.current", "<strong>Disable Device</strong> ", "");
        makeDisplayItem("skills.disguise.current", "<strong>Disguise</strong> ", "");
        makeDisplayItem("skills.escape_artist.current", "<strong>Escape Artist</strong> ", "");
        makeDisplayItem("skills.fly.current", "<strong>Fly</strong> ", "");
        makeDisplayItem("skills.handle_animal.current", "<strong>Handle Animal</strong> ", "");
        makeDisplayItem("skills.heal.current", "<strong>Heal</strong> ", "");
        makeDisplayItem("skills.intimidate.current", "<strong>Intimidate</strong> ", "");
        makeDisplayItem("skills.knowledge_arcana.current", "<strong>Knowledge (Arcana)</strong> ", "");
        makeDisplayItem("skills.knowledge_dungeoneering.current", "<strong>Knowledge (Dungeoneering)</strong> ", "");
        makeDisplayItem("skills.knowledge_engineering.current", "<strong>Knowledge (Engineering)</strong> ", "");
        makeDisplayItem("skills.knowledge_geography.current", "<strong>Knowledge (Geography)</strong> ", "");
        makeDisplayItem("skills.knowledge_history.current", "<strong>Knowledge (History)</strong> ", "");
        makeDisplayItem("skills.knowledge_local.current", "<strong>Knowledge (Local)</strong> ", "");
        makeDisplayItem("skills.knowledge_nature.current", "<strong>Knowledge (Nature)</strong> ", "");
        makeDisplayItem("skills.knowledge_nobility.current", "<strong>Knowledge (Nobility)</strong> ", "");
        makeDisplayItem("skills.knowledge_planes.current", "<strong>Knowledge (Planes)</strong> ", "");
        makeDisplayItem("skills.knowledge_religion.current", "<strong>Knowledge (Religion)</strong> ", "");
        makeDisplayItem("skills.linguistics.current", "<strong>Linguistics</strong> ", "");
        makeDisplayItem("skills.perception.current", "<strong>Perception</strong> ", "");
        makeDisplayItem("skills.perform_1.current", "<strong>Perform</strong> ", "");
        makeDisplayItem("skills.perform_2.current", "<strong>Perform</strong> ", "");
        makeDisplayItem("skills.profession_1.current", "<strong>Profession</strong> ", "");
        makeDisplayItem("skills.profession_2.current", "<strong>Profession</strong> ", "");
        makeDisplayItem("skills.ride.current", "<strong>Ride</strong> ", "");
        makeDisplayItem("skills.sense_motive.current", "<strong>Sense Motive</strong> ", "");
        makeDisplayItem("skills.sleight_of_hand.current", "<strong>Sleight Of Hand</strong> ", "");
        makeDisplayItem("skills.spellcraft.current", "<strong>Spellcraft</strong> ", "");
        makeDisplayItem("skills.stealth.current", "<strong>Stealth</strong> ", "");
        makeDisplayItem("skills.survival.current", "<strong>Survival</strong> ", "");
        makeDisplayItem("skills.swim.current", "<strong>Swim</strong> ", "");
        makeDisplayItem("skills.use_magic_device.current", "<strong>Use Magic Device</strong> ", "");
        makeDisplayItem("skills.custom_1.current", "<strong>Custom</strong> ", "");
        makeDisplayItem("skills.custom_2.current", "<strong>Custom</strong> ", "");
        makeDisplayItem("skills.custom_3.current", "<strong>Custom</strong> ", "");
        makeDisplayItem("skills.custom_4.current", "<strong>Custom</strong> ", "");

        makeDisplayItem("notes.character", "<strong>Character Notes</strong><br> ", "");
        makeDisplayItem("notes.story", "<strong>Story Notes</strong><br> ", "")

        if (typeof data != "undefined" && data != "") {
          var text = document.createElement("span");
          text.className = "m-display-item";
          text.innerHTML = data;
          all_displayItems[i].appendChild(text);
        };
      };
    };

    function _allSpellLevels() {
      // build an array of spell objects
      var spellsToRender;
      // iterate over all objects keys to find spells then push those values to spellsToRender
      if (sheet.getCharacter().spells.book) {
        for (var i in sheet.getCharacter().spells.book) {
          for (var j in sheet.getCharacter().spells.book[i]) {
            spellsToRender = sheet.getCharacter().spells.book[i][j];
          };
          _render_displaySpell(spellsToRender, i);
        };
      };
    };

    function _render_displaySpell(array, level) {
      var displaySpell = helper.e(".js-display-spell");
      // read spells and add them to spell lists
      for (var i = 0; i < array.length; i++) {
        var spellObject = array[i];
        // find spell list to add too
        var knownListToSaveTo;
        if (helper.e(".js-display-spell-level-" + level)) {
          knownListToSaveTo = helper.e(".js-display-spell-level-" + level);
        } else {
          knownListToSaveTo = document.createElement("p");
          knownListToSaveTo.className = "js-display-spell-level-" + level;
          listNameP = document.createElement("p");
          listNameStrong = document.createElement("strong");
          listNameStrong.innerHTML = "Level " + level;
          listNameP.appendChild(listNameStrong);
          displaySpell.appendChild(listNameP);
          displaySpell.appendChild(knownListToSaveTo);
        };
        // make spell
        var spell = document.createElement("span");
        spell.className = "m-display-spell";
        var name = document.createElement("span");
        name.className = "m-display-spell-name";
        name.innerHTML = spellObject.name;
        spell.appendChild(name);
        // add spell marks
        if (spellObject.prepared > 0) {
          var marks = document.createElement("span");
          marks.className = "m-display-spell-marks js-display-spell-marks";
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
          active.className = "m-display-spell-active js-display-spell-active";
          // spell.appendChild(active);
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

    _allSpellLevels();

  };

  // exposed methods
  return {
    render: render,
    update: update,
    clear: clear
  };

})();
