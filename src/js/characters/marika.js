var marika = (function() {

  var data = {
    basics: {
      name: "Marika Spandrell",
      race: "Human",
      class: "Rogue",
      level: "9",
      size: "Medium",
      alignment: "Chaotic Neutral",
      xp: "76,000",
      height: "5’3",
      weight: "98 lb",
      age: "23",
      gender: "Female",
      speed: "30 ft, 6 sq",
      initiative: "8",
      hero_points: "1",
      luck_points: "2"
    },
    statistics: {
      stats: {
        str: {
          score: "12",
          temp: ""
        },
        dex: {
          score: "22",
          temp: "26"
        },
        con: {
          score: "10",
          temp: ""
        },
        int: {
          score: "12",
          temp: ""
        },
        wis: {
          score: "12",
          temp: ""
        },
        cha: {
          score: "9",
          temp: ""
        }
      },
      feats: "Deft Hands, Weapon Finesse, Two Weapon Fighting, Improved Two Weapon Fighting, Double Slice, Extra Rogue Talent.",
      traits: "Child of the Streets, Deft Dodger.",
      languages: "Common, Giant, Goblin.",
      special_abilities: "Sneak Attack +5d6, Trapfinding, Trap Sense +3, Uncanny Dodge, Improved Uncanny Dodge, Minor Magic (Mage Hand 3/day), Major Magic (Unseen Servant 2/day), Fast Fingers, Fast Stealth, Powerful Sneak."
    },
    equipment: {
      gear: "Large Black Backpack, Bedroll, Silk Rope, Pencils, Ink, Paper, Sketch Book, Grappling Hook, Flint and Steel, Torch, Masterwork Thieves’ Tools (+2 Disable Device), Magnifying Glass (+2 Appraise), Merchant’s Scale (+2 Appraise), Trail Rations, Bread, Cheese and Wine.",
      magic_gear: "Potion of Cure Light Wounds (6) Potion of Cure Moderate Wounds (3), Potion of Cure Serious Wounds (2), Potion of BarkSkin (5), Potion of Shield of Faith (2), Rapier +2 (Flaming Crystal), Short Sword +2 (Frost Crystal), Studded Leather +2, Belt of Dexterity +4, Cloak of Resistance +2, Spider Climb Pendent 1/day, Ring of Protection +1, Eyes of the Eagle, Handy Haversack.",
      encumbrance: {
        light: "43 lbs or less",
        medium: "44–86 lbs",
        heavy: "87–130 lbs"
      },
      body_slots: {
        armor: "Leather +2",
        belts: "Belt of Dexterity +4",
        body: "",
        chest: "",
        eyes: "Eyes of the Eagle",
        feet: "Slippers of Spider Climbing",
        hands: "",
        head: "",
        headband: "",
        neck: "",
        ring_left_hand: "Ring of Protection +2",
        ring_right_hand: "",
        shield: "",
        shoulders: "Cloak of Resistance +3",
        wrist: ""
      },
      wealth: {
        platinum: "21",
        gold: "763",
        silver: "",
        copper: ""
      },
      consumable: [{
        item: "Slippers of Spider Climbing",
        total: "10",
        used: ""
      }]
    },
    defense: {
      hp: {
        total: "60",
        temp: "",
        damage: "",
        non_lethal_damage: ""
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
        armor: "4",
        shield: "",
        deflect: "2",
        dodge: "",
        natural: "",
        size_bonus: "",
        notes: "+3 dodge bonus to AC against attacks made by traps."
      },
      fortitude: {
        base: "3",
        racial: "",
        misc: "3",
        temp: ""
      },
      reflex: {
        base: "6",
        racial: "",
        misc: "4",
        temp: ""
      },
      will: {
        base: "3",
        racial: "",
        misc: "3",
        temp: ""
      },
      defense_notes: "+3 bonus on Reflex saves made to avoid traps."
    },
    offense: {
      base_attack: "6\/1",
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
          weapon: "Rapier +2",
          attack: "15",
          damage: "1d6+3",
          critical: "18–20/x2"
        }, {
          weapon: "Rapier +2 Powerful Sneak",
          attack: "13",
          damage: "1d6+3",
          critical: "18–20/x2"
        }, {
          weapon: "Short Sword +2",
          attack: "15",
          damage: "1d6+3",
          critical: "19–20/x2"
        }, {
          weapon: "Short Sword +2 Powerful Sneak",
          attack: "13",
          damage: "1d6+3",
          critical: "19–20/x2"
        }],
        ranged: [{
          weapon: "Shortbow Masterwork",
          attack: "15",
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
        ranks: "9",
        misc: "",
        class_skill: true
      },
      appraise: {
        ranks: "9",
        misc: "4",
        class_skill: true
      },
      bluff: {
        ranks: "8",
        misc: "",
        class_skill: true
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
        ranks: "9",
        misc: "4",
        class_skill: true
      },
      disguise: {
        ranks: "",
        misc: "",
        class_skill: false
      },
      escape_artist: {
        ranks: "9",
        misc: "",
        class_skill: true
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
        ranks: "",
        misc: "",
        class_skill: false
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
        ranks: "9",
        misc: "5",
        class_skill: true
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
        ranks: "9",
        misc: "",
        class_skill: true
      },
      sleight_of_hand: {
        ranks: "9",
        misc: "3",
        class_skill: true
      },
      spellcraft: {
        ranks: "",
        misc: "",
        class_skill: false
      },
      stealth: {
        ranks: "9",
        misc: "5",
        class_skill: true
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
        stat: "Wis",
        name: "Perception Trap",
        ranks: "9",
        misc: "9",
        class_skill: true
      },
      custom_2: {
        stat: "",
        name: "",
        ranks: "",
        misc: "",
        class_skill: false
      },
      custom_3: {
        stat: "",
        name: "",
        ranks: "",
        misc: "",
        class_skill: false
      },
      custom_4: {
        stat: "",
        name: "",
        ranks: "",
        misc: "",
        class_skill: false
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
      book: [
        {
          name: "Mage Hand",
          level: 0,
          prepared: 3,
          active: false,
          cast: 0
        }, {
          name: "Unseen Servant",
          level: 1,
          prepared: 2,
          active: false,
          cast: 0
        }
      ]
    },
    notes: {
      character: "",
      story: "",
    }
  };

  // exposed methods
  return {
    data: data
  };

})();
