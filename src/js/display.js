var display = (function() {

  var _displayContent = {
    basics: {
      intro: {
        contentClass: ["m-display-intro"],
        content: [{
          type: "image",
          element: {
            node: "div",
            classname: ["m-display-image-wrapper", "m-display-intro-image"]
          },
          contentItems: [{
            path: "basics.image.data",
            scale: "basics.image.scale",
            position: "basics.image.position",
            background: "basics.image.background",
            color: "basics.image.color"
          }]
        }, {
          type: "snippet",
          element: {
            node: "div",
            classname: ["m-display-intro-details"]
          },
          contentItems: [{
            path: "basics.character.name",
            element: {
              node: "h1",
            }
          }, {
            path: "basics.classes.string",
            element: {
              node: "h2",
            }
          }, {
            path: "basics.initiative.current",
            prefix: "Initiative",
            valueType: "bonus",
            element: {
              node: "p",
            }
          }, {
            path: "skills.default.perception.current",
            prefix: "Perception",
            valueType: "bonus",
            element: {
              node: "p",
            }
          }, {
            path: "basics.speed.land",
            prefix: "Land Speed",
            element: {
              node: "p",
            }
          }, {
            path: "basics.speed.swim",
            prefix: "Swim Speed",
            element: {
              node: "p",
            }
          }, {
            path: "basics.speed.climb",
            prefix: "Climb Speed",
            element: {
              node: "p",
            }
          }, {
            path: "basics.speed.burrow",
            prefix: "Burrow Speed",
            element: {
              node: "p",
            }
          }, {
            path: "basics.speed.fly",
            prefix: "Fly Speed",
            dependency: "basics.speed.maneuverability",
            element: {
              node: "p",
            }
          }]
        }]
      },
      character: {
        content: [{
          type: "snippet",
          element: {
            node: "p"
          },
          contentItems: [{
            path: "basics.senses.racial",
            prefix: "Racial Senses",
          }, {
            path: "basics.senses.magical",
            prefix: "Magical Senses",
          }, {
            path: "basics.character.alignment",
            prefix: "Alignment"
          }, {
            path: "basics.character.size.category",
            prefix: "Size"
          }, {
            path: "basics.character.race",
            prefix: "Race"
          }, {
            path: "basics.character.deity",
            prefix: "Deity"
          }, {
            path: "basics.character.gender",
            prefix: "Gender"
          }, {
            path: "basics.character.age",
            prefix: "Age"
          }, {
            path: "basics.character.height",
            prefix: "Height"
          }, {
            path: "basics.character.weight",
            prefix: "Weight"
          }, {
            path: "basics.character.hero_points",
            prefix: "Hero Points"
          }, {
            path: "basics.experience.total",
            valueType: "number",
            prefix: "EXP"
          }]
        }, {
          type: "block",
          element: {
            node: "div"
          },
          contentItems: [{
            path: "basics.character.description",
            prefix: "Description"
          }],
        }]
      }
    },
    statistics: {
      stats: {
        content: [{
          type: "stat",
          element: {
            node: "ul",
            classname: ["u-list-unstyled", "m-display-stats"]
          },
          contentItems: [{
            path: {
              stat: "statistics.stats.str.current",
              mod: "statistics.stats.str.modifier",
            },
            prefix: "STR"
          }, {
            path: {
              stat: "statistics.stats.dex.current",
              mod: "statistics.stats.dex.modifier",
            },
            prefix: "DEX"
          }, {
            path: {
              stat: "statistics.stats.con.current",
              mod: "statistics.stats.con.modifier",
            },
            prefix: "CON"
          }, {
            path: {
              stat: "statistics.stats.int.current",
              mod: "statistics.stats.int.modifier",
            },
            prefix: "INT"
          }, {
            path: {
              stat: "statistics.stats.wis.current",
              mod: "statistics.stats.wis.modifier",
            },
            prefix: "WIS"
          }, {
            path: {
              stat: "statistics.stats.cha.current",
              mod: "statistics.stats.cha.modifier",
            },
            prefix: "CHA"
          }]
        }]
      },
      abilities: {
        head: "Abilities",
        content: [{
          type: "list",
          element: {
            node: "ul",
            classname: ["u-list-unstyled", "m-display-list-dash"]
          },
          contentItems: [{
            path: "statistics.abilities.all",
            listItemKey: "name",
            pillLink: true,
            pillType: "abilities"
          }],
        }, {
          type: "block",
          element: {
            node: "div"
          },
          contentItems: [{
            path: "statistics.abilities.notes",
            prefix: "Abilities Notes"
          }],
        }]
      },
      feats: {
        head: "Feats",
        content: [{
          type: "list",
          element: {
            node: "ul",
            classname: ["u-list-unstyled", "m-display-list-dash"]
          },
          contentItems: [{
            path: "statistics.feats.all",
            listItemKey: "name",
            pillLink: true,
            pillType: "feats"
          }],
        }, {
          type: "block",
          element: {
            node: "div"
          },
          contentItems: [{
            path: "statistics.feats.notes",
            prefix: "Feats Notes"
          }],
        }]
      },
      traits: {
        head: "Traits",
        content: [{
          type: "list",
          element: {
            node: "ul",
            classname: ["u-list-unstyled", "m-display-list-dash"]
          },
          contentItems: [{
            path: "statistics.traits.all",
            listItemKey: "name",
            pillLink: true,
            pillType: "traits"
          }],
        }, {
          type: "block",
          element: {
            node: "div"
          },
          contentItems: [{
            path: "statistics.traits.notes",
            prefix: "Traits Notes"
          }],
        }]
      },
      languages: {
        head: "Languages",
        content: [{
          type: "list",
          element: {
            node: "ul",
            classname: ["u-list-unstyled", "m-display-list-dash"]
          },
          contentItems: [{
            path: "statistics.languages.all",
            listItemKey: "name",
            pillLink: true,
            pillType: "languages"
          }],
        }, {
          type: "block",
          element: {
            node: "div"
          },
          contentItems: [{
            path: "statistics.languages.notes",
            prefix: "Languages Notes"
          }],
        }]
      },
      power: {
        head: "Powers",
        content: [{
          type: "clone",
          cloneType: "power",
          element: {
            node: "ul",
            classname: ["u-list-unstyled", "m-display-list-responsive"]
          },
          contentItems: [{
            path: "statistics.power.all",
          }]
        }]
      }
    },
    equipment: {
      possessions: {
        gear: {
          head: "Gear",
          content: [{
            type: "block",
            element: {
              node: "div"
            },
            contentItems: [{
              path: "equipment.possessions.gear",
            }],
          }]
        },
        magic_gear: {
          head: "Magic Gear",
          content: [{
            type: "block",
            element: {
              node: "div"
            },
            contentItems: [{
              path: "equipment.possessions.magic_gear",
            }],
          }]
        },
        potion_vials_oils: {
          head: "Potions / Vials / Oils",
          content: [{
            type: "block",
            element: {
              node: "div"
            },
            contentItems: [{
              path: "equipment.possessions.potion_vials_oils",
            }],
          }]
        },
        scrolls: {
          head: "Scrolls",
          content: [{
            type: "block",
            element: {
              node: "div"
            },
            contentItems: [{
              path: "equipment.possessions.scrolls",
            }],
          }]
        }
      },
      armor: {
        head: "Armor",
        content: [{
          type: "group",
          element: {
            node: "ul",
            classname: ["u-list-unstyled", "m-display-list-responsive", "m-display-list-stack"]
          },
          contentItems: [{
            path: "equipment.armor.armor.name",
            prefix: "Armor"
          }, {
            path: "equipment.armor.shield.name",
            prefix: "Shield"
          }]
        }, {
          type: "block",
          element: {
            node: "div"
          },
          contentItems: [{
            path: "equipment.armor.armor.notes",
            prefix: "Armor Notes"
          }],
        }, {
          type: "block",
          element: {
            node: "div"
          },
          contentItems: [{
            path: "equipment.armor.shield.notes",
            prefix: "Shield Notes"
          }],
        }]
      },
      ___armor: {
        head: "Armor & Shield",
        content: [{
          type: "snippet",
          element: {
            node: "p"
          },
          contentItems: [{
            path: "equipment.armor.armor.name",
            prefix: "Armor"
          }, {
            path: "equipment.armor.armor.check_penalty",
            prefix: "Check Penalty"
          }, {
            path: "equipment.armor.armor.max_dex",
            prefix: "Max DEX"
          }, {
            path: "equipment.armor.armor.weight",
            prefix: "Weight"
          }, {
            path: "equipment.armor.armor.arcane_spell_failure",
            prefix: "Arcane Spell Failure"
          }]
        }, {
          type: "block",
          element: {
            node: "div"
          },
          contentItems: [{
            path: "equipment.armor.armor.notes",
            prefix: "Armor Notes"
          }],
        }, {
          type: "snippet",
          element: {
            node: "p"
          },
          contentItems: [{
            path: "equipment.armor.shield.name",
            prefix: "Shield"
          }, {
            path: "equipment.armor.shield.check_penalty",
            prefix: "Check Penalty"
          }, {
            path: "equipment.armor.shield.max_dex",
            prefix: "Max DEX"
          }, {
            path: "equipment.armor.shield.weight",
            prefix: "Weight"
          }, {
            path: "equipment.armor.shield.arcane_spell_failure",
            prefix: "Arcane Spell Failure"
          }]
        }, {
          type: "block",
          element: {
            node: "div"
          },
          contentItems: [{
            path: "equipment.armor.shield.notes",
            prefix: "Shield Notes"
          }],
        }]
      },
      body_slots: {
        head: "Body Slots",
        content: [{
          type: "group",
          element: {
            node: "ul",
            classname: ["u-list-unstyled", "m-display-list-responsive", "m-display-list-stack"]
          },
          contentItems: [{
            path: "equipment.body_slots.head",
            prefix: "Head"
          }, {
            path: "equipment.body_slots.headband",
            prefix: "Headband"
          }, {
            path: "equipment.body_slots.eyes",
            prefix: "Eyes"
          }, {
            path: "equipment.body_slots.shoulders",
            prefix: "Shoulders"
          }, {
            path: "equipment.body_slots.neck",
            prefix: "Neck"
          }, {
            path: "equipment.body_slots.chest",
            prefix: "Chest"
          }, {
            path: "equipment.body_slots.body",
            prefix: "Body"
          }, {
            path: "equipment.body_slots.belts",
            prefix: "Belts"
          }, {
            path: "equipment.body_slots.wrist",
            prefix: "Wrist"
          }, {
            path: "equipment.body_slots.hands",
            prefix: "Hands"
          }, {
            path: "equipment.body_slots.ring_left_hand",
            prefix: "Ring (Left Hand)"
          }, {
            path: "equipment.body_slots.ring_right_hand",
            prefix: "Ring (Right Hand)"
          }, {
            path: "equipment.body_slots.feet",
            prefix: "Feet"
          }]
        }]
      },
      item: {
        head: "Items",
        content: [{
          type: "clone",
          cloneType: "item",
          element: {
            node: "ul",
            classname: ["u-list-unstyled", "m-display-list-responsive", "m-display-list-compact"]
          },
          contentItems: [{
            path: "equipment.item.all"
          }]
        }, {
          type: "snippet",
          element: {
            node: "p"
          },
          contentItems: [{
            path: "equipment.item.weight.current",
            prefix: "Weight",
            valueType: "weight",
            suffix: "lbs"
          }]
        }]
      },
      encumbrance: {
        head: "Encumbrance",
        content: [{
          type: "snippet",
          element: {
            node: "p"
          },
          contentItems: [{
            path: "equipment.encumbrance.carry_move.light",
            prefix: "Light"
          }, {
            path: "equipment.encumbrance.carry_move.medium",
            prefix: "Medium"
          }, {
            path: "equipment.encumbrance.carry_move.heavy",
            prefix: "Heavy"
          }, {
            path: "equipment.encumbrance.carry_move.lift",
            prefix: "Lift"
          }, {
            path: "equipment.encumbrance.carry_move.drag",
            prefix: "Drag"
          }]
        }]
      },
      consumable: {
        head: "Consumable",
        content: [{
          type: "clone",
          cloneType: "consumable",
          element: {
            node: "ul",
            classname: ["u-list-unstyled", "m-display-list-responsive"]
          },
          contentItems: [{
            path: "equipment.consumable.all"
          }]
        }]
      },
      wealth: {
        head: "Wealth",
        content: [{
          type: "snippet",
          element: {
            node: "p"
          },
          contentItems: [{
            path: "equipment.wealth.platinum",
            suffix: "PP",
            valueType: "currency"
          }, {
            path: "equipment.wealth.gold",
            suffix: "GP",
            valueType: "currency"
          }, {
            path: "equipment.wealth.silver",
            suffix: "SP",
            valueType: "currency"
          }, {
            path: "equipment.wealth.copper",
            suffix: "CP",
            valueType: "currency"
          }]
        }, {
          type: "snippet",
          element: {
            node: "h2"
          },
          contentItems: [{
            path: "equipment.wealth.total",
            prefix: "Total",
            suffix: "GP",
            valueType: "currency"
          }]
        }]
      }
    },
    defense: {
      stats: {
        content: [{
          type: "snippet",
          element: {
            node: "h2"
          },
          contentItems: [{
            path: "defense.hp.current",
            dependency: "defense.hp.total",
            prefix: "HP"
          }, {
            path: "defense.ac.armor_class.current",
            prefix: "AC"
          }, {
            path: "defense.ac.touch.current",
            prefix: "Touch"
          }, {
            path: "defense.ac.flat_footed.current",
            prefix: "Flat Footed"
          }, {
            path: "defense.cmd.current",
            prefix: "CMD"
          }, {
            path: "defense.dr.current",
            prefix: "DR",
            dependency: "defense.dr.overcome"
          }, {
            path: "defense.sr.current",
            prefix: "SR"
          }, {
            path: "defense.resistance.current",
            prefix: "Resistance"
          }]
        }]
      },
      saves: {
        content: [{
          type: "snippet",
          element: {
            node: "h2"
          },
          contentItems: [{
            path: "defense.saves.fortitude.current",
            prefix: "Fortitude",
            valueType: "bonus"
          }, {
            path: "defense.saves.reflex.current",
            prefix: "Reflex",
            valueType: "bonus"
          }, {
            path: "defense.saves.will.current",
            prefix: "Will",
            valueType: "bonus"
          }]
        }]
      },
      notes: {
        content: [{
          type: "block",
          element: {
            node: "div"
          },
          contentItems: [{
            path: "defense.ac.notes",
            prefix: "AC Notes"
          }]
        }, {
          type: "block",
          element: {
            node: "div"
          },
          contentItems: [{
            path: "defense.cmd.notes",
            prefix: "CMD Notes"
          }]
        }, {
          type: "block",
          element: {
            node: "div"
          },
          contentItems: [{
            path: "defense.dr.notes",
            prefix: "DR Notes"
          }]
        }, {
          type: "block",
          element: {
            node: "div"
          },
          contentItems: [{
            path: "defense.sr.notes",
            prefix: "SR Notes"
          }]
        }, {
          type: "block",
          element: {
            node: "div"
          },
          contentItems: [{
            path: "defense.saves.notes",
            prefix: "Saves Notes"
          }]
        }, {
          type: "block",
          element: {
            node: "div"
          },
          contentItems: [{
            path: "defense.resistance.notes",
            prefix: "Resistance Notes"
          }]
        }]
      }
    },
    offense: {
      stats: {
        content: [{
          type: "snippet",
          element: {
            node: "h2"
          },
          contentItems: [{
            path: "offense.stats.base_attack.string",
            prefix: "BAB",
          }, {
            path: "offense.stats.melee.current",
            prefix: "Melee",
            valueType: "bonus"
          }, {
            path: "offense.stats.ranged.current",
            prefix: "Ranged",
            valueType: "bonus"
          }, {
            path: "offense.cmb.current",
            prefix: "CMB",
            valueType: "bonus"
          }]
        }]
      },
      notes: {
        content: [{
          type: "block",
          element: {
            node: "div"
          },
          contentItems: [{
            path: "offense.attack.notes",
            prefix: "Attack Notes"
          }]
        }]
      },
      attack: {
        melee: {
          content: [{
            type: "clone",
            cloneType: "attack",
            element: {
              node: "ul",
              classname: ["u-list-unstyled", "m-display-list-attack"]
            },
            contentItems: [{
              path: "offense.attack.melee.all",
            }]
          }]
        },
        ranged: {
          content: [{
            type: "clone",
            cloneType: "attack",
            element: {
              node: "ul",
              classname: ["u-list-unstyled", "m-display-list-attack"]
            },
            contentItems: [{
              path: "offense.attack.ranged.all",
            }]
          }]
        }
      }
    },
    skills: {
      all: {
        content: [{
          type: "skills",
          element: {
            node: "ul",
            classname: ["u-list-unstyled", "m-display-list-responsive"]
          },
          contentItems: [{
            path: "skills.default",
            skillType: "default"
          }, {
            path: "skills.custom.all",
            skillType: "custom"
          }, {
            path: "skills.default",
            skillType: "variant"
          }]
        }, {
          type: "block",
          element: {
            node: "div"
          },
          contentItems: [{
            path: "skills.stats.notes",
            prefix: "Skill Notes"
          }],
        }]
      }
    },
    spells: {
      stats: {
        content: [{
          type: "snippet",
          element: {
            node: "h2"
          },
          contentItems: [{
            path: "spells.stats.concentration.current",
            prefix: "Concentration",
            valueType: "bonus"
          }, {
            path: "spells.stats.caster_level_check.current",
            prefix: "Caster Level Check",
            valueType: "bonus"
          }]
        }, {
          type: "snippet",
          element: {
            node: "p"
          },
          contentItems: [{
            path: "spells.stats.school",
            prefix: "School"
          }, {
            path: "spells.stats.opposition",
            prefix: "Opposition"
          }, {
            path: "spells.stats.domains",
            prefix: "Domains"
          }, {
            path: "spells.stats.bloodline",
            prefix: "Bloodline"
          }]
        }, {
          type: "block",
          element: {
            node: "div"
          },
          contentItems: [{
            path: "spells.stats.notes",
            prefix: "Spells Notes"
          }]
        }]
      },
      book: {
        level_0: {
          head: "Level 0",
          content: [{
            type: "snippet",
            element: {
              node: "p"
            },
            contentItems: [{
              path: "spells.book.level_0.known",
              prefix: "Known"
            }, {
              path: "spells.book.level_0.per_day",
              prefix: "Per Day"
            }, {
              path: "spells.book.level_0.bonus",
              prefix: "Bonus"
            }, {
              path: "spells.book.level_0.dc.current",
              prefix: "DC"
            }]
          }, {
            type: "spells",
            level: 0,
            element: {
              node: "ul",
              classname: ["u-list-unstyled", "m-display-list-spell"]
            },
            contentItems: [{
              path: "spells.book.level_0.all",
            }]
          }]
        },
        level_1: {
          head: "Level 1",
          content: [{
            type: "snippet",
            element: {
              node: "p"
            },
            contentItems: [{
              path: "spells.book.level_1.known",
              prefix: "Known"
            }, {
              path: "spells.book.level_1.per_day",
              prefix: "Per Day"
            }, {
              path: "spells.book.level_1.bonus",
              prefix: "Bonus"
            }, {
              path: "spells.book.level_1.dc.current",
              prefix: "DC"
            }]
          }, {
            type: "spells",
            level: 1,
            element: {
              node: "ul",
              classname: ["u-list-unstyled", "m-display-list-spell"]
            },
            contentItems: [{
              path: "spells.book.level_1.all",
            }]
          }]
        },
        level_2: {
          head: "Level 2",
          content: [{
            type: "snippet",
            element: {
              node: "p"
            },
            contentItems: [{
              path: "spells.book.level_2.known",
              prefix: "Known"
            }, {
              path: "spells.book.level_2.per_day",
              prefix: "Per Day"
            }, {
              path: "spells.book.level_2.bonus",
              prefix: "Bonus"
            }, {
              path: "spells.book.level_2.dc.current",
              prefix: "DC"
            }]
          }, {
            type: "spells",
            level: 2,
            element: {
              node: "ul",
              classname: ["u-list-unstyled", "m-display-list-spell"]
            },
            contentItems: [{
              path: "spells.book.level_2.all",
            }]
          }]
        },
        level_3: {
          head: "Level 3",
          content: [{
            type: "snippet",
            element: {
              node: "p"
            },
            contentItems: [{
              path: "spells.book.level_3.known",
              prefix: "Known"
            }, {
              path: "spells.book.level_3.per_day",
              prefix: "Per Day"
            }, {
              path: "spells.book.level_3.bonus",
              prefix: "Bonus"
            }, {
              path: "spells.book.level_3.dc.current",
              prefix: "DC"
            }]
          }, {
            type: "spells",
            level: 3,
            element: {
              node: "ul",
              classname: ["u-list-unstyled", "m-display-list-spell"]
            },
            contentItems: [{
              path: "spells.book.level_3.all",
            }]
          }]
        },
        level_4: {
          head: "Level 4",
          content: [{
            type: "snippet",
            element: {
              node: "p"
            },
            contentItems: [{
              path: "spells.book.level_4.known",
              prefix: "Known"
            }, {
              path: "spells.book.level_4.per_day",
              prefix: "Per Day"
            }, {
              path: "spells.book.level_4.bonus",
              prefix: "Bonus"
            }, {
              path: "spells.book.level_4.dc.current",
              prefix: "DC"
            }]
          }, {
            type: "spells",
            level: 4,
            element: {
              node: "ul",
              classname: ["u-list-unstyled", "m-display-list-spell"]
            },
            contentItems: [{
              path: "spells.book.level_4.all",
            }]
          }]
        },
        level_5: {
          head: "Level 5",
          content: [{
            type: "snippet",
            element: {
              node: "p"
            },
            contentItems: [{
              path: "spells.book.level_5.known",
              prefix: "Known"
            }, {
              path: "spells.book.level_5.per_day",
              prefix: "Per Day"
            }, {
              path: "spells.book.level_5.bonus",
              prefix: "Bonus"
            }, {
              path: "spells.book.level_5.dc.current",
              prefix: "DC"
            }]
          }, {
            type: "spells",
            level: 5,
            element: {
              node: "ul",
              classname: ["u-list-unstyled", "m-display-list-spell"]
            },
            contentItems: [{
              path: "spells.book.level_5.all",
            }]
          }]
        },
        level_6: {
          head: "Level 6",
          content: [{
            type: "snippet",
            element: {
              node: "p"
            },
            contentItems: [{
              path: "spells.book.level_6.known",
              prefix: "Known"
            }, {
              path: "spells.book.level_6.per_day",
              prefix: "Per Day"
            }, {
              path: "spells.book.level_6.bonus",
              prefix: "Bonus"
            }, {
              path: "spells.book.level_6.dc.current",
              prefix: "DC"
            }]
          }, {
            type: "spells",
            level: 6,
            element: {
              node: "ul",
              classname: ["u-list-unstyled", "m-display-list-spell"]
            },
            contentItems: [{
              path: "spells.book.level_6.all",
            }]
          }]
        },
        level_7: {
          head: "Level 7",
          content: [{
            type: "snippet",
            element: {
              node: "p"
            },
            contentItems: [{
              path: "spells.book.level_7.known",
              prefix: "Known"
            }, {
              path: "spells.book.level_7.per_day",
              prefix: "Per Day"
            }, {
              path: "spells.book.level_7.bonus",
              prefix: "Bonus"
            }, {
              path: "spells.book.level_7.dc.current",
              prefix: "DC"
            }]
          }, {
            type: "spells",
            level: 7,
            element: {
              node: "ul",
              classname: ["u-list-unstyled", "m-display-list-spell"]
            },
            contentItems: [{
              path: "spells.book.level_7.all",
            }]
          }]
        },
        level_8: {
          head: "Level 8",
          content: [{
            type: "snippet",
            element: {
              node: "p"
            },
            contentItems: [{
              path: "spells.book.level_8.known",
              prefix: "Known"
            }, {
              path: "spells.book.level_8.per_day",
              prefix: "Per Day"
            }, {
              path: "spells.book.level_8.bonus",
              prefix: "Bonus"
            }, {
              path: "spells.book.level_8.dc.current",
              prefix: "DC"
            }]
          }, {
            type: "spells",
            level: 8,
            element: {
              node: "ul",
              classname: ["u-list-unstyled", "m-display-list-spell"]
            },
            contentItems: [{
              path: "spells.book.level_8.all",
            }]
          }]
        },
        level_9: {
          head: "Level 9",
          content: [{
            type: "snippet",
            element: {
              node: "p"
            },
            contentItems: [{
              path: "spells.book.level_9.known",
              prefix: "Known"
            }, {
              path: "spells.book.level_9.per_day",
              prefix: "Per Day"
            }, {
              path: "spells.book.level_9.bonus",
              prefix: "Bonus"
            }, {
              path: "spells.book.level_9.dc.current",
              prefix: "DC"
            }]
          }, {
            type: "spells",
            level: 9,
            element: {
              node: "ul",
              classname: ["u-list-unstyled", "m-display-list-spell"]
            },
            contentItems: [{
              path: "spells.book.level_9.all",
            }]
          }]
        }
      }
    },
    notes: {
      character: {
        head: "Character",
        content: [{
          type: "clone",
          cloneType: "note",
          element: {
            node: "ul",
            classname: ["u-list-unstyled", "m-display-list"]
          },
          contentItems: [{
            path: "notes.character.all"
          }]
        }]
      },
      story: {
        head: "Story",
        content: [{
          type: "clone",
          cloneType: "note",
          element: {
            node: "ul",
            classname: ["u-list-unstyled", "m-display-list"]
          },
          contentItems: [{
            path: "notes.story.all"
          }]
        }]
      }
    }
  };

  var state = (function() {
    var _state = {
      basics: false,
      statistics: false,
      equipment: false,
      defense: false,
      offense: false,
      skills: false,
      spells: false,
      notes: false
    };
    var get = function(options) {
      var defaultOptions = {
        section: null,
        all: null
      };
      if (options) {
        defaultOptions = helper.applyOptions(defaultOptions, options);
      };
      if (defaultOptions.all != null && defaultOptions.all) {
        var displayOnCount = 0;
        var sectionCount = 0;
        for (var key in _state) {
          sectionCount++;
          if (_state[key]) {
            displayOnCount++;
          };
        };
        // if no sections are in display mode
        if (displayOnCount == 0) {
          return false;
          // if all sections are in display mode
        } else if (displayOnCount == sectionCount) {
          return true;
          // if more than half the number of sections are in display mode
        } else if (displayOnCount >= (sectionCount / 2)) {
          return true;
        } else {
          // else restore to edit mode
          return false;
        };
      } else if (defaultOptions.section != null) {
        return _state[defaultOptions.section];
      } else {
        return _state;
      };
    };
    var set = function(options) {
      var defaultOptions = {
        force: null,
        section: null,
        all: null
      };
      if (options) {
        defaultOptions = helper.applyOptions(defaultOptions, options);
      };
      if (defaultOptions.force != null) {
        if (defaultOptions.section != null) {
          _state[defaultOptions.section] = defaultOptions.force;
        } else {
          for (var key in _state) {
            _state[key] = defaultOptions.force;
          };
        };
      } else {
        if (defaultOptions.all != null && defaultOptions.all) {
          var displayOnCount = 0;
          var sectionCount = 0;
          for (var key in _state) {
            sectionCount++;
            if (_state[key]) {
              displayOnCount++;
            };
          };
          // if no sections are in display mode
          if (displayOnCount == 0) {
            for (var key in _state) {
              _state[key] = true;
            };
            // if all sections are in display mode
          } else if (displayOnCount == sectionCount) {
            for (var key in _state) {
              _state[key] = false;
            };
            // if more than half the number of sections are in display mode
          } else if (displayOnCount >= (sectionCount / 2)) {
            for (var key in _state) {
              _state[key] = true;
            };
          } else {
            // else restore to edit mode
            for (var key in _state) {
              _state[key] = false;
            };
          };
        } else if (defaultOptions.section != null) {
          if (_state[defaultOptions.section]) {
            _state[defaultOptions.section] = false;
          } else {
            _state[defaultOptions.section] = true;
          };
        };
      };
    };
    // exposed methods
    return {
      set: set,
      get: get
    };
  })();

  function _store() {
    helper.store("displayState", JSON.stringify(state.get()));
  };

  function init() {
    if (helper.read("displayState")) {
      var savedState = JSON.parse(helper.read("displayState"));
      for (var key in savedState) {
        state.set({
          force: savedState[key],
          section: key
        });
      };
    };
    _render_all_section({
      all: true
    });
    _render_chrome();
  };

  function toggle(options) {
    var defaultOptions = {
      force: null,
      section: null,
      all: null
    };
    if (options) {
      defaultOptions = helper.applyOptions(defaultOptions, options);
    };
    if (defaultOptions.force != null) {
      if (defaultOptions.section != null) {
        state.set({
          force: defaultOptions.force,
          section: defaultOptions.section
        });
        _store();
        _render_all_section({
          all: true
        });
        _render_chrome();
      } else {
        state.set({
          force: defaultOptions.force
        });
        _store();
        _render_all_section({
          all: true
        });
        _render_chrome();
      };
    } else {
      if (defaultOptions.all != null && defaultOptions.all) {
        state.set({
          all: true
        });
        _store();
        _render_all_section({
          all: true
        });
        _render_chrome();
      } else if (defaultOptions.section != null) {
        state.set({
          section: defaultOptions.section
        });
        _store();
        _render_section({
          section: helper.e("#" + defaultOptions.section)
        });
        _render_chrome();
      };
    };
  };

  function _render_all_section(options) {
    var defaultOptions = {
      section: null,
      all: null
    };
    if (options) {
      defaultOptions = helper.applyOptions(defaultOptions, options);
    };
    if (defaultOptions.all != null && defaultOptions.all) {
      var all_section = helper.eA(".js-section");
      all_section.forEach(function(arrayItem) {
        _render_section({
          section: arrayItem
        });
      });
    } else if (defaultOptions.section != null) {
      _render_section({
        section: defaultOptions.section
      });
    };
  };

  function _render_section(options) {
    var defaultOptions = {
      section: null
    };
    if (options) {
      defaultOptions = helper.applyOptions(defaultOptions, options);
    };
    var section = helper.e("#" + defaultOptions.section.id);
    var display = section.querySelector(".js-display");
    var icon = section.querySelector(".js-card-toggle-icon");
    var edit = section.querySelector(".js-edit");
    var cardTabs = section.querySelector(".js-card-tabs");
    var _on = function(section) {
      helper.addClass(section, "is-display-mode");
      helper.addClass(edit, "is-hidden");
      helper.removeClass(display, "is-hidden");
      helper.addClass(icon, "icon-edit");
      helper.removeClass(icon, "icon-reader");
      if (cardTabs && !minimise.state.get({
          section: section.id
        })) {
        helper.addClass(cardTabs, "is-hidden");
      };
    };
    var _off = function(section) {
      helper.removeClass(section, "is-display-mode");
      helper.removeClass(edit, "is-hidden");
      helper.addClass(display, "is-hidden");
      helper.removeClass(icon, "icon-edit");
      helper.addClass(icon, "icon-reader");
      if (cardTabs && !minimise.state.get({
          section: section.id
        })) {
        helper.removeClass(cardTabs, "is-hidden");
      };
    };
    if (defaultOptions.section != null) {
      if (state.get({
          section: section.id
        })) {
        _on(section);
      } else {
        _off(section);
      };
    };
  };

  function _render_chrome() {
    var header = helper.e(".js-header");
    var demo = helper.e(".js-demo");
    var nav = helper.e(".js-nav");
    var menuElement = helper.e(".js-menu");
    var menuItem = helper.e(".js-menu-link-display-mode");
    var characterSelect = helper.e(".js-character-select");
    var shade = helper.e(".js-shade");
    var fab = helper.e(".js-fab");
    var fabButton = helper.e(".js-fab-button");
    var fabIcon = helper.e(".js-fab-icon");
    var all_section = helper.eA(".js-section");
    var anySectionDisplay = false;
    var allSectionDisplay = 0;
    var _on = function() {
      helper.addClass(fabIcon, "icon-edit");
      helper.removeClass(fabIcon, "icon-reader");
      helper.removeClass(fabButton, "button-primary");
      helper.addClass(fabButton, "button-secondary");
      helper.addClass(nav, "is-display-mode");
      helper.addClass(menuElement, "is-display-mode");
      helper.addClass(header, "is-display-mode");
      helper.addClass(characterSelect, "is-display-mode");
      if (demo) {
        helper.addClass(demo, "is-display-mode");
      };
      if (shade) {
        helper.addClass(shade, "is-display-mode");
      };
      menu.toggleMenuItem({
        menuItem: menuItem,
        state: "active"
      });
    };
    var _off = function() {
      helper.removeClass(fabIcon, "icon-edit");
      helper.addClass(fabIcon, "icon-reader");
      helper.addClass(fabButton, "button-primary");
      helper.removeClass(fabButton, "button-secondary");
      helper.removeClass(nav, "is-display-mode");
      helper.removeClass(menuElement, "is-display-mode");
      helper.removeClass(header, "is-display-mode");
      helper.removeClass(characterSelect, "is-display-mode");
      if (demo) {
        helper.removeClass(demo, "is-display-mode");
      };
      if (shade) {
        helper.removeClass(shade, "is-display-mode");
      };
      menu.toggleMenuItem({
        menuItem: menuItem,
        state: "inactive"
      });
    };
    if (state.get({
        all: true
      })) {
      _on();
    } else {
      _off();
    };
  };

  function bind() {
    _bind_fab();
  };

  function _bind_fab() {
    var fabButton = helper.e(".js-fab-button");
    fabButton.addEventListener("click", function() {
      totalBlock.render();
      clear();
      render();
      toggle({
        all: true
      });
      if (!display.state.get({
          all: true
        })) {
        tabs.render();
      };
      themeColor.render();
    }, false);
  };

  function clear(display) {
    var _removeAllChildren = function(parent) {
      while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
      };
    };
    if (display) {
      var all_displayBlock = display.querySelectorAll(".js-display-block");
    } else {
      var all_displayBlock = helper.eA(".js-display-block");
    };
    all_displayBlock.forEach(function(arrayItem) {
      _removeAllChildren(arrayItem);
    });
  };

  function render(displayBlock) {
    _render_all_displayBlock(displayBlock);
    _render_all_placeholderDisplay();
  };

  function _render_all_displayBlock(displayBlock) {
    if (displayBlock) {
      _render_displayBlock(displayBlock);
    } else {
      var all_displayBlock = helper.eA(".js-display-block");
      all_displayBlock.forEach(function(arrayItem) {
        _render_displayBlock(arrayItem);
      });
    };
  };

  function _render_displayBlock(displayBlock) {
    var options = helper.makeObject(displayBlock.dataset.displayOptions);
    if (options) {
      options.sections.forEach(function(arrayItem) {
        var displayAreaData = helper.getObject({
          object: _displayContent,
          path: arrayItem
        });

        var displayArea = document.createElement("div");
        displayArea.setAttribute("class", "m-display-area");
        var displayContent = document.createElement("div");
        displayContent.setAttribute("class", "m-display-content");
        var displayAreaContentFound = false;

        if ("contentClass" in displayAreaData) {
          displayAreaData.contentClass.forEach(function(arrayItem) {
            helper.addClass(displayContent, arrayItem);
          });
        };

        if ("head" in displayAreaData) {
          var displayHead = document.createElement("div");
          displayHead.setAttribute("class", "m-display-head");
          displayHead.textContent = displayAreaData.head;
          displayArea.appendChild(displayHead);
        };

        displayAreaData.content.forEach(function(arrayItem) {
          var all_elementToAdd = _render_content(arrayItem);
          if (all_elementToAdd) {
            if (all_elementToAdd.length > 0) {
              all_elementToAdd.forEach(function(arrayItem) {
                if (arrayItem) {
                  displayAreaContentFound = true;
                  displayContent.appendChild(arrayItem);
                };
              });
            };
          };
          if (displayAreaContentFound) {
            displayArea.appendChild(displayContent);
            displayBlock.appendChild(displayArea);
          };
        });

      });
    };
  };

  function _render_content(displayObject) {
    var dataFormat = {
      number: function(data) {
        if (data > 0) {
          data = parseFloat(data).toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          });
        };
        return data;
      },
      bonus: function(data) {
        if (data > 0) {
          data = "+" + data;
        };
        return data;
      },
      currency: function(data) {
        data = parseFloat(data).toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        });
        if (data.indexOf(".00") !== -1) {
          data = data.substr(0, data.indexOf("."));
        };
        return data;
      },
      weight: function(data) {
        data = parseFloat(data).toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        });
        if (data.indexOf(".00") !== -1) {
          data = data.substr(0, data.indexOf("."));
        };
        return data;
      }
    };
    var createElement = {
      image: function(displayObject) {
        var all_element = [];
        var element = document.createElement(displayObject.element.node);
        if (displayObject.element.classname) {
          displayObject.element.classname.forEach(function(arrayItem) {
            helper.addClass(element, arrayItem);
          });
        };
        var contentFound = 0;
        displayObject.contentItems.forEach(function(arrayItem, index) {
          var data = helper.getObject({
            object: sheet.get(),
            path: arrayItem.path
          });
          if (data != "") {
            contentFound++;
            var displayImageItem = new Image;
            displayImageItem.setAttribute("class", "m-display-image");
            displayImageItem.src = data;
            var scale = helper.getObject({
              object: sheet.get(),
              path: arrayItem.scale
            });
            var position = helper.getObject({
              object: sheet.get(),
              path: arrayItem.position
            });
            var background = helper.getObject({
              object: sheet.get(),
              path: arrayItem.background
            });
            var color;
            if (background == "black") {
              color = "rgb(0,0,0)";
            } else if (background == "white") {
              color = "rgb(255,255,255)";
            } else if (background == "average") {
              color = helper.getObject({
                object: sheet.get(),
                path: arrayItem.color
              });
              color = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
            };
            element.style.backgroundColor = color;
            displayImageItem.style.width = scale + "%";
            displayImageItem.style.left = position.x + "%";
            displayImageItem.style.top = position.y + "%";
            element.appendChild(displayImageItem);
          };
        });
        if (contentFound > 0) {
          all_element.push(element);
        } else {
          all_element.push(false);
        };
        return all_element;
      },
      snippet: function(displayObject) {
        var all_element = [];
        var element = document.createElement(displayObject.element.node);
        element.setAttribute("class", "m-display-snippet");
        if (displayObject.element.classname) {
          displayObject.element.classname.forEach(function(arrayItem) {
            helper.addClass(element, arrayItem);
          });
        };
        var contentFound = 0;
        displayObject.contentItems.forEach(function(arrayItem, index) {
          var data = helper.getObject({
            object: sheet.get(),
            path: arrayItem.path
          });
          if (data != "") {
            if ("valueType" in arrayItem) {
              data = dataFormat[arrayItem.valueType](data);
            };
            if (arrayItem.dependency) {
              var dependencyData = helper.getObject({
                object: sheet.get(),
                path: arrayItem.dependency
              });
              if (dependencyData != "") {
                data = data + " / " + dependencyData;
              };
            };
            var snippetNode;
            if ("element" in arrayItem) {
              snippetNode = arrayItem.element.node;
            } else {
              snippetNode = "span";
            };
            contentFound++;
            var snippet = document.createElement(snippetNode);
            snippet.setAttribute("class", "m-display-snippet-item");
            if (arrayItem.prefix) {
              var prefix = document.createElement("span");
              prefix.setAttribute("class", "m-display-prefix");
              prefix.textContent = arrayItem.prefix;
              snippet.appendChild(prefix);
            };
            var value = document.createElement("span");
            value.setAttribute("class", "m-display-value");
            value.textContent = data;
            snippet.appendChild(value);
            if (arrayItem.suffix) {
              var suffix = document.createElement("span");
              suffix.setAttribute("class", "m-display-suffix");
              suffix.textContent = arrayItem.suffix;
              snippet.appendChild(suffix);
            };
            element.appendChild(snippet);
          };
        });
        if (contentFound > 0) {
          all_element.push(element);
        } else {
          all_element.push(false);
        };
        return all_element;
      },
      block: function(displayObject) {
        var all_element = [];
        var element = document.createElement(displayObject.element.node);
        element.setAttribute("class", "m-display-text-block");
        if (displayObject.element.classname) {
          displayObject.element.classname.forEach(function(arrayItem) {
            helper.addClass(element, arrayItem);
          });
        };
        var contentFound = 0;
        displayObject.contentItems.forEach(function(arrayItem) {
          var data = helper.getObject({
            object: sheet.get(),
            path: arrayItem.path
          });
          if (data != "") {
            contentFound++;
            if (arrayItem.prefix) {
              var prefix = document.createElement("span");
              prefix.setAttribute("class", "m-display-prefix");
              prefix.textContent = arrayItem.prefix;
              element.appendChild(prefix);
            };
            var value = document.createElement("span");
            value.setAttribute("class", "m-display-value");
            value.innerHTML = data;
            element.appendChild(value);
            if (arrayItem.suffix) {
              var suffix = document.createElement("span");
              suffix.setAttribute("class", "m-display-suffix");
              suffix.textContent = arrayItem.suffix;
              element.appendChild(suffix);
            };
          };
        });
        if (contentFound > 0) {
          all_element.push(element);
        } else {
          all_element.push(false);
        };
        return all_element;
      },
      stat: function(displayObject) {
        var all_element = [];
        var element = document.createElement(displayObject.element.node);
        if (displayObject.element.classname) {
          displayObject.element.classname.forEach(function(arrayItem) {
            helper.addClass(element, arrayItem);
          });
        };
        var contentFound = 0;
        displayObject.contentItems.forEach(function(arrayItem, index) {
          contentFound++;
          var listItem = document.createElement("li");
          listItem.setAttribute("class", "m-display-stats-item");
          var stat = document.createElement("span");
          stat.setAttribute("class", "m-display-stat");
          var statName = document.createElement("span");
          statName.setAttribute("class", "m-display-stat-name");
          var statValue = document.createElement("span");
          statValue.setAttribute("class", "m-display-stat-value");
          var mod = document.createElement("h1");
          mod.setAttribute("class", "m-display-mod");
          var statData = helper.getObject({
            object: sheet.get(),
            path: arrayItem.path.stat
          });
          var modData = dataFormat.bonus(helper.getObject({
            object: sheet.get(),
            path: arrayItem.path.mod
          }));
          statName.textContent = arrayItem.prefix;
          statValue.textContent = statData;
          mod.textContent = modData;
          stat.appendChild(statName);
          stat.appendChild(statValue);
          listItem.appendChild(stat);
          listItem.appendChild(mod);
          element.appendChild(listItem);
        });
        if (contentFound > 0) {
          all_element.push(element);
        } else {
          all_element.push(false);
        };
        return all_element;
      },
      list: function(displayObject) {
        var all_element = [];
        var element = document.createElement(displayObject.element.node);
        if (displayObject.element.classname) {
          displayObject.element.classname.forEach(function(arrayItem) {
            helper.addClass(element, arrayItem);
          });
        };
        var contentFound = 0;
        displayObject.contentItems.forEach(function(arrayItem) {
          var all_listItem = helper.getObject({
            object: sheet.get(),
            path: arrayItem.path
          });
          if ("pillLink" in arrayItem) {
            var pillLink = arrayItem.pillType;
          };
          var dataKey = arrayItem.listItemKey;
          if (all_listItem.length > 0) {
            all_listItem.forEach(function(arrayItem, index) {
              contentFound++;
              var listItem = document.createElement("li");
              listItem.setAttribute("class", "m-display-list-item");
              var listItemName = document.createElement("span");
              listItemName.setAttribute("class", "m-display-list-item-name");
              listItemName.textContent = arrayItem[dataKey];
              listItem.appendChild(listItemName);
              if (pillLink) {
                helper.addClass(listItem, "m-display-list-item-link")
                listItem.addEventListener("click", function() {
                  pill.update(helper.e(".js-pill-block-area-" + pillLink).querySelectorAll(".js-pill-item")[index]);
                }, false);
              };
              element.appendChild(listItem);
            });
          };
        });
        if (contentFound > 0) {
          all_element.push(element);
        } else {
          all_element.push(false);
        };
        return all_element;
      },
      group: function(displayObject) {
        var all_element = [];
        var element = document.createElement(displayObject.element.node);
        if (displayObject.element.classname) {
          displayObject.element.classname.forEach(function(arrayItem) {
            helper.addClass(element, arrayItem);
          });
        };
        var contentFound = 0;
        if (displayObject.head) {
          var head = document.createElement("p");
          head.setAttribute("class", "m-display-head");
          head.textContent = displayObject.head;
        };
        displayObject.contentItems.forEach(function(arrayItem, index) {
          var data = helper.getObject({
            object: sheet.get(),
            path: arrayItem.path
          });
          if (data != "") {
            contentFound++;
            var listItem = document.createElement("li");
            listItem.setAttribute("class", "m-display-list-item");
            if (arrayItem.prefix) {
              var prefix = document.createElement("span");
              prefix.setAttribute("class", "m-display-list-item-prefix");
              prefix.textContent = arrayItem.prefix;
              listItem.appendChild(prefix);
            };
            if (arrayItem.suffix) {
              var suffix = document.createElement("span");
              suffix.setAttribute("class", "m-display-list-item-suffix");
              suffix.textContent = arrayItem.suffix;
              listItem.appendChild(suffix);
            };
            var listItemName = document.createElement("span");
            listItemName.setAttribute("class", "m-display-list-item-name");
            listItemName.textContent = data;
            listItem.appendChild(listItemName);
            element.appendChild(listItem);
          };
        });
        if (contentFound > 0) {
          if (head) {
            all_element.push(head);
          };
          all_element.push(element);
        } else {
          all_element.push(false);
        };
        return all_element;
      },
      pill: function(displayObject) {
        var all_element = [];
        var element = document.createElement(displayObject.element.node);
        if (displayObject.element.classname) {
          displayObject.element.classname.forEach(function(arrayItem) {
            helper.addClass(element, arrayItem);
          });
        };
        var contentFound = 0;
        if (displayObject.head) {
          var head = document.createElement("p");
          head.setAttribute("class", "m-display-head");
          head.textContent = displayObject.head;
        };
        displayObject.content.forEach(function(arrayItem, index) {
          var all_pill = helper.getObject({
            object: sheet.get(),
            path: arrayItem.path
          });
          if (all_pill.length > 0) {
            all_pill.forEach(function(arrayItem) {
              contentFound++;
              var listItem = document.createElement("li");
              listItem.setAttribute("class", "m-display-list-item");
              var listItemName = document.createElement("span");
              listItemName.setAttribute("class", "m-display-list-item-name");
              listItemName.textContent = arrayItem.name;
              listItem.appendChild(listItemName);
              element.appendChild(listItem);
            });
          };
        });
        if (contentFound > 0) {
          if (head) {
            all_element.push(head);
          };
          all_element.push(element);
        } else {
          all_element.push(false);
        };
        return all_element;
      },
      clone: function(displayObject) {
        var all_element = [];
        var element = document.createElement(displayObject.element.node);
        if (displayObject.element.classname) {
          displayObject.element.classname.forEach(function(arrayItem) {
            helper.addClass(element, arrayItem);
          });
        };
        if (displayObject.head) {
          var head = document.createElement("p");
          head.setAttribute("class", "m-display-head");
          head.textContent = displayObject.head;
        };
        var contentFound = 0;
        var cloneVariant = {
          consumable: function() {
            displayObject.contentItems.forEach(function(arrayItem, index) {
              var all_clone = helper.getObject({
                object: sheet.get(),
                path: arrayItem.path
              });
              if (all_clone.length > 0) {
                all_clone.forEach(function(arrayItem) {
                  if (arrayItem.name != "") {
                    contentFound++;
                    var listItem = document.createElement("li");
                    listItem.setAttribute("class", "m-display-list-item");
                    var listItemName = document.createElement("span");
                    listItemName.setAttribute("class", "m-display-list-item-name");
                    listItemName.textContent = arrayItem.name;
                    var listItemValue = document.createElement("span");
                    listItemValue.setAttribute("class", "m-display-list-item-value");
                    var current = arrayItem.current || 0;
                    var total = arrayItem.total || 0;
                    listItemValue.textContent = current + " / " + total;
                    var percentage = parseFloat(((total - arrayItem.used) / total) * 100).toFixed(2);
                    if (percentage < 0) {
                      percentage = 0;
                    };
                    var percentageBar = document.createElement("span");
                    percentageBar.setAttribute("class", "m-display-list-item-percentage");
                    percentageBar.setAttribute("style", "width: " + percentage + "%;");
                    listItem.appendChild(listItemName);
                    listItem.appendChild(listItemValue);
                    listItem.appendChild(percentageBar);
                    element.appendChild(listItem);
                  };
                });
              };
            })
          },
          power: function() {
            displayObject.contentItems.forEach(function(arrayItem, index) {
              var all_clone = helper.getObject({
                object: sheet.get(),
                path: arrayItem.path
              });
              if (all_clone.length > 0) {
                all_clone.forEach(function(arrayItem) {
                  if (arrayItem.name != "") {
                    contentFound++;
                    var listItem = document.createElement("li");
                    listItem.setAttribute("class", "m-display-list-item");
                    var listItemName = document.createElement("span");
                    listItemName.setAttribute("class", "m-display-list-item-name");
                    listItemName.textContent = arrayItem.name;
                    var listItemValue = document.createElement("span");
                    listItemValue.setAttribute("class", "m-display-list-item-value");
                    var current = arrayItem.current || 0;
                    var total = arrayItem.total || 0;
                    listItemValue.textContent = current + " / " + total;
                    var percentage = parseFloat(((total - arrayItem.used) / total) * 100).toFixed(2);
                    if (percentage < 0) {
                      percentage = 0;
                    };
                    var percentageBar = document.createElement("span");
                    percentageBar.setAttribute("class", "m-display-list-item-percentage");
                    percentageBar.setAttribute("style", "width: " + percentage + "%;");
                    listItem.appendChild(listItemName);
                    listItem.appendChild(listItemValue);
                    listItem.appendChild(percentageBar);
                    element.appendChild(listItem);
                  };
                });
              };
            })
          },
          item: function() {
            displayObject.contentItems.forEach(function(arrayItem, index) {
              var all_clone = helper.getObject({
                object: sheet.get(),
                path: arrayItem.path
              });
              if (all_clone.length > 0) {
                all_clone.forEach(function(arrayItem) {
                  if (arrayItem.name != "") {
                    contentFound++;
                    var listItem = document.createElement("li");
                    listItem.setAttribute("class", "m-display-list-item");
                    var listItemName = document.createElement("span");
                    listItemName.setAttribute("class", "m-display-list-item-name");
                    listItemName.textContent = arrayItem.name;
                    var listItemValue = document.createElement("span");
                    listItemValue.setAttribute("class", "m-display-list-item-value");
                    listItemValue.textContent = arrayItem.quantity;
                    listItem.appendChild(listItemName);
                    listItem.appendChild(listItemValue);
                    element.appendChild(listItem);
                  };
                });
              };
            })
          },
          attack: function() {
            displayObject.contentItems.forEach(function(arrayItem, index) {
              var all_clone = helper.getObject({
                object: sheet.get(),
                path: arrayItem.path
              });
              if (all_clone.length > 0) {
                all_clone.forEach(function(arrayItem) {
                  if (arrayItem.weapon != "") {
                    contentFound++;
                    var _createSnippet = function(config) {
                      var meleeItem = document.createElement("span");
                      meleeItem.setAttribute("class", "m-display-list-item-attack-" + config.classname);
                      if (config.prefix) {
                        var prefix = document.createElement("span");
                        prefix.setAttribute("class", "m-display-list-item-attack-prefix");
                        prefix.textContent = config.prefix;
                        meleeItem.appendChild(prefix);
                      };
                      var value = document.createElement("span");
                      value.setAttribute("class", "m-display-list-item-attack-value");
                      value.textContent = config.value;
                      meleeItem.appendChild(value);
                      return meleeItem;
                    };
                    var listItem = document.createElement("li");
                    listItem.setAttribute("class", "m-display-list-item-attack");
                    if (arrayItem.equipped) {
                      var meleeEquipped = document.createElement("span");
                      meleeEquipped.setAttribute("class", "m-display-list-item-attack-equipped icon-check");
                      listItem.appendChild(meleeEquipped);
                      helper.addClass(listItem, "is-active");
                    };
                    if ("weapon" in arrayItem && arrayItem.weapon != "") {
                      listItem.appendChild(_createSnippet({
                        prefix: "Weapon",
                        value: arrayItem.weapon,
                        classname: "weapon"
                      }));
                    };
                    if ("attack" in arrayItem && arrayItem.attack != "") {
                      listItem.appendChild(_createSnippet({
                        prefix: "Attack",
                        value: arrayItem.attack,
                        classname: "attack"
                      }));
                    };
                    if ("damage" in arrayItem && arrayItem.damage != "") {
                      listItem.appendChild(_createSnippet({
                        prefix: "Damage",
                        value: arrayItem.damage,
                        classname: "damage"
                      }));
                    };
                    if ("critical" in arrayItem && arrayItem.critical != "") {
                      listItem.appendChild(_createSnippet({
                        prefix: "Critical",
                        value: arrayItem.critical,
                        classname: "critical"
                      }));
                    };
                    if ("type" in arrayItem && arrayItem.type != "") {
                      listItem.appendChild(_createSnippet({
                        prefix: "Type",
                        value: arrayItem.type,
                        classname: "type"
                      }));
                    };
                    if ("range" in arrayItem && arrayItem.range != "") {
                      listItem.appendChild(_createSnippet({
                        prefix: "Range",
                        value: arrayItem.range,
                        classname: "range"
                      }));
                    };
                    if ("ammo" in arrayItem && arrayItem.ammo != "") {
                      listItem.appendChild(_createSnippet({
                        prefix: "Ammo",
                        value: arrayItem.ammo,
                        classname: "ammo"
                      }));
                    };
                    element.appendChild(listItem);
                  };
                });
              };
            })
          },
          note: function() {
            displayObject.contentItems.forEach(function(arrayItem, index) {
              var all_clone = helper.getObject({
                object: sheet.get(),
                path: arrayItem.path
              });
              if (all_clone.length > 0) {
                all_clone.forEach(function(arrayItem) {
                  if (arrayItem.note != "") {
                    contentFound++;
                    var listItem = document.createElement("li");
                    listItem.setAttribute("class", "m-display-list-item");
                    var listItemValue = document.createElement("span");
                    listItemValue.setAttribute("class", "m-display-list-item-text-block");
                    listItemValue.innerHTML = arrayItem.note;
                    listItem.appendChild(listItemValue);
                    element.appendChild(listItem);
                  };
                });
              };
            })
          }
        };

        cloneVariant[displayObject.cloneType]();

        if (contentFound > 0) {
          if (head) {
            all_element.push(head);
          };
          all_element.push(element);
        } else {
          all_element.push(false);
        };
        return all_element;
      },
      skills: function(displayObject) {
        var all_element = [];
        var element = document.createElement(displayObject.element.node);
        if (displayObject.element.classname) {
          displayObject.element.classname.forEach(function(arrayItem) {
            helper.addClass(element, arrayItem);
          });
        };
        var contentFound = 0;
        if (displayObject.head) {
          var head = document.createElement("p");
          head.setAttribute("class", "m-display-head");
          head.textContent = displayObject.head;
        };
        var foundSkills = [];
        displayObject.contentItems.forEach(function(arrayItem, index) {
          var all_listItem = helper.getObject({
            object: sheet.get(),
            path: arrayItem.path
          });
          var skillNames = {
            acrobatics: "Acrobatics",
            appraise: "Appraise",
            bluff: "Bluff",
            climb: "Climb",
            craft: "Craft",
            craft_1: "Craft 1",
            craft_2: "Craft 2",
            diplomacy: "Diplomacy",
            disable_device: "Disable Device",
            disguise: "Disguise",
            escape_artist: "Escape Artist",
            fly: "Fly",
            handle_animal: "Handle Animal",
            heal: "Heal",
            intimidate: "Intimidate",
            knowledge_arcana: "Knowledge Arcana",
            knowledge_dungeoneering: "Knowledge Dungeoneering",
            knowledge_engineering: "Knowledge Engineering",
            knowledge_geography: "Knowledge Geography",
            knowledge_history: "Knowledge History",
            knowledge_local: "Knowledge Local",
            knowledge_nature: "Knowledge Nature",
            knowledge_nobility: "Knowledge Nobility",
            knowledge_planes: "Knowledge Planes",
            knowledge_religion: "Knowledge Religion",
            linguistics: "Linguistics",
            perception: "Perception",
            perform: "Perform ",
            perform_1: "Perform 1",
            perform_2: "Perform 2",
            profession: "Profession ",
            profession_1: "Profession 1",
            profession_2: "Profession 2",
            ride: "Ride",
            sense_motive: "Sense Motive",
            sleight_of_hand: "Sleight of Hand",
            spellcraft: "Spellcraft",
            stealth: "Stealth",
            survival: "Survival",
            swim: "Swim",
            use_magic_device: "Use Magic Device"
          };
          var skills = {
            default: function() {
              for (var key in all_listItem) {
                if (all_listItem[key].ranks != "" || !all_listItem[key].trained) {
                  if (key != "craft_1" && key != "craft_2" && key != "perform_1" && key != "perform_2" && key != "profession_1" && key != "profession_2") {
                    contentFound++;
                    var skillObject = {
                      name: skillNames[key],
                      current: dataFormat.bonus(all_listItem[key].current)
                    };
                    foundSkills.push(skillObject);
                  };
                };
              };
            },
            custom: function() {
              all_listItem.forEach(function(arrayItem) {
                if (all_listItem.ranks != "") {
                  contentFound++;
                  var skillObject = {
                    name: arrayItem.name || "Custom Skill",
                    current: dataFormat.bonus(arrayItem.current)
                  };
                  foundSkills.push(skillObject);
                };
              });
            },
            variant: function() {
              var variantSkill = function(key) {
                var variantSkill1 = helper.getObject({
                  object: sheet.get(),
                  path: "skills.default." + key + "_1"
                });
                var variantSkill2 = helper.getObject({
                  object: sheet.get(),
                  path: "skills.default." + key + "_2"
                });
                // if skill is trained only
                if (variantSkill1.trained) {
                  // if both skill variant names are not entered
                  if (variantSkill1.variant_name == "" && variantSkill2.variant_name == "") {
                    // if the variant totals are the same
                    if (variantSkill1.current == variantSkill2.current) {
                      // add a single generic skill with its total
                      if (variantSkill1.ranks != "" && variantSkill2.ranks != "") {
                        foundSkills.push({
                          name: skillNames[key],
                          current: dataFormat.bonus(variantSkill1.current)
                        });
                      };
                      // if variant totals are not the same
                    } else {
                      // if the skill has ranks
                      if (variantSkill1.ranks != "") {
                        // add a skill with a number prefixed generic name
                        foundSkills.push({
                          name: skillNames[key + "_1"],
                          current: dataFormat.bonus(variantSkill1.current)
                        });
                      };
                      // if the skill has ranks
                      if (variantSkill2.ranks != "") {
                        // add a skill with a number prefixed generic name
                        foundSkills.push({
                          name: skillNames[key + "_2"],
                          current: dataFormat.bonus(variantSkill2.current)
                        });
                      };
                    };
                    // if either skill variant names are entered
                  } else {
                    // if the skill has ranks
                    if (variantSkill1.ranks != "") {
                      // add a skill with the user entered name or a number prefixed generic name
                      foundSkills.push({
                        name: skillNames[key] + " " + variantSkill1.variant_name || skillNames[key + "_1"],
                        current: dataFormat.bonus(variantSkill1.current)
                      });
                    };
                    // if the skill has ranks
                    if (variantSkill2.ranks != "") {
                      // add a skill with the user entered name or a number prefixed generic name
                      foundSkills.push({
                        name: skillNames[key] + " " + variantSkill2.variant_name || skillNames[key + "_2"],
                        current: dataFormat.bonus(variantSkill2.current)
                      });
                    };
                  };
                  // if skill is not trained only
                } else {
                  // if both skill variant names are not entered
                  if (variantSkill1.variant_name == "" && variantSkill2.variant_name == "") {
                    // if both skill variant totals are the same
                    if (variantSkill1.current == variantSkill2.current) {
                      // add a single generic skill with its total
                      foundSkills.push({
                        name: skillNames[key],
                        current: dataFormat.bonus(variantSkill1.current)
                      });
                      // if skill variant totals are not the same
                    } else {
                      // add a skill with a number prefixed generic name
                      foundSkills.push({
                        name: skillNames[key + "_1"],
                        current: dataFormat.bonus(variantSkill1.current)
                      });
                      // add a skill with a number prefixed generic name
                      foundSkills.push({
                        name: skillNames[key + "_2"],
                        current: dataFormat.bonus(variantSkill2.current)
                      });
                    };
                    // if either skill variant names are entered
                  } else {
                    // add a skill with the user entered name or a number prefixed generic name
                    foundSkills.push({
                      name: skillNames[key] + " " + variantSkill1.variant_name || skillNames[key + "_1"],
                      current: dataFormat.bonus(variantSkill1.current)
                    });
                    // add a skill with the user entered name or a number prefixed generic name
                    foundSkills.push({
                      name: skillNames[key] + " " + variantSkill2.variant_name || skillNames[key + "_2"],
                      current: dataFormat.bonus(variantSkill2.current)
                    });
                  };
                };
              };
              variantSkill("craft");
              variantSkill("perform");
              variantSkill("profession");
            }
          };
          skills[arrayItem.skillType]();
        });
        helper.sortObject(foundSkills, "name");
        if (foundSkills.length > 0) {
          foundSkills.forEach(function(arrayItem) {
            var listItem = document.createElement("li");
            listItem.setAttribute("class", "m-display-list-item");
            var listItemName = document.createElement("span");
            listItemName.setAttribute("class", "m-display-list-item-name");
            listItemName.textContent = arrayItem.name;
            var listItemValue = document.createElement("span");
            listItemValue.setAttribute("class", "m-display-list-item-value");
            var value = arrayItem.current
            listItemValue.textContent = arrayItem.current;
            listItem.appendChild(listItemName);
            listItem.appendChild(listItemValue);
            element.appendChild(listItem);
          });
        };
        if (contentFound > 0) {
          if (head) {
            all_element.push(head);
          };
          all_element.push(element);
        } else {
          all_element.push(false);
        };
        return all_element;
      },
      spells: function(displayObject) {
        var all_element = [];
        var element = document.createElement(displayObject.element.node);
        if (displayObject.element.classname) {
          displayObject.element.classname.forEach(function(arrayItem) {
            helper.addClass(element, arrayItem);
          });
        };
        var contentFound = 0;
        displayObject.contentItems.forEach(function(arrayItem, index) {
          var all_spells = helper.getObject({
            object: sheet.get(),
            path: arrayItem.path
          });
          if (all_spells.length > 0) {
            all_spells.forEach(function(arrayItem, index) {
              contentFound++;
              var listItem = document.createElement("li");
              listItem.setAttribute("class", "m-display-list-item-spell");
              var spell = document.createElement("span");
              spell.setAttribute("class", "m-display-list-item-spell-name");
              var spellName = document.createElement("span");
              spellName.textContent = arrayItem.name;
              var spellCounters = document.createElement("span");
              spellCounters.setAttribute("class", "m-display-list-item-spell-count");
              spell.appendChild(spellName);
              listItem.appendChild(spell);
              listItem.appendChild(spellCounters);
              listItem.setAttribute("data-spell-button-options", "level:#" + displayObject.level + ",index:#" + index);
              // prepared
              if (arrayItem.prepared > 0) {
                // var marks = document.createElement("span");
                for (var j = 0; j < arrayItem.prepared; j++) {
                  var preparedIcon = document.createElement("span");
                  preparedIcon.setAttribute("class", "icon-radio-button-checked");
                  spellCounters.insertBefore(preparedIcon, spellCounters.firstChild);
                };
              };
              // cast
              if (arrayItem.cast > 0) {
                var all_check = spellCounters.querySelectorAll(".icon-radio-button-checked");
                for (var j = 0; j < arrayItem.cast; j++) {
                  if (all_check[j]) {
                    helper.toggleClass(all_check[j], "icon-radio-button-checked");
                    helper.toggleClass(all_check[j], "icon-radio-button-unchecked");
                  };
                };
              };
              // active
              if (arrayItem.active) {
                var spellActive = document.createElement("span");
                spellActive.setAttribute("class", "m-display-list-item-spell-active");
                var activeIcon = document.createElement("span");
                activeIcon.setAttribute("class", "icon-play-arrow");
                spellActive.appendChild(activeIcon);
                spell.insertBefore(spellActive, spell.firstChild);
              };
              listItem.addEventListener("click", function() {
                spells.update(helper.e(".js-spell-block-known-level-" + displayObject.level).querySelectorAll(".js-spell-col")[index].querySelector(".js-spell"), true);
              }, false);
              element.appendChild(listItem);
            });
          };
        });
        if (contentFound > 0) {
          all_element.push(element);
        } else {
          all_element.push(false);
        };
        return all_element;
      }
    };
    if ("type" in displayObject && displayObject.type in createElement) {
      return createElement[displayObject.type](displayObject);
    } else {
      return false;
    };
  };

  function _render_all_placeholderDisplay() {
    var all_display = helper.eA(".js-display");
    all_display.forEach(function(arrayItem) {
      _render_placeholderDisplay(arrayItem);
    });
  };

  function _render_placeholderDisplay(displayElement) {
    var placeholderDisplay = displayElement.querySelector(".js-placeholder-display");
    var displayBlock = displayElement.querySelector(".js-display-block");
    if (displayBlock && placeholderDisplay) {
      if (displayBlock.hasChildNodes()) {
        helper.addClass(placeholderDisplay, "is-hidden")
      } else {
        helper.removeClass(placeholderDisplay, "is-hidden")
      };
    };
  };

  // exposed methods
  return {
    init: init,
    toggle: toggle,
    bind: bind,
    render: render,
    clear: clear,
    state: state
  };

})();
