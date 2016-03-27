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
      speed: "30 ft, 6 sq",
      initiative: "3",
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
      traits: "Resilient",
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
      wealth: {
        platinum: "",
        gold: "1,090",
        silver: "",
        copper: ""
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
          temp: "",
          notes: ""
        },
        touch: {
          misc: "",
          temp: "",
          notes: ""
        },
        misc: "",
        temp: "",
        armor: "",
        shield: "",
        deflect: "",
        dodge: "",
        natural: "1",
        size_bonus: "",
        notes: ""
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
    notes: {
      character: "<strong>Resilient</strong> (+1 trait bonus on Fortitude saves)<br><br><strong>Arcane bond (Su)</strong> Rat Bower, +2 Fortitude save,<br><br><strong>Bonus feats</strong>,<br><br><strong>Cantrips</strong>,<br><br><strong>Arcane schools</strong> Conjuration,<br><br><strong>Teleportation sub school</strong>,<br><br><strong>Opposition arcane school</strong> Enchantment, Necromancy,<br><br><strong>Elven Immunities (Ex)</strong> +2 against enchantment spells and effects,<br><br><strong>Elven Magic (Ex)</strong> +2 caster level checks made to overcome SR. +2 Spellcraft check to identify properties of magic items,<br><br><strong>Keen Senses (Ex)</strong> +2 Perception checks,<br><br><strong>Low-Light Vision (Ex)</strong> See x2 as far as humans in low illumination,<br><br><strong>Headband of Vast Intelligence skill</strong> Use Magic Device,<br><br><strong>Linguistics Skill</strong> Dwarven, Giant, Undercommon,<br><br><strong>Shift (Su)</strong> Teleport 15 feet 9 times per day,<br><br><strong>Summoner's Charm (Su)</strong> +2 rounds duration for Conjuration (Summoning) spells,<br><br><strong>Weapon Familiarity (Ex)</strong> Proficient with longbows (including composite longbows), longswords, rapiers, and shortbows (including composite shortbows), treat weapon with \"elven\" in name as a martial weapon.",
      story: "",
    }
  };

  // exposed methods
  return {
    data: data
  };

})();