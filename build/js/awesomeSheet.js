"use strict";

var blank = (function() {

  var data = {
    basics: {
      name: "",
      race: "",
      class: "",
      level: "",
      size: "",
      alignment: "",
      xp: "",
      height: "",
      weight: "",
      age: "",
      gender: "",
      speed: "",
      initiative: "",
      hero_points: "",
      luck_points: ""
    },
    statistics: {
      stats: {
        str: {
          score: "",
          temp: ""
        },
        dex: {
          score: "",
          temp: ""
        },
        con: {
          score: "",
          temp: ""
        },
        int: {
          score: "",
          temp: ""
        },
        wis: {
          score: "",
          temp: ""
        },
        cha: {
          score: "",
          temp: ""
        }
      },
      feats: "",
      traits: "",
      languages: "",
      special_abilities: ""
    },
    equipment: {
      gear: "",
      magic_gear: "",
      encumbrance: {
        light: "",
        medium: "",
        heavy: ""
      },
      body_slots: {
        armor: "",
        belts: "",
        body: "",
        chest: "",
        eyes: "",
        feet: "",
        hands: "",
        head: "",
        headband: "",
        neck: "",
        ring_left_hand: "",
        ring_right_hand: "",
        shield: "",
        shoulders: "",
        wrist: ""
      },
      wealth: {
        platinum: "",
        gold: "",
        silver: "",
        copper: ""
      },
      consumable: []
    },
    defense: {
      hp: {
        total: "",
        temp: "",
        damage: "",
        non_lethal_damage: "",
        current: ""
      },
      ac: {
        misc: "",
        temp: "",
        armor: "",
        shield: "",
        deflect: "",
        dodge: "",
        natural: "",
        size_bonus: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          plus_ten: true,
          ac_armor: true,
          ac_shield: true,
          ac_deflect: true,
          ac_dodge: true,
          ac_natural: true,
          size: true
        }
      },
      flat_footed: {
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          plus_ten: true,
          ac_armor: true,
          ac_shield: true,
          ac_deflect: true,
          ac_natural: true,
          size: true
        }
      },
      touch: {
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          plus_ten: true,
          ac_deflect: true,
          ac_dodge: true,
          size: true
        }
      },
      ac_notes: "",
      fortitude: {
        base: "",
        racial: "",
        resistance: "",
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: true,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false
        }
      },
      reflex: {
        base: "",
        racial: "",
        resistance: "",
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false
        }
      },
      will: {
        base: "",
        racial: "",
        resistance: "",
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: true,
          cha_bonus: false
        }
      },
      save_notes: ""
    },
    offense: {
      base_attack: "",
      special_size_bonus: "",
      concentration: "",
      cmb: {
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: true,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          bab: true,
          level: false,
          half_level: false,
          special_size: true
        }
      },
      cmd: {
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: true,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          bab: true,
          level: false,
          half_level: false,
          special_size: true,
          plus_ten: true
        }
      },
      melee_attack: {
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: true,
          bab: true,
          special_size: true
        }
      },
      ranged_attack: {
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          dex_bonus: true,
          bab: true,
          special_size: true
        }
      },
      attack: {
        melee: [],
        ranged: []
      },
      attack_notes: ""
    },
    skills: {
      acrobatics: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          dex_bonus: true
        }
      },
      appraise: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      bluff: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          cha_bonus: true
        }
      },
      climb: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: true
        }
      },
      craft_1: {
        variant_name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      craft_2: {
        variant_name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      diplomacy: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          cha_bonus: true
        }
      },
      disable_device: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          dex_bonus: true
        }
      },
      disguise: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          cha_bonus: true
        }
      },
      escape_artist: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          dex_bonus: true
        }
      },
      fly: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          dex_bonus: true
        }
      },
      handle_animal: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          cha_bonus: true
        }
      },
      heal: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          wis_bonus: true
        }
      },
      intimidate: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          cha_bonus: true
        }
      },
      knowledge_arcana: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      knowledge_dungeoneering: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      knowledge_engineering: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      knowledge_geography: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      knowledge_history: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      knowledge_local: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      knowledge_nature: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      knowledge_nobility: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      knowledge_planes: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      knowledge_religion: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      linguistics: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      perception: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          wis_bonus: true
        }
      },
      perform_1: {
        variant_name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          cha_bonus: true
        }
      },
      perform_2: {
        variant_name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          cha_bonus: true
        }
      },
      profession_1: {
        variant_name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          wis_bonus: true
        }
      },
      profession_2: {
        variant_name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          wis_bonus: true
        }
      },
      ride: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          dex_bonus: true
        }
      },
      sense_motive: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          wis_bonus: true
        }
      },
      sleight_of_hand: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          dex_bonus: true
        }
      },
      spellcraft: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      stealth: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          dex_bonus: true
        }
      },
      survival: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          wis_bonus: true
        }
      },
      swim: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: true
        }
      },
      use_magic_device: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          cha_bonus: true
        }
      },
      custom_1: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false
        }
      },
      custom_2: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false
        }
      },
      custom_3: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false
        }
      },
      custom_4: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false
        }
      }
    },
    spells: {
      per_day: {
        level_0: "",
        level_1: "",
        level_2: "",
        level_3: "",
        level_4: "",
        level_5: "",
        level_6: "",
        level_7: "",
        level_8: "",
        level_9: ""
      },
      dc: {
        level_0: "",
        level_1: "",
        level_2: "",
        level_3: "",
        level_4: "",
        level_5: "",
        level_6: "",
        level_7: "",
        level_8: "",
        level_9: ""
      },
      known: {
        level_0: "",
        level_1: "",
        level_2: "",
        level_3: "",
        level_4: "",
        level_5: "",
        level_6: "",
        level_7: "",
        level_8: "",
        level_9: ""
      },
      book: [{
        level_0: []
      }, {
        level_1: []
      }, {
        level_2: []
      }, {
        level_3: []
      }, {
        level_4: []
      }, {
        level_5: []
      }, {
        level_6: []
      }, {
        level_7: []
      }, {
        level_8: []
      }, {
        level_9: []
      }]
    },
    notes: {
      character: "",
      story: "",
    }
  };

  // exposed methods
  return {
    data: data
  };

})();

var nif = (function() {

  var data = {
    basics: {
      name: "Nif Amakir",
      race: "Elf",
      class: "Wizard",
      level: "6",
      size: "Medium",
      alignment: "Lawful Neutral",
      xp: "30,214",
      height: "6'0",
      weight: "136 lbs",
      age: "120",
      gender: "Male",
      speed: "30 ft, 6 sq",
      initiative: "3",
      hero_points: "",
      luck_points: ""
    },
    statistics: {
      stats: {
        str: {
          score: "8",
          temp: ""
        },
        dex: {
          score: "17",
          temp: "15"
        },
        con: {
          score: "14",
          temp: ""
        },
        int: {
          score: "21",
          temp: "23"
        },
        wis: {
          score: "12",
          temp: ""
        },
        cha: {
          score: "10",
          temp: ""
        }
      },
      feats: "Alertness, Augment Summoning, Craft Wondrous Item, Greater Spell Focus (Conjuration), Scribe Scroll, Spell Focus (Conjuration)",
      traits: "Resilient",
      languages: "Celestial, Common, Draconic, Dwarven, Elven, Giant, Gnome, Goblin, Orc, Sylvan, Undercommon",
      special_abilities: "Arcane bond (Su), Bonus feats, Cantrips, Arcane schools, Teleportation sub school, Opposition arcane school, Elven Immunities (Ex), Elven Magic (Ex), Keen Senses (Ex), Low-Light Vision (Ex), Headband of Vast Intelligence skill (Use Magic Device), Linguistics Skill (Dwarven, Giant, Undercommon), Shift (Su), Summoner's Charm (Su), Weapon Familiarity (Ex)"
    },
    equipment: {
      gear: "Spell component pouch, Spellbook, Backpack, Flask of Oil (3), Pouch (belt), Sack, Candle, Flint and Steel, Tindertwig, Rations (5 days), Waterskin, Bedroll, Blanket, Bloodblock, Healer's Kik, Rope (silk), Mirror, Compass, Ink, Inkpen, Paper sheets, Case for maps/scrolls, Scroll Case, Combat trained horse, Viles of insect sap (15)",
      magic_gear: "Pearl of Power (1st Level), Potion of CLW (1), Potion of Aid, Vile of Antitoxin, Vile of Holy Water, Scroll of Acid Pit (1), Scroll of Summon Monster III (6), Scroll of Invisibility (2), Scroll of Create Pit (1), Scroll of Web (4), Scroll of Stinking Cloud (2), Scroll of Grease (0), Scroll of Mirror Image (3), Scroll of Spiked Pit (2) Scroll of Fly (3)",
      encumbrance: {
        light: "26 lbs or less",
        medium: "27–53 lbs",
        heavy: "54–80 lbs"
      },
      body_slots: {
        armor: "",
        belts: "",
        body: "",
        chest: "",
        eyes: "",
        feet: "",
        hands: "",
        head: "",
        headband: "Headband of Vast Intelligence +2",
        neck: "Amulet of Natural Armor +1",
        ring_left_hand: "Ring of Sustenance",
        ring_right_hand: "",
        shield: "",
        shoulders: "Cloak of Resistance +2",
        wrist: ""
      },
      wealth: {
        platinum: "",
        gold: "1,090",
        silver: "",
        copper: ""
      },
      consumable: [{
        item: "Wand of Lightning Bolt",
        current: "7",
        total: "50",
        used: "43"
      }, {
        item: "Shift",
        current: "9",
        total: "9",
        used: ""
      }]
    },
    defense: {
      hp: {
        total: "42",
        temp: "",
        damage: "",
        non_lethal_damage: "",
        current: ""
      },
      ac: {
        misc: "",
        temp: "",
        armor: "",
        shield: "",
        deflect: "",
        dodge: "",
        natural: "1",
        size_bonus: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          plus_ten: true,
          ac_armor: true,
          ac_shield: true,
          ac_deflect: true,
          ac_dodge: true,
          ac_natural: true,
          size: true
        }
      },
      flat_footed: {
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          plus_ten: true,
          ac_armor: true,
          ac_shield: true,
          ac_deflect: true,
          ac_natural: true,
          size: true
        }
      },
      touch: {
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          plus_ten: true,
          ac_deflect: true,
          ac_dodge: true,
          size: true
        }
      },
      ac_notes: "",
      fortitude: {
        base: "2",
        racial: "",
        resistance: "2",
        misc: "3",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: true,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false
        }
      },
      reflex: {
        base: "2",
        racial: "",
        resistance: "2",
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false
        }
      },
      will: {
        base: "5",
        racial: "",
        resistance: "2",
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: true,
          cha_bonus: false
        }
      },
      save_notes: "Immune to sleep effecrs, +2 against enchantment spells and effects"
    },
    offense: {
      base_attack: "3",
      special_size_bonus: "",
      concentration: "12",
      cmb: {
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: true,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          bab: true,
          level: false,
          half_level: false,
          special_size: true
        }
      },
      cmd: {
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: true,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          bab: true,
          level: false,
          half_level: false,
          special_size: true,
          plus_ten: true
        }
      },
      melee_attack: {
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: true,
          bab: true,
          special_size: true
        }
      },
      ranged_attack: {
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          dex_bonus: true,
          bab: true,
          special_size: true
        }
      },
      attack: {
        melee: [{
          weapon: "Dagger (Master Work)",
          attack: "3",
          damage: "1d6+1",
          critical: "19–20/x2"
        }],
        ranged: [{
          weapon: "Shortbow",
          attack: "6",
          damage: "1d6",
          critical: "x3",
          range: "60 ft",
          ammo: "50"
        }]
      },
      attack_notes: ""
    },
    skills: {
      acrobatics: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          dex_bonus: true
        }
      },
      appraise: {
        ranks: "2",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          int_bonus: true
        }
      },
      bluff: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          cha_bonus: true
        }
      },
      climb: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: true
        }
      },
      craft_1: {
        variant_name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      craft_2: {
        variant_name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      diplomacy: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          cha_bonus: true
        }
      },
      disable_device: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          dex_bonus: true
        }
      },
      disguise: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          cha_bonus: true
        }
      },
      escape_artist: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          dex_bonus: true
        }
      },
      fly: {
        ranks: "2",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          dex_bonus: true
        }
      },
      handle_animal: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          cha_bonus: true
        }
      },
      heal: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          wis_bonus: true
        }
      },
      intimidate: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          cha_bonus: true
        }
      },
      knowledge_arcana: {
        ranks: "3",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          int_bonus: true
        }
      },
      knowledge_dungeoneering: {
        ranks: "2",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          int_bonus: true
        }
      },
      knowledge_engineering: {
        ranks: "1",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          int_bonus: true
        }
      },
      knowledge_geography: {
        ranks: "1",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          int_bonus: true
        }
      },
      knowledge_history: {
        ranks: "1",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          int_bonus: true
        }
      },
      knowledge_local: {
        ranks: "1",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          int_bonus: true
        }
      },
      knowledge_nature: {
        ranks: "1",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          int_bonus: true
        }
      },
      knowledge_nobility: {
        ranks: "1",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          int_bonus: true
        }
      },
      knowledge_planes: {
        ranks: "3",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          int_bonus: true
        }
      },
      knowledge_religion: {
        ranks: "3",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          int_bonus: true
        }
      },
      linguistics: {
        ranks: "3",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          int_bonus: true
        }
      },
      perception: {
        ranks: "6",
        misc: "4",
        current: "",
        bonuses: {
          class_skill: false,
          wis_bonus: true
        }
      },
      perform_1: {
        variant_name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          cha_bonus: true
        }
      },
      perform_2: {
        variant_name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          cha_bonus: true
        }
      },
      profession_1: {
        variant_name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          wis_bonus: true
        }
      },
      profession_2: {
        variant_name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          wis_bonus: true
        }
      },
      ride: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          dex_bonus: true
        }
      },
      sense_motive: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          wis_bonus: true
        }
      },
      sleight_of_hand: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          dex_bonus: true
        }
      },
      spellcraft: {
        ranks: "6",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          int_bonus: true
        }
      },
      stealth: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          dex_bonus: true
        }
      },
      survival: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          wis_bonus: true
        }
      },
      swim: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: true
        }
      },
      use_magic_device: {
        ranks: "6",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          cha_bonus: true
        }
      },
      custom_1: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false
        }
      },
      custom_2: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false
        }
      },
      custom_3: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false
        }
      },
      custom_4: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false
        }
      }
    },
    spells: {
      per_day: {
        level_0: "4",
        level_1: "5",
        level_2: "4",
        level_3: "3",
        level_4: "",
        level_5: "",
        level_6: "",
        level_7: "",
        level_8: "",
        level_9: ""
      },
      dc: {
        level_0: "16",
        level_1: "17",
        level_2: "18",
        level_3: "19",
        level_4: "",
        level_5: "",
        level_6: "",
        level_7: "",
        level_8: "",
        level_9: ""
      },
      known: {
        level_0: "",
        level_1: "",
        level_2: "",
        level_3: "",
        level_4: "",
        level_5: "",
        level_6: "",
        level_7: "",
        level_8: "",
        level_9: ""
      },
      book: [{
        level_0: [
          { name: "Bleed", prepared: 0, active: false, cast: 0 },
          { name: "Erase", prepared: 0, active: false, cast: 0 },
          { name: "Daze", prepared: 0, active: false, cast: 0 },
          { name: "Disrupt Undead", prepared: 0, active: false, cast: 0 },
          { name: "Touch of Fatigue", prepared: 0, active: false, cast: 0 },
          { name: "Prestidigitation", prepared: 0, active: false, cast: 0 },
          { name: "Light", prepared: 0, active: false, cast: 0 },
          { name: "Ghost Sound", prepared: 0, active: false, cast: 0 },
          { name: "Spark", prepared: 0, active: false, cast: 0 },
          { name: "Acid Splash", prepared: 0, active: false, cast: 0 },
          { name: "Mage Hand", prepared: 0, active: false, cast: 0 },
          { name: "Flare", prepared: 0, active: false, cast: 0 },
          { name: "Detect Magic", prepared: 1, active: false, cast: 0 },
          { name: "Detect Poison", prepared: 0, active: false, cast: 0 },
          { name: "Dancing Lights", prepared: 1, active: false, cast: 0 },
          { name: "Mending", prepared: 0, active: false, cast: 0 },
          { name: "Arcane Mark", prepared: 0, active: false, cast: 0 },
          { name: "Message", prepared: 1, active: false, cast: 0 },
          { name: "Ray of Frost", prepared: 0, active: false, cast: 0 },
          { name: "Read Magic", prepared: 1, active: false, cast: 0 },
          { name: "Open Close", prepared: 0, active: false, cast: 0 },
          { name: "Resistance", prepared: 0, active: false, cast: 0 }
        ]
      }, {
        level_1: [
          { name: "Comprehend Languages", prepared: 0, active: false, cast: 0 },
          { name: "Enlarge Person", prepared: 0, active: false, cast: 0 },
          { name: "Feather Fall", prepared: 0, active: false, cast: 0 },
          { name: "Grease", prepared: 2, active: false, cast: 0 },
          { name: "Mage Armor", prepared: 0, active: false, cast: 0 },
          { name: "Mount", prepared: 0, active: false, cast: 0 },
          { name: "Obscuring Mist", prepared: 1, active: false, cast: 0 },
          { name: "Protection from Chaos", prepared: 0, active: false, cast: 0 },
          { name: "Protection from Evil", prepared: 2, active: false, cast: 1 },
          { name: "Shield", prepared: 0, active: false, cast: 0 },
          { name: "Summon Monster I", prepared: 0, active: false, cast: 0 },
          { name: "Unseen Servant", prepared: 0, active: false, cast: 0 }
        ]
      }, {
        level_2: [
          { name: "Blur", prepared: 0, active: false, cast: 0 },
          { name: "Create Pit", prepared: 0, active: false, cast: 0 },
          { name: "Flaming Sphere", prepared: 0, active: false, cast: 0 },
          { name: "Glitterdust", prepared: 1, active: false, cast: 0 },
          { name: "Invisibility", prepared: 1, active: false, cast: 0 },
          { name: "Levitate", prepared: 0, active: false, cast: 0 },
          { name: "Mirror Image", prepared: 1, active: false, cast: 1 },
          { name: "Resist Energy", prepared: 0, active: false, cast: 0 },
          { name: "Stone Call", prepared: 0, active: false, cast: 0 },
          { name: "Summon Monster II", prepared: 0, active: false, cast: 0 },
          { name: "Web", prepared: 1, active: false, cast: 1 }
        ]
      }, {
        level_3: [
          { name: "Stinking Cloud", prepared: 0, active: false, cast: 0 },
          { name: "Summon Monster III", prepared: 1, active: false, cast: 1 },
          { name: "Spiked Pit", prepared: 1, active: false, cast: 0 },
          { name: "Aqueous Orb", prepared: 0, active: false, cast: 0 },
          { name: "Fly", prepared: 1, active: false, cast: 1 },
          { name: "Sleet Storm", prepared: 0, active: false, cast: 0 }
        ]
      }, {
        level_4: []
      }, {
        level_5: []
      }, {
        level_6: []
      }, {
        level_7: []
      }, {
        level_8: []
      }, {
        level_9: []
      }]
    },
    notes: {
      character: "<strong>Resilient</strong> (+1 trait bonus on Fortitude saves)<br><strong>Arcane bond (Su)</strong> Rat Bower, +2 Fortitude save,<br><strong>Bonus feats</strong>,<br><strong>Cantrips</strong>,<br><strong>Arcane schools</strong> Conjuration,<br><strong>Teleportation sub school</strong>,<br><strong>Opposition arcane school</strong> Enchantment, Necromancy,<br><strong>Elven Immunities (Ex)</strong> +2 against enchantment spells and effects,<br><strong>Elven Magic (Ex)</strong> +2 caster level checks made to overcome SR. +2 Spellcraft check to identify properties of magic items,<br><strong>Keen Senses (Ex)</strong> +2 Perception checks,<br><strong>Low-Light Vision (Ex)</strong> See x2 as far as humans in low illumination,<br><strong>Headband of Vast Intelligence skill</strong> Use Magic Device,<br><strong>Linguistics Skill</strong> Dwarven, Giant, Undercommon,<br><strong>Shift (Su)</strong> Teleport 15 feet 9 times per day,<br><strong>Summoner's Charm (Su)</strong> +3 rounds duration for Conjuration (Summoning) spells,<br><strong>Weapon Familiarity (Ex)</strong> Proficient with longbows (including composite longbows), longswords, rapiers, and shortbows (including composite shortbows), treat weapon with \"elven\" in name as a martial weapon.",
      story: ""
    }
  };

  // exposed methods
  return {
    data: data
  };

})();

var ro = (function() {

  var data = {
    basics: {
      name: "Ro Flint",
      race: "Elf",
      class: "Magus Bladebound",
      level: "3",
      size: "Medium",
      alignment: "Lawful Neutral",
      xp: "3,891",
      height: "6'0",
      weight: "",
      age: "120",
      gender: "Male",
      speed: "30 ft, 6 sq",
      initiative: "4",
      hero_points: "",
      luck_points: ""
    },
    statistics: {
      stats: {
        str: {
          score: "12",
          temp: ""
        },
        dex: {
          score: "18",
          temp: ""
        },
        con: {
          score: "10",
          temp: ""
        },
        int: {
          score: "16",
          temp: ""
        },
        wis: {
          score: "10",
          temp: ""
        },
        cha: {
          score: "7",
          temp: ""
        }
      },
      feats: "Weapon Finesse, Dervish Dance, Alertness",
      traits: "Magical Lineage (Shocking Grasp), Focused Mind (+2 on concentration checks)",
      languages: "Common, Draconic, Dwarven, Elven, Orc",
      special_abilities: "Low-Light Vision (Ex), Elven Immunities (Ex), Elven Magic (Ex), Weapon Familiarity (Ex), Keen Senses (Ex), Arcane Pool, Cantrips, Spell Combat (EX), Black Blade (Ex)"
    },
    equipment: {
      gear: "Fur coat and cold weather outfit, Rapier, Spell component pouch, Spellbook, Backpack, Flask of Oil x3, Pouch (belt), Sack, Candle, Flint and Steel, Tindertwig, Rations (5 days), Waterskin, Bedroll, Blanket, Rope (silk), Mirror, Compass, Ink, Inkpen, Paper sheets, Case for maps/scrolls, Tent for 2, Trained Donkey (commands: come, down, stay heal, work), Alchemist Fire (3), Potion of CLW (3)",
      magic_gear: "Short Sword +1, Black Blade Scimitar +1",
      encumbrance: {
        light: "43 lbs or less",
        medium: "44–86 lbs",
        heavy: "87–130 lbs"
      },
      body_slots: {
        armor: "Studded leather",
        belts: "",
        body: "",
        chest: "",
        eyes: "",
        feet: "",
        hands: "",
        head: "",
        headband: "",
        neck: "",
        ring_left_hand: "",
        ring_right_hand: "",
        shield: "",
        shoulders: "",
        wrist: ""
      },
      wealth: {
        platinum: "",
        gold: "570",
        silver: "",
        copper: ""
      },
      consumable: [{
        item: "Arcane Pool",
        current: "4",
        total: "4",
        used: ""
      }, {
        item: "Black Blade Arcane Pool",
        current: "1",
        total: "1",
        used: ""
      }, {
        item: "Alchemist Fire",
        current: "3",
        total: "3",
        used: ""
      }, {
        item: "Potion of CLW",
        current: "3",
        total: "3",
        used: ""
      }]
    },
    defense: {
      hp: {
        total: "20",
        temp: "",
        damage: "9",
        non_lethal_damage: "",
        current: ""
      },
      ac: {
        misc: "",
        temp: "",
        armor: "3",
        shield: "",
        deflect: "",
        dodge: "",
        natural: "",
        size_bonus: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          plus_ten: true,
          ac_armor: true,
          ac_shield: true,
          ac_deflect: true,
          ac_dodge: true,
          ac_natural: true,
          size: true
        }
      },
      flat_footed: {
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          plus_ten: true,
          ac_armor: true,
          ac_shield: true,
          ac_deflect: true,
          ac_natural: true,
          size: true
        }
      },
      touch: {
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          plus_ten: true,
          ac_deflect: true,
          ac_dodge: true,
          size: true
        }
      },
      ac_notes: "",
      fortitude: {
        base: "3",
        racial: "",
        resistance: "",
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: true,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false
        }
      },
      reflex: {
        base: "1",
        racial: "",
        resistance: "",
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false
        }
      },
      will: {
        base: "3",
        racial: "",
        resistance: "",
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: true,
          cha_bonus: false
        }
      },
      save_notes: "Immune to sleep effecrs, +2 against enchantment spells and effects, +7 against cold weather"
    },
    offense: {
      base_attack: "2",
      special_size_bonus: "",
      concentration: "8",
      cmb: {
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: true,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          bab: true,
          level: false,
          half_level: false,
          special_size: true
        }
      },
      cmd: {
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: true,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          bab: true,
          level: false,
          half_level: false,
          special_size: true,
          plus_ten: true
        }
      },
      melee_attack: {
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: true,
          bab: true,
          special_size: true
        }
      },
      ranged_attack: {
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          dex_bonus: true,
          bab: true,
          special_size: true
        }
      },
      attack: {
        melee: [{
          weapon: "Rapier",
          attack: "6",
          damage: "1d6+4",
          critical: "18–20/x2"
        }, {
          weapon: "Black Blade Scimitar +1",
          attack: "7",
          damage: "1d6+5",
          critical: "18–20/x2"
        }, {
          weapon: "Spell Strike BB Scimitar +1",
          attack: "5/5",
          damage: "1d6+5",
          critical: "18–20/x2"
        }, {
          weapon: "Shortsword +1",
          attack: "7",
          damage: "1d6+2",
          critical: "18–20/x2"
        }],
        ranged: [{
          weapon: "Shortbow",
          attack: "5",
          damage: "1d6",
          critical: "x3",
          range: "60 ft",
          ammo: "50"
        }]
      },
      attack_notes: "+1 attack, +2 damage"
    },
    skills: {
      acrobatics: {
        ranks: "3",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          dex_bonus: true
        }
      },
      appraise: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      bluff: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          cha_bonus: true
        }
      },
      climb: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: true
        }
      },
      craft_1: {
        variant_name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      craft_2: {
        variant_name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      diplomacy: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          cha_bonus: true
        }
      },
      disable_device: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          dex_bonus: true
        }
      },
      disguise: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          cha_bonus: true
        }
      },
      escape_artist: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          dex_bonus: true
        }
      },
      fly: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          dex_bonus: true
        }
      },
      handle_animal: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          cha_bonus: true
        }
      },
      heal: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          wis_bonus: true
        }
      },
      intimidate: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          cha_bonus: true
        }
      },
      knowledge_arcana: {
        ranks: "1",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          int_bonus: true
        }
      },
      knowledge_dungeoneering: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      knowledge_engineering: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      knowledge_geography: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      knowledge_history: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      knowledge_local: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      knowledge_nature: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      knowledge_nobility: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      knowledge_planes: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      knowledge_religion: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      linguistics: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      perception: {
        ranks: "3",
        misc: "2",
        current: "",
        bonuses: {
          class_skill: false,
          wis_bonus: true
        }
      },
      perform_1: {
        variant_name: "Dance",
        ranks: "2",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          cha_bonus: true
        }
      },
      perform_2: {
        variant_name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          cha_bonus: true
        }
      },
      profession_1: {
        variant_name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          wis_bonus: true
        }
      },
      profession_2: {
        variant_name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          wis_bonus: true
        }
      },
      ride: {
        ranks: "2",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          dex_bonus: true
        }
      },
      sense_motive: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          wis_bonus: true
        }
      },
      sleight_of_hand: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          dex_bonus: true
        }
      },
      spellcraft: {
        ranks: "3",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          int_bonus: true
        }
      },
      stealth: {
        ranks: "1",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          dex_bonus: true
        }
      },
      survival: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          wis_bonus: true
        }
      },
      swim: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: true
        }
      },
      use_magic_device: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          cha_bonus: true
        }
      },
      custom_1: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false
        }
      },
      custom_2: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false
        }
      },
      custom_3: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false
        }
      },
      custom_4: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false
        }
      }
    },
    spells: {
      per_day: {
        level_0: "4",
        level_1: "4",
        level_2: "",
        level_3: "",
        level_4: "",
        level_5: "",
        level_6: "",
        level_7: "",
        level_8: "",
        level_9: ""
      },
      dc: {
        level_0: "13",
        level_1: "14",
        level_2: "",
        level_3: "",
        level_4: "",
        level_5: "",
        level_6: "",
        level_7: "",
        level_8: "",
        level_9: ""
      },
      known: {
        level_0: "",
        level_1: "",
        level_2: "",
        level_3: "",
        level_4: "",
        level_5: "",
        level_6: "",
        level_7: "",
        level_8: "",
        level_9: ""
      },
      book: [{
        level_0: [
          { name: "Acid Splash", prepared: 0, active: false, cast: 0 },
          { name: "Arcane Mark", prepared: 0, active: false, cast: 0 },
          { name: "Dancing Lights", prepared: 1, active: false, cast: 0 },
          { name: "Daze", prepared: 0, active: false, cast: 0 },
          { name: "Detect Magic", prepared: 1, active: false, cast: 0 },
          { name: "Disrupt Undead", prepared: 0, active: false, cast: 0 },
          { name: "Flare", prepared: 0, active: false, cast: 0 },
          { name: "Ghost Sound", prepared: 0, active: false, cast: 0 },
          { name: "Light", prepared: 0, active: false, cast: 0 },
          { name: "Mage Hand", prepared: 1, active: false, cast: 0 },
          { name: "Open Close", prepared: 0, active: false, cast: 0 },
          { name: "Prestidigitation", prepared: 0, active: false, cast: 0 },
          { name: "Ray of Frost", prepared: 0, active: false, cast: 0 },
          { name: "Read Magic", prepared: 0, active: false, cast: 0 },
          { name: "Spark", prepared: 0, active: false, cast: 0 }
        ]
      }, {
        level_1: [
          { name: "Color Spray", prepared: 0, active: false, cast: 0 },
          { name: "Grease", prepared: 1, active: false, cast: 0 },
          { name: "Shocking Grasp", prepared: 2, active: false, cast: 0 },
          { name: "True Strike", prepared: 0, active: false, cast: 0 },
          { name: "Magic Missile", prepared: 0, active: false, cast: 0 },
          { name: "Shield", prepared: 1, active: false, cast: 0 },
          { name: "Vanish", prepared: 0, active: false, cast: 0 },
          { name: "Obscuring Mist", prepared: 0, active: false, cast: 0 },
          { name: "Chill Touch", prepared: 0, active: false, cast: 0 },
          { name: "Frostbite", prepared: 0, active: false, cast: 0 },
          { name: "Infernal Healing", prepared: 0, active: false, cast: 0 },
          { name: "Windy Escape", prepared: 0, active: false, cast: 0 },
          { name: "Unerring Weapon", prepared: 0, active: false, cast: 0 },
          { name: "Ray of Enfeeblement", prepared: 0, active: false, cast: 0 },
          { name: "Burning Hands", prepared: 0, active: false, cast: 0 },
          { name: "Expeditious Retreat", prepared: 0, active: false, cast: 0 }
        ]
      }, {
        level_2: []
      }, {
        level_3: []
      }, {
        level_4: []
      }, {
        level_5: []
      }, {
        level_6: []
      }, {
        level_7: []
      }, {
        level_8: []
      }, {
        level_9: []
      }]
    },
    notes: {
      character: "<strong>Low-Light Vision (Ex)</strong> See x2 as far as humans in low illumination,<br><br><strong>Elven Immunities (Ex)</strong> Immune to magic sleep effects, +2 against Enchantment spells and effects,<br><br><strong>Elven Magic (Ex)</strong> +2 caster level checks made to overcome SR. +2 Spellcraft check to identify properties of magic items,<br><br><strong>Weapon Familiarity (Ex)</strong> Proficient with longbows (including composite longbows), longswords, rapiers, and shortbows (including composite shortbows), treat weapon with \"elven\" in name as a martial weapon),<br><br><strong>Keen Senses (Ex)</strong> +2 Perception checks,<br><br><strong>Arcane Pool</strong> 4,<br><br><strong>Cantrips</strong> <strong>Spell Combat (EX)</strong> cast spells and wield his weapons at the same time.<br><br><strong>Black Blade (Ex)</strong> Bladebound magus' gain a powerful sentient weapon called a black blade.<br><br><strong>Black Blade Scimitar +1</strong><br>Purpose: To protect the Elves.<br>Enhancement Bonus +1, Int 11, Wis/Cha 7, Ego 5,<br>Special: Alertness, black blade strike, telepathy, unbreakable.",
      story: ""
    }
  };

  // exposed methods
  return {
    data: data
  };

})();

var vos = (function() {

  var data = {
    basics: {
      name: "Vos Thunderstomp",
      race: "Dwarf",
      class: "Monk",
      level: "5",
      size: "Medium",
      alignment: "Chaotic Neutral",
      xp: "18,752",
      height: "5'0",
      weight: "190 lbs",
      age: "40",
      gender: "Male",
      speed: "30 ft, 6 sq",
      initiative: "2",
      hero_points: "2",
      luck_points: ""
    },
    statistics: {
      stats: {
        str: {
          score: "17",
          temp: ""
        },
        dex: {
          score: "14",
          temp: ""
        },
        con: {
          score: "12",
          temp: ""
        },
        int: {
          score: "10",
          temp: ""
        },
        wis: {
          score: "14",
          temp: ""
        },
        cha: {
          score: "7",
          temp: ""
        }
      },
      feats: "Improved Grapple, Weapon Focus (Unarmed Strike), Dodge, Extra Ki",
      traits: "",
      languages: "Common, Dwarven",
      special_abilities: "Darkvision, Defensive Training, Greed, Hatred, Hardy, Stability, Stonecunning, Weapon Familiarity, Evasion, Flurry of Blows +3/+3 (Ex), Stunning Fist (Ex), Unarmed Strike, AC Bonus +1 (Ex), Evasion (Ex), Fast Movement +10ft (Ex), Maneuver Training (Ex), Still Mind (Ex), Ki Pool (Su), Slow Fall (Ex), High Jump (Ex), Purity of Body (Ex)"
    },
    equipment: {
      gear: "Backpack, Flask Of Oil (3), Pouch (belt), Sack, Candle, Flint And Steel, Tindertwig, Rations (5 Days), Waterskin, Bedroll, Blanket, Bloodblock, Rope (silk), Mirror, Compass, Ink, Inkpen, Paper Sheets, Case For Maps/scrolls, Torch, Rubbing Poweder, Rubbing Oils, Fine Cheese (1), Smelly Cheese (3), Wine (2), Wrestling Costume (2), Alchemist Fire (3), Dagger, Lavendar soap, Soap bar",
      magic_gear: "Good Berries (5), Potion of Stabilise, Potion of Cure Light Wounds (0), Potion of Cure Moderate Wounds (0), Potion of Owls Wisdom (0)",
      encumbrance: {
        light: "76 lbs or less",
        medium: "77–153 lbs",
        heavy: "154–230 lbs"
      },
      body_slots: {
        armor: "",
        belts: "",
        body: "",
        chest: "",
        eyes: "",
        feet: "",
        hands: "",
        head: "",
        headband: "",
        neck: "",
        ring_left_hand: "",
        ring_right_hand: "Ring of Protection +1",
        shield: "",
        shoulders: "Cloak of Resistance +1",
        wrist: "Bracers of Armor +1"
      },
      wealth: {
        platinum: "",
        gold: "2,828",
        silver: "5",
        copper: ""
      },
      consumable: [{
        item: "Ki Pool",
        current: "",
        total: "6",
        used: ""
      }, {
        item: "Scented Oils",
        current: "",
        total: "5",
        used: "1"
      }, {
        item: "Stunning Fist",
        current: "",
        total: "5",
        used: ""
      }]
    },
    defense: {
      hp: {
        total: "39",
        temp: "",
        damage: "",
        non_lethal_damage: "",
        current: ""
      },
      ac: {
        misc: "1",
        temp: "",
        armor: "1",
        shield: "",
        deflect: "1",
        dodge: "1",
        natural: "",
        size_bonus: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: true,
          cha_bonus: false,
          plus_ten: true,
          ac_armor: true,
          ac_shield: true,
          ac_deflect: true,
          ac_dodge: true,
          ac_natural: true,
          size: true
        }
      },
      flat_footed: {
        misc: "1",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: true,
          cha_bonus: false,
          plus_ten: true,
          ac_armor: true,
          ac_shield: true,
          ac_deflect: true,
          ac_natural: true,
          size: true
        }
      },
      touch: {
        misc: "1",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: true,
          cha_bonus: false,
          plus_ten: true,
          ac_deflect: true,
          ac_dodge: true,
          size: true
        }
      },
      ac_notes: "",
      fortitude: {
        base: "4",
        racial: "",
        resistance: "1",
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: true,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false
        }
      },
      reflex: {
        base: "4",
        racial: "",
        resistance: "1",
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false
        }
      },
      will: {
        base: "4",
        racial: "",
        resistance: "1",
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: true,
          cha_bonus: false
        }
      },
      save_notes: "Immunity to all diseases, +2 against poison, spells, and spell-like abilities, +2 against enchantment spells and effects."
    },
    offense: {
      base_attack: "3",
      special_size_bonus: "",
      concentration: "",
      cmb: {
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: true,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          bab: true,
          level: true,
          half_level: false,
          special_size: true
        }
      },
      cmd: {
        misc: "1",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: true,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: true,
          cha_bonus: false,
          bab: true,
          level: false,
          half_level: false,
          special_size: true,
          plus_ten: true
        }
      },
      melee_attack: {
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: true,
          bab: true,
          special_size: true
        }
      },
      ranged_attack: {
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          dex_bonus: true,
          bab: true,
          special_size: true
        }
      },
      attack: {
        melee: [{
          weapon: "Flurry of Blows",
          attack: "6/6",
          damage: "1d8+3",
          critical: "20x2"
        }, {
          weapon: "Grapple",
          attack: "10",
          damage: "1d8+3",
          critical: "20x2"
        }, {
          weapon: "Maintain Grapple ",
          attack: "15",
          damage: "1d8+3",
          critical: "20x2"
        }, {
          weapon: "Stunning Fist",
          attack: "7",
          damage: "1d8+3",
          critical: "20x2"
        }],
        ranged: [{
          weapon: "Shortbow",
          attack: "6",
          damage: "1d6",
          critical: "x3",
          range: "60 ft",
          ammo: "50"
        }]
      },
      attack_notes: "+1 weapon focus (unarmed strike), +2 grapple, +2 to resist grapple"
    },
    skills: {
      acrobatics: {
        ranks: "5",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          dex_bonus: true
        }
      },
      appraise: {
        ranks: "",
        misc: "2",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      bluff: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          cha_bonus: true
        }
      },
      climb: {
        ranks: "4",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          str_bonus: true
        }
      },
      craft_1: {
        variant_name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      craft_2: {
        variant_name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      diplomacy: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          cha_bonus: true
        }
      },
      disable_device: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          dex_bonus: true
        }
      },
      disguise: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          cha_bonus: true
        }
      },
      escape_artist: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          dex_bonus: true
        }
      },
      fly: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          dex_bonus: true
        }
      },
      handle_animal: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          cha_bonus: true
        }
      },
      heal: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          wis_bonus: true
        }
      },
      intimidate: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          cha_bonus: true
        }
      },
      knowledge_arcana: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      knowledge_dungeoneering: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      knowledge_engineering: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      knowledge_geography: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      knowledge_history: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      knowledge_local: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      knowledge_nature: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      knowledge_nobility: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      knowledge_planes: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      knowledge_religion: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      linguistics: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      perception: {
        ranks: "5",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          wis_bonus: true
        }
      },
      perform_1: {
        variant_name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          cha_bonus: true
        }
      },
      perform_2: {
        variant_name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          cha_bonus: true
        }
      },
      profession_1: {
        variant_name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          wis_bonus: true
        }
      },
      profession_2: {
        variant_name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          wis_bonus: true
        }
      },
      ride: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          dex_bonus: true
        }
      },
      sense_motive: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          wis_bonus: true
        }
      },
      sleight_of_hand: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          dex_bonus: true
        }
      },
      spellcraft: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      stealth: {
        ranks: "5",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          dex_bonus: true
        }
      },
      survival: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          wis_bonus: true
        }
      },
      swim: {
        ranks: "1",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          str_bonus: true
        }
      },
      use_magic_device: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          cha_bonus: true
        }
      },
      custom_1: {
        name: "Acrobatics (Jump)",
        ranks: "5",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: true,
          half_level: false
        }
      },
      custom_2: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false
        }
      },
      custom_3: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false
        }
      },
      custom_4: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false
        }
      }
    },
    spells: {
      per_day: {
        level_0: "",
        level_1: "",
        level_2: "",
        level_3: "",
        level_4: "",
        level_5: "",
        level_6: "",
        level_7: "",
        level_8: "",
        level_9: ""
      },
      dc: {
        level_0: "",
        level_1: "",
        level_2: "",
        level_3: "",
        level_4: "",
        level_5: "",
        level_6: "",
        level_7: "",
        level_8: "",
        level_9: ""
      },
      known: {
        level_0: "",
        level_1: "",
        level_2: "",
        level_3: "",
        level_4: "",
        level_5: "",
        level_6: "",
        level_7: "",
        level_8: "",
        level_9: ""
      },
      book: [{
        level_0: []
      }, {
        level_1: []
      }, {
        level_2: []
      }, {
        level_3: []
      }, {
        level_4: []
      }, {
        level_5: []
      }, {
        level_6: []
      }, {
        level_7: []
      }, {
        level_8: []
      }, {
        level_9: []
      }]
    },
    notes: {
      character: "<strong>+2 Constitution, +2 Wisdom, –2 Charisma</strong> Dwarves are both tough and wise, but also a bit gruff.<br><br><strong>Medium</strong> Dwarves are Medium creatures and have no bonuses or penalties due to their size.<br><br><strong>Slow and Steady</strong> Dwarves have a base speed of 20 feet, but their speed is never modified by armor or encumbrance.<br><br><strong>Darkvision</strong> Dwarves can see in the dark up to 60 feet.<br><br><strong>Defensive Training</strong> Dwarves get a +4 dodge bonus to AC against monsters of the giant subtype.<br><br><strong>Greed</strong> Dwarves receive a +2 racial bonus on Appraise skill checks made to determine the price of nonmagical goods that contain precious metals or gemstones.<br><br><strong>Hatred</strong> Dwarves receive a +1 bonus on attack rolls against humanoid creatures of the orc and goblinoid subtypes due to special training against these hated foes.<br><br><strong>Hardy</strong> Dwarves receive a +2 racial bonus on saving throws against poison, spells, and spell-like abilities.<br><br><strong>Stability</strong> Dwarves receive a +4 racial bonus to their Combat Maneuver Defense when resisting a bull rush or trip attempt while standing on the ground.<br><br><strong>Stonecunning</strong> Dwarves receive a +2 bonus on Perception checks to potentially notice unusual stonework, such as traps and hidden doors located in stone walls or floors. They receive a check to notice such features whenever they pass within 10 feet of them, whether or not they are actively looking.<br><br><strong>Weapon Familiarity</strong> Dwarves are proficient with battleaxes, heavy picks, and warhammers, and treat any weapon with the word \"dwarven\" in its name as a martial weapon.<br><br><strong>Languages</strong> Dwarves begin play speaking Common and Dwarven. Dwarves with high Intelligence scores can choose from the following Giant, Gnome, Goblin, Orc, Terran, and Undercommon.<br><br><strong>Weapon and Armor Proficiency</strong> Monks are proficient with the club, crossbow (light or heavy), dagger, handaxe, javelin, kama, nunchaku, quarterstaff, sai, shortspear, short sword, shuriken, siangham, sling, and spear.<br><br>Monks are not proficient with any armor or shields.<br><br>When wearing armor, using a shield, or carrying a medium or heavy load, a monk loses his AC bonus, as well as his fast movement and flurry of blows abilities.<br><br><strong>AC Bonus (Ex)</strong> When unarmored and unencumbered, the monk adds his Wisdom bonus (if any) to his AC and his CMD. In addition, a monk gains a +1 bonus to AC and CMD at 4th level. This bonus increases by 1 for every four monk levels thereafter, up to a maximum of +5 at 20th level.<br><br>These bonuses to AC apply even against touch attacks or when the monk is flat-footed. He loses these bonuses when he is immobilized or helpless, when he wears any armor, when he carries a shield, or when he carries a medium or heavy load.<br><br><strong>Flurry of Blows (Ex)</strong> Starting at 1st level, a monk can make a flurry of blows as a full-attack action. When doing so, he may make on additional attack, taking a -2 penalty on all of his attack rolls, as if using the Two-Weapon Fighting feat. These attacks can be any combination of unarmed strikes and attacks with a monk special weapon (he does not need to use two weapons to use this ability). For the purpose of these attacks, the monk's base attack bonus from his monk class levels is equal to his monk level. For all other purposes, such as qualifying for a feat or a prestige class, the monk uses his normal base attack bonus.<br><br>At 8th level, the monk can make two additional attacks when he uses flurry of blows, as if using Improved Two-Weapon Fighting (even if the monk does not meet the prerequisites for the feat).<br><br>At 15th level, the monk can make three additional attacks using flurry of blows, as if using Greater Two-Weapon Fighting (even if the monk does not meet the prerequisites for the feat).<br><br>A monk applies his full Strength bonus to his damage rolls for all successful attacks made with flurry of blows, whether the attacks are made with an off-hand or with a weapon wielded in both hands. A monk may substitute disarm, sunder, and trip combat maneuvers for unarmed attacks as part of a flurry of blows. A monk cannot use any weapon other than an unarmed strike or a special monk weapon as part of a flurry of blows. A monk with natural weapons cannot use such weapons as part of a flurry of blows, nor can he make natural attacks in addition to his flurry of blows attacks.<br><br><strong>Unarmed Strike</strong> At 1st level, a monk gains Improved Unarmed Strike as a bonus feat. A monk's attacks may be with fist, elbows, knees, and feet. This means that a monk may make unarmed strikes with his hands full. There is no such thing as an off-hand attack for a monk striking unarmed. A monk may thus apply his full Strength bonus on damage rolls for all his unarmed strikes.<br><br>Usually a monk's unarmed strikes deal lethal damage, but he can choose to deal nonlethal damage instead with no penalty on his attack roll. He has the same choice to deal lethal or nonlethal damage while grappling.<br><br>A monk's unarmed strike is treated as both a manufactured weapon and a natural weapon for the purpose of spells and effects that enhance or improve either manufactured weapons or natural weapons.<br><br>A monk also deals more damage with his unarmed strikes than a normal person would, as shown above on Table: Monk. The unarmed damage values listed on Table: Monk is for Medium monks. A Small monk deals less damage than the amount given there with his unarmed attacks, while a Large monk deals more damage; see Small or Large Monk Unarmed Damage on the table given below.<br><br><strong>Bonus Feat</strong> At 1st level, 2nd level, and every 4 levels thereafter, a monk may select a bonus feat. These feats must be taken from the following list: Catch Off-Guard, Combat Reflexes, Deflect Arrows, Dodge, Improved Grapple, Scorpion Style, and Throw Anything. At 6th level, the following feats are added to the list: Gorgon's Fist, Improved Bull Rush, Improved Disarm, Improved Feint, Improved Trip, and Mobility. At 10th level, the following feats are added to the list: Improved Critical, Medusa's Wrath, Snatch Arrows, and Spring Attack. A monk need not have any of the prerequisites normally required for these feats to select them.<br><br><strong>Stunning Fist (Ex)</strong> At 1st level, the monk gains Stunning Fist as a bonus feat, even if he does not meet the prerequisites. At 4th level, and every 4 levels thereafter, the monk gains the ability to apply a new condition to the target of his Stunning Fist. This condition replaces stunning the target for 1 round, and a successful saving throw still negates the effect. At 4th level, he can choose to make the target fatigued. At 8th level, he can make the target sickened for 1 minute. At 12th level, he can make the target staggered for 1d6+1 rounds. At 16th level, he can permanently blind or deafen the target. At 20th level, he can paralyze the target for 1d6+1 rounds. The monk must choose which condition will apply before the attack roll is made. These effects do not stack with themselves (a creature sickened by Stunning Fist cannot become nauseated if hit by Stunning Fist again), but additional hits do increase the duration.<br><br><strong>Evasion (Ex)</strong> At 2nd level or higher, a monk can avoid damage from many area-effect attacks. If a monk makes a successful Reflex saving throw against an attack that normally deals half damage on a successful save, he instead takes no damage. Evasion can be used only if a monk is wearing light armor or no armor. A helpless monk does not gain the benefit of evasion.<br><br><strong>Fast Movement (Ex)</strong> At 3rd level, a monk gains an enhancement bonus to his land speed, as shown on Table: Monk. A monk in armor or carrying a medium or heavy load loses this extra speed.<br><br><strong>Maneuver Training (Ex)</strong> At 3rd level, a monk uses his monk level in place of his base attack bonus when calculating his Combat Maneuver Bonus. Base attack bonuses granted from other classes are unaffected and are added normally.<br><br><strong>Still Mind (Ex)</strong> A monk of 3rd level or higher gains a +2 bonus on saving throws against enchantment spells and effects.<br><br><strong>Ki Pool (Su)</strong> At 4th level, a monk gains a pool of ki points, supernatural energy he can use to accomplish amazing feats. The number of points in a monk's ki pool is equal to 1/2 his monk level + his Wisdom modifier. As long as he has at least 1 point in his ki pool, he can make a ki strike. At 4th level, ki strike allows his unarmed attacks to be treated as magic weapons for the purpose of overcoming damage reduction. At 7th level, his unarmed attacks are also treated as cold iron and silver for the purpose of overcoming damage reduction. At 10th level, his unarmed attacks are also treated as lawful weapons for the purpose of overcoming damage reduction. At 16th level, his unarmed attacks are treated as adamantine weapons for the purpose of overcoming damage reduction and bypassing hardness.<br><br>By spending 1 point from his ki pool, a monk can make one additional attack at his highest attack bonus when making a flurry of blows attack. In addition, he can spend 1 point to increase his speed by 20 feet for 1 round. Finally, a monk can spend 1 point from his ki pool to give himself a +4 dodge bonus to AC for 1 round. Each of these powers is activated as a swift action. A monk gains additional powers that consume points from his ki pool as he gains levels.<br><br>The ki pool is replenished each morning after 8 hours of rest or meditation; these hours do not need to be consecutive.<br><br><strong>Slow Fall (Ex)</strong> At 4th level or higher, a monk within arm's reach of a wall can use it to slow his descent. When first gaining this ability, he takes damage as if the fall were 20 feet shorter than it actually is. The monk's ability to slow his fall (that is, to reduce the effective distance of the fall when next to a wall) improves with his monk level until at 20th level he can use a nearby wall to slow his descent and fall any distance without harm.<br><br><strong>High Jump (Ex)</strong> At 5th level, a monk adds his level to all Acrobatics checks made to jump, both for vertical jumps and horizontal jumps. In addition, he always counts as having a running start when making jump checks using Acrobatics. By spending 1 point from his ki pool as a swift action, a monk gains a +20 bonus on Acrobatics checks made to jump for 1 round.<br><br><strong>Purity of Body (Ex)</strong> At 5th level, a monk gains immunity to all diseases, including supernatural and magical diseases.<br><br><strong>Improved Grapple</strong> You do not provoke an attack of opportunity when performing a grapple combat maneuver. In addition, you receive a +2 bonus on checks made to grapple a foe. You also receive a +2 bonus to your Combat Maneuver Defense whenever an opponent tries to grapple you.<br><br><strong>Weapon Focus</strong> You gain a +1 bonus on all attack rolls you make using the selected weapon.<br><br><strong>Dodge</strong> You gain a +1 dodge bonus to your AC. A condition that makes you lose your Dex bonus to AC also makes you lose the benefits of this feat.<br><br><strong>Extra Ki</strong> You can use your ki pool more times per day than most.",
      story: ""
    }
  };

  // exposed methods
  return {
    data: data
  };

})();

var marika = (function() {

  var data = {
    basics: {
      name: "Marika Spandrell",
      race: "Human",
      class: "Rogue",
      level: "9",
      size: "Medium",
      alignment: "Chaotic Neutral",
      xp: "76,000",
      height: "5’3",
      weight: "98 lb",
      age: "23",
      gender: "Female",
      speed: "30 ft, 6 sq",
      initiative: "8",
      hero_points: "1",
      luck_points: "2"
    },
    statistics: {
      stats: {
        str: {
          score: "12",
          temp: ""
        },
        dex: {
          score: "22",
          temp: "26"
        },
        con: {
          score: "10",
          temp: ""
        },
        int: {
          score: "12",
          temp: ""
        },
        wis: {
          score: "12",
          temp: ""
        },
        cha: {
          score: "9",
          temp: ""
        }
      },
      feats: "Deft Hands, Weapon Finesse, Two Weapon Fighting, Improved Two Weapon Fighting, Double Slice, Extra Rogue Talent.",
      traits: "Child of the Streets, Deft Dodger.",
      languages: "Common, Giant, Goblin.",
      special_abilities: "Sneak Attack +5d6, Trapfinding, Trap Sense +3, Uncanny Dodge, Improved Uncanny Dodge, Minor Magic (Mage Hand 3/day), Major Magic (Unseen Servant 2/day), Fast Fingers, Fast Stealth, Powerful Sneak."
    },
    equipment: {
      gear: "Large Black Backpack, Bedroll, Silk Rope, Pencils, Ink, Paper, Sketch Book, Grappling Hook, Flint and Steel, Torch, Masterwork Thieves’ Tools (+2 Disable Device), Magnifying Glass (+2 Appraise), Merchant’s Scale (+2 Appraise), Trail Rations, Bread, Cheese and Wine.",
      magic_gear: "Potion of Cure Light Wounds (6) Potion of Cure Moderate Wounds (3), Potion of Cure Serious Wounds (2), Potion of BarkSkin (5), Potion of Shield of Faith (2), Rapier +2 (Flaming Crystal), Short Sword +2 (Frost Crystal), Studded Leather +2, Belt of Dexterity +4, Cloak of Resistance +2, Spider Climb Pendent 1/day, Ring of Protection +1, Eyes of the Eagle, Handy Haversack.",
      encumbrance: {
        light: "43 lbs or less",
        medium: "44–86 lbs",
        heavy: "87–130 lbs"
      },
      body_slots: {
        armor: "Leather +2",
        belts: "Belt of Dexterity +4",
        body: "",
        chest: "",
        eyes: "Eyes of the Eagle",
        feet: "Slippers of Spider Climbing",
        hands: "",
        head: "",
        headband: "",
        neck: "",
        ring_left_hand: "Ring of Protection +2",
        ring_right_hand: "",
        shield: "",
        shoulders: "Cloak of Resistance +3",
        wrist: ""
      },
      wealth: {
        platinum: "21",
        gold: "763",
        silver: "",
        copper: ""
      },
      consumable: [{
        item: "Slippers of Spider Climbing",
        current: "10",
        total: "10",
        used: ""
      }]
    },
    defense: {
      hp: {
        total: "53",
        temp: "",
        damage: "",
        non_lethal_damage: "",
        current: ""
      },
      ac: {
        misc: "",
        temp: "",
        armor: "4",
        shield: "",
        deflect: "2",
        dodge: "",
        natural: "",
        size_bonus: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          plus_ten: true,
          ac_armor: true,
          ac_shield: true,
          ac_deflect: true,
          ac_dodge: true,
          ac_natural: true,
          size: true
        }
      },
      flat_footed: {
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          plus_ten: true,
          ac_armor: true,
          ac_shield: true,
          ac_deflect: true,
          ac_natural: true,
          size: true
        }
      },
      touch: {
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          plus_ten: true,
          ac_deflect: true,
          ac_dodge: true,
          size: true
        }
      },
      ac_notes: "+3 dodge bonus to AC against attacks made by traps.",
      fortitude: {
        base: "3",
        racial: "",
        resistance: "3",
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false
        }
      },
      reflex: {
        base: "6",
        racial: "",
        resistance: "3",
        misc: "1",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false
        }
      },
      will: {
        base: "3",
        racial: "",
        resistance: "3",
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false
        }
      },
      save_notes: "+3 bonus on Reflex saves made to avoid traps."
    },
    offense: {
      base_attack: "6 / 1",
      special_size_bonus: "",
      concentration: "",
      cmb: {
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: true,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          bab: true,
          level: false,
          half_level: false,
          special_size: true
        }
      },
      cmd: {
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: true,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          bab: true,
          level: false,
          half_level: false,
          special_size: true,
          plus_ten: true
        }
      },
      melee_attack: {
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: true,
          bab: true,
          special_size: true
        }
      },
      ranged_attack: {
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          dex_bonus: true,
          bab: true,
          special_size: true
        }
      },
      attack: {
        melee: [{
          weapon: "Rapier +2",
          attack: "16",
          damage: "1d6+3",
          critical: "18–20/x2"
        }, {
          weapon: "Rapier +2 Powerful Sneak",
          attack: "13",
          damage: "1d6+3",
          critical: "18–20/x2"
        }, {
          weapon: "Short Sword +2",
          attack: "16",
          damage: "1d6+3",
          critical: "19–20/x2"
        }, {
          weapon: "Short Sword +2 Powerful Sneak",
          attack: "13",
          damage: "1d6+3",
          critical: "19–20/x2"
        }, {
          weapon: "Full Attack Rapier +2 / Short Sword +2",
          attack: "14 / 9 / 14 / 9",
          damage: "1d6+3",
          critical: "19–20/x2 / 18–20/x2 / 19–20/x2 / 18–20/x2"
        }],
        ranged: [{
          weapon: "Shortbow +1",
          attack: "15",
          damage: "1d6",
          critical: "x3",
          range: "60 ft",
          ammo: "50"
        }]
      },
      attack_notes: ""
    },
    skills: {
      acrobatics: {
        ranks: "9",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          dex_bonus: true
        }
      },
      appraise: {
        ranks: "9",
        misc: "4",
        current: "",
        bonuses: {
          class_skill: true,
          int_bonus: true
        }
      },
      bluff: {
        ranks: "9",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          cha_bonus: true
        }
      },
      climb: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: true
        }
      },
      craft_1: {
        variant_name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      craft_2: {
        variant_name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      diplomacy: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          cha_bonus: true
        }
      },
      disable_device: {
        ranks: "9",
        misc: "4",
        current: "",
        bonuses: {
          class_skill: true,
          dex_bonus: true
        }
      },
      disguise: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          cha_bonus: true
        }
      },
      escape_artist: {
        ranks: "9",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          dex_bonus: true
        }
      },
      fly: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          dex_bonus: true
        }
      },
      handle_animal: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          cha_bonus: true
        }
      },
      heal: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          wis_bonus: true
        }
      },
      intimidate: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          cha_bonus: true
        }
      },
      knowledge_arcana: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      knowledge_dungeoneering: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      knowledge_engineering: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      knowledge_geography: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      knowledge_history: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      knowledge_local: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      knowledge_nature: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      knowledge_nobility: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      knowledge_planes: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      knowledge_religion: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      linguistics: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      perception: {
        ranks: "9",
        misc: "5",
        current: "",
        bonuses: {
          class_skill: true,
          wis_bonus: true
        }
      },
      perform_1: {
        variant_name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          cha_bonus: true
        }
      },
      perform_2: {
        variant_name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          cha_bonus: true
        }
      },
      profession_1: {
        variant_name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          wis_bonus: true
        }
      },
      profession_2: {
        variant_name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          wis_bonus: true
        }
      },
      ride: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          dex_bonus: true
        }
      },
      sense_motive: {
        ranks: "9",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          wis_bonus: true
        }
      },
      sleight_of_hand: {
        ranks: "9",
        misc: "3",
        current: "",
        bonuses: {
          class_skill: true,
          dex_bonus: true
        }
      },
      spellcraft: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      stealth: {
        ranks: "9",
        misc: "5",
        current: "",
        bonuses: {
          class_skill: true,
          dex_bonus: true
        }
      },
      survival: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          wis_bonus: true
        }
      },
      swim: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: true
        }
      },
      use_magic_device: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          cha_bonus: true
        }
      },
      custom_1: {
        name: "Disable Device Trap",
        ranks: "9",
        misc: "4",
        current: "",
        bonuses: {
          class_skill: true,
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: true
        }
      },
      custom_2: {
        name: "Perception Trap",
        ranks: "9",
        misc: "5",
        current: "",
        bonuses: {
          class_skill: true,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: true,
          cha_bonus: false,
          level: false,
          half_level: true
        }
      },
      custom_3: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false
        }
      },
      custom_4: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false
        }
      }
    },
    spells: {
      per_day: {
        level_0: "",
        level_1: "",
        level_2: "",
        level_3: "",
        level_4: "",
        level_5: "",
        level_6: "",
        level_7: "",
        level_8: "",
        level_9: ""
      },
      dc: {
        level_0: "",
        level_1: "",
        level_2: "",
        level_3: "",
        level_4: "",
        level_5: "",
        level_6: "",
        level_7: "",
        level_8: "",
        level_9: ""
      },
      known: {
        level_0: "",
        level_1: "",
        level_2: "",
        level_3: "",
        level_4: "",
        level_5: "",
        level_6: "",
        level_7: "",
        level_8: "",
        level_9: ""
      },
      book: [{
        level_0: [
          { name: "Mage Hand", prepared: 3, active: false, cast: 0 }
        ]
      }, {
        level_1: [
          { name: "Unseen Servant", prepared: 2, active: false, cast: 0 }
        ]
      }, {
        level_2: []
      }, {
        level_3: []
      }, {
        level_4: []
      }, {
        level_5: []
      }, {
        level_6: []
      }, {
        level_7: []
      }, {
        level_8: []
      }, {
        level_9: []
      }]
    },
    notes: {
      character: "<strong>Deft Hands</strong> +2 bonus on Disable Device and Sleight of Hand skill checks<br><br><strong>Weapon Finesse</strong> With a light weapon, rapier, whip, or spiked chain made for a creature of your size category, you may use your Dexterity modifier instead of your Strength modifier on attack rolls.<br><br><strong>Two Weapon Fighting</strong> Penalties on attack rolls for fighting with two weapons are reduced.<br><br><strong>Improved Two Weapon Fighting</strong> In addition to the standard single extra attack you get with an off-hand weapon, get a second attack with it, albeit at a –5 penalty.<br><br><strong>Double Slice</strong> Add your Strength bonus to damage rolls made with your off-hand weapon.<br><br><strong>Extra Rogue Talent</strong> Gain one additional rogue talent<br><br><strong>Sneak attack</strong> Attack deals extra damage anytime her target would be denied a Dexterity bonus to AC (+5d6).<br><br><strong>Evasion (Ex)</strong> A rogue adds 1/2 her level to Perception skill checks made to locate traps and to Disable Device skill checks.<br><br><strong>Rogue talent</strong> Minor Magic (Sp) Mage Hand, 3/day.<br><br><strong>Rogue talent</strong> Major Magic (Sp) Unseen Servant, 2/day.<br><br><strong>Rogue talent</strong> Fast Fingers (Ex) Roll two dice while making a Sleight of Hand check and take the better result, 1/day.<br><br><strong>Rogue talent</strong> Fast Stealth (Ex) Move at full speed using the Stealth skill without penalty.<br><br><strong>Rogue talent</strong> During a full attack action you may take a –2 penalty on all attack rolls until the start of her next turn. If an attack during this time is a sneak attack, treats all 1s on the sneak attack damage dice as 2s.<br><br><strong>Trap sense (Ex)</strong> +3 bonus on Reflex saves made to avoid traps and a +3 dodge bonus to AC against attacks made by traps. These bonuses rise to +2 when the rogue reaches 6th level, to +3 when she reaches 9th level.<br><br><strong>Uncanny Dodge (Ex)</strong> cannot be caught flat-footed, nor lose Dex bonus to AC if the attacker is invisible. Still loses Dexterity bonus to AC if immobilized.<br><br><strong>Improved Uncanny Dodge (Ex)</strong> A rogue of 8th level or higher can no longer be flanked.",
      story: "",
    }
  };

  // exposed methods
  return {
    data: data
  };

})();

var orrin = (function() {

  var data = {
    basics: {
      name: "Orrin Alareth",
      race: "Human",
      class: "Rogue",
      level: "2",
      size: "Medium",
      alignment: "Lawful Neutral",
      xp: "1,850",
      height: "6'0",
      weight: "206 lbs",
      age: "26",
      gender: "Male",
      speed: "30 ft, 6 sq",
      initiative: "6",
      hero_points: "",
      luck_points: ""
    },
    statistics: {
      stats: {
        str: {
          score: "13",
          temp: ""
        },
        dex: {
          score: "18",
          temp: ""
        },
        con: {
          score: "12",
          temp: ""
        },
        int: {
          score: "12",
          temp: ""
        },
        wis: {
          score: "12",
          temp: ""
        },
        cha: {
          score: "7",
          temp: ""
        }
      },
      feats: "Weapon Finesse, Dodge",
      traits: "Reactionary, Resilient",
      languages: "Common, Elven",
      special_abilities: "Sneak Attack (+1d6), Trapfinding, Evasion, Rogue talent (Trap Spotter)"
    },
    equipment: {
      gear: "Fur coat and cold weather outfit, Backpack, Flask of Oil (3), Pouch (belt), Sack, Candle, Flint and Steel, Tindertwig (5), Rations (5 days), Waterskin, Bedroll, Blanket, Rope (silk), Mirror, Compass, Ink, Pen, Paper sheets, Buckler, Solid gold dagger (2), Dagger (2)",
      magic_gear: "",
      encumbrance: {
        light: "50 lbs or less",
        medium: "51–100 lbs",
        heavy: "101–150 lbs"
      },
      body_slots: {
        armor: "",
        belts: "",
        body: "Hide armor",
        chest: "",
        eyes: "",
        feet: "",
        hands: "",
        head: "",
        headband: "",
        neck: "",
        ring_left_hand: "",
        ring_right_hand: "",
        shield: "",
        shoulders: "",
        wrist: ""
      },
      wealth: {
        platinum: "",
        gold: "6,425",
        silver: "",
        copper: ""
      },
      consumable: []
    },
    defense: {
      hp: {
        total: "17",
        temp: "",
        damage: "",
        non_lethal_damage: "",
        current: ""
      },
      ac: {
        misc: "",
        temp: "",
        armor: "4",
        shield: "1",
        deflect: "",
        dodge: "1",
        natural: "",
        size_bonus: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          plus_ten: true,
          ac_armor: true,
          ac_shield: true,
          ac_deflect: true,
          ac_dodge: true,
          ac_natural: true,
          size: true
        }
      },
      flat_footed: {
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          plus_ten: true,
          ac_armor: true,
          ac_shield: true,
          ac_deflect: true,
          ac_natural: true,
          size: true
        }
      },
      touch: {
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          plus_ten: true,
          ac_deflect: true,
          ac_dodge: true,
          size: true
        }
      },
      ac_notes: "",
      fortitude: {
        base: "0",
        racial: "",
        resistance: "",
        misc: "1",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: true,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false
        }
      },
      reflex: {
        base: "3",
        racial: "",
        resistance: "",
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false
        }
      },
      will: {
        base: "0",
        racial: "",
        resistance: "",
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: true,
          cha_bonus: false
        }
      },
      save_notes: ""
    },
    offense: {
      base_attack: "1",
      special_size_bonus: "",
      concentration: "6",
      cmb: {
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: true,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          bab: true,
          level: false,
          half_level: false,
          special_size: true
        }
      },
      cmd: {
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: true,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          bab: true,
          level: false,
          half_level: false,
          special_size: true,
          plus_ten: true
        }
      },
      melee_attack: {
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: true,
          bab: true,
          special_size: true

        }
      },
      ranged_attack: {
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          dex_bonus: true,
          bab: true,
          special_size: true
        }
      },
      attack: {
        melee: [{
          weapon: "Rapier (MW)",
          attack: "6",
          damage: "1d6+1",
          critical: "18–20/×2"
        }],
        ranged: [{
          weapon: "Shortbow (MW)",
          attack: "6",
          damage: "1d6",
          critical: "x3",
          range: "60 ft",
          ammo: "50"
        }]
      },
      attack_notes: "+1d6 Sneak attack"
    },
    skills: {
      acrobatics: {
        ranks: "2",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          dex_bonus: true
        }
      },
      appraise: {
        ranks: "2",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          int_bonus: true
        }
      },
      bluff: {
        ranks: "2",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          cha_bonus: true
        }
      },
      climb: {
        ranks: "1",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          str_bonus: true
        }
      },
      craft_1: {
        variant_name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      craft_2: {
        variant_name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      diplomacy: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          cha_bonus: true
        }
      },
      disable_device: {
        ranks: "2",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          dex_bonus: true
        }
      },
      disguise: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          cha_bonus: true
        }
      },
      escape_artist: {
        ranks: "2",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          dex_bonus: true
        }
      },
      fly: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          dex_bonus: true
        }
      },
      handle_animal: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          cha_bonus: true
        }
      },
      heal: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          wis_bonus: true
        }
      },
      intimidate: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          cha_bonus: true
        }
      },
      knowledge_arcana: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      knowledge_dungeoneering: {
        ranks: "1",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          int_bonus: true
        }
      },
      knowledge_engineering: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      knowledge_geography: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      knowledge_history: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      knowledge_local: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      knowledge_nature: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      knowledge_nobility: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      knowledge_planes: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      knowledge_religion: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      linguistics: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      perception: {
        ranks: "2",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          wis_bonus: true
        }
      },
      perform_1: {
        variant_name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          cha_bonus: true
        }
      },
      perform_2: {
        variant_name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          cha_bonus: true
        }
      },
      profession_1: {
        variant_name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          wis_bonus: true
        }
      },
      profession_2: {
        variant_name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          wis_bonus: true
        }
      },
      ride: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          dex_bonus: true
        }
      },
      sense_motive: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          wis_bonus: true
        }
      },
      sleight_of_hand: {
        ranks: "2",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          dex_bonus: true
        }
      },
      spellcraft: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          int_bonus: true
        }
      },
      stealth: {
        ranks: "2",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          dex_bonus: true
        }
      },
      survival: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          wis_bonus: true
        }
      },
      swim: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: true
        }
      },
      use_magic_device: {
        ranks: "2",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          cha_bonus: true
        }
      },
      custom_1: {
        name: "Perception (Traps)",
        ranks: "2",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: true,
          cha_bonus: false,
          level: false,
          half_level: true
        }
      },
      custom_2: {
        name: "Disable Device (Traps)",
        ranks: "2",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: true
        }
      },
      custom_3: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false
        }
      },
      custom_4: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false
        }
      }
    },
    spells: {
      per_day: {
        level_0: "",
        level_1: "",
        level_2: "",
        level_3: "",
        level_4: "",
        level_5: "",
        level_6: "",
        level_7: "",
        level_8: "",
        level_9: ""
      },
      dc: {
        level_0: "",
        level_1: "",
        level_2: "",
        level_3: "",
        level_4: "",
        level_5: "",
        level_6: "",
        level_7: "",
        level_8: "",
        level_9: ""
      },
      known: {
        level_0: "",
        level_1: "",
        level_2: "",
        level_3: "",
        level_4: "",
        level_5: "",
        level_6: "",
        level_7: "",
        level_8: "",
        level_9: ""
      },
      book: [{
        level_0: []
      }, {
        level_1: []
      }, {
        level_2: []
      }, {
        level_3: []
      }, {
        level_4: []
      }, {
        level_5: []
      }, {
        level_6: []
      }, {
        level_7: []
      }, {
        level_8: []
      }, {
        level_9: []
      }]
    },
    notes: {
      character: "<strong>+2 to One Ability Score</strong> Human characters get a +2 bonus to one ability score of their choice at creation to represent their varied nature.<br><br><strong>Medium</strong> Humans are Medium creatures and have no bonuses or penalties due to their size.<br><br><strong>Normal Speed</strong> Humans have a base speed of 30 feet.<br><br><strong>Bonus Feat</strong> Humans select one extra feat at 1st level.<br><br><strong>Skilled</strong> Humans gain an additional skill rank at first level and one additional rank whenever they gain a level.<br><br><strong>Languages</strong> Humans begin play speaking Common. Humans with high Intelligence scores can choose any languages they want (except secret languages, such as Druidic).<br><br><strong>Sneak Attack</strong> If a rogue can catch an opponent when he is unable to defend himself effectively from her attack, she can strike a vital spot for extra damage.<br><br>The rogue's attack deals extra damage anytime her target would be denied a Dexterity bonus to AC (whether the target actually has a Dexterity bonus or not), or when the rogue flanks her target. This extra damage is 1d6 at 1st level, and increases by 1d6 every two rogue levels thereafter. Should the rogue score a critical hit with a sneak attack, this extra damage is not multiplied. Ranged attacks can count as sneak attacks only if the target is within 30 feet.<br><br>With a weapon that deals nonlethal damage (like a sap, whip, or an unarmed strike), a rogue can make a sneak attack that deals nonlethal damage instead of lethal damage. She cannot use a weapon that deals lethal damage to deal nonlethal damage in a sneak attack, not even with the usual –4 penalty.<br><br>The rogue must be able to see the target well enough to pick out a vital spot and must be able to reach such a spot. A rogue cannot sneak attack while striking a creature with concealment.<br><br><strong>Trapfinding</strong> A rogue adds 1/2 her level to Perception skill checks made to locate traps and to Disable Device skill checks (minimum +1). A rogue can use Disable Device to disarm magic traps.<br><br><strong>Evasion (Ex)</strong> At 2nd level and higher, a rogue can avoid even magical and unusual attacks with great agility. If she makes a successful Reflex saving throw against an attack that normally deals half damage on a successful save, she instead takes no damage. Evasion can be used only if the rogue is wearing light armor or no armor. A helpless rogue does not gain the benefit of evasion.<br><br><strong>Rogue Talents Trap Spotter (Ex)</strong> Whenever a rogue with this talent comes within 10 feet of a trap, she receives an immediate Perception skill check to notice the trap. This check should be made in secret by the GM.<br><br><strong>Weapon Finesse</strong> With a light weapon, rapier, whip, or spiked chain made for a creature of your size category, you may use your Dexterity modifier instead of your Strength modifier on attack rolls. If you carry a shield, its armor check penalty applies to your attack rolls.<br><br><strong>Dodge</strong> You gain a +1 dodge bonus to your AC. A condition that makes you lose your Dex bonus to AC also makes you lose the benefits of this feat.<br><br><strong>Reactionary</strong> You were bullied often as a child, but never quite developed an offensive response. Instead, you became adept at anticipating sudden attacks and reacting to danger quickly. You gain a +2 trait bonus on Initiative checks.<br><br><strong>Resilient</strong> Growing up in a poor neighborhood or in the unforgiving wilds often forced you to subsist on food and water from doubtful sources. You've built up your mettle as a result, and gain a +1 trait bonus on Fortitude saves.<br><br>",
      story: ""
    }
  };

  // exposed methods
  return {
    data: data
  };

})();

var hardCodedCharacters = (function() {

  var load = [nif.data, vos.data, orrin.data, ro.data, marika.data];

  // exposed methods
  return {
    load: load
  };

})();

var helper = (function() {

  // methods on this object
  function e(selector) {
    return document.querySelector(selector);
  };

  function eA(selector) {
    return document.querySelectorAll(selector);
  };

  function toggleClass(element, theClassName) {
    element.classList.toggle(theClassName);
  };

  function addClass(element, theClassName) {
    element.classList.add(theClassName);
  };

  function removeClass(element, theClassName) {
    element.classList.remove(theClassName);
  };

  function delayFunction(functionToDelay, time) {
    window.setTimeout(functionToDelay, time);
  };

  function selectText(element) {
    var node = helper.e(element);
    if (document.selection) {
      var range = document.body.createTextRange();
      range.moveToElementText(node);
      range.select();
    } else if (window.getSelection) {
      var range = document.createRange();
      range.selectNodeContents(node);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
    }
  };

  function truncateString(string, length, dotDotDot) {
    if (dotDotDot) {
      dotDotDot = "...";
    } else {
      dotDotDot = "";
    };
    if (string.length > length) {
      var newString = string.substring(0, length) + dotDotDot;
      return newString;
    };
    return string;
  };

  function updateObject(object, path, newValue) {
    var address = path.split('.');
    while (address.length > 1) {
      object = object[address.shift()];
    };
    object[address.shift()] = newValue;
  };

  function getObject(object, path) {
    var address = path.split('.');
    while (address.length > 1) {
      object = object[address.shift()];
    };
    return object[address.shift()];
  };

  function getClosest(element, selector) {
    var firstChar = selector.charAt(0);
    // Get closest match
    for (; element && element !== document; element = element.parentNode) {
      // If selector is a class
      if (firstChar === '.') {
        if (element.classList.contains(selector.substr(1))) {
          return element;
        };
      };
      // If selector is an ID
      if (firstChar === '#') {
        if (element.id === selector.substr(1)) {
          return element;
        };
      };
      // If selector is a data attribute
      if (firstChar === '[') {
        if (element.hasAttribute(selector.substr(1, selector.length - 2))) {
          return element;
        };
      };
      // If selector is a tag
      if (element.tagName.toLowerCase() === selector) {
        return element;
      };
    };
    return false;
  };

  function randomId(stringLength) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < stringLength; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  };

  // exposed methods
  return {
    e: e,
    eA: eA,
    toggleClass: toggleClass,
    addClass: addClass,
    removeClass: removeClass,
    getClosest: getClosest,
    selectText: selectText,
    delayFunction: delayFunction,
    updateObject: updateObject,
    getObject: getObject,
    truncate: truncateString,
    randomId: randomId
  };

})();

var sheet = (function() {

  var allCharacters = blank.data;

  var currentCharacterIndex = 0;

  var saveHardCodedCharacters = (function() {
    if (read("allCharacters")) {
      allCharacters = JSON.parse(read("allCharacters"));
    } else if (typeof hardCodedCharacters !== "undefined") {
      allCharacters = hardCodedCharacters.load;
    };
    storeCharacters();
  })();

  var setCurrentCharacterIndex = (function() {
    if (read("charactersIndex")) {
      currentCharacterIndex = read("charactersIndex");
    };
  })();

  function storeCharacters() {
    store("allCharacters", JSON.stringify(allCharacters));
  };

  function getAllCharacters() {
    return allCharacters;
  };

  function getCharacter() {
    return allCharacters[currentCharacterIndex];
  };

  function getIndex() {
    return currentCharacterIndex;
  };

  function setIndex(index) {
    currentCharacterIndex = index;
    store("charactersIndex", currentCharacterIndex);
  };

  function addCharacter(newCharacter) {
    var dataToAdd = newCharacter || JSON.parse(JSON.stringify(blank.data));
    allCharacters.push(dataToAdd);
    var newIndex = getAllCharacters().length - 1;
    setIndex(newIndex);
    storeCharacters();
    clear();
    render();
    nav.clear();
    nav.render();
    smoothScroll.animateScroll(null, "#body");
  };

  function removeCharacter() {
    var name = allCharacters[getIndex()].basics.name || "New character";
    allCharacters.splice(getIndex(), 1);
    var lastCharacterRemoved = false;
    if (allCharacters.length == 0) {
      addCharacter();
      lastCharacterRemoved = true;
    };
    setIndex(0);
    clear();
    render();
    storeCharacters();
    nav.clear();
    nav.render();
    if (lastCharacterRemoved) {
      snack.render(helper.truncate(name, 40, true) + " removed. New character added.", false, false);
    } else {
      snack.render(helper.truncate(name, 50, true) + " removed.", false, false);
    };
  };

  function store(key, data) {
    if (localStorage.getItem) {
      localStorage.setItem(key, data);
    };
  };

  function remove(key) {
    if (localStorage.getItem) {
      localStorage.removeItem(key);
    };
  };

  function read(key) {
    if (localStorage.getItem(key) == "") {
      localStorage.removeItem(key);
    } else if (localStorage.getItem(key)) {
      return localStorage.getItem(key);
    };
  };

  function destroy() {
    localStorage.clear();
    prompt.destroy();
    snack.destroy();
    helper.delayFunction(function() {
      document.location.reload(true);
    }, 200);
  };

  function importJson() {
    _render_import();
  };

  function _render_import() {
    var container = document.createElement("div");
    container.setAttribute("class", "container");
    var row = document.createElement("div");
    row.setAttribute("class", "row");
    var col = document.createElement("div");
    col.setAttribute("class", "col-xs-12");
    var importSelect = document.createElement("div");
    importSelect.setAttribute("class", "m-import-select");
    var input = document.createElement("input");
    input.setAttribute("id", "import-select");
    input.setAttribute("type", "file");
    input.setAttribute("class", "m-import-select-input js-import-select-input");
    var label = document.createElement("label");
    label.setAttribute("tabindex", "3");
    label.setAttribute("for", "import-select");
    label.setAttribute("class", "m-import-select-label button button-large button-block js-import-select-label");
    label.textContent = "Choose a file";
    var message = document.createElement("p");
    message.setAttribute("class", "m-import-select-message");
    message.textContent = "Import a previously exported character JSON file from another device.";
    importSelect.appendChild(input);
    importSelect.appendChild(label);
    col.appendChild(message);
    col.appendChild(importSelect);
    row.appendChild(col);
    container.appendChild(row);
    input.addEventListener("change", _handleFiles, false);
    modal.render("Import character JSON", container, "Import", _readJsonFile);
  };

  function _handleFiles() {
    var importSelectLabel = helper.e(".js-import-select-label");
    var fileList = this.files;
    importSelectLabel.textContent = fileList[0].name;
  };

  var _readJsonFile = function() {
    var files = helper.e(".js-import-select-input").files;
    if (files.length <= 0) {
      return false;
    };
    if (files.item(0).type == "application/json") {
      var readFile = new FileReader();
      readFile.onload = function(event) {
        var data = JSON.parse(event.target.result);
        addCharacter(data);
        var name = allCharacters[getIndex()].basics.name || "New character";
        snack.render(helper.truncate(name, 40, true) + " imported and now in the game.", false, false);
      };
      readFile.readAsText(files.item(0));
    } else {
      snack.render("Not a valid JSON file.", false, false);
    };
  };

  function exportJson() {
    var name = getCharacter().basics.name || "New character";
    var exportData = JSON.stringify(getCharacter(), null, " ");
    prompt.render("Download " + name, "Save this character as a JSON file.", "Download", "download");
  };

  function bind() {
    prompt.bind();
    modal.bind();
    snack.bind();
    inputBlock.bind();
    textareaBlock.bind();
    stats.bind();
    clone.bind();
    totalBlock.bind();
    spells.bind();
    display.bind();
  };

  function render() {
    inputBlock.render();
    textareaBlock.render();
    stats.render();
    clone.render();
    totalBlock.render();
    totalBlock.update();
    spells.render();
    display.render();
  };

  function clear() {
    inputBlock.clear();
    textareaBlock.clear();
    stats.render();
    clone.clear();
    totalBlock.clear();
    totalBlock.update();
    spells.clear();
    display.clear();
  };

  // exposed methods
  return {
    getAllCharacters: getAllCharacters,
    getCharacter: getCharacter,
    addCharacter: addCharacter,
    removeCharacter: removeCharacter,
    getIndex: getIndex,
    setIndex: setIndex,
    storeCharacters: storeCharacters,
    destroy: destroy,
    store: store,
    remove: remove,
    read: read,
    clear: clear,
    import: importJson,
    export: exportJson,
    render: render,
    bind: bind
  };

})();

var nav = (function() {

  var previousNavShade = null;

  function _destroy_navShade() {
    var navShade = helper.e(".js-nav-shade");
    if (navShade) {
      getComputedStyle(navShade).opacity;
      helper.removeClass(navShade, "is-opaque");
      helper.addClass(navShade, "is-transparent");
    };
  };

  function _render_navShade() {

    var nav = helper.e(".js-nav");

    var navShade = document.createElement("div");
    navShade.setAttribute("class", "m-nav-shade js-nav-shade");
    navShade.destroy = function() {
      helper.removeClass(navShade, "is-opaque");
      helper.addClass(navShade, "is-transparent");
    };

    navShade.addEventListener("transitionend", function(event, elapsed) {
      if (event.propertyName === "opacity" && getComputedStyle(this).opacity == 0) {
        this.parentElement.removeChild(this);
      };
    }.bind(navShade), false);

    navShade.addEventListener("click", _destroy_navShade, false);

    if (previousNavShade) {
      previousNavShade.destroy();
    };

    previousNavShade = navShade;

    body.insertBefore(navShade, nav);

    getComputedStyle(navShade).opacity;

    helper.removeClass(navShade, "is-transparent");
    helper.addClass(navShade, "is-opaque");

  };

  function _closeNavScrollToTop() {
    if (window.innerWidth < 550) {
      navClose();
      window.scrollTo(0, 0);
    };
  };

  function _fullscreen() {
    var fullscreen = helper.e(".js-fullscreen");
    var root = window.document;
    var icon = fullscreen.querySelector(".icon");
    var rootElement = root.documentElement;
    var requestFullScreen = rootElement.requestFullscreen || rootElement.mozRequestFullScreen || rootElement.webkitRequestFullScreen || rootElement.msRequestFullscreen;
    var cancelFullScreen = root.exitFullscreen || root.mozCancelFullScreen || root.webkitExitFullscreen || root.msExitFullscreen;
    if (!root.fullscreenElement && !root.mozFullScreenElement && !root.webkitFullscreenElement && !root.msFullscreenElement) {
      requestFullScreen.call(rootElement);
      helper.toggleClass(fullscreen, "is-active");
      helper.toggleClass(icon, "icon-fullscreen-exit");
      helper.toggleClass(icon, "icon-fullscreen");
    } else {
      cancelFullScreen.call(root);
      helper.toggleClass(fullscreen, "is-active");
      helper.toggleClass(icon, "icon-fullscreen-exit");
      helper.toggleClass(icon, "icon-fullscreen");
    };
  };

  function _render_navCharacters(characterName, characterClass, characterLevel, characterIndex) {
    if (typeof characterName == "undefined" || characterName == "") {
      characterName = "New character";
    };
    if (typeof characterClass == "undefined" || characterClass == "") {
      characterClass = "Class";
    };
    if (typeof characterLevel == "undefined" || characterLevel == "") {
      characterLevel = "Level";
    };

    // define elements
    var uniqueId = helper.randomId(10);

    var navCharacter = document.createElement("li");
    navCharacter.setAttribute("class", "m-nav-character");

    var input = document.createElement("input");
    input.setAttribute("id", characterName.replace(/\s+/g, "-").toLowerCase() + "-" + uniqueId);
    input.setAttribute("name", "js-nav-all-characters");
    input.setAttribute("class", "js-nav-character-input");
    input.setAttribute("type", "radio");
    input.setAttribute("tabindex", 10);

    var label = document.createElement("label");
    label.setAttribute("for", characterName.replace(/\s+/g, "-").toLowerCase() + "-" + uniqueId);
    label.setAttribute("class", "u-full-width js-nav-character-label character-index-" + characterIndex);
    label.setAttribute("data-character-index", characterIndex);

    var nameSpan = document.createElement("span");
    nameSpan.setAttribute("class", "m-nav-characters-name js-nav-characters-name");
    nameSpan.textContent = helper.truncate(characterName, 30, true);

    var classSpan = document.createElement("span");
    classSpan.setAttribute("class", "m-nav-characters-class js-nav-characters-class");
    classSpan.textContent = helper.truncate(characterClass, 20, true) + " ";

    var levelSpan = document.createElement("span");
    levelSpan.setAttribute("class", "m-nav-characters-level js-nav-characters-level");
    levelSpan.textContent = helper.truncate(characterLevel, 10);

    // build module
    label.appendChild(nameSpan);
    label.appendChild(classSpan);
    label.appendChild(levelSpan);
    navCharacter.appendChild(input);
    navCharacter.appendChild(label);

    // bind
    _bind_characterOption(navCharacter);
    return navCharacter;
  };

  function _bind_characterOption(characterLink) {
    var label = characterLink.querySelector(".js-nav-character-label");
    var input = characterLink.querySelector(".js-nav-character-input");
    input.addEventListener("change", function() {
      _switch_character(label);
      sheet.storeCharacters();
      smoothScroll.animateScroll(null, "#body");
    }, false);
  };

  function _switch_character(characterLink) {
    var newIndex = characterLink.dataset.characterIndex;
    sheet.setIndex(newIndex);
    sheet.clear();
    sheet.render();
    var name = sheet.getCharacter().basics.name;
    if (typeof name == "undefined" || name == "") {
      name = "New character";
    };
    snack.render(helper.truncate(name, 50, true) + " now in the game.", false);
    _closeNavScrollToTop();
  };

  function updateNavCharacters(input) {
    var inputType = input.dataset.characterNav;
    var inputValue = input.value;
    if (inputType == "name") {
      if (typeof inputValue == "undefined" || inputValue == "") {
        inputValue = "New character";
      };
      helper.e(".character-index-" + sheet.getIndex()).querySelector(".js-nav-characters-name").textContent = helper.truncate(inputValue, 30, true);
    } else if (inputType == "class") {
      if (typeof inputValue == "undefined" || inputValue == "") {
        inputValue = "Class";
      };
      helper.e(".character-index-" + sheet.getIndex()).querySelector(".js-nav-characters-class").textContent = helper.truncate(inputValue, 20, true) + " ";
    } else if (inputType == "level") {
      if (typeof inputValue == "undefined" || inputValue == "") {
        inputValue = "Level";
      };
      helper.e(".character-index-" + sheet.getIndex()).querySelector(".js-nav-characters-level").textContent = helper.truncate(inputValue, 10, false);
    };
  };

  function clear() {
    var all_navCharacters = helper.eA(".js-nav-characters");
    for (var i = 0; i < all_navCharacters.length; i++) {
      while (all_navCharacters[i].lastChild) {
        all_navCharacters[i].removeChild(all_navCharacters[i].lastChild);
      };
    };
  };

  function render() {
    var characters = sheet.getAllCharacters();
    var navCharacters = helper.e(".js-nav-characters");
    for (var i in characters) {
      var characterAnchor = _render_navCharacters(characters[i].basics.name, characters[i].basics.class, characters[i].basics.level, i);
      navCharacters.appendChild(characterAnchor);
    };
    var all_navCharacterSelect = helper.eA(".js-nav-character-input");
    all_navCharacterSelect[sheet.getIndex()].checked = true;
    _render_quickNav();
    _render_lastSectionHeight();
  };

  function _render_lastSectionHeight() {
    var all_section = helper.eA(".js-section");
    var lastSection = all_section[all_section.length - 1];
    lastSection.style.minHeight = window.innerHeight + "px";
  };

  function _render_quickNav() {
    window.onscroll = function() {
      var quickNav = helper.e(".js-quick-nav");
      var quickNavLinks = helper.eA(".js-quick-nav-link");
      var all_section = helper.eA(".js-section");
      var menu = parseInt(getComputedStyle(quickNav).height, 10);
      for (var i = 0; i < all_section.length; i++) {
        // console.log(all_section[i].id + " top = " + all_section[i].getBoundingClientRect().top + "\t\t|\t\tbottom = " + all_section[i].getBoundingClientRect().bottom);

        var sectionHeading = all_section[i].querySelector(".js-section-heading");
        var sectionHeadingHeight = parseInt(getComputedStyle(document.querySelector(".js-section-heading")).height, 10);

        if (all_section[i].getBoundingClientRect().bottom < (menu + sectionHeadingHeight)) {
          if (sectionHeading) {
            helper.addClass(sectionHeading, "is-faded");
            // sectionHeading.setAttribute("style", "top:" + (all_section[i].getBoundingClientRect().bottom - sectionHeadingHeight) + "px");
          };
        } else {
          if (sectionHeading) {
            helper.removeClass(sectionHeading, "is-faded");
            // sectionHeading.removeAttribute("style");
          };
        };

        if (all_section[i].getBoundingClientRect().top <= menu && all_section[i].getBoundingClientRect().bottom > menu) {
          for (var j = 0; j < quickNavLinks.length; j++) {
            helper.removeClass(quickNavLinks[j], "is-active");
          };
          helper.addClass(quickNavLinks[i], "is-active");
          if (sectionHeading) {
            helper.addClass(all_section[i], "is-pinned");
            helper.addClass(sectionHeading, "is-pinned");
          };
        } else {
          helper.removeClass(quickNavLinks[i], "is-active");
          if (sectionHeading) {
            helper.removeClass(all_section[i], "is-pinned");
            helper.removeClass(sectionHeading, "is-pinned");
          };
        };

      };
      // if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      //   var lastQuickLink = helper.e(".js-quick-nav-last-link");
      //   for (var i = 0; i < quickNavLinks.length; i++) {
      //     helper.removeClass(quickNavLinks[i], "is-active");
      //   };
      //   helper.addClass(lastQuickLink, "is-active");
      // };
    };
  };

  function _checkBodyForOpenNav() {
    var body = helper.e("body");
    var nav = helper.e(".js-is-open");
    if (nav) {
      helper.addClass(body, "is-onscreen-nav");
    } else {
      helper.removeClass(body, "is-onscreen-nav");
    };
  };

  function navClose() {
    helper.removeClass(helper.e(".js-nav"), "is-open");
    helper.removeClass(helper.e(".js-nav"), "js-is-open");
    helper.removeClass(helper.e(".js-hamburger"), "is-open");
    _checkBodyForOpenNav();
    _destroy_navShade();
  };

  function navOpen() {
    helper.addClass(helper.e(".js-nav"), "is-open");
    helper.addClass(helper.e(".js-nav"), "js-is-open");
    helper.addClass(helper.e(".js-hamburger"), "is-open");
    _checkBodyForOpenNav();
    _render_navShade();
  };

  function navToggle() {
    var nav = helper.e(".js-nav");
    if (nav.classList.contains("is-open")) {
      helper.removeClass(helper.e(".js-nav"), "is-open");
      helper.removeClass(helper.e(".js-nav"), "js-is-open");
      helper.removeClass(helper.e(".js-hamburger"), "is-open");
      _checkBodyForOpenNav();
      _destroy_navShade();
    } else {
      helper.addClass(helper.e(".js-nav"), "is-open");
      helper.addClass(helper.e(".js-nav"), "js-is-open");
      helper.addClass(helper.e(".js-hamburger"), "is-open");
      _checkBodyForOpenNav();
      _render_navShade();
    };
  };

  function remove() {
    var name;
    if (sheet.getCharacter().basics.name) {
      name = sheet.getCharacter().basics.name;
    } else {
      name = "New character";
    };
    prompt.render("Remove " + name + "?", "This can not be undone.", "Remove", sheet.removeCharacter);
  };

  function resize() {
    var body = helper.e("body");
    var nav = helper.e(".js-nav");
    if (window.innerWidth >= 550) {
      var height = window.innerHeight - 60;
      nav.style.maxHeight = height + "px";
    } else {
      nav.removeAttribute("style");
    };
  };

  function bind() {
    var nav = helper.e(".js-nav");
    var navToggleElement = helper.e(".js-nav-toggle");
    var fullscreen = helper.e(".js-fullscreen");
    var clearAll = helper.e(".js-clear-all");
    var characterAdd = helper.e(".js-character-add");
    var characterRemove = helper.e(".js-character-remove");
    var characterImport = helper.e(".js-character-import");
    var characterExport = helper.e(".js-character-export");
    navToggleElement.addEventListener("click", function() {
      navToggle();
    }, false);
    fullscreen.addEventListener("click", function() {
      _fullscreen();
    }, false);
    clearAll.addEventListener("click", function() {
      prompt.render("Are you sure?", "All characters will be removed. This can not be undone.", "Remove all", sheet.destroy);
      navClose();
    }, false);
    characterImport.addEventListener("click", function() {
      sheet.import();
      navClose();
    }, false);
    characterExport.addEventListener("click", function() {
      sheet.export();
      navClose();
    }, false);
    characterAdd.addEventListener("click", function() {
      sheet.addCharacter();
      snack.render("New character added.", false);
      _closeNavScrollToTop();
    }, false);
    characterRemove.addEventListener("click", function() {
      remove();
      navClose();
    }, false);
    window.addEventListener('click', function(event) {
      if (event.target != nav && event.target != navToggleElement && helper.getClosest(event.target, ".js-nav") != nav && helper.getClosest(event.target, ".js-nav-toggle") != navToggleElement) {
        navClose();
      };
    }, false);
    window.addEventListener("keydown", function(event) {
      if (event.which == 8 && event.ctrlKey) {
        prompt.render("Are you sure?", "All characters will be removed. This can not be undone.", "Delete all", sheet.destroy);
        navClose();
      };
      if (event.which == 73 && event.ctrlKey) {
        sheet.import();
        navClose();
      };
      if (event.which == 69 && event.ctrlKey) {
        sheet.export();
        navClose();
      };
      if (event.keyCode == 27 && event.ctrlKey) {
        navClose();
      };
      if (event.keyCode == 77 && event.ctrlKey) {
        navToggle();
      };
      if (event.keyCode == 68 && event.ctrlKey) {
        display.toggle();
      };
      if (event.keyCode == 27) {
        navClose();
      };
    }, false);

    // window.addEventListener("resize", function(event) {
    //   resize();
    // }, false);

    // window.addEventListener("keydown", function(event) {
    //   console.log(event.keyCode);
    // });

  };

  // exposed methods
  return {
    resize: resize,
    bind: bind,
    clear: clear,
    render: render,
    update: updateNavCharacters,
    open: navOpen,
    close: navClose,
    toggle: navToggle
  }

})();

var prompt = (function() {

  var previousPrompt = null;
  var previousPromptShade = null;

  function bind() {
    window.addEventListener("keydown", function(event) {
      if (event.keyCode == 27) {
        destroy();
      };
    }, false);
  };

  function destroy() {
    var prompt = helper.e(".js-prompt");
    var promptShade = helper.e(".js-prompt-shade");
    var promptWrapper = helper.e(".js-prompt-wrapper");
    if (prompt) {
      getComputedStyle(prompt).opacity;
      helper.removeClass(promptWrapper, "is-unrotate-in");
      helper.addClass(promptWrapper, "is-dropped-out");
      helper.removeClass(prompt, "is-opaque");
      helper.addClass(prompt, "is-transparent");
    };
    if (promptShade) {
      getComputedStyle(promptShade).opacity;
      helper.removeClass(promptShade, "is-opaque");
      helper.addClass(promptShade, "is-transparent");
    };
  };

  function render(heading, message, actionText, action) {

    modal.destroy();
    var body = helper.e("body");

    var promptShade = document.createElement("div");
    promptShade.setAttribute("class", "m-prompt-shade js-prompt-shade");
    promptShade.destroy = function() {
      helper.removeClass(promptShade, "is-opaque");
      helper.addClass(promptShade, "is-transparent");
    };

    var promptWrapper = document.createElement("div");
    promptWrapper.setAttribute("class", "m-prompt-wrapper js-prompt-wrapper is-unrotate-out");

    var prompt = document.createElement("div");
    prompt.setAttribute("class", "m-prompt js-prompt");
    prompt.destroy = function() {
      helper.removeClass(promptWrapper, "is-unrotate-in");
      helper.addClass(promptWrapper, "is-dropped-out");
      helper.removeClass(prompt, "is-opaque");
      helper.addClass(prompt, "is-transparent");
    };

    var promptbody = document.createElement("div");
    promptbody.setAttribute("class", "m-prompt-body");

    var promptHeading = document.createElement("h1");
    promptHeading.setAttribute("tabindex", "3");
    promptHeading.setAttribute("class", "m-prompt-heading");
    promptHeading.textContent = heading;

    var promptText = document.createElement("p");
    promptText.setAttribute("class", "m-prompt-text");
    promptText.textContent = message;

    var promptControls = document.createElement("div");
    promptControls.setAttribute("class", "m-prompt-controls");

    var actionButton = document.createElement("a");
    actionButton.setAttribute("href", "javascript:void(0)");
    actionButton.setAttribute("tabindex", "3");
    actionButton.setAttribute("class", "button button-primary button-block button-large js-prompt-action");
    actionButton.textContent = actionText || "Ok";

    var cancelButton = document.createElement("a");
    cancelButton.setAttribute("href", "javascript:void(0)");
    cancelButton.setAttribute("tabindex", "3");
    cancelButton.setAttribute("class", "button button-block button-large");
    cancelButton.textContent = "Cancel";

    promptControls.appendChild(cancelButton);
    promptControls.appendChild(actionButton);
    if (heading != false) {
      promptbody.appendChild(promptHeading);
    };
    if (message != false) {
      promptbody.appendChild(promptText);
    };
    promptWrapper.appendChild(promptbody);
    promptWrapper.appendChild(promptControls);
    
    prompt.appendChild(promptWrapper);

    if (action == "download") {
      // actionButton.addEventListener("click", action, false);
      actionButton.setAttribute("download", sheet.getCharacter().basics.name + ".json");
      actionButton.href = "data:" + "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(sheet.getCharacter()), null, " ");
    } else {
      actionButton.addEventListener("click", action, false);
    };

    prompt.addEventListener("transitionend", function(event, elapsed) {
      if (event.propertyName === "opacity" && getComputedStyle(this).opacity == 0) {
        this.parentElement.removeChild(this);
      };
    }.bind(prompt), false);

    promptShade.addEventListener("transitionend", function(event, elapsed) {
      if (event.propertyName === "opacity" && getComputedStyle(this).opacity == 0) {
        this.parentElement.removeChild(this);
      };
    }.bind(promptShade), false);

    actionButton.addEventListener("click", destroy, false);
    cancelButton.addEventListener("click", destroy, false);
    promptShade.addEventListener("click", destroy, false);

    if (previousPrompt) {
      previousPrompt.destroy();
    };

    if (previousPromptShade) {
      previousPromptShade.destroy();
    };

    previousPrompt = prompt;
    previousPromptShade = promptShade;

    body.appendChild(promptShade);
    body.appendChild(prompt);

    getComputedStyle(prompt).opacity;
    getComputedStyle(promptShade).opacity;
    helper.removeClass(prompt, "is-transparent");
    helper.addClass(prompt, "is-opaque");
    helper.removeClass(promptWrapper, "is-unrotate-out");
    helper.addClass(promptWrapper, "is-unrotate-in");
    helper.removeClass(promptShade, "is-transparent");
    helper.addClass(promptShade, "is-opaque");
    promptHeading.focus(this);

  };

  // exposed methods
  return {
    bind: bind,
    destroy: destroy,
    render: render
  }

})();

var modal = (function() {

  var previousModal = null;
  var previousModalShade = null;

  function bind() {
    window.addEventListener("keydown", function(event) {
      if (event.keyCode == 27) {
        destroy();
      };
    }, false);
  };

  function destroy() {
    var modal = helper.e(".js-modal");
    var modalShade = helper.e(".js-modal-shade");
    var modalWrapper = helper.e(".js-modal-wrapper");
    if (modal) {
      getComputedStyle(modal).opacity;
      helper.removeClass(modalWrapper, "is-unrotate-in");
      helper.addClass(modalWrapper, "is-dropped-out");
      helper.removeClass(modal, "is-opaque");
      helper.addClass(modal, "is-transparent");
    };
    if (modalShade) {
      getComputedStyle(modalShade).opacity;
      helper.removeClass(modalShade, "is-opaque");
      helper.addClass(modalShade, "is-transparent");
    };
  };

  function render(heading, modalBodyContent, actionText, action) {

    prompt.destroy();
    var body = helper.e("body");

    var modalShade = document.createElement("div");
    modalShade.setAttribute("class", "m-modal-shade js-modal-shade");
    modalShade.destroy = function() {
      helper.removeClass(modalShade, "is-opaque");
      helper.addClass(modalShade, "is-transparent");
    };

    var modalWrapper = document.createElement("div");
    modalWrapper.setAttribute("class", "m-modal-wrapper js-modal-wrapper is-unrotate-out");

    var modal = document.createElement("div");
    modal.setAttribute("class", "m-modal js-modal");
    modal.destroy = function() {
      helper.removeClass(modalWrapper, "is-unrotate-in");
      helper.addClass(modalWrapper, "is-dropped-out");
      helper.removeClass(modal, "is-opaque");
      helper.addClass(modal, "is-transparent");
    };

    var modalHeading = document.createElement("h1");
    modalHeading.setAttribute("tabindex", "3");
    modalHeading.setAttribute("class", "m-modal-heading");
    modalHeading.textContent = heading;

    var modalBody = document.createElement("div");
    modalBody.setAttribute("class", "m-modal-body u-clearfix");

    var modalControls = document.createElement("div");
    modalControls.setAttribute("class", "m-modal-controls");

    var actionButton = document.createElement("a");
    actionButton.setAttribute("href", "javascript:void(0)");
    actionButton.setAttribute("tabindex", "3");
    actionButton.setAttribute("class", "button button-primary button-block button-large");
    actionButton.textContent = actionText || "Ok";

    modalControls.appendChild(actionButton);

    if (heading != false) {
      modalBody.appendChild(modalHeading);
    };

    if (modalBodyContent) {
      modalBody.appendChild(modalBodyContent);
    };

    modalWrapper.appendChild(modalBody);
    modalWrapper.appendChild(modalControls);
    modal.appendChild(modalWrapper);

    modal.addEventListener("transitionend", function(event, elapsed) {
      if (event.propertyName === "opacity" && getComputedStyle(this).opacity == 0) {
        this.parentElement.removeChild(this);
      };
    }.bind(modal), false);

    modalShade.addEventListener("transitionend", function(event, elapsed) {
      if (event.propertyName === "opacity" && getComputedStyle(this).opacity == 0) {
        this.parentElement.removeChild(this);
      };
    }.bind(modalShade), false);

    modalShade.addEventListener("click", destroy, false);
    actionButton.addEventListener("click", destroy, false);
    if (action) {
      actionButton.addEventListener("click", action, false);
    };

    if (previousModal) {
      previousModal.destroy();
    };

    if (previousModalShade) {
      previousModalShade.destroy();
    };

    previousModal = modal;
    previousModalShade = modalShade;

    body.appendChild(modalShade);
    body.appendChild(modal);

    getComputedStyle(modal).opacity;
    getComputedStyle(modalShade).opacity;
    helper.removeClass(modal, "is-transparent");
    helper.addClass(modal, "is-opaque");
    helper.removeClass(modalWrapper, "is-unrotate-out");
    helper.addClass(modalWrapper, "is-unrotate-in");
    helper.removeClass(modalShade, "is-transparent");
    helper.addClass(modalShade, "is-opaque");
    modalHeading.focus(this);

  };

  // exposed methods
  return {
    bind: bind,
    destroy: destroy,
    render: render
  };

})();

var snack = (function() {

  var previousSnackBar = null;

  function destroy() {
    var all_snackBar = helper.eA(".js-snack-bar");
    for (var i = 0; i < all_snackBar.length; i++) {
      all_snackBar[i].destroy();
    };
  };

  function render(message, actionText) {

    var body = helper.e("body");

    var snackBar = document.createElement("aside");
    snackBar.setAttribute("class", "m-snack-bar js-snack-bar");
    snackBar.destroy = function() {
      helper.addClass(snackBar, "is-transparent");
    };
    var text = document.createElement("p");
    text.setAttribute("class", "m-snack-bar-message");
    text.textContent = (message);
    snackBar.appendChild(text);

    if (actionText) {
      var action = snackBar.destroy.bind(snackBar);
      var actionButton = document.createElement("a");
      actionButton.setAttribute("class", "button button-tertiary m-snack-bar-button");
      actionButton.textContent = actionText;
      actionButton.addEventListener("click", action);
      snackBar.appendChild(actionButton);
    };

    snackBar.addEventListener("transitionend", function(event, elapsed) {
      if (event.propertyName === "opacity" && this.style.opacity == 0) {
        this.parentElement.removeChild(this);
        checkBodyForSnack();
      };
    }.bind(snackBar), false);

    if (previousSnackBar) {
      previousSnackBar.destroy();
    };

    previousSnackBar = snackBar;

    setTimeout(function() {
      if (previousSnackBar === this) {
        previousSnackBar.destroy();
      };
    }.bind(snackBar), 4000);

    body.appendChild(snackBar);
    getComputedStyle(snackBar).opacity;
    getComputedStyle(snackBar).transform;
    getComputedStyle(snackBar).margin;
    helper.addClass(snackBar, "is-reveal");
    checkBodyForSnack();

  };

  function bind() {
    window.addEventListener("keydown", function(event) {
      if (event.keyCode == 27) {
        destroy();
      };
    }, false);
  };

  function checkBodyForSnack() {
    var body = helper.e("body");
    var snackBar = helper.e(".js-snack-bar");
    if (snackBar) {
      helper.addClass(body, "is-onscreen-snack");
    } else {
      helper.removeClass(body, "is-onscreen-snack");
    };
  };

  // exposed methods
  return {
    bind: bind,
    destroy: destroy,
    render: render
  }

})();

var clone = (function() {

  function _newConsumable(index) {
    var cloneString =
      '<div class="row">' +
      '<div class="col-xs-12">' +
      '<div class="js-total-block">' +
      '<div class="row no-gutter">' +
      '<div class="col-xs-6">' +
      '<div class="m-input-block js-input-block">' +
      '<label class="m-input-block-label js-input-block-label" for="consumable-item-' + index + '">Item</label>' +
      '<input id="consumable-item-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-consumable-item" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-2">' +
      '<p class="u-text-center u-no-margin u-inline-with-input u-underline-with-input js-total-block-total js-clone-consumable-current">0</p>' +
      '</div>' +
      '<div class="col-xs-2">' +
      '<div class="m-input-block js-input-block">' +
      '<label class="m-input-block-label js-input-block-label" for="consumable-total-' + index + '">Total</label>' +
      '<input id="consumable-total-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-consumable-total" data-total="addition" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-2">' +
      '<div class="m-input-block js-input-block">' +
      '<label class="m-input-block-label js-input-block-label" for="consumable-used-' + index + '">Used</label>' +
      '<input id="consumable-used-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-consumable-used" data-total="subtract" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-3 col-xs-offset-9">' +
      '<div class="m-clone-block-delete-controls">' +
      '<button class="button button-small button-primary button-block js-clone-block-delete" tabindex="3"><span class="icon-close"></span></button>' +
      '</div>' +
      '</div>' +
      '</div>';
    return cloneString;
  };

  function _newAttackMelee(index) {
    var cloneString =
      '<div class="row">' +
      '<div class="col-xs-12">' +
      '<div class="row no-gutter">' +
      '<div class="col-xs-5 col-md-4">' +
      '<div class="m-input-block js-input-block">' +
      '<label class="m-input-block-label js-input-block-label" for="attack-melee-weapon-' + index + '">Melee Weapon</label>' +
      '<input id="attack-melee-weapon-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-attack-melee-weapon" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-2 col-md-2">' +
      '<div class="m-input-block js-input-block">' +
      '<label class="m-input-block-label js-input-block-label" for="attack-melee-attack-' + index + '">Attack</label>' +
      '<input id="attack-melee-attack-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-attack-melee-attack" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-3 col-md-3">' +
      '<div class="m-input-block js-input-block">' +
      '<label class="m-input-block-label js-input-block-label" for="attack-melee-damage-' + index + '">Damage</label>' +
      '<input id="attack-melee-damage-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-attack-melee-damage" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-2 col-md-3">' +
      '<div class="m-input-block js-input-block">' +
      '<label class="m-input-block-label js-input-block-label" for="attack-melee-critical-' + index + '">Critical</label>' +
      '<input id="attack-melee-critical-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-attack-melee-critical" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-3 col-xs-offset-9">' +
      '<div class="m-clone-block-delete-controls">' +
      '<button class="button button-small button-primary button-block js-clone-block-delete" tabindex="3"><span class="icon-close"></span></button>' +
      '</div>' +
      '</div>' +
      '</div>';
    return cloneString;
  };

  function _newAttackRanged(index) {
    var cloneString =
      '<div class="row">' +
      '<div class="col-xs-12">' +
      '<div class="row no-gutter">' +
      '<div class="col-xs-6 col-xl-4">' +
      '<div class="m-input-block js-input-block">' +
      '<label class="m-input-block-label js-input-block-label" for="attack-ranged-weapon-' + index + '">Ranged Weapon</label>' +
      '<input id="attack-ranged-weapon-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-attack-ranged-weapon" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-3 col-xl-2">' +
      '<div class="m-input-block js-input-block">' +
      '<label class="m-input-block-label js-input-block-label" for="attack-ranged-attack-' + index + '">Attack</label>' +
      '<input id="attack-ranged-attack-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-attack-ranged-attack" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-3 col-xl-2">' +
      '<div class="m-input-block js-input-block">' +
      '<label class="m-input-block-label js-input-block-label" for="attack-ranged-damage-' + index + '">Damage</label>' +
      '<input id="attack-ranged-damage-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-attack-ranged-damage" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-3 col-xs-offset-3 col-xl-2 col-xl-offset-0">' +
      '<div class="m-input-block js-input-block">' +
      '<label class="m-input-block-label js-input-block-label" for="attack-ranged-critical-' + index + '">Critical</label>' +
      '<input id="attack-ranged-critical-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-attack-ranged-critical" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-3 col-xl-1">' +
      '<div class="m-input-block js-input-block">' +
      '<label class="m-input-block-label js-input-block-label" for="attack-ranged-range-' + index + '">Range</label>' +
      '<input id="attack-ranged-range-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-attack-ranged-range" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-3 col-xl-1">' +
      '<div class="m-input-block js-input-block">' +
      '<label class="m-input-block-label js-input-block-label" for="attack-ranged-ammo-' + index + '">Ammo</label>' +
      '<input id="attack-ranged-ammo-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-attack-ranged-ammo" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-3 col-xs-offset-9">' +
      '<div class="m-clone-block-delete-controls">' +
      '<button class="button button-small button-primary button-block js-clone-block-delete" tabindex="3"><span class="icon-close"></span></button>' +
      '</div>' +
      '</div>' +
      '</div>';
    return cloneString;
  };

  function _minMaxCountLimit(input) {
    if (input.value <= 0) {
      input.value = "";
    } else if (input.value >= 100) {
      input.value = 100;
    };
  };

  function _smoothScrollToClones(cloneBlock) {
    var targetTop = helper.e(cloneBlock).getBoundingClientRect().top;
    var windowBottom = window.innerHeight;
    var quickNavHeight = parseInt(getComputedStyle(document.querySelector(".js-quick-nav")).height, 10);
    var subHeaderHeight = parseInt(getComputedStyle(document.querySelector(".js-section-heading")).height, 10);
    if (targetTop > (windowBottom - (windowBottom / 2))) {
      var options = {
        offset: quickNavHeight + subHeaderHeight + 30
      };
      smoothScroll.animateScroll(null, cloneBlock, options);
    };
  };

  function bindControls() {
    var cloneBlockConsumable = helper.e(".js-clone-block-consumable");
    var cloneBlockAttack = helper.e(".js-clone-block-attack");
    var cloneAddConsumable = cloneBlockConsumable.querySelector(".js-clone-add-consumable");
    var cloneRemoveConsumable = cloneBlockConsumable.querySelector(".js-clone-remove");
    var cloneAddAttackMelee = cloneBlockAttack.querySelector(".js-clone-add-melee");
    var cloneAddAttackRanged = cloneBlockAttack.querySelector(".js-clone-add-ranged");
    var cloneRemoveAttack = cloneBlockAttack.querySelector(".js-clone-remove");
    cloneAddConsumable.addEventListener("click", function() {
      _render_clone(1, "consumable");
      _updateCloneConsumable();
      _smoothScrollToClones("#equipment-consumables");
      sheet.storeCharacters();
      // consumable.render();
      if (_getCloneCount("consumable") <= 99) {
        snack.render("Consumable added.", false, false);
      };
    }, false);
    cloneRemoveConsumable.addEventListener("click", function() {
      _changeCloneState("consumable");
    }, false);
    cloneAddAttackMelee.addEventListener("click", function() {
      _render_clone(1, "attack-melee");
      _updateCloneAttackMelee();
      _smoothScrollToClones("#offense-attacks");
      sheet.storeCharacters();
      if (_getCloneCount("attack-melee") <= 99) {
        snack.render("Melee attack added.", false, false);
      };
    }, false);
    cloneAddAttackRanged.addEventListener("click", function() {
      _render_clone(1, "attack-ranged");
      _updateCloneAttackRanged();
      _smoothScrollToClones("#offense-attacks");
      sheet.storeCharacters();
      if (_getCloneCount("attack-ranged") <= 99) {
        snack.render("Ranged attack added.", false, false);
      };
    }, false);
    cloneRemoveAttack.addEventListener("click", function() {
      _changeCloneState("attack");
    }, false);
  };

  function _render_clone(numberOfClones, cloneType) {
    var cloneBlock;
    var cloneTarget;
    if (cloneType == "attack-melee") {
      cloneBlock = helper.e(".js-clone-block-attack");
      cloneTarget = cloneBlock.querySelector(".js-clone-block-target-attack-melee");
    };
    if (cloneType == "attack-ranged") {
      cloneBlock = helper.e(".js-clone-block-attack");
      cloneTarget = cloneBlock.querySelector(".js-clone-block-target-attack-ranged");
    };
    if (cloneType == "consumable") {
      cloneBlock = helper.e(".js-clone-block-consumable");
      cloneTarget = cloneBlock.querySelector(".js-clone-block-target-consumable");
    };
    for (var i = 0; i < numberOfClones; i++) {
      var cloneCount = cloneTarget.querySelectorAll(".js-clone").length;
      var cloneString;
      var index = i;
      // make new clone node
      var newNode = document.createElement("div");
      newNode.setAttribute("class", "m-clone js-clone");
      // newNode.setAttribute("data-attack-type", cloneType);
      // check if adding new node or adding to clone target with already existing clones
      if (index < cloneCount) {
        index = cloneCount;
      };
      if (cloneType == "consumable") {
        cloneString = _newConsumable(index);
      };
      if (cloneType == "attack-melee") {
        cloneString = _newAttackMelee(index);
      };
      if (cloneType == "attack-ranged") {
        cloneString = _newAttackRanged(index);
      };
      // add content
      newNode.innerHTML = cloneString;
      // max of 100 clones
      if (cloneCount <= 99) {
        // append new clone
        cloneTarget.appendChild(newNode);
        // bind listeners
        if (cloneType == "consumable") {
          _bind_cloneConsumableInput(newNode.querySelectorAll(".js-input-block"));
        };
        if (cloneType == "attack-melee") {
          _bind_cloneAttackMeleeInput(newNode.querySelectorAll(".js-input-block"));
        };
        if (cloneType == "attack-ranged") {
          _bind_cloneAttackRangedInput(newNode.querySelectorAll(".js-input-block"));
        };
        _bind_cloneRemoveButton(newNode.querySelector(".js-clone-block-delete"), cloneType);
      };
    };
  };

  function _render_cloneInput(array, cloneType) {
    var cloneBlock;
    var cloneTarget;
    if (cloneType == "attack-melee") {
      cloneBlock = helper.e(".js-clone-block-attack");
      cloneTarget = cloneBlock.querySelector(".js-clone-block-target-attack-melee");
    };
    if (cloneType == "attack-ranged") {
      cloneBlock = helper.e(".js-clone-block-attack");
      cloneTarget = cloneBlock.querySelector(".js-clone-block-target-attack-ranged");
    };
    if (cloneType == "consumable") {
      cloneBlock = helper.e(".js-clone-block-consumable");
      cloneTarget = cloneBlock.querySelector(".js-clone-block-target-consumable");
    };
    for (var i = 0; i < array.length; i++) {
      for (var j in array[i]) {
        var input;
        if (cloneType == "consumable") {
          input = cloneTarget.querySelector("#consumable-" + j.replace(/_/g, "-") + "-" + i);
        };
        if (cloneType == "attack-melee") {
          input = cloneTarget.querySelector("#attack-melee-" + j.replace(/_/g, "-") + "-" + i);
        };
        if (cloneType == "attack-ranged") {
          input = cloneTarget.querySelector("#attack-ranged-" + j.replace(/_/g, "-") + "-" + i);
        };
        if (input) {
          input.value = array[i][j];
          inputBlock.update(input);
        };
      };
    };
  };

  function _getCloneCount(cloneType) {
    var cloneBlock;
    var cloneTarget;
    var cloneCount;
    if (cloneType == "attack-melee") {
      cloneBlock = helper.e(".js-clone-block-attack");
      cloneTarget = cloneBlock.querySelector(".js-clone-block-target-attack-melee");
      cloneCount = cloneTarget.querySelectorAll(".js-clone").length;
    };
    if (cloneType == "attack-melee" || cloneType == "attack-ranged") {
      cloneBlock = helper.e(".js-clone-block-attack");
      cloneTarget = cloneBlock.querySelector(".js-clone-block-target-attack-ranged");
      cloneCount = cloneTarget.querySelectorAll(".js-clone").length;
    };
    if (cloneType == "consumable") {
      cloneBlock = helper.e(".js-clone-block-consumable");
      cloneTarget = cloneBlock.querySelector(".js-clone-block-target-consumable");
      cloneCount = cloneTarget.querySelectorAll(".js-clone").length;
    };
    return cloneCount;
  };

  function _checkCloneState(cloneType) {
    var cloneBlock;
    var cloneTarget;
    if (cloneType == "attack-melee") {
      cloneBlock = helper.e(".js-clone-block-attack");
      cloneTarget = cloneBlock.querySelector(".js-clone-block-target-attack-melee");
    };
    if (cloneType == "attack-ranged") {
      cloneBlock = helper.e(".js-clone-block-attack");
      cloneTarget = cloneBlock.querySelector(".js-clone-block-target-attack-ranged");
    };
    if (cloneType == "consumable") {
      cloneBlock = helper.e(".js-clone-block-consumable");
      cloneTarget = cloneBlock.querySelector(".js-clone-block-target-consumable");
    };
    var cloneCount = cloneBlock.querySelectorAll(".js-clone");
    var cloneControls = cloneBlock.querySelector(".js-clone-controls");
    var cloneRemoveButton = cloneControls.querySelector(".js-clone-remove");
    if (cloneCount.length == 0) {
      cloneBlock.dataset.deleteCloneState = "false";
      helper.removeClass(cloneBlock, "is-delete-state");
      helper.removeClass(cloneRemoveButton, "is-active");
    };
  };

  function _bind_cloneRemoveButton(button, cloneType) {
    button.addEventListener("click", function() {
      _destroy_clone(this, cloneType);
      _updateCloneAttackMelee();
      _updateCloneAttackRanged();
      _updateCloneConsumable();
      sheet.storeCharacters();
      if (cloneType == "consumable") {
        _checkCloneState("consumable");
        snack.render("Consumable removed.", false, false);
      };
      if (cloneType == "attack-melee") {
        _checkCloneState("attack-melee");
        snack.render("Melee attack removed.", false, false);
      };
      if (cloneType == "attack-ranged") {
        _checkCloneState("attack-ranged");
        snack.render("Ranged attack removed.", false, false);
      };
    }, false);
  };

  var storeInputTimer = null;
  var storeBlurTimer = null;

  function delayUpdate(type) {
    if (type == "attack-melee") {
      _updateCloneAttackMelee();
    };
    if (type == "attack-ranged") {
      _updateCloneAttackRanged();
    };
    if (type == "consumable") {
      _updateCloneConsumable();
    };
    totalBlock.update();
    sheet.storeCharacters();
  };

  function _bind_cloneAttackMeleeInput(array) {
    for (var i = 0; i < array.length; i++) {
      var input = array[i].querySelector(".js-input-block-field");
      input.addEventListener("input", function() {
        clearTimeout(storeInputTimer);
        storeInputTimer = setTimeout(delayUpdate, 1000, "attack-melee");
      }, false);
      input.addEventListener("focus", function() {
        inputBlock.focus(this);
      }, false);
      input.addEventListener("blur", function() {
        clearTimeout(storeInputTimer);
        storeBlurTimer = setTimeout(delayUpdate, 1000, "attack-melee");
        inputBlock.focus(this);
      }, false);
    };
  };

  function _bind_cloneAttackRangedInput(array) {
    for (var i = 0; i < array.length; i++) {
      var input = array[i].querySelector(".js-input-block-field");
      input.addEventListener("input", function() {
        clearTimeout(storeInputTimer);
        storeInputTimer = setTimeout(delayUpdate, 1000, "attack-ranged");
      }, false);
      input.addEventListener("focus", function() {
        inputBlock.focus(this);
      }, false);
      input.addEventListener("blur", function() {
        clearTimeout(storeInputTimer);
        storeBlurTimer = setTimeout(delayUpdate, 1000, "attack-ranged");
        inputBlock.focus(this);
      }, false);
    };
  };

  function _bind_cloneConsumableInput(array) {
    for (var i = 0; i < array.length; i++) {
      var input = array[i].querySelector(".js-input-block-field");
      if (input.classList.contains("js-clone-consumable-used") || input.classList.contains("js-clone-consumable-total")) {
        input.addEventListener("input", function() {
          _minMaxCountLimit(this);
        }, false);
      };
      input.addEventListener("input", function() {
        clearTimeout(storeInputTimer);
        storeInputTimer = setTimeout(delayUpdate, 1000, "consumable");
      }, false);
      input.addEventListener("focus", function() {
        inputBlock.focus(this);
      }, false);
      input.addEventListener("blur", function() {
        clearTimeout(storeInputTimer);
        storeInputTimer = setTimeout(delayUpdate, 1000, "consumable");
        inputBlock.focus(this);
      }, false);
    };
  };

  function _changeCloneState(cloneType) {
    var cloneBlock = helper.e(".js-clone-block-" + cloneType);
    var cloneControls = cloneBlock.querySelector(".js-clone-controls");
    var cloneRemoveButton = cloneControls.querySelector(".js-clone-remove");
    var cloneCount = cloneBlock.querySelectorAll(".js-clone").length;
    // change clone remove button
    helper.toggleClass(cloneRemoveButton, "is-active");
    // change clone block state
    if (cloneBlock.dataset.deleteCloneState == "true") {
      helper.removeClass(cloneBlock, "is-delete-state");
      cloneBlock.dataset.deleteCloneState = "false";
    } else if (cloneBlock.dataset.deleteCloneState == "false") {
      helper.addClass(cloneBlock, "is-delete-state");
      cloneBlock.dataset.deleteCloneState = "true";
    };
    // if clone count us 0 remove restore all classes to normal
    if (cloneCount == 0) {
      helper.removeClass(cloneBlock, "is-delete-state");
      cloneBlock.dataset.deleteCloneState = "false";
      helper.removeClass(cloneRemoveButton, "is-active");
    };
  };

  function _destroy_clone(element) {
    var cloneToRemove = helper.getClosest(element, ".js-clone");
    cloneToRemove.remove();
  };

  function _createAttackMeleeObject(weapon, attack, damage, critical) {
    return {
      weapon: this.weapon = weapon,
      attack: this.attack = attack,
      damage: this.damage = damage,
      critical: this.critical = critical
    };
  };

  function _createAttackRangedObject(weapon, attack, damage, critical, range, ammo) {
    return {
      weapon: this.weapon = weapon,
      attack: this.attack = attack,
      damage: this.damage = damage,
      critical: this.critical = critical,
      range: this.range = range,
      ammo: this.ammo = ammo,
    };
  };

  function _createConsumableObject(item, current, total, used) {
    return {
      item: this.item = item,
      current: this.current = current,
      total: this.total = total,
      used: this.used = used
    };
  };

  function _updateCloneAttackMelee() {
    var cloneTarget = helper.e(".js-clone-block-target-attack-melee");
    var all_clone = cloneTarget.querySelectorAll(".js-clone");
    var cloneAttack = [];
    for (var i = 0; i < all_clone.length; i++) {
      var weapon = all_clone[i].querySelector(".js-clone-attack-melee-weapon").value || "";
      var attack = all_clone[i].querySelector(".js-clone-attack-melee-attack").value || "";
      var damage = all_clone[i].querySelector(".js-clone-attack-melee-damage").value || "";
      var critical = all_clone[i].querySelector(".js-clone-attack-melee-critical").value || "";
      var newAttackMelee = new _createAttackMeleeObject(weapon, attack, damage, critical);
      cloneAttack.push(newAttackMelee);
    };
    sheet.getCharacter().offense.attack.melee = cloneAttack;
  };

  function _updateCloneAttackRanged() {
    var cloneTarget = helper.e(".js-clone-block-target-attack-ranged");
    var all_clone = cloneTarget.querySelectorAll(".js-clone");
    var cloneAttack = [];
    for (var i = 0; i < all_clone.length; i++) {
      var weapon = all_clone[i].querySelector(".js-clone-attack-ranged-weapon").value || "";
      var attack = all_clone[i].querySelector(".js-clone-attack-ranged-attack").value || "";
      var damage = all_clone[i].querySelector(".js-clone-attack-ranged-damage").value || "";
      var critical = all_clone[i].querySelector(".js-clone-attack-ranged-critical").value || "";
      var range = all_clone[i].querySelector(".js-clone-attack-ranged-range").value || "";
      var ammo = all_clone[i].querySelector(".js-clone-attack-ranged-ammo").value || "";
      var newAttackRanged = new _createAttackRangedObject(weapon, attack, damage, critical, range, ammo);
      cloneAttack.push(newAttackRanged);
    };
    sheet.getCharacter().offense.attack.ranged = cloneAttack;
  };

  function _updateCloneConsumable() {
    var cloneTarget = helper.e(".js-clone-block-target-consumable");
    var all_clone = cloneTarget.querySelectorAll(".js-clone");
    var cloneConsumable = [];
    for (var i = 0; i < all_clone.length; i++) {
      var item = all_clone[i].querySelector(".js-clone-consumable-item").value || "";
      var current = all_clone[i].querySelector(".js-clone-consumable-current").innerHTML || "";
      var total = all_clone[i].querySelector(".js-clone-consumable-total").value || "";
      var used = all_clone[i].querySelector(".js-clone-consumable-used").value || "";
      var newConsumable = new _createConsumableObject(item, current, total, used);
      cloneConsumable.push(newConsumable);
    };
    sheet.getCharacter().equipment.consumable = cloneConsumable;
  };

  function render() {
    var all_attackMelee = sheet.getCharacter().offense.attack.melee;
    var all_attackRanged = sheet.getCharacter().offense.attack.ranged;
    var all_consumable = sheet.getCharacter().equipment.consumable;
    _render_clone(all_attackMelee.length, "attack-melee");
    _render_clone(all_attackRanged.length, "attack-ranged");
    _render_clone(all_consumable.length, "consumable");
    _render_cloneInput(all_attackMelee, "attack-melee");
    _render_cloneInput(all_attackRanged, "attack-ranged");
    _render_cloneInput(all_consumable, "consumable");
  };

  function clear() {
    // console.log("--- clone clear fired ---");
    // not sure why clear is firing twice on character change, must investigate 
    var all_cloneTarget = helper.eA(".js-clone-block-target");
    for (var i = 0; i < all_cloneTarget.length; i++) {
      // console.log("\t for running on " + all_cloneTarget[i].classList[2]);
      while (all_cloneTarget[i].lastChild) {
        all_cloneTarget[i].removeChild(all_cloneTarget[i].lastChild);
      };
    };
  };

  // exposed methods
  return {
    bind: bindControls,
    clear: clear,
    render: render
  };

})();

var inputBlock = (function() {

  function _store(element) {
    var path = element.dataset.path;
    helper.updateObject(sheet.getCharacter(), path, element.value);
    sheet.storeCharacters();
  };

  var storeInputTimer = null;
  var updateNavTimer = null;

  function delayUpdate(element) {
    _store(element);
    totalBlock.update();
  };

  function focus(element) {
    var inputBlock = helper.getClosest(element, ".js-input-block");
    var inputBlockLabel;
    if (inputBlock.querySelector(".js-input-block-label")) {
      inputBlockLabel = inputBlock.querySelector(".js-input-block-label");
    };
    if (inputBlock.querySelector(".js-input-block-label")) {
      if (element == document.activeElement) {
        helper.addClass(inputBlockLabel, "is-active");
      } else {
        helper.removeClass(inputBlockLabel, "is-active");
      };
      if (element.value == "" && element != document.activeElement) {
        helper.removeClass(inputBlockLabel, "is-active");
      } else {
        helper.addClass(inputBlockLabel, "is-active");
      };
    };
  };

  function clear() {
    var all_inputBlock = helper.eA(".js-input-block");
    for (var i = 0; i < all_inputBlock.length; i++) {
      all_inputBlock[i].querySelector(".js-input-block-field").value = "";
      var inputBlockLabel;
      if (all_inputBlock[i].querySelector(".js-input-block-label")) {
        inputBlockLabel = all_inputBlock[i].querySelector(".js-input-block-label");
        helper.removeClass(inputBlockLabel, "is-active");
      };
    };
  };

  function update(element) {
    focus(element);
  };

  function bind() {
    _bind_inputBlock();
    _bind_awesomeName();
    _bind_class();
    _bind_level();
    // _bind_inputControls();
  };

  function _bind_inputControls() {
    var all_inputControls = helper.eA(".js-input-controls");
    for (var i = 0; i < all_inputControls.length; i++) {
      var add = all_inputControls[i].querySelector(".add");
      var minus = all_inputControls[i].querySelector(".minus");
      add.addEventListener("click", function() {
        _addOrMinusInput(this);
      }, false);
      minus.addEventListener("click", function() {
        _addOrMinusInput(this);
      }, false);
    };
  };

  function _addOrMinusInput(element) {
    var target;
    if (element.dataset.add) {
      target = helper.e("#" + element.dataset.add);
      target.value = (parseInt(target.value, 10) || 0) + 1;
    };
    if (element.dataset.minus) {
      target = helper.e("#" + element.dataset.minus);
      target.value = (parseInt(target.value, 10) || 0) - 1;
    };
    _store(target);
    update(target);
    totalBlock.update();
  };

  function _bind_inputBlock() {
    var all_inputBlock = helper.eA(".js-input-block");
    for (var i = 0; i < all_inputBlock.length; i++) {
      var input = all_inputBlock[i].querySelector(".js-input-block-field");
      if (input) {
        input.addEventListener("input", function() {
          clearTimeout(storeInputTimer);
          storeInputTimer = setTimeout(delayUpdate, 1000, this);
        }, false);
        input.addEventListener("focus", function() {
          focus(this);
        }, false);
        input.addEventListener("blur", function() {
          _store(this);
          focus(this);
        }, false);
      };
    };
  };

  function _bind_awesomeName() {
    var input = helper.e(".js-basics-name");
    input.addEventListener("input", function() {
      clearTimeout(updateNavTimer);
      updateNavTimer = setTimeout(nav.update, 1000, this);
    }, false);
  };

  function _bind_class() {
    var input = helper.e(".js-basics-class");
    input.addEventListener("input", function() {
      clearTimeout(updateNavTimer);
      updateNavTimer = setTimeout(nav.update, 1000, this);
    }, false);
  };

  function _bind_level() {
    var input = helper.e(".js-basics-level");
    input.addEventListener("input", function() {
      clearTimeout(updateNavTimer);
      updateNavTimer = setTimeout(nav.update, 1000, this);
    }, false);
  };

  function render() {
    var all_inputBlockField = helper.eA(".js-input-block-field");
    for (var i = 0; i < all_inputBlockField.length; i++) {
      var path = all_inputBlockField[i].dataset.path;
      if (path) {
        var content = helper.getObject(sheet.getCharacter(), path);
        all_inputBlockField[i].value = content;
        update(all_inputBlockField[i]);
      };
    };
  };

  // exposed methods
  return {
    update: update,
    focus: focus,
    render: render,
    clear: clear,
    bind: bind
  };

})();

var textareaBlock = (function() {

  function _store(element) {
    var path = element.dataset.path;
    helper.updateObject(sheet.getCharacter(), path, element.innerHTML);
    sheet.storeCharacters();
  };

  var storeInputTimer = null;
  var storeBlurTimer = null;

  function delayUpdate(element) {
    _store(element);
  };

  function focus(element) {
    var textareaBlock = helper.getClosest(element, ".js-textarea-block");
    var textareaBlockField = textareaBlock.querySelector(".js-textarea-block-field");
    var textareaBlockLabel;
    if (textareaBlock.querySelector(".js-textarea-block-label")) {
      textareaBlockLabel = textareaBlock.querySelector(".js-textarea-block-label");
    };
    if (textareaBlock.querySelector(".js-textarea-block-label")) {
      if (textareaBlockField == document.activeElement) {
        helper.addClass(textareaBlockLabel, "is-active");
      } else {
        helper.removeClass(textareaBlockLabel, "is-active");
      };
      if (element.innerHTML == "" && textareaBlockField != document.activeElement) {
        helper.removeClass(textareaBlockLabel, "is-active");
      } else {
        helper.addClass(textareaBlockLabel, "is-active");
      };
    };
  };

  function clear() {
    var all_textareaBlock = helper.eA(".js-textarea-block");
    for (var i = 0; i < all_textareaBlock.length; i++) {
      all_textareaBlock[i].querySelector(".js-textarea-block-field").innerHTML = "";
      var textareaBlockLabel;
      if (all_textareaBlock[i].querySelector(".js-textarea-block-label")) {
        textareaBlockLabel = all_textareaBlock[i].querySelector(".js-textarea-block-label");
        helper.removeClass(textareaBlockLabel, "is-active");
      };
    };
  };

  function updateTextareaBlock(element) {
    focus(element);
  };

  function bind() {
    var all_textareaBlock = helper.eA(".js-textarea-block");
    for (var i = 0; i < all_textareaBlock.length; i++) {
      var textareaBlockField = all_textareaBlock[i].querySelector(".js-textarea-block-field");
      var textareaBlockLabel = all_textareaBlock[i].querySelector(".js-textarea-block-label");
      if (textareaBlockField) {
        textareaBlockField.addEventListener("input", function() {
          clearTimeout(storeBlurTimer);
          storeBlurTimer = setTimeout(delayUpdate, 1000, this);
        }, false);
        textareaBlockField.addEventListener("focus", function() {
          focus(this);
        }, false);
        textareaBlockField.addEventListener("blur", function() {
          _store(this);
          focus(this);
        }, false);
      };
      if (textareaBlockLabel) {
        textareaBlockLabel.addEventListener("click", function() {
          _textareaLabelshiftFocus(this);
        }, false);
      };
    };
  };

  function _textareaLabelshiftFocus(element) {
    var textareaBlock = helper.getClosest(element, ".js-textarea-block");
    var textareaBlockField = textareaBlock.querySelector(".js-textarea-block-field");
    textareaBlockField.focus();
  };

  function render() {
    var all_textareaBlockField = helper.eA(".js-textarea-block-field");
    for (var i = 0; i < all_textareaBlockField.length; i++) {
      var path = all_textareaBlockField[i].dataset.path;
      if (path) {
        var content = helper.getObject(sheet.getCharacter(), path);
        all_textareaBlockField[i].innerHTML = content;
        updateTextareaBlock(all_textareaBlockField[i]);
      };
    };
  };

  // exposed methods
  return {
    update: updateTextareaBlock,
    focus: focus,
    render: render,
    clear: clear,
    bind: bind
  };

})();

var spells = (function() {

  function bind() {
    var spellPrepareButton = helper.e(".js-spell-prepare");
    var spellUnprepareButton = helper.e(".js-spell-unprepare");
    var spellCastButton = helper.e(".js-spell-cast");
    var spellActiveButton = helper.e(".js-spell-active");
    var spellRemoveButton = helper.e(".js-spell-remove");
    var all_newSpellAdd = helper.eA(".js-new-spell-add");
    for (var i = 0; i < all_newSpellAdd.length; i++) {
      all_newSpellAdd[i].addEventListener("click", function() {
        _addNewSpell(helper.getClosest(this, ".js-new-spell").querySelector(".js-new-spell-field"));
        _updateSpells(true);
        sheet.storeCharacters();
      }, false);
    };
    for (var i = 0; i < all_newSpellAdd.length; i++) {
      var newSpell = helper.getClosest(all_newSpellAdd[i], ".js-new-spell");
      var newSpellField = newSpell.querySelector(".js-new-spell-field");
      newSpellField.addEventListener("keypress", function() {
        _addNewSpellOnEnter(this);
      }, false);
    };
    spellPrepareButton.addEventListener("click", function() {
      _changeSpellState(this);
    }, false);
    spellUnprepareButton.addEventListener("click", function() {
      _changeSpellState(this);
    }, false);
    spellCastButton.addEventListener("click", function() {
      _changeSpellState(this);
    }, false);
    spellActiveButton.addEventListener("click", function() {
      _changeSpellState(this);
    }, false);
    spellRemoveButton.addEventListener("click", function() {
      _changeSpellState(this);
    }, false);
  };

  function _addNewSpellOnEnter(element) {
    var keystroke = event.keyCode || event.which;
    if (keystroke == 13) {
      _addNewSpell(element);
      _updateSpells(true);
      sheet.storeCharacters();
    };
  };

  function _bind_spellKnownItem(element) {
    element.addEventListener("click", function() {
      clearTimeout(storeSpellTimer);
      storeSpellTimer = setTimeout(delayUpdate, 1000, this);
      _changeSpell(this);
      _checkSpellState();
    }, false);
  };

  function _changeSpell(spell) {
    var spellRoot = helper.getClosest(spell, ".js-spells");
    var spellLevel = helper.getClosest(spell, ".js-spell-book").dataset.spellLevel;
    var spellMarks = spell.querySelector(".js-spell-marks");
    var spellActive = spell.querySelector(".js-spell-active");
    var spellState = spellRoot.dataset.spellState;
    // state prepare
    if (spellState == "prepare") {
      var preparedIcon = document.createElement("span");
      preparedIcon.setAttribute("class", "icon icon-radio-button-checked js-spell-mark-checked");
      if (spellMarks.children.length <= 15) {
        // spellMarks.insertBefore(preparedIcon, spellMarks.firstChild);
        spellMarks.appendChild(preparedIcon);
      };
      if (spellMarks.children.length > 0) {
        helper.addClass(spell, "button-primary");
      };
    };
    // state unprepare
    if (spellState == "unprepare") {
      if (spellMarks.lastChild) {
        spellMarks.lastChild.remove();
      };
      if (spellMarks.children.length <= 0) {
        helper.removeClass(spell, "button-primary");
      };
    };
    // state cast
    if (spellState == "cast") {
      var all_spellsMarks = spellMarks.children;
      var all_spellsCast = 0;
      for (var i = 0; i < all_spellsMarks.length; i++) {
        if (all_spellsMarks[i].classList.contains("icon-radio-button-checked")) {
          helper.toggleClass(all_spellsMarks[i], "icon-radio-button-checked");
          helper.toggleClass(all_spellsMarks[i], "icon-radio-button-unchecked");
          helper.toggleClass(all_spellsMarks[i], "js-spell-mark-checked");
          helper.toggleClass(all_spellsMarks[i], "js-spell-mark-unchecked");
          break
        };
      };
      // if no checked icons can be found change the var allSpellCast to true
      for (var i = 0; i < all_spellsMarks.length; i++) {
        if (all_spellsMarks[i].classList.contains("icon-radio-button-checked")) {
          all_spellsCast++;
        };
      };
      // allSpellCast to true change spell button class
      if (all_spellsCast <= 0) {
        helper.removeClass(spell, "button-primary");
      };
    };
    // state active
    if (spellState == "active") {
      var activeIcon = document.createElement("span");
      activeIcon.setAttribute("class", "icon icon-play-arrow");
      if (spellMarks.children.length > 0) {
        if (spellActive.children.length > 0) {
          spellActive.firstChild.remove();
        } else {
          spellActive.appendChild(activeIcon);
        };
      };
      if (spellMarks.children.length <= 0) {
        if (spellActive.children.length > 0) {
          spellActive.firstChild.remove();
        };
      };
    };
    // state remove
    if (spellState == "remove") {
      var spellName = spell.textContent;
      spell.remove();
      snack.render(helper.truncate(spellName, 40, true) + " removed.", false, false);
    };
    _updateSpells();
  };

  function _changeSpellState(element) {
    var all_spellLevels = helper.eA(".js-spell-book-known");
    var spellsFound = false;
    var spellRoot = helper.e(".js-spells");
    var spellPrepareButton = helper.e(".js-spell-prepare");
    var spellUnprepareButton = helper.e(".js-spell-unprepare");
    var spellCastButton = helper.e(".js-spell-cast");
    var spellActiveButton = helper.e(".js-spell-active");
    var spellRemoveButton = helper.e(".js-spell-remove");
    var all_spellStateControls = spellRoot.querySelectorAll(".js-spell-state-control");
    var all_spellBookItem = helper.eA(".js-spell");
    for (var i = 0; i < all_spellLevels.length; i++) {
      if (all_spellLevels[i].children.length > 0) {
        spellsFound = true;
      };
    };
    if (spellsFound) {
      // if this button is active
      if (spellRoot.dataset.spellState != element.dataset.state) {
        helper.removeClass(element, "is-active");
        helper.removeClass(spellRoot, "is-state-prepare");
        helper.removeClass(spellRoot, "is-state-unprepare");
        helper.removeClass(spellRoot, "is-state-cast");
        helper.removeClass(spellRoot, "is-state-active");
        helper.removeClass(spellRoot, "is-state-remove");
        helper.addClass(spellRoot, "is-state-" + element.dataset.state);
        spellRoot.dataset.spellState = element.dataset.state;
        for (var i = 0; i < all_spellStateControls.length; i++) {
          helper.removeClass(all_spellStateControls[i], "is-active");
        };
        helper.addClass(element, "is-active");
      } else {
        spellRoot.dataset.spellState = "false";
        helper.removeClass(element, "is-active");
        helper.removeClass(spellRoot, "is-state-prepare");
        helper.removeClass(spellRoot, "is-state-unprepare");
        helper.removeClass(spellRoot, "is-state-cast");
        helper.removeClass(spellRoot, "is-state-active");
        helper.removeClass(spellRoot, "is-state-remove");
      };
    } else {
      spellRoot.dataset.spellState = "false";
      helper.removeClass(element, "is-active");
      helper.removeClass(spellRoot, "is-state-prepare");
      helper.removeClass(spellRoot, "is-state-unprepare");
      helper.removeClass(spellRoot, "is-state-cast");
      helper.removeClass(spellRoot, "is-state-active");
      helper.removeClass(spellRoot, "is-state-remove");
    };
  };

  function _checkSpellState() {
    var spellRoot = helper.e(".js-spells");
    var spellPrepareButton = helper.e(".js-spell-prepare");
    var spellUnprepareButton = helper.e(".js-spell-unprepare");
    var spellCastButton = helper.e(".js-spell-cast");
    var spellActiveButton = helper.e(".js-spell-active");
    var spellRemoveButton = helper.e(".js-spell-remove");
    var all_spellStateControls = spellRoot.querySelectorAll(".js-spell-state-control");
    var all_spellBookItem = helper.eA(".js-spell");
    if (all_spellBookItem.length == 0) {
      for (var i = 0; i < all_spellStateControls.length; i++) {
        helper.removeClass(all_spellStateControls[i], "is-active");
      };
      spellRoot.dataset.spellState = "false";
    };
  };

  function _addNewSpell(element) {
    var level = helper.getClosest(element, ".js-spell-book").dataset.spellLevel;
    var spallName = element.value;
    var newSpell = new _createSpellObject(spallName, 0, false, 0);
    // if input value is not empty
    if (spallName !== "") {
      //  if first character is not a number
      if (isNaN(spallName.charAt(0))) {
        // add spell button to spell list
        // knownListToSaveTo.appendChild(newSpell);
        _render_spell([newSpell], level);
        // clear input field
        element.value = "";
        // add spell to current character object
        // sheet.getCharacter().spells.book.push(newSpell);
        // make a snack bar
        snack.render(helper.truncate(spallName, 40, true) + " added to spell level " + level + ".", false, false);
      } else {
        // error if the name starts with a number
        snack.render("Name can't start with a space or number.", false, false);
      };
    };
  };

  function _createSpellObject(spellName, spellPrepared, spellActive, spellCast) {
    return {
      name: this.name = spellName,
      prepared: this.prepared = spellPrepared || 0,
      active: this.active = spellActive || false,
      cast: this.cast = spellCast || 0
    };
  };

  var storeSpellTimer = null;

  function delayUpdate() {
    var spellRoot = helper.e(".js-spells");
    var spellState = spellRoot.dataset.spellState;
    if (spellState == "prepare" || spellState == "unprepare" || spellState == "cast" || spellState == "active" || spellState == "remove") {
      sheet.storeCharacters();
    };
  };

  function _updateSpells(force) {
    var spellRoot = helper.e(".js-spells");
    var spellState = spellRoot.dataset.spellState;
    var all_spellLevels = spellRoot.querySelectorAll(".js-spell-book-known");
    if (spellState == "prepare" || spellState == "unprepare" || spellState == "cast" || spellState == "active" || spellState == "remove" || force) {
      // loop over all spell level blocks
      for (var i = 0; i < all_spellLevels.length; i++) {
        var all_spellsToUpdate = [];
        // find all spell items in this level block
        var all_spellKnownItems = all_spellLevels[i].querySelectorAll(".js-spell");
        // loop ovre all spell items found
        for (var j = 0; j < all_spellKnownItems.length; j++) {
          var name = all_spellKnownItems[j].textContent;
          var prepared = all_spellKnownItems[j].querySelector(".js-spell-marks").children.length;
          var cast = all_spellKnownItems[j].querySelector(".js-spell-marks").querySelectorAll(".js-spell-mark-unchecked").length;
          var active = all_spellKnownItems[j].querySelector(".js-spell-active").children.length;
          if (active > 0) {
            active = true;
          } else {
            active = false;
          };
          var newSpell = new _createSpellObject(name, prepared, active, cast);
          // add to current character object
          all_spellsToUpdate.push(newSpell);
        };
        sheet.getCharacter().spells.book[i]["level_" + i] = all_spellsToUpdate;
      };
    };
  };

  function render() {
    // build an array of spell objects
    var spellsToRender;
    // iterate over all objects keys to find spells then push those values to spellsToRender
    if (sheet.getCharacter().spells.book) {
      for (var i in sheet.getCharacter().spells.book) {
        for (var j in sheet.getCharacter().spells.book[i]) {
          spellsToRender = sheet.getCharacter().spells.book[i][j];
          _render_spell(spellsToRender, i);
        };
      };
    };
  };

  function _render_spell(array, level) {
    // read spells and add them to spell lists
    for (var i = 0; i < array.length; i++) {
      var spellObject = array[i];
      // find spell list to add too
      var knownListToSaveTo = helper.e(".js-spell-book-known-level-" + level);
      // append new spell to spell list
      var spellButton = _createSpellButton(spellObject.name);
      knownListToSaveTo.appendChild(spellButton);
      // find spell mark parent
      var spellMarks = spellButton.querySelector(".js-spell-marks");
      var spellActive = spellButton.querySelector(".js-spell-active");
      // add spell marks
      if (spellObject.prepared > 0) {
        helper.addClass(spellButton, "button-primary");
        for (var j = 0; j < spellObject.prepared; j++) {
          var preparedIcon = document.createElement("span");
          preparedIcon.setAttribute("class", "icon icon-radio-button-checked js-spell-mark-checked");
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
            helper.toggleClass(all_check[j], "js-spell-mark-checked");
            helper.toggleClass(all_check[j], "js-spell-mark-unchecked");
          };
        };
        if (spellObject.cast >= spellObject.prepared) {
          helper.removeClass(spellButton, "button-primary");
        };
      };
      // if spell is active
      if (spellObject.active) {
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
      _bind_spellKnownItem(spellButton);
    };
  };

  function _createSpellButton(spellName) {
    var spellButton = document.createElement("button");
    spellButton.setAttribute("data-spell-name", spellName.replace(/\s+/g, "-").toLowerCase());
    spellButton.setAttribute("id", spellName.replace(/\s+/g, "-").toLowerCase());
    spellButton.setAttribute("class", "m-spell button button-medium js-spell");
    var spellActive = document.createElement("span");
    spellActive.setAttribute("class", "m-spell-active js-spell-active");
    spellButton.appendChild(spellActive);
    var spellNameSpan = document.createElement("span");
    spellNameSpan.setAttribute("class", "m-spell-name js-spell-name");
    spellNameSpan.textContent = spellName;
    spellButton.appendChild(spellNameSpan);
    var spellMarks = document.createElement("span");
    spellMarks.setAttribute("class", "m-spell-marks js-spell-marks");
    spellButton.appendChild(spellMarks);
    var spellRemove = document.createElement("span");
    spellRemove.setAttribute("class", "m-spell-remove js-spell-remove");
    spellButton.appendChild(spellRemove);
    var spellRemoveIcon = document.createElement("span");
    spellRemoveIcon.setAttribute("class", "icon-close");
    spellRemove.appendChild(spellRemoveIcon);
    return spellButton;
  };

  function clear() {
    var all_spellBookKnown = helper.eA(".js-spell-book-known");
    for (var i = 0; i < all_spellBookKnown.length; i++) {
      while (all_spellBookKnown[i].lastChild) {
        all_spellBookKnown[i].removeChild(all_spellBookKnown[i].lastChild);
      };
    };
  };

  // exposed methods
  return {
    clear: clear,
    bind: bind,
    render: render
  };

})();

var stats = (function() {

  function _changeModifer(element, field) {
    var stat = parseInt(element.value, 10) || 0;
    var modifier = _calculateModifer(element);
    field.textContent = modifier;
  };

  var changeModiferTimer = null;

  function delayUpdate(element) {
    render();
    totalBlock.update();
  };

  function _calculateModifer(element) {
    var modifier = Math.floor((element.value - 10) / 2);
    return modifier;
  };

  function render() {
    var stats = helper.eA(".js-stats");
    for (var i = 0; i < stats.length; i++) {
      var score = stats[i].querySelector(".js-stats-score");
      var modifier = stats[i].querySelector(".js-stats-modifier");
      var scoreTemp = stats[i].querySelector(".js-stats-score-temp");
      var Modtempifier = stats[i].querySelector(".js-stats-modifier-temp");
      if (score.value !== "") {
        _changeModifer(score, modifier);
      } else {
        modifier.textContent = "";
      };
      if (scoreTemp.value !== "") {
        _changeModifer(scoreTemp, Modtempifier);
      } else {
        Modtempifier.textContent = "";
      };
    };
  };

  function bind() {
    var score = helper.eA(".js-stats-score");
    var scoreTemp = helper.eA(".js-stats-score-temp");
    for (var i = 0; i < score.length; i++) {
      score[i].addEventListener("input", function() {
        clearTimeout(changeModiferTimer);
        changeModiferTimer = setTimeout(delayUpdate, 1000);
      }, false);
    };
    for (var i = 0; i < scoreTemp.length; i++) {
      scoreTemp[i].addEventListener("input", function() {
        clearTimeout(changeModiferTimer);
        changeModiferTimer = setTimeout(delayUpdate, 1000);
      }, false);
    };
  };

  // exposed methods
  return {
    render: render,
    bind: bind
  };

})();

var totalBlock = (function() {


  function render() {
    var all_totalBlockBonuses = helper.eA(".js-total-block-bonuses");
    var all_totalBlockToggleCheck = helper.eA(".js-total-block-toggle-check");
    for (var i = 0; i < all_totalBlockBonuses.length; i++) {
      var path = all_totalBlockBonuses[i].dataset.bonusPath;
      var totalBlock = helper.getClosest(all_totalBlockBonuses[i], ".js-total-block");
      if (path) {
        var data = helper.getObject(sheet.getCharacter(), path);
        for (var j in data) {
          if (data[j]) {
            if (j == "str_bonus") {
              totalBlock.dataset.strBonus = "true";
            };
            if (j == "dex_bonus") {
              totalBlock.dataset.dexBonus = "true";
            };
            if (j == "con_bonus") {
              totalBlock.dataset.conBonus = "true";
            };
            if (j == "int_bonus") {
              totalBlock.dataset.intBonus = "true";
            };
            if (j == "wis_bonus") {
              totalBlock.dataset.wisBonus = "true";
            };
            if (j == "cha_bonus") {
              totalBlock.dataset.chaBonus = "true";
            };
            if (j == "bab") {
              totalBlock.dataset.babBonus = "true";
            };
            if (j == "size") {
              totalBlock.dataset.sizeBonus = "true";
            };
            if (j == "special_size") {
              totalBlock.dataset.specialSizeBonus = "true";
            };
            if (j == "level") {
              totalBlock.dataset.levelBonus = "true";
            };
            if (j == "half_level") {
              totalBlock.dataset.halfLevelBonus = "true";
            };
            if (j == "plus_ten") {
              totalBlock.dataset.plusTenBonus = "true";
            };
            if (j == "ac_armor") {
              totalBlock.dataset.acArmor = "true";
            };
            if (j == "ac_shield") {
              totalBlock.dataset.acShield = "true";
            };
            if (j == "ac_deflect") {
              totalBlock.dataset.acDeflect = "true";
            };
            if (j == "ac_dodge") {
              totalBlock.dataset.acDodge = "true";
            };
            if (j == "ac_natural") {
              totalBlock.dataset.acNatural = "true";
            };
            if (j == "class_skill") {
              totalBlock.dataset.classSkill = "true";
            };
          };
        };
      };
    };
    for (var i = 0; i < all_totalBlockToggleCheck.length; i++) {
      var path = all_totalBlockToggleCheck[i].dataset.path;
      var state = helper.getObject(sheet.getCharacter(), path);
      all_totalBlockToggleCheck[i].checked = state;
    };
  };

  function update() {
    var all_totalBlock = helper.eA(".js-total-block");
    for (var i = 0; i < all_totalBlock.length; i++) {
      var statsStrModifier = helper.e(".js-stats-str-modifier");
      var statsDexModifier = helper.e(".js-stats-dex-modifier");
      var statsConModifier = helper.e(".js-stats-con-modifier");
      var statsIntModifier = helper.e(".js-stats-int-modifier");
      var statsWisModifier = helper.e(".js-stats-wis-modifier");
      var statsChaModifier = helper.e(".js-stats-cha-modifier");
      var statsStrModifierTemp = helper.e(".js-stats-str-modifier-temp");
      var statsDexModifierTemp = helper.e(".js-stats-dex-modifier-temp");
      var statsConModifierTemp = helper.e(".js-stats-con-modifier-temp");
      var statsIntModifierTemp = helper.e(".js-stats-int-modifier-temp");
      var statsWisModifierTemp = helper.e(".js-stats-wis-modifier-temp");
      var statsChaModifierTemp = helper.e(".js-stats-cha-modifier-temp");
      var strBonus = 0;
      var dexBonus = 0;
      var conBonus = 0;
      var intBonus = 0;
      var wisBonus = 0;
      var chaBonus = 0;
      var babBonus = 0;
      var sizeBonus = 0;
      var specialSizeBonus = 0;
      var levelBonus = 0;
      var halfLevelBonus = 0;
      var plusTenBonus = 0;
      var acArmor = 0;
      var acShield = 0;
      var acDeflect = 0;
      var acDodge = 0;
      var acNatural = 0;
      var classSkill = 0;
      // str
      if (all_totalBlock[i].dataset.strBonus == "true") {
        // if ability temp mod is empty
        if (statsStrModifierTemp.textContent == "") {
          strBonus = parseInt(statsStrModifier.textContent, 10 || 0);
        } else {
          strBonus = parseInt(statsStrModifierTemp.textContent, 10 || 0);
        };
      };
      // dex
      if (all_totalBlock[i].dataset.dexBonus == "true") {
        // if ability temp mod is empty
        if (statsDexModifierTemp.textContent == "") {
          dexBonus = parseInt(statsDexModifier.textContent, 10 || 0);
        } else {
          dexBonus = parseInt(statsDexModifierTemp.textContent, 10 || 0);
        };
      };
      // con
      if (all_totalBlock[i].dataset.conBonus == "true") {
        // if ability temp mod is empty
        if (statsConModifierTemp.textContent == "") {
          conBonus = parseInt(statsConModifier.textContent, 10 || 0);
        } else {
          conBonus = parseInt(statsConModifierTemp.textContent, 10 || 0);
        };
      };
      // int
      if (all_totalBlock[i].dataset.intBonus == "true") {
        // if ability temp mod is empty
        if (statsIntModifierTemp.textContent == "") {
          intBonus = parseInt(statsIntModifier.textContent, 10 || 0);
        } else {
          intBonus = parseInt(statsIntModifierTemp.textContent, 10 || 0);
        };
      };
      // wis
      if (all_totalBlock[i].dataset.wisBonus == "true") {
        // if ability temp mod is empty
        if (statsWisModifierTemp.textContent == "") {
          wisBonus = parseInt(statsWisModifier.textContent, 10 || 0);
        } else {
          wisBonus = parseInt(statsWisModifierTemp.textContent, 10 || 0);
        };
      };
      // cha
      if (all_totalBlock[i].dataset.chaBonus == "true") {
        // if ability temp mod is empty
        if (statsChaModifierTemp.textContent == "") {
          chaBonus = parseInt(statsChaModifier.textContent, 10 || 0);
        } else {
          chaBonus = parseInt(statsChaModifierTemp.textContent, 10 || 0);
        };
      };
      // bab
      if (all_totalBlock[i].dataset.babBonus == "true") {
        babBonus = parseInt(helper.e("#offense-base-attack").value, 10 || 0);
      };
      // size
      if (all_totalBlock[i].dataset.sizeBonus == "true") {
        sizeBonus = parseInt(helper.e("#defense-ac-size-bonus").value, 10 || 0);
      };
      // special size
      if (all_totalBlock[i].dataset.specialSizeBonus == "true") {
        specialSizeBonus = parseInt(helper.e("#offense-special-size-bonus").value, 10 || 0);
      };
      // level
      if (all_totalBlock[i].dataset.levelBonus == "true") {
        levelBonus = parseInt(helper.e("#basics-level").value, 10 || 0);
      };
      // half level
      if (all_totalBlock[i].dataset.halfLevelBonus == "true") {
        halfLevelBonus = Math.floor(parseInt(helper.e("#basics-level").value, 10 || 0) / 2);
      };
      // ac armor
      if (all_totalBlock[i].dataset.acArmor == "true") {
        acArmor = parseInt(helper.e("#defense-ac-armor").value, 10 || 0);
      };
      // ac shield
      if (all_totalBlock[i].dataset.acShield == "true") {
        acShield = parseInt(helper.e("#defense-ac-shield").value, 10 || 0);
      };
      // ac deflect
      if (all_totalBlock[i].dataset.acDeflect == "true") {
        acDeflect = parseInt(helper.e("#defense-ac-deflect").value, 10 || 0);
      };
      // ac dodge
      if (all_totalBlock[i].dataset.acDodge == "true") {
        acDodge = parseInt(helper.e("#defense-ac-dodge").value, 10 || 0);
      };
      // ac natural
      if (all_totalBlock[i].dataset.acNatural == "true") {
        acNatural = parseInt(helper.e("#defense-ac-natural").value, 10 || 0);
      };
      // class skill
      if (all_totalBlock[i].dataset.classSkill == "true") {
        classSkill = 3;
      };
      // 10
      if (all_totalBlock[i].dataset.plusTenBonus == "true") {
        plusTenBonus = 10;
      };
      // check if any bonus is NaN
      if (isNaN(levelBonus)) {
        levelBonus = 0;
      };
      if (isNaN(strBonus)) {
        strBonus = 0;
      };
      if (isNaN(dexBonus)) {
        dexBonus = 0;
      };
      if (isNaN(conBonus)) {
        conBonus = 0;
      };
      if (isNaN(intBonus)) {
        intBonus = 0;
      };
      if (isNaN(wisBonus)) {
        wisBonus = 0;
      };
      if (isNaN(chaBonus)) {
        chaBonus = 0;
      };
      if (isNaN(babBonus)) {
        babBonus = 0;
      };
      if (isNaN(sizeBonus)) {
        sizeBonus = 0;
      };
      if (isNaN(specialSizeBonus)) {
        specialSizeBonus = 0;
      };
      if (isNaN(levelBonus)) {
        levelBonus = 0;
      };
      if (isNaN(plusTenBonus)) {
        plusTenBonus = 0;
      };
      if (isNaN(acArmor)) {
        acArmor = 0;
      };
      if (isNaN(acShield)) {
        acShield = 0;
      };
      if (isNaN(acDeflect)) {
        acDeflect = 0;
      };
      if (isNaN(acDodge)) {
        acDodge = 0;
      };
      if (isNaN(acNatural)) {
        acNatural = 0;
      };
      if (isNaN(classSkill)) {
        classSkill = 0;
      };
      var total = all_totalBlock[i].querySelector(".js-total-block-total");
      var path = total.dataset.path;
      var all_inputBlockField = all_totalBlock[i].querySelectorAll(".js-input-block-field");
      var modifiers = [];
      var modifiers_total = 0;
      for (var q = 0; q < all_inputBlockField.length; q++) {
        if (all_inputBlockField.length > 0) {
          if (all_inputBlockField[q].dataset.total == "addition") {
            modifiers.push(parseInt(all_inputBlockField[q].value, 10) || 0);
          };
          if (all_inputBlockField[q].dataset.total == "subtract") {
            modifiers.push(-parseInt(all_inputBlockField[q].value, 10) || 0);
          };
        };
      };
      // if modifiers array has values total them
      if (modifiers.length > 0) {
        modifiers_total = modifiers.reduce(function(a, b) {
          return a + b;
        });
      };
      // grand total
      var grandTotal = modifiers_total + levelBonus + halfLevelBonus + babBonus + sizeBonus + specialSizeBonus + plusTenBonus + strBonus + dexBonus + conBonus + intBonus + wisBonus + chaBonus + acArmor + acShield + acDeflect + acDodge + acNatural + classSkill;
      // update total
      total.textContent = grandTotal;
      // store current to character object
      if (path) {
        helper.updateObject(sheet.getCharacter(), path, parseInt(total.innerHTML, 10));
      };
    };
    sheet.storeCharacters();
  };

  function _store(input, totalBlock) {
    var totalBlock = helper.getClosest(input, ".js-total-block") || totalBlock;
    var path = input.dataset.path;
    helper.updateObject(sheet.getCharacter(), path, input.checked);
    sheet.storeCharacters();
  };

  function _bonusTextLable(bonusType) {
    if (bonusType == "str-bonus" || bonusType == "str_bonus") {
      return "Str Bonus";
    };
    if (bonusType == "dex-bonus" || bonusType == "dex_bonus") {
      return "Dex Bonus";
    };
    if (bonusType == "con-bonus" || bonusType == "con_bonus") {
      return "Con Bonus";
    };
    if (bonusType == "int-bonus" || bonusType == "int_bonus") {
      return "Int Bonus";
    };
    if (bonusType == "wis-bonus" || bonusType == "wis_bonus") {
      return "Wis Bonus";
    };
    if (bonusType == "cha-bonus" || bonusType == "cha_bonus") {
      return "Cha Bonus";
    };
    if (bonusType == "bab") {
      return "BAB Bonus";
    };
    if (bonusType == "size") {
      return "Size Bonus";
    };
    if (bonusType == "special-size" || bonusType == "special_size") {
      return "Special Size Bonus";
    };
    if (bonusType == "level") {
      return "Level";
    };
    if (bonusType == "half-level" || bonusType == "half_level") {
      return "Half Level";
    };
    if (bonusType == "plus-ten" || bonusType == "plus_ten") {
      return "Plus 10";
    };
    if (bonusType == "ac-armor" || bonusType == "ac_armor") {
      return "Armor";
    };
    if (bonusType == "ac-shield" || bonusType == "ac_shield") {
      return "Shield";
    };
    if (bonusType == "ac-deflect" || bonusType == "ac_deflect") {
      return "Deflect";
    };
    if (bonusType == "ac-dodge" || bonusType == "ac_dodge") {
      return "Dodge";
    };
    if (bonusType == "ac-natural" || bonusType == "ac_natural") {
      return "Natural Armor";
    };
    if (bonusType == "class-skill" || bonusType == "class_skill") {
      return "Class Skill";
    };
  };

  function _totalBlockModalContent(element) {
    var totalBlock = helper.getClosest(element, ".js-total-block");
    var path = element.dataset.bonusPath;
    var heading = element.dataset.modalHeading || "Bonuses to add";
    var container = document.createElement("div");
    container.setAttribute("class", "container");
    var row = document.createElement("div");
    row.setAttribute("class", "row");

    if (path) {
      var data = helper.getObject(sheet.getCharacter(), path);
      for (var i in data) {
        // filter out class skill as that has an on page toggle
        if (i != "class_skill") {
          var col = document.createElement("div");
          col.setAttribute("class", "col-xs-6 col-xl-4");

          var div = document.createElement("div");
          div.setAttribute("class", "m-total-block-toggle js-total-block-toggle");

          var input = document.createElement("input");
          input.setAttribute("id", i.replace(/_+/g, "-"));
          input.setAttribute("class", "m-total-block-toggle-check");
          input.setAttribute("data-path", path + "." + i);
          input.setAttribute("data-bonus-type", i.replace(/_+/g, "-"));
          input.setAttribute("type", "checkbox");
          input.setAttribute("tabindex", "3");
          input.checked = data[i];

          var label = document.createElement("label");
          label.setAttribute("for", i.replace(/_+/g, "-"));
          label.setAttribute("class", "u-full-width");
          label.textContent = _bonusTextLable(i);

          div.appendChild(input);
          div.appendChild(label);
          col.appendChild(div);
          row.appendChild(col);

          _bind_bonusTypeChecks(input, totalBlock);
        };

      };
    };

    container.appendChild(row);
    modal.render(heading, container, "Done");

  };

  function _bind_bonusTypeChecks(element, totalBlock) {
    element.addEventListener("change", function() {
      _addRemoveBonus(this, totalBlock);
      _store(this, totalBlock);
      update();
    }, false);
  };

  function _bind_classSkillToggle(element) {
    var totalBlock = helper.getClosest(element, ".js-total-block");
    element.addEventListener("change", function() {
      _addRemoveBonus(this, totalBlock);
      _store(this, totalBlock);
      update();
    }, false);
  };

  function _bind_bonusButtons(element) {
    if (element.nodeName.toLowerCase() == "a") {
      element.addEventListener("click", function() {
        _totalBlockModalContent(this);
      }, false);
    };
  };

  function bind() {
    var all_totalBlockBonuses = helper.eA(".js-total-block-bonuses");
    var all_totalBlockToggleCheck = helper.eA(".js-total-block-toggle-check");
    for (var i = 0; i < all_totalBlockBonuses.length; i++) {
      _bind_bonusButtons(all_totalBlockBonuses[i]);
    };
    for (var i = 0; i < all_totalBlockToggleCheck.length; i++) {
      _bind_classSkillToggle(all_totalBlockToggleCheck[i]);
    };
  };

  function _addRemoveBonus(input, totalBlock) {
    var totalBlock = helper.getClosest(input, ".js-total-block") || totalBlock;
    var bonusType = input.dataset.bonusType;
    if (input.checked) {
      if (bonusType == "str-bonus") {
        totalBlock.dataset.strBonus = "true";
      };
      if (bonusType == "dex-bonus") {
        totalBlock.dataset.dexBonus = "true";
      };
      if (bonusType == "con-bonus") {
        totalBlock.dataset.conBonus = "true";
      };
      if (bonusType == "int-bonus") {
        totalBlock.dataset.intBonus = "true";
      };
      if (bonusType == "wis-bonus") {
        totalBlock.dataset.wisBonus = "true";
      };
      if (bonusType == "cha-bonus") {
        totalBlock.dataset.chaBonus = "true";
      };
      if (bonusType == "bab") {
        totalBlock.dataset.babBonus = "true";
      };
      if (bonusType == "size") {
        totalBlock.dataset.sizeBonus = "true";
      };
      if (bonusType == "special-size") {
        totalBlock.dataset.specialSizeBonus = "true";
      };
      if (bonusType == "level") {
        totalBlock.dataset.levelBonus = "true";
      };
      if (bonusType == "half-level") {
        totalBlock.dataset.halfLevelBonus = "true";
      };
      if (bonusType == "plus-ten") {
        totalBlock.dataset.plusTenBonus = "true";
      };
      if (bonusType == "ac-armor") {
        totalBlock.dataset.acArmor = "true";
      };
      if (bonusType == "ac-shield") {
        totalBlock.dataset.acShield = "true";
      };
      if (bonusType == "ac-deflect") {
        totalBlock.dataset.acDeflect = "true";
      };
      if (bonusType == "ac-dodge") {
        totalBlock.dataset.acDodge = "true";
      };
      if (bonusType == "ac-natural") {
        totalBlock.dataset.acNatural = "true";
      };
      if (bonusType == "class-skill") {
        totalBlock.dataset.classSkill = "true";
      };
    } else {
      if (bonusType == "str-bonus") {
        totalBlock.dataset.strBonus = "false";
      };
      if (bonusType == "dex-bonus") {
        totalBlock.dataset.dexBonus = "false";
      };
      if (bonusType == "con-bonus") {
        totalBlock.dataset.conBonus = "false";
      };
      if (bonusType == "int-bonus") {
        totalBlock.dataset.intBonus = "false";
      };
      if (bonusType == "wis-bonus") {
        totalBlock.dataset.wisBonus = "false";
      };
      if (bonusType == "cha-bonus") {
        totalBlock.dataset.chaBonus = "false";
      };
      if (bonusType == "bab") {
        totalBlock.dataset.babBonus = "false";
      };
      if (bonusType == "size") {
        totalBlock.dataset.sizeBonus = "false";
      };
      if (bonusType == "special-size") {
        totalBlock.dataset.specialSizeBonus = "false";
      };
      if (bonusType == "level") {
        totalBlock.dataset.levelBonus = "false";
      };
      if (bonusType == "half-level") {
        totalBlock.dataset.halfLevelBonus = "false";
      };
      if (bonusType == "plus-ten") {
        totalBlock.dataset.plusTenBonus = "false";
      };
      if (bonusType == "ac-armor") {
        totalBlock.dataset.acArmor = "false";
      };
      if (bonusType == "ac-shield") {
        totalBlock.dataset.acShield = "false";
      };
      if (bonusType == "ac-deflect") {
        totalBlock.dataset.acDeflect = "false";
      };
      if (bonusType == "ac-dodge") {
        totalBlock.dataset.acDodge = "false";
      };
      if (bonusType == "ac-natural") {
        totalBlock.dataset.acNatural = "false";
      };
      if (bonusType == "class-skill") {
        totalBlock.dataset.classSkill = "false";
      };
    };
  };


  function clear() {
    var all_totalBlock = helper.eA(".js-total-block");
    for (var i = 0; i < all_totalBlock.length; i++) {
      delete all_totalBlock[i].dataset.strBonus;
      delete all_totalBlock[i].dataset.dexBonus;
      delete all_totalBlock[i].dataset.conBonus;
      delete all_totalBlock[i].dataset.intBonus;
      delete all_totalBlock[i].dataset.wisBonus;
      delete all_totalBlock[i].dataset.chaBonus;
      delete all_totalBlock[i].dataset.babBonus;
      delete all_totalBlock[i].dataset.sizeBonus;
      delete all_totalBlock[i].dataset.specialSizeBonus;
      delete all_totalBlock[i].dataset.levelBonus;
      delete all_totalBlock[i].dataset.halfLevelBonus;
      delete all_totalBlock[i].dataset.plusTenBonus;
      delete all_totalBlock[i].dataset.acArmor;
      delete all_totalBlock[i].dataset.acShield;
      delete all_totalBlock[i].dataset.acDeflect;
      delete all_totalBlock[i].dataset.acDodge;
      delete all_totalBlock[i].dataset.acNatural;
      delete all_totalBlock[i].dataset.classSkill;
    };
  };

  // exposed methods
  return {
    clear: clear,
    bind: bind,
    update: update,
    render: render
  };

})();

var display = (function() {

  function bind() {
    var fabButton = helper.e(".js-fab-button");
    fabButton.addEventListener("click", toggle, false);
  };

  function toggle() {
    var fabIcon = helper.e(".js-fab-icon");
    var modeWrapperEdit = helper.e(".m-mode-wrapper-edit");
    var modeWrapperEdit = helper.e(".m-mode-wrapper-edit");
    var modeWrapperDisplay = helper.e(".m-mode-wrapper-display");
    var quickNavLink = helper.e(".js-quick-nav");
    var hamburger = helper.e(".js-hamburger");
    var all_quickNavLink = helper.eA(".js-quick-nav-link");
    for (var i = 0; i < all_quickNavLink.length; i++) {
      helper.toggleClass(all_quickNavLink[i], "is-invisible");
    };
    helper.toggleClass(modeWrapperEdit, "is-hidden");
    helper.toggleClass(modeWrapperDisplay, "is-hidden");
    helper.toggleClass(quickNavLink, "m-quick-nav-display");
    helper.toggleClass(hamburger, "m-hamburger-dark");
    helper.toggleClass(fabIcon, "icon-edit");
    helper.toggleClass(fabIcon, "icon-reader-mode");
    totalBlock.update();
    display.clear();
    display.render();
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

(function() {

  nav.bind();
  nav.render();
  sheet.bind();
  sheet.render();

})();
