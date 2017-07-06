var nefi = (function() {

  var data = {
    awesomeSheet: true,
    basics: {
      name: "Nefi Fefi",
      race: "Human",
      class: "Fighter",
      level: "11",
      size: "Medium",
      alignment: "Neutral",
      xp: "155,000",
      height: "6'2",
      weight: "202 lbs",
      age: "28",
      gender: "Male",
      speed: "30ft",
      hero_points: "1",
      luck_points: "",
      initiative: {
        misc: "2",
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
      }
    },
    statistics: {
      stats: {
        str: {
          score: 21,
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
          score: 12,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        },
        int: {
          score: 13,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        },
        wis: {
          score: 12,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        },
        cha: {
          score: 10,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        }
      },
      feats: "Weapon Focus (Guisarme), Iron Will, Great Fortitude, Combat Reflexes, Dodge, Power Attack, Combat Expertise, Greater Trip, Improved Trip, Felling Smash, Greater Weapon Focus (Guisarme), Weapon Specialization (Guisarme), Furious Focus",
      traits: "Resilient, Adopted (Elven Reflexes)",
      languages: "Common, Elven, Draconic",
      special_abilities: "Bonus feat (5), Bravery +3, Weapon training 2 (Pole Arms +2, Blades, Heavy +1),  Armor training 3"
    },
    equipment: {
      gear: "Backpack, Flask Of Oil (2), Pouch (belt), Sack, Candle, Flint And Steel, Tindertwig, Rations (5 Days), Waterskin, Bedroll, Blanket, Bloodblock, Rope (silk), Mirror, Compass, Ink, Inkpen, Paper Sheets, Case For Maps/scrolls, Torch, Dagger, Combat Horse (Tafi), Roc feathers, head and feet, Red Dragon (Adult) scales and claws",
      magic_gear: "Potion of Cure Light Wounds (4) Potion of Cure Moderate Wounds (5), Potion of Cure Serious Wounds (1), Potion of Resist Fire (1), Alchemist Fire (1), Potion of Lesser Restoration (1), Potion of Remove Disease (1), Ioun Stone (Dusty rose), Feather Token (Tree)",
      item: [],
      encumbrance: {
        light: "173 lbs or less",
        medium: "174–346 lbs",
        heavy: "347–520 lbs"
      },
      body_slots: {
        armor: "Full Plate +2",
        belts: "Belt of Physical Might (+4 Str +2 Dex)",
        body: "",
        chest: "",
        eyes: "",
        feet: "Boots of Striding and Springing",
        hands: "",
        head: "Red Mantis Mask",
        headband: "Headband of Mental Prowess +2 (Wis & Cha)",
        neck: "Amulet of Natural Armor +3",
        ring_left_hand: "Ring of Protection +2",
        ring_right_hand: "",
        shield: "",
        shoulders: "Cloak of Resistance +3",
        wrist: ""
      },
      wealth: {
        platinum: "",
        gold: "870",
        silver: "",
        copper: ""
      },
      consumable: []
    },
    defense: {
      hp: {
        total: 96,
        temp: "",
        damage: "",
        non_lethal_damage: "",
        current: ""
      },
      ac: {
        misc: 1,
        temp: "",
        armor: 11,
        shield: "",
        deflect: 2,
        dodge: 1,
        natural: 3,
        size_bonus: "",
        check_penalty: -3,
        current: "",
        max_dex: "",
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
      ac_notes: "Ioun Stone (Dusty rose) +1 insight bonus to AC.",
      fortitude: {
        base: 6,
        racial: "",
        resistance: 3,
        misc: 3,
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
        base: 3,
        racial: "",
        resistance: 3,
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
        base: 2,
        racial: "",
        resistance: 3,
        misc: 2,
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
      save_notes: "+3 bonus on Will saves against fear."
    },
    offense: {
      base_attack: "+10/+5",
      cmb: {
        misc: "",
        temp: "",
        size: "",
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
          half_level: false
        }
      },
      cmd: {
        misc: "",
        temp: "",
        size: "",
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
          plus_ten: true
        }
      },
      melee_attack: {
        misc: "",
        temp: "",
        size: "",
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
          half_level: false
        }
      },
      ranged_attack: {
        misc: "",
        temp: "",
        size: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          bab: true,
          level: false,
          half_level: false
        }
      },
      attack: {
        melee: [{
          weapon: "Guisarme +1 Keen",
          attack: "+21/+16/+11",
          damage: "2d4+12",
          critical: "19-20/x3"
        }, {
          weapon: "Guisarme +1 Keen Power Attack",
          attack: "+18/+13/+8",
          damage: "2d4+18",
          critical: "19-20/x3"
        }, {
          weapon: "Guisarme +1 Trip",
          attack: "+24",
          damage: "",
          critical: ""
        }, {
          weapon: "Greatsword MW",
          attack: "+18/+13/+8",
          damage: "1d10+8",
          critical: "19–20/x2"
        }, {
          weapon: "Greatsword MW Power Attack",
          attack: "+15/+10/+5",
          damage: "1d10+14",
          critical: "19–20/x2"
        }, {
          weapon: "Halberd MW",
          attack: "+19/+14/+9",
          damage: "1d8+10",
          critical: "x3"
        }, {
          weapon: "Halberd MW Power Attack",
          attack: "+16/+10/+5",
          damage: "1d8+16",
          critical: "x3"
        }, {
          weapon: "Earthbreaker +1 Frost",
          attack: "+17/+12/+7",
          damage: "2d6+8 1d6 (cold)",
          critical: "x3"
        }],
        ranged: [{
          weapon: "Composite Longbow MW",
          attack: "+13/+8/+3",
          damage: "1d8+5",
          critical: "x3",
          range: "100 ft",
          ammo: "50"
        }]
      },
      attack_notes: "+2 bonus to CMD against trip."
    },
    skills: {
      spent_ranks: {
        include_custom: false,
        current: ""
      },
      custom: [],
      acrobatics: {
        ranks: "",
        misc: 5,
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
        ranks: 4,
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
      handle_animal: {
        ranks: 8,
        misc: "",
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
        ranks: 4,
        misc: "",
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
      },
      knowledge_arcana: {
        ranks: "",
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
      knowledge_engineering: {
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
      perception: {
        ranks: 11,
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
        ranks: 9,
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
      survival: {
        ranks: 2,
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
      swim: {
        ranks: 3,
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
      character: [{
        note: "<strong>Ability Score</strong> Human characters get a +2 bonus to one ability score of their choice at creation to represent their varied nature.<br><strong>Medium</strong> Humans are Medium creatures and have no bonuses or penalties due to their size.<br><strong>Normal Speed</strong> Humans have a base speed of 30 feet.<br><strong>Bonus Feat</strong> Humans select one extra feat at 1st level.<br><strong>Skilled</strong> Humans gain an additional skill rank at first level and one additional rank whenever they gain a level.<br><strong>Languages</strong> Humans begin play speaking Common. Humans with high Intelligence scores can choose any languages they want (except secret languages, such as Druidic)."
      }, {
        note: "<strong>Weapon Focus (Guisarme)</strong> You gain a +1 bonus on all attack rolls you make using the selected weapon<br><strong>Iron Will</strong> You get a +2 bonus on all Will saving throws<br><strong>Great Fortitude</strong> You get a +2 bonus on all Fortitude saving throws.<br><strong>Combat Reflexes</strong> You may make a number of additional attacks of opportunity per round equal to your Dexterity bonus. With this feat, you may also make attacks of opportunity while flat-footed<br><strong>Dodge</strong> You gain a +1 dodge bonus to your AC. A condition that makes you lose your Dex bonus to AC also makes you lose the benefits of this feat<br><strong>Power Attack</strong> You can choose to take a –1 penalty on all melee attack rolls and combat maneuver checks to gain a +2 bonus on all melee damage rolls. This bonus to damage is increased by half (+50%) if you are making an attack with a two-handed weapon, a one handed weapon using two hands, or a primary natural weapon that adds 1-1/2 times your Strength modifier on damage rolls. This bonus to damage is halved (–50%) if you are making an attack with an off-hand weapon or secondary natural weapon. When your base attack bonus reaches +4, and every 4 points thereafter, the penalty increases by –1 and the bonus to damage increases by +2. You must choose to use this feat before making an attack roll, and its effects last until your next turn. The bonus damage does not apply to touch attacks or effects that do not deal hit point damage<br><strong>Combat Expertise</strong> You can choose to take a –1 penalty on melee attack rolls and combat maneuver checks to gain a +1 dodge bonus to your Armor Class. When your base attack bonus reaches +4, and every +4 thereafter, the penalty increases by –1 and the dodge bonus increases by +1. You can only choose to use this feat when you declare that you are making an attack or a full-attack action with a melee weapon. The effects of this feat last until your next turn<br><strong>Greater Trip</strong> You receive a +2 bonus on checks made to trip a foe. This bonus stacks with the bonus granted by Improved Trip. Whenever you successfully trip an opponent, that opponent provokes attacks of opportunity<br><strong>Improved Trip</strong> You do not provoke an attack of opportunity when performing a trip combat maneuver. In addition, you receive a +2 bonus on checks made to trip a foe. You also receive a +2 bonus to your Combat Maneuver Defense whenever an opponent tries to trip you<br><strong>Felling Smash</strong> If you use the attack action to make a single melee attack at your highest base attack bonus while using Power Attack and you hit an opponent, you can spend a swift action to attempt a trip combat maneuver against that opponent<br><strong>Greater Weapon Focus (Guisarme)</strong> You gain a +1 bonus on attack rolls you make using the selected weapon. This bonus stacks with other bonuses on attack rolls, including those from Weapon Focus.<br><strong>Weapon Specialization</strong> You gain a +2 bonus on all damage rolls you make using the selected weapon.<br><strong>Furious Focus</strong> When you are wielding a two-handed weapon or a one-handed weapon with two hands, and using the Power Attack feat, you do not suffer Power Attack's penalty on melee attack rolls on the first attack you make each turn. You still suffer the penalty on any additional attacks, including attacks of opportunity."
      }, {
        note: "<strong>Bonus feat (5)</strong> At 1st level, and at every even level thereafter, a fighter gains a bonus feat in addition to those gained from normal advancement (meaning that the fighter gains a feat at every level). These bonus feats must be selected from those listed as combat feats, sometimes also called \"fighter bonus feats.\" </span>Upon reaching 4th level, and every four levels thereafter (8th, 12th, and so on), a fighter can choose to learn a new bonus feat in place of a bonus feat he has already learned. In effect, the fighter loses the bonus feat in exchange for the new one. The old feat cannot be one that was used as a prerequisite for another feat, prestige class, or other ability. A fighter can only change one feat at any given level and must choose whether or not to swap the feat at the time he gains a new bonus feat for the level.<br><strong>Bravery (Ex)</strong> Starting at 2nd level, a fighter gains a +1 bonus on Will saves against fear. This bonus increases by +1 for every four levels beyond 2nd.<br><strong>Weapon training 2 (Pole Arms +2, Blades, Heavy +1)</strong> Starting at 5th level, a fighter can select one group of weapons, as noted below. Whenever he attacks with a weapon from this group, he gains a +1 bonus on attack and damage rolls. </span>Every four levels thereafter (9th, 13th, and 17th), a fighter becomes further trained in another group of weapons. He gains a +1 bonus on attack and damage rolls when using a weapon from this group. In addition, the bonuses granted by previous weapon groups increase by +1 each. For example, when a fighter reaches 9th level, he receives a +1 bonus on attack and damage rolls with one weapon group and a +2 bonus on attack and damage rolls with the weapon group selected at 5th level. Bonuses granted from overlapping groups do not stack. Take the highest bonus granted for a weapon if it resides in two or more groups. </span>A fighter also adds this bonus to any combat maneuver checks made with weapons from this group. This bonus also applies to the fighter's Combat Maneuver Defense when defending against disarm and sunder attempts made against weapons from this group.<br><strong>Armor Training (Ex)</strong> Starting at 3rd level, a fighter learns to be more maneuverable while wearing armor. Whenever he is wearing armor, he reduces the armor check penalty by 1 (to a minimum of 0) and increases the maximum Dexterity bonus allowed by his armor by 1. Every four levels thereafter (7th, 11th, and 15th), these bonuses increase by +1 each time, to a maximum –4 reduction of the armor check penalty and a +4 increase of the maximum Dexterity bonus allowed. In addition, a fighter can also move at his normal speed while wearing medium armor. At 7th level, a fighter can move at his normal speed while wearing heavy armor."
      }, {
        note: "<strong>Resilient</strong> Growing up in a poor neighborhood or in the unforgiving wilds often forced you to subsist on food and water from doubtful sources. You've built up your mettle as a result, and gain a +1 trait bonus on Fortitude saves<br><strong>Adopted (Elven Reflexes)</strong> You were adopted and raised by someone not of your actual race, and raised in a society not your own. As a result, you picked up a race trait from your adoptive parents and society, and may immediately select a race trait from your adoptive parents' race.<br>One of your parents was a member of a wild elven tribe, and you've inherited a portion of your elven parent's quick reflexes. You gain a +2 trait bonus on Initiative checks."
      }, {
        note: "Harrow point = +5 on all damage rolls for one combat"
      }],
      story: []
    }
  };

  // exposed methods
  return {
    data: data
  };

})();
