var nif = (function() {

  var data = {
    awesomeSheet: {
      awesome: true,
      version: 5.2
    },
    basics: {
      character: {
        name: "Nif Amakir",
        race: "Elf",
        alignment: "Lawful Neutral",
        deity: "",
        height: "6'0",
        weight: "136 lbs",
        age: "120",
        gender: "Male",
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
          classname: "Wizard",
          level: 8,
          hp: 42,
          fortitude: 2,
          reflex: 2,
          will: 6,
          ranks: 16,
          bab: 4
        }],
        string: "Wizard 8"
      },
      experience: {
        level: 8,
        next_level: 75000,
        needed: 23670,
        total: 51330,
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
      }
    },
    statistics: {
      stats: {
        str: {
          modifier: "",
          base: 8,
          enhancement: "",
          misc: "",
          racial: "",
          temp: "",
          current: ""
        },
        dex: {
          modifier: "",
          base: 15,
          enhancement: "",
          misc: "",
          racial: 2,
          temp: "",
          current: ""
        },
        con: {
          modifier: "",
          base: 16,
          enhancement: "",
          misc: "",
          racial: -2,
          temp: "",
          current: ""
        },
        int: {
          modifier: "",
          base: 20,
          enhancement: 4,
          misc: "",
          racial: 2,
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
          base: 10,
          enhancement: "",
          misc: "",
          racial: "",
          temp: "",
          current: ""
        }
      },
      abilities: {
        all: [{
          name: "Arcane Bond",
          note: "(Ex or Sp) At 1st level, wizards form a powerful bond with an object or a creature. This bond can take one of two forms: a familiar or a bonded object. A familiar is a magical pet that enhances the wizard's skills and senses and can aid him in magic, while a bonded object is an item a wizard can use to cast additional spells or to serve as a magical item. Once a wizard makes this choice, it is permanent and cannot be changed. Rules for bonded items are given below, while rules for familiars are at the end of this section.<div><br></div><div>Wizards who select a bonded object begin play with one at no cost. Objects that are the subject of an arcane bond must fall into one of the following categories: amulet, ring, staff, wand, or weapon. These objects are always masterwork quality. Weapons acquired at 1st level are not made of any special material. If the object is an amulet or ring, it must be worn to have effect, while staves, wands, and weapons must be held in one hand. If a wizard attempts to cast a spell without his bonded object worn or in hand, he must make a concentration check or lose the spell. The DC for this check is equal to 20 + the spell's level. If the object is a ring or amulet, it occupies the ring or neck slot accordingly.</div><div><br></div><div>A bonded object can be used once per day to cast any one spell that the wizard has in his spellbook and is capable of casting, even if the spell is not prepared. This spell is treated like any other spell cast by the wizard, including casting time, duration, and other effects dependent on the wizard's level. This spell cannot be modified by metamagic feats or other abilities. The bonded object cannot be used to cast spells from the wizard's opposition schools (see arcane school).</div><div><br></div><div>A wizard can add additional magic abilities to his bonded object as if he has the required item creation feats and if he meets the level prerequisites of the feat. For example, a wizard with a bonded dagger must be at least 5th level to add magic abilities to the dagger (see the Craft Magic Arms and Armor feat in Feats). If the bonded object is a wand, it loses its wand abilities when its last charge is consumed, but it is not destroyed and it retains all of its bonded object properties and can be used to craft a new wand. The magic properties of a bonded object, including any magic abilities added to the object, only function for the wizard who owns it. If a bonded object's owner dies, or the item is replaced, the object reverts to being an ordinary masterwork item of the appropriate type.</div><div><br></div><div>If a bonded object is damaged, it is restored to full hit points the next time the wizard prepares his spells. If the object of an arcane bond is lost or destroyed, it can be replaced after 1 week in a special ritual that costs 200 gp per wizard level plus the cost of the masterwork item. This ritual takes 8 hours to complete. Items replaced in this way do not possess any of the additional enchantments of the previous bonded item. A wizard can designate an existing magic item as his bonded item. This functions in the same way as replacing a lost or destroyed item except that the new magic item retains its abilities while gaining the benefits and drawbacks of becoming a bonded item.</div>",
          index: false
        }, {
          name: "Arcane Schools",
          note: "Conjuration - Teleportation",
          index: false
        }, {
          name: "Bonus Feats (2)",
          note: "At 5th, 10th, 15th, and 20th level, a wizard gains a bonus feat. At each such opportunity, he can choose a metamagic feat, an item creation feat, or Spell Mastery. The wizard must still meet all prerequisites for a bonus feat, including caster level minimums. These bonus feats are in addition to the feats that a character of any class gets from advancing levels. The wizard is not limited to the categories of item creation feats, metamagic feats, or Spell Mastery when choosing those feats.",
          index: false
        }, {
          name: "Cantrips",
          note: "Wizards can prepare a number of cantrips, or 0-level spells, each day, as noted on Table: Wizard under \"Spells per Day.\" These spells are cast like any other spell, but they are not expended when cast and may be used again. A wizard can prepare a cantrip from a prohibited school, but it uses up two of his available slots.",
          index: false
        }, {
          name: "Dimensional Steps",
          note: "(Sp<span style=\"font-size: 1em;\">) At 8th level, you can use this ability to teleport up to 30 feet per wizard level per day as a standard action. This teleportation must be used in 5-foot increments and such movement does not provoke an attack of opportunity. You can bring other willing creatures with you, but you must expend an equal amount of distance for each additional creature brought with you.</span>",
          index: false
        }, {
          name: "Elven Immunities",
          note: "Elves are immune to magic sleep effects and get a +2 racial saving throw bonus against enchantment spells and effects.",
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
          name: "Languages",
          note: "Elves begin play speaking Common and Elven. Elves with high Intelligence scores can choose from the following: Celestial, Draconic, Gnoll, Gnome, Goblin, Orc, and Sylvan.",
          index: false
        }, {
          name: "Low-Light Vision",
          note: "Elves can see twice as far as humans in conditions of dim light.",
          index: false
        }, {
          name: "Medium",
          note: "Elves are Medium creatures and have no bonuses or penalties due to their size.",
          index: false
        }, {
          name: "Normal Speed",
          note: "Elves have a base speed of 30 feet",
          index: false
        }, {
          name: "Shift",
          note: "(Su) At 1st level, you can teleport to a nearby space as a swift action as if using dimension door. This movement does not provoke an attack of opportunity. You must be able to see the space that you are moving into. You cannot take other creatures with you when you use this ability (except for familiars). You can move 5 feet for every two wizard levels you possess (minimum 5 feet). You can use this ability a number of times per day equal to 3 + your Intelligence modifier.",
          index: false
        }, {
          name: "Summoner's Charm",
          note: "(Su) Whenever you cast a conjuration (summoning) spell, increase the duration by a number of rounds equal to 1/2 your wizard level (minimum 1). This increase is not doubled by Extend Spell. At 20th level, you can change the duration of all summon monster spells to permanent. You can have no more than one summon monster spell made permanent in this way at one time. If you designate another summon monster spell as permanent, the previous spell immediately ends.",
          index: false
        }, {
          name: "Weapon Familiarity",
          note: "Elves are proficient with longbows (including composite longbows), longswords, rapiers, and shortbows (including composite shortbows), and treat any weapon with the word \"elven\" in its name as a martial weapon.",
          index: false
        }],
        notes: ""
      },
      power: {
        all: [{
          name: "Shift",
          current: "",
          total: 11,
          used: 1
        }, {
          name: "Dimensional Step",
          current: "",
          total: 240,
          used: 135
        }]
      },
      feats: {
        all: [{
          name: "Alertness",
          note: "",
          index: 20
        }, {
          name: "Augment Summoning",
          note: "",
          index: 70
        }, {
          name: "Combat Casting",
          note: "",
          index: 196
        }, {
          name: "Craft Wondrous Item",
          note: "",
          index: 232
        }, {
          name: "Greater Spell Focus",
          note: "Conjuration",
          index: 621
        }, {
          name: "Scribe Scroll",
          note: "",
          index: 1126
        }, {
          name: "Spell Focus",
          note: "Conjuration",
          index: 1228
        }],
        notes: ""
      },
      traits: {
        all: [{
          name: "Resilient",
          note: "",
          index: 804
        }],
        notes: ""
      },
      languages: {
        all: [{
          name: "Aquan",
          note: "",
          index: 2
        }, {
          name: "Auran",
          note: "",
          index: 3
        }, {
          name: "Azlanti",
          note: "",
          index: false
        }, {
          name: "Celestial",
          note: "",
          index: 4
        }, {
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
          name: "Giant",
          note: "",
          index: 10
        }, {
          name: "Gnome",
          note: "",
          index: 11
        }, {
          name: "Goblin",
          note: "",
          index: 12
        }, {
          name: "Ignan",
          note: "",
          index: 15
        }, {
          name: "Orc",
          note: "",
          index: 17
        }, {
          name: "Sylvan",
          note: "",
          index: 18
        }, {
          name: "Undercommon",
          note: "",
          index: 20
        }],
        notes: ""
      }
    },
    equipment: {
      possessions: {
        gear: "Spellbook, Scroll case, Spell component pouch, Candle, Flint and Steel, Tindertwig, Ink, pen and paper, Belt Pouch, Backpack, Rations (5 days), Combat trained horse",
        magic_gear: "Handy Haversack",
        potion_viles_oils: "Insect sap (14), Antitoxin(1), Holy Water(1), Yellow Mushroom Juice (3), Magic Weapon (2), Cure Light Wounds (0), Cure Moderate Wounds (1), Cure Serious Wounds (1), Protection from Evil (1), Adjustable Disguise (1), Aid (1), Displacement (1), Hide from Animals (1), Delay Poison (1), Bear's Endurance (1), Levitate (1)",
        scrolls: "Acid Pit (2), Summon Monster III (2), Summon Monster IV (0), Invisibility (2), Create Pit (2), Web (3), Stinking Cloud (2), Grease (1), Mirror Image (2), Spiked Pit (6), Fly (1), Interposing Hand (0), Elemental Body 2 (0), Wall of Fire (1), Haste (2), Enlarge Person (2), Endure Elements (2), Acid Arrow (0), Gust of Wind (0), Animate Rope (0), False Life (2), Floating Disk (2), Comprehend Languages (0), Erase (1), Detect Secret Doors (1), Black Tentacles (2), Mage Armor (0)"
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
          total: 50,
          used: 49,
          name: "Wand of Lightning Bolt"
        }, {
          current: "",
          total: 50,
          used: 43,
          name: "Wand of Scorching Ray"
        }, {
          current: "",
          total: 50,
          used: 30,
          name: "Wand of Swift Girding"
        }, {
          current: "",
          total: 50,
          used: 40,
          name: "Wand of Carry Companion"
        }, {
          current: "",
          total: 1,
          used: "",
          name: "Pearl of Power (1st Level)"
        }, {
          current: "",
          total: 50,
          used: "",
          name: "Wand of Purify Food and Drink"
        }]
      },
      wealth: {
        platinum: "",
        gold: 1027,
        silver: "",
        copper: "",
        total: 1027
      }
    },
    defense: {
      hp: {
        total: 58,
        temp: "",
        damage: 18,
        non_lethal_damage: "",
        current: "",
        notes: ""
      },
      ac: {
        armor_class: {
          misc: "",
          temp: 1,
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
          temp: 1,
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
          temp: 1,
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
          armor: "",
          shield: "",
          deflect: "",
          dodge: "",
          natural: 1
        },
        notes: "Mirror image 4"
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
          base: 2,
          resistance: 2,
          feat: "",
          trait: 1,
          misc: 2,
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
          base: 2,
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
          base: 6,
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
        notes: "Immune to magic sleep effects. +2 saving throw against enchantment spells and effects."
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
          bonus: 4,
          string: "+4"
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
            weapon: "Dagger (Master Work)",
            attack: "+4",
            damage: "1d6+1",
            critical: "19–20/x2",
            type: "Slashing/Piercing"
          }]
        },
        ranged: {
          all: [{
            weapon: "Shortbow",
            attack: "+7",
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
          name: "Spellcraft (Identify magic items)",
          ranks: 8,
          misc: 2,
          current: "",
          racial: "",
          trait: "",
          feat: "",
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
            check_penalty: false,
            size_stealth: false,
            size_fly: false
          }
        }]
      },
      default: {
        acrobatics: {
          ranks: "",
          misc: "",
          racial: "",
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
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: true
          }
        },
        appraise: {
          ranks: 1,
          misc: "",
          racial: "",
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
            class_skill: true,
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
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
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
          ranks: 8,
          misc: "",
          racial: "",
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
          ranks: 4,
          misc: "",
          racial: "",
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
            class_skill: true,
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
          ranks: 4,
          misc: "",
          racial: "",
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
            class_skill: true,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        knowledge_geography: {
          ranks: 4,
          misc: "",
          racial: "",
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
            class_skill: true,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        knowledge_history: {
          ranks: 4,
          misc: "",
          racial: "",
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
            class_skill: true,
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
          ranks: 4,
          misc: "",
          racial: "",
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
            class_skill: true,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        knowledge_nobility: {
          ranks: 3,
          misc: "",
          racial: "",
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
            class_skill: true,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        knowledge_planes: {
          ranks: 4,
          misc: "",
          racial: "",
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
            class_skill: true,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        knowledge_religion: {
          ranks: 4,
          misc: "",
          racial: "",
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
            class_skill: true,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        linguistics: {
          ranks: 8,
          misc: "",
          racial: "",
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
            class_skill: true,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        perception: {
          ranks: 8,
          misc: 2,
          racial: "",
          feat: 2,
          trait: "",
          current: "",
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
          variant_name: "",
          ranks: "",
          misc: "",
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
          feat: 2,
          trait: "",
          current: "",
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
          ranks: 8,
          misc: "",
          racial: "",
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
          ranks: 8,
          misc: "",
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
            cha: true,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        }
      }
    },
    spells: {
      stats: {
        concentration: {
          misc: "",
          temp: "",
          racial: "",
          feat: 4,
          trait: "",
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
        school: "Conjuration - Teleportation",
        opposition: "Enchantment, Necromancy",
        domains: "",
        bloodline: "",
        notes: "Conjuration spells +2 DC.<br>+2 on caster level checks to overcome spell resistance."
      },
      book: {
        level_0: {
          per_day: 4,
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
            prepared: 0,
            active: false,
            cast: 0,
            index: 135
          }, {
            name: "Bleed",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 256
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
            prepared: 0,
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
            name: "Detect Poison",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 695
          }, {
            name: "Disrupt Undead",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 748
          }, {
            name: "Erase",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 871
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
            prepared: 0,
            active: false,
            cast: 0,
            index: 1491
          }, {
            name: "Mending",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 1564
          }, {
            name: "Message",
            note: "",
            prepared: 1,
            active: false,
            cast: 0,
            index: 1572
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
            name: "Resistance",
            note: "",
            prepared: 1,
            active: false,
            cast: 0,
            index: 1980
          }, {
            name: "Spark",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 2267
          }, {
            name: "Touch of Fatigue",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 2576
          }]
        },
        level_1: {
          per_day: 4,
          known: "",
          bonus: 2,
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
            name: "Animate Rope",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 97
          }, {
            name: "Comprehend Languages",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 480
          }, {
            name: "Detect Secret Doors",
            note: "",
            prepared: 1,
            active: false,
            cast: 0,
            index: 700
          }, {
            name: "Endure Elements",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 843
          }, {
            name: "Enlarge Person",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 854
          }, {
            name: "Feather Fall",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 929
          }, {
            name: "Floating Disk",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 993
          }, {
            name: "Grease",
            note: "",
            prepared: 1,
            active: false,
            cast: 0,
            index: 1117
          }, {
            name: "Mage Armor",
            note: "",
            prepared: 1,
            active: false,
            cast: 0,
            index: 1490
          }, {
            name: "Mount",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 1630
          }, {
            name: "Obscuring Mist",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 1688
          }, {
            name: "Protection From Chaos",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 1851
          }, {
            name: "Protection From Evil",
            note: "",
            prepared: 2,
            active: false,
            cast: 0,
            index: 1855
          }, {
            name: "Shield",
            note: "",
            prepared: 1,
            active: false,
            cast: 0,
            index: 2181
          }, {
            name: "Summon Monster I",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 2408
          }, {
            name: "Unseen Servant",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 2677
          }]
        },
        level_2: {
          per_day: 3,
          known: "",
          bonus: 2,
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
            name: "Acid Arrow",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 19
          }, {
            name: "Blur",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 305
          }, {
            name: "Create Pit",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 550
          }, {
            name: "Create Treasure Map",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 552
          }, {
            name: "False Life",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 915
          }, {
            name: "Flaming Sphere",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 973
          }, {
            name: "Glitterdust",
            note: "",
            prepared: 2,
            active: false,
            cast: 1,
            index: 1092
          }, {
            name: "Gust Of Wind",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 1133
          }, {
            name: "Invisibility",
            note: "",
            prepared: 2,
            active: false,
            cast: 1,
            index: 1347
          }, {
            name: "Levitate",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 1418
          }, {
            name: "Mirror Image",
            note: "",
            prepared: 1,
            active: false,
            cast: 1,
            index: 1606
          }, {
            name: "Resist Energy",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 1977
          }, {
            name: "Stone Call",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 2347
          }, {
            name: "Summon Monster II",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 2409
          }, {
            name: "Web",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 2781
          }]
        },
        level_3: {
          per_day: 3,
          known: "",
          bonus: 2,
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
            name: "Aqueous Orb",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 124
          }, {
            name: "Dispel Magic",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 742
          }, {
            name: "Fly",
            note: "",
            prepared: 1,
            active: false,
            cast: 1,
            index: 996
          }, {
            name: "Haste",
            note: "",
            prepared: 2,
            active: false,
            cast: 2,
            index: 1150
          }, {
            name: "Lightning Bolt",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 1439
          }, {
            name: "Magic Weapon, Greater",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 1518
          }, {
            name: "Sleet Storm",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 2236
          }, {
            name: "Slow",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 2239
          }, {
            name: "Spiked Pit",
            note: "",
            prepared: 2,
            active: false,
            cast: 1,
            index: 2306
          }, {
            name: "Stinking Cloud",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 2344
          }, {
            name: "Summon Monster III",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 2410
          }]
        },
        level_4: {
          per_day: 2,
          known: "",
          bonus: 2,
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
            name: "Black Tentacles",
            note: "",
            prepared: 1,
            active: false,
            cast: 0,
            index: 241
          }, {
            name: "Dimension Door",
            note: "",
            prepared: 2,
            active: false,
            cast: 1,
            index: 713
          }, {
            name: "Heroism",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 1183
          }, {
            name: "Invisibility, Greater",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 1354
          }, {
            name: "Secure Shelter",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 2103
          }, {
            name: "Summon Monster IV",
            note: "",
            prepared: 1,
            active: false,
            cast: 0,
            index: 2411
          }, {
            name: "Wall Of Fire",
            note: "",
            prepared: 0,
            active: false,
            cast: 0,
            index: 2744
          }]
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
          note: "Spells to find:<br>Scorching Ray<br>Lightning Bolt"
        }, {
          note: "Headband of Vast Intelligence.<br>Skills: Use Magic Device, Fly.<div>Languages: Dwarven, Giant, Undercommon.</div>"
        }]
      },
      story: {
        all: [{
          note: "Baron Turbine Blackshield, lord of Thornkeep <br>Five factions in Thornkeep: Three Daggers (the thives), Iron jaws, Hunters guild, The Order (deal in magic), The Goblins, The Blue Basilisks (the muscle)"
        }, {
          note: "Andorak (Lich shade), wizard's apprentice, locked in tomb"
        }, {
          note: "Jonas the mail man, messenger of Thornkeep"
        }, {
          note: "Library reference: 957"
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
