var repair = (function() {

  function _repair(characterObject) {
    console.log("-- Repair update fired >>", characterObject.basics.name);
    // --------------------------------------------------
    // repair spell notes
    if (characterObject.spells.book) {
      for (var i in characterObject.spells.book) {
        for (var j in characterObject.spells.book[i]) {
          if (characterObject.spells.book[i][j].length > 0) {
            for (var k in characterObject.spells.book[i][j]) {
              if (!("note" in characterObject.spells.book[i][j][k]) && typeof characterObject.spells.book[i][j][k].note != "string") {
                // console.log("\trepair spell notes");
                // console.log("\tspell notes not found");
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
      // console.log("\trepair item array");
      characterObject.equipment.item = [];
    };
    // --------------------------------------------------
    // repair note array
    if (typeof characterObject.notes.character == "string" || typeof characterObject.notes.story == "string") {
      // console.log("\trepair note array");
      characterObject.notes.character = [];
      characterObject.notes.story = [];
    };
    // --------------------------------------------------
    // repair custom skills array
    if (typeof characterObject.skills.custom == "string" || !characterObject.skills.custom) {
      // console.log("\trepair custom skills array");
      characterObject.skills.custom = [];
    };
    // --------------------------------------------------
    // repair custom skills
    if ("custom_1" in characterObject.skills || "custom_2" in characterObject.skills || "custom_3" in characterObject.skills || "custom_4" in characterObject.skills || "custom_5" in characterObject.skills || "custom_6" in characterObject.skills || "custom_7" in characterObject.skills || "custom_8" in characterObject.skills) {
      // console.log("\trepair custom skills");
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
      // console.log("\trepair concentration bonus object");
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
      // console.log("\trepair initiative object");
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
      // console.log("\trepair size object");
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
    if (["Lawful Good", "Lawful Neutral", "Lawful Evil", "Neutral Good", "Neutral", "Neutral Evil", "Chaotic Good", "Chaotic Neutral", "Chaotic Evil"].indexOf(characterObject.basics.alignment) === -1) {
      // console.log("\trepair alignment");
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
      // console.log("\trepair armor");
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
    function ifRacial(key, object) {
      if (key in object) {
        if (object.racial != "" && !isNaN(object.racial)) {
          if (object.misc != "" && !isNaN(object.misc)) {
            // console.log("\trepair racial save bonuses");
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
      // console.log("\trepair classes");
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
      // console.log("\trepair caster level check");
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
      // console.log("\trepair encumbrance");
      delete characterObject.equipment.encumbrance.light;
      delete characterObject.equipment.encumbrance.medium;
      delete characterObject.equipment.encumbrance.heavy;
      delete characterObject.equipment.encumbrance.lift;
      delete characterObject.equipment.encumbrance.drag;
    };
    // --------------------------------------------------
    // repair xp
    if (typeof characterObject.basics.xp == "string" && !characterObject.basics.xp == "") {
      // console.log("\trepair xp");
      characterObject.basics.xp = parseInt(characterObject.basics.xp.replace(/,/g, ""), 10);
    };
    // --------------------------------------------------
    // repair wealth
    if (typeof characterObject.equipment.wealth.platinum == "string" && !characterObject.equipment.wealth.platinum == "") {
      // console.log("\trepair wealth platinum");
      characterObject.equipment.wealth.platinum = parseInt(characterObject.equipment.wealth.platinum.replace(/,/g, ""), 10);
    };
    if (typeof characterObject.equipment.wealth.gold == "string" && !characterObject.equipment.wealth.gold == "") {
      // console.log("\trepair wealth gold");
      characterObject.equipment.wealth.gold = parseInt(characterObject.equipment.wealth.gold.replace(/,/g, ""), 10);
    };
    if (typeof characterObject.equipment.wealth.silver == "string" && !characterObject.equipment.wealth.silver == "") {
      // console.log("\trepair wealth silver");
      characterObject.equipment.wealth.silver = parseInt(characterObject.equipment.wealth.silver.replace(/,/g, ""), 10);
    };
    if (typeof characterObject.equipment.wealth.copper == "string" && !characterObject.equipment.wealth.copper == "") {
      // console.log("\trepair wealth copper");
      characterObject.equipment.wealth.copper = parseInt(characterObject.equipment.wealth.copper.replace(/,/g, ""), 10);
    };
    // --------------------------------------------------
    // repair events array
    if (!characterObject.hasOwnProperty("events")) {
      // console.log("\trepair events array");
      characterObject.events = [];
    };
    // --------------------------------------------------
    // repair xp and next level
    if (typeof characterObject.basics.xp == "string" || typeof characterObject.basics.xp == "number") {
      // console.log("\trepair xp and next level");
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
      // console.log("\trepair speed");
      var oldSpeed = characterObject.basics.speed;
      characterObject.basics.speed = {};
      characterObject.basics.speed.land = oldSpeed;
    };
    // --------------------------------------------------
    // repair character image
    if (!characterObject.basics.character_image) {
      // console.log("\trepair character image");
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
          // console.log("\trepair attack types melee");
          characterObject.offense.attack.melee[i].type = "";
        };
      };
    };
    if (characterObject.offense.attack.ranged.length > 0) {
      for (var i = 0; i < characterObject.offense.attack.ranged.length; i++) {
        if (!characterObject.offense.attack.ranged[i].type && characterObject.offense.attack.ranged[i].type != "") {
          // console.log("\trepair attack types ranged");
          characterObject.offense.attack.ranged[i].type = "";
        };
      };
    };
    // --------------------------------------------------
    // repair stats
    if (!characterObject.statistics.stats.str.enhancement && characterObject.statistics.stats.str.enhancement != "" || !characterObject.statistics.stats.dex.enhancement && characterObject.statistics.stats.dex.enhancement != "" || !characterObject.statistics.stats.con.enhancement && characterObject.statistics.stats.con.enhancement != "" || !characterObject.statistics.stats.int.enhancement && characterObject.statistics.stats.int.enhancement != "" || !characterObject.statistics.stats.wis.enhancement && characterObject.statistics.stats.wis.enhancement != "" || !characterObject.statistics.stats.cha.enhancement && characterObject.statistics.stats.cha.enhancement != "") {
      // console.log("\trepair stats");
      for (var key in characterObject.statistics.stats) {
        var score = parseInt(characterObject.statistics.stats[key].score, 10);
        var tempScore = parseInt(characterObject.statistics.stats[key].temp_score, 10);
        // console.log("\t\t" + key, "new score = ", score, "\ttempScore = ", tempScore);
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
            // console.log("\trepair events");
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
      // console.log("\trepair character image cover and contain");
      delete characterObject.basics.character_image.cover;
      delete characterObject.basics.character_image.contain;
    };
    // --------------------------------------------------
    // repair character image size
    if (!characterObject.basics.character_image.size) {
      // console.log("\trepair character image size");
      characterObject.basics.character_image.size = {
        width: "",
        height: ""
      };
    };
    // --------------------------------------------------
    // repair character image uploaded
    if (!("uploaded" in characterObject.basics.character_image)) {
      // console.log("repair character image uploaded");
      if (characterObject.equipment.potion_viles_oils != "") {
          characterObject.basics.character_image.uploaded = true;
      } else {
        characterObject.basics.character_image.uploaded = false;
      };
    };
    // --------------------------------------------------
    // repair equipment
    if (!characterObject.equipment.potion_viles_oils && characterObject.equipment.potion_viles_oils != "") {
      // console.log("\trepair equipment");
      characterObject.equipment.potion_viles_oils = "";
    };
    if (!characterObject.equipment.scrolls && characterObject.equipment.scrolls != "") {
      characterObject.equipment.scrolls = "";
    };
    // --------------------------------------------------
    // repair skills
    // if (!characterObject.skills.acrobatics.feat || !characterObject.skills.acrobatics.racial || !characterObject.skills.acrobatics.trait) {
      console.log("\trepair skills");

      characterObject.skills.all = {};
      characterObject.skills.all.acrobatics = characterObject.skills.acrobatics;
      characterObject.skills.all.appraise = characterObject.skills.appraise;
      characterObject.skills.all.bluff = characterObject.skills.bluff;
      characterObject.skills.all.climb = characterObject.skills.climb;
      characterObject.skills.all.craft_1 = characterObject.skills.craft_1;
      characterObject.skills.all.craft_2 = characterObject.skills.craft_2;
      characterObject.skills.all.diplomacy = characterObject.skills.diplomacy;
      characterObject.skills.all.disable_device = characterObject.skills.disable_device;
      characterObject.skills.all.disguise = characterObject.skills.disguise;
      characterObject.skills.all.escape_artist = characterObject.skills.escape_artist;
      characterObject.skills.all.fly = characterObject.skills.fly;
      characterObject.skills.all.handle_animal = characterObject.skills.handle_animal;
      characterObject.skills.all.heal = characterObject.skills.heal;
      characterObject.skills.all.intimidate = characterObject.skills.intimidate;
      characterObject.skills.all.knowledge_arcana = characterObject.skills.knowledge_arcana;
      characterObject.skills.all.knowledge_dungeoneering = characterObject.skills.knowledge_dungeoneering;
      characterObject.skills.all.knowledge_engineering = characterObject.skills.knowledge_engineering;
      characterObject.skills.all.knowledge_geography = characterObject.skills.knowledge_geography;
      characterObject.skills.all.knowledge_history = characterObject.skills.knowledge_history;
      characterObject.skills.all.knowledge_local = characterObject.skills.knowledge_local;
      characterObject.skills.all.knowledge_nature = characterObject.skills.knowledge_nature;
      characterObject.skills.all.knowledge_nobility = characterObject.skills.knowledge_nobility;
      characterObject.skills.all.knowledge_planes = characterObject.skills.knowledge_planes;
      characterObject.skills.all.knowledge_religion = characterObject.skills.knowledge_religion;
      characterObject.skills.all.linguistics = characterObject.skills.linguistics;
      characterObject.skills.all.perception = characterObject.skills.perception;
      characterObject.skills.all.perform_1 = characterObject.skills.perform_1;
      characterObject.skills.all.perform_2 = characterObject.skills.perform_2;
      characterObject.skills.all.profession_1 = characterObject.skills.profession_1;
      characterObject.skills.all.profession_2 = characterObject.skills.profession_2;
      characterObject.skills.all.ride = characterObject.skills.ride;
      characterObject.skills.all.sense_motive = characterObject.skills.sense_motive;
      characterObject.skills.all.sleight_of_hand = characterObject.skills.sleight_of_hand;
      characterObject.skills.all.spellcraft = characterObject.skills.spellcraft;
      characterObject.skills.all.stealth = characterObject.skills.stealth;
      characterObject.skills.all.survival = characterObject.skills.survival;
      characterObject.skills.all.swim = characterObject.skills.swim;
      characterObject.skills.all.use_magic_device = characterObject.skills.use_magic_device;

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

      console.log(characterObject.skills);

      // for (var i = 0; i < characterObject.skills.length; i++) {
      //   console.log(characterObject.skills[i]);
      // };
    // };
    // --------------------------------------------------
    sheet.storeCharacters();
    return characterObject;
  };

  function render() {
    var allCharacters = sheet.getAllCharacters();
    for (var i = 0; i < allCharacters.length; i++) {
      _repair(allCharacters[i]);
    };
  };

  // exposed methods
  return {
    render: render
  };

})();
