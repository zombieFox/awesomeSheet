var blank = (function() {

  var data = {
    awesomeSheet: true,
    basics: {
      name: "",
      race: "",
      level: "",
      classes: [{
        classname: "",
        level: "",
        hp: "",
        fortitude: "",
        reflex: "",
        will: "",
        ranks: "",
        bab: ""
      }],
      size: {
        category: "",
        size_modifier: 0,
        special_size_modifier: 0,
        size_modifier_fly: 0,
        size_modifier_stealth: 0
      },
      alignment: "",
      deity: "",
      height: "",
      weight: "",
      age: "",
      gender: "",
      speed: {
        land: "",
        fly: "",
        maneuverability: "",
        swim: "",
        climb: "",
        burrow: ""
      },
      hero_points: "",
      character_description: "",
      initiative: {
        misc: "",
        temp: "",
        feat: "",
        trait: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false
        }
      },
      xp: {
        total: "",
        advancement_speed: "",
        next_level: "",
        needed: ""
      },
      character_image: {
        uploaded: false,
        background: "",
        color: {
          r: "",
          g: "",
          b: ""
        },
        image: "",
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
          current: "",
          modifier: "",
          base: "",
          enhancement: "",
          misc: "",
          racial: "",
          temp: ""
        },
        dex: {
          current: "",
          modifier: "",
          base: "",
          enhancement: "",
          misc: "",
          racial: "",
          temp: ""
        },
        con: {
          current: "",
          modifier: "",
          base: "",
          enhancement: "",
          misc: "",
          racial: "",
          temp: ""
        },
        int: {
          current: "",
          modifier: "",
          base: "",
          enhancement: "",
          misc: "",
          racial: "",
          temp: ""
        },
        wis: {
          current: "",
          modifier: "",
          base: "",
          enhancement: "",
          misc: "",
          racial: "",
          temp: ""
        },
        cha: {
          current: "",
          modifier: "",
          base: "",
          enhancement: "",
          misc: "",
          racial: "",
          temp: ""
        }
      },
      feats: "",
      traits: "",
      languages: "",
      special_abilities: "",
      power: []
    },
    equipment: {
      gear: "",
      magic_gear: "",
      potion_viles_oils: "",
      scrolls: "",
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
      wealth: {
        platinum: "",
        gold: "",
        silver: "",
        copper: "",
        total: ""
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
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          plus_ten: true,
          ac_armor: true,
          ac_shield: true,
          ac_deflect: true,
          ac_dodge: true,
          ac_natural: true,
          size: true,
          max_dex: true
        }
      },
      flat_footed: {
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          plus_ten: true,
          ac_armor: true,
          ac_shield: true,
          ac_deflect: true,
          ac_natural: true,
          size: true
        }
      },
      touch: {
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          plus_ten: true,
          ac_deflect: true,
          ac_dodge: true,
          size: true,
          max_dex: true
        }
      },
      ac_notes: "",
      fortitude: {
        base: "",
        resistance: "",
        feat: "",
        trait: "",
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: true,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
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
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
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
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: true,
          cha_bonus: false,
          level: false,
          half_level: false
        }
      },
      save_notes: "",
      dr: {
        feat: "",
        trait: "",
        misc: "",
        temp: "",
        current: "",
        overcome: "",
        bonuses: {
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
      sr: {
        feat: "",
        trait: "",
        misc: "",
        temp: "",
        current: "",
        bonuses: {
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
      resist_notes: ""
    },
    offense: {
      base_attack: "",
      base_attack_bonuses: "",
      cmb: {
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: true,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          bab: true,
          special_size: true,
          level: false,
          half_level: false
        }
      },
      cmd: {
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: true,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          bab: true,
          special_size: true,
          level: false,
          half_level: false,
          plus_ten: true
        }
      },
      melee_attack: {
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: true,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
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
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          bab: true,
          size: true,
          level: false,
          half_level: false
        }
      },
      attack: {
        melee: [],
        ranged: []
      },
      attack_notes: ""
    },
    skills: {
      ranks: {
        total: "",
        spent: {
          include_custom: false,
          current: ""
        }
      },
      custom: [],
      all: {
        acrobatics: {
          ranks: "",
          misc: "",
          current: "",
          racial: "",
          feat: "",
          trait: "",
          bonuses: {
            str_bonus: false,
            dex_bonus: true,
            con_bonus: false,
            int_bonus: false,
            wis_bonus: false,
            cha_bonus: false,
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
            str_bonus: false,
            dex_bonus: false,
            con_bonus: false,
            int_bonus: true,
            wis_bonus: false,
            cha_bonus: false,
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
            str_bonus: false,
            dex_bonus: false,
            con_bonus: false,
            int_bonus: false,
            wis_bonus: false,
            cha_bonus: true,
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
            str_bonus: true,
            dex_bonus: false,
            con_bonus: false,
            int_bonus: false,
            wis_bonus: false,
            cha_bonus: false,
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
            str_bonus: false,
            dex_bonus: false,
            con_bonus: false,
            int_bonus: true,
            wis_bonus: false,
            cha_bonus: false,
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
            str_bonus: false,
            dex_bonus: false,
            con_bonus: false,
            int_bonus: true,
            wis_bonus: false,
            cha_bonus: false,
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
            str_bonus: false,
            dex_bonus: false,
            con_bonus: false,
            int_bonus: false,
            wis_bonus: false,
            cha_bonus: true,
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
            str_bonus: false,
            dex_bonus: true,
            con_bonus: false,
            int_bonus: false,
            wis_bonus: false,
            cha_bonus: false,
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
            str_bonus: false,
            dex_bonus: false,
            con_bonus: false,
            int_bonus: false,
            wis_bonus: false,
            cha_bonus: true,
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
            str_bonus: false,
            dex_bonus: true,
            con_bonus: false,
            int_bonus: false,
            wis_bonus: false,
            cha_bonus: false,
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
            str_bonus: false,
            dex_bonus: true,
            con_bonus: false,
            int_bonus: false,
            wis_bonus: false,
            cha_bonus: false,
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
            str_bonus: false,
            dex_bonus: false,
            con_bonus: false,
            int_bonus: false,
            wis_bonus: false,
            cha_bonus: true,
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
            str_bonus: false,
            dex_bonus: false,
            con_bonus: false,
            int_bonus: false,
            wis_bonus: true,
            cha_bonus: false,
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
            str_bonus: false,
            dex_bonus: false,
            con_bonus: false,
            int_bonus: false,
            wis_bonus: false,
            cha_bonus: true,
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
            str_bonus: false,
            dex_bonus: false,
            con_bonus: false,
            int_bonus: true,
            wis_bonus: false,
            cha_bonus: false,
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
            str_bonus: false,
            dex_bonus: false,
            con_bonus: false,
            int_bonus: true,
            wis_bonus: false,
            cha_bonus: false,
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
            str_bonus: false,
            dex_bonus: false,
            con_bonus: false,
            int_bonus: true,
            wis_bonus: false,
            cha_bonus: false,
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
            str_bonus: false,
            dex_bonus: false,
            con_bonus: false,
            int_bonus: true,
            wis_bonus: false,
            cha_bonus: false,
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
            str_bonus: false,
            dex_bonus: false,
            con_bonus: false,
            int_bonus: true,
            wis_bonus: false,
            cha_bonus: false,
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
            str_bonus: false,
            dex_bonus: false,
            con_bonus: false,
            int_bonus: true,
            wis_bonus: false,
            cha_bonus: false,
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
            str_bonus: false,
            dex_bonus: false,
            con_bonus: false,
            int_bonus: true,
            wis_bonus: false,
            cha_bonus: false,
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
            str_bonus: false,
            dex_bonus: false,
            con_bonus: false,
            int_bonus: true,
            wis_bonus: false,
            cha_bonus: false,
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
            str_bonus: false,
            dex_bonus: false,
            con_bonus: false,
            int_bonus: true,
            wis_bonus: false,
            cha_bonus: false,
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
            str_bonus: false,
            dex_bonus: false,
            con_bonus: false,
            int_bonus: true,
            wis_bonus: false,
            cha_bonus: false,
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
            str_bonus: false,
            dex_bonus: false,
            con_bonus: false,
            int_bonus: true,
            wis_bonus: false,
            cha_bonus: false,
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
            str_bonus: false,
            dex_bonus: false,
            con_bonus: false,
            int_bonus: false,
            wis_bonus: true,
            cha_bonus: false,
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
            str_bonus: false,
            dex_bonus: false,
            con_bonus: false,
            int_bonus: false,
            wis_bonus: false,
            cha_bonus: true,
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
            str_bonus: false,
            dex_bonus: false,
            con_bonus: false,
            int_bonus: false,
            wis_bonus: false,
            cha_bonus: true,
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
            str_bonus: false,
            dex_bonus: false,
            con_bonus: false,
            int_bonus: false,
            wis_bonus: true,
            cha_bonus: false,
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
            str_bonus: false,
            dex_bonus: false,
            con_bonus: false,
            int_bonus: false,
            wis_bonus: true,
            cha_bonus: false,
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
            str_bonus: false,
            dex_bonus: true,
            con_bonus: false,
            int_bonus: false,
            wis_bonus: false,
            cha_bonus: false,
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
            str_bonus: false,
            dex_bonus: false,
            con_bonus: false,
            int_bonus: false,
            wis_bonus: true,
            cha_bonus: false,
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
            str_bonus: false,
            dex_bonus: true,
            con_bonus: false,
            int_bonus: false,
            wis_bonus: false,
            cha_bonus: false,
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
            str_bonus: false,
            dex_bonus: false,
            con_bonus: false,
            int_bonus: true,
            wis_bonus: false,
            cha_bonus: false,
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
            str_bonus: false,
            dex_bonus: true,
            con_bonus: false,
            int_bonus: false,
            wis_bonus: false,
            cha_bonus: false,
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
            str_bonus: false,
            dex_bonus: false,
            con_bonus: false,
            int_bonus: false,
            wis_bonus: true,
            cha_bonus: false,
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
            str_bonus: true,
            dex_bonus: false,
            con_bonus: false,
            int_bonus: false,
            wis_bonus: false,
            cha_bonus: false,
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
            str_bonus: false,
            dex_bonus: false,
            con_bonus: false,
            int_bonus: false,
            wis_bonus: false,
            cha_bonus: true,
            level: false,
            half_level: false,
            check_penalty: false
          }
        }
      }
    },
    spells: {
      concentration: {
        current: "",
        misc: "",
        temp: "",
        racial: "",
        feat: "",
        trait: "",
        bonuses: {
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
      caster_level_check: {
        current: "",
        misc: "",
        temp: "",
        racial: "",
        feat: "",
        trait: "",
        bonuses: {
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
      school: "",
      opposition: "",
      domains: "",
      bloodline: "",
      spell_notes: "",
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
      bonus: {
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
        level_0: {
          spell_level: 0,
          misc: "",
          temp: "",
          feat: "",
          trait: "",
          current: "",
          bonuses: {
            str_bonus: false,
            dex_bonus: false,
            con_bonus: false,
            int_bonus: false,
            wis_bonus: false,
            cha_bonus: false,
            level: false,
            half_level: false,
            spell_level: false,
            plus_ten: false
          }
        },
        level_1: {
          spell_level: 1,
          misc: "",
          temp: "",
          feat: "",
          trait: "",
          current: "",
          bonuses: {
            str_bonus: false,
            dex_bonus: false,
            con_bonus: false,
            int_bonus: false,
            wis_bonus: false,
            cha_bonus: false,
            level: false,
            half_level: false,
            spell_level: false,
            plus_ten: false
          }
        },
        level_2: {
          spell_level: 2,
          misc: "",
          temp: "",
          feat: "",
          trait: "",
          current: "",
          bonuses: {
            str_bonus: false,
            dex_bonus: false,
            con_bonus: false,
            int_bonus: false,
            wis_bonus: false,
            cha_bonus: false,
            level: false,
            half_level: false,
            spell_level: false,
            plus_ten: false
          }
        },
        level_3: {
          spell_level: 3,
          misc: "",
          temp: "",
          feat: "",
          trait: "",
          current: "",
          bonuses: {
            str_bonus: false,
            dex_bonus: false,
            con_bonus: false,
            int_bonus: false,
            wis_bonus: false,
            cha_bonus: false,
            level: false,
            half_level: false,
            spell_level: false,
            plus_ten: false
          }
        },
        level_4: {
          spell_level: 4,
          misc: "",
          temp: "",
          feat: "",
          trait: "",
          current: "",
          bonuses: {
            str_bonus: false,
            dex_bonus: false,
            con_bonus: false,
            int_bonus: false,
            wis_bonus: false,
            cha_bonus: false,
            level: false,
            half_level: false,
            spell_level: false,
            plus_ten: false
          }
        },
        level_5: {
          spell_level: 5,
          misc: "",
          temp: "",
          feat: "",
          trait: "",
          current: "",
          bonuses: {
            str_bonus: false,
            dex_bonus: false,
            con_bonus: false,
            int_bonus: false,
            wis_bonus: false,
            cha_bonus: false,
            level: false,
            half_level: false,
            spell_level: false,
            plus_ten: false
          }
        },
        level_6: {
          spell_level: 6,
          misc: "",
          temp: "",
          feat: "",
          trait: "",
          current: "",
          bonuses: {
            str_bonus: false,
            dex_bonus: false,
            con_bonus: false,
            int_bonus: false,
            wis_bonus: false,
            cha_bonus: false,
            level: false,
            half_level: false,
            spell_level: false,
            plus_ten: false
          }
        },
        level_7: {
          spell_level: 7,
          misc: "",
          temp: "",
          feat: "",
          trait: "",
          current: "",
          bonuses: {
            str_bonus: false,
            dex_bonus: false,
            con_bonus: false,
            int_bonus: false,
            wis_bonus: false,
            cha_bonus: false,
            level: false,
            half_level: false,
            spell_level: false,
            plus_ten: false
          }
        },
        level_8: {
          spell_level: 8,
          misc: "",
          temp: "",
          feat: "",
          trait: "",
          current: "",
          bonuses: {
            str_bonus: false,
            dex_bonus: false,
            con_bonus: false,
            int_bonus: false,
            wis_bonus: false,
            cha_bonus: false,
            level: false,
            half_level: false,
            spell_level: false,
            plus_ten: false
          }
        },
        level_9: {
          spell_level: 9,
          misc: "",
          temp: "",
          feat: "",
          trait: "",
          current: "",
          bonuses: {
            str_bonus: false,
            dex_bonus: false,
            con_bonus: false,
            int_bonus: false,
            wis_bonus: false,
            cha_bonus: false,
            level: false,
            half_level: false,
            spell_level: false,
            plus_ten: false
          }
        }
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
      character: [],
      story: []
    },
    events: []
  };

  // exposed methods
  return {
    data: data
  };

})();
