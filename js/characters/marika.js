var marika = (function() {

  var data = {
    awesomeSheet: {
      awesome: true,
      version: 5.91
    },
    basics: {
      character: {
        name: "Marika Spandrell",
        race: "Human",
        alignment: "Chaotic Neutral",
        deity: "",
        height: "5’3",
        weight: "98 lb",
        age: "23",
        gender: "Female",
        hero_points: 1,
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
          level: 9,
          hp: {
            base: 42,
            favoured: 9,
            current: ""
          },
          ranks: {
            base: 72,
            favoured: "",
            current: ""
          },
          bab: 6,
          name: "Rogue",
          saves: {
            fortitude: 3,
            reflex: 6,
            will: 3
          }
        }],
        string: "Rogue 9"
      },
      experience: {
        level: {
          current: "",
          class_total: ""
        },
        next_level: "",
        needed: "",
        total: 76000,
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
        racial: "",
        magical: ""
      }
    },
    statistics: {
      stats: {
        str: {
          modifier: "",
          base: 12,
          enhancement: 4,
          misc: "",
          racial: "",
          temp: "",
          current: ""
        },
        dex: {
          modifier: "",
          base: 20,
          enhancement: 4,
          misc: "",
          racial: 2,
          temp: "",
          current: ""
        },
        con: {
          modifier: "",
          base: 10,
          enhancement: 4,
          misc: "",
          racial: "",
          temp: "",
          current: ""
        },
        int: {
          modifier: "",
          base: 12,
          enhancement: "",
          misc: "",
          racial: "",
          temp: "",
          current: ""
        },
        wis: {
          modifier: "",
          base: 12,
          enhancement: "",
          misc: "",
          racial: "",
          temp: "",
          current: ""
        },
        cha: {
          modifier: "",
          base: 9,
          enhancement: "",
          misc: "",
          racial: "",
          temp: "",
          current: ""
        }
      },
      abilities: {
        all: [{
          name: "Bonus Feat",
          note: "Humans select one extra feat at 1st level.",
          index: false
        }, {
          name: "Improved Uncanny Dodge",
          note: "(Ex)&nbsp; A rogue of 8th level or higher can no longer be flanked.",
          index: false
        }, {
          name: "Languages",
          note: "Humans begin play speaking Common. Humans with high Intelligence scores can choose any languages they want (except secret languages, such as Druidic).",
          index: false
        }, {
          name: "Medium",
          note: "Humans are Medium creatures and have no bonuses or penalties due to their size.",
          index: false
        }, {
          name: "Normal Speed",
          note: "Humans have a base speed of 30 feet.",
          index: false
        }, {
          name: "Rogue Talents - Fast Fingers",
          note: "Once per day, a rogue with this talent can roll two dice while making a Sleight of Hand check and take the better result. She must choose to use this talent before making the Sleight of Hand check. A rogue can use this ability one additional time per day for every 5 rogue levels she possesses.",
          index: false
        }, {
          name: "Rogue Talents - Fast Stealth",
          note: "(Ex) This ability allows a rogue to move at full speed using the Stealth skill without penalty.",
          index: false
        }, {
          name: "Rogue Talents - Major Magic (Unseen Servant)",
          note: "(Sp) A rogue with this talent gains the ability to cast a 1st-level spell from the sorcerer/wizard spell list two times a day as a spell-like ability. The caster level for this ability is equal to the rogue's level. The save DC for this spell is 11 + the rogue's Intelligence modifier. The rogue must have an Intelligence of at least 11 to select this talent. A rogue must have the minor magic rogue talent before choosing this talent.",
          index: false
        }, {
          name: "Rogue Talents - Minor Magic (Mage Hand)",
          note: "(Sp) A rogue with this talent gains the ability to cast a 0-level spell from the sorcerer/wizard spell list. This spell can be cast three times a day as a spell-like ability. The caster level for this ability is equal to the rogue's level. The save DC for this spell is 10 + the rogue's Intelligence modifier. The rogue must have an Intelligence of at least 10 to select this talent.",
          index: false
        }, {
          name: "Rogue Talents - Powerful Sneak",
          note: "(Ex) Whenever a rogue with this talent takes a full attack action, she can elect to take a –2 penalty on all attack rolls until the start of her next turn. If an attack during this time is a sneak attack, she treats all 1s on the sneak attack damage dice as 2s.",
          index: false
        }, {
          name: "Skilled",
          note: "Humans gain an additional skill rank at first level and one additional rank whenever they gain a level.",
          index: false
        }, {
          name: "Sneak Attack +5d6",
          note: "If a rogue can catch an opponent when he is unable to defend himself effectively from her attack, she can strike a vital spot for extra damage.<br><br>The rogue's attack deals extra damage anytime her target would be denied a Dexterity bonus to AC (whether the target actually has a Dexterity bonus or not), or when the rogue flanks her target. This extra damage is 1d6 at 1st level, and increases by 1d6 every two rogue levels thereafter. Should the rogue score a critical hit with a sneak attack, this extra damage is not multiplied. Ranged attacks can count as sneak attacks only if the target is within 30 feet.<br><br>With a weapon that deals nonlethal damage (like a sap, whip, or an unarmed strike), a rogue can make a sneak attack that deals nonlethal damage instead of lethal damage. She cannot use a weapon that deals lethal damage to deal nonlethal damage in a sneak attack, not even with the usual –4 penalty.<br><br>The rogue must be able to see the target well enough to pick out a vital spot and must be able to reach such a spot. A rogue cannot sneak attack while striking a creature with concealment.",
          index: false
        }, {
          name: "Trap Sense +3",
          note: "(Ex) At 3rd level, a rogue gains an intuitive sense that alerts her to danger from traps, giving her a +1 bonus on Reflex saves made to avoid traps and a +1 dodge bonus to AC against attacks made by traps. These bonuses rise to +2 when the rogue reaches 6th level, to +3 when she reaches 9th level, to +4 when she reaches 12th level, to +5 at 15th, and to +6 at 18th level.<br><br>Trap sense bonuses gained from multiple classes stack.",
          index: false
        }, {
          name: "Trapfinding",
          note: "A rogue adds 1/2 her level to Perception skill checks made to locate traps and to Disable Device skill checks (minimum +1). A rogue can use Disable Device to disarm magic traps.",
          index: false
        }, {
          name: "Uncanny Dodge",
          note: "(Ex) Starting at 4th level, a rogue can react to danger before her senses would normally allow her to do so. She cannot be caught flat-footed, nor does she lose her Dex bonus to AC if the attacker is invisible. She still loses her Dexterity bonus to AC if immobilized. A rogue with this ability can still lose her Dexterity bonus to AC if an opponent successfully uses the feint action (see Combat) against her.<br><br>If a rogue already has uncanny dodge from a different class, she automatically gains improved uncanny dodge (see below) instead.",
          index: false
        }],
        notes: ""
      },
      power: {
        all: []
      },
      feats: {
        all: [{
          name: "Deft Hands",
          note: "",
          index: 295
        }, {
          name: "Double Slice",
          note: "",
          index: 368
        }, {
          name: "Extra Rogue Talent",
          note: "",
          index: 476
        }, {
          name: "Improved Two-Weapon Fighting",
          note: "",
          index: 756
        }, {
          name: "Two-Weapon Fighting",
          note: "",
          index: 1396
        }, {
          name: "Weapon Finesse",
          note: "",
          index: 1448
        }],
        notes: ""
      },
      traits: {
        all: [{
          name: "Child of the Streets",
          note: "",
          index: 179
        }, {
          name: "Deft Dodger",
          note: "",
          index: 258
        }],
        notes: ""
      },
      languages: {
        all: [{
          name: "Common",
          note: "",
          index: 5
        }, {
          name: "Giant",
          note: "",
          index: 10
        }, {
          name: "Goblin",
          note: "",
          index: 12
        }],
        notes: ""
      }
    },
    equipment: {
      possessions: {
        gear: "Large Black Backpack, Bedroll, Silk Rope, Pencils, Ink, Paper, Sketch Book, Grappling Hook, Flint and Steel, Torch, Masterwork Thieves’ Tools (+2 Disable Device), Magnifying Glass (+2 Appraise), Merchant’s Scale (+2 Appraise), Trail Rations, Bread, Cheese and Wine.",
        magic_gear: "Rapier +2 (Flaming Crystal), Short Sword +2 (Frost Crystal), Studded Leather +2, Belt of Dexterity +4, Cloak of Resistance +2, Spider Climb Pendent 1/day, Ring of Protection +1, Eyes of the Eagle, Handy Haversack.",
        potion_vials_oils: "Cure Light Wounds (6) Cure Moderate Wounds (3), Cure Serious Wounds (2), BarkSkin (5), Shield of Faith (2)",
        scrolls: ""
      },
      armor: {
        armor: {
          name: "Mithral Chain Shirt +2",
          check_penalty: 0,
          max_dex: 6,
          weight: "25lbs",
          arcane_spell_failure: 10,
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
        belts: "Belt of physical perfection +4",
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
        shoulders: "Cloak of Resistance +3",
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
          total: 10,
          used: "",
          name: "Slippers of Spider Climbing"
        }]
      },
      wealth: {
        platinum: 231,
        gold: 19763,
        silver: 232,
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
          armor: 6,
          shield: "",
          deflect: 2,
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
        notes: "+3 dodge bonus to AC against attacks made by traps."
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
          resistance: 3,
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
          resistance: 3,
          feat: "",
          trait: 1,
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
          resistance: 3,
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
        notes: "+3 bonus on Reflex saves made to avoid traps."
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
        notes: "",
        melee: {
          all: [{
            weapon: "Rapier +2",
            attack: "+16",
            damage: "1d6+3",
            critical: "18–20/x2",
            type: "Piercing",
            equipped: false
          }, {
            weapon: "Short Sword +2",
            attack: "+16",
            damage: "1d6+3",
            critical: "19–20/x2",
            type: "Piercing",
            equipped: false
          }, {
            weapon: "Rapier +2 / Short Sword +2",
            attack: "+14/+9/+14/+9",
            damage: "1d6+3",
            critical: "19–20/x2 / 18–20/x2 / 19–20/x2 / 18–20/x2",
            type: "Piercing",
            equipped: true
          }]
        },
        ranged: {
          all: [{
            weapon: "Shortbow +1",
            attack: "+15",
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
        all: [{
          name: "Disable Device Trap",
          ranks: 9,
          misc: 4,
          current: "",
          racial: "",
          trait: "",
          feat: "",
          bonuses: {
            str: false,
            dex: true,
            con: false,
            int: false,
            wis: false,
            cha: false,
            class_skill: true,
            level: false,
            half_level: true,
            check_penalty: false,
            size_stealth: false,
            size_fly: false
          }
        }, {
          name: "Perception Trap",
          ranks: 9,
          misc: 5,
          current: "",
          racial: "",
          trait: "",
          feat: "",
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: true,
            cha: false,
            class_skill: true,
            level: false,
            half_level: true,
            check_penalty: false,
            size_stealth: false,
            size_fly: false
          }
        }]
      },
      default: {
        acrobatics: {
          ranks: 9,
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
        appraise: {
          ranks: 9,
          misc: 4,
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
            class_skill: true,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        bluff: {
          ranks: 9,
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
            class_skill: true,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        climb: {
          ranks: "",
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
            class_skill: false,
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
          ranks: 9,
          misc: 2,
          racial: "",
          feat: 2,
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
            class_skill: true,
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
          ranks: 9,
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
        fly: {
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
        knowledge_dungeoneering: {
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
          ranks: 9,
          misc: 5,
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
            class_skill: true,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        perform_1: {
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
        sense_motive: {
          ranks: 9,
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
            class_skill: true,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        sleight_of_hand: {
          ranks: 9,
          misc: 1,
          racial: "",
          feat: 2,
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
            class_skill: true,
            level: false,
            half_level: false,
            check_penalty: true
          }
        },
        spellcraft: {
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
        stealth: {
          ranks: 9,
          misc: 5,
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
          ranks: "",
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
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: true
          }
        },
        use_magic_device: {
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
            level: false,
            half_level: false
          }
        },
        school: "",
        opposition: "",
        domains: "",
        bloodline: "",
        notes: ""
      },
      book: {
        level_0: {
          per_day: "",
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
              int: false,
              wis: false,
              cha: false,
              level: false,
              half_level: false,
              spell_level: false,
              plus_ten: false
            }
          },
          all: [{
            name: "Mage Hand",
            note: "",
            prepared: 3,
            active: false,
            cast: 0,
            index: 1491
          }]
        },
        level_1: {
          per_day: "",
          known: "",
          bonus: "",
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
              int: false,
              wis: false,
              cha: false,
              level: false,
              half_level: false,
              spell_level: false,
              plus_ten: false
            }
          },
          all: [{
            name: "Unseen Servant",
            note: "",
            prepared: 2,
            active: false,
            cast: 0,
            index: 2677
          }]
        },
        level_2: {
          per_day: "",
          known: "",
          bonus: "",
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
        level_3: {
          per_day: "",
          known: "",
          bonus: "",
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
        all: []
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
