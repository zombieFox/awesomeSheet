var orrin = (function() {

  var data = {
    awesomeSheet: true,
    basics: {
      name: "Orrin Alareth",
      race: "Human",
      level: "",
      classes: [{
        classname: "Rogue",
        level: 11,
        hp: 68,
        fortitude: 3,
        reflex: 7,
        will: 3,
        ranks: 99,
        bab: 8
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
      weight: "206 lbs",
      age: "26",
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
      character_description: "A energetic overweight man. Reddened medium-brown skin, round face, blue-green, wrinkled eyes, a double chin and wavy light brown hair. Very good reflexes and exceptional dexterity and coordination.",
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
        total: 105348,
        advancement_speed: "Medium",
        next_level: "",
        needed: ""
      },
      character_image: {
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
        scale: "",
        image: "",
        uploaded: "",
        size: {
          width: "",
          height: ""
        }
      }
    },
    statistics: {
      stats: {
        str: {
          modifier: 1,
          base: 13,
          current: "",
          racial: "",
          enhancement: "",
          misc: "",
          temp: ""
        },
        dex: {
          modifier: 7,
          base: 18,
          current: "",
          racial: 2,
          enhancement: 4,
          misc: "",
          temp: ""
        },
        con: {
          modifier: 1,
          base: 12,
          current: "",
          racial: "",
          enhancement: "",
          misc: "",
          temp: ""
        },
        int: {
          modifier: 3,
          base: 12,
          current: "",
          racial: "",
          enhancement: 4,
          misc: "",
          temp: ""
        },
        wis: {
          modifier: 1,
          base: 12,
          current: "",
          racial: "",
          enhancement: "",
          misc: "",
          temp: ""
        },
        cha: {
          modifier: -2,
          base: 7,
          current: "",
          racial: "",
          enhancement: "",
          misc: "",
          temp: ""
        }
      },
      feats: "Weapon Finesse, Dodge, Two-Weapon Fighting, Weapon focus (Rapier), Deft hands, Great Fortitude, Iron Will, Two-Weapon Defense",
      traits: "Reactionary, Resilient",
      languages: "Common, Elven",
      special_abilities: "Sneak Attack (+6d6), Trapfinding, Evasion (Ex), Rogue Talent Trap spotter (Ex), Trap Sense +3 (Ex), Rogue Talent Finesse Rogue, Uncanny Dodge (Ex), Rogue Talent Fast Stealth (Ex), Improved Uncanny Dodge (Ex), Rogue Talent Combat Trick - Improved Two-Weapon Fighting, Rogue Talent Offensive Defense (Ex), Advanced Talent Knock-Out Blow (Ex)",
      power: [{
        name: "Knock-Out Blow",
        current: "",
        total: 1,
        used: ""
      }]
    },
    equipment: {
      gear: "Fur coat and cold weather outfit, Thieves' tools MW, Climber's kit, Magnifying glass, Merchant's scale, Backpack, Flask of Oil (3), Pouch (belt), Sack, Candle, Flint and Steel, Torch, Tindertwig (5), Rations (5 days), Waterskin, Bedroll, Blanket, Rope (silk), Mirror, Compass, Ink, Pen, Paper sheets, Dagger (2), Hide armor, 10ft pole in pieces",
      magic_gear: "Ioun Torch, Ioun Stones Dusty Rose, Rapier +1<br>",
      item: {
        all: [{
          name: "Flask of Oil",
          quantity: 1,
          weight: 1,
          value: 2
        }, {
          name: "Tanglefoot bag",
          quantity: 2,
          weight: 8,
          value: 3
        }, {
          name: "Flat Bread",
          quantity: 10,
          weight: 2,
          value: 4
        }, {
          name: "Bedrolls",
          quantity: 6,
          weight: 2,
          value: 1
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
        armor: "Mithral Chain Shirt +2",
        check_penalty: "",
        max_dex: "",
        shield: ""
      },
      body_slots: {
        belts: "Belt of Dexterity +4",
        body: "",
        chest: "Vest of Escape",
        eyes: "Eyes of the Eagle",
        feet: "",
        hands: "Gloves of Reconnaissance",
        head: "Headband of Vast Intelligence +4",
        headband: "",
        neck: "Amulet of a Natural Armor +1",
        ring_left_hand: "Ring of Force Shield",
        ring_right_hand: "Ring of Protection +1",
        shoulders: "Cloak of Resistance +2",
        wrist: ""
      },
      wealth: {
        platinum: 3,
        gold: 13009,
        silver: 5,
        copper: "",
        total: 13039.5,
        include_item: false
      },
      consumable: [{
        item: "Gloves of Reconnaissance",
        current: "",
        total: 10,
        used: 2
      }, {
        item: "Wand of Magic Missile (CL5)",
        current: "",
        total: 50,
        used: 4
      }, {
        item: "Wand of Cure Light Wounds",
        current: "",
        total: 50,
        used: 1
      }, {
        item: "Wand of Entangle",
        current: "",
        total: 50,
        used: ""
      }],
      potion_viles_oils: "Cure Light Wounds (6), Endure Elements (1), Bless Weapon (4), Greese (1), Reduce Person (1), Stabilise (1), Cure Light Wounds (1), Jump (1), Protection from Good (1), Protection from Law (1), Protection from Evil (1), Remove Fear (1), Remove Sickness (1), Shield of Faith (1), Vanish (1), Gaseous Form (1), Dispel Magic (1)",
      scrolls: ""
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
        armor: 6,
        shield: 3,
        deflect: 1,
        dodge: 1,
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
          size: true,
          ac_dodge: false
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
          max_dex: true,
          ac_armor: false,
          ac_shield: false,
          ac_natural: false
        }
      },
      ac_notes: "+3 dodge bonus to AC against attacks made by traps.<br>+2 AC against incorporeal attacks.<br>+6 Dodge to AC for 1 round after Sneak Attack.",
      fortitude: {
        base: "",
        resistance: 2,
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
        feat: 2,
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
      save_notes: "+3 bonus on Reflex saves made to avoid traps.",
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
          weapon: "Mithral Rapier +2",
          attack: "+18",
          damage: "1d6+3",
          critical: "18–20/×2",
          type: "Piercing"
        }, {
          weapon: "Rapier +1 Shocking",
          attack: "+16",
          damage: "1d6+2 + 1d6 Electrical",
          critical: "18-20/x2",
          type: "Piercing"
        }, {
          weapon: "Short Sword +1",
          attack: "+16",
          damage: "1d6+2",
          critical: "19–20/×2",
          type: "Piercing"
        }, {
          weapon: "Mithral Rapier +2, Short Sword +1",
          attack: "+16/+16/+9/+9",
          damage: "1d6+3, 1d6+2",
          critical: "18–20/×2, 19–20/×2",
          type: "Piercing, Piercing"
        }, {
          weapon: "Silver Dagger",
          attack: "+15",
          damage: "1d6+1",
          critical: "19–20/×2",
          type: "Piercing"
        }, {
          weapon: "Sap",
          attack: "+15",
          damage: "1d6+1",
          critical: "x2",
          type: "Bludgeoning"
        }, {
          weapon: "Punching Dagger +2 Shocking",
          attack: "+17",
          damage: "1d4+3 + 1d6 Electrical",
          critical: "x3",
          type: "Piercing"
        }, {
          weapon: "Mithral Rapier +2, Punching Dagger +2 Shocking",
          attack: "+16/+16/+10/+10",
          damage: "1d6+3, 1d4+3 + 1d6 Electrical",
          critical: "18–20/×2, x3",
          type: "Piercing, Piercing"
        }, {
          weapon: "Rapier +1 Shocking, Punching Dagger +2 Shocking",
          attack: "+15/+15/+10/+10",
          damage: "1d6+2 + 1d6 Electrical, 1d4+3 + 1d6 Electrical",
          critical: "18–20/×2, x3",
          type: "Piercing, Piercing"
        }],
        ranged: [{
          weapon: "Shortbow (MW)",
          attack: "+15/+10",
          damage: "1d6",
          critical: "x3",
          range: "60 ft",
          ammo: "50",
          type: "Piercing"
        }]
      },
      attack_notes: "+6d6 Sneak attack.<br>Knock-Out Blow DC 18."
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
        ranks: 11,
        misc: 5,
        current: "",
        racial: "",
        trait: "",
        feat: "",
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
          check_penalty: false,
          size_modifier_stealth: false,
          size_modifier_fly: false
        }
      }, {
        name: "Disable Device (Traps)",
        ranks: 11,
        misc: 8,
        current: "",
        racial: "",
        trait: "",
        feat: "",
        bonuses: {
          class_skill: true,
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: true,
          check_penalty: true,
          size_modifier_stealth: false,
          size_modifier_fly: false
        }
      }],
      all: {
        acrobatics: {
          ranks: 11,
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
        appraise: {
          ranks: 4,
          misc: 2,
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
          ranks: 11,
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
        },
        climb: {
          ranks: 7,
          misc: 2,
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
          ranks: 11,
          misc: 8,
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
          ranks: 11,
          misc: 6,
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
        fly: {
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
          ranks: 11,
          misc: 5,
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
          ranks: 3,
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
          ranks: 11,
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
            wis_bonus: true,
            cha_bonus: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        sleight_of_hand: {
          ranks: 11,
          misc: 2,
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
        spellcraft: {
          ranks: 11,
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
        stealth: {
          ranks: 11,
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
          ranks: 11,
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
          level: false,
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
          level: false,
          half_level: false
        }
      },
      school: "",
      opposition: "",
      domains: "",
      bloodline: "",
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
            int_bonus: false,
            wis_bonus: false,
            cha_bonus: false,
            level: false,
            half_level: false,
            spell_level: false,
            plus_ten: false
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
            int_bonus: false,
            wis_bonus: false,
            cha_bonus: false,
            level: false,
            half_level: false,
            spell_level: false,
            plus_ten: false
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
            int_bonus: false,
            wis_bonus: false,
            cha_bonus: false,
            level: false,
            half_level: false,
            spell_level: false,
            plus_ten: false
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
            int_bonus: false,
            wis_bonus: false,
            cha_bonus: false,
            level: false,
            half_level: false,
            spell_level: false,
            plus_ten: false
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
        note: "<strong>+2 to One Ability Score</strong> Human characters get a +2 bonus to one ability score of their choice at creation to represent their varied nature.<br><strong>Medium</strong> Humans are Medium creatures and have no bonuses or penalties due to their size.<br><strong>Normal Speed</strong> Humans have a base speed of 30 feet.<br><strong>Bonus Feat</strong> Humans select one extra feat at 1st level.<br><strong>Skilled</strong> Humans gain an additional skill rank at first level and one additional rank whenever they gain a level.<br><strong>Languages</strong> Humans begin play speaking Common. Humans with high Intelligence scores can choose any languages they want (except secret languages, such as Druidic)."
      }, {
        note: "<strong>Sneak attack</strong> If a rogue can catch an opponent when he is unable to defend himself effectively from her attack, she can strike a vital spot for extra damage.<br>The rogue's attack deals extra damage anytime her target would be denied a Dexterity bonus to AC (whether the target actually has a Dexterity bonus or not), or when the rogue flanks her target. This extra damage is 1d6 at 1st level, and increases by 1d6 every two rogue levels thereafter. Should the rogue score a critical hit with a sneak attack, this extra damage is not multiplied. Ranged attacks can count as sneak attacks only if the target is within 30 feet.<br>With a weapon that deals nonlethal damage (like a sap, whip, or an unarmed strike), a rogue can make a sneak attack that deals nonlethal damage instead of lethal damage. She cannot use a weapon that deals lethal damage to deal nonlethal damage in a sneak attack, not even with the usual –4 penalty.<br>The rogue must be able to see the target well enough to pick out a vital spot and must be able to reach such a spot. A rogue cannot sneak attack while striking a creature with concealment.<br><strong>Trapfinding</strong> A rogue adds 1/2 her level to Perception skill checks made to locate traps and to Disable Device skill checks (minimum +1). A rogue can use Disable Device to disarm magic traps.<br><strong>Evasion (Ex)</strong> At 2nd level and higher, a rogue can avoid even magical and unusual attacks with great agility. If she makes a successful Reflex saving throw against an attack that normally deals half damage on a successful save, she instead takes no damage. Evasion can be used only if the rogue is wearing light armor or no armor. A helpless rogue does not gain the benefit of evasion.<br><strong>Rogue Talent Trap spotter (Ex)</strong> Whenever a rogue with this talent comes within 10 feet of a trap, she receives an immediate Perception skill check to notice the trap. This check should be made in secret by the GM.<br><strong>Trap Sense +3 (Ex)</strong> At 3rd level, a rogue gains an intuitive sense that alerts her to danger from traps, giving her a +1 bonus on Reflex saves made to avoid traps and a +1 dodge bonus to AC against attacks made by traps. These bonuses rise to +2 when the rogue reaches 6th level, to +3 when she reaches 9th level, to +4 when she reaches 12th level, to +5 at 15th, and to +6 at 18th level.<br><strong>Rogue Talent Finesse Rogue (Ex)</strong> A rogue that selects this talent gains Weapon Finesse as a bonus feat.<br><strong>Uncanny Dodge (Ex)</strong> Starting at 4th level, a rogue can react to danger before her senses would normally allow her to do so. She cannot be caught flat-footed, nor does she lose her Dex bonus to AC if the attacker is invisible. She still loses her Dexterity bonus to AC if immobilized. A rogue with this ability can still lose her Dexterity bonus to AC if an opponent successfully uses the feint action against her.<br><strong>Rogue Talent Fast Stealth (Ex)</strong> This ability allows a rogue to move at full speed using the Stealth skill without penalty.<br><strong>Improved Uncanny Dodge (Ex)</strong> A rogue of 8th level or higher can no longer be flanked.<br>This defense denies another rogue the ability to sneak attack the character by flanking her, unless the attacker has at least four more rogue levels than the target does.<br>If a character already has uncanny dodge (see above) from another class, the levels from the classes that grant uncanny dodge stack to determine the minimum rogue level required to flank the character.<br><strong>Rogue Talent Combat Trick - Improved Two-Weapon Fighting</strong> In addition to the standard single extra attack you get with an off-hand weapon, you get a second attack with it, albeit at a –5 penalty.<br><strong>Rogue Talent Offensive Defense</strong> When a rogue with this talent hits a creature with a melee attack that deals sneak attack damage, the rogue gains a +1 dodge bonus to AC for each sneak attack die rolled for 1 round.<br><strong>Advanced Talent Knock-Out Blow (Ex)</strong> Once per day, the rogue can forgo her sneak attack damage to attempt to knock out an opponent. She must declare the use of knock-out blow before she makes the attack. If the attack hits, it does normal damage, but instead of dealing sneak attack damage (and instead of any effect that triggers when the rogue deals sneak attack damage), the target falls unconscious for 1d4 rounds. A successful Fortitude save reduces this effect to staggered for 1 round. The DC of this save is equal to 10 + 1/2 the rogue's level + the rogue's Intelligence modifier."
      }, {
        note: "<strong>Reactionary</strong> You were bullied often as a child, but never quite developed an offensive response. Instead, you became adept at anticipating sudden attacks and reacting to danger quickly. You gain a +2 trait bonus on Initiative checks.<br><strong>Resilient</strong> Growing up in a poor neighborhood or in the unforgiving wilds often forced you to subsist on food and water from doubtful sources. You've built up your mettle as a result, and gain a +1 trait bonus on Fortitude saves.<br><strong>Weapon Finesse</strong> With a light weapon, rapier, whip, or spiked chain made for a creature of your size category, you may use your Dexterity modifier instead of your Strength modifier on attack rolls. If you carry a shield, its armor check penalty applies to your attack rolls.<br><strong>Dodge</strong> You gain a +1 dodge bonus to your AC. A condition that makes you lose your Dex bonus to AC also makes you lose the benefits of this feat.<br><strong>Two-Weapon Fighting</strong> Your penalties on attack rolls for fighting with two weapons are reduced. The penalty for your primary hand lessens by 2 and the one for your off hand lessens by 6. See Two-Weapon Fighting in Combat.<br><strong>Weapon focus</strong> You gain a +1 bonus on all attack rolls you make using the selected weapon.<br><strong>Deft hands</strong> You get a +2 bonus on Disable Device and Sleight of Hand skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill.<br><strong>Great Fortitude</strong> You get a +2 bonus on all Fortitude saving throws.<br><strong>Iron Will</strong> You get a +2 bonus on all Will saving throws.<br><strong>Two-Weapon Defense</strong> When wielding a double weapon or two weapons you gain a +1 shield bonus to your AC."
      }, {
        note: "Headband of Vast Intelligence +4 Skills: Sense Motive, Spellcraft."
      }],
      story: []
    },
    events: [{
      type: "xp",
      event: {
        aggregate_value: 12590
      },
      timestamp: {
        date: 6,
        day: 3,
        year: 2017,
        hours: 23,
        milliseconds: 741,
        minutes: 55,
        month: 11,
        seconds: 18
      }
    }, {
      type: "xp",
      event: {
        aggregate_value: 15200
      },
      timestamp: {
        date: 16,
        day: 2,
        year: 2018,
        hours: 20,
        milliseconds: 11,
        minutes: 46,
        month: 0,
        seconds: 2
      }
    }]
  };

  // exposed methods
  return {
    data: data
  };

})();
