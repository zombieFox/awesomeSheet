var repair = (function() {

  function render(characterObject) {
    // console.log("fire repair update");
    // update events
    if (characterObject.events.length > 0) {
      for (var i = 0; i < characterObject.events.length; i++) {
        if (characterObject.events[i].event.aggregateValue) {
          characterObject.events[i].event.aggregate_value = characterObject.events[i].event.aggregateValue;
          delete characterObject.events[i].event.aggregateValue;
          // console.log(characterObject.events[i].event);
        };
      };
    };
    // update stats
    if (!characterObject.statistics.stats.str.enhancement && characterObject.statistics.stats.str.enhancement != "" || !characterObject.statistics.stats.dex.enhancement && characterObject.statistics.stats.dex.enhancement != "" || !characterObject.statistics.stats.con.enhancement && characterObject.statistics.stats.con.enhancement != "" || !characterObject.statistics.stats.int.enhancement && characterObject.statistics.stats.int.enhancement != "" || !characterObject.statistics.stats.wis.enhancement && characterObject.statistics.stats.wis.enhancement != "" || !characterObject.statistics.stats.cha.enhancement && characterObject.statistics.stats.cha.enhancement != "") {
      // console.log(characterObject.basics.name);
      for (var key in characterObject.statistics.stats) {
        var score = parseInt(characterObject.statistics.stats[key].score, 10);
        var tempScore = parseInt(characterObject.statistics.stats[key].temp_score, 10);
        // console.log(key, "new score = ", score, "\t\ttempScore = ", tempScore);
        characterObject.statistics.stats[key].base = score;
        if (!isNaN(tempScore)) {
          characterObject.statistics.stats[key].temp = (tempScore - score);
        } else {
          characterObject.statistics.stats[key].temp = "";
        };
        delete characterObject.statistics.stats[key].score;
        delete characterObject.statistics.stats[key].temp_score;
        delete characterObject.statistics.stats[key].temp_modifier;
      };
    };
    // update attack types
    if (characterObject.offense.attack.melee.length > 0) {
      for (var i = 0; i < characterObject.offense.attack.melee.length; i++) {
        if (!characterObject.offense.attack.melee[i].type) {
          characterObject.offense.attack.melee[i].type = "";
        };
      };
    };
    if (characterObject.offense.attack.ranged.length > 0) {
      for (var i = 0; i < characterObject.offense.attack.ranged.length; i++) {
        if (!characterObject.offense.attack.ranged[i].type) {
          characterObject.offense.attack.ranged[i].type = "";
        };
      };
    };
    // update character image
    if (!characterObject.basics.character_image) {
      characterObject.basics.character_image = {
        background: "",
        color: {
          r: "",
          g: "",
          b: ""
        },
        contain: "",
        cover: "",
        image: "",
        orientation: "",
        position: {
          x: "",
          y: ""
        },
        scale: ""
      };
    };
    // update speed
    if (typeof characterObject.basics.speed == "string" || typeof characterObject.basics.speed == "number" || characterObject.basics.speed == "" || typeof characterObject.basics.speed != "object") {
      var oldSpeed = characterObject.basics.speed;
      characterObject.basics.speed = {};
      characterObject.basics.speed.land = oldSpeed;
    };
    // update xp and next level
    if (typeof characterObject.basics.xp == "string" || typeof characterObject.basics.xp == "number") {
      var oldXp;
      if (typeof characterObject.basics.xp == "number") {
        oldXp = characterObject.basics.xp;
      } else if (typeof characterObject.basics.xp == "string") {
        oldXp = parseInt(characterObject.basics.xp.replace(/,/g, ""), 10);
      };
      if (isNaN(oldXp)) {
        oldXp = "";
      };
      characterObject.basics.xp = {};
      characterObject.basics.xp.total = oldXp;
    };
    // add events array
    if (!characterObject.hasOwnProperty("events")) {
      characterObject.events = [];
    };
    // udpate wealth
    if (typeof characterObject.equipment.wealth.platinum == "string" && !characterObject.equipment.wealth.platinum == "") {
      characterObject.equipment.wealth.platinum = parseInt(characterObject.equipment.wealth.platinum.replace(/,/g, ""), 10);
    };
    if (typeof characterObject.equipment.wealth.gold == "string" && !characterObject.equipment.wealth.gold == "") {
      characterObject.equipment.wealth.gold = parseInt(characterObject.equipment.wealth.gold.replace(/,/g, ""), 10);
    };
    if (typeof characterObject.equipment.wealth.silver == "string" && !characterObject.equipment.wealth.silver == "") {
      characterObject.equipment.wealth.silver = parseInt(characterObject.equipment.wealth.silver.replace(/,/g, ""), 10);
    };
    if (typeof characterObject.equipment.wealth.copper == "string" && !characterObject.equipment.wealth.copper == "") {
      characterObject.equipment.wealth.copper = parseInt(characterObject.equipment.wealth.copper.replace(/,/g, ""), 10);
    };
    // udpate xp
    if (typeof characterObject.basics.xp == "string" && !characterObject.basics.xp == "") {
      characterObject.basics.xp = parseInt(characterObject.basics.xp.replace(/,/g, ""), 10);
    };
    // udpate encumbrance
    if ("light" in characterObject.equipment.encumbrance || "medium" in characterObject.equipment.encumbrance || "heavy" in characterObject.equipment.encumbrance || "lift" in characterObject.equipment.encumbrance || "drag" in characterObject.equipment.encumbrance) {
      delete characterObject.equipment.encumbrance.light;
      delete characterObject.equipment.encumbrance.medium;
      delete characterObject.equipment.encumbrance.heavy;
      delete characterObject.equipment.encumbrance.lift;
      delete characterObject.equipment.encumbrance.drag;
    };
    // update caster level check
    if (!characterObject.spells.caster_level_check) {
      // console.log("--------\t\tupdate caster level check");
      characterObject.spells.caster_level_check = {
        current: "",
        misc: "",
        temp: "",
        feat: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: true,
          half_level: false
        }
      };
    };
    // update classes
    if (!characterObject.basics.classes) {
      // console.log("--------\t\tupdate classes");
      characterObject.basics.classes = [{
        classname: "",
        level: "",
        hp: "",
        fortitude: "",
        reflex: "",
        will: "",
        ranks: "",
        bab: ""
      }];
      // move class to classes
      if (characterObject.basics.class != "") {
        characterObject.basics.classes[0].classname = characterObject.basics.class;
      };
      // move level to classes
      if (characterObject.basics.level != "") {
        characterObject.basics.classes[0].level = parseInt(characterObject.basics.level, 10);
        characterObject.basics.level = "";
      };
      // remove con bonus from hp and add it to classes
      if (characterObject.defense.hp.total != "") {
        var conMod = 0;
        if (characterObject.statistics.stats.con.temp_score != "") {
          conMod = Math.floor((parseInt(characterObject.statistics.stats.con.temp_score, 10) - 10) / 2);
        } else {
          conMod = Math.floor((parseInt(characterObject.statistics.stats.con.score, 10) - 10) / 2);
        };
        var conHp = conMod * characterObject.basics.classes[0].level;
        characterObject.basics.classes[0].hp = characterObject.defense.hp.total - conHp;
        characterObject.defense.hp.total = "";
      };
      // move bab
      if (characterObject.offense.base_attack != "") {
        characterObject.basics.classes[0].bab = parseInt(characterObject.offense.base_attack, 10);
        characterObject.offense.base_attack = "";
        characterObject.offense.base_attack_bonuses = "";
      };
      // move base saves
      if (characterObject.defense.fortitude.base != "") {
        characterObject.basics.classes[0].fortitude = characterObject.defense.fortitude.base;
      };
      if (characterObject.defense.reflex.base != "") {
        characterObject.basics.classes[0].reflex = characterObject.defense.reflex.base;
      };
      if (characterObject.defense.will.base != "") {
        characterObject.basics.classes[0].will = characterObject.defense.will.base;
      };
      delete characterObject.basics.class;
    };
    // remove racial save bonuses
    ifRacial("racial", characterObject.defense.fortitude);
    ifRacial("racial", characterObject.defense.reflex);
    ifRacial("racial", characterObject.defense.will);

    function ifRacial(key, object) {
      if (key in object) {
        // console.log("\t\tremove racial save bonuses");
        if (object.racial != "" && !isNaN(object.racial)) {
          // console.log("racial found");
          // console.log(object, object.racial);
          if (object.misc != "" && !isNaN(object.misc)) {
            // console.log("misc found");
            // console.log(object.misc);
            object.misc = object.misc + object.racial;
          } else {
            object.misc = object.racial;
          };
        };
        delete object[key];
      };
    };
    // update armor
    if (typeof characterObject.equipment.armor != "object") {
      // console.log("\t\tupdate armor");
      characterObject.equipment.armor = {
        armor: "",
        check_penalty: "",
        max_dex: "",
        shield: ""
      };
      if (characterObject.equipment.body_slots.armor != "") {
        characterObject.equipment.armor.armor = characterObject.equipment.body_slots.armor;
      };
      if (characterObject.equipment.body_slots.shield != "") {
        characterObject.equipment.armor.shield = characterObject.equipment.body_slots.shield;
      };
      if (characterObject.defense.ac.max_dex != "") {
        characterObject.equipment.armor.max_dex = characterObject.defense.ac.max_dex;
      };
      if (characterObject.defense.ac.check_penalty != "") {
        characterObject.equipment.armor.check_penalty = characterObject.defense.ac.check_penalty;
      };
      delete characterObject.equipment.body_slots.armor;
      delete characterObject.equipment.body_slots.shield;
      delete characterObject.defense.ac.max_dex;
      delete characterObject.defense.ac.check_penalty;
    };
    // update alignment
    if (["Lawful Good", "Lawful Neutral", "Lawful Evil", "Neutral Good", "Neutral", "Neutral Evil", "Chaotic Good", "Chaotic Neutral", "Chaotic Evil"].indexOf(characterObject.basics.alignment) === -1) {
      if (["Lawful Good", "Lawful good", "lawful good", "LG", "Lg", "lg"].indexOf(characterObject.basics.alignment) > -1) {
        characterObject.basics.alignment = "Lawful Good";
      };
      if (["Lawful Neutral", "Lawful neutral", "lawful neutral", "LN", "Ln", "ln"].indexOf(characterObject.basics.alignment) > -1) {
        characterObject.basics.alignment = "Lawful Neutral";
      };
      if (["Lawful Evil", "Lawful evil", "lawful evil", "LE", "Le", "le"].indexOf(characterObject.basics.alignment) > -1) {
        characterObject.basics.alignment = "Lawful Evil";
      };
      if (["Neutral Good", "Neutral good", "neutral good", "NG", "Ng", "ng"].indexOf(characterObject.basics.alignment) > -1) {
        characterObject.basics.alignment = "Neutral Good";
      };
      if (["Neutral", "Neutral", "neutral", "N", "n"].indexOf(characterObject.basics.alignment) > -1) {
        characterObject.basics.alignment = "Neutral";
      };
      if (["Neutral Evil", "Neutral evil", "neutral evil", "NE", "Ne", "ne"].indexOf(characterObject.basics.alignment) > -1) {
        characterObject.basics.alignment = "Neutral Evil";
      };
      if (["Chaotic Good", "Chaotic good", "chaotic good", "CG", "Cg", "cg"].indexOf(characterObject.basics.alignment) > -1) {
        characterObject.basics.alignment = "Chaotic Good";
      };
      if (["Chaotic Neutral", "Chaotic neutral", "chaotic neutral", "CN", "Cn", "cn"].indexOf(characterObject.basics.alignment) > -1) {
        characterObject.basics.alignment = "Chaotic Neutral";
      };
      if (["Chaotic Evil", "Chaotic evil", "chaotic evil", "CE", "Ce", "ce"].indexOf(characterObject.basics.alignment) > -1) {
        characterObject.basics.alignment = "Chaotic Evil";
      };
    };
    // add size object
    if (typeof characterObject.basics.size != "object" || "size_bonus" in characterObject.defense.ac) {
      // console.log("\t\tadd size object");
      var size = characterObject.basics.size;
      if (size == "M" || size == "m" || size == "medium" || size == "Medium" || size != "") {
        size = "Medium";
      } else if (size == "") {
        size = false;
      };
      characterObject.basics.size = {
        category: "",
        size_modifier: 0,
        special_size_modifier: 0,
        size_modifier_fly: 0,
        size_modifier_stealth: 0
      };
      if (size) {
        characterObject.basics.size.category = size;
      };
      delete characterObject.defense.ac.size_bonus;
      delete characterObject.offense.cmb.size;
      delete characterObject.offense.cmd.size;
      delete characterObject.offense.melee_attack.size;
      delete characterObject.offense.ranged_attack.size;
      characterObject.offense.cmb.bonuses.special_size = true;
      characterObject.offense.cmd.bonuses.special_size = true;
      characterObject.offense.melee_attack.bonuses.size = true;
      characterObject.offense.ranged_attack.bonuses.size = true;
      characterObject.skills.fly.bonuses.size_modifier_fly = true;
      characterObject.skills.stealth.bonuses.size_modifier_stealth = true;
    };
    // add initiative object
    if (typeof characterObject.basics.initiative != "object" || typeof characterObject.basics.initiative.bonuses != "object" || !characterObject.basics.initiative.bonuses) {
      // console.log("\t\tadd initiative object");
      characterObject.basics.initiative = {
        misc: "",
        temp: "",
        feat: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false
        }
      };
    };
    // add concentration bonus object
    if (typeof characterObject.spells.concentration.bonuses != "object" || !characterObject.spells.concentration.bonuses) {
      // console.log("\t\tadd concentration bonus object");
      characterObject.spells.concentration.bonuses = {
        str_bonus: false,
        dex_bonus: false,
        con_bonus: false,
        int_bonus: false,
        wis_bonus: false,
        cha_bonus: false,
        level: false,
        half_level: false
      };
    };
    // add custom skills array
    if (typeof characterObject.skills.custom == "string" || !characterObject.skills.custom) {
      // console.log("\t\tadd custom skills array");
      characterObject.skills.custom = [];
    };
    // move custom skills to new custom skills
    if (characterObject.skills.custom_1 || characterObject.skills.custom_2 || characterObject.skills.custom_3 || characterObject.skills.custom_4 || characterObject.skills.custom_5 || characterObject.skills.custom_6 || characterObject.skills.custom_7 || characterObject.skills.custom_8) {
      // console.log("\t\tmove custom skills to new custom skills");
      var skillKeys = ["custom_1", "custom_2", "custom_3", "custom_4", "custom_5", "custom_6", "custom_7", "custom_8"];
      for (var i = 0; i < skillKeys.length; i++) {
        if (characterObject.skills[skillKeys[i]].name != "" || characterObject.skills[skillKeys[i]].ranks || characterObject.skills[skillKeys[i]].misc) {
          var newSkill = characterObject.skills[skillKeys[i]];
          characterObject.skills.custom.push(newSkill);
        };
        delete characterObject.skills[skillKeys[i]];
      };
    };
    // add note array
    if (typeof characterObject.notes.character == "string" || typeof characterObject.notes.story == "string") {
      // console.log("\t\tadd note array");
      characterObject.notes.character = [];
      characterObject.notes.story = [];
    };
    // add item array
    if (typeof characterObject.equipment.item == "string" || !characterObject.equipment.item) {
      // console.log("\t\tadd item array");
      characterObject.equipment.item = [];
    };
    // add spell notes
    if (characterObject.spells.book) {
      for (var i in characterObject.spells.book) {
        for (var j in characterObject.spells.book[i]) {
          if (characterObject.spells.book[i][j].length > 0) {
            for (var k in characterObject.spells.book[i][j]) {
              if (typeof characterObject.spells.book[i][j][k].note != "string") {
                // console.log("\t\tadd spell notes");
                characterObject.spells.book[i][j][k].note = "";
              };
            };
          };
        };
      };
    };
    sheet.storeCharacters();
    return characterObject;
  };

  // exposed methods
  return {
    render: render
  };

})();
