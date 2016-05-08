var vos = (function() {

  var data = {
    basics: {
      name: "Vos Thunderstomp",
      race: "Dwarf",
      class: "Monk",
      level: "4",
      size: "Medium",
      alignment: "Chaotic Neutral",
      xp: "12,452",
      height: "5'0",
      weight: "190 lbs",
      age: "40",
      gender: "Male",
      speed: "30 ft, 6 sq",
      initiative: "2",
      hero_points: "1",
      luck_points: ""
    },
    statistics: {
      stats: {
        str: {
          score: "17",
          temp: ""
        },
        dex: {
          score: "14",
          temp: ""
        },
        con: {
          score: "12",
          temp: "11"
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
      feats: "Improved Grapple, Weapon Focus (Unarmed Strike), Dodge",
      traits: "",
      languages: "Common, Dwarven",
      special_abilities: "Darkvision, Defensive Training, Greed, Hatred, Hardy, Stability, Stonecunning, Weapon Familiarity, Evasion, Flurry of Blows +1/+1 (Ex), Stunning Fist (Ex), Unarmed Strike, AC Bonus (Ex), Evasion (Ex), Fast Movement (Ex), Maneuver Training (Ex), Still Mind (Ex), Ki Pool (Su), Slow Fall (Ex)"
    },
    equipment: {
      gear: "Backpack, Flask Of Oil (3), Pouch (belt), Sack, Candle, Flint And Steel, Tindertwig, Rations (5 Days), Waterskin, Bedroll, Blanket, Bloodblock, Rope (silk), Mirror, Compass, Ink, Inkpen, Paper Sheets, Case For Maps/scrolls, Torch, Rubbing Poweder, Rubbing Oils, Fine Cheese (1), Smelly Cheese (3), Wine (2), Wrestling Costume (2), Alchemist Fire (3), Dagger, Lavendar soap, Soap bar",
      magic_gear: "Good Berries (5), Potion of Stabilise, Potion of Cure Light Wounds (0), Potion of Cure Moderate Wounds (1)",
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
        ring_right_hand: "Ring of Protection +1",
        shield: "",
        shoulders: "Cloak of Resistance +1",
        wrist: "Bracers of Armor +1"
      },
      wealth: {
        platinum: "",
        gold: "1,218",
        silver: "5",
        copper: ""
      },
      consumable: [{
        item: "Scented Oils",
        total: "5",
        used: ""
      }, {
        item: "Stunning Fist",
        total: "5",
        used: ""
      }, {
        item: "Ki Pool",
        total: "4",
        used: ""
      }]
    },
    defense: {
      hp: {
        total: "33",
        temp: "-4",
        damage: "",
        non_lethal_damage: "",
        current: ""
      },
      ac: {
        misc: "1",
        temp: "",
        armor: "1",
        shield: "",
        deflect: "1",
        dodge: "1",
        natural: "",
        size_bonus: "",
        str_bonus: false,
        dex_bonus: true,
        con_bonus: false,
        int_bonus: false,
        wis_bonus: true,
        cha_bonus: false,
        current: ""
      },
      flat_footed: {
        misc: "1",
        temp: "",
        str_bonus: false,
        dex_bonus: false,
        con_bonus: false,
        int_bonus: false,
        wis_bonus: true,
        cha_bonus: false,
        current: ""
      },
      touch: {
        misc: "1",
        temp: "",
        str_bonus: false,
        dex_bonus: true,
        con_bonus: false,
        int_bonus: false,
        wis_bonus: true,
        cha_bonus: false,
        current: ""
      },
      ac_notes: "",
      fortitude: {
        base: "4",
        racial: "",
        resistance: "1",
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
        base: "4",
        racial: "",
        resistance: "1",
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
        base: "4",
        racial: "",
        resistance: "1",
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
      save_notes: "+2 against poison, spells, and spell-like abilities, +2 against enchantment spells and effects."
    },
    offense: {
      base_attack: "3",
      special_size_bonus: "",
      concentration: "",
      cmb: {
        misc: "",
        temp: "",
        str_bonus: true,
        dex_bonus: false,
        con_bonus: false,
        int_bonus: false,
        wis_bonus: false,
        cha_bonus: false,
        level: true,
        bab: false,
        current: ""
      },
      cmd: {
        misc: "1",
        temp: "",
        str_bonus: true,
        dex_bonus: true,
        con_bonus: false,
        int_bonus: false,
        wis_bonus: true,
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
          weapon: "Flurry of Blows",
          attack: "5/5",
          damage: "1d8+3",
          critical: "20x2"
        }, {
          weapon: "Grapple",
          attack: "10",
          damage: "1d8+3",
          critical: "20x2"
        }, {
          weapon: "Maintain Grapple ",
          attack: "15",
          damage: "1d8+3",
          critical: "20x2"
        }, {
          weapon: "Stunning Fist",
          attack: "7",
          damage: "1d8+3",
          critical: "20x2"
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
      attack_notes: "+1 weapon focus (unarmed strike), +2 grapple, +2 to resist grapple"
    },
    skills: {
      acrobatics: {
        ranks: "4",
        misc: "",
        class_skill: true,
        current: "",
      },
      appraise: {
        ranks: "",
        misc: "2",
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
        ranks: "4",
        misc: "",
        class_skill: true,
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
        ranks: "",
        misc: "",
        class_skill: false,
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
        ranks: "4",
        misc: "",
        class_skill: true,
        current: "",
      },
      perform_1: {
        ranks: "",
        misc: "",
        class_skill: false,
        current: "",
        variant_name: ""
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
        ranks: "",
        misc: "",
        class_skill: false,
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
        ranks: "",
        misc: "",
        class_skill: false,
        current: "",
      },
      stealth: {
        ranks: "4",
        misc: "",
        class_skill: true,
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
      book: [{
        level_0: []
      }, {
        level_1: []
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
      character: "<strong>Darkvision</strong> See in the dark up to 60 feet.<br><br><strong>Defensive Training</strong> +4 dodge bonus to AC against monsters of the giant subtype.<br><br><strong>Greed</strong> +2 racial bonus on Appraise skill checks made to determine the price of nonmagical goods that contain precious metals or gemstones.<br><br><strong>Hatred</strong> +1 bonus on attack rolls against humanoid creatures of the orc and goblinoid subtypes.<br><br><strong>Hardy</strong> +2 racial bonus on saving throws against poison, spells, and spell-like abilities.<br><br><strong>Stability</strong> +4 racial bonus to their Combat Maneuver Defense when resisting a bull rush or trip attempt while standing on the ground.<br><br><strong>Stonecunning</strong> +2 bonus on Perception checks to notice unusual stonework, such as traps and hidden doors located in stone walls or floors.<br><br><strong>Weapon Familiarity</strong> Dwarves are proficient with battleaxes, heavy picks, and warhammers, and treat any weapon with the word \"dwarven\" in its name as a martial weapon.<br><br><strong>AC Bonus</strong> Adds Wisdom bonus to his AC and his CMD. Gains a +1 bonus to AC and CMD at 4th level. This bonus increases by 1 for every four monk levels thereafter, up to a maximum of +5 at 20th level.<br><br><strong>Flurry of Blows (Ex)</strong> +1/+1 Make a flurry of blows as a full-attack. Taking a -2 penalty on all of his attack rolls, as if using the Two-Weapon Fighting feat.<br><br><strong>Stunning Fist (Ex)</strong> Gain Stunning Fist as a bonus feat. Fortitude saving DC 10 + 1/2 your character level + your Wis modifier.<br><br><strong>Unarmed Strike</strong> Gain Improved Unarmed Strike as a bonus feat. Add full Strength bonus on damage rolls for all unarmed strikes. You can choose to deal lethal or nonlethal damage with no penalty on his attack or grappling rolls. Unarmed damage is 1d6 plus Strength bonus.<br><br><strong>Evasion (Ex)</strong> On a successful Reflex save against an attack that normally deals half damage take no damage.<br><br><strong>Weapon Focus</strong> +1 bonus on attack rolls with one weapon (Unarmed Strike)<br><br><strong>Maneuver Training (Ex)</strong> Uses his monk level in place of his base attack bonus when calculating CMB.<br><br><strong>Still Mind (Ex)</strong> +2 bonus on saving throws against enchantment spells and effects.<br><br><strong>Improved Grapple</strong> You do not provoke an attack of opportunity when performing a grapple combat maneuver. +2 to grapple a foe. +2 CMD whenever an opponent tries to grapple you.<br><br><strong>Ki Pool</strong> A monk's ki pool is equal to 1/2 his monk level + his Wisdom modifier (4). As long as he has at least 1 point in his ki pool, he can make a ki strike. At 4th level, ki strike allows his unarmed attacks to be treated as magic weapons for the purpose of overcoming damage reduction.<br><br>By spending 1 point from his ki pool, a monk can make one additional attack at his highest attack bonus when making a flurry of blows attack. In addition, he can spend 1 point to increase his speed by 20 feet for 1 round. Finally, a monk can spend 1 point from his ki pool to give himself a +4 dodge bonus to AC for 1 round. Each of these powers is activated as a swift action.<br><br><strong>Slow Fall</strong> A monk within arm's reach of a wall can use it to slow his descent. When first gaining this ability, he takes damage as if the fall were 20 feet shorter than it actually is.",
      story: "Tamrin: city controlled by the church of the living god<br><br>Black Mist: river bargeSigar: member of pathfinder societyReginar: member of pathfinder society<br><br>Weslin Garvic: forest marshal against the church of the living god<br><br>Aramina Yasgon, half elf, bard: sent into the church<br><br>Olis Tomain, human, fighter: sent into the church<br><br>Floss Blunderstomp: alias"
    }
  };

  // exposed methods
  return {
    data: data
  };

})();
