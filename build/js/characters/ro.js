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
    notes: "<strong>Low-Light Vision (Ex)</strong> See x2 as far as humans in low illumination,<br><br><strong>Elven Immunities (Ex)</strong> Immune to magic sleep effects, +2 against Enchantment spells and effects,<br><br><strong>Elven Magic (Ex)</strong> +2 caster level checks made to overcome SR. +2 Spellcraft check to identify properties of magic items,<br><br><strong>Weapon Familiarity (Ex)</strong> Proficient with longbows (including composite longbows), longswords, rapiers, and shortbows (including composite shortbows), treat weapon with \"elven\" in name as a martial weapon),<br><br><strong>Keen Senses (Ex)</strong> +2 Perception checks,<br><br><strong>Arcane Pool</strong> 4,<br><br><strong>Cantrips</strong> <strong>Spell Combat (EX)</strong> cast spells and wield his weapons at the same time."
  };

  // exposed methods
  return {
    data: data
  };

})();
