"use strict";

var helper = (function() {

  // methods on this object
  function e(selector) {
    return document.querySelector(selector);
  };

  function eA(selector) {
    return document.querySelectorAll(selector);
  };

  function toggleClass(element, theClassName) {
    element.classList.toggle(theClassName);
  };

  function addClass(element, theClassName) {
    element.classList.add(theClassName);
  };

  function removeClass(element, theClassName) {
    element.classList.remove(theClassName);
  };

  function delayFunction(functionToDelay, time) {
    window.setTimeout(functionToDelay, time);
  };

  function isJsonString(string) {
    try {
      JSON.parse(string);
    } catch (e) {
      return false;
    }
    return true;
  };

  function selectText(element) {
    var node = helper.e(element);
    if (document.selection) {
      var range = document.body.createTextRange();
      range.moveToElementText(node);
      range.select();
    } else if (window.getSelection) {
      var range = document.createRange();
      range.selectNodeContents(node);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
    }
  };

  function truncateString(string, length, dotDotDot) {
    if (dotDotDot) {
      dotDotDot = "...";
    } else {
      dotDotDot = "";
    };
    if (string.length > length) {
      var newString = string.substring(0, length) + dotDotDot;
      return newString;
    };
    return string;
  };

  function setObject(object, path, newValue) {
    var address = path.split(".");
    while (address.length > 1) {
      var currentKey = address.shift();
      var parentObject = object;
      object = object[currentKey];
      if (!object) {
        object = parentObject;
        object = object[currentKey] = {};
      };
    };
    object[address.shift()] = newValue;
  };

  function getObject(object, path) {
    var address = path.split(".");
    while (address.length > 1) {
      var currentKey = address.shift();
      var parentObject = object;
      object = object[currentKey];
      if (!object) {
        object = parentObject;
        object = object[currentKey] = {};
      };
    };
    var finalKey = address.shift();
    if (finalKey in object) {
      return object[finalKey];
    } else {
      object[finalKey] = "";
      return object[finalKey];
    };
  };

  function getClosest(element, selector) {
    var firstChar = selector.charAt(0);
    // Get closest match
    for (; element && element !== document; element = element.parentNode) {
      // If selector is a class
      if (firstChar === ".") {
        if (element.classList.contains(selector.substr(1))) {
          return element;
        };
      };
      // If selector is an ID
      if (firstChar === "#") {
        if (element.id === selector.substr(1)) {
          return element;
        };
      };
      // If selector is a data attribute
      if (firstChar === "[") {
        if (element.hasAttribute(selector.substr(1, selector.length - 2))) {
          return element;
        };
      };
      // If selector is a tag
      if (element.tagName.toLowerCase() === selector) {
        return element;
      };
    };
    return false;
  };

  function randomId(stringLength) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < stringLength; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  };

  function store(key, data) {
    if (localStorage.getItem) {
      localStorage.setItem(key, data);
    };
  };

  function remove(key) {
    if (localStorage.getItem) {
      localStorage.removeItem(key);
    };
  };

  function read(key) {
    if (localStorage.getItem(key) == "") {
      localStorage.removeItem(key);
    } else if (localStorage.getItem(key)) {
      return localStorage.getItem(key);
    };
  };

  // exposed methods
  return {
    store: store,
    remove: remove,
    read: read,
    e: e,
    eA: eA,
    toggleClass: toggleClass,
    addClass: addClass,
    removeClass: removeClass,
    isJsonString: isJsonString,
    getClosest: getClosest,
    selectText: selectText,
    delayFunction: delayFunction,
    setObject: setObject,
    getObject: getObject,
    truncate: truncateString,
    randomId: randomId
  };

})();

var blank = (function() {

  var data = {
    awesomeSheet: true,
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
        check_penalty: "",
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
          size: true
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
          size: true
        }
      },
      ac_notes: "",
      fortitude: {
        base: "",
        racial: "",
        resistance: "",
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: true,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false
        }
      },
      reflex: {
        base: "",
        racial: "",
        resistance: "",
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false
        }
      },
      will: {
        base: "",
        racial: "",
        resistance: "",
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: true,
          cha_bonus: false
        }
      },
      save_notes: ""
    },
    offense: {
      base_attack: "",
      concentration: "",
      cmb: {
        misc: "",
        temp: "",
        size: "",
        current: "",
        bonuses: {
          str_bonus: true,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          bab: true,
          level: false,
          half_level: false
        }
      },
      cmd: {
        misc: "",
        temp: "",
        size: "",
        current: "",
        bonuses: {
          str_bonus: true,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          bab: true,
          level: false,
          half_level: false,
          plus_ten: true
        }
      },
      melee_attack: {
        misc: "",
        temp: "",
        size: "",
        current: "",
        bonuses: {
          str_bonus: true,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          bab: true,
          level: false,
          half_level: false
        }
      },
      ranged_attack: {
        misc: "",
        temp: "",
        size: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          bab: true,
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
      spent_ranks: {
        include_custom: false,
        current: ""
      },
      acrobatics: {
        ranks: "",
        misc: "",
        current: "",
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
      appraise: {
        ranks: "",
        misc: "",
        current: "",
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
      handle_animal: {
        ranks: "",
        misc: "",
        current: "",
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
      survival: {
        ranks: "",
        misc: "",
        current: "",
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
      custom_1: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      custom_2: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      custom_3: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      custom_4: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      custom_5: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      custom_6: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      custom_7: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      custom_8: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
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

var marika = (function() {

  var data = {
    awesomeSheet: true,
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
        current: "10",
        total: "10",
        used: ""
      }]
    },
    defense: {
      hp: {
        total: "53",
        temp: "",
        damage: "",
        non_lethal_damage: "",
        current: ""
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
        check_penalty: "",
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
          size: true
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
          size: true
        }
      },
      ac_notes: "+3 dodge bonus to AC against attacks made by traps.",
      fortitude: {
        base: "3",
        racial: "",
        resistance: "3",
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false
        }
      },
      reflex: {
        base: "6",
        racial: "",
        resistance: "3",
        misc: "1",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false
        }
      },
      will: {
        base: "3",
        racial: "",
        resistance: "3",
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false
        }
      },
      save_notes: "+3 bonus on Reflex saves made to avoid traps."
    },
    offense: {
      base_attack: "6 / 1",
      concentration: "",
      cmb: {
        misc: "",
        temp: "",
        size: "",
        current: "",
        bonuses: {
          str_bonus: true,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          bab: true,
          level: false,
          half_level: false
        }
      },
      cmd: {
        misc: "",
        temp: "",
        size: "",
        current: "",
        bonuses: {
          str_bonus: true,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          bab: true,
          level: false,
          half_level: false,
          plus_ten: true
        }
      },
      melee_attack: {
        misc: "",
        temp: "",
        size: "",
        current: "",
        bonuses: {
          str_bonus: true,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          bab: true,
          level: false,
          half_level: false
        }
      },
      ranged_attack: {
        misc: "",
        temp: "",
        size: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          bab: true,
          level: false,
          half_level: false
        }
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
      spent_ranks: {
        include_custom: false,
        current: ""
      },
      acrobatics: {
        ranks: "9",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
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
      appraise: {
        ranks: "9",
        misc: "4",
        current: "",
        bonuses: {
          class_skill: true,
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
        ranks: "9",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
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
        ranks: "9",
        misc: "4",
        current: "",
        bonuses: {
          class_skill: true,
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
        ranks: "9",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
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
      handle_animal: {
        ranks: "",
        misc: "",
        current: "",
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
        ranks: "9",
        misc: "5",
        current: "",
        bonuses: {
          class_skill: true,
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
        ranks: "9",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
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
        ranks: "9",
        misc: "3",
        current: "",
        bonuses: {
          class_skill: true,
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
        ranks: "9",
        misc: "5",
        current: "",
        bonuses: {
          class_skill: true,
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
      survival: {
        ranks: "",
        misc: "",
        current: "",
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
      custom_1: {
        name: "Disable Device Trap",
        ranks: "9",
        misc: "4",
        current: "",
        bonuses: {
          class_skill: true,
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: true,
          check_penalty: false
        }
      },
      custom_2: {
        name: "Perception Trap",
        ranks: "9",
        misc: "5",
        current: "",
        bonuses: {
          class_skill: true,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: true,
          cha_bonus: false,
          level: false,
          half_level: true,
          check_penalty: false
        }
      },
      custom_3: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      custom_4: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      custom_5: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      custom_6: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      custom_7: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      custom_8: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
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

var nefi = (function() {

  var data = {
    awesomeSheet: true,
    basics: {
      name: "Nefi Fefi",
      race: "Human",
      class: "Fighter",
      level: "8",
      size: "Medium",
      alignment: "Neutral",
      xp: "69,080",
      height: "6'2",
      weight: "202 lbs",
      age: "28",
      gender: "Male",
      speed: "30 ft, 6 sq",
      initiative: "3",
      hero_points: "",
      luck_points: ""
    },
    statistics: {
      stats: {
        str: {
          score: "20",
          temp: "22"
        },
        dex: {
          score: "12",
          temp: ""
        },
        con: {
          score: "12",
          temp: ""
        },
        int: {
          score: "13",
          temp: ""
        },
        wis: {
          score: "10",
          temp: ""
        },
        cha: {
          score: "8",
          temp: ""
        }
      },
      feats: "Weapon Focus (Guisarme), Iron Will, Combat Reflexes, Dodge, Power Attack, Combat Expertise, Greater Trip, Improved Trip, Felling Smash, Greater Weapon Focus (Guisarme)",
      traits: "Resilient, Reactionary",
      languages: "Common, Draconic",
      special_abilities: "Bonus feat (5), Bravery +2, Weapon training 1,  Armor training 2"
    },
    equipment: {
      gear: "Backpack, Flask Of Oil (2), Pouch (belt), Sack, Candle, Flint And Steel, Tindertwig, Rations (5 Days), Waterskin, Bedroll, Blanket, Bloodblock, Rope (silk), Mirror, Compass, Ink, Inkpen, Paper Sheets, Case For Maps/scrolls, Torch, Dagger, Combat Horse (Tafi)",
      magic_gear: "Figurine of Power Elephant, Potion of Cure Light Wounds (4) Potion of Cure Moderate Wounds (2), Potion of Cure Serious Wounds (1), Potion of Lesser Restoration (1), Potion of Remove Disease (1)",
      encumbrance: {
        light: "173 lbs or less",
        medium: "174–346 lbs",
        heavy: "347–520 lbs"
      },
      body_slots: {
        armor: "Full Plate MW",
        belts: "Belt of Giant's Strength +2",
        body: "",
        chest: "",
        eyes: "",
        feet: "",
        hands: "",
        head: "Red Mantis Mask",
        headband: "",
        neck: "Amulet of Natural Armor +1",
        ring_left_hand: "Ring of Deflection +1",
        ring_right_hand: "",
        shield: "",
        shoulders: "Cloak of Resistance +1",
        wrist: ""
      },
      wealth: {
        platinum: "",
        gold: "2,770",
        silver: "",
        copper: ""
      },
      consumable: []
    },
    defense: {
      hp: {
        total: "70",
        temp: "",
        damage: "",
        non_lethal_damage: "",
        current: ""
      },
      ac: {
        misc: "",
        temp: "",
        armor: "10",
        shield: "",
        deflect: "1",
        dodge: "1",
        natural: "",
        size_bonus: "",
        check_penalty: "-3",
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
          size: true
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
          size: true
        }
      },
      ac_notes: "",
      fortitude: {
        base: "6",
        racial: "",
        resistance: "1",
        misc: "1",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: true,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false
        }
      },
      reflex: {
        base: "2",
        racial: "",
        resistance: "1",
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false
        }
      },
      will: {
        base: "2",
        racial: "",
        resistance: "1",
        misc: "2",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: true,
          cha_bonus: false
        }
      },
      save_notes: "+2 bonus on Will saves against fear. +2 bonus to CMD <span style=\"line-height: 26.6667px;\">against</span> trip."
    },
    offense: {
      base_attack: "8/3",
      concentration: "",
      cmb: {
        misc: "",
        temp: "",
        size: "",
        current: "",
        bonuses: {
          str_bonus: true,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          bab: true,
          level: false,
          half_level: false
        }
      },
      cmd: {
        misc: "",
        temp: "",
        size: "",
        current: "",
        bonuses: {
          str_bonus: true,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          bab: true,
          level: false,
          half_level: false,
          plus_ten: true
        }
      },
      melee_attack: {
        misc: "",
        temp: "",
        size: "",
        current: "",
        bonuses: {
          str_bonus: true,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          bab: true,
          level: false,
          half_level: false
        }
      },
      ranged_attack: {
        misc: "",
        temp: "",
        size: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          bab: true,
          level: false,
          half_level: false
        }
      },
      attack: {
        melee: [{
          weapon: "Guisarme +1",
          attack: "18/13",
          damage: "2d4+12",
          critical: "x3"
        }, {
          weapon: "Guisarme +1 Power Attack",
          attack: "15/10",
          damage: "2d4+21",
          critical: "x3"
        }, {
          weapon: "Greatsword MW",
          attack: "15/10",
          damage: "1d10+6",
          critical: "19–20/x2"
        }, {
          weapon: "Lance MW",
          attack: "16/11",
          damage: "1d8+7",
          critical: "x3"
        }, {
          weapon: "Composite Longbow MW",
          attack: "10/5",
          damage: "1d8+6",
          critical: "x3"
        }, {
          weapon: "Guisarme +1 Trip",
          attack: "22",
          damage: "2d4+12",
          critical: "x3"
        }],
        ranged: []
      },
      attack_notes: ""
    },
    skills: {
      spent_ranks: {
        include_custom: false,
        current: ""
      },
      acrobatics: {
        ranks: "",
        misc: "",
        current: "",
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
      appraise: {
        ranks: "",
        misc: "",
        current: "",
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
        ranks: "2",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
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
      handle_animal: {
        ranks: "8",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
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
        ranks: "2",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
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
        ranks: "1",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
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
        ranks: "1",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
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
        ranks: "1",
        misc: "",
        current: "",
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
        ranks: "8",
        misc: "",
        current: "",
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
        ranks: "8",
        misc: "",
        current: "",
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
      survival: {
        ranks: "",
        misc: "",
        current: "",
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
        ranks: "1",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
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
      custom_1: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      custom_2: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      custom_3: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      custom_4: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      custom_5: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      custom_6: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      custom_7: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      custom_8: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
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
      character: "<strong>Ability Score</strong> Human characters get a +2 bonus to one ability score of their choice at creation to represent their varied nature.<br><br><strong>Medium</strong> Humans are Medium creatures and have no bonuses or penalties due to their size.<br><br><strong>Normal Speed</strong> Humans have a base speed of 30 feet.<br><br><strong>Bonus Feat</strong> Humans select one extra feat at 1st level.<br><br><strong>Skilled</strong> Humans gain an additional skill rank at first level and one additional rank whenever they gain a level.<br><br><strong>Languages</strong> Humans begin play speaking Common. Humans with high Intelligence scores can choose any languages they want (except secret languages, such as Druidic).<br><br><strong>Weapon Focus (Guisarme)</strong> You gain a +1 bonus on all attack rolls you make using the selected weapon.<br><br><strong>Iron Will</strong> You get a +2 bonus on all Will saving throws.<br><br><strong>Combat Reflexes</strong> You may make a number of additional attacks of opportunity per round equal to your Dexterity bonus. With this feat, you may also make attacks of opportunity while flat-footed.<br><br><strong>Dodge</strong> You gain a +1 dodge bonus to your AC. A condition that makes you lose your Dex bonus to AC also makes you lose the benefits of this feat.<br><br><strong>Power Attack</strong> You can choose to take a –1 penalty on all melee attack rolls and combat maneuver checks to gain a +2 bonus on all melee damage rolls. This bonus to damage is increased by half (+50%) if you are making an attack with a two-handed weapon, a one handed weapon using two hands, or a primary natural weapon that adds 1-1/2 times your Strength modifier on damage rolls. This bonus to damage is halved (–50%) if you are making an attack with an off-hand weapon or secondary natural weapon. When your base attack bonus reaches +4, and every 4 points thereafter, the penalty increases by –1 and the bonus to damage increases by +2. You must choose to use this feat before making an attack roll, and its effects last until your next turn. The bonus damage does not apply to touch attacks or effects that do not deal hit point damage.<br><br><strong>Combat Expertise</strong> You can choose to take a –1 penalty on melee attack rolls and combat maneuver checks to gain a +1 dodge bonus to your Armor Class. When your base attack bonus reaches +4, and every +4 thereafter, the penalty increases by –1 and the dodge bonus increases by +1. You can only choose to use this feat when you declare that you are making an attack or a full-attack action with a melee weapon. The effects of this feat last until your next turn.<br><br><strong>Greater Trip</strong> You receive a +2 bonus on checks made to trip a foe. This bonus stacks with the bonus granted by Improved Trip. Whenever you successfully trip an opponent, that opponent provokes attacks of opportunity.<br><br><strong>Improved Trip</strong> You do not provoke an attack of opportunity when performing a trip combat maneuver. In addition, you receive a +2 bonus on checks made to trip a foe. You also receive a +2 bonus to your Combat Maneuver Defense whenever an opponent tries to trip you.<br><br><strong>Felling Smash</strong> If you use the attack action to make a single melee attack at your highest base attack bonus while using Power Attack and you hit an opponent, you can spend a swift action to attempt a trip combat maneuver against that opponent.<br><br><strong>Greater Weapon Focus (Guisarme)</strong> You gain a +1 bonus on attack rolls you make using the selected weapon. This bonus stacks with other bonuses on attack rolls, including those from Weapon Focus.<br><br><strong>Resilient</strong> Growing up in a poor neighborhood or in the unforgiving wilds often forced you to subsist on food and water from doubtful sources. You've built up your mettle as a result, and gain a +1 trait bonus on Fortitude saves.<br><br><strong>Reactionary</strong> You were bullied often as a child, but never quite developed an offensive response. Instead, you became adept at anticipating sudden attacks and reacting to danger quickly. You gain a +2 trait bonus on Initiative checks.",
      story: ""
    }
  };

  // exposed methods
  return {
    data: data
  };

})();

var nif = (function() {

  var data = {
    awesomeSheet: true,
    basics: {
      name: "Nif Amakir",
      race: "Elf",
      class: "Wizard",
      level: "6",
      size: "Medium",
      alignment: "Lawful Neutral",
      xp: "30,214",
      height: "6'0",
      weight: "136 lbs",
      age: "120",
      gender: "Male",
      speed: "30 ft, 6 sq",
      initiative: "3",
      hero_points: "",
      luck_points: ""
    },
    statistics: {
      stats: {
        str: {
          score: "8",
          temp: ""
        },
        dex: {
          score: "17",
          temp: "15"
        },
        con: {
          score: "14",
          temp: ""
        },
        int: {
          score: "21",
          temp: "23"
        },
        wis: {
          score: "12",
          temp: ""
        },
        cha: {
          score: "10",
          temp: ""
        }
      },
      feats: "Alertness, Augment Summoning, Craft Wondrous Item, Greater Spell Focus (Conjuration), Scribe Scroll, Spell Focus (Conjuration)",
      traits: "Resilient",
      languages: "Celestial, Common, Draconic, Dwarven, Elven, Giant, Gnome, Goblin, Orc, Sylvan, Undercommon",
      special_abilities: "Arcane bond (Su), Bonus feats, Cantrips, Arcane schools, Teleportation sub school, Opposition arcane school, Elven Immunities (Ex), Elven Magic (Ex), Keen Senses (Ex), Low-Light Vision (Ex), Headband of Vast Intelligence skill (Use Magic Device), Linguistics Skill (Dwarven, Giant, Undercommon), Shift (Su), Summoner's Charm (Su), Weapon Familiarity (Ex)"
    },
    equipment: {
      gear: "Spell component pouch, Spellbook, Backpack, Flask of Oil (3), Pouch (belt), Sack, Candle, Flint and Steel, Tindertwig, Rations (5 days), Waterskin, Bedroll, Blanket, Bloodblock, Healer's Kik, Rope (silk), Mirror, Compass, Ink, Inkpen, Paper sheets, Case for maps/scrolls, Scroll Case, Combat trained horse, Viles of insect sap (15)",
      magic_gear: "Pearl of Power (1st Level), Potion of CLW (1), Potion of Aid, Vile of Antitoxin, Vile of Holy Water, Scroll of Acid Pit (1), Scroll of Summon Monster III (6), Scroll of Invisibility (2), Scroll of Create Pit (1), Scroll of Web (4), Scroll of Stinking Cloud (2), Scroll of Grease (0), Scroll of Mirror Image (3), Scroll of Spiked Pit (2) Scroll of Fly (3)",
      encumbrance: {
        light: "26 lbs or less",
        medium: "27–53 lbs",
        heavy: "54–80 lbs"
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
        headband: "Headband of Vast Intelligence +2",
        neck: "Amulet of Natural Armor +1",
        ring_left_hand: "Ring of Sustenance",
        ring_right_hand: "",
        shield: "",
        shoulders: "Cloak of Resistance +2",
        wrist: ""
      },
      wealth: {
        platinum: "",
        gold: "1,090",
        silver: "",
        copper: ""
      },
      consumable: [{
        item: "Wand of Lightning Bolt",
        current: "7",
        total: "50",
        used: "43"
      }, {
        item: "Shift",
        current: "9",
        total: "9",
        used: ""
      }]
    },
    defense: {
      hp: {
        total: "42",
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
        natural: "1",
        size_bonus: "",
        check_penalty: "",
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
          size: true
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
          size: true
        }
      },
      ac_notes: "",
      fortitude: {
        base: "2",
        racial: "",
        resistance: "2",
        misc: "3",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: true,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false
        }
      },
      reflex: {
        base: "2",
        racial: "",
        resistance: "2",
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false
        }
      },
      will: {
        base: "5",
        racial: "",
        resistance: "2",
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: true,
          cha_bonus: false
        }
      },
      save_notes: "Immune to sleep effecrs, +2 against enchantment spells and effects"
    },
    offense: {
      base_attack: "3",
      concentration: "12",
      cmb: {
        misc: "",
        temp: "",
        size: "",
        current: "",
        bonuses: {
          str_bonus: true,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          bab: true,
          level: false,
          half_level: false
        }
      },
      cmd: {
        misc: "",
        temp: "",
        size: "",
        current: "",
        bonuses: {
          str_bonus: true,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          bab: true,
          level: false,
          half_level: false,
          plus_ten: true
        }
      },
      melee_attack: {
        misc: "",
        temp: "",
        size: "",
        current: "",
        bonuses: {
          str_bonus: true,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          bab: true,
          level: false,
          half_level: false
        }
      },
      ranged_attack: {
        misc: "",
        temp: "",
        size: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          bab: true,
          level: false,
          half_level: false
        }
      },
      attack: {
        melee: [{
          weapon: "Dagger (Master Work)",
          attack: "3",
          damage: "1d6+1",
          critical: "19–20/x2"
        }],
        ranged: [{
          weapon: "Shortbow",
          attack: "6",
          damage: "1d6",
          critical: "x3",
          range: "60 ft",
          ammo: "50"
        }]
      },
      attack_notes: ""
    },
    skills: {
      spent_ranks: {
        include_custom: false,
        current: ""
      },
      acrobatics: {
        ranks: "",
        misc: "",
        current: "",
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
      appraise: {
        ranks: "2",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
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
        ranks: "2",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
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
      handle_animal: {
        ranks: "",
        misc: "",
        current: "",
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
        ranks: "3",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
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
        ranks: "2",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
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
        ranks: "1",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
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
        ranks: "1",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
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
        ranks: "1",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
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
        ranks: "1",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
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
        ranks: "1",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
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
        ranks: "1",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
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
        ranks: "3",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
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
        ranks: "3",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
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
        ranks: "3",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
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
        ranks: "6",
        misc: "4",
        current: "",
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
        ranks: "6",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
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
      survival: {
        ranks: "",
        misc: "",
        current: "",
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
        ranks: "6",
        misc: "",
        current: "",
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
      custom_1: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      custom_2: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      custom_3: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      custom_4: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      custom_5: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      custom_6: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      custom_7: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      custom_8: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      }
    },
    spells: {
      per_day: {
        level_0: "4",
        level_1: "5",
        level_2: "4",
        level_3: "3",
        level_4: "",
        level_5: "",
        level_6: "",
        level_7: "",
        level_8: "",
        level_9: ""
      },
      dc: {
        level_0: "16",
        level_1: "17",
        level_2: "18",
        level_3: "19",
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
          { name: "Bleed", prepared: 0, active: false, cast: 0 },
          { name: "Erase", prepared: 0, active: false, cast: 0 },
          { name: "Daze", prepared: 0, active: false, cast: 0 },
          { name: "Disrupt Undead", prepared: 0, active: false, cast: 0 },
          { name: "Touch of Fatigue", prepared: 0, active: false, cast: 0 },
          { name: "Prestidigitation", prepared: 0, active: false, cast: 0 },
          { name: "Light", prepared: 0, active: false, cast: 0 },
          { name: "Ghost Sound", prepared: 0, active: false, cast: 0 },
          { name: "Spark", prepared: 0, active: false, cast: 0 },
          { name: "Acid Splash", prepared: 0, active: false, cast: 0 },
          { name: "Mage Hand", prepared: 0, active: false, cast: 0 },
          { name: "Flare", prepared: 0, active: false, cast: 0 },
          { name: "Detect Magic", prepared: 1, active: false, cast: 0 },
          { name: "Detect Poison", prepared: 0, active: false, cast: 0 },
          { name: "Dancing Lights", prepared: 1, active: false, cast: 0 },
          { name: "Mending", prepared: 0, active: false, cast: 0 },
          { name: "Arcane Mark", prepared: 0, active: false, cast: 0 },
          { name: "Message", prepared: 1, active: false, cast: 0 },
          { name: "Ray of Frost", prepared: 0, active: false, cast: 0 },
          { name: "Read Magic", prepared: 1, active: false, cast: 0 },
          { name: "Open Close", prepared: 0, active: false, cast: 0 },
          { name: "Resistance", prepared: 0, active: false, cast: 0 }
        ]
      }, {
        level_1: [
          { name: "Comprehend Languages", prepared: 0, active: false, cast: 0 },
          { name: "Enlarge Person", prepared: 0, active: false, cast: 0 },
          { name: "Feather Fall", prepared: 0, active: false, cast: 0 },
          { name: "Grease", prepared: 2, active: false, cast: 0 },
          { name: "Mage Armor", prepared: 0, active: false, cast: 0 },
          { name: "Mount", prepared: 0, active: false, cast: 0 },
          { name: "Obscuring Mist", prepared: 1, active: false, cast: 0 },
          { name: "Protection from Chaos", prepared: 0, active: false, cast: 0 },
          { name: "Protection from Evil", prepared: 2, active: false, cast: 1 },
          { name: "Shield", prepared: 0, active: false, cast: 0 },
          { name: "Summon Monster I", prepared: 0, active: false, cast: 0 },
          { name: "Unseen Servant", prepared: 0, active: false, cast: 0 }
        ]
      }, {
        level_2: [
          { name: "Blur", prepared: 0, active: false, cast: 0 },
          { name: "Create Pit", prepared: 0, active: false, cast: 0 },
          { name: "Flaming Sphere", prepared: 0, active: false, cast: 0 },
          { name: "Glitterdust", prepared: 1, active: false, cast: 0 },
          { name: "Invisibility", prepared: 1, active: false, cast: 0 },
          { name: "Levitate", prepared: 0, active: false, cast: 0 },
          { name: "Mirror Image", prepared: 1, active: false, cast: 1 },
          { name: "Resist Energy", prepared: 0, active: false, cast: 0 },
          { name: "Stone Call", prepared: 0, active: false, cast: 0 },
          { name: "Summon Monster II", prepared: 0, active: false, cast: 0 },
          { name: "Web", prepared: 1, active: false, cast: 1 }
        ]
      }, {
        level_3: [
          { name: "Stinking Cloud", prepared: 0, active: false, cast: 0 },
          { name: "Summon Monster III", prepared: 1, active: false, cast: 1 },
          { name: "Spiked Pit", prepared: 1, active: false, cast: 0 },
          { name: "Aqueous Orb", prepared: 0, active: false, cast: 0 },
          { name: "Fly", prepared: 1, active: false, cast: 1 },
          { name: "Sleet Storm", prepared: 0, active: false, cast: 0 }
        ]
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
      character: "<strong>Resilient</strong> (+1 trait bonus on Fortitude saves)<br><strong>Arcane bond (Su)</strong> Rat Bower, +2 Fortitude save,<br><strong>Bonus feats</strong>,<br><strong>Cantrips</strong>,<br><strong>Arcane schools</strong> Conjuration,<br><strong>Teleportation sub school</strong>,<br><strong>Opposition arcane school</strong> Enchantment, Necromancy,<br><strong>Elven Immunities (Ex)</strong> +2 against enchantment spells and effects,<br><strong>Elven Magic (Ex)</strong> +2 caster level checks made to overcome SR. +2 Spellcraft check to identify properties of magic items,<br><strong>Keen Senses (Ex)</strong> +2 Perception checks,<br><strong>Low-Light Vision (Ex)</strong> See x2 as far as humans in low illumination,<br><strong>Headband of Vast Intelligence skill</strong> Use Magic Device,<br><strong>Linguistics Skill</strong> Dwarven, Giant, Undercommon,<br><strong>Shift (Su)</strong> Teleport 15 feet 9 times per day,<br><strong>Summoner's Charm (Su)</strong> +3 rounds duration for Conjuration (Summoning) spells,<br><strong>Weapon Familiarity (Ex)</strong> Proficient with longbows (including composite longbows), longswords, rapiers, and shortbows (including composite shortbows), treat weapon with \"elven\" in name as a martial weapon.",
      story: ""
    }
  };

  // exposed methods
  return {
    data: data
  };

})();

var orrin = (function() {

  var data = {
    awesomeSheet: true,
    basics: {
      name: "Orrin Alareth",
      race: "Human",
      class: "Rogue",
      level: "4",
      size: "Medium",
      alignment: "Lawful Neutral",
      xp: "6,240",
      height: "6'0",
      weight: "206 lbs",
      age: "26",
      gender: "Male",
      speed: "30 ft, 6 sq",
      initiative: "6",
      hero_points: "",
      luck_points: ""
    },
    statistics: {
      stats: {
        str: {
          score: "13",
          temp: ""
        },
        dex: {
          score: "19",
          temp: ""
        },
        con: {
          score: "12",
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
          score: "7",
          temp: ""
        }
      },
      feats: "Weapon Finesse, Dodge, Two-Weapon Fighting",
      traits: "Reactionary, Resilient",
      languages: "Common, Elven",
      special_abilities: "Sneak Attack (+2d6), Trapfinding, Evasion, Rogue talent (Trap Spotter), Trap Sense, Rogue talent (Crippling strike), Uncanny dodge"
    },
    equipment: {
      gear: "Fur coat and cold weather outfit, Thieves' tools, MW, Climber's kit, Magnifying glass, Merchant's scale,, Backpack, Flask of Oil (3), Pouch (belt), Sack, Candle, Flint and Steel, Torch, Tindertwig (5), Rations (5 days), Waterskin, Bedroll, Blanket, Rope (silk), Mirror, Compass, Ink, Pen, Paper sheets, Dagger (2), Hide armor",
      magic_gear: "",
      encumbrance: {
        light: "50 lbs or less",
        medium: "51–100 lbs",
        heavy: "101–150 lbs"
      },
      body_slots: {
        armor: "",
        belts: "",
        body: "Chainshirt MW",
        chest: "",
        eyes: "",
        feet: "",
        hands: "",
        head: "",
        headband: "",
        neck: "Cloak of Resistance +1",
        ring_left_hand: "",
        ring_right_hand: "",
        shield: "",
        shoulders: "",
        wrist: ""
      },
      wealth: {
        platinum: "",
        gold: "872",
        silver: "5",
        copper: ""
      },
      consumable: [{
        item: "Potion of Cure Light Wounds",
        current: "",
        total: "3",
        used: "1"
      }]
    },
    defense: {
      hp: {
        total: "31",
        temp: "",
        damage: "",
        non_lethal_damage: "",
        current: ""
      },
      ac: {
        misc: "",
        temp: "",
        armor: "4",
        shield: "",
        deflect: "",
        dodge: "1",
        natural: "",
        size_bonus: "",
        check_penalty: "-1",
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
          size: true
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
          size: true
        }
      },
      ac_notes: "+1 dodge bonus to AC against attacks made by traps.",
      fortitude: {
        base: "1",
        racial: "",
        resistance: "1",
        misc: "1",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: true,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false
        }
      },
      reflex: {
        base: "4",
        racial: "",
        resistance: "1",
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false
        }
      },
      will: {
        base: "1",
        racial: "",
        resistance: "1",
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: true,
          cha_bonus: false
        }
      },
      save_notes: "+1 bonus on Reflex saves made to avoid traps."
    },
    offense: {
      base_attack: "3",
      concentration: "",
      cmb: {
        misc: "",
        temp: "",
        size: "",
        current: "",
        bonuses: {
          str_bonus: true,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          bab: true,
          level: false,
          half_level: false
        }
      },
      cmd: {
        misc: "",
        temp: "",
        size: "",
        current: "",
        bonuses: {
          str_bonus: true,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          bab: true,
          level: false,
          half_level: false,
          plus_ten: true
        }
      },
      melee_attack: {
        misc: "",
        temp: "",
        size: "",
        current: "",
        bonuses: {
          str_bonus: true,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          bab: true,
          level: false,
          half_level: false
        }
      },
      ranged_attack: {
        misc: "",
        temp: "",
        size: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          bab: true,
          level: false,
          half_level: false
        }
      },
      attack: {
        melee: [{
          weapon: "Rapier +1",
          attack: "8",
          damage: "1d6+2",
          critical: "18–20/×2"
        }, {
          weapon: "Short sword MW",
          attack: "8",
          damage: "1d6+2",
          critical: "19–20/×2"
        }, {
          weapon: "Rapier +1, Short sword MW",
          attack: "6/6",
          damage: "1d6+2, 1d6+1",
          critical: "18–20/×2, 19–20/×2"
        }],
        ranged: [{
          weapon: "Shortbow (MW)",
          attack: "8",
          damage: "1d6",
          critical: "x3",
          range: "60 ft",
          ammo: "49"
        }]
      },
      attack_notes: "+2d6 Sneak attack"
    },
    skills: {
      spent_ranks: {
        include_custom: false,
        current: ""
      },
      acrobatics: {
        ranks: "4",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
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
      appraise: {
        ranks: "3",
        misc: "2",
        current: "",
        bonuses: {
          class_skill: true,
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
        ranks: "3",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
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
        ranks: "3",
        misc: "2",
        current: "",
        bonuses: {
          class_skill: true,
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
        ranks: "4",
        misc: "2",
        current: "",
        bonuses: {
          class_skill: true,
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
        ranks: "4",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
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
      handle_animal: {
        ranks: "",
        misc: "",
        current: "",
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
        ranks: "1",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
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
        ranks: "1",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
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
        bonuses: {
          class_skill: true,
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
        ranks: "4",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
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
        ranks: "1",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
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
        ranks: "4",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
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
        ranks: "4",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
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
      survival: {
        ranks: "",
        misc: "",
        current: "",
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
        ranks: "4",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
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
      custom_1: {
        name: "Perception (Traps)",
        ranks: "4",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: true,
          cha_bonus: false,
          level: false,
          half_level: true,
          check_penalty: false
        }
      },
      custom_2: {
        name: "Disable Device (Traps)",
        ranks: "4",
        misc: "2",
        current: "",
        bonuses: {
          class_skill: true,
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: true,
          check_penalty: false
        }
      },
      custom_3: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      custom_4: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      custom_5: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      custom_6: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      custom_7: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      custom_8: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
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
      character: "<strong>+2 to One Ability Score</strong> Human characters get a +2 bonus to one ability score of their choice at creation to represent their varied nature.<br><br><strong>Medium</strong> Humans are Medium creatures and have no bonuses or penalties due to their size.<br><br><strong>Normal Speed</strong> Humans have a base speed of 30 feet.<br><br><strong>Bonus Feat</strong> Humans select one extra feat at 1st level.<br><br><strong>Skilled</strong> Humans gain an additional skill rank at first level and one additional rank whenever they gain a level.<br><br><strong>Languages</strong> Humans begin play speaking Common. Humans with high Intelligence scores can choose any languages they want (except secret languages, such as Druidic).<br><br><strong>Sneak Attack</strong> If a rogue can catch an opponent when he is unable to defend himself effectively from her attack, she can strike a vital spot for extra damage.<br><br>The rogue's attack deals extra damage anytime her target would be denied a Dexterity bonus to AC (whether the target actually has a Dexterity bonus or not), or when the rogue flanks her target. This extra damage is 1d6 at 1st level, and increases by 1d6 every two rogue levels thereafter. Should the rogue score a critical hit with a sneak attack, this extra damage is not multiplied. Ranged attacks can count as sneak attacks only if the target is within 30 feet.<br><br>With a weapon that deals nonlethal damage (like a sap, whip, or an unarmed strike), a rogue can make a sneak attack that deals nonlethal damage instead of lethal damage. She cannot use a weapon that deals lethal damage to deal nonlethal damage in a sneak attack, not even with the usual –4 penalty.<br><br>The rogue must be able to see the target well enough to pick out a vital spot and must be able to reach such a spot. A rogue cannot sneak attack while striking a creature with concealment.<br><br><strong>Trapfinding</strong> A rogue adds 1/2 her level to Perception skill checks made to locate traps and to Disable Device skill checks (minimum +1). A rogue can use Disable Device to disarm magic traps.<br><br><strong>Evasion (Ex)</strong> At 2nd level and higher, a rogue can avoid even magical and unusual attacks with great agility. If she makes a successful Reflex saving throw against an attack that normally deals half damage on a successful save, she instead takes no damage. Evasion can be used only if the rogue is wearing light armor or no armor. A helpless rogue does not gain the benefit of evasion.<br><br><strong>Rogue Talents Trap Spotter (Ex)</strong> Whenever a rogue with this talent comes within 10 feet of a trap, she receives an immediate Perception skill check to notice the trap. This check should be made in secret by the GM.<br><br><strong>Weapon Finesse</strong> With a light weapon, rapier, whip, or spiked chain made for a creature of your size category, you may use your Dexterity modifier instead of your Strength modifier on attack rolls. If you carry a shield, its armor check penalty applies to your attack rolls.<br><br><strong>Dodge</strong> You gain a +1 dodge bonus to your AC. A condition that makes you lose your Dex bonus to AC also makes you lose the benefits of this feat.<br><br><strong>Reactionary</strong> You were bullied often as a child, but never quite developed an offensive response. Instead, you became adept at anticipating sudden attacks and reacting to danger quickly. You gain a +2 trait bonus on Initiative checks.<br><br><strong>Resilient</strong> Growing up in a poor neighborhood or in the unforgiving wilds often forced you to subsist on food and water from doubtful sources. You've built up your mettle as a result, and gain a +1 trait bonus on Fortitude saves.<br><br><strong>Trap Sense (Ex)</strong> At 3rd level, a rogue gains an intuitive sense that alerts her to danger from traps, giving her a +1 bonus on Reflex saves made to avoid traps and a +1 dodge bonus to AC against attacks made by traps. These bonuses rise to +2 when the rogue reaches 6th level, to +3 when she reaches 9th level, to +4 when she reaches 12th level, to +5 at 15th, and to +6 at 18th level.<br><br><strong>Two-Weapon Fighting</strong> Your penalties on attack rolls for fighting with two weapons are reduced. The penalty for your primary hand lessens by 2 and the one for your off hand lessens by 6. See Two-Weapon Fighting in Combat.<br><br><strong>Rogue talent Crippling Strike (Ex) </strong>A rogue with this ability can sneak attack opponents with such precision that her blows weaken and hamper them. An opponent damaged by one of her sneak attacks also takes 2 points of Strength damage.<br><br><strong>Uncanny Dodge (Ex)</strong> Starting at 4th level, a rogue can react to danger before her senses would normally allow her to do so. She cannot be caught flat-footed, nor does she lose her Dex bonus to AC if the attacker is invisible. She still loses her Dexterity bonus to AC if immobilized. A rogue with this ability can still lose her Dexterity bonus to AC if an opponent successfully uses the feint action against her.",
      story: ""
    }
  };

  // exposed methods
  return {
    data: data
  };

})();

var ro = (function() {

  var data = {
    awesomeSheet: true,
    basics: {
      name: "Ro Flint",
      race: "Elf",
      class: "Magus Bladebound",
      level: "3",
      size: "Medium",
      alignment: "Lawful Neutral",
      xp: "3,891",
      height: "6'0",
      weight: "",
      age: "120",
      gender: "Male",
      speed: "30 ft, 6 sq",
      initiative: "4",
      hero_points: "",
      luck_points: ""
    },
    statistics: {
      stats: {
        str: {
          score: "12",
          temp: ""
        },
        dex: {
          score: "18",
          temp: ""
        },
        con: {
          score: "10",
          temp: ""
        },
        int: {
          score: "16",
          temp: ""
        },
        wis: {
          score: "10",
          temp: ""
        },
        cha: {
          score: "7",
          temp: ""
        }
      },
      feats: "Weapon Finesse, Dervish Dance, Alertness",
      traits: "Magical Lineage (Shocking Grasp), Focused Mind (+2 on concentration checks)",
      languages: "Common, Draconic, Dwarven, Elven, Orc",
      special_abilities: "Low-Light Vision (Ex), Elven Immunities (Ex), Elven Magic (Ex), Weapon Familiarity (Ex), Keen Senses (Ex), Arcane Pool, Cantrips, Spell Combat (EX), Black Blade (Ex)"
    },
    equipment: {
      gear: "Fur coat and cold weather outfit, Rapier, Spell component pouch, Spellbook, Backpack, Flask of Oil x3, Pouch (belt), Sack, Candle, Flint and Steel, Tindertwig, Rations (5 days), Waterskin, Bedroll, Blanket, Rope (silk), Mirror, Compass, Ink, Inkpen, Paper sheets, Case for maps/scrolls, Tent for 2, Trained Donkey (commands: come, down, stay heal, work), Alchemist Fire (3), Potion of CLW (3)",
      magic_gear: "Short Sword +1, Black Blade Scimitar +1",
      encumbrance: {
        light: "43 lbs or less",
        medium: "44–86 lbs",
        heavy: "87–130 lbs"
      },
      body_slots: {
        armor: "Studded leather",
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
        gold: "570",
        silver: "",
        copper: ""
      },
      consumable: [{
        item: "Arcane Pool",
        current: "4",
        total: "4",
        used: ""
      }, {
        item: "Black Blade Arcane Pool",
        current: "1",
        total: "1",
        used: ""
      }, {
        item: "Alchemist Fire",
        current: "3",
        total: "3",
        used: ""
      }, {
        item: "Potion of CLW",
        current: "3",
        total: "3",
        used: ""
      }]
    },
    defense: {
      hp: {
        total: "20",
        temp: "",
        damage: "9",
        non_lethal_damage: "",
        current: ""
      },
      ac: {
        misc: "",
        temp: "",
        armor: "3",
        shield: "",
        deflect: "",
        dodge: "",
        natural: "",
        size_bonus: "",
        check_penalty: "",
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
          size: true
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
          size: true
        }
      },
      ac_notes: "",
      fortitude: {
        base: "3",
        racial: "",
        resistance: "",
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: true,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false
        }
      },
      reflex: {
        base: "1",
        racial: "",
        resistance: "",
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false
        }
      },
      will: {
        base: "3",
        racial: "",
        resistance: "",
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: true,
          cha_bonus: false
        }
      },
      save_notes: "Immune to sleep effecrs, +2 against enchantment spells and effects, +7 against cold weather"
    },
    offense: {
      base_attack: "2",
      concentration: "8",
      cmb: {
        misc: "",
        temp: "",
        size: "",
        current: "",
        bonuses: {
          str_bonus: true,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          bab: true,
          level: false,
          half_level: false
        }
      },
      cmd: {
        misc: "",
        temp: "",
        size: "",
        current: "",
        bonuses: {
          str_bonus: true,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          bab: true,
          level: false,
          half_level: false,
          plus_ten: true
        }
      },
      melee_attack: {
        misc: "",
        temp: "",
        size: "",
        current: "",
        bonuses: {
          str_bonus: true,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          bab: true,
          level: false,
          half_level: false
        }
      },
      ranged_attack: {
        misc: "",
        temp: "",
        size: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          bab: true,
          level: false,
          half_level: false
        }
      },
      attack: {
        melee: [{
          weapon: "Rapier",
          attack: "6",
          damage: "1d6+4",
          critical: "18–20/x2"
        }, {
          weapon: "Black Blade Scimitar +1",
          attack: "7",
          damage: "1d6+5",
          critical: "18–20/x2"
        }, {
          weapon: "Spell Strike BB Scimitar +1",
          attack: "5/5",
          damage: "1d6+5",
          critical: "18–20/x2"
        }, {
          weapon: "Shortsword +1",
          attack: "7",
          damage: "1d6+2",
          critical: "18–20/x2"
        }],
        ranged: [{
          weapon: "Shortbow",
          attack: "5",
          damage: "1d6",
          critical: "x3",
          range: "60 ft",
          ammo: "50"
        }]
      },
      attack_notes: "+1 attack, +2 damage"
    },
    skills: {
      spent_ranks: {
        include_custom: false,
        current: ""
      },
      acrobatics: {
        ranks: "3",
        misc: "",
        current: "",
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
      appraise: {
        ranks: "",
        misc: "",
        current: "",
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
      handle_animal: {
        ranks: "",
        misc: "",
        current: "",
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
        ranks: "1",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
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
        ranks: "3",
        misc: "2",
        current: "",
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
        variant_name: "Dance",
        ranks: "2",
        misc: "",
        current: "",
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
        ranks: "2",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
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
        ranks: "3",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
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
        ranks: "1",
        misc: "",
        current: "",
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
      survival: {
        ranks: "",
        misc: "",
        current: "",
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
      custom_1: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      custom_2: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      custom_3: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      custom_4: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      custom_5: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      custom_6: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      custom_7: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      custom_8: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      }
    },
    spells: {
      per_day: {
        level_0: "4",
        level_1: "4",
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
        level_0: "13",
        level_1: "14",
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
          { name: "Acid Splash", prepared: 0, active: false, cast: 0 },
          { name: "Arcane Mark", prepared: 0, active: false, cast: 0 },
          { name: "Dancing Lights", prepared: 1, active: false, cast: 0 },
          { name: "Daze", prepared: 0, active: false, cast: 0 },
          { name: "Detect Magic", prepared: 1, active: false, cast: 0 },
          { name: "Disrupt Undead", prepared: 0, active: false, cast: 0 },
          { name: "Flare", prepared: 0, active: false, cast: 0 },
          { name: "Ghost Sound", prepared: 0, active: false, cast: 0 },
          { name: "Light", prepared: 0, active: false, cast: 0 },
          { name: "Mage Hand", prepared: 1, active: false, cast: 0 },
          { name: "Open Close", prepared: 0, active: false, cast: 0 },
          { name: "Prestidigitation", prepared: 0, active: false, cast: 0 },
          { name: "Ray of Frost", prepared: 0, active: false, cast: 0 },
          { name: "Read Magic", prepared: 0, active: false, cast: 0 },
          { name: "Spark", prepared: 0, active: false, cast: 0 }
        ]
      }, {
        level_1: [
          { name: "Color Spray", prepared: 0, active: false, cast: 0 },
          { name: "Grease", prepared: 1, active: false, cast: 0 },
          { name: "Shocking Grasp", prepared: 2, active: false, cast: 0 },
          { name: "True Strike", prepared: 0, active: false, cast: 0 },
          { name: "Magic Missile", prepared: 0, active: false, cast: 0 },
          { name: "Shield", prepared: 1, active: false, cast: 0 },
          { name: "Vanish", prepared: 0, active: false, cast: 0 },
          { name: "Obscuring Mist", prepared: 0, active: false, cast: 0 },
          { name: "Chill Touch", prepared: 0, active: false, cast: 0 },
          { name: "Frostbite", prepared: 0, active: false, cast: 0 },
          { name: "Infernal Healing", prepared: 0, active: false, cast: 0 },
          { name: "Windy Escape", prepared: 0, active: false, cast: 0 },
          { name: "Unerring Weapon", prepared: 0, active: false, cast: 0 },
          { name: "Ray of Enfeeblement", prepared: 0, active: false, cast: 0 },
          { name: "Burning Hands", prepared: 0, active: false, cast: 0 },
          { name: "Expeditious Retreat", prepared: 0, active: false, cast: 0 }
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
      character: "<strong>Low-Light Vision (Ex)</strong> See x2 as far as humans in low illumination,<br><br><strong>Elven Immunities (Ex)</strong> Immune to magic sleep effects, +2 against Enchantment spells and effects,<br><br><strong>Elven Magic (Ex)</strong> +2 caster level checks made to overcome SR. +2 Spellcraft check to identify properties of magic items,<br><br><strong>Weapon Familiarity (Ex)</strong> Proficient with longbows (including composite longbows), longswords, rapiers, and shortbows (including composite shortbows), treat weapon with \"elven\" in name as a martial weapon),<br><br><strong>Keen Senses (Ex)</strong> +2 Perception checks,<br><br><strong>Arcane Pool</strong> 4,<br><br><strong>Cantrips</strong> <strong>Spell Combat (EX)</strong> cast spells and wield his weapons at the same time.<br><br><strong>Black Blade (Ex)</strong> Bladebound magus' gain a powerful sentient weapon called a black blade.<br><br><strong>Black Blade Scimitar +1</strong><br>Purpose: To protect the Elves.<br>Enhancement Bonus +1, Int 11, Wis/Cha 7, Ego 5,<br>Special: Alertness, black blade strike, telepathy, unbreakable.",
      story: ""
    }
  };

  // exposed methods
  return {
    data: data
  };

})();

var vos = (function() {

  var data = {
    awesomeSheet: true,
    basics: {
      name: "Vos Thunderstomp",
      race: "Dwarf",
      class: "Monk",
      level: "5",
      size: "Medium",
      alignment: "Chaotic Neutral",
      xp: "18,752",
      height: "5'0",
      weight: "190 lbs",
      age: "40",
      gender: "Male",
      speed: "30 ft, 6 sq",
      initiative: "2",
      hero_points: "2",
      luck_points: ""
    },
    statistics: {
      stats: {
        str: {
          score: "17",
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
      feats: "Improved Grapple, Weapon Focus (Unarmed Strike), Dodge, Extra Ki",
      traits: "",
      languages: "Common, Dwarven",
      special_abilities: "Darkvision, Defensive Training, Greed, Hatred, Hardy, Stability, Stonecunning, Weapon Familiarity, Evasion, Flurry of Blows +3/+3 (Ex), Stunning Fist (Ex), Unarmed Strike, AC Bonus +1 (Ex), Evasion (Ex), Fast Movement +10ft (Ex), Maneuver Training (Ex), Still Mind (Ex), Ki Pool (Su), Slow Fall (Ex), High Jump (Ex), Purity of Body (Ex)"
    },
    equipment: {
      gear: "Backpack, Flask Of Oil (3), Pouch (belt), Sack, Candle, Flint And Steel, Tindertwig, Rations (5 Days), Waterskin, Bedroll, Blanket, Bloodblock, Rope (silk), Mirror, Compass, Ink, Inkpen, Paper Sheets, Case For Maps/scrolls, Torch, Rubbing Poweder, Rubbing Oils, Fine Cheese (1), Smelly Cheese (3), Wine (2), Wrestling Costume (2), Alchemist Fire (3), Dagger, Lavendar soap, Soap bar",
      magic_gear: "Good Berries (5), Potion of Stabilise, Potion of Cure Light Wounds (0), Potion of Cure Moderate Wounds (0), Potion of Owls Wisdom (0)",
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
        ring_right_hand: "Ring of Protection +1",
        shield: "",
        shoulders: "Cloak of Resistance +1",
        wrist: "Bracers of Armor +1"
      },
      wealth: {
        platinum: "",
        gold: "8,971",
        silver: "5",
        copper: ""
      },
      consumable: [{
        item: "Ki Pool",
        current: "",
        total: "6",
        used: ""
      }, {
        item: "Scented Oils",
        current: "",
        total: "5",
        used: "1"
      }, {
        item: "Stunning Fist",
        current: "",
        total: "5",
        used: ""
      }]
    },
    defense: {
      hp: {
        total: "39",
        temp: "",
        damage: "",
        non_lethal_damage: "",
        current: ""
      },
      ac: {
        misc: "1",
        temp: "",
        armor: "1",
        shield: "",
        deflect: "1",
        dodge: "1",
        natural: "",
        size_bonus: "",
        check_penalty: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: true,
          cha_bonus: false,
          plus_ten: true,
          ac_armor: true,
          ac_shield: true,
          ac_deflect: true,
          ac_dodge: true,
          ac_natural: true,
          size: true
        }
      },
      flat_footed: {
        misc: "1",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: true,
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
        misc: "1",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: true,
          cha_bonus: false,
          plus_ten: true,
          ac_deflect: true,
          ac_dodge: true,
          size: true
        }
      },
      ac_notes: "",
      fortitude: {
        base: "4",
        racial: "",
        resistance: "1",
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: true,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false
        }
      },
      reflex: {
        base: "4",
        racial: "",
        resistance: "1",
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false
        }
      },
      will: {
        base: "4",
        racial: "",
        resistance: "1",
        misc: "",
        temp: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: true,
          cha_bonus: false
        }
      },
      save_notes: "Immunity to all diseases, +2 against poison, spells, and spell-like abilities, +2 against enchantment spells and effects."
    },
    offense: {
      base_attack: "3",
      concentration: "",
      cmb: {
        misc: "",
        temp: "",
        size: "",
        current: "",
        bonuses: {
          str_bonus: true,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          bab: true,
          level: true,
          half_level: false
        }
      },
      cmd: {
        misc: "1",
        temp: "",
        size: "",
        current: "",
        bonuses: {
          str_bonus: true,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: true,
          cha_bonus: false,
          bab: true,
          level: false,
          half_level: false,
          plus_ten: true
        }
      },
      melee_attack: {
        misc: "",
        temp: "",
        size: "",
        current: "",
        bonuses: {
          str_bonus: true,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          bab: true,
          level: false,
          half_level: false
        }
      },
      ranged_attack: {
        misc: "",
        temp: "",
        size: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          bab: true,
          level: false,
          half_level: false
        }
      },
      attack: {
        melee: [{
          weapon: "Flurry of Blows",
          attack: "6/6",
          damage: "1d8+3",
          critical: "20x2"
        }, {
          weapon: "Grapple",
          attack: "10",
          damage: "1d8+3",
          critical: "20x2"
        }, {
          weapon: "Maintain Grapple ",
          attack: "15",
          damage: "1d8+3",
          critical: "20x2"
        }, {
          weapon: "Stunning Fist",
          attack: "7",
          damage: "1d8+3",
          critical: "20x2"
        }],
        ranged: [{
          weapon: "Shortbow",
          attack: "6",
          damage: "1d6",
          critical: "x3",
          range: "60 ft",
          ammo: "50"
        }]
      },
      attack_notes: "+1 weapon focus (unarmed strike), +2 grapple, +2 to resist grapple"
    },
    skills: {
      spent_ranks: {
        include_custom: false,
        current: ""
      },
      acrobatics: {
        ranks: "5",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
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
      appraise: {
        ranks: "",
        misc: "2",
        current: "",
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
        ranks: "4",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
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
      handle_animal: {
        ranks: "",
        misc: "",
        current: "",
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
        ranks: "5",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
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
        ranks: "5",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
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
      survival: {
        ranks: "",
        misc: "",
        current: "",
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
        ranks: "1",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
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
      custom_1: {
        name: "Acrobatics (Jump)",
        ranks: "5",
        misc: "",
        current: "",
        bonuses: {
          class_skill: true,
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: true,
          half_level: false,
          check_penalty: false
        }
      },
      custom_2: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      custom_3: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      custom_4: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      custom_5: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      custom_6: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      custom_7: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      },
      custom_8: {
        name: "",
        ranks: "",
        misc: "",
        current: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
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
      character: "<strong>+2 Constitution, +2 Wisdom, –2 Charisma</strong> Dwarves are both tough and wise, but also a bit gruff.<br><br><strong>Medium</strong> Dwarves are Medium creatures and have no bonuses or penalties due to their size.<br><br><strong>Slow and Steady</strong> Dwarves have a base speed of 20 feet, but their speed is never modified by armor or encumbrance.<br><br><strong>Darkvision</strong> Dwarves can see in the dark up to 60 feet.<br><br><strong>Defensive Training</strong> Dwarves get a +4 dodge bonus to AC against monsters of the giant subtype.<br><br><strong>Greed</strong> Dwarves receive a +2 racial bonus on Appraise skill checks made to determine the price of nonmagical goods that contain precious metals or gemstones.<br><br><strong>Hatred</strong> Dwarves receive a +1 bonus on attack rolls against humanoid creatures of the orc and goblinoid subtypes due to special training against these hated foes.<br><br><strong>Hardy</strong> Dwarves receive a +2 racial bonus on saving throws against poison, spells, and spell-like abilities.<br><br><strong>Stability</strong> Dwarves receive a +4 racial bonus to their Combat Maneuver Defense when resisting a bull rush or trip attempt while standing on the ground.<br><br><strong>Stonecunning</strong> Dwarves receive a +2 bonus on Perception checks to potentially notice unusual stonework, such as traps and hidden doors located in stone walls or floors. They receive a check to notice such features whenever they pass within 10 feet of them, whether or not they are actively looking.<br><br><strong>Weapon Familiarity</strong> Dwarves are proficient with battleaxes, heavy picks, and warhammers, and treat any weapon with the word \"dwarven\" in its name as a martial weapon.<br><br><strong>Languages</strong> Dwarves begin play speaking Common and Dwarven. Dwarves with high Intelligence scores can choose from the following Giant, Gnome, Goblin, Orc, Terran, and Undercommon.<br><br><strong>Weapon and Armor Proficiency</strong> Monks are proficient with the club, crossbow (light or heavy), dagger, handaxe, javelin, kama, nunchaku, quarterstaff, sai, shortspear, short sword, shuriken, siangham, sling, and spear.<br><br>Monks are not proficient with any armor or shields.<br><br>When wearing armor, using a shield, or carrying a medium or heavy load, a monk loses his AC bonus, as well as his fast movement and flurry of blows abilities.<br><br><strong>AC Bonus (Ex)</strong> When unarmored and unencumbered, the monk adds his Wisdom bonus (if any) to his AC and his CMD. In addition, a monk gains a +1 bonus to AC and CMD at 4th level. This bonus increases by 1 for every four monk levels thereafter, up to a maximum of +5 at 20th level.<br><br>These bonuses to AC apply even against touch attacks or when the monk is flat-footed. He loses these bonuses when he is immobilized or helpless, when he wears any armor, when he carries a shield, or when he carries a medium or heavy load.<br><br><strong>Flurry of Blows (Ex)</strong> Starting at 1st level, a monk can make a flurry of blows as a full-attack action. When doing so, he may make on additional attack, taking a -2 penalty on all of his attack rolls, as if using the Two-Weapon Fighting feat. These attacks can be any combination of unarmed strikes and attacks with a monk special weapon (he does not need to use two weapons to use this ability). For the purpose of these attacks, the monk's base attack bonus from his monk class levels is equal to his monk level. For all other purposes, such as qualifying for a feat or a prestige class, the monk uses his normal base attack bonus.<br><br>At 8th level, the monk can make two additional attacks when he uses flurry of blows, as if using Improved Two-Weapon Fighting (even if the monk does not meet the prerequisites for the feat).<br><br>At 15th level, the monk can make three additional attacks using flurry of blows, as if using Greater Two-Weapon Fighting (even if the monk does not meet the prerequisites for the feat).<br><br>A monk applies his full Strength bonus to his damage rolls for all successful attacks made with flurry of blows, whether the attacks are made with an off-hand or with a weapon wielded in both hands. A monk may substitute disarm, sunder, and trip combat maneuvers for unarmed attacks as part of a flurry of blows. A monk cannot use any weapon other than an unarmed strike or a special monk weapon as part of a flurry of blows. A monk with natural weapons cannot use such weapons as part of a flurry of blows, nor can he make natural attacks in addition to his flurry of blows attacks.<br><br><strong>Unarmed Strike</strong> At 1st level, a monk gains Improved Unarmed Strike as a bonus feat. A monk's attacks may be with fist, elbows, knees, and feet. This means that a monk may make unarmed strikes with his hands full. There is no such thing as an off-hand attack for a monk striking unarmed. A monk may thus apply his full Strength bonus on damage rolls for all his unarmed strikes.<br><br>Usually a monk's unarmed strikes deal lethal damage, but he can choose to deal nonlethal damage instead with no penalty on his attack roll. He has the same choice to deal lethal or nonlethal damage while grappling.<br><br>A monk's unarmed strike is treated as both a manufactured weapon and a natural weapon for the purpose of spells and effects that enhance or improve either manufactured weapons or natural weapons.<br><br>A monk also deals more damage with his unarmed strikes than a normal person would, as shown above on Table: Monk. The unarmed damage values listed on Table: Monk is for Medium monks. A Small monk deals less damage than the amount given there with his unarmed attacks, while a Large monk deals more damage; see Small or Large Monk Unarmed Damage on the table given below.<br><br><strong>Bonus Feat</strong> At 1st level, 2nd level, and every 4 levels thereafter, a monk may select a bonus feat. These feats must be taken from the following list: Catch Off-Guard, Combat Reflexes, Deflect Arrows, Dodge, Improved Grapple, Scorpion Style, and Throw Anything. At 6th level, the following feats are added to the list: Gorgon's Fist, Improved Bull Rush, Improved Disarm, Improved Feint, Improved Trip, and Mobility. At 10th level, the following feats are added to the list: Improved Critical, Medusa's Wrath, Snatch Arrows, and Spring Attack. A monk need not have any of the prerequisites normally required for these feats to select them.<br><br><strong>Stunning Fist (Ex)</strong> At 1st level, the monk gains Stunning Fist as a bonus feat, even if he does not meet the prerequisites. At 4th level, and every 4 levels thereafter, the monk gains the ability to apply a new condition to the target of his Stunning Fist. This condition replaces stunning the target for 1 round, and a successful saving throw still negates the effect. At 4th level, he can choose to make the target fatigued. At 8th level, he can make the target sickened for 1 minute. At 12th level, he can make the target staggered for 1d6+1 rounds. At 16th level, he can permanently blind or deafen the target. At 20th level, he can paralyze the target for 1d6+1 rounds. The monk must choose which condition will apply before the attack roll is made. These effects do not stack with themselves (a creature sickened by Stunning Fist cannot become nauseated if hit by Stunning Fist again), but additional hits do increase the duration.<br><br><strong>Evasion (Ex)</strong> At 2nd level or higher, a monk can avoid damage from many area-effect attacks. If a monk makes a successful Reflex saving throw against an attack that normally deals half damage on a successful save, he instead takes no damage. Evasion can be used only if a monk is wearing light armor or no armor. A helpless monk does not gain the benefit of evasion.<br><br><strong>Fast Movement (Ex)</strong> At 3rd level, a monk gains an enhancement bonus to his land speed, as shown on Table: Monk. A monk in armor or carrying a medium or heavy load loses this extra speed.<br><br><strong>Maneuver Training (Ex)</strong> At 3rd level, a monk uses his monk level in place of his base attack bonus when calculating his Combat Maneuver Bonus. Base attack bonuses granted from other classes are unaffected and are added normally.<br><br><strong>Still Mind (Ex)</strong> A monk of 3rd level or higher gains a +2 bonus on saving throws against enchantment spells and effects.<br><br><strong>Ki Pool (Su)</strong> At 4th level, a monk gains a pool of ki points, supernatural energy he can use to accomplish amazing feats. The number of points in a monk's ki pool is equal to 1/2 his monk level + his Wisdom modifier. As long as he has at least 1 point in his ki pool, he can make a ki strike. At 4th level, ki strike allows his unarmed attacks to be treated as magic weapons for the purpose of overcoming damage reduction. At 7th level, his unarmed attacks are also treated as cold iron and silver for the purpose of overcoming damage reduction. At 10th level, his unarmed attacks are also treated as lawful weapons for the purpose of overcoming damage reduction. At 16th level, his unarmed attacks are treated as adamantine weapons for the purpose of overcoming damage reduction and bypassing hardness.<br><br>By spending 1 point from his ki pool, a monk can make one additional attack at his highest attack bonus when making a flurry of blows attack. In addition, he can spend 1 point to increase his speed by 20 feet for 1 round. Finally, a monk can spend 1 point from his ki pool to give himself a +4 dodge bonus to AC for 1 round. Each of these powers is activated as a swift action. A monk gains additional powers that consume points from his ki pool as he gains levels.<br><br>The ki pool is replenished each morning after 8 hours of rest or meditation; these hours do not need to be consecutive.<br><br><strong>Slow Fall (Ex)</strong> At 4th level or higher, a monk within arm's reach of a wall can use it to slow his descent. When first gaining this ability, he takes damage as if the fall were 20 feet shorter than it actually is. The monk's ability to slow his fall (that is, to reduce the effective distance of the fall when next to a wall) improves with his monk level until at 20th level he can use a nearby wall to slow his descent and fall any distance without harm.<br><br><strong>High Jump (Ex)</strong> At 5th level, a monk adds his level to all Acrobatics checks made to jump, both for vertical jumps and horizontal jumps. In addition, he always counts as having a running start when making jump checks using Acrobatics. By spending 1 point from his ki pool as a swift action, a monk gains a +20 bonus on Acrobatics checks made to jump for 1 round.<br><br><strong>Purity of Body (Ex)</strong> At 5th level, a monk gains immunity to all diseases, including supernatural and magical diseases.<br><br><strong>Improved Grapple</strong> You do not provoke an attack of opportunity when performing a grapple combat maneuver. In addition, you receive a +2 bonus on checks made to grapple a foe. You also receive a +2 bonus to your Combat Maneuver Defense whenever an opponent tries to grapple you.<br><br><strong>Weapon Focus</strong> You gain a +1 bonus on all attack rolls you make using the selected weapon.<br><br><strong>Dodge</strong> You gain a +1 dodge bonus to your AC. A condition that makes you lose your Dex bonus to AC also makes you lose the benefits of this feat.<br><br><strong>Extra Ki</strong> You can use your ki pool more times per day than most.",
      story: ""
    }
  };

  // exposed methods
  return {
    data: data
  };

})();

var hardCodedCharacters = (function() {

  var demo = [
    nif.data,
    vos.data
  ];

  var all = [
    nif.data,
    vos.data,
    orrin.data,
    nefi.data,
    ro.data, // kia
    marika.data // retired
  ];

  // exposed methods
  return {
    demo: demo,
    all: all
  };

})();

var clone = (function() {

  function render() {
    var all_attackMelee = sheet.getCharacter().offense.attack.melee;
    var all_attackRanged = sheet.getCharacter().offense.attack.ranged;
    var all_consumable = sheet.getCharacter().equipment.consumable;
    _render_clone(all_attackMelee.length, "attack-melee");
    _render_clone(all_attackRanged.length, "attack-ranged");
    _render_clone(all_consumable.length, "consumable");
    _update_cloneInput(all_attackMelee, "attack-melee");
    _update_cloneInput(all_attackRanged, "attack-ranged");
    _update_cloneInput(all_consumable, "consumable");
    _updateCloneAttackMelee();
    _updateCloneAttackRanged();
    _updateCloneConsumable();
  };

  function _newConsumable(index) {
    var cloneString =
      '<div class="row">' +
      '<div class="col-xs-12">' +
      '<div class="js-total-block">' +
      '<div class="row no-gutter">' +
      '<div class="col-xs-6">' +
      '<div class="m-input-block js-input-block">' +
      '<label class="m-input-block-label js-input-block-label" for="consumable-item-' + index + '">Item</label>' +
      '<input id="consumable-item-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-consumable-item" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-2">' +
      '<p class="u-text-center u-no-margin u-inline-with-input u-underline-with-input js-total-block-total js-clone-consumable-current">0</p>' +
      '</div>' +
      '<div class="col-xs-2">' +
      '<div class="m-input-block js-input-block">' +
      '<label class="m-input-block-label js-input-block-label" for="consumable-total-' + index + '">Total</label>' +
      '<input id="consumable-total-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-consumable-total" data-total="addition" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-2">' +
      '<div class="m-input-block js-input-block">' +
      '<label class="m-input-block-label js-input-block-label" for="consumable-used-' + index + '">Used</label>' +
      '<input id="consumable-used-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-consumable-used" data-total="subtract" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-3 col-xs-offset-9">' +
      '<div class="m-clone-block-delete-controls">' +
      '<button class="button button-small button-primary button-block js-clone-block-delete" tabindex="3"><span class="icon-close"></span></button>' +
      '</div>' +
      '</div>' +
      '</div>';
    return cloneString;
  };

  function _newAttackMelee(index) {
    var cloneString =
      '<div class="row">' +
      '<div class="col-xs-12">' +
      '<div class="row no-gutter">' +
      '<div class="col-xs-5 col-md-4">' +
      '<div class="m-input-block js-input-block">' +
      '<label class="m-input-block-label js-input-block-label" for="attack-melee-weapon-' + index + '">Melee Weapon</label>' +
      '<input id="attack-melee-weapon-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-attack-melee-weapon" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-2 col-md-2">' +
      '<div class="m-input-block js-input-block">' +
      '<label class="m-input-block-label js-input-block-label" for="attack-melee-attack-' + index + '">Attack</label>' +
      '<input id="attack-melee-attack-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-attack-melee-attack" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-3 col-md-3">' +
      '<div class="m-input-block js-input-block">' +
      '<label class="m-input-block-label js-input-block-label" for="attack-melee-damage-' + index + '">Damage</label>' +
      '<input id="attack-melee-damage-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-attack-melee-damage" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-2 col-md-3">' +
      '<div class="m-input-block js-input-block">' +
      '<label class="m-input-block-label js-input-block-label" for="attack-melee-critical-' + index + '">Critical</label>' +
      '<input id="attack-melee-critical-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-attack-melee-critical" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-3 col-xs-offset-9">' +
      '<div class="m-clone-block-delete-controls">' +
      '<button class="button button-small button-primary button-block js-clone-block-delete" tabindex="3"><span class="icon-close"></span></button>' +
      '</div>' +
      '</div>' +
      '</div>';
    return cloneString;
  };

  function _newAttackRanged(index) {
    var cloneString =
      '<div class="row">' +
      '<div class="col-xs-12">' +
      '<div class="row no-gutter">' +
      '<div class="col-xs-6 col-xl-4">' +
      '<div class="m-input-block js-input-block">' +
      '<label class="m-input-block-label js-input-block-label" for="attack-ranged-weapon-' + index + '">Ranged Weapon</label>' +
      '<input id="attack-ranged-weapon-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-attack-ranged-weapon" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-3 col-xl-2">' +
      '<div class="m-input-block js-input-block">' +
      '<label class="m-input-block-label js-input-block-label" for="attack-ranged-attack-' + index + '">Attack</label>' +
      '<input id="attack-ranged-attack-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-attack-ranged-attack" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-3 col-xl-2">' +
      '<div class="m-input-block js-input-block">' +
      '<label class="m-input-block-label js-input-block-label" for="attack-ranged-damage-' + index + '">Damage</label>' +
      '<input id="attack-ranged-damage-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-attack-ranged-damage" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-3 col-xs-offset-3 col-xl-2 col-xl-offset-0">' +
      '<div class="m-input-block js-input-block">' +
      '<label class="m-input-block-label js-input-block-label" for="attack-ranged-critical-' + index + '">Critical</label>' +
      '<input id="attack-ranged-critical-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-attack-ranged-critical" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-3 col-xl-1">' +
      '<div class="m-input-block js-input-block">' +
      '<label class="m-input-block-label js-input-block-label" for="attack-ranged-range-' + index + '">Range</label>' +
      '<input id="attack-ranged-range-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-attack-ranged-range" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-3 col-xl-1">' +
      '<div class="m-input-block js-input-block">' +
      '<label class="m-input-block-label js-input-block-label" for="attack-ranged-ammo-' + index + '">Ammo</label>' +
      '<input id="attack-ranged-ammo-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-attack-ranged-ammo" type="text" tabindex="3">' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="col-xs-3 col-xs-offset-9">' +
      '<div class="m-clone-block-delete-controls">' +
      '<button class="button button-small button-primary button-block js-clone-block-delete" tabindex="3"><span class="icon-close"></span></button>' +
      '</div>' +
      '</div>' +
      '</div>';
    return cloneString;
  };

  function _minMaxCountLimit(input) {
    if (input.value <= 0) {
      input.value = "";
    } else if (input.value >= 100) {
      input.value = 100;
    };
  };

  function _smoothScrollToClones(cloneBlock) {
    var targetTop = helper.e(cloneBlock).getBoundingClientRect().top;
    var windowBottom = window.innerHeight;
    var quickNavHeight = parseInt(getComputedStyle(document.querySelector(".js-quick-nav")).height, 10);
    var subHeaderHeight = parseInt(getComputedStyle(document.querySelector(".js-section-heading")).height, 10);
    if (targetTop > (windowBottom - (windowBottom / 2))) {
      var options = {
        offset: quickNavHeight + subHeaderHeight + 30
      };
      if (body.dataset.displayMode == "false" || !body.dataset.displayMode) {
        smoothScroll.animateScroll(null, cloneBlock, options);
      };
    };
  };

  function bind() {
    var cloneBlockConsumable = helper.e(".js-clone-block-consumable");
    var cloneBlockAttack = helper.e(".js-clone-block-attack");
    var cloneAddConsumable = cloneBlockConsumable.querySelector(".js-clone-add-consumable");
    var cloneRemoveConsumable = cloneBlockConsumable.querySelector(".js-clone-remove");
    var cloneAddAttackMelee = cloneBlockAttack.querySelector(".js-clone-add-melee");
    var cloneAddAttackRanged = cloneBlockAttack.querySelector(".js-clone-add-ranged");
    var cloneRemoveAttack = cloneBlockAttack.querySelector(".js-clone-remove");
    cloneAddConsumable.addEventListener("click", function() {
      _render_clone(1, "consumable");
      _updateCloneConsumable();
      _smoothScrollToClones("#equipment-consumables");
      sheet.storeCharacters();
      // consumable.render();
      if (_getCloneCount("consumable") <= 99) {
        snack.render("Consumable added.", false, false);
      };
    }, false);
    cloneRemoveConsumable.addEventListener("click", function() {
      _changeCloneState("consumable");
    }, false);
    cloneAddAttackMelee.addEventListener("click", function() {
      _render_clone(1, "attack-melee");
      _updateCloneAttackMelee();
      _smoothScrollToClones("#offense-attacks");
      sheet.storeCharacters();
      if (_getCloneCount("attack-melee") <= 99) {
        snack.render("Melee attack added.", false, false);
      };
    }, false);
    cloneAddAttackRanged.addEventListener("click", function() {
      _render_clone(1, "attack-ranged");
      _updateCloneAttackRanged();
      _smoothScrollToClones("#offense-attacks");
      sheet.storeCharacters();
      if (_getCloneCount("attack-ranged") <= 99) {
        snack.render("Ranged attack added.", false, false);
      };
    }, false);
    cloneRemoveAttack.addEventListener("click", function() {
      _changeCloneState("attack");
    }, false);
  };

  function _render_clone(numberOfClones, cloneType) {
    var cloneBlock;
    var cloneTarget;
    if (cloneType == "attack-melee") {
      cloneBlock = helper.e(".js-clone-block-attack");
      cloneTarget = cloneBlock.querySelector(".js-clone-block-target-attack-melee");
    };
    if (cloneType == "attack-ranged") {
      cloneBlock = helper.e(".js-clone-block-attack");
      cloneTarget = cloneBlock.querySelector(".js-clone-block-target-attack-ranged");
    };
    if (cloneType == "consumable") {
      cloneBlock = helper.e(".js-clone-block-consumable");
      cloneTarget = cloneBlock.querySelector(".js-clone-block-target-consumable");
    };
    for (var i = 0; i < numberOfClones; i++) {
      var cloneCount = cloneTarget.querySelectorAll(".js-clone").length;
      var cloneString;
      var index = i;
      // make new clone node
      var newNode = document.createElement("div");
      newNode.setAttribute("class", "m-clone js-clone");
      // newNode.setAttribute("data-attack-type", cloneType);
      // check if adding new node or adding to clone target with already existing clones
      if (index < cloneCount) {
        index = cloneCount;
      };
      if (cloneType == "consumable") {
        cloneString = _newConsumable(index);
      };
      if (cloneType == "attack-melee") {
        cloneString = _newAttackMelee(index);
      };
      if (cloneType == "attack-ranged") {
        cloneString = _newAttackRanged(index);
      };
      // add content
      newNode.innerHTML = cloneString;
      // max of 100 clones
      if (cloneCount <= 99) {
        // append new clone
        cloneTarget.appendChild(newNode);
        // bind listeners
        if (cloneType == "consumable") {
          _bind_cloneConsumableInput(newNode.querySelectorAll(".js-input-block"));
        };
        if (cloneType == "attack-melee") {
          _bind_cloneAttackMeleeInput(newNode.querySelectorAll(".js-input-block"));
        };
        if (cloneType == "attack-ranged") {
          _bind_cloneAttackRangedInput(newNode.querySelectorAll(".js-input-block"));
        };
        _bind_cloneRemoveButton(newNode.querySelector(".js-clone-block-delete"), cloneType);
      };
    };
  };

  function _update_cloneInput(array, cloneType) {
    var cloneBlock;
    var cloneTarget;
    if (cloneType == "attack-melee") {
      cloneBlock = helper.e(".js-clone-block-attack");
      cloneTarget = cloneBlock.querySelector(".js-clone-block-target-attack-melee");
    };
    if (cloneType == "attack-ranged") {
      cloneBlock = helper.e(".js-clone-block-attack");
      cloneTarget = cloneBlock.querySelector(".js-clone-block-target-attack-ranged");
    };
    if (cloneType == "consumable") {
      cloneBlock = helper.e(".js-clone-block-consumable");
      cloneTarget = cloneBlock.querySelector(".js-clone-block-target-consumable");
    };
    for (var i = 0; i < array.length; i++) {
      for (var j in array[i]) {
        var input;
        if (cloneType == "consumable") {
          input = cloneTarget.querySelector("#consumable-" + j.replace(/_/g, "-") + "-" + i);
        };
        if (cloneType == "attack-melee") {
          input = cloneTarget.querySelector("#attack-melee-" + j.replace(/_/g, "-") + "-" + i);
        };
        if (cloneType == "attack-ranged") {
          input = cloneTarget.querySelector("#attack-ranged-" + j.replace(/_/g, "-") + "-" + i);
        };
        if (input) {
          input.value = array[i][j];
          inputBlock.update(input);
        };
      };
      totalBlock.update();
    };
  };

  function _getCloneCount(cloneType) {
    var cloneBlock;
    var cloneTarget;
    var cloneCount;
    if (cloneType == "attack-melee") {
      cloneBlock = helper.e(".js-clone-block-attack");
      cloneTarget = cloneBlock.querySelector(".js-clone-block-target-attack-melee");
      cloneCount = cloneTarget.querySelectorAll(".js-clone").length;
    };
    if (cloneType == "attack-melee" || cloneType == "attack-ranged") {
      cloneBlock = helper.e(".js-clone-block-attack");
      cloneTarget = cloneBlock.querySelector(".js-clone-block-target-attack-ranged");
      cloneCount = cloneTarget.querySelectorAll(".js-clone").length;
    };
    if (cloneType == "consumable") {
      cloneBlock = helper.e(".js-clone-block-consumable");
      cloneTarget = cloneBlock.querySelector(".js-clone-block-target-consumable");
      cloneCount = cloneTarget.querySelectorAll(".js-clone").length;
    };
    return cloneCount;
  };

  function _checkCloneState(cloneType) {
    var cloneBlock;
    var cloneTarget;
    if (cloneType == "attack-melee") {
      cloneBlock = helper.e(".js-clone-block-attack");
      cloneTarget = cloneBlock.querySelector(".js-clone-block-target-attack-melee");
    };
    if (cloneType == "attack-ranged") {
      cloneBlock = helper.e(".js-clone-block-attack");
      cloneTarget = cloneBlock.querySelector(".js-clone-block-target-attack-ranged");
    };
    if (cloneType == "consumable") {
      cloneBlock = helper.e(".js-clone-block-consumable");
      cloneTarget = cloneBlock.querySelector(".js-clone-block-target-consumable");
    };
    var cloneCount = cloneBlock.querySelectorAll(".js-clone");
    var cloneControls = cloneBlock.querySelector(".js-clone-controls");
    var cloneRemoveButton = cloneControls.querySelector(".js-clone-remove");
    if (cloneCount.length == 0) {
      cloneBlock.dataset.deleteCloneState = "false";
      helper.removeClass(cloneBlock, "is-delete-state");
      helper.removeClass(cloneRemoveButton, "is-active");
    };
  };

  function _bind_cloneRemoveButton(button, cloneType) {
    button.addEventListener("click", function() {
      _destroy_clone(this, cloneType);
      _updateCloneAttackMelee();
      _updateCloneAttackRanged();
      _updateCloneConsumable();
      sheet.storeCharacters();
      if (cloneType == "consumable") {
        _checkCloneState("consumable");
        snack.render("Consumable removed.", false, false);
      };
      if (cloneType == "attack-melee") {
        _checkCloneState("attack-melee");
        snack.render("Melee attack removed.", false, false);
      };
      if (cloneType == "attack-ranged") {
        _checkCloneState("attack-ranged");
        snack.render("Ranged attack removed.", false, false);
      };
    }, false);
  };

  var storeInputTimer = null;
  var storeBlurTimer = null;

  function delayUpdate(type) {
    if (type == "attack-melee") {
      _updateCloneAttackMelee();
    };
    if (type == "attack-ranged") {
      _updateCloneAttackRanged();
    };
    if (type == "consumable") {
      _updateCloneConsumable();
    };
    totalBlock.update();
    sheet.storeCharacters();
    if (body.dataset.displayMode == "true") {
      display.clear();
      display.render();
    };
  };

  function _bind_cloneAttackMeleeInput(array) {
    for (var i = 0; i < array.length; i++) {
      var input = array[i].querySelector(".js-input-block-field");
      input.addEventListener("input", function() {
        clearTimeout(storeInputTimer);
        storeInputTimer = setTimeout(delayUpdate, 1000, "attack-melee");
      }, false);
      input.addEventListener("focus", function() {
        inputBlock.focus(this);
      }, false);
      input.addEventListener("blur", function() {
        clearTimeout(storeInputTimer);
        storeBlurTimer = setTimeout(delayUpdate, 1000, "attack-melee");
        inputBlock.focus(this);
      }, false);
    };
  };

  function _bind_cloneAttackRangedInput(array) {
    for (var i = 0; i < array.length; i++) {
      var input = array[i].querySelector(".js-input-block-field");
      input.addEventListener("input", function() {
        clearTimeout(storeInputTimer);
        storeInputTimer = setTimeout(delayUpdate, 1000, "attack-ranged");
      }, false);
      input.addEventListener("focus", function() {
        inputBlock.focus(this);
      }, false);
      input.addEventListener("blur", function() {
        clearTimeout(storeInputTimer);
        storeBlurTimer = setTimeout(delayUpdate, 1000, "attack-ranged");
        inputBlock.focus(this);
      }, false);
    };
  };

  function _bind_cloneConsumableInput(array) {
    for (var i = 0; i < array.length; i++) {
      var input = array[i].querySelector(".js-input-block-field");
      if (input.classList.contains("js-clone-consumable-used") || input.classList.contains("js-clone-consumable-total")) {
        input.addEventListener("input", function() {
          _minMaxCountLimit(this);
        }, false);
      };
      input.addEventListener("input", function() {
        clearTimeout(storeInputTimer);
        storeInputTimer = setTimeout(delayUpdate, 1000, "consumable");
      }, false);
      input.addEventListener("focus", function() {
        inputBlock.focus(this);
      }, false);
      input.addEventListener("blur", function() {
        clearTimeout(storeInputTimer);
        storeInputTimer = setTimeout(delayUpdate, 1000, "consumable");
        inputBlock.focus(this);
      }, false);
    };
  };

  function _changeCloneState(cloneType) {
    var cloneBlock = helper.e(".js-clone-block-" + cloneType);
    var cloneControls = cloneBlock.querySelector(".js-clone-controls");
    var cloneRemoveButton = cloneControls.querySelector(".js-clone-remove");
    var cloneCount = cloneBlock.querySelectorAll(".js-clone").length;
    // change clone remove button
    helper.toggleClass(cloneRemoveButton, "is-active");
    // change clone block state
    if (cloneBlock.dataset.deleteCloneState == "true") {
      helper.removeClass(cloneBlock, "is-delete-state");
      cloneBlock.dataset.deleteCloneState = "false";
    } else if (cloneBlock.dataset.deleteCloneState == "false") {
      helper.addClass(cloneBlock, "is-delete-state");
      cloneBlock.dataset.deleteCloneState = "true";
    };
    // if clone count us 0 remove restore all classes to normal
    if (cloneCount == 0) {
      helper.removeClass(cloneBlock, "is-delete-state");
      cloneBlock.dataset.deleteCloneState = "false";
      helper.removeClass(cloneRemoveButton, "is-active");
    };
  };

  function _destroy_clone(element) {
    var cloneToRemove = helper.getClosest(element, ".js-clone");
    cloneToRemove.remove();
  };

  function _createAttackMeleeObject(weapon, attack, damage, critical) {
    return {
      weapon: this.weapon = weapon,
      attack: this.attack = attack,
      damage: this.damage = damage,
      critical: this.critical = critical
    };
  };

  function _createAttackRangedObject(weapon, attack, damage, critical, range, ammo) {
    return {
      weapon: this.weapon = weapon,
      attack: this.attack = attack,
      damage: this.damage = damage,
      critical: this.critical = critical,
      range: this.range = range,
      ammo: this.ammo = ammo,
    };
  };

  function _createConsumableObject(item, current, total, used) {
    return {
      item: this.item = item,
      current: this.current = current,
      total: this.total = total,
      used: this.used = used
    };
  };

  function _updateCloneAttackMelee() {
    var cloneTarget = helper.e(".js-clone-block-target-attack-melee");
    var all_clone = cloneTarget.querySelectorAll(".js-clone");
    var cloneAttack = [];
    for (var i = 0; i < all_clone.length; i++) {
      var weapon = all_clone[i].querySelector(".js-clone-attack-melee-weapon").value || "";
      var attack = all_clone[i].querySelector(".js-clone-attack-melee-attack").value || "";
      var damage = all_clone[i].querySelector(".js-clone-attack-melee-damage").value || "";
      var critical = all_clone[i].querySelector(".js-clone-attack-melee-critical").value || "";
      var newAttackMelee = new _createAttackMeleeObject(weapon, attack, damage, critical);
      cloneAttack.push(newAttackMelee);
    };
    sheet.getCharacter().offense.attack.melee = cloneAttack;
  };

  function _updateCloneAttackRanged() {
    var cloneTarget = helper.e(".js-clone-block-target-attack-ranged");
    var all_clone = cloneTarget.querySelectorAll(".js-clone");
    var cloneAttack = [];
    for (var i = 0; i < all_clone.length; i++) {
      var weapon = all_clone[i].querySelector(".js-clone-attack-ranged-weapon").value || "";
      var attack = all_clone[i].querySelector(".js-clone-attack-ranged-attack").value || "";
      var damage = all_clone[i].querySelector(".js-clone-attack-ranged-damage").value || "";
      var critical = all_clone[i].querySelector(".js-clone-attack-ranged-critical").value || "";
      var range = all_clone[i].querySelector(".js-clone-attack-ranged-range").value || "";
      var ammo = all_clone[i].querySelector(".js-clone-attack-ranged-ammo").value || "";
      var newAttackRanged = new _createAttackRangedObject(weapon, attack, damage, critical, range, ammo);
      cloneAttack.push(newAttackRanged);
    };
    sheet.getCharacter().offense.attack.ranged = cloneAttack;
  };

  function _updateCloneConsumable() {
    var cloneTarget = helper.e(".js-clone-block-target-consumable");
    var all_clone = cloneTarget.querySelectorAll(".js-clone");
    var cloneConsumable = [];
    for (var i = 0; i < all_clone.length; i++) {
      var item = all_clone[i].querySelector(".js-clone-consumable-item").value || "";
      var current = all_clone[i].querySelector(".js-clone-consumable-current").innerHTML || "";
      var total = all_clone[i].querySelector(".js-clone-consumable-total").value || "";
      var used = all_clone[i].querySelector(".js-clone-consumable-used").value || "";
      var newConsumable = new _createConsumableObject(item, current, total, used);
      cloneConsumable.push(newConsumable);
    };
    sheet.getCharacter().equipment.consumable = cloneConsumable;
  };

  function clear() {
    // console.log("--- clone clear fired ---");
    // not sure why clear is firing twice on character change, must investigate 
    var all_cloneTarget = helper.eA(".js-clone-block-target");
    for (var i = 0; i < all_cloneTarget.length; i++) {
      // console.log("\t for running on " + all_cloneTarget[i].classList[2]);
      while (all_cloneTarget[i].lastChild) {
        all_cloneTarget[i].removeChild(all_cloneTarget[i].lastChild);
      };
    };
  };

  // exposed methods
  return {
    bind: bind,
    clear: clear,
    render: render
  };

})();

var display = (function() {

  function bind() {
    _bind_fab();
    _bind_quickEdit();
    _bind_quickControl();
  };

  function _bind_fab() {
    var fabButton = helper.e(".js-fab-button");
    fabButton.addEventListener("click", toggle, false);
  };

  function _bind_quickEdit() {
    var displayBlockQuickEdit = helper.eA(".js-display-block-quick-edit");
    for (var i = 0; i < displayBlockQuickEdit.length; i++) {
      displayBlockQuickEdit[i].addEventListener("click", function(event) {
        event.stopPropagation();
        event.preventDefault();
        _toggle_quickEdit(this);
        totalBlock.update();
        clear();
        render();
      }, false);
    };
  };

  function _bind_quickControl() {
    var displayBlockQuickControlItem = helper.eA(".js-display-block-quick-control-item");
    for (var i = 0; i < displayBlockQuickControlItem.length; i++) {
      displayBlockQuickControlItem[i].addEventListener("click", function(event) {
        event.stopPropagation();
        event.preventDefault();
        _quickConctrolAction(this);
        totalBlock.update();
        clear();
        render();
      }, false);
    };
  };

  function _quickConctrolAction(element) {
    var controlAction = element.dataset.displayControl;
    var path = element.dataset.path;
    var target = helper.e("#" + element.dataset.editTarget);
    var content = parseInt(helper.getObject(sheet.getCharacter(), path), 10) || 0;
    // console.log("content is:", content, "object is:", sheet.getCharacter().defense.hp);
    // if (path == "defense.hp.damage") {
    //   if (helper.getObject(sheet.getCharacter(), "defense.hp.temp")) {
    //     console.log("temp hp found");
    //   };
    // };
    if (controlAction == "addition") {
      content = content + 1;
    };
    if (controlAction == "subtract") {
      content = content - 1;
    };
    if (controlAction == "addition-5") {
      content = content + 5;
    };
    if (controlAction == "subtract-5") {
      content = content - 5;
    };
    if (controlAction == "clear") {
      content = "";
    };
    if (content == "0") {
      target.value = "";
      _store(element, "");
    } else {
      target.value = content;
      _store(element, content);
    };
    inputBlock.update(target);
  };

  function _store(element, value) {
    var path = element.dataset.path;
    helper.setObject(sheet.getCharacter(), path, value);
    sheet.storeCharacters();
  };

  function _toggle_quickEdit(element) {
    var body = helper.e("body");
    var node = helper.e(".js-" + element.dataset.miniView);
    var all_sectionEdit = helper.eA(".js-section-edit");
    helper.toggleClass(node, "is-collapsed");
    helper.toggleClass(node, "is-expanded");
    helper.toggleClass(node, "js-is-expanded");
    helper.removeClass(body, "is-quick-edit-open");
    for (var i = 0; i < all_sectionEdit.length; i++) {
      if (all_sectionEdit[i].classList.contains("js-is-expanded")) {
        helper.addClass(body, "is-quick-edit-open");
      };
    };
  };

  var scrollTopEdit = 0;
  var scrollTopDisplay = 0;

  function toggle() {
    var body = helper.e("body");
    var fabIcon = helper.e(".js-fab-icon");
    var quickNav = helper.e(".js-quick-nav");
    var hamburger = helper.e(".js-hamburger");
    var all_quickNavLink = helper.eA(".js-quick-nav-link");
    var all_sectionEdit = helper.eA(".js-section-edit");
    var all_sectionDisplay = helper.eA(".js-section-display");

    function _displayOn() {
      // record scroll top var
      scrollTopEdit = window.scrollY;
      helper.addClass(body, "is-display-mode");
      // iterate over all quick nav links and hide
      for (var i = 0; i < all_quickNavLink.length; i++) {
        helper.addClass(all_quickNavLink[i], "is-invisible");
      };
      // iterate over all edit secrions
      for (var i = 0; i < all_sectionEdit.length; i++) {
        // if edit section is basics
        if (all_sectionEdit[i].classList.contains("js-basics")) {
          // remove dark class
          helper.removeClass(all_sectionEdit[i], "l-section-dark");
          // find all input blocks
          var all_inputBlock = all_sectionEdit[i].querySelectorAll(".js-input-block");
          // iterate over all input blocks
          for (var j = 0; j < all_inputBlock.length; j++) {
            // fine label and input for this input block
            var label = all_inputBlock[j].querySelector(".js-input-block-label");
            var input = all_inputBlock[j].querySelector(".js-input-block-field");
            // remove dark class
            helper.removeClass(label, "m-input-block-label-dark");
            helper.removeClass(input, "m-input-block-field-dark");
          };
        };
        // remove any inline styles
        all_sectionEdit[i].removeAttribute("style");
        // collapse section
        helper.addClass(all_sectionEdit[i], "is-collapsed");
        // add edit class to section
        helper.addClass(all_sectionEdit[i], "m-quick-edit");
        // remove any pinned header classes
        helper.removeClass(all_sectionEdit[i], "is-pinned");
        // remove any previously expanded section classes
        helper.removeClass(all_sectionEdit[i], "is-expanded");
        helper.removeClass(all_sectionEdit[i], "js-is-expanded");
        // find all section headings
        var sectionHeading = all_sectionEdit[i].querySelector(".js-section-heading");
        // if section heading found
        if (sectionHeading) {
          // remove any pinned header classes
          helper.removeClass(sectionHeading, "is-pinned");
          helper.removeClass(sectionHeading, "is-faded");
          // find section heading title
          var sectionHeadingTitle = sectionHeading.querySelector(".js-section-title");
          // find section controls
          var sectionHeadingControls = sectionHeading.querySelector(".js-section-controls");
          // if section controls not found
          if (!sectionHeadingControls) {
            // hide section heading
            helper.addClass(sectionHeading, "is-hidden");
          };
          // if section controls found
          if (sectionHeadingControls) {
            // make it full width
            helper.removeClass(sectionHeadingControls.parentNode, "col-xs-10");
            helper.addClass(sectionHeadingControls.parentNode, "col-xs-12");
          };
          // if section heading title found
          if (sectionHeadingTitle) {
            // hide section heading
            helper.addClass(sectionHeadingTitle.parentNode, "is-hidden");
          };
        };
      };
      // iterate over all display sections
      for (var i = 0; i < all_sectionDisplay.length; i++) {
        // make them visable
        helper.removeClass(all_sectionDisplay[i], "is-hidden");
      };
      // change fab icon
      helper.addClass(fabIcon, "icon-edit");
      helper.removeClass(fabIcon, "icon-reader-mode");
      // scroll to
      window.scrollTo(0, scrollTopDisplay);
      // if body is in display state
    };

    function _displayOff() {
      // record scroll top var
      scrollTopDisplay = window.scrollY;
      helper.removeClass(body, "is-display-mode");
      // remove quick edit open state from body
      helper.removeClass(body, "is-quick-edit-open");
      // iterate over quick nav links
      for (var i = 0; i < all_quickNavLink.length; i++) {
        // make visable
        helper.removeClass(all_quickNavLink[i], "is-invisible");
      };
      // iterate over all edit secrions
      for (var i = 0; i < all_sectionEdit.length; i++) {
        // if edit section is basics
        if (all_sectionEdit[i].classList.contains("js-basics")) {
          // remove dark class
          helper.addClass(all_sectionEdit[i], "l-section-dark");
          // find all input blocks
          var all_inputBlock = all_sectionEdit[i].querySelectorAll(".js-input-block");
          // iterate over all input blocks
          for (var j = 0; j < all_inputBlock.length; j++) {
            // fine label and input for this input block
            var label = all_inputBlock[j].querySelector(".js-input-block-label");
            var input = all_inputBlock[j].querySelector(".js-input-block-field");
            // remove dark class
            helper.addClass(label, "m-input-block-label-dark");
            helper.addClass(input, "m-input-block-field-dark");
          };
        };
        // expand section
        helper.removeClass(all_sectionEdit[i], "is-collapsed");
        // remove edit class to section
        helper.removeClass(all_sectionEdit[i], "m-quick-edit");
        // remove any previously expanded section classes
        helper.removeClass(all_sectionEdit[i], "is-expanded");
        helper.removeClass(all_sectionEdit[i], "js-is-expanded");
        // find all section headings
        var sectionHeading = all_sectionEdit[i].querySelector(".js-section-heading");
        // if section heading found
        if (sectionHeading) {
          // find section heading title
          var sectionHeadingTitle = sectionHeading.querySelector(".js-section-title");
          // find section controls
          var sectionHeadingControls = sectionHeading.querySelector(".js-section-controls");
          // section heading controls not found
          if (!sectionHeadingControls) {
            // unhide section heading
            helper.removeClass(sectionHeading, "is-hidden");
          };
          // if section heading controls found
          if (sectionHeadingControls) {
            // make 10 cols
            helper.addClass(sectionHeadingControls.parentNode, "col-xs-10");
            helper.removeClass(sectionHeadingControls.parentNode, "col-xs-12");
          };
          // if section heading title found
          if (sectionHeadingTitle) {
            // iunhide it
            helper.removeClass(sectionHeadingTitle.parentNode, "is-hidden");
          };
        };
      };
      // iterate over all display sections
      for (var i = 0; i < all_sectionDisplay.length; i++) {
        // hide display section
        helper.addClass(all_sectionDisplay[i], "is-hidden");
      };
      // change fab icon
      helper.removeClass(fabIcon, "icon-edit");
      helper.addClass(fabIcon, "icon-reader-mode");
      // resize last section
      nav.lastSectionHeight();
      // scroll to
      window.scrollTo(0, scrollTopEdit);
    };

    if (body.dataset.displayMode == "true") {
      body.dataset.displayMode = "false";
      _displayOff();
    } else if (body.dataset.displayMode == "false" || !body.dataset.displayMode) {
      body.dataset.displayMode = "true";
      _displayOn();
    };

    totalBlock.update();
    clear();
    render();
  };

  function clear() {
    var all_displayItem = helper.eA(".js-display-block");
    var displaySpell = helper.e(".js-display-block-spell").querySelector(".js-display-block-target");
    var displaySkills = helper.e(".js-display-block-skills").querySelector(".js-display-block-target");
    var displayAttack = helper.e(".js-display-block-attack").querySelector(".js-display-block-target");
    var displayConsumable = helper.e(".js-display-block-consumable").querySelector(".js-display-block-target");

    function _removeAllChildren(parent) {
      while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
      };
    };

    for (var i = 0; i < all_displayItem.length; i++) {
      var target = all_displayItem[i].querySelector(".js-display-block-target");
      _removeAllChildren(target);
    };

    _removeAllChildren(displaySpell);
    _removeAllChildren(displaySkills);
    _removeAllChildren(displayAttack);
    _removeAllChildren(displayConsumable);
  };

  function render() {

    function _displayItem() {
      var all_displayBlock = helper.eA(".js-display-block");
      for (var i = 0; i < all_displayBlock.length; i++) {
        var target = all_displayBlock[i].querySelector(".js-display-block-target");
        if (all_displayBlock[i].dataset.display) {
          var itemsToDisplay = all_displayBlock[i].dataset.display.split(',');
        };
        for (var j = 0; j < itemsToDisplay.length; j++) {
          var path = itemsToDisplay[j];
          var data = helper.getObject(sheet.getCharacter(), path);

          var makeDisplayItem = function(addressToCompare, beforeString, afterString) {
            if (typeof data != "undefined" && data != "" && itemsToDisplay[j] == addressToCompare) {
              data = beforeString + data + afterString;
              return data;
            } else {
              return data;
            };
          };

          var hp = function(addressToCompare) {
            if (typeof data != "undefined" && data != "" && itemsToDisplay[j] == addressToCompare || data == 0 && itemsToDisplay[j] == addressToCompare) {
              data = "<strong>HP " + data + "</strong> / " + helper.getObject(sheet.getCharacter(), "defense.hp.total");
              return data;
            };
          };

          var customSkillName = function(data) {
            if (typeof data != "undefined" && data != "") {
              return data;
            } else {
              return "Custom skill";
            };
          };

          var skillVariantName = function(data) {
            if (typeof data != "undefined" && data != "") {
              return " (" + data + ") ";
            } else {
              return "";
            };
          };

          makeDisplayItem("basics.speed", "Speed ", "");
          makeDisplayItem("basics.initiative", "Initiative ", "");
          makeDisplayItem("basics.xp", "", " xp");
          makeDisplayItem("basics.age", "", " years old");
          makeDisplayItem("basics.hero_points", "", " hero point");
          makeDisplayItem("basics.luck_points", "", " luck point");

          makeDisplayItem("statistics.stats.str.score", "<strong>Str</strong> ", "");
          makeDisplayItem("statistics.stats.str.temp", "<strong>Str temp</strong> ", "");
          makeDisplayItem("statistics.stats.dex.score", "<strong>Dex</strong> ", "");
          makeDisplayItem("statistics.stats.dex.temp", "<strong>Dex temp</strong> ", "");
          makeDisplayItem("statistics.stats.con.score", "<strong>Con</strong> ", "");
          makeDisplayItem("statistics.stats.con.temp", "<strong>Con temp</strong> ", "");
          makeDisplayItem("statistics.stats.int.score", "<strong>Int</strong> ", "");
          makeDisplayItem("statistics.stats.int.temp", "<strong>Int temp</strong> ", "");
          makeDisplayItem("statistics.stats.wis.score", "<strong>Wis</strong> ", "");
          makeDisplayItem("statistics.stats.wis.temp", "<strong>Wis temp</strong> ", "");
          makeDisplayItem("statistics.stats.cha.score", "<strong>Cha</strong> ", "");
          makeDisplayItem("statistics.stats.cha.temp", "<strong>Cha temp</strong> ", "");
          makeDisplayItem("statistics.feats", "<strong>Feats</strong> ", "");
          makeDisplayItem("statistics.traits", "<strong>Traits</strong> ", "");
          makeDisplayItem("statistics.special_abilities", "<strong>Special Abilities</strong> ", "");
          makeDisplayItem("statistics.languages", "<strong>Languages</strong> ", "");

          makeDisplayItem("equipment.gear", "<strong>Gear</strong> ", "");
          makeDisplayItem("equipment.magic_gear", "<strong>Magic Gear</strong> ", "");
          makeDisplayItem("equipment.body_slots.armor", "<strong>Armor</strong> ", "");
          makeDisplayItem("equipment.body_slots.belts", "<strong>Belts</strong> ", "");
          makeDisplayItem("equipment.body_slots.body", "<strong>Body</strong> ", "");
          makeDisplayItem("equipment.body_slots.chest", "<strong>Chest</strong> ", "");
          makeDisplayItem("equipment.body_slots.eyes", "<strong>Eyes</strong> ", "");
          makeDisplayItem("equipment.body_slots.feet", "<strong>Feet</strong> ", "");
          makeDisplayItem("equipment.body_slots.hands", "<strong>Hands</strong> ", "");
          makeDisplayItem("equipment.body_slots.head", "<strong>Head</strong> ", "");
          makeDisplayItem("equipment.body_slots.headband", "<strong>Headband</strong> ", "");
          makeDisplayItem("equipment.body_slots.neck", "<strong>Neck</strong> ", "");
          makeDisplayItem("equipment.body_slots.ring_left_hand", "<strong>Ring (Left Hand)</strong> ", "");
          makeDisplayItem("equipment.body_slots.ring_right_hand", "<strong>Ring (Right Hand)</strong> ", "");
          makeDisplayItem("equipment.body_slots.shield", "<strong>Shield</strong> ", "");
          makeDisplayItem("equipment.body_slots.shoulders", "<strong>Shoulders</strong> ", "");
          makeDisplayItem("equipment.body_slots.wrist", "<strong>Wrist</strong> ", "");
          makeDisplayItem("equipment.wealth.platinum", "<strong>PP</strong> ", "");
          makeDisplayItem("equipment.wealth.gold", "<strong>GP</strong> ", "");
          makeDisplayItem("equipment.wealth.silver", "<strong>SP</strong> ", "");
          makeDisplayItem("equipment.wealth.copper", "<strong>CP</strong> ", "");

          hp("defense.hp.current");
          makeDisplayItem("defense.hp.temp", "", "");
          makeDisplayItem("defense.hp.non_lethal_damage", "<strong>Nonlethal Damage</strong> ", "");
          makeDisplayItem("defense.ac.current", "<strong>AC</strong> ", "");
          makeDisplayItem("defense.ac_notes", "<strong>Notes</strong> ", "");
          makeDisplayItem("defense.flat_footed.current", "<strong>Flat Footed</strong> ", "");
          makeDisplayItem("defense.touch.current", "<strong>Touch</strong> ", "");
          makeDisplayItem("defense.fortitude.current", "<strong>Fortitude</strong> ", "");
          makeDisplayItem("defense.reflex.current", "<strong>Reflex</strong> ", "");
          makeDisplayItem("defense.will.current", "<strong>Will</strong> ", "");
          makeDisplayItem("defense.save_notes", "<strong>Notes</strong> ", "");

          makeDisplayItem("offense.base_attack", "<strong>BAB</strong> ", "");
          makeDisplayItem("offense.concentration", "<strong>Concentration</strong> ", "");
          makeDisplayItem("offense.cmb.current", "<strong>CMB</strong> ", "");
          makeDisplayItem("offense.cmd.current", "<strong>CMD</strong> ", "");
          makeDisplayItem("offense.melee_attack.current", "<strong>Melee</strong> ", "");
          makeDisplayItem("offense.ranged_attack.current", "<strong>Ranged</strong> ", "");
          makeDisplayItem("offense.attack_notes", "<strong>Notes</strong> ", "");

          makeDisplayItem("notes.character", "", "");
          makeDisplayItem("notes.story", "", "");

          if (typeof data != "undefined" && data != "") {
            var text = document.createElement("span");
            text.setAttribute("class", "m-display-item");
            text.innerHTML = data;
            target.appendChild(text);
          };
        };
      };
    };

    function _makeSkillName(key) {
      if (key == "acrobatics") {
        return "Acrobatics";
      };
      if (key == "appraise") {
        return "Appraise";
      };
      if (key == "bluff") {
        return "Bluff";
      };
      if (key == "climb") {
        return "Climb";
      };
      if (key == "craft_1" || key == "craft_2") {
        return "Craft";
      };
      if (key == "diplomacy") {
        return "Diplomacy";
      };
      if (key == "disable_device") {
        return "Disable Device";
      };
      if (key == "disguise") {
        return "Disguise";
      };
      if (key == "escape_artist") {
        return "Escape Artist";
      };
      if (key == "fly") {
        return "Fly";
      };
      if (key == "handle_animal") {
        return "Handle Animal";
      };
      if (key == "heal") {
        return "Heal";
      };
      if (key == "intimidate") {
        return "Intimidate";
      };
      if (key == "knowledge_arcana") {
        return "Knowledge Arcana";
      };
      if (key == "knowledge_dungeoneering") {
        return "Knowledge (Dungeoneering)";
      };
      if (key == "knowledge_engineering") {
        return "Knowledge (Engineering)";
      };
      if (key == "knowledge_geography") {
        return "Knowledge (Geography)";
      };
      if (key == "knowledge_history") {
        return "Knowledge (History)";
      };
      if (key == "knowledge_local") {
        return "Knowledge (Local)";
      };
      if (key == "knowledge_nature") {
        return "Knowledge (Nature)";
      };
      if (key == "knowledge_nobility") {
        return "Knowledge (Nobility)";
      };
      if (key == "knowledge_planes") {
        return "Knowledge (Planes)";
      };
      if (key == "knowledge_religion") {
        return "Knowledge (Religion)";
      };
      if (key == "linguistics") {
        return "Linguistics";
      };
      if (key == "perception") {
        return "Perception";
      };
      if (key == "perform_1" || key == "perform_2") {
        return "Perform";
      };
      if (key == "profession_1" || key == "profession_2") {
        return "Profession";
      };
      if (key == "ride") {
        return "Ride";
      };
      if (key == "sense_motive") {
        return "Sense Motive";
      };
      if (key == "sleight_of_hand") {
        return "Sleight Of Hand";
      };
      if (key == "spellcraft") {
        return "Spellcraft";
      };
      if (key == "stealth") {
        return "Stealth";
      };
      if (key == "survival") {
        return "Survival";
      };
      if (key == "swim") {
        return "Swim";
      };
      if (key == "use_magic_device") {
        return "Use Magic Device";
      };
      if (key == "custom_1" || key == "custom_2" || key == "custom_3" || key == "custom_4" || key == "custom_5" || key == "custom_6" || key == "custom_7" || key == "custom_8") {
        return "Custom Skill";
      };
    };

    function _createSkillSpan(data) {
      var span = document.createElement("span");
      span.setAttribute("class", "m-display-skills js-display-skills");
      span.innerHTML = data;
      return span;
    };

    function _displaySkills() {
      var displayBlockSkills = helper.e(".js-display-block-skills").querySelector(".js-display-block-target");
      var para = document.createElement("p");
      para.setAttribute("class", "m-display-block");
      var all_skills = sheet.getCharacter().skills;
      for (var key in all_skills) {
        // filter out keys which are not a skill
        if (key != "spent_ranks") {
          var data;
          if (all_skills[key].ranks != "") {
            if (all_skills[key].name) {
              data = all_skills[key].name + " <strong>" + all_skills[key].current + "</strong>";
              para.appendChild(_createSkillSpan(data));
            } else if (all_skills[key].variant_name) {
              data = _makeSkillName(key) + " (" + all_skills[key].variant_name + ") <strong>" + all_skills[key].current + "</strong>";
              para.appendChild(_createSkillSpan(data));
            } else if (!all_skills[key].name || all_skills[key].variant_name) {
              data = _makeSkillName(key) + " <strong>" + all_skills[key].current + "</strong>";
              para.appendChild(_createSkillSpan(data));
            };
          };
        };
      };
      displayBlockSkills.appendChild(para);
    };

    function _displaySpell() {
      // build an array of spell objects
      var spellsToRender;
      // iterate over all objects keys to find spells
      if (sheet.getCharacter().spells.book) {
        for (var i in sheet.getCharacter().spells.book) {
          for (var j in sheet.getCharacter().spells.book[i]) {
            spellsToRender = sheet.getCharacter().spells.book[i][j];
            _render_displaySpell(spellsToRender, i);
          };
        };
      };
    };

    function _displayAttackMelee() {
      var attacksToRender;
      if (sheet.getCharacter().offense.attack.melee) {
        for (var i in sheet.getCharacter().offense.attack.melee) {
          _render_displayClone("attack-melee", sheet.getCharacter().offense.attack.melee[i], helper.e(".js-display-block-attack").querySelector(".js-display-block-target"));
        };
      };
    };

    function _displayAttackRanged() {
      var attacksToRender;
      if (sheet.getCharacter().offense.attack.ranged) {
        for (var i in sheet.getCharacter().offense.attack.ranged) {
          _render_displayClone("attack-ranged", sheet.getCharacter().offense.attack.ranged[i], helper.e(".js-display-block-attack").querySelector(".js-display-block-target"));
        };
      };
    };

    function _displayConsumable() {
      var attacksToRender;
      if (sheet.getCharacter().equipment.consumable) {
        for (var i in sheet.getCharacter().equipment.consumable) {
          _render_displayClone("consumable", sheet.getCharacter().equipment.consumable[i], helper.e(".js-display-block-consumable").querySelector(".js-display-block-target"));
        };
      };
    };

    function _render_displaySpell(array, level) {
      var displaySpell = helper.e(".js-display-block-spell").querySelector(".js-display-block-target");
      // read spells and add them to spell lists
      for (var i = 0; i < array.length; i++) {
        var spellObject = array[i];
        // find spell list to add too
        var knownListToSaveTo;
        if (helper.e(".js-display-spell-level-" + level)) {
          knownListToSaveTo = helper.e(".js-display-spell-level-" + level);
        } else {
          knownListToSaveTo = document.createElement("p");
          knownListToSaveTo.setAttribute("class", "m-display-block js-display-spell-level-" + level);
          var para = document.createElement("p");
          para.setAttribute("class", "m-display-block");
          var strong = document.createElement("strong");
          strong.innerHTML = "Level " + level;
          para.appendChild(strong);
          displaySpell.appendChild(para);
          displaySpell.appendChild(knownListToSaveTo);
        };
        // make spell
        var spell = document.createElement("span");
        spell.setAttribute("class", "m-display-spell");
        var name = document.createElement("span");
        name.setAttribute("class", "m-display-spell-name");
        name.innerHTML = spellObject.name;
        spell.appendChild(name);
        // add spell marks
        if (spellObject.prepared > 0) {
          var marks = document.createElement("span");
          marks.setAttribute("class", "m-display-spell-marks js-display-spell-marks");
          spell.appendChild(marks);
          var spellMarks = spell.querySelector(".js-display-spell-marks");
          for (var j = 0; j < spellObject.prepared; j++) {
            var preparedIcon = document.createElement("span");
            preparedIcon.setAttribute("class", "icon-radio-button-checked");
            spellMarks.insertBefore(preparedIcon, spellMarks.firstChild);
          };
        };
        // cast spells if cast > 0
        if (spellObject.cast > 0) {
          var all_check = spellMarks.querySelectorAll(".icon-radio-button-checked");
          for (var j = 0; j < spellObject.cast; j++) {
            if (all_check[j]) {
              helper.toggleClass(all_check[j], "icon-radio-button-checked");
              helper.toggleClass(all_check[j], "icon-radio-button-unchecked");
              helper.toggleClass(all_check[j], "js-display-spell-mark-checked");
              helper.toggleClass(all_check[j], "js-display-spell-mark-unchecked");
            };
          };
          if (spellObject.cast >= spellObject.prepared) {
            helper.removeClass(spell, "button-primary");
          };
        };
        // if spell is active
        if (spellObject.active) {
          var active = document.createElement("span");
          active.setAttribute("class", "m-display-spell-active js-display-spell-active");
          spell.insertBefore(active, spell.firstChild);
          var spellActive = spell.querySelector(".js-display-spell-active");
          var activeIcon = document.createElement("span");
          activeIcon.setAttribute("class", "icon-play-arrow");
          if (spellObject.prepared > 0) {
            if (spellActive.children.length > 0) {
              spellActive.firstChild.remove();
            } else {
              spellActive.appendChild(activeIcon);
            };
          };
        };
        knownListToSaveTo.appendChild(spell);
      };
    };

    function _render_displayClone(cloneType, object, displayTarget) {
      var para = document.createElement("p");
      para.setAttribute("class", "m-display-block");
      for (var i in object) {

        // filter the object keys
        if (i != "used" && i != "total") {
          var data = object[i];

          var makeDisplayItem = function(addressToCompare, beforeString, afterString) {
            if (typeof data != "undefined" && data != "" && i == addressToCompare) {
              return data = beforeString + data + afterString;
            } else {
              return data;
            };
          };

          makeDisplayItem("weapon", "<strong>", "</strong>");
          makeDisplayItem("attack", "<strong>", "</strong>");
          makeDisplayItem("damage", "", "");
          makeDisplayItem("critical", "Critical ", "");
          makeDisplayItem("range", "Range ", "");
          makeDisplayItem("ammo", "Ammo ", "");
          makeDisplayItem("item", "<strong>", "</strong>");
          makeDisplayItem("current", "<strong>", "</strong>");
          makeDisplayItem("used", "Used ", "");
          makeDisplayItem("total", "Total ", "");

          var span = document.createElement("span");
          span.setAttribute("class", "m-display-item");
          span.innerHTML = data;

          if (typeof data != "undefined" && data != "") {
            para.appendChild(span);
          };
        };

      };
      displayTarget.appendChild(para);
    };

    _displayItem();
    _displaySkills();
    _displaySpell();
    _displayAttackMelee();
    _displayAttackRanged();
    _displayConsumable();

  };

  // exposed methods
  return {
    toggle: toggle,
    bind: bind,
    render: render,
    clear: clear
  };

})();

var fullscreen = (function() {

  function toggle() {
    var fullscreen = helper.e(".js-fullscreen-mode");
    var root = window.document;
    var iconFullscreen = fullscreen.querySelector(".js-icon-fullscreen");
    var rootElement = root.documentElement;
    var requestFullScreen = rootElement.requestFullscreen || rootElement.mozRequestFullScreen || rootElement.webkitRequestFullScreen || rootElement.msRequestFullscreen;
    var cancelFullScreen = root.exitFullscreen || root.mozCancelFullScreen || root.webkitExitFullscreen || root.msExitFullscreen;
    if (!root.fullscreenElement && !root.mozFullScreenElement && !root.webkitFullscreenElement && !root.msFullscreenElement) {
      requestFullScreen.call(rootElement);
      helper.toggleClass(fullscreen, "is-active");
      helper.toggleClass(iconFullscreen, "icon-fullscreen-exit");
      helper.toggleClass(iconFullscreen, "icon-fullscreen");
    } else {
      cancelFullScreen.call(root);
      helper.toggleClass(fullscreen, "is-active");
      helper.toggleClass(iconFullscreen, "icon-fullscreen-exit");
      helper.toggleClass(iconFullscreen, "icon-fullscreen");
    };
  };

  // exposed methods
  return {
    toggle: toggle
  };

})();

var hidableBlock = (function() {

  function bind() {
    var all_hidableBlock = helper.eA(".hidable-block");
    for (var i = 0; i < all_hidableBlock.length; i++) {
      var hidableToggle = all_hidableBlock[i].querySelector(".hidable-toggle");
      hidableToggle.addEventListener("click", function() {
        render(this);
      }, false);
    };
  };

  function render(element) {
    var buttonLable = element.textContent;
    var icon = element.querySelector(".icon");
    var text = element.querySelector(".text");
    var hidableBlock = helper.getClosest(element, ".hidable-block");
    var all_hidable = hidableBlock.querySelectorAll(".hidable");
    var all_hidableOnEmptyInput = hidableBlock.querySelectorAll(".hidable-on-empty-input");
    var all_hideableOnEmptyTextarea = hidableBlock.querySelectorAll(".hidable-on-empty-textarea");
    // if hide button data all hidden is true remove all hidden classes and change date hidden to false
    if (hidableBlock.dataset.allHidden == "true") {
      for (var i = 0; i < all_hidable.length; i++) {
        helper.removeClass(all_hidable[i], "hidden");
      };
      for (var i = 0; i < all_hidableOnEmptyInput.length; i++) {
        helper.removeClass(all_hidableOnEmptyInput[i], "hidden");
      };
      for (var i = 0; i < all_hideableOnEmptyTextarea.length; i++) {
        helper.removeClass(all_hideableOnEmptyTextarea[i], "hidden");
      };
      hidableBlock.dataset.allHidden = "false";
      helper.toggleClass(element, "active");
      helper.toggleClass(icon, "icon-unfold-less");
      helper.toggleClass(icon, "icon-unfold-more");
      // text.textContent = "Hide";
      // if hide button data all hidden is false loop through all hidable and hide all with empty inputs and change date hidden to true
    } else if (hidableBlock.dataset.allHidden == "false") {
      for (var i = 0; i < all_hidableOnEmptyInput.length; i++) {
        var input = all_hidableOnEmptyInput[i].querySelector(".input-field");
        if (input.value == null || input.value == "") {
          helper.addClass(all_hidableOnEmptyInput[i], "hidden");
        };
      };
      for (var i = 0; i < all_hidable.length; i++) {
        helper.addClass(all_hidable[i], "hidden");
      };
      for (var i = 0; i < all_hideableOnEmptyTextarea.length; i++) {
        var textarea = all_hideableOnEmptyTextarea[i].querySelector(".textarea-box");
        if (textarea.textContent == null || textarea.textContent == "") {
          helper.addClass(all_hideableOnEmptyTextarea[i], "hidden");
        };
      };
      hidableBlock.dataset.allHidden = "true";
      helper.toggleClass(element, "active");
      helper.toggleClass(icon, "icon-unfold-less");
      helper.toggleClass(icon, "icon-unfold-more");
      // text.textContent = "Show";
    };
  };

  // exposed methods
  return {
    render: render,
    bind: bind
  };

})();

var inputBlock = (function() {

  function _store(element) {
    var path = element.dataset.path;
    helper.setObject(sheet.getCharacter(), path, element.value);
    sheet.storeCharacters();
  };

  var storeInputTimer = null;
  var updateNavTimer = null;

  function delayUpdate(element) {
    _store(element);
    totalBlock.update();
    if (body.dataset.displayMode == "true") {
      display.clear();
      display.render();
    };
  };

  function focus(element) {
    var inputBlock = helper.getClosest(element, ".js-input-block");
    var inputBlockLabel;
    if (inputBlock.querySelector(".js-input-block-label")) {
      inputBlockLabel = inputBlock.querySelector(".js-input-block-label");
    };
    if (inputBlock.querySelector(".js-input-block-label")) {
      if (element == document.activeElement) {
        helper.addClass(inputBlockLabel, "is-active");
      } else {
        helper.removeClass(inputBlockLabel, "is-active");
      };
      if (element.value == "" && element != document.activeElement) {
        helper.removeClass(inputBlockLabel, "is-active");
      } else {
        helper.addClass(inputBlockLabel, "is-active");
      };
    };
  };

  function clear() {
    var all_inputBlock = helper.eA(".js-input-block");
    for (var i = 0; i < all_inputBlock.length; i++) {
      all_inputBlock[i].querySelector(".js-input-block-field").value = "";
      var inputBlockLabel;
      if (all_inputBlock[i].querySelector(".js-input-block-label")) {
        inputBlockLabel = all_inputBlock[i].querySelector(".js-input-block-label");
        helper.removeClass(inputBlockLabel, "is-active");
      };
    };
  };

  function update(element) {
    focus(element);
  };

  function bind() {
    _bind_inputBlock();
    _bind_awesomeName();
    _bind_class();
    _bind_level();
    // _bind_inputControls();
  };

  function _bind_inputControls() {
    var all_inputControls = helper.eA(".js-input-controls");
    for (var i = 0; i < all_inputControls.length; i++) {
      var add = all_inputControls[i].querySelector(".add");
      var minus = all_inputControls[i].querySelector(".minus");
      add.addEventListener("click", function() {
        _addOrMinusInput(this);
      }, false);
      minus.addEventListener("click", function() {
        _addOrMinusInput(this);
      }, false);
    };
  };

  function _addOrMinusInput(element) {
    var target;
    if (element.dataset.add) {
      target = helper.e("#" + element.dataset.add);
      target.value = (parseInt(target.value, 10) || 0) + 1;
    };
    if (element.dataset.minus) {
      target = helper.e("#" + element.dataset.minus);
      target.value = (parseInt(target.value, 10) || 0) - 1;
    };
    _store(target);
    update(target);
    totalBlock.update();
  };

  function _bind_inputBlock() {
    var all_inputBlock = helper.eA(".js-input-block");
    for (var i = 0; i < all_inputBlock.length; i++) {
      var input = all_inputBlock[i].querySelector(".js-input-block-field");
      if (input) {
        input.addEventListener("input", function() {
          clearTimeout(storeInputTimer);
          storeInputTimer = setTimeout(delayUpdate, 1000, this);
        }, false);
        input.addEventListener("focus", function() {
          focus(this);
        }, false);
        input.addEventListener("blur", function() {
          _store(this);
          focus(this);
        }, false);
      };
    };
  };

  function _bind_awesomeName() {
    var input = helper.e(".js-basics-name");
    input.addEventListener("input", function() {
      clearTimeout(updateNavTimer);
      updateNavTimer = setTimeout(nav.update, 1000, this);
    }, false);
  };

  function _bind_class() {
    var input = helper.e(".js-basics-class");
    input.addEventListener("input", function() {
      clearTimeout(updateNavTimer);
      updateNavTimer = setTimeout(nav.update, 1000, this);
    }, false);
  };

  function _bind_level() {
    var input = helper.e(".js-basics-level");
    input.addEventListener("input", function() {
      clearTimeout(updateNavTimer);
      updateNavTimer = setTimeout(nav.update, 1000, this);
    }, false);
  };

  function render() {
    var all_inputBlockField = helper.eA(".js-input-block-field");
    for (var i = 0; i < all_inputBlockField.length; i++) {
      var path = all_inputBlockField[i].dataset.path;
      if (path) {
        var content = helper.getObject(sheet.getCharacter(), path);
        all_inputBlockField[i].value = content;
        update(all_inputBlockField[i]);
      };
    };
  };

  // exposed methods
  return {
    update: update,
    focus: focus,
    render: render,
    clear: clear,
    bind: bind
  };

})();

var modal = (function() {

  var previousModal = null;
  var previousModalShade = null;

  function bind() {
    window.addEventListener("keydown", function(event) {
      if (event.keyCode == 27) {
        destroy();
      };
    }, false);
  };

  function destroy() {
    var modal = helper.e(".js-modal");
    var modalShade = helper.e(".js-modal-shade");
    var modalWrapper = helper.e(".js-modal-wrapper");
    if (modal) {
      getComputedStyle(modal).opacity;
      helper.removeClass(modalWrapper, "is-unrotate-in");
      helper.addClass(modalWrapper, "is-dropped-out");
      helper.removeClass(modal, "is-opaque");
      helper.addClass(modal, "is-transparent");
    };
    if (modalShade) {
      getComputedStyle(modalShade).opacity;
      helper.removeClass(modalShade, "is-opaque");
      helper.addClass(modalShade, "is-transparent");
    };
  };

  function render(heading, modalBodyContent, actionText, action) {

    prompt.destroy();
    var body = helper.e("body");

    var modalShade = document.createElement("div");
    modalShade.setAttribute("class", "m-modal-shade js-modal-shade");
    modalShade.destroy = function() {
      helper.removeClass(modalShade, "is-opaque");
      helper.addClass(modalShade, "is-transparent");
    };

    var modalWrapper = document.createElement("div");
    modalWrapper.setAttribute("class", "m-modal-wrapper js-modal-wrapper is-unrotate-out");

    var modal = document.createElement("div");
    modal.setAttribute("class", "m-modal js-modal");
    modal.destroy = function() {
      helper.removeClass(modalWrapper, "is-unrotate-in");
      helper.addClass(modalWrapper, "is-dropped-out");
      helper.removeClass(modal, "is-opaque");
      helper.addClass(modal, "is-transparent");
    };

    var modalHeading = document.createElement("h1");
    modalHeading.setAttribute("tabindex", "3");
    modalHeading.setAttribute("class", "m-modal-heading");
    modalHeading.textContent = heading;

    var modalBody = document.createElement("div");
    modalBody.setAttribute("class", "m-modal-body u-clearfix");

    var modalControls = document.createElement("div");
    modalControls.setAttribute("class", "m-modal-controls");

    var actionButton = document.createElement("a");
    actionButton.setAttribute("href", "javascript:void(0)");
    actionButton.setAttribute("tabindex", "3");
    actionButton.setAttribute("class", "button button-primary button-block button-large");
    actionButton.textContent = actionText || "Ok";

    modalControls.appendChild(actionButton);

    if (heading != false) {
      modalBody.appendChild(modalHeading);
    };

    if (modalBodyContent) {
      modalBody.appendChild(modalBodyContent);
    };

    modalWrapper.appendChild(modalBody);
    modalWrapper.appendChild(modalControls);
    modal.appendChild(modalWrapper);

    modal.addEventListener("transitionend", function(event, elapsed) {
      if (event.propertyName === "opacity" && getComputedStyle(this).opacity == 0) {
        this.parentElement.removeChild(this);
      };
    }.bind(modal), false);

    modalShade.addEventListener("transitionend", function(event, elapsed) {
      if (event.propertyName === "opacity" && getComputedStyle(this).opacity == 0) {
        this.parentElement.removeChild(this);
      };
    }.bind(modalShade), false);

    modalShade.addEventListener("click", destroy, false);
    actionButton.addEventListener("click", function(event) {
        event.stopPropagation();
        event.preventDefault();
        destroy();
      }, false);
    if (action) {
      actionButton.addEventListener("click", function(event) {
        event.stopPropagation();
        event.preventDefault();
        action();
      }, false);
    };

    if (previousModal) {
      previousModal.destroy();
    };

    if (previousModalShade) {
      previousModalShade.destroy();
    };

    previousModal = modal;
    previousModalShade = modalShade;

    body.appendChild(modalShade);
    body.appendChild(modal);

    getComputedStyle(modal).opacity;
    getComputedStyle(modalShade).opacity;
    helper.removeClass(modal, "is-transparent");
    helper.addClass(modal, "is-opaque");
    helper.removeClass(modalWrapper, "is-unrotate-out");
    helper.addClass(modalWrapper, "is-unrotate-in");
    helper.removeClass(modalShade, "is-transparent");
    helper.addClass(modalShade, "is-opaque");
    modalHeading.focus(this);

  };

  // exposed methods
  return {
    bind: bind,
    destroy: destroy,
    render: render
  };

})();

var nav = (function() {

  var previousNavShade = null;

  function _destroy_navShade() {
    var navShade = helper.e(".js-nav-shade");
    if (navShade) {
      getComputedStyle(navShade).opacity;
      helper.removeClass(navShade, "is-opaque");
      helper.addClass(navShade, "is-transparent");
    };
  };

  function _render_navShade() {

    var nav = helper.e(".js-nav");

    var navShade = document.createElement("div");
    navShade.setAttribute("class", "m-nav-shade js-nav-shade");
    navShade.destroy = function() {
      helper.removeClass(navShade, "is-opaque");
      helper.addClass(navShade, "is-transparent");
    };

    navShade.addEventListener("transitionend", function(event, elapsed) {
      if (event.propertyName === "opacity" && getComputedStyle(this).opacity == 0) {
        this.parentElement.removeChild(this);
      };
    }.bind(navShade), false);

    navShade.addEventListener("click", function() {
      navClose();
      _destroy_navShade();
    }, false);

    if (previousNavShade) {
      previousNavShade.destroy();
    };

    previousNavShade = navShade;

    body.insertBefore(navShade, nav);

    getComputedStyle(navShade).opacity;

    helper.removeClass(navShade, "is-transparent");
    helper.addClass(navShade, "is-opaque");

  };

  function _closeNavScrollToTop() {
    if (window.innerWidth < 550) {
      navClose();
      window.scrollTo(0, 0);
    };
  };

  function _bind_characterOption(characterLink) {
    var label = characterLink.querySelector(".js-nav-character-label");
    var input = characterLink.querySelector(".js-nav-character-input");
    input.addEventListener("change", function() {
      _switch_character(label);
      sheet.storeCharacters();
      smoothScroll.animateScroll(null, "#body");
    }, false);
  };

  function _switch_character(characterLink) {
    var newIndex = characterLink.dataset.characterIndex;
    sheet.setIndex(newIndex);
    sheet.clear();
    sheet.render();
    var name = sheet.getCharacter().basics.name;
    if (typeof name == "undefined" || name == "") {
      name = "New character";
    };
    snack.render(helper.truncate(name, 50, true) + " now in the game.", false);
    _closeNavScrollToTop();
  };

  function updateNavCharacters(input) {
    var inputType = input.dataset.characterNav;
    var inputValue = input.value;
    if (inputType == "name") {
      if (typeof inputValue == "undefined" || inputValue == "") {
        inputValue = "New character";
      };
      helper.e(".character-index-" + sheet.getIndex()).querySelector(".js-nav-characters-name").textContent = helper.truncate(inputValue, 30, true);
    } else if (inputType == "class") {
      if (typeof inputValue == "undefined" || inputValue == "") {
        inputValue = "Class";
      };
      helper.e(".character-index-" + sheet.getIndex()).querySelector(".js-nav-characters-class").textContent = helper.truncate(inputValue, 20, true) + " ";
    } else if (inputType == "level") {
      if (typeof inputValue == "undefined" || inputValue == "") {
        inputValue = "Level";
      };
      helper.e(".character-index-" + sheet.getIndex()).querySelector(".js-nav-characters-level").textContent = helper.truncate(inputValue, 10, false);
    };
  };

  function clear() {
    var all_navCharacters = helper.eA(".js-nav-characters");
    for (var i = 0; i < all_navCharacters.length; i++) {
      while (all_navCharacters[i].lastChild) {
        all_navCharacters[i].removeChild(all_navCharacters[i].lastChild);
      };
    };
  };

  function render() {
    _createAllCharacter();
    _render_quickNav();
    lastSectionHeight();
  };

  function lastSectionHeight() {
    var all_sectionEdit = helper.eA(".js-section-edit");
    var lastSection = all_sectionEdit[all_sectionEdit.length - 1];
    if (body.dataset.displayMode == "false" || !body.dataset.displayMode) {
      lastSection.style.minHeight = window.innerHeight + "px";
    };
  };

  function _render_quickNav() {
    var body = helper.e("body");
    window.onscroll = function() {
      if (body.dataset.displayMode == "false" || !body.dataset.displayMode) {
        var quickNav = helper.e(".js-quick-nav");
        var all_quickNavLinks = helper.eA(".js-quick-nav-link");
        var all_sectionEdit = helper.eA(".js-section-edit");
        var menu = parseInt(getComputedStyle(quickNav).height, 10);
        for (var i = 0; i < all_sectionEdit.length; i++) {
          // console.log(all_sectionEdit[i].id + " top = " + all_sectionEdit[i].getBoundingClientRect().top + "\t\t|\t\tbottom = " + all_sectionEdit[i].getBoundingClientRect().bottom);

          var sectionHeading = all_sectionEdit[i].querySelector(".js-section-heading");
          var sectionHeadingHeight = parseInt(getComputedStyle(document.querySelector(".js-section-heading")).height, 10);

          if (all_sectionEdit[i].getBoundingClientRect().bottom < (menu + sectionHeadingHeight)) {
            if (sectionHeading) {
              helper.addClass(sectionHeading, "is-faded");
              // sectionHeading.setAttribute("style", "top:" + (all_sectionEdit[i].getBoundingClientRect().bottom - sectionHeadingHeight) + "px");
            };
          } else {
            if (sectionHeading) {
              helper.removeClass(sectionHeading, "is-faded");
              // sectionHeading.removeAttribute("style");
            };
          };

          if (all_sectionEdit[i].getBoundingClientRect().top <= menu && all_sectionEdit[i].getBoundingClientRect().bottom > menu) {
            for (var j = 0; j < all_quickNavLinks.length; j++) {
              helper.removeClass(all_quickNavLinks[j], "is-active");
            };
            helper.addClass(all_quickNavLinks[i], "is-active");
            if (sectionHeading) {
              helper.addClass(all_sectionEdit[i], "is-pinned");
              helper.addClass(sectionHeading, "is-pinned");
            };
          } else {
            helper.removeClass(all_quickNavLinks[i], "is-active");
            if (sectionHeading) {
              helper.removeClass(all_sectionEdit[i], "is-pinned");
              helper.removeClass(sectionHeading, "is-pinned");
            };
          };

        };
        // if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        //   var lastQuickLink = helper.e(".js-quick-nav-last-link");
        //   for (var i = 0; i < all_quickNavLinks.length; i++) {
        //     helper.removeClass(all_quickNavLinks[i], "is-active");
        //   };
        //   helper.addClass(lastQuickLink, "is-active");
        // };
      };
    };
  };

  function _createAllCharacter() {
    var characters = sheet.getAllCharacters();
    var navCharacters = helper.e(".js-nav-characters");
    for (var i in characters) {
      var characterAnchor = _createNavCharacterItem(characters[i].basics.name, characters[i].basics.class, characters[i].basics.level, i);
      navCharacters.appendChild(characterAnchor);
    };
    var all_navCharacterSelect = helper.eA(".js-nav-character-input");
    all_navCharacterSelect[sheet.getIndex()].checked = true;
  };

  function _createNavCharacterItem(characterName, characterClass, characterLevel, characterIndex) {
    if (typeof characterName == "undefined" || characterName == "") {
      characterName = "New character";
    };
    if (typeof characterClass == "undefined" || characterClass == "") {
      characterClass = "Class";
    };
    if (typeof characterLevel == "undefined" || characterLevel == "") {
      characterLevel = "Level";
    };

    // define elements
    var uniqueId = helper.randomId(10);

    var navCharacter = document.createElement("li");
    navCharacter.setAttribute("class", "m-nav-character");

    var input = document.createElement("input");
    input.setAttribute("id", characterName.replace(/\s+/g, "-").toLowerCase() + "-" + uniqueId);
    input.setAttribute("name", "js-nav-all-characters");
    input.setAttribute("class", "js-nav-character-input");
    input.setAttribute("type", "radio");
    input.setAttribute("tabindex", 10);

    var label = document.createElement("label");
    label.setAttribute("for", characterName.replace(/\s+/g, "-").toLowerCase() + "-" + uniqueId);
    label.setAttribute("class", "u-full-width js-nav-character-label character-index-" + characterIndex);
    label.setAttribute("data-character-index", characterIndex);

    var nameSpan = document.createElement("span");
    nameSpan.setAttribute("class", "m-nav-characters-name js-nav-characters-name");
    nameSpan.textContent = helper.truncate(characterName, 30, true);

    var classSpan = document.createElement("span");
    classSpan.setAttribute("class", "m-nav-characters-class js-nav-characters-class");
    classSpan.textContent = helper.truncate(characterClass, 20, true) + " ";

    var levelSpan = document.createElement("span");
    levelSpan.setAttribute("class", "m-nav-characters-level js-nav-characters-level");
    levelSpan.textContent = helper.truncate(characterLevel, 10);

    // build module
    label.appendChild(nameSpan);
    label.appendChild(classSpan);
    label.appendChild(levelSpan);
    navCharacter.appendChild(input);
    navCharacter.appendChild(label);

    // bind
    _bind_characterOption(navCharacter);
    return navCharacter;
  };

  function _checkBodyForOpenNav() {
    var body = helper.e("body");
    var nav = helper.e(".js-is-open");
    if (nav) {
      helper.addClass(body, "is-nav-open");
    } else {
      helper.removeClass(body, "is-nav-open");
    };
  };

  function navClose() {
    helper.removeClass(helper.e(".js-nav"), "is-open");
    helper.removeClass(helper.e(".js-nav"), "js-is-open");
    helper.removeClass(helper.e(".js-hamburger"), "is-open");
    _checkBodyForOpenNav();
    _destroy_navShade();
  };

  function navOpen() {
    helper.addClass(helper.e(".js-nav"), "is-open");
    helper.addClass(helper.e(".js-nav"), "js-is-open");
    helper.addClass(helper.e(".js-hamburger"), "is-open");
    _checkBodyForOpenNav();
    _render_navShade();
  };

  function toggle_nav() {
    var nav = helper.e(".js-nav");
    if (nav.classList.contains("is-open")) {
      helper.removeClass(helper.e(".js-nav"), "is-open");
      helper.removeClass(helper.e(".js-nav"), "js-is-open");
      helper.removeClass(helper.e(".js-hamburger"), "is-open");
      _checkBodyForOpenNav();
      _destroy_navShade();
    } else {
      helper.addClass(helper.e(".js-nav"), "is-open");
      helper.addClass(helper.e(".js-nav"), "js-is-open");
      helper.addClass(helper.e(".js-hamburger"), "is-open");
      _checkBodyForOpenNav();
      _render_navShade();
    };
  };

  // function resize() {
  //   var body = helper.e("body");
  //   var nav = helper.e(".js-nav");
  //   if (window.innerWidth >= 550) {
  //     var height = window.innerHeight - 60;
  //     nav.style.maxHeight = height + "px";
  //   } else {
  //     nav.removeAttribute("style");
  //   };
  // };

  function bind() {
    var nav = helper.e(".js-nav");
    var navToggle = helper.e(".js-nav-toggle");
    var fullscreenModeToggle = helper.e(".js-fullscreen-mode");
    var nightModeToggle = helper.e(".js-night-mode");
    var clearAll = helper.e(".js-clear-all");
    var restoreDemoPcs = helper.e(".js-restore-demo-pcs");
    var characterAdd = helper.e(".js-character-add");
    var characterRemove = helper.e(".js-character-remove");
    var characterImport = helper.e(".js-character-import");
    var characterExport = helper.e(".js-character-export");
    var all_quickNavLinks = helper.eA(".js-quick-nav-link");

    for (var i = 0; i < all_quickNavLinks.length; i++) {
      all_quickNavLinks[i].addEventListener("click", navClose, false);
    };

    navToggle.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      toggle_nav();
    }, false);

    fullscreenModeToggle.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      fullscreen.toggle();
    }, false);

    nightModeToggle.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      night.toggle();
    }, false);

    clearAll.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      prompt.render("Clear all characters?", "All characters will be removed. This can not be undone.", "Remove all", sheet.destroy);
      navClose();
    }, false);

    restoreDemoPcs.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      prompt.render("Restore demo PCs?", "All characters will be removed and the demo characters will be restored. Have you backed up your characters by Exporting?", "Restore", sheet.restore);
      navClose();
    }, false);

    characterImport.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      sheet.import();
      navClose();
    }, false);

    characterExport.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      sheet.export();
      navClose();
    }, false);

    characterAdd.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      sheet.addCharacter();
      snack.render("New character added.", false);
      _closeNavScrollToTop();
    }, false);

    characterRemove.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      sheet.removeCharacter();
      navClose();
    }, false);

    // window.addEventListener('click', function(event) {
    //   if (event.target != nav && event.target != navToggle && helper.getClosest(event.target, ".js-nav") != nav && helper.getClosest(event.target, ".js-nav-toggle") != navToggle) {
    //     navClose();
    //   };
    // }, false);

    window.addEventListener("keydown", function(event) {

      // ctrl+alt+delete
      if (event.ctrlKey && event.altKey && event.keyCode == 8) {
        prompt.render("Clear all characters?", "All characters will be removed. This can not be undone.", "Delete all", sheet.destroy);
        navClose();
      };

      // ctrl+alt+i
      if (event.ctrlKey && event.altKey && event.keyCode == 73) {
        sheet.import();
        navClose();
      };

      // ctrl+alt+e
      if (event.ctrlKey && event.altKey && event.keyCode == 69) {
        sheet.export();
        navClose();
      };

      // ctrl+alt+m
      if (event.ctrlKey && event.altKey && event.keyCode == 77) {
        toggle_nav();
        helper.e(".js-nav-title").focus(this);
      };

      // ctrl+alt+d
      if (event.ctrlKey && event.altKey && event.keyCode == 68) {
        display.toggle();
      };

      // ctrl+alt+n
      if (event.ctrlKey && event.altKey && event.keyCode == 78) {
        night.toggle();
      };

      // esc
      if (event.keyCode == 27) {
        navClose();
      };

    }, false);

    // key debugging
    // window.addEventListener("keydown", function(event) {
    //   console.log(event.keyCode);
    //   console.log(event.metaKey);
    //   console.log(event);
    // });

  };

  // exposed methods
  return {
    // resize: resize,
    lastSectionHeight: lastSectionHeight,
    bind: bind,
    clear: clear,
    render: render,
    update: updateNavCharacters,
    open: navOpen,
    close: navClose,
    toggle: toggle_nav
  }

})();

var night = (function() {

  function update() {
    if (helper.read("nightMode") == "true") {
      toggle();
    };
  };

  function toggle() {
    var body = helper.e("body");
    var nightMode = helper.e(".js-night-mode");

    function _nightModeOn() {
      helper.addClass(body, "is-night-mode");
      helper.addClass(nightMode, "is-active");
    };

    function _nightModeOff() {
      helper.removeClass(body, "is-night-mode");
      helper.removeClass(nightMode, "is-active");
    };

    if (body.dataset.nightMode == "true") {
      body.dataset.nightMode = "false";
      _nightModeOff();
      helper.store("nightMode", false);
      sheet.storeCharacters();
    } else if (body.dataset.nightMode == "false" || !body.dataset.nightMode) {
      body.dataset.nightMode = "true";
      _nightModeOn();
      helper.store("nightMode", true);
      sheet.storeCharacters();
    };
  };

  // exposed methods
  return {
    update: update,
    toggle: toggle
  };

})();

var prompt = (function() {

  var previousPrompt = null;
  var previousPromptShade = null;

  function bind() {
    window.addEventListener("keydown", function(event) {
      if (event.keyCode == 27) {
        destroy();
      };
    }, false);
  };

  function destroy() {
    var prompt = helper.e(".js-prompt");
    var promptShade = helper.e(".js-prompt-shade");
    var promptWrapper = helper.e(".js-prompt-wrapper");
    if (prompt) {
      getComputedStyle(prompt).opacity;
      helper.removeClass(promptWrapper, "is-unrotate-in");
      helper.addClass(promptWrapper, "is-dropped-out");
      helper.removeClass(prompt, "is-opaque");
      helper.addClass(prompt, "is-transparent");
    };
    if (promptShade) {
      getComputedStyle(promptShade).opacity;
      helper.removeClass(promptShade, "is-opaque");
      helper.addClass(promptShade, "is-transparent");
    };
  };

  function render(heading, message, actionText, action, actionUrl, actionAttributeKey, actionAttributeValue) {

    modal.destroy();
    var body = helper.e("body");

    var promptShade = document.createElement("div");
    promptShade.setAttribute("class", "m-prompt-shade js-prompt-shade");
    promptShade.destroy = function() {
      helper.removeClass(promptShade, "is-opaque");
      helper.addClass(promptShade, "is-transparent");
    };

    var promptWrapper = document.createElement("div");
    promptWrapper.setAttribute("class", "m-prompt-wrapper js-prompt-wrapper is-unrotate-out");

    var prompt = document.createElement("div");
    prompt.setAttribute("class", "m-prompt js-prompt");
    prompt.destroy = function() {
      helper.removeClass(promptWrapper, "is-unrotate-in");
      helper.addClass(promptWrapper, "is-dropped-out");
      helper.removeClass(prompt, "is-opaque");
      helper.addClass(prompt, "is-transparent");
    };

    var promptbody = document.createElement("div");
    promptbody.setAttribute("class", "m-prompt-body");

    var promptHeading = document.createElement("h1");
    promptHeading.setAttribute("tabindex", "3");
    promptHeading.setAttribute("class", "m-prompt-heading");
    promptHeading.textContent = heading;

    var promptText = document.createElement("p");
    promptText.setAttribute("class", "m-prompt-text");
    promptText.textContent = message;

    var promptControls = document.createElement("div");
    promptControls.setAttribute("class", "m-prompt-controls");

    var actionButton = document.createElement("a");
    actionButton.setAttribute("href", "javascript:void(0)");
    actionButton.setAttribute("tabindex", "3");
    actionButton.setAttribute("class", "button button-primary button-block button-large js-prompt-action");
    actionButton.textContent = actionText || "Ok";

    var cancelButton = document.createElement("a");
    cancelButton.setAttribute("href", "javascript:void(0)");
    cancelButton.setAttribute("tabindex", "3");
    cancelButton.setAttribute("class", "button button-block button-large");
    cancelButton.textContent = "Cancel";

    promptControls.appendChild(cancelButton);
    promptControls.appendChild(actionButton);
    if (heading != false) {
      promptbody.appendChild(promptHeading);
    };
    if (message != false) {
      promptbody.appendChild(promptText);
    };
    promptWrapper.appendChild(promptbody);
    promptWrapper.appendChild(promptControls);

    prompt.appendChild(promptWrapper);

    prompt.addEventListener("transitionend", function(event, elapsed) {
      if (event.propertyName === "opacity" && getComputedStyle(this).opacity == 0) {
        this.parentElement.removeChild(this);
      };
    }.bind(prompt), false);

    promptShade.addEventListener("transitionend", function(event, elapsed) {
      if (event.propertyName === "opacity" && getComputedStyle(this).opacity == 0) {
        this.parentElement.removeChild(this);
      };
    }.bind(promptShade), false);

    if (action) {
      actionButton.addEventListener("click", function(event) {
        event.stopPropagation();
        event.preventDefault();
        action();
      }, false);
    };
    if (actionUrl) {
      actionButton.href = actionUrl;
    };
    if (actionAttributeKey && actionAttributeValue) {
      actionButton.setAttribute(actionAttributeKey, actionAttributeValue);
    };
    actionButton.addEventListener("click", destroy, false);
    cancelButton.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      destroy();
    }, false);
    promptShade.addEventListener("click", destroy, false);

    if (previousPrompt) {
      previousPrompt.destroy();
    };

    if (previousPromptShade) {
      previousPromptShade.destroy();
    };

    previousPrompt = prompt;
    previousPromptShade = promptShade;

    body.appendChild(promptShade);
    body.appendChild(prompt);

    getComputedStyle(prompt).opacity;
    getComputedStyle(promptShade).opacity;
    helper.removeClass(prompt, "is-transparent");
    helper.addClass(prompt, "is-opaque");
    helper.removeClass(promptWrapper, "is-unrotate-out");
    helper.addClass(promptWrapper, "is-unrotate-in");
    helper.removeClass(promptShade, "is-transparent");
    helper.addClass(promptShade, "is-opaque");
    promptHeading.focus(this);

  };

  // exposed methods
  return {
    bind: bind,
    destroy: destroy,
    render: render
  }

})();

var sheet = (function() {

  var allCharacters = JSON.parse(JSON.stringify([blank.data]));

  var currentCharacterIndex = 0;

  var saveHardCodedCharacters = (function() {
    if (helper.read("allCharacters")) {
      allCharacters = JSON.parse(helper.read("allCharacters"));
    } else if (typeof hardCodedCharacters !== "undefined") {
      allCharacters = JSON.parse(JSON.stringify(hardCodedCharacters.demo)); // for demo load sample characters
      // allCharacters = [blank.data]; // for production load blank character
    };
    storeCharacters();
  })();

  var setCurrentCharacterIndex = (function() {
    if (helper.read("charactersIndex")) {
      currentCharacterIndex = helper.read("charactersIndex");
    };
  })();

  function storeCharacters() {
    helper.store("allCharacters", JSON.stringify(allCharacters));
  };

  function getAllCharacters() {
    return allCharacters;
  };

  function getCharacter() {
    return allCharacters[currentCharacterIndex];
  };

  function getIndex() {
    return currentCharacterIndex;
  };

  function setIndex(index) {
    currentCharacterIndex = index;
    helper.store("charactersIndex", currentCharacterIndex);
  };

  function addCharacter(newCharacter) {
    var dataToAdd = newCharacter || JSON.parse(JSON.stringify(blank.data));
    allCharacters.push(dataToAdd);
    var newIndex = getAllCharacters().length - 1;
    setIndex(newIndex);
    storeCharacters();
    clear();
    render();
    nav.clear();
    nav.render();
    smoothScroll.animateScroll(null, "#body");
  };

  function removeCharacter() {
    var name;
    if (sheet.getCharacter().basics.name) {
      name = sheet.getCharacter().basics.name;
    } else {
      name = "New character";
    };
    prompt.render("Remove " + name + "?", "This can not be undone.", "Remove", destroyCharacter);
  };

  function destroyCharacter() {
    var name = allCharacters[getIndex()].basics.name || "New character";
    allCharacters.splice(getIndex(), 1);
    var lastCharacterRemoved = false;
    if (allCharacters.length == 0) {
      addCharacter();
      lastCharacterRemoved = true;
    };
    setIndex(0);
    clear();
    render();
    storeCharacters();
    nav.clear();
    nav.render();
    if (lastCharacterRemoved) {
      snack.render(helper.truncate(name, 40, true) + " removed. New character added.", false, false);
    } else {
      snack.render(helper.truncate(name, 50, true) + " removed.", false, false);
    };
  };

  function all() {
    localStorage.clear();
    prompt.destroy();
    snack.destroy();
    allCharacters = JSON.parse(JSON.stringify(hardCodedCharacters.all));
    setIndex(0);
    storeCharacters();
    clear();
    render();
    nav.clear();
    nav.render();
    snack.render("All characters restored.", false, false);
  };

  function restore() {
    localStorage.clear();
    prompt.destroy();
    snack.destroy();
    allCharacters = JSON.parse(JSON.stringify(hardCodedCharacters.demo));
    setIndex(0);
    storeCharacters();
    clear();
    render();
    nav.clear();
    nav.render();
    snack.render("Default characters restored.", false, false);
  };

  function destroy() {
    localStorage.clear();
    prompt.destroy();
    snack.destroy();
    allCharacters = JSON.parse(JSON.stringify([blank.data]));
    setIndex(0);
    storeCharacters();
    clear();
    render();
    nav.clear();
    nav.render();
    snack.render("All characters cleared.", false, false);
    // document.location.reload(true);
  };

  function _createImportModal() {
    var container = document.createElement("div");
    container.setAttribute("class", "container");
    var row = document.createElement("div");
    row.setAttribute("class", "row");
    var col = document.createElement("div");
    col.setAttribute("class", "col-xs-12");
    var importSelect = document.createElement("div");
    importSelect.setAttribute("class", "m-import-select");
    var input = document.createElement("input");
    input.setAttribute("id", "import-select");
    input.setAttribute("type", "file");
    input.setAttribute("class", "m-import-select-input js-import-select-input");
    var label = document.createElement("label");
    label.setAttribute("tabindex", "3");
    label.setAttribute("for", "import-select");
    label.setAttribute("class", "m-import-select-label button button-large button-block js-import-select-label");
    var labelText = document.createElement("span");
    labelText.textContent = "Select a file";
    labelText.setAttribute("class", "js-import-select-label-text");
    var icon = document.createElement("span");
    icon.setAttribute("class", "icon-file-upload js-import-select-label-icon");
    var message = document.createElement("p");
    message.setAttribute("class", "m-import-select-message");
    message.textContent = "Import a previously exported character JSON file from another device.";
    label.appendChild(icon);
    label.appendChild(labelText);
    importSelect.appendChild(input);
    importSelect.appendChild(label);
    col.appendChild(message);
    col.appendChild(importSelect);
    row.appendChild(col);
    container.appendChild(row);
    input.addEventListener("change", _handleFiles, false);
    return container;
  };

  function _handleFiles() {
    var importSelectLabel = helper.e(".js-import-select-label");
    var importSelectLabelText = helper.e(".js-import-select-label-text");
    var importSelectLabelIcon = helper.e(".js-import-select-label-icon");
    var fileList = this.files;
    helper.removeClass(importSelectLabel, "m-import-select-label-ok");
    helper.removeClass(importSelectLabel, "m-import-select-label-error");
    helper.removeClass(importSelectLabelIcon, "icon-check");
    helper.removeClass(importSelectLabelIcon, "icon-error-outline");
    helper.addClass(importSelectLabelIcon, "icon-file-upload");
    // console.log(fileList);

    var readFile = new FileReader();
    readFile.onload = function(event) {
      if (helper.isJsonString(event.target.result)) {
        // console.log("JSON true");
        if (JSON.parse(event.target.result).awesomeSheet) {
          // console.log("awesome key true");
          importSelectLabelText.textContent = fileList[0].name;
          helper.addClass(importSelectLabel, "m-import-select-label-ok");
          helper.removeClass(importSelectLabel, "m-import-select-label-error");
          helper.removeClass(importSelectLabelIcon, "icon-file-upload");
          helper.removeClass(importSelectLabelIcon, "icon-error-outline");
          helper.addClass(importSelectLabelIcon, "icon-check");
        } else {
          // console.log("awesome key false");
          importSelectLabelText.textContent = "JSON file not recognised by awesomeSheet";
          helper.removeClass(importSelectLabel, "m-import-select-label-ok");
          helper.addClass(importSelectLabel, "m-import-select-label-error");
          helper.removeClass(importSelectLabelIcon, "icon-file-upload");
          helper.removeClass(importSelectLabelIcon, "icon-check");
          helper.addClass(importSelectLabelIcon, "icon-error-outline");
        };
      } else {
        // console.log("JSON false");
        importSelectLabelText.textContent = "Not a JSON file";
        helper.removeClass(importSelectLabel, "m-import-select-label-ok");
        helper.addClass(importSelectLabel, "m-import-select-label-error");
        helper.removeClass(importSelectLabelIcon, "icon-file-upload");
        helper.removeClass(importSelectLabelIcon, "icon-check");
        helper.addClass(importSelectLabelIcon, "icon-error-outline");
      };
    };
    if (fileList.length > 0) {
      readFile.readAsText(fileList.item(0));
      // console.log(readFile.result);
    } else {
      importSelectLabelText.textContent = "Select a file";
    };
  };

  var _readJsonFile = function() {
    var fileList = helper.e(".js-import-select-input").files;
    if (fileList.length <= 0) {
      return false;
    };

    var readFile = new FileReader();
    readFile.onload = function(event) {

      if (helper.isJsonString(event.target.result)) {
        var data = JSON.parse(event.target.result);
        if (data.awesomeSheet) {
          addCharacter(data);
          var name = allCharacters[getIndex()].basics.name || "New character";
          snack.render(helper.truncate(name, 40, true) + " imported and now in the game.", false, false);
        } else {
          snack.render("JSON file not recognised by awesomeSheet.", false, false);
        };
      } else {
        snack.render("Not a JSON file.", false, false);
      };

    };

    readFile.readAsText(fileList.item(0));
  };

  function importJson() {
    modal.render("Import character", _createImportModal(), "Import", _readJsonFile);
  };

  function exportJson() {
    var fileName;
    var characterName = getCharacter().basics.name;
    var characterClass = getCharacter().basics.class;
    var characterLevel = getCharacter().basics.level;
    if (characterName != "") {
      fileName = characterName;
    } else {
      fileName = "New character";
    };
    if (characterClass != "") {
      fileName = fileName + ", " + characterClass;
    };
    if (characterLevel != "") {
      fileName = fileName + ", " + characterLevel;
    };
    prompt.render("Export " + characterName, "Download " + characterName + " as a JSON file. This file can later be imported on another deivce.", "Download", false, "data:" + "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(getCharacter()), null, " "), "download", fileName + ".json");
  }; 

  function bind() {
    prompt.bind();
    modal.bind();
    snack.bind();
    inputBlock.bind();
    textareaBlock.bind();
    stats.bind();
    clone.bind();
    totalBlock.bind();
    spells.bind();
    skills.bind();
    display.bind();
  };

  function render() {
    inputBlock.render();
    textareaBlock.render();
    stats.render();
    clone.render();
    totalBlock.render();
    totalBlock.update();
    spells.render();
    skills.render();
    display.render();
  };

  function clear() {
    inputBlock.clear();
    textareaBlock.clear();
    stats.render();
    clone.clear();
    totalBlock.clear();
    totalBlock.update();
    spells.clear();
    display.clear();
  };

  // exposed methods
  return {
    getAllCharacters: getAllCharacters,
    getCharacter: getCharacter,
    addCharacter: addCharacter,
    removeCharacter: removeCharacter,
    getIndex: getIndex,
    setIndex: setIndex,
    storeCharacters: storeCharacters,
    destroy: destroy,
    clear: clear,
    all: all,
    restore: restore,
    import: importJson,
    export: exportJson,
    render: render,
    bind: bind
  };

})();

var skills = (function() {

  var renderTimer = null;

  function bind() {
    var spentSkillRankInput = helper.e(".js-spent-skill-rank-input");
    var all_rankInput = helper.eA(".js-input-block-field-ranks");
    var all_customRankInput = helper.eA(".js-input-block-field-custom-ranks");
    var spentSkillRankTotal = helper.e(".js-spent-skill-rank-total");
    spentSkillRankInput.addEventListener("change", function() {
      clearTimeout(renderTimer);
      renderTimer = setTimeout(function() {
        _render_rankTotal();
        _store(spentSkillRankInput, spentSkillRankInput.checked);
        _store(spentSkillRankTotal, parseInt(spentSkillRankTotal.innerHTML, 10) || 0);
      }, 200, this);
    }, false);
    for (var i = 0; i < all_rankInput.length; i++) {
      all_rankInput[i].addEventListener("input", function() {
        clearTimeout(renderTimer);
        renderTimer = setTimeout(function() {
          _render_rankTotal();
          _store(spentSkillRankTotal, parseInt(spentSkillRankTotal.innerHTML, 10) || 0);
        }, 1000, this);
      }, false);
    };
    for (var i = 0; i < all_customRankInput.length; i++) {
      all_customRankInput[i].addEventListener("input", function() {
        clearTimeout(renderTimer);
        renderTimer = setTimeout(function() {
          _render_rankTotal();
          _store(spentSkillRankTotal, parseInt(spentSkillRankTotal.innerHTML, 10) || 0);
        }, 1000, this);
      }, false);
    };
  };

  function _store(element, value) {
    var path = element.dataset.path;
    helper.setObject(sheet.getCharacter(), path, value);
    sheet.storeCharacters();
  };

  function render() {
    _render_includeCustomToggle();
    _render_rankTotal();
  };

  function _render_includeCustomToggle(argument) {
    var spentSkillRankInput = helper.e(".js-spent-skill-rank-input");
    var path = spentSkillRankInput.dataset.path;
    var state = helper.getObject(sheet.getCharacter(), path);
    spentSkillRankInput.checked = state;
  };

  function _render_rankTotal() {
    var all_rankInput = helper.eA(".js-input-block-field-ranks");
    var all_customRankInput = helper.eA(".js-input-block-field-custom-ranks");
    var spentSkillRankInput = helper.e(".js-spent-skill-rank-input");
    var spentSkillRankTotal = helper.e(".js-spent-skill-rank-total");
    var ranks = [];
    var ranksTotal;
    var customRanks = [];
    var customRanksTotal;
    for (var i = 0; i < all_rankInput.length; i++) {
      ranks.push(parseInt(all_rankInput[i].value, 10) || 0);
    };
    for (var i = 0; i < all_customRankInput.length; i++) {
      customRanks.push(parseInt(all_customRankInput[i].value, 10) || 0);
    };
    ranksTotal = ranks.reduce(function(a, b) {
      return a + b;
    });
    customRanksTotal = customRanks.reduce(function(a, b) {
      return a + b;
    });
    if (spentSkillRankInput.checked) {
      spentSkillRankTotal.textContent = ranksTotal + customRanksTotal;
    } else {
      spentSkillRankTotal.textContent = ranksTotal;
    };
  };

  // exposed methods
  return {
    bind: bind,
    render: render
  }

})();

var snack = (function() {

  var previousSnackBar = null;

  function destroy() {
    var all_snackBar = helper.eA(".js-snack-bar");
    for (var i = 0; i < all_snackBar.length; i++) {
      all_snackBar[i].destroy();
    };
  };

  function render(message, actionText) {

    var body = helper.e("body");

    var snackBar = document.createElement("aside");
    snackBar.setAttribute("class", "m-snack-bar js-snack-bar");
    snackBar.destroy = function() {
      helper.addClass(snackBar, "is-transparent");
    };
    var text = document.createElement("p");
    text.setAttribute("class", "m-snack-bar-message");
    text.textContent = (message);
    snackBar.appendChild(text);

    if (actionText) {
      var action = snackBar.destroy.bind(snackBar);
      var actionButton = document.createElement("a");
      actionButton.setAttribute("class", "button button-tertiary m-snack-bar-button");
      actionButton.textContent = actionText;
      actionButton.addEventListener("click", action);
      snackBar.appendChild(actionButton);
    };

    snackBar.addEventListener("transitionend", function(event, elapsed) {
      if (event.propertyName === "opacity" && this.style.opacity == 0) {
        this.parentElement.removeChild(this);
        checkBodyForSnack();
      };
    }.bind(snackBar), false);

    if (previousSnackBar) {
      previousSnackBar.destroy();
    };

    previousSnackBar = snackBar;

    setTimeout(function() {
      if (previousSnackBar === this) {
        previousSnackBar.destroy();
      };
    }.bind(snackBar), 4000);

    body.appendChild(snackBar);
    getComputedStyle(snackBar).opacity;
    getComputedStyle(snackBar).transform;
    getComputedStyle(snackBar).margin;
    helper.addClass(snackBar, "is-reveal");
    checkBodyForSnack();

  };

  function bind() {
    window.addEventListener("keydown", function(event) {
      if (event.keyCode == 27) {
        destroy();
      };
    }, false);
  };

  function checkBodyForSnack() {
    var body = helper.e("body");
    var snackBar = helper.e(".js-snack-bar");
    if (snackBar) {
      helper.addClass(body, "is-onscreen-snack");
    } else {
      helper.removeClass(body, "is-onscreen-snack");
    };
  };

  // exposed methods
  return {
    bind: bind,
    destroy: destroy,
    render: render
  }

})();

var spells = (function() {

  function bind() {
    var spellPrepareButton = helper.e(".js-spell-prepare");
    var spellUnprepareButton = helper.e(".js-spell-unprepare");
    var spellCastButton = helper.e(".js-spell-cast");
    var spellActiveButton = helper.e(".js-spell-active");
    var spellRemoveButton = helper.e(".js-spell-remove");
    var spellResetButton = helper.e(".js-spell-reset");
    var all_newSpellAdd = helper.eA(".js-new-spell-add");
    for (var i = 0; i < all_newSpellAdd.length; i++) {
      all_newSpellAdd[i].addEventListener("click", function() {
        _addNewSpell(helper.getClosest(this, ".js-new-spell").querySelector(".js-new-spell-field"));
        _updateSpells(true);
        sheet.storeCharacters();
      }, false);
    };
    for (var i = 0; i < all_newSpellAdd.length; i++) {
      var newSpell = helper.getClosest(all_newSpellAdd[i], ".js-new-spell");
      var newSpellField = newSpell.querySelector(".js-new-spell-field");
      newSpellField.addEventListener("keypress", function() {
        _addNewSpellOnEnter(this);
      }, false);
    };
    spellPrepareButton.addEventListener("click", function() {
      _changeSpellState(this);
    }, false);
    spellUnprepareButton.addEventListener("click", function() {
      _changeSpellState(this);
    }, false);
    spellCastButton.addEventListener("click", function() {
      _changeSpellState(this);
    }, false);
    spellActiveButton.addEventListener("click", function() {
      _changeSpellState(this);
    }, false);
    spellRemoveButton.addEventListener("click", function() {
      _changeSpellState(this);
    }, false);
    spellResetButton.addEventListener("click", function() {
      _changeSpellState(this);
      _resetAllSpells();
    }, false);
  };

  function _resetAllSpells() {
    var all_spellRoot = helper.eA(".js-spell");
    for (var i = 0; i < all_spellRoot.length; i++) {
      if (all_spellRoot[i].classList.contains("button-primary")) {
        helper.removeClass(all_spellRoot[i], "button-primary");
      };
      var spellActive = all_spellRoot[i].querySelector(".js-spell-active");
      var spellMarks = all_spellRoot[i].querySelector(".js-spell-marks");
      var removeAllChildren = function(parent) {
        while (parent.lastChild) {
          parent.removeChild(parent.lastChild);
        };
      };
      removeAllChildren(spellActive);
      removeAllChildren(spellMarks);
    };
    _updateSpells(true);
    sheet.storeCharacters();
  };

  function _addNewSpellOnEnter(element) {
    var keystroke = event.keyCode || event.which;
    if (keystroke == 13) {
      _addNewSpell(element);
      _updateSpells(true);
      sheet.storeCharacters();
    };
  };

  function _bind_spellKnownItem(element) {
    element.addEventListener("click", function() {
      clearTimeout(storeSpellTimer);
      storeSpellTimer = setTimeout(delayUpdate, 1000, this);
      _changeSpell(this);
      _checkSpellState();
    }, false);
  };

  function _changeSpell(spell) {
    var spellRoot = helper.getClosest(spell, ".js-spells");
    var spellLevel = helper.getClosest(spell, ".js-spell-book").dataset.spellLevel;
    var spellMarks = spell.querySelector(".js-spell-marks");
    var spellActive = spell.querySelector(".js-spell-active");
    var spellState = spellRoot.dataset.spellState;
    // state prepare
    if (spellState == "prepare") {
      var preparedIcon = document.createElement("span");
      preparedIcon.setAttribute("class", "icon-radio-button-checked js-spell-mark-checked");
      if (spellMarks.children.length <= 30) {
        // spellMarks.insertBefore(preparedIcon, spellMarks.firstChild);
        spellMarks.appendChild(preparedIcon);
      };
      if (spellMarks.children.length > 0) {
        helper.addClass(spell, "button-primary");
      };
    };
    // state unprepare
    if (spellState == "unprepare") {
      if (spellMarks.lastChild) {
        spellMarks.lastChild.remove();
      };
      if (spellMarks.children.length <= 0) {
        helper.removeClass(spell, "button-primary");
      };
    };
    // state cast
    if (spellState == "cast") {
      var all_spellsMarks = spellMarks.children;
      var all_remainingPreparedSpells = spellMarks.querySelectorAll(".js-spell-mark-checked").length;
      for (var i = 0; i < all_spellsMarks.length; i++) {
        if (all_spellsMarks[i].classList.contains("js-spell-mark-checked")) {
          helper.toggleClass(all_spellsMarks[i], "icon-radio-button-checked");
          helper.toggleClass(all_spellsMarks[i], "icon-radio-button-unchecked");
          helper.toggleClass(all_spellsMarks[i], "js-spell-mark-checked");
          helper.toggleClass(all_spellsMarks[i], "js-spell-mark-unchecked");
          break
        };
      };
      // if there are no spell marks add cast mark for spontaneous casters
      if (all_remainingPreparedSpells <= 0) {
        if (spellMarks.children.length <= 30) {
          var castIcon = document.createElement("span");
          castIcon.setAttribute("class", "icon-radio-button-unchecked js-spell-mark-unchecked");
          spellMarks.appendChild(castIcon);
        };
      };
      if (spellMarks.children.length > 0) {
        helper.addClass(spell, "button-primary");
      };
      // if no checked icons can be found change the var allSpellCast to true
      for (var i = 0; i < all_spellsMarks.length; i++) {
        if (all_spellsMarks[i].classList.contains("js-spell-mark-checked")) {
          all_remainingPreparedSpells--;
        };
      };
      // allSpellCast to true change spell button class
      // if (all_remainingPreparedSpells <= 0) {
      //   helper.removeClass(spell, "button-primary");
      // };
    };
    // state active
    if (spellState == "active") {
      var activeIcon = document.createElement("span");
      activeIcon.setAttribute("class", "icon-play-arrow");
      if (spellActive.children.length > 0) {
        spellActive.firstChild.remove();
      } else {
        spellActive.appendChild(activeIcon);
      };
    };
    // state remove
    if (spellState == "remove") {
      var spellName = spell.textContent;
      spell.remove();
      snack.render(helper.truncate(spellName, 40, true) + " removed.", false, false);
    };
    _updateSpells();
  };

  function _changeSpellState(element) {
    var all_spellLevels = helper.eA(".js-spell-book-known");
    var spellsFound = false;
    var spellRoot = helper.e(".js-spells");
    var spellPrepareButton = helper.e(".js-spell-prepare");
    var spellUnprepareButton = helper.e(".js-spell-unprepare");
    var spellCastButton = helper.e(".js-spell-cast");
    var spellActiveButton = helper.e(".js-spell-active");
    var spellRemoveButton = helper.e(".js-spell-remove");
    var all_spellStateControls = spellRoot.querySelectorAll(".js-spell-state-control");
    var all_spellBookItem = helper.eA(".js-spell");
    for (var i = 0; i < all_spellLevels.length; i++) {
      if (all_spellLevels[i].children.length > 0) {
        spellsFound = true;
      };
    };
    if (spellsFound) {
      // if this button is active
      if (spellRoot.dataset.spellState != element.dataset.state) {
        helper.removeClass(element, "is-active");
        helper.removeClass(spellRoot, "is-state-prepare");
        helper.removeClass(spellRoot, "is-state-unprepare");
        helper.removeClass(spellRoot, "is-state-cast");
        helper.removeClass(spellRoot, "is-state-active");
        helper.removeClass(spellRoot, "is-state-remove");
        helper.addClass(spellRoot, "is-state-" + element.dataset.state);
        spellRoot.dataset.spellState = element.dataset.state;
        for (var i = 0; i < all_spellStateControls.length; i++) {
          helper.removeClass(all_spellStateControls[i], "is-active");
        };
        if (!element.classList.contains("js-spell-reset")) {
          helper.addClass(element, "is-active");
        };
      } else {
        spellRoot.dataset.spellState = "false";
        helper.removeClass(element, "is-active");
        helper.removeClass(spellRoot, "is-state-prepare");
        helper.removeClass(spellRoot, "is-state-unprepare");
        helper.removeClass(spellRoot, "is-state-cast");
        helper.removeClass(spellRoot, "is-state-active");
        helper.removeClass(spellRoot, "is-state-remove");
      };
    } else {
      spellRoot.dataset.spellState = "false";
      helper.removeClass(element, "is-active");
      helper.removeClass(spellRoot, "is-state-prepare");
      helper.removeClass(spellRoot, "is-state-unprepare");
      helper.removeClass(spellRoot, "is-state-cast");
      helper.removeClass(spellRoot, "is-state-active");
      helper.removeClass(spellRoot, "is-state-remove");
    };
  };

  function _checkSpellState() {
    var spellRoot = helper.e(".js-spells");
    var spellPrepareButton = helper.e(".js-spell-prepare");
    var spellUnprepareButton = helper.e(".js-spell-unprepare");
    var spellCastButton = helper.e(".js-spell-cast");
    var spellActiveButton = helper.e(".js-spell-active");
    var spellRemoveButton = helper.e(".js-spell-remove");
    var all_spellStateControls = spellRoot.querySelectorAll(".js-spell-state-control");
    var all_spellBookItem = helper.eA(".js-spell");
    if (all_spellBookItem.length == 0) {
      for (var i = 0; i < all_spellStateControls.length; i++) {
        helper.removeClass(all_spellStateControls[i], "is-active");
      };
      spellRoot.dataset.spellState = "false";
    };
  };

  function _addNewSpell(element) {
    var level = helper.getClosest(element, ".js-spell-book").dataset.spellLevel;
    var spallName = element.value;
    var newSpell = new _createSpellObject(spallName, 0, false, 0);
    // if input value is not empty
    if (spallName !== "") {
      //  if first character is not a number
      if (isNaN(spallName.charAt(0))) {
        // add spell button to spell list
        // knownListToSaveTo.appendChild(newSpell);
        _render_spell([newSpell], level);
        // clear input field
        element.value = "";
        // add spell to current character object
        // sheet.getCharacter().spells.book.push(newSpell);
        // make a snack bar
        snack.render(helper.truncate(spallName, 40, true) + " added to spell level " + level + ".", false, false);
      } else {
        // error if the name starts with a number
        snack.render("Name can't start with a space or number.", false, false);
      };
    };
  };

  function _createSpellObject(spellName, spellPrepared, spellActive, spellCast) {
    return {
      name: this.name = spellName,
      prepared: this.prepared = spellPrepared || 0,
      active: this.active = spellActive || false,
      cast: this.cast = spellCast || 0
    };
  };

  var storeSpellTimer = null;

  function delayUpdate() {
    var spellRoot = helper.e(".js-spells");
    var spellState = spellRoot.dataset.spellState;
    if (spellState == "prepare" || spellState == "unprepare" || spellState == "cast" || spellState == "active" || spellState == "remove") {
      sheet.storeCharacters();
    };
    if (body.dataset.displayMode == "true") {
      display.clear();
      display.render();
    };
  };

  function _updateSpells(force) {
    var spellRoot = helper.e(".js-spells");
    var spellState = spellRoot.dataset.spellState;
    var all_spellLevels = spellRoot.querySelectorAll(".js-spell-book-known");
    if (spellState == "prepare" || spellState == "unprepare" || spellState == "cast" || spellState == "active" || spellState == "remove" || force) {
      // loop over all spell level blocks
      for (var i = 0; i < all_spellLevels.length; i++) {
        var all_spellsToUpdate = [];
        // find all spell items in this level block
        var all_spellKnownItems = all_spellLevels[i].querySelectorAll(".js-spell");
        // loop ovre all spell items found
        for (var j = 0; j < all_spellKnownItems.length; j++) {
          var name = all_spellKnownItems[j].textContent;
          var prepared = all_spellKnownItems[j].querySelector(".js-spell-marks").children.length;
          var cast = all_spellKnownItems[j].querySelector(".js-spell-marks").querySelectorAll(".js-spell-mark-unchecked").length;
          var active = all_spellKnownItems[j].querySelector(".js-spell-active").children.length;
          if (active > 0) {
            active = true;
          } else {
            active = false;
          };
          var newSpell = new _createSpellObject(name, prepared, active, cast);
          // add to current character object
          all_spellsToUpdate.push(newSpell);
        };
        sheet.getCharacter().spells.book[i]["level_" + i] = all_spellsToUpdate;
      };
    };
  };

  function render() {
    // build an array of spell objects
    var spellsToRender;
    // iterate over all objects keys to find spells then push those values to spellsToRender
    if (sheet.getCharacter().spells.book) {
      for (var i in sheet.getCharacter().spells.book) {
        for (var j in sheet.getCharacter().spells.book[i]) {
          spellsToRender = sheet.getCharacter().spells.book[i][j];
          _render_spell(spellsToRender, i);
        };
      };
    };
  };

  function _render_spell(array, level) {
    // read spells and add them to spell lists
    for (var i = 0; i < array.length; i++) {
      var spellObject = array[i];
      // find spell list to add too
      var knownListToSaveTo = helper.e(".js-spell-book-known-level-" + level);
      // append new spell to spell list
      var spellButton = _createSpellButton(spellObject.name);
      knownListToSaveTo.appendChild(spellButton);
      // find spell mark parent
      var spellMarks = spellButton.querySelector(".js-spell-marks");
      var spellActive = spellButton.querySelector(".js-spell-active");
      // add spell marks
      if (spellObject.prepared > 0) {
        helper.addClass(spellButton, "button-primary");
        for (var j = 0; j < spellObject.prepared; j++) {
          var preparedIcon = document.createElement("span");
          preparedIcon.setAttribute("class", "icon-radio-button-checked js-spell-mark-checked");
          spellMarks.insertBefore(preparedIcon, spellMarks.firstChild);
        };
      };
      // cast spells if cast > 0
      if (spellObject.cast > 0) {
        var all_check = spellMarks.querySelectorAll(".icon-radio-button-checked");
        for (var j = 0; j < spellObject.cast; j++) {
          if (all_check[j]) {
            helper.toggleClass(all_check[j], "icon-radio-button-checked");
            helper.toggleClass(all_check[j], "icon-radio-button-unchecked");
            helper.toggleClass(all_check[j], "js-spell-mark-checked");
            helper.toggleClass(all_check[j], "js-spell-mark-unchecked");
          };
        };
        // if (spellObject.cast >= spellObject.prepared) {
        //   helper.removeClass(spellButton, "button-primary");
        // };
      };
      // if spell is active
      if (spellObject.active) {
        var activeIcon = document.createElement("span");
        activeIcon.setAttribute("class", "icon-play-arrow");
        if (spellActive.children.length > 0) {
          spellActive.firstChild.remove();
        } else {
          spellActive.appendChild(activeIcon);
        };
      };
      _bind_spellKnownItem(spellButton);
    };
  };

  function _createSpellButton(spellName) {
    var spellButton = document.createElement("button");
    spellButton.setAttribute("data-spell-name", spellName.replace(/\s+/g, "-").toLowerCase());
    spellButton.setAttribute("id", spellName.replace(/\s+/g, "-").toLowerCase());
    spellButton.setAttribute("class", "m-spell button button-medium js-spell");
    spellButton.setAttribute("type", "button");
    spellButton.setAttribute("tabindex", "3");
    var spellActive = document.createElement("span");
    spellActive.setAttribute("class", "m-spell-active js-spell-active");
    spellButton.appendChild(spellActive);
    var spellNameSpan = document.createElement("span");
    spellNameSpan.setAttribute("class", "m-spell-name js-spell-name");
    spellNameSpan.textContent = spellName;
    spellButton.appendChild(spellNameSpan);
    var spellMarks = document.createElement("span");
    spellMarks.setAttribute("class", "m-spell-marks js-spell-marks");
    spellButton.appendChild(spellMarks);
    var spellRemove = document.createElement("span");
    spellRemove.setAttribute("class", "m-spell-remove js-spell-remove");
    spellButton.appendChild(spellRemove);
    var spellRemoveIcon = document.createElement("span");
    spellRemoveIcon.setAttribute("class", "icon-close");
    spellRemove.appendChild(spellRemoveIcon);
    return spellButton;
  };

  function clear() {
    var all_spellBookKnown = helper.eA(".js-spell-book-known");
    for (var i = 0; i < all_spellBookKnown.length; i++) {
      while (all_spellBookKnown[i].lastChild) {
        all_spellBookKnown[i].removeChild(all_spellBookKnown[i].lastChild);
      };
    };
  };

  // exposed methods
  return {
    clear: clear,
    bind: bind,
    render: render
  };

})();

var stats = (function() {

  function _changeModifer(element, field) {
    var stat = parseInt(element.value, 10) || 0;
    var modifier = _calculateModifer(element);
    field.textContent = modifier;
  };

  var changeModiferTimer = null;

  function delayUpdate(element) {
    render();
    totalBlock.update();
    if (body.dataset.displayMode == "true") {
      display.clear();
      display.render();
    };
  };

  function _calculateModifer(element) {
    var modifier = Math.floor((element.value - 10) / 2);
    return modifier;
  };

  function render() {
    var stats = helper.eA(".js-stats");
    for (var i = 0; i < stats.length; i++) {
      var score = stats[i].querySelector(".js-stats-score");
      var modifier = stats[i].querySelector(".js-stats-modifier");
      var scoreTemp = stats[i].querySelector(".js-stats-score-temp");
      var Modtempifier = stats[i].querySelector(".js-stats-modifier-temp");
      if (score.value !== "") {
        _changeModifer(score, modifier);
      } else {
        modifier.textContent = "";
      };
      if (scoreTemp.value !== "") {
        _changeModifer(scoreTemp, Modtempifier);
      } else {
        Modtempifier.textContent = "";
      };
    };
  };

  function bind() {
    var score = helper.eA(".js-stats-score");
    var scoreTemp = helper.eA(".js-stats-score-temp");
    for (var i = 0; i < score.length; i++) {
      score[i].addEventListener("input", function() {
        clearTimeout(changeModiferTimer);
        changeModiferTimer = setTimeout(delayUpdate, 1000);
      }, false);
    };
    for (var i = 0; i < scoreTemp.length; i++) {
      scoreTemp[i].addEventListener("input", function() {
        clearTimeout(changeModiferTimer);
        changeModiferTimer = setTimeout(delayUpdate, 1000);
      }, false);
    };
  };

  // exposed methods
  return {
    render: render,
    bind: bind
  };

})();

var textareaBlock = (function() {

  function _store(element) {
    var path = element.dataset.path;
    helper.setObject(sheet.getCharacter(), path, element.innerHTML);
    sheet.storeCharacters();
  };

  var storeInputTimer = null;
  var storeBlurTimer = null;

  function delayUpdate(element) {
    _store(element);
    if (body.dataset.displayMode == "true") {
      display.clear();
      display.render();
    };
  };

  function focus(element) {
    var textareaBlock = helper.getClosest(element, ".js-textarea-block");
    var textareaBlockField = textareaBlock.querySelector(".js-textarea-block-field");
    var textareaBlockLabel;
    if (textareaBlock.querySelector(".js-textarea-block-label")) {
      textareaBlockLabel = textareaBlock.querySelector(".js-textarea-block-label");
    };
    if (textareaBlock.querySelector(".js-textarea-block-label")) {
      if (textareaBlockField == document.activeElement) {
        helper.addClass(textareaBlockLabel, "is-active");
      } else {
        helper.removeClass(textareaBlockLabel, "is-active");
      };
      if (element.innerHTML == "" && textareaBlockField != document.activeElement) {
        helper.removeClass(textareaBlockLabel, "is-active");
      } else {
        helper.addClass(textareaBlockLabel, "is-active");
      };
    };
  };

  function clear() {
    var all_textareaBlock = helper.eA(".js-textarea-block");
    for (var i = 0; i < all_textareaBlock.length; i++) {
      all_textareaBlock[i].querySelector(".js-textarea-block-field").innerHTML = "";
      var textareaBlockLabel;
      if (all_textareaBlock[i].querySelector(".js-textarea-block-label")) {
        textareaBlockLabel = all_textareaBlock[i].querySelector(".js-textarea-block-label");
        helper.removeClass(textareaBlockLabel, "is-active");
      };
    };
  };

  function updateTextareaBlock(element) {
    focus(element);
  };

  function bind() {
    var all_textareaBlock = helper.eA(".js-textarea-block");
    for (var i = 0; i < all_textareaBlock.length; i++) {
      var textareaBlockField = all_textareaBlock[i].querySelector(".js-textarea-block-field");
      var textareaBlockLabel = all_textareaBlock[i].querySelector(".js-textarea-block-label");
      if (textareaBlockField) {
        textareaBlockField.addEventListener("input", function() {
          clearTimeout(storeBlurTimer);
          storeBlurTimer = setTimeout(delayUpdate, 1000, this);
        }, false);
        textareaBlockField.addEventListener("focus", function() {
          focus(this);
        }, false);
        textareaBlockField.addEventListener("blur", function() {
          _store(this);
          focus(this);
        }, false);
      };
      if (textareaBlockLabel) {
        textareaBlockLabel.addEventListener("click", function() {
          _textareaLabelshiftFocus(this);
        }, false);
      };
    };
  };

  function _textareaLabelshiftFocus(element) {
    var textareaBlock = helper.getClosest(element, ".js-textarea-block");
    var textareaBlockField = textareaBlock.querySelector(".js-textarea-block-field");
    textareaBlockField.focus();
  };

  function render() {
    var all_textareaBlockField = helper.eA(".js-textarea-block-field");
    for (var i = 0; i < all_textareaBlockField.length; i++) {
      var path = all_textareaBlockField[i].dataset.path;
      if (path) {
        var content = helper.getObject(sheet.getCharacter(), path);
        all_textareaBlockField[i].innerHTML = content;
        updateTextareaBlock(all_textareaBlockField[i]);
      };
    };
  };

  // exposed methods
  return {
    update: updateTextareaBlock,
    focus: focus,
    render: render,
    clear: clear,
    bind: bind
  };

})();

var totalBlock = (function() {


  function render() {
    var all_totalBlockBonuses = helper.eA(".js-total-block-bonuses");
    var all_totalBlockToggleCheck = helper.eA(".js-total-block-toggle-check");

    for (var i = 0; i < all_totalBlockBonuses.length; i++) {
      var path = all_totalBlockBonuses[i].dataset.bonusPath;
      var totalBlock = helper.getClosest(all_totalBlockBonuses[i], ".js-total-block");
      if (path) {
        var object = helper.getObject(sheet.getCharacter(), path);
        for (var key in object) {
          if (object[key]) {
            if (key == "str_bonus") {
              totalBlock.dataset.strBonus = "true";
            };
            if (key == "dex_bonus") {
              totalBlock.dataset.dexBonus = "true";
            };
            if (key == "con_bonus") {
              totalBlock.dataset.conBonus = "true";
            };
            if (key == "int_bonus") {
              totalBlock.dataset.intBonus = "true";
            };
            if (key == "wis_bonus") {
              totalBlock.dataset.wisBonus = "true";
            };
            if (key == "cha_bonus") {
              totalBlock.dataset.chaBonus = "true";
            };
            if (key == "bab") {
              totalBlock.dataset.babBonus = "true";
            };
            if (key == "size") {
              totalBlock.dataset.sizeBonus = "true";
            };
            if (key == "level") {
              totalBlock.dataset.levelBonus = "true";
            };
            if (key == "half_level") {
              totalBlock.dataset.halfLevelBonus = "true";
            };
            if (key == "plus_ten") {
              totalBlock.dataset.plusTenBonus = "true";
            };
            if (key == "ac_armor") {
              totalBlock.dataset.acArmor = "true";
            };
            if (key == "ac_shield") {
              totalBlock.dataset.acShield = "true";
            };
            if (key == "ac_deflect") {
              totalBlock.dataset.acDeflect = "true";
            };
            if (key == "ac_dodge") {
              totalBlock.dataset.acDodge = "true";
            };
            if (key == "ac_natural") {
              totalBlock.dataset.acNatural = "true";
            };
            if (key == "class_skill") {
              totalBlock.dataset.classSkill = "true";
            };
            if (key == "check_penalty") {
              totalBlock.dataset.checkPenalty = "true";
            };
          };
        };
      };
    };
    for (var i = 0; i < all_totalBlockToggleCheck.length; i++) {
      var path = all_totalBlockToggleCheck[i].dataset.path;
      var state = helper.getObject(sheet.getCharacter(), path);
      all_totalBlockToggleCheck[i].checked = state;
    };
  };

  function update() {
    var all_totalBlock = helper.eA(".js-total-block");
    for (var i = 0; i < all_totalBlock.length; i++) {
      var statsStrModifier = helper.e(".js-stats-str-modifier");
      var statsDexModifier = helper.e(".js-stats-dex-modifier");
      var statsConModifier = helper.e(".js-stats-con-modifier");
      var statsIntModifier = helper.e(".js-stats-int-modifier");
      var statsWisModifier = helper.e(".js-stats-wis-modifier");
      var statsChaModifier = helper.e(".js-stats-cha-modifier");
      var statsStrModifierTemp = helper.e(".js-stats-str-modifier-temp");
      var statsDexModifierTemp = helper.e(".js-stats-dex-modifier-temp");
      var statsConModifierTemp = helper.e(".js-stats-con-modifier-temp");
      var statsIntModifierTemp = helper.e(".js-stats-int-modifier-temp");
      var statsWisModifierTemp = helper.e(".js-stats-wis-modifier-temp");
      var statsChaModifierTemp = helper.e(".js-stats-cha-modifier-temp");
      var strBonus = 0;
      var dexBonus = 0;
      var conBonus = 0;
      var intBonus = 0;
      var wisBonus = 0;
      var chaBonus = 0;
      var babBonus = 0;
      var sizeBonus = 0;
      var levelBonus = 0;
      var halfLevelBonus = 0;
      var plusTenBonus = 0;
      var acArmor = 0;
      var acShield = 0;
      var acDeflect = 0;
      var acDodge = 0;
      var acNatural = 0;
      var classSkill = 0;
      var checkPenalty = 0;
      // str
      if (all_totalBlock[i].dataset.strBonus == "true") {
        // if ability temp mod is empty
        if (statsStrModifierTemp.textContent == "") {
          strBonus = parseInt(statsStrModifier.textContent, 10 || 0);
        } else {
          strBonus = parseInt(statsStrModifierTemp.textContent, 10 || 0);
        };
      };
      // dex
      if (all_totalBlock[i].dataset.dexBonus == "true") {
        // if ability temp mod is empty
        if (statsDexModifierTemp.textContent == "") {
          dexBonus = parseInt(statsDexModifier.textContent, 10 || 0);
        } else {
          dexBonus = parseInt(statsDexModifierTemp.textContent, 10 || 0);
        };
      };
      // con
      if (all_totalBlock[i].dataset.conBonus == "true") {
        // if ability temp mod is empty
        if (statsConModifierTemp.textContent == "") {
          conBonus = parseInt(statsConModifier.textContent, 10 || 0);
        } else {
          conBonus = parseInt(statsConModifierTemp.textContent, 10 || 0);
        };
      };
      // int
      if (all_totalBlock[i].dataset.intBonus == "true") {
        // if ability temp mod is empty
        if (statsIntModifierTemp.textContent == "") {
          intBonus = parseInt(statsIntModifier.textContent, 10 || 0);
        } else {
          intBonus = parseInt(statsIntModifierTemp.textContent, 10 || 0);
        };
      };
      // wis
      if (all_totalBlock[i].dataset.wisBonus == "true") {
        // if ability temp mod is empty
        if (statsWisModifierTemp.textContent == "") {
          wisBonus = parseInt(statsWisModifier.textContent, 10 || 0);
        } else {
          wisBonus = parseInt(statsWisModifierTemp.textContent, 10 || 0);
        };
      };
      // cha
      if (all_totalBlock[i].dataset.chaBonus == "true") {
        // if ability temp mod is empty
        if (statsChaModifierTemp.textContent == "") {
          chaBonus = parseInt(statsChaModifier.textContent, 10 || 0);
        } else {
          chaBonus = parseInt(statsChaModifierTemp.textContent, 10 || 0);
        };
      };
      // bab
      if (all_totalBlock[i].dataset.babBonus == "true") {
        babBonus = parseInt(helper.e("#offense-base-attack").value, 10 || 0);
      };
      // size
      if (all_totalBlock[i].dataset.sizeBonus == "true") {
        sizeBonus = parseInt(helper.e("#defense-ac-size-bonus").value, 10 || 0);
      };
      // level
      if (all_totalBlock[i].dataset.levelBonus == "true") {
        levelBonus = parseInt(helper.e("#basics-level").value, 10 || 0);
      };
      // half level
      if (all_totalBlock[i].dataset.halfLevelBonus == "true") {
        halfLevelBonus = Math.floor(parseInt(helper.e("#basics-level").value, 10 || 0) / 2) || 0;
      };
      // ac armor
      if (all_totalBlock[i].dataset.acArmor == "true") {
        acArmor = parseInt(helper.e("#defense-ac-armor").value, 10 || 0);
      };
      // ac shield
      if (all_totalBlock[i].dataset.acShield == "true") {
        acShield = parseInt(helper.e("#defense-ac-shield").value, 10 || 0);
      };
      // ac deflect
      if (all_totalBlock[i].dataset.acDeflect == "true") {
        acDeflect = parseInt(helper.e("#defense-ac-deflect").value, 10 || 0);
      };
      // ac dodge
      if (all_totalBlock[i].dataset.acDodge == "true") {
        acDodge = parseInt(helper.e("#defense-ac-dodge").value, 10 || 0);
      };
      // ac natural
      if (all_totalBlock[i].dataset.acNatural == "true") {
        acNatural = parseInt(helper.e("#defense-ac-natural").value, 10 || 0);
      };
      // class skill
      if (all_totalBlock[i].dataset.classSkill == "true") {
        var ranks;
        if (all_totalBlock[i].querySelector(".js-input-block-field-ranks")) {
          ranks = parseInt(all_totalBlock[i].querySelector(".js-input-block-field-ranks").value, 10) || 0;
        } else if (all_totalBlock[i].querySelector(".js-input-block-field-custom-ranks")) {
          ranks = parseInt(all_totalBlock[i].querySelector(".js-input-block-field-custom-ranks").value, 10) || 0;
        };
        if (ranks > 0) {
          classSkill = 3;
        } else {
          classSkill = 0;
        };
      };
      // armor check penalty
      if (all_totalBlock[i].dataset.checkPenalty == "true") {
        checkPenalty = parseInt(helper.e("#defense-ac-check-penalty").value, 10 || 0);
      };
      // 10
      if (all_totalBlock[i].dataset.plusTenBonus == "true") {
        plusTenBonus = 10;
      };
      // check if any bonus is NaN
      if (isNaN(levelBonus)) {
        levelBonus = 0;
      };
      if (isNaN(strBonus)) {
        strBonus = 0;
      };
      if (isNaN(dexBonus)) {
        dexBonus = 0;
      };
      if (isNaN(conBonus)) {
        conBonus = 0;
      };
      if (isNaN(intBonus)) {
        intBonus = 0;
      };
      if (isNaN(wisBonus)) {
        wisBonus = 0;
      };
      if (isNaN(chaBonus)) {
        chaBonus = 0;
      };
      if (isNaN(babBonus)) {
        babBonus = 0;
      };
      if (isNaN(sizeBonus)) {
        sizeBonus = 0;
      };
      if (isNaN(levelBonus)) {
        levelBonus = 0;
      };
      if (isNaN(plusTenBonus)) {
        plusTenBonus = 0;
      };
      if (isNaN(acArmor)) {
        acArmor = 0;
      };
      if (isNaN(acShield)) {
        acShield = 0;
      };
      if (isNaN(acDeflect)) {
        acDeflect = 0;
      };
      if (isNaN(acDodge)) {
        acDodge = 0;
      };
      if (isNaN(acNatural)) {
        acNatural = 0;
      };
      if (isNaN(classSkill)) {
        classSkill = 0;
      };
      if (isNaN(checkPenalty)) {
        checkPenalty = 0;
      };
      var total = all_totalBlock[i].querySelector(".js-total-block-total");
      var path = total.dataset.path;
      var all_inputBlockField = all_totalBlock[i].querySelectorAll(".js-input-block-field");
      var modifiers = [];
      var modifiers_total = 0;
      for (var q = 0; q < all_inputBlockField.length; q++) {
        if (all_inputBlockField.length > 0) {
          if (all_inputBlockField[q].dataset.total == "addition") {
            modifiers.push(parseInt(all_inputBlockField[q].value, 10) || 0);
          };
          if (all_inputBlockField[q].dataset.total == "subtract") {
            modifiers.push(-parseInt(all_inputBlockField[q].value, 10) || 0);
          };
        };
      };
      // if modifiers array has values total them
      if (modifiers.length > 0) {
        modifiers_total = modifiers.reduce(function(a, b) {
          return a + b;
        });
      };
      // grand total
      var grandTotal = modifiers_total + levelBonus + halfLevelBonus + babBonus + sizeBonus + plusTenBonus + strBonus + dexBonus + conBonus + intBonus + wisBonus + chaBonus + acArmor + acShield + acDeflect + acDodge + acNatural + classSkill + checkPenalty;
      // update total
      total.textContent = grandTotal;
      // store current to character object
      if (path) {
        helper.setObject(sheet.getCharacter(), path, parseInt(total.innerHTML, 10) || 0);
      };
    };
    sheet.storeCharacters();
  };

  function _bonusTextLable(bonusType) {
    if (bonusType == "str-bonus" || bonusType == "str_bonus") {
      return "Str Bonus";
    };
    if (bonusType == "dex-bonus" || bonusType == "dex_bonus") {
      return "Dex Bonus";
    };
    if (bonusType == "con-bonus" || bonusType == "con_bonus") {
      return "Con Bonus";
    };
    if (bonusType == "int-bonus" || bonusType == "int_bonus") {
      return "Int Bonus";
    };
    if (bonusType == "wis-bonus" || bonusType == "wis_bonus") {
      return "Wis Bonus";
    };
    if (bonusType == "cha-bonus" || bonusType == "cha_bonus") {
      return "Cha Bonus";
    };
    if (bonusType == "bab") {
      return "Base Attack Bonus";
    };
    if (bonusType == "size") {
      return "Size Bonus";
    };
    if (bonusType == "level") {
      return "Level";
    };
    if (bonusType == "half-level" || bonusType == "half_level") {
      return "Half Level";
    };
    if (bonusType == "plus-ten" || bonusType == "plus_ten") {
      return "Plus 10";
    };
    if (bonusType == "ac-armor" || bonusType == "ac_armor") {
      return "Armor";
    };
    if (bonusType == "ac-shield" || bonusType == "ac_shield") {
      return "Shield";
    };
    if (bonusType == "ac-deflect" || bonusType == "ac_deflect") {
      return "Deflect";
    };
    if (bonusType == "ac-dodge" || bonusType == "ac_dodge") {
      return "Dodge";
    };
    if (bonusType == "ac-natural" || bonusType == "ac_natural") {
      return "Natural Armor";
    };
    if (bonusType == "class-skill" || bonusType == "class_skill") {
      return "Class Skill";
    };
    if (bonusType == "check-penalty" || bonusType == "check_penalty") {
      return "Check Penalty";
    };
  };

  function _totalBlockModalContent(element) {
    var totalBlock = helper.getClosest(element, ".js-total-block");
    var path = element.dataset.bonusPath;
    var bonuses = element.dataset.bonuses.split(",");
    var heading = element.dataset.modalHeading || "Bonuses to add to this ability";
    var container = document.createElement("div");
    container.setAttribute("class", "container");
    var row = document.createElement("div");
    row.setAttribute("class", "row");

    if (bonuses) {
      var data = helper.getObject(sheet.getCharacter(), path);
      for (var i = 0; i < bonuses.length; i++) {
        var col = document.createElement("div");
        col.setAttribute("class", "col-xs-6 col-xl-4");

        var div = document.createElement("div");
        div.setAttribute("class", "m-total-block-toggle js-total-block-toggle");

        var input = document.createElement("input");
        input.setAttribute("id", bonuses[i].replace(/_+/g, "-"));
        input.setAttribute("class", "m-total-block-toggle-check");
        input.setAttribute("data-path", path + "." + bonuses[i]);
        input.setAttribute("data-bonus-type", bonuses[i].replace(/_+/g, "-"));
        input.setAttribute("type", "checkbox");
        input.setAttribute("tabindex", "3");
        input.checked = data[bonuses[i]];

        var label = document.createElement("label");
        label.setAttribute("for", bonuses[i].replace(/_+/g, "-"));
        label.setAttribute("class", "label-left u-full-width");
        label.textContent = _bonusTextLable(bonuses[i]);

        div.appendChild(input);
        div.appendChild(label);
        col.appendChild(div);
        row.appendChild(col);

        _bind_bonusTypeChecks(input, totalBlock);

      };
    };
    container.appendChild(row);
    modal.render(heading, container, "Done");
  };

  function _bind_bonusTypeChecks(element, totalBlock) {
    element.addEventListener("change", function() {
      _addRemoveBonus(this, totalBlock);
      _store(this, totalBlock);
      update();
    }, false);
  };

  function _bind_classSkillToggle(element) {
    var totalBlock = helper.getClosest(element, ".js-total-block");
    element.addEventListener("change", function() {
      _addRemoveBonus(this, totalBlock);
      _store(this, totalBlock);
      update();
    }, false);
  };

  function _bind_bonusButtons(element) {
    if (element.nodeName.toLowerCase() == "a") {
      element.addEventListener("click", function(event) {
        event.stopPropagation();
        event.preventDefault();
        _totalBlockModalContent(this);
      }, false);
    };
  };

  function _store(input, totalBlock) {
    var totalBlock = helper.getClosest(input, ".js-total-block") || totalBlock;
    var path = input.dataset.path;
    helper.setObject(sheet.getCharacter(), path, input.checked);
    sheet.storeCharacters();
  };

  function bind() {
    var all_totalBlockBonuses = helper.eA(".js-total-block-bonuses");
    var all_totalBlockToggleCheck = helper.eA(".js-total-block-toggle-check");
    for (var i = 0; i < all_totalBlockBonuses.length; i++) {
      _bind_bonusButtons(all_totalBlockBonuses[i]);
    };
    for (var i = 0; i < all_totalBlockToggleCheck.length; i++) {
      _bind_classSkillToggle(all_totalBlockToggleCheck[i]);
    };
  };

  function _addRemoveBonus(input, totalBlock) {
    var totalBlock = helper.getClosest(input, ".js-total-block") || totalBlock;
    var bonusType = input.dataset.bonusType;
    if (input.checked) {
      if (bonusType == "str-bonus") {
        totalBlock.dataset.strBonus = "true";
      };
      if (bonusType == "dex-bonus") {
        totalBlock.dataset.dexBonus = "true";
      };
      if (bonusType == "con-bonus") {
        totalBlock.dataset.conBonus = "true";
      };
      if (bonusType == "int-bonus") {
        totalBlock.dataset.intBonus = "true";
      };
      if (bonusType == "wis-bonus") {
        totalBlock.dataset.wisBonus = "true";
      };
      if (bonusType == "cha-bonus") {
        totalBlock.dataset.chaBonus = "true";
      };
      if (bonusType == "bab") {
        totalBlock.dataset.babBonus = "true";
      };
      if (bonusType == "size") {
        totalBlock.dataset.sizeBonus = "true";
      };
      if (bonusType == "level") {
        totalBlock.dataset.levelBonus = "true";
      };
      if (bonusType == "half-level") {
        totalBlock.dataset.halfLevelBonus = "true";
      };
      if (bonusType == "plus-ten") {
        totalBlock.dataset.plusTenBonus = "true";
      };
      if (bonusType == "ac-armor") {
        totalBlock.dataset.acArmor = "true";
      };
      if (bonusType == "ac-shield") {
        totalBlock.dataset.acShield = "true";
      };
      if (bonusType == "ac-deflect") {
        totalBlock.dataset.acDeflect = "true";
      };
      if (bonusType == "ac-dodge") {
        totalBlock.dataset.acDodge = "true";
      };
      if (bonusType == "ac-natural") {
        totalBlock.dataset.acNatural = "true";
      };
      if (bonusType == "class-skill") {
        totalBlock.dataset.classSkill = "true";
      };
      if (bonusType == "check-penalty") {
        totalBlock.dataset.checkPenalty = "true";
      };
    } else {
      if (bonusType == "str-bonus") {
        totalBlock.dataset.strBonus = "false";
      };
      if (bonusType == "dex-bonus") {
        totalBlock.dataset.dexBonus = "false";
      };
      if (bonusType == "con-bonus") {
        totalBlock.dataset.conBonus = "false";
      };
      if (bonusType == "int-bonus") {
        totalBlock.dataset.intBonus = "false";
      };
      if (bonusType == "wis-bonus") {
        totalBlock.dataset.wisBonus = "false";
      };
      if (bonusType == "cha-bonus") {
        totalBlock.dataset.chaBonus = "false";
      };
      if (bonusType == "bab") {
        totalBlock.dataset.babBonus = "false";
      };
      if (bonusType == "size") {
        totalBlock.dataset.sizeBonus = "false";
      };
      if (bonusType == "level") {
        totalBlock.dataset.levelBonus = "false";
      };
      if (bonusType == "half-level") {
        totalBlock.dataset.halfLevelBonus = "false";
      };
      if (bonusType == "plus-ten") {
        totalBlock.dataset.plusTenBonus = "false";
      };
      if (bonusType == "ac-armor") {
        totalBlock.dataset.acArmor = "false";
      };
      if (bonusType == "ac-shield") {
        totalBlock.dataset.acShield = "false";
      };
      if (bonusType == "ac-deflect") {
        totalBlock.dataset.acDeflect = "false";
      };
      if (bonusType == "ac-dodge") {
        totalBlock.dataset.acDodge = "false";
      };
      if (bonusType == "ac-natural") {
        totalBlock.dataset.acNatural = "false";
      };
      if (bonusType == "class-skill") {
        totalBlock.dataset.classSkill = "false";
      };
      if (bonusType == "check-penalty") {
        totalBlock.dataset.checkPenalty = "false";
      };
    };
  };


  function clear() {
    var all_totalBlock = helper.eA(".js-total-block");
    for (var i = 0; i < all_totalBlock.length; i++) {
      delete all_totalBlock[i].dataset.strBonus;
      delete all_totalBlock[i].dataset.dexBonus;
      delete all_totalBlock[i].dataset.conBonus;
      delete all_totalBlock[i].dataset.intBonus;
      delete all_totalBlock[i].dataset.wisBonus;
      delete all_totalBlock[i].dataset.chaBonus;
      delete all_totalBlock[i].dataset.babBonus;
      delete all_totalBlock[i].dataset.sizeBonus;
      delete all_totalBlock[i].dataset.levelBonus;
      delete all_totalBlock[i].dataset.halfLevelBonus;
      delete all_totalBlock[i].dataset.plusTenBonus;
      delete all_totalBlock[i].dataset.acArmor;
      delete all_totalBlock[i].dataset.acShield;
      delete all_totalBlock[i].dataset.acDeflect;
      delete all_totalBlock[i].dataset.acDodge;
      delete all_totalBlock[i].dataset.acNatural;
      delete all_totalBlock[i].dataset.classSkill;
      delete all_totalBlock[i].dataset.checkPenalty;
    };
  };

  // exposed methods
  return {
    clear: clear,
    bind: bind,
    update: update,
    render: render
  };

})();

(function() {

  if (document.querySelector(".js-quick-nav")) {
    var quickNavHeight = parseInt(getComputedStyle(document.querySelector(".js-quick-nav")).height, 10);
  };

  smoothScroll.init({
    speed: 300,
    offset: quickNavHeight
  });

})();

(function() {

  nav.bind();
  nav.render();
  sheet.bind();
  sheet.render();
  night.update();

})();
