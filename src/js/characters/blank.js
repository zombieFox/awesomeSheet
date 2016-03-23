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
      consumable: [{
        item: "",
        total: "",
        used: ""
      }]
    },
    defense: {
      hp: {
        total: "",
        temp: "",
        current: "",
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
        armor: "",
        shield: "",
        deflect: "",
        dodge: "",
        natural: "",
        size_bonus: ""
      },
      fortitude: {
        base: "",
        racial: "",
        misc: "",
        temp: ""
      },
      reflex: {
        base: "",
        racial: "",
        misc: "",
        temp: ""
      },
      will: {
        base: "",
        racial: "",
        misc: "",
        temp: ""
      },
      defense_notes: ""
    },
    offense: {
      base_attack: "",
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
        melee: [],
        ranged: []
      },
      attack_notes: ""
    },
    skills: {
      acrobatics: {
        ranks: "",
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
        ranks: "",
        misc: ""
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
    notes: ""
  };

  // exposed methods
  return {
    data: data
  };

})();
