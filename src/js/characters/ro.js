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
      age: "120",
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
        current: "4",
        total: "4",
        used: ""
      }, {
        item: "Black Blade Arcane Pool",
        current: "1",
        total: "1",
        used: ""
      }, {
        item: "Alchemist Fire",
        current: "3",
        total: "3",
        used: ""
      }, {
        item: "Potion of CLW",
        current: "3",
        total: "3",
        used: ""
      }]
    },
    defense: {
      hp: {
        total: "20",
        temp: "",
        damage: "9",
        non_lethal_damage: "",
        current: ""
      },
      ac: {
        misc: "",
        temp: "",
        armor: "3",
        shield: "",
        deflect: "",
        dodge: "",
        natural: "",
        size_bonus: "",
        str_bonus: false,
        dex_bonus: true,
        con_bonus: false,
        int_bonus: false,
        wis_bonus: false,
        cha_bonus: false,
        current: ""
      },
      flat_footed: {
        misc: "",
        temp: "",
        str_bonus: false,
        dex_bonus: false,
        con_bonus: false,
        int_bonus: false,
        wis_bonus: false,
        cha_bonus: false,
        current: ""
      },
      touch: {
        misc: "",
        temp: "",
        str_bonus: false,
        dex_bonus: true,
        con_bonus: false,
        int_bonus: false,
        wis_bonus: false,
        cha_bonus: false,
        current: ""
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
        cha_bonus: false,
        current: ""
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
        cha_bonus: false,
        current: ""
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
        cha_bonus: false,
        current: ""
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
        bab: true,
        current: ""
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
        bab: true,
        current: ""
      },
      melee_attack: {
        misc: "",
        temp: "",
        current: ""
      },
      ranged_attack: {
        misc: "",
        temp: "",
        current: ""
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
        class_skill: false,
        current: "",
      },
      appraise: {
        ranks: "",
        misc: "",
        class_skill: false,
        current: "",
      },
      bluff: {
        ranks: "",
        misc: "",
        class_skill: false,
        current: "",
      },
      climb: {
        ranks: "",
        misc: "",
        class_skill: false,
        current: "",
      },
      craft_1: {
        ranks: "",
        misc: "",
        class_skill: false,
        current: "",
        variant_name: ""
      },
      craft_2: {
        ranks: "",
        misc: "",
        class_skill: false,
        current: "",
        variant_name: ""
      },
      diplomacy: {
        ranks: "",
        misc: "",
        class_skill: false,
        current: "",
      },
      disable_device: {
        ranks: "",
        misc: "",
        class_skill: false,
        current: "",
      },
      disguise: {
        ranks: "",
        misc: "",
        class_skill: false,
        current: "",
      },
      escape_artist: {
        ranks: "",
        misc: "",
        class_skill: false,
        current: "",
      },
      fly: {
        ranks: "",
        misc: "",
        class_skill: false,
        current: "",
      },
      handle_animal: {
        ranks: "",
        misc: "",
        class_skill: false,
        current: "",
      },
      heal: {
        ranks: "",
        misc: "",
        class_skill: false,
        current: "",
      },
      intimidate: {
        ranks: "",
        misc: "",
        class_skill: false,
        current: "",
      },
      knowledge_arcana: {
        ranks: "1",
        misc: "",
        class_skill: true,
        current: "",
      },
      knowledge_dungeoneering: {
        ranks: "",
        misc: "",
        class_skill: false,
        current: "",
      },
      knowledge_engineering: {
        ranks: "",
        misc: "",
        class_skill: false,
        current: "",
      },
      knowledge_geography: {
        ranks: "",
        misc: "",
        class_skill: false,
        current: "",
      },
      knowledge_history: {
        ranks: "",
        misc: "",
        class_skill: false,
        current: "",
      },
      knowledge_local: {
        ranks: "",
        misc: "",
        class_skill: false,
        current: "",
      },
      knowledge_nature: {
        ranks: "",
        misc: "",
        class_skill: false,
        current: "",
      },
      knowledge_nobility: {
        ranks: "",
        misc: "",
        class_skill: false,
        current: "",
      },
      knowledge_planes: {
        ranks: "",
        misc: "",
        class_skill: false,
        current: "",
      },
      knowledge_religion: {
        ranks: "",
        misc: "",
        class_skill: false,
        current: "",
      },
      linguistics: {
        ranks: "",
        misc: "",
        class_skill: false,
        current: "",
      },
      perception: {
        ranks: "3",
        misc: "2",
        class_skill: false,
        current: "",
      },
      perform_1: {
        ranks: "2",
        misc: "",
        class_skill: false,
        current: "",
        variant_name: "Dance"
      },
      perform_2: {
        ranks: "",
        misc: "",
        class_skill: false,
        current: "",
        variant_name: ""
      },
      profession_1: {
        ranks: "",
        misc: "",
        class_skill: false,
        current: "",
        variant_name: ""
      },
      profession_2: {
        ranks: "",
        misc: "",
        class_skill: false,
        current: "",
        variant_name: ""
      },
      ride: {
        ranks: "2",
        misc: "",
        class_skill: true,
        current: "",
      },
      sense_motive: {
        ranks: "",
        misc: "",
        class_skill: false,
        current: "",
      },
      sleight_of_hand: {
        ranks: "",
        misc: "",
        class_skill: false,
        current: "",
      },
      spellcraft: {
        ranks: "3",
        misc: "",
        class_skill: true,
        current: "",
      },
      stealth: {
        ranks: "1",
        misc: "",
        class_skill: false,
        current: "",
      },
      survival: {
        ranks: "",
        misc: "",
        class_skill: false,
        current: "",
      },
      swim: {
        ranks: "",
        misc: "",
        class_skill: false,
        current: "",
      },
      use_magic_device: {
        ranks: "",
        misc: "",
        class_skill: false,
        current: "",
      },
      custom_1: {
        name: "",
        ranks: "",
        misc: "",
        class_skill: false,
        current: "",
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
        name: "",
        ranks: "",
        misc: "",
        class_skill: false,
        current: "",
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
        name: "",
        ranks: "",
        misc: "",
        class_skill: false,
        current: "",
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
        name: "",
        ranks: "",
        misc: "",
        class_skill: false,
        current: "",
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
          { name: "Grease", prepared: 1, active: false, cast: 0 },
          { name: "Shocking Grasp", prepared: 2, active: false, cast: 0 },
          { name: "True Strike", prepared: 0, active: false, cast: 0 },
          { name: "Magic Missile", prepared: 0, active: false, cast: 0 },
          { name: "Shield", prepared: 1, active: false, cast: 0 },
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
