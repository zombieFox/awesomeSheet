var nif = (function() {

  var data = {
    basics: {
      name: "Nif Amakir",
      race: "Elf",
      class: "Wizard",
      level: "6",
      size: "Medium",
      alignment: "Lawful Neutral",
      xp: "23,264",
      height: "6'0",
      weight: "136 lbs",
      age: "120 years",
      gender: "Male",
      speed: "30 feet, 6 squares",
      initiative: "3",
      platinum: "",
      gold: "1,090",
      silver: "",
      copper: "",
      hero_points: "2",
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
          temp: ""
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
      traits: "<strong>Resilient</strong> (+1 trait bonus on Fortitude saves)",
      languages: "Celestial, Common, Draconic, Dwarven, Elven, Giant, Gnome, Goblin, Orc, Sylvan, Undercommon",
      special_abilities: "Arcane bond (Su), Bonus feats, Cantrips, Arcane schools, Teleportation sub school, Opposition arcane school, Elven Immunities (Ex), Elven Magic (Ex), Keen Senses (Ex), Low-Light Vision (Ex), Headband of Vast Intelligence skill (Use Magic Device), Linguistics Skill (Dwarven, Giant, Undercommon), Shift (Su), Summoner's Charm (Su), Weapon Familiarity (Ex)"
    },
    equipment: {
      gear: "Spell component pouch, Spellbook, Backpack, Flask of Oil x3, Pouch (belt), Sack, Candle, Flint and Steel, Tindertwig, Rations (5 days), Waterskin, Bedroll, Blanket, Bloodblock, Healer's Kik, Rope (silk), Mirror, Compass, Ink, Inkpen, Paper sheets, Case for maps/scrolls, Scroll Case, Combat trained horse",
      magic_gear: "Pearl of Power (1st Level), Potion of CLW x1, Potion of Aid, Vile of Antitoxin, Vile of Holy Water, Scroll of Acid Pit x1, Scroll of Summon Monster III x5, Scroll of Invisibility x2, Scroll of Create Pit x1, Scroll of Web x4, Scroll of Stinking Cloud x2, Scroll of Grease x2, Scroll of Mirror Image x3, Scroll of Spiked Pit x3 Scroll of Fly x2",
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
      consumable: [{
        item: "Wand of Infernal Healing",
        total: "50",
        used: "48"
      }, {
        item: "Wand of Lightning Bolt",
        total: "50",
        used: "38"
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
        current: "42",
        non_lethal: ""
      },
      ac: {
        flat_footed: {
          misc: "",
          temp: ""
        },
        touch: {
          misc: "",
          temp: ""
        },
        misc: "",
        temp: "",
        armor: "",
        shield: "",
        deflect: "",
        dodge: "",
        natural: "1",
        size_bonus: ""
      },
      fortitude: {
        base: "2",
        racial: "",
        misc: "5",
        temp: ""
      },
      reflex: {
        base: "2",
        racial: "",
        misc: "2",
        temp: ""
      },
      will: {
        base: "5",
        racial: "",
        misc: "2",
        temp: ""
      },
      defense_notes: "Immune to sleep effecrs, +2 against enchantment spells and effects"
    },
    offense: {
      base_attack: "3",
      special_size_bonus: "",
      concentration: "11",
      cmb: {
        misc: "",
        temp: ""
      },
      cmd: {
        misc: "",
        temp: ""
      },
      melee_attack: {
        misc: "",
        temp: ""
      },
      ranged_attack: {
        misc: "",
        temp: ""
      },
      attack: [{
        weapon: "Dagger (Master Work)",
        attack: "3",
        damage: "1d6+1",
        critical: "19–20/x2",
        range: "",
        ammo: ""
      }, {
        weapon: "Shortbow",
        attack: "6",
        damage: "1d6",
        critical: "x3",
        range: "60 ft",
        ammo: "50"
      }],
      attack_notes: ""
    },
    skills: {
      acrobatics: {
        ranks: "",
        misc: ""
      },
      appraise: {
        ranks: "2",
        misc: "3"
      },
      bluff: {
        ranks: "",
        misc: ""
      },
      climb: {
        ranks: "",
        misc: ""
      },
      craft: {
        ranks: "",
        misc: ""
      },
      diplomacy: {
        ranks: "",
        misc: ""
      },
      disguise: {
        ranks: "",
        misc: ""
      },
      escape_artist: {
        ranks: "",
        misc: ""
      },
      fly: {
        ranks: "2",
        misc: "3"
      },
      heal: {
        ranks: "",
        misc: ""
      },
      intimidate: {
        ranks: "",
        misc: ""
      },
      knowledge_arcana: {
        ranks: "3",
        misc: "3"
      },
      knowledge_dungeoneering: {
        ranks: "2",
        misc: "3"
      },
      knowledge_engineering: {
        ranks: "1",
        misc: "3"
      },
      knowledge_geography: {
        ranks: "1",
        misc: "3"
      },
      knowledge_history: {
        ranks: "1",
        misc: "3"
      },
      knowledge_local: {
        ranks: "1",
        misc: "3"
      },
      knowledge_nature: {
        ranks: "1",
        misc: "3"
      },
      knowledge_nobility: {
        ranks: "1",
        misc: "3"
      },
      knowledge_planes: {
        ranks: "3",
        misc: "3"
      },
      knowledge_religion: {
        ranks: "3",
        misc: "3"
      },
      linguistics: {
        ranks: "3",
        misc: "3"
      },
      perception: {
        ranks: "6",
        misc: "4"
      },
      perform: {
        ranks: "",
        misc: ""
      },
      ride: {
        ranks: "",
        misc: ""
      },
      sense_motive: {
        ranks: "",
        misc: ""
      },
      spellcraft: {
        ranks: "6",
        misc: "3"
      },
      stealth: {
        ranks: "",
        misc: ""
      },
      survival: {
        ranks: "",
        misc: ""
      },
      swim: {
        ranks: "",
        misc: ""
      },
      use_magic_device: {
        ranks: "6",
        misc: ""
      },
    },
    spells: {
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
      book: [
        // level 0
        { name: "Bleed", level: 0, prepared: 0, active: false, cast: 0 },
        { name: "Erase", level: 0, prepared: 0, active: false, cast: 0 },
        { name: "Daze", level: 0, prepared: 0, active: false, cast: 0 },
        { name: "Disrupt Undead", level: 0, prepared: 0, active: false, cast: 0 },
        { name: "Touch of Fatigue", level: 0, prepared: 0, active: false, cast: 0 },
        { name: "Prestidigitation", level: 0, prepared: 0, active: false, cast: 0 },
        { name: "Light", level: 0, prepared: 0, active: false, cast: 0 },
        { name: "Ghost Sound", level: 0, prepared: 0, active: false, cast: 0 },
        { name: "Spark", level: 0, prepared: 0, active: false, cast: 0 },
        { name: "Acid Splash", level: 0, prepared: 0, active: false, cast: 0 },
        { name: "Mage Hand", level: 0, prepared: 0, active: false, cast: 0 },
        { name: "Flare", level: 0, prepared: 0, active: false, cast: 0 },
        { name: "Detect Magic", level: 0, prepared: 1, active: false, cast: 0 },
        { name: "Detect Poison", level: 0, prepared: 0, active: false, cast: 0 },
        { name: "Dancing Lights", level: 0, prepared: 1, active: false, cast: 0 },
        { name: "Mending", level: 0, prepared: 0, active: false, cast: 0 },
        { name: "Arcane Mark", level: 0, prepared: 0, active: false, cast: 0 },
        { name: "Message", level: 0, prepared: 1, active: false, cast: 0 },
        { name: "Ray of Frost", level: 0, prepared: 0, active: false, cast: 0 },
        { name: "Read Magic", level: 0, prepared: 1, active: false, cast: 0 },
        { name: "Open Close", level: 0, prepared: 0, active: false, cast: 0 },
        { name: "Resistance", level: 0, prepared: 0, active: false, cast: 0 },
        // level 1
        { name: "Comprehend Languages", level: 1, prepared: 0, active: false, cast: 0 },
        { name: "Enlarge Person", level: 1, prepared: 0, active: false, cast: 0 },
        { name: "Feather Fall", level: 1, prepared: 0, active: false, cast: 0 },
        { name: "Grease", level: 1, prepared: 2, active: false, cast: 0 },
        { name: "Mage Armor", level: 1, prepared: 0, active: false, cast: 0 },
        { name: "Mount", level: 1, prepared: 0, active: false, cast: 0 },
        { name: "Obscuring Mist", level: 1, prepared: 1, active: false, cast: 0 },
        { name: "Protection from Chaos", level: 1, prepared: 0, active: false, cast: 0 },
        { name: "Protection from Evil", level: 1, prepared: 2, active: false, cast: 0 },
        { name: "Shield", level: 1, prepared: 0, active: false, cast: 0 },
        { name: "Summon Monster I", level: 1, prepared: 0, active: false, cast: 0 },
        { name: "Unseen Servant", level: 1, prepared: 0, active: false, cast: 0 },
        // level 2
        { name: "Blur", level: 2, prepared: 0, active: false, cast: 0 },
        { name: "Create Pit", level: 2, prepared: 0, active: false, cast: 0 },
        { name: "Flaming Sphere", level: 2, prepared: 0, active: false, cast: 0 },
        { name: "Glitterdust", level: 2, prepared: 0, active: false, cast: 0 },
        { name: "Invisibility", level: 2, prepared: 2, active: false, cast: 0 },
        { name: "Levitate", level: 2, prepared: 0, active: false, cast: 0 },
        { name: "Mirror Image", level: 2, prepared: 0, active: false, cast: 0 },
        { name: "Resist Energy", level: 2, prepared: 0, active: false, cast: 0 },
        { name: "Stone Call", level: 2, prepared: 0, active: false, cast: 0 },
        { name: "Summon Monster II", level: 2, prepared: 1, active: false, cast: 0 },
        { name: "Web", level: 2, prepared: 1, active: false, cast: 0 },
        // level 3
        { name: "Stinking Cloud", level: 3, prepared: 0, active: false, cast: 0 },
        { name: "Summon Monster III", level: 3, prepared: 1, active: false, cast: 0 },
        { name: "Spiked Pit", level: 3, prepared: 1, active: false, cast: 0 },
        { name: "Aqueous Orb", level: 3, prepared: 0, active: false, cast: 0 },
        { name: "Fly", level: 3, prepared: 1, active: false, cast: 0 },
        { name: "Sleet Storm", level: 3, prepared: 0, active: false, cast: 0 }
      ]
    },
    character_notes: "<strong>Arcane bond (Su)</strong> Rat Bower, +2 Fortitude save,<br><br><strong>Bonus feats</strong>,<br><br><strong>Cantrips</strong>,<br><br><strong>Arcane schools</strong> Conjuration,<br><br><strong>Teleportation sub school</strong>,<br><br><strong>Opposition arcane school</strong> Enchantment, Necromancy,<br><br><strong>Elven Immunities (Ex)</strong> +2 against enchantment spells and effects,<br><br><strong>Elven Magic (Ex)</strong> +2 caster level checks made to overcome SR. +2 Spellcraft check to identify properties of magic items,<br><br><strong>Keen Senses (Ex)</strong> +2 Perception checks,<br><br><strong>Low-Light Vision (Ex)</strong> See x2 as far as humans in low illumination,<br><br><strong>Headband of Vast Intelligence skill</strong> Use Magic Device,<br><br><strong>Linguistics Skill</strong> Dwarven, Giant, Undercommon,<br><br><strong>Shift (Su)</strong> Teleport 15 feet 9 times per day,<br><br><strong>Summoner's Charm (Su)</strong> +2 rounds duration for Conjuration (Summoning) spells,<br><br><strong>Weapon Familiarity (Ex)</strong> Proficient with longbows (including composite longbows), longswords, rapiers, and shortbows (including composite shortbows), treat weapon with \"elven\" in name as a martial weapon."
  };

  // exposed methods
  return {
    data: data
  };

})();

var ro = (function() {

  var data = {
    basics: {
      name: "Ro Flint",
      race: "Elf",
      class: "Magus",
      level: "2",
      size: "Medium",
      alignment: "Lawful Neutral",
      xp: "2,891",
      height: "6'0",
      weight: "",
      age: "120 years",
      gender: "Male",
      speed: "30 feet/6 squares",
      initiative: "4",
      platinum: "",
      gold: "570",
      silver: "",
      copper: "",
      hero_points: "",
      luck_points: ""
    },
    statistics: {
      stats: {
        str: {
          score: "12",
          temp: ""
        },
        dex: {
          score: "18",
          temp: ""
        },
        con: {
          score: "10",
          temp: ""
        },
        int: {
          score: "16",
          temp: ""
        },
        wis: {
          score: "10",
          temp: ""
        },
        cha: {
          score: "7",
          temp: ""
        }
      },
      feats: "Weapon Finesse",
      traits: "<strong>Magical Lineage</strong> (Shocking Grasp), <strong>Focused Mind</strong> (+2 on concentration checks)",
      languages: "Common, Draconic, Dwarven, Elven, Orc",
      special_abilities: "Low-Light Vision (Ex), Elven Immunities (Ex), Elven Magic (Ex), Weapon Familiarity (Ex), Keen Senses (Ex), Arcane Pool, Cantrips, Spell Combat (EX)"
    },
    equipment: {
      gear: "Fur coat and cold weather outfit, Rapier, Spell component pouch, Spellbook, Backpack, Flask of Oil x3, Pouch (belt), Sack, Candle, Flint and Steel, Tindertwig, Rations (5 days), Waterskin, Bedroll, Blanket, Rope (silk), Mirror, Compass, Ink, Inkpen, Paper sheets, Case for maps/scrolls, Tent for 2, Trained Donkey (commands: come, down, stay heal, work), Alchemist Fire (3)",
      magic_gear: "",
      encumbrance: {
        light: "43 lbs or less",
        medium: "44–86 lbs",
        heavy: "87–130 lbs"
      },
      body_slots: {
        armor: "Studded leather",
        belts: "",
        body: "",
        chest: "",
        eyes: "",
        feet: "",
        hands: "",
        head: "",
        headband: "",
        neck: "",
        ring_left_hand: "",
        ring_right_hand: "",
        shield: "",
        shoulders: "",
        wrist: ""
      },
      consumable: [{
        item: "Arcane Pool",
        total: "4",
        used: "1"
      }]
    },
    defense: {
      hp: {
        total: "14",
        temp: "",
        current: "14",
        non_lethal: ""
      },
      ac: {
        flat_footed: {
          misc: "",
          temp: ""
        },
        touch: {
          misc: "",
          temp: ""
        },
        misc: "",
        temp: "",
        armor: "3",
        shield: "",
        deflect: "",
        dodge: "",
        natural: "",
        size_bonus: ""
      },
      fortitude: {
        base: "3",
        racial: "",
        misc: "",
        temp: ""
      },
      reflex: {
        base: "0",
        racial: "",
        misc: "",
        temp: ""
      },
      will: {
        base: "3",
        racial: "",
        misc: "",
        temp: ""
      },
      defense_notes: "Immune to sleep effecrs, +2 against enchantment spells and effects, +7 against cold weather"
    },
    offense: {
      base_attack: "1",
      special_size_bonus: "",
      concentration: "6",
      cmb: {
        misc: "",
        temp: ""
      },
      cmd: {
        misc: "",
        temp: ""
      },
      melee_attack: {
        misc: "",
        temp: ""
      },
      ranged_attack: {
        misc: "",
        temp: ""
      },
      attack: [{
        weapon: "Rapier",
        attack: "5",
        damage: "1d6+1",
        critical: "18–20/x2",
        range: "",
        ammo: ""
      }, {
        weapon: "Shortsword +1",
        attack: "6",
        damage: "1d6+2",
        critical: "18–20/x2",
        range: "",
        ammo: ""
      }, {
        weapon: "Shortbow",
        attack: "5",
        damage: "1d6",
        critical: "x3",
        range: "60 ft",
        ammo: "50"
      }],
      attack_notes: ""
    },
    skills: {
      acrobatics: {
        ranks: "2",
        misc: ""
      },
      appraise: {
        ranks: "",
        misc: ""
      },
      bluff: {
        ranks: "",
        misc: ""
      },
      climb: {
        ranks: "",
        misc: ""
      },
      craft: {
        ranks: "",
        misc: ""
      },
      diplomacy: {
        ranks: "",
        misc: ""
      },
      disguise: {
        ranks: "",
        misc: ""
      },
      escape_artist: {
        ranks: "",
        misc: ""
      },
      fly: {
        ranks: "",
        misc: ""
      },
      heal: {
        ranks: "",
        misc: ""
      },
      intimidate: {
        ranks: "",
        misc: ""
      },
      knowledge_arcana: {
        ranks: "1",
        misc: "3"
      },
      knowledge_dungeoneering: {
        ranks: "",
        misc: ""
      },
      knowledge_engineering: {
        ranks: "",
        misc: ""
      },
      knowledge_geography: {
        ranks: "",
        misc: ""
      },
      knowledge_history: {
        ranks: "",
        misc: ""
      },
      knowledge_local: {
        ranks: "",
        misc: ""
      },
      knowledge_nature: {
        ranks: "",
        misc: ""
      },
      knowledge_nobility: {
        ranks: "",
        misc: ""
      },
      knowledge_planes: {
        ranks: "",
        misc: ""
      },
      knowledge_religion: {
        ranks: "",
        misc: ""
      },
      linguistics: {
        ranks: "",
        misc: ""
      },
      perception: {
        ranks: "2",
        misc: "2"
      },
      perform: {
        ranks: "",
        misc: ""
      },
      ride: {
        ranks: "2",
        misc: "3"
      },
      sense_motive: {
        ranks: "",
        misc: ""
      },
      spellcraft: {
        ranks: "2",
        misc: "3"
      },
      stealth: {
        ranks: "1",
        misc: ""
      },
      survival: {
        ranks: "",
        misc: ""
      },
      swim: {
        ranks: "",
        misc: ""
      },
      use_magic_device: {
        ranks: "",
        misc: ""
      },
    },
    spells: {
      per_day: {
        level_0: "4",
        level_1: "3",
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
        level_0: "13",
        level_1: "14",
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
      book: [
        // level 1
        { name: "Acid Splash", level: 0, prepared: 0, active: false, cast: 0 },
        { name: "Arcane Mark", level: 0, prepared: 0, active: false, cast: 0 },
        { name: "Dancing Lights", level: 0, prepared: 1, active: false, cast: 0 },
        { name: "Daze", level: 0, prepared: 0, active: false, cast: 0 },
        { name: "Detect Magic", level: 0, prepared: 1, active: false, cast: 0 },
        { name: "Disrupt Undead", level: 0, prepared: 0, active: false, cast: 0 },
        { name: "Flare", level: 0, prepared: 0, active: false, cast: 0 },
        { name: "Ghost Sound", level: 0, prepared: 0, active: false, cast: 0 },
        { name: "Light", level: 0, prepared: 0, active: false, cast: 0 },
        { name: "Mage Hand", level: 0, prepared: 1, active: false, cast: 0 },
        { name: "Open Close", level: 0, prepared: 0, active: false, cast: 0 },
        { name: "Prestidigitation", level: 0, prepared: 0, active: false, cast: 0 },
        { name: "Ray of Frost", level: 0, prepared: 0, active: false, cast: 0 },
        { name: "Read Magic", level: 0, prepared: 0, active: false, cast: 0 },
        { name: "Spark", level: 0, prepared: 0, active: false, cast: 0 },
        // level 2
        { name: "Color Spray", level: 1, prepared: 0, active: false, cast: 0 },
        { name: "Grease", level: 1, prepared: 0, active: false, cast: 0 },
        { name: "Shocking Grasp", level: 1, prepared: 2, active: false, cast: 0 },
        { name: "True Strike", level: 1, prepared: 0, active: false, cast: 0 },
        { name: "Magic Missile", level: 1, prepared: 0, active: false, cast: 0 },
        { name: "Shield", level: 1, prepared: 1, active: false, cast: 0 },
        { name: "Vanish", level: 1, prepared: 0, active: false, cast: 0 },
        { name: "Obscuring Mist", level: 1, prepared: 0, active: false, cast: 0 },
        { name: "Chill Touch", level: 1, prepared: 0, active: false, cast: 0 },
        { name: "Frostbite", level: 1, prepared: 0, active: false, cast: 0 },
        { name: "Infernal Healing", level: 1, prepared: 0, active: false, cast: 0 },
        { name: "Windy Escape", level: 1, prepared: 0, active: false, cast: 0 }
      ]
    },
    character_notes: "<strong>Low-Light Vision (Ex)</strong> See x2 as far as humans in low illumination,<br><br><strong>Elven Immunities (Ex)</strong> Immune to magic sleep effects, +2 against Enchantment spells and effects,<br><br><strong>Elven Magic (Ex)</strong> +2 caster level checks made to overcome SR. +2 Spellcraft check to identify properties of magic items,<br><br><strong>Weapon Familiarity (Ex)</strong> Proficient with longbows (including composite longbows), longswords, rapiers, and shortbows (including composite shortbows), treat weapon with \"elven\" in name as a martial weapon),<br><br><strong>Keen Senses (Ex)</strong> +2 Perception checks,<br><br><strong>Arcane Pool</strong> 4,<br><br><strong>Cantrips</strong> <strong>Spell Combat (EX)</strong> cast spells and wield his weapons at the same time."
  };

  // exposed methods
  return {
    data: data
  };

})();

var vos = (function() {

  var data = {
    basics: {
      name: "Vos Thunderstomp",
      race: "Dwarf",
      class: "Monk",
      level: "2",
      size: "Medium",
      alignment: "Chaotic Neutral",
      xp: "3,852",
      height: "5'0",
      weight: "190 lbs",
      age: "40 years",
      gender: "Male",
      speed: "20 feet/4 squares",
      initiative: "2",
      platinum: "",
      gold: "150",
      silver: "5",
      copper: "",
      hero_points: "",
      luck_points: ""
    },
    statistics: {
      stats: {
        str: {
          score: "16",
          temp: ""
        },
        dex: {
          score: "14",
          temp: ""
        },
        con: {
          score: "12",
          temp: ""
        },
        int: {
          score: "10",
          temp: ""
        },
        wis: {
          score: "14",
          temp: ""
        },
        cha: {
          score: "7",
          temp: ""
        }
      },
      feats: "Improved Grapple, Weapon Focus (Grapple)",
      traits: "",
      languages: "Common, Dwarven",
      special_abilities: "Darkvision, Defensive Training, Greed, Hatred, Hardy, Stability, Stonecunning, Weapon Familiarity, Evasion, Flurry of Blows (Ex), Stunning Fist (Ex), Unarmed Strike, Evasion (Ex)"
    },
    equipment: {
      gear: "Backpack, Flask Of Oil (3), Pouch (belt), Sack, Candle, Flint And Steel, Tindertwig, Rations (5 Days), Waterskin, Bedroll, Blanket, Bloodblock, Rope (silk), Mirror, Compass, Ink, Inkpen, Paper Sheets, Case For Maps/scrolls, Torch, Rubbing Poweder, Rubbing Oils, Fine Cheese (1), Smelly Cheese (3), Wine (2), Wrestling Costume (2), Alchemist Fire (3), Dagger",
      magic_gear: "Potion of Cure Light Wounds (2), Potion of Owls Wisdom (1), Kessens Boon (1)",
      encumbrance: {
        light: "76 lbs or less",
        medium: "77–153 lbs",
        heavy: "154–230 lbs"
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
        headband: "",
        neck: "",
        ring_left_hand: "",
        ring_right_hand: "",
        shield: "",
        shoulders: "Cloak of Resistance +1",
        wrist: "Bracers of Armor +1"
      },
      consumable: [{
        item: "Scented Oils",
        total: "5",
        used: ""
      }]
    },
    defense: {
      hp: {
        total: "17",
        temp: "",
        current: "17",
        non_lethal: ""
      },
      ac: {
        flat_footed: {
          misc: "2",
          temp: ""
        },
        touch: {
          misc: "2",
          temp: ""
        },
        misc: "2",
        temp: "",
        armor: "1",
        shield: "",
        deflect: "",
        dodge: "",
        natural: "",
        size_bonus: ""
      },
      fortitude: {
        base: "3",
        racial: "",
        misc: "1",
        temp: ""
      },
      reflex: {
        base: "3",
        racial: "",
        misc: "1",
        temp: ""
      },
      will: {
        base: "3",
        racial: "",
        misc: "1",
        temp: ""
      },
      defense_notes: "+2 against poison, spells, and spell-like abilities."
    },
    offense: {
      base_attack: "1",
      special_size_bonus: "",
      concentration: "",
      cmb: {
        misc: "",
        temp: ""
      },
      cmd: {
        misc: "",
        temp: ""
      },
      melee_attack: {
        misc: "",
        temp: ""
      },
      ranged_attack: {
        misc: "",
        temp: ""
      },
      attack: [{
        weapon: "Flurry of Blows",
        attack: "3/3",
        damage: "1d6+3",
        critical: "20x2",
        range: "",
        ammo: ""
      }, {
        weapon: "Grapple",
        attack: "7",
        damage: "1d6+3",
        critical: "20x2",
        range: "",
        ammo: ""
      }, {
        weapon: "Stunning Fist",
        attack: "5",
        damage: "1d6+3",
        critical: "20x2",
        ammo: "",
        range: ""
      }],
      attack_notes: "+1 weapon focus, +2 grapple, +2 to resist grapple"
    },
    skills: {
      acrobatics: {
        ranks: "2",
        misc: "3"
      },
      appraise: {
        ranks: "",
        misc: "2"
      },
      bluff: {
        ranks: "",
        misc: ""
      },
      climb: {
        ranks: "2",
        misc: "3"
      },
      craft: {
        ranks: "",
        misc: ""
      },
      diplomacy: {
        ranks: "",
        misc: ""
      },
      disguise: {
        ranks: "",
        misc: ""
      },
      escape_artist: {
        ranks: "",
        misc: ""
      },
      fly: {
        ranks: "",
        misc: ""
      },
      heal: {
        ranks: "",
        misc: ""
      },
      intimidate: {
        ranks: "",
        misc: ""
      },
      knowledge_arcana: {
        ranks: "",
        misc: ""
      },
      knowledge_dungeoneering: {
        ranks: "",
        misc: ""
      },
      knowledge_engineering: {
        ranks: "",
        misc: ""
      },
      knowledge_geography: {
        ranks: "",
        misc: ""
      },
      knowledge_history: {
        ranks: "",
        misc: ""
      },
      knowledge_local: {
        ranks: "",
        misc: ""
      },
      knowledge_nature: {
        ranks: "",
        misc: ""
      },
      knowledge_nobility: {
        ranks: "",
        misc: ""
      },
      knowledge_planes: {
        ranks: "",
        misc: ""
      },
      knowledge_religion: {
        ranks: "",
        misc: ""
      },
      linguistics: {
        ranks: "",
        misc: ""
      },
      perception: {
        ranks: "2",
        misc: "3"
      },
      perform: {
        ranks: "",
        misc: ""
      },
      ride: {
        ranks: "",
        misc: ""
      },
      sense_motive: {
        ranks: "",
        misc: ""
      },
      spellcraft: {
        ranks: "",
        misc: ""
      },
      stealth: {
        ranks: "2",
        misc: "3"
      },
      survival: {
        ranks: "",
        misc: ""
      },
      swim: {
        ranks: "",
        misc: ""
      },
      use_magic_device: {
        ranks: "",
        misc: ""
      },
    },
    spells: {
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
      book: []
    },
    character_notes: "<strong>Darkvision</strong> See in the dark up to 60 feet.<br><br><strong>Defensive Training</strong> +4 dodge bonus to AC against monsters of the giant subtype.<br><br><strong>Greed</strong> +2 racial bonus on Appraise skill checks made to determine the price of nonmagical goods that contain precious metals or gemstones.<br><br><strong>Hatred</strong> +1 bonus on attack rolls against humanoid creatures of the orc and goblinoid subtypes.<br><br><strong>Hardy</strong> +2 racial bonus on saving throws against poison, spells, and spell-like abilities.<br><br><strong>Stability</strong> +4 racial bonus to their Combat Maneuver Defense when resisting a bull rush or trip attempt while standing on the ground.<br><br><strong>Stonecunning</strong> +2 bonus on Perception checks to notice unusual stonework, such as traps and hidden doors located in stone walls or floors.<br><br><strong>Weapon Familiarity</strong> Dwarves are proficient with battleaxes, heavy picks, and warhammers, and treat any weapon with the word \"dwarven\" in its name as a martial weapon.<br><br><strong>Evasion</strong> On a successful Reflex save against an attack that normally deals half damage take no damage.<br><br><strong>Flurry of Blows (Ex)</strong> Make a flurry of blows as a full-attack. Taking a -2 penalty on all of his attack rolls, as if using the Two-Weapon Fighting feat.<br><br><strong>Stunning Fist (Ex)</strong> Gain Stunning Fist as a bonus feat. Fortitude saving DC 10 + 1/2 your character level + your Wis modifier.<br><br><strong>Unarmed Strike</strong> Gain Improved Unarmed Strike as a bonus feat. Add full Strength bonus on damage rolls for all unarmed strikes. You can choose to deal lethal or nonlethal damage with no penalty on his attack or grappling rolls. Unarmed damage is 1d6 plus Strength bonus.<br><br><strong>Evasion (Ex)</strong> On a successful Reflex save against an attack that normally deals half damage take no damage.<br><br><strong>Weapon Focus</strong> +1 bonus on attack rolls with one weapon (Grapple)<br><br><strong>Improved Grapple</strong> You do not provoke an attack of opportunity when performing a grapple combat maneuver. +2 to grapple a foe. +2 CMD whenever an opponent tries to grapple you."
  };

  // exposed methods
  return {
    data: data
  };

})();

var hardCodedCharacters = (function() {

  var load = [nif.data, ro.data, vos.data];

  // exposed methods
  return {
    load: load
  };

})();

var helper = (function() {

  // methods on this object 
  function e(selector) {
    return document.querySelector(selector);
  };

  function eA(selector) {
    return document.querySelectorAll(selector);
  };

  function toggleClass(element, theClassName) {
    element.classList.toggle(theClassName);
  };

  function addClass(element, theClassName) {
    element.classList.add(theClassName);
  };

  function removeClass(element, theClassName) {
    element.classList.remove(theClassName);
  };

  function delayFunction(functionToDelay, time) {
    window.setTimeout(functionToDelay, time);
  };

  function selectText(element) {
    var node = helper.e(element);
    if (document.selection) {
      var range = document.body.createTextRange();
      range.moveToElementText(node);
      range.select();
    } else if (window.getSelection) {
      var range = document.createRange();
      range.selectNodeContents(node);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
    }
  };

  function updateObject(object, path, newValue) {
    var address = path.split('.');
    while (address.length > 1) {
      object = object[address.shift()];
    };
    object[address.shift()] = newValue;
  };

  function getObject(object, path) {
    var address = path.split('.');
    while (address.length > 1) {
      object = object[address.shift()];
    };
    return object[address.shift()];
  };

  function getClosest(element, selector) {
    var firstChar = selector.charAt(0);
    // Get closest match
    for (; element && element !== document; element = element.parentNode) {
      // If selector is a class
      if (firstChar === '.') {
        if (element.classList.contains(selector.substr(1))) {
          return element;
        };
      };
      // If selector is an ID
      if (firstChar === '#') {
        if (element.id === selector.substr(1)) {
          return element;
        };
      };
      // If selector is a data attribute
      if (firstChar === '[') {
        if (element.hasAttribute(selector.substr(1, selector.length - 2))) {
          return element;
        };
      };
      // If selector is a tag
      if (element.tagName.toLowerCase() === selector) {
        return element;
      };
    };
    return false;
  };

  // exposed methods
  return {
    e: e,
    eA: eA,
    toggleClass: toggleClass,
    addClass: addClass,
    removeClass: removeClass,
    getClosest: getClosest,
    selectText: selectText,
    delayFunction: delayFunction,
    updateObject: updateObject,
    getObject: getObject
  };

})();

var sheet = (function() {

  var allCharacters = blank.data;

  var currentCharacterIndex = 0;

  var saveHardCodedCharacters = (function() {
    if (read("allCharacters")) {
      allCharacters = JSON.parse(read("allCharacters"));
    } else if (typeof hardCodedCharacters !== "undefined") {
      allCharacters = hardCodedCharacters.load;
    };
    storeCharacters();
  })();

  var setCurrentCharacterIndex = (function() {
    if (read("charactersIndex")) {
      currentCharacterIndex = read("charactersIndex");
    };
  })();

  function storeCharacters() {
    store("allCharacters", JSON.stringify(allCharacters));
  };

  function getAllCharacters() {
    return allCharacters;
  };

  function getCharacter() {
    return allCharacters[currentCharacterIndex];
  };

  function getIndex() {
    return currentCharacterIndex;
  };

  function setIndex(index) {
    currentCharacterIndex = index;
    store("charactersIndex", currentCharacterIndex);
  };

  function addCharacter() {
    allCharacters.push(JSON.parse(JSON.stringify(blank.data)));
    var newIndex = getAllCharacters().length - 1;
    setIndex(newIndex);
    storeCharacters();
    clear();
    render();
    nav.clear();
    nav.render(getAllCharacters());
  };

  function removeCharacter() {
    var name = allCharacters[currentCharacterIndex].basics.name || "New character";
    allCharacters.splice(getIndex(), 1);
    var lastCharacterRemoved = false;
    if (allCharacters.length == 0) {
      addCharacter();
      lastCharacterRemoved = true;
    };
    setIndex(0);
    clear();
    render();
    storeCharacters();
    nav.clear();
    nav.render(getAllCharacters());
    if (lastCharacterRemoved) {
      snack.render(name + " removed. New character added.", false, false);
    } else {
      snack.render(name + " removed.", false, false);
    };
  };

  function store(key, data) {
    if (localStorage.getItem) {
      localStorage.setItem(key, data);
    };
  };

  function remove(key) {
    if (localStorage.getItem) {
      localStorage.removeItem(key);
    };
  };

  function read(key) {
    if (localStorage.getItem(key) == "") {
      localStorage.removeItem(key);
    } else if (localStorage.getItem(key)) {
      return localStorage.getItem(key);
    };
  };

  function destroy() {
    localStorage.clear();
    prompt.destroy();
    snack.destroy();
    document.location.reload(true);
    // destroy and reset without reload
    // localStorage.clear();
    // prompt.destroy();
    // snack.destroy();
    // allCharacters = [{
    //     clone: {},
    //     input: {},
    //     textarea: {},
    //     spells: []
    //   }];
    // if (typeof hardCodedCharacters !== "undefined") {
    //   allCharacters = hardCodedCharacters.load;
    // };
    // currentCharacterIndex = 0;
    // storeCharacters();
    // setIndex(currentCharacterIndex);
    // clear();
    // render();
    // nav.clear();
    // nav.render(sheet.getAllCharacters());
    // snack.render("All characters removed.", false, false);
  };

  function clear() {
    var allInputBlock = helper.eA(".input-block");
    var allTextareaBlock = helper.eA(".textarea-block");
    var allCloneTarget = helper.eA(".clone-target");
    var allSpellsKnown = helper.eA(".spells-known");
    for (var i = 0; i < allInputBlock.length; i++) {
      var input = allInputBlock[i].querySelector(".input-field");
      helper.e("#" + input.id).value = "";
    };
    for (var i = 0; i < allTextareaBlock.length; i++) {
      helper.e("#" + allTextareaBlock[i].id).innerHTML = "";
    };
    for (var i = 0; i < allCloneTarget.length; i++) {
      allCloneTarget[i].innerHTML = "";
    };
    for (var i = 0; i < allSpellsKnown.length; i++) {
      allSpellsKnown[i].innerHTML = "";
    };
    stats.render();
    totalBlock.render();
  };

  function printCharacterObject(index) {
    var exportData = JSON.stringify(allCharacters[currentCharacterIndex], null, " ");
    prompt.render("code", "Character object data:", exportData, "download");
    helper.selectText(".prompt pre");
  };

  function downloadCharacterObject(element) {
    var object = allCharacters[currentCharacterIndex];
    var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(object), null, " ");
    element.href = "data:" + data;
  };

  function render() {
    inputBlock.render();
    textareaBlock.render();
    stats.render();
    totalBlock.render();
    clone.render();
    consumable.render();
    spells.render();
  };

  // exposed methods
  return {
    getAllCharacters: getAllCharacters,
    getCharacter: getCharacter,
    addCharacter: addCharacter,
    removeCharacter: removeCharacter,
    getIndex: getIndex,
    setIndex: setIndex,
    storeCharacters: storeCharacters,
    destroy: destroy,
    store: store,
    remove: remove,
    read: read,
    clear: clear,
    download: downloadCharacterObject,
    print: printCharacterObject,
    render: render
  };

})();

var nav = (function() {


  function _fullscreen() {
    var fullscreen = helper.e(".fullscreen");
    var root = window.document;
    var icon = fullscreen.querySelector("span");
    var rootElement = root.documentElement;
    var requestFullScreen = rootElement.requestFullscreen || rootElement.mozRequestFullScreen || rootElement.webkitRequestFullScreen || rootElement.msRequestFullscreen;
    var cancelFullScreen = root.exitFullscreen || root.mozCancelFullScreen || root.webkitExitFullscreen || root.msExitFullscreen;
    if (!root.fullscreenElement && !root.mozFullScreenElement && !root.webkitFullscreenElement && !root.msFullscreenElement) {
      requestFullScreen.call(rootElement);
      helper.toggleClass(fullscreen, "active");
      helper.toggleClass(icon, "icon-fullscreen-exit");
      helper.toggleClass(icon, "icon-fullscreen");
    } else {
      cancelFullScreen.call(root);
      helper.toggleClass(fullscreen, "active");
      helper.toggleClass(icon, "icon-fullscreen-exit");
      helper.toggleClass(icon, "icon-fullscreen");
    }
  };

  function _render_navCharacters(characterName, characterIndex) {
    if (typeof characterName == "undefined" || characterName == "") {
      characterName = "New character";
    };
    var navLi = document.createElement("li");
    var icon = document.createElement("span");
    icon.setAttribute("class", "icon icon-check-box-unchecked");
    var text = document.createElement("span");
    text.textContent = characterName;
    text.setAttribute("class", "name");
    var navAnchor = document.createElement("a");
    navAnchor.setAttribute("href", "javascript:void(0)");
    navAnchor.setAttribute("data-character-index", characterIndex);
    navAnchor.setAttribute("class", "clearfix character-toggle character-index-" + characterIndex);
    navAnchor.setAttribute("tabindex", 10);
    navAnchor.appendChild(icon);
    navAnchor.appendChild(text);
    navLi.appendChild(navAnchor);
    _bind_characterOption(navAnchor, characterIndex);
    return navLi;
  };

  function _bind_characterOption(characterLink, newIndex) {
    characterLink.addEventListener("click", function() {
      _switch_character(this);
      sheet.storeCharacters();
      sheet.setIndex(newIndex);
      sheet.clear();
      sheet.render();
    }, false);
  };

  function _switch_character(characterLink) {
    var newIndex = characterLink.dataset.characterIndex;
    var allCharacterAnchor = helper.eA(".character-toggle");
    sheet.setIndex(newIndex);
    for (var i = 0; i < allCharacterAnchor.length; i++) {
      var icon = allCharacterAnchor[i].querySelector(".icon");
      helper.removeClass(icon, "icon-check-box-checked");
      helper.addClass(icon, "icon-check-box-unchecked");
      helper.removeClass(allCharacterAnchor[i], "active");
    };
    var icon = characterLink.querySelector(".icon");
    helper.removeClass(icon, "icon-check-box-unchecked");
    helper.addClass(icon, "icon-check-box-checked");
    helper.addClass(characterLink, "active");
    var name = sheet.getCharacter().basics.name;
    if (typeof name == "undefined" || name == "") {
      name = "New character";
    };
    snack.render("Switched to " + name + ".", false, false);
  };

  function clear() {
    var navCharacters = helper.e(".nav-characters");
    navCharacters.innerHTML = "";
  };

  function render(array) {
    var navCharacters = helper.e(".nav-characters");
    for (var i in array) {
      var characterAnchor =_render_navCharacters(array[i].basics.name, i);
      navCharacters.appendChild(characterAnchor);
      if (i == sheet.getIndex()) {
        var icon = characterAnchor.querySelector(".icon");
        var anchor = characterAnchor.querySelector("a");
        helper.removeClass(icon, "icon-check-box-unchecked");
        helper.addClass(icon, "icon-check-box-checked");
        helper.addClass(icon, "icon-check-box-checked");
        helper.addClass(anchor, "active");
      };
    };
  };

  function navClose() {
    helper.removeClass(helper.e("nav"), "open");
  };

  function navOpen() {
    helper.addClass(helper.e("nav"), "open");
  };

  function navToggle() {
    helper.toggleClass(helper.e("nav"), "open");
  };

  function remove() {
    var name;
    if (sheet.getCharacter().basics.name) {
      name = sheet.getCharacter().basics.name;
    } else {
      name = "New character";
    };
    prompt.render("confirm", "Remove " + name + "?", "This character will be removed. This can not be undone.", "clear character");
  };

  function resizeNavList() {
    var navList = helper.e(".nav-list");
    var height = window.innerHeight - 120;
    navList.style.maxHeight = height + "px";
  };

  function bind() {
    var nav = helper.e("nav");
    var navToggleElement = helper.e(".nav-toggle");
    var fullscreen = helper.e(".fullscreen");
    var clearAll = helper.e(".clear-all");
    var characterAdd = helper.e(".character-add");
    var characterRemove = helper.e(".character-remove");
    var characterExport = helper.e(".character-export");
    navToggleElement.addEventListener("click", function() {
      navToggle();
    }, false);
    fullscreen.addEventListener("click", function() {
      _fullscreen();
    }, false);
    clearAll.addEventListener("click", function() {
      prompt.render("confirm", "Are you sure?", "All characters will be removed. This can not be undone.", "clear all");
      navClose();
    }, false);
    characterExport.addEventListener("click", function() {
      sheet.print();
      navClose();
    }, false);
    characterAdd.addEventListener("click", function() {
      sheet.addCharacter();
      snack.render("New character added.", false, false);
    }, false);
    characterRemove.addEventListener("click", function() {
      remove();
    }, false);
    window.addEventListener('click', function(event) {
      if (event.target != nav && helper.getClosest(event.target, "nav") != nav) {
        navClose();
      };
    }, false);
    window.addEventListener("keydown", function(event) {
      if (event.keyCode == 27) {
        navClose();
      };
    }, false);
    window.addEventListener("resize", function(event) {
      resizeNavList();
    }, false);
  };

  // exposed methods
  return {
    bind: bind,
    resizeNavList: resizeNavList,
    clear: clear,
    render: render,
    open: navOpen,
    close: navClose,
    toggle: navToggle
  }

})();

var prompt = (function() {

  function render(promptType, heading, content, confirmAction) {
    var body = helper.e("body");
    var promptShade = document.createElement("div");
    promptShade.setAttribute("class", "prompt prompt-shade");
    var prompt = document.createElement("div");
    prompt.setAttribute("class", "prompt prompt-modal");
    var container = document.createElement("div");
    container.setAttribute("class", "container");
    var rowForMessage = document.createElement("div");
    rowForMessage.setAttribute("class", "row");
    var rowForActions = document.createElement("div");
    rowForActions.setAttribute("class", "row");
    var colForMessage = document.createElement("div");
    colForMessage.setAttribute("class", "col-xs-12");
    var colForCancel = document.createElement("div");
    colForCancel.setAttribute("class", "col-xs-6");
    var colForConfirm = document.createElement("div");
    colForConfirm.setAttribute("class", "col-xs-6");
    var colForConfirmOnly = document.createElement("div");
    colForConfirmOnly.setAttribute("class", "col-xs-12 col-sm-6 col-sm-offset-6");
    var promptMessage = document.createElement("div");
    promptMessage.setAttribute("class", "prompt-message");
    var promptHeading = document.createElement("h1");
    var promptPara = document.createElement("p");
    var promptAction = document.createElement("button");
    promptAction.setAttribute("class", "button button-primary button-block prompt-action");
    var promptDownload = document.createElement("a");
    promptDownload.setAttribute("class", "button button-primary button-block prompt-action");
    promptDownload.setAttribute("download", sheet.getCharacter().basics.name + ".json");
    var promptCencel = document.createElement("button");
    promptCencel.setAttribute("class", "button button-secondary button-block prompt-cancel");
    var promptPre = document.createElement("pre");
    if (promptType == "confirm") {
      promptHeading.textContent = heading;
      promptPara.textContent = content;
      promptAction.textContent = "OK";
      promptCencel.textContent = "Cancel";
      promptMessage.appendChild(promptHeading);
      promptMessage.appendChild(promptPara);
      colForMessage.appendChild(promptMessage);
      rowForMessage.appendChild(colForMessage);
      colForCancel.appendChild(promptCencel);
      rowForActions.appendChild(colForCancel);
      colForConfirm.appendChild(promptAction);
      rowForActions.appendChild(colForConfirm);
      container.appendChild(rowForMessage);
      container.appendChild(rowForActions);
      prompt.appendChild(container);
    };
    if (promptType == "code") {
      promptHeading.textContent = heading;
      promptPre.textContent = content;
      promptDownload.textContent = "Download";
      promptCencel.textContent = "Cancel";
      promptMessage.appendChild(promptHeading);
      promptMessage.appendChild(promptPre);
      colForMessage.appendChild(promptMessage);
      rowForMessage.appendChild(colForMessage);
      colForCancel.appendChild(promptCencel);
      colForConfirm.appendChild(promptDownload);
      rowForActions.appendChild(colForCancel);
      rowForActions.appendChild(colForConfirm);
      container.appendChild(rowForMessage);
      container.appendChild(rowForActions);
      prompt.appendChild(container);
    };
    // append prompt and shade
    if (!body.querySelector(".prompt.prompt-shade") && !body.querySelector(".prompt.prompt-modal")) {
      body.appendChild(promptShade);
      body.appendChild(prompt);
      var _reveal_prompt = function() {
        helper.addClass(prompt, "reveal");
        helper.addClass(promptShade, "reveal");
      };
      helper.delayFunction(_reveal_prompt, 10);
      _bind(confirmAction);
    };
  };

  function destroy() {
    var promptShade = helper.e(".prompt-shade");
    var promptModal = helper.e(".prompt-modal");
    var promptCancel = helper.e(".prompt-modal .prompt-cancel");
    if (promptShade && promptModal) {
      promptShade.style.opacity = 0;
      promptModal.style.opacity = 0;

      var _delay_destroy = function() {
        promptShade.remove();
        promptModal.remove();
      }
      helper.delayFunction(_delay_destroy, 500);
    };
  };

  function _bind(confirmAction) {
    var promptShade = helper.e(".prompt-shade");
    var promptModal = helper.e(".prompt-modal");
    var promptAction = helper.e(".prompt-modal .prompt-action");
    var promptCancel = helper.e(".prompt-modal .prompt-cancel");
    promptShade.addEventListener('click', function() {
      destroy();
    });
    if (confirmAction == "clear all") {
      promptAction.addEventListener('click', function() {
        destroy();
        sheet.destroy();
      }, false);
    };
    if (confirmAction == "clear character") {
      promptAction.addEventListener('click', function() {
        sheet.removeCharacter();
        destroy();
      }, false);
    };
    if (confirmAction == "download") {
      promptAction.addEventListener('click', function() {
        sheet.download(this);
      }, false);
    };
    promptCancel.addEventListener('click', function() {
      destroy();
    }, false);
    window.addEventListener("keydown", function(event) {
      if (event.keyCode == 27) {
        destroy();
      };
    }, false);
  };

  // exposed methods
  return {
    render: render,
    destroy: destroy
  };

})();

var snack = (function() {

  function render(message, close) {
    var element_snackBars = helper.e(".snacks .snack-bars");
    // make snack bar elements
    var snackBar = document.createElement("div");
    snackBar.setAttribute("class", "snack-bar");
    var row = document.createElement("div");
    row.setAttribute("class", "row");
    var col1 = document.createElement("div");
    col1.setAttribute("class", "col-xs-7");
    var col2 = document.createElement("div");
    col2.setAttribute("class", "col-xs-5");
    var snackClose = document.createElement("button");
    snackClose.setAttribute("class", "button button-dark button-small snack-clear");
    // var snackUndo = document.createElement("button");
    // snackUndo.setAttribute("class", "button button-dark button-small snack-undo");
    // snackUndo.textContent = "Undo";
    var iconClose = document.createElement("span");
    iconClose.setAttribute("class", "icon-close");
    var snackMessage = document.createElement("p");
    snackMessage.setAttribute("class", "snack-message");
    snackMessage.textContent = message;
    snackClose.appendChild(iconClose);
    // connect elements
    if (close) {
      col2.appendChild(snackClose);
    };
    // if (undo) {
    //   col2.appendChild(snackUndo);
    // };
    col1.appendChild(snackMessage);
    row.appendChild(col1);
    row.appendChild(col2);
    // container.appendChild(row);
    snackBar.appendChild(row);
    // mark current snack bars for removal
    var allSnackBars = element_snackBars.querySelectorAll(".snack-bar");
    for (var i = 0; i < allSnackBars.length; i++) {
      var snackBarToRemove = allSnackBars[i];

      var _removeReveal = function() {
        helper.removeClass(snackBarToRemove, "reveal");
      };
      helper.delayFunction(_removeReveal, 100);

      var _deleteSnackBar = function() {
        snackBarToRemove.remove();
      };
      helper.delayFunction(_deleteSnackBar, 400);
    };
    // append snack bar
    element_snackBars.appendChild(snackBar);
    // add listners
    _bind(snackBar);
    // reveal snack bar
    var _revealSnackBar = function() {
      helper.addClass(snackBar, "reveal");
    };
    var currentSnackBars = element_snackBars.querySelectorAll(".snack-bar");
    if (currentSnackBars.length > 1) {
      helper.delayFunction(_revealSnackBar, 300);
    } else {
      helper.delayFunction(_revealSnackBar, 10);
    };
    // auto clear snack bar
    var _delay_destroy = function() {
      // if the snack bar hasn't been dismised or undone
      if (snackBar) {
        destroy(snackBar);
      };
    };
    helper.delayFunction(_delay_destroy, 5000);
  };

  // add listeners to snack bar buttons
  function _bind(element) {
    var snack = helper.getClosest(element, ".snack-bar");
    var clear = snack.querySelector(".snack-clear");
    // var undo = snack.querySelector(".snack-undo");
    // add listner to clear
    if (clear) {
      clear.addEventListener("click", function() {
        destroy(this);
      }, false);
    };
    // add listner to undo
    // if (undo) {
    //   undo.addEventListener("click", function() {
    //     undoSnackBar(this);
    //     checkListListState();
    //   }, false);
    // };
    window.addEventListener("keydown", function(event) {
      if (event.keyCode == 27) {
        destroy();
      };
    }, false);
  };

  // snack bar clear
  function destroy(element) {
    if (element) {
      var snackBar = helper.getClosest(element, ".snack-bar");
    } else {
      var snackBar = helper.e(".snack-bar");
    };
    if (snackBar) {
      var _removeReveal = function() {
        helper.removeClass(snackBar, "reveal");
      };
      helper.delayFunction(_removeReveal, 10);

      var _deleteSnackBar = function() {
        snackBar.remove();
      };
      helper.delayFunction(_deleteSnackBar, 500);
    };
  };

  // exposed methods
  return {
    render: render,
    destroy: destroy
  }

})();

var clone = (function() {

  function _newConsumable(index) {
    var cloneString =
      '<div class="row">' +
      '<div class="col-xs-12">' +
      '<div class="row no-gutter">' +
      '<div class="col-xs-12">' +
      '<div class="consumable-bar">' +
      '<div class="consumable-bar-percentage"><span class="percentage-total">100%</span></div>' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-8">' +
      '<div class="input-block">' +
      '<label class="input-label" for="input-item-' + index + '">Item</label>' +
      '<input class="input-field input-item" id="input-item-' + index + '" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-2">' +
      '<div class="input-block">' +
      '<label class="input-label" for="input-total-' + index + '">Total</label>' +
      '<input class="input-field consumable-total input-total" id="input-total-' + index + '" type="number" tabindex="3">' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-2">' +
      '<div class="input-block">' +
      '<label class="input-label" for="input-used-' + index + '">Used</label>' +
      '<input class="input-field consumable-used input-used" id="input-used-' + index + '" type="number" tabindex="3">' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-4 col-xs-offset-4">' +
      '<div class="clone-delete-controls">' +
      '<button class="button button-primary button-small button-block" tabindex="3"><span class="icon-close"></span></button>' +
      '</div>' +
      '</div>' +
      '</div>';
    return cloneString;
  };

  function _newAttack(index) {
    var cloneString =
      '<div class="row no-gutter">' +
      '<div class="col-xs-6 col-md-4">' +
      '<div class="input-block">' +
      '<label class="input-label" for="input-weapon-' + index + '">Weapon</label>' +
      '<input class="input-field input-weapon" id="input-weapon-' + index + '" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-3 col-md-2">' +
      '<div class="input-block">' +
      '<label class="input-label" for="input-attack-' + index + '">Attack</label>' +
      '<input class="input-field input-attack" id="input-attack-' + index + '" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-3 col-md-2">' +
      '<div class="input-block">' +
      '<label class="input-label" for="input-damage-' + index + '">Damage</label>' +
      '<input class="input-field input-damage" id="input-damage-' + index + '" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-4 col-md-2">' +
      '<div class="input-block">' +
      '<label class="input-label" for="input-critical-' + index + '">Critical</label>' +
      '<input class="input-field input-critical" id="input-critical-' + index + '" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-4 col-md-1">' +
      '<div class="input-block">' +
      '<label class="input-label" for="input-range-' + index + '">Range</label>' +
      '<input class="input-field input-range" id="input-range-' + index + '" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-4 col-md-1">' +
      '<div class="input-block">' +
      '<label class="input-label" for="input-ammo-' + index + '">Ammo</label>' +
      '<input class="input-field input-ammo" id="input-ammo-' + index + '" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-4 col-xs-offset-4">' +
      '<div class="clone-delete-controls">' +
      '<button class="button button-primary button-small button-block" id="remove-attack" tabindex="3"><span class="icon-close"></span></button>' +
      '</div>' +
      '</div>' +
      '</div>';
    return cloneString;
  };

  function _minMaxCountLimit(input) {
    if (input.value <= 0) {
      input.value = "";
    } else if (input.value >= 100) {
      input.value = 100;
    };
  };

  var _bind_cloneControls = (function() {
    var consumableCloneAdd = helper.e(".consumable .clone-add");
    var consumableCloneRemove = helper.e(".consumable .clone-remove");
    var attackCloneAdd = helper.e(".attack .clone-add");
    var attackCloneRemove = helper.e(".attack .clone-remove");
    consumableCloneAdd.addEventListener("click", function() {
      _render_clone([{ item: "", total: "", used: "" }], "consumable");
      _updateCloneConsumable();
      snack.render("Consumable added.", false, false);
      sheet.storeCharacters();
      consumable.render();
    }, false);
    consumableCloneRemove.addEventListener("click", function() {
      _changeCloneState("consumable");
      _updateCloneConsumable();
      sheet.storeCharacters();
    }, false);
    attackCloneAdd.addEventListener("click", function() {
      _render_clone([{ weapon: "", attack: "", damage: "", critical: "", ammo: "", range: "" }], "attack");
      _updateCloneAttack();
      snack.render("Attack added.", false, false);
      sheet.storeCharacters();
    }, false);
    attackCloneRemove.addEventListener("click", function() {
      _changeCloneState("attack");
      _updateCloneAttack();
      sheet.storeCharacters();
    }, false);
  })();

  function _bind_cloneRemoveButton(button, cloneType) {
    button.addEventListener("click", function() {
      _destroy_clone(this, cloneType);
      _updateCloneAttack();
      _updateCloneConsumable();
      sheet.storeCharacters();
      if (cloneType == "consumable") {
        _checkCloneCount("consumable");
        snack.render("Consumable removed.", false, false);
      };
      if (cloneType == "attack") {
        _checkCloneCount("attack");
        snack.render("Attack removed.", false, false);
      };
    }, false);
  };

  function _bind_cloneAttackInput(array) {
    for (var i = 0; i < array.length; i++) {
      var input = array[i].querySelector(".input-field");
      input.addEventListener("input", function() {
        _updateCloneAttack();
        sheet.storeCharacters();
        inputBlock.focus(this);
      }, false);
      input.addEventListener("focus", function() {
        _updateCloneAttack();
        sheet.storeCharacters();
        inputBlock.focus(this);
      }, false);
      input.addEventListener("blur", function() {
        _updateCloneAttack();
        sheet.storeCharacters();
        inputBlock.focus(this);
      }, false);
    };
  };

  function _bind_cloneConsumableInput(array) {
    for (var i = 0; i < array.length; i++) {
      var input = array[i].querySelector(".input-field");
      if (input.classList.contains("consumable-used") || input.classList.contains("consumable-total")) {
        input.addEventListener("input", function() {
          _minMaxCountLimit(this);
        }, false);
        input.addEventListener("focus", function() {
          _minMaxCountLimit(this);
        }, false);
        input.addEventListener("blur", function() {
          _minMaxCountLimit(this);
        }, false);
      };
      input.addEventListener("input", function() {
        _updateCloneConsumable();
        consumable.render();
        consumable.update();
        sheet.storeCharacters();
        inputBlock.focus(this);
      }, false);
      input.addEventListener("focus", function() {
        _updateCloneConsumable();
        consumable.render();
        consumable.update();
        sheet.storeCharacters();
        inputBlock.focus(this);
      }, false);
      input.addEventListener("blur", function() {
        _updateCloneConsumable();
        consumable.render();
        consumable.update();
        sheet.storeCharacters();
        inputBlock.focus(this);
      }, false);
    };
  };

  function _changeCloneState(cloneType) {
    var cloneBlock = helper.e("." + cloneType);
    var cloneControls = cloneBlock.querySelector(".clone-controls");
    var cloneRemove = cloneControls.querySelector(".clone-remove");
    var cloneDeleteControls = cloneBlock.querySelectorAll(".clone-delete-controls");
    var cloneTarget = cloneBlock.querySelector(".clone-target");
    var all_clone = cloneTarget.querySelectorAll(".clone");
    var cloneCount = all_clone.length;
    // change clone remove button
    helper.toggleClass(cloneRemove, "active");
    helper.toggleClass(cloneRemove, "button-primary");
    helper.toggleClass(cloneRemove, "button-secondary");
    // change clone block state
    if (cloneBlock.dataset.deleteCloneState == "true") {
      helper.removeClass(cloneBlock, "delete-state");
      cloneBlock.dataset.deleteCloneState = "false";
    } else if (cloneBlock.dataset.deleteCloneState == "false") {
      helper.addClass(cloneBlock, "delete-state");
      cloneBlock.dataset.deleteCloneState = "true";
    };
    // if clone count us 0 remove restore all classes to normal
    if (cloneCount == 0) {
      helper.removeClass(cloneBlock, "delete-state");
      cloneBlock.dataset.deleteCloneState = "false";
      helper.removeClass(cloneRemove, "active");
      helper.removeClass(cloneRemove, "button-primary");
      helper.addClass(cloneRemove, "button-secondary");
    };
  };

  function _checkCloneCount(cloneType) {
    var cloneBlock = helper.e("." + cloneType);
    var cloneControls = cloneBlock.querySelector(".clone-controls");
    var cloneRemove = cloneControls.querySelector(".clone-remove");
    var cloneDeleteControls = cloneBlock.querySelectorAll(".clone-delete-controls");
    var cloneTarget = cloneBlock.querySelector(".clone-target");
    var all_clone = cloneTarget.querySelectorAll(".clone");
    var cloneCount = all_clone.length;
    if (cloneCount == 0) {
      cloneBlock.dataset.deleteCloneState = "false";
      helper.removeClass(cloneBlock, "delete-state");
      helper.removeClass(cloneRemove, "active");
      helper.removeClass(cloneRemove, "button-primary");
      helper.addClass(cloneRemove, "button-secondary");
    };
  };

  function _destroy_clone(element, cloneType) {
    var cloneBlock = helper.getClosest(element, ".clone-block");
    var cloneTarget = cloneBlock.querySelector(".clone-target");
    var cloneToRemove = helper.getClosest(element, ".clone");
    cloneToRemove.remove();
  };

  function _render_clone(array, cloneType) {
    var cloneBlock = helper.e("." + cloneType);
    var cloneTarget = cloneBlock.querySelector(".clone-target");
    for (var i = 0; i < array.length; i++) {
      var cloneCount = cloneTarget.querySelectorAll(".clone").length;
      var cloneObject = array[i];
      var cloneString;
      var index = i;
      // make new clone node
      var newNode = document.createElement("div");
      newNode.setAttribute("class", "clone");
      // check if adding new node or adding to clone target with already existing clones
      if (index < cloneCount) {
        index = cloneCount;
      };
      if (cloneType == "consumable") {
        cloneString = _newConsumable(index);
      };
      if (cloneType == "attack") {
        cloneString = _newAttack(index);
      };
      // add content
      newNode.innerHTML = cloneString;
      // max of 100 clones
      if (cloneCount <= 99) {
        // append new clone
        cloneTarget.appendChild(newNode);
        // bind listeners
        if (cloneType == "consumable") {
          _bind_cloneConsumableInput(newNode.querySelectorAll(".input-block"));
        };
        if (cloneType == "attack") {
          _bind_cloneAttackInput(newNode.querySelectorAll(".input-block"));
        };
        _bind_cloneRemoveButton(newNode.querySelector(".clone-delete-controls button"), cloneType);
      };
      if (index == i) {
        for (var j in array[i]) {
          // read character data and fill values
          newNode.querySelector(".input-" + j.replace(/_/g, "-")).value = array[index][j];
        };
      };
    };
  };

  function _createAttackObject(weapon, attack, damage, critical, ammo, range) {
    return {
      weapon: this.weapon = weapon,
      attack: this.attack = attack,
      damage: this.damage = damage,
      critical: this.critical = critical,
      ammo: this.ammo = ammo,
      range: this.range = range
    };
  };

  function _createConsumableObject(item, total, used) {
    return {
      item: this.item = item,
      total: this.total = total,
      used: this.used = used
    };
  };

  function _updateCloneAttack() {
    var cloneBlock = helper.e(".clone-block.attack");
    var cloneTarget = cloneBlock.querySelector(".clone-target");
    var all_clone = cloneTarget.querySelectorAll(".clone");
    var cloneAttack = [];
    for (var i = 0; i < all_clone.length; i++) {
      var weapon = all_clone[i].querySelector(".input-weapon").value || "";
      var attack = all_clone[i].querySelector(".input-attack").value || "";
      var damage = all_clone[i].querySelector(".input-damage").value || "";
      var critical = all_clone[i].querySelector(".input-critical").value || "";
      var ammo = all_clone[i].querySelector(".input-ammo").value || "";
      var range = all_clone[i].querySelector(".input-range").value || "";
      var newAttack = new _createAttackObject(weapon, attack, damage, critical, ammo, range);
      cloneAttack.push(newAttack);
    };
    sheet.getCharacter().offense.attack = cloneAttack;
  };

  function _updateCloneConsumable() {
    var cloneBlock = helper.e(".clone-block.consumable");
    var cloneTarget = cloneBlock.querySelector(".clone-target");
    var all_clone = cloneTarget.querySelectorAll(".clone");
    var cloneConsumable = [];
    for (var i = 0; i < all_clone.length; i++) {
      var item = all_clone[i].querySelector(".input-item").value || "";
      var total = all_clone[i].querySelector(".input-total").value || "";
      var used = all_clone[i].querySelector(".input-used").value || "";
      var newConsumable = new _createConsumableObject(item, total, used);
      cloneConsumable.push(newConsumable);
    };
    sheet.getCharacter().equipment.consumable = cloneConsumable;
  };

  function render() {
    // build an array of clone objects
    var all_attack = [];
    var all_consumable = [];
    // iterate over all objects keys to find clones then push those values to all_attack
    if (sheet.getCharacter().offense.attack) {
      for (var i in sheet.getCharacter().offense.attack) {
        all_attack.push(sheet.getCharacter().offense.attack[i]);
      };
    };
    // iterate over all objects keys to find clones then push those values to all_consumable
    if (sheet.getCharacter().equipment.consumable) {
      for (var i in sheet.getCharacter().equipment.consumable) {
        all_consumable.push(sheet.getCharacter().equipment.consumable[i]);
      };
    };
    _render_clone(all_attack, "attack");
    _render_clone(all_consumable, "consumable");
  };

  // exposed methods
  return {
    render: render
  };

})();

var consumable = (function() {

  // // add consumable checks on total increase
  // function _addConsumableChecks(element) {
  //   var clone = helper.getClosest(element, ".clone");
  //   var consumableCounts = clone.querySelector(".consumable-counts");
  //   var consumableTotal_value = parseInt(element.value, 10) || 0;
  //   var checkGroup = consumableCounts.querySelector(".check-group");
  //   var all_checks = consumableCounts.querySelectorAll(".check").length;
  //   // make check group
  //   function _addCheckGroup() {
  //     var checkGroup = document.createElement("div");
  //     checkGroup.setAttribute("class", "check-group");
  //     consumableCounts.appendChild(checkGroup);
  //     // consumableCounts.insertBefore(checkGroup, consumableCounts.firstChild);
  //   };
  //   // if no check group is present and the input value is more than 0 make a check group
  //   if (!checkGroup) {
  //     if (consumableTotal_value > 0) {
  //       _addCheckGroup();
  //     };
  //   };
  //   // while all the checks in the block is less than the consumable value add a check to the check group
  //   while (all_checks < consumableTotal_value) {
  //     var checkGroup = consumableCounts.lastChild;
  //     // if check group children is more than or equal to 10 make a new check group and make that the new target
  //     if (checkGroup.children.length >= 10) {
  //       _addCheckGroup();
  //       checkGroup = consumableCounts.lastChild;
  //     };
  //     // make a check
  //     var check = document.createElement("span");
  //     check.setAttribute("class", "check");
  //     // add check to check group
  //     checkGroup.appendChild(check);
  //     all_checks++;
  //   };
  //   // while all the checks in the block is more than the consumable value remove a check to the check group
  //   while (all_checks > consumableTotal_value) {
  //     var checkGroup = consumableCounts.lastChild;
  //     // if check group children is more than 0 remove a check
  //     if (checkGroup.children.length > 0) {
  //       checkGroup.removeChild(checkGroup.lastChild);
  //     };
  //     // if check group children is less that or equal to 0 remove check group and set new check group as tatget  if it exists
  //     if (checkGroup.children.length <= 0) {
  //       checkGroup.remove();
  //       if (all_checks > 0) {
  //         checkGroup = consumableCounts.querySelector(".check-group");
  //       };
  //     };
  //     all_checks--;
  //   };
  //   _toggleConsumableChecks(element);
  // };

  // // toggle consumable check when used value is changed
  // function _toggleConsumableChecks(element) {
  //   var clone = helper.getClosest(element, ".clone");
  //   var consumableCounts = clone.querySelector(".consumable-counts");
  //   var consumableUsed = clone.querySelector(".consumable-used");
  //   var consumableUsed_value = parseInt(consumableUsed.value, 10) || 0;
  //   var all_checks = consumableCounts.querySelectorAll(".check");
  //   var remainingUses = all_checks.length - consumableUsed_value;
  //   // add used class to all checks
  //   for (var i = 0; i < all_checks.length; i++) {
  //     helper.addClass(all_checks[i], "used");
  //   };
  //   // remove used class from remaing checks
  //   for (var i = 0; i < remainingUses; i++) {
  //     helper.removeClass(all_checks[i], "used");
  //   };
  // };

  function _render_consumablePercentage(element) {
    var clone = helper.getClosest(element, ".clone");
    var consumableBarPercentage = clone.querySelector(".consumable-bar-percentage");
    var percentageTotal = clone.querySelector(".percentage-total");
    var consumableTotal = clone.querySelector(".consumable-total");
    var consumableUsed = clone.querySelector(".consumable-used");
    var consumableTotal_value = parseInt(consumableTotal.value, 10) || 0;
    var consumableUsed_value = parseInt(consumableUsed.value, 10) || 0;
    var pencentage = ((consumableTotal_value - consumableUsed_value) / consumableTotal_value) * 100;
    consumableBarPercentage.style.width = pencentage + "%";
    percentageTotal.textContent = consumableTotal_value - consumableUsed_value;
    if (consumableUsed_value >= consumableTotal_value) {
      helper.addClass(consumableBarPercentage, "empty");
      consumableBarPercentage.style.width = "0%";
      percentageTotal.textContent = "0";
    } else {
      helper.removeClass(consumableBarPercentage, "empty");
    };
  };

  function render() {
    var all_totals = helper.e(".clone-block.consumable").querySelectorAll(".consumable-total");
    for (var i = 0; i < all_totals.length; i++) {
      // _addConsumableChecks(all_totals[i]);
      _render_consumablePercentage(all_totals[i]);
    };
  };

  function update() {
    var all_used = helper.e(".clone-block.consumable").querySelectorAll(".consumable-used");
    for (var i = 0; i < all_used.length; i++) {
      // _toggleConsumableChecks(all_used[i]);
      _render_consumablePercentage(all_used[i]);
    };
  };

  // exposed methods
  return {
    render: render,
    update: update
  };

})();

var hidableBlock = (function() {

  function bind() {
    var all_hidableBlock = helper.eA(".hidable-block");
    for (var i = 0; i < all_hidableBlock.length; i++) {
      var hidableToggle = all_hidableBlock[i].querySelector(".hidable-toggle");
      hidableToggle.addEventListener("click", function() {
        render(this);
      }, false);
    };
  };

  function render(element) {
    var buttonLable = element.textContent;
    var icon = element.querySelector(".icon");
    var text = element.querySelector(".text");
    var hidableBlock = helper.getClosest(element, ".hidable-block");
    var all_hidable = hidableBlock.querySelectorAll(".hidable");
    var all_hidableOnEmptyInput = hidableBlock.querySelectorAll(".hidable-on-empty-input");
    var all_hideableOnEmptyTextarea = hidableBlock.querySelectorAll(".hidable-on-empty-textarea");
    // if hide button data all hidden is true remove all hidden classes and change date hidden to false
    if (hidableBlock.dataset.allHidden == "true") {
      for (var i = 0; i < all_hidable.length; i++) {
        helper.removeClass(all_hidable[i], "hidden");
      };
      for (var i = 0; i < all_hidableOnEmptyInput.length; i++) {
        helper.removeClass(all_hidableOnEmptyInput[i], "hidden");
      };
      for (var i = 0; i < all_hideableOnEmptyTextarea.length; i++) {
        helper.removeClass(all_hideableOnEmptyTextarea[i], "hidden");
      };
      hidableBlock.dataset.allHidden = "false";
      helper.toggleClass(icon, "icon-unfold-less");
      helper.toggleClass(icon, "icon-unfold-more");
      text.textContent = "Hide";
      // if hide button data all hidden is false loop through all hidable and hide all with empty inputs and change date hidden to true 
    } else if (hidableBlock.dataset.allHidden == "false") {
      for (var i = 0; i < all_hidableOnEmptyInput.length; i++) {
        var input = all_hidableOnEmptyInput[i].querySelector(".input-field");
        if (input.value == null || input.value == "") {
          helper.addClass(all_hidableOnEmptyInput[i], "hidden");
        };
      };
      for (var i = 0; i < all_hidable.length; i++) {
        helper.addClass(all_hidable[i], "hidden");
      };
      for (var i = 0; i < all_hideableOnEmptyTextarea.length; i++) {
        var textarea = all_hideableOnEmptyTextarea[i].querySelector(".textarea-block");
        if (textarea.textContent == null || textarea.textContent == "") {
          helper.addClass(all_hideableOnEmptyTextarea[i], "hidden");
        };
      };
      hidableBlock.dataset.allHidden = "true";
      helper.toggleClass(icon, "icon-unfold-less");
      helper.toggleClass(icon, "icon-unfold-more");
      text.textContent = "Show";
    };
  };

  // exposed methods
  return {
    render: render,
    bind: bind
  };

})();

var inputBlock = (function() {

  function _store(element) {
    var path = element.dataset.path;
    helper.updateObject(sheet.getCharacter(), path, element.value);
    sheet.storeCharacters();
  };


  function focus(element) {
    var inputBlockRoot = helper.getClosest(element, ".input-block");
    var inputField = inputBlockRoot.querySelector(".input-field");
    var inputLabel;
    if (inputBlockRoot.querySelector(".input-label")) {
      var inputLabel = inputBlockRoot.querySelector(".input-label");
    };
    if (inputBlockRoot.querySelector(".input-label")) {
      if (inputField == document.activeElement) {
        helper.addClass(inputLabel, "input-label-focus");
      } else {
        helper.removeClass(inputLabel, "input-label-focus");
      };
    };
  };

  function bind(array) {
    for (var i = 0; i < array.length; i++) {
      if (array[i].dataset.inputStore) {
        var input = array[i].querySelector(".input-field");
        input.addEventListener("input", function() {
          _store(this);
          focus(this);
          totalBlock.render();
        }, false);
        input.addEventListener("focus", function() {
          _store(this);
          focus(this);
          totalBlock.render();
        }, false);
        input.addEventListener("blur", function() {
          _store(this);
          focus(this);
          totalBlock.render();
        }, false);
      };
    };
    _bind_awesomeName();
  };

  function _bind_awesomeName() {
    var input = helper.e(".awesome-name input");
    input.addEventListener("input", function() {
      _render_characterLink(this.value);
      _maxLengthWarning(this.value);
    }, false);
    input.addEventListener("focus", function() {
      _render_characterLink(this.value);
    }, false);
    input.addEventListener("blur", function() {
      _render_characterLink(this.value);
    }, false);
  };

  function _render_characterLink(awesomeNameValue) {
    var name = helper.e(".character-index-" + sheet.getIndex()).querySelector(".name");
    name.textContent = awesomeNameValue;
  };

  function _maxLengthWarning(awesomeNameValue) {
    if (awesomeNameValue.length >= 150) {
      snack.render("Character name is too long.", false, false);
    };
  };

  function render() {
    var all_inputField = helper.eA(".input-field");
    for (var i = 0; i < all_inputField.length; i++) {
      var path = all_inputField[i].dataset.path;
      var content = helper.getObject(sheet.getCharacter(), path);
      all_inputField[i].value = content;
    };
  };

  // exposed methods
  return {
    focus: focus,
    render: render,
    bind: bind
  };

})();

var textareaBlock = (function() {

  function _store(element) {
    var path = element.dataset.path;
    helper.updateObject(sheet.getCharacter(), path, element.innerHTML);
    sheet.storeCharacters();
  };

  function bind(array) {
    for (var i = 0; i < array.length; i++) {
      var textarea = array[i];
      textarea.addEventListener("input", function() {
        _store(this);
      }, false);
      textarea.addEventListener("focus", function() {
        _store(this);
      }, false);
      textarea.addEventListener("blur", function() {
        _store(this);
      }, false);
    };
  };

  function render() {
    var all_textareaBlock = helper.eA(".textarea-block");
    for (var i = 0; i < all_textareaBlock.length; i++) {
      var path = all_textareaBlock[i].dataset.path;
      var content = helper.getObject(sheet.getCharacter(), path);
      all_textareaBlock[i].innerHTML = content;
    };
  };

  // exposed methods
  return {
    render: render,
    bind: bind
  };

})();

var spells = (function() {

  var _bind_spellControls = (function() {
    var all_addSpell = helper.eA(".add-spell");
    for (var i = 0; i < all_addSpell.length; i++) {
      all_addSpell[i].addEventListener("click", function() {
        _addNewSpell(helper.getClosest(this, ".new-spell").querySelector(".spell-name"));
        _updateSpells();
        sheet.storeCharacters();
      }, false);
    };
    for (var i = 0; i < all_addSpell.length; i++) {
      var newSpellRoot = helper.getClosest(all_addSpell[i], ".new-spell");
      var all_addSpell_input = newSpellRoot.querySelector("input");
      all_addSpell_input.addEventListener("keypress", function() {
        _addNewSpellOnEnter(this);
        _updateSpells();
        sheet.storeCharacters();
      }, false);
    };
    helper.e("#spells .prepare-spell").addEventListener("click", function() {
      _changeSpellState(this, "prepare");
    }, false);
    helper.e("#spells .unprepare-spell").addEventListener("click", function() {
      _changeSpellState(this, "unprepare");
    }, false);
    helper.e("#spells .cast-spell").addEventListener("click", function() {
      _changeSpellState(this, "cast");
    }, false);
    helper.e("#spells .active-spell").addEventListener("click", function() {
      _changeSpellState(this, "active");
    }, false);
    helper.e("#spells .remove-spell").addEventListener("click", function() {
      _changeSpellState(this, "remove");
    }, false);
  })();

  function _bind_spellKnownItem(element) {
    element.addEventListener("click", function() {
      _changeSpellKnowItem(this);
      sheet.storeCharacters();
    }, false);
  };

  function _changeSpellKnowItem(spell) {
    var spellRoot = helper.getClosest(spell, "#spells");
    var spellLevel = helper.getClosest(spell, ".spell-level").dataset.spellLevel;
    var prepareState = spellRoot.dataset.prepareSpellState;
    var unprepareState = spellRoot.dataset.unprepareSpellState;
    var castState = spellRoot.dataset.castSpellState;
    var activeState = spellRoot.dataset.activeSpellState;
    var deleteState = spellRoot.dataset.deleteSpellState;
    var spellMarks = spell.querySelector(".spell-marks");
    var spellActive = spell.querySelector(".spell-active");
    // state prepare
    if (prepareState == "true") {
      var preparedIcon = document.createElement("span");
      preparedIcon.setAttribute("class", "icon icon-radio-button-checked");
      if (spellMarks.children.length <= 20) {
        spellMarks.insertBefore(preparedIcon, spellMarks.firstChild);
      };
      if (spellMarks.children.length > 0) {
        helper.addClass(spell, "button-primary");
        helper.removeClass(spell, "button-tertiary");
        helper.removeClass(spell, "hidable");
      };
    };
    // state unprepare
    if (unprepareState == "true") {
      if (spellMarks.firstChild) {
        spellMarks.firstChild.remove();
      };
      if (spellMarks.children.length <= 0) {
        helper.removeClass(spell, "button-primary");
        helper.addClass(spell, "button-tertiary");
        helper.addClass(spell, "hidable");
      };
    };
    // state cast
    if (castState == "true") {
      var all_spellsMarks = spellMarks.children;
      var all_spellsCast = 0;
      for (var i = 0; i < all_spellsMarks.length; i++) {
        if (all_spellsMarks[i].classList.contains("icon-radio-button-checked")) {
          helper.toggleClass(all_spellsMarks[i], "icon-radio-button-checked");
          helper.toggleClass(all_spellsMarks[i], "icon-radio-button-unchecked");
          break
        };
      };
      // if no checked icons can be found change the var allSpellCast to true
      for (var i = 0; i < all_spellsMarks.length; i++) {
        if (all_spellsMarks[i].classList.contains("icon-radio-button-checked")) {
          all_spellsCast++;
        };
      };
      // allSpellCast to true change spell button class
      if (all_spellsCast <= 0) {
        helper.removeClass(spell, "button-primary");
        helper.addClass(spell, "button-tertiary");
      };
    };
    // state active
    if (activeState == "true") {
      var activeIcon = document.createElement("span");
      activeIcon.setAttribute("class", "icon icon-play-arrow");
      if (spellMarks.children.length > 0) {
        if (spellActive.children.length > 0) {
          spellActive.firstChild.remove();
        } else {
          spellActive.appendChild(activeIcon);
        };
      };
      if (spellMarks.children.length <= 0) {
        if (spellActive.children.length > 0) {
          spellActive.firstChild.remove();
        };
      };
    };
    // state delete
    if (deleteState == "true") {
      var spellNameText = spell.textContent;
      spell.remove();
      snack.render(spellNameText + " removed.", false, false);
    };
    _updateSpells();
  };

  function _addNewSpell(element) {
    var level = helper.getClosest(element, ".spell-level").dataset.spellLevel;
    var spallName = element.value;
    var newSpell = _createSpellObject(spallName, parseInt(level, 10), 0, false, 0);
    // if input value is not empty
    if (spallName !== "") {
      //  if first character is not a number
      if (isNaN(spallName.charAt(0))) {
        // add spell button to spell list
        // knownListToSaveTo.appendChild(newSpell);
        _render_spell([newSpell]);
        // clear input field
        element.value = "";
        // add spell to current character object
        sheet.getCharacter().spells.book.push(newSpell);
        // make a snack bar
        snack.render(spallName + " added to spell level " + level + ".", false, false);
      } else {
        // error if the name starts with a number
        snack.render("Name can't start with a number.", false, false);
      };
    };
  };

  function _addNewSpellOnEnter(element) {
    var keystroke = event.keyCode || event.which;
    if (keystroke == 13) {
      _addNewSpell(element);
      sheet.storeCharacters();
    };
  };

  function _changeSpellState(element, state) {
    var spellRoot = helper.getClosest(element, "#spells");
    var prepareStateButton = spellRoot.querySelector(".prepare-spell");
    var unprepareStateButton = spellRoot.querySelector(".unprepare-spell");
    var castStateButton = spellRoot.querySelector(".cast-spell");
    var activeStateButton = spellRoot.querySelector(".active-spell");
    var removeStateButton = spellRoot.querySelector(".remove-spell");
    var all_spellStateControls = spellRoot.querySelectorAll(".spell-state-control");
    if (element.classList.contains("active")) {
      for (var i = 0; i < all_spellStateControls.length; i++) {
        helper.removeClass(all_spellStateControls[i], "active");
      };
      spellRoot.dataset.prepareSpellState = "false";
      spellRoot.dataset.unprepareSpellState = "false";
      spellRoot.dataset.castSpellState = "false";
      spellRoot.dataset.activeSpellState = "false";
      spellRoot.dataset.deleteSpellState = "false";
      helper.removeClass(spellRoot, "prepare-state");
      helper.removeClass(spellRoot, "unprepare-state");
      helper.removeClass(spellRoot, "cast-state");
      helper.removeClass(spellRoot, "active-state");
      helper.removeClass(spellRoot, "delete-state");
      helper.removeClass(removeStateButton, "button-primary");
      helper.addClass(removeStateButton, "button-secondary");
    } else {
      for (var i = 0; i < all_spellStateControls.length; i++) {
        helper.removeClass(all_spellStateControls[i], "active");
      };
      helper.addClass(element, "active");
      if (state == "prepare") {
        spellRoot.dataset.prepareSpellState = "true";
        spellRoot.dataset.unprepareSpellState = "false";
        spellRoot.dataset.castSpellState = "false";
        spellRoot.dataset.activeSpellState = "false";
        spellRoot.dataset.deleteSpellState = "false";
        helper.addClass(spellRoot, "prepare-state");
        helper.removeClass(spellRoot, "unprepare-state");
        helper.removeClass(spellRoot, "cast-state");
        helper.removeClass(spellRoot, "active-state");
        helper.removeClass(spellRoot, "delete-state");
        helper.removeClass(removeStateButton, "button-primary");
        helper.addClass(removeStateButton, "button-secondary");
      } else if (state == "unprepare") {
        spellRoot.dataset.prepareSpellState = "false";
        spellRoot.dataset.unprepareSpellState = "true";
        spellRoot.dataset.castSpellState = "false";
        spellRoot.dataset.activeSpellState = "false";
        spellRoot.dataset.deleteSpellState = "false";
        helper.removeClass(spellRoot, "prepare-state");
        helper.addClass(spellRoot, "unprepare-state");
        helper.removeClass(spellRoot, "cast-state");
        helper.removeClass(spellRoot, "active-state");
        helper.removeClass(spellRoot, "delete-state");
        helper.removeClass(removeStateButton, "button-primary");
        helper.addClass(removeStateButton, "button-secondary");
      } else if (state == "cast") {
        spellRoot.dataset.prepareSpellState = "false";
        spellRoot.dataset.unprepareSpellState = "false";
        spellRoot.dataset.castSpellState = "true";
        spellRoot.dataset.activeSpellState = "false";
        spellRoot.dataset.deleteSpellState = "false";
        helper.removeClass(spellRoot, "prepare-state");
        helper.removeClass(spellRoot, "unprepare-state");
        helper.addClass(spellRoot, "cast-state");
        helper.removeClass(spellRoot, "active-state");
        helper.removeClass(spellRoot, "delete-state");
        helper.removeClass(removeStateButton, "button-primary");
        helper.addClass(removeStateButton, "button-secondary");
      } else if (state == "active") {
        spellRoot.dataset.prepareSpellState = "false";
        spellRoot.dataset.unprepareSpellState = "false";
        spellRoot.dataset.castSpellState = "false";
        spellRoot.dataset.activeSpellState = "true";
        spellRoot.dataset.deleteSpellState = "false";
        helper.removeClass(spellRoot, "prepare-state");
        helper.removeClass(spellRoot, "unprepare-state");
        helper.removeClass(spellRoot, "cast-state");
        helper.addClass(spellRoot, "active-state");
        helper.removeClass(spellRoot, "delete-state");
        helper.removeClass(removeStateButton, "button-primary");
        helper.addClass(removeStateButton, "button-secondary");
      } else if (state == "remove") {
        spellRoot.dataset.prepareSpellState = "false";
        spellRoot.dataset.unprepareSpellState = "false";
        spellRoot.dataset.castSpellState = "false";
        spellRoot.dataset.activeSpellState = "false";
        spellRoot.dataset.deleteSpellState = "true";
        helper.removeClass(spellRoot, "prepare-state");
        helper.removeClass(spellRoot, "unprepare-state");
        helper.removeClass(spellRoot, "cast-state");
        helper.removeClass(spellRoot, "active-state");
        helper.addClass(spellRoot, "delete-state");
        helper.addClass(removeStateButton, "button-primary");
        helper.removeClass(removeStateButton, "button-secondary");
      };
    };
  };

  function _render_spell(array) {
    // read spells and add them to spell lists
    for (var i = 0; i < array.length; i++) {
      var spellObject = array[i];
      // find spell list to add too
      var knownListToSaveTo = helper.e(".spells-known.spell-level-" + spellObject.level);
      // append new spell to spell list
      var spellButton = _createSpellButton(spellObject.name);
      knownListToSaveTo.appendChild(spellButton);
      // find spell mark parent
      var spellMarks = spellButton.querySelector(".spell-marks");
      var spellActive = spellButton.querySelector(".spell-active");
      // add spell marks
      if (spellObject.prepared > 0) {
        helper.removeClass(spellButton, "hidable");
        helper.removeClass(spellButton, "button-tertiary");
        helper.addClass(spellButton, "button-primary");
        for (var j = 0; j < spellObject.prepared; j++) {
          var preparedIcon = document.createElement("span");
          preparedIcon.setAttribute("class", "icon icon-radio-button-checked");
          spellMarks.insertBefore(preparedIcon, spellMarks.firstChild);
        };
      };
      // cast spells if cast > 0
      if (spellObject.cast > 0) {
        var all_check = spellMarks.querySelectorAll(".icon-radio-button-checked");
        for (var j = 0; j < spellObject.cast; j++) {
          if (all_check[j]) {
            helper.removeClass(all_check[j], "icon-radio-button-checked");
            helper.addClass(all_check[j], "icon-radio-button-unchecked");
          };
        };
        if (spellObject.cast >= spellObject.prepared) {
          helper.removeClass(spellButton, "button-primary");
          helper.addClass(spellButton, "button-tertiary");
        };
      };
      // if spell is active
      if (spellObject.active) {
        var activeIcon = document.createElement("span");
        activeIcon.setAttribute("class", "icon icon-play-arrow");
        if (spellObject.prepared > 0) {
          if (spellActive.children.length > 0) {
            spellActive.firstChild.remove();
          } else {
            spellActive.appendChild(activeIcon);
          };
        };
      };
      _bind_spellKnownItem(spellButton);
    };
  };

  function _createSpellButton(spellName) {
    var spellButton = document.createElement("button");
    spellButton.setAttribute("data-spell-name", spellName.replace(/\s+/g, "-").toLowerCase());
    spellButton.setAttribute("id", spellName.replace(/\s+/g, "-").toLowerCase());
    spellButton.setAttribute("class", "spell-known-item button button-tertiary hidable");
    var spellNameSpan = document.createElement("span");
    spellNameSpan.setAttribute("class", "spell-name");
    spellNameSpan.textContent = spellName;
    spellButton.appendChild(spellNameSpan);
    var spellMarks = document.createElement("span");
    spellMarks.setAttribute("class", "spell-marks");
    spellButton.appendChild(spellMarks);
    var spellActive = document.createElement("span");
    spellActive.setAttribute("class", "spell-active");
    spellButton.appendChild(spellActive);
    return spellButton;
  };

  function _createSpellObject(spellName, spellLevel, spellPrepared, spellActive, spellCast) {
    return {
      name: this.name = spellName,
      level: this.level = spellLevel,
      prepared: this.prepared = spellPrepared || 0,
      active: this.active = spellActive || false,
      cast: this.cast = spellCast || 0
    };
  };

  function _updateSpells() {
    var all_spellKnownItems = helper.eA(".spell-known-item");
    var spells = [];
    for (var i = 0; i < all_spellKnownItems.length; i++) {
      var name = all_spellKnownItems[i].textContent;
      var level = parseInt(helper.getClosest(all_spellKnownItems[i], ".spell-level").dataset.spellLevel, 10) || 0;
      var prepared = all_spellKnownItems[i].querySelector(".spell-marks").children.length;
      var cast = all_spellKnownItems[i].querySelector(".spell-marks").querySelectorAll(".icon-radio-button-unchecked").length;
      var active = all_spellKnownItems[i].querySelector(".spell-active").children.length;
      if (active > 0) {
        active = true;
      } else {
        active = false;
      };
      var newSpell = new _createSpellObject(name, level, prepared, active, cast);
      // add to current character object
      spells.push(newSpell);
    };
    sheet.getCharacter().spells.book = spells;
  };

  function render() {
    // build an array of spell objects
    var all_spells = [];
    // iterate over all objects keys to find spells then push those values to all_spells
    if (sheet.getCharacter().spells.book) {
      for (var i in sheet.getCharacter().spells.book) {
        all_spells.push(sheet.getCharacter().spells.book[i]);
      };
    };
    _render_spell(all_spells);
  };

  // exposed methods
  return {
    render: render
  };

})();

var stats = (function() {

  function _changeModifer(element, field) {
    var stat = parseInt(element.value, 10) || 0;
    var modifier = _calculateModifer(element);
    field.textContent = modifier;
  };

  function _calculateModifer(element) {
    var modifier = Math.floor((element.value - 10) / 2);
    return modifier;
  };

  function render() {
    var stats = helper.eA(".stats");
    for (var i = 0; i < stats.length; i++) {
      var score = stats[i].querySelector(".score");
      var modifier = stats[i].querySelector(".modifier");
      var scoreTemp = stats[i].querySelector(".score-temp");
      var Modtempifier = stats[i].querySelector(".modifier-temp");
      if (score.value !== "") {
        _changeModifer(score, modifier);
      } else {
        modifier.textContent = "";
      };
      if (scoreTemp.value !== "") {
        _changeModifer(scoreTemp, Modtempifier);
      } else {
        Modtempifier.textContent = "";
      };
    };
  };

  function bind() {
    var score = helper.eA(".stats .score");
    var scoreTemp = helper.eA(".stats .score-temp");
    for (var i = 0; i < score.length; i++) {
      score[i].addEventListener("input", function() {
        render();
        totalBlock.render();
      }, false);
    };
    for (var i = 0; i < scoreTemp.length; i++) {
      scoreTemp[i].addEventListener("input", function() {
        render();
        totalBlock.render();
      }, false);
    };
  };

  // exposed methods
  return {
    render: render,
    bind: bind
  };

})();

var totalBlock = (function() {

  function render() {
    var stats_strMod = helper.e(".stats.str .modifier");
    var stats_dexMod = helper.e(".stats.dex .modifier");
    var stats_conMod = helper.e(".stats.con .modifier");
    var stats_intMod = helper.e(".stats.int .modifier");
    var stats_wisMod = helper.e(".stats.wis .modifier");
    var stats_chaMod = helper.e(".stats.cha .modifier");
    var stats_strModTemp = helper.e(".stats.str .modifier-temp");
    var stats_dexModTemp = helper.e(".stats.dex .modifier-temp");
    var stats_conModTemp = helper.e(".stats.con .modifier-temp");
    var stats_intModTemp = helper.e(".stats.int .modifier-temp");
    var stats_wisModTemp = helper.e(".stats.wis .modifier-temp");
    var stats_chaModTemp = helper.e(".stats.cha .modifier-temp");
    var all_inputTotalBlock = helper.eA(".input-total-block");
    for (var i = 0; i < all_inputTotalBlock.length; i++) {
      var strBonus = 0;
      var dexBonus = 0;
      var conBonus = 0;
      var intBonus = 0;
      var wisBonus = 0;
      var chaBonus = 0;
      var babBonus = 0;
      var sizeBonus = 0;
      var specialSizeBonus = 0;
      var levelBonus = 0;
      var plusTenBonus = 0;
      var acArmor = 0;
      var acShield = 0;
      var acDeflect = 0;
      var acDodge = 0;
      var acNatural = 0;
      var total = all_inputTotalBlock[i].querySelector(".total");
      var total_value = parseInt(all_inputTotalBlock[i].querySelector(".total").textContent, 10) || 0;
      var all_inputField = all_inputTotalBlock[i].querySelectorAll(".input-field");
      var modifiers = [];
      var modifiers_total = 0;
      for (var q = 0; q < all_inputField.length; q++) {
        if (all_inputField.length > 0) {
          if (all_inputField[q].dataset.modifier == "true") {
            modifiers.push(parseInt(all_inputField[q].value, 10) || 0);
          };
        };
      };
      // if modifiers array has values total them 
      function totalAllModifiers() {
        if (modifiers.length > 0) {
          modifiers_total = modifiers.reduce(function(a, b) {
            return a + b;
          });
        };
      };
      totalAllModifiers();
      // str
      if (all_inputTotalBlock[i].dataset.strBonus == "true") {
        // if ability temp mod is empty
        if (stats_strModTemp.textContent == "") {
          strBonus = parseInt(stats_strMod.textContent, 10 || 0);
        } else {
          strBonus = parseInt(stats_strModTemp.textContent, 10 || 0);
        };
      };
      // dex
      if (all_inputTotalBlock[i].dataset.dexBonus == "true") {
        // if ability temp mod is empty
        if (stats_dexModTemp.textContent == "") {
          dexBonus = parseInt(stats_dexMod.textContent, 10 || 0);
        } else {
          dexBonus = parseInt(stats_dexModTemp.textContent, 10 || 0);
        };
      };
      // con
      if (all_inputTotalBlock[i].dataset.conBonus == "true") {
        // if ability temp mod is empty
        if (stats_conModTemp.textContent == "") {
          conBonus = parseInt(stats_conMod.textContent, 10 || 0);
        } else {
          conBonus = parseInt(stats_conModTemp.textContent, 10 || 0);
        };
      };
      // int
      if (all_inputTotalBlock[i].dataset.intBonus == "true") {
        // if ability temp mod is empty
        if (stats_intModTemp.textContent == "") {
          intBonus = parseInt(stats_intMod.textContent, 10 || 0);
        } else {
          intBonus = parseInt(stats_intModTemp.textContent, 10 || 0);
        };
      };
      // wis
      if (all_inputTotalBlock[i].dataset.wisBonus == "true") {
        // if ability temp mod is empty
        if (stats_wisModTemp.textContent == "") {
          wisBonus = parseInt(stats_wisMod.textContent, 10 || 0);
        } else {
          wisBonus = parseInt(stats_wisModTemp.textContent, 10 || 0);
        };
      };
      // cha
      if (all_inputTotalBlock[i].dataset.chaBonus == "true") {
        // if ability temp mod is empty
        if (stats_chaModTemp.textContent == "") {
          chaBonus = parseInt(stats_chaMod.textContent, 10 || 0);
        } else {
          chaBonus = parseInt(stats_chaModTemp.textContent, 10 || 0);
        };
      };
      // bab
      if (all_inputTotalBlock[i].dataset.babBonus == "true") {
        babBonus = parseInt(helper.e("#offense-base-attack").value, 10 || 0);
      };
      // size
      if (all_inputTotalBlock[i].dataset.sizeBonus == "true") {
        sizeBonus = parseInt(helper.e("#defense-ac-size-bonus").value, 10 || 0);
      };
      // special size
      if (all_inputTotalBlock[i].dataset.specialSizeBonus == "true") {
        specialSizeBonus = parseInt(helper.e("#offense-special-size-bonus").value, 10 || 0);
      };
      // level
      if (all_inputTotalBlock[i].dataset.levelBonus == "true") {
        levelBonus = parseInt(helper.e("#basics-level").value, 10 || 0);
      };
      // ac armor
      if (all_inputTotalBlock[i].dataset.acArmor == "true") {
        acArmor = parseInt(helper.e("#defense-ac-armor").value, 10 || 0);
      };
      // ac shield
      if (all_inputTotalBlock[i].dataset.acShield == "true") {
        acShield = parseInt(helper.e("#defense-ac-shield").value, 10 || 0);
      };
      // ac deflect
      if (all_inputTotalBlock[i].dataset.acDeflect == "true") {
        acDeflect = parseInt(helper.e("#defense-ac-deflect").value, 10 || 0);
      };
      // ac dodge
      if (all_inputTotalBlock[i].dataset.acDodge == "true") {
        acDodge = parseInt(helper.e("#defense-ac-dodge").value, 10 || 0);
      };
      // ac natural
      if (all_inputTotalBlock[i].dataset.acNatural == "true") {
        acNatural = parseInt(helper.e("#defense-ac-natural").value, 10 || 0);
      };
      // 10
      if (all_inputTotalBlock[i].dataset.plusTenBonus == "true") {
        plusTenBonus = 10;
      };
      // check if any bonus is NaN
      if (isNaN(levelBonus)) {
        levelBonus = 0;
      };
      if (isNaN(strBonus)) {
        strBonus = 0;
      };
      if (isNaN(dexBonus)) {
        dexBonus = 0;
      };
      if (isNaN(conBonus)) {
        conBonus = 0;
      };
      if (isNaN(intBonus)) {
        intBonus = 0;
      };
      if (isNaN(wisBonus)) {
        wisBonus = 0;
      };
      if (isNaN(chaBonus)) {
        chaBonus = 0;
      };
      if (isNaN(babBonus)) {
        babBonus = 0;
      };
      if (isNaN(sizeBonus)) {
        sizeBonus = 0;
      };
      if (isNaN(specialSizeBonus)) {
        specialSizeBonus = 0;
      };
      if (isNaN(levelBonus)) {
        levelBonus = 0;
      };
      if (isNaN(plusTenBonus)) {
        plusTenBonus = 0;
      };
      if (isNaN(acArmor)) {
        acArmor = 0;
      };
      if (isNaN(acShield)) {
        acShield = 0;
      };
      if (isNaN(acDeflect)) {
        acDeflect = 0;
      };
      if (isNaN(acDodge)) {
        acDodge = 0;
      };
      if (isNaN(acNatural)) {
        acNatural = 0;
      };
      // grand total
      var grandTotal = modifiers_total + levelBonus + babBonus + sizeBonus + specialSizeBonus + plusTenBonus + strBonus + dexBonus + conBonus + intBonus + wisBonus + chaBonus + acArmor + acShield + acDeflect + acDodge + acNatural;
      total.textContent = grandTotal;
    };
  };

  // exposed methods
  return {
    render: render
  };

})();

(function() {

  nav.bind();
  nav.render(sheet.getAllCharacters());
  nav.resizeNavList();
  hidableBlock.bind();
  inputBlock.bind(helper.eA(".input-block"));
  textareaBlock.bind(helper.eA(".textarea-block"));
  stats.bind();
  sheet.render();

})();
