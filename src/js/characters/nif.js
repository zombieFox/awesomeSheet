var nif = (function() {

  var data = {
    awesomeSheet: true,
    basics: {
      name: "Nif Amakir",
      race: "Elf",
      level: "",
      classes: [{
        classname: "Wizard",
        level: 8,
        hp: 42,
        fortitude: 2,
        reflex: 2,
        will: 6,
        ranks: 16,
        bab: 4
      }],
      size: {
        category: "Medium",
        size_modifier: 0,
        special_size_modifier: 0,
        size_modifier_fly: 0,
        size_modifier_stealth: 0
      },
      alignment: "Lawful Neutral",
      deity: "",
      height: "6'0",
      weight: "136 lbs",
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
      hero_points: 1,
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
        total: 51330,
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
        orientation: "",
        position: {
          x: "",
          y: ""
        },
        size: {
          width: "",
          height: ""
        },
        scale: "",
        image: ""
      }
    },
    statistics: {
      stats: {
        str: {
          modifier: -1,
          base: 8,
          current: 8,
          racial: "",
          enhancement: "",
          misc: "",
          temp: ""
        },
        dex: {
          modifier: 3,
          base: 15,
          current: 17,
          racial: 2,
          enhancement: "",
          misc: "",
          temp: ""
        },
        con: {
          modifier: 2,
          base: 16,
          current: 14,
          racial: -2,
          enhancement: "",
          misc: "",
          temp: ""
        },
        int: {
          modifier: 8,
          base: 20,
          current: 26,
          racial: 2,
          enhancement: 4,
          misc: "",
          temp: ""
        },
        wis: {
          modifier: 1,
          base: 12,
          current: 12,
          racial: "",
          enhancement: "",
          misc: "",
          temp: ""
        },
        cha: {
          modifier: 0,
          base: 10,
          current: 10,
          racial: "",
          enhancement: "",
          misc: "",
          temp: ""
        }
      },
      feats: "Alertness, Augment Summoning, Craft Wondrous Item, Greater Spell Focus (Conjuration), Scribe Scroll, Spell Focus (Conjuration), Combat Casting",
      traits: "Resilient",
      languages: "Aquan, Auran, Azlanti, Celestial, Common, Draconic, Dwarven, Elven, Giant, Gnome, Goblin, Ignan, Orc, Sylvan, Undercommon",
      special_abilities: "Arcane bond (Su), Bonus feats, Cantrips, Arcane schools, Elven Immunities (Ex), Elven Magic (Ex), Keen Senses (Ex), Low-Light Vision (Ex), Headband of Vast Intelligence skill (Use Magic Device, Fly), Linguistics Skill (Dwarven, Giant, Undercommon), Shift (Su), Summoner's Charm (Su), Weapon Familiarity (Ex)",
      power: [{
        name: "Shift",
        current: "",
        total: 11,
        used: 2
      }, {
        name: "Dimensional Step",
        current: "",
        total: 240,
        used: 50
      }]
    },
    equipment: {
      gear: "Spellbook, Scroll case, Spell component pouch, Candle, Flint and Steel, Tindertwig, Ink, pen and paper, Belt Pouch, Backpack, Rations (5 days), Combat trained horse",
      magic_gear: "Handy Haversack",
      potion_viles_oils: "Insect sap (14), Antitoxin(1), Holy Water(1), Yellow Mushroom Juice (3), Magic Weapon (2), Cure Light Wounds (0), Cure Moderate Wounds (1), Cure Serious Wounds (1), Protection from Evil (1), Adjustable Disguise (1), Aid (1), Displacement (1), Hide from Animals (1), Delay Poison (1), Bear's Endurance (1), Levitate (1)",
      scrolls: "Acid Pit (2), Summon Monster III (2), Summon Monster IV (0), Invisibility (2), Create Pit (2), Web (3), Stinking Cloud (2), Grease (1), Mirror Image (3), Spiked Pit (6), Fly (1), Interposing Hand (0), Elemental Body 2 (0), Wall of Fire (0), Haste (1), Enlarge Person (2), Endure Elements (2), Acid Arrow (0), Gust of Wind (0), Animate Rope (0), False Life (2), Floating Disk (1), Comprehend Languages (0), Erase (1), Detect Secret Doors (1), Black Tentacles (2), Mage Armor (0)",
      item: {
        all: [{
          name: "Flask of Oil",
          quantity: 5,
          weight: 5
        }, {
          name: "Sack",
          quantity: 1,
          weight: 0.5
        }, {
          name: "Waterskin",
          quantity: 1,
          weight: 4
        }, {
          name: "Bedroll",
          quantity: 1,
          weight: 5
        }, {
          name: "Blanket",
          quantity: 1,
          weight: 3
        }, {
          name: "Bloodblock",
          quantity: 2,
          weight: 2
        }, {
          name: "Healer's Kit",
          quantity: 2,
          weight: 2
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
        }, {
          name: "Andorak spell book",
          quantity: 1,
          weight: 0.5
        }],
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
        armor: "",
        check_penalty: "",
        max_dex: "",
        shield: ""
      },
      body_slots: {
        belts: "",
        body: "",
        chest: "",
        eyes: "",
        feet: "",
        hands: "",
        head: "",
        headband: "Headband of Vast Intelligence +4",
        neck: "Amulet of Natural Armor +1",
        ring_left_hand: "Ring of Sustenance",
        ring_right_hand: "",
        shoulders: "Cloak of Resistance +2",
        wrist: ""
      },
      wealth: {
        platinum: "",
        gold: 1027,
        silver: "",
        copper: "",
        total: ""
      },
      consumable: [{
        item: "Wand of Lightning Bolt",
        current: "",
        total: 50,
        used: 49
      }, {
        item: "Wand of Scorching Ray",
        current: "",
        total: 50,
        used: 42
      }, {
        item: "Wand of Swift Girding",
        current: "",
        total: 50,
        used: 30
      }, {
        item: "Wand of Carry Companion",
        current: "",
        total: 50,
        used: 40
      }, {
        item: "Pearl of Power (1st Level)",
        current: "",
        total: 1,
        used: ""
      }, {
        item: "Wand of Purify Food and Drink",
        current: "",
        total: 50,
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
        armor: 4,
        shield: "",
        deflect: "",
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
      ac_notes: "Mage Armor active",
      fortitude: {
        base: "",
        resistance: 2,
        feat: "",
        trait: 1,
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
        base: "",
        resistance: 2,
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
        resistance: 2,
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
      save_notes: "Immune to magic sleep effects. +2 saving throw against enchantment spells and effects.",
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
          weapon: "Dagger (Master Work)",
          attack: "+4",
          damage: "1d6+1",
          critical: "19–20/x2",
          type: "Slashing/Piercing"
        }],
        ranged: [{
          weapon: "Shortbow",
          attack: "+7",
          damage: "1d6",
          critical: "x3",
          range: "60 ft",
          ammo: "50",
          type: "Piercing"
        }]
      },
      attack_notes: ""
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
        name: "Spellcraft (Identify magic items)",
        ranks: 8,
        misc: 2,
        current: "",
        racial: "",
        trait: "",
        feat: "",
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
      }],
      all: {
        acrobatics: {
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
        appraise: {
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
          ranks: "",
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
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
          ranks: 8,
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
          ranks: 4,
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
          ranks: 4,
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
          ranks: 4,
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
        knowledge_geography: {
          ranks: 4,
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
        knowledge_history: {
          ranks: 4,
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
        knowledge_local: {
          ranks: 4,
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
        knowledge_nature: {
          ranks: 4,
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
        knowledge_nobility: {
          ranks: 3,
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
        knowledge_planes: {
          ranks: 4,
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
          ranks: 4,
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
        linguistics: {
          ranks: 8,
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
        perception: {
          ranks: 8,
          misc: 4,
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
          ranks: 8,
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
          ranks: "",
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
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
          ranks: 8,
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
        }
      }
    },
    spells: {
      concentration: {
        current: "",
        misc: "",
        temp: "",
        racial: "",
        feat: 4,
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
      school: "Conjuration - Teleportation",
      opposition: "Enchantment, Necromancy",
      domains: "",
      bloodline: "",
      spell_notes: "Conjuration spells +2 DC.<br>+2 on caster level checks to overcome spell resistance.",
      per_day: {
        level_0: 4,
        level_1: 4,
        level_2: 3,
        level_3: 3,
        level_4: 2,
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
        level_1: 2,
        level_2: 2,
        level_3: 2,
        level_4: 2,
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
            int_bonus: true,
            wis_bonus: false,
            cha_bonus: false,
            level: false,
            half_level: false,
            spell_level: true,
            plus_ten: true
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
          name: "Bleed",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Erase",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Daze",
          prepared: 0,
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
          name: "Touch of Fatigue",
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
          name: "Light",
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
          name: "Spark",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Acid Splash",
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
          name: "Flare",
          prepared: 0,
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
          name: "Dancing Lights",
          prepared: 1,
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
          name: "Arcane Mark",
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
          name: "Open/Close",
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
        }]
      }, {
        level_1: [{
          name: "Comprehend Languages",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Enlarge Person",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Feather Fall",
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
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Obscuring Mist",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Protection from Chaos",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Protection from Evil",
          prepared: 2,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Shield",
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
          name: "Endure Elements",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Animate Rope",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Floating Disk",
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
        }]
      }, {
        level_2: [{
          name: "Blur",
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
        }, {
          name: "Flaming Sphere",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Glitterdust",
          prepared: 2,
          active: false,
          cast: 1,
          note: ""
        }, {
          name: "Invisibility",
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
          name: "Mirror Image",
          prepared: 1,
          active: true,
          cast: 1,
          note: ""
        }, {
          name: "Resist Energy",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Stone Call",
          prepared: 0,
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
          name: "Create Treasure Map",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Gust of Wind",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Acid Arrow",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "False Life",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }]
      }, {
        level_3: [{
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
          name: "Spiked Pit",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Aqueous Orb",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Fly",
          prepared: 1,
          active: false,
          cast: 1,
          note: ""
        }, {
          name: "Sleet Storm",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Haste",
          prepared: 2,
          active: false,
          cast: 1,
          note: ""
        }, {
          name: "Lightning Bolt",
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
          name: "Dispel Magic",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }]
      }, {
        level_4: [{
          name: "Black Tentacles",
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
          name: "Secure Shelter",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Summon Monster IV",
          prepared: 2,
          active: false,
          cast: 2,
          note: ""
        }, {
          name: "Heroism",
          prepared: 0,
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
          name: "Greater Invisibility",
          prepared: 1,
          active: false,
          cast: 1,
          note: ""
        }]
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
        note: "<strong>Resilient</strong> (+1 trait bonus on Fortitude saves)<br><strong>Arcane bond (Su)</strong> Rat Bower, +2 Fortitude save.<br><strong>Bonus feats</strong>.<br><strong>Cantrips</strong>.<br><strong>Elven Immunities (Ex)</strong> Immune to magic sleep effects. +2 saving throw against enchantment spells and effects.<br><strong>Elven Magic (Ex)</strong> +2 caster level checks made to overcome SR. +2 Spellcraft check to identify properties of magic items.<br><strong>Keen Senses (Ex)</strong> +2 Perception checks.<br><strong>Low-Light Vision (Ex)</strong> See x2 as far as humans in low illumination.<br><strong>Shift (Su)</strong> Teleport 15 feet 9 times per day.<br><strong>Summoner's Charm (Su)</strong> +3 rounds duration for Conjuration (Summoning) spells.<br><strong>Weapon Familiarity (Ex)</strong> Proficient with longbows (including composite longbows), longswords, rapiers, and shortbows (including composite shortbows), treat weapon with \"elven\" in name as a martial weapon.<br><strong>Dimensional Steps (Sp)</strong> At 8th level, you can use this ability to teleport up to 30 feet per wizard level per day as a standard action. This teleportation must be used in 5-foot increments and such movement does not provoke an attack of opportunity. You can bring other willing creatures with you, but you must expend an equal amount of distance for each additional creature brought with you."
      }, {
        note: "Spells to find:<br>Scorching Ray<br>Lightning Bolt"
      }],
      story: [{
        note: "Baron Turbine Blackshield, lord of Thornkeep <br>Five factions in Thornkeep: Three Daggers (the thives), Iron jaws, Hunters guild, The Order (deal in magic), The Goblins, The Blue Basilisks (the muscle)"
      }, {
        note: "Andorak (Lich shade), wizard's apprentice, locked in tomb"
      }, {
        note: "Jonas the mail man, messenger of Thornkeep"
      }, {
        note: "Library reference: 957"
      }]
    },
    events: []
  };

  // exposed methods
  return {
    data: data
  };

})();
