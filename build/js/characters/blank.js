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
            fly: "",
            stealth: "",
            special: ""
          }
        }
      },
      classes: {
        all: [{
          classname: "",
          level: "",
          hp: "",
          fortitude: "",
          reflex: "",
          will: "",
          ranks: "",
          bab: ""
        }]
      },
      experience: {
        level: "",
        next_level: "",
        total: "",
        advancement: "",
        needed: ""
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
        feats: "",
        traits: "",
        languages: "",
        special_abilities: ""
      },
      power: {
        all: []
      }
    },
    equipment: {
      possessions: {
        gear: "",
        magic_gear: "",
        potion_viles_oils: "",
        scrolls: ""
      },
      armor: {
        armor: "",
        check_penalty: "",
        max_dex: "",
        shield: ""
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
        encumbrance_str: "",
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
            max_dex: true
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
            size_base: true
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
            max_dex: true
          }
        },
        stats: {
          armor: "",
          shield: "",
          deflect: "",
          dodge: "",
          natural: ""
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
          special_size: true,
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
        current: "",
        overcome: "",
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
        spell_resistance: {
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
        base_attack: "",
        base_attack_bonuses: "",
        melee_attack: {
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
            size: true,
            level: false,
            half_level: false
          }
        },
        ranged_attack: {
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
            size: true,
            level: false,
            half_level: false
          }
        },
      },
      cmb: {
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
          special_size: true,
          level: false,
          half_level: false,
          plus_ten: true
        }
      },
      attack: {
        melee: [],
        ranged: [],
        notes: ""
      }
    },
    skills: {
      ranks: {
        total: "",
        include_custom: false,
        current: ""
      },
      custom: {
        all: []
      },
      all: {
        acrobatics: {
          ranks: "",
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
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
          current: "",
          racial: "",
          feat: "",
          trait: "",
          bonuses: {
            class_skill: false,
            str: false,
            dex: false,
            con: false,
            int: true,
            wis: false,
            cha: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        bluff: {
          ranks: "",
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
          bonuses: {
            class_skill: false,
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: false,
            cha: true,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        climb: {
          ranks: "",
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
          bonuses: {
            class_skill: false,
            str: true,
            dex: false,
            con: false,
            int: false,
            wis: false,
            cha: false,
            level: false,
            half_level: false,
            check_penalty: true
          }
        },
        craft_1: {
          variant_name: "",
          ranks: "",
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
          bonuses: {
            class_skill: false,
            str: false,
            dex: false,
            con: false,
            int: true,
            wis: false,
            cha: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        craft_2: {
          variant_name: "",
          ranks: "",
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
          bonuses: {
            class_skill: false,
            str: false,
            dex: false,
            con: false,
            int: true,
            wis: false,
            cha: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        diplomacy: {
          ranks: "",
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
          bonuses: {
            class_skill: false,
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: false,
            cha: true,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        disable_device: {
          ranks: "",
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
          bonuses: {
            class_skill: false,
            str: false,
            dex: true,
            con: false,
            int: false,
            wis: false,
            cha: false,
            level: false,
            half_level: false,
            check_penalty: true
          }
        },
        disguise: {
          ranks: "",
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
          bonuses: {
            class_skill: false,
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: false,
            cha: true,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        escape_artist: {
          ranks: "",
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
          bonuses: {
            class_skill: false,
            str: false,
            dex: true,
            con: false,
            int: false,
            wis: false,
            cha: false,
            level: false,
            half_level: false,
            check_penalty: true
          }
        },
        fly: {
          ranks: "",
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
          bonuses: {
            class_skill: false,
            str: false,
            dex: true,
            con: false,
            int: false,
            wis: false,
            cha: false,
            level: false,
            half_level: false,
            check_penalty: true,
            size_modifier_fly: true
          }
        },
        handle_animal: {
          ranks: "",
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
          bonuses: {
            class_skill: false,
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: false,
            cha: true,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        heal: {
          ranks: "",
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
          bonuses: {
            class_skill: false,
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: true,
            cha: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        intimidate: {
          ranks: "",
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
          bonuses: {
            class_skill: false,
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: false,
            cha: true,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        knowledge_arcana: {
          ranks: "",
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
          bonuses: {
            class_skill: false,
            str: false,
            dex: false,
            con: false,
            int: true,
            wis: false,
            cha: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        knowledge_dungeoneering: {
          ranks: "",
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
          bonuses: {
            class_skill: false,
            str: false,
            dex: false,
            con: false,
            int: true,
            wis: false,
            cha: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        knowledge_engineering: {
          ranks: "",
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
          bonuses: {
            class_skill: false,
            str: false,
            dex: false,
            con: false,
            int: true,
            wis: false,
            cha: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        knowledge_geography: {
          ranks: "",
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
          bonuses: {
            class_skill: false,
            str: false,
            dex: false,
            con: false,
            int: true,
            wis: false,
            cha: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        knowledge_history: {
          ranks: "",
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
          bonuses: {
            class_skill: false,
            str: false,
            dex: false,
            con: false,
            int: true,
            wis: false,
            cha: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        knowledge_local: {
          ranks: "",
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
          bonuses: {
            class_skill: false,
            str: false,
            dex: false,
            con: false,
            int: true,
            wis: false,
            cha: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        knowledge_nature: {
          ranks: "",
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
          bonuses: {
            class_skill: false,
            str: false,
            dex: false,
            con: false,
            int: true,
            wis: false,
            cha: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        knowledge_nobility: {
          ranks: "",
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
          bonuses: {
            class_skill: false,
            str: false,
            dex: false,
            con: false,
            int: true,
            wis: false,
            cha: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        knowledge_planes: {
          ranks: "",
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
          bonuses: {
            class_skill: false,
            str: false,
            dex: false,
            con: false,
            int: true,
            wis: false,
            cha: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        knowledge_religion: {
          ranks: "",
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
          bonuses: {
            class_skill: false,
            str: false,
            dex: false,
            con: false,
            int: true,
            wis: false,
            cha: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        linguistics: {
          ranks: "",
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
          bonuses: {
            class_skill: false,
            str: false,
            dex: false,
            con: false,
            int: true,
            wis: false,
            cha: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        perception: {
          ranks: "",
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
          bonuses: {
            class_skill: false,
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: true,
            cha: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        perform_1: {
          variant_name: "",
          ranks: "",
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
          bonuses: {
            class_skill: false,
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: false,
            cha: true,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        perform_2: {
          variant_name: "",
          ranks: "",
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
          bonuses: {
            class_skill: false,
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: false,
            cha: true,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        profession_1: {
          variant_name: "",
          ranks: "",
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
          bonuses: {
            class_skill: false,
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: true,
            cha: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        profession_2: {
          variant_name: "",
          ranks: "",
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
          bonuses: {
            class_skill: false,
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: true,
            cha: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        ride: {
          ranks: "",
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
          bonuses: {
            class_skill: false,
            str: false,
            dex: true,
            con: false,
            int: false,
            wis: false,
            cha: false,
            level: false,
            half_level: false,
            check_penalty: true
          }
        },
        sense_motive: {
          ranks: "",
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
          bonuses: {
            class_skill: false,
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: true,
            cha: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        sleight_of_hand: {
          ranks: "",
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
          bonuses: {
            class_skill: false,
            str: false,
            dex: true,
            con: false,
            int: false,
            wis: false,
            cha: false,
            level: false,
            half_level: false,
            check_penalty: true
          }
        },
        spellcraft: {
          ranks: "",
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
          bonuses: {
            class_skill: false,
            str: false,
            dex: false,
            con: false,
            int: true,
            wis: false,
            cha: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        stealth: {
          ranks: "",
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
          bonuses: {
            class_skill: false,
            str: false,
            dex: true,
            con: false,
            int: false,
            wis: false,
            cha: false,
            level: false,
            half_level: false,
            check_penalty: true,
            size_modifier_stealth: true
          }
        },
        survival: {
          ranks: "",
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
          bonuses: {
            class_skill: false,
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: true,
            cha: false,
            level: false,
            half_level: false,
            check_penalty: false
          }
        },
        swim: {
          ranks: "",
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
          bonuses: {
            class_skill: false,
            str: true,
            dex: false,
            con: false,
            int: false,
            wis: false,
            cha: false,
            level: false,
            half_level: false,
            check_penalty: true
          }
        },
        use_magic_device: {
          ranks: "",
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
          bonuses: {
            class_skill: false,
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: false,
            cha: true,
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
