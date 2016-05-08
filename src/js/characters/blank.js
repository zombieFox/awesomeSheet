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
        non_lethal_damage: "",
        current: ""
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
        cha_bonus: false,
        current: ""
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
        cha_bonus: false,
        current: ""
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
        cha_bonus: false,
        current: ""
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
        bab: false,
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
        bab: false,
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
        melee: [],
        ranged: []
      },
      attack_notes: ""
    },
    skills: {
      acrobatics: {
        ranks: "",
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
        ranks: "",
        misc: "",
        class_skill: false,
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
        ranks: "",
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
