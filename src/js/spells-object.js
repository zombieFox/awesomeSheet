var spellsObject = (function() {

  var _all_spellsObject = null;

  function load() {
    var _cleanUpSpellObject = function(arrayItem) {
      // school
      var tempSchool = {};
      tempSchool.base = arrayItem.school;
      tempSchool.subschool = arrayItem.subschool;
      // add
      arrayItem.school = tempSchool;
      // remove
      delete arrayItem.subschool;

      // descriptors
      var tempDescriptor = {};
      tempDescriptor.acid = arrayItem.acid;
      tempDescriptor.air = arrayItem.air;
      tempDescriptor.chaotic = arrayItem.chaotic;
      tempDescriptor.cold = arrayItem.cold;
      tempDescriptor.curse = arrayItem.curse;
      tempDescriptor.darkness = arrayItem.darkness;
      tempDescriptor.death = arrayItem.death;
      tempDescriptor.disease = arrayItem.disease;
      tempDescriptor.earth = arrayItem.earth;
      tempDescriptor.electricity = arrayItem.electricity;
      tempDescriptor.emotion = arrayItem.emotion;
      tempDescriptor.evil = arrayItem.evil;
      tempDescriptor.fear = arrayItem.fear;
      tempDescriptor.fire = arrayItem.fire;
      tempDescriptor.force = arrayItem.force;
      tempDescriptor.good = arrayItem.good;
      tempDescriptor.language_dependent = arrayItem.language_dependent;
      tempDescriptor.lawful = arrayItem.lawful;
      tempDescriptor.light = arrayItem.light;
      tempDescriptor.mind_affecting = arrayItem.mind_affecting;
      tempDescriptor.pain = arrayItem.pain;
      tempDescriptor.poison = arrayItem.poison;
      tempDescriptor.shadow = arrayItem.shadow;
      tempDescriptor.sonic = arrayItem.sonic;
      tempDescriptor.water = arrayItem.water;
      tempDescriptor.ruse = arrayItem.ruse;
      tempDescriptor.meditative = arrayItem.meditative;
      for (var key in tempDescriptor) {
        if (tempDescriptor[key] == "1") {
          tempDescriptor[key] = true;
        } else {
          tempDescriptor[key] = false;
        };
      };
      tempDescriptor.string = arrayItem.descriptor;
      // add
      arrayItem.descriptor = tempDescriptor;
      // remove
      delete arrayItem.acid;
      delete arrayItem.air;
      delete arrayItem.chaotic;
      delete arrayItem.cold;
      delete arrayItem.curse;
      delete arrayItem.darkness;
      delete arrayItem.death;
      delete arrayItem.disease;
      delete arrayItem.earth;
      delete arrayItem.electricity;
      delete arrayItem.emotion;
      delete arrayItem.evil;
      delete arrayItem.fear;
      delete arrayItem.fire;
      delete arrayItem.force;
      delete arrayItem.good;
      delete arrayItem.language_dependent;
      delete arrayItem.lawful;
      delete arrayItem.light;
      delete arrayItem.mind_affecting;
      delete arrayItem.pain;
      delete arrayItem.poison;
      delete arrayItem.shadow;
      delete arrayItem.sonic;
      delete arrayItem.water;
      delete arrayItem.ruse;
      delete arrayItem.meditative;

      // description
      var tempDescription = {};
      tempDescription.effect = arrayItem.effect;
      tempDescription.short = arrayItem.short_description;
      tempDescription.plain = arrayItem.description;
      tempDescription.formated = arrayItem.description_formated;
      // add
      arrayItem.description = tempDescription;
      // remove
      delete arrayItem.effect;
      delete arrayItem.description_formated;
      delete arrayItem.short_description;

      // mythic
      var tempMythic = {};
      if (arrayItem.mythic == "1") {
        tempMythic.mythic = true;
      } else {
        tempMythic.mythic = false;
      };
      tempMythic.text = arrayItem.mythic_text;
      tempMythic.augmented = arrayItem.augmented;
      // add
      arrayItem.mythic = tempMythic;
      // remove
      delete arrayItem.mythic_text;
      delete arrayItem.augmented;

      // level
      var tempLevel = {};
      tempLevel.sla = arrayItem.SLA_Level;
      tempLevel.sorcerer = arrayItem.sorcerer;
      tempLevel.wizard = arrayItem.wizard;
      tempLevel.cleric = arrayItem.cleric;
      tempLevel.druid = arrayItem.druid;
      tempLevel.ranger = arrayItem.ranger;
      tempLevel.bard = arrayItem.bard;
      tempLevel.paladin = arrayItem.paladin;
      tempLevel.alchemist = arrayItem.alchemist;
      tempLevel.summoner = arrayItem.summoner;
      tempLevel.witch = arrayItem.witch;
      tempLevel.inquisitor = arrayItem.inquisitor;
      tempLevel.oracle = arrayItem.oracle;
      tempLevel.antipaladin = arrayItem.antipaladin;
      tempLevel.magus = arrayItem.magus;
      tempLevel.adept = arrayItem.adept;
      tempLevel.bloodrager = arrayItem.bloodrager;
      tempLevel.shaman = arrayItem.shaman;
      tempLevel.psychic = arrayItem.psychic;
      tempLevel.medium = arrayItem.medium;
      tempLevel.mesmerist = arrayItem.mesmerist;
      tempLevel.occultist = arrayItem.occultist;
      tempLevel.spiritualist = arrayItem.spiritualist;
      tempLevel.skald = arrayItem.skald;
      tempLevel.investigator = arrayItem.investigator;
      tempLevel.hunter = arrayItem.hunter;
      for (var key in tempLevel) {
        if (!isNaN(parseInt(tempLevel[key], 10))) {
          tempLevel[key] = parseInt(tempLevel[key], 10);
        } else {
          tempLevel[key] = null;
        };
      };
      tempLevel.string = arrayItem.spell_level;
      // add
      arrayItem.level = tempLevel;
      // remove
      delete arrayItem.spell_level;
      delete arrayItem.SLA_Level;
      delete arrayItem.sorcerer;
      delete arrayItem.wizard;
      delete arrayItem.cleric;
      delete arrayItem.druid;
      delete arrayItem.ranger;
      delete arrayItem.bard;
      delete arrayItem.paladin;
      delete arrayItem.alchemist;
      delete arrayItem.summoner;
      delete arrayItem.witch;
      delete arrayItem.inquisitor;
      delete arrayItem.oracle;
      delete arrayItem.antipaladin;
      delete arrayItem.magus;
      delete arrayItem.adept;
      delete arrayItem.bloodrager;
      delete arrayItem.shaman;
      delete arrayItem.psychic;
      delete arrayItem.medium;
      delete arrayItem.mesmerist;
      delete arrayItem.occultist;
      delete arrayItem.spiritualist;
      delete arrayItem.skald;
      delete arrayItem.investigator;
      delete arrayItem.hunter;

      // components
      var tempComponents = {};
      tempComponents.verbal = arrayItem.verbal;
      tempComponents.somatic = arrayItem.somatic;
      tempComponents.material = arrayItem.material;
      tempComponents.focus = arrayItem.focus;
      tempComponents.divine_focus = arrayItem.divine_focus;
      tempComponents.costly = arrayItem.costly_components;
      for (var key in tempComponents) {
        if (tempComponents[key] == "1") {
          tempComponents[key] = true;
        } else {
          tempComponents[key] = false;
        };
      };
      if (arrayItem.material_costs != "NULL") {
        tempComponents.cost = parseInt(arrayItem.material_costs, 10);
      } else {
        tempComponents.cost = 0;
      };
      tempComponents.string = arrayItem.components;
      // add
      arrayItem.components = tempComponents
      // remove
      delete arrayItem.verbal;
      delete arrayItem.somatic;
      delete arrayItem.material;
      delete arrayItem.focus;
      delete arrayItem.divine_focus;
      delete arrayItem.costly_components;
      delete arrayItem.material_costs;

      // casting
      var tempCasting = {};
      if (arrayItem.dismissible == "1") {
        tempCasting.dismissible = true;
      } else {
        tempCasting.dismissible = false;
      };
      if (arrayItem.shapeable == "1") {
        tempCasting.shapeable = true;
      } else {
        tempCasting.shapeable = false;
      };
      tempCasting.saving = arrayItem.saving_throw;
      tempCasting.spell_resistence = arrayItem.spell_resistence;
      tempCasting.targets = arrayItem.targets;
      tempCasting.time = arrayItem.casting_time;
      tempCasting.range = arrayItem.range;
      tempCasting.area = arrayItem.area;
      tempCasting.duration = arrayItem.duration;
      // add
      arrayItem.casting = tempCasting
      // remove
      delete arrayItem.spell_resistence;
      delete arrayItem.targets;
      delete arrayItem.shapeable;
      delete arrayItem.dismissible;
      delete arrayItem.saving_throw;
      delete arrayItem.casting_time;
      delete arrayItem.range;
      delete arrayItem.area;
      delete arrayItem.duration;

      // groups
      var tempGroups = {};
      tempGroups.domain = arrayItem.domain;
      tempGroups.patron = arrayItem.patron;
      tempGroups.bloodline = arrayItem.bloodline;
      // add
      arrayItem.groups = tempGroups
      // remove
      delete arrayItem.domain;
      delete arrayItem.patron;
      delete arrayItem.bloodline;
    };
    var _get_allSpells = function(data) {
      _all_spellsObject = helper.csvToJSON(data);
      // clean up spell objects
      _all_spellsObject.forEach(function(arrayItem) {
        _cleanUpSpellObject(arrayItem);
      });
    };
    helper.loadCsv("../db/spells.csv", function(data) {
      _get_allSpells(data);
    });
  };

  function get(array) {
    var _findSpell = function() {
      var spells = [];
      array.forEach(function(arrayItem) {
       spells.push(_all_spellsObject[arrayItem.index]);
      });
      return spells;
    };
    if (_all_spellsObject == null) {
      snack.render({
        message: "Error, spell DB not found."
      });
    } else {
      return _findSpell();
    };
  };

  // exposed methods
  return {
    load: load,
    get: get
  };

})();
