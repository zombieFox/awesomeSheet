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
        total: "53",
        temp: "",
        damage: "",
        non_lethal_damage: ""
      },
      ac: {
        misc: "",
        temp: "",
        armor: "4",
        shield: "",
        deflect: "2",
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
      ac_notes: "+3 dodge bonus to AC against attacks made by traps.",
      fortitude: {
        base: "3",
        racial: "",
        resistance: "3",
        misc: "",
        temp: ""
      },
      reflex: {
        base: "6",
        racial: "",
        resistance: "3",
        misc: "1",
        temp: ""
      },
      will: {
        base: "3",
        racial: "",
        resistance: "3",
        misc: "",
        temp: ""
      },
      save_notes: "+3 bonus on Reflex saves made to avoid traps."
    },
    offense: {
      base_attack: "6 / 1",
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
          weapon: "Rapier +2",
          attack: "16",
          damage: "1d6+3",
          critical: "18–20/x2"
        }, {
          weapon: "Rapier +2 Powerful Sneak",
          attack: "13",
          damage: "1d6+3",
          critical: "18–20/x2"
        }, {
          weapon: "Short Sword +2",
          attack: "16",
          damage: "1d6+3",
          critical: "19–20/x2"
        }, {
          weapon: "Short Sword +2 Powerful Sneak",
          attack: "13",
          damage: "1d6+3",
          critical: "19–20/x2"
        }, {
          weapon: "Full Attack Rapier +2 / Short Sword +2",
          attack: "14 / 9 / 14 / 9",
          damage: "1d6+3",
          critical: "19–20/x2 / 18–20/x2 / 19–20/x2 / 18–20/x2"
        }],
        ranged: [{
          weapon: "Shortbow +1",
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
        ranks: "9",
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
        stat: "Dex",
        name: "Disable Device Trap",
        ranks: "9",
        misc: "4",
        class_skill: true,
        str_bonus: false,
        dex_bonus: true,
        con_bonus: false,
        int_bonus: false,
        wis_bonus: false,
        cha_bonus: false,
        level: false,
        half_level: true
      },
      custom_2: {
        stat: "Wis",
        name: "Perception Trap",
        ranks: "9",
        misc: "5",
        class_skill: true,
        str_bonus: false,
        dex_bonus: false,
        con_bonus: false,
        int_bonus: false,
        wis_bonus: true,
        cha_bonus: false,
        level: false,
        half_level: true
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
        level_0: [
          { name: "Mage Hand", prepared: 3, active: false, cast: 0 }
        ]
      }, {
        level_1: [
          { name: "Unseen Servant", prepared: 2, active: false, cast: 0 }
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
      character: "<strong>Deft Hands</strong> +2 bonus on Disable Device and Sleight of Hand skill checks<br><br><strong>Weapon Finesse</strong> With a light weapon, rapier, whip, or spiked chain made for a creature of your size category, you may use your Dexterity modifier instead of your Strength modifier on attack rolls.<br><br><strong>Two Weapon Fighting</strong> Penalties on attack rolls for fighting with two weapons are reduced.<br><br><strong>Improved Two Weapon Fighting</strong> In addition to the standard single extra attack you get with an off-hand weapon, get a second attack with it, albeit at a –5 penalty.<br><br><strong>Double Slice</strong> Add your Strength bonus to damage rolls made with your off-hand weapon.<br><br><strong>Extra Rogue Talent</strong> Gain one additional rogue talent<br><br><strong>Sneak attack</strong> Attack deals extra damage anytime her target would be denied a Dexterity bonus to AC (+5d6).<br><br><strong>Evasion (Ex)</strong> A rogue adds 1/2 her level to Perception skill checks made to locate traps and to Disable Device skill checks.<br><br><strong>Rogue talent</strong> Minor Magic (Sp) Mage Hand, 3/day.<br><br><strong>Rogue talent</strong> Major Magic (Sp) Unseen Servant, 2/day.<br><br><strong>Rogue talent</strong> Fast Fingers (Ex) Roll two dice while making a Sleight of Hand check and take the better result, 1/day.<br><br><strong>Rogue talent</strong> Fast Stealth (Ex) Move at full speed using the Stealth skill without penalty.<br><br><strong>Rogue talent</strong> During a full attack action you may take a –2 penalty on all attack rolls until the start of her next turn. If an attack during this time is a sneak attack, treats all 1s on the sneak attack damage dice as 2s.<br><br><strong>Trap sense (Ex)</strong> +3 bonus on Reflex saves made to avoid traps and a +3 dodge bonus to AC against attacks made by traps. These bonuses rise to +2 when the rogue reaches 6th level, to +3 when she reaches 9th level.<br><br><strong>Uncanny Dodge (Ex)</strong> cannot be caught flat-footed, nor lose Dex bonus to AC if the attacker is invisible. Still loses Dexterity bonus to AC if immobilized.<br><br><strong>Improved Uncanny Dodge (Ex)</strong> A rogue of 8th level or higher can no longer be flanked.",
      story: "",
    }
  };

  // exposed methods
  return {
    data: data
  };

})();
