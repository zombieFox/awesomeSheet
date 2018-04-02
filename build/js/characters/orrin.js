var orrin = (function() {

  var data = {
    awesomeSheet: {
      awesome: true,
      version: 5.8
    },
    basics: {
      character: {
        name: "Orrin Alareth",
        race: "Human",
        alignment: "Lawful Evil",
        deity: "",
        height: "6'0",
        weight: "206 lbs",
        age: "26",
        gender: "Male",
        hero_points: "",
        description: "A energetic overweight man. Reddened medium-brown skin, round face, blue-green, wrinkled eyes, a double chin and wavy light brown hair. Very good reflexes and exceptional dexterity and coordination.",
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
          level: 12,
          hp: {
            base: 62,
            favoured: 12,
            current: ""
          },
          ranks: {
            base: 110,
            favoured: "",
            current: ""
          },
          bab: 9,
          name: "Rogue",
          saves: {
            fortitude: 4,
            reflex: 8,
            will: 4
          }
        }],
        string: "Rogue 12"
      },
      experience: {
        level: {
          current: "",
          class_total: ""
        },
        next_level: "",
        needed: "",
        total: 152920,
        advancement: "Fast"
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
        land: "40ft/8sq",
        fly: "",
        maneuverability: "",
        swim: "",
        climb: "",
        burrow: ""
      },
      image: {
        uploaded: "",
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
        magical: "Darkvision, See Invisibility"
      }
    },
    statistics: {
      stats: {
        str: {
          modifier: "",
          base: 13,
          enhancement: "",
          misc: "",
          racial: "",
          temp: "",
          current: ""
        },
        dex: {
          modifier: "",
          base: 19,
          enhancement: 4,
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
          racial: "",
          temp: "",
          current: ""
        },
        int: {
          modifier: "",
          base: 12,
          enhancement: 4,
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
          base: 7,
          enhancement: "",
          misc: "",
          racial: "",
          temp: -4,
          current: ""
        }
      },
      abilities: {
        all: [{
          name: "Advanced Talent (Knock-Out Blow)",
          note: "(Ex) Once per day, the rogue can forgo her sneak attack damage to attempt to knock out an opponent. She must declare the use of knock-out blow before she makes the attack. If the attack hits, it does normal damage, but instead of dealing sneak attack damage (and instead of any effect that triggers when the rogue deals sneak attack damage), the target falls unconscious for 1d4 rounds. A successful Fortitude save reduces this effect to staggered for 1 round. The DC of this save is equal to 10 + 1/2 the rogue's level + the rogue's Intelligence modifier.",
          index: false
        }, {
          name: "Evasion",
          note: "(Ex) At 2nd level and higher, a rogue can avoid even magical and unusual attacks with great agility. If she makes a successful Reflex saving throw against an attack that normally deals half damage on a successful save, she instead takes no damage. Evasion can be used only if the rogue is wearing light armor or no armor. A helpless rogue does not gain the benefit of evasion.",
          index: false
        }, {
          name: "Improved Uncanny Dodge",
          note: "(Ex) A rogue of 8th level or higher can no longer be flanked.",
          index: false
        }, {
          name: "Rogue Talent (Combat Trick [Improved Two-Weapon Fighting])",
          note: "A rogue that selects this talent gains a bonus combat feat.",
          index: false
        }, {
          name: "Rogue Talent (Fast Stealth)",
          note: "(Ex)<span style=\"font-size: 1em;\">&nbsp;This ability allows a rogue to move at full speed using the Stealth skill without penalty.</span>",
          index: false
        }, {
          name: "Rogue Talent (Finesse Rogue)",
          note: "A rogue that selects this talent gains Weapon Finesse as a bonus feat.",
          index: false
        }, {
          name: "Rogue Talent (Offensive Defense)",
          note: "(Ex) When a rogue with this talent hits a creature with a melee attack that deals sneak attack damage, the rogue gains a +1 dodge bonus to AC for each sneak attack die rolled for 1 round.",
          index: false
        }, {
          name: "Rogue Talent (Trap Spotter)",
          note: "(Ex) Whenever a rogue with this talent comes within 10 feet of a trap, she receives an immediate Perception skill check to notice the trap. This check should be made in secret by the GM.",
          index: false
        }, {
          name: "Sneak Attack (+1d6)",
          note: "If a rogue can catch an opponent when he is unable to defend himself effectively from her attack, she can strike a vital spot for extra damage.<br><br>The rogue's attack deals extra damage anytime her target would be denied a Dexterity bonus to AC (whether the target actually has a Dexterity bonus or not), or when the rogue flanks her target. This extra damage is 1d6 at 1st level, and increases by 1d6 every two rogue levels thereafter. Should the rogue score a critical hit with a sneak attack, this extra damage is not multiplied. Ranged attacks can count as sneak attacks only if the target is within 30 feet.<br><br>With a weapon that deals nonlethal damage (like a sap, whip, or an unarmed strike), a rogue can make a sneak attack that deals nonlethal damage instead of lethal damage. She cannot use a weapon that deals lethal damage to deal nonlethal damage in a sneak attack, not even with the usual –4 penalty.<br><br>The rogue must be able to see the target well enough to pick out a vital spot and must be able to reach such a spot. A rogue cannot sneak attack while striking a creature with concealment.",
          index: false
        }, {
          name: "Trap Sense (+4)",
          note: "(Ex) At 3rd level, a rogue gains an intuitive sense that alerts her to danger from traps, giving her a +1 bonus on Reflex saves made to avoid traps and a +1 dodge bonus to AC against attacks made by traps. These bonuses rise to +2 when the rogue reaches 6th level, to +3 when she reaches 9th level, to +4 when she reaches 12th level, to +5 at 15th, and to +6 at 18th level.",
          index: false
        }, {
          name: "Trapfinding",
          note: "A rogue adds 1/2 her level to Perception skill checks made to locate traps and to Disable Device skill checks (minimum +1). A rogue can use Disable Device to disarm magic traps.",
          index: false
        }, {
          name: "Uncanny Dodge",
          note: "(Ex) Starting at 4th level, a rogue can react to danger before her senses would normally allow her to do so. She cannot be caught flat-footed, nor does she lose her Dex bonus to AC if the attacker is invisible. She still loses her Dexterity bonus to AC if immobilized. A rogue with this ability can still lose her Dexterity bonus to AC if an opponent successfully uses the feint action (see Combat) against her.<br><br>If a rogue already has uncanny dodge from a different class, she automatically gains improved uncanny dodge (see below) instead.",
          index: false
        }, {
          name: "Rogue Talent (Slow Reactions)",
          note: "(Ex) Opponents damaged by the rogue's sneak attack can't make attacks of opportunity for 1 round.",
          index: false
        }],
        notes: ""
      },
      power: {
        all: [{
          name: "Knock-Out Blow",
          current: "",
          total: 1,
          used: ""
        }]
      },
      feats: {
        all: [{
          name: "Deft Hands",
          note: "",
          index: 295
        }, {
          name: "Dodge",
          note: "",
          index: 361
        }, {
          name: "Great Fortitude",
          note: "",
          index: 596
        }, {
          name: "Iron Will",
          note: "",
          index: 783
        }, {
          name: "Two-Weapon Defense",
          note: "",
          index: 1393
        }, {
          name: "Two-Weapon Fighting",
          note: "",
          index: 1396
        }, {
          name: "Weapon Finesse",
          note: "",
          index: 1448
        }, {
          name: "Weapon Focus (Rapier)",
          note: "",
          index: 1450
        }],
        notes: ""
      },
      traits: {
        all: [{
          name: "Reactionary",
          note: "",
          index: 787
        }, {
          name: "Resilient",
          note: "",
          index: 804
        }],
        notes: ""
      },
      languages: {
        all: [{
          name: "Common",
          note: "",
          index: 5
        }, {
          name: "Elven",
          note: "",
          index: 9
        }],
        notes: ""
      }
    },
    equipment: {
      possessions: {
        gear: "Fur coat and cold weather outfit, Thieves' tools MW, Climber's kit, Magnifying glass, Merchant's scale, Backpack, Flask of Oil (3), Pouch (belt), Sack, Candle, Flint and Steel, Torch, Tindertwig (5), Rations (5 days), Waterskin, Bedroll, Blanket, Rope (silk), Mirror, Compass, Ink, Pen, Paper sheets, Dagger (2), Hide armor, 10ft pole in pieces",
        magic_gear: "Ioun Torch, Ioun Stones Dusty Rose, Rapier +1<br>",
        potion_viles_oils: "Cure Light Wounds (7), Endure Elements (1), Bless Weapon (4), Greese (1), Reduce Person (1), Stabilise (1), Jump (1), Protection from Good (1), Protection from Law (1), Protection from Evil (1), Remove Fear (1), Remove Sickness (1), Shield of Faith (1), Vanish (1), Gaseous Form (1), Dispel Magic (1), Black Smear Poison (6)",
        scrolls: ""
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
        feet: "Boots of Striding and Springing",
        hands: "Gloves of Reconnaissance",
        head: "",
        headband: "Headband of Vast Intelligence +4",
        neck: "Amulet of a Natural Armor +1",
        ring_left_hand: "Ring of Force Shield",
        ring_right_hand: "Ring of Protection +1",
        shoulders: "Cloak of Resistance +2",
        wrist: ""
      },
      item: {
        all: [{
          name: "Flask of Oil",
          quantity: 1,
          weight: 1,
          value: 2,
          include: true
        }, {
          name: "Tanglefoot bag",
          quantity: 2,
          weight: 8,
          value: 3,
          include: true
        }, {
          name: "Flat Bread",
          quantity: 10,
          weight: 2,
          value: 4,
          include: true
        }, {
          name: "Bedrolls",
          quantity: 6,
          weight: 2,
          value: 1,
          include: false
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
          current: "",
          total: 10,
          used: 2,
          name: "Gloves of Reconnaissance"
        }, {
          current: "",
          total: 50,
          used: 6,
          name: "Wand of Magic Missile (CL5)"
        }, {
          current: "",
          total: 50,
          used: 1,
          name: "Wand of Cure Light Wounds"
        }, {
          current: "",
          total: 50,
          used: "",
          name: "Wand of Entangle"
        }]
      },
      wealth: {
        platinum: 3,
        gold: 19559,
        silver: 5,
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
            max_dex: true
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
            dodge: false
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
            natural: false
          }
        },
        stats: {
          armor: 6,
          shield: 3,
          deflect: 1,
          dodge: 1,
          natural: 1
        },
        notes: "+4 dodge bonus to AC against attacks made by traps.<br>+2 AC against incorporeal attacks.<br>+6 Dodge to AC for 1 round after Sneak Attack.<br>Spells: Haste, Heroism"
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
          plus_ten: true
        }
      },
      saves: {
        fortitude: {
          base: "",
          resistance: 2,
          feat: 2,
          trait: 1,
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
          feat: 2,
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
        notes: "+6d6 Sneak attack.<br>Knock-Out Blow DC 18.",
        melee: {
          all: [{
            weapon: "Rod of Thunder and Lightning",
            attack: "+12",
            damage: "1d6+3",
            critical: "x2",
            type: "Bludgeoning",
            equipped: false
          }, {
            weapon: "Mithral Rapier +2",
            attack: "+19",
            damage: "1d6+3",
            critical: "18–20/×2",
            type: "Piercing",
            equipped: true
          }, {
            weapon: "Rapier +1 Shocking",
            attack: "+17",
            damage: "1d6+2 + 1d6 Electrical",
            critical: "18-20/x2",
            type: "Piercing",
            equipped: false
          }, {
            weapon: "Short Sword +1",
            attack: "+17",
            damage: "1d6+2",
            critical: "19–20/×2",
            type: "Piercing",
            equipped: false
          }, {
            weapon: "Mithral Rapier +2, Short Sword +1",
            attack: "+17/+17/+10/+10",
            damage: "1d6+3, 1d6+2",
            critical: "18–20/×2, 19–20/×2",
            type: "Piercing, Piercing",
            equipped: false
          }, {
            weapon: "Silver Dagger",
            attack: "+16",
            damage: "1d6+1",
            critical: "19–20/×2",
            type: "Piercing",
            equipped: false
          }, {
            weapon: "Sap",
            attack: "+16",
            damage: "1d6+1",
            critical: "x2",
            type: "Bludgeoning",
            equipped: false
          }, {
            weapon: "Punching Dagger +2 Shocking",
            attack: "+18",
            damage: "1d4+3 + 1d6 Electrical",
            critical: "x3",
            type: "Piercing",
            equipped: true
          }, {
            weapon: "Mithral Rapier +2, Punching Dagger +2 Shocking",
            attack: "+17/+17/+11/+11",
            damage: "1d6+3, 1d4+3 + 1d6 Electrical",
            critical: "18–20/×2, x3",
            type: "Piercing, Piercing",
            equipped: true
          }, {
            weapon: "Rapier +1 Shocking, Punching Dagger +2 Shocking",
            attack: "+16/+16/+11/+11",
            damage: "1d6+2 + 1d6 Electrical, 1d4+3 + 1d6 Electrical",
            critical: "18–20/×2, x3",
            type: "Piercing, Piercing",
            equipped: false
          }]
        },
        ranged: {
          all: [{
            weapon: "Shortbow (MW)",
            attack: "+16/+11",
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
          name: "Perception (Traps)",
          ranks: 12,
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
        }, {
          name: "Disable Device (Traps)",
          ranks: 12,
          misc: 8,
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
            check_penalty: true,
            size_stealth: false,
            size_fly: false
          }
        }]
      },
      default: {
        acrobatics: {
          ranks: 12,
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
            check_penalty: true
          }
        },
        appraise: {
          ranks: 8,
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
          ranks: 12,
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
          ranks: 7,
          misc: 2,
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
          ranks: 12,
          misc: 8,
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
          ranks: 12,
          misc: 6,
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
          ranks: 4,
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
          ranks: 4,
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
          ranks: 12,
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
          ranks: 3,
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
          ranks: 12,
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
          ranks: 12,
          misc: 2,
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
            class_skill: true,
            level: false,
            half_level: false,
            check_penalty: true
          }
        },
        spellcraft: {
          ranks: 12,
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
          ranks: 12,
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
          ranks: 12,
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
          note: "Headband of Vast Intelligence +4 Skills: Sense Motive, Spellcraft."
        }, {
          note: "Constant Bless effect while wielding Rod of Thunder and Lightning and glows orange."
        }, {
          note: "Black Smear: injury; save Fort DC 15; frequency 1/round for 6 rounds; effect 1d2 Str; cure 1 save. The poison DC is Constitution-based."
        }]
      },
      story: {
        all: []
      }
    },
    events: {
      all: [{
        type: "gold",
        event: {
          aggregate_value: -5500
        },
        timestamp: {
          date: 7,
          day: 3,
          year: 2018,
          hours: 20,
          milliseconds: 778,
          minutes: 17,
          month: 2,
          seconds: 16
        }
      }, {
        type: "gold",
        event: {
          aggregate_value: 13009
        },
        timestamp: {
          date: 7,
          day: 3,
          year: 2018,
          hours: 20,
          milliseconds: 347,
          minutes: 1,
          month: 2,
          seconds: 47
        }
      }, {
        type: "xp",
        event: {
          aggregate_value: 21600
        },
        timestamp: {
          date: 7,
          day: 3,
          year: 2018,
          hours: 19,
          milliseconds: 148,
          minutes: 35,
          month: 2,
          seconds: 52
        }
      }, {
        type: "xp",
        event: {
          aggregate_value: 17280
        },
        timestamp: {
          date: 19,
          day: 1,
          year: 2018,
          hours: 23,
          milliseconds: 753,
          minutes: 10,
          month: 1,
          seconds: 56
        }
      }, {
        type: "xp",
        event: {
          aggregate_value: 12800
        },
        timestamp: {
          date: 5,
          day: 1,
          year: 2018,
          hours: 18,
          milliseconds: 793,
          minutes: 43,
          month: 1,
          seconds: 35
        }
      }, {
        type: "xp",
        event: {
          aggregate_value: 2360
        },
        timestamp: {
          date: 29,
          day: 1,
          year: 2018,
          hours: 18,
          milliseconds: 349,
          minutes: 50,
          month: 0,
          seconds: 16
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
      }, {
        type: "xp",
        event: {
          aggregate_value: 930
        },
        timestamp: {
          date: 10,
          day: 4,
          year: 2018,
          hours: 19,
          milliseconds: 10,
          minutes: 40,
          month: 0,
          seconds: 0
        }
      }, {
        type: "xp",
        event: {
          aggregate_value: 12590
        },
        timestamp: {
          date: 10,
          day: 4,
          year: 2018,
          hours: 19,
          milliseconds: 10,
          minutes: 40,
          month: 0,
          seconds: 0
        }
      }, {
        type: "xp",
        event: {
          aggregate_value: 70160
        },
        timestamp: {
          date: 10,
          day: 4,
          year: 2018,
          hours: 19,
          milliseconds: 10,
          minutes: 40,
          month: 0,
          seconds: 0
        }
      }]
    }
  };

  // exposed methods
  return {
    data: data
  };

})();
