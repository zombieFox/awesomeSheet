var izlara = (function() {

  var data = {
    awesomeSheet: true,
    basics: {
      name: "Izlara Datrel",
      race: "Elf",
      level: 12,
      classes: [{
        classname: "Wizard",
        level: 12,
        hp: 62,
        fortitude: 4,
        reflex: 4,
        will: 8,
        ranks: 24,
        bab: 6
      }],
      size: {
        category: "Medium",
        size_modifier: 0,
        special_size_modifier: 0,
        size_modifier_fly: 0,
        size_modifier_stealth: 0
      },
      alignment: "Neutral Good",
      deity: "",
      xp: "220,000",
      height: "5.5ft",
      weight: "95lbs",
      age: "118",
      gender: "Female",
      speed: "30",
      hero_points: "1",
      luck_points: "3",
      initiative: {
        misc: 2,
        temp: "",
        feat: 4,
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: true
        }
      }
    },
    statistics: {
      stats: {
        str: {
          score: 12,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        },
        dex: {
          score: 16,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        },
        con: {
          score: 14,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        },
        int: {
          score: 28,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        },
        wis: {
          score: 16,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        },
        cha: {
          score: 16,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        }
      },
      feats: "Improved Initiative, Combat Casting, Craft Wondrous Item, Spell Focus (Conjuration), Extend Spell, Quicken Spell, Spell Penetration, Eschew materials",
      traits: "Reactionary, Magical Lineage (Overland Flight)",
      languages: "Abyssal, Aklo, Aquan, Auran, Celestial, Common, Druidic, Dwarven, Elven, Giant, Goblin, Gnoll, Halfling, Ignan, Infernal, Orc, Sylvan, Terran, Undercommon",
      special_abilities: "Low-Light Vision, Elven Immunities, Elven Magic, Keen Senses, Weapon Familiarity, Arcane bond (Rat), Arcane School (Divination [Foresight]), Opposition Arcane School: Enchantment, Necromancy, Cantrips, Scribe scroll, Forewarned, Prescience, Foretell"
    },
    equipment: {
      gear: "Spellbook, Scroll case, Spell component pouch, Candle, Flint and steel, Tindertwig, Ink, pen and paper, Belt Pouch, Backpack, Rations (5 days), Spyglass",
      magic_gear: "Handy Haversack, Ioun Stones (Scarlet and Blue), lesser, Pearl of Power (1st) (1), Pearl of Power (2nd) (1), Pearl of Power (3rd) (1), Pearl of Power (4th) (1), Pearl of Power (5th) (1)<br><br>Viles:<br>Antitoxin (2), Holy Water (1)<br><br>Potion:<br>Cure Light Wounds (4), Cure Moderate Wounds (2), Cure Serious Wounds (2), Protection from Evil (2), Displacement (2), Hide from Animals (1), Delay Poison (1), Bear's Endurance (1), Levitate (1)<br><br>Scroll:<br>Create Pit (3), Spiked Pit (3), Hungry Pit (3), Acid Pit (3), Summon Monster III (3), Summon Monster IV (3), Summon Monster V (3), Summon Monster VI (2), Form of the Dragon I (2), Invisibility (5), Web (3), Stinking Cloud (2), Grease (2), Mirror Image (3), Fly (3), Interposing Hand (1), Elemental Body 2 (2), Wall of Fire (2), Haste (2), Enlarge Person (2), Endure Elements (2), Acid Arrow (2), Gust of Wind (1), Animate Rope (2), False Life (2), Floating Disk (1), Erase (1), Detect Secret Doors (2), Black Tentacles (2), Mage Armor (2)",
      item: [{
        name: "Flask of Oil",
        quantity: 4,
        weight: 4
      }, {
        name: "Sack",
        quantity: 1,
        weight: 0.5
      }, {
        name: "Waterskin",
        quantity: 1,
        weight: 4
      }, {
        name: "Bedroll and Blanket",
        quantity: 1,
        weight: 8
      }, {
        name: "Bloodblock",
        quantity: 2,
        weight: 2
      }, {
        name: "Healer's Kit",
        quantity: 2,
        weight: 2
      }, {
        name: "Silk Rope (50ft)",
        quantity: 1,
        weight: 5
      }, {
        name: "Mirror",
        quantity: 1,
        weight: 1
      }, {
        name: "Compass",
        quantity: 1,
        weight: 0.5
      }],
      encumbrance: {
        light: "33 lbs or less",
        medium: "34–66 lbs",
        heavy: "67–100 lbs"
      },
      armor: {
        armor: "",
        check_penalty: "",
        max_dex: "",
        shield: ""
      },
      body_slots: {
        belts: "Belt of Physical Perfection +2",
        body: "",
        chest: "",
        eyes: "Eyes of the Eagle",
        feet: "Boots of Teleportation",
        hands: "",
        head: "",
        headband: "Headband of Mental Superiority +4",
        neck: "Amulet of Natural Armor +2",
        ring_left_hand: "Ring of Sustenance",
        ring_right_hand: "Ring of Feather Falling",
        shoulders: "Cloak of Resistance +3",
        wrist: ""
      },
      wealth: {
        platinum: "45",
        gold: "8,405",
        silver: "102",
        copper: ""
      },
      consumable: [{
        item: "Boots of Teleportation",
        current: "",
        total: 3,
        used: 1
      }, {
        item: "Wand of Lightning Bolt",
        current: "",
        total: 50,
        used: 2
      }, {
        item: "Wand of Spider Climb",
        current: "",
        total: 50,
        used: 19
      }, {
        item: "Rod of Metamagic Extend Lesser",
        current: "",
        total: 3,
        used: 1
      }, {
        item: "Rod of Metamagic Silent Lesser",
        current: "",
        total: 3,
        used: ""
      }, {
        item: "Rod of Metamagic Quicken Lesser",
        current: "",
        total: 3,
        used: ""
      }]
    },
    defense: {
      hp: {
        total: 86,
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
        natural: 2,
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
          size: true,
          max_dex: true
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
          size: true,
          max_dex: true
        }
      },
      ac_notes: "",
      fortitude: {
        base: 4,
        resistance: 3,
        feat: "",
        trait: "",
        misc: 2,
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: true,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false
        }
      },
      reflex: {
        base: 4,
        resistance: 3,
        feat: "",
        trait: "",
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
          level: false,
          half_level: false
        }
      },
      will: {
        base: 8,
        resistance: 3,
        feat: "",
        trait: "",
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: true,
          cha_bonus: false,
          level: false,
          half_level: false
        }
      },
      save_notes: "Immune to magic sleep effects. +2 saving throw against enchantment spells and effects."
    },
    offense: {
      base_attack: 6,
      base_attack_bonuses: "+6 / +1",
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
          special_size: true,
          level: false,
          half_level: false
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
          special_size: true,
          level: false,
          half_level: false,
          plus_ten: true
        }
      },
      melee_attack: {
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
          size: true,
          level: false,
          half_level: false
        }
      },
      ranged_attack: {
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
          bab: true,
          size: true,
          level: false,
          half_level: false
        }
      },
      attack: {
        melee: [{
          weapon: "Dagger +1",
          attack: "+7",
          damage: "1d4+1",
          critical: "19–20/x2"
        }],
        ranged: [{
          weapon: "Shortbow +1",
          attack: "+9",
          damage: "1d6",
          critical: "x3",
          range: "60ft",
          ammo: "30 normal, 5 silver"
        }]
      },
      attack_notes: ""
    },
    skills: {
      ranks: {
        total: 132,
        spent: {
          include_custom: false,
          current: ""
        }
      },
      custom: [{
        name: "Spellcraft (Identify magic items)",
        ranks: 12,
        misc: 2,
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: true,
          wis_bonus: false,
          cha_bonus: false,
          class_skill: true,
          level: false,
          half_level: false,
          check_penalty: false
        },
        current: ""
      }],
      acrobatics: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          class_skill: false,
          level: false,
          half_level: false,
          check_penalty: true
        }
      },
      appraise: {
        ranks: 8,
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: true,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      bluff: {
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
          cha_bonus: true,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      climb: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: true,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: true
        }
      },
      craft_1: {
        variant_name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: true,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      craft_2: {
        variant_name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: true,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      diplomacy: {
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
          cha_bonus: true,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      disable_device: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: true
        }
      },
      disguise: {
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
          cha_bonus: true,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      escape_artist: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: true
        }
      },
      fly: {
        ranks: 8,
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
          half_level: false,
          check_penalty: true,
          size_modifier_fly: true
        }
      },
      handle_animal: {
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
          cha_bonus: true,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      heal: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: true,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      intimidate: {
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
          cha_bonus: true,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      knowledge_arcana: {
        ranks: 8,
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: true,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      knowledge_dungeoneering: {
        ranks: 8,
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: true,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      knowledge_engineering: {
        ranks: 8,
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: true,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      knowledge_geography: {
        ranks: 8,
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: true,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      knowledge_history: {
        ranks: 8,
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: true,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      knowledge_local: {
        ranks: 8,
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: true,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      knowledge_nature: {
        ranks: 8,
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: true,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      knowledge_nobility: {
        ranks: 8,
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: true,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      knowledge_planes: {
        ranks: 8,
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: true,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      knowledge_religion: {
        ranks: 8,
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: true,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      linguistics: {
        ranks: 12,
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: true,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      perception: {
        ranks: 12,
        misc: 5,
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: true,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      perform_1: {
        variant_name: "",
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
          cha_bonus: true,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      perform_2: {
        variant_name: "",
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
          cha_bonus: true,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      profession_1: {
        variant_name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: true,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      profession_2: {
        variant_name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: true,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      ride: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: true
        }
      },
      sense_motive: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: true,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      sleight_of_hand: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: true
        }
      },
      spellcraft: {
        ranks: 12,
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: true,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      stealth: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: true,
          size_modifier_stealth: true
        }
      },
      survival: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: true,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      swim: {
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: true,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: true
        }
      },
      use_magic_device: {
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
          cha_bonus: true,
          level: false,
          half_level: false,
          check_penalty: false
        }
      }
    },
    spells: {
      concentration: {
        current: "",
        misc: "",
        temp: "",
        feat: 4,
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: true,
          wis_bonus: false,
          cha_bonus: false,
          level: true,
          half_level: false
        }
      },
      caster_level_check: {
        current: "",
        misc: "",
        temp: "",
        feat: 2,
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
      },
      spell_notes: "",
      per_day: {
        level_0: 4,
        level_1: 7,
        level_2: 6,
        level_3: 6,
        level_4: 5,
        level_5: 5,
        level_6: 3,
        level_7: "",
        level_8: "",
        level_9: ""
      },
      dc: {
        level_0: 19,
        level_1: 20,
        level_2: 21,
        level_3: 22,
        level_4: 23,
        level_5: 24,
        level_6: 25,
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
        level_0: [{
          name: "Acid Splash",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Arcane Mark",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Dancing Lights",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Detect Magic",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Detect Poison",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Flare",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Ghost Sound",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Haunted Fey Aspect",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Light",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Mage Hand",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Mending",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Message",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Open/Close",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Prestidigitation",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Ray of Frost",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Read Magic",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Resistance",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Spark",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }]
      }, {
        level_1: [{
          name: "Protection From Chaos",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Protection From Evil",
          prepared: 2,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Protection From Good",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Protection From Law",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Hold Portal",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Grease",
          prepared: 2,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Mage Armor",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Mount",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Obscuring Mist",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Summon Monster I",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Unseen Servant",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Comprehend Languages",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Detect Secret Doors",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Detect Undead",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Color Spray",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Silent Image",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Enlarge Person",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Feather Fall",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }]
      }, {
        level_2: [{
          name: "Resist Energy",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Glitterdust",
          prepared: 2,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Summon Monster II",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Web",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Detect Thoughts",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "See Invisibility",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Flaming Sphere",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Invisibility",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Minor Image",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Mirror Image",
          prepared: 2,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Levitate",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Darkvision",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Make Whole",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Pyrotechnics",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Rope Trick",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Create Pit",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }]
      }, {
        level_3: [{
          name: "Dispel Magic",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Magic Circle Against Chaos",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Magic Circle Against Evil",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Magic Circle Against Good",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Magic Circle Against Law",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Phantom Steed",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Sleet Storm",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Stinking Cloud",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Summon Monster III",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Tiny Hut",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Wind Wall",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Fireball",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Fly",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Haste",
          prepared: 2,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Magic Weapon Greater",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Shrink Item",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Slow",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Spiked Pit",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }]
      }, {
        level_4: [{
          name: "Dimensional Anchor",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Black Tentacles",
          prepared: 2,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Dimension Door",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Summon Monster IV",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Arcane Eye",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Confusion",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Resilient Sphere",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Wall of Fire",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Wall of Ice",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Enervation",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Stone Shape",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Acid Pit",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }]
      }, {
        level_5: [{
          name: "Mages Private Sanctum",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Planar Binding Lesser",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Secret Chest",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Summon Monster V",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Teleport",
          prepared: 2,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Wall of Stone",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Contact Other Plane",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Prying Eyes",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Telepathic Bond",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Wall of Force",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Persistent Image",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Sending",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Animal Growth",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Beast Shape III",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Overland Flight",
          prepared: 1,
          active: true,
          cast: 1,
          note: ""
        }, {
          name: "Polymorph",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Telekinesis",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Transmute Rock to Mud",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Permanency",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Hungry Pit",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }]
      }, {
        level_6: [{
          name: "Planar Binding",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Summon Monster VI",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Antimagic Field",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Dispel Magic Greater",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Contingency",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Forceful Hand",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Programmed Image",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Form of the Dragon I",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }]
      }, {
        level_7: []
      }, {
        level_8: []
      }, {
        level_9: []
      }]
    },
    notes: {
      character: [{
        note: "Wizard familiar: Dako. Rat, white hair, tiny."
      }],
      story: []
    }
  };

  // exposed methods
  return {
    data: data
  };

})();
