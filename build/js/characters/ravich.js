var ravich = (function() {

  var data = {
    awesomeSheet: true,
    basics: {
      name: "Ravich Swiftcloak",
      race: "Human",
      level: 6,
      classes: [{
        classname: "Rogue",
        level: 3,
        hp: 24,
        fortitude: 1,
        reflex: 3,
        will: 1,
        ranks: 27,
        bab: 2
      }, {
        classname: "Fighter",
        level: 3,
        hp: 21,
        fortitude: 3,
        reflex: 1,
        will: 1,
        ranks: 9,
        bab: 3
      }],
      size: {
        category: "Medium",
        size_modifier: 4,
        special_size_modifier: -4,
        size_modifier_fly: 6,
        size_modifier_stealth: 12
      },
      alignment: "Chaotic Neutral",
      deity: "",
      height: "6ft",
      weight: "134lbs",
      age: "24",
      gender: "Male",
      speed: {
        land: "30ft",
        fly: "",
        maneuverability: "",
        swim: "",
        climb: "",
        burrow: ""
      },
      hero_points: "1",
      character_description: "A sneaky man with a realistic outlook on life. Tall, slim build, sallow dark-brown skin, long face, sunken cheeks, light blue, wide-set eyes, bushy eyebrows.",
      initiative: {
        misc: "",
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
          half_level: false
        }
      },
      xp: {
        total: 23000,
        advancement_speed: "Medium",
        next_level: "",
        needed: ""
      }
    },
    statistics: {
      stats: {
        str: {
          score: 18,
          modifier: 4,
          temp_score: "",
          temp_modifier: ""
        },
        dex: {
          score: 20,
          modifier: 5,
          temp_score: "",
          temp_modifier: ""
        },
        con: {
          score: 13,
          modifier: 1,
          temp_score: "",
          temp_modifier: ""
        },
        int: {
          score: 13,
          modifier: 1,
          temp_score: "",
          temp_modifier: ""
        },
        wis: {
          score: 12,
          modifier: 1,
          temp_score: "",
          temp_modifier: ""
        },
        cha: {
          score: 10,
          modifier: 0,
          temp_score: "",
          temp_modifier: ""
        }
      },
      feats: "Weapon Finesse, Weapon Focus (Rapier), Improved Initiative, Deft Hands, Acrobatic, Toughness, Two-Weapon Fighting, Magical Aptitude, Great Fortitude",
      traits: "Resilient, Dirty Fighter",
      languages: "Common, Humans, Dwarven, Undercommon",
      special_abilities: "Sneak Attack +2d6, Trapfinding, Evasion, Rogue Talent (Finesse Rogue), Trap Sense +1, Bonus Feat (2), Bravery +1, Armor Training 1"
    },
    equipment: {
      gear: "Backpack, Flask Of Oil (2), Pouch (belt), Sack, Candle, Flint And Steel, Tindertwig, Rations (5 Days), Waterskin, Bedroll, Blanket, Bloodblock, Rope (silk), Mirror, Compass, Ink, Inkpen, Paper Sheets, Case For Maps/scrolls, Torch, Dagger, Combat Horse (Tafi), Roc feathers, head and feet, Red Dragon (Adult) scales and claws",
      magic_gear: "Ioun Stone (Dusty Rose), Feather Token (Tree)<br><br>Potion:<br>Cure Light Wounds (4), Cure Moderate Wounds (5), Cure Serious Wounds (1), Resist Fire (1), Alchemist Fire (1), Lesser Restoration (1), Remove Disease (1)",
      item: [{
        name: "Flask of Oil",
        quantity: 2,
        weight: 2
      }, {
        name: "Waterskin",
        quantity: 1,
        weight: 4
      }, {
        name: "Bedroll & Blanket",
        quantity: 1,
        weight: 8
      }, {
        name: "Rope (silk)",
        quantity: 1,
        weight: 5
      }, {
        name: "Mirror",
        quantity: 1,
        weight: 0.5
      }, {
        name: "Compass",
        quantity: 1,
        weight: 1
      }],
      encumbrance: {
        encumbrance_str: "",
        carry_move: {
          light: "",
          medium: "",
          heavy: "",
          lift: "",
          drag: ""
        }
      },
      armor: {
        armor: "Mithral Chain Shirt +1",
        check_penalty: 0,
        max_dex: 6,
        shield: "Mithral Buckler +1"
      },
      body_slots: {
        belts: "Belt of Physical Might +2 (Str, Dex)",
        body: "",
        chest: "",
        eyes: "",
        feet: "Boots of Striding and Springing",
        hands: "",
        head: "",
        headband: "",
        neck: "Amulet of Natural Armor +1",
        ring_left_hand: "Ring of Protection +1",
        ring_right_hand: "",
        shoulders: "Cloak of Resistance +1",
        wrist: ""
      },
      wealth: {
        platinum: 120,
        gold: 26302,
        silver: 50,
        copper: "",
        total: ""
      },
      consumable: [{
        item: "Wand of Cure Light Wounds",
        current: "",
        total: 50,
        used: 32
      }, {
        item: "Wand of Invisibility",
        current: "",
        total: 50,
        used: 12
      }]
    },
    defense: {
      hp: {
        total: "",
        temp: "",
        damage: 5,
        non_lethal_damage: "",
        current: ""
      },
      ac: {
        misc: 1,
        temp: "",
        armor: 5,
        shield: 1,
        deflect: 1,
        dodge: "",
        natural: 1,
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
        misc: 1,
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
        misc: 1,
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
      ac_notes: "+1 dodge bonus to AC against attacks made by traps. +1 damage when flanking.",
      fortitude: {
        base: "",
        resistance: 1,
        feat: 2,
        trait: 1,
        misc: "",
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
        base: "",
        resistance: 1,
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
        base: "",
        resistance: 1,
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
      save_notes: "+1 bonus on Reflex saves made to avoid traps.",
      dr: {
        feat: "",
        trait: "",
        misc: "",
        temp: "",
        current: "",
        overcome: "",
        bonuses: {
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
      sr: {
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
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false
        }
      },
      resist_notes: ""
    },
    offense: {
      base_attack: "",
      base_attack_bonuses: "",
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
          weapon: "Rapier +1 Flaming",
          attack: "+11",
          damage: "1d6+4, 1d6 fire",
          critical: "18–20/x2"
        }, {
          weapon: "Short Sword +1",
          attack: "+10",
          damage: "1d6+4",
          critical: "19–20/x2"
        }, {
          weapon: "Rapier +1 Flaming, Short Sword +1",
          attack: "+9/+8",
          damage: "1d6+4, 1d6 fire/1d6+4",
          critical: "18–20/x2, 19–20/x2"
        }],
        ranged: [{
          weapon: "Shortbow +1",
          attack: "+15",
          damage: "1d6",
          critical: "x3",
          range: "60ft",
          ammo: "30 nornal"
        }]
      },
      attack_notes: "Sneak Attack +2d6"
    },
    skills: {
      ranks: {
        total: "",
        spent: {
          include_custom: false,
          current: ""
        }
      },
      custom: [{
        name: "Perception (Traps)",
        ranks: 6,
        misc: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: true,
          cha_bonus: false,
          class_skill: true,
          level: false,
          half_level: true,
          check_penalty: false
        },
        current: ""
      }, {
        name: "Disable Device (Traps)",
        ranks: 6,
        misc: 2,
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          class_skill: true,
          level: false,
          half_level: true,
          check_penalty: false
        },
        current: ""
      }, {
        name: "Acrobatics (Jump)",
        ranks: 6,
        misc: 5,
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
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
        ranks: 6,
        misc: 2,
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          class_skill: true,
          level: false,
          half_level: false,
          check_penalty: true
        }
      },
      appraise: {
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
        ranks: 1,
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
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
        ranks: 6,
        misc: 2,
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
        ranks: 6,
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
          check_penalty: true
        }
      },
      fly: {
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
      knowledge_dungeoneering: {
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
      knowledge_engineering: {
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
      knowledge_geography: {
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
      knowledge_history: {
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
      knowledge_local: {
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
      knowledge_nature: {
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
      knowledge_nobility: {
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
      knowledge_planes: {
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
      knowledge_religion: {
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
      linguistics: {
        ranks: 1,
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
        ranks: 6,
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
        ranks: 4,
        misc: 2,
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
          check_penalty: true
        }
      },
      spellcraft: {
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
      stealth: {
        ranks: 6,
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
        ranks: 6,
        misc: 2,
        current: "",
        bonuses: {
          class_skill: true,
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
        feat: "",
        bonuses: {
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
      caster_level_check: {
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
          level: false,
          half_level: false
        }
      },
      spell_notes: "",
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
      character: [],
      story: []
    },
    events: [{
      type: "platinum",
      event: {
        aggregateValue: 90
      },
      timestamp: {
        date: 13,
        day: 4,
        year: 2017,
        hours: 14,
        milliseconds: 700,
        minutes: 16,
        month: 6,
        seconds: 32
      }
    }, {
      type: "gold",
      event: {
        aggregateValue: 7655
      },
      timestamp: {
        date: 13,
        day: 4,
        year: 2017,
        hours: 14,
        milliseconds: 671,
        minutes: 16,
        month: 6,
        seconds: 19
      }
    }, {
      type: "xp",
      event: {
        aggregateValue: 1210
      },
      timestamp: {
        date: 13,
        day: 4,
        year: 2017,
        hours: 14,
        milliseconds: 937,
        minutes: 16,
        month: 6,
        seconds: 12
      }
    }, {
      type: "gold",
      event: {
        aggregateValue: 5600
      },
      timestamp: {
        date: 5,
        day: 3,
        year: 2017,
        hours: 18,
        milliseconds: 590,
        minutes: 40,
        month: 6,
        seconds: 42
      }
    }, {
      type: "gold",
      event: {
        aggregateValue: 8700
      },
      timestamp: {
        date: 28,
        day: 3,
        year: 2017,
        hours: 23,
        milliseconds: 951,
        minutes: 25,
        month: 5,
        seconds: 59
      }
    }, {
      type: "xp",
      event: {
        aggregateValue: 3000
      },
      timestamp: {
        date: 28,
        day: 3,
        year: 2017,
        hours: 21,
        milliseconds: 738,
        minutes: 1,
        month: 5,
        seconds: 41
      }
    }, {
      type: "gold",
      event: {
        aggregateValue: -5000
      },
      timestamp: {
        date: 21,
        day: 3,
        year: 2017,
        hours: 6,
        milliseconds: 633,
        minutes: 31,
        month: 5,
        seconds: 54
      }
    }, {
      type: "gold",
      event: {
        aggregateValue: 90
      },
      timestamp: {
        date: 21,
        day: 3,
        year: 2017,
        hours: 5,
        milliseconds: 199,
        minutes: 26,
        month: 5,
        seconds: 46
      }
    }, {
      type: "xp",
      event: {
        aggregateValue: 3600
      },
      timestamp: {
        date: 21,
        day: 3,
        year: 2017,
        hours: 5,
        milliseconds: 134,
        minutes: 26,
        month: 5,
        seconds: 31
      }
    }, {
      type: "silver",
      event: {
        aggregateValue: 50
      },
      timestamp: {
        date: 14,
        day: 3,
        year: 2017,
        hours: 7,
        milliseconds: 87,
        minutes: 40,
        month: 5,
        seconds: 45
      }
    }, {
      type: "gold",
      event: {
        aggregateValue: -3700
      },
      timestamp: {
        date: 14,
        day: 3,
        year: 2017,
        hours: 7,
        milliseconds: 748,
        minutes: 40,
        month: 5,
        seconds: 40
      }
    }, {
      type: "xp",
      event: {
        aggregateValue: 5440
      },
      timestamp: {
        date: 14,
        day: 3,
        year: 2017,
        hours: 18,
        milliseconds: 921,
        minutes: 20,
        month: 5,
        seconds: 28
      }
    }, {
      type: "gold",
      event: {
        aggregateValue: 4430
      },
      timestamp: {
        date: 14,
        day: 3,
        year: 2017,
        hours: 18,
        milliseconds: 923,
        minutes: 20,
        month: 5,
        seconds: 16
      }
    }, {
      type: "platinum",
      event: {
        aggregateValue: 20
      },
      timestamp: {
        date: 14,
        day: 3,
        year: 2017,
        hours: 18,
        milliseconds: 426,
        minutes: 20,
        month: 5,
        seconds: 11
      }
    }, {
      type: "gold",
      event: {
        aggregateValue: -3500
      },
      timestamp: {
        date: 31,
        day: 3,
        year: 2017,
        hours: 18,
        milliseconds: 802,
        minutes: 53,
        month: 4,
        seconds: 23
      }
    }, {
      type: "xp",
      event: {
        aggregateValue: 3400
      },
      timestamp: {
        date: 31,
        day: 3,
        year: 2017,
        hours: 18,
        milliseconds: 14,
        minutes: 49,
        month: 4,
        seconds: 24
      }
    }, {
      type: "gold",
      event: {
        aggregateValue: 5327
      },
      timestamp: {
        date: 31,
        day: 3,
        year: 2017,
        hours: 18,
        milliseconds: 604,
        minutes: 49,
        month: 4,
        seconds: 3
      }
    }, {
      type: "gold",
      event: {
        aggregateValue: -400
      },
      timestamp: {
        date: 24,
        day: 3,
        year: 2017,
        hours: 16,
        milliseconds: 193,
        minutes: 9,
        month: 4,
        seconds: 2
      }
    }, {
      type: "gold",
      event: {
        aggregateValue: -1000
      },
      timestamp: {
        date: 24,
        day: 3,
        year: 2017,
        hours: 16,
        milliseconds: 450,
        minutes: 8,
        month: 4,
        seconds: 58
      }
    }, {
      type: "gold",
      event: {
        aggregateValue: 4500
      },
      timestamp: {
        date: 24,
        day: 3,
        year: 2017,
        hours: 15,
        milliseconds: 939,
        minutes: 59,
        month: 4,
        seconds: 48
      }
    }, {
      type: "platinum",
      event: {
        aggregateValue: 10
      },
      timestamp: {
        date: 24,
        day: 3,
        year: 2017,
        hours: 15,
        milliseconds: 521,
        minutes: 59,
        month: 4,
        seconds: 41
      }
    }, {
      type: "xp",
      event: {
        aggregateValue: 3000
      },
      timestamp: {
        date: 24,
        day: 3,
        year: 2017,
        hours: 15,
        milliseconds: 769,
        minutes: 42,
        month: 4,
        seconds: 30
      }
    }, {
      type: "gold",
      event: {
        aggregateValue: -50
      },
      timestamp: {
        date: 17,
        day: 3,
        year: 2017,
        hours: 18,
        milliseconds: 476,
        minutes: 23,
        month: 4,
        seconds: 58
      }
    }, {
      type: "gold",
      event: {
        aggregateValue: -400
      },
      timestamp: {
        date: 17,
        day: 3,
        year: 2017,
        hours: 18,
        milliseconds: 829,
        minutes: 23,
        month: 4,
        seconds: 54
      }
    }, {
      type: "gold",
      event: {
        aggregateValue: -1000
      },
      timestamp: {
        date: 17,
        day: 3,
        year: 2017,
        hours: 18,
        milliseconds: 363,
        minutes: 23,
        month: 4,
        seconds: 53
      }
    }, {
      type: "gold",
      event: {
        aggregateValue: 3000
      },
      timestamp: {
        date: 17,
        day: 3,
        year: 2017,
        hours: 18,
        milliseconds: 532,
        minutes: 4,
        month: 4,
        seconds: 40
      }
    }, {
      type: "xp",
      event: {
        aggregateValue: 2000
      },
      timestamp: {
        date: 17,
        day: 3,
        year: 2017,
        hours: 17,
        milliseconds: 668,
        minutes: 55,
        month: 4,
        seconds: 31
      }
    }, {
      type: "gold",
      event: {
        aggregateValue: -400
      },
      timestamp: {
        date: 10,
        day: 3,
        year: 2017,
        hours: 15,
        milliseconds: 516,
        minutes: 42,
        month: 4,
        seconds: 38
      }
    }, {
      type: "xp",
      event: {
        aggregateValue: 1050
      },
      timestamp: {
        date: 10,
        day: 3,
        year: 2017,
        hours: 15,
        milliseconds: 941,
        minutes: 40,
        month: 4,
        seconds: 27
      }
    }, {
      type: "gold",
      event: {
        aggregateValue: 2000
      },
      timestamp: {
        date: 10,
        day: 3,
        year: 2017,
        hours: 15,
        milliseconds: 112,
        minutes: 33,
        month: 4,
        seconds: 18
      }
    }, {
      type: "gold",
      event: {
        aggregateValue: 450
      },
      timestamp: {
        date: 3,
        day: 3,
        year: 2017,
        hours: 18,
        milliseconds: 83,
        minutes: 40,
        month: 4,
        seconds: 4
      }
    }, {
      type: "xp",
      event: {
        aggregateValue: 300
      },
      timestamp: {
        date: 3,
        day: 3,
        year: 2017,
        hours: 18,
        milliseconds: 545,
        minutes: 50,
        month: 4,
        seconds: 52
      }
    }]
  };

  // exposed methods
  return {
    data: data
  };

})();
