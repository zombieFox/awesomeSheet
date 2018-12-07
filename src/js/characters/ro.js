var ro = (function() {

  var data = {
    awesomeSheet: {
      awesome: true,
      version: 5.91
    },
    basics: {
      character: {
        name: "Ro Flint",
        race: "Elf",
        alignment: "Lawful Evil",
        deity: "",
        height: "6'0",
        weight: "",
        age: "120",
        gender: "Male",
        hero_points: "",
        description: "",
        size: {
          category: "Medium",
          modifier: {
            base: "",
            special: "",
            fly: "",
            stealth: ""
          }
        }
      },
      classes: {
        all: [{
          level: 7,
          hp: {
            base: 31,
            favoured: 7,
            current: ""
          },
          ranks: {
            base: 14,
            favoured: "",
            current: ""
          },
          bab: 5,
          name: "Bladebound Magus",
          saves: {
            fortitude: 6,
            reflex: 2,
            will: 6
          }
        }],
        string: "Bladebound Magus 7"
      },
      experience: {
        level: {
          current: "",
          class_total: ""
        },
        next_level: "",
        needed: "",
        total: 29090,
        advancement: "Medium"
      },
      initiative: {
        misc: "",
        temp: "",
        feat: "",
        trait: "",
        current: "",
        bonuses: {
          str: false,
          dex: true,
          con: false,
          int: false,
          wis: false,
          cha: false,
          level: false,
          half_level: false
        }
      },
      speed: {
        land: "30ft",
        fly: "",
        maneuverability: "",
        swim: "",
        climb: "",
        burrow: ""
      },
      image: {
        uploaded: false,
        background: "",
        color: {
          r: "",
          g: "",
          b: ""
        },
        data: "",
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
      },
      senses: {
        racial: "Low-Light Vision",
        magical: ""
      }
    },
    statistics: {
      stats: {
        str: {
          modifier: "",
          base: 12,
          enhancement: "",
          misc: "",
          racial: "",
          temp: "",
          current: ""
        },
        dex: {
          modifier: "",
          base: 17,
          enhancement: 2,
          misc: "",
          racial: 2,
          temp: "",
          current: ""
        },
        con: {
          modifier: "",
          base: 12,
          enhancement: "",
          misc: "",
          racial: -2,
          temp: "",
          current: ""
        },
        int: {
          modifier: "",
          base: 14,
          enhancement: 2,
          misc: "",
          racial: 2,
          temp: "",
          current: ""
        },
        wis: {
          modifier: "",
          base: 10,
          enhancement: "",
          misc: "",
          racial: "",
          temp: "",
          current: ""
        },
        cha: {
          modifier: "",
          base: 7,
          enhancement: "",
          misc: "",
          racial: "",
          temp: "",
          current: ""
        }
      },
      abilities: {
        all: [{
          name: "Elven Immunities",
          note: "Elves are immune to magic sleep effects and get a +2 racial saving throw bonus against enchantment spells and effects.",
          index: false
        }, {
          name: "Low-Light Vision",
          note: "Elves can see twice as far as humans in conditions of dim light.",
          index: false
        }, {
          name: "Elven Magic",
          note: "Elves receive a +2 racial bonus on caster level checks made to overcome spell resistance. In addition, elves receive a +2 racial bonus on Spellcraft skill checks made to identify the properties of magic items.",
          index: false
        }, {
          name: "Keen Senses",
          note: "Elves receive a +2 racial bonus on Perception skill checks.",
          index: false
        }, {
          name: "Weapon Familiarity",
          note: "Elves are proficient with longbows (including composite longbows), longswords, rapiers, and shortbows (including composite shortbows), and treat any weapon with the word \"elven\" in its name as a martial weapon.",
          index: false
        }, {
          name: "Languages",
          note: "Elves begin play speaking Common and Elven. Elves with high Intelligence scores can choose from the following: Celestial, Draconic, Gnoll, Gnome, Goblin, Orc, and Sylvan.",
          index: false
        }, {
          name: "Arcane Pool",
          note: "(Su) At 1st level, the magus gains a reservoir of mystical arcane energy that he can draw upon to fuel his powers and enhance his weapon. This arcane pool has a number of points equal to 1/2 his magus level (minimum 1) + his Intelligence modifier. The pool refreshes once per day when the magus prepares his spells.<br><br>At 1st level, a magus can expend 1 point from his arcane pool as a swift action to grant any weapon he is holding a +1 enhancement bonus for 1 minute. For every four levels beyond 1st, the weapon gains another +1 enhancement bonus, to a maximum of +5 at 17th level. These bonuses can be added to the weapon, stacking with existing weapon enhancement to a maximum of +5. Multiple uses of this ability do not stack with themselves.</div><br><br>At 5th level, these bonuses can be used to add any of the following weapon properties: dancing, flaming, flaming burst, frost, icy burst, keen, shock, shocking burst, speed, or vorpal. Adding these properties consumes an amount of bonus equal to the property's base price modifier (see the Magic Weapon Special Ability Descriptions). These properties are added to any the weapon already has, but duplicates do not stack. If the weapon is not magical, at least a +1 enhancement bonus must be added before any other properties can be added. These bonuses and properties are decided when the arcane pool point is spent and cannot be changed until the next time the magus uses this ability. These bonuses do not function if the weapon is wielded by anyone other than the magus.</div><br><br>A magus can only enhance one weapon in this way at one time. If he uses this ability again, the first use immediately ends.</div>",
          index: false
        }, {
          name: "Cantrips",
          note: "A magus can prepare a number of cantrips, or 0-level spells, each day, as noted in the table above under “Spells per Day.” These spells are cast like any other spell, but they are not expended when cast and may be used again.",
          index: false
        }, {
          name: "Spell Combat",
          note: "(Ex) At 1st level, a magus learns to cast spells and wield his weapons at the same time. This functions much like two-weapon fighting, but the off-hand weapon is a spell that is being cast. To use this ability, the magus must have one hand free (even if the spell being cast does not have somatic components), while wielding a light or one-handed melee weapon in the other hand. As a full-round action, he can make all of his attacks with his melee weapon at a –2 penalty and can also cast any spell from the magus spell list with a casting time of 1 standard action (any attack roll made as part of this spell also takes this penalty). If he casts this spell defensively, he can decide to take an additional penalty on his attack rolls, up to his Intelligence bonus, and add the same amount as a circumstance bonus on his concentration check. If the check fails, the spell is wasted, but the attacks still take the penalty. A magus can choose to cast the spell first or make the weapon attacks first, but if he has more than one attack, he cannot cast the spell between weapon attacks.",
          index: false
        }, {
          name: "Black Blade",
          note: "(Ex) At 3rd level, the bladebound magus' gains a powerful sentient weapon called a black blade, whose weapon type is chosen by the magus. A magus with this class feature cannot take the familiar magus arcana, and cannot have a familiar of any kind, even from another class.<br><br>Instead of the normal arcane pool amount, the bladebound magus's arcane pool has a number of points equal to 1/3 his level (minimum 1) plus his Intelligence bonus. This ability changes the Arcane Pool class feature and replaces the magus arcana gained at 3rd level.</div>",
          index: false
        }, {
          name: "Black Blade Strike",
          note: "(Sp) As a free action, the magus can spend a point from the black blade's arcane pool to grant the black blade a +1 bonus on damage rolls for 1 minute. For every four levels beyond 1st, this ability gives the black blade another +1 on damage rolls.",
          index: false
        }, {
          name: "Telepathy",
          note: "(Su) While a magus is wielding or carrying his black blade, he can communicate telepathically with the blade in a language that the magus and the black blade share.",
          index: false
        }, {
          name: "Unbreakable",
          note: "(Ex) As long as it has at least 1 point in its arcane pool, a black blade is immune to the broken condition. If broken, the black blade is unconscious and powerless until repaired. If destroyed, the black blade can be reforged 1 week later through a special ritual that costs 200 gp per magus level. The ritual takes 24 hours to complete.",
          index: false
        }, {
          name: "Energy Attunement",
          note: "(Su) At 5th level, as a free action, a magus can spend a point of his black blade's arcane pool to have it deal one of the following types of damage instead of weapon damage: cold, electricity, or fire. He can spend 2 points from the black blade's arcane pool to deal sonic or force damage instead of weapon damage. This effect lasts until the start of the magus's next turn.",
          index: false
        }, {
          name: "Magus Arcana - Arcane Accuracy",
          note: "(Su) The magus can expend 1 point from his arcane pool as a swift action to grant himself an insight bonus equal to his Intelligence bonus on all attack rolls until the end of his turn.",
          index: false
        }, {
          name: "Spell Recall",
          note: "(Su) At 4th level, the magus learns to use his arcane pool to recall spells he has already cast. With a swift action he can recall any single magus spell that he has already prepared and cast that day by expending a number of points from his arcane pool equal to the spell's level (minimum 1). The spell is prepared again, just as if it had not been cast.",
          index: false
        }, {
          name: "Knowledge Pool",
          note: "(Su) At 7th level, when a magus prepares his magus spells, he can decide to expend 1 or more points from his arcane pool, up to his Intelligence bonus. For each point he expends, he can treat any one spell from the magus spell list as if it were in his spellbook and can prepare that spell as normal that day. If he does not cast spells prepared in this way before the next time he prepares spells, he loses those spells. He can also cast spells added in this way using his spell recall ability, but only until he prepares spells again.",
          index: false
        }, {
          name: "Medium Armor",
          note: "(Ex) At 7th level, a magus gains proficiency with medium armor. A magus can cast magus spells while wearing medium armor without incurring the normal arcane spell failure chance. Like any other arcane spellcaster, a magus wearing heavy armor or using a shield incurs a chance of arcane spell failure if the spell in question has a somatic component.",
          index: false
        }],
        notes: ""
      },
      power: {
        all: [{
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
      feats: {
        all: [{
          name: "Weapon Finesse",
          note: "",
          index: 1448
        }, {
          name: "Dervish Dance",
          note: "",
          index: 308
        }, {
          name: "Alertness",
          note: "",
          index: 20
        }, {
          name: "Extra Arcane Pool",
          note: "",
          index: 454
        }, {
          name: "Weapon Focus",
          note: "Black Blade",
          index: 1450
        }, {
          name: "Intensified Spell",
          note: "",
          index: 776
        }],
        notes: ""
      },
      traits: {
        all: [{
          name: "Magical Lineage",
          note: "Shocking Grasp",
          index: 624
        }, {
          name: "Focused Mind",
          note: "",
          index: 402
        }],
        notes: ""
      },
      languages: {
        all: [{
          name: "Common",
          note: "",
          index: 5
        }, {
          name: "Draconic",
          note: "",
          index: 6
        }, {
          name: "Dwarven",
          note: "",
          index: 8
        }, {
          name: "Elven",
          note: "",
          index: 9
        }, {
          name: "Orc",
          note: "",
          index: 17
        }],
        notes: ""
      }
    },
    equipment: {
      possessions: {
        gear: "Fur coat and cold weather outfit, Rapier, Spell component pouch, Spellbook, Backpack, Flask of Oil x3, Pouch (belt), Sack, Candle, Flint and Steel, Tindertwig, Rations (5 days), Waterskin, Bedroll, Blanket, Rope (silk), Mirror, Compass, Ink, Inkpen, Paper sheets, Case for maps/scrolls, Tent for 2, Trained Donkey (commands: come, down, stay heal, work)",
        magic_gear: "",
        potion_vials_oils: "Alchemist Fire (3), Potion of CLW (3)",
        scrolls: ""
      },
      armor: {
        armor: {
          name: "Mithral Chain Shirt +1",
          check_penalty: "",
          max_dex: "",
          weight: "",
          arcane_spell_failure: "",
          notes: ""
        },
        shield: {
          name: "",
          check_penalty: "",
          max_dex: "",
          weight: "",
          arcane_spell_failure: "",
          notes: ""
        },
        stats: {
          check_penalty: {
            current: ""
          },
          max_dex: {
            current: ""
          },
          arcane_spell_failure: {
            current: ""
          }
        }
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
        str: "",
        carry_move: {
          light: "",
          medium: "",
          heavy: "",
          lift: "",
          drag: ""
        }
      },
      consumable: {
        all: [{
          current: "",
          total: 3,
          used: "",
          name: "Alchemist Fire"
        }, {
          current: "",
          total: 3,
          used: "",
          name: "Potion of CLW"
        }]
      },
      wealth: {
        platinum: "",
        gold: 1570,
        silver: "",
        copper: "",
        total: ""
      }
    },
    defense: {
      hp: {
        total: "",
        temp: "",
        damage: "",
        non_lethal_damage: "",
        current: "",
        notes: ""
      },
      ac: {
        armor_class: {
          misc: "",
          temp: "",
          current: "",
          bonuses: {
            str: false,
            dex: true,
            con: false,
            int: false,
            wis: false,
            cha: false,
            plus_ten: true,
            armor: true,
            shield: true,
            deflect: true,
            dodge: true,
            natural: true,
            size_base: true,
            max_dex: true,
            ac_temp: true,
            ac_misc: true,
            ac_enhancement: true,
            ac_insight: true,
            ac_luck: true,
            ac_profane: true,
            ac_sacred: true,
            ac_trait: true
          }
        },
        flat_footed: {
          misc: "",
          temp: "",
          current: "",
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: false,
            cha: false,
            plus_ten: true,
            armor: true,
            shield: true,
            deflect: true,
            natural: true,
            size_base: true,
            dodge: false,
            ac_temp: true,
            ac_misc: true,
            ac_enhancement: true,
            ac_insight: true,
            ac_luck: true,
            ac_profane: true,
            ac_sacred: true,
            ac_trait: true
          }
        },
        touch: {
          misc: "",
          temp: "",
          current: "",
          bonuses: {
            str: false,
            dex: true,
            con: false,
            int: false,
            wis: false,
            cha: false,
            plus_ten: true,
            deflect: true,
            dodge: true,
            size_base: true,
            max_dex: true,
            armor: false,
            shield: false,
            natural: false,
            ac_temp: true,
            ac_misc: true,
            ac_insight: true,
            ac_luck: true,
            ac_profane: true,
            ac_sacred: true,
            ac_trait: true
          }
        },
        stats: {
          armor: 5,
          shield: "",
          deflect: "",
          dodge: "",
          natural: "",
          temp: "",
          misc: "",
          enhancement: "",
          insight: "",
          luck: "",
          profane: "",
          sacred: "",
          trait: ""
        },
        notes: ""
      },
      cmd: {
        misc: "",
        temp: "",
        current: "",
        notes: "",
        bonuses: {
          str: true,
          dex: true,
          con: false,
          int: false,
          wis: false,
          cha: false,
          bab: true,
          size_special: true,
          level: false,
          half_level: false,
          plus_ten: true,
          dodge: true,
          deflect: true
        }
      },
      saves: {
        fortitude: {
          base: "",
          resistance: 1,
          feat: "",
          trait: "",
          misc: "",
          temp: "",
          current: "",
          bonuses: {
            str: false,
            dex: false,
            con: true,
            int: false,
            wis: false,
            cha: false,
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
            str: false,
            dex: true,
            con: false,
            int: false,
            wis: false,
            cha: false,
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
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: true,
            cha: false,
            level: false,
            half_level: false
          }
        },
        notes: "Immune to sleep effects, +2 against enchantment spells and effects, +7 against cold weather"
      },
      dr: {
        feat: "",
        trait: "",
        misc: "",
        temp: "",
        overcome: "",
        current: "",
        notes: "",
        bonuses: {
          str: false,
          dex: false,
          con: false,
          int: false,
          wis: false,
          cha: false,
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
        notes: "",
        bonuses: {
          str: false,
          dex: false,
          con: false,
          int: false,
          wis: false,
          cha: false,
          level: false,
          half_level: false
        }
      },
      resistance: {
        feat: "",
        trait: "",
        misc: "",
        temp: "",
        current: "",
        notes: "",
        bonuses: {
          str: false,
          dex: false,
          con: false,
          int: false,
          wis: false,
          cha: false,
          level: false,
          half_level: false
        }
      }
    },
    offense: {
      stats: {
        base_attack: {
          bonus: "",
          string: ""
        },
        melee: {
          misc: "",
          temp: "",
          current: "",
          bonuses: {
            str: true,
            dex: false,
            con: false,
            int: false,
            wis: false,
            cha: false,
            bab: true,
            size_base: true,
            level: false,
            half_level: false
          }
        },
        ranged: {
          misc: "",
          temp: "",
          current: "",
          bonuses: {
            str: false,
            dex: true,
            con: false,
            int: false,
            wis: false,
            cha: false,
            bab: true,
            size_base: true,
            level: false,
            half_level: false
          }
        }
      },
      cmb: {
        misc: "",
        temp: "",
        current: "",
        notes: "",
        bonuses: {
          str: true,
          dex: false,
          con: false,
          int: false,
          wis: false,
          cha: false,
          bab: true,
          size_special: true,
          level: false,
          half_level: false
        }
      },
      attack: {
        notes: "1 Arcane pool point = Arcane Accuracy +4 to attack or +2 or +1 and Keen",
        melee: {
          all: [{
            weapon: "Shortsword +1",
            attack: "+11",
            damage: "1d6+2",
            critical: "18–20/x2",
            type: "Piercing",
            equipped: false
          }, {
            weapon: "Black Blade Scimitar +2",
            attack: "+13",
            damage: "1d6+7",
            critical: "18–20/x2",
            type: "Slashing",
            equipped: true
          }, {
            weapon: "Spellstrike",
            attack: "+13",
            damage: "1d6+7",
            critical: "18–20/x2",
            type: "Slashing",
            equipped: false
          }, {
            weapon: "Black Blade Scimitar +2/Spell Strike",
            attack: "+11/+11",
            damage: "1d6+7/Spell Effect",
            critical: "18–20/x2, 18–20/x2",
            type: "Slashing, Slashing",
            equipped: false
          }, {
            weapon: "Black Blade Scimitar +3 Keen",
            attack: "+14",
            damage: "1d6+8",
            critical: "15-20x2",
            type: "Slashing",
            equipped: false
          }, {
            weapon: "Black Blade Scimitar +3 Keen/Spell Strike Keen",
            attack: "+12/+12",
            damage: "1d6+8/Spell Effect",
            critical: "15-20x2,  15-20x2",
            type: "Slashing",
            equipped: false
          }, {
            weapon: "Black Blade Scimitar +3 Arcane Accuracy Keen/Spell Strike Arcane Accuracy Keen",
            attack: "+16/+16",
            damage: "1d6+8/Spell Effect",
            critical: "15-20x2,  15-20x2",
            type: "Slashing",
            equipped: false
          }]
        },
        ranged: {
          all: [{
            weapon: "Shortbow",
            attack: "+10",
            damage: "1d6",
            critical: "x3",
            range: "60 ft",
            ammo: "50",
            type: "Piercing",
            equipped: false
          }]
        }
      }
    },
    skills: {
      ranks: {
        total: "",
        include_custom: false,
        current: ""
      },
      custom: {
        all: []
      },
      default: {
        acrobatics: {
          ranks: 4,
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: false,
          bonuses: {
            str: false,
            dex: true,
            con: false,
            int: false,
            wis: false,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: true
          }
        },
        appraise: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: false,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: true,
            wis: false,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        bluff: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: false,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: false,
            cha: true,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        climb: {
          ranks: 2,
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: false,
          bonuses: {
            str: true,
            dex: false,
            con: false,
            int: false,
            wis: false,
            cha: false,
            class_skill: true,
            level: false,
            half_level: false,
            check_penalty: true
          }
        },
        craft_1: {
          variant_name: "",
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: false,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: true,
            wis: false,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        craft_2: {
          variant_name: "",
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: false,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: true,
            wis: false,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        diplomacy: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: false,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: false,
            cha: true,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        disable_device: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: true,
          bonuses: {
            str: false,
            dex: true,
            con: false,
            int: false,
            wis: false,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: true
          }
        },
        disguise: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: false,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: false,
            cha: true,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        escape_artist: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: false,
          bonuses: {
            str: false,
            dex: true,
            con: false,
            int: false,
            wis: false,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: true
          }
        },
        fly: {
          ranks: 7,
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: false,
          bonuses: {
            str: false,
            dex: true,
            con: false,
            int: false,
            wis: false,
            cha: false,
            class_skill: true,
            level: false,
            half_level: false,
            check_penalty: true,
            size_fly: true
          }
        },
        handle_animal: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: true,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: false,
            cha: true,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        heal: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: false,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: true,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        intimidate: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: false,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: false,
            cha: true,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        knowledge_arcana: {
          ranks: 1,
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: true,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: true,
            wis: false,
            cha: false,
            class_skill: true,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        knowledge_dungeoneering: {
          ranks: 1,
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: true,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: true,
            wis: false,
            cha: false,
            class_skill: true,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        knowledge_engineering: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: true,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: true,
            wis: false,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        knowledge_geography: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: true,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: true,
            wis: false,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        knowledge_history: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: true,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: true,
            wis: false,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        knowledge_local: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: true,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: true,
            wis: false,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        knowledge_nature: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: true,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: true,
            wis: false,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        knowledge_nobility: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: true,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: true,
            wis: false,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        knowledge_planes: {
          ranks: 1,
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: true,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: true,
            wis: false,
            cha: false,
            class_skill: true,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        knowledge_religion: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: true,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: true,
            wis: false,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        linguistics: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: true,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: true,
            wis: false,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        perception: {
          ranks: 7,
          misc: 2,
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: false,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: true,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        perform_1: {
          variant_name: "Dance",
          ranks: 2,
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: false,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: false,
            cha: true,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        perform_2: {
          variant_name: "",
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: false,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: false,
            cha: true,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        profession_1: {
          variant_name: "",
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: true,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: true,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        profession_2: {
          variant_name: "",
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: true,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: true,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        ride: {
          ranks: 1,
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: false,
          bonuses: {
            str: false,
            dex: true,
            con: false,
            int: false,
            wis: false,
            cha: false,
            class_skill: true,
            level: false,
            half_level: false,
            check_penalty: true
          }
        },
        sense_motive: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: false,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: true,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        sleight_of_hand: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: true,
          bonuses: {
            str: false,
            dex: true,
            con: false,
            int: false,
            wis: false,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: true
          }
        },
        spellcraft: {
          ranks: 7,
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: true,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: true,
            wis: false,
            cha: false,
            class_skill: true,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        stealth: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: false,
          bonuses: {
            str: false,
            dex: true,
            con: false,
            int: false,
            wis: false,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: true,
            size_stealth: true
          }
        },
        survival: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: false,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: true,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        swim: {
          ranks: 2,
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: false,
          bonuses: {
            str: true,
            dex: false,
            con: false,
            int: false,
            wis: false,
            cha: false,
            class_skill: true,
            level: false,
            half_level: false,
            check_penalty: true
          }
        },
        use_magic_device: {
          ranks: 7,
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: true,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: false,
            cha: true,
            class_skill: true,
            level: false,
            half_level: false,
            check_penalty: false
          }
        }
      },
      stats: {
        notes: ""
      }
    },
    spells: {
      stats: {
        concentration: {
          misc: "",
          temp: "",
          racial: "",
          feat: "",
          trait: 2,
          current: "",
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: true,
            wis: false,
            cha: false,
            level: true,
            half_level: false
          }
        },
        caster_level_check: {
          misc: "",
          temp: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: false,
            cha: false,
            level: true,
            half_level: false
          }
        },
        school: "",
        opposition: "",
        domains: "",
        bloodline: "",
        notes: "+2 on caster level checks to overcome spell resistance."
      },
      book: {
        level_0: {
          per_day: 5,
          known: "",
          bonus: "",
          dc: {
            spell_level: 0,
            misc: "",
            temp: "",
            feat: "",
            trait: "",
            current: "",
            bonuses: {
              str: false,
              dex: false,
              con: false,
              int: true,
              wis: false,
              cha: false,
              level: false,
              half_level: false,
              spell_level: true,
              plus_ten: true
            }
          },
          all: [{
            name: "Acid Splash",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 23
          }, {
            name: "Arcane Mark",
            note: "",
            prepared: 1,
            active: false,
            cast: 0,
            index: 135
          }, {
            name: "Dancing Lights",
            note: "",
            prepared: 1,
            active: false,
            cast: 0,
            index: 608
          }, {
            name: "Daze",
            note: "",
            prepared: 1,
            active: false,
            cast: 0,
            index: 620
          }, {
            name: "Detect Magic",
            note: "",
            prepared: 1,
            active: false,
            cast: 0,
            index: 691
          }, {
            name: "Disrupt Undead",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 748
          }, {
            name: "Flare",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 975
          }, {
            name: "Ghost Sound",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 1074
          }, {
            name: "Light",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 1431
          }, {
            name: "Mage Hand",
            note: "",
            prepared: 1,
            active: false,
            cast: 0,
            index: 1491
          }, {
            name: "Open/Close",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 1696
          }, {
            name: "Prestidigitation",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 1835
          }, {
            name: "Ray of Frost",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 1916
          }, {
            name: "Read Magic",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 1918
          }, {
            name: "Spark",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 2267
          }]
        },
        level_1: {
          per_day: 4,
          known: "",
          bonus: 1,
          dc: {
            spell_level: 1,
            misc: "",
            temp: "",
            feat: "",
            trait: "",
            current: "",
            bonuses: {
              str: false,
              dex: false,
              con: false,
              int: true,
              wis: false,
              cha: false,
              level: false,
              half_level: false,
              spell_level: true,
              plus_ten: true
            }
          },
          all: [{
            name: "Color Spray",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 463
          }, {
            name: "Grease",
            note: "",
            prepared: 1,
            active: false,
            cast: 0,
            index: 1117
          }, {
            name: "Shocking Grasp",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 2200
          }, {
            name: "True Strike",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 2627
          }, {
            name: "Magic Missile",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 1511
          }, {
            name: "Shield",
            note: "",
            prepared: 1,
            active: false,
            cast: 0,
            index: 2181
          }, {
            name: "Vanish",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 2692
          }, {
            name: "Obscuring Mist",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 1688
          }, {
            name: "Chill Touch",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 432
          }, {
            name: "Frostbite",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 1046
          }, {
            name: "Infernal Healing",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 1299
          }, {
            name: "Windy Escape",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 2801
          }, {
            name: "Unerring Weapon",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 2658
          }, {
            name: "Ray Of Enfeeblement",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 1914
          }, {
            name: "Burning Hands",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 353
          }, {
            name: "Expeditious Retreat",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 892
          }, {
            name: "Shocking Grasp Intensified",
            note: "",
            prepared: 3,
            active: false,
            cast: 0,
            index: 2200
          }]
        },
        level_2: {
          per_day: 3,
          known: "",
          bonus: 1,
          dc: {
            spell_level: 2,
            misc: "",
            temp: "",
            feat: "",
            trait: "",
            current: "",
            bonuses: {
              str: false,
              dex: false,
              con: false,
              int: true,
              wis: false,
              cha: false,
              level: false,
              half_level: false,
              spell_level: true,
              plus_ten: true
            }
          },
          all: [{
            name: "Mirror Image",
            note: "",
            prepared: 2,
            active: false,
            cast: 0,
            index: 1606
          }, {
            name: "Frigid Touch",
            note: "",
            prepared: 2,
            active: false,
            cast: 0,
            index: 1043
          }, {
            name: "Glitterdust",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 1092
          }, {
            name: "Web",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 2781
          }, {
            name: "Scorching Ray",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 2072
          }, {
            name: "Pyrotechnics",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 1892
          }]
        },
        level_3: {
          per_day: 1,
          known: "",
          bonus: 1,
          dc: {
            spell_level: 3,
            misc: "",
            temp: "",
            feat: "",
            trait: "",
            current: "",
            bonuses: {
              str: false,
              dex: false,
              con: false,
              int: true,
              wis: false,
              cha: false,
              level: false,
              half_level: false,
              spell_level: true,
              plus_ten: true
            }
          },
          all: [{
            name: "Fly",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 996
          }, {
            name: "Haste",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 1150
          }, {
            name: "Force Hook Charge",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 1010
          }, {
            name: "Ray of Exhaustion",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 1915
          }, {
            name: "Vampiric Touch",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 2691
          }, {
            name: "Stinking Cloud",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 2344
          }, {
            name: "Slow",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 2239
          }]
        },
        level_4: {
          per_day: "",
          known: "",
          bonus: "",
          dc: {
            spell_level: 4,
            misc: "",
            temp: "",
            feat: "",
            trait: "",
            current: "",
            bonuses: {
              str: false,
              dex: false,
              con: false,
              int: false,
              wis: false,
              cha: false,
              level: false,
              half_level: false,
              spell_level: false,
              plus_ten: false
            }
          },
          all: []
        },
        level_5: {
          per_day: "",
          known: "",
          bonus: "",
          dc: {
            spell_level: 5,
            misc: "",
            temp: "",
            feat: "",
            trait: "",
            current: "",
            bonuses: {
              str: false,
              dex: false,
              con: false,
              int: false,
              wis: false,
              cha: false,
              level: false,
              half_level: false,
              spell_level: false,
              plus_ten: false
            }
          },
          all: []
        },
        level_6: {
          per_day: "",
          known: "",
          bonus: "",
          dc: {
            spell_level: 6,
            misc: "",
            temp: "",
            feat: "",
            trait: "",
            current: "",
            bonuses: {
              str: false,
              dex: false,
              con: false,
              int: false,
              wis: false,
              cha: false,
              level: false,
              half_level: false,
              spell_level: false,
              plus_ten: false
            }
          },
          all: []
        },
        level_7: {
          per_day: "",
          known: "",
          bonus: "",
          dc: {
            spell_level: 7,
            misc: "",
            temp: "",
            feat: "",
            trait: "",
            current: "",
            bonuses: {
              str: false,
              dex: false,
              con: false,
              int: false,
              wis: false,
              cha: false,
              level: false,
              half_level: false,
              spell_level: false,
              plus_ten: false
            }
          },
          all: []
        },
        level_8: {
          per_day: "",
          known: "",
          bonus: "",
          dc: {
            spell_level: 8,
            misc: "",
            temp: "",
            feat: "",
            trait: "",
            current: "",
            bonuses: {
              str: false,
              dex: false,
              con: false,
              int: false,
              wis: false,
              cha: false,
              level: false,
              half_level: false,
              spell_level: false,
              plus_ten: false
            }
          },
          all: []
        },
        level_9: {
          per_day: "",
          known: "",
          bonus: "",
          dc: {
            spell_level: 9,
            misc: "",
            temp: "",
            feat: "",
            trait: "",
            current: "",
            bonuses: {
              str: false,
              dex: false,
              con: false,
              int: false,
              wis: false,
              cha: false,
              level: false,
              half_level: false,
              spell_level: false,
              plus_ten: false
            }
          },
          all: []
        }
      }
    },
    notes: {
      character: {
        all: [{
          note: "Headband of Vast Intelligence +2 skill: Use Magic Device."
        }]
      },
      story: {
        all: []
      }
    },
    events: {
      all: []
    }
  };

  // exposed methods
  return {
    data: data
  };

})();
