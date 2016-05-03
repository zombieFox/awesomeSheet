var blank = (function() {

  var data = {
    basics: {
      name: "",
      race: "",
      class: "",
      level: "",
      size: "",
      alignment: "",
      xp: "",
      height: "",
      weight: "",
      age: "",
      gender: "",
      speed: "",
      initiative: "",
      hero_points: "",
      luck_points: ""
    },
    statistics: {
      stats: {
        str: {
          score: "",
          temp: ""
        },
        dex: {
          score: "",
          temp: ""
        },
        con: {
          score: "",
          temp: ""
        },
        int: {
          score: "",
          temp: ""
        },
        wis: {
          score: "",
          temp: ""
        },
        cha: {
          score: "",
          temp: ""
        }
      },
      feats: "",
      traits: "",
      languages: "",
      special_abilities: ""
    },
    equipment: {
      gear: "",
      magic_gear: "",
      encumbrance: {
        light: "",
        medium: "",
        heavy: ""
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
        shoulders: "",
        wrist: ""
      },
      wealth: {
        platinum: "",
        gold: "",
        silver: "",
        copper: ""
      },
      consumable: []
    },
    defense: {
      hp: {
        total: "",
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
        base: "",
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
        base: "",
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
        base: "",
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
      save_notes: ""
    },
    offense: {
      base_attack: "",
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
        bab: false
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
        bab: false
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
        melee: [],
        ranged: []
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
        ranks: "",
        misc: "",
        class_skill: false
      },
      perform_1: {
        ranks: "",
        misc: "",
        class_skill: false,
        variant_name: ""
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
        ranks: "",
        misc: "",
        class_skill: false
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
      character: "",
      story: "",
    }
  };

  // exposed methods
  return {
    data: data
  };

})();
