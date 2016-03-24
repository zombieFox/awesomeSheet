var vos = (function() {

  var data = {
    basics: {
      name: "Vos Thunderstomp",
      race: "Dwarf",
      class: "Monk",
      level: "2",
      size: "Medium",
      alignment: "Chaotic Neutral",
      xp: "4,572",
      height: "5'0",
      weight: "190 lbs",
      age: "40 years",
      gender: "Male",
      speed: "20 ft, 4 sq",
      initiative: "2",
      hero_points: "1",
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
      gear: "Backpack, Flask Of Oil (3), Pouch (belt), Sack, Candle, Flint And Steel, Tindertwig, Rations (5 Days), Waterskin, Bedroll, Blanket, Bloodblock, Rope (silk), Mirror, Compass, Ink, Inkpen, Paper Sheets, Case For Maps/scrolls, Torch, Rubbing Poweder, Rubbing Oils, Fine Cheese (1), Smelly Cheese (3), Wine (2), Wrestling Costume (2), Alchemist Fire (3), Dagger, Lavendar soap, Soap bar",
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
      wealth: {
        platinum: "",
        gold: "228",
        silver: "5",
        copper: ""
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
      attack: {
        melee: [{
          weapon: "Flurry of Blows",
          attack: "3/3",
          damage: "1d6+3",
          critical: "20x2"
        }, {
          weapon: "Grapple",
          attack: "7",
          damage: "1d6+3",
          critical: "20x2"
        }, {
          weapon: "Stunning Fist",
          attack: "5",
          damage: "1d6+3",
          critical: "20x2"
        }],
        ranged: []
      },
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
    notes: {
      character: "<strong>Darkvision</strong> See in the dark up to 60 feet.<br><br><strong>Defensive Training</strong> +4 dodge bonus to AC against monsters of the giant subtype.<br><br><strong>Greed</strong> +2 racial bonus on Appraise skill checks made to determine the price of nonmagical goods that contain precious metals or gemstones.<br><br><strong>Hatred</strong> +1 bonus on attack rolls against humanoid creatures of the orc and goblinoid subtypes.<br><br><strong>Hardy</strong> +2 racial bonus on saving throws against poison, spells, and spell-like abilities.<br><br><strong>Stability</strong> +4 racial bonus to their Combat Maneuver Defense when resisting a bull rush or trip attempt while standing on the ground.<br><br><strong>Stonecunning</strong> +2 bonus on Perception checks to notice unusual stonework, such as traps and hidden doors located in stone walls or floors.<br><br><strong>Weapon Familiarity</strong> Dwarves are proficient with battleaxes, heavy picks, and warhammers, and treat any weapon with the word \"dwarven\" in its name as a martial weapon.<br><br><strong>Evasion</strong> On a successful Reflex save against an attack that normally deals half damage take no damage.<br><br><strong>Flurry of Blows (Ex)</strong> Make a flurry of blows as a full-attack. Taking a -2 penalty on all of his attack rolls, as if using the Two-Weapon Fighting feat.<br><br><strong>Stunning Fist (Ex)</strong> Gain Stunning Fist as a bonus feat. Fortitude saving DC 10 + 1/2 your character level + your Wis modifier.<br><br><strong>Unarmed Strike</strong> Gain Improved Unarmed Strike as a bonus feat. Add full Strength bonus on damage rolls for all unarmed strikes. You can choose to deal lethal or nonlethal damage with no penalty on his attack or grappling rolls. Unarmed damage is 1d6 plus Strength bonus.<br><br><strong>Evasion (Ex)</strong> On a successful Reflex save against an attack that normally deals half damage take no damage.<br><br><strong>Weapon Focus</strong> +1 bonus on attack rolls with one weapon (Grapple)<br><br><strong>Improved Grapple</strong> You do not provoke an attack of opportunity when performing a grapple combat maneuver. +2 to grapple a foe. +2 CMD whenever an opponent tries to grapple you.",
      story: "City: Tamrin - controlled by the cult of the living God<br>River barge: Black Mist<br>Member of pathfinder society: Sigar<br>Member of pathfinder society: Reginar",
    }
  };

  // exposed methods
  return {
    data: data
  };

})();