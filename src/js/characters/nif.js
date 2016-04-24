var nif = (function() {

  var data = {
    basics: {
      name: "Nif Amakir",
      race: "Elf",
      class: "Wizard",
      level: "6",
      size: "Medium",
      alignment: "Lawful Neutral",
      xp: "30,214",
      height: "6'0",
      weight: "136 lbs",
      age: "120 years",
      gender: "Male",
      speed: "30 ft, 6 sq",
      initiative: "3",
      hero_points: "",
      luck_points: ""
    },
    statistics: {
      stats: {
        str: {
          score: "8",
          temp: ""
        },
        dex: {
          score: "17",
          temp: "15"
        },
        con: {
          score: "14",
          temp: ""
        },
        int: {
          score: "21",
          temp: "23"
        },
        wis: {
          score: "12",
          temp: ""
        },
        cha: {
          score: "10",
          temp: ""
        }
      },
      feats: "Alertness, Augment Summoning, Craft Wondrous Item, Greater Spell Focus (Conjuration), Scribe Scroll, Spell Focus (Conjuration)",
      traits: "Resilient",
      languages: "Celestial, Common, Draconic, Dwarven, Elven, Giant, Gnome, Goblin, Orc, Sylvan, Undercommon",
      special_abilities: "Arcane bond (Su), Bonus feats, Cantrips, Arcane schools, Teleportation sub school, Opposition arcane school, Elven Immunities (Ex), Elven Magic (Ex), Keen Senses (Ex), Low-Light Vision (Ex), Headband of Vast Intelligence skill (Use Magic Device), Linguistics Skill (Dwarven, Giant, Undercommon), Shift (Su), Summoner's Charm (Su), Weapon Familiarity (Ex)"
    },
    equipment: {
      gear: "Spell component pouch, Spellbook, Backpack, Flask of Oil x3, Pouch (belt), Sack, Candle, Flint and Steel, Tindertwig, Rations (5 days), Waterskin, Bedroll, Blanket, Bloodblock, Healer's Kik, Rope (silk), Mirror, Compass, Ink, Inkpen, Paper sheets, Case for maps/scrolls, Scroll Case, Combat trained horse, Viles of insect sap x15",
      magic_gear: "Pearl of Power (1st Level), Potion of CLW x1, Potion of Aid, Vile of Antitoxin, Vile of Holy Water, Scroll of Acid Pit x1, Scroll of Summon Monster III x6, Scroll of Invisibility x2, Scroll of Create Pit x1, Scroll of Web x4, Scroll of Stinking Cloud x2, Scroll of Grease (0), Scroll of Mirror Image x3, Scroll of Spiked Pit x2 Scroll of Fly x3",
      encumbrance: {
        light: "26 lbs or less",
        medium: "27–53 lbs",
        heavy: "54–80 lbs"
      },
      body_slots: {
        armor: "",
        belts: "",
        body: "",
        chest: "",
        eyes: "",
        feet: "",
        hands: "",
        head: "",
        headband: "Headband of Vast Intelligence +2",
        neck: "Amulet of Natural Armor +1",
        ring_left_hand: "Ring of Sustenance",
        ring_right_hand: "",
        shield: "",
        shoulders: "Cloak of Resistance +2",
        wrist: ""
      },
      wealth: {
        platinum: "",
        gold: "1,090",
        silver: "",
        copper: ""
      },
      consumable: [{
        item: "Wand of Lightning Bolt",
        total: "50",
        used: "43"
      }, {
        item: "Shift",
        total: "9",
        used: ""
      }]
    },
    defense: {
      hp: {
        total: "42",
        temp: "",
        damage: "",
        non_lethal_damage: ""
      },
      ac: {
        misc: "",
        temp: "",
        armor: "",
        shield: "",
        deflect: "",
        dodge: "",
        natural: "1",
        size_bonus: "",
        str_bonus: false,
        dex_bonus: true,
        con_bonus: false,
        int_bonus: false,
        wis_bonus: false,
        cha_bonus: false
      },
      flat_footed: {
        misc: "",
        temp: "",
        str_bonus: false,
        dex_bonus: false,
        con_bonus: false,
        int_bonus: false,
        wis_bonus: false,
        cha_bonus: false
      },
      touch: {
        misc: "",
        temp: "",
        str_bonus: false,
        dex_bonus: true,
        con_bonus: false,
        int_bonus: false,
        wis_bonus: false,
        cha_bonus: false
      },
      ac_notes: "",
      fortitude: {
        base: "2",
        racial: "",
        resistance: "2",
        misc: "3",
        temp: ""
      },
      reflex: {
        base: "2",
        racial: "",
        resistance: "2",
        misc: "",
        temp: ""
      },
      will: {
        base: "5",
        racial: "",
        resistance: "2",
        misc: "",
        temp: ""
      },
      save_notes: "Immune to sleep effecrs, +2 against enchantment spells and effects"
    },
    offense: {
      base_attack: "3",
      special_size_bonus: "",
      concentration: "12",
      cmb: {
        misc: "",
        temp: "",
        str_bonus: true,
        dex_bonus: false,
        con_bonus: false,
        int_bonus: false,
        wis_bonus: false,
        cha_bonus: false,
        level: false,
        bab: true
      },
      cmd: {
        misc: "",
        temp: "",
        str_bonus: true,
        dex_bonus: true,
        con_bonus: false,
        int_bonus: false,
        wis_bonus: false,
        cha_bonus: false,
        level: false,
        bab: true
      },
      melee_attack: {
        misc: "",
        temp: ""
      },
      ranged_attack: {
        misc: "",
        temp: ""
      },
      attack: {
        melee: [{
          weapon: "Dagger (Master Work)",
          attack: "3",
          damage: "1d6+1",
          critical: "19–20/x2"
        }],
        ranged: [{
          weapon: "Shortbow",
          attack: "6",
          damage: "1d6",
          critical: "x3",
          range: "60 ft",
          ammo: "50"
        }]
      },
      attack_notes: ""
    },
    skills: {
      acrobatics: {
        ranks: "",
        misc: "",
        class_skill: false
      },
      appraise: {
        ranks: "2",
        misc: "",
        class_skill: true
      },
      bluff: {
        ranks: "",
        misc: "",
        class_skill: false
      },
      climb: {
        ranks: "",
        misc: "",
        class_skill: false
      },
      craft_1: {
        ranks: "",
        misc: "",
        class_skill: false,
        type: ""
      },
      craft_2: {
        ranks: "",
        misc: "",
        class_skill: false,
        type: ""
      },
      diplomacy: {
        ranks: "",
        misc: "",
        class_skill: false
      },
      disable_device: {
        ranks: "",
        misc: "",
        class_skill: false
      },
      disguise: {
        ranks: "",
        misc: "",
        class_skill: false
      },
      escape_artist: {
        ranks: "",
        misc: "",
        class_skill: false
      },
      fly: {
        ranks: "2",
        misc: "",
        class_skill: true
      },
      handle_animal: {
        ranks: "",
        misc: "",
        class_skill: false
      },
      heal: {
        ranks: "",
        misc: "",
        class_skill: false
      },
      intimidate: {
        ranks: "",
        misc: "",
        class_skill: false
      },
      knowledge_arcana: {
        ranks: "3",
        misc: "",
        class_skill: true
      },
      knowledge_dungeoneering: {
        ranks: "2",
        misc: "",
        class_skill: true
      },
      knowledge_engineering: {
        ranks: "1",
        misc: "",
        class_skill: true
      },
      knowledge_geography: {
        ranks: "1",
        misc: "",
        class_skill: true
      },
      knowledge_history: {
        ranks: "1",
        misc: "",
        class_skill: true
      },
      knowledge_local: {
        ranks: "1",
        misc: "",
        class_skill: true
      },
      knowledge_nature: {
        ranks: "1",
        misc: "",
        class_skill: true
      },
      knowledge_nobility: {
        ranks: "1",
        misc: "",
        class_skill: true
      },
      knowledge_planes: {
        ranks: "3",
        misc: "",
        class_skill: true
      },
      knowledge_religion: {
        ranks: "3",
        misc: "",
        class_skill: true
      },
      linguistics: {
        ranks: "3",
        misc: "",
        class_skill: true
      },
      perception: {
        ranks: "6",
        misc: "4",
        class_skill: false
      },
      perform_1: {
        ranks: "",
        misc: "",
        class_skill: false,
        type: ""
      },
      perform_2: {
        ranks: "",
        misc: "",
        class_skill: false,
        type: ""
      },
      profession_1: {
        ranks: "",
        misc: "",
        class_skill: false,
        type: ""
      },
      profession_2: {
        ranks: "",
        misc: "",
        class_skill: false,
        type: ""
      },
      ride: {
        ranks: "",
        misc: "",
        class_skill: false
      },
      sense_motive: {
        ranks: "",
        misc: "",
        class_skill: false
      },
      sleight_of_hand: {
        ranks: "",
        misc: "",
        class_skill: false
      },
      spellcraft: {
        ranks: "6",
        misc: "",
        class_skill: true
      },
      stealth: {
        ranks: "",
        misc: "",
        class_skill: false
      },
      survival: {
        ranks: "",
        misc: "",
        class_skill: false
      },
      swim: {
        ranks: "",
        misc: "",
        class_skill: false
      },
      use_magic_device: {
        ranks: "6",
        misc: "",
        class_skill: false
      },
      custom_1: {
        stat: "",
        name: "",
        ranks: "",
        misc: "",
        class_skill: false,
        str_bonus: false,
        dex_bonus: false,
        con_bonus: false,
        int_bonus: false,
        wis_bonus: false,
        cha_bonus: false,
        level: false,
        half_level: false
      },
      custom_2: {
        stat: "",
        name: "",
        ranks: "",
        misc: "",
        class_skill: false,
        str_bonus: false,
        dex_bonus: false,
        con_bonus: false,
        int_bonus: false,
        wis_bonus: false,
        cha_bonus: false,
        level: false,
        half_level: false
      },
      custom_3: {
        stat: "",
        name: "",
        ranks: "",
        misc: "",
        class_skill: false,
        str_bonus: false,
        dex_bonus: false,
        con_bonus: false,
        int_bonus: false,
        wis_bonus: false,
        cha_bonus: false,
        level: false,
        half_level: false
      },
      custom_4: {
        stat: "",
        name: "",
        ranks: "",
        misc: "",
        class_skill: false,
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
    spells: {
      per_day: {
        level_0: "4",
        level_1: "5",
        level_2: "4",
        level_3: "3",
        level_4: "",
        level_5: "",
        level_6: "",
        level_7: "",
        level_8: "",
        level_9: ""
      },
      dc: {
        level_0: "16",
        level_1: "17",
        level_2: "18",
        level_3: "19",
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
        level_0: [
          { name: "Bleed", prepared: 0, active: false, cast: 0 },
          { name: "Erase", prepared: 0, active: false, cast: 0 },
          { name: "Daze", prepared: 0, active: false, cast: 0 },
          { name: "Disrupt Undead", prepared: 0, active: false, cast: 0 },
          { name: "Touch of Fatigue", prepared: 0, active: false, cast: 0 },
          { name: "Prestidigitation", prepared: 0, active: false, cast: 0 },
          { name: "Light", prepared: 0, active: false, cast: 0 },
          { name: "Ghost Sound", prepared: 0, active: false, cast: 0 },
          { name: "Spark", prepared: 0, active: false, cast: 0 },
          { name: "Acid Splash", prepared: 0, active: false, cast: 0 },
          { name: "Mage Hand", prepared: 0, active: false, cast: 0 },
          { name: "Flare", prepared: 0, active: false, cast: 0 },
          { name: "Detect Magic", prepared: 1, active: false, cast: 0 },
          { name: "Detect Poison", prepared: 0, active: false, cast: 0 },
          { name: "Dancing Lights", prepared: 1, active: false, cast: 0 },
          { name: "Mending", prepared: 0, active: false, cast: 0 },
          { name: "Arcane Mark", prepared: 0, active: false, cast: 0 },
          { name: "Message", prepared: 1, active: false, cast: 0 },
          { name: "Ray of Frost", prepared: 0, active: false, cast: 0 },
          { name: "Read Magic", prepared: 1, active: false, cast: 0 },
          { name: "Open Close", prepared: 0, active: false, cast: 0 },
          { name: "Resistance", prepared: 0, active: false, cast: 0 }
        ]
      }, {
        level_1: [
          { name: "Comprehend Languages", prepared: 0, active: false, cast: 0 },
          { name: "Enlarge Person", prepared: 0, active: false, cast: 0 },
          { name: "Feather Fall", prepared: 0, active: false, cast: 0 },
          { name: "Grease", prepared: 2, active: false, cast: 0 },
          { name: "Mage Armor", prepared: 0, active: false, cast: 0 },
          { name: "Mount", prepared: 0, active: false, cast: 0 },
          { name: "Obscuring Mist", prepared: 1, active: false, cast: 0 },
          { name: "Protection from Chaos", prepared: 0, active: false, cast: 0 },
          { name: "Protection from Evil", prepared: 2, active: false, cast: 1 },
          { name: "Shield", prepared: 0, active: false, cast: 0 },
          { name: "Summon Monster I", prepared: 0, active: false, cast: 0 },
          { name: "Unseen Servant", prepared: 0, active: false, cast: 0 }
        ]
      }, {
        level_2: [
          { name: "Blur", prepared: 0, active: false, cast: 0 },
          { name: "Create Pit", prepared: 0, active: false, cast: 0 },
          { name: "Flaming Sphere", prepared: 0, active: false, cast: 0 },
          { name: "Glitterdust", prepared: 1, active: false, cast: 0 },
          { name: "Invisibility", prepared: 1, active: false, cast: 0 },
          { name: "Levitate", prepared: 0, active: false, cast: 0 },
          { name: "Mirror Image", prepared: 1, active: false, cast: 1 },
          { name: "Resist Energy", prepared: 0, active: false, cast: 0 },
          { name: "Stone Call", prepared: 0, active: false, cast: 0 },
          { name: "Summon Monster II", prepared: 0, active: false, cast: 0 },
          { name: "Web", prepared: 1, active: false, cast: 1 }
        ]
      }, {
        level_3: [
          { name: "Stinking Cloud", prepared: 0, active: false, cast: 0 },
          { name: "Summon Monster III", prepared: 1, active: false, cast: 1 },
          { name: "Spiked Pit", prepared: 1, active: false, cast: 0 },
          { name: "Aqueous Orb", prepared: 0, active: false, cast: 0 },
          { name: "Fly", prepared: 1, active: false, cast: 1 },
          { name: "Sleet Storm", prepared: 0, active: false, cast: 0 }
        ]
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
      character: "<strong>Resilient</strong> (+1 trait bonus on Fortitude saves)<br><br><strong>Arcane bond (Su)</strong> Rat Bower, +2 Fortitude save,<br><br><strong>Bonus feats</strong>,<br><br><strong>Cantrips</strong>,<br><br><strong>Arcane schools</strong> Conjuration,<br><br><strong>Teleportation sub school</strong>,<br><br><strong>Opposition arcane school</strong> Enchantment, Necromancy,<br><br><strong>Elven Immunities (Ex)</strong> +2 against enchantment spells and effects,<br><br><strong>Elven Magic (Ex)</strong> +2 caster level checks made to overcome SR. +2 Spellcraft check to identify properties of magic items,<br><br><strong>Keen Senses (Ex)</strong> +2 Perception checks,<br><br><strong>Low-Light Vision (Ex)</strong> See x2 as far as humans in low illumination,<br><br><strong>Headband of Vast Intelligence skill</strong> Use Magic Device,<br><br><strong>Linguistics Skill</strong> Dwarven, Giant, Undercommon,<br><br><strong>Shift (Su)</strong> Teleport 15 feet 9 times per day,<br><br><strong>Summoner's Charm (Su)</strong> +3 rounds duration for Conjuration (Summoning) spells,<br><br><strong>Weapon Familiarity (Ex)</strong> Proficient with longbows (including composite longbows), longswords, rapiers, and shortbows (including composite shortbows), treat weapon with \"elven\" in name as a martial weapon.",
      story: ""
    }
  };

  // exposed methods
  return {
    data: data
  };

})();
