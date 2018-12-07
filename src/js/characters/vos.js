var vos = (function() {

  var data = {
    awesomeSheet: {
      awesome: true,
      version: 5.91
    },
    basics: {
      character: {
        name: "Vos Thunderstomp",
        race: "Dwarf",
        alignment: "Chaotic Neutral",
        deity: "",
        height: "5'0",
        weight: "190 lbs",
        age: "40",
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
          level: 8,
          hp: {
            base: 38,
            favoured: 8,
            current: ""
          },
          ranks: {
            base: 32,
            favoured: "",
            current: ""
          },
          bab: 6,
          name: "Monk",
          saves: {
            fortitude: 6,
            reflex: 6,
            will: 6
          }
        }],
        string: "Monk 8"
      },
      experience: {
        level: {
          current: "",
          class_total: ""
        },
        next_level: "",
        needed: "",
        total: 51000,
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
        land: "50ft",
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
          base: 17,
          enhancement: 2,
          misc: "",
          racial: "",
          temp: "",
          current: ""
        },
        dex: {
          modifier: "",
          base: 14,
          enhancement: "",
          misc: "",
          racial: "",
          temp: "",
          current: ""
        },
        con: {
          modifier: "",
          base: 10,
          enhancement: "",
          misc: "",
          racial: 2,
          temp: "",
          current: ""
        },
        int: {
          modifier: "",
          base: 10,
          enhancement: "",
          misc: "",
          racial: "",
          temp: "",
          current: ""
        },
        wis: {
          modifier: "",
          base: 14,
          enhancement: 2,
          misc: "",
          racial: 2,
          temp: "",
          current: ""
        },
        cha: {
          modifier: "",
          base: 9,
          enhancement: "",
          misc: "",
          racial: -2,
          temp: "",
          current: ""
        }
      },
      abilities: {
        all: [{
          name: "AC Bonus +2",
          note: "(Ex) When unarmored and unencumbered, the monk adds his Wisdom bonus (if any) to his AC and his CMD. In addition, a monk gains a +1 bonus to AC and CMD at 4th level. This bonus increases by 1 for every four monk levels thereafter, up to a maximum of +5 at 20th level.",
          index: false
        }, {
          name: "Bonus Feats 3",
          note: "At 1st level, 2nd level, and every 4 levels thereafter, a monk may select a bonus feat. These feats must be taken from the following list: Catch Off-Guard, Combat Reflexes, Deflect Arrows, Dodge, Improved Grapple, Scorpion Style, and Throw Anything. At 6th level, the following feats are added to the list: Gorgon's Fist, Improved Bull Rush, Improved Disarm, Improved Feint, Improved Trip, and Mobility. At 10th level, the following feats are added to the list: Improved Critical, Medusa's Wrath, Snatch Arrows, and Spring Attack. A monk need not have any of the prerequisites normally required for these feats to select them.",
          index: false
        }, {
          name: "Darkvision",
          note: "Dwarves can see in the dark up to 60 feet.",
          index: false
        }, {
          name: "Defensive Training",
          note: "Dwarves get a +4 dodge bonus to AC against monsters of the giant subtype.",
          index: false
        }, {
          name: "Evasion",
          note: "(Ex) At 2nd level or higher, a monk can avoid damage from many area-effect attacks. If a monk makes a successful Reflex saving throw against an attack that normally deals half damage on a successful save, he instead takes no damage. Evasion can be used only if a monk is wearing light armor or no armor. A helpless monk does not gain the benefit of evasion.",
          index: false
        }, {
          name: "Fast Movement",
          note: "(Ex) At 3rd level, a monk gains an enhancement bonus to his land speed, as shown on Table: Monk. A monk in armor or carrying a medium or heavy load loses this extra speed.",
          index: false
        }, {
          name: "Flurry of Blows",
          note: "(Ex) Starting at 1st level, a monk can make a flurry of blows as a full-attack action. When doing so, he may make on additional attack, taking a -2 penalty on all of his attack rolls, as if using the Two-Weapon Fighting feat. These attacks can be any combination of unarmed strikes and attacks with a monk special weapon (he does not need to use two weapons to use this ability). For the purpose of these attacks, the monk's base attack bonus from his monk class levels is equal to his monk level. For all other purposes, such as qualifying for a feat or a prestige class, the monk uses his normal base attack bonus.<br><br>At 8th level, the monk can make two additional attacks when he uses flurry of blows, as if using Improved Two-Weapon Fighting (even if the monk does not meet the prerequisites for the feat).<br><br>At 15th level, the monk can make three additional attacks using flurry of blows, as if using Greater Two-Weapon Fighting (even if the monk does not meet the prerequisites for the feat).<br><br>A monk applies his full Strength bonus to his damage rolls for all successful attacks made with flurry of blows, whether the attacks are made with an off-hand or with a weapon wielded in both hands. A monk may substitute disarm, sunder, and trip combat maneuvers for unarmed attacks as part of a flurry of blows. A monk cannot use any weapon other than an unarmed strike or a special monk weapon as part of a flurry of blows. A monk with natural weapons cannot use such weapons as part of a flurry of blows, nor can he make natural attacks in addition to his flurry of blows attacks.",
          index: false
        }, {
          name: "Greed",
          note: "Dwarves receive a +2 racial bonus on Appraise skill checks made to determine the price of nonmagical goods that contain precious metals or gemstones.",
          index: false
        }, {
          name: "Hardy",
          note: "Dwarves receive a +2 racial bonus on saving throws against poison, spells, and spell-like abilities.",
          index: false
        }, {
          name: "Hatred",
          note: "Dwarves receive a +1 bonus on attack rolls against humanoid creatures of the orc and goblinoid subtypes due to special training against these hated foes.",
          index: false
        }, {
          name: "High Jump",
          note: "(Ex) At 5th level, a monk adds his level to all Acrobatics checks made to jump, both for vertical jumps and horizontal jumps. In addition, he always counts as having a running start when making jump checks using Acrobatics. By spending 1 point from his ki pool as a swift action, a monk gains a +20 bonus on Acrobatics checks made to jump for 1 round.",
          index: false
        }, {
          name: "Ki Pool",
          note: "(Su) At 4th level, a monk gains a pool of ki points, supernatural energy he can use to accomplish amazing feats. The number of points in a monk's ki pool is equal to 1/2 his monk level + his Wisdom modifier. As long as he has at least 1 point in his ki pool, he can make a ki strike. At 4th level, ki strike allows his unarmed attacks to be treated as magic weapons for the purpose of overcoming damage reduction. At 7th level, his unarmed attacks are also treated as cold iron and silver for the purpose of overcoming damage reduction. At 10th level, his unarmed attacks are also treated as lawful weapons for the purpose of overcoming damage reduction. At 16th level, his unarmed attacks are treated as adamantine weapons for the purpose of overcoming damage reduction and bypassing hardness.<br><br>By spending 1 point from his ki pool, a monk can make one additional attack at his highest attack bonus when making a flurry of blows attack. In addition, he can spend 1 point to increase his speed by 20 feet for 1 round. Finally, a monk can spend 1 point from his ki pool to give himself a +4 dodge bonus to AC for 1 round. Each of these powers is activated as a swift action. A monk gains additional powers that consume points from his ki pool as he gains levels.<br><br>The ki pool is replenished each morning after 8 hours of rest or meditation; these hours do not need to be consecutive.",
          index: false
        }, {
          name: "Languages",
          note: "Dwarves begin play speaking Common and Dwarven. Dwarves with high Intelligence scores can choose from the following: Giant, Gnome, Goblin, Orc, Terran, and Undercommon.",
          index: false
        }, {
          name: "Maneuver Training",
          note: "(Ex) At 3rd level, a monk uses his monk level in place of his base attack bonus when calculating his Combat Maneuver Bonus. Base attack bonuses granted from other classes are unaffected and are added normally.",
          index: false
        }, {
          name: "Medium",
          note: "Dwarves are Medium creatures and have no bonuses or penalties due to their size.",
          index: false
        }, {
          name: "Purity of Body",
          note: "(Ex) At 5th level, a monk gains immunity to all diseases, including supernatural and magical diseases.",
          index: false
        }, {
          name: "Slow and Steady",
          note: "Dwarves have a base speed of 20 feet, but their speed is never modified by armor or encumbrance.",
          index: false
        }, {
          name: "Slow Fall (40ft)",
          note: "(Ex) At 4th level or higher, a monk within arm's reach of a wall can use it to slow his descent. When first gaining this ability, he takes damage as if the fall were 20 feet shorter than it actually is. The monk's ability to slow his fall (that is, to reduce the effective distance of the fall when next to a wall) improves with his monk level until at 20th level he can use a nearby wall to slow his descent and fall any distance without harm.",
          index: false
        }, {
          name: "Stability",
          note: "Dwarves receive a +4 racial bonus to their Combat Maneuver Defense when resisting a bull rush or trip attempt while standing on the ground.",
          index: false
        }, {
          name: "Still Mind",
          note: "(Ex) A monk of 3rd level or higher gains a +2 bonus on saving throws against enchantment spells and effects.",
          index: false
        }, {
          name: "Stonecunning",
          note: "Dwarves receive a +2 bonus on Perception checks to potentially notice unusual stonework, such as traps and hidden doors located in stone walls or floors. They receive a check to notice such features whenever they pass within 10 feet of them, whether or not they are actively looking.",
          index: false
        }, {
          name: "Stunning Fist",
          note: "(Ex) At 1st level, the monk gains Stunning Fist as a bonus feat, even if he does not meet the prerequisites. At 4th level, and every 4 levels thereafter, the monk gains the ability to apply a new condition to the target of his Stunning Fist. This condition replaces stunning the target for 1 round, and a successful saving throw still negates the effect. At 4th level, he can choose to make the target fatigued. At 8th level, he can make the target sickened for 1 minute. At 12th level, he can make the target staggered for 1d6+1 rounds. At 16th level, he can permanently blind or deafen the target. At 20th level, he can paralyze the target for 1d6+1 rounds. The monk must choose which condition will apply before the attack roll is made. These effects do not stack with themselves (a creature sickened by Stunning Fist cannot become nauseated if hit by Stunning Fist again), but additional hits do increase the duration.",
          index: false
        }, {
          name: "Unarmed Damage 1d10",
          note: "",
          index: false
        }, {
          name: "Unarmed Strike",
          note: "At 1st level, a monk gains Improved Unarmed Strike as a bonus feat. A monk's attacks may be with fist, elbows, knees, and feet. This means that a monk may make unarmed strikes with his hands full. There is no such thing as an off-hand attack for a monk striking unarmed. A monk may thus apply his full Strength bonus on damage rolls for all his unarmed strikes.<br><br>Usually a monk's unarmed strikes deal lethal damage, but he can choose to deal nonlethal damage instead with no penalty on his attack roll. He has the same choice to deal lethal or nonlethal damage while grappling.<br><br>A monk's unarmed strike is treated as both a manufactured weapon and a natural weapon for the purpose of spells and effects that enhance or improve either manufactured weapons or natural weapons.<br><br>A monk also deals more damage with his unarmed strikes than a normal person would, as shown above on Table: Monk. The unarmed damage values listed on Table: Monk is for Medium monks. A Small monk deals less damage than the amount given there with his unarmed attacks, while a Large monk deals more damage.",
          index: false
        }, {
          name: "Weapon Familiarity",
          note: "Dwarves are proficient with battleaxes, heavy picks, and warhammers, and treat any weapon with the word \"dwarven\" in its name as a martial weapon.",
          index: false
        }, {
          name: "Wholeness of Body",
          note: "(Su) At 7th level or higher, a monk can heal his own wounds as a standard action. He can heal a number of hit points of damage equal to his monk level by using 2 points from his ki pool.",
          index: false
        }],
        notes: ""
      },
      power: {
        all: [{
          name: "Ki Pool",
          current: "",
          total: 11,
          used: 2
        }, {
          name: "Stunning Fist",
          current: "",
          total: 10,
          used: 1
        }]
      },
      feats: {
        all: [{
          name: "Combat Reflexes",
          note: "",
          index: 203
        }, {
          name: "Dodge",
          note: "",
          index: 361
        }, {
          name: "Extra Ki",
          note: "",
          index: 466
        }, {
          name: "Extra Ki",
          note: "",
          index: 466
        }, {
          name: "Great Fortitude",
          note: "",
          index: 596
        }, {
          name: "Improved Disarm",
          note: "",
          index: 702
        }, {
          name: "Improved Grapple",
          note: "",
          index: 716
        }, {
          name: "Weapon Focus",
          note: "Unarmed Strike",
          index: 1450
        }],
        notes: ""
      },
      traits: {
        all: [],
        notes: ""
      },
      languages: {
        all: [{
          name: "Common",
          note: "",
          index: 5
        }, {
          name: "Dwarven",
          note: "",
          index: 8
        }],
        notes: ""
      }
    },
    equipment: {
      possessions: {
        gear: "Backpack, Pouch (belt), Sack, Candle, Flint And Steel, Tindertwig, Rations (5 Days), Waterskin, Bedroll, Blanket, Bloodblock, Rope (silk), Mirror, Compass, Ink, Inkpen, Paper Sheets, Case For Maps/scrolls, Torch, Rubbing Poweder, Fine Cheese (1), Smelly Cheese (3), Wine (2), Wrestling Costume (2), Dagger, Lavendar soap, Soap bar",
        magic_gear: "Good Berries (5), Bracers of Armor +1, Ioun Stones Dusty Rose",
        potion_vials_oils: "Rubbing Oils (5)",
        scrolls: ""
      },
      armor: {
        armor: {
          name: "",
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
        belts: "Belt of Giant Strength +2",
        body: "",
        chest: "",
        eyes: "",
        feet: "",
        hands: "",
        head: "Headband of Inspired Wisdom +2",
        headband: "",
        neck: "Amulet of Mighty Fists +1 (Shock)",
        ring_left_hand: "",
        ring_right_hand: "Ring of Protection +1",
        shoulders: "Cloak of Resistance +2",
        wrist: "Bracers of Armor +2"
      },
      item: {
        all: [{
          name: "Flask Of Oil",
          quantity: 3,
          weight: 1,
          value: 0.1,
          include: true
        }, {
          name: "Potion of Cure Light Wounds",
          quantity: 4,
          weight: 0.1,
          value: 50,
          include: true
        }, {
          name: "Potion of Cure Moderate Wounds",
          quantity: 3,
          weight: 0.1,
          value: 300,
          include: true
        }, {
          name: "Potion of Cure Serious Wounds",
          quantity: 2,
          weight: 0.1,
          value: 750,
          include: true
        }, {
          name: "Potion of Owls Wisdom",
          quantity: 4,
          weight: 0.1,
          value: 300,
          include: true
        }, {
          name: "Potion of Stabilise",
          quantity: 1,
          weight: 0.1,
          value: 25,
          include: true
        }, {
          name: "Scented Oils",
          quantity: 5,
          weight: 0.1,
          value: 1,
          include: true
        }],
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
          quantity: 3,
          weight: "",
          name: "Alchemist Fire",
          current: ""
        }]
      },
      wealth: {
        platinum: "",
        gold: 2155,
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
          misc: 3,
          temp: "",
          current: "",
          bonuses: {
            str: false,
            dex: true,
            con: false,
            int: false,
            wis: true,
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
          misc: 3,
          temp: "",
          current: "",
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: true,
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
          misc: 3,
          temp: "",
          current: "",
          bonuses: {
            str: false,
            dex: true,
            con: false,
            int: false,
            wis: true,
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
          armor: 2,
          shield: "",
          deflect: 1,
          dodge: 1,
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
        misc: 1,
        temp: "",
        current: "",
        notes: "",
        bonuses: {
          str: true,
          dex: true,
          con: false,
          int: false,
          wis: true,
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
          resistance: 2,
          feat: 2,
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
          resistance: 2,
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
          resistance: 2,
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
        notes: "Immunity to all diseases, +2 against poison, spells, and spell-like abilities, +2 against enchantment spells and effects."
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
          bonus: 6,
          string: "+6 / +1"
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
          bab: false,
          size_special: true,
          level: true,
          half_level: false
        }
      },
      attack: {
        notes: "+1 weapon focus (Unarmed strike). +2 grapple, +2 to resist grapple. +2 disarm, +2 CMD to resist disarm. Stunning Fist DC 18, Fortitude.",
        melee: {
          all: [{
            weapon: "Flurry of Blows",
            attack: "+11/+11/+8/+8",
            damage: "1d10+4 + 1d6 electricity",
            critical: "20x2",
            type: "Bludgeoning",
            equipped: true
          }, {
            weapon: "Grapple",
            attack: "+14",
            damage: "1d10+4",
            critical: "20x2",
            type: "",
            equipped: false
          }, {
            weapon: "Disarm",
            attack: "+14",
            damage: "",
            critical: "",
            type: "",
            equipped: false
          }, {
            weapon: "Stunning Fist",
            attack: "+11",
            damage: "1d10+4 + 1d6 electricity",
            critical: "20x2",
            type: "Bludgeoning",
            equipped: false
          }, {
            weapon: "Unarmed Strike",
            attack: "+11",
            damage: "1d10+4 + 1d6 electricity",
            critical: "20x2",
            type: "Bludgeoning",
            equipped: false
          }]
        },
        ranged: {
          all: [{
            weapon: "Shortbow",
            attack: "+8",
            damage: "1d6",
            critical: "x3",
            range: "60 ft",
            ammo: "50",
            type: "Piercing"
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
          name: "Acrobatics (Jump)",
          ranks: 8,
          misc: "",
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
            level: true,
            half_level: false,
            check_penalty: false,
            size_stealth: false,
            size_fly: false
          }
        }]
      },
      default: {
        acrobatics: {
          ranks: 8,
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
          ranks: "",
          misc: "",
          racial: 2,
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
          ranks: 5,
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
          ranks: 8,
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
          ranks: 8,
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
          ranks: 3,
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
          all: []
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
          all: []
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
        all: [{
          note: "Infected with lycanthropy."
        }, {
          note: "Pippin making Ioun Stones Dusty Rose for Vos (2,500gp spent on materials)."
        }]
      },
      story: {
        all: [{
          note: "Party gear Wand of Cure Light Wounds x2 (Pippin and Morin)."
        }, {
          note: "Prince's Wolves scarf, a toke to proof."
        }]
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
