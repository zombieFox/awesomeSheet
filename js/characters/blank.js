var blank = (function() {

  var data = {
    awesomeSheet: {
      awesome: true,
      version: ""
    },
    basics: {
      character: {
        name: "",
        race: "",
        alignment: "",
        deity: "",
        height: "",
        weight: "",
        age: "",
        gender: "",
        hero_points: "",
        description: "",
        size: {
          category: "",
          modifier: {
            base: "",
            special: "",
            fly: "",
            stealth: ""
          }
        }
      },
      classes: {
        all: [{
          name: "",
          level: "",
          bab: "",
          hp: {
            base: "",
            favoured: "",
            current: ""
          },
          ranks: {
            base: "",
            favoured: "",
            current: ""
          },
          saves: {
            fortitude: "",
            reflex: "",
            will: ""
          }
        }],
        string: ""
      },
      experience: {
        level: {
          current: "",
          class_total: ""
        },
        next_level: "",
        needed: "",
        total: "",
        advancement: ""
      },
      senses: {
        racial: "",
        magical: ""
      },
      initiative: {
        misc: "",
        temp: "",
        feat: "",
        trait: "",
        current: "",
        bonuses: {
          str: false,
          dex: true,
          con: false,
          int: false,
          wis: false,
          cha: false,
          level: false,
          half_level: false
        }
      },
      speed: {
        land: "",
        fly: "",
        maneuverability: "",
        swim: "",
        climb: "",
        burrow: ""
      },
      image: {
        uploaded: false,
        background: "",
        color: {
          r: "",
          g: "",
          b: ""
        },
        data: "",
        orientation: "",
        position: {
          x: "",
          y: ""
        },
        size: {
          width: "",
          height: ""
        },
        scale: ""
      }
    },
    statistics: {
      stats: {
        str: {
          modifier: "",
          base: "",
          enhancement: "",
          misc: "",
          racial: "",
          temp: "",
          current: ""
        },
        dex: {
          modifier: "",
          base: "",
          enhancement: "",
          misc: "",
          racial: "",
          temp: "",
          current: ""
        },
        con: {
          modifier: "",
          base: "",
          enhancement: "",
          misc: "",
          racial: "",
          temp: "",
          current: ""
        },
        int: {
          modifier: "",
          base: "",
          enhancement: "",
          misc: "",
          racial: "",
          temp: "",
          current: ""
        },
        wis: {
          modifier: "",
          base: "",
          enhancement: "",
          misc: "",
          racial: "",
          temp: "",
          current: ""
        },
        cha: {
          modifier: "",
          base: "",
          enhancement: "",
          misc: "",
          racial: "",
          temp: "",
          current: ""
        }
      },
      abilities: {
        all: [],
        notes: ""
      },
      feats: {
        all: [],
        notes: ""
      },
      traits: {
        all: [],
        notes: ""
      },
      languages: {
        all: [],
        notes: ""
      },
      power: {
        all: []
      }
    },
    equipment: {
      possessions: {
        gear: "",
        magic_gear: "",
        potion_vials_oils: "",
        scrolls: ""
      },
      armor: {
        armor: {
          name: "",
          check_penalty: "",
          max_dex: "",
          weight: "",
          arcane_spell_failure: "",
          notes: ""
        },
        shield: {
          name: "",
          check_penalty: "",
          max_dex: "",
          weight: "",
          arcane_spell_failure: "",
          notes: ""
        },
        stats: {
          check_penalty: {
            current: ""
          },
          max_dex: {
            current: ""
          },
          arcane_spell_failure: {
            current: ""
          }
        }
      },
      body_slots: {
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
        shoulders: "",
        wrist: ""
      },
      item: {
        all: [],
        weight: {
          current: ""
        },
        value: {
          current: ""
        }
      },
      encumbrance: {
        str: "",
        carry_move: {
          light: "",
          medium: "",
          heavy: "",
          lift: "",
          drag: ""
        }
      },
      consumable: {
        all: []
      },
      wealth: {
        platinum: "",
        gold: "",
        silver: "",
        copper: "",
        total: ""
      }
    },
    defense: {
      hp: {
        total: "",
        temp: "",
        damage: "",
        non_lethal_damage: "",
        current: "",
        notes: ""
      },
      ac: {
        armor_class: {
          misc: "",
          temp: "",
          current: "",
          bonuses: {
            str: false,
            dex: true,
            con: false,
            int: false,
            wis: false,
            cha: false,
            plus_ten: true,
            armor: true,
            shield: true,
            deflect: true,
            dodge: true,
            natural: true,
            size_base: true,
            max_dex: true,
            ac_temp: true,
            ac_misc: true,
            ac_enhancement: true,
            ac_insight: true,
            ac_luck: true,
            ac_profane: true,
            ac_sacred: true,
            ac_trait: true
          }
        },
        flat_footed: {
          misc: "",
          temp: "",
          current: "",
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: false,
            cha: false,
            plus_ten: true,
            armor: true,
            shield: true,
            deflect: true,
            natural: true,
            size_base: true,
            dodge: false,
            ac_temp: true,
            ac_misc: true,
            ac_enhancement: true,
            ac_insight: true,
            ac_luck: true,
            ac_profane: true,
            ac_sacred: true,
            ac_trait: true
          }
        },
        touch: {
          misc: "",
          temp: "",
          current: "",
          bonuses: {
            str: false,
            dex: true,
            con: false,
            int: false,
            wis: false,
            cha: false,
            plus_ten: true,
            deflect: true,
            dodge: true,
            size_base: true,
            max_dex: true,
            armor: false,
            shield: false,
            natural: false,
            ac_temp: true,
            ac_misc: true,
            ac_insight: true,
            ac_luck: true,
            ac_profane: true,
            ac_sacred: true,
            ac_trait: true
          }
        },
        stats: {
          armor: "",
          shield: "",
          deflect: "",
          dodge: "",
          natural: "",
          temp: "",
          misc: "",
          enhancement: "",
          insight: "",
          luck: "",
          profane: "",
          sacred: "",
          trait: ""
        },
        notes: ""
      },
      cmd: {
        misc: "",
        temp: "",
        current: "",
        notes: "",
        bonuses: {
          str: true,
          dex: true,
          con: false,
          int: false,
          wis: false,
          cha: false,
          bab: true,
          dodge: true,
          deflect: true,
          size_special: true,
          level: false,
          half_level: false,
          plus_ten: true
        }
      },
      saves: {
        fortitude: {
          base: "",
          resistance: "",
          feat: "",
          trait: "",
          misc: "",
          temp: "",
          current: "",
          bonuses: {
            str: false,
            dex: false,
            con: true,
            int: false,
            wis: false,
            cha: false,
            level: false,
            half_level: false
          }
        },
        reflex: {
          base: "",
          resistance: "",
          feat: "",
          trait: "",
          misc: "",
          temp: "",
          current: "",
          bonuses: {
            str: false,
            dex: true,
            con: false,
            int: false,
            wis: false,
            cha: false,
            level: false,
            half_level: false
          }
        },
        will: {
          base: "",
          resistance: "",
          feat: "",
          trait: "",
          misc: "",
          temp: "",
          current: "",
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: true,
            cha: false,
            level: false,
            half_level: false
          }
        },
        notes: ""
      },
      dr: {
        feat: "",
        trait: "",
        misc: "",
        temp: "",
        overcome: "",
        current: "",
        notes: "",
        bonuses: {
          str: false,
          dex: false,
          con: false,
          int: false,
          wis: false,
          cha: false,
          level: false,
          half_level: false
        }
      },
      sr: {
        feat: "",
        trait: "",
        misc: "",
        temp: "",
        current: "",
        notes: "",
        bonuses: {
          str: false,
          dex: false,
          con: false,
          int: false,
          wis: false,
          cha: false,
          level: false,
          half_level: false
        }
      },
      resistance: {
        feat: "",
        trait: "",
        misc: "",
        temp: "",
        current: "",
        notes: "",
        bonuses: {
          str: false,
          dex: false,
          con: false,
          int: false,
          wis: false,
          cha: false,
          level: false,
          half_level: false
        }
      }
    },
    offense: {
      stats: {
        base_attack: {
          bonus: "",
          string: ""
        },
        melee: {
          misc: "",
          temp: "",
          current: "",
          bonuses: {
            str: true,
            dex: false,
            con: false,
            int: false,
            wis: false,
            cha: false,
            bab: true,
            size_base: true,
            level: false,
            half_level: false
          }
        },
        ranged: {
          misc: "",
          temp: "",
          current: "",
          bonuses: {
            str: false,
            dex: true,
            con: false,
            int: false,
            wis: false,
            cha: false,
            bab: true,
            size_base: true,
            level: false,
            half_level: false
          }
        }
      },
      cmb: {
        misc: "",
        temp: "",
        current: "",
        notes: "",
        bonuses: {
          str: true,
          dex: false,
          con: false,
          int: false,
          wis: false,
          cha: false,
          bab: true,
          size_special: true,
          level: false,
          half_level: false
        }
      },
      attack: {
        melee: {
          all: []
        },
        ranged: {
          all: []
        },
        notes: ""
      }
    },
    skills: {
      stats: {
        notes: ""
      },
      ranks: {
        total: "",
        include_custom: false,
        current: ""
      },
      custom: {
        all: []
      },
      default: {
        acrobatics: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: false,
          bonuses: {
            str: false,
            dex: true,
            con: false,
            int: false,
            wis: false,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: true
          }
        },
        appraise: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: false,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: true,
            wis: false,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        bluff: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: false,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: false,
            cha: true,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        climb: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: false,
          bonuses: {
            str: true,
            dex: false,
            con: false,
            int: false,
            wis: false,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: true
          }
        },
        craft_1: {
          variant_name: "",
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: false,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: true,
            wis: false,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        craft_2: {
          variant_name: "",
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: false,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: true,
            wis: false,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        diplomacy: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: false,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: false,
            cha: true,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        disable_device: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: true,
          bonuses: {
            str: false,
            dex: true,
            con: false,
            int: false,
            wis: false,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: true
          }
        },
        disguise: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: false,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: false,
            cha: true,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        escape_artist: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: false,
          bonuses: {
            str: false,
            dex: true,
            con: false,
            int: false,
            wis: false,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: true
          }
        },
        fly: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: false,
          bonuses: {
            str: false,
            dex: true,
            con: false,
            int: false,
            wis: false,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: true,
            size_fly: true
          }
        },
        handle_animal: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: true,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: false,
            cha: true,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        heal: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: false,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: true,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        intimidate: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: false,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: false,
            cha: true,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        knowledge_arcana: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: true,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: true,
            wis: false,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        knowledge_dungeoneering: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: true,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: true,
            wis: false,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        knowledge_engineering: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: true,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: true,
            wis: false,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        knowledge_geography: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: true,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: true,
            wis: false,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        knowledge_history: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: true,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: true,
            wis: false,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        knowledge_local: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: true,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: true,
            wis: false,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        knowledge_nature: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: true,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: true,
            wis: false,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        knowledge_nobility: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: true,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: true,
            wis: false,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        knowledge_planes: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: true,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: true,
            wis: false,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        knowledge_religion: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: true,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: true,
            wis: false,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        linguistics: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: true,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: true,
            wis: false,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        perception: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: false,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: true,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        perform_1: {
          variant_name: "",
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: false,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: false,
            cha: true,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        perform_2: {
          variant_name: "",
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: false,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: false,
            cha: true,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        profession_1: {
          variant_name: "",
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: true,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: true,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        profession_2: {
          variant_name: "",
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: true,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: true,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        ride: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: false,
          bonuses: {
            str: false,
            dex: true,
            con: false,
            int: false,
            wis: false,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: true
          }
        },
        sense_motive: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: false,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: true,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        sleight_of_hand: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: true,
          bonuses: {
            str: false,
            dex: true,
            con: false,
            int: false,
            wis: false,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: true
          }
        },
        spellcraft: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: true,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: true,
            wis: false,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        stealth: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: false,
          bonuses: {
            str: false,
            dex: true,
            con: false,
            int: false,
            wis: false,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: true,
            size_stealth: true
          }
        },
        survival: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: false,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: true,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        swim: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: false,
          bonuses: {
            str: true,
            dex: false,
            con: false,
            int: false,
            wis: false,
            cha: false,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: true
          }
        },
        use_magic_device: {
          ranks: "",
          misc: "",
          racial: "",
          feat: "",
          trait: "",
          current: "",
          trained: true,
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: false,
            cha: true,
            class_skill: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        }
      }
    },
    spells: {
      stats: {
        concentration: {
          current: "",
          misc: "",
          temp: "",
          racial: "",
          feat: "",
          trait: "",
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: false,
            cha: false,
            level: false,
            half_level: false
          }
        },
        caster_level_check: {
          current: "",
          misc: "",
          temp: "",
          racial: "",
          feat: "",
          trait: "",
          bonuses: {
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: false,
            cha: false,
            level: false,
            half_level: false
          }
        },
        school: "",
        opposition: "",
        domains: "",
        bloodline: "",
        notes: ""
      },
      book: {
        level_0: {
          per_day: "",
          known: "",
          bonus: "",
          dc: {
            spell_level: 0,
            misc: "",
            temp: "",
            feat: "",
            trait: "",
            current: "",
            bonuses: {
              str: false,
              dex: false,
              con: false,
              int: false,
              wis: false,
              cha: false,
              level: false,
              half_level: false,
              spell_level: false,
              plus_ten: false
            }
          },
          all: []
        },
        level_1: {
          per_day: "",
          known: "",
          bonus: "",
          dc: {
            spell_level: 1,
            misc: "",
            temp: "",
            feat: "",
            trait: "",
            current: "",
            bonuses: {
              str: false,
              dex: false,
              con: false,
              int: false,
              wis: false,
              cha: false,
              level: false,
              half_level: false,
              spell_level: false,
              plus_ten: false
            }
          },
          all: []
        },
        level_2: {
          per_day: "",
          known: "",
          bonus: "",
          dc: {
            spell_level: 2,
            misc: "",
            temp: "",
            feat: "",
            trait: "",
            current: "",
            bonuses: {
              str: false,
              dex: false,
              con: false,
              int: false,
              wis: false,
              cha: false,
              level: false,
              half_level: false,
              spell_level: false,
              plus_ten: false
            }
          },
          all: []
        },
        level_3: {
          per_day: "",
          known: "",
          bonus: "",
          dc: {
            spell_level: 3,
            misc: "",
            temp: "",
            feat: "",
            trait: "",
            current: "",
            bonuses: {
              str: false,
              dex: false,
              con: false,
              int: false,
              wis: false,
              cha: false,
              level: false,
              half_level: false,
              spell_level: false,
              plus_ten: false
            }
          },
          all: []
        },
        level_4: {
          per_day: "",
          known: "",
          bonus: "",
          dc: {
            spell_level: 4,
            misc: "",
            temp: "",
            feat: "",
            trait: "",
            current: "",
            bonuses: {
              str: false,
              dex: false,
              con: false,
              int: false,
              wis: false,
              cha: false,
              level: false,
              half_level: false,
              spell_level: false,
              plus_ten: false
            }
          },
          all: []
        },
        level_5: {
          per_day: "",
          known: "",
          bonus: "",
          dc: {
            spell_level: 5,
            misc: "",
            temp: "",
            feat: "",
            trait: "",
            current: "",
            bonuses: {
              str: false,
              dex: false,
              con: false,
              int: false,
              wis: false,
              cha: false,
              level: false,
              half_level: false,
              spell_level: false,
              plus_ten: false
            }
          },
          all: []
        },
        level_6: {
          per_day: "",
          known: "",
          bonus: "",
          dc: {
            spell_level: 6,
            misc: "",
            temp: "",
            feat: "",
            trait: "",
            current: "",
            bonuses: {
              str: false,
              dex: false,
              con: false,
              int: false,
              wis: false,
              cha: false,
              level: false,
              half_level: false,
              spell_level: false,
              plus_ten: false
            }
          },
          all: []
        },
        level_7: {
          per_day: "",
          known: "",
          bonus: "",
          dc: {
            spell_level: 7,
            misc: "",
            temp: "",
            feat: "",
            trait: "",
            current: "",
            bonuses: {
              str: false,
              dex: false,
              con: false,
              int: false,
              wis: false,
              cha: false,
              level: false,
              half_level: false,
              spell_level: false,
              plus_ten: false
            }
          },
          all: []
        },
        level_8: {
          per_day: "",
          known: "",
          bonus: "",
          dc: {
            spell_level: 8,
            misc: "",
            temp: "",
            feat: "",
            trait: "",
            current: "",
            bonuses: {
              str: false,
              dex: false,
              con: false,
              int: false,
              wis: false,
              cha: false,
              level: false,
              half_level: false,
              spell_level: false,
              plus_ten: false
            }
          },
          all: []
        },
        level_9: {
          per_day: "",
          known: "",
          bonus: "",
          dc: {
            spell_level: 9,
            misc: "",
            temp: "",
            feat: "",
            trait: "",
            current: "",
            bonuses: {
              str: false,
              dex: false,
              con: false,
              int: false,
              wis: false,
              cha: false,
              level: false,
              half_level: false,
              spell_level: false,
              plus_ten: false
            }
          },
          all: []
        }
      }
    },
    notes: {
      character: {
        all: []
      },
      story: {
        all: []
      }
    },
    events: {
      all: []
    }
  };

  // exposed methods
  return {
    data: data
  };

})();
