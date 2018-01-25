var ro = (function() {

  var data = {
    awesomeSheet: true,
    basics: {
      name: "Ro Flint",
      race: "Elf",
      level: "7",
      classes: [{
        classname: "Magus Bladebound",
        level: 7,
        hp: 38,
        fortitude: 6,
        reflex: 2,
        will: 6,
        ranks: 14,
        bab: 5
      }],
      size: {
        category: "Medium",
        size_modifier: 0,
        special_size_modifier: 0,
        size_modifier_fly: 0,
        size_modifier_stealth: 0
      },
      alignment: "Lawful Evil",
      deity: "",
      height: "6'0",
      weight: "",
      age: "120",
      gender: "Male",
      speed: {
        land: "30ft",
        fly: "",
        maneuverability: "",
        swim: "",
        climb: "",
        burrow: ""
      },
      hero_points: "",
      character_description: "",
      initiative: {
        misc: "",
        temp: "",
        feat: "",
        trait: "",
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
        total: 29090,
        advancement_speed: "Medium",
        next_level: "",
        needed: ""
      },
      character_image: {
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
      }
    },
    statistics: {
      stats: {
        str: {
          modifier: 1,
          base: 12,
          current: 12,
          racial: "",
          enhancement: "",
          misc: "",
          temp: ""
        },
        dex: {
          modifier: 5,
          base: 17,
          current: 21,
          racial: 2,
          enhancement: 2,
          misc: "",
          temp: ""
        },
        con: {
          modifier: 0,
          base: 12,
          current: 10,
          racial: -2,
          enhancement: "",
          misc: "",
          temp: ""
        },
        int: {
          modifier: 4,
          base: 14,
          current: 18,
          racial: 2,
          enhancement: 2,
          misc: "",
          temp: ""
        },
        wis: {
          modifier: 0,
          base: 10,
          current: 10,
          racial: "",
          enhancement: "",
          misc: "",
          temp: ""
        },
        cha: {
          modifier: -2,
          base: 7,
          current: 7,
          racial: "",
          enhancement: "",
          misc: "",
          temp: ""
        }
      },
      feats: "Weapon Finesse, Dervish Dance, Alertness, Extra Arcane Pool, Weapon Focus (Black Blade), Intensified Spell",
      traits: "Magical Lineage (Shocking Grasp), Focused Mind (+2 on concentration checks)",
      languages: "Common, Draconic, Dwarven, Elven, Orc",
      special_abilities: "Low-Light Vision (Ex), Elven Immunities (Ex), Elven Magic (Ex), Weapon Familiarity (Ex), Keen Senses (Ex), Arcane Pool, Cantrips, Spell Combat (EX), Black Blade (Ex), Spell Recall (Su), Magus Arcana (Arcane Accuracy), Knowledge Pool (Su), Medium Armor (Ex)",
      power: [{
        name: "Arcane Pool",
        current: "",
        total: 8,
        used: ""
      }, {
        name: "Black Blade Arcane Pool",
        current: "",
        total: 2,
        used: ""
      }]
    },
    equipment: {
      gear: "Fur coat and cold weather outfit, Rapier, Spell component pouch, Spellbook, Backpack, Flask of Oil x3, Pouch (belt), Sack, Candle, Flint and Steel, Tindertwig, Rations (5 days), Waterskin, Bedroll, Blanket, Rope (silk), Mirror, Compass, Ink, Inkpen, Paper sheets, Case for maps/scrolls, Tent for 2, Trained Donkey (commands: come, down, stay heal, work), Alchemist Fire (3), Potion of CLW (3)",
      magic_gear: "Short Sword +1, Black Blade Scimitar +2",
      potion_viles_oils: "",
      scrolls: "",
      item: {
        all: [],
        weight: {
          current: ""
        },
        value: {
          current: ""
        }
      },
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
        check_penalty: "",
        max_dex: "",
        shield: ""
      },
      body_slots: {
        belts: "Belt of Incredible Dexterity +2",
        body: "",
        chest: "",
        eyes: "",
        feet: "",
        hands: "",
        head: "Headband of Vast Intelligence +2",
        headband: "",
        neck: "",
        ring_left_hand: "",
        ring_right_hand: "",
        shoulders: "Cloak of Resistance  +1",
        wrist: ""
      },
      wealth: {
        platinum: "",
        gold: 1570,
        silver: "",
        copper: "",
        total: ""
      },
      consumable: [{
        item: "Alchemist Fire",
        current: "",
        total: 3,
        used: ""
      }, {
        item: "Potion of CLW",
        current: "",
        total: 3,
        used: ""
      }]
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
        armor: 5,
        shield: "",
        deflect: "",
        dodge: "",
        natural: "",
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
      save_notes: "Immune to sleep effects, +2 against enchantment spells and effects, +7 against cold weather",
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
          weapon: "Shortsword +1",
          attack: "+11",
          damage: "1d6+2",
          critical: "18–20/x2",
          type: "Piercing"
        }, {
          weapon: "Black Blade Scimitar +2",
          attack: "+13",
          damage: "1d6+7",
          critical: "18–20/x2",
          type: "Slashing"
        }, {
          weapon: "Spellstrike",
          attack: "+13",
          damage: "1d6+7",
          critical: "18–20/x2",
          type: "Slashing"
        }, {
          weapon: "Black Blade Scimitar +2/Spell Strike",
          attack: "+11/+11",
          damage: "1d6+7/Spell Effect",
          critical: "18–20/x2, 18–20/x2",
          type: "Slashing, Slashing"
        }, {
          weapon: "Black Blade Scimitar +3 Keen",
          attack: "+14",
          damage: "1d6+8",
          critical: "15-20x2",
          type: "Slashing"
        }, {
          weapon: "Black Blade Scimitar +3 Keen/Spell Strike Keen",
          attack: "+12/+12",
          damage: "1d6+8/Spell Effect",
          critical: "15-20x2,  15-20x2",
          type: "Slashing"
        }, {
          weapon: "Black Blade Scimitar +3 Arcane Accuracy Keen/Spell Strike Arcane Accuracy Keen",
          attack: "+16/+16",
          damage: "1d6+8/Spell Effect",
          critical: "15-20x2,  15-20x2",
          type: "Slashing"
        }],
        ranged: [{
          weapon: "Shortbow",
          attack: "+10",
          damage: "1d6",
          critical: "x3",
          range: "60 ft",
          ammo: "50",
          type: "Piercing"
        }]
      },
      attack_notes: "1 Arcane pool point = Arcane Accuracy +4 to attack or +2 or +1 and Keen"
    },
    skills: {
      ranks: {
        total: "",
        spent: {
          include_custom: false,
          current: ""
        }
      },
      custom: [],
      acrobatics: {
        ranks: 4,
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
      all: {
        appraise: {
          ranks: "",
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
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
          racial: "",
          feat: "",
          trait: "",
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
          ranks: 2,
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
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
          racial: "",
          feat: "",
          trait: "",
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
          racial: "",
          feat: "",
          trait: "",
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
          racial: "",
          feat: "",
          trait: "",
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
          racial: "",
          feat: "",
          trait: "",
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
          racial: "",
          feat: "",
          trait: "",
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
          racial: "",
          feat: "",
          trait: "",
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
          ranks: 7,
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
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
          racial: "",
          feat: "",
          trait: "",
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
          racial: "",
          feat: "",
          trait: "",
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
          racial: "",
          feat: "",
          trait: "",
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
          ranks: 1,
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
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
          racial: "",
          feat: "",
          trait: "",
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
          ranks: "",
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
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
          racial: "",
          feat: "",
          trait: "",
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
          racial: "",
          feat: "",
          trait: "",
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
          racial: "",
          feat: "",
          trait: "",
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
          racial: "",
          feat: "",
          trait: "",
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
          racial: "",
          feat: "",
          trait: "",
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
          ranks: 1,
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
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
          ranks: "",
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
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
          ranks: "",
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
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
          ranks: 7,
          misc: 2,
          current: "",
          racial: "",
          feat: "",
          trait: "",
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
          variant_name: "Dance",
          ranks: 2,
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
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
          racial: "",
          feat: "",
          trait: "",
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
          racial: "",
          feat: "",
          trait: "",
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
          racial: "",
          feat: "",
          trait: "",
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
          ranks: 1,
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
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
        sense_motive: {
          ranks: "",
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
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
          racial: "",
          feat: "",
          trait: "",
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
          ranks: 7,
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
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
          racial: "",
          feat: "",
          trait: "",
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
          racial: "",
          feat: "",
          trait: "",
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
          ranks: 2,
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
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
          ranks: 7,
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
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
      }
    },
    spells: {
      concentration: {
        current: "",
        misc: 2,
        temp: "",
        racial: "",
        feat: "",
        trait: "",
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
        racial: "",
        feat: "",
        trait: "",
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
      spell_notes: "+2 on caster level checks to overcome spell resistance.",
      per_day: {
        level_0: 5,
        level_1: 4,
        level_2: 3,
        level_3: 1,
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
      bonus: {
        level_0: "",
        level_1: 1,
        level_2: 1,
        level_3: 1,
        level_4: "",
        level_5: "",
        level_6: "",
        level_7: "",
        level_8: "",
        level_9: ""
      },
      dc: {
        level_0: {
          spell_level: 0,
          misc: "",
          temp: "",
          feat: "",
          trait: "",
          current: "",
          bonuses: {
            str_bonus: false,
            dex_bonus: false,
            con_bonus: false,
            int_bonus: true,
            wis_bonus: false,
            cha_bonus: false,
            level: false,
            half_level: false,
            spell_level: true,
            plus_ten: true
          }
        },
        level_1: {
          spell_level: 1,
          misc: "",
          temp: "",
          feat: "",
          trait: "",
          current: "",
          bonuses: {
            str_bonus: false,
            dex_bonus: false,
            con_bonus: false,
            int_bonus: true,
            wis_bonus: false,
            cha_bonus: false,
            level: false,
            half_level: false,
            spell_level: true,
            plus_ten: true
          }
        },
        level_2: {
          spell_level: 2,
          misc: "",
          temp: "",
          feat: "",
          trait: "",
          current: "",
          bonuses: {
            str_bonus: false,
            dex_bonus: false,
            con_bonus: false,
            int_bonus: true,
            wis_bonus: false,
            cha_bonus: false,
            level: false,
            half_level: false,
            spell_level: true,
            plus_ten: true
          }
        },
        level_3: {
          spell_level: 3,
          misc: "",
          temp: "",
          feat: "",
          trait: "",
          current: "",
          bonuses: {
            str_bonus: false,
            dex_bonus: false,
            con_bonus: false,
            int_bonus: true,
            wis_bonus: false,
            cha_bonus: false,
            level: false,
            half_level: false,
            spell_level: true,
            plus_ten: true
          }
        },
        level_4: {
          spell_level: 4,
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
        },
        level_5: {
          spell_level: 5,
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
        },
        level_6: {
          spell_level: 6,
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
        },
        level_7: {
          spell_level: 7,
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
        },
        level_8: {
          spell_level: 8,
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
        },
        level_9: {
          spell_level: 9,
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
        }
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
          prepared: 1,
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
          name: "Daze",
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
          name: "Disrupt Undead",
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
          name: "Light",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Mage Hand",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Open Close",
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
          name: "Color Spray",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Grease",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Shocking Grasp",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "True Strike",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Magic Missile",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Shield",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Vanish",
          prepared: 0,
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
          name: "Chill Touch",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Frostbite",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Infernal Healing",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Windy Escape",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Unerring Weapon",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Ray of Enfeeblement",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Burning Hands",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Expeditious Retreat",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Shocking Grasp Intensified",
          prepared: 3,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Reduce Person",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }]
      }, {
        level_2: [{
          name: "Mirror Image",
          prepared: 2,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Frigid Touch",
          prepared: 2,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Glitter Dust",
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
          name: "Scorching Ray",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Pyrotechnics",
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
        }]
      }, {
        level_3: [{
          name: "Fly",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Haste",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Force Hook Charge",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Ray of Exhaustion",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Vampiric Touch",
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
          name: "Slow",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }]
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
        note: "<strong>+2 Dexterity, +2 Intelligence, –2 Constitution</strong> Elves are nimble, both in body and mind, but their form is frail.<br><strong>Medium</strong> Elves are Medium creatures and have no bonuses or penalties due to their size.<br><strong>Normal Speed</strong> Elves have a base speed of 30 feet.<br><strong>Low-Light Vision</strong> Elves can see twice as far as humans in conditions of dim light. See Additional Rules.<br><strong>Elven Immunities</strong> Elves are immune to magic sleep effects and get a +2 racial saving throw bonus against enchantment spells and effects.<br><strong>Elven Magic</strong> Elves receive a +2 racial bonus on caster level checks made to overcome spell resistance. In addition, elves receive a +2 racial bonus on Spellcraft skill checks made to identify the properties of magic items.<br><strong>Keen Senses</strong> Elves receive a +2 racial bonus on Perception skill checks.<br><strong>Weapon Familiarity</strong> Elves are proficient with longbows (including composite longbows), longswords, rapiers, and shortbows (including composite shortbows), and treat any weapon with the word \"elven\" in its name as a martial weapon.<br><strong>Languages</strong> Elves begin play speaking Common and Elven. Elves with high Intelligence scores can choose from the following: Celestial, Draconic, Gnoll, Gnome, Goblin, Orc, and Sylvan."
      }, {
        note: "<strong>Weapon Finesse</strong> With a light weapon, rapier, whip, or spiked chain made for a creature of your size category, you may use your Dexterity modifier instead of your Strength modifier on attack rolls. If you carry a shield, its armor check penalty applies to your attack rolls.<br><strong>Dervish Dance</strong> When wielding a scimitar with one hand, you can use your Dexterity modifier instead of your Strength modifier on melee attack and damage rolls. You treat the scimitar as a one-handed piercing weapon for all feats and class abilities that require such a weapon (such as a duelist’s precise strike ability). The scimitar must be for a creature of your size. You cannot use this feat if you are carrying a weapon or shield in your off hand.<br><strong>Extra Arcane Pool</strong> Your arcane pool increases by 2.<br><strong>Weapon Focus (Black Blade)</strong> You gain a +1 bonus on all attack rolls you make using the selected weapon.<br><strong>Intensified Spell</strong> An intensified spell increases the maximum number of damage dice by 5 levels. You must actually have sufficient caster levels to surpass the maximum in order to benefit from this feat. No other variables of the spell are affected, and spells that inflict damage that is not modified by caster level are not affected by this feat. An intensified spell uses up a spell slot one level higher than the spell's actual level.<br><strong>Magical Lineage (Shocking Grasp)</strong> One of your parents was a gifted spellcaster who not only used metamagic often, but also developed many magical items and perhaps even a new spell or two—and you have inherited a fragment of this greatness. Pick one spell when you choose this trait. When you apply metamagic feats to this spell, treat its actual level as 1 lower for determining the spell's final adjusted level.<br><strong>Focused Mind</strong> Your childhood was either dominated by lessons of some sort (whether musical, academic, or other) or by a horrible home life that encouraged your ability to block out distractions and focus on the immediate task at hand. You gain a +2 trait bonus on concentration checks."
      }, {
        note: "<strong>Arcane Pool (Su)</strong> At 1st level, the magus gains a reservoir of mystical arcane energy that he can draw upon to fuel his powers and enhance his weapon. This arcane pool has a number of points equal to 1/2 his magus level (minimum 1) + his Intelligence modifier. The pool refreshes once per day when the magus prepares his spells.<br>At 1st level, a magus can expend 1 point from his arcane pool as a swift action to grant any weapon he is holding a +1 enhancement bonus for 1 minute. For every four levels beyond 1st, the weapon gains another +1 enhancement bonus, to a maximum of +5 at 17th level. These bonuses can be added to the weapon, stacking with existing weapon enhancement to a maximum of +5. Multiple uses of this ability do not stack with themselves.<br>At 5th level, these bonuses can be used to add any of the following weapon properties: dancing, flaming, flaming burst, frost, icy burst, keen, shock, shocking burst, speed, or vorpal. Adding these properties consumes an amount of bonus equal to the property's base price modifier (see the Magic Weapon Special Ability Descriptions). These properties are added to any the weapon already has, but duplicates do not stack. If the weapon is not magical, at least a +1 enhancement bonus must be added before any other properties can be added. These bonuses and properties are decided when the arcane pool point is spent and cannot be changed until the next time the magus uses this ability. These bonuses do not function if the weapon is wielded by anyone other than the magus.<br>A magus can only enhance one weapon in this way at one time. If he uses this ability again, the first use immediately ends.<br><strong>Cantrips</strong> A magus can prepare a number of cantrips, or 0-level spells, each day, as noted in the table above under “Spells per Day.” These spells are cast like any other spell, but they are not expended when cast and may be used again.<br><strong>Spell Combat (Ex)</strong> At 1st level, a magus learns to cast spells and wield his weapons at the same time. This functions much like two-weapon fighting, but the off-hand weapon is a spell that is being cast. To use this ability, the magus must have one hand free (even if the spell being cast does not have somatic components), while wielding a light or one-handed melee weapon in the other hand. As a full-round action, he can make all of his attacks with his melee weapon at a –2 penalty and can also cast any spell from the magus spell list with a casting time of 1 standard action (any attack roll made as part of this spell also takes this penalty). If he casts this spell defensively, he can decide to take an additional penalty on his attack rolls, up to his Intelligence bonus, and add the same amount as a circumstance bonus on his concentration check. If the check fails, the spell is wasted, but the attacks still take the penalty. A magus can choose to cast the spell first or make the weapon attacks first, but if he has more than one attack, he cannot cast the spell between weapon attacks.<br><strong>Spellstrike (Su)</strong> At 2nd level, whenever a magus casts a spell with a range of “touch” from the magus spell list, he can deliver the spell through any weapon he is wielding as part of a melee attack. Instead of the free melee touch attack normally allowed to deliver the spell, a magus can make one free melee attack with his weapon (at his highest base attack bonus) as part of casting this spell. If successful, this melee attack deals its normal damage as well as the effects of the spell. If the magus makes this attack in concert with spell combat, this melee attack takes all the penalties accrued by spell combat melee attacks. This attack uses the weapon's critical range (20, 19–20, or 18–20 and modified by the keen weapon property or similar effects), but the spell effect only deals ×2 damage on a successful critical hit, while the weapon damage uses its own critical modifier.<br><strong>Magus Arcana Arcane Accuracy (Su)</strong> The magus can expend 1 point from his arcane pool as a swift action to grant himself an insight bonus equal to his Intelligence bonus on all attack rolls until the end of his turn.<br><strong>Knowledge Pool (Su)</strong>At 7th level, when a magus prepares his magus spells, he can decide to expend 1 or more points from his arcane pool, up to his Intelligence bonus. For each point he expends, he can treat any one spell from the magus spell list as if it were in his spellbook and can prepare that spell as normal that day. If he does not cast spells prepared in this way before the next time he prepares spells, he loses those spells. He can also cast spells added in this way using his spell recall ability, but only until he prepares spells again.<br><strong>Medium Armor (Ex)</strong> At 7th level, a magus gains proficiency with medium armor. A magus can cast magus spells while wearing medium armor without incurring the normal arcane spell failure chance. Like any other arcane spellcaster, a magus wearing heavy armor or using a shield incurs a chance of arcane spell failure if the spell in question has a somatic component."
      }, {
        note: "<strong>Black Blade (Ex)</strong> At 3rd level, the bladebound magus' gains a powerful sentient weapon called a black blade, whose weapon type is chosen by the magus. A magus with this class feature cannot take the familiar magus arcana, and cannot have a familiar of any kind, even from another class.<br>Instead of the normal arcane pool amount, the bladebound magus's arcane pool has a number of points equal to 1/3 his level (minimum 1) plus his Intelligence bonus. This ability changes the Arcane Pool class feature and replaces the magus arcana gained at 3rd level.<br><strong>Black Blade Ability Descriptions</strong> Enhancement Bonus +2, Int 12, Wis 8, Cha 8 Ego 8. Cause: To protect the Evles.<br><strong>Alertness (Ex)</strong> While a magus is wielding his black blade, he gains the Alertness feat.<br><strong>Black Blade Strike (Sp)</strong> As a free action, the magus can spend a point from the black blade's arcane pool to grant the black blade a +1 bonus on damage rolls for 1 minute. For every four levels beyond 1st, this ability gives the black blade another +1 on damage rolls.<br><strong>Telepathy (Su)</strong> While a magus is wielding or carrying his black blade, he can communicate telepathically with the blade in a language that the magus and the black blade share.<br><strong>Unbreakable (Ex)</strong> As long as it has at least 1 point in its arcane pool, a black blade is immune to the broken condition. If broken, the black blade is unconscious and powerless until repaired. If destroyed, the black blade can be reforged 1 week later through a special ritual that costs 200 gp per magus level. The ritual takes 24 hours to complete.<br><strong>Energy Attunement (Su)</strong> At 5th level, as a free action, a magus can spend a point of his black blade's arcane pool to have it deal one of the following types of damage instead of weapon damage: cold, electricity, or fire. He can spend 2 points from the black blade's arcane pool to deal sonic or force damage instead of weapon damage. This effect lasts until the start of the magus's next turn."
      }, {
        note: "Headband of Vast Intelligence +2 skill: Use Magic Device."
      }],
      story: []
    },
    events: []
  };

  // exposed methods
  return {
    data: data
  };

})();
