var ro = (function() {

  var data = {
    basics: {
      name: "Ro Flint",
      race: "Elf",
      class: "Magus Bladebound",
      level: "3",
      size: "Medium",
      alignment: "Lawful Neutral",
      xp: "3,891",
      height: "6'0",
      weight: "",
      age: "120 years",
      gender: "Male",
      speed: "30 ft, 6 sq",
      initiative: "4",
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
      feats: "Weapon Finesse, Dervish Dance, Alertness",
      traits: "Magical Lineage (Shocking Grasp), Focused Mind (+2 on concentration checks)",
      languages: "Common, Draconic, Dwarven, Elven, Orc",
      special_abilities: "Low-Light Vision (Ex), Elven Immunities (Ex), Elven Magic (Ex), Weapon Familiarity (Ex), Keen Senses (Ex), Arcane Pool, Cantrips, Spell Combat (EX), Black Blade (Ex)"
    },
    equipment: {
      gear: "Fur coat and cold weather outfit, Rapier, Spell component pouch, Spellbook, Backpack, Flask of Oil x3, Pouch (belt), Sack, Candle, Flint and Steel, Tindertwig, Rations (5 days), Waterskin, Bedroll, Blanket, Rope (silk), Mirror, Compass, Ink, Inkpen, Paper sheets, Case for maps/scrolls, Tent for 2, Trained Donkey (commands: come, down, stay heal, work), Alchemist Fire (3), Potion of CLW (3)",
      magic_gear: "Short Sword +1, Black Blade Scimitar +1",
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
      wealth: {
        platinum: "",
        gold: "570",
        silver: "",
        copper: ""
      },
      consumable: [{
        item: "Arcane Pool",
        total: "4",
        used: "2"
      }, {
        item: "Black Blade Arcane Pool",
        total: "1",
        used: "1"
      }, {
        item: "Alchemist Fire",
        total: "3",
        used: "2"
      }, {
        item: "Potion of CLW",
        total: "3",
        used: "2"
      }]
    },
    defense: {
      hp: {
        total: "20",
        temp: "",
        damage: "9",
        non_lethal_damage: ""
      },
      ac: {
        misc: "",
        temp: "",
        armor: "3",
        shield: "4",
        deflect: "",
        dodge: "",
        natural: "",
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
        base: "3",
        racial: "",
        resistance: "",
        misc: "",
        temp: "",
        str_bonus: false,
        dex_bonus: false,
        con_bonus: true,
        int_bonus: false,
        wis_bonus: false,
        cha_bonus: false
      },
      reflex: {
        base: "1",
        racial: "",
        resistance: "",
        misc: "",
        temp: "",
        str_bonus: false,
        dex_bonus: true,
        con_bonus: false,
        int_bonus: false,
        wis_bonus: false,
        cha_bonus: false
      },
      will: {
        base: "3",
        racial: "",
        resistance: "",
        misc: "",
        temp: "",
        str_bonus: false,
        dex_bonus: false,
        con_bonus: false,
        int_bonus: false,
        wis_bonus: true,
        cha_bonus: false
      },
      save_notes: "Immune to sleep effecrs, +2 against enchantment spells and effects, +7 against cold weather"
    },
    offense: {
      base_attack: "2",
      special_size_bonus: "",
      concentration: "8",
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
          weapon: "Rapier",
          attack: "6",
          damage: "1d6+4",
          critical: "18–20/x2"
        }, {
          weapon: "Black Blade Scimitar +1",
          attack: "7",
          damage: "1d6+5",
          critical: "18–20/x2"
        }, {
          weapon: "Spell Strike BB Scimitar +1",
          attack: "5/5",
          damage: "1d6+5",
          critical: "18–20/x2"
        }, {
          weapon: "Shortsword +1",
          attack: "7",
          damage: "1d6+2",
          critical: "18–20/x2"
        }],
        ranged: [{
          weapon: "Shortbow",
          attack: "5",
          damage: "1d6",
          critical: "x3",
          range: "60 ft",
          ammo: "50"
        }]
      },
      attack_notes: "+1 attack, +2 damage"
    },
    skills: {
      acrobatics: {
        ranks: "3",
        misc: "",
        class_skill: false
      },
      appraise: {
        ranks: "",
        misc: "",
        class_skill: false
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
        variant_name: ""
      },
      craft_2: {
        ranks: "",
        misc: "",
        class_skill: false,
        variant_name: ""
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
        ranks: "",
        misc: "",
        class_skill: false
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
        ranks: "1",
        misc: "",
        class_skill: true
      },
      knowledge_dungeoneering: {
        ranks: "",
        misc: "",
        class_skill: false
      },
      knowledge_engineering: {
        ranks: "",
        misc: "",
        class_skill: false
      },
      knowledge_geography: {
        ranks: "",
        misc: "",
        class_skill: false
      },
      knowledge_history: {
        ranks: "",
        misc: "",
        class_skill: false
      },
      knowledge_local: {
        ranks: "",
        misc: "",
        class_skill: false
      },
      knowledge_nature: {
        ranks: "",
        misc: "",
        class_skill: false
      },
      knowledge_nobility: {
        ranks: "",
        misc: "",
        class_skill: false
      },
      knowledge_planes: {
        ranks: "",
        misc: "",
        class_skill: false
      },
      knowledge_religion: {
        ranks: "",
        misc: "",
        class_skill: false
      },
      linguistics: {
        ranks: "",
        misc: "",
        class_skill: false
      },
      perception: {
        ranks: "3",
        misc: "2",
        class_skill: false
      },
      perform_1: {
        ranks: "2",
        misc: "",
        class_skill: false,
        variant_name: "Dance"
      },
      perform_2: {
        ranks: "",
        misc: "",
        class_skill: false,
        variant_name: ""
      },
      profession_1: {
        ranks: "",
        misc: "",
        class_skill: false,
        variant_name: ""
      },
      profession_2: {
        ranks: "",
        misc: "",
        class_skill: false,
        variant_name: ""
      },
      ride: {
        ranks: "2",
        misc: "",
        class_skill: true
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
        ranks: "3",
        misc: "",
        class_skill: true
      },
      stealth: {
        ranks: "1",
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
        ranks: "",
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
        level_1: "4",
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
      book: [{
        level_0: [
          { name: "Acid Splash", prepared: 0, active: false, cast: 0 },
          { name: "Arcane Mark", prepared: 0, active: false, cast: 0 },
          { name: "Dancing Lights", prepared: 1, active: false, cast: 0 },
          { name: "Daze", prepared: 0, active: false, cast: 0 },
          { name: "Detect Magic", prepared: 1, active: false, cast: 0 },
          { name: "Disrupt Undead", prepared: 0, active: false, cast: 0 },
          { name: "Flare", prepared: 0, active: false, cast: 0 },
          { name: "Ghost Sound", prepared: 0, active: false, cast: 0 },
          { name: "Light", prepared: 0, active: false, cast: 0 },
          { name: "Mage Hand", prepared: 1, active: false, cast: 0 },
          { name: "Open Close", prepared: 0, active: false, cast: 0 },
          { name: "Prestidigitation", prepared: 0, active: false, cast: 0 },
          { name: "Ray of Frost", prepared: 0, active: false, cast: 0 },
          { name: "Read Magic", prepared: 0, active: false, cast: 0 },
          { name: "Spark", prepared: 0, active: false, cast: 0 }
        ]
      }, {
        level_1: [
          { name: "Color Spray", prepared: 0, active: false, cast: 0 },
          { name: "Grease", prepared: 1, active: false, cast: 1 },
          { name: "Shocking Grasp", prepared: 2, active: false, cast: 2 },
          { name: "True Strike", prepared: 0, active: false, cast: 0 },
          { name: "Magic Missile", prepared: 0, active: false, cast: 0 },
          { name: "Shield", prepared: 1, active: false, cast: 1 },
          { name: "Vanish", prepared: 0, active: false, cast: 0 },
          { name: "Obscuring Mist", prepared: 0, active: false, cast: 0 },
          { name: "Chill Touch", prepared: 0, active: false, cast: 0 },
          { name: "Frostbite", prepared: 0, active: false, cast: 0 },
          { name: "Infernal Healing", prepared: 0, active: false, cast: 0 },
          { name: "Windy Escape", prepared: 0, active: false, cast: 0 },
          { name: "Unerring Weapon", prepared: 0, active: false, cast: 0 },
          { name: "Ray of Enfeeblement", prepared: 0, active: false, cast: 0 },
          { name: "Burning Hands", prepared: 0, active: false, cast: 0 },
          { name: "Expeditious Retreat", prepared: 0, active: false, cast: 0 }
        ]
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
      character: "<strong>Low-Light Vision (Ex)</strong> See x2 as far as humans in low illumination,<br><br><strong>Elven Immunities (Ex)</strong> Immune to magic sleep effects, +2 against Enchantment spells and effects,<br><br><strong>Elven Magic (Ex)</strong> +2 caster level checks made to overcome SR. +2 Spellcraft check to identify properties of magic items,<br><br><strong>Weapon Familiarity (Ex)</strong> Proficient with longbows (including composite longbows), longswords, rapiers, and shortbows (including composite shortbows), treat weapon with \"elven\" in name as a martial weapon),<br><br><strong>Keen Senses (Ex)</strong> +2 Perception checks,<br><br><strong>Arcane Pool</strong> 4,<br><br><strong>Cantrips</strong> <strong>Spell Combat (EX)</strong> cast spells and wield his weapons at the same time.<br><br><strong>Black Blade (Ex)</strong> Bladebound magus' gain a powerful sentient weapon called a black blade.<br><br><strong>Black Blade Scimitar +1</strong><br>Purpose: To protect the Elves.<br>Enhancement Bonus +1, Int 11, Wis/Cha 7, Ego 5,<br>Special: Alertness, black blade strike, telepathy, unbreakable.",
      story: ""
    }
  };

  // exposed methods
  return {
    data: data
  };

})();
