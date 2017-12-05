var izlara = (function() {

  var data = {
    "awesomeSheet": true,
    "basics": {
      "name": "Morin Mightyspark",
      "race": "Dwarf",
      "class": "Cleric",
      "level": "7",
      "size": "M",
      "alignment": "NG",
      "xp": "",
      "height": "",
      "weight": "",
      "age": "40",
      "gender": "M",
      "speed": "20 feet",
      "initiative": "+2",
      "hero_points": "1",
      "luck_points": "0"
    },
    "statistics": {
      "stats": {
        "str": {
          "score": "13",
          "temp": "",
          "modifier": 1,
          "temp_modifier": "",
          "temp_score": ""
        },
        "dex": {
          "score": "14",
          "temp": "",
          "modifier": 2,
          "temp_modifier": "",
          "temp_score": ""
        },
        "con": {
          "score": "11",
          "temp": "",
          "modifier": 0,
          "temp_modifier": "",
          "temp_score": ""
        },
        "int": {
          "score": "15",
          "temp": "",
          "modifier": 2,
          "temp_modifier": "",
          "temp_score": ""
        },
        "wis": {
          "score": "18",
          "temp": "",
          "modifier": 4,
          "temp_modifier": "",
          "temp_score": ""
        },
        "cha": {
          "score": "11",
          "temp": "",
          "modifier": 0,
          "temp_modifier": "",
          "temp_score": ""
        }
      },
      "feats": "Extra Channel, Weapon Focus (Morningstar), Craft Wand, Scribe Scroll",
      "traits": "See Dwarven Traits",
      "languages": "Common, Dwarven",
      "special_abilities": "Aura, Channel Energy"
    },
    "equipment": {
      "gear": "Large Steel Shield",
      "magic_gear": "Chainmail +1<div>Ring of Protection +1<div>Ring of the Whispering Way</div></div>",
      "encumbrance": {
        "light": "",
        "medium": "",
        "heavy": ""
      },
      "body_slots": {
        "armor": "Chain Mail +1",
        "belts": "",
        "body": "",
        "chest": "",
        "eyes": "",
        "feet": "",
        "hands": "",
        "head": "",
        "headband": "",
        "neck": "",
        "ring_left_hand": "Ring of Protection +1",
        "ring_right_hand": "",
        "shield": "Large Steel Shield",
        "shoulders": "",
        "wrist": ""
      },
      "wealth": {
        "platinum": "",
        "gold": "3344",
        "silver": "",
        "copper": ""
      },
      "consumable": [{
        "item": "Wand of Cure Light Wounds",
        "current": 43,
        "total": "50",
        "used": "7"
      }, {
        "item": "Scroll of Bull's Strength ",
        "current": 1,
        "total": "1",
        "used": ""
      }, {
        "item": "Potion of Cure Light Wounds",
        "current": 1,
        "total": "1",
        "used": ""
      }, {
        "item": "Scroll of Air Walk",
        "current": 1,
        "total": "1",
        "used": ""
      }]
    },
    "defense": {
      "hp": {
        "total": 52,
        "temp": "",
        "damage": 41,
        "non_lethal_damage": "",
        "current": 11
      },
      "ac": {
        "misc": "",
        "temp": "",
        "armor": "7",
        "shield": "2",
        "deflect": 1,
        "dodge": "",
        "natural": "",
        "size_bonus": "",
        "current": 22,
        "bonuses": {
          "str_bonus": false,
          "dex_bonus": true,
          "con_bonus": false,
          "int_bonus": false,
          "wis_bonus": false,
          "cha_bonus": false,
          "plus_ten": true,
          "ac_armor": true,
          "ac_shield": true,
          "ac_deflect": true,
          "ac_dodge": true,
          "ac_natural": true,
          "size": true
        },
        "check_penalty": -5,
        "max_dex": 2
      },
      "flat_footed": {
        "misc": "",
        "temp": "",
        "current": 20,
        "bonuses": {
          "str_bonus": false,
          "dex_bonus": false,
          "con_bonus": false,
          "int_bonus": false,
          "wis_bonus": false,
          "cha_bonus": false,
          "plus_ten": true,
          "ac_armor": true,
          "ac_shield": true,
          "ac_deflect": true,
          "ac_natural": true,
          "size": true
        }
      },
      "touch": {
        "misc": "",
        "temp": "",
        "current": 13,
        "bonuses": {
          "str_bonus": false,
          "dex_bonus": true,
          "con_bonus": false,
          "int_bonus": false,
          "wis_bonus": false,
          "cha_bonus": false,
          "plus_ten": true,
          "ac_deflect": true,
          "ac_dodge": true,
          "size": true
        }
      },
      "ac_notes": "",
      "fortitude": {
        "base": 5,
        "racial": "",
        "resistance": "",
        "misc": "",
        "temp": "",
        "current": 5,
        "bonuses": {
          "str_bonus": false,
          "dex_bonus": false,
          "con_bonus": true,
          "int_bonus": false,
          "wis_bonus": false,
          "cha_bonus": false
        }
      },
      "reflex": {
        "base": 2,
        "racial": "",
        "resistance": "",
        "misc": "",
        "temp": "",
        "current": 4,
        "bonuses": {
          "str_bonus": false,
          "dex_bonus": true,
          "con_bonus": false,
          "int_bonus": false,
          "wis_bonus": false,
          "cha_bonus": false
        }
      },
      "will": {
        "base": 5,
        "racial": "",
        "resistance": "",
        "misc": "",
        "temp": "",
        "current": 9,
        "bonuses": {
          "str_bonus": false,
          "dex_bonus": false,
          "con_bonus": false,
          "int_bonus": false,
          "wis_bonus": true,
          "cha_bonus": false
        }
      },
      "save_notes": "+2 vs poison, spells, and spell like abilities"
    },
    "offense": {
      "base_attack": "5",
      "concentration": "",
      "cmb": {
        "misc": "",
        "temp": "",
        "size": "",
        "current": 6,
        "bonuses": {
          "str_bonus": true,
          "dex_bonus": false,
          "con_bonus": false,
          "int_bonus": false,
          "wis_bonus": false,
          "cha_bonus": false,
          "bab": true,
          "level": false,
          "half_level": false
        }
      },
      "cmd": {
        "misc": "",
        "temp": "",
        "size": "",
        "current": 18,
        "bonuses": {
          "str_bonus": true,
          "dex_bonus": true,
          "con_bonus": false,
          "int_bonus": false,
          "wis_bonus": false,
          "cha_bonus": false,
          "bab": true,
          "level": false,
          "half_level": false,
          "plus_ten": true
        }
      },
      "melee_attack": {
        "misc": "",
        "temp": "",
        "size": "",
        "current": 6,
        "bonuses": {
          "str_bonus": true,
          "dex_bonus": false,
          "con_bonus": false,
          "int_bonus": false,
          "wis_bonus": false,
          "cha_bonus": false,
          "bab": true,
          "level": false,
          "half_level": false
        }
      },
      "ranged_attack": {
        "misc": "",
        "temp": "",
        "size": "",
        "current": 7,
        "bonuses": {
          "str_bonus": false,
          "dex_bonus": true,
          "con_bonus": false,
          "int_bonus": false,
          "wis_bonus": false,
          "cha_bonus": false,
          "bab": true,
          "level": false,
          "half_level": false
        }
      },
      "attack": {
        "melee": [{
          "weapon": "Morningstar",
          "attack": "7",
          "damage": "+2",
          "critical": "20 x2"
        }, {
          "weapon": "Scimitar",
          "attack": "5",
          "damage": "+1",
          "critical": "18-20 x2"
        }],
        "ranged": []
      },
      "attack_notes": "+1 Morningstar with Weapon Focus"
    },
    "skills": {
      "acrobatics": {
        "ranks": "",
        "misc": "",
        "current": 2,
        "bonuses": {
          "class_skill": false,
          "dex_bonus": true
        }
      },
      "appraise": {
        "ranks": "",
        "misc": "",
        "current": 2,
        "bonuses": {
          "class_skill": true,
          "int_bonus": true
        }
      },
      "bluff": {
        "ranks": "",
        "misc": "",
        "current": 0,
        "bonuses": {
          "class_skill": false,
          "cha_bonus": true
        }
      },
      "climb": {
        "ranks": "",
        "misc": "",
        "current": 1,
        "bonuses": {
          "class_skill": false,
          "str_bonus": true
        }
      },
      "craft_1": {
        "variant_name": "",
        "ranks": "",
        "misc": "",
        "current": 2,
        "bonuses": {
          "class_skill": true,
          "int_bonus": true
        }
      },
      "craft_2": {
        "variant_name": "",
        "ranks": "",
        "misc": "",
        "current": 2,
        "bonuses": {
          "class_skill": false,
          "int_bonus": true
        }
      },
      "diplomacy": {
        "ranks": "3",
        "misc": "",
        "current": 6,
        "bonuses": {
          "class_skill": true,
          "cha_bonus": true
        }
      },
      "disable_device": {
        "ranks": "",
        "misc": "",
        "current": 2,
        "bonuses": {
          "class_skill": false,
          "dex_bonus": true
        }
      },
      "disguise": {
        "ranks": "",
        "misc": "",
        "current": 0,
        "bonuses": {
          "class_skill": false,
          "cha_bonus": true
        }
      },
      "escape_artist": {
        "ranks": "",
        "misc": "",
        "current": 2,
        "bonuses": {
          "class_skill": false,
          "dex_bonus": true
        }
      },
      "fly": {
        "ranks": "",
        "misc": "",
        "current": 2,
        "bonuses": {
          "class_skill": false,
          "dex_bonus": true
        }
      },
      "handle_animal": {
        "ranks": "",
        "misc": "",
        "current": 0,
        "bonuses": {
          "class_skill": false,
          "cha_bonus": true
        }
      },
      "heal": {
        "ranks": 4,
        "misc": "",
        "current": 11,
        "bonuses": {
          "class_skill": true,
          "wis_bonus": true
        }
      },
      "intimidate": {
        "ranks": "",
        "misc": "",
        "current": 0,
        "bonuses": {
          "class_skill": false,
          "cha_bonus": true
        }
      },
      "knowledge_arcana": {
        "ranks": "",
        "misc": "",
        "current": 2,
        "bonuses": {
          "class_skill": true,
          "int_bonus": true
        }
      },
      "knowledge_dungeoneering": {
        "ranks": "",
        "misc": "",
        "current": 2,
        "bonuses": {
          "class_skill": false,
          "int_bonus": true
        }
      },
      "knowledge_engineering": {
        "ranks": "",
        "misc": "",
        "current": 2,
        "bonuses": {
          "class_skill": false,
          "int_bonus": true
        }
      },
      "knowledge_geography": {
        "ranks": "",
        "misc": "",
        "current": 2,
        "bonuses": {
          "class_skill": false,
          "int_bonus": true
        }
      },
      "knowledge_history": {
        "ranks": "",
        "misc": "",
        "current": 2,
        "bonuses": {
          "class_skill": true,
          "int_bonus": true
        }
      },
      "knowledge_local": {
        "ranks": "",
        "misc": "",
        "current": 2,
        "bonuses": {
          "class_skill": false,
          "int_bonus": true
        }
      },
      "knowledge_nature": {
        "ranks": "",
        "misc": "",
        "current": 2,
        "bonuses": {
          "class_skill": false,
          "int_bonus": true
        }
      },
      "knowledge_nobility": {
        "ranks": "",
        "misc": "",
        "current": 2,
        "bonuses": {
          "class_skill": true,
          "int_bonus": true
        }
      },
      "knowledge_planes": {
        "ranks": "1",
        "misc": "",
        "current": 6,
        "bonuses": {
          "class_skill": true,
          "int_bonus": true
        }
      },
      "knowledge_religion": {
        "ranks": 5,
        "misc": "",
        "current": 10,
        "bonuses": {
          "class_skill": true,
          "int_bonus": true
        }
      },
      "linguistics": {
        "ranks": "",
        "misc": "",
        "current": 2,
        "bonuses": {
          "class_skill": true,
          "int_bonus": true
        }
      },
      "perception": {
        "ranks": 7,
        "misc": "",
        "current": 11,
        "bonuses": {
          "class_skill": false,
          "wis_bonus": true
        }
      },
      "perform_1": {
        "variant_name": "",
        "ranks": "",
        "misc": "",
        "current": 0,
        "bonuses": {
          "class_skill": false,
          "cha_bonus": true
        }
      },
      "perform_2": {
        "variant_name": "",
        "ranks": "",
        "misc": "",
        "current": 0,
        "bonuses": {
          "class_skill": false,
          "cha_bonus": true
        }
      },
      "profession_1": {
        "variant_name": "",
        "ranks": "",
        "misc": "",
        "current": 4,
        "bonuses": {
          "class_skill": true,
          "wis_bonus": true
        }
      },
      "profession_2": {
        "variant_name": "",
        "ranks": "",
        "misc": "",
        "current": 4,
        "bonuses": {
          "class_skill": false,
          "wis_bonus": true
        }
      },
      "ride": {
        "ranks": "",
        "misc": "",
        "current": 2,
        "bonuses": {
          "class_skill": false,
          "dex_bonus": true
        }
      },
      "sense_motive": {
        "ranks": "1",
        "misc": "",
        "current": 8,
        "bonuses": {
          "class_skill": true,
          "wis_bonus": true
        }
      },
      "sleight_of_hand": {
        "ranks": "",
        "misc": "",
        "current": 2,
        "bonuses": {
          "class_skill": false,
          "dex_bonus": true
        }
      },
      "spellcraft": {
        "ranks": 7,
        "misc": "",
        "current": 12,
        "bonuses": {
          "class_skill": true,
          "int_bonus": true
        }
      },
      "stealth": {
        "ranks": "",
        "misc": "",
        "current": 2,
        "bonuses": {
          "class_skill": false,
          "dex_bonus": true
        }
      },
      "survival": {
        "ranks": "",
        "misc": "",
        "current": 4,
        "bonuses": {
          "class_skill": false,
          "wis_bonus": true
        }
      },
      "swim": {
        "ranks": "",
        "misc": "",
        "current": 1,
        "bonuses": {
          "class_skill": false,
          "str_bonus": true
        }
      },
      "use_magic_device": {
        "ranks": "",
        "misc": "",
        "current": 0,
        "bonuses": {
          "class_skill": false,
          "cha_bonus": true
        }
      },
      "custom_1": {
        "name": "",
        "ranks": "",
        "misc": "",
        "current": 0,
        "bonuses": {
          "class_skill": false,
          "str_bonus": false,
          "dex_bonus": false,
          "con_bonus": false,
          "int_bonus": false,
          "wis_bonus": false,
          "cha_bonus": false,
          "level": false,
          "half_level": false
        }
      },
      "custom_2": {
        "name": "",
        "ranks": "",
        "misc": "",
        "current": 0,
        "bonuses": {
          "class_skill": false,
          "str_bonus": false,
          "dex_bonus": false,
          "con_bonus": false,
          "int_bonus": false,
          "wis_bonus": false,
          "cha_bonus": false,
          "level": false,
          "half_level": false
        }
      },
      "custom_3": {
        "name": "",
        "ranks": "",
        "misc": "",
        "current": 0,
        "bonuses": {
          "class_skill": false,
          "str_bonus": false,
          "dex_bonus": false,
          "con_bonus": false,
          "int_bonus": false,
          "wis_bonus": false,
          "cha_bonus": false,
          "level": false,
          "half_level": false
        }
      },
      "custom_4": {
        "name": "",
        "ranks": "",
        "misc": "",
        "current": 0,
        "bonuses": {
          "class_skill": false,
          "str_bonus": false,
          "dex_bonus": false,
          "con_bonus": false,
          "int_bonus": false,
          "wis_bonus": false,
          "cha_bonus": false,
          "level": false,
          "half_level": false
        }
      },
      "custom_5": {
        "name": "",
        "ranks": "",
        "misc": "",
        "current": 0,
        "bonuses": {
          "class_skill": ""
        }
      },
      "custom_6": {
        "name": "",
        "ranks": "",
        "misc": "",
        "current": 0,
        "bonuses": {
          "class_skill": ""
        }
      },
      "custom_7": {
        "name": "",
        "ranks": "",
        "misc": "",
        "current": 0,
        "bonuses": {
          "class_skill": ""
        }
      },
      "custom_8": {
        "name": "",
        "ranks": "",
        "misc": "",
        "current": 0,
        "bonuses": {
          "class_skill": ""
        }
      },
      "spent_ranks": {
        "include_custom": "",
        "current": 28
      }
    },
    "spells": {
      "per_day": {
        "level_0": 4,
        "level_1": 5,
        "level_2": 4,
        "level_3": "3",
        "level_4": "",
        "level_5": "",
        "level_6": "",
        "level_7": "",
        "level_8": "",
        "level_9": ""
      },
      "dc": {
        "level_0": 14,
        "level_1": 15,
        "level_2": 16,
        "level_3": 17,
        "level_4": 18,
        "level_5": "",
        "level_6": "",
        "level_7": "",
        "level_8": "",
        "level_9": ""
      },
      "known": {
        "level_0": "",
        "level_1": "",
        "level_2": "",
        "level_3": "",
        "level_4": 2,
        "level_5": "",
        "level_6": "",
        "level_7": "",
        "level_8": "",
        "level_9": ""
      },
      "book": [{
        "level_0": [{
          "name": "Detect magic",
          "prepared": 1,
          "active": false,
          "cast": 0
        }, {
          "name": "Guidance",
          "prepared": 1,
          "active": false,
          "cast": 0
        }, {
          "name": "Resistance",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Stabilise",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Bleed",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Create water",
          "prepared": 1,
          "active": false,
          "cast": 0
        }, {
          "name": "Detect poison",
          "prepared": 1,
          "active": false,
          "cast": 0
        }, {
          "name": "Light",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Mending",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Purify food and drink",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Read magic",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Spark",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Virtue",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Firebolt 1d6 +4",
          "prepared": 8,
          "active": false,
          "cast": 0
        }, {
          "name": "Channel Energy 4d6",
          "prepared": 5,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Rebuke Death 1d4 +4",
          "prepared": 8,
          "active": false,
          "cast": 0
        }]
      }, {
        "level_1": [{
          "name": "Bless",
          "prepared": 1,
          "active": false,
          "cast": 0
        }, {
          "name": "Ant haul",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Bane",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Bless water",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Cause fear",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Command",
          "prepared": 1,
          "active": false,
          "cast": 0
        }, {
          "name": "Comprehend languages",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Cure light wounds",
          "prepared": 1,
          "active": false,
          "cast": 0
        }, {
          "name": "Remove fear",
          "prepared": 1,
          "active": false,
          "cast": 0
        }, {
          "name": "Dancing lantern",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Deathwatch",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Detect chaos",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Detect evil",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Detect good",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Detect law",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Detect undead",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Divine favor",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Endure elements",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Entropic shield",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Hide from undead",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Magic stone",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Magic weapon",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Obscuring mist",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Protection from chaos",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Protection from evil",
          "prepared": 1,
          "active": false,
          "cast": 0
        }, {
          "name": "Protection from good",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Protection from law",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Sanctuary",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Shield of faith",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Summon monster I",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Remove paralysis",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Resist energy",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Restoration, lesser",
          "prepared": 1,
          "active": false,
          "cast": 0
        }, {
          "name": "Share language",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Burning hands",
          "prepared": 1,
          "active": false,
          "cast": 0
        }]
      }, {
        "level_2": [{
          "name": "Aid",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Align weapon",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Augury",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Bear's endurance",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Blessing of courage and life",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Bull's strength",
          "prepared": 1,
          "active": false,
          "cast": 0
        }, {
          "name": "Calm emotions",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Consecrate",
          "prepared": 1,
          "active": false,
          "cast": 0
        }, {
          "name": "Cure moderate wounds",
          "prepared": 1,
          "active": false,
          "cast": 0
        }, {
          "name": "Darkness",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Death knell",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Delay poison",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Eagle's splendor",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Summon monster II",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Find traps",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Gentle repose",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Ghostbane dirge",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Grace",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Heroic fortune",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Hold person",
          "prepared": 1,
          "active": false,
          "cast": 0
        }, {
          "name": "Instant armor",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Make whole",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Shield other",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Silence",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Spiritual weapon",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Status",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Undetectable alignment",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Weapon of awe",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Zone of truth",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Owl's wisdom",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Sound burst",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Shatter",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Produce flame",
          "prepared": 1,
          "active": false,
          "cast": 0
        }, {
          "name": "Remove Paralysis",
          "prepared": 1,
          "active": false,
          "cast": 0,
          "note": ""
        }]
      }, {
        "level_3": [{
          "name": "Fireball",
          "prepared": 1,
          "active": false,
          "cast": 1
        }, {
          "name": "Blood biography",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Continual flame",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Create food and water",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Daylight",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Deeper darkness",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Dispell magic",
          "prepared": 1,
          "active": false,
          "cast": 1
        }, {
          "name": "Elemental speech",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Enter image",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Glyph of warding",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Guiding star",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Helping hand",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Invisibility purge",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Locate object",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Magic circle against evil",
          "prepared": 1,
          "active": false,
          "cast": 1
        }, {
          "name": "Magic vestment",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Meld into stone",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Nap stack",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Obscure object",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Prayer",
          "prepared": 1,
          "active": false,
          "cast": 0
        }, {
          "name": "Protection from energy",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Remove blindness/deafness",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Remove curse",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Remove disease",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Sacred bond",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Searing light",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Speak with dead",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Stone shape",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Summon monster III",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Unravel destiny",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Water breathing",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Water walk ",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Wind wall",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Wrathful mantle",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Cure Serious Wounds ",
          "prepared": 1,
          "active": false,
          "cast": 1,
          "note": ""
        }]
      }, {
        "level_4": [{
          "name": "Wall of Fire",
          "prepared": 1,
          "active": false,
          "cast": 1
        }, {
          "name": "Cure Critical Wounds",
          "prepared": 1,
          "active": false,
          "cast": 1
        }, {
          "name": "Air Walk",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Blessing of Fervor",
          "prepared": 1,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Control Water",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Death Ward",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Dimensional Anchor",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Discern Lies",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Dismissal ",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Divination",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Divine Power",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Freedom of Movement",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Giant Vermin",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Holy Smite",
          "prepared": 1,
          "active": false,
          "cast": 1
        }, {
          "name": "Imbue with Spell Ability",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Magic Weapon, Greater",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Neutralise Poison",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Planar Adaptation",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Planar Ally, Lesser",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Repel Vermin",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Restoration ",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Sending",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Spell Immunity",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Spiritual Ally",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Summon Monster IV",
          "prepared": 0,
          "active": false,
          "cast": 0
        }, {
          "name": "Tongues",
          "prepared": 0,
          "active": false,
          "cast": 0
        }]
      }, {
        "level_5": []
      }, {
        "level_6": []
      }, {
        "level_7": []
      }, {
        "level_8": []
      }, {
        "level_9": []
      }],
      "concentration": {
        "misc": "",
        "temp": "",
        "current": 0,
        "bonuses": ""
      }
    },
    "notes": {
      "character": "",
      "story": ""
    }
  };
  
  // exposed methods
  return {
    data: data
  };

})();
