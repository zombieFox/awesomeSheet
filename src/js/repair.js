var repair = (function() {

  var _debug = false;

  // legacy sheet update
  function _update_440andBelow(characterObject) {
    // --------------------------------------------------
    // repair spell notes
    if (characterObject.spells.book) {
      for (var i in characterObject.spells.book) {
        for (var j in characterObject.spells.book[i]) {
          if (characterObject.spells.book[i][j].length > 0) {
            for (var k in characterObject.spells.book[i][j]) {
              if (!("note" in characterObject.spells.book[i][j][k]) && typeof characterObject.spells.book[i][j][k].note != "string") {
                _log("\t\tlegacy update: spell notes");
                characterObject.spells.book[i][j][k].note = "";
              };
            };
          };
        };
      };
    };
    // --------------------------------------------------
    // repair item array
    if (typeof characterObject.equipment.item == "string" || !characterObject.equipment.item) {
      _log("\t\tlegacy update: item array");
      characterObject.equipment.item = [];
    };
    // --------------------------------------------------
    // repair note array
    if (typeof characterObject.notes.character == "string" || typeof characterObject.notes.story == "string") {
      _log("\t\tlegacy update: note array");
      characterObject.notes.character = [];
      characterObject.notes.story = [];
    };
    // --------------------------------------------------
    // repair custom skills array
    if (typeof characterObject.skills.custom == "string" || !characterObject.skills.custom) {
      _log("\t\tlegacy update: custom skills array");
      characterObject.skills.custom = [];
    };
    // --------------------------------------------------
    // repair custom skills
    if ("custom_1" in characterObject.skills || "custom_2" in characterObject.skills || "custom_3" in characterObject.skills || "custom_4" in characterObject.skills || "custom_5" in characterObject.skills || "custom_6" in characterObject.skills || "custom_7" in characterObject.skills || "custom_8" in characterObject.skills) {
      _log("\t\tlegacy update: custom skills");
      var skillKeys = ["custom_1", "custom_2", "custom_3", "custom_4", "custom_5", "custom_6", "custom_7", "custom_8"];
      for (var i = 0; i < skillKeys.length; i++) {
        if (characterObject.skills[skillKeys[i]].name != "" || characterObject.skills[skillKeys[i]].ranks || characterObject.skills[skillKeys[i]].misc) {
          var newSkill = characterObject.skills[skillKeys[i]];
          characterObject.skills.custom.push(newSkill);
        };
        delete characterObject.skills[skillKeys[i]];
      };
    };
    // --------------------------------------------------
    // repair concentration bonus object
    if (typeof characterObject.spells.concentration.bonuses != "object" || !characterObject.spells.concentration.bonuses) {
      _log("\t\tlegacy update: concentration bonus object");
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
    // --------------------------------------------------
    // repair initiative object
    if (typeof characterObject.basics.initiative != "object" || typeof characterObject.basics.initiative.bonuses != "object" || !characterObject.basics.initiative.bonuses) {
      _log("\t\tlegacy update: initiative object");
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
    // --------------------------------------------------
    // repair size object
    if (typeof characterObject.basics.size != "object" || "size_bonus" in characterObject.defense.ac) {
      _log("\t\tlegacy update: size object");
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
    // --------------------------------------------------
    // repair alignment
    if (["Lawful Good", "Lawful Neutral", "Lawful Evil", "Neutral Good", "Neutral", "Neutral Evil", "Chaotic Good", "Chaotic Neutral", "Chaotic Evil", ""].indexOf(characterObject.basics.alignment) === -1) {
      _log("\t\tlegacy update: alignment");
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
    // --------------------------------------------------
    // repair armor
    if (typeof characterObject.equipment.armor != "object") {
      _log("\t\tlegacy update: armor");
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
    // --------------------------------------------------
    // repair racial save bonuses
    var ifRacial = function(key, object) {
      if (key in object) {
        if (object.racial != "" && !isNaN(object.racial)) {
          if (object.misc != "" && !isNaN(object.misc)) {
            _log("\t\tlegacy update: racial save bonuses");
            object.misc = object.misc + object.racial;
          } else {
            object.misc = object.racial;
          };
        };
        delete object[key];
      };
    };
    ifRacial("racial", characterObject.defense.fortitude);
    ifRacial("racial", characterObject.defense.reflex);
    ifRacial("racial", characterObject.defense.will);
    // --------------------------------------------------
    // repair classes
    if (!characterObject.basics.classes || typeof characterObject.basics.class == "string") {
      _log("\t\tlegacy update: classes");
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
    // --------------------------------------------------
    // repair caster level check
    if (!characterObject.spells.caster_level_check) {
      _log("\t\tlegacy update: caster level check");
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
    // --------------------------------------------------
    // repair encumbrance
    if ("light" in characterObject.equipment.encumbrance || "medium" in characterObject.equipment.encumbrance || "heavy" in characterObject.equipment.encumbrance || "lift" in characterObject.equipment.encumbrance || "drag" in characterObject.equipment.encumbrance) {
      _log("\t\tlegacy update: encumbrance");
      delete characterObject.equipment.encumbrance.light;
      delete characterObject.equipment.encumbrance.medium;
      delete characterObject.equipment.encumbrance.heavy;
      delete characterObject.equipment.encumbrance.lift;
      delete characterObject.equipment.encumbrance.drag;
    };
    // --------------------------------------------------
    // repair encumbrance
    if (!("carry_move" in characterObject.equipment.encumbrance)) {
      _log("\t\tlegacy update: encumbrance");
      characterObject.equipment.encumbrance = {
        encumbrance_str: "",
        carry_move: {
          light: "",
          medium: "",
          heavy: "",
          lift: "",
          drag: ""
        }
      };
    };
    // --------------------------------------------------
    // repair xp
    if (typeof characterObject.basics.xp == "string" && !characterObject.basics.xp == "") {
      _log("\t\tlegacy update: xp");
      characterObject.basics.xp = parseInt(characterObject.basics.xp.replace(/,/g, ""), 10);
    };
    // --------------------------------------------------
    // repair wealth
    if (typeof characterObject.equipment.wealth.platinum == "string" && !characterObject.equipment.wealth.platinum == "") {
      _log("\t\tlegacy update: wealth platinum");
      characterObject.equipment.wealth.platinum = parseInt(characterObject.equipment.wealth.platinum.replace(/,/g, ""), 10);
    };
    if (typeof characterObject.equipment.wealth.gold == "string" && !characterObject.equipment.wealth.gold == "") {
      _log("\t\tlegacy update: wealth gold");
      characterObject.equipment.wealth.gold = parseInt(characterObject.equipment.wealth.gold.replace(/,/g, ""), 10);
    };
    if (typeof characterObject.equipment.wealth.silver == "string" && !characterObject.equipment.wealth.silver == "") {
      _log("\t\tlegacy update: wealth silver");
      characterObject.equipment.wealth.silver = parseInt(characterObject.equipment.wealth.silver.replace(/,/g, ""), 10);
    };
    if (typeof characterObject.equipment.wealth.copper == "string" && !characterObject.equipment.wealth.copper == "") {
      _log("\t\tlegacy update: wealth copper");
      characterObject.equipment.wealth.copper = parseInt(characterObject.equipment.wealth.copper.replace(/,/g, ""), 10);
    };
    // --------------------------------------------------
    // repair events array
    if (!characterObject.hasOwnProperty("events")) {
      _log("\t\tlegacy update: events array");
      characterObject.events = [];
    };
    // --------------------------------------------------
    // repair xp and next level
    if (typeof characterObject.basics.xp == "string" || typeof characterObject.basics.xp == "number") {
      _log("\t\tlegacy update: xp and next level");
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
    // --------------------------------------------------
    // repair speed
    if (typeof characterObject.basics.speed == "string" || typeof characterObject.basics.speed == "number" || characterObject.basics.speed == "" || typeof characterObject.basics.speed != "object") {
      _log("\t\tlegacy update: speed");
      var oldSpeed = characterObject.basics.speed;
      characterObject.basics.speed = {};
      characterObject.basics.speed.land = oldSpeed;
    };
    // --------------------------------------------------
    // repair character image
    if (!characterObject.basics.character_image) {
      _log("\t\tlegacy update: character image");
      characterObject.basics.character_image = {
        uploaded: false,
        background: "",
        color: {
          r: "",
          g: "",
          b: ""
        },
        image: "",
        orientation: "",
        position: {
          x: "",
          y: ""
        },
        size: {
          width: "",
          height: ""
        },
        scale: ""
      };
    };
    // --------------------------------------------------
    // repair attack types
    if (characterObject.offense.attack.melee.length > 0) {
      for (var i = 0; i < characterObject.offense.attack.melee.length; i++) {
        if (!characterObject.offense.attack.melee[i].type && characterObject.offense.attack.melee[i].type != "") {
          _log("\t\tlegacy update: attack types melee");
          characterObject.offense.attack.melee[i].type = "";
        };
      };
    };
    if (characterObject.offense.attack.ranged.length > 0) {
      for (var i = 0; i < characterObject.offense.attack.ranged.length; i++) {
        if (!characterObject.offense.attack.ranged[i].type && characterObject.offense.attack.ranged[i].type != "") {
          _log("\t\tlegacy update: attack types ranged");
          characterObject.offense.attack.ranged[i].type = "";
        };
      };
    };
    // --------------------------------------------------
    // repair stats
    if (!("enhancement" in characterObject.statistics.stats.str) || !("enhancement" in characterObject.statistics.stats.dex) || !("enhancement" in characterObject.statistics.stats.con) || !("enhancement" in characterObject.statistics.stats.int) || !("enhancement" in characterObject.statistics.stats.wis) || !("enhancement" in characterObject.statistics.stats.cha)) {
      _log("\t\tlegacy update: stats");
      for (var key in characterObject.statistics.stats) {
        characterObject.statistics.stats[key].current = "";
        characterObject.statistics.stats[key].modifier = "";
        characterObject.statistics.stats[key].base = "";
        characterObject.statistics.stats[key].enhancement = "";
        characterObject.statistics.stats[key].misc = "";
        characterObject.statistics.stats[key].racial = "";
        characterObject.statistics.stats[key].temp = "";
        var score = parseInt(characterObject.statistics.stats[key].score, 10);
        var tempScore = parseInt(characterObject.statistics.stats[key].temp_score, 10);
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
    // --------------------------------------------------
    // repair events
    if ("events" in characterObject) {
      if (characterObject.events.length > 0) {
        for (var i = 0; i < characterObject.events.length; i++) {
          if (characterObject.events[i].event.aggregateValue) {
            _log("\t\tlegacy update: events");
            characterObject.events[i].event.aggregate_value = characterObject.events[i].event.aggregateValue;
            delete characterObject.events[i].event.aggregateValue;
          };
        };
      };
    } else {
      characterObject.events = [];
    };
    // --------------------------------------------------
    // repair character image cover and contain
    if ("cover" in characterObject.basics.character_image || "contain" in characterObject.basics.character_image) {
      _log("\t\tlegacy update: character image cover and contain");
      delete characterObject.basics.character_image.cover;
      delete characterObject.basics.character_image.contain;
    };
    // --------------------------------------------------
    // repair character image size
    if (!characterObject.basics.character_image.size) {
      _log("\t\tlegacy update: character image size");
      characterObject.basics.character_image.size = {
        width: "",
        height: ""
      };
    };
    // --------------------------------------------------
    // repair character image uploaded
    if (!("uploaded" in characterObject.basics.character_image)) {
      _log("repair character image uploaded");
      if (characterObject.equipment.potion_viles_oils != "") {
        characterObject.basics.character_image.uploaded = true;
      } else {
        characterObject.basics.character_image.uploaded = false;
      };
    };
    // --------------------------------------------------
    // repair equipment
    if (!characterObject.equipment.potion_viles_oils && characterObject.equipment.potion_viles_oils != "") {
      _log("\t\tlegacy update: equipment");
      characterObject.equipment.potion_viles_oils = "";
    };
    if (!characterObject.equipment.scrolls && characterObject.equipment.scrolls != "") {
      characterObject.equipment.scrolls = "";
    };
    // --------------------------------------------------
    // repair skills
    if (!("all" in characterObject.skills)) {
      _log("\t\tlegacy update: skills");
      characterObject.skills.all = {};
      if ("acrobatics" in characterObject.skills) {
        characterObject.skills.all.acrobatics = characterObject.skills.acrobatics;
      };
      if ("appraise" in characterObject.skills) {
        characterObject.skills.all.appraise = characterObject.skills.appraise;
      };
      if ("bluff" in characterObject.skills) {
        characterObject.skills.all.bluff = characterObject.skills.bluff;
      };
      if ("climb" in characterObject.skills) {
        characterObject.skills.all.climb = characterObject.skills.climb;
      };
      if ("craft_1" in characterObject.skills) {
        characterObject.skills.all.craft_1 = characterObject.skills.craft_1;
      };
      if ("craft_2" in characterObject.skills) {
        characterObject.skills.all.craft_2 = characterObject.skills.craft_2;
      };
      if ("diplomacy" in characterObject.skills) {
        characterObject.skills.all.diplomacy = characterObject.skills.diplomacy;
      };
      if ("disable_device" in characterObject.skills) {
        characterObject.skills.all.disable_device = characterObject.skills.disable_device;
      };
      if ("disguise" in characterObject.skills) {
        characterObject.skills.all.disguise = characterObject.skills.disguise;
      };
      if ("escape_artist" in characterObject.skills) {
        characterObject.skills.all.escape_artist = characterObject.skills.escape_artist;
      };
      if ("fly" in characterObject.skills) {
        characterObject.skills.all.fly = characterObject.skills.fly;
      };
      if ("handle_animal" in characterObject.skills) {
        characterObject.skills.all.handle_animal = characterObject.skills.handle_animal;
      };
      if ("heal" in characterObject.skills) {
        characterObject.skills.all.heal = characterObject.skills.heal;
      };
      if ("intimidate" in characterObject.skills) {
        characterObject.skills.all.intimidate = characterObject.skills.intimidate;
      };
      if ("knowledge_arcana" in characterObject.skills) {
        characterObject.skills.all.knowledge_arcana = characterObject.skills.knowledge_arcana;
      };
      if ("knowledge_dungeoneering" in characterObject.skills) {
        characterObject.skills.all.knowledge_dungeoneering = characterObject.skills.knowledge_dungeoneering;
      };
      if ("knowledge_engineering" in characterObject.skills) {
        characterObject.skills.all.knowledge_engineering = characterObject.skills.knowledge_engineering;
      };
      if ("knowledge_geography" in characterObject.skills) {
        characterObject.skills.all.knowledge_geography = characterObject.skills.knowledge_geography;
      };
      if ("knowledge_history" in characterObject.skills) {
        characterObject.skills.all.knowledge_history = characterObject.skills.knowledge_history;
      };
      if ("knowledge_local" in characterObject.skills) {
        characterObject.skills.all.knowledge_local = characterObject.skills.knowledge_local;
      };
      if ("knowledge_nature" in characterObject.skills) {
        characterObject.skills.all.knowledge_nature = characterObject.skills.knowledge_nature;
      };
      if ("knowledge_nobility" in characterObject.skills) {
        characterObject.skills.all.knowledge_nobility = characterObject.skills.knowledge_nobility;
      };
      if ("knowledge_planes" in characterObject.skills) {
        characterObject.skills.all.knowledge_planes = characterObject.skills.knowledge_planes;
      };
      if ("knowledge_religion" in characterObject.skills) {
        characterObject.skills.all.knowledge_religion = characterObject.skills.knowledge_religion;
      };
      if ("linguistics" in characterObject.skills) {
        characterObject.skills.all.linguistics = characterObject.skills.linguistics;
      };
      if ("perception" in characterObject.skills) {
        characterObject.skills.all.perception = characterObject.skills.perception;
      };
      if ("perform_1" in characterObject.skills) {
        characterObject.skills.all.perform_1 = characterObject.skills.perform_1;
      };
      if ("perform_2" in characterObject.skills) {
        characterObject.skills.all.perform_2 = characterObject.skills.perform_2;
      };
      if ("profession_1" in characterObject.skills) {
        characterObject.skills.all.profession_1 = characterObject.skills.profession_1;
      };
      if ("profession_2" in characterObject.skills) {
        characterObject.skills.all.profession_2 = characterObject.skills.profession_2;
      };
      if ("ride" in characterObject.skills) {
        characterObject.skills.all.ride = characterObject.skills.ride;
      };
      if ("sense_motive" in characterObject.skills) {
        characterObject.skills.all.sense_motive = characterObject.skills.sense_motive;
      };
      if ("sleight_of_hand" in characterObject.skills) {
        characterObject.skills.all.sleight_of_hand = characterObject.skills.sleight_of_hand;
      };
      if ("spellcraft" in characterObject.skills) {
        characterObject.skills.all.spellcraft = characterObject.skills.spellcraft;
      };
      if ("stealth" in characterObject.skills) {
        characterObject.skills.all.stealth = characterObject.skills.stealth;
      };
      if ("survival" in characterObject.skills) {
        characterObject.skills.all.survival = characterObject.skills.survival;
      };
      if ("swim" in characterObject.skills) {
        characterObject.skills.all.swim = characterObject.skills.swim;
      };
      if ("use_magic_device" in characterObject.skills) {
        characterObject.skills.all.use_magic_device = characterObject.skills.use_magic_device;
      };
      delete characterObject.skills.acrobatics;
      delete characterObject.skills.appraise;
      delete characterObject.skills.bluff;
      delete characterObject.skills.climb;
      delete characterObject.skills.craft_1;
      delete characterObject.skills.craft_2;
      delete characterObject.skills.diplomacy;
      delete characterObject.skills.disable_device;
      delete characterObject.skills.disguise;
      delete characterObject.skills.escape_artist;
      delete characterObject.skills.fly;
      delete characterObject.skills.handle_animal;
      delete characterObject.skills.heal;
      delete characterObject.skills.intimidate;
      delete characterObject.skills.knowledge_arcana;
      delete characterObject.skills.knowledge_dungeoneering;
      delete characterObject.skills.knowledge_engineering;
      delete characterObject.skills.knowledge_geography;
      delete characterObject.skills.knowledge_history;
      delete characterObject.skills.knowledge_local;
      delete characterObject.skills.knowledge_nature;
      delete characterObject.skills.knowledge_nobility;
      delete characterObject.skills.knowledge_planes;
      delete characterObject.skills.knowledge_religion;
      delete characterObject.skills.linguistics;
      delete characterObject.skills.perception;
      delete characterObject.skills.perform_1;
      delete characterObject.skills.perform_2;
      delete characterObject.skills.profession_1;
      delete characterObject.skills.profession_2;
      delete characterObject.skills.ride;
      delete characterObject.skills.sense_motive;
      delete characterObject.skills.sleight_of_hand;
      delete characterObject.skills.spellcraft;
      delete characterObject.skills.stealth;
      delete characterObject.skills.survival;
      delete characterObject.skills.swim;
      delete characterObject.skills.use_magic_device;
    };
    // --------------------------------------------------
    // repair custom skills
    if (characterObject.skills.custom.length > 0) {
      for (var i = 0; i < characterObject.skills.custom.length; i++) {
        if (!("racial" in characterObject.skills.custom[i])) {
          _log("\t\tlegacy update: custom skills");
          characterObject.skills.custom[i].racial = "";
        };
        if (!("trait" in characterObject.skills.custom[i])) {
          _log("\t\tlegacy update: custom skills");
          characterObject.skills.custom[i].trait = "";
        };
        if (!("feat" in characterObject.skills.custom[i])) {
          _log("\t\tlegacy update: custom skills");
          characterObject.skills.custom[i].feat = "";
        };
      };
    };
    // --------------------------------------------------
    // repair concentration stats
    if (!("trait" in characterObject.spells.concentration)) {
      _log("\t\tlegacy update: spell stats");
      characterObject.spells.concentration.trait = "";
    };
    // repair caster level stats
    if (!("trait" in characterObject.spells.caster_level_check)) {
      _log("\t\tlegacy update: level stats");
      characterObject.spells.caster_level_check.trait = "";
    };
    // --------------------------------------------------
    // repair item
    if (Array.isArray(characterObject.equipment.item)) {
      _log("\t\tlegacy update: item");
      var tempItems = characterObject.equipment.item.slice();
      characterObject.equipment.item = {};
      characterObject.equipment.item.all = tempItems;
    };
    if (!("weight" in characterObject.equipment.item)) {
      _log("\t\tlegacy update: item weight");
      characterObject.equipment.item.weight = {};
      characterObject.equipment.item.weight.current = "";
    };
    if (!("value" in characterObject.equipment.item)) {
      _log("\t\tlegacy update: item value");
      characterObject.equipment.item.value = {};
      characterObject.equipment.item.value.current = "";
    };
    // --------------------------------------------------
    // repair spell bonus
    if (!("bonus" in characterObject.spells)) {
      _log("\t\tlegacy update: spells bonus");
      characterObject.spells.bonus = {};
      characterObject.spells.bonus.level_0 = "";
      characterObject.spells.bonus.level_1 = "";
      characterObject.spells.bonus.level_2 = "";
      characterObject.spells.bonus.level_3 = "";
      characterObject.spells.bonus.level_4 = "";
      characterObject.spells.bonus.level_5 = "";
      characterObject.spells.bonus.level_6 = "";
      characterObject.spells.bonus.level_7 = "";
      characterObject.spells.bonus.level_8 = "";
      characterObject.spells.bonus.level_9 = "";
    };
    // --------------------------------------------------
    // repair skills
    for (var i in characterObject.skills.all) {
      if (!("racial" in characterObject.skills.all[i])) {
        _log("\t\tlegacy update: skill " + i + " racial");
        characterObject.skills.all[i].racial = "";
      };
      if (!("feat" in characterObject.skills.all[i])) {
        _log("\t\tlegacy update: skill " + i + " feat");
        characterObject.skills.all[i].feat = "";
      };
      if (!("trait" in characterObject.skills.all[i])) {
        _log("\t\tlegacy update: skill " + i + " trait");
        characterObject.skills.all[i].trait = "";
      };
    };
    // --------------------------------------------------
    // repair spells
    if (typeof characterObject.spells.dc.level_0 != "object") {
      _log("\t\tlegacy update: spell dc");
      var dcObject = function(level, oldDc) {
        var object = {
          spell_level: level,
          misc: "",
          temp: "",
          feat: "",
          trait: "",
          current: "",
          bonuses: {
            str_bonus: false,
            dex_bonus: false,
            con_bonus: false,
            int_bonus: false,
            wis_bonus: false,
            cha_bonus: false,
            level: false,
            half_level: false,
            spell_level: false,
            plus_ten: false
          }
        };
        if (oldDc) {
          object.misc = oldDc;
        };
        return object;
      };
      characterObject.spells.dc.level_0 = dcObject(0, characterObject.spells.dc.level_0);
      characterObject.spells.dc.level_1 = dcObject(1, characterObject.spells.dc.level_1);
      characterObject.spells.dc.level_2 = dcObject(2, characterObject.spells.dc.level_2);
      characterObject.spells.dc.level_3 = dcObject(3, characterObject.spells.dc.level_3);
      characterObject.spells.dc.level_4 = dcObject(4, characterObject.spells.dc.level_4);
      characterObject.spells.dc.level_5 = dcObject(5, characterObject.spells.dc.level_5);
      characterObject.spells.dc.level_6 = dcObject(6, characterObject.spells.dc.level_6);
      characterObject.spells.dc.level_7 = dcObject(7, characterObject.spells.dc.level_7);
      characterObject.spells.dc.level_8 = dcObject(8, characterObject.spells.dc.level_8);
      characterObject.spells.dc.level_9 = dcObject(9, characterObject.spells.dc.level_9);
    };
    // --------------------------------------------------
    // repair caster level check and concentration
    if (!("racial" in characterObject.spells.concentration)) {
      _log("\t\tlegacy update: concentration racial");
      characterObject.spells.concentration.racial = "";
    };
    if (!("racial" in characterObject.spells.caster_level_check)) {
      _log("\t\tlegacy update: caster level check racial");
      characterObject.spells.caster_level_check.racial = "";
    };
    // --------------------------------------------------
    // repair initiative trait
    if (!("trait" in characterObject.basics.initiative)) {
      _log("\t\tlegacy update: initiative trait");
      characterObject.basics.initiative.trait = "";
    };
    // --------------------------------------------------
    if (!("school" in characterObject.spells)) {
      _log("\t\tlegacy update: spell school");
      characterObject.spells.school = "";
    };
    // --------------------------------------------------
    if (!("opposition" in characterObject.spells)) {
      _log("\t\tlegacy update: spell opposition");
      characterObject.spells.opposition = "";
    };
    // --------------------------------------------------
    if (!("domains" in characterObject.spells)) {
      _log("\t\tlegacy update: spell domains");
      characterObject.spells.domains = "";
    };
    // --------------------------------------------------
    if (!("bloodline" in characterObject.spells)) {
      _log("\t\tlegacy update: spell bloodline");
      characterObject.spells.bloodline = "";
    };
    // --------------------------------------------------
    if (!("power" in characterObject.statistics)) {
      _log("\t\tlegacy update: power");
      characterObject.statistics.power = [];
    };
    // --------------------------------------------------
    if (typeof characterObject.awesomeSheet == "boolean") {
      _log("\t\tlegacy update: awesome check");
      characterObject.awesomeSheet = {};
      characterObject.awesomeSheet.awesome = true;
      characterObject.awesomeSheet.version = "4.4.0";
    };
    _log("\t\tlegacy update: complete");
  };

  function _update_500(characterObject) {
    tempCharacterObject = JSON.parse(JSON.stringify(characterObject));
    // awesome
    characterObject.awesomeSheet = {};
    characterObject.awesomeSheet.awesome = true;
    characterObject.awesomeSheet.version = "5.0.0";
    // basics
    characterObject.basics = {
      character: {
        name: tempCharacterObject.basics.name || "",
        race: tempCharacterObject.basics.race || "",
        alignment: tempCharacterObject.basics.alignment || "",
        deity: tempCharacterObject.basics.deity || "",
        height: tempCharacterObject.basics.height || "",
        weight: tempCharacterObject.basics.weight || "",
        age: tempCharacterObject.basics.age || "",
        gender: tempCharacterObject.basics.gender || "",
        hero_points: tempCharacterObject.basics.hero_points || "",
        description: tempCharacterObject.basics.character_description || "",
        size: {
          category: tempCharacterObject.basics.size.category || "",
          modifier: {
            base: tempCharacterObject.basics.size.size_modifier || "",
            special: tempCharacterObject.basics.size.special_size_modifier || "",
            fly: tempCharacterObject.basics.size.size_modifier_fly || "",
            stealth: tempCharacterObject.basics.size.size_modifier_stealth || ""
          }
        }
      },
      classes: {
        all: tempCharacterObject.basics.classes || []
      },
      experience: {
        level: "",
        next_level: "",
        total: tempCharacterObject.basics.xp.total || "",
        advancement: tempCharacterObject.basics.xp.advancement_speed || "",
        needed: ""
      },
      initiative: {
        misc: tempCharacterObject.basics.initiative.misc || "",
        temp: tempCharacterObject.basics.initiative.temp || "",
        feat: tempCharacterObject.basics.initiative.feat || "",
        trait: tempCharacterObject.basics.initiative.trait || "",
        current: "",
        bonuses: {
          str: tempCharacterObject.basics.initiative.bonuses.str_bonus || false,
          dex: tempCharacterObject.basics.initiative.bonuses.dex_bonus || true,
          con: tempCharacterObject.basics.initiative.bonuses.con_bonus || false,
          int: tempCharacterObject.basics.initiative.bonuses.int_bonus || false,
          wis: tempCharacterObject.basics.initiative.bonuses.wis_bonus || false,
          cha: tempCharacterObject.basics.initiative.bonuses.cha_bonus || false,
          level: tempCharacterObject.basics.initiative.bonuses.level || false,
          half_level: tempCharacterObject.basics.initiative.bonuses.half_level || false
        }
      },
      speed: {
        land: tempCharacterObject.basics.speed.land || "",
        fly: tempCharacterObject.basics.speed.fly || "",
        maneuverability: tempCharacterObject.basics.speed.maneuverability || "",
        swim: tempCharacterObject.basics.speed.swim || "",
        climb: tempCharacterObject.basics.speed.climb || "",
        burrow: tempCharacterObject.basics.speed.burrow || ""
      },
      image: {
        uploaded: tempCharacterObject.basics.character_image.uploaded || "",
        background: tempCharacterObject.basics.character_image.background || "",
        color: {
          r: tempCharacterObject.basics.character_image.color.r || "",
          g: tempCharacterObject.basics.character_image.color.g || "",
          b: tempCharacterObject.basics.character_image.color.b || ""
        },
        image: tempCharacterObject.basics.character_image.image || "",
        orientation: tempCharacterObject.basics.character_image.orientation || "",
        position: {
          x: tempCharacterObject.basics.character_image.position.x || "",
          y: tempCharacterObject.basics.character_image.position.y || ""
        },
        size: {
          width: tempCharacterObject.basics.character_image.size.width || "",
          height: tempCharacterObject.basics.character_image.size.height || ""
        },
        scale: tempCharacterObject.basics.character_image.scale || ""
      }
    };
    // statistics
    characterObject.statistics = {
      stats: {
        str: {
          modifier: tempCharacterObject.statistics.stats.str.modifier || "",
          base: tempCharacterObject.statistics.stats.str.base || "",
          enhancement: tempCharacterObject.statistics.stats.str.enhancement || "",
          misc: tempCharacterObject.statistics.stats.str.misc || "",
          racial: tempCharacterObject.statistics.stats.str.racial || "",
          temp: tempCharacterObject.statistics.stats.str.temp || "",
          current: ""
        },
        dex: {
          modifier: tempCharacterObject.statistics.stats.dex.modifier || "",
          base: tempCharacterObject.statistics.stats.dex.base || "",
          enhancement: tempCharacterObject.statistics.stats.dex.enhancement || "",
          misc: tempCharacterObject.statistics.stats.dex.misc || "",
          racial: tempCharacterObject.statistics.stats.dex.racial || "",
          temp: tempCharacterObject.statistics.stats.dex.temp || "",
          current: ""
        },
        con: {
          modifier: tempCharacterObject.statistics.stats.con.modifier || "",
          base: tempCharacterObject.statistics.stats.con.base || "",
          enhancement: tempCharacterObject.statistics.stats.con.enhancement || "",
          misc: tempCharacterObject.statistics.stats.con.misc || "",
          racial: tempCharacterObject.statistics.stats.con.racial || "",
          temp: tempCharacterObject.statistics.stats.con.temp || "",
          current: ""
        },
        int: {
          modifier: tempCharacterObject.statistics.stats.int.modifier || "",
          base: tempCharacterObject.statistics.stats.int.base || "",
          enhancement: tempCharacterObject.statistics.stats.int.enhancement || "",
          misc: tempCharacterObject.statistics.stats.int.misc || "",
          racial: tempCharacterObject.statistics.stats.int.racial || "",
          temp: tempCharacterObject.statistics.stats.int.temp || "",
          current: ""
        },
        wis: {
          modifier: tempCharacterObject.statistics.stats.wis.modifier || "",
          base: tempCharacterObject.statistics.stats.wis.base || "",
          enhancement: tempCharacterObject.statistics.stats.wis.enhancement || "",
          misc: tempCharacterObject.statistics.stats.wis.misc || "",
          racial: tempCharacterObject.statistics.stats.wis.racial || "",
          temp: tempCharacterObject.statistics.stats.wis.temp || "",
          current: ""
        },
        cha: {
          modifier: tempCharacterObject.statistics.stats.cha.modifier || "",
          base: tempCharacterObject.statistics.stats.cha.base || "",
          enhancement: tempCharacterObject.statistics.stats.cha.enhancement || "",
          misc: tempCharacterObject.statistics.stats.cha.misc || "",
          racial: tempCharacterObject.statistics.stats.cha.racial || "",
          temp: tempCharacterObject.statistics.stats.cha.temp || "",
          current: ""
        }
      },
      abilities: {
        feats: tempCharacterObject.statistics.feats || "",
        traits: tempCharacterObject.statistics.traits || "",
        languages: tempCharacterObject.statistics.languages || "",
        special: tempCharacterObject.statistics.special_abilities || ""
      },
      power: {
        all: tempCharacterObject.statistics.power || []
      }
    };
    // equipment
    characterObject.equipment = {
      possessions: {
        gear: tempCharacterObject.equipment.gear || "",
        magic_gear: tempCharacterObject.equipment.magic_gear || "",
        potion_viles_oils: tempCharacterObject.equipment.potion_viles_oils || "",
        scrolls: tempCharacterObject.equipment.scrolls || ""
      },
      armor: {
        armor: tempCharacterObject.equipment.armor.armor || "",
        check_penalty: tempCharacterObject.equipment.armor.check_penalty || "",
        max_dex: tempCharacterObject.equipment.armor.max_dex || "",
        shield: tempCharacterObject.equipment.armor.shield || ""
      },
      body_slots: {
        belts: tempCharacterObject.equipment.body_slots.belts || "",
        body: tempCharacterObject.equipment.body_slots.body || "",
        chest: tempCharacterObject.equipment.body_slots.chest || "",
        eyes: tempCharacterObject.equipment.body_slots.eyes || "",
        feet: tempCharacterObject.equipment.body_slots.feet || "",
        hands: tempCharacterObject.equipment.body_slots.hands || "",
        head: tempCharacterObject.equipment.body_slots.head || "",
        headband: tempCharacterObject.equipment.body_slots.headband || "",
        neck: tempCharacterObject.equipment.body_slots.neck || "",
        ring_left_hand: tempCharacterObject.equipment.body_slots.ring_left_hand || "",
        ring_right_hand: tempCharacterObject.equipment.body_slots.ring_right_hand || "",
        shoulders: tempCharacterObject.equipment.body_slots.shoulders || "",
        wrist: tempCharacterObject.equipment.body_slots.wrist || ""
      },
      item: {
        all: tempCharacterObject.equipment.item.all || [],
        weight: {
          current: ""
        },
        value: {
          current: ""
        }
      },
      encumbrance: {
        str: tempCharacterObject.equipment.encumbrance.encumbrance_str || "",
        carry_move: {
          light: tempCharacterObject.equipment.encumbrance.carry_move.light || "",
          medium: tempCharacterObject.equipment.encumbrance.carry_move.medium || "",
          heavy: tempCharacterObject.equipment.encumbrance.carry_move.heavy || "",
          lift: tempCharacterObject.equipment.encumbrance.carry_move.lift || "",
          drag: tempCharacterObject.equipment.encumbrance.carry_move.drag || ""
        }
      },
      consumable: {
        all: tempCharacterObject.equipment.consumable || []
      },
      wealth: {
        platinum: tempCharacterObject.equipment.wealth.platinum || "",
        gold: tempCharacterObject.equipment.wealth.gold || "",
        silver: tempCharacterObject.equipment.wealth.silver || "",
        copper: tempCharacterObject.equipment.wealth.copper || "",
        total: ""
      }
    };
    // defense
    characterObject.defense = {
      hp: {
        total: tempCharacterObject.defense.hp.total || "",
        temp: tempCharacterObject.defense.hp.temp || "",
        damage: tempCharacterObject.defense.hp.damage || "",
        non_lethal_damage: tempCharacterObject.defense.hp.non_lethal_damage || "",
        current: "",
        notes: ""
      },
      ac: {
        armor_class: {
          misc: tempCharacterObject.defense.ac.misc || "",
          temp: tempCharacterObject.defense.ac.temp || "",
          current: "",
          bonuses: {
            str: tempCharacterObject.defense.ac.bonuses.str_bonus || false,
            dex: tempCharacterObject.defense.ac.bonuses.dex_bonus || true,
            con: tempCharacterObject.defense.ac.bonuses.con_bonus || false,
            int: tempCharacterObject.defense.ac.bonuses.int_bonus || false,
            wis: tempCharacterObject.defense.ac.bonuses.wis_bonus || false,
            cha: tempCharacterObject.defense.ac.bonuses.cha_bonus || false,
            plus_ten: tempCharacterObject.defense.ac.bonuses.plus_ten || true,
            armor: tempCharacterObject.defense.ac.bonuses.ac_armor || true,
            shield: tempCharacterObject.defense.ac.bonuses.ac_shield || true,
            deflect: tempCharacterObject.defense.ac.bonuses.ac_deflect || true,
            dodge: tempCharacterObject.defense.ac.bonuses.ac_dodge || true,
            natural: tempCharacterObject.defense.ac.bonuses.ac_natural || true,
            size_base: tempCharacterObject.defense.ac.bonuses.size || true,
            max_dex: tempCharacterObject.defense.ac.bonuses.max_dex || true
          }
        },
        flat_footed: {
          misc: tempCharacterObject.defense.flat_footed.misc || "",
          temp: tempCharacterObject.defense.flat_footed.temp || "",
          current: "",
          bonuses: {
            str: tempCharacterObject.defense.flat_footed.bonuses.str_bonus || false,
            dex: tempCharacterObject.defense.flat_footed.bonuses.dex_bonus || false,
            con: tempCharacterObject.defense.flat_footed.bonuses.con_bonus || false,
            int: tempCharacterObject.defense.flat_footed.bonuses.int_bonus || false,
            wis: tempCharacterObject.defense.flat_footed.bonuses.wis_bonus || false,
            cha: tempCharacterObject.defense.flat_footed.bonuses.cha_bonus || false,
            plus_ten: tempCharacterObject.defense.flat_footed.bonuses.plus_ten || true,
            armor: tempCharacterObject.defense.flat_footed.bonuses.ac_armor || true,
            shield: tempCharacterObject.defense.flat_footed.bonuses.ac_shield || true,
            deflect: tempCharacterObject.defense.flat_footed.bonuses.ac_deflect || true,
            natural: tempCharacterObject.defense.flat_footed.bonuses.ac_natural || true,
            size_base: tempCharacterObject.defense.flat_footed.bonuses.size || true
          }
        },
        touch: {
          misc: tempCharacterObject.defense.touch.misc || "",
          temp: tempCharacterObject.defense.touch.temp || "",
          current: "",
          bonuses: {
            str: tempCharacterObject.defense.touch.bonuses.str_bonus || false,
            dex: tempCharacterObject.defense.touch.bonuses.dex_bonus || true,
            con: tempCharacterObject.defense.touch.bonuses.con_bonus || false,
            int: tempCharacterObject.defense.touch.bonuses.int_bonus || false,
            wis: tempCharacterObject.defense.touch.bonuses.wis_bonus || false,
            cha: tempCharacterObject.defense.touch.bonuses.cha_bonus || false,
            plus_ten: tempCharacterObject.defense.touch.bonuses.plus_ten || true,
            deflect: tempCharacterObject.defense.touch.bonuses.ac_deflect || true,
            dodge: tempCharacterObject.defense.touch.bonuses.ac_dodge || true,
            size_base: tempCharacterObject.defense.touch.bonuses.size || true,
            max_dex: tempCharacterObject.defense.touch.bonuses.max_dex || true
          }
        },
        stats: {
          armor: tempCharacterObject.defense.ac.armor || "",
          shield: tempCharacterObject.defense.ac.shield || "",
          deflect: tempCharacterObject.defense.ac.deflect || "",
          dodge: tempCharacterObject.defense.ac.dodge || "",
          natural: tempCharacterObject.defense.ac.natural || ""
        },
        notes: tempCharacterObject.defense.ac_notes || ""
      },
      cmd: {
        misc: tempCharacterObject.offense.cmd.misc || "",
        temp: tempCharacterObject.offense.cmd.temp || "",
        current: "",
        notes: "",
        bonuses: {
          str: tempCharacterObject.offense.cmd.bonuses.str_bonus || true,
          dex: tempCharacterObject.offense.cmd.bonuses.dex_bonus || true,
          con: tempCharacterObject.offense.cmd.bonuses.con_bonus || false,
          int: tempCharacterObject.offense.cmd.bonuses.int_bonus || false,
          wis: tempCharacterObject.offense.cmd.bonuses.wis_bonus || false,
          cha: tempCharacterObject.offense.cmd.bonuses.cha_bonus || false,
          bab: tempCharacterObject.offense.cmd.bonuses.bab || true,
          size_special: tempCharacterObject.offense.cmd.bonuses.special_size || true,
          level: tempCharacterObject.offense.cmd.bonuses.level || false,
          half_level: tempCharacterObject.offense.cmd.bonuses.half_level || false,
          plus_ten: tempCharacterObject.offense.cmd.bonuses.plus_ten || true
        }
      },
      saves: {
        fortitude: {
          base: tempCharacterObject.defense.fortitude.base || "",
          resistance: tempCharacterObject.defense.fortitude.resistance || "",
          feat: tempCharacterObject.defense.fortitude.feat || "",
          trait: tempCharacterObject.defense.fortitude.trait || "",
          misc: tempCharacterObject.defense.fortitude.misc || "",
          temp: tempCharacterObject.defense.fortitude.temp || "",
          current: "",
          bonuses: {
            str: tempCharacterObject.defense.fortitude.bonuses.str_bonus || false,
            dex: tempCharacterObject.defense.fortitude.bonuses.dex_bonus || false,
            con: tempCharacterObject.defense.fortitude.bonuses.con_bonus || true,
            int: tempCharacterObject.defense.fortitude.bonuses.int_bonus || false,
            wis: tempCharacterObject.defense.fortitude.bonuses.wis_bonus || false,
            cha: tempCharacterObject.defense.fortitude.bonuses.cha_bonus || false,
            level: tempCharacterObject.defense.fortitude.bonuses.level || false,
            half_level: tempCharacterObject.defense.fortitude.bonuses.half_level || false
          }
        },
        reflex: {
          base: tempCharacterObject.defense.reflex.base || "",
          resistance: tempCharacterObject.defense.reflex.resistance || "",
          feat: tempCharacterObject.defense.reflex.feat || "",
          trait: tempCharacterObject.defense.reflex.trait || "",
          misc: tempCharacterObject.defense.reflex.misc || "",
          temp: tempCharacterObject.defense.reflex.temp || "",
          current: "",
          bonuses: {
            str: tempCharacterObject.defense.reflex.bonuses.str_bonus || false,
            dex: tempCharacterObject.defense.reflex.bonuses.dex_bonus || true,
            con: tempCharacterObject.defense.reflex.bonuses.con_bonus || false,
            int: tempCharacterObject.defense.reflex.bonuses.int_bonus || false,
            wis: tempCharacterObject.defense.reflex.bonuses.wis_bonus || false,
            cha: tempCharacterObject.defense.reflex.bonuses.cha_bonus || false,
            level: tempCharacterObject.defense.reflex.bonuses.level || false,
            half_level: tempCharacterObject.defense.reflex.bonuses.half_level || false
          }
        },
        will: {
          base: tempCharacterObject.defense.will.base || "",
          resistance: tempCharacterObject.defense.will.resistance || "",
          feat: tempCharacterObject.defense.will.feat || "",
          trait: tempCharacterObject.defense.will.trait || "",
          misc: tempCharacterObject.defense.will.misc || "",
          temp: tempCharacterObject.defense.will.temp || "",
          current: "",
          bonuses: {
            str: tempCharacterObject.defense.will.bonuses.str_bonus || false,
            dex: tempCharacterObject.defense.will.bonuses.dex_bonus || false,
            con: tempCharacterObject.defense.will.bonuses.con_bonus || false,
            int: tempCharacterObject.defense.will.bonuses.int_bonus || false,
            wis: tempCharacterObject.defense.will.bonuses.wis_bonus || true,
            cha: tempCharacterObject.defense.will.bonuses.cha_bonus || false,
            level: tempCharacterObject.defense.will.bonuses.level || false,
            half_level: tempCharacterObject.defense.will.bonuses.half_level || false
          }
        },
        notes: tempCharacterObject.defense.save_notes || ""
      },
      dr: {
        feat: tempCharacterObject.defense.dr.feat || "",
        trait: tempCharacterObject.defense.dr.trait || "",
        misc: tempCharacterObject.defense.dr.misc || "",
        temp: tempCharacterObject.defense.dr.temp || "",
        overcome: tempCharacterObject.defense.dr.overcome || "",
        current: "",
        notes: "",
        bonuses: {
          str: tempCharacterObject.defense.dr.bonuses.str_bonus || false,
          dex: tempCharacterObject.defense.dr.bonuses.dex_bonus || false,
          con: tempCharacterObject.defense.dr.bonuses.con_bonus || false,
          int: tempCharacterObject.defense.dr.bonuses.int_bonus || false,
          wis: tempCharacterObject.defense.dr.bonuses.wis_bonus || false,
          cha: tempCharacterObject.defense.dr.bonuses.cha_bonus || false,
          level: tempCharacterObject.defense.dr.bonuses.level || false,
          half_level: tempCharacterObject.defense.dr.bonuses.half_level || false
        }
      },
      sr: {
        feat: tempCharacterObject.defense.sr.feat || "",
        trait: tempCharacterObject.defense.sr.trait || "",
        misc: tempCharacterObject.defense.sr.misc || "",
        temp: tempCharacterObject.defense.sr.temp || "",
        current: "",
        notes: "",
        bonuses: {
          str: tempCharacterObject.defense.sr.bonuses.str_bonus || false,
          dex: tempCharacterObject.defense.sr.bonuses.dex_bonus || false,
          con: tempCharacterObject.defense.sr.bonuses.con_bonus || false,
          int: tempCharacterObject.defense.sr.bonuses.int_bonus || false,
          wis: tempCharacterObject.defense.sr.bonuses.wis_bonus || false,
          cha: tempCharacterObject.defense.sr.bonuses.cha_bonus || false,
          level: tempCharacterObject.defense.sr.bonuses.level || false,
          half_level: tempCharacterObject.defense.sr.bonuses.half_level || false
        }
      },
      resistance: {
        feat: "",
        trait: "",
        misc: "",
        temp: "",
        current: "",
        notes: tempCharacterObject.defense.resist_notes,
        bonuses: {
          str: false,
          dex: false,
          con: false,
          int: false,
          wis: false,
          cha: false,
          level: false,
          half_level: false
        }
      }
    };
    // offense
    characterObject.offense = {
      stats: {
        base_attack: tempCharacterObject.offense.base_attack || "",
        base_attack_bonuses: tempCharacterObject.offense.base_attack_bonuses || "",
        melee: {
          misc: tempCharacterObject.offense.melee_attack.misc || "",
          temp: tempCharacterObject.offense.melee_attack.temp || "",
          current: "",
          bonuses: {
            str: tempCharacterObject.offense.melee_attack.bonuses.str_bonus || true,
            dex: tempCharacterObject.offense.melee_attack.bonuses.dex_bonus || false,
            con: tempCharacterObject.offense.melee_attack.bonuses.con_bonus || false,
            int: tempCharacterObject.offense.melee_attack.bonuses.int_bonus || false,
            wis: tempCharacterObject.offense.melee_attack.bonuses.wis_bonus || false,
            cha: tempCharacterObject.offense.melee_attack.bonuses.cha_bonus || false,
            bab: tempCharacterObject.offense.melee_attack.bonuses.bab || true,
            size_base: tempCharacterObject.offense.melee_attack.bonuses.special_size || true,
            level: tempCharacterObject.offense.melee_attack.bonuses.level || false,
            half_level: tempCharacterObject.offense.melee_attack.bonuses.half_level || false
          }
        },
        ranged: {
          misc: tempCharacterObject.offense.ranged_attack.misc || "",
          temp: tempCharacterObject.offense.ranged_attack.temp || "",
          current: "",
          bonuses: {
            str: tempCharacterObject.offense.ranged_attack.bonuses.str_bonus || false,
            dex: tempCharacterObject.offense.ranged_attack.bonuses.dex_bonus || true,
            con: tempCharacterObject.offense.ranged_attack.bonuses.con_bonus || false,
            int: tempCharacterObject.offense.ranged_attack.bonuses.int_bonus || false,
            wis: tempCharacterObject.offense.ranged_attack.bonuses.wis_bonus || false,
            cha: tempCharacterObject.offense.ranged_attack.bonuses.cha_bonus || false,
            bab: tempCharacterObject.offense.ranged_attack.bonuses.bab || true,
            size_base: tempCharacterObject.offense.ranged_attack.bonuses.special_size || true,
            level: tempCharacterObject.offense.ranged_attack.bonuses.level || false,
            half_level: tempCharacterObject.offense.ranged_attack.bonuses.half_level || false
          }
        }
      },
      cmb: {
        misc: tempCharacterObject.offense.cmb.misc || "",
        temp: tempCharacterObject.offense.cmb.temp || "",
        current: "",
        notes: "",
        bonuses: {
          str: tempCharacterObject.offense.cmb.bonuses.str_bonus || true,
          dex: tempCharacterObject.offense.cmb.bonuses.dex_bonus || false,
          con: tempCharacterObject.offense.cmb.bonuses.con_bonus || false,
          int: tempCharacterObject.offense.cmb.bonuses.int_bonus || false,
          wis: tempCharacterObject.offense.cmb.bonuses.wis_bonus || false,
          cha: tempCharacterObject.offense.cmb.bonuses.cha_bonus || false,
          bab: tempCharacterObject.offense.cmb.bonuses.bab || true,
          size_special: tempCharacterObject.offense.cmb.bonuses.special_size || true,
          level: tempCharacterObject.offense.cmb.bonuses.level || false,
          half_level: tempCharacterObject.offense.cmb.bonuses.half_level || false
        }
      },
      attack: {
        notes: tempCharacterObject.offense.attack_notes || "",
        melee: {
          all: tempCharacterObject.offense.attack.melee || []
        },
        ranged: {
          all: tempCharacterObject.offense.attack.ranged || []
        }
      }
    };
    // skills
    characterObject.skills = {
      ranks: {
        total: "",
        include_custom: tempCharacterObject.skills.ranks.spent.include_custom || false,
        current: ""
      },
      custom: {
        all: tempCharacterObject.skills.custom || []
      },
      default: {
        acrobatics: {
          ranks: tempCharacterObject.skills.all.acrobatics.ranks || "",
          misc: tempCharacterObject.skills.all.acrobatics.misc || "",
          racial: tempCharacterObject.skills.all.acrobatics.racial || "",
          feat: tempCharacterObject.skills.all.acrobatics.feat || "",
          trait: tempCharacterObject.skills.all.acrobatics.trait || "",
          current: "",
          bonuses: {
            str: tempCharacterObject.skills.all.acrobatics.bonuses.str_bonus || false,
            dex: tempCharacterObject.skills.all.acrobatics.bonuses.dex_bonus || true,
            con: tempCharacterObject.skills.all.acrobatics.bonuses.con_bonus || false,
            int: tempCharacterObject.skills.all.acrobatics.bonuses.int_bonus || false,
            wis: tempCharacterObject.skills.all.acrobatics.bonuses.wis_bonus || false,
            cha: tempCharacterObject.skills.all.acrobatics.bonuses.cha_bonus || false,
            class_skill: tempCharacterObject.skills.all.acrobatics.bonuses.class_skill || false,
            level: tempCharacterObject.skills.all.acrobatics.bonuses.level || false,
            half_level: tempCharacterObject.skills.all.acrobatics.bonuses.half_level || false,
            check_penalty: tempCharacterObject.skills.all.acrobatics.bonuses.check_penalty || true
          }
        },
        appraise: {
          ranks: tempCharacterObject.skills.all.appraise.ranks || "",
          misc: tempCharacterObject.skills.all.appraise.misc || "",
          racial: tempCharacterObject.skills.all.appraise.racial || "",
          feat: tempCharacterObject.skills.all.appraise.feat || "",
          trait: tempCharacterObject.skills.all.appraise.trait || "",
          current: "",
          bonuses: {
            str: tempCharacterObject.skills.all.appraise.bonuses.str_bonus || false,
            dex: tempCharacterObject.skills.all.appraise.bonuses.dex_bonus || false,
            con: tempCharacterObject.skills.all.appraise.bonuses.con_bonus || false,
            int: tempCharacterObject.skills.all.appraise.bonuses.int_bonus || true,
            wis: tempCharacterObject.skills.all.appraise.bonuses.wis_bonus || false,
            cha: tempCharacterObject.skills.all.appraise.bonuses.cha_bonus || false,
            class_skill: tempCharacterObject.skills.all.appraise.bonuses.class_skill || false,
            level: tempCharacterObject.skills.all.appraise.bonuses.level || false,
            half_level: tempCharacterObject.skills.all.appraise.bonuses.half_level || false,
            check_penalty: tempCharacterObject.skills.all.appraise.bonuses.check_penalty || false
          }
        },
        bluff: {
          ranks: tempCharacterObject.skills.all.bluff.ranks || "",
          misc: tempCharacterObject.skills.all.bluff.misc || "",
          racial: tempCharacterObject.skills.all.bluff.racial || "",
          feat: tempCharacterObject.skills.all.bluff.feat || "",
          trait: tempCharacterObject.skills.all.bluff.trait || "",
          current: "",
          bonuses: {
            str: tempCharacterObject.skills.all.bluff.bonuses.str_bonus || false,
            dex: tempCharacterObject.skills.all.bluff.bonuses.dex_bonus || false,
            con: tempCharacterObject.skills.all.bluff.bonuses.con_bonus || false,
            int: tempCharacterObject.skills.all.bluff.bonuses.int_bonus || false,
            wis: tempCharacterObject.skills.all.bluff.bonuses.wis_bonus || false,
            cha: tempCharacterObject.skills.all.bluff.bonuses.cha_bonus || true,
            class_skill: tempCharacterObject.skills.all.bluff.bonuses.class_skill || false,
            level: tempCharacterObject.skills.all.bluff.bonuses.level || false,
            half_level: tempCharacterObject.skills.all.bluff.bonuses.half_level || false,
            check_penalty: tempCharacterObject.skills.all.bluff.bonuses.check_penalty || false
          }
        },
        climb: {
          ranks: tempCharacterObject.skills.all.climb.ranks || "",
          misc: tempCharacterObject.skills.all.climb.misc || "",
          racial: tempCharacterObject.skills.all.climb.racial || "",
          feat: tempCharacterObject.skills.all.climb.feat || "",
          trait: tempCharacterObject.skills.all.climb.trait || "",
          current: "",
          bonuses: {
            str: tempCharacterObject.skills.all.climb.bonuses.str_bonus || true,
            dex: tempCharacterObject.skills.all.climb.bonuses.dex_bonus || false,
            con: tempCharacterObject.skills.all.climb.bonuses.con_bonus || false,
            int: tempCharacterObject.skills.all.climb.bonuses.int_bonus || false,
            wis: tempCharacterObject.skills.all.climb.bonuses.wis_bonus || false,
            cha: tempCharacterObject.skills.all.climb.bonuses.cha_bonus || false,
            class_skill: tempCharacterObject.skills.all.climb.bonuses.class_skill || false,
            level: tempCharacterObject.skills.all.climb.bonuses.level || false,
            half_level: tempCharacterObject.skills.all.climb.bonuses.half_level || false,
            check_penalty: tempCharacterObject.skills.all.climb.bonuses.check_penalty || true
          }
        },
        craft_1: {
          variant_name: tempCharacterObject.skills.all.craft_1.variant_name || "",
          ranks: tempCharacterObject.skills.all.craft_1.ranks || "",
          misc: tempCharacterObject.skills.all.craft_1.misc || "",
          racial: tempCharacterObject.skills.all.craft_1.racial || "",
          feat: tempCharacterObject.skills.all.craft_1.feat || "",
          trait: tempCharacterObject.skills.all.craft_1.trait || "",
          current: "",
          bonuses: {
            str: tempCharacterObject.skills.all.craft_1.bonuses.str_bonus || false,
            dex: tempCharacterObject.skills.all.craft_1.bonuses.dex_bonus || false,
            con: tempCharacterObject.skills.all.craft_1.bonuses.con_bonus || false,
            int: tempCharacterObject.skills.all.craft_1.bonuses.int_bonus || true,
            wis: tempCharacterObject.skills.all.craft_1.bonuses.wis_bonus || false,
            cha: tempCharacterObject.skills.all.craft_1.bonuses.cha_bonus || false,
            class_skill: tempCharacterObject.skills.all.craft_1.bonuses.class_skill || false,
            level: tempCharacterObject.skills.all.craft_1.bonuses.level || false,
            half_level: tempCharacterObject.skills.all.craft_1.bonuses.half_level || false,
            check_penalty: tempCharacterObject.skills.all.craft_1.bonuses.check_penalty || false
          }
        },
        craft_2: {
          variant_name: tempCharacterObject.skills.all.craft_2.variant_name || "",
          ranks: tempCharacterObject.skills.all.craft_2.ranks || "",
          misc: tempCharacterObject.skills.all.craft_2.misc || "",
          racial: tempCharacterObject.skills.all.craft_2.racial || "",
          feat: tempCharacterObject.skills.all.craft_2.feat || "",
          trait: tempCharacterObject.skills.all.craft_2.trait || "",
          current: "",
          bonuses: {
            str: tempCharacterObject.skills.all.craft_2.bonuses.str_bonus || false,
            dex: tempCharacterObject.skills.all.craft_2.bonuses.dex_bonus || false,
            con: tempCharacterObject.skills.all.craft_2.bonuses.con_bonus || false,
            int: tempCharacterObject.skills.all.craft_2.bonuses.int_bonus || true,
            wis: tempCharacterObject.skills.all.craft_2.bonuses.wis_bonus || false,
            cha: tempCharacterObject.skills.all.craft_2.bonuses.cha_bonus || false,
            class_skill: tempCharacterObject.skills.all.craft_2.bonuses.class_skill || false,
            level: tempCharacterObject.skills.all.craft_2.bonuses.level || false,
            half_level: tempCharacterObject.skills.all.craft_2.bonuses.half_level || false,
            check_penalty: tempCharacterObject.skills.all.craft_2.bonuses.check_penalty || false
          }
        },
        diplomacy: {
          ranks: tempCharacterObject.skills.all.diplomacy.ranks || "",
          misc: tempCharacterObject.skills.all.diplomacy.misc || "",
          racial: tempCharacterObject.skills.all.diplomacy.racial || "",
          feat: tempCharacterObject.skills.all.diplomacy.feat || "",
          trait: tempCharacterObject.skills.all.diplomacy.trait || "",
          current: "",
          bonuses: {
            str: tempCharacterObject.skills.all.diplomacy.bonuses.str_bonus || false,
            dex: tempCharacterObject.skills.all.diplomacy.bonuses.dex_bonus || false,
            con: tempCharacterObject.skills.all.diplomacy.bonuses.con_bonus || false,
            int: tempCharacterObject.skills.all.diplomacy.bonuses.int_bonus || false,
            wis: tempCharacterObject.skills.all.diplomacy.bonuses.wis_bonus || false,
            cha: tempCharacterObject.skills.all.diplomacy.bonuses.cha_bonus || true,
            class_skill: tempCharacterObject.skills.all.diplomacy.bonuses.class_skill || false,
            level: tempCharacterObject.skills.all.diplomacy.bonuses.level || false,
            half_level: tempCharacterObject.skills.all.diplomacy.bonuses.half_level || false,
            check_penalty: tempCharacterObject.skills.all.diplomacy.bonuses.check_penalty || false
          }
        },
        disable_device: {
          ranks: tempCharacterObject.skills.all.disable_device.ranks || "",
          misc: tempCharacterObject.skills.all.disable_device.misc || "",
          racial: tempCharacterObject.skills.all.disable_device.racial || "",
          feat: tempCharacterObject.skills.all.disable_device.feat || "",
          trait: tempCharacterObject.skills.all.disable_device.trait || "",
          current: "",
          bonuses: {
            str: tempCharacterObject.skills.all.disable_device.bonuses.str_bonus || false,
            dex: tempCharacterObject.skills.all.disable_device.bonuses.dex_bonus || true,
            con: tempCharacterObject.skills.all.disable_device.bonuses.con_bonus || false,
            int: tempCharacterObject.skills.all.disable_device.bonuses.int_bonus || false,
            wis: tempCharacterObject.skills.all.disable_device.bonuses.wis_bonus || false,
            cha: tempCharacterObject.skills.all.disable_device.bonuses.cha_bonus || false,
            class_skill: tempCharacterObject.skills.all.disable_device.bonuses.class_skill || false,
            level: tempCharacterObject.skills.all.disable_device.bonuses.level || false,
            half_level: tempCharacterObject.skills.all.disable_device.bonuses.half_level || false,
            check_penalty: tempCharacterObject.skills.all.disable_device.bonuses.check_penalty || true
          }
        },
        disguise: {
          ranks: tempCharacterObject.skills.all.disguise.ranks || "",
          misc: tempCharacterObject.skills.all.disguise.misc || "",
          racial: tempCharacterObject.skills.all.disguise.racial || "",
          feat: tempCharacterObject.skills.all.disguise.feat || "",
          trait: tempCharacterObject.skills.all.disguise.trait || "",
          current: "",
          bonuses: {
            str: tempCharacterObject.skills.all.disguise.bonuses.str_bonus || false,
            dex: tempCharacterObject.skills.all.disguise.bonuses.dex_bonus || false,
            con: tempCharacterObject.skills.all.disguise.bonuses.con_bonus || false,
            int: tempCharacterObject.skills.all.disguise.bonuses.int_bonus || false,
            wis: tempCharacterObject.skills.all.disguise.bonuses.wis_bonus || false,
            cha: tempCharacterObject.skills.all.disguise.bonuses.cha_bonus || true,
            class_skill: tempCharacterObject.skills.all.disguise.bonuses.class_skill || false,
            level: tempCharacterObject.skills.all.disguise.bonuses.level || false,
            half_level: tempCharacterObject.skills.all.disguise.bonuses.half_level || false,
            check_penalty: tempCharacterObject.skills.all.disguise.bonuses.check_penalty || false
          }
        },
        escape_artist: {
          ranks: tempCharacterObject.skills.all.escape_artist.ranks || "",
          misc: tempCharacterObject.skills.all.escape_artist.misc || "",
          racial: tempCharacterObject.skills.all.escape_artist.racial || "",
          feat: tempCharacterObject.skills.all.escape_artist.feat || "",
          trait: tempCharacterObject.skills.all.escape_artist.trait || "",
          current: "",
          bonuses: {
            str: tempCharacterObject.skills.all.escape_artist.bonuses.str_bonus || false,
            dex: tempCharacterObject.skills.all.escape_artist.bonuses.dex_bonus || true,
            con: tempCharacterObject.skills.all.escape_artist.bonuses.con_bonus || false,
            int: tempCharacterObject.skills.all.escape_artist.bonuses.int_bonus || false,
            wis: tempCharacterObject.skills.all.escape_artist.bonuses.wis_bonus || false,
            cha: tempCharacterObject.skills.all.escape_artist.bonuses.cha_bonus || false,
            class_skill: tempCharacterObject.skills.all.escape_artist.bonuses.class_skill || false,
            level: tempCharacterObject.skills.all.escape_artist.bonuses.level || false,
            half_level: tempCharacterObject.skills.all.escape_artist.bonuses.half_level || false,
            check_penalty: tempCharacterObject.skills.all.escape_artist.bonuses.check_penalty || true
          }
        },
        fly: {
          ranks: tempCharacterObject.skills.all.fly.ranks || "",
          misc: tempCharacterObject.skills.all.fly.misc || "",
          racial: tempCharacterObject.skills.all.fly.racial || "",
          feat: tempCharacterObject.skills.all.fly.feat || "",
          trait: tempCharacterObject.skills.all.fly.trait || "",
          current: "",
          bonuses: {
            str: tempCharacterObject.skills.all.fly.bonuses.str_bonus || false,
            dex: tempCharacterObject.skills.all.fly.bonuses.dex_bonus || true,
            con: tempCharacterObject.skills.all.fly.bonuses.con_bonus || false,
            int: tempCharacterObject.skills.all.fly.bonuses.int_bonus || false,
            wis: tempCharacterObject.skills.all.fly.bonuses.wis_bonus || false,
            cha: tempCharacterObject.skills.all.fly.bonuses.cha_bonus || false,
            class_skill: tempCharacterObject.skills.all.fly.bonuses.class_skill || false,
            level: tempCharacterObject.skills.all.fly.bonuses.level || false,
            half_level: tempCharacterObject.skills.all.fly.bonuses.half_level || false,
            check_penalty: tempCharacterObject.skills.all.fly.bonuses.check_penalty || true,
            size_fly: tempCharacterObject.skills.all.fly.bonuses.size_modifier_fly || true
          }
        },
        handle_animal: {
          ranks: tempCharacterObject.skills.all.handle_animal.ranks || "",
          misc: tempCharacterObject.skills.all.handle_animal.misc || "",
          racial: tempCharacterObject.skills.all.handle_animal.racial || "",
          feat: tempCharacterObject.skills.all.handle_animal.feat || "",
          trait: tempCharacterObject.skills.all.handle_animal.trait || "",
          current: "",
          bonuses: {
            str: tempCharacterObject.skills.all.handle_animal.bonuses.str_bonus || false,
            dex: tempCharacterObject.skills.all.handle_animal.bonuses.dex_bonus || false,
            con: tempCharacterObject.skills.all.handle_animal.bonuses.con_bonus || false,
            int: tempCharacterObject.skills.all.handle_animal.bonuses.int_bonus || false,
            wis: tempCharacterObject.skills.all.handle_animal.bonuses.wis_bonus || false,
            cha: tempCharacterObject.skills.all.handle_animal.bonuses.cha_bonus || true,
            class_skill: tempCharacterObject.skills.all.handle_animal.bonuses.class_skill || false,
            level: tempCharacterObject.skills.all.handle_animal.bonuses.level || false,
            half_level: tempCharacterObject.skills.all.handle_animal.bonuses.half_level || false,
            check_penalty: tempCharacterObject.skills.all.handle_animal.bonuses.check_penalty || false
          }
        },
        heal: {
          ranks: tempCharacterObject.skills.all.heal.ranks || "",
          misc: tempCharacterObject.skills.all.heal.misc || "",
          racial: tempCharacterObject.skills.all.heal.racial || "",
          feat: tempCharacterObject.skills.all.heal.feat || "",
          trait: tempCharacterObject.skills.all.heal.trait || "",
          current: "",
          bonuses: {
            str: tempCharacterObject.skills.all.heal.bonuses.str_bonus || false,
            dex: tempCharacterObject.skills.all.heal.bonuses.dex_bonus || false,
            con: tempCharacterObject.skills.all.heal.bonuses.con_bonus || false,
            int: tempCharacterObject.skills.all.heal.bonuses.int_bonus || false,
            wis: tempCharacterObject.skills.all.heal.bonuses.wis_bonus || true,
            cha: tempCharacterObject.skills.all.heal.bonuses.cha_bonus || false,
            class_skill: tempCharacterObject.skills.all.heal.bonuses.class_skill || false,
            level: tempCharacterObject.skills.all.heal.bonuses.level || false,
            half_level: tempCharacterObject.skills.all.heal.bonuses.half_level || false,
            check_penalty: tempCharacterObject.skills.all.heal.bonuses.check_penalty || false
          }
        },
        intimidate: {
          ranks: tempCharacterObject.skills.all.intimidate.ranks || "",
          misc: tempCharacterObject.skills.all.intimidate.misc || "",
          racial: tempCharacterObject.skills.all.intimidate.racial || "",
          feat: tempCharacterObject.skills.all.intimidate.feat || "",
          trait: tempCharacterObject.skills.all.intimidate.trait || "",
          current: "",
          bonuses: {
            str: tempCharacterObject.skills.all.intimidate.bonuses.str_bonus || false,
            dex: tempCharacterObject.skills.all.intimidate.bonuses.dex_bonus || false,
            con: tempCharacterObject.skills.all.intimidate.bonuses.con_bonus || false,
            int: tempCharacterObject.skills.all.intimidate.bonuses.int_bonus || false,
            wis: tempCharacterObject.skills.all.intimidate.bonuses.wis_bonus || false,
            cha: tempCharacterObject.skills.all.intimidate.bonuses.cha_bonus || true,
            class_skill: tempCharacterObject.skills.all.intimidate.bonuses.class_skill || false,
            level: tempCharacterObject.skills.all.intimidate.bonuses.level || false,
            half_level: tempCharacterObject.skills.all.intimidate.bonuses.half_level || false,
            check_penalty: tempCharacterObject.skills.all.intimidate.bonuses.check_penalty || false
          }
        },
        knowledge_arcana: {
          ranks: tempCharacterObject.skills.all.knowledge_arcana.ranks || "",
          misc: tempCharacterObject.skills.all.knowledge_arcana.misc || "",
          racial: tempCharacterObject.skills.all.knowledge_arcana.racial || "",
          feat: tempCharacterObject.skills.all.knowledge_arcana.feat || "",
          trait: tempCharacterObject.skills.all.knowledge_arcana.trait || "",
          current: "",
          bonuses: {
            str: tempCharacterObject.skills.all.knowledge_arcana.bonuses.str_bonus || false,
            dex: tempCharacterObject.skills.all.knowledge_arcana.bonuses.dex_bonus || false,
            con: tempCharacterObject.skills.all.knowledge_arcana.bonuses.con_bonus || false,
            int: tempCharacterObject.skills.all.knowledge_arcana.bonuses.int_bonus || true,
            wis: tempCharacterObject.skills.all.knowledge_arcana.bonuses.wis_bonus || false,
            cha: tempCharacterObject.skills.all.knowledge_arcana.bonuses.cha_bonus || false,
            class_skill: tempCharacterObject.skills.all.knowledge_arcana.bonuses.class_skill || false,
            level: tempCharacterObject.skills.all.knowledge_arcana.bonuses.level || false,
            half_level: tempCharacterObject.skills.all.knowledge_arcana.bonuses.half_level || false,
            check_penalty: tempCharacterObject.skills.all.knowledge_arcana.bonuses.check_penalty || false
          }
        },
        knowledge_dungeoneering: {
          ranks: tempCharacterObject.skills.all.knowledge_dungeoneering.ranks || "",
          misc: tempCharacterObject.skills.all.knowledge_dungeoneering.misc || "",
          racial: tempCharacterObject.skills.all.knowledge_dungeoneering.racial || "",
          feat: tempCharacterObject.skills.all.knowledge_dungeoneering.feat || "",
          trait: tempCharacterObject.skills.all.knowledge_dungeoneering.trait || "",
          current: "",
          bonuses: {
            str: tempCharacterObject.skills.all.knowledge_dungeoneering.bonuses.str_bonus || false,
            dex: tempCharacterObject.skills.all.knowledge_dungeoneering.bonuses.dex_bonus || false,
            con: tempCharacterObject.skills.all.knowledge_dungeoneering.bonuses.con_bonus || false,
            int: tempCharacterObject.skills.all.knowledge_dungeoneering.bonuses.int_bonus || true,
            wis: tempCharacterObject.skills.all.knowledge_dungeoneering.bonuses.wis_bonus || false,
            cha: tempCharacterObject.skills.all.knowledge_dungeoneering.bonuses.cha_bonus || false,
            class_skill: tempCharacterObject.skills.all.knowledge_dungeoneering.bonuses.class_skill || false,
            level: tempCharacterObject.skills.all.knowledge_dungeoneering.bonuses.level || false,
            half_level: tempCharacterObject.skills.all.knowledge_dungeoneering.bonuses.half_level || false,
            check_penalty: tempCharacterObject.skills.all.knowledge_dungeoneering.bonuses.check_penalty || false
          }
        },
        knowledge_engineering: {
          ranks: tempCharacterObject.skills.all.knowledge_engineering.ranks || "",
          misc: tempCharacterObject.skills.all.knowledge_engineering.misc || "",
          racial: tempCharacterObject.skills.all.knowledge_engineering.racial || "",
          feat: tempCharacterObject.skills.all.knowledge_engineering.feat || "",
          trait: tempCharacterObject.skills.all.knowledge_engineering.trait || "",
          current: "",
          bonuses: {
            str: tempCharacterObject.skills.all.knowledge_engineering.bonuses.str_bonus || false,
            dex: tempCharacterObject.skills.all.knowledge_engineering.bonuses.dex_bonus || false,
            con: tempCharacterObject.skills.all.knowledge_engineering.bonuses.con_bonus || false,
            int: tempCharacterObject.skills.all.knowledge_engineering.bonuses.int_bonus || true,
            wis: tempCharacterObject.skills.all.knowledge_engineering.bonuses.wis_bonus || false,
            cha: tempCharacterObject.skills.all.knowledge_engineering.bonuses.cha_bonus || false,
            class_skill: tempCharacterObject.skills.all.knowledge_engineering.bonuses.class_skill || false,
            level: tempCharacterObject.skills.all.knowledge_engineering.bonuses.level || false,
            half_level: tempCharacterObject.skills.all.knowledge_engineering.bonuses.half_level || false,
            check_penalty: tempCharacterObject.skills.all.knowledge_engineering.bonuses.check_penalty || false
          }
        },
        knowledge_geography: {
          ranks: tempCharacterObject.skills.all.knowledge_geography.ranks || "",
          misc: tempCharacterObject.skills.all.knowledge_geography.misc || "",
          racial: tempCharacterObject.skills.all.knowledge_geography.racial || "",
          feat: tempCharacterObject.skills.all.knowledge_geography.feat || "",
          trait: tempCharacterObject.skills.all.knowledge_geography.trait || "",
          current: "",
          bonuses: {
            str: tempCharacterObject.skills.all.knowledge_geography.bonuses.str_bonus || false,
            dex: tempCharacterObject.skills.all.knowledge_geography.bonuses.dex_bonus || false,
            con: tempCharacterObject.skills.all.knowledge_geography.bonuses.con_bonus || false,
            int: tempCharacterObject.skills.all.knowledge_geography.bonuses.int_bonus || true,
            wis: tempCharacterObject.skills.all.knowledge_geography.bonuses.wis_bonus || false,
            cha: tempCharacterObject.skills.all.knowledge_geography.bonuses.cha_bonus || false,
            class_skill: tempCharacterObject.skills.all.knowledge_geography.bonuses.class_skill || false,
            level: tempCharacterObject.skills.all.knowledge_geography.bonuses.level || false,
            half_level: tempCharacterObject.skills.all.knowledge_geography.bonuses.half_level || false,
            check_penalty: tempCharacterObject.skills.all.knowledge_geography.bonuses.check_penalty || false
          }
        },
        knowledge_history: {
          ranks: tempCharacterObject.skills.all.knowledge_history.ranks || "",
          misc: tempCharacterObject.skills.all.knowledge_history.misc || "",
          racial: tempCharacterObject.skills.all.knowledge_history.racial || "",
          feat: tempCharacterObject.skills.all.knowledge_history.feat || "",
          trait: tempCharacterObject.skills.all.knowledge_history.trait || "",
          current: "",
          bonuses: {
            str: tempCharacterObject.skills.all.knowledge_history.bonuses.str_bonus || false,
            dex: tempCharacterObject.skills.all.knowledge_history.bonuses.dex_bonus || false,
            con: tempCharacterObject.skills.all.knowledge_history.bonuses.con_bonus || false,
            int: tempCharacterObject.skills.all.knowledge_history.bonuses.int_bonus || true,
            wis: tempCharacterObject.skills.all.knowledge_history.bonuses.wis_bonus || false,
            cha: tempCharacterObject.skills.all.knowledge_history.bonuses.cha_bonus || false,
            class_skill: tempCharacterObject.skills.all.knowledge_history.bonuses.class_skill || false,
            level: tempCharacterObject.skills.all.knowledge_history.bonuses.level || false,
            half_level: tempCharacterObject.skills.all.knowledge_history.bonuses.half_level || false,
            check_penalty: tempCharacterObject.skills.all.knowledge_history.bonuses.check_penalty || false
          }
        },
        knowledge_local: {
          ranks: tempCharacterObject.skills.all.knowledge_local.ranks || "",
          misc: tempCharacterObject.skills.all.knowledge_local.misc || "",
          racial: tempCharacterObject.skills.all.knowledge_local.racial || "",
          feat: tempCharacterObject.skills.all.knowledge_local.feat || "",
          trait: tempCharacterObject.skills.all.knowledge_local.trait || "",
          current: "",
          bonuses: {
            str: tempCharacterObject.skills.all.knowledge_local.bonuses.str_bonus || false,
            dex: tempCharacterObject.skills.all.knowledge_local.bonuses.dex_bonus || false,
            con: tempCharacterObject.skills.all.knowledge_local.bonuses.con_bonus || false,
            int: tempCharacterObject.skills.all.knowledge_local.bonuses.int_bonus || true,
            wis: tempCharacterObject.skills.all.knowledge_local.bonuses.wis_bonus || false,
            cha: tempCharacterObject.skills.all.knowledge_local.bonuses.cha_bonus || false,
            class_skill: tempCharacterObject.skills.all.knowledge_local.bonuses.class_skill || false,
            level: tempCharacterObject.skills.all.knowledge_local.bonuses.level || false,
            half_level: tempCharacterObject.skills.all.knowledge_local.bonuses.half_level || false,
            check_penalty: tempCharacterObject.skills.all.knowledge_local.bonuses.check_penalty || false
          }
        },
        knowledge_nature: {
          ranks: tempCharacterObject.skills.all.knowledge_nature.ranks || "",
          misc: tempCharacterObject.skills.all.knowledge_nature.misc || "",
          racial: tempCharacterObject.skills.all.knowledge_nature.racial || "",
          feat: tempCharacterObject.skills.all.knowledge_nature.feat || "",
          trait: tempCharacterObject.skills.all.knowledge_nature.trait || "",
          current: "",
          bonuses: {
            str: tempCharacterObject.skills.all.knowledge_nature.bonuses.str_bonus || false,
            dex: tempCharacterObject.skills.all.knowledge_nature.bonuses.dex_bonus || false,
            con: tempCharacterObject.skills.all.knowledge_nature.bonuses.con_bonus || false,
            int: tempCharacterObject.skills.all.knowledge_nature.bonuses.int_bonus || true,
            wis: tempCharacterObject.skills.all.knowledge_nature.bonuses.wis_bonus || false,
            cha: tempCharacterObject.skills.all.knowledge_nature.bonuses.cha_bonus || false,
            class_skill: tempCharacterObject.skills.all.knowledge_nature.bonuses.class_skill || false,
            level: tempCharacterObject.skills.all.knowledge_nature.bonuses.level || false,
            half_level: tempCharacterObject.skills.all.knowledge_nature.bonuses.half_level || false,
            check_penalty: tempCharacterObject.skills.all.knowledge_nature.bonuses.check_penalty || false
          }
        },
        knowledge_nobility: {
          ranks: tempCharacterObject.skills.all.knowledge_nobility.ranks || "",
          misc: tempCharacterObject.skills.all.knowledge_nobility.misc || "",
          racial: tempCharacterObject.skills.all.knowledge_nobility.racial || "",
          feat: tempCharacterObject.skills.all.knowledge_nobility.feat || "",
          trait: tempCharacterObject.skills.all.knowledge_nobility.trait || "",
          current: "",
          bonuses: {
            str: tempCharacterObject.skills.all.knowledge_nobility.bonuses.str_bonus || false,
            dex: tempCharacterObject.skills.all.knowledge_nobility.bonuses.dex_bonus || false,
            con: tempCharacterObject.skills.all.knowledge_nobility.bonuses.con_bonus || false,
            int: tempCharacterObject.skills.all.knowledge_nobility.bonuses.int_bonus || true,
            wis: tempCharacterObject.skills.all.knowledge_nobility.bonuses.wis_bonus || false,
            cha: tempCharacterObject.skills.all.knowledge_nobility.bonuses.cha_bonus || false,
            class_skill: tempCharacterObject.skills.all.knowledge_nobility.bonuses.class_skill || false,
            level: tempCharacterObject.skills.all.knowledge_nobility.bonuses.level || false,
            half_level: tempCharacterObject.skills.all.knowledge_nobility.bonuses.half_level || false,
            check_penalty: tempCharacterObject.skills.all.knowledge_nobility.bonuses.check_penalty || false
          }
        },
        knowledge_planes: {
          ranks: tempCharacterObject.skills.all.knowledge_planes.ranks || "",
          misc: tempCharacterObject.skills.all.knowledge_planes.misc || "",
          racial: tempCharacterObject.skills.all.knowledge_planes.racial || "",
          feat: tempCharacterObject.skills.all.knowledge_planes.feat || "",
          trait: tempCharacterObject.skills.all.knowledge_planes.trait || "",
          current: "",
          bonuses: {
            str: tempCharacterObject.skills.all.knowledge_planes.bonuses.str_bonus || false,
            dex: tempCharacterObject.skills.all.knowledge_planes.bonuses.dex_bonus || false,
            con: tempCharacterObject.skills.all.knowledge_planes.bonuses.con_bonus || false,
            int: tempCharacterObject.skills.all.knowledge_planes.bonuses.int_bonus || true,
            wis: tempCharacterObject.skills.all.knowledge_planes.bonuses.wis_bonus || false,
            cha: tempCharacterObject.skills.all.knowledge_planes.bonuses.cha_bonus || false,
            class_skill: tempCharacterObject.skills.all.knowledge_planes.bonuses.class_skill || false,
            level: tempCharacterObject.skills.all.knowledge_planes.bonuses.level || false,
            half_level: tempCharacterObject.skills.all.knowledge_planes.bonuses.half_level || false,
            check_penalty: tempCharacterObject.skills.all.knowledge_planes.bonuses.check_penalty || false
          }
        },
        knowledge_religion: {
          ranks: tempCharacterObject.skills.all.knowledge_religion.ranks || "",
          misc: tempCharacterObject.skills.all.knowledge_religion.misc || "",
          racial: tempCharacterObject.skills.all.knowledge_religion.racial || "",
          feat: tempCharacterObject.skills.all.knowledge_religion.feat || "",
          trait: tempCharacterObject.skills.all.knowledge_religion.trait || "",
          current: "",
          bonuses: {
            str: tempCharacterObject.skills.all.knowledge_religion.bonuses.str_bonus || false,
            dex: tempCharacterObject.skills.all.knowledge_religion.bonuses.dex_bonus || false,
            con: tempCharacterObject.skills.all.knowledge_religion.bonuses.con_bonus || false,
            int: tempCharacterObject.skills.all.knowledge_religion.bonuses.int_bonus || true,
            wis: tempCharacterObject.skills.all.knowledge_religion.bonuses.wis_bonus || false,
            cha: tempCharacterObject.skills.all.knowledge_religion.bonuses.cha_bonus || false,
            class_skill: tempCharacterObject.skills.all.knowledge_religion.bonuses.class_skill || false,
            level: tempCharacterObject.skills.all.knowledge_religion.bonuses.level || false,
            half_level: tempCharacterObject.skills.all.knowledge_religion.bonuses.half_level || false,
            check_penalty: tempCharacterObject.skills.all.knowledge_religion.bonuses.check_penalty || false
          }
        },
        linguistics: {
          ranks: tempCharacterObject.skills.all.linguistics.ranks || "",
          misc: tempCharacterObject.skills.all.linguistics.misc || "",
          racial: tempCharacterObject.skills.all.linguistics.racial || "",
          feat: tempCharacterObject.skills.all.linguistics.feat || "",
          trait: tempCharacterObject.skills.all.linguistics.trait || "",
          current: "",
          bonuses: {
            str: tempCharacterObject.skills.all.linguistics.bonuses.str_bonus || false,
            dex: tempCharacterObject.skills.all.linguistics.bonuses.dex_bonus || false,
            con: tempCharacterObject.skills.all.linguistics.bonuses.con_bonus || false,
            int: tempCharacterObject.skills.all.linguistics.bonuses.int_bonus || true,
            wis: tempCharacterObject.skills.all.linguistics.bonuses.wis_bonus || false,
            cha: tempCharacterObject.skills.all.linguistics.bonuses.cha_bonus || false,
            class_skill: tempCharacterObject.skills.all.linguistics.bonuses.class_skill || false,
            level: tempCharacterObject.skills.all.linguistics.bonuses.level || false,
            half_level: tempCharacterObject.skills.all.linguistics.bonuses.half_level || false,
            check_penalty: tempCharacterObject.skills.all.linguistics.bonuses.check_penalty || false
          }
        },
        perception: {
          ranks: tempCharacterObject.skills.all.perception.ranks || "",
          misc: tempCharacterObject.skills.all.perception.misc || "",
          racial: tempCharacterObject.skills.all.perception.racial || "",
          feat: tempCharacterObject.skills.all.perception.feat || "",
          trait: tempCharacterObject.skills.all.perception.trait || "",
          current: "",
          bonuses: {
            str: tempCharacterObject.skills.all.perception.bonuses.str_bonus || false,
            dex: tempCharacterObject.skills.all.perception.bonuses.dex_bonus || false,
            con: tempCharacterObject.skills.all.perception.bonuses.con_bonus || false,
            int: tempCharacterObject.skills.all.perception.bonuses.int_bonus || false,
            wis: tempCharacterObject.skills.all.perception.bonuses.wis_bonus || true,
            cha: tempCharacterObject.skills.all.perception.bonuses.cha_bonus || false,
            class_skill: tempCharacterObject.skills.all.perception.bonuses.class_skill || false,
            level: tempCharacterObject.skills.all.perception.bonuses.level || false,
            half_level: tempCharacterObject.skills.all.perception.bonuses.half_level || false,
            check_penalty: tempCharacterObject.skills.all.perception.bonuses.check_penalty || false
          }
        },
        perform_1: {
          variant_name: tempCharacterObject.skills.all.perform_1.variant_name || "",
          ranks: tempCharacterObject.skills.all.perform_1.ranks || "",
          misc: tempCharacterObject.skills.all.perform_1.misc || "",
          racial: tempCharacterObject.skills.all.perform_1.racial || "",
          feat: tempCharacterObject.skills.all.perform_1.feat || "",
          trait: tempCharacterObject.skills.all.perform_1.trait || "",
          current: "",
          bonuses: {
            str: tempCharacterObject.skills.all.perform_1.bonuses.str_bonus || false,
            dex: tempCharacterObject.skills.all.perform_1.bonuses.dex_bonus || false,
            con: tempCharacterObject.skills.all.perform_1.bonuses.con_bonus || false,
            int: tempCharacterObject.skills.all.perform_1.bonuses.int_bonus || false,
            wis: tempCharacterObject.skills.all.perform_1.bonuses.wis_bonus || false,
            cha: tempCharacterObject.skills.all.perform_1.bonuses.cha_bonus || true,
            class_skill: tempCharacterObject.skills.all.perform_1.bonuses.class_skill || false,
            level: tempCharacterObject.skills.all.perform_1.bonuses.level || false,
            half_level: tempCharacterObject.skills.all.perform_1.bonuses.half_level || false,
            check_penalty: tempCharacterObject.skills.all.perform_1.bonuses.check_penalty || false
          }
        },
        perform_2: {
          variant_name: tempCharacterObject.skills.all.perform_2.variant_name || "",
          ranks: tempCharacterObject.skills.all.perform_2.ranks || "",
          misc: tempCharacterObject.skills.all.perform_2.misc || "",
          racial: tempCharacterObject.skills.all.perform_2.racial || "",
          feat: tempCharacterObject.skills.all.perform_2.feat || "",
          trait: tempCharacterObject.skills.all.perform_2.trait || "",
          current: "",
          bonuses: {
            str: tempCharacterObject.skills.all.perform_2.bonuses.str_bonus || false,
            dex: tempCharacterObject.skills.all.perform_2.bonuses.dex_bonus || false,
            con: tempCharacterObject.skills.all.perform_2.bonuses.con_bonus || false,
            int: tempCharacterObject.skills.all.perform_2.bonuses.int_bonus || false,
            wis: tempCharacterObject.skills.all.perform_2.bonuses.wis_bonus || false,
            cha: tempCharacterObject.skills.all.perform_2.bonuses.cha_bonus || true,
            class_skill: tempCharacterObject.skills.all.perform_2.bonuses.class_skill || false,
            level: tempCharacterObject.skills.all.perform_2.bonuses.level || false,
            half_level: tempCharacterObject.skills.all.perform_2.bonuses.half_level || false,
            check_penalty: tempCharacterObject.skills.all.perform_2.bonuses.check_penalty || false
          }
        },
        profession_1: {
          variant_name: tempCharacterObject.skills.all.profession_1.variant_name || "",
          ranks: tempCharacterObject.skills.all.profession_1.ranks || "",
          misc: tempCharacterObject.skills.all.profession_1.misc || "",
          racial: tempCharacterObject.skills.all.profession_1.racial || "",
          feat: tempCharacterObject.skills.all.profession_1.feat || "",
          trait: tempCharacterObject.skills.all.profession_1.trait || "",
          current: "",
          bonuses: {
            str: tempCharacterObject.skills.all.profession_1.bonuses.str_bonus || false,
            dex: tempCharacterObject.skills.all.profession_1.bonuses.dex_bonus || false,
            con: tempCharacterObject.skills.all.profession_1.bonuses.con_bonus || false,
            int: tempCharacterObject.skills.all.profession_1.bonuses.int_bonus || false,
            wis: tempCharacterObject.skills.all.profession_1.bonuses.wis_bonus || true,
            cha: tempCharacterObject.skills.all.profession_1.bonuses.cha_bonus || false,
            class_skill: tempCharacterObject.skills.all.profession_1.bonuses.class_skill || false,
            level: tempCharacterObject.skills.all.profession_1.bonuses.level || false,
            half_level: tempCharacterObject.skills.all.profession_1.bonuses.half_level || false,
            check_penalty: tempCharacterObject.skills.all.profession_1.bonuses.check_penalty || false
          }
        },
        profession_2: {
          variant_name: tempCharacterObject.skills.all.profession_2.variant_name || "",
          ranks: tempCharacterObject.skills.all.profession_2.ranks || "",
          misc: tempCharacterObject.skills.all.profession_2.misc || "",
          racial: tempCharacterObject.skills.all.profession_2.racial || "",
          feat: tempCharacterObject.skills.all.profession_2.feat || "",
          trait: tempCharacterObject.skills.all.profession_2.trait || "",
          current: "",
          bonuses: {
            str: tempCharacterObject.skills.all.profession_2.bonuses.str_bonus || false,
            dex: tempCharacterObject.skills.all.profession_2.bonuses.dex_bonus || false,
            con: tempCharacterObject.skills.all.profession_2.bonuses.con_bonus || false,
            int: tempCharacterObject.skills.all.profession_2.bonuses.int_bonus || false,
            wis: tempCharacterObject.skills.all.profession_2.bonuses.wis_bonus || true,
            cha: tempCharacterObject.skills.all.profession_2.bonuses.cha_bonus || false,
            class_skill: tempCharacterObject.skills.all.profession_2.bonuses.class_skill || false,
            level: tempCharacterObject.skills.all.profession_2.bonuses.level || false,
            half_level: tempCharacterObject.skills.all.profession_2.bonuses.half_level || false,
            check_penalty: tempCharacterObject.skills.all.profession_2.bonuses.check_penalty || false
          }
        },
        ride: {
          ranks: tempCharacterObject.skills.all.ride.ranks || "",
          misc: tempCharacterObject.skills.all.ride.misc || "",
          racial: tempCharacterObject.skills.all.ride.racial || "",
          feat: tempCharacterObject.skills.all.ride.feat || "",
          trait: tempCharacterObject.skills.all.ride.trait || "",
          current: "",
          bonuses: {
            str: tempCharacterObject.skills.all.ride.bonuses.str_bonus || false,
            dex: tempCharacterObject.skills.all.ride.bonuses.dex_bonus || true,
            con: tempCharacterObject.skills.all.ride.bonuses.con_bonus || false,
            int: tempCharacterObject.skills.all.ride.bonuses.int_bonus || false,
            wis: tempCharacterObject.skills.all.ride.bonuses.wis_bonus || false,
            cha: tempCharacterObject.skills.all.ride.bonuses.cha_bonus || false,
            class_skill: tempCharacterObject.skills.all.ride.bonuses.class_skill || false,
            level: tempCharacterObject.skills.all.ride.bonuses.level || false,
            half_level: tempCharacterObject.skills.all.ride.bonuses.half_level || false,
            check_penalty: tempCharacterObject.skills.all.ride.bonuses.check_penalty || true
          }
        },
        sense_motive: {
          ranks: tempCharacterObject.skills.all.sense_motive.ranks || "",
          misc: tempCharacterObject.skills.all.sense_motive.misc || "",
          racial: tempCharacterObject.skills.all.sense_motive.racial || "",
          feat: tempCharacterObject.skills.all.sense_motive.feat || "",
          trait: tempCharacterObject.skills.all.sense_motive.trait || "",
          current: "",
          bonuses: {
            str: tempCharacterObject.skills.all.sense_motive.bonuses.str_bonus || false,
            dex: tempCharacterObject.skills.all.sense_motive.bonuses.dex_bonus || false,
            con: tempCharacterObject.skills.all.sense_motive.bonuses.con_bonus || false,
            int: tempCharacterObject.skills.all.sense_motive.bonuses.int_bonus || false,
            wis: tempCharacterObject.skills.all.sense_motive.bonuses.wis_bonus || true,
            cha: tempCharacterObject.skills.all.sense_motive.bonuses.cha_bonus || false,
            class_skill: tempCharacterObject.skills.all.sense_motive.bonuses.class_skill || false,
            level: tempCharacterObject.skills.all.sense_motive.bonuses.level || false,
            half_level: tempCharacterObject.skills.all.sense_motive.bonuses.half_level || false,
            check_penalty: tempCharacterObject.skills.all.sense_motive.bonuses.check_penalty || false
          }
        },
        sleight_of_hand: {
          ranks: tempCharacterObject.skills.all.sleight_of_hand.ranks || "",
          misc: tempCharacterObject.skills.all.sleight_of_hand.misc || "",
          racial: tempCharacterObject.skills.all.sleight_of_hand.racial || "",
          feat: tempCharacterObject.skills.all.sleight_of_hand.feat || "",
          trait: tempCharacterObject.skills.all.sleight_of_hand.trait || "",
          current: "",
          bonuses: {
            str: tempCharacterObject.skills.all.sleight_of_hand.bonuses.str_bonus || false,
            dex: tempCharacterObject.skills.all.sleight_of_hand.bonuses.dex_bonus || true,
            con: tempCharacterObject.skills.all.sleight_of_hand.bonuses.con_bonus || false,
            int: tempCharacterObject.skills.all.sleight_of_hand.bonuses.int_bonus || false,
            wis: tempCharacterObject.skills.all.sleight_of_hand.bonuses.wis_bonus || false,
            cha: tempCharacterObject.skills.all.sleight_of_hand.bonuses.cha_bonus || false,
            class_skill: tempCharacterObject.skills.all.sleight_of_hand.bonuses.class_skill || false,
            level: tempCharacterObject.skills.all.sleight_of_hand.bonuses.level || false,
            half_level: tempCharacterObject.skills.all.sleight_of_hand.bonuses.half_level || false,
            check_penalty: tempCharacterObject.skills.all.sleight_of_hand.bonuses.check_penalty || true
          }
        },
        spellcraft: {
          ranks: tempCharacterObject.skills.all.spellcraft.ranks || "",
          misc: tempCharacterObject.skills.all.spellcraft.misc || "",
          racial: tempCharacterObject.skills.all.spellcraft.racial || "",
          feat: tempCharacterObject.skills.all.spellcraft.feat || "",
          trait: tempCharacterObject.skills.all.spellcraft.trait || "",
          current: "",
          bonuses: {
            str: tempCharacterObject.skills.all.spellcraft.bonuses.str_bonus || false,
            dex: tempCharacterObject.skills.all.spellcraft.bonuses.dex_bonus || false,
            con: tempCharacterObject.skills.all.spellcraft.bonuses.con_bonus || false,
            int: tempCharacterObject.skills.all.spellcraft.bonuses.int_bonus || true,
            wis: tempCharacterObject.skills.all.spellcraft.bonuses.wis_bonus || false,
            cha: tempCharacterObject.skills.all.spellcraft.bonuses.cha_bonus || false,
            class_skill: tempCharacterObject.skills.all.spellcraft.bonuses.class_skill || false,
            level: tempCharacterObject.skills.all.spellcraft.bonuses.level || false,
            half_level: tempCharacterObject.skills.all.spellcraft.bonuses.half_level || false,
            check_penalty: tempCharacterObject.skills.all.spellcraft.bonuses.check_penalty || false
          }
        },
        stealth: {
          ranks: tempCharacterObject.skills.all.stealth.ranks || "",
          misc: tempCharacterObject.skills.all.stealth.misc || "",
          racial: tempCharacterObject.skills.all.stealth.racial || "",
          feat: tempCharacterObject.skills.all.stealth.feat || "",
          trait: tempCharacterObject.skills.all.stealth.trait || "",
          current: "",
          bonuses: {
            str: tempCharacterObject.skills.all.stealth.bonuses.str_bonus || false,
            dex: tempCharacterObject.skills.all.stealth.bonuses.dex_bonus || true,
            con: tempCharacterObject.skills.all.stealth.bonuses.con_bonus || false,
            int: tempCharacterObject.skills.all.stealth.bonuses.int_bonus || false,
            wis: tempCharacterObject.skills.all.stealth.bonuses.wis_bonus || false,
            cha: tempCharacterObject.skills.all.stealth.bonuses.cha_bonus || false,
            class_skill: tempCharacterObject.skills.all.stealth.bonuses.class_skill || false,
            level: tempCharacterObject.skills.all.stealth.bonuses.level || false,
            half_level: tempCharacterObject.skills.all.stealth.bonuses.half_level || false,
            check_penalty: tempCharacterObject.skills.all.stealth.bonuses.check_penalty || true,
            size_stealth: tempCharacterObject.skills.all.stealth.bonuses.size_stealth || true
          }
        },
        survival: {
          ranks: tempCharacterObject.skills.all.survival.ranks || "",
          misc: tempCharacterObject.skills.all.survival.misc || "",
          racial: tempCharacterObject.skills.all.survival.racial || "",
          feat: tempCharacterObject.skills.all.survival.feat || "",
          trait: tempCharacterObject.skills.all.survival.trait || "",
          current: "",
          bonuses: {
            str: tempCharacterObject.skills.all.survival.bonuses.str_bonus || false,
            dex: tempCharacterObject.skills.all.survival.bonuses.dex_bonus || false,
            con: tempCharacterObject.skills.all.survival.bonuses.con_bonus || false,
            int: tempCharacterObject.skills.all.survival.bonuses.int_bonus || false,
            wis: tempCharacterObject.skills.all.survival.bonuses.wis_bonus || true,
            cha: tempCharacterObject.skills.all.survival.bonuses.cha_bonus || false,
            class_skill: tempCharacterObject.skills.all.survival.bonuses.class_skill || false,
            level: tempCharacterObject.skills.all.survival.bonuses.level || false,
            half_level: tempCharacterObject.skills.all.survival.bonuses.half_level || false,
            check_penalty: tempCharacterObject.skills.all.survival.bonuses.check_penalty || false
          }
        },
        swim: {
          ranks: tempCharacterObject.skills.all.swim.ranks || "",
          misc: tempCharacterObject.skills.all.swim.misc || "",
          racial: tempCharacterObject.skills.all.swim.racial || "",
          feat: tempCharacterObject.skills.all.swim.feat || "",
          trait: tempCharacterObject.skills.all.swim.trait || "",
          current: "",
          bonuses: {
            str: tempCharacterObject.skills.all.swim.bonuses.str_bonus || true,
            dex: tempCharacterObject.skills.all.swim.bonuses.dex_bonus || false,
            con: tempCharacterObject.skills.all.swim.bonuses.con_bonus || false,
            int: tempCharacterObject.skills.all.swim.bonuses.int_bonus || false,
            wis: tempCharacterObject.skills.all.swim.bonuses.wis_bonus || false,
            cha: tempCharacterObject.skills.all.swim.bonuses.cha_bonus || false,
            class_skill: tempCharacterObject.skills.all.swim.bonuses.class_skill || false,
            level: tempCharacterObject.skills.all.swim.bonuses.level || false,
            half_level: tempCharacterObject.skills.all.swim.bonuses.half_level || false,
            check_penalty: tempCharacterObject.skills.all.swim.bonuses.check_penalty || true
          }
        },
        use_magic_device: {
          ranks: tempCharacterObject.skills.all.use_magic_device.ranks || "",
          misc: tempCharacterObject.skills.all.use_magic_device.misc || "",
          racial: tempCharacterObject.skills.all.use_magic_device.racial || "",
          feat: tempCharacterObject.skills.all.use_magic_device.feat || "",
          trait: tempCharacterObject.skills.all.use_magic_device.trait || "",
          current: "",
          bonuses: {
            str: tempCharacterObject.skills.all.use_magic_device.bonuses.str_bonus || false,
            dex: tempCharacterObject.skills.all.use_magic_device.bonuses.dex_bonus || false,
            con: tempCharacterObject.skills.all.use_magic_device.bonuses.con_bonus || false,
            int: tempCharacterObject.skills.all.use_magic_device.bonuses.int_bonus || false,
            wis: tempCharacterObject.skills.all.use_magic_device.bonuses.wis_bonus || false,
            cha: tempCharacterObject.skills.all.use_magic_device.bonuses.cha_bonus || true,
            class_skill: tempCharacterObject.skills.all.use_magic_device.bonuses.class_skill || false,
            level: tempCharacterObject.skills.all.use_magic_device.bonuses.level || false,
            half_level: tempCharacterObject.skills.all.use_magic_device.bonuses.half_level || false,
            check_penalty: tempCharacterObject.skills.all.use_magic_device.bonuses.check_penalty || false
          }
        }
      }
    };
    if (characterObject.skills.custom.all.length > 0) {
      for (var i = 0; i < characterObject.skills.custom.all.length; i++) {
        characterObject.skills.custom.all[i].bonuses = {
          str: tempCharacterObject.skills.custom[i].bonuses.str_bonus || false,
          dex: tempCharacterObject.skills.custom[i].bonuses.dex_bonus || false,
          con: tempCharacterObject.skills.custom[i].bonuses.con_bonus || false,
          int: tempCharacterObject.skills.custom[i].bonuses.int_bonus || false,
          wis: tempCharacterObject.skills.custom[i].bonuses.wis_bonus || false,
          cha: tempCharacterObject.skills.custom[i].bonuses.cha_bonus || false,
          class_skill: tempCharacterObject.skills.custom[i].bonuses.class_skill || false,
          level: tempCharacterObject.skills.custom[i].bonuses.level || false,
          half_level: tempCharacterObject.skills.custom[i].bonuses.half_level || false,
          check_penalty: tempCharacterObject.skills.custom[i].bonuses.check_penalty || false,
          size_stealth: tempCharacterObject.skills.custom[i].bonuses.size_modifier_stealth || false,
          size_fly: tempCharacterObject.skills.custom[i].bonuses.size_modifier_fly || false
        };
      };
    };
    // spells
    characterObject.spells = {
      stats: {
        concentration: {
          misc: tempCharacterObject.spells.concentration.misc || "",
          temp: tempCharacterObject.spells.concentration.temp || "",
          racial: tempCharacterObject.spells.concentration.racial || "",
          feat: tempCharacterObject.spells.concentration.feat || "",
          trait: tempCharacterObject.spells.concentration.trait || "",
          current: "",
          bonuses: {
            str: tempCharacterObject.spells.concentration.bonuses.str_bonus || false,
            dex: tempCharacterObject.spells.concentration.bonuses.dex_bonus || false,
            con: tempCharacterObject.spells.concentration.bonuses.con_bonus || false,
            int: tempCharacterObject.spells.concentration.bonuses.int_bonus || false,
            wis: tempCharacterObject.spells.concentration.bonuses.wis_bonus || false,
            cha: tempCharacterObject.spells.concentration.bonuses.cha_bonus || false,
            level: tempCharacterObject.spells.concentration.bonuses.level || false,
            half_level: tempCharacterObject.spells.concentration.bonuses.half_level || false
          }
        },
        caster_level_check: {
          misc: tempCharacterObject.spells.caster_level_check.misc || "",
          temp: tempCharacterObject.spells.caster_level_check.temp || "",
          racial: tempCharacterObject.spells.caster_level_check.racial || "",
          feat: tempCharacterObject.spells.caster_level_check.feat || "",
          trait: tempCharacterObject.spells.caster_level_check.trait || "",
          current: "",
          bonuses: {
            str: tempCharacterObject.spells.caster_level_check.bonuses.str_bonus || false,
            dex: tempCharacterObject.spells.caster_level_check.bonuses.dex_bonus || false,
            con: tempCharacterObject.spells.caster_level_check.bonuses.con_bonus || false,
            int: tempCharacterObject.spells.caster_level_check.bonuses.int_bonus || false,
            wis: tempCharacterObject.spells.caster_level_check.bonuses.wis_bonus || false,
            cha: tempCharacterObject.spells.caster_level_check.bonuses.cha_bonus || false,
            level: tempCharacterObject.spells.caster_level_check.bonuses.level || false,
            half_level: tempCharacterObject.spells.caster_level_check.bonuses.half_level || false
          }
        },
        school: tempCharacterObject.spells.school || "",
        opposition: tempCharacterObject.spells.opposition || "",
        domains: tempCharacterObject.spells.domains || "",
        bloodline: tempCharacterObject.spells.bloodline || "",
        notes: tempCharacterObject.spells.spell_notes || ""
      },
      book: {
        level_0: {
          per_day: tempCharacterObject.spells.per_day.level_0 || "",
          known: tempCharacterObject.spells.known.level_0 || "",
          bonus: tempCharacterObject.spells.bonus.level_0 || "",
          dc: {
            spell_level: 0,
            misc: tempCharacterObject.spells.dc.level_0.misc || "",
            temp: tempCharacterObject.spells.dc.level_0.temp || "",
            feat: tempCharacterObject.spells.dc.level_0.feat || "",
            trait: tempCharacterObject.spells.dc.level_0.trait || "",
            current: "",
            bonuses: {
              str: tempCharacterObject.spells.dc.level_0.bonuses.str_bonus || false,
              dex: tempCharacterObject.spells.dc.level_0.bonuses.dex_bonus || false,
              con: tempCharacterObject.spells.dc.level_0.bonuses.con_bonus || false,
              int: tempCharacterObject.spells.dc.level_0.bonuses.int_bonus || false,
              wis: tempCharacterObject.spells.dc.level_0.bonuses.wis_bonus || false,
              cha: tempCharacterObject.spells.dc.level_0.bonuses.cha_bonus || false,
              level: tempCharacterObject.spells.dc.level_0.bonuses.level || false,
              half_level: tempCharacterObject.spells.dc.level_0.bonuses.half_level || false,
              spell_level: tempCharacterObject.spells.dc.level_0.bonuses.spell_level || false,
              plus_ten: tempCharacterObject.spells.dc.level_0.bonuses.plus_ten || false
            }
          },
          all: tempCharacterObject.spells.book[0].level_0
        },
        level_1: {
          per_day: tempCharacterObject.spells.per_day.level_1 || "",
          known: tempCharacterObject.spells.known.level_1 || "",
          bonus: tempCharacterObject.spells.bonus.level_1 || "",
          dc: {
            spell_level: 1,
            misc: tempCharacterObject.spells.dc.level_1.misc || "",
            temp: tempCharacterObject.spells.dc.level_1.temp || "",
            feat: tempCharacterObject.spells.dc.level_1.feat || "",
            trait: tempCharacterObject.spells.dc.level_1.trait || "",
            current: "",
            bonuses: {
              str: tempCharacterObject.spells.dc.level_1.bonuses.str_bonus || false,
              dex: tempCharacterObject.spells.dc.level_1.bonuses.dex_bonus || false,
              con: tempCharacterObject.spells.dc.level_1.bonuses.con_bonus || false,
              int: tempCharacterObject.spells.dc.level_1.bonuses.int_bonus || false,
              wis: tempCharacterObject.spells.dc.level_1.bonuses.wis_bonus || false,
              cha: tempCharacterObject.spells.dc.level_1.bonuses.cha_bonus || false,
              level: tempCharacterObject.spells.dc.level_1.bonuses.level || false,
              half_level: tempCharacterObject.spells.dc.level_1.bonuses.half_level || false,
              spell_level: tempCharacterObject.spells.dc.level_1.bonuses.spell_level || false,
              plus_ten: tempCharacterObject.spells.dc.level_1.bonuses.plus_ten || false
            }
          },
          all: tempCharacterObject.spells.book[1].level_1
        },
        level_2: {
          per_day: tempCharacterObject.spells.per_day.level_2 || "",
          known: tempCharacterObject.spells.known.level_2 || "",
          bonus: tempCharacterObject.spells.bonus.level_2 || "",
          dc: {
            spell_level: 2,
            misc: tempCharacterObject.spells.dc.level_2.misc || "",
            temp: tempCharacterObject.spells.dc.level_2.temp || "",
            feat: tempCharacterObject.spells.dc.level_2.feat || "",
            trait: tempCharacterObject.spells.dc.level_2.trait || "",
            current: "",
            bonuses: {
              str: tempCharacterObject.spells.dc.level_2.bonuses.str_bonus || false,
              dex: tempCharacterObject.spells.dc.level_2.bonuses.dex_bonus || false,
              con: tempCharacterObject.spells.dc.level_2.bonuses.con_bonus || false,
              int: tempCharacterObject.spells.dc.level_2.bonuses.int_bonus || false,
              wis: tempCharacterObject.spells.dc.level_2.bonuses.wis_bonus || false,
              cha: tempCharacterObject.spells.dc.level_2.bonuses.cha_bonus || false,
              level: tempCharacterObject.spells.dc.level_2.bonuses.level || false,
              half_level: tempCharacterObject.spells.dc.level_2.bonuses.half_level || false,
              spell_level: tempCharacterObject.spells.dc.level_2.bonuses.spell_level || false,
              plus_ten: tempCharacterObject.spells.dc.level_2.bonuses.plus_ten || false
            }
          },
          all: tempCharacterObject.spells.book[2].level_2
        },
        level_3: {
          per_day: tempCharacterObject.spells.per_day.level_3 || "",
          known: tempCharacterObject.spells.known.level_3 || "",
          bonus: tempCharacterObject.spells.bonus.level_3 || "",
          dc: {
            spell_level: 3,
            misc: tempCharacterObject.spells.dc.level_3.misc || "",
            temp: tempCharacterObject.spells.dc.level_3.temp || "",
            feat: tempCharacterObject.spells.dc.level_3.feat || "",
            trait: tempCharacterObject.spells.dc.level_3.trait || "",
            current: "",
            bonuses: {
              str: tempCharacterObject.spells.dc.level_3.bonuses.str_bonus || false,
              dex: tempCharacterObject.spells.dc.level_3.bonuses.dex_bonus || false,
              con: tempCharacterObject.spells.dc.level_3.bonuses.con_bonus || false,
              int: tempCharacterObject.spells.dc.level_3.bonuses.int_bonus || false,
              wis: tempCharacterObject.spells.dc.level_3.bonuses.wis_bonus || false,
              cha: tempCharacterObject.spells.dc.level_3.bonuses.cha_bonus || false,
              level: tempCharacterObject.spells.dc.level_3.bonuses.level || false,
              half_level: tempCharacterObject.spells.dc.level_3.bonuses.half_level || false,
              spell_level: tempCharacterObject.spells.dc.level_3.bonuses.spell_level || false,
              plus_ten: tempCharacterObject.spells.dc.level_3.bonuses.plus_ten || false
            }
          },
          all: tempCharacterObject.spells.book[3].level_3
        },
        level_4: {
          per_day: tempCharacterObject.spells.per_day.level_4 || "",
          known: tempCharacterObject.spells.known.level_4 || "",
          bonus: tempCharacterObject.spells.bonus.level_4 || "",
          dc: {
            spell_level: 4,
            misc: tempCharacterObject.spells.dc.level_4.misc || "",
            temp: tempCharacterObject.spells.dc.level_4.temp || "",
            feat: tempCharacterObject.spells.dc.level_4.feat || "",
            trait: tempCharacterObject.spells.dc.level_4.trait || "",
            current: "",
            bonuses: {
              str: tempCharacterObject.spells.dc.level_4.bonuses.str_bonus || false,
              dex: tempCharacterObject.spells.dc.level_4.bonuses.dex_bonus || false,
              con: tempCharacterObject.spells.dc.level_4.bonuses.con_bonus || false,
              int: tempCharacterObject.spells.dc.level_4.bonuses.int_bonus || false,
              wis: tempCharacterObject.spells.dc.level_4.bonuses.wis_bonus || false,
              cha: tempCharacterObject.spells.dc.level_4.bonuses.cha_bonus || false,
              level: tempCharacterObject.spells.dc.level_4.bonuses.level || false,
              half_level: tempCharacterObject.spells.dc.level_4.bonuses.half_level || false,
              spell_level: tempCharacterObject.spells.dc.level_4.bonuses.spell_level || false,
              plus_ten: tempCharacterObject.spells.dc.level_4.bonuses.plus_ten || false
            }
          },
          all: tempCharacterObject.spells.book[4].level_4
        },
        level_5: {
          per_day: tempCharacterObject.spells.per_day.level_5 || "",
          known: tempCharacterObject.spells.known.level_5 || "",
          bonus: tempCharacterObject.spells.bonus.level_5 || "",
          dc: {
            spell_level: 5,
            misc: tempCharacterObject.spells.dc.level_5.misc || "",
            temp: tempCharacterObject.spells.dc.level_5.temp || "",
            feat: tempCharacterObject.spells.dc.level_5.feat || "",
            trait: tempCharacterObject.spells.dc.level_5.trait || "",
            current: "",
            bonuses: {
              str: tempCharacterObject.spells.dc.level_5.bonuses.str_bonus || false,
              dex: tempCharacterObject.spells.dc.level_5.bonuses.dex_bonus || false,
              con: tempCharacterObject.spells.dc.level_5.bonuses.con_bonus || false,
              int: tempCharacterObject.spells.dc.level_5.bonuses.int_bonus || false,
              wis: tempCharacterObject.spells.dc.level_5.bonuses.wis_bonus || false,
              cha: tempCharacterObject.spells.dc.level_5.bonuses.cha_bonus || false,
              level: tempCharacterObject.spells.dc.level_5.bonuses.level || false,
              half_level: tempCharacterObject.spells.dc.level_5.bonuses.half_level || false,
              spell_level: tempCharacterObject.spells.dc.level_5.bonuses.spell_level || false,
              plus_ten: tempCharacterObject.spells.dc.level_5.bonuses.plus_ten || false
            }
          },
          all: tempCharacterObject.spells.book[5].level_5
        },
        level_6: {
          per_day: tempCharacterObject.spells.per_day.level_6 || "",
          known: tempCharacterObject.spells.known.level_6 || "",
          bonus: tempCharacterObject.spells.bonus.level_6 || "",
          dc: {
            spell_level: 6,
            misc: tempCharacterObject.spells.dc.level_6.misc || "",
            temp: tempCharacterObject.spells.dc.level_6.temp || "",
            feat: tempCharacterObject.spells.dc.level_6.feat || "",
            trait: tempCharacterObject.spells.dc.level_6.trait || "",
            current: "",
            bonuses: {
              str: tempCharacterObject.spells.dc.level_6.bonuses.str_bonus || false,
              dex: tempCharacterObject.spells.dc.level_6.bonuses.dex_bonus || false,
              con: tempCharacterObject.spells.dc.level_6.bonuses.con_bonus || false,
              int: tempCharacterObject.spells.dc.level_6.bonuses.int_bonus || false,
              wis: tempCharacterObject.spells.dc.level_6.bonuses.wis_bonus || false,
              cha: tempCharacterObject.spells.dc.level_6.bonuses.cha_bonus || false,
              level: tempCharacterObject.spells.dc.level_6.bonuses.level || false,
              half_level: tempCharacterObject.spells.dc.level_6.bonuses.half_level || false,
              spell_level: tempCharacterObject.spells.dc.level_6.bonuses.spell_level || false,
              plus_ten: tempCharacterObject.spells.dc.level_6.bonuses.plus_ten || false
            }
          },
          all: tempCharacterObject.spells.book[6].level_6
        },
        level_7: {
          per_day: tempCharacterObject.spells.per_day.level_7 || "",
          known: tempCharacterObject.spells.known.level_7 || "",
          bonus: tempCharacterObject.spells.bonus.level_7 || "",
          dc: {
            spell_level: 7,
            misc: tempCharacterObject.spells.dc.level_7.misc || "",
            temp: tempCharacterObject.spells.dc.level_7.temp || "",
            feat: tempCharacterObject.spells.dc.level_7.feat || "",
            trait: tempCharacterObject.spells.dc.level_7.trait || "",
            current: "",
            bonuses: {
              str: tempCharacterObject.spells.dc.level_7.bonuses.str_bonus || false,
              dex: tempCharacterObject.spells.dc.level_7.bonuses.dex_bonus || false,
              con: tempCharacterObject.spells.dc.level_7.bonuses.con_bonus || false,
              int: tempCharacterObject.spells.dc.level_7.bonuses.int_bonus || false,
              wis: tempCharacterObject.spells.dc.level_7.bonuses.wis_bonus || false,
              cha: tempCharacterObject.spells.dc.level_7.bonuses.cha_bonus || false,
              level: tempCharacterObject.spells.dc.level_7.bonuses.level || false,
              half_level: tempCharacterObject.spells.dc.level_7.bonuses.half_level || false,
              spell_level: tempCharacterObject.spells.dc.level_7.bonuses.spell_level || false,
              plus_ten: tempCharacterObject.spells.dc.level_7.bonuses.plus_ten || false
            }
          },
          all: tempCharacterObject.spells.book[7].level_7
        },
        level_8: {
          per_day: tempCharacterObject.spells.per_day.level_8 || "",
          known: tempCharacterObject.spells.known.level_8 || "",
          bonus: tempCharacterObject.spells.bonus.level_8 || "",
          dc: {
            spell_level: 8,
            misc: tempCharacterObject.spells.dc.level_8.misc || "",
            temp: tempCharacterObject.spells.dc.level_8.temp || "",
            feat: tempCharacterObject.spells.dc.level_8.feat || "",
            trait: tempCharacterObject.spells.dc.level_8.trait || "",
            current: "",
            bonuses: {
              str: tempCharacterObject.spells.dc.level_8.bonuses.str_bonus || false,
              dex: tempCharacterObject.spells.dc.level_8.bonuses.dex_bonus || false,
              con: tempCharacterObject.spells.dc.level_8.bonuses.con_bonus || false,
              int: tempCharacterObject.spells.dc.level_8.bonuses.int_bonus || false,
              wis: tempCharacterObject.spells.dc.level_8.bonuses.wis_bonus || false,
              cha: tempCharacterObject.spells.dc.level_8.bonuses.cha_bonus || false,
              level: tempCharacterObject.spells.dc.level_8.bonuses.level || false,
              half_level: tempCharacterObject.spells.dc.level_8.bonuses.half_level || false,
              spell_level: tempCharacterObject.spells.dc.level_8.bonuses.spell_level || false,
              plus_ten: tempCharacterObject.spells.dc.level_8.bonuses.plus_ten || false
            }
          },
          all: tempCharacterObject.spells.book[8].level_8
        },
        level_9: {
          per_day: tempCharacterObject.spells.per_day.level_9 || "",
          known: tempCharacterObject.spells.known.level_9 || "",
          bonus: tempCharacterObject.spells.bonus.level_9 || "",
          dc: {
            spell_level: 9,
            misc: tempCharacterObject.spells.dc.level_9.misc || "",
            temp: tempCharacterObject.spells.dc.level_9.temp || "",
            feat: tempCharacterObject.spells.dc.level_9.feat || "",
            trait: tempCharacterObject.spells.dc.level_9.trait || "",
            current: "",
            bonuses: {
              str: tempCharacterObject.spells.dc.level_9.bonuses.str_bonus || false,
              dex: tempCharacterObject.spells.dc.level_9.bonuses.dex_bonus || false,
              con: tempCharacterObject.spells.dc.level_9.bonuses.con_bonus || false,
              int: tempCharacterObject.spells.dc.level_9.bonuses.int_bonus || false,
              wis: tempCharacterObject.spells.dc.level_9.bonuses.wis_bonus || false,
              cha: tempCharacterObject.spells.dc.level_9.bonuses.cha_bonus || false,
              level: tempCharacterObject.spells.dc.level_9.bonuses.level || false,
              half_level: tempCharacterObject.spells.dc.level_9.bonuses.half_level || false,
              spell_level: tempCharacterObject.spells.dc.level_9.bonuses.spell_level || false,
              plus_ten: tempCharacterObject.spells.dc.level_9.bonuses.plus_ten || false
            }
          },
          all: tempCharacterObject.spells.book[9].level_9
        }
      }
    };
    // spells
    characterObject.notes = {
      character: {
        all: tempCharacterObject.notes.character || []
      },
      story: {
        all: tempCharacterObject.notes.story || []
      }
    }
    _log("\tupdate complete 5.0.0");
  };

  function _update(options) {
    var defaultOptions = {
      object: null,
      bumpTo: null
    };
    if (options) {
      var defaultOptions = helper.applyOptions(defaultOptions, options);
    };
    var _bumpToVersion = function(version, updateAction) {
      if (defaultOptions.object.awesomeSheet.version != version) {
        updateAction(defaultOptions.object);
      };
    };
    if (defaultOptions.object != null) {
      if (defaultOptions.bumpTo == "5.0.0") {
        _bumpToVersion("5.0.0", _update_500);
      };
    };
  };

  function _repair(options) {
    var defaultOptions = {
      object: null
    };
    if (options) {
      var defaultOptions = helper.applyOptions(defaultOptions, options);
    };
    if (defaultOptions.object) {
      var name = defaultOptions.object.basics.name || defaultOptions.object.basics.character.name;
      _log("_____________________________________________");
      _log("REPAIR + UPDATE > > > " + name);

      // if awesomeSheet check is a boolean
      if (typeof defaultOptions.object.awesomeSheet == "boolean") {
        _log("\tlegacy update: 4.4.0 and below");
        // --------------------------------------------------
        _update_440andBelow(defaultOptions.object);
      };

      if (defaultOptions.object.awesomeSheet.version != update.version()) {
        // version bump
        _log("\tupdate: from " + defaultOptions.object.awesomeSheet.version + " to " + update.version());
        _update({
          object: defaultOptions.object,
          bumpTo: update.version()
        });
      };

    };
  };

  function render(options) {
    var defaultOptions = {
      debug: false,
      object: null
    };
    if (options) {
      var defaultOptions = helper.applyOptions(defaultOptions, options);
    };
    _debug = defaultOptions.debug;
    // check for character object
    if (defaultOptions.object) {
      _repair({
        object: defaultOptions.object
      });
      // if no object repair all characters
    } else {
      var allCharacters = sheet.getAll();
      allCharacters.forEach(function(arrayItem) {
        _repair({
          object: arrayItem
        });
      });
    };
    // store characters
    sheet.store();
  };

  function _log(message) {
    if (_debug) {
      console.log(message);
    };
  };

  // exposed methods
  return {
    render: render
  };

})();
