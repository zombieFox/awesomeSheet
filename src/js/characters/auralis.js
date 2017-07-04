var auralis = (function() {

  var data = {
    "awesomeSheet": true,
    "basics": {
      "name": "Auralis Silverbow",
      "race": "Half-Elf",
      "class": "Ranger",
      "level": "7",
      "size": "Medium",
      "alignment": "Chaotic Good",
      "xp": "42,030",
      "height": "",
      "weight": "",
      "age": "",
      "gender": "Female",
      "speed": "30",
      "initiative": "+4 (+6 Underground)",
      "hero_points": "",
      "luck_points": ""
    },
    "statistics": {
      "stats": {
        "str": {
          "score": 12,
          "modifier": 1,
          "temp_score": "",
          "temp_modifier": ""
        },
        "dex": {
          "score": 19,
          "modifier": 4,
          "temp_score": "",
          "temp_modifier": ""
        },
        "con": {
          "score": 14,
          "modifier": 2,
          "temp_score": "",
          "temp_modifier": ""
        },
        "int": {
          "score": 10,
          "modifier": 0,
          "temp_score": "",
          "temp_modifier": ""
        },
        "wis": {
          "score": 14,
          "modifier": 2,
          "temp_score": "",
          "temp_modifier": ""
        },
        "cha": {
          "score": 11,
          "modifier": 0,
          "temp_score": "",
          "temp_modifier": ""
        }
      },
      "feats": "Precise Shot, Deadly Aim, Rapid Shot, Improved Precise Shot, Point Blank Shot",
      "traits": "Resilient (+1 Fortitude)",
      "languages": "Common,&nbsp;<span style=\"font-size: 1rem;\">Elven,&nbsp;</span><span style=\"font-size: 1rem;\">Draconic,&nbsp;</span><span style=\"font-size: 1rem;\">Goblinoid</span>",
      "special_abilities": "<div>Favoured Enemy (Reptilian and Goblinoid), Track, Wild Empathy, Combat Style (Archery), Low light Vision, Adaptability (Skill Focus: Perception), Elven Immunity, Keen senses, Endurance, Favored Terrain( Underground), Hunters bond, Woodland stride</div>"
    },
    "equipment": {
      "gear": "Bedroll, Flint &amp; Steel, Grappling hook, Silk rope (50ft), Rations (5), Backpack, Signal whistle, Soap, Tent, Water skin, Climbing kit, Lantern, Combat trained horse and saddle",
      "magic_gear": "Studded Leather +1, Vile of anti toxin (1), Potion of resist energy (1), Potion of barkskin (1), Oil of greater magic weapon (+3, 12 hours) (1)",
      "encumbrance": {
        "light": "43 lbs or less",
        "medium": "44–86lbs",
        "heavy": "87–130lbs"
      },
      "body_slots": {
        "armor": "Mithral Chain Shirt +1 Deathless",
        "belts": "Belt of Incredible Dexterity +2",
        "body": "",
        "chest": "",
        "eyes": "",
        "feet": "Slippers of Spider Climbing",
        "hands": "",
        "head": "",
        "headband": "Headband of Inspired Wisdom +2",
        "neck": "",
        "ring_left_hand": "",
        "ring_right_hand": "Ring of Protection +1",
        "shield": "Buckler (Master work) +1",
        "shoulders": "Cloak of Resistance +1",
        "wrist": ""
      },
      "wealth": {
        "platinum": "",
        "gold": "6,469",
        "silver": "6",
        "copper": ""
      },
      "consumable": [{
        "item": "Wand of Cure Light Wounds",
        "current": 46,
        "total": "50",
        "used": "4"
      }, {
        "item": "Slippers of Spider Climbing",
        "current": 10,
        "total": "10",
        "used": ""
      }]
    },
    "defense": {
      "hp": {
        "total": 61,
        "temp": "",
        "damage": "",
        "non_lethal_damage": "",
        "current": 61
      },
      "ac": {
        "misc": "",
        "temp": "",
        "armor": 5,
        "shield": 1,
        "deflect": 1,
        "dodge": "",
        "natural": "",
        "size_bonus": "",
        "check_penalty": "",
        "current": 21,
        "max_dex": "",
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
          "size": true,
          "max_dex": true
        }
      },
      "flat_footed": {
        "misc": "",
        "temp": "",
        "current": 17,
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
        "current": 15,
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
          "size": true,
          "max_dex": true
        }
      },
      "ac_notes": "",
      "fortitude": {
        "base": 5,
        "racial": "",
        "resistance": 1,
        "misc": 1,
        "temp": "",
        "current": 9,
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
        "base": 5,
        "racial": "",
        "resistance": 1,
        "misc": "",
        "temp": "",
        "current": 10,
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
        "base": 2,
        "racial": "",
        "resistance": 1,
        "misc": "",
        "temp": "",
        "current": 5,
        "bonuses": {
          "str_bonus": false,
          "dex_bonus": false,
          "con_bonus": false,
          "int_bonus": false,
          "wis_bonus": true,
          "cha_bonus": false
        }
      },
      "save_notes": "Immune to magic sleep effect. +2 against enchantment spells and effects."
    },
    "offense": {
      "base_attack": "+7/+2",
      "cmb": {
        "misc": "",
        "temp": "",
        "size": "",
        "current": 8,
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
        "current": 22,
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
        "current": 8,
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
        "current": 11,
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
          "weapon": "Dagger",
          "attack": "+8/+3",
          "damage": "1d4+1",
          "critical": "19–20/×2"
        }, {
          "weapon": "Silver dagger",
          "attack": "+8/+3",
          "damage": "1d4",
          "critical": "19–20/×2"
        }],
        "ranged": [{
          "weapon": "Composite Longbow (Str+1) +2",
          "attack": "+13/+8",
          "damage": "1d8+2",
          "critical": "x3",
          "range": "110ft",
          "ammo": ""
        }, {
          "weapon": "Composite Longbow (Str+1) +2 (Rapid Shot)",
          "attack": "+11/+11/+6",
          "damage": "1d8+2",
          "critical": "x3",
          "range": "110ft",
          "ammo": ""
        }, {
          "weapon": "Composite Longbow (Str+1) +2 (Deadly Aim)",
          "attack": "+11/+6",
          "damage": "1d8+6",
          "critical": "x3",
          "range": "110ft",
          "ammo": ""
        }, {
          "weapon": "Composite Longbow (Str+1) +2 (Deadly Aim & Rapid Shot)",
          "attack": "+9/+9/+4",
          "damage": "1d8+6",
          "critical": "x3",
          "range": "110ft",
          "ammo": ""
        }]
      },
      "attack_notes": "2 bonus on weapon attack and damage rolls against Reptilian and Goblinoid.<div>Ammo:&nbsp;<span style=\"font-size: 1rem;\">Tangle arrow (3)&nbsp;</span><span style=\"font-size: 1rem;\">Trip arrow (5),&nbsp;</span><span style=\"font-size: 1rem;\">Silver arrow (10), Elf-bane (0), Frost arrows (10) - 1d6 damage</span></div>"
    },
    "skills": {
      "spent_ranks": {
        "include_custom": false,
        "current": 38
      },
      "acrobatics": {
        "ranks": 3,
        "misc": "",
        "current": 10,
        "bonuses": {
          "class_skill": true,
          "str_bonus": false,
          "dex_bonus": true,
          "con_bonus": false,
          "int_bonus": false,
          "wis_bonus": false,
          "cha_bonus": false,
          "level": false,
          "half_level": false,
          "check_penalty": true
        }
      },
      "appraise": {
        "ranks": "",
        "misc": "",
        "current": 0,
        "bonuses": {
          "class_skill": false,
          "str_bonus": false,
          "dex_bonus": false,
          "con_bonus": false,
          "int_bonus": true,
          "wis_bonus": false,
          "cha_bonus": false,
          "level": false,
          "half_level": false,
          "check_penalty": false
        }
      },
      "bluff": {
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
          "cha_bonus": true,
          "level": false,
          "half_level": false,
          "check_penalty": false
        }
      },
      "climb": {
        "ranks": 3,
        "misc": 2,
        "current": 9,
        "bonuses": {
          "class_skill": true,
          "str_bonus": true,
          "dex_bonus": false,
          "con_bonus": false,
          "int_bonus": false,
          "wis_bonus": false,
          "cha_bonus": false,
          "level": false,
          "half_level": false,
          "check_penalty": true
        }
      },
      "craft_1": {
        "variant_name": "",
        "ranks": "",
        "misc": "",
        "current": 0,
        "bonuses": {
          "class_skill": false,
          "str_bonus": false,
          "dex_bonus": false,
          "con_bonus": false,
          "int_bonus": true,
          "wis_bonus": false,
          "cha_bonus": false,
          "level": false,
          "half_level": false,
          "check_penalty": false
        }
      },
      "craft_2": {
        "variant_name": "",
        "ranks": "",
        "misc": "",
        "current": 0,
        "bonuses": {
          "class_skill": false,
          "str_bonus": false,
          "dex_bonus": false,
          "con_bonus": false,
          "int_bonus": true,
          "wis_bonus": false,
          "cha_bonus": false,
          "level": false,
          "half_level": false,
          "check_penalty": false
        }
      },
      "diplomacy": {
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
          "cha_bonus": true,
          "level": false,
          "half_level": false,
          "check_penalty": false
        }
      },
      "disable_device": {
        "ranks": "",
        "misc": "",
        "current": 4,
        "bonuses": {
          "class_skill": false,
          "str_bonus": false,
          "dex_bonus": true,
          "con_bonus": false,
          "int_bonus": false,
          "wis_bonus": false,
          "cha_bonus": false,
          "level": false,
          "half_level": false,
          "check_penalty": true
        }
      },
      "disguise": {
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
          "cha_bonus": true,
          "level": false,
          "half_level": false,
          "check_penalty": false
        }
      },
      "escape_artist": {
        "ranks": "",
        "misc": "",
        "current": 4,
        "bonuses": {
          "class_skill": false,
          "str_bonus": false,
          "dex_bonus": true,
          "con_bonus": false,
          "int_bonus": false,
          "wis_bonus": false,
          "cha_bonus": false,
          "level": false,
          "half_level": false,
          "check_penalty": true
        }
      },
      "fly": {
        "ranks": "",
        "misc": "",
        "current": 4,
        "bonuses": {
          "class_skill": false,
          "str_bonus": false,
          "dex_bonus": true,
          "con_bonus": false,
          "int_bonus": false,
          "wis_bonus": false,
          "cha_bonus": false,
          "level": false,
          "half_level": false,
          "check_penalty": true
        }
      },
      "handle_animal": {
        "ranks": 3,
        "misc": "",
        "current": 6,
        "bonuses": {
          "class_skill": true,
          "str_bonus": false,
          "dex_bonus": false,
          "con_bonus": false,
          "int_bonus": false,
          "wis_bonus": false,
          "cha_bonus": true,
          "level": false,
          "half_level": false,
          "check_penalty": false
        }
      },
      "heal": {
        "ranks": 3,
        "misc": "",
        "current": 8,
        "bonuses": {
          "class_skill": true,
          "str_bonus": false,
          "dex_bonus": false,
          "con_bonus": false,
          "int_bonus": false,
          "wis_bonus": true,
          "cha_bonus": false,
          "level": false,
          "half_level": false,
          "check_penalty": false
        }
      },
      "intimidate": {
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
          "cha_bonus": true,
          "level": false,
          "half_level": false,
          "check_penalty": false
        }
      },
      "knowledge_arcana": {
        "ranks": "",
        "misc": "",
        "current": 0,
        "bonuses": {
          "class_skill": false,
          "str_bonus": false,
          "dex_bonus": false,
          "con_bonus": false,
          "int_bonus": true,
          "wis_bonus": false,
          "cha_bonus": false,
          "level": false,
          "half_level": false,
          "check_penalty": false
        }
      },
      "knowledge_dungeoneering": {
        "ranks": 1,
        "misc": "",
        "current": 4,
        "bonuses": {
          "class_skill": true,
          "str_bonus": false,
          "dex_bonus": false,
          "con_bonus": false,
          "int_bonus": true,
          "wis_bonus": false,
          "cha_bonus": false,
          "level": false,
          "half_level": false,
          "check_penalty": false
        }
      },
      "knowledge_engineering": {
        "ranks": "",
        "misc": "",
        "current": 0,
        "bonuses": {
          "class_skill": false,
          "str_bonus": false,
          "dex_bonus": false,
          "con_bonus": false,
          "int_bonus": true,
          "wis_bonus": false,
          "cha_bonus": false,
          "level": false,
          "half_level": false,
          "check_penalty": false
        }
      },
      "knowledge_geography": {
        "ranks": 3,
        "misc": "",
        "current": 6,
        "bonuses": {
          "class_skill": true,
          "str_bonus": false,
          "dex_bonus": false,
          "con_bonus": false,
          "int_bonus": true,
          "wis_bonus": false,
          "cha_bonus": false,
          "level": false,
          "half_level": false,
          "check_penalty": false
        }
      },
      "knowledge_history": {
        "ranks": "",
        "misc": "",
        "current": 0,
        "bonuses": {
          "class_skill": false,
          "str_bonus": false,
          "dex_bonus": false,
          "con_bonus": false,
          "int_bonus": true,
          "wis_bonus": false,
          "cha_bonus": false,
          "level": false,
          "half_level": false,
          "check_penalty": false
        }
      },
      "knowledge_local": {
        "ranks": "",
        "misc": "",
        "current": 0,
        "bonuses": {
          "class_skill": false,
          "str_bonus": false,
          "dex_bonus": false,
          "con_bonus": false,
          "int_bonus": true,
          "wis_bonus": false,
          "cha_bonus": false,
          "level": false,
          "half_level": false,
          "check_penalty": false
        }
      },
      "knowledge_nature": {
        "ranks": 3,
        "misc": 3,
        "current": 6,
        "bonuses": {
          "class_skill": false,
          "str_bonus": false,
          "dex_bonus": false,
          "con_bonus": false,
          "int_bonus": true,
          "wis_bonus": false,
          "cha_bonus": false,
          "level": false,
          "half_level": false,
          "check_penalty": false
        }
      },
      "knowledge_nobility": {
        "ranks": "",
        "misc": "",
        "current": 0,
        "bonuses": {
          "class_skill": false,
          "str_bonus": false,
          "dex_bonus": false,
          "con_bonus": false,
          "int_bonus": true,
          "wis_bonus": false,
          "cha_bonus": false,
          "level": false,
          "half_level": false,
          "check_penalty": false
        }
      },
      "knowledge_planes": {
        "ranks": "",
        "misc": "",
        "current": 0,
        "bonuses": {
          "class_skill": false,
          "str_bonus": false,
          "dex_bonus": false,
          "con_bonus": false,
          "int_bonus": true,
          "wis_bonus": false,
          "cha_bonus": false,
          "level": false,
          "half_level": false,
          "check_penalty": false
        }
      },
      "knowledge_religion": {
        "ranks": "",
        "misc": "",
        "current": 0,
        "bonuses": {
          "class_skill": false,
          "str_bonus": false,
          "dex_bonus": false,
          "con_bonus": false,
          "int_bonus": true,
          "wis_bonus": false,
          "cha_bonus": false,
          "level": false,
          "half_level": false,
          "check_penalty": false
        }
      },
      "linguistics": {
        "ranks": 2,
        "misc": "",
        "current": 2,
        "bonuses": {
          "class_skill": false,
          "str_bonus": false,
          "dex_bonus": false,
          "con_bonus": false,
          "int_bonus": true,
          "wis_bonus": false,
          "cha_bonus": false,
          "level": false,
          "half_level": false,
          "check_penalty": false
        }
      },
      "perception": {
        "ranks": 6,
        "misc": 5,
        "current": 16,
        "bonuses": {
          "class_skill": true,
          "str_bonus": false,
          "dex_bonus": false,
          "con_bonus": false,
          "int_bonus": false,
          "wis_bonus": true,
          "cha_bonus": false,
          "level": false,
          "half_level": false,
          "check_penalty": false
        }
      },
      "perform_1": {
        "variant_name": "",
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
          "cha_bonus": true,
          "level": false,
          "half_level": false,
          "check_penalty": false
        }
      },
      "perform_2": {
        "variant_name": "",
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
          "cha_bonus": true,
          "level": false,
          "half_level": false,
          "check_penalty": false
        }
      },
      "profession_1": {
        "variant_name": "",
        "ranks": "",
        "misc": "",
        "current": 2,
        "bonuses": {
          "class_skill": false,
          "str_bonus": false,
          "dex_bonus": false,
          "con_bonus": false,
          "int_bonus": false,
          "wis_bonus": true,
          "cha_bonus": false,
          "level": false,
          "half_level": false,
          "check_penalty": false
        }
      },
      "profession_2": {
        "variant_name": "",
        "ranks": "",
        "misc": "",
        "current": 2,
        "bonuses": {
          "class_skill": false,
          "str_bonus": false,
          "dex_bonus": false,
          "con_bonus": false,
          "int_bonus": false,
          "wis_bonus": true,
          "cha_bonus": false,
          "level": false,
          "half_level": false,
          "check_penalty": false
        }
      },
      "ride": {
        "ranks": 1,
        "misc": "",
        "current": 8,
        "bonuses": {
          "class_skill": true,
          "str_bonus": false,
          "dex_bonus": true,
          "con_bonus": false,
          "int_bonus": false,
          "wis_bonus": false,
          "cha_bonus": false,
          "level": false,
          "half_level": false,
          "check_penalty": true
        }
      },
      "sense_motive": {
        "ranks": "",
        "misc": "",
        "current": 2,
        "bonuses": {
          "class_skill": false,
          "str_bonus": false,
          "dex_bonus": false,
          "con_bonus": false,
          "int_bonus": false,
          "wis_bonus": true,
          "cha_bonus": false,
          "level": false,
          "half_level": false,
          "check_penalty": false
        }
      },
      "sleight_of_hand": {
        "ranks": "",
        "misc": "",
        "current": 4,
        "bonuses": {
          "class_skill": false,
          "str_bonus": false,
          "dex_bonus": true,
          "con_bonus": false,
          "int_bonus": false,
          "wis_bonus": false,
          "cha_bonus": false,
          "level": false,
          "half_level": false,
          "check_penalty": true
        }
      },
      "spellcraft": {
        "ranks": 2,
        "misc": "",
        "current": 5,
        "bonuses": {
          "class_skill": true,
          "str_bonus": false,
          "dex_bonus": false,
          "con_bonus": false,
          "int_bonus": true,
          "wis_bonus": false,
          "cha_bonus": false,
          "level": false,
          "half_level": false,
          "check_penalty": false
        }
      },
      "stealth": {
        "ranks": 1,
        "misc": "",
        "current": 8,
        "bonuses": {
          "class_skill": true,
          "str_bonus": false,
          "dex_bonus": true,
          "con_bonus": false,
          "int_bonus": false,
          "wis_bonus": false,
          "cha_bonus": false,
          "level": false,
          "half_level": false,
          "check_penalty": true
        }
      },
      "survival": {
        "ranks": 6,
        "misc": "",
        "current": 11,
        "bonuses": {
          "class_skill": true,
          "str_bonus": false,
          "dex_bonus": false,
          "con_bonus": false,
          "int_bonus": false,
          "wis_bonus": true,
          "cha_bonus": false,
          "level": false,
          "half_level": false,
          "check_penalty": false
        }
      },
      "swim": {
        "ranks": 1,
        "misc": "",
        "current": 5,
        "bonuses": {
          "class_skill": true,
          "str_bonus": true,
          "dex_bonus": false,
          "con_bonus": false,
          "int_bonus": false,
          "wis_bonus": false,
          "cha_bonus": false,
          "level": false,
          "half_level": false,
          "check_penalty": true
        }
      },
      "use_magic_device": {
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
          "cha_bonus": true,
          "level": false,
          "half_level": false,
          "check_penalty": false
        }
      },
      "custom_1": {
        "name": "Bean Eating",
        "ranks": "3",
        "misc": "11",
        "current": 0,
        "bonuses": {
          "class_skill": true,
          "str_bonus": false,
          "dex_bonus": true,
          "con_bonus": false,
          "int_bonus": false,
          "wis_bonus": false,
          "cha_bonus": false,
          "level": false,
          "half_level": false,
          "check_penalty": false
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
          "half_level": false,
          "check_penalty": false
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
          "half_level": false,
          "check_penalty": false
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
          "half_level": false,
          "check_penalty": false
        }
      },
      "custom_5": {
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
          "half_level": false,
          "check_penalty": false
        }
      },
      "custom_6": {
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
          "half_level": false,
          "check_penalty": false
        }
      },
      "custom_7": {
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
          "half_level": false,
          "check_penalty": false
        }
      },
      "custom_8": {
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
          "half_level": false,
          "check_penalty": false
        }
      }
    },
    "spells": {
      "concentration": {
        "current": 9,
        "misc": "",
        "temp": "",
        "bonuses": {
          "str_bonus": false,
          "dex_bonus": false,
          "con_bonus": false,
          "int_bonus": false,
          "wis_bonus": true,
          "cha_bonus": false,
          "level": true
        }
      },
      "per_day": {
        "level_0": "",
        "level_1": 2,
        "level_2": 1,
        "level_3": "",
        "level_4": "",
        "level_5": "",
        "level_6": "",
        "level_7": "",
        "level_8": "",
        "level_9": ""
      },
      "dc": {
        "level_0": "",
        "level_1": 13,
        "level_2": "",
        "level_3": "",
        "level_4": "",
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
        "level_4": "",
        "level_5": "",
        "level_6": "",
        "level_7": "",
        "level_8": "",
        "level_9": ""
      },
      "book": [{
        "level_0": []
      }, {
        "level_1": [{
          "name": "Gravity Bow",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Long Strider",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Aspect of the Falcon",
          "prepared": 1,
          "active": false,
          "cast": 1,
          "note": ""
        }, {
          "name": "Hunters howl",
          "prepared": 1,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Alarm",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Animal messenger",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Ant haul",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Call animal",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Calm animal",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Charm animal",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Cloak of shade",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Dancing lantern",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Delay poison",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Detect aberration",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Detect animals or plants",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Detect poison",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Detect snares and pits",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Endure elements",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Entangle",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Feather step",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Glide",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Hide from animals",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Jump",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Keen senses",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Lead blades",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Magic fang",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Negate aroma",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Pass without trace",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Read magic",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Residual tracking",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Resist energy",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Speak with animals",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Simon nature's ally I",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Tireless pursuit",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }]
      }, {
        "level_2": [{
          "name": "Bears endurance",
          "prepared": 1,
          "active": false,
          "cast": 1,
          "note": ""
        }, {
          "name": "Accelerate poison",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Allfood",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Arrow eruption",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Aspect of the bear",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Barkskin",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Bloodhound",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Campfire wall",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Cat's grace",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Chameleon stride",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Create treasure map",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Cure light wound",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Eagle eye",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Guiding star",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Hide campsite",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Hold animal",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Hunter's eye",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Lockjaw",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Owl's wisdom",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Perceive cues",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Protection from energy",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Protective spirit",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Slipstream",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Snare",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Speak with plants",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Spike growth",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Stone call",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Summon nature's ally II",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Versatile weapon",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }, {
          "name": "Wind wall",
          "prepared": 0,
          "active": false,
          "cast": 0,
          "note": ""
        }]
      }, {
        "level_3": []
      }, {
        "level_4": []
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
      }]
    },
    "notes": {
      "character": [{
        "note": "<b>+2 to One Ability Score</b><div>2 bonus to one ability score of their choice at creation.</div><div><b>Medium</b></div><div>Half-elves are Medium creatures.</div><div><b>Normal Speed</b></div><div>Half-elves have a base speed of 30 feet.</div><div><b>Low-Light Vision</b></div><div>Half-elves can see twice as far as humans in conditions of dim light.</div><div><b>Adaptability</b></div><div>Half-elves receive Skill Focus as a bonus feat at 1st level.</div><div><b>Elf Blood</b></div><div>Half-elves count as both elves and humans for any effect related to race.</div><div><b>Elven Immunities</b></div><div>Half-elves are immune to magic sleep effects and get a +2 racial saving throw bonus against enchantment spells and effects.</div><div><b>Keen Senses</b></div><div>Half-elves receive a +2 racial bonus on Perception skill checks.</div><div><b>Multitalented</b></div><div>Half-elves choose two favored classes at first level and gain +1 hit point or +1 skill point whenever they take a level in either one of those classes.</div><div><b>Languages</b></div><div>Half-elves begin play speaking Common and Elven.</div>"
      }, {
        "note": "<b>Favored Enemy (Ex)</b><div>At 1st level, a ranger selects a creature type from the ranger favored enemies table. He gains a +2 bonus on Bluff, Knowledge, Perception, Sense Motive, and Survival checks against creatures of his selected type. Likewise, he gets a +2 bonus on weapon attack and damage rolls against them. A ranger may make Knowledge skill checks untrained when attempting to identify these creatures.</div><div><br></div><div>At 5th level and every five levels thereafter (10th, 15th, and 20th level), the ranger may select an additional favored enemy. In addition, at each such interval, the bonus against any one favored enemy (including the one just selected, if so desired) increases by +2.</div><div><br></div><div>If the ranger chooses humanoids or outsiders as a favored enemy, he must also choose an associated subtype, as indicated on the table below. (Note that there are other types of humanoid to choose from—those called out specifically on the table below are merely the most common.) If a specific creature falls into more than one category of favored enemy, the ranger's bonuses do not stack; he simply uses whichever bonus is higher.</div>"
      }, {
        "note": "<b>Track (Ex)</b><div>A ranger adds half his level (minimum 1) to Survival skill checks made to follow tracks.</div>"
      }, {
        "note": "<b>Wild Empathy (Ex)</b><div>A ranger can improve the initial attitude of an animal. This ability functions just like a Diplomacy check to improve the attitude of a person (see Using Skills). The ranger rolls 1d20 and adds his ranger level and his Charisma bonus to determine the wild empathy check result. The typical domestic animal has a starting attitude of indifferent, while wild animals are usually unfriendly.</div><div><br></div><div>To use wild empathy, the ranger and the animal must be within 30 feet of one another under normal visibility conditions. Generally, influencing an animal in this way takes 1 minute, but, as with influencing people, it might take more or less time.</div><div><br></div><div>The ranger can also use this ability to influence a magical beast with an Intelligence score of 1 or 2, but he takes a –4 penalty on the check.</div>"
      }, {
        "note": "<b>Combat Style Feat (Ex)</b><div>At 2nd level, a ranger must select one of two combat styles to pursue: archery or two-weapon combat. The ranger's expertise manifests in the form of bonus feats at 2nd, 6th, 10th, 14th, and 18th level. He can choose feats from his selected combat style, even if he does not have the normal prerequisites.</div><div><br></div><div>If the ranger selects archery, he can choose from the following list whenever he gains a combat style feat: Far Shot, Point Blank Shot, Precise Shot, and Rapid Shot. At 6th level, he adds Improved Precise Shot and Manyshot to the list. At 10th level, he adds Pinpoint Targeting and Shot on the Run to the list.</div><div><br></div><div>If the ranger selects two-weapon combat, he can choose from the following list whenever he gains a combat style feat: Double Slice, Improved Shield Bash, Quick Draw, and Two-Weapon Fighting. At 6th level, he adds Improved Two-Weapon Fighting and Two-Weapon Defense to the list. At 10th level, he adds Greater Two-Weapon Fighting and Two-Weapon Rend to the list.</div><div><br></div><div>The benefits of the ranger's chosen style feats apply only when he wears light, medium, or no armor. He loses all benefits of his combat style feats when wearing heavy armor. Once a ranger selects a combat style, it cannot be changed.</div>"
      }, {
        "note": "<b>Endurance</b><div>A ranger gains Endurance as a bonus feat at 3rd level.</div>"
      }, {
        "note": "<b>Favored Terrain (Ex)</b><div>At 3rd level, a ranger may select a type of terrain from the Favored Terrains table. The ranger gains a +2 bonus on initiative checks and Knowledge (geography), Perception, Stealth, and Survival skill checks when he is in this terrain. A ranger traveling through his favored terrain normally leaves no trail and cannot be tracked (though he may leave a trail if he so chooses).</div><div><br></div><div>At 8th level and every five levels thereafter, the ranger may select an additional favored terrain. In addition, at each such interval, the skill bonus and initiative bonus in any one favored terrain (including the one just selected, if so desired), increases by +2.</div><div><br></div><div>If a specific terrain falls into more than one category of favored terrain, the ranger's bonuses do not stack; he simply uses whichever bonus is higher.</div>"
      }, {
        "note": "<b>Hunter's Bond (Ex)</b><div>At 4th level, a ranger forms a bond with his hunting companions. This bond can take one of two forms. Once the form is chosen, it cannot be changed. The first is a bond to his companions. This bond allows him to spend a move action to grant half his favored enemy bonus against a single target of the appropriate type to all allies within 30 feet who can see or hear him. This bonus lasts for a number of rounds equal to the ranger's Wisdom modifier (minimum 1). This bonus does not stack with any favored enemy bonuses possessed by his allies; they use whichever bonus is higher.</div><div><br></div><div>The second option is to form a close bond with an animal companion. A ranger who selects an animal companion can choose from the following list: badger, bird, camel, cat (small), dire rat, dog, horse, pony, snake (viper or constrictor), or wolf. If the campaign takes place wholly or partly in an aquatic environment, the ranger may choose a shark instead. This animal is a loyal companion that accompanies the ranger on his adventures as appropriate for its kind. A ranger's animal companion shares his favored enemy and favored terrain bonuses.</div><div><br></div><div>This ability functions like the druid animal companion ability (which is part of the Nature Bond class feature), except that the ranger's effective druid level is equal to his ranger level – 3.</div>"
      }, {
        "note": "<b>Woodland Stride (Ex)</b><div>Starting at 7th level, a ranger may move through any sort of undergrowth (such as natural thorns, briars, overgrown areas, and similar terrain) at his normal speed and without taking damage or suffering any other impairment.</div><div><br></div><div>Thorns, briars, and overgrown areas that are enchanted or magically manipulated to impede motion, however, still affect him.</div>"
      }, {
        "note": "<b>Precise Shot</b><div>You can shoot or throw ranged weapons at an opponent engaged in melee without taking the standard –4 penalty on your attack roll.</div>"
      }, {
        "note": "<b>Deadly Aim</b><div>You can choose to take a –1 penalty on all ranged attack rolls to gain a +2 bonus on all ranged damage rolls. When your base attack bonus reaches +4, and every +4 thereafter, the penalty increases by –1 and the bonus to damage increases by +2. You must choose to use this feat before making an attack roll and its effects last until your next turn. The bonus damage does not apply to touch attacks or effects that do not deal hit point damage.</div>"
      }, {
        "note": "<b>Rapid Shot</b><div>When making a full-attack action with a ranged weapon, you can fire one additional time this round at your highest bonus. All of your attack rolls take a –2 penalty when using Rapid Shot.</div>"
      }, {
        "note": "<b>Improved Precise Shot</b><div>Your ranged attacks ignore the AC bonus granted to targets by anything less than total cover, and the miss chance granted to targets by anything less than total concealment. Total cover and total concealment provide their normal benefits against your ranged attacks.</div>"
      }, {
        "note": "<b>Point Blank Shot</b><div>You get a +1 bonus on attack and damage rolls with ranged weapons at ranges of up to 30 feet.</div>"
      }],
      "story": []
    }
  };

  // exposed methods
  return {
    data: data
  };

})();
