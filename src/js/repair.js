var repair = (function() {

  var _debug = false;
  var _report = {};

  // legacy sheet update
  function _update_legacy(characterObject) {
    _report._legacy = [];
    // --------------------------------------------------
    // repair spell notes
    if (characterObject.spells.book) {
      for (var i in characterObject.spells.book) {
        for (var j in characterObject.spells.book[i]) {
          if (characterObject.spells.book[i][j].length > 0) {
            for (var k in characterObject.spells.book[i][j]) {
              if (!("note" in characterObject.spells.book[i][j][k]) && typeof characterObject.spells.book[i][j][k].note != "string") {
                _report._legacy.push("update: spell notes");
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
      _report._legacy.push("update: item array");
      characterObject.equipment.item = [];
    };
    // --------------------------------------------------
    // repair note array
    if (typeof characterObject.notes.character == "string" || typeof characterObject.notes.story == "string") {
      _report._legacy.push("update: note array");
      characterObject.notes.character = [];
      characterObject.notes.story = [];
    };
    // --------------------------------------------------
    // repair custom skills array
    if (typeof characterObject.skills.custom == "string" || !characterObject.skills.custom) {
      _report._legacy.push("update: custom skills array");
      characterObject.skills.custom = [];
    };
    // --------------------------------------------------
    // repair custom skills
    if ("custom_1" in characterObject.skills || "custom_2" in characterObject.skills || "custom_3" in characterObject.skills || "custom_4" in characterObject.skills || "custom_5" in characterObject.skills || "custom_6" in characterObject.skills || "custom_7" in characterObject.skills || "custom_8" in characterObject.skills) {
      _report._legacy.push("update: custom skills");
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
    if ("concentration" in characterObject.spells && "bonuses" in characterObject.spells.concentration) {
      if (typeof characterObject.spells.concentration.bonuses != "object" || !characterObject.spells.concentration.bonuses) {
        _report._legacy.push("update: concentration bonus object");
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
    };
    // --------------------------------------------------
    // repair initiative object
    if (typeof characterObject.basics.initiative != "object" || typeof characterObject.basics.initiative.bonuses != "object" || !characterObject.basics.initiative.bonuses) {
      _report._legacy.push("update: initiative object");
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
      _report._legacy.push("update: size object");
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
      _report._legacy.push("update: alignment");
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
      _report._legacy.push("update: armor");
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
            _report._legacy.push("update: racial save bonuses");
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
      _report._legacy.push("update: classes");
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
      _report._legacy.push("update: caster level check");
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
      _report._legacy.push("update: encumbrance");
      delete characterObject.equipment.encumbrance.light;
      delete characterObject.equipment.encumbrance.medium;
      delete characterObject.equipment.encumbrance.heavy;
      delete characterObject.equipment.encumbrance.lift;
      delete characterObject.equipment.encumbrance.drag;
    };
    // --------------------------------------------------
    // repair encumbrance
    if (!("carry_move" in characterObject.equipment.encumbrance)) {
      _report._legacy.push("update: encumbrance");
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
      _report._legacy.push("update: xp");
      characterObject.basics.xp = parseInt(characterObject.basics.xp.replace(/,/g, ""), 10);
    };
    // --------------------------------------------------
    // repair wealth
    if (typeof characterObject.equipment.wealth.platinum == "string" && !characterObject.equipment.wealth.platinum == "") {
      _report._legacy.push("update: wealth platinum");
      characterObject.equipment.wealth.platinum = parseInt(characterObject.equipment.wealth.platinum.replace(/,/g, ""), 10);
    };
    if (typeof characterObject.equipment.wealth.gold == "string" && !characterObject.equipment.wealth.gold == "") {
      _report._legacy.push("update: wealth gold");
      characterObject.equipment.wealth.gold = parseInt(characterObject.equipment.wealth.gold.replace(/,/g, ""), 10);
    };
    if (typeof characterObject.equipment.wealth.silver == "string" && !characterObject.equipment.wealth.silver == "") {
      _report._legacy.push("update: wealth silver");
      characterObject.equipment.wealth.silver = parseInt(characterObject.equipment.wealth.silver.replace(/,/g, ""), 10);
    };
    if (typeof characterObject.equipment.wealth.copper == "string" && !characterObject.equipment.wealth.copper == "") {
      _report._legacy.push("update: wealth copper");
      characterObject.equipment.wealth.copper = parseInt(characterObject.equipment.wealth.copper.replace(/,/g, ""), 10);
    };
    // --------------------------------------------------
    // repair events array
    if (!characterObject.hasOwnProperty("events")) {
      _report._legacy.push("update: events array");
      characterObject.events = [];
    };
    // --------------------------------------------------
    // repair xp and next level
    if (typeof characterObject.basics.xp == "string" || typeof characterObject.basics.xp == "number") {
      _report._legacy.push("update: xp and next level");
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
      _report._legacy.push("update: speed");
      var oldSpeed = characterObject.basics.speed;
      characterObject.basics.speed = {};
      characterObject.basics.speed.land = oldSpeed;
    };
    // --------------------------------------------------
    // repair character image
    if (!characterObject.basics.character_image) {
      _report._legacy.push("update: character image");
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
          _report._legacy.push("update: attack types melee");
          characterObject.offense.attack.melee[i].type = "";
        };
      };
    };
    if (characterObject.offense.attack.ranged.length > 0) {
      for (var i = 0; i < characterObject.offense.attack.ranged.length; i++) {
        if (!characterObject.offense.attack.ranged[i].type && characterObject.offense.attack.ranged[i].type != "") {
          _report._legacy.push("update: attack types ranged");
          characterObject.offense.attack.ranged[i].type = "";
        };
      };
    };
    // --------------------------------------------------
    // repair stats
    if (!("enhancement" in characterObject.statistics.stats.str) || !("enhancement" in characterObject.statistics.stats.dex) || !("enhancement" in characterObject.statistics.stats.con) || !("enhancement" in characterObject.statistics.stats.int) || !("enhancement" in characterObject.statistics.stats.wis) || !("enhancement" in characterObject.statistics.stats.cha)) {
      _report._legacy.push("update: stats");
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
            _report._legacy.push("update: events");
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
      _report._legacy.push("update: character image cover and contain");
      delete characterObject.basics.character_image.cover;
      delete characterObject.basics.character_image.contain;
    };
    // --------------------------------------------------
    // repair character image size
    if (!characterObject.basics.character_image.size) {
      _report._legacy.push("update: character image size");
      characterObject.basics.character_image.size = {
        width: "",
        height: ""
      };
    };
    // --------------------------------------------------
    // repair character image uploaded
    if (!("uploaded" in characterObject.basics.character_image)) {
      _report._legacy.push("update: character image uploaded");
      if (characterObject.equipment.potion_viles_oils != "") {
        characterObject.basics.character_image.uploaded = true;
      } else {
        characterObject.basics.character_image.uploaded = false;
      };
    };
    // --------------------------------------------------
    // repair equipment
    if (!characterObject.equipment.potion_viles_oils && characterObject.equipment.potion_viles_oils != "") {
      _report._legacy.push("update: equipment");
      characterObject.equipment.potion_viles_oils = "";
    };
    if (!characterObject.equipment.scrolls && characterObject.equipment.scrolls != "") {
      characterObject.equipment.scrolls = "";
    };
    // --------------------------------------------------
    // repair skills
    for (var key in characterObject.skills) {
      if (typeof characterObject.skills[key].ranks == "string" && characterObject.skills[key].ranks != "") {
        _report._legacy.push("update: skills ranks");
        characterObject.skills[key].ranks = parseInt(characterObject.skills[key].ranks, 10);
      };
      if (typeof characterObject.skills[key].misc == "string" && characterObject.skills[key].misc != "") {
        _report._legacy.push("update: skills misc");
        characterObject.skills[key].ranks = parseInt(characterObject.skills[key].misc, 10);
      };
    };
    if (!("all" in characterObject.skills)) {
      _report._legacy.push("update: skills");
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
          _report._legacy.push("update: custom skills");
          characterObject.skills.custom[i].racial = "";
        };
        if (!("trait" in characterObject.skills.custom[i])) {
          _report._legacy.push("update: custom skills");
          characterObject.skills.custom[i].trait = "";
        };
        if (!("feat" in characterObject.skills.custom[i])) {
          _report._legacy.push("update: custom skills");
          characterObject.skills.custom[i].feat = "";
        };
      };
    };
    // --------------------------------------------------
    // repair concentration stats
    if (!("trait" in characterObject.spells.concentration)) {
      _report._legacy.push("update: spell stats");
      characterObject.spells.concentration.trait = "";
    };
    // repair caster level stats
    if (!("trait" in characterObject.spells.caster_level_check)) {
      _report._legacy.push("update: level stats");
      characterObject.spells.caster_level_check.trait = "";
    };
    // --------------------------------------------------
    // repair item
    if (Array.isArray(characterObject.equipment.item)) {
      _report._legacy.push("update: item");
      var tempItems = characterObject.equipment.item.slice();
      characterObject.equipment.item = {};
      characterObject.equipment.item.all = tempItems;
    };
    if (!("weight" in characterObject.equipment.item)) {
      _report._legacy.push("update: item weight");
      characterObject.equipment.item.weight = {};
      characterObject.equipment.item.weight.current = "";
    };
    if (!("value" in characterObject.equipment.item)) {
      _report._legacy.push("update: item value");
      characterObject.equipment.item.value = {};
      characterObject.equipment.item.value.current = "";
    };
    // --------------------------------------------------
    // repair spell bonus
    if (!("bonus" in characterObject.spells)) {
      _report._legacy.push("update: spells bonus");
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
        _report._legacy.push("update: skill " + i + " racial");
        characterObject.skills.all[i].racial = "";
      };
      if (!("feat" in characterObject.skills.all[i])) {
        _report._legacy.push("update: skill " + i + " feat");
        characterObject.skills.all[i].feat = "";
      };
      if (!("trait" in characterObject.skills.all[i])) {
        _report._legacy.push("update: skill " + i + " trait");
        characterObject.skills.all[i].trait = "";
      };
      if (typeof characterObject.skills.all[i].misc == "string") {
        characterObject.skills.all[i].misc = parseInt(characterObject.skills.all[i].misc, 10);
      };
      if (typeof characterObject.skills.all[i].ranks == "string") {
        characterObject.skills.all[i].ranks = parseInt(characterObject.skills.all[i].ranks, 10);
      };
    };
    // --------------------------------------------------
    // repair spells
    if (typeof characterObject.spells.dc.level_0 != "object") {
      _report._legacy.push("update: spell dc");
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
      _report._legacy.push("update: concentration racial");
      characterObject.spells.concentration.racial = "";
    };
    if (!("racial" in characterObject.spells.caster_level_check)) {
      _report._legacy.push("update: caster level check racial");
      characterObject.spells.caster_level_check.racial = "";
    };
    // --------------------------------------------------
    // repair initiative trait
    if (!("trait" in characterObject.basics.initiative)) {
      _report._legacy.push("update: initiative trait");
      characterObject.basics.initiative.trait = "";
    };
    // --------------------------------------------------
    if (!("school" in characterObject.spells)) {
      _report._legacy.push("update: spell school");
      characterObject.spells.school = "";
    };
    // --------------------------------------------------
    if (!("opposition" in characterObject.spells)) {
      _report._legacy.push("update: spell opposition");
      characterObject.spells.opposition = "";
    };
    // --------------------------------------------------
    if (!("domains" in characterObject.spells)) {
      _report._legacy.push("update: spell domains");
      characterObject.spells.domains = "";
    };
    // --------------------------------------------------
    if (!("bloodline" in characterObject.spells)) {
      _report._legacy.push("update: spell bloodline");
      characterObject.spells.bloodline = "";
    };
    // --------------------------------------------------
    if (!("power" in characterObject.statistics)) {
      _report._legacy.push("update: power");
      characterObject.statistics.power = [];
    };
    // --------------------------------------------------
    if (!("dr" in characterObject.defense)) {
      _report._legacy.push("update: dr");
      characterObject.defense.dr = {
        feat: "",
        trait: "",
        misc: "",
        temp: "",
        current: "",
        overcome: "",
        notes: "",
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
    // --------------------------------------------------
    if (typeof characterObject.awesomeSheet == "boolean") {
      _report._legacy.push("update: awesome check");
      characterObject.awesomeSheet = {};
      characterObject.awesomeSheet.awesome = true;
      characterObject.awesomeSheet.version = 4;
    };
    // --------------------------------------------------
    return characterObject;
  };

  function _update_500(characterObject) {
    _report._500 = [];
    var _checkForValue = function(object, path, alt) {
      var path = path.split(".");
      while (path.length > 1) {
        var currentKey = path.shift();
        if (!(currentKey in object)) {
          return alt;
        };
        object = object[currentKey];
      };
      var finalKey = path.shift();
      if (object[finalKey] == undefined) {
        return alt;
      } else {
        return object[finalKey];
      };
    };
    var tempCharacterObject = JSON.parse(JSON.stringify(characterObject));
    // awesome
    _report._500.push("update: awesome version");
    characterObject.awesomeSheet = {};
    characterObject.awesomeSheet.awesome = true;
    characterObject.awesomeSheet.version = 5;
    // basics
    _report._500.push("update: basics");
    characterObject.basics = {
      character: {
        name: _checkForValue(tempCharacterObject, "basics.name", ""),
        race: _checkForValue(tempCharacterObject, "basics.race", ""),
        alignment: _checkForValue(tempCharacterObject, "basics.alignment", ""),
        deity: _checkForValue(tempCharacterObject, "basics.deity", ""),
        height: _checkForValue(tempCharacterObject, "basics.height", ""),
        weight: _checkForValue(tempCharacterObject, "basics.weight", ""),
        age: _checkForValue(tempCharacterObject, "basics.age", ""),
        gender: _checkForValue(tempCharacterObject, "basics.gender", ""),
        hero_points: _checkForValue(tempCharacterObject, "basics.hero_points", ""),
        description: _checkForValue(tempCharacterObject, "basics.character_description", ""),
        size: {
          category: _checkForValue(tempCharacterObject, "basics.size.category", ""),
          modifier: {
            base: _checkForValue(tempCharacterObject, "basics.size.size_modifier", ""),
            special: _checkForValue(tempCharacterObject, "basics.size.special_size_modifier", ""),
            fly: _checkForValue(tempCharacterObject, "basics.size.size_modifier_fly", ""),
            stealth: _checkForValue(tempCharacterObject, "basics.size.size_modifier_stealth", "")
          }
        }
      },
      classes: {
        all: _checkForValue(tempCharacterObject, "basics.classes", []),
      },
      experience: {
        level: "",
        next_level: "",
        needed: "",
        total: _checkForValue(tempCharacterObject, "basics.xp.total", ""),
        advancement: _checkForValue(tempCharacterObject, "basics.xp.advancement_speed", "")
      },
      initiative: {
        misc: _checkForValue(tempCharacterObject, "basics.initiative.misc", ""),
        temp: _checkForValue(tempCharacterObject, "basics.initiative.temp", ""),
        feat: _checkForValue(tempCharacterObject, "basics.initiative.feat", ""),
        trait: _checkForValue(tempCharacterObject, "basics.initiative.trait", ""),
        current: "",
        bonuses: {
          str: _checkForValue(tempCharacterObject, "basics.initiative.bonuses.str_bonus", false),
          dex: _checkForValue(tempCharacterObject, "basics.initiative.bonuses.dex_bonus", true),
          con: _checkForValue(tempCharacterObject, "basics.initiative.bonuses.con_bonus", false),
          int: _checkForValue(tempCharacterObject, "basics.initiative.bonuses.int_bonus", false),
          wis: _checkForValue(tempCharacterObject, "basics.initiative.bonuses.wis_bonus", false),
          cha: _checkForValue(tempCharacterObject, "basics.initiative.bonuses.cha_bonus", false),
          level: _checkForValue(tempCharacterObject, "basics.initiative.bonuses.level", false),
          half_level: _checkForValue(tempCharacterObject, "basics.initiative.bonuses.half_level", false)
        }
      },
      speed: {
        land: _checkForValue(tempCharacterObject, "basics.speed.land", ""),
        fly: _checkForValue(tempCharacterObject, "basics.speed.fly", ""),
        maneuverability: _checkForValue(tempCharacterObject, "basics.speed.maneuverability", ""),
        swim: _checkForValue(tempCharacterObject, "basics.speed.swim", ""),
        climb: _checkForValue(tempCharacterObject, "basics.speed.climb", ""),
        burrow: _checkForValue(tempCharacterObject, "basics.speed.burrow", "")
      },
      image: {
        uploaded: _checkForValue(tempCharacterObject, "basics.character_image.uploaded", false),
        background: _checkForValue(tempCharacterObject, "basics.character_image.background", ""),
        color: {
          r: _checkForValue(tempCharacterObject, "basics.character_image.color.r", ""),
          g: _checkForValue(tempCharacterObject, "basics.character_image.color.g", ""),
          b: _checkForValue(tempCharacterObject, "basics.character_image.color.b", "")
        },
        data: _checkForValue(tempCharacterObject, "basics.character_image.image", ""),
        orientation: _checkForValue(tempCharacterObject, "basics.character_image.orientation", ""),
        position: {
          x: _checkForValue(tempCharacterObject, "basics.character_image.position.x", ""),
          y: _checkForValue(tempCharacterObject, "basics.character_image.position.y", "")
        },
        size: {
          width: _checkForValue(tempCharacterObject, "basics.character_image.size.width", ""),
          height: _checkForValue(tempCharacterObject, "basics.character_image.size.height", "")
        },
        scale: _checkForValue(tempCharacterObject, "basics.character_image.scale", "")
      }
    };
    // statistics
    _report._500.push("update: statistics");
    characterObject.statistics = {
      stats: {
        str: {
          modifier: _checkForValue(tempCharacterObject, "statistics.stats.str.modifier", ""),
          base: _checkForValue(tempCharacterObject, "statistics.stats.str.base", ""),
          enhancement: _checkForValue(tempCharacterObject, "statistics.stats.str.enhancement", ""),
          misc: _checkForValue(tempCharacterObject, "statistics.stats.str.misc", ""),
          racial: _checkForValue(tempCharacterObject, "statistics.stats.str.racial", ""),
          temp: _checkForValue(tempCharacterObject, "statistics.stats.str.temp", ""),
          current: ""
        },
        dex: {
          modifier: _checkForValue(tempCharacterObject, "statistics.stats.dex.modifier", ""),
          base: _checkForValue(tempCharacterObject, "statistics.stats.dex.base", ""),
          enhancement: _checkForValue(tempCharacterObject, "statistics.stats.dex.enhancement", ""),
          misc: _checkForValue(tempCharacterObject, "statistics.stats.dex.misc", ""),
          racial: _checkForValue(tempCharacterObject, "statistics.stats.dex.racial", ""),
          temp: _checkForValue(tempCharacterObject, "statistics.stats.dex.temp", ""),
          current: ""
        },
        con: {
          modifier: _checkForValue(tempCharacterObject, "statistics.stats.con.modifier", ""),
          base: _checkForValue(tempCharacterObject, "statistics.stats.con.base", ""),
          enhancement: _checkForValue(tempCharacterObject, "statistics.stats.con.enhancement", ""),
          misc: _checkForValue(tempCharacterObject, "statistics.stats.con.misc", ""),
          racial: _checkForValue(tempCharacterObject, "statistics.stats.con.racial", ""),
          temp: _checkForValue(tempCharacterObject, "statistics.stats.con.temp", ""),
          current: ""
        },
        int: {
          modifier: _checkForValue(tempCharacterObject, "statistics.stats.int.modifier", ""),
          base: _checkForValue(tempCharacterObject, "statistics.stats.int.base", ""),
          enhancement: _checkForValue(tempCharacterObject, "statistics.stats.int.enhancement", ""),
          misc: _checkForValue(tempCharacterObject, "statistics.stats.int.misc", ""),
          racial: _checkForValue(tempCharacterObject, "statistics.stats.int.racial", ""),
          temp: _checkForValue(tempCharacterObject, "statistics.stats.int.temp", ""),
          current: ""
        },
        wis: {
          modifier: _checkForValue(tempCharacterObject, "statistics.stats.wis.modifier", ""),
          base: _checkForValue(tempCharacterObject, "statistics.stats.wis.base", ""),
          enhancement: _checkForValue(tempCharacterObject, "statistics.stats.wis.enhancement", ""),
          misc: _checkForValue(tempCharacterObject, "statistics.stats.wis.misc", ""),
          racial: _checkForValue(tempCharacterObject, "statistics.stats.wis.racial", ""),
          temp: _checkForValue(tempCharacterObject, "statistics.stats.wis.temp", ""),
          current: ""
        },
        cha: {
          modifier: _checkForValue(tempCharacterObject, "statistics.stats.cha.modifier", ""),
          base: _checkForValue(tempCharacterObject, "statistics.stats.cha.base", ""),
          enhancement: _checkForValue(tempCharacterObject, "statistics.stats.cha.enhancement", ""),
          misc: _checkForValue(tempCharacterObject, "statistics.stats.cha.misc", ""),
          racial: _checkForValue(tempCharacterObject, "statistics.stats.cha.racial", ""),
          temp: _checkForValue(tempCharacterObject, "statistics.stats.cha.temp", ""),
          current: ""
        }
      },
      abilities: {
        feats: _checkForValue(tempCharacterObject, "statistics.feats", ""),
        traits: _checkForValue(tempCharacterObject, "statistics.traits", ""),
        languages: _checkForValue(tempCharacterObject, "statistics.languages", ""),
        special: _checkForValue(tempCharacterObject, "statistics.special_abilities", "")
      },
      power: {
        all: _checkForValue(tempCharacterObject, "statistics.power", [])
      }
    };
    // equipment
    _report._500.push("update: equipment");
    characterObject.equipment = {
      possessions: {
        gear: _checkForValue(tempCharacterObject, "equipment.gear", ""),
        magic_gear: _checkForValue(tempCharacterObject, "equipment.magic_gear", ""),
        potion_viles_oils: _checkForValue(tempCharacterObject, "equipment.potion_viles_oils", ""),
        scrolls: _checkForValue(tempCharacterObject, "equipment.scrolls", "")
      },
      armor: {
        armor: _checkForValue(tempCharacterObject, "equipment.armor.armor", ""),
        check_penalty: _checkForValue(tempCharacterObject, "equipment.armor.check_penalty", ""),
        max_dex: _checkForValue(tempCharacterObject, "equipment.armor.max_dex", ""),
        shield: _checkForValue(tempCharacterObject, "equipment.armor.shield", "")
      },
      body_slots: {
        belts: _checkForValue(tempCharacterObject, "equipment.body_slots.belts", ""),
        body: _checkForValue(tempCharacterObject, "equipment.body_slots.body", ""),
        chest: _checkForValue(tempCharacterObject, "equipment.body_slots.chest", ""),
        eyes: _checkForValue(tempCharacterObject, "equipment.body_slots.eyes", ""),
        feet: _checkForValue(tempCharacterObject, "equipment.body_slots.feet", ""),
        hands: _checkForValue(tempCharacterObject, "equipment.body_slots.hands", ""),
        head: _checkForValue(tempCharacterObject, "equipment.body_slots.head", ""),
        headband: _checkForValue(tempCharacterObject, "equipment.body_slots.headband", ""),
        neck: _checkForValue(tempCharacterObject, "equipment.body_slots.neck", ""),
        ring_left_hand: _checkForValue(tempCharacterObject, "equipment.body_slots.ring_left_hand", ""),
        ring_right_hand: _checkForValue(tempCharacterObject, "equipment.body_slots.ring_right_hand", ""),
        shoulders: _checkForValue(tempCharacterObject, "equipment.body_slots.shoulders", ""),
        wrist: _checkForValue(tempCharacterObject, "equipment.body_slots.wrist", "")
      },
      item: {
        all: _checkForValue(tempCharacterObject, "equipment.item.all", []),
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
          light: "",
          medium: "",
          heavy: "",
          lift: "",
          drag: ""
        }
      },
      consumable: {
        all: _checkForValue(tempCharacterObject, "equipment.consumable", [])
      },
      wealth: {
        platinum: _checkForValue(tempCharacterObject, "equipment.wealth.platinum", ""),
        gold: _checkForValue(tempCharacterObject, "equipment.wealth.gold", ""),
        silver: _checkForValue(tempCharacterObject, "equipment.wealth.silver", ""),
        copper: _checkForValue(tempCharacterObject, "equipment.wealth.copper", ""),
        total: ""
      }
    };
    // defense
    _report._500.push("update: defense");
    characterObject.defense = {
      hp: {
        total: _checkForValue(tempCharacterObject, "defense.hp.total", ""),
        temp: _checkForValue(tempCharacterObject, "defense.hp.temp", ""),
        damage: _checkForValue(tempCharacterObject, "defense.hp.damage", ""),
        non_lethal_damage: _checkForValue(tempCharacterObject, "defense.hp.non_lethal_damage", ""),
        current: "",
        notes: ""
      },
      ac: {
        armor_class: {
          misc: _checkForValue(tempCharacterObject, "defense.ac.misc", ""),
          temp: _checkForValue(tempCharacterObject, "defense.ac.temp", ""),
          current: "",
          bonuses: {
            str: _checkForValue(tempCharacterObject, "defense.ac.bonuses.str_bonus", false),
            dex: _checkForValue(tempCharacterObject, "defense.ac.bonuses.dex_bonus", true),
            con: _checkForValue(tempCharacterObject, "defense.ac.bonuses.con_bonus", false),
            int: _checkForValue(tempCharacterObject, "defense.ac.bonuses.int_bonus", false),
            wis: _checkForValue(tempCharacterObject, "defense.ac.bonuses.wis_bonus", false),
            cha: _checkForValue(tempCharacterObject, "defense.ac.bonuses.cha_bonus", false),
            plus_ten: _checkForValue(tempCharacterObject, "defense.ac.bonuses.plus_ten", true),
            armor: _checkForValue(tempCharacterObject, "defense.ac.bonuses.ac_armor", true),
            shield: _checkForValue(tempCharacterObject, "defense.ac.bonuses.ac_shield", true),
            deflect: _checkForValue(tempCharacterObject, "defense.ac.bonuses.ac_deflect", true),
            dodge: _checkForValue(tempCharacterObject, "defense.ac.bonuses.ac_dodge", true),
            natural: _checkForValue(tempCharacterObject, "defense.ac.bonuses.ac_natural", true),
            size_base: _checkForValue(tempCharacterObject, "defense.ac.bonuses.size", true),
            max_dex: _checkForValue(tempCharacterObject, "defense.ac.bonuses.max_dex", true)
          }
        },
        flat_footed: {
          misc: _checkForValue(tempCharacterObject, "defense.flat_footed.misc", ""),
          temp: _checkForValue(tempCharacterObject, "defense.flat_footed.temp", ""),
          current: "",
          bonuses: {
            str: _checkForValue(tempCharacterObject, "defense.flat_footed.bonuses.str_bonus", false),
            dex: _checkForValue(tempCharacterObject, "defense.flat_footed.bonuses.dex_bonus", false),
            con: _checkForValue(tempCharacterObject, "defense.flat_footed.bonuses.con_bonus", false),
            int: _checkForValue(tempCharacterObject, "defense.flat_footed.bonuses.int_bonus", false),
            wis: _checkForValue(tempCharacterObject, "defense.flat_footed.bonuses.wis_bonus", false),
            cha: _checkForValue(tempCharacterObject, "defense.flat_footed.bonuses.cha_bonus", false),
            plus_ten: _checkForValue(tempCharacterObject, "defense.flat_footed.bonuses.plus_ten", true),
            armor: _checkForValue(tempCharacterObject, "defense.flat_footed.bonuses.ac_armor", true),
            shield: _checkForValue(tempCharacterObject, "defense.flat_footed.bonuses.ac_shield", true),
            deflect: _checkForValue(tempCharacterObject, "defense.flat_footed.bonuses.ac_deflect", true),
            natural: _checkForValue(tempCharacterObject, "defense.flat_footed.bonuses.ac_natural", true),
            size_base: _checkForValue(tempCharacterObject, "defense.flat_footed.bonuses.size", true)
          }
        },
        touch: {
          misc: _checkForValue(tempCharacterObject, "defense.touch.misc", ""),
          temp: _checkForValue(tempCharacterObject, "defense.touch.temp", ""),
          current: "",
          bonuses: {
            str: _checkForValue(tempCharacterObject, "defense.touch.bonuses.str_bonus", false),
            dex: _checkForValue(tempCharacterObject, "defense.touch.bonuses.dex_bonus", true),
            con: _checkForValue(tempCharacterObject, "defense.touch.bonuses.con_bonus", false),
            int: _checkForValue(tempCharacterObject, "defense.touch.bonuses.int_bonus", false),
            wis: _checkForValue(tempCharacterObject, "defense.touch.bonuses.wis_bonus", false),
            cha: _checkForValue(tempCharacterObject, "defense.touch.bonuses.cha_bonus", false),
            plus_ten: _checkForValue(tempCharacterObject, "defense.touch.bonuses.plus_ten", true),
            deflect: _checkForValue(tempCharacterObject, "defense.touch.bonuses.ac_deflect", true),
            dodge: _checkForValue(tempCharacterObject, "defense.touch.bonuses.ac_dodge", true),
            size_base: _checkForValue(tempCharacterObject, "defense.touch.bonuses.size", true),
            max_dex: _checkForValue(tempCharacterObject, "defense.touch.bonuses.max_dex", true)
          }
        },
        stats: {
          armor: _checkForValue(tempCharacterObject, "defense.ac.armor", ""),
          shield: _checkForValue(tempCharacterObject, "defense.ac.shield", ""),
          deflect: _checkForValue(tempCharacterObject, "defense.ac.deflect", ""),
          dodge: _checkForValue(tempCharacterObject, "defense.ac.dodge", ""),
          natural: _checkForValue(tempCharacterObject, "defense.ac.natural", "")
        },
        notes: _checkForValue(tempCharacterObject, "defense.ac_notes", "")
      },
      cmd: {
        misc: _checkForValue(tempCharacterObject, "offense.cmd.misc", ""),
        temp: _checkForValue(tempCharacterObject, "offense.cmd.temp", ""),
        current: "",
        notes: "",
        bonuses: {
          str: _checkForValue(tempCharacterObject, "offense.cmd.bonuses.str_bonus", true),
          dex: _checkForValue(tempCharacterObject, "offense.cmd.bonuses.dex_bonus", true),
          con: _checkForValue(tempCharacterObject, "offense.cmd.bonuses.con_bonus", false),
          int: _checkForValue(tempCharacterObject, "offense.cmd.bonuses.int_bonus", false),
          wis: _checkForValue(tempCharacterObject, "offense.cmd.bonuses.wis_bonus", false),
          cha: _checkForValue(tempCharacterObject, "offense.cmd.bonuses.cha_bonus", false),
          bab: _checkForValue(tempCharacterObject, "offense.cmd.bonuses.bab", true),
          size_special: _checkForValue(tempCharacterObject, "offense.cmd.bonuses.special_size", true),
          level: _checkForValue(tempCharacterObject, "offense.cmd.bonuses.level", false),
          half_level: _checkForValue(tempCharacterObject, "offense.cmd.bonuses.half_level", false),
          plus_ten: _checkForValue(tempCharacterObject, "offense.cmd.bonuses.plus_ten", true)
        }
      },
      saves: {
        fortitude: {
          base: _checkForValue(tempCharacterObject, "defense.fortitude.base", ""),
          resistance: _checkForValue(tempCharacterObject, "defense.fortitude.resistance", ""),
          feat: _checkForValue(tempCharacterObject, "defense.fortitude.feat", ""),
          trait: _checkForValue(tempCharacterObject, "defense.fortitude.trait", ""),
          misc: _checkForValue(tempCharacterObject, "defense.fortitude.misc", ""),
          temp: _checkForValue(tempCharacterObject, "defense.fortitude.temp", ""),
          current: "",
          bonuses: {
            str: _checkForValue(tempCharacterObject, "defense.fortitude.bonuses.str_bonus", false),
            dex: _checkForValue(tempCharacterObject, "defense.fortitude.bonuses.dex_bonus", false),
            con: _checkForValue(tempCharacterObject, "defense.fortitude.bonuses.con_bonus", true),
            int: _checkForValue(tempCharacterObject, "defense.fortitude.bonuses.int_bonus", false),
            wis: _checkForValue(tempCharacterObject, "defense.fortitude.bonuses.wis_bonus", false),
            cha: _checkForValue(tempCharacterObject, "defense.fortitude.bonuses.cha_bonus", false),
            level: _checkForValue(tempCharacterObject, "defense.fortitude.bonuses.level", false),
            half_level: _checkForValue(tempCharacterObject, "defense.fortitude.bonuses.half_level", false)
          }
        },
        reflex: {
          base: _checkForValue(tempCharacterObject, "defense.reflex.base", ""),
          resistance: _checkForValue(tempCharacterObject, "defense.reflex.resistance", ""),
          feat: _checkForValue(tempCharacterObject, "defense.reflex.feat", ""),
          trait: _checkForValue(tempCharacterObject, "defense.reflex.trait", ""),
          misc: _checkForValue(tempCharacterObject, "defense.reflex.misc", ""),
          temp: _checkForValue(tempCharacterObject, "defense.reflex.temp", ""),
          current: "",
          bonuses: {
            str: _checkForValue(tempCharacterObject, "defense.reflex.bonuses.str_bonus", false),
            dex: _checkForValue(tempCharacterObject, "defense.reflex.bonuses.dex_bonus", true),
            con: _checkForValue(tempCharacterObject, "defense.reflex.bonuses.con_bonus", false),
            int: _checkForValue(tempCharacterObject, "defense.reflex.bonuses.int_bonus", false),
            wis: _checkForValue(tempCharacterObject, "defense.reflex.bonuses.wis_bonus", false),
            cha: _checkForValue(tempCharacterObject, "defense.reflex.bonuses.cha_bonus", false),
            level: _checkForValue(tempCharacterObject, "defense.reflex.bonuses.level", false),
            half_level: _checkForValue(tempCharacterObject, "defense.reflex.bonuses.half_level", false)
          }
        },
        will: {
          base: _checkForValue(tempCharacterObject, "defense.will.base", ""),
          resistance: _checkForValue(tempCharacterObject, "defense.will.resistance", ""),
          feat: _checkForValue(tempCharacterObject, "defense.will.feat", ""),
          trait: _checkForValue(tempCharacterObject, "defense.will.trait", ""),
          misc: _checkForValue(tempCharacterObject, "defense.will.misc", ""),
          temp: _checkForValue(tempCharacterObject, "defense.will.temp", ""),
          current: "",
          bonuses: {
            str: _checkForValue(tempCharacterObject, "defense.will.bonuses.str_bonus", false),
            dex: _checkForValue(tempCharacterObject, "defense.will.bonuses.dex_bonus", false),
            con: _checkForValue(tempCharacterObject, "defense.will.bonuses.con_bonus", false),
            int: _checkForValue(tempCharacterObject, "defense.will.bonuses.int_bonus", false),
            wis: _checkForValue(tempCharacterObject, "defense.will.bonuses.wis_bonus", true),
            cha: _checkForValue(tempCharacterObject, "defense.will.bonuses.cha_bonus", false),
            level: _checkForValue(tempCharacterObject, "defense.will.bonuses.level", false),
            half_level: _checkForValue(tempCharacterObject, "defense.will.bonuses.half_level", false)
          }
        },
        notes: _checkForValue(tempCharacterObject, "defense.save_notes", "")
      },
      dr: {
        feat: _checkForValue(tempCharacterObject, "defense.dr.feat", ""),
        trait: _checkForValue(tempCharacterObject, "defense.dr.trait", ""),
        misc: _checkForValue(tempCharacterObject, "defense.dr.misc", ""),
        temp: _checkForValue(tempCharacterObject, "defense.dr.temp", ""),
        overcome: _checkForValue(tempCharacterObject, "defense.dr.overcome", ""),
        current: "",
        notes: "",
        bonuses: {
          str: _checkForValue(tempCharacterObject, "defense.dr.bonuses.str_bonus", false),
          dex: _checkForValue(tempCharacterObject, "defense.dr.bonuses.dex_bonus", false),
          con: _checkForValue(tempCharacterObject, "defense.dr.bonuses.con_bonus", false),
          int: _checkForValue(tempCharacterObject, "defense.dr.bonuses.int_bonus", false),
          wis: _checkForValue(tempCharacterObject, "defense.dr.bonuses.wis_bonus", false),
          cha: _checkForValue(tempCharacterObject, "defense.dr.bonuses.cha_bonus", false),
          level: _checkForValue(tempCharacterObject, "defense.dr.bonuses.level", false),
          half_level: _checkForValue(tempCharacterObject, "defense.dr.bonuses.half_level", false)
        }
      },
      sr: {
        feat: _checkForValue(tempCharacterObject, "defense.sr.feat", ""),
        trait: _checkForValue(tempCharacterObject, "defense.sr.trait", ""),
        misc: _checkForValue(tempCharacterObject, "defense.sr.misc", ""),
        temp: _checkForValue(tempCharacterObject, "defense.sr.temp", ""),
        current: "",
        notes: "",
        bonuses: {
          str: _checkForValue(tempCharacterObject, "defense.sr.bonuses.str_bonus", false),
          dex: _checkForValue(tempCharacterObject, "defense.sr.bonuses.dex_bonus", false),
          con: _checkForValue(tempCharacterObject, "defense.sr.bonuses.con_bonus", false),
          int: _checkForValue(tempCharacterObject, "defense.sr.bonuses.int_bonus", false),
          wis: _checkForValue(tempCharacterObject, "defense.sr.bonuses.wis_bonus", false),
          cha: _checkForValue(tempCharacterObject, "defense.sr.bonuses.cha_bonus", false),
          level: _checkForValue(tempCharacterObject, "defense.sr.bonuses.level", false),
          half_level: _checkForValue(tempCharacterObject, "defense.sr.bonuses.half_level", false)
        }
      },
      resistance: {
        feat: "",
        trait: "",
        misc: "",
        temp: "",
        current: "",
        notes: _checkForValue(tempCharacterObject, "defense.resist_notes", ""),
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
    _report._500.push("update: offense");
    characterObject.offense = {
      stats: {
        base_attack: _checkForValue(tempCharacterObject, "offense.base_attack", ""),
        base_attack_bonuses: _checkForValue(tempCharacterObject, "offense.base_attack_bonuses", ""),
        melee: {
          misc: _checkForValue(tempCharacterObject, "offense.melee_attack.misc", ""),
          temp: _checkForValue(tempCharacterObject, "offense.melee_attack.temp", ""),
          current: "",
          bonuses: {
            str: _checkForValue(tempCharacterObject, "offense.melee_attack.bonuses.str_bonus", true),
            dex: _checkForValue(tempCharacterObject, "offense.melee_attack.bonuses.dex_bonus", false),
            con: _checkForValue(tempCharacterObject, "offense.melee_attack.bonuses.con_bonus", false),
            int: _checkForValue(tempCharacterObject, "offense.melee_attack.bonuses.int_bonus", false),
            wis: _checkForValue(tempCharacterObject, "offense.melee_attack.bonuses.wis_bonus", false),
            cha: _checkForValue(tempCharacterObject, "offense.melee_attack.bonuses.cha_bonus", false),
            bab: _checkForValue(tempCharacterObject, "offense.melee_attack.bonuses.bab", true),
            size_base: _checkForValue(tempCharacterObject, "offense.melee_attack.bonuses.special_size", true),
            level: _checkForValue(tempCharacterObject, "offense.melee_attack.bonuses.level", false),
            half_level: _checkForValue(tempCharacterObject, "offense.melee_attack.bonuses.half_level", false)
          }
        },
        ranged: {
          misc: _checkForValue(tempCharacterObject, "offense.ranged_attack.misc", ""),
          temp: _checkForValue(tempCharacterObject, "offense.ranged_attack.temp", ""),
          current: "",
          bonuses: {
            str: _checkForValue(tempCharacterObject, "offense.ranged_attack.bonuses.str_bonus", false),
            dex: _checkForValue(tempCharacterObject, "offense.ranged_attack.bonuses.dex_bonus", true),
            con: _checkForValue(tempCharacterObject, "offense.ranged_attack.bonuses.con_bonus", false),
            int: _checkForValue(tempCharacterObject, "offense.ranged_attack.bonuses.int_bonus", false),
            wis: _checkForValue(tempCharacterObject, "offense.ranged_attack.bonuses.wis_bonus", false),
            cha: _checkForValue(tempCharacterObject, "offense.ranged_attack.bonuses.cha_bonus", false),
            bab: _checkForValue(tempCharacterObject, "offense.ranged_attack.bonuses.bab", true),
            size_base: _checkForValue(tempCharacterObject, "offense.ranged_attack.bonuses.special_size", true),
            level: _checkForValue(tempCharacterObject, "offense.ranged_attack.bonuses.level", false),
            half_level: _checkForValue(tempCharacterObject, "offense.ranged_attack.bonuses.half_level", false)
          }
        }
      },
      cmb: {
        misc: _checkForValue(tempCharacterObject, "offense.cmb.misc", ""),
        temp: _checkForValue(tempCharacterObject, "offense.cmb.temp", ""),
        current: "",
        notes: "",
        bonuses: {
          str: _checkForValue(tempCharacterObject, "offense.cmb.bonuses.str_bonus", true),
          dex: _checkForValue(tempCharacterObject, "offense.cmb.bonuses.dex_bonus", false),
          con: _checkForValue(tempCharacterObject, "offense.cmb.bonuses.con_bonus", false),
          int: _checkForValue(tempCharacterObject, "offense.cmb.bonuses.int_bonus", false),
          wis: _checkForValue(tempCharacterObject, "offense.cmb.bonuses.wis_bonus", false),
          cha: _checkForValue(tempCharacterObject, "offense.cmb.bonuses.cha_bonus", false),
          bab: _checkForValue(tempCharacterObject, "offense.cmb.bonuses.bab", true),
          size_special: _checkForValue(tempCharacterObject, "offense.cmb.bonuses.special_size", true),
          level: _checkForValue(tempCharacterObject, "offense.cmb.bonuses.level", false),
          half_level: _checkForValue(tempCharacterObject, "offense.cmb.bonuses.half_level", false)
        }
      },
      attack: {
        notes: _checkForValue(tempCharacterObject, "offense.attack_notes", ""),
        melee: {
          all: _checkForValue(tempCharacterObject, "offense.attack.melee", [])
        },
        ranged: {
          all: _checkForValue(tempCharacterObject, "offense.attack.ranged", [])
        }
      }
    };
    // skills
    _report._500.push("update: skills");
    characterObject.skills = {
      ranks: {
        total: "",
        include_custom: _checkForValue(tempCharacterObject, "skills.ranks.spent.include_custom", false),
        current: ""
      },
      custom: {
        all: _checkForValue(tempCharacterObject, "skills.custom", [])
      },
      default: {
        acrobatics: {
          ranks: _checkForValue(tempCharacterObject, "skills.all.acrobatics.ranks", ""),
          misc: _checkForValue(tempCharacterObject, "skills.all.acrobatics.misc", ""),
          racial: _checkForValue(tempCharacterObject, "skills.all.acrobatics.racial", ""),
          feat: _checkForValue(tempCharacterObject, "skills.all.acrobatics.feat", ""),
          trait: _checkForValue(tempCharacterObject, "skills.all.acrobatics.trait", ""),
          current: "",
          bonuses: {
            str: _checkForValue(tempCharacterObject, "skills.all.acrobatics.bonuses.str_bonus", false),
            dex: _checkForValue(tempCharacterObject, "skills.all.acrobatics.bonuses.dex_bonus", true),
            con: _checkForValue(tempCharacterObject, "skills.all.acrobatics.bonuses.con_bonus", false),
            int: _checkForValue(tempCharacterObject, "skills.all.acrobatics.bonuses.int_bonus", false),
            wis: _checkForValue(tempCharacterObject, "skills.all.acrobatics.bonuses.wis_bonus", false),
            cha: _checkForValue(tempCharacterObject, "skills.all.acrobatics.bonuses.cha_bonus", false),
            class_skill: _checkForValue(tempCharacterObject, "skills.all.acrobatics.bonuses.class_skill", false),
            level: _checkForValue(tempCharacterObject, "skills.all.acrobatics.bonuses.level", false),
            half_level: _checkForValue(tempCharacterObject, "skills.all.acrobatics.bonuses.half_level", false),
            check_penalty: _checkForValue(tempCharacterObject, "skills.all.acrobatics.bonuses.check_penalty", true)
          }
        },
        appraise: {
          ranks: _checkForValue(tempCharacterObject, "skills.all.appraise.ranks", ""),
          misc: _checkForValue(tempCharacterObject, "skills.all.appraise.misc", ""),
          racial: _checkForValue(tempCharacterObject, "skills.all.appraise.racial", ""),
          feat: _checkForValue(tempCharacterObject, "skills.all.appraise.feat", ""),
          trait: _checkForValue(tempCharacterObject, "skills.all.appraise.trait", ""),
          current: "",
          bonuses: {
            str: _checkForValue(tempCharacterObject, "skills.all.appraise.bonuses.str_bonus", false),
            dex: _checkForValue(tempCharacterObject, "skills.all.appraise.bonuses.dex_bonus", false),
            con: _checkForValue(tempCharacterObject, "skills.all.appraise.bonuses.con_bonus", false),
            int: _checkForValue(tempCharacterObject, "skills.all.appraise.bonuses.int_bonus", true),
            wis: _checkForValue(tempCharacterObject, "skills.all.appraise.bonuses.wis_bonus", false),
            cha: _checkForValue(tempCharacterObject, "skills.all.appraise.bonuses.cha_bonus", false),
            class_skill: _checkForValue(tempCharacterObject, "skills.all.appraise.bonuses.class_skill", false),
            level: _checkForValue(tempCharacterObject, "skills.all.appraise.bonuses.level", false),
            half_level: _checkForValue(tempCharacterObject, "skills.all.appraise.bonuses.half_level", false),
            check_penalty: _checkForValue(tempCharacterObject, "skills.all.appraise.bonuses.check_penalty", false)
          }
        },
        bluff: {
          ranks: _checkForValue(tempCharacterObject, "skills.all.bluff.ranks", ""),
          misc: _checkForValue(tempCharacterObject, "skills.all.bluff.misc", ""),
          racial: _checkForValue(tempCharacterObject, "skills.all.bluff.racial", ""),
          feat: _checkForValue(tempCharacterObject, "skills.all.bluff.feat", ""),
          trait: _checkForValue(tempCharacterObject, "skills.all.bluff.trait", ""),
          current: "",
          bonuses: {
            str: _checkForValue(tempCharacterObject, "skills.all.bluff.bonuses.str_bonus", false),
            dex: _checkForValue(tempCharacterObject, "skills.all.bluff.bonuses.dex_bonus", false),
            con: _checkForValue(tempCharacterObject, "skills.all.bluff.bonuses.con_bonus", false),
            int: _checkForValue(tempCharacterObject, "skills.all.bluff.bonuses.int_bonus", false),
            wis: _checkForValue(tempCharacterObject, "skills.all.bluff.bonuses.wis_bonus", false),
            cha: _checkForValue(tempCharacterObject, "skills.all.bluff.bonuses.cha_bonus", true),
            class_skill: _checkForValue(tempCharacterObject, "skills.all.bluff.bonuses.class_skill", false),
            level: _checkForValue(tempCharacterObject, "skills.all.bluff.bonuses.level", false),
            half_level: _checkForValue(tempCharacterObject, "skills.all.bluff.bonuses.half_level", false),
            check_penalty: _checkForValue(tempCharacterObject, "skills.all.bluff.bonuses.check_penalty", false)
          }
        },
        climb: {
          ranks: _checkForValue(tempCharacterObject, "skills.all.climb.ranks", ""),
          misc: _checkForValue(tempCharacterObject, "skills.all.climb.misc", ""),
          racial: _checkForValue(tempCharacterObject, "skills.all.climb.racial", ""),
          feat: _checkForValue(tempCharacterObject, "skills.all.climb.feat", ""),
          trait: _checkForValue(tempCharacterObject, "skills.all.climb.trait", ""),
          current: "",
          bonuses: {
            str: _checkForValue(tempCharacterObject, "skills.all.climb.bonuses.str_bonus", true),
            dex: _checkForValue(tempCharacterObject, "skills.all.climb.bonuses.dex_bonus", false),
            con: _checkForValue(tempCharacterObject, "skills.all.climb.bonuses.con_bonus", false),
            int: _checkForValue(tempCharacterObject, "skills.all.climb.bonuses.int_bonus", false),
            wis: _checkForValue(tempCharacterObject, "skills.all.climb.bonuses.wis_bonus", false),
            cha: _checkForValue(tempCharacterObject, "skills.all.climb.bonuses.cha_bonus", false),
            class_skill: _checkForValue(tempCharacterObject, "skills.all.climb.bonuses.class_skill", false),
            level: _checkForValue(tempCharacterObject, "skills.all.climb.bonuses.level", false),
            half_level: _checkForValue(tempCharacterObject, "skills.all.climb.bonuses.half_level", false),
            check_penalty: _checkForValue(tempCharacterObject, "skills.all.climb.bonuses.check_penalty", true)
          }
        },
        craft_1: {
          variant_name: _checkForValue(tempCharacterObject, "skills.all.craft_1.variant_name", ""),
          ranks: _checkForValue(tempCharacterObject, "skills.all.craft_1.ranks", ""),
          misc: _checkForValue(tempCharacterObject, "skills.all.craft_1.misc", ""),
          racial: _checkForValue(tempCharacterObject, "skills.all.craft_1.racial", ""),
          feat: _checkForValue(tempCharacterObject, "skills.all.craft_1.feat", ""),
          trait: _checkForValue(tempCharacterObject, "skills.all.craft_1.trait", ""),
          current: "",
          bonuses: {
            str: _checkForValue(tempCharacterObject, "skills.all.craft_1.bonuses.str_bonus", false),
            dex: _checkForValue(tempCharacterObject, "skills.all.craft_1.bonuses.dex_bonus", false),
            con: _checkForValue(tempCharacterObject, "skills.all.craft_1.bonuses.con_bonus", false),
            int: _checkForValue(tempCharacterObject, "skills.all.craft_1.bonuses.int_bonus", true),
            wis: _checkForValue(tempCharacterObject, "skills.all.craft_1.bonuses.wis_bonus", false),
            cha: _checkForValue(tempCharacterObject, "skills.all.craft_1.bonuses.cha_bonus", false),
            class_skill: _checkForValue(tempCharacterObject, "skills.all.craft_1.bonuses.class_skill", false),
            level: _checkForValue(tempCharacterObject, "skills.all.craft_1.bonuses.level", false),
            half_level: _checkForValue(tempCharacterObject, "skills.all.craft_1.bonuses.half_level", false),
            check_penalty: _checkForValue(tempCharacterObject, "skills.all.craft_1.bonuses.check_penalty", false)
          }
        },
        craft_2: {
          variant_name: _checkForValue(tempCharacterObject, "skills.all.craft_2.variant_name", ""),
          ranks: _checkForValue(tempCharacterObject, "skills.all.craft_2.ranks", ""),
          misc: _checkForValue(tempCharacterObject, "skills.all.craft_2.misc", ""),
          racial: _checkForValue(tempCharacterObject, "skills.all.craft_2.racial", ""),
          feat: _checkForValue(tempCharacterObject, "skills.all.craft_2.feat", ""),
          trait: _checkForValue(tempCharacterObject, "skills.all.craft_2.trait", ""),
          current: "",
          bonuses: {
            str: _checkForValue(tempCharacterObject, "skills.all.craft_2.bonuses.str_bonus", false),
            dex: _checkForValue(tempCharacterObject, "skills.all.craft_2.bonuses.dex_bonus", false),
            con: _checkForValue(tempCharacterObject, "skills.all.craft_2.bonuses.con_bonus", false),
            int: _checkForValue(tempCharacterObject, "skills.all.craft_2.bonuses.int_bonus", true),
            wis: _checkForValue(tempCharacterObject, "skills.all.craft_2.bonuses.wis_bonus", false),
            cha: _checkForValue(tempCharacterObject, "skills.all.craft_2.bonuses.cha_bonus", false),
            class_skill: _checkForValue(tempCharacterObject, "skills.all.craft_2.bonuses.class_skill", false),
            level: _checkForValue(tempCharacterObject, "skills.all.craft_2.bonuses.level", false),
            half_level: _checkForValue(tempCharacterObject, "skills.all.craft_2.bonuses.half_level", false),
            check_penalty: _checkForValue(tempCharacterObject, "skills.all.craft_2.bonuses.check_penalty", false)
          }
        },
        diplomacy: {
          ranks: _checkForValue(tempCharacterObject, "skills.all.diplomacy.ranks", ""),
          misc: _checkForValue(tempCharacterObject, "skills.all.diplomacy.misc", ""),
          racial: _checkForValue(tempCharacterObject, "skills.all.diplomacy.racial", ""),
          feat: _checkForValue(tempCharacterObject, "skills.all.diplomacy.feat", ""),
          trait: _checkForValue(tempCharacterObject, "skills.all.diplomacy.trait", ""),
          current: "",
          bonuses: {
            str: _checkForValue(tempCharacterObject, "skills.all.diplomacy.bonuses.str_bonus", false),
            dex: _checkForValue(tempCharacterObject, "skills.all.diplomacy.bonuses.dex_bonus", false),
            con: _checkForValue(tempCharacterObject, "skills.all.diplomacy.bonuses.con_bonus", false),
            int: _checkForValue(tempCharacterObject, "skills.all.diplomacy.bonuses.int_bonus", false),
            wis: _checkForValue(tempCharacterObject, "skills.all.diplomacy.bonuses.wis_bonus", false),
            cha: _checkForValue(tempCharacterObject, "skills.all.diplomacy.bonuses.cha_bonus", true),
            class_skill: _checkForValue(tempCharacterObject, "skills.all.diplomacy.bonuses.class_skill", false),
            level: _checkForValue(tempCharacterObject, "skills.all.diplomacy.bonuses.level", false),
            half_level: _checkForValue(tempCharacterObject, "skills.all.diplomacy.bonuses.half_level", false),
            check_penalty: _checkForValue(tempCharacterObject, "skills.all.diplomacy.bonuses.check_penalty", false)
          }
        },
        disable_device: {
          ranks: _checkForValue(tempCharacterObject, "skills.all.disable_device.ranks", ""),
          misc: _checkForValue(tempCharacterObject, "skills.all.disable_device.misc", ""),
          racial: _checkForValue(tempCharacterObject, "skills.all.disable_device.racial", ""),
          feat: _checkForValue(tempCharacterObject, "skills.all.disable_device.feat", ""),
          trait: _checkForValue(tempCharacterObject, "skills.all.disable_device.trait", ""),
          current: "",
          bonuses: {
            str: _checkForValue(tempCharacterObject, "skills.all.disable_device.bonuses.str_bonus", false),
            dex: _checkForValue(tempCharacterObject, "skills.all.disable_device.bonuses.dex_bonus", true),
            con: _checkForValue(tempCharacterObject, "skills.all.disable_device.bonuses.con_bonus", false),
            int: _checkForValue(tempCharacterObject, "skills.all.disable_device.bonuses.int_bonus", false),
            wis: _checkForValue(tempCharacterObject, "skills.all.disable_device.bonuses.wis_bonus", false),
            cha: _checkForValue(tempCharacterObject, "skills.all.disable_device.bonuses.cha_bonus", false),
            class_skill: _checkForValue(tempCharacterObject, "skills.all.disable_device.bonuses.class_skill", false),
            level: _checkForValue(tempCharacterObject, "skills.all.disable_device.bonuses.level", false),
            half_level: _checkForValue(tempCharacterObject, "skills.all.disable_device.bonuses.half_level", false),
            check_penalty: _checkForValue(tempCharacterObject, "skills.all.disable_device.bonuses.check_penalty", true)
          }
        },
        disguise: {
          ranks: _checkForValue(tempCharacterObject, "skills.all.disguise.ranks", ""),
          misc: _checkForValue(tempCharacterObject, "skills.all.disguise.misc", ""),
          racial: _checkForValue(tempCharacterObject, "skills.all.disguise.racial", ""),
          feat: _checkForValue(tempCharacterObject, "skills.all.disguise.feat", ""),
          trait: _checkForValue(tempCharacterObject, "skills.all.disguise.trait", ""),
          current: "",
          bonuses: {
            str: _checkForValue(tempCharacterObject, "skills.all.disguise.bonuses.str_bonus", false),
            dex: _checkForValue(tempCharacterObject, "skills.all.disguise.bonuses.dex_bonus", false),
            con: _checkForValue(tempCharacterObject, "skills.all.disguise.bonuses.con_bonus", false),
            int: _checkForValue(tempCharacterObject, "skills.all.disguise.bonuses.int_bonus", false),
            wis: _checkForValue(tempCharacterObject, "skills.all.disguise.bonuses.wis_bonus", false),
            cha: _checkForValue(tempCharacterObject, "skills.all.disguise.bonuses.cha_bonus", true),
            class_skill: _checkForValue(tempCharacterObject, "skills.all.disguise.bonuses.class_skill", false),
            level: _checkForValue(tempCharacterObject, "skills.all.disguise.bonuses.level", false),
            half_level: _checkForValue(tempCharacterObject, "skills.all.disguise.bonuses.half_level", false),
            check_penalty: _checkForValue(tempCharacterObject, "skills.all.disguise.bonuses.check_penalty", false)
          }
        },
        escape_artist: {
          ranks: _checkForValue(tempCharacterObject, "skills.all.escape_artist.ranks", ""),
          misc: _checkForValue(tempCharacterObject, "skills.all.escape_artist.misc", ""),
          racial: _checkForValue(tempCharacterObject, "skills.all.escape_artist.racial", ""),
          feat: _checkForValue(tempCharacterObject, "skills.all.escape_artist.feat", ""),
          trait: _checkForValue(tempCharacterObject, "skills.all.escape_artist.trait", ""),
          current: "",
          bonuses: {
            str: _checkForValue(tempCharacterObject, "skills.all.escape_artist.bonuses.str_bonus", false),
            dex: _checkForValue(tempCharacterObject, "skills.all.escape_artist.bonuses.dex_bonus", true),
            con: _checkForValue(tempCharacterObject, "skills.all.escape_artist.bonuses.con_bonus", false),
            int: _checkForValue(tempCharacterObject, "skills.all.escape_artist.bonuses.int_bonus", false),
            wis: _checkForValue(tempCharacterObject, "skills.all.escape_artist.bonuses.wis_bonus", false),
            cha: _checkForValue(tempCharacterObject, "skills.all.escape_artist.bonuses.cha_bonus", false),
            class_skill: _checkForValue(tempCharacterObject, "skills.all.escape_artist.bonuses.class_skill", false),
            level: _checkForValue(tempCharacterObject, "skills.all.escape_artist.bonuses.level", false),
            half_level: _checkForValue(tempCharacterObject, "skills.all.escape_artist.bonuses.half_level", false),
            check_penalty: _checkForValue(tempCharacterObject, "skills.all.escape_artist.bonuses.check_penalty", true)
          }
        },
        fly: {
          ranks: _checkForValue(tempCharacterObject, "skills.all.fly.ranks", ""),
          misc: _checkForValue(tempCharacterObject, "skills.all.fly.misc", ""),
          racial: _checkForValue(tempCharacterObject, "skills.all.fly.racial", ""),
          feat: _checkForValue(tempCharacterObject, "skills.all.fly.feat", ""),
          trait: _checkForValue(tempCharacterObject, "skills.all.fly.trait", ""),
          current: "",
          bonuses: {
            str: _checkForValue(tempCharacterObject, "skills.all.fly.bonuses.str_bonus", false),
            dex: _checkForValue(tempCharacterObject, "skills.all.fly.bonuses.dex_bonus", true),
            con: _checkForValue(tempCharacterObject, "skills.all.fly.bonuses.con_bonus", false),
            int: _checkForValue(tempCharacterObject, "skills.all.fly.bonuses.int_bonus", false),
            wis: _checkForValue(tempCharacterObject, "skills.all.fly.bonuses.wis_bonus", false),
            cha: _checkForValue(tempCharacterObject, "skills.all.fly.bonuses.cha_bonus", false),
            class_skill: _checkForValue(tempCharacterObject, "skills.all.fly.bonuses.class_skill", false),
            level: _checkForValue(tempCharacterObject, "skills.all.fly.bonuses.level", false),
            half_level: _checkForValue(tempCharacterObject, "skills.all.fly.bonuses.half_level", false),
            check_penalty: _checkForValue(tempCharacterObject, "skills.all.fly.bonuses.check_penalty", true),
            size_fly: _checkForValue(tempCharacterObject, "skills.all.fly.bonuses.size_modifier_fly", true)
          }
        },
        handle_animal: {
          ranks: _checkForValue(tempCharacterObject, "skills.all.handle_animal.ranks", ""),
          misc: _checkForValue(tempCharacterObject, "skills.all.handle_animal.misc", ""),
          racial: _checkForValue(tempCharacterObject, "skills.all.handle_animal.racial", ""),
          feat: _checkForValue(tempCharacterObject, "skills.all.handle_animal.feat", ""),
          trait: _checkForValue(tempCharacterObject, "skills.all.handle_animal.trait", ""),
          current: "",
          bonuses: {
            str: _checkForValue(tempCharacterObject, "skills.all.handle_animal.bonuses.str_bonus", false),
            dex: _checkForValue(tempCharacterObject, "skills.all.handle_animal.bonuses.dex_bonus", false),
            con: _checkForValue(tempCharacterObject, "skills.all.handle_animal.bonuses.con_bonus", false),
            int: _checkForValue(tempCharacterObject, "skills.all.handle_animal.bonuses.int_bonus", false),
            wis: _checkForValue(tempCharacterObject, "skills.all.handle_animal.bonuses.wis_bonus", false),
            cha: _checkForValue(tempCharacterObject, "skills.all.handle_animal.bonuses.cha_bonus", true),
            class_skill: _checkForValue(tempCharacterObject, "skills.all.handle_animal.bonuses.class_skill", false),
            level: _checkForValue(tempCharacterObject, "skills.all.handle_animal.bonuses.level", false),
            half_level: _checkForValue(tempCharacterObject, "skills.all.handle_animal.bonuses.half_level", false),
            check_penalty: _checkForValue(tempCharacterObject, "skills.all.handle_animal.bonuses.check_penalty", false)
          }
        },
        heal: {
          ranks: _checkForValue(tempCharacterObject, "skills.all.heal.ranks", ""),
          misc: _checkForValue(tempCharacterObject, "skills.all.heal.misc", ""),
          racial: _checkForValue(tempCharacterObject, "skills.all.heal.racial", ""),
          feat: _checkForValue(tempCharacterObject, "skills.all.heal.feat", ""),
          trait: _checkForValue(tempCharacterObject, "skills.all.heal.trait", ""),
          current: "",
          bonuses: {
            str: _checkForValue(tempCharacterObject, "skills.all.heal.bonuses.str_bonus", false),
            dex: _checkForValue(tempCharacterObject, "skills.all.heal.bonuses.dex_bonus", false),
            con: _checkForValue(tempCharacterObject, "skills.all.heal.bonuses.con_bonus", false),
            int: _checkForValue(tempCharacterObject, "skills.all.heal.bonuses.int_bonus", false),
            wis: _checkForValue(tempCharacterObject, "skills.all.heal.bonuses.wis_bonus", true),
            cha: _checkForValue(tempCharacterObject, "skills.all.heal.bonuses.cha_bonus", false),
            class_skill: _checkForValue(tempCharacterObject, "skills.all.heal.bonuses.class_skill", false),
            level: _checkForValue(tempCharacterObject, "skills.all.heal.bonuses.level", false),
            half_level: _checkForValue(tempCharacterObject, "skills.all.heal.bonuses.half_level", false),
            check_penalty: _checkForValue(tempCharacterObject, "skills.all.heal.bonuses.check_penalty", false)
          }
        },
        intimidate: {
          ranks: _checkForValue(tempCharacterObject, "skills.all.intimidate.ranks", ""),
          misc: _checkForValue(tempCharacterObject, "skills.all.intimidate.misc", ""),
          racial: _checkForValue(tempCharacterObject, "skills.all.intimidate.racial", ""),
          feat: _checkForValue(tempCharacterObject, "skills.all.intimidate.feat", ""),
          trait: _checkForValue(tempCharacterObject, "skills.all.intimidate.trait", ""),
          current: "",
          bonuses: {
            str: _checkForValue(tempCharacterObject, "skills.all.intimidate.bonuses.str_bonus", false),
            dex: _checkForValue(tempCharacterObject, "skills.all.intimidate.bonuses.dex_bonus", false),
            con: _checkForValue(tempCharacterObject, "skills.all.intimidate.bonuses.con_bonus", false),
            int: _checkForValue(tempCharacterObject, "skills.all.intimidate.bonuses.int_bonus", false),
            wis: _checkForValue(tempCharacterObject, "skills.all.intimidate.bonuses.wis_bonus", false),
            cha: _checkForValue(tempCharacterObject, "skills.all.intimidate.bonuses.cha_bonus", true),
            class_skill: _checkForValue(tempCharacterObject, "skills.all.intimidate.bonuses.class_skill", false),
            level: _checkForValue(tempCharacterObject, "skills.all.intimidate.bonuses.level", false),
            half_level: _checkForValue(tempCharacterObject, "skills.all.intimidate.bonuses.half_level", false),
            check_penalty: _checkForValue(tempCharacterObject, "skills.all.intimidate.bonuses.check_penalty", false)
          }
        },
        knowledge_arcana: {
          ranks: _checkForValue(tempCharacterObject, "skills.all.knowledge_arcana.ranks", ""),
          misc: _checkForValue(tempCharacterObject, "skills.all.knowledge_arcana.misc", ""),
          racial: _checkForValue(tempCharacterObject, "skills.all.knowledge_arcana.racial", ""),
          feat: _checkForValue(tempCharacterObject, "skills.all.knowledge_arcana.feat", ""),
          trait: _checkForValue(tempCharacterObject, "skills.all.knowledge_arcana.trait", ""),
          current: "",
          bonuses: {
            str: _checkForValue(tempCharacterObject, "skills.all.knowledge_arcana.bonuses.str_bonus", false),
            dex: _checkForValue(tempCharacterObject, "skills.all.knowledge_arcana.bonuses.dex_bonus", false),
            con: _checkForValue(tempCharacterObject, "skills.all.knowledge_arcana.bonuses.con_bonus", false),
            int: _checkForValue(tempCharacterObject, "skills.all.knowledge_arcana.bonuses.int_bonus", true),
            wis: _checkForValue(tempCharacterObject, "skills.all.knowledge_arcana.bonuses.wis_bonus", false),
            cha: _checkForValue(tempCharacterObject, "skills.all.knowledge_arcana.bonuses.cha_bonus", false),
            class_skill: _checkForValue(tempCharacterObject, "skills.all.knowledge_arcana.bonuses.class_skill", false),
            level: _checkForValue(tempCharacterObject, "skills.all.knowledge_arcana.bonuses.level", false),
            half_level: _checkForValue(tempCharacterObject, "skills.all.knowledge_arcana.bonuses.half_level", false),
            check_penalty: _checkForValue(tempCharacterObject, "skills.all.knowledge_arcana.bonuses.check_penalty", false)
          }
        },
        knowledge_dungeoneering: {
          ranks: _checkForValue(tempCharacterObject, "skills.all.knowledge_dungeoneering.ranks", ""),
          misc: _checkForValue(tempCharacterObject, "skills.all.knowledge_dungeoneering.misc", ""),
          racial: _checkForValue(tempCharacterObject, "skills.all.knowledge_dungeoneering.racial", ""),
          feat: _checkForValue(tempCharacterObject, "skills.all.knowledge_dungeoneering.feat", ""),
          trait: _checkForValue(tempCharacterObject, "skills.all.knowledge_dungeoneering.trait", ""),
          current: "",
          bonuses: {
            str: _checkForValue(tempCharacterObject, "skills.all.knowledge_dungeoneering.bonuses.str_bonus", false),
            dex: _checkForValue(tempCharacterObject, "skills.all.knowledge_dungeoneering.bonuses.dex_bonus", false),
            con: _checkForValue(tempCharacterObject, "skills.all.knowledge_dungeoneering.bonuses.con_bonus", false),
            int: _checkForValue(tempCharacterObject, "skills.all.knowledge_dungeoneering.bonuses.int_bonus", true),
            wis: _checkForValue(tempCharacterObject, "skills.all.knowledge_dungeoneering.bonuses.wis_bonus", false),
            cha: _checkForValue(tempCharacterObject, "skills.all.knowledge_dungeoneering.bonuses.cha_bonus", false),
            class_skill: _checkForValue(tempCharacterObject, "skills.all.knowledge_dungeoneering.bonuses.class_skill", false),
            level: _checkForValue(tempCharacterObject, "skills.all.knowledge_dungeoneering.bonuses.level", false),
            half_level: _checkForValue(tempCharacterObject, "skills.all.knowledge_dungeoneering.bonuses.half_level", false),
            check_penalty: _checkForValue(tempCharacterObject, "skills.all.knowledge_dungeoneering.bonuses.check_penalty", false)
          }
        },
        knowledge_engineering: {
          ranks: _checkForValue(tempCharacterObject, "skills.all.knowledge_engineering.ranks", ""),
          misc: _checkForValue(tempCharacterObject, "skills.all.knowledge_engineering.misc", ""),
          racial: _checkForValue(tempCharacterObject, "skills.all.knowledge_engineering.racial", ""),
          feat: _checkForValue(tempCharacterObject, "skills.all.knowledge_engineering.feat", ""),
          trait: _checkForValue(tempCharacterObject, "skills.all.knowledge_engineering.trait", ""),
          current: "",
          bonuses: {
            str: _checkForValue(tempCharacterObject, "skills.all.knowledge_engineering.bonuses.str_bonus", false),
            dex: _checkForValue(tempCharacterObject, "skills.all.knowledge_engineering.bonuses.dex_bonus", false),
            con: _checkForValue(tempCharacterObject, "skills.all.knowledge_engineering.bonuses.con_bonus", false),
            int: _checkForValue(tempCharacterObject, "skills.all.knowledge_engineering.bonuses.int_bonus", true),
            wis: _checkForValue(tempCharacterObject, "skills.all.knowledge_engineering.bonuses.wis_bonus", false),
            cha: _checkForValue(tempCharacterObject, "skills.all.knowledge_engineering.bonuses.cha_bonus", false),
            class_skill: _checkForValue(tempCharacterObject, "skills.all.knowledge_engineering.bonuses.class_skill", false),
            level: _checkForValue(tempCharacterObject, "skills.all.knowledge_engineering.bonuses.level", false),
            half_level: _checkForValue(tempCharacterObject, "skills.all.knowledge_engineering.bonuses.half_level", false),
            check_penalty: _checkForValue(tempCharacterObject, "skills.all.knowledge_engineering.bonuses.check_penalty", false)
          }
        },
        knowledge_geography: {
          ranks: _checkForValue(tempCharacterObject, "skills.all.knowledge_geography.ranks", ""),
          misc: _checkForValue(tempCharacterObject, "skills.all.knowledge_geography.misc", ""),
          racial: _checkForValue(tempCharacterObject, "skills.all.knowledge_geography.racial", ""),
          feat: _checkForValue(tempCharacterObject, "skills.all.knowledge_geography.feat", ""),
          trait: _checkForValue(tempCharacterObject, "skills.all.knowledge_geography.trait", ""),
          current: "",
          bonuses: {
            str: _checkForValue(tempCharacterObject, "skills.all.knowledge_geography.bonuses.str_bonus", false),
            dex: _checkForValue(tempCharacterObject, "skills.all.knowledge_geography.bonuses.dex_bonus", false),
            con: _checkForValue(tempCharacterObject, "skills.all.knowledge_geography.bonuses.con_bonus", false),
            int: _checkForValue(tempCharacterObject, "skills.all.knowledge_geography.bonuses.int_bonus", true),
            wis: _checkForValue(tempCharacterObject, "skills.all.knowledge_geography.bonuses.wis_bonus", false),
            cha: _checkForValue(tempCharacterObject, "skills.all.knowledge_geography.bonuses.cha_bonus", false),
            class_skill: _checkForValue(tempCharacterObject, "skills.all.knowledge_geography.bonuses.class_skill", false),
            level: _checkForValue(tempCharacterObject, "skills.all.knowledge_geography.bonuses.level", false),
            half_level: _checkForValue(tempCharacterObject, "skills.all.knowledge_geography.bonuses.half_level", false),
            check_penalty: _checkForValue(tempCharacterObject, "skills.all.knowledge_geography.bonuses.check_penalty", false)
          }
        },
        knowledge_history: {
          ranks: _checkForValue(tempCharacterObject, "skills.all.knowledge_history.ranks", ""),
          misc: _checkForValue(tempCharacterObject, "skills.all.knowledge_history.misc", ""),
          racial: _checkForValue(tempCharacterObject, "skills.all.knowledge_history.racial", ""),
          feat: _checkForValue(tempCharacterObject, "skills.all.knowledge_history.feat", ""),
          trait: _checkForValue(tempCharacterObject, "skills.all.knowledge_history.trait", ""),
          current: "",
          bonuses: {
            str: _checkForValue(tempCharacterObject, "skills.all.knowledge_history.bonuses.str_bonus", false),
            dex: _checkForValue(tempCharacterObject, "skills.all.knowledge_history.bonuses.dex_bonus", false),
            con: _checkForValue(tempCharacterObject, "skills.all.knowledge_history.bonuses.con_bonus", false),
            int: _checkForValue(tempCharacterObject, "skills.all.knowledge_history.bonuses.int_bonus", true),
            wis: _checkForValue(tempCharacterObject, "skills.all.knowledge_history.bonuses.wis_bonus", false),
            cha: _checkForValue(tempCharacterObject, "skills.all.knowledge_history.bonuses.cha_bonus", false),
            class_skill: _checkForValue(tempCharacterObject, "skills.all.knowledge_history.bonuses.class_skill", false),
            level: _checkForValue(tempCharacterObject, "skills.all.knowledge_history.bonuses.level", false),
            half_level: _checkForValue(tempCharacterObject, "skills.all.knowledge_history.bonuses.half_level", false),
            check_penalty: _checkForValue(tempCharacterObject, "skills.all.knowledge_history.bonuses.check_penalty", false)
          }
        },
        knowledge_local: {
          ranks: _checkForValue(tempCharacterObject, "skills.all.knowledge_local.ranks", ""),
          misc: _checkForValue(tempCharacterObject, "skills.all.knowledge_local.misc", ""),
          racial: _checkForValue(tempCharacterObject, "skills.all.knowledge_local.racial", ""),
          feat: _checkForValue(tempCharacterObject, "skills.all.knowledge_local.feat", ""),
          trait: _checkForValue(tempCharacterObject, "skills.all.knowledge_local.trait", ""),
          current: "",
          bonuses: {
            str: _checkForValue(tempCharacterObject, "skills.all.knowledge_local.bonuses.str_bonus", false),
            dex: _checkForValue(tempCharacterObject, "skills.all.knowledge_local.bonuses.dex_bonus", false),
            con: _checkForValue(tempCharacterObject, "skills.all.knowledge_local.bonuses.con_bonus", false),
            int: _checkForValue(tempCharacterObject, "skills.all.knowledge_local.bonuses.int_bonus", true),
            wis: _checkForValue(tempCharacterObject, "skills.all.knowledge_local.bonuses.wis_bonus", false),
            cha: _checkForValue(tempCharacterObject, "skills.all.knowledge_local.bonuses.cha_bonus", false),
            class_skill: _checkForValue(tempCharacterObject, "skills.all.knowledge_local.bonuses.class_skill", false),
            level: _checkForValue(tempCharacterObject, "skills.all.knowledge_local.bonuses.level", false),
            half_level: _checkForValue(tempCharacterObject, "skills.all.knowledge_local.bonuses.half_level", false),
            check_penalty: _checkForValue(tempCharacterObject, "skills.all.knowledge_local.bonuses.check_penalty", false)
          }
        },
        knowledge_nature: {
          ranks: _checkForValue(tempCharacterObject, "skills.all.knowledge_nature.ranks", ""),
          misc: _checkForValue(tempCharacterObject, "skills.all.knowledge_nature.misc", ""),
          racial: _checkForValue(tempCharacterObject, "skills.all.knowledge_nature.racial", ""),
          feat: _checkForValue(tempCharacterObject, "skills.all.knowledge_nature.feat", ""),
          trait: _checkForValue(tempCharacterObject, "skills.all.knowledge_nature.trait", ""),
          current: "",
          bonuses: {
            str: _checkForValue(tempCharacterObject, "skills.all.knowledge_nature.bonuses.str_bonus", false),
            dex: _checkForValue(tempCharacterObject, "skills.all.knowledge_nature.bonuses.dex_bonus", false),
            con: _checkForValue(tempCharacterObject, "skills.all.knowledge_nature.bonuses.con_bonus", false),
            int: _checkForValue(tempCharacterObject, "skills.all.knowledge_nature.bonuses.int_bonus", true),
            wis: _checkForValue(tempCharacterObject, "skills.all.knowledge_nature.bonuses.wis_bonus", false),
            cha: _checkForValue(tempCharacterObject, "skills.all.knowledge_nature.bonuses.cha_bonus", false),
            class_skill: _checkForValue(tempCharacterObject, "skills.all.knowledge_nature.bonuses.class_skill", false),
            level: _checkForValue(tempCharacterObject, "skills.all.knowledge_nature.bonuses.level", false),
            half_level: _checkForValue(tempCharacterObject, "skills.all.knowledge_nature.bonuses.half_level", false),
            check_penalty: _checkForValue(tempCharacterObject, "skills.all.knowledge_nature.bonuses.check_penalty", false)
          }
        },
        knowledge_nobility: {
          ranks: _checkForValue(tempCharacterObject, "skills.all.knowledge_nobility.ranks", ""),
          misc: _checkForValue(tempCharacterObject, "skills.all.knowledge_nobility.misc", ""),
          racial: _checkForValue(tempCharacterObject, "skills.all.knowledge_nobility.racial", ""),
          feat: _checkForValue(tempCharacterObject, "skills.all.knowledge_nobility.feat", ""),
          trait: _checkForValue(tempCharacterObject, "skills.all.knowledge_nobility.trait", ""),
          current: "",
          bonuses: {
            str: _checkForValue(tempCharacterObject, "skills.all.knowledge_nobility.bonuses.str_bonus", false),
            dex: _checkForValue(tempCharacterObject, "skills.all.knowledge_nobility.bonuses.dex_bonus", false),
            con: _checkForValue(tempCharacterObject, "skills.all.knowledge_nobility.bonuses.con_bonus", false),
            int: _checkForValue(tempCharacterObject, "skills.all.knowledge_nobility.bonuses.int_bonus", true),
            wis: _checkForValue(tempCharacterObject, "skills.all.knowledge_nobility.bonuses.wis_bonus", false),
            cha: _checkForValue(tempCharacterObject, "skills.all.knowledge_nobility.bonuses.cha_bonus", false),
            class_skill: _checkForValue(tempCharacterObject, "skills.all.knowledge_nobility.bonuses.class_skill", false),
            level: _checkForValue(tempCharacterObject, "skills.all.knowledge_nobility.bonuses.level", false),
            half_level: _checkForValue(tempCharacterObject, "skills.all.knowledge_nobility.bonuses.half_level", false),
            check_penalty: _checkForValue(tempCharacterObject, "skills.all.knowledge_nobility.bonuses.check_penalty", false)
          }
        },
        knowledge_planes: {
          ranks: _checkForValue(tempCharacterObject, "skills.all.knowledge_planes.ranks", ""),
          misc: _checkForValue(tempCharacterObject, "skills.all.knowledge_planes.misc", ""),
          racial: _checkForValue(tempCharacterObject, "skills.all.knowledge_planes.racial", ""),
          feat: _checkForValue(tempCharacterObject, "skills.all.knowledge_planes.feat", ""),
          trait: _checkForValue(tempCharacterObject, "skills.all.knowledge_planes.trait", ""),
          current: "",
          bonuses: {
            str: _checkForValue(tempCharacterObject, "skills.all.knowledge_planes.bonuses.str_bonus", false),
            dex: _checkForValue(tempCharacterObject, "skills.all.knowledge_planes.bonuses.dex_bonus", false),
            con: _checkForValue(tempCharacterObject, "skills.all.knowledge_planes.bonuses.con_bonus", false),
            int: _checkForValue(tempCharacterObject, "skills.all.knowledge_planes.bonuses.int_bonus", true),
            wis: _checkForValue(tempCharacterObject, "skills.all.knowledge_planes.bonuses.wis_bonus", false),
            cha: _checkForValue(tempCharacterObject, "skills.all.knowledge_planes.bonuses.cha_bonus", false),
            class_skill: _checkForValue(tempCharacterObject, "skills.all.knowledge_planes.bonuses.class_skill", false),
            level: _checkForValue(tempCharacterObject, "skills.all.knowledge_planes.bonuses.level", false),
            half_level: _checkForValue(tempCharacterObject, "skills.all.knowledge_planes.bonuses.half_level", false),
            check_penalty: _checkForValue(tempCharacterObject, "skills.all.knowledge_planes.bonuses.check_penalty", false)
          }
        },
        knowledge_religion: {
          ranks: _checkForValue(tempCharacterObject, "skills.all.knowledge_religion.ranks", ""),
          misc: _checkForValue(tempCharacterObject, "skills.all.knowledge_religion.misc", ""),
          racial: _checkForValue(tempCharacterObject, "skills.all.knowledge_religion.racial", ""),
          feat: _checkForValue(tempCharacterObject, "skills.all.knowledge_religion.feat", ""),
          trait: _checkForValue(tempCharacterObject, "skills.all.knowledge_religion.trait", ""),
          current: "",
          bonuses: {
            str: _checkForValue(tempCharacterObject, "skills.all.knowledge_religion.bonuses.str_bonus", false),
            dex: _checkForValue(tempCharacterObject, "skills.all.knowledge_religion.bonuses.dex_bonus", false),
            con: _checkForValue(tempCharacterObject, "skills.all.knowledge_religion.bonuses.con_bonus", false),
            int: _checkForValue(tempCharacterObject, "skills.all.knowledge_religion.bonuses.int_bonus", true),
            wis: _checkForValue(tempCharacterObject, "skills.all.knowledge_religion.bonuses.wis_bonus", false),
            cha: _checkForValue(tempCharacterObject, "skills.all.knowledge_religion.bonuses.cha_bonus", false),
            class_skill: _checkForValue(tempCharacterObject, "skills.all.knowledge_religion.bonuses.class_skill", false),
            level: _checkForValue(tempCharacterObject, "skills.all.knowledge_religion.bonuses.level", false),
            half_level: _checkForValue(tempCharacterObject, "skills.all.knowledge_religion.bonuses.half_level", false),
            check_penalty: _checkForValue(tempCharacterObject, "skills.all.knowledge_religion.bonuses.check_penalty", false)
          }
        },
        linguistics: {
          ranks: _checkForValue(tempCharacterObject, "skills.all.linguistics.ranks", ""),
          misc: _checkForValue(tempCharacterObject, "skills.all.linguistics.misc", ""),
          racial: _checkForValue(tempCharacterObject, "skills.all.linguistics.racial", ""),
          feat: _checkForValue(tempCharacterObject, "skills.all.linguistics.feat", ""),
          trait: _checkForValue(tempCharacterObject, "skills.all.linguistics.trait", ""),
          current: "",
          bonuses: {
            str: _checkForValue(tempCharacterObject, "skills.all.linguistics.bonuses.str_bonus", false),
            dex: _checkForValue(tempCharacterObject, "skills.all.linguistics.bonuses.dex_bonus", false),
            con: _checkForValue(tempCharacterObject, "skills.all.linguistics.bonuses.con_bonus", false),
            int: _checkForValue(tempCharacterObject, "skills.all.linguistics.bonuses.int_bonus", true),
            wis: _checkForValue(tempCharacterObject, "skills.all.linguistics.bonuses.wis_bonus", false),
            cha: _checkForValue(tempCharacterObject, "skills.all.linguistics.bonuses.cha_bonus", false),
            class_skill: _checkForValue(tempCharacterObject, "skills.all.linguistics.bonuses.class_skill", false),
            level: _checkForValue(tempCharacterObject, "skills.all.linguistics.bonuses.level", false),
            half_level: _checkForValue(tempCharacterObject, "skills.all.linguistics.bonuses.half_level", false),
            check_penalty: _checkForValue(tempCharacterObject, "skills.all.linguistics.bonuses.check_penalty", false)
          }
        },
        perception: {
          ranks: _checkForValue(tempCharacterObject, "skills.all.perception.ranks", ""),
          misc: _checkForValue(tempCharacterObject, "skills.all.perception.misc", ""),
          racial: _checkForValue(tempCharacterObject, "skills.all.perception.racial", ""),
          feat: _checkForValue(tempCharacterObject, "skills.all.perception.feat", ""),
          trait: _checkForValue(tempCharacterObject, "skills.all.perception.trait", ""),
          current: "",
          bonuses: {
            str: _checkForValue(tempCharacterObject, "skills.all.perception.bonuses.str_bonus", false),
            dex: _checkForValue(tempCharacterObject, "skills.all.perception.bonuses.dex_bonus", false),
            con: _checkForValue(tempCharacterObject, "skills.all.perception.bonuses.con_bonus", false),
            int: _checkForValue(tempCharacterObject, "skills.all.perception.bonuses.int_bonus", false),
            wis: _checkForValue(tempCharacterObject, "skills.all.perception.bonuses.wis_bonus", true),
            cha: _checkForValue(tempCharacterObject, "skills.all.perception.bonuses.cha_bonus", false),
            class_skill: _checkForValue(tempCharacterObject, "skills.all.perception.bonuses.class_skill", false),
            level: _checkForValue(tempCharacterObject, "skills.all.perception.bonuses.level", false),
            half_level: _checkForValue(tempCharacterObject, "skills.all.perception.bonuses.half_level", false),
            check_penalty: _checkForValue(tempCharacterObject, "skills.all.perception.bonuses.check_penalty", false)
          }
        },
        perform_1: {
          variant_name: _checkForValue(tempCharacterObject, "skills.all.perform_1.variant_name", ""),
          ranks: _checkForValue(tempCharacterObject, "skills.all.perform_1.ranks", ""),
          misc: _checkForValue(tempCharacterObject, "skills.all.perform_1.misc", ""),
          racial: _checkForValue(tempCharacterObject, "skills.all.perform_1.racial", ""),
          feat: _checkForValue(tempCharacterObject, "skills.all.perform_1.feat", ""),
          trait: _checkForValue(tempCharacterObject, "skills.all.perform_1.trait", ""),
          current: "",
          bonuses: {
            str: _checkForValue(tempCharacterObject, "skills.all.perform_1.bonuses.str_bonus", false),
            dex: _checkForValue(tempCharacterObject, "skills.all.perform_1.bonuses.dex_bonus", false),
            con: _checkForValue(tempCharacterObject, "skills.all.perform_1.bonuses.con_bonus", false),
            int: _checkForValue(tempCharacterObject, "skills.all.perform_1.bonuses.int_bonus", false),
            wis: _checkForValue(tempCharacterObject, "skills.all.perform_1.bonuses.wis_bonus", false),
            cha: _checkForValue(tempCharacterObject, "skills.all.perform_1.bonuses.cha_bonus", true),
            class_skill: _checkForValue(tempCharacterObject, "skills.all.perform_1.bonuses.class_skill", false),
            level: _checkForValue(tempCharacterObject, "skills.all.perform_1.bonuses.level", false),
            half_level: _checkForValue(tempCharacterObject, "skills.all.perform_1.bonuses.half_level", false),
            check_penalty: _checkForValue(tempCharacterObject, "skills.all.perform_1.bonuses.check_penalty", false)
          }
        },
        perform_2: {
          variant_name: _checkForValue(tempCharacterObject, "skills.all.perform_2.variant_name", ""),
          ranks: _checkForValue(tempCharacterObject, "skills.all.perform_2.ranks", ""),
          misc: _checkForValue(tempCharacterObject, "skills.all.perform_2.misc", ""),
          racial: _checkForValue(tempCharacterObject, "skills.all.perform_2.racial", ""),
          feat: _checkForValue(tempCharacterObject, "skills.all.perform_2.feat", ""),
          trait: _checkForValue(tempCharacterObject, "skills.all.perform_2.trait", ""),
          current: "",
          bonuses: {
            str: _checkForValue(tempCharacterObject, "skills.all.perform_2.bonuses.str_bonus", false),
            dex: _checkForValue(tempCharacterObject, "skills.all.perform_2.bonuses.dex_bonus", false),
            con: _checkForValue(tempCharacterObject, "skills.all.perform_2.bonuses.con_bonus", false),
            int: _checkForValue(tempCharacterObject, "skills.all.perform_2.bonuses.int_bonus", false),
            wis: _checkForValue(tempCharacterObject, "skills.all.perform_2.bonuses.wis_bonus", false),
            cha: _checkForValue(tempCharacterObject, "skills.all.perform_2.bonuses.cha_bonus", true),
            class_skill: _checkForValue(tempCharacterObject, "skills.all.perform_2.bonuses.class_skill", false),
            level: _checkForValue(tempCharacterObject, "skills.all.perform_2.bonuses.level", false),
            half_level: _checkForValue(tempCharacterObject, "skills.all.perform_2.bonuses.half_level", false),
            check_penalty: _checkForValue(tempCharacterObject, "skills.all.perform_2.bonuses.check_penalty", false)
          }
        },
        profession_1: {
          variant_name: _checkForValue(tempCharacterObject, "skills.all.profession_1.variant_name", ""),
          ranks: _checkForValue(tempCharacterObject, "skills.all.profession_1.ranks", ""),
          misc: _checkForValue(tempCharacterObject, "skills.all.profession_1.misc", ""),
          racial: _checkForValue(tempCharacterObject, "skills.all.profession_1.racial", ""),
          feat: _checkForValue(tempCharacterObject, "skills.all.profession_1.feat", ""),
          trait: _checkForValue(tempCharacterObject, "skills.all.profession_1.trait", ""),
          current: "",
          bonuses: {
            str: _checkForValue(tempCharacterObject, "skills.all.profession_1.bonuses.str_bonus", false),
            dex: _checkForValue(tempCharacterObject, "skills.all.profession_1.bonuses.dex_bonus", false),
            con: _checkForValue(tempCharacterObject, "skills.all.profession_1.bonuses.con_bonus", false),
            int: _checkForValue(tempCharacterObject, "skills.all.profession_1.bonuses.int_bonus", false),
            wis: _checkForValue(tempCharacterObject, "skills.all.profession_1.bonuses.wis_bonus", true),
            cha: _checkForValue(tempCharacterObject, "skills.all.profession_1.bonuses.cha_bonus", false),
            class_skill: _checkForValue(tempCharacterObject, "skills.all.profession_1.bonuses.class_skill", false),
            level: _checkForValue(tempCharacterObject, "skills.all.profession_1.bonuses.level", false),
            half_level: _checkForValue(tempCharacterObject, "skills.all.profession_1.bonuses.half_level", false),
            check_penalty: _checkForValue(tempCharacterObject, "skills.all.profession_1.bonuses.check_penalty", false)
          }
        },
        profession_2: {
          variant_name: _checkForValue(tempCharacterObject, "skills.all.profession_2.variant_name", ""),
          ranks: _checkForValue(tempCharacterObject, "skills.all.profession_2.ranks", ""),
          misc: _checkForValue(tempCharacterObject, "skills.all.profession_2.misc", ""),
          racial: _checkForValue(tempCharacterObject, "skills.all.profession_2.racial", ""),
          feat: _checkForValue(tempCharacterObject, "skills.all.profession_2.feat", ""),
          trait: _checkForValue(tempCharacterObject, "skills.all.profession_2.trait", ""),
          current: "",
          bonuses: {
            str: _checkForValue(tempCharacterObject, "skills.all.profession_2.bonuses.str_bonus", false),
            dex: _checkForValue(tempCharacterObject, "skills.all.profession_2.bonuses.dex_bonus", false),
            con: _checkForValue(tempCharacterObject, "skills.all.profession_2.bonuses.con_bonus", false),
            int: _checkForValue(tempCharacterObject, "skills.all.profession_2.bonuses.int_bonus", false),
            wis: _checkForValue(tempCharacterObject, "skills.all.profession_2.bonuses.wis_bonus", true),
            cha: _checkForValue(tempCharacterObject, "skills.all.profession_2.bonuses.cha_bonus", false),
            class_skill: _checkForValue(tempCharacterObject, "skills.all.profession_2.bonuses.class_skill", false),
            level: _checkForValue(tempCharacterObject, "skills.all.profession_2.bonuses.level", false),
            half_level: _checkForValue(tempCharacterObject, "skills.all.profession_2.bonuses.half_level", false),
            check_penalty: _checkForValue(tempCharacterObject, "skills.all.profession_2.bonuses.check_penalty", false)
          }
        },
        ride: {
          ranks: _checkForValue(tempCharacterObject, "skills.all.ride.ranks", ""),
          misc: _checkForValue(tempCharacterObject, "skills.all.ride.misc", ""),
          racial: _checkForValue(tempCharacterObject, "skills.all.ride.racial", ""),
          feat: _checkForValue(tempCharacterObject, "skills.all.ride.feat", ""),
          trait: _checkForValue(tempCharacterObject, "skills.all.ride.trait", ""),
          current: "",
          bonuses: {
            str: _checkForValue(tempCharacterObject, "skills.all.ride.bonuses.str_bonus", false),
            dex: _checkForValue(tempCharacterObject, "skills.all.ride.bonuses.dex_bonus", true),
            con: _checkForValue(tempCharacterObject, "skills.all.ride.bonuses.con_bonus", false),
            int: _checkForValue(tempCharacterObject, "skills.all.ride.bonuses.int_bonus", false),
            wis: _checkForValue(tempCharacterObject, "skills.all.ride.bonuses.wis_bonus", false),
            cha: _checkForValue(tempCharacterObject, "skills.all.ride.bonuses.cha_bonus", false),
            class_skill: _checkForValue(tempCharacterObject, "skills.all.ride.bonuses.class_skill", false),
            level: _checkForValue(tempCharacterObject, "skills.all.ride.bonuses.level", false),
            half_level: _checkForValue(tempCharacterObject, "skills.all.ride.bonuses.half_level", false),
            check_penalty: _checkForValue(tempCharacterObject, "skills.all.ride.bonuses.check_penalty", true)
          }
        },
        sense_motive: {
          ranks: _checkForValue(tempCharacterObject, "skills.all.sense_motive.ranks", ""),
          misc: _checkForValue(tempCharacterObject, "skills.all.sense_motive.misc", ""),
          racial: _checkForValue(tempCharacterObject, "skills.all.sense_motive.racial", ""),
          feat: _checkForValue(tempCharacterObject, "skills.all.sense_motive.feat", ""),
          trait: _checkForValue(tempCharacterObject, "skills.all.sense_motive.trait", ""),
          current: "",
          bonuses: {
            str: _checkForValue(tempCharacterObject, "skills.all.sense_motive.bonuses.str_bonus", false),
            dex: _checkForValue(tempCharacterObject, "skills.all.sense_motive.bonuses.dex_bonus", false),
            con: _checkForValue(tempCharacterObject, "skills.all.sense_motive.bonuses.con_bonus", false),
            int: _checkForValue(tempCharacterObject, "skills.all.sense_motive.bonuses.int_bonus", false),
            wis: _checkForValue(tempCharacterObject, "skills.all.sense_motive.bonuses.wis_bonus", true),
            cha: _checkForValue(tempCharacterObject, "skills.all.sense_motive.bonuses.cha_bonus", false),
            class_skill: _checkForValue(tempCharacterObject, "skills.all.sense_motive.bonuses.class_skill", false),
            level: _checkForValue(tempCharacterObject, "skills.all.sense_motive.bonuses.level", false),
            half_level: _checkForValue(tempCharacterObject, "skills.all.sense_motive.bonuses.half_level", false),
            check_penalty: _checkForValue(tempCharacterObject, "skills.all.sense_motive.bonuses.check_penalty", false)
          }
        },
        sleight_of_hand: {
          ranks: _checkForValue(tempCharacterObject, "skills.all.sleight_of_hand.ranks", ""),
          misc: _checkForValue(tempCharacterObject, "skills.all.sleight_of_hand.misc", ""),
          racial: _checkForValue(tempCharacterObject, "skills.all.sleight_of_hand.racial", ""),
          feat: _checkForValue(tempCharacterObject, "skills.all.sleight_of_hand.feat", ""),
          trait: _checkForValue(tempCharacterObject, "skills.all.sleight_of_hand.trait", ""),
          current: "",
          bonuses: {
            str: _checkForValue(tempCharacterObject, "skills.all.sleight_of_hand.bonuses.str_bonus", false),
            dex: _checkForValue(tempCharacterObject, "skills.all.sleight_of_hand.bonuses.dex_bonus", true),
            con: _checkForValue(tempCharacterObject, "skills.all.sleight_of_hand.bonuses.con_bonus", false),
            int: _checkForValue(tempCharacterObject, "skills.all.sleight_of_hand.bonuses.int_bonus", false),
            wis: _checkForValue(tempCharacterObject, "skills.all.sleight_of_hand.bonuses.wis_bonus", false),
            cha: _checkForValue(tempCharacterObject, "skills.all.sleight_of_hand.bonuses.cha_bonus", false),
            class_skill: _checkForValue(tempCharacterObject, "skills.all.sleight_of_hand.bonuses.class_skill", false),
            level: _checkForValue(tempCharacterObject, "skills.all.sleight_of_hand.bonuses.level", false),
            half_level: _checkForValue(tempCharacterObject, "skills.all.sleight_of_hand.bonuses.half_level", false),
            check_penalty: _checkForValue(tempCharacterObject, "skills.all.sleight_of_hand.bonuses.check_penalty", true)
          }
        },
        spellcraft: {
          ranks: _checkForValue(tempCharacterObject, "skills.all.spellcraft.ranks", ""),
          misc: _checkForValue(tempCharacterObject, "skills.all.spellcraft.misc", ""),
          racial: _checkForValue(tempCharacterObject, "skills.all.spellcraft.racial", ""),
          feat: _checkForValue(tempCharacterObject, "skills.all.spellcraft.feat", ""),
          trait: _checkForValue(tempCharacterObject, "skills.all.spellcraft.trait", ""),
          current: "",
          bonuses: {
            str: _checkForValue(tempCharacterObject, "skills.all.spellcraft.bonuses.str_bonus", false),
            dex: _checkForValue(tempCharacterObject, "skills.all.spellcraft.bonuses.dex_bonus", false),
            con: _checkForValue(tempCharacterObject, "skills.all.spellcraft.bonuses.con_bonus", false),
            int: _checkForValue(tempCharacterObject, "skills.all.spellcraft.bonuses.int_bonus", true),
            wis: _checkForValue(tempCharacterObject, "skills.all.spellcraft.bonuses.wis_bonus", false),
            cha: _checkForValue(tempCharacterObject, "skills.all.spellcraft.bonuses.cha_bonus", false),
            class_skill: _checkForValue(tempCharacterObject, "skills.all.spellcraft.bonuses.class_skill", false),
            level: _checkForValue(tempCharacterObject, "skills.all.spellcraft.bonuses.level", false),
            half_level: _checkForValue(tempCharacterObject, "skills.all.spellcraft.bonuses.half_level", false),
            check_penalty: _checkForValue(tempCharacterObject, "skills.all.spellcraft.bonuses.check_penalty", false)
          }
        },
        stealth: {
          ranks: _checkForValue(tempCharacterObject, "skills.all.stealth.ranks", ""),
          misc: _checkForValue(tempCharacterObject, "skills.all.stealth.misc", ""),
          racial: _checkForValue(tempCharacterObject, "skills.all.stealth.racial", ""),
          feat: _checkForValue(tempCharacterObject, "skills.all.stealth.feat", ""),
          trait: _checkForValue(tempCharacterObject, "skills.all.stealth.trait", ""),
          current: "",
          bonuses: {
            str: _checkForValue(tempCharacterObject, "skills.all.stealth.bonuses.str_bonus", false),
            dex: _checkForValue(tempCharacterObject, "skills.all.stealth.bonuses.dex_bonus", true),
            con: _checkForValue(tempCharacterObject, "skills.all.stealth.bonuses.con_bonus", false),
            int: _checkForValue(tempCharacterObject, "skills.all.stealth.bonuses.int_bonus", false),
            wis: _checkForValue(tempCharacterObject, "skills.all.stealth.bonuses.wis_bonus", false),
            cha: _checkForValue(tempCharacterObject, "skills.all.stealth.bonuses.cha_bonus", false),
            class_skill: _checkForValue(tempCharacterObject, "skills.all.stealth.bonuses.class_skill", false),
            level: _checkForValue(tempCharacterObject, "skills.all.stealth.bonuses.level", false),
            half_level: _checkForValue(tempCharacterObject, "skills.all.stealth.bonuses.half_level", false),
            check_penalty: _checkForValue(tempCharacterObject, "skills.all.stealth.bonuses.check_penalty", true),
            size_stealth: _checkForValue(tempCharacterObject, "skills.all.stealth.bonuses.size_stealth", true)
          }
        },
        survival: {
          ranks: _checkForValue(tempCharacterObject, "skills.all.survival.ranks", ""),
          misc: _checkForValue(tempCharacterObject, "skills.all.survival.misc", ""),
          racial: _checkForValue(tempCharacterObject, "skills.all.survival.racial", ""),
          feat: _checkForValue(tempCharacterObject, "skills.all.survival.feat", ""),
          trait: _checkForValue(tempCharacterObject, "skills.all.survival.trait", ""),
          current: "",
          bonuses: {
            str: _checkForValue(tempCharacterObject, "skills.all.survival.bonuses.str_bonus", false),
            dex: _checkForValue(tempCharacterObject, "skills.all.survival.bonuses.dex_bonus", false),
            con: _checkForValue(tempCharacterObject, "skills.all.survival.bonuses.con_bonus", false),
            int: _checkForValue(tempCharacterObject, "skills.all.survival.bonuses.int_bonus", false),
            wis: _checkForValue(tempCharacterObject, "skills.all.survival.bonuses.wis_bonus", true),
            cha: _checkForValue(tempCharacterObject, "skills.all.survival.bonuses.cha_bonus", false),
            class_skill: _checkForValue(tempCharacterObject, "skills.all.survival.bonuses.class_skill", false),
            level: _checkForValue(tempCharacterObject, "skills.all.survival.bonuses.level", false),
            half_level: _checkForValue(tempCharacterObject, "skills.all.survival.bonuses.half_level", false),
            check_penalty: _checkForValue(tempCharacterObject, "skills.all.survival.bonuses.check_penalty", false)
          }
        },
        swim: {
          ranks: _checkForValue(tempCharacterObject, "skills.all.swim.ranks", ""),
          misc: _checkForValue(tempCharacterObject, "skills.all.swim.misc", ""),
          racial: _checkForValue(tempCharacterObject, "skills.all.swim.racial", ""),
          feat: _checkForValue(tempCharacterObject, "skills.all.swim.feat", ""),
          trait: _checkForValue(tempCharacterObject, "skills.all.swim.trait", ""),
          current: "",
          bonuses: {
            str: _checkForValue(tempCharacterObject, "skills.all.swim.bonuses.str_bonus", true),
            dex: _checkForValue(tempCharacterObject, "skills.all.swim.bonuses.dex_bonus", false),
            con: _checkForValue(tempCharacterObject, "skills.all.swim.bonuses.con_bonus", false),
            int: _checkForValue(tempCharacterObject, "skills.all.swim.bonuses.int_bonus", false),
            wis: _checkForValue(tempCharacterObject, "skills.all.swim.bonuses.wis_bonus", false),
            cha: _checkForValue(tempCharacterObject, "skills.all.swim.bonuses.cha_bonus", false),
            class_skill: _checkForValue(tempCharacterObject, "skills.all.swim.bonuses.class_skill", false),
            level: _checkForValue(tempCharacterObject, "skills.all.swim.bonuses.level", false),
            half_level: _checkForValue(tempCharacterObject, "skills.all.swim.bonuses.half_level", false),
            check_penalty: _checkForValue(tempCharacterObject, "skills.all.swim.bonuses.check_penalty", true)
          }
        },
        use_magic_device: {
          ranks: _checkForValue(tempCharacterObject, "skills.all.use_magic_device.ranks", ""),
          misc: _checkForValue(tempCharacterObject, "skills.all.use_magic_device.misc", ""),
          racial: _checkForValue(tempCharacterObject, "skills.all.use_magic_device.racial", ""),
          feat: _checkForValue(tempCharacterObject, "skills.all.use_magic_device.feat", ""),
          trait: _checkForValue(tempCharacterObject, "skills.all.use_magic_device.trait", ""),
          current: "",
          bonuses: {
            str: _checkForValue(tempCharacterObject, "skills.all.use_magic_device.bonuses.str_bonus", false),
            dex: _checkForValue(tempCharacterObject, "skills.all.use_magic_device.bonuses.dex_bonus", false),
            con: _checkForValue(tempCharacterObject, "skills.all.use_magic_device.bonuses.con_bonus", false),
            int: _checkForValue(tempCharacterObject, "skills.all.use_magic_device.bonuses.int_bonus", false),
            wis: _checkForValue(tempCharacterObject, "skills.all.use_magic_device.bonuses.wis_bonus", false),
            cha: _checkForValue(tempCharacterObject, "skills.all.use_magic_device.bonuses.cha_bonus", true),
            class_skill: _checkForValue(tempCharacterObject, "skills.all.use_magic_device.bonuses.class_skill", false),
            level: _checkForValue(tempCharacterObject, "skills.all.use_magic_device.bonuses.level", false),
            half_level: _checkForValue(tempCharacterObject, "skills.all.use_magic_device.bonuses.half_level", false),
            check_penalty: _checkForValue(tempCharacterObject, "skills.all.use_magic_device.bonuses.check_penalty", false)
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
    _report._500.push("update: spells");
    characterObject.spells = {
      stats: {
        concentration: {
          misc: _checkForValue(tempCharacterObject, "spells.concentration.misc", ""),
          temp: _checkForValue(tempCharacterObject, "spells.concentration.temp", ""),
          racial: _checkForValue(tempCharacterObject, "spells.concentration.racial", ""),
          feat: _checkForValue(tempCharacterObject, "spells.concentration.feat", ""),
          trait: _checkForValue(tempCharacterObject, "spells.concentration.trait", ""),
          current: "",
          bonuses: {
            str: _checkForValue(tempCharacterObject, "spells.concentration.bonuses.str_bonus", false),
            dex: _checkForValue(tempCharacterObject, "spells.concentration.bonuses.dex_bonus", false),
            con: _checkForValue(tempCharacterObject, "spells.concentration.bonuses.con_bonus", false),
            int: _checkForValue(tempCharacterObject, "spells.concentration.bonuses.int_bonus", false),
            wis: _checkForValue(tempCharacterObject, "spells.concentration.bonuses.wis_bonus", false),
            cha: _checkForValue(tempCharacterObject, "spells.concentration.bonuses.cha_bonus", false),
            level: _checkForValue(tempCharacterObject, "spells.concentration.bonuses.level", false),
            half_level: _checkForValue(tempCharacterObject, "spells.concentration.bonuses.half_level", false)
          }
        },
        caster_level_check: {
          misc: _checkForValue(tempCharacterObject, "spells.caster_level_check.misc", ""),
          temp: _checkForValue(tempCharacterObject, "spells.caster_level_check.temp", ""),
          racial: _checkForValue(tempCharacterObject, "spells.caster_level_check.racial", ""),
          feat: _checkForValue(tempCharacterObject, "spells.caster_level_check.feat", ""),
          trait: _checkForValue(tempCharacterObject, "spells.caster_level_check.trait", ""),
          current: "",
          bonuses: {
            str: _checkForValue(tempCharacterObject, "spells.caster_level_check.bonuses.str_bonus", false),
            dex: _checkForValue(tempCharacterObject, "spells.caster_level_check.bonuses.dex_bonus", false),
            con: _checkForValue(tempCharacterObject, "spells.caster_level_check.bonuses.con_bonus", false),
            int: _checkForValue(tempCharacterObject, "spells.caster_level_check.bonuses.int_bonus", false),
            wis: _checkForValue(tempCharacterObject, "spells.caster_level_check.bonuses.wis_bonus", false),
            cha: _checkForValue(tempCharacterObject, "spells.caster_level_check.bonuses.cha_bonus", false),
            level: _checkForValue(tempCharacterObject, "spells.caster_level_check.bonuses.level", false),
            half_level: _checkForValue(tempCharacterObject, "spells.caster_level_check.bonuses.half_level", false)
          }
        },
        school: _checkForValue(tempCharacterObject, "spells.school", ""),
        opposition: _checkForValue(tempCharacterObject, "spells.opposition", ""),
        domains: _checkForValue(tempCharacterObject, "spells.domains", ""),
        bloodline: _checkForValue(tempCharacterObject, "spells.bloodline", ""),
        notes: _checkForValue(tempCharacterObject, "spells.spell_notes", "")
      },
      book: {
        level_0: {
          per_day: _checkForValue(tempCharacterObject, "spells.per_day.level_0", ""),
          known: _checkForValue(tempCharacterObject, "spells.known.level_0", ""),
          bonus: _checkForValue(tempCharacterObject, "spells.bonus.level_0", ""),
          dc: {
            spell_level: 0,
            misc: _checkForValue(tempCharacterObject, "spells.dc.level_0.misc", ""),
            temp: _checkForValue(tempCharacterObject, "spells.dc.level_0.temp", ""),
            feat: _checkForValue(tempCharacterObject, "spells.dc.level_0.feat", ""),
            trait: _checkForValue(tempCharacterObject, "spells.dc.level_0.trait", ""),
            current: "",
            bonuses: {
              str: _checkForValue(tempCharacterObject, "spells.dc.level_0.bonuses.str_bonus", false),
              dex: _checkForValue(tempCharacterObject, "spells.dc.level_0.bonuses.dex_bonus", false),
              con: _checkForValue(tempCharacterObject, "spells.dc.level_0.bonuses.con_bonus", false),
              int: _checkForValue(tempCharacterObject, "spells.dc.level_0.bonuses.int_bonus", false),
              wis: _checkForValue(tempCharacterObject, "spells.dc.level_0.bonuses.wis_bonus", false),
              cha: _checkForValue(tempCharacterObject, "spells.dc.level_0.bonuses.cha_bonus", false),
              level: _checkForValue(tempCharacterObject, "spells.dc.level_0.bonuses.level", false),
              half_level: _checkForValue(tempCharacterObject, "spells.dc.level_0.bonuses.half_level", false),
              spell_level: _checkForValue(tempCharacterObject, "spells.dc.level_0.bonuses.spell_level", false),
              plus_ten: _checkForValue(tempCharacterObject, "spells.dc.level_0.bonuses.plus_ten", false)
            }
          }
        },
        level_1: {
          per_day: _checkForValue(tempCharacterObject, "spells.per_day.level_1", ""),
          known: _checkForValue(tempCharacterObject, "spells.known.level_1", ""),
          bonus: _checkForValue(tempCharacterObject, "spells.bonus.level_1", ""),
          dc: {
            spell_level: 1,
            misc: _checkForValue(tempCharacterObject, "spells.dc.level_1.misc", ""),
            temp: _checkForValue(tempCharacterObject, "spells.dc.level_1.temp", ""),
            feat: _checkForValue(tempCharacterObject, "spells.dc.level_1.feat", ""),
            trait: _checkForValue(tempCharacterObject, "spells.dc.level_1.trait", ""),
            current: "",
            bonuses: {
              str: _checkForValue(tempCharacterObject, "spells.dc.level_1.bonuses.str_bonus", false),
              dex: _checkForValue(tempCharacterObject, "spells.dc.level_1.bonuses.dex_bonus", false),
              con: _checkForValue(tempCharacterObject, "spells.dc.level_1.bonuses.con_bonus", false),
              int: _checkForValue(tempCharacterObject, "spells.dc.level_1.bonuses.int_bonus", false),
              wis: _checkForValue(tempCharacterObject, "spells.dc.level_1.bonuses.wis_bonus", false),
              cha: _checkForValue(tempCharacterObject, "spells.dc.level_1.bonuses.cha_bonus", false),
              level: _checkForValue(tempCharacterObject, "spells.dc.level_1.bonuses.level", false),
              half_level: _checkForValue(tempCharacterObject, "spells.dc.level_1.bonuses.half_level", false),
              spell_level: _checkForValue(tempCharacterObject, "spells.dc.level_1.bonuses.spell_level", false),
              plus_ten: _checkForValue(tempCharacterObject, "spells.dc.level_1.bonuses.plus_ten", false)
            }
          }
        },
        level_2: {
          per_day: _checkForValue(tempCharacterObject, "spells.per_day.level_2", ""),
          known: _checkForValue(tempCharacterObject, "spells.known.level_2", ""),
          bonus: _checkForValue(tempCharacterObject, "spells.bonus.level_2", ""),
          dc: {
            spell_level: 2,
            misc: _checkForValue(tempCharacterObject, "spells.dc.level_2.misc", ""),
            temp: _checkForValue(tempCharacterObject, "spells.dc.level_2.temp", ""),
            feat: _checkForValue(tempCharacterObject, "spells.dc.level_2.feat", ""),
            trait: _checkForValue(tempCharacterObject, "spells.dc.level_2.trait", ""),
            current: "",
            bonuses: {
              str: _checkForValue(tempCharacterObject, "spells.dc.level_2.bonuses.str_bonus", false),
              dex: _checkForValue(tempCharacterObject, "spells.dc.level_2.bonuses.dex_bonus", false),
              con: _checkForValue(tempCharacterObject, "spells.dc.level_2.bonuses.con_bonus", false),
              int: _checkForValue(tempCharacterObject, "spells.dc.level_2.bonuses.int_bonus", false),
              wis: _checkForValue(tempCharacterObject, "spells.dc.level_2.bonuses.wis_bonus", false),
              cha: _checkForValue(tempCharacterObject, "spells.dc.level_2.bonuses.cha_bonus", false),
              level: _checkForValue(tempCharacterObject, "spells.dc.level_2.bonuses.level", false),
              half_level: _checkForValue(tempCharacterObject, "spells.dc.level_2.bonuses.half_level", false),
              spell_level: _checkForValue(tempCharacterObject, "spells.dc.level_2.bonuses.spell_level", false),
              plus_ten: _checkForValue(tempCharacterObject, "spells.dc.level_2.bonuses.plus_ten", false)
            }
          }
        },
        level_3: {
          per_day: _checkForValue(tempCharacterObject, "spells.per_day.level_3", ""),
          known: _checkForValue(tempCharacterObject, "spells.known.level_3", ""),
          bonus: _checkForValue(tempCharacterObject, "spells.bonus.level_3", ""),
          dc: {
            spell_level: 3,
            misc: _checkForValue(tempCharacterObject, "spells.dc.level_3.misc", ""),
            temp: _checkForValue(tempCharacterObject, "spells.dc.level_3.temp", ""),
            feat: _checkForValue(tempCharacterObject, "spells.dc.level_3.feat", ""),
            trait: _checkForValue(tempCharacterObject, "spells.dc.level_3.trait", ""),
            current: "",
            bonuses: {
              str: _checkForValue(tempCharacterObject, "spells.dc.level_3.bonuses.str_bonus", false),
              dex: _checkForValue(tempCharacterObject, "spells.dc.level_3.bonuses.dex_bonus", false),
              con: _checkForValue(tempCharacterObject, "spells.dc.level_3.bonuses.con_bonus", false),
              int: _checkForValue(tempCharacterObject, "spells.dc.level_3.bonuses.int_bonus", false),
              wis: _checkForValue(tempCharacterObject, "spells.dc.level_3.bonuses.wis_bonus", false),
              cha: _checkForValue(tempCharacterObject, "spells.dc.level_3.bonuses.cha_bonus", false),
              level: _checkForValue(tempCharacterObject, "spells.dc.level_3.bonuses.level", false),
              half_level: _checkForValue(tempCharacterObject, "spells.dc.level_3.bonuses.half_level", false),
              spell_level: _checkForValue(tempCharacterObject, "spells.dc.level_3.bonuses.spell_level", false),
              plus_ten: _checkForValue(tempCharacterObject, "spells.dc.level_3.bonuses.plus_ten", false)
            }
          }
        },
        level_4: {
          per_day: _checkForValue(tempCharacterObject, "spells.per_day.level_4", ""),
          known: _checkForValue(tempCharacterObject, "spells.known.level_4", ""),
          bonus: _checkForValue(tempCharacterObject, "spells.bonus.level_4", ""),
          dc: {
            spell_level: 4,
            misc: _checkForValue(tempCharacterObject, "spells.dc.level_4.misc", ""),
            temp: _checkForValue(tempCharacterObject, "spells.dc.level_4.temp", ""),
            feat: _checkForValue(tempCharacterObject, "spells.dc.level_4.feat", ""),
            trait: _checkForValue(tempCharacterObject, "spells.dc.level_4.trait", ""),
            current: "",
            bonuses: {
              str: _checkForValue(tempCharacterObject, "spells.dc.level_4.bonuses.str_bonus", false),
              dex: _checkForValue(tempCharacterObject, "spells.dc.level_4.bonuses.dex_bonus", false),
              con: _checkForValue(tempCharacterObject, "spells.dc.level_4.bonuses.con_bonus", false),
              int: _checkForValue(tempCharacterObject, "spells.dc.level_4.bonuses.int_bonus", false),
              wis: _checkForValue(tempCharacterObject, "spells.dc.level_4.bonuses.wis_bonus", false),
              cha: _checkForValue(tempCharacterObject, "spells.dc.level_4.bonuses.cha_bonus", false),
              level: _checkForValue(tempCharacterObject, "spells.dc.level_4.bonuses.level", false),
              half_level: _checkForValue(tempCharacterObject, "spells.dc.level_4.bonuses.half_level", false),
              spell_level: _checkForValue(tempCharacterObject, "spells.dc.level_4.bonuses.spell_level", false),
              plus_ten: _checkForValue(tempCharacterObject, "spells.dc.level_4.bonuses.plus_ten", false)
            }
          }
        },
        level_5: {
          per_day: _checkForValue(tempCharacterObject, "spells.per_day.level_5", ""),
          known: _checkForValue(tempCharacterObject, "spells.known.level_5", ""),
          bonus: _checkForValue(tempCharacterObject, "spells.bonus.level_5", ""),
          dc: {
            spell_level: 5,
            misc: _checkForValue(tempCharacterObject, "spells.dc.level_5.misc", ""),
            temp: _checkForValue(tempCharacterObject, "spells.dc.level_5.temp", ""),
            feat: _checkForValue(tempCharacterObject, "spells.dc.level_5.feat", ""),
            trait: _checkForValue(tempCharacterObject, "spells.dc.level_5.trait", ""),
            current: "",
            bonuses: {
              str: _checkForValue(tempCharacterObject, "spells.dc.level_5.bonuses.str_bonus", false),
              dex: _checkForValue(tempCharacterObject, "spells.dc.level_5.bonuses.dex_bonus", false),
              con: _checkForValue(tempCharacterObject, "spells.dc.level_5.bonuses.con_bonus", false),
              int: _checkForValue(tempCharacterObject, "spells.dc.level_5.bonuses.int_bonus", false),
              wis: _checkForValue(tempCharacterObject, "spells.dc.level_5.bonuses.wis_bonus", false),
              cha: _checkForValue(tempCharacterObject, "spells.dc.level_5.bonuses.cha_bonus", false),
              level: _checkForValue(tempCharacterObject, "spells.dc.level_5.bonuses.level", false),
              half_level: _checkForValue(tempCharacterObject, "spells.dc.level_5.bonuses.half_level", false),
              spell_level: _checkForValue(tempCharacterObject, "spells.dc.level_5.bonuses.spell_level", false),
              plus_ten: _checkForValue(tempCharacterObject, "spells.dc.level_5.bonuses.plus_ten", false)
            }
          }
        },
        level_6: {
          per_day: _checkForValue(tempCharacterObject, "spells.per_day.level_6", ""),
          known: _checkForValue(tempCharacterObject, "spells.known.level_6", ""),
          bonus: _checkForValue(tempCharacterObject, "spells.bonus.level_6", ""),
          dc: {
            spell_level: 6,
            misc: _checkForValue(tempCharacterObject, "spells.dc.level_6.misc", ""),
            temp: _checkForValue(tempCharacterObject, "spells.dc.level_6.temp", ""),
            feat: _checkForValue(tempCharacterObject, "spells.dc.level_6.feat", ""),
            trait: _checkForValue(tempCharacterObject, "spells.dc.level_6.trait", ""),
            current: "",
            bonuses: {
              str: _checkForValue(tempCharacterObject, "spells.dc.level_6.bonuses.str_bonus", false),
              dex: _checkForValue(tempCharacterObject, "spells.dc.level_6.bonuses.dex_bonus", false),
              con: _checkForValue(tempCharacterObject, "spells.dc.level_6.bonuses.con_bonus", false),
              int: _checkForValue(tempCharacterObject, "spells.dc.level_6.bonuses.int_bonus", false),
              wis: _checkForValue(tempCharacterObject, "spells.dc.level_6.bonuses.wis_bonus", false),
              cha: _checkForValue(tempCharacterObject, "spells.dc.level_6.bonuses.cha_bonus", false),
              level: _checkForValue(tempCharacterObject, "spells.dc.level_6.bonuses.level", false),
              half_level: _checkForValue(tempCharacterObject, "spells.dc.level_6.bonuses.half_level", false),
              spell_level: _checkForValue(tempCharacterObject, "spells.dc.level_6.bonuses.spell_level", false),
              plus_ten: _checkForValue(tempCharacterObject, "spells.dc.level_6.bonuses.plus_ten", false)
            }
          }
        },
        level_7: {
          per_day: _checkForValue(tempCharacterObject, "spells.per_day.level_7", ""),
          known: _checkForValue(tempCharacterObject, "spells.known.level_7", ""),
          bonus: _checkForValue(tempCharacterObject, "spells.bonus.level_7", ""),
          dc: {
            spell_level: 7,
            misc: _checkForValue(tempCharacterObject, "spells.dc.level_7.misc", ""),
            temp: _checkForValue(tempCharacterObject, "spells.dc.level_7.temp", ""),
            feat: _checkForValue(tempCharacterObject, "spells.dc.level_7.feat", ""),
            trait: _checkForValue(tempCharacterObject, "spells.dc.level_7.trait", ""),
            current: "",
            bonuses: {
              str: _checkForValue(tempCharacterObject, "spells.dc.level_7.bonuses.str_bonus", false),
              dex: _checkForValue(tempCharacterObject, "spells.dc.level_7.bonuses.dex_bonus", false),
              con: _checkForValue(tempCharacterObject, "spells.dc.level_7.bonuses.con_bonus", false),
              int: _checkForValue(tempCharacterObject, "spells.dc.level_7.bonuses.int_bonus", false),
              wis: _checkForValue(tempCharacterObject, "spells.dc.level_7.bonuses.wis_bonus", false),
              cha: _checkForValue(tempCharacterObject, "spells.dc.level_7.bonuses.cha_bonus", false),
              level: _checkForValue(tempCharacterObject, "spells.dc.level_7.bonuses.level", false),
              half_level: _checkForValue(tempCharacterObject, "spells.dc.level_7.bonuses.half_level", false),
              spell_level: _checkForValue(tempCharacterObject, "spells.dc.level_7.bonuses.spell_level", false),
              plus_ten: _checkForValue(tempCharacterObject, "spells.dc.level_7.bonuses.plus_ten", false)
            }
          }
        },
        level_8: {
          per_day: _checkForValue(tempCharacterObject, "spells.per_day.level_8", ""),
          known: _checkForValue(tempCharacterObject, "spells.known.level_8", ""),
          bonus: _checkForValue(tempCharacterObject, "spells.bonus.level_8", ""),
          dc: {
            spell_level: 8,
            misc: _checkForValue(tempCharacterObject, "spells.dc.level_8.misc", ""),
            temp: _checkForValue(tempCharacterObject, "spells.dc.level_8.temp", ""),
            feat: _checkForValue(tempCharacterObject, "spells.dc.level_8.feat", ""),
            trait: _checkForValue(tempCharacterObject, "spells.dc.level_8.trait", ""),
            current: "",
            bonuses: {
              str: _checkForValue(tempCharacterObject, "spells.dc.level_8.bonuses.str_bonus", false),
              dex: _checkForValue(tempCharacterObject, "spells.dc.level_8.bonuses.dex_bonus", false),
              con: _checkForValue(tempCharacterObject, "spells.dc.level_8.bonuses.con_bonus", false),
              int: _checkForValue(tempCharacterObject, "spells.dc.level_8.bonuses.int_bonus", false),
              wis: _checkForValue(tempCharacterObject, "spells.dc.level_8.bonuses.wis_bonus", false),
              cha: _checkForValue(tempCharacterObject, "spells.dc.level_8.bonuses.cha_bonus", false),
              level: _checkForValue(tempCharacterObject, "spells.dc.level_8.bonuses.level", false),
              half_level: _checkForValue(tempCharacterObject, "spells.dc.level_8.bonuses.half_level", false),
              spell_level: _checkForValue(tempCharacterObject, "spells.dc.level_8.bonuses.spell_level", false),
              plus_ten: _checkForValue(tempCharacterObject, "spells.dc.level_8.bonuses.plus_ten", false)
            }
          }
        },
        level_9: {
          per_day: _checkForValue(tempCharacterObject, "spells.per_day.level_9", ""),
          known: _checkForValue(tempCharacterObject, "spells.known.level_9", ""),
          bonus: _checkForValue(tempCharacterObject, "spells.bonus.level_9", ""),
          dc: {
            spell_level: 9,
            misc: _checkForValue(tempCharacterObject, "spells.dc.level_9.misc", ""),
            temp: _checkForValue(tempCharacterObject, "spells.dc.level_9.temp", ""),
            feat: _checkForValue(tempCharacterObject, "spells.dc.level_9.feat", ""),
            trait: _checkForValue(tempCharacterObject, "spells.dc.level_9.trait", ""),
            current: "",
            bonuses: {
              str: _checkForValue(tempCharacterObject, "spells.dc.level_9.bonuses.str_bonus", false),
              dex: _checkForValue(tempCharacterObject, "spells.dc.level_9.bonuses.dex_bonus", false),
              con: _checkForValue(tempCharacterObject, "spells.dc.level_9.bonuses.con_bonus", false),
              int: _checkForValue(tempCharacterObject, "spells.dc.level_9.bonuses.int_bonus", false),
              wis: _checkForValue(tempCharacterObject, "spells.dc.level_9.bonuses.wis_bonus", false),
              cha: _checkForValue(tempCharacterObject, "spells.dc.level_9.bonuses.cha_bonus", false),
              level: _checkForValue(tempCharacterObject, "spells.dc.level_9.bonuses.level", false),
              half_level: _checkForValue(tempCharacterObject, "spells.dc.level_9.bonuses.half_level", false),
              spell_level: _checkForValue(tempCharacterObject, "spells.dc.level_9.bonuses.spell_level", false),
              plus_ten: _checkForValue(tempCharacterObject, "spells.dc.level_9.bonuses.plus_ten", false)
            }
          }
        }
      }
    };
    if (tempCharacterObject.spells.book[0] && tempCharacterObject.spells.book[0].level_0) {
      characterObject.spells.book.level_0.all = tempCharacterObject.spells.book[0].level_0;
    } else {
      characterObject.spells.book.level_0.all = [];
    };
    if (tempCharacterObject.spells.book[1] && tempCharacterObject.spells.book[1].level_1) {
      characterObject.spells.book.level_1.all = tempCharacterObject.spells.book[1].level_1;
    } else {
      characterObject.spells.book.level_1.all = [];
    };
    if (tempCharacterObject.spells.book[2] && tempCharacterObject.spells.book[2].level_2) {
      characterObject.spells.book.level_2.all = tempCharacterObject.spells.book[2].level_2;
    } else {
      characterObject.spells.book.level_2.all = [];
    };
    if (tempCharacterObject.spells.book[3] && tempCharacterObject.spells.book[3].level_3) {
      characterObject.spells.book.level_3.all = tempCharacterObject.spells.book[3].level_3;
    } else {
      characterObject.spells.book.level_3.all = [];
    };
    if (tempCharacterObject.spells.book[4] && tempCharacterObject.spells.book[4].level_4) {
      characterObject.spells.book.level_4.all = tempCharacterObject.spells.book[4].level_4;
    } else {
      characterObject.spells.book.level_4.all = [];
    };
    if (tempCharacterObject.spells.book[5] && tempCharacterObject.spells.book[5].level_5) {
      characterObject.spells.book.level_5.all = tempCharacterObject.spells.book[5].level_5;
    } else {
      characterObject.spells.book.level_5.all = [];
    };
    if (tempCharacterObject.spells.book[6] && tempCharacterObject.spells.book[6].level_6) {
      characterObject.spells.book.level_6.all = tempCharacterObject.spells.book[6].level_6;
    } else {
      characterObject.spells.book.level_6.all = [];
    };
    if (tempCharacterObject.spells.book[7] && tempCharacterObject.spells.book[7].level_7) {
      characterObject.spells.book.level_7.all = tempCharacterObject.spells.book[7].level_7;
    } else {
      characterObject.spells.book.level_7.all = [];
    };
    if (tempCharacterObject.spells.book[8] && tempCharacterObject.spells.book[8].level_8) {
      characterObject.spells.book.level_8.all = tempCharacterObject.spells.book[8].level_8;
    } else {
      characterObject.spells.book.level_8.all = [];
    };
    if (tempCharacterObject.spells.book[9] && tempCharacterObject.spells.book[9].level_9) {
      characterObject.spells.book.level_9.all = tempCharacterObject.spells.book[9].level_9;
    } else {
      characterObject.spells.book.level_9.all = [];
    };
    // events
    _report._500.push("update: events");
    characterObject.events = {
      all: _checkForValue(tempCharacterObject, "events", [])
    };
    // notes
    _report._500.push("update: spells");
    characterObject.notes = {
      character: {
        all: _checkForValue(tempCharacterObject, "notes.character", [])
      },
      story: {
        all: _checkForValue(tempCharacterObject, "notes.story", [])
      }
    };
    // demo
    _report._500.push("update: demo");
    if (tempCharacterObject.demo) {
      characterObject.awesomeSheet.demo = true;
      delete characterObject.demo;
    };
    return characterObject;
  };

  function _update_510(characterObject) {
    _report._510 = [];
    // awesome
    _report._510.push("update: awesome version");
    characterObject.awesomeSheet.version = 5.1;
    // abilities
    if (!("feats" in characterObject.statistics) || !("traits" in characterObject.statistics) || !("languages" in characterObject.statistics)) {
      _report._510.push("update: feats");
      var oldFeats = characterObject.statistics.abilities.feats;
      var oldTraits = characterObject.statistics.abilities.traits;
      var oldLanguages = characterObject.statistics.abilities.languages;
      var oldAbilities = characterObject.statistics.abilities.special;
      characterObject.statistics.feats = {
        all: [],
        notes: oldFeats
      };
      _report._510.push("update: traits");
      characterObject.statistics.traits = {
        all: [],
        notes: oldTraits
      };
      _report._510.push("update: languages");
      characterObject.statistics.languages = {
        all: [],
        notes: oldLanguages
      };
      _report._510.push("update: abilities");
      characterObject.statistics.abilities = {
        all: [],
        notes: oldAbilities
      };
    };
    return characterObject;
  };

  function _update_520(characterObject) {
    _report._520 = [];
    // awesome
    _report._520.push("update: awesome version");
    characterObject.awesomeSheet.version = 5.2;
    // classes
    if (!("string" in characterObject.basics.classes)) {
      _report._520.push("update: classes");
      var classAndLevel = "";
      var classes = characterObject.basics.classes.all;
      if (classes.length > 0) {
        classes.forEach(function(arrayItem, index) {
          var classname = arrayItem.classname || "No class";
          var level = arrayItem.level || "No level";
          classAndLevel = classAndLevel + classname + " " + level;
          if (index < (classes.length - 1)) {
            classAndLevel = classAndLevel + " / ";
          };
        });
      };
      characterObject.basics.classes.string = classAndLevel;
    };
    // consumable
    if (characterObject.equipment.consumable.all.length > 0) {
      _report._520.push("update: consumable name");
      characterObject.equipment.consumable.all.forEach(function(arrayItem) {
        arrayItem.name = arrayItem.item;
        delete arrayItem.item;
      });
    };
    // bab
    if ("base_attack_bonuses" in characterObject.offense.stats) {
      _report._520.push("update: bab");
      characterObject.offense.stats.base_attack = {
        bonus: "",
        string: ""
      };
      delete characterObject.offense.stats.base_attack_bonuses;
    };
    return characterObject;
  };

  function _update_540(characterObject) {
    _report._540 = [];
    // awesome
    _report._540.push("update: awesome version");
    characterObject.awesomeSheet.version = 5.4;
    // experience
    _report._540.push("update: experience level");
    characterObject.basics.experience.level = {
      current: "",
      class_total: ""
    };
    return characterObject;
  };

  function _update_550(characterObject) {
    _report._550 = [];
    // awesome
    _report._550.push("update: awesome version");
    characterObject.awesomeSheet.version = 5.5;
    // senses
    _report._550.push("update: senses");
    characterObject.basics.senses = {
      racial: "",
      magical: ""
    };
    _report._550.push("update: skill notes");
    characterObject.skills.stats = {
      notes: ""
    };
    _report._550.push("update: favoured hp and ranks");
    if (characterObject.basics.classes.all.length > 0) {
      characterObject.basics.classes.all.forEach(function(arrayItem) {
        var oldHp = arrayItem.hp;
        var oldRanks = arrayItem.ranks;
        var oldFortitude = arrayItem.fortitude;
        var oldReflex = arrayItem.reflex;
        var oldWill = arrayItem.will;
        arrayItem.name = arrayItem.classname;
        arrayItem.hp = {
          base: oldHp,
          favoured: "",
          current: ""
        };
        arrayItem.ranks = {
          base: oldRanks,
          favoured: "",
          current: ""
        };
        arrayItem.saves = {
          fortitude: oldFortitude,
          reflex: oldReflex,
          will: oldWill
        };
        delete arrayItem.classname;
        delete arrayItem.fortitude;
        delete arrayItem.reflex;
        delete arrayItem.will;
      });
    };
    return characterObject;
  };

  function _update_560(characterObject) {
    _report._560 = [];
    // awesome
    _report._560.push("update: awesome version");
    characterObject.awesomeSheet.version = 5.6;
    _report._560.push("update: attacks");
    if (characterObject.offense.attack.melee.all.length > 0) {
      characterObject.offense.attack.melee.all.forEach(function(arrayItem) {
        if (!("equipped" in arrayItem)) {
          arrayItem.equipped = false;
        };
      });
    };
    if (characterObject.offense.attack.ranged.all.length > 0) {
      characterObject.offense.attack.ranged.all.forEach(function(arrayItem) {
        if (!("equipped" in arrayItem)) {
          arrayItem.equipped = false;
        };
      });
    };
    return characterObject;
  };

  function _update_570(characterObject) {
    _report._570 = [];
    // awesome
    _report._570.push("update: awesome version");
    characterObject.awesomeSheet.version = 5.7;
    _report._570.push("update: items");
    if (characterObject.equipment.item.all.length > 0) {
      characterObject.equipment.item.all.forEach(function(arrayItem) {
        if (!("include" in arrayItem)) {
          arrayItem.include = true;
        };
      });
    };
    return characterObject;
  };

  function _update_580(characterObject) {
    _report._580 = [];
    // awesome
    _report._580.push("update: awesome version");
    characterObject.awesomeSheet.version = 5.8;
    _report._580.push("update: trained skills");
    characterObject.skills.default.acrobatics.trained = false;
    characterObject.skills.default.appraise.trained = false;
    characterObject.skills.default.bluff.trained = false;
    characterObject.skills.default.climb.trained = false;
    characterObject.skills.default.craft_1.trained = false;
    characterObject.skills.default.craft_2.trained = false;
    characterObject.skills.default.diplomacy.trained = false;
    characterObject.skills.default.disable_device.trained = true;
    characterObject.skills.default.disguise.trained = false;
    characterObject.skills.default.escape_artist.trained = false;
    characterObject.skills.default.fly.trained = false;
    characterObject.skills.default.handle_animal.trained = true;
    characterObject.skills.default.heal.trained = false;
    characterObject.skills.default.intimidate.trained = false;
    characterObject.skills.default.knowledge_arcana.trained = true;
    characterObject.skills.default.knowledge_dungeoneering.trained = true;
    characterObject.skills.default.knowledge_engineering.trained = true;
    characterObject.skills.default.knowledge_geography.trained = true;
    characterObject.skills.default.knowledge_history.trained = true;
    characterObject.skills.default.knowledge_local.trained = true;
    characterObject.skills.default.knowledge_nature.trained = true;
    characterObject.skills.default.knowledge_nobility.trained = true;
    characterObject.skills.default.knowledge_planes.trained = true;
    characterObject.skills.default.knowledge_religion.trained = true;
    characterObject.skills.default.linguistics.trained = true;
    characterObject.skills.default.perception.trained = false;
    characterObject.skills.default.perform_1.trained = false;
    characterObject.skills.default.perform_2.trained = false;
    characterObject.skills.default.profession_1.trained = true;
    characterObject.skills.default.profession_2.trained = true;
    characterObject.skills.default.ride.trained = false;
    characterObject.skills.default.sense_motive.trained = false;
    characterObject.skills.default.sleight_of_hand.trained = true;
    characterObject.skills.default.spellcraft.trained = true;
    characterObject.skills.default.stealth.trained = false;
    characterObject.skills.default.survival.trained = false;
    characterObject.skills.default.swim.trained = false;
    characterObject.skills.default.use_magic_device.trained = true;
    return characterObject;
  };

  function _update_590(characterObject) {
    _report._590 = [];
    // awesome
    _report._590.push("update: awesome version");
    characterObject.awesomeSheet.version = 5.9;
    // cmd
    _report._590.push("update: cmd");
    characterObject.defense.cmd.bonuses.dodge = true;
    characterObject.defense.cmd.bonuses.deflect = true;
    // ac
    _report._590.push("update: ac");
    characterObject.defense.ac.armor_class.bonuses.ac_temp = true;
    characterObject.defense.ac.armor_class.bonuses.ac_misc = true;
    characterObject.defense.ac.armor_class.bonuses.ac_enhancement = true;
    characterObject.defense.ac.armor_class.bonuses.ac_insight = true;
    characterObject.defense.ac.armor_class.bonuses.ac_luck = true;
    characterObject.defense.ac.armor_class.bonuses.ac_profane = true;
    characterObject.defense.ac.armor_class.bonuses.ac_sacred = true;
    characterObject.defense.ac.armor_class.bonuses.ac_trait = true;
    // flat footed ac
    _report._590.push("update: flat footed ac");
    characterObject.defense.ac.flat_footed.bonuses.ac_temp = true;
    characterObject.defense.ac.flat_footed.bonuses.ac_misc = true;
    characterObject.defense.ac.flat_footed.bonuses.ac_enhancement = true;
    characterObject.defense.ac.flat_footed.bonuses.ac_insight = true;
    characterObject.defense.ac.flat_footed.bonuses.ac_luck = true;
    characterObject.defense.ac.flat_footed.bonuses.ac_profane = true;
    characterObject.defense.ac.flat_footed.bonuses.ac_sacred = true;
    characterObject.defense.ac.flat_footed.bonuses.ac_trait = true;
    // touch ac
    _report._590.push("update: touch ac");
    characterObject.defense.ac.touch.bonuses.ac_temp = true;
    characterObject.defense.ac.touch.bonuses.ac_misc = true;
    characterObject.defense.ac.touch.bonuses.ac_insight = true;
    characterObject.defense.ac.touch.bonuses.ac_luck = true;
    characterObject.defense.ac.touch.bonuses.ac_profane = true;
    characterObject.defense.ac.touch.bonuses.ac_sacred = true;
    characterObject.defense.ac.touch.bonuses.ac_trait = true;
    // ac stats
    _report._590.push("update: ac stats");
    characterObject.defense.ac.stats.temp = "";
    characterObject.defense.ac.stats.misc = "";
    characterObject.defense.ac.stats.enhancement = "";
    characterObject.defense.ac.stats.insight = "";
    characterObject.defense.ac.stats.luck = "";
    characterObject.defense.ac.stats.profane = "";
    characterObject.defense.ac.stats.sacred = "";
    characterObject.defense.ac.stats.trait = "";
    // armor
    _report._590.push("update: armor");
    var oldArmor = characterObject.equipment.armor.armor;
    var oldMaxDex = characterObject.equipment.armor.max_dex;
    var oldCheckPenalty = characterObject.equipment.armor.check_penalty;
    var oldShield = characterObject.equipment.armor.shield;
    characterObject.equipment.armor = {
      armor: {
        name: oldArmor,
        check_penalty: oldCheckPenalty,
        max_dex: oldMaxDex,
        weight: "",
        arcane_spell_failure: "",
        notes: ""
      },
      shield: {
        name: oldShield,
        check_penalty: "",
        max_dex: "",
        weight: "",
        arcane_spell_failure: "",
        notes: ""
      },
      stats: {
        check_penalty: {
          current: ""
        },
        max_dex: {
          current: ""
        },
        arcane_spell_failure: {
          current: ""
        }
      }
    };
    return characterObject;
  };

  function _update_591(characterObject) {
    _report._591 = [];
    // awesome
    _report._591.push("update: awesome version");
    characterObject.awesomeSheet.version = 5.91;
    // cmd
    _report._591.push("update: vials");
    characterObject.equipment.possessions.potion_vials_oils = characterObject.equipment.possessions.potion_viles_oils;
    delete characterObject.equipment.possessions.potion_viles_oils;
    return characterObject;
  }

  function _repair(characterObject) {
    // if version is found
    if (typeof characterObject.awesomeSheet == "object" && "version" in characterObject.awesomeSheet) {
      _report = {};
      if ("character" in characterObject.basics) {
        console.log("# name " + characterObject.basics.character.name);
      } else if ("name" in characterObject.basics) {
        console.log("# name " + characterObject.basics.name);
      } else {
        console.log("# name unknown");
      };
      console.log("\t# sheet version found:", characterObject.awesomeSheet.version);
      // if version number is below current version
      if (characterObject.awesomeSheet.version < update.version()) {
        if (characterObject.awesomeSheet.version < 5) {
          console.log("\t# running update", 5);
          characterObject = _update_500(characterObject);
        };
        if (characterObject.awesomeSheet.version < 5.1) {
          console.log("\t# running update", 5.1);
          characterObject = _update_510(characterObject);
        };
        if (characterObject.awesomeSheet.version < 5.2) {
          console.log("\t# running update", 5.2);
          characterObject = _update_520(characterObject);
        };
        if (characterObject.awesomeSheet.version < 5.4) {
          console.log("\t# running update", 5.4);
          characterObject = _update_540(characterObject);
        };
        if (characterObject.awesomeSheet.version < 5.5) {
          console.log("\t# running update", 5.5);
          characterObject = _update_550(characterObject);
        };
        if (characterObject.awesomeSheet.version < 5.6) {
          console.log("\t# running update", 5.6);
          characterObject = _update_560(characterObject);
        };
        if (characterObject.awesomeSheet.version < 5.7) {
          console.log("\t# running update", 5.7);
          characterObject = _update_570(characterObject);
        };
        if (characterObject.awesomeSheet.version < 5.8) {
          console.log("\t# running update", 5.8);
          characterObject = _update_580(characterObject);
        };
        if (characterObject.awesomeSheet.version < 5.9) {
          console.log("\t# running update", 5.9);
          characterObject = _update_590(characterObject);
        };
        if (characterObject.awesomeSheet.version < 5.91) {
          console.log("\t# running update", 5.91);
          characterObject = _update_591(characterObject);
        };
        console.log("\t# report:",  _report);
      } else {
        console.log("\t# no need to update");
      };
    } else {
      _report = {};
      if ("name" in characterObject.basics) {
        console.log("# name " + characterObject.basics.name);
      } else {
        console.log("# name unknown");
      };
      console.log("\t# sheet version not found => running legacy repair");
      // if no version is found
      if (typeof characterObject.awesomeSheet == "boolean") {
        characterObject = _update_legacy(characterObject);
        console.log("\t# report:",  _report);
        // then run normal repairs
        _repair(characterObject);
      };
    };
    return characterObject;
  };

  function render(options) {
    var defaultOptions = {
      debug: false,
      object: null
    };
    if (options) {
      defaultOptions = helper.applyOptions(defaultOptions, options);
    };
    _debug = defaultOptions.debug;
    if (defaultOptions.object != null) {
      defaultOptions.object = _repair(defaultOptions.object);
    };
    return defaultOptions.object;
  };

  // exposed methods
  return {
    render: render
  };

})();
