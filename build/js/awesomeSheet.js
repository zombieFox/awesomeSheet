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

  function setDropdown(dropdown, value) {
    for (var i = 0; i < dropdown.options.length; i++) {
      if (dropdown.options[i].text == value) {
        dropdown.selectedIndex = i;
        dropdown.options[i].selected = true;
        // console.log(dropdown, value, dropdown.options, dropdown.selectedIndex);
        return;
      };
    };
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

  function getObject(object, path, arrayIndex) {
    // split path into array items
    var address = path.split(".");
    // while array has more than 1 item
    while (address.length > 1) {
      // shift off and store the first key
      var currentKey = address.shift();
      // copy the object
      var parentObject = object;
      // drill down the object with the first key
      object = object[currentKey];
      // if there is not object there make one
      if (!object || typeof object != "object") {
        object = parentObject;
        // object = object[currentKey] = {};
        object[currentKey] = {};
      };
    };
    var finalKey = address.shift();
    if (finalKey in object) {
      if (arrayIndex !== undefined && typeof arrayIndex == "number") {
        // if arrayIndex return index of array
        // console.log("returning array", 1);
        return object[finalKey][arrayIndex];
      } else {
        // return value
        // console.log("returning value", 2);
        return object[finalKey];
      };
    } else {
      // if nothing found set empty value and then return
      // console.log("set value and returning value", 3);
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

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
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

  function getRadioValue(form, radioGroupName) {
    var selectedDice;
    // get list of radio buttons with specified name
    var radios = form[radioGroupName];
    // radios can also be expressed with
    // console.log(e(".dice-form")["dice-select"]);
    // loop through list of radio buttons
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) { // radio checked?
        selectedDice = radios[i]; // if so, hold its value in selectedDice
      };
    };
    return selectedDice;
  };

  function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };

  function pasteStrip(event) {
    if (event.clipboardData) {
      event.preventDefault();
      var text = event.clipboardData.getData("text/plain");
      document.execCommand("insertText", false, text);
    } else {
      return true;
    };
  };

  function inViewport(element) {
    var rectangle = element.getBoundingClientRect();
    return (
      rectangle.top >= 0 && rectangle.left >= 0 && rectangle.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rectangle.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  function sortObject(object, key) {
    object.sort(function(a, b) {
      // console.log(a);
      // console.log(b);
      var textA = a[key].toUpperCase();
      var textB = b[key].toUpperCase();
      if (textA < textB) {
        return -1;
      } else if (textA > textB) {
        return 1;
      } else {
        return 0;
      };
      // return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    return object;
  };

  function getDateTime() {
    var dateStamp = new Date();
    var object = {
      // string: dateStamp.constructor(),
      // time: dateStamp.getTime()
      date: dateStamp.getDate(),
      day: dateStamp.getDay(),
      year: dateStamp.getFullYear(),
      hours: dateStamp.getHours(),
      milliseconds: dateStamp.getMilliseconds(),
      minutes: dateStamp.getMinutes(),
      month: dateStamp.getMonth(),
      seconds: dateStamp.getSeconds()
    }
    return object;
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
    setDropdown: setDropdown,
    randomId: randomId,
    randomNumber: randomNumber,
    getRadioValue: getRadioValue,
    getUrlParameter: getUrlParameter,
    pasteStrip: pasteStrip,
    inViewport: inViewport,
    sortObject: sortObject,
    getDateTime: getDateTime
  };

})();

var card = (function() {

  function bind() {
    _bind_cardTitle();
    _bind_toggle();
    _bind_minimise();
  };

  function _bind_cardTitle() {
    var all_cardTitle = helper.eA(".js-card-title");
    for (var i = 0; i < all_cardTitle.length; i++) {
      all_cardTitle[i].addEventListener("click", function(event) {
        event.stopPropagation();
        event.preventDefault();
        _linkSelf(this);
      }, false);
    };
  };

  function _bind_minimise() {
    var all_cardMinimise = helper.eA(".js-card-minimise");
    for (var i = 0; i < all_cardMinimise.length; i++) {
      all_cardMinimise[i].addEventListener("click", function(event) {
        event.stopPropagation();
        event.preventDefault();
        _minimise(this);
      }, false);
    };
  };

  function _bind_toggle() {
    var all_cardDisplayToggle = helper.eA(".js-card-toggle");
    for (var i = 0; i < all_cardDisplayToggle.length; i++) {
      all_cardDisplayToggle[i].addEventListener("click", function(event) {
        event.stopPropagation();
        event.preventDefault();
        _toggle(this);
        // _unminimise(this);
      }, false);
    };
  };

  function _linkSelf(element) {
    var id = "#" + helper.getClosest(element, ".js-section").id;
    var all_section = helper.eA(".js-section");
    var quickNav = helper.e(".js-quick-nav");
    var offset;
    var options;
    // if nav is on the left after 900px wide viewport
    if (document.documentElement.clientWidth >= 900) {
      offset = parseInt(getComputedStyle(all_section[1]).marginTop, 10);
    } else {
      offset = parseInt(getComputedStyle(all_section[1]).marginTop, 10) + parseInt(getComputedStyle(quickNav).height, 10);
    };
    if (window.innerWidth < 550) {
      options = {
        speed: 150,
        offset: offset
      };
    } else {
      options = {
        speed: 300,
        offset: offset
      };
    };
    smoothScroll.animateScroll(null, id, options);
  };

  function _toggle(element) {
    var section = helper.getClosest(element, ".js-section");
    display.clear(section);
    display.render(section);
    display.toggle(section);
    display.update();
    themeColor.update();
  };

  // function _unminimise(element) {
  //   var section = helper.getClosest(element, ".js-section");
  //   var display = (section.dataset.displayMode == "true");
  //   var minimise = (section.dataset.minimise == "true");
  //   if (minimise && display) {
  //     _minimise(element);
  //   };
  // };

  function _minimise(element) {
    var section = helper.getClosest(element, ".js-section");
    var icon = section.querySelector(".js-card-minimise-icon");
    var cardTabs = section.querySelector(".js-card-tabs");
    var display = (section.dataset.displayMode == "true");

    var _minimise = function() {
      section.dataset.minimise = "true";
      helper.addClass(section, "is-minimise");
      helper.addClass(icon, "icon-unfold-more");
      helper.removeClass(icon, "icon-unfold-less");
      if (cardTabs && !display) {
        helper.addClass(cardTabs, "is-hidden");
      };
    };

    var _maximise = function() {
      section.dataset.minimise = "false";
      helper.removeClass(section, "is-minimise");
      helper.removeClass(icon, "icon-unfold-more");
      helper.addClass(icon, "icon-unfold-less");
      if (cardTabs && !display) {
        helper.removeClass(cardTabs, "is-hidden");
      };
    };

    if (section.dataset.minimise == "true") {
      _maximise();
    } else if (section.dataset.minimise == "false" || !section.dataset.minimise) {
      _minimise();
    };
  };

  // exposed methods
  return {
    bind: bind
  };

})();

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
      xp: "",
      height: "",
      weight: "",
      age: "",
      gender: "",
      speed: "",
      hero_points: "",
      luck_points: "",
      character_description: "",
      initiative: {
        misc: "",
        temp: "",
        feat: "",
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
      }
    },
    statistics: {
      stats: {
        str: {
          score: "",
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        },
        dex: {
          score: "",
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        },
        con: {
          score: "",
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        },
        int: {
          score: "",
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        },
        wis: {
          score: "",
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        },
        cha: {
          score: "",
          modifier: "",
          temp_score: "",
          temp_modifier: ""
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
      item: [],
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
      acrobatics: {
        ranks: "",
        misc: "",
        current: "",
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
          check_penalty: true,
          size_modifier_fly: true
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
          check_penalty: true,
          size_modifier_stealth: true
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
      }
    },
    spells: {
      concentration: {
        current: "",
        misc: "",
        temp: "",
        feat: "",
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
        feat: "",
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

var izlara = (function() {

  var data = {
    awesomeSheet: true,
    basics: {
      name: "Izlara Drell",
      race: "Elf",
      level: 12,
      classes: [{
        classname: "Wizard",
        level: 12,
        hp: 62,
        fortitude: 4,
        reflex: 4,
        will: 8,
        ranks: 24,
        bab: 6
      }],
      size: {
        category: "Medium",
        size_modifier: 0,
        special_size_modifier: 0,
        size_modifier_fly: 0,
        size_modifier_stealth: 0
      },
      alignment: "Neutral Good",
      deity: "",
      xp: 220000,
      height: "5.5ft",
      weight: "95lbs",
      age: "118",
      gender: "Female",
      speed: "30",
      hero_points: "1",
      luck_points: "3",
      character_description: "A responsible woman with a pragmatic outlook on life. A little taller than average, tanned dark-brown skin, diamond-shape face, hazel-green, deep-set eyes.",
      initiative: {
        misc: 2,
        temp: "",
        feat: 4,
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: true
        }
      }
    },
    statistics: {
      stats: {
        str: {
          score: 12,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        },
        dex: {
          score: 16,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        },
        con: {
          score: 14,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        },
        int: {
          score: 28,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        },
        wis: {
          score: 16,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        },
        cha: {
          score: 16,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        }
      },
      feats: "Improved Initiative, Combat Casting, Craft Wondrous Item, Spell Focus (Conjuration), Extend Spell, Quicken Spell, Spell Penetration, Eschew materials",
      traits: "Reactionary, Magical Lineage (Overland Flight)",
      languages: "Abyssal, Aklo, Aquan, Auran, Celestial, Common, Druidic, Dwarven, Elven, Giant, Goblin, Gnoll, Halfling, Ignan, Infernal, Orc, Sylvan, Terran, Undercommon",
      special_abilities: "Low-Light Vision, Elven Immunities, Elven Magic, Keen Senses, Weapon Familiarity, Arcane bond (Rat), Arcane School (Divination [Foresight]), Opposition Arcane School: Enchantment, Necromancy, Cantrips, Scribe scroll, Forewarned, Prescience, Foretell"
    },
    equipment: {
      gear: "Spellbook, Scroll case, Spell component pouch, Candle, Flint and steel, Tindertwig, Ink, pen and paper, Belt Pouch, Backpack, Rations (5 days), Spyglass",
      magic_gear: "Handy Haversack, Ioun Stones (Scarlet and Blue), lesser, Pearl of Power (1st) (1), Pearl of Power (2nd) (1), Pearl of Power (3rd) (1), Pearl of Power (4th) (1), Pearl of Power (5th) (1)<br><br>Viles:<br>Antitoxin (2), Holy Water (1)<br><br>Potion:<br>Cure Light Wounds (4), Cure Moderate Wounds (2), Cure Serious Wounds (2), Protection from Evil (2), Displacement (2), Hide from Animals (1), Delay Poison (1), Bear's Endurance (1), Levitate (1)<br><br>Scroll:<br>Create Pit (3), Spiked Pit (3), Hungry Pit (3), Acid Pit (3), Summon Monster III (3), Summon Monster IV (3), Summon Monster V (3), Summon Monster VI (2), Form of the Dragon I (2), Invisibility (5), Web (3), Stinking Cloud (2), Grease (2), Mirror Image (3), Fly (3), Interposing Hand (1), Elemental Body 2 (2), Wall of Fire (2), Haste (2), Enlarge Person (2), Endure Elements (2), Acid Arrow (2), Gust of Wind (1), Animate Rope (2), False Life (2), Floating Disk (1), Erase (1), Detect Secret Doors (2), Black Tentacles (2), Mage Armor (2)",
      item: [{
        name: "Flask of Oil",
        quantity: 4,
        weight: 4
      }, {
        name: "Sack",
        quantity: 1,
        weight: 0.5
      }, {
        name: "Waterskin",
        quantity: 1,
        weight: 4
      }, {
        name: "Bedroll and Blanket",
        quantity: 1,
        weight: 8
      }, {
        name: "Bloodblock",
        quantity: 2,
        weight: 2
      }, {
        name: "Healer's Kit",
        quantity: 2,
        weight: 2
      }, {
        name: "Silk Rope (50ft)",
        quantity: 1,
        weight: 5
      }, {
        name: "Mirror",
        quantity: 1,
        weight: 1
      }, {
        name: "Compass",
        quantity: 1,
        weight: 0.5
      }],
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
        belts: "Belt of Physical Perfection +2",
        body: "",
        chest: "",
        eyes: "Eyes of the Eagle",
        feet: "Boots of Teleportation",
        hands: "",
        head: "",
        headband: "Headband of Mental Superiority +4",
        neck: "Amulet of Natural Armor +2",
        ring_left_hand: "Ring of Sustenance",
        ring_right_hand: "Ring of Feather Falling",
        shoulders: "Cloak of Resistance +3",
        wrist: ""
      },
      wealth: {
        platinum: "45",
        gold: "8,405",
        silver: "102",
        copper: "",
        total: ""
      },
      consumable: [{
        item: "Boots of Teleportation",
        current: "",
        total: 3,
        used: 1
      }, {
        item: "Wand of Lightning Bolt",
        current: "",
        total: 50,
        used: 2
      }, {
        item: "Wand of Spider Climb",
        current: "",
        total: 50,
        used: 19
      }, {
        item: "Rod of Metamagic Extend Lesser",
        current: "",
        total: 3,
        used: 1
      }, {
        item: "Rod of Metamagic Silent Lesser",
        current: "",
        total: 3,
        used: ""
      }, {
        item: "Rod of Metamagic Quicken Lesser",
        current: "",
        total: 3,
        used: ""
      }]
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
        natural: 2,
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
        resistance: 3,
        feat: "",
        trait: "",
        misc: 2,
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
        resistance: 3,
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
        resistance: 3,
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
      save_notes: "Immune to magic sleep effects. +2 saving throw against enchantment spells and effects.",
      dr: {
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
        melee: [{
          weapon: "Dagger +1",
          attack: "+7",
          damage: "1d4+1",
          critical: "19–20/x2"
        }],
        ranged: [{
          weapon: "Shortbow +1",
          attack: "+9",
          damage: "1d6",
          critical: "x3",
          range: "60ft",
          ammo: "30 normal, 5 silver"
        }]
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
      custom: [{
        name: "Spellcraft (Identify magic items)",
        ranks: 12,
        misc: 2,
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: true,
          wis_bonus: false,
          cha_bonus: false,
          class_skill: true,
          level: false,
          half_level: false,
          check_penalty: false
        },
        current: ""
      }],
      acrobatics: {
        ranks: "",
        misc: "",
        current: "",
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
        ranks: 8,
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
        ranks: 8,
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
          check_penalty: true,
          size_modifier_fly: true
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
        ranks: 8,
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
        ranks: 8,
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
        ranks: 8,
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
        ranks: 8,
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
        ranks: 8,
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
        ranks: 8,
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
        ranks: 8,
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
        ranks: 8,
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
        ranks: 8,
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
        ranks: 8,
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
        ranks: 12,
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
        ranks: 12,
        misc: 5,
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
        ranks: 12,
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
          check_penalty: true,
          size_modifier_stealth: true
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
      }
    },
    spells: {
      concentration: {
        current: "",
        misc: "",
        temp: "",
        feat: 4,
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: true,
          wis_bonus: false,
          cha_bonus: false,
          level: true,
          half_level: false
        }
      },
      caster_level_check: {
        current: "",
        misc: "",
        temp: "",
        feat: 2,
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: true,
          half_level: false
        }
      },
      spell_notes: "",
      per_day: {
        level_0: 4,
        level_1: 7,
        level_2: 6,
        level_3: 6,
        level_4: 5,
        level_5: 5,
        level_6: 3,
        level_7: "",
        level_8: "",
        level_9: ""
      },
      dc: {
        level_0: 19,
        level_1: 20,
        level_2: 21,
        level_3: 22,
        level_4: 23,
        level_5: 24,
        level_6: 25,
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
        level_0: [{
          name: "Acid Splash",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Arcane Mark",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Dancing Lights",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Detect Magic",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Detect Poison",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Flare",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Ghost Sound",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Haunted Fey Aspect",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Light",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Mage Hand",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Mending",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Message",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Open/Close",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Prestidigitation",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Ray of Frost",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Read Magic",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Resistance",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Spark",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }]
      }, {
        level_1: [{
          name: "Protection From Chaos",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Protection From Evil",
          prepared: 2,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Protection From Good",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Protection From Law",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Hold Portal",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Grease",
          prepared: 2,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Mage Armor",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Mount",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Obscuring Mist",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Summon Monster I",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Unseen Servant",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Comprehend Languages",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Detect Secret Doors",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Detect Undead",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Color Spray",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Silent Image",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Enlarge Person",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Feather Fall",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }]
      }, {
        level_2: [{
          name: "Resist Energy",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Glitterdust",
          prepared: 2,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Summon Monster II",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Web",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Detect Thoughts",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "See Invisibility",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Flaming Sphere",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Invisibility",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Minor Image",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Mirror Image",
          prepared: 2,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Levitate",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Darkvision",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Make Whole",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Pyrotechnics",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Rope Trick",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Create Pit",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }]
      }, {
        level_3: [{
          name: "Dispel Magic",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Magic Circle Against Chaos",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Magic Circle Against Evil",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Magic Circle Against Good",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Magic Circle Against Law",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Phantom Steed",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Sleet Storm",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Stinking Cloud",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Summon Monster III",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Tiny Hut",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Wind Wall",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Fireball",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Fly",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Haste",
          prepared: 2,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Magic Weapon Greater",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Shrink Item",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Slow",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Spiked Pit",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }]
      }, {
        level_4: [{
          name: "Dimensional Anchor",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Black Tentacles",
          prepared: 2,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Dimension Door",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Summon Monster IV",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Arcane Eye",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Confusion",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Resilient Sphere",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Wall of Fire",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Wall of Ice",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Enervation",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Stone Shape",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Acid Pit",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }]
      }, {
        level_5: [{
          name: "Mages Private Sanctum",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Planar Binding Lesser",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Secret Chest",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Summon Monster V",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Teleport",
          prepared: 2,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Wall of Stone",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Contact Other Plane",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Prying Eyes",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Telepathic Bond",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Wall of Force",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Persistent Image",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Sending",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Animal Growth",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Beast Shape III",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Overland Flight",
          prepared: 1,
          active: true,
          cast: 1,
          note: ""
        }, {
          name: "Polymorph",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Telekinesis",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Transmute Rock to Mud",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Permanency",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Hungry Pit",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }]
      }, {
        level_6: [{
          name: "Planar Binding",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Summon Monster VI",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Antimagic Field",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Dispel Magic Greater",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Contingency",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Forceful Hand",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Programmed Image",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Form of the Dragon I",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }]
      }, {
        level_7: []
      }, {
        level_8: []
      }, {
        level_9: []
      }]
    },
    notes: {
      character: [{
        note: "Wizard familiar: Dako. Rat, white hair, tiny."
      }],
      story: []
    },
    events: [{
      type: "xp",
      event: {
        aggregateValue: 60000
      },
      timestamp: {
        date: 13,
        day: 6,
        year: 2017,
        hours: 14,
        milliseconds: 200,
        minutes: 6,
        month: 4,
        seconds: 51
      }
    }, {
      type: "platinum",
      event: {
        aggregateValue: 35
      },
      timestamp: {
        date: 6,
        day: 6,
        year: 2017,
        hours: 22,
        milliseconds: 200,
        minutes: 20,
        month: 4,
        seconds: 37
      }
    }, {
      type: "xp",
      event: {
        aggregateValue: 40000
      },
      timestamp: {
        date: 6,
        day: 6,
        year: 2017,
        hours: 22,
        milliseconds: 200,
        minutes: 10,
        month: 4,
        seconds: 37
      }
    }, {
      type: "gold",
      event: {
        aggregateValue: -1595
      },
      timestamp: {
        date: 29,
        day: 6,
        year: 2017,
        hours: 21,
        milliseconds: 200,
        minutes: 34,
        month: 3,
        seconds: 42
      }
    }, {
      type: "xp",
      event: {
        aggregateValue: 6000
      },
      timestamp: {
        date: 29,
        day: 6,
        year: 2017,
        hours: 21,
        milliseconds: 200,
        minutes: 44,
        month: 3,
        seconds: 42
      }
    }, {
      type: "xp",
      event: {
        aggregateValue: 9900
      },
      timestamp: {
        date: 22,
        day: 6,
        year: 2017,
        hours: 18,
        milliseconds: 200,
        minutes: 19,
        month: 3,
        seconds: 4
      }
    }, {
      type: "xp",
      event: {
        aggregateValue: 20050
      },
      timestamp: {
        date: 15,
        day: 6,
        year: 2017,
        hours: 14,
        milliseconds: 200,
        minutes: 27,
        month: 3,
        seconds: 11
      }
    }, {
      type: "gold",
      event: {
        aggregateValue: 2000
      },
      timestamp: {
        date: 8,
        day: 6,
        year: 2017,
        hours: 18,
        milliseconds: 200,
        minutes: 48,
        month: 3,
        seconds: 55
      }
    }, {
      type: "xp",
      event: {
        aggregateValue: 8050
      },
      timestamp: {
        date: 8,
        day: 6,
        year: 2017,
        hours: 18,
        milliseconds: 200,
        minutes: 38,
        month: 3,
        seconds: 55
      }
    }, {
      type: "xp",
      event: {
        aggregateValue: 6000
      },
      timestamp: {
        date: 1,
        day: 6,
        year: 2017,
        hours: 20,
        milliseconds: 200,
        minutes: 9,
        month: 3,
        seconds: 52
      }
    }, {
      type: "silver",
      event: {
        aggregateValue: -38
      },
      timestamp: {
        date: 25,
        day: 6,
        year: 2017,
        hours: 18,
        milliseconds: 200,
        minutes: 49,
        month: 2,
        seconds: 14
      }
    }, {
      type: "silver",
      event: {
        aggregateValue: 40
      },
      timestamp: {
        date: 25,
        day: 6,
        year: 2017,
        hours: 18,
        milliseconds: 200,
        minutes: 39,
        month: 2,
        seconds: 14
      }
    }, {
      type: "xp",
      event: {
        aggregateValue: 2000
      },
      timestamp: {
        date: 25,
        day: 6,
        year: 2017,
        hours: 18,
        milliseconds: 200,
        minutes: 59,
        month: 2,
        seconds: 14
      }
    }, {
      type: "xp",
      event: {
        aggregateValue: 20100
      },
      timestamp: {
        date: 18,
        day: 6,
        year: 2017,
        hours: 13,
        milliseconds: 200,
        minutes: 40,
        month: 2,
        seconds: 23
      }
    }, {
      type: "gold",
      event: {
        aggregateValue: 4500
      },
      timestamp: {
        date: 11,
        day: 6,
        year: 2017,
        hours: 16,
        milliseconds: 200,
        minutes: 40,
        month: 2,
        seconds: 45
      }
    }, {
      type: "xp",
      event: {
        aggregateValue: 10900
      },
      timestamp: {
        date: 11,
        day: 6,
        year: 2017,
        hours: 16,
        milliseconds: 200,
        minutes: 30,
        month: 2,
        seconds: 45
      }
    }, {
      type: "xp",
      event: {
        aggregateValue: 4000
      },
      timestamp: {
        date: 4,
        day: 6,
        year: 2017,
        hours: 23,
        milliseconds: 200,
        minutes: 4,
        month: 2,
        seconds: 11
      }
    }, {
      type: "platinum",
      event: {
        aggregateValue: 20
      },
      timestamp: {
        date: 25,
        day: 6,
        year: 2017,
        hours: 19,
        milliseconds: 200,
        minutes: 40,
        month: 1,
        seconds: 33
      }
    }, {
      type: "xp",
      event: {
        aggregateValue: 9000
      },
      timestamp: {
        date: 25,
        day: 6,
        year: 2017,
        hours: 19,
        milliseconds: 200,
        minutes: 30,
        month: 1,
        seconds: 33
      }
    }, {
      type: "silver",
      event: {
        aggregateValue: 100
      },
      timestamp: {
        date: 18,
        day: 6,
        year: 2017,
        hours: 12,
        milliseconds: 200,
        minutes: 31,
        month: 1,
        seconds: 59
      }
    }, {
      type: "xp",
      event: {
        aggregateValue: 5500
      },
      timestamp: {
        date: 18,
        day: 6,
        year: 2017,
        hours: 12,
        milliseconds: 200,
        minutes: 21,
        month: 1,
        seconds: 59
      }
    }, {
      type: "xp",
      event: {
        aggregateValue: 2500
      },
      timestamp: {
        date: 11,
        day: 6,
        year: 2017,
        hours: 22,
        milliseconds: 200,
        minutes: 55,
        month: 1,
        seconds: 44
      }
    }, {
      type: "gold",
      event: {
        aggregateValue: 2500
      },
      timestamp: {
        date: 4,
        day: 6,
        year: 2017,
        hours: 18,
        milliseconds: 200,
        minutes: 40,
        month: 1,
        seconds: 1
      }
    }, {
      type: "xp",
      event: {
        aggregateValue: 6000
      },
      timestamp: {
        date: 4,
        day: 6,
        year: 2017,
        hours: 18,
        milliseconds: 200,
        minutes: 30,
        month: 1,
        seconds: 1
      }
    }, {
      type: "gold",
      event: {
        aggregateValue: 1000
      },
      timestamp: {
        date: 28,
        day: 6,
        year: 2017,
        hours: 20,
        milliseconds: 200,
        minutes: 30,
        month: 0,
        seconds: 22
      }
    }, {
      type: "xp",
      event: {
        aggregateValue: 3000
      },
      timestamp: {
        date: 28,
        day: 6,
        year: 2017,
        hours: 20,
        milliseconds: 200,
        minutes: 20,
        month: 0,
        seconds: 22
      }
    }, {
      type: "xp",
      event: {
        aggregateValue: 4500
      },
      timestamp: {
        date: 21,
        day: 6,
        year: 2017,
        hours: 15,
        milliseconds: 200,
        minutes: 2,
        month: 0,
        seconds: 21
      }
    }, {
      type: "xp",
      event: {
        aggregateValue: 2000
      },
      timestamp: {
        date: 14,
        day: 6,
        year: 2017,
        hours: 12,
        milliseconds: 200,
        minutes: 11,
        month: 0,
        seconds: 34
      }
    }, {
      type: "xp",
      event: {
        aggregateValue: 500
      },
      timestamp: {
        date: 7,
        day: 6,
        year: 2017,
        hours: 18,
        milliseconds: 200,
        minutes: 32,
        month: 0,
        seconds: 15
      }
    }]
  };

  // exposed methods
  return {
    data: data
  };

})();

var ravich = (function() {

  var data = {
    awesomeSheet: true,
    basics: {
      name: "Ravich Swiftcloak",
      race: "Human",
      level: 6,
      classes: [{
        classname: "Rogue",
        level: 3,
        hp: 24,
        fortitude: 1,
        reflex: 3,
        will: 1,
        ranks: 27,
        bab: 2
      }, {
        classname: "Fighter",
        level: 3,
        hp: 21,
        fortitude: 3,
        reflex: 1,
        will: 1,
        ranks: 9,
        bab: 3
      }],
      size: {
        category: "Medium",
        size_modifier: 4,
        special_size_modifier: -4,
        size_modifier_fly: 6,
        size_modifier_stealth: 12
      },
      alignment: "Chaotic Neutral",
      deity: "",
      xp: 23000,
      height: "6ft",
      weight: "134lbs",
      age: "24",
      gender: "Male",
      speed: "30",
      hero_points: "1",
      luck_points: "1",
      character_description: "A sneaky man with a realistic outlook on life. Tall, slim build, sallow dark-brown skin, long face, sunken cheeks, light blue, wide-set eyes, bushy eyebrows.",
      initiative: {
        misc: "",
        temp: "",
        feat: 4,
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
      }
    },
    statistics: {
      stats: {
        str: {
          score: 18,
          modifier: 4,
          temp_score: "",
          temp_modifier: ""
        },
        dex: {
          score: 20,
          modifier: 5,
          temp_score: "",
          temp_modifier: ""
        },
        con: {
          score: 13,
          modifier: 1,
          temp_score: "",
          temp_modifier: ""
        },
        int: {
          score: 13,
          modifier: 1,
          temp_score: "",
          temp_modifier: ""
        },
        wis: {
          score: 12,
          modifier: 1,
          temp_score: "",
          temp_modifier: ""
        },
        cha: {
          score: 10,
          modifier: 0,
          temp_score: "",
          temp_modifier: ""
        }
      },
      feats: "Weapon Finesse, Weapon Focus (Rapier), Improved Initiative, Deft Hands, Acrobatic, Toughness, Two-Weapon Fighting, Magical Aptitude, Great Fortitude",
      traits: "Resilient, Dirty Fighter",
      languages: "Common, Humans, Dwarven, Undercommon",
      special_abilities: "Sneak Attack +2d6, Trapfinding, Evasion, Rogue Talent (Finesse Rogue), Trap Sense +1, Bonus Feat (2), Bravery +1, Armor Training 1"
    },
    equipment: {
      gear: "Backpack, Flask Of Oil (2), Pouch (belt), Sack, Candle, Flint And Steel, Tindertwig, Rations (5 Days), Waterskin, Bedroll, Blanket, Bloodblock, Rope (silk), Mirror, Compass, Ink, Inkpen, Paper Sheets, Case For Maps/scrolls, Torch, Dagger, Combat Horse (Tafi), Roc feathers, head and feet, Red Dragon (Adult) scales and claws",
      magic_gear: "Ioun Stone (Dusty Rose), Feather Token (Tree)<br><br>Potion:<br>Cure Light Wounds (4), Cure Moderate Wounds (5), Cure Serious Wounds (1), Resist Fire (1), Alchemist Fire (1), Lesser Restoration (1), Remove Disease (1)",
      item: [{
        name: "Flask of Oil",
        quantity: 2,
        weight: 2
      }, {
        name: "Waterskin",
        quantity: 1,
        weight: 4
      }, {
        name: "Bedroll & Blanket",
        quantity: 1,
        weight: 8
      }, {
        name: "Rope (silk)",
        quantity: 1,
        weight: 5
      }, {
        name: "Mirror",
        quantity: 1,
        weight: 0.5
      }, {
        name: "Compass",
        quantity: 1,
        weight: 1
      }],
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
        armor: "Mithral Chain Shirt +1",
        check_penalty: 0,
        max_dex: 6,
        shield: "Mithral Buckler +1"
      },
      body_slots: {
        belts: "Belt of Physical Might +2 (Str, Dex)",
        body: "",
        chest: "",
        eyes: "",
        feet: "Boots of Striding and Springing",
        hands: "",
        head: "",
        headband: "",
        neck: "Amulet of Natural Armor +1",
        ring_left_hand: "Ring of Protection +1",
        ring_right_hand: "",
        shoulders: "Cloak of Resistance +1",
        wrist: ""
      },
      wealth: {
        platinum: 120,
        gold: 26302,
        silver: 50,
        copper: "",
        total: ""
      },
      consumable: [{
        item: "Wand of Cure Light Wounds",
        current: "",
        total: 50,
        used: 32
      }, {
        item: "Wand of Invisibility",
        current: "",
        total: 50,
        used: 12
      }]
    },
    defense: {
      hp: {
        total: "",
        temp: "",
        damage: 5,
        non_lethal_damage: "",
        current: ""
      },
      ac: {
        misc: 1,
        temp: "",
        armor: 5,
        shield: 1,
        deflect: 1,
        dodge: "",
        natural: 1,
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
        misc: 1,
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
        misc: 1,
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
      ac_notes: "+1 dodge bonus to AC against attacks made by traps. +1 damage when flanking.",
      fortitude: {
        base: "",
        resistance: 1,
        feat: 2,
        trait: 1,
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
        resistance: 1,
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
        resistance: 1,
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
      save_notes: "+1 bonus on Reflex saves made to avoid traps.",
      dr: {
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
        melee: [{
          weapon: "Rapier +1 Flaming",
          attack: "+11",
          damage: "1d6+4, 1d6 fire",
          critical: "18–20/x2"
        }, {
          weapon: "Short Sword +1",
          attack: "+10",
          damage: "1d6+4",
          critical: "19–20/x2"
        }, {
          weapon: "Rapier +1 Flaming, Short Sword +1",
          attack: "+9/+8",
          damage: "1d6+4, 1d6 fire/1d6+4",
          critical: "18–20/x2, 19–20/x2"
        }],
        ranged: [{
          weapon: "Shortbow +1",
          attack: "+15",
          damage: "1d6",
          critical: "x3",
          range: "60ft",
          ammo: "30 nornal"
        }]
      },
      attack_notes: "Sneak Attack +2d6"
    },
    skills: {
      ranks: {
        total: "",
        spent: {
          include_custom: false,
          current: ""
        }
      },
      custom: [{
        name: "Perception (Traps)",
        ranks: 6,
        misc: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: true,
          cha_bonus: false,
          class_skill: true,
          level: false,
          half_level: true,
          check_penalty: false
        },
        current: ""
      }, {
        name: "Disable Device (Traps)",
        ranks: 6,
        misc: 2,
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          class_skill: true,
          level: false,
          half_level: true,
          check_penalty: false
        },
        current: ""
      }, {
        name: "Acrobatics (Jump)",
        ranks: 6,
        misc: 5,
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          class_skill: true,
          level: false,
          half_level: false,
          check_penalty: false
        },
        current: ""
      }],
      acrobatics: {
        ranks: 6,
        misc: 2,
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          class_skill: true,
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
        ranks: 1,
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
        ranks: 6,
        misc: 2,
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
        ranks: 6,
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
          check_penalty: true,
          size_modifier_fly: true
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
        ranks: 1,
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
        ranks: 6,
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
        ranks: 4,
        misc: 2,
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
        ranks: 6,
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
          check_penalty: true,
          size_modifier_stealth: true
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
        ranks: 6,
        misc: 2,
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
      }
    },
    spells: {
      concentration: {
        current: "",
        misc: "",
        temp: "",
        feat: "",
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
        feat: "",
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
      character: [],
      story: []
    },
    events: [{
      type: "platinum",
      event: {
        aggregateValue: 90
      },
      timestamp: {
        date: 13,
        day: 4,
        year: 2017,
        hours: 14,
        milliseconds: 700,
        minutes: 16,
        month: 6,
        seconds: 32
      }
    }, {
      type: "gold",
      event: {
        aggregateValue: 7655
      },
      timestamp: {
        date: 13,
        day: 4,
        year: 2017,
        hours: 14,
        milliseconds: 671,
        minutes: 16,
        month: 6,
        seconds: 19
      }
    }, {
      type: "xp",
      event: {
        aggregateValue: 1210
      },
      timestamp: {
        date: 13,
        day: 4,
        year: 2017,
        hours: 14,
        milliseconds: 937,
        minutes: 16,
        month: 6,
        seconds: 12
      }
    }, {
      type: "gold",
      event: {
        aggregateValue: 5600
      },
      timestamp: {
        date: 5,
        day: 3,
        year: 2017,
        hours: 18,
        milliseconds: 590,
        minutes: 40,
        month: 6,
        seconds: 42
      }
    }, {
      type: "gold",
      event: {
        aggregateValue: 8700
      },
      timestamp: {
        date: 28,
        day: 3,
        year: 2017,
        hours: 23,
        milliseconds: 951,
        minutes: 25,
        month: 5,
        seconds: 59
      }
    }, {
      type: "xp",
      event: {
        aggregateValue: 3000
      },
      timestamp: {
        date: 28,
        day: 3,
        year: 2017,
        hours: 21,
        milliseconds: 738,
        minutes: 1,
        month: 5,
        seconds: 41
      }
    }, {
      type: "gold",
      event: {
        aggregateValue: -5000
      },
      timestamp: {
        date: 21,
        day: 3,
        year: 2017,
        hours: 6,
        milliseconds: 633,
        minutes: 31,
        month: 5,
        seconds: 54
      }
    }, {
      type: "gold",
      event: {
        aggregateValue: 90
      },
      timestamp: {
        date: 21,
        day: 3,
        year: 2017,
        hours: 5,
        milliseconds: 199,
        minutes: 26,
        month: 5,
        seconds: 46
      }
    }, {
      type: "xp",
      event: {
        aggregateValue: 3600
      },
      timestamp: {
        date: 21,
        day: 3,
        year: 2017,
        hours: 5,
        milliseconds: 134,
        minutes: 26,
        month: 5,
        seconds: 31
      }
    }, {
      type: "silver",
      event: {
        aggregateValue: 50
      },
      timestamp: {
        date: 14,
        day: 3,
        year: 2017,
        hours: 7,
        milliseconds: 87,
        minutes: 40,
        month: 5,
        seconds: 45
      }
    }, {
      type: "gold",
      event: {
        aggregateValue: -3700
      },
      timestamp: {
        date: 14,
        day: 3,
        year: 2017,
        hours: 7,
        milliseconds: 748,
        minutes: 40,
        month: 5,
        seconds: 40
      }
    }, {
      type: "xp",
      event: {
        aggregateValue: 5440
      },
      timestamp: {
        date: 14,
        day: 3,
        year: 2017,
        hours: 18,
        milliseconds: 921,
        minutes: 20,
        month: 5,
        seconds: 28
      }
    }, {
      type: "gold",
      event: {
        aggregateValue: 4430
      },
      timestamp: {
        date: 14,
        day: 3,
        year: 2017,
        hours: 18,
        milliseconds: 923,
        minutes: 20,
        month: 5,
        seconds: 16
      }
    }, {
      type: "platinum",
      event: {
        aggregateValue: 20
      },
      timestamp: {
        date: 14,
        day: 3,
        year: 2017,
        hours: 18,
        milliseconds: 426,
        minutes: 20,
        month: 5,
        seconds: 11
      }
    }, {
      type: "gold",
      event: {
        aggregateValue: -3500
      },
      timestamp: {
        date: 31,
        day: 3,
        year: 2017,
        hours: 18,
        milliseconds: 802,
        minutes: 53,
        month: 4,
        seconds: 23
      }
    }, {
      type: "xp",
      event: {
        aggregateValue: 3400
      },
      timestamp: {
        date: 31,
        day: 3,
        year: 2017,
        hours: 18,
        milliseconds: 14,
        minutes: 49,
        month: 4,
        seconds: 24
      }
    }, {
      type: "gold",
      event: {
        aggregateValue: 5327
      },
      timestamp: {
        date: 31,
        day: 3,
        year: 2017,
        hours: 18,
        milliseconds: 604,
        minutes: 49,
        month: 4,
        seconds: 3
      }
    }, {
      type: "gold",
      event: {
        aggregateValue: -400
      },
      timestamp: {
        date: 24,
        day: 3,
        year: 2017,
        hours: 16,
        milliseconds: 193,
        minutes: 9,
        month: 4,
        seconds: 2
      }
    }, {
      type: "gold",
      event: {
        aggregateValue: -1000
      },
      timestamp: {
        date: 24,
        day: 3,
        year: 2017,
        hours: 16,
        milliseconds: 450,
        minutes: 8,
        month: 4,
        seconds: 58
      }
    }, {
      type: "gold",
      event: {
        aggregateValue: 4500
      },
      timestamp: {
        date: 24,
        day: 3,
        year: 2017,
        hours: 15,
        milliseconds: 939,
        minutes: 59,
        month: 4,
        seconds: 48
      }
    }, {
      type: "platinum",
      event: {
        aggregateValue: 10
      },
      timestamp: {
        date: 24,
        day: 3,
        year: 2017,
        hours: 15,
        milliseconds: 521,
        minutes: 59,
        month: 4,
        seconds: 41
      }
    }, {
      type: "xp",
      event: {
        aggregateValue: 3000
      },
      timestamp: {
        date: 24,
        day: 3,
        year: 2017,
        hours: 15,
        milliseconds: 769,
        minutes: 42,
        month: 4,
        seconds: 30
      }
    }, {
      type: "gold",
      event: {
        aggregateValue: -50
      },
      timestamp: {
        date: 17,
        day: 3,
        year: 2017,
        hours: 18,
        milliseconds: 476,
        minutes: 23,
        month: 4,
        seconds: 58
      }
    }, {
      type: "gold",
      event: {
        aggregateValue: -400
      },
      timestamp: {
        date: 17,
        day: 3,
        year: 2017,
        hours: 18,
        milliseconds: 829,
        minutes: 23,
        month: 4,
        seconds: 54
      }
    }, {
      type: "gold",
      event: {
        aggregateValue: -1000
      },
      timestamp: {
        date: 17,
        day: 3,
        year: 2017,
        hours: 18,
        milliseconds: 363,
        minutes: 23,
        month: 4,
        seconds: 53
      }
    }, {
      type: "gold",
      event: {
        aggregateValue: 3000
      },
      timestamp: {
        date: 17,
        day: 3,
        year: 2017,
        hours: 18,
        milliseconds: 532,
        minutes: 4,
        month: 4,
        seconds: 40
      }
    }, {
      type: "xp",
      event: {
        aggregateValue: 2000
      },
      timestamp: {
        date: 17,
        day: 3,
        year: 2017,
        hours: 17,
        milliseconds: 668,
        minutes: 55,
        month: 4,
        seconds: 31
      }
    }, {
      type: "gold",
      event: {
        aggregateValue: -400
      },
      timestamp: {
        date: 10,
        day: 3,
        year: 2017,
        hours: 15,
        milliseconds: 516,
        minutes: 42,
        month: 4,
        seconds: 38
      }
    }, {
      type: "xp",
      event: {
        aggregateValue: 1050
      },
      timestamp: {
        date: 10,
        day: 3,
        year: 2017,
        hours: 15,
        milliseconds: 941,
        minutes: 40,
        month: 4,
        seconds: 27
      }
    }, {
      type: "gold",
      event: {
        aggregateValue: 2000
      },
      timestamp: {
        date: 10,
        day: 3,
        year: 2017,
        hours: 15,
        milliseconds: 112,
        minutes: 33,
        month: 4,
        seconds: 18
      }
    }, {
      type: "gold",
      event: {
        aggregateValue: 450
      },
      timestamp: {
        date: 3,
        day: 3,
        year: 2017,
        hours: 18,
        milliseconds: 83,
        minutes: 40,
        month: 4,
        seconds: 4
      }
    }, {
      type: "xp",
      event: {
        aggregateValue: 300
      },
      timestamp: {
        date: 3,
        day: 3,
        year: 2017,
        hours: 18,
        milliseconds: 545,
        minutes: 50,
        month: 4,
        seconds: 52
      }
    }]
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
      level: "9",
      classes: [{
        classname: "Rogue",
        level: 9,
        hp: 53,
        fortitude: 3,
        reflex: 6,
        will: 3,
        ranks: 72,
        bab: 6
      }],
      size: {
        category: "Medium",
        size_modifier: 0,
        special_size_modifier: 0,
        size_modifier_fly: 0,
        size_modifier_stealth: 0
      },
      alignment: "Chaotic Neutral",
      deity: "",
      xp: 76000,
      height: "5’3",
      weight: "98 lb",
      age: "23",
      gender: "Female",
      speed: "30ft",
      hero_points: "1",
      luck_points: "2",
      character_description: "",
      initiative: {
        misc: "",
        temp: "",
        feat: "",
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
      }
    },
    statistics: {
      stats: {
        str: {
          score: 12,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        },
        dex: {
          score: 26,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        },
        con: {
          score: 10,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        },
        int: {
          score: 12,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        },
        wis: {
          score: 12,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        },
        cha: {
          score: 9,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
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
      item: [],
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
        armor: "Leather +2",
        check_penalty: -3,
        max_dex: "",
        shield: ""
      },
      body_slots: {
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
        shoulders: "Cloak of Resistance +3",
        wrist: ""
      },
      wealth: {
        platinum: "21",
        gold: "763",
        silver: "",
        copper: "",
        total: ""
      },
      consumable: [{
        item: "Slippers of Spider Climbing",
        current: 10,
        total: 10,
        used: ""
      }]
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
        armor: 4,
        shield: "",
        deflect: 2,
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
      ac_notes: "+3 dodge bonus to AC against attacks made by traps.",
      fortitude: {
        base: "",
        resistance: 3,
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
        resistance: 3,
        feat: "",
        trait: 1,
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
        resistance: 3,
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
      save_notes: "+3 bonus on Reflex saves made to avoid traps.",
      dr: {
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
        melee: [{
          weapon: "Rapier +2",
          attack: "+16",
          damage: "1d6+3",
          critical: "18–20/x2"
        }, {
          weapon: "Rapier +2 Powerful Sneak",
          attack: "+13",
          damage: "1d6+3",
          critical: "18–20/x2"
        }, {
          weapon: "Short Sword +2",
          attack: "+16",
          damage: "1d6+3",
          critical: "19–20/x2"
        }, {
          weapon: "Short Sword +2 Powerful Sneak",
          attack: "+13",
          damage: "1d6+3",
          critical: "19–20/x2"
        }, {
          weapon: "Full Attack Rapier +2 / Short Sword +2",
          attack: "+14/+9/+14/+9",
          damage: "1d6+3",
          critical: "19–20/x2 / 18–20/x2 / 19–20/x2 / 18–20/x2"
        }],
        ranged: [{
          weapon: "Shortbow +1",
          attack: "+15",
          damage: "1d6",
          critical: "x3",
          range: "60 ft",
          ammo: "50"
        }]
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
      custom: [{
        name: "Disable Device Trap",
        ranks: 9,
        misc: 4,
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          class_skill: true,
          level: false,
          half_level: true,
          check_penalty: false
        }
      }, {
        name: "Perception Trap",
        ranks: 9,
        misc: 5,
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
      }],
      acrobatics: {
        ranks: 9,
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
        ranks: 9,
        misc: 4,
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
        ranks: 9,
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
        ranks: 9,
        misc: 4,
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
        ranks: 9,
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
          check_penalty: true,
          size_modifier_fly: true
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
        ranks: 9,
        misc: 5,
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
        ranks: 9,
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
        ranks: 9,
        misc: 3,
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
        ranks: 9,
        misc: 5,
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
          check_penalty: true,
          size_modifier_stealth: true
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
      }
    },
    spells: {
      concentration: {
        current: "",
        misc: "",
        temp: "",
        feat: "",
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
        feat: "",
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
        level_0: [{
          name: "Mage Hand",
          prepared: 3,
          active: false,
          cast: 0,
          note: ""
        }]
      }, {
        level_1: [{
          name: "Unseen Servant",
          prepared: 2,
          active: false,
          cast: 0,
          note: ""
        }]
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
      character: [{
        note: "<strong>Sneak attack</strong> Attack deals extra damage anytime her target would be denied a Dexterity bonus to AC (+5d6).<br><strong>Evasion (Ex)</strong> A rogue adds 1/2 her level to Perception skill checks made to locate traps and to Disable Device skill checks.<br><strong>Rogue talent</strong> Minor Magic (Sp) Mage Hand, 3/day.<br><strong>Rogue talent</strong> Major Magic (Sp) Unseen Servant, 2/day.<br><strong>Rogue talent</strong> Fast Fingers (Ex) Roll two dice while making a Sleight of Hand check and take the better result, 1/day.<br><strong>Rogue talent</strong> Fast Stealth (Ex) Move at full speed using the Stealth skill without penalty.<br><strong>Rogue talent</strong> During a full attack action you may take a –2 penalty on all attack rolls until the start of her next turn. If an attack during this time is a sneak attack, treats all 1s on the sneak attack damage dice as 2s.<br><strong>Trap sense (Ex)</strong> +3 bonus on Reflex saves made to avoid traps and a +3 dodge bonus to AC against attacks made by traps. These bonuses rise to +2 when the rogue reaches 6th level, to +3 when she reaches 9th level.<br><strong>Uncanny Dodge (Ex)</strong> cannot be caught flat-footed, nor lose Dex bonus to AC if the attacker is invisible. Still loses Dexterity bonus to AC if immobilized.<br><strong>Improved Uncanny Dodge (Ex)</strong> A rogue of 8th level or higher can no longer be flanked."
      }, {
        note: "<strong>Deft Hands</strong> +2 bonus on Disable Device and Sleight of Hand skill checks<br><strong>Weapon Finesse</strong> With a light weapon, rapier, whip, or spiked chain made for a creature of your size category, you may use your Dexterity modifier instead of your Strength modifier on attack rolls.<br><strong>Two Weapon Fighting</strong> Penalties on attack rolls for fighting with two weapons are reduced.<br><strong>Improved Two Weapon Fighting</strong> In addition to the standard single extra attack you get with an off-hand weapon, get a second attack with it, albeit at a –5 penalty.<br><strong>Double Slice</strong> Add your Strength bonus to damage rolls made with your off-hand weapon.<br><strong>Extra Rogue Talent</strong> Gain one additional rogue talent"
      }],
      story: []
    },
    events: []
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
      level: "11",
      classes: [{
        classname: "Fighter",
        level: 11,
        hp: 85,
        fortitude: 7,
        reflex: 3,
        will: 3,
        ranks: 22,
        bab: 11
      }],
      size: {
        category: "Medium",
        size_modifier: 0,
        special_size_modifier: 0,
        size_modifier_fly: 0,
        size_modifier_stealth: 0
      },
      alignment: "Neutral",
      deity: "",
      xp: 155000,
      height: "6'2",
      weight: "202 lbs",
      age: "28",
      gender: "Male",
      speed: "30ft",
      hero_points: "1",
      luck_points: "",
      character_description: "",
      initiative: {
        misc: "2",
        temp: "",
        feat: "",
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
      }
    },
    statistics: {
      stats: {
        str: {
          score: 21,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        },
        dex: {
          score: 16,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        },
        con: {
          score: 12,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        },
        int: {
          score: 13,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        },
        wis: {
          score: 12,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        },
        cha: {
          score: 10,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        }
      },
      feats: "Weapon Focus (Guisarme), Iron Will, Great Fortitude, Combat Reflexes, Dodge, Power Attack, Combat Expertise, Greater Trip, Improved Trip, Felling Smash, Greater Weapon Focus (Guisarme), Weapon Specialization (Guisarme), Furious Focus",
      traits: "Resilient, Adopted (Elven Reflexes)",
      languages: "Common, Elven, Draconic",
      special_abilities: "Bonus feat (5), Bravery +3, Weapon training 2 (Pole Arms +2, Blades, Heavy +1),  Armor training 3"
    },
    equipment: {
      gear: "Backpack, Flask Of Oil (2), Pouch (belt), Sack, Candle, Flint And Steel, Tindertwig, Rations (5 Days), Waterskin, Bedroll, Blanket, Bloodblock, Rope (silk), Mirror, Compass, Ink, Inkpen, Paper Sheets, Case For Maps/scrolls, Torch, Dagger, Combat Horse (Tafi), Roc feathers, head and feet, Red Dragon (Adult) scales and claws",
      magic_gear: "Potion of Cure Light Wounds (4) Potion of Cure Moderate Wounds (5), Potion of Cure Serious Wounds (1), Potion of Resist Fire (1), Alchemist Fire (1), Potion of Lesser Restoration (1), Potion of Remove Disease (1), Ioun Stone (Dusty rose), Feather Token (Tree)",
      item: [],
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
        armor: "Full Plate +2",
        check_penalty: -3,
        max_dex: "",
        shield: ""
      },
      body_slots: {
        belts: "Belt of Physical Might (+4 Str +2 Dex)",
        body: "",
        chest: "",
        eyes: "",
        feet: "Boots of Striding and Springing",
        hands: "",
        head: "Red Mantis Mask",
        headband: "Headband of Mental Prowess +2 (Wis & Cha)",
        neck: "Amulet of Natural Armor +3",
        ring_left_hand: "Ring of Protection +2",
        ring_right_hand: "",
        shoulders: "Cloak of Resistance +3",
        wrist: ""
      },
      wealth: {
        platinum: "",
        gold: "870",
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
        misc: 1,
        temp: "",
        armor: 11,
        shield: "",
        deflect: 2,
        dodge: 1,
        natural: 3,
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
        misc: 1,
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
        misc: 1,
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
      ac_notes: "Ioun Stone (Dusty rose) +1 insight bonus to AC.",
      fortitude: {
        base: "",
        resistance: 3,
        feat: 2,
        trait: 1,
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
        resistance: 3,
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
        resistance: 3,
        feat: 2,
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
      save_notes: "+3 bonus on Will saves against fear.",
      dr: {
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
        melee: [{
          weapon: "Guisarme +1 Keen",
          attack: "+21/+16/+11",
          damage: "2d4+12",
          critical: "19-20/x3"
        }, {
          weapon: "Guisarme +1 Keen Power Attack",
          attack: "+18/+13/+8",
          damage: "2d4+18",
          critical: "19-20/x3"
        }, {
          weapon: "Guisarme +1 Trip",
          attack: "+24",
          damage: "",
          critical: ""
        }, {
          weapon: "Greatsword MW",
          attack: "+18/+13/+8",
          damage: "1d10+8",
          critical: "19–20/x2"
        }, {
          weapon: "Greatsword MW Power Attack",
          attack: "+15/+10/+5",
          damage: "1d10+14",
          critical: "19–20/x2"
        }, {
          weapon: "Halberd MW",
          attack: "+19/+14/+9",
          damage: "1d8+10",
          critical: "x3"
        }, {
          weapon: "Halberd MW Power Attack",
          attack: "+16/+10/+5",
          damage: "1d8+16",
          critical: "x3"
        }, {
          weapon: "Earthbreaker +1 Frost",
          attack: "+17/+12/+7",
          damage: "2d6+8 1d6 (cold)",
          critical: "x3"
        }],
        ranged: [{
          weapon: "Composite Longbow MW",
          attack: "+13/+8/+3",
          damage: "1d8+5",
          critical: "x3",
          range: "100 ft",
          ammo: "50"
        }]
      },
      attack_notes: "+2 bonus to CMD against trip."
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
      acrobatics: {
        ranks: "",
        misc: 5,
        current: "",
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
        ranks: 4,
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
          check_penalty: true,
          size_modifier_fly: true
        }
      },
      handle_animal: {
        ranks: 8,
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
        ranks: 4,
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
      knowledge_dungeoneering: {
        ranks: 1,
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
        ranks: 1,
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
        ranks: 1,
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
        ranks: 11,
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
        ranks: 9,
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
          check_penalty: true,
          size_modifier_stealth: true
        }
      },
      survival: {
        ranks: 2,
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
      swim: {
        ranks: 3,
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
      }
    },
    spells: {
      concentration: {
        current: "",
        misc: "",
        temp: "",
        feat: "",
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
        feat: "",
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
      character: [{
        note: "<strong>Ability Score</strong> Human characters get a +2 bonus to one ability score of their choice at creation to represent their varied nature.<br><strong>Medium</strong> Humans are Medium creatures and have no bonuses or penalties due to their size.<br><strong>Normal Speed</strong> Humans have a base speed of 30 feet.<br><strong>Bonus Feat</strong> Humans select one extra feat at 1st level.<br><strong>Skilled</strong> Humans gain an additional skill rank at first level and one additional rank whenever they gain a level.<br><strong>Languages</strong> Humans begin play speaking Common. Humans with high Intelligence scores can choose any languages they want (except secret languages, such as Druidic)."
      }, {
        note: "<strong>Weapon Focus (Guisarme)</strong> You gain a +1 bonus on all attack rolls you make using the selected weapon<br><strong>Iron Will</strong> You get a +2 bonus on all Will saving throws<br><strong>Great Fortitude</strong> You get a +2 bonus on all Fortitude saving throws.<br><strong>Combat Reflexes</strong> You may make a number of additional attacks of opportunity per round equal to your Dexterity bonus. With this feat, you may also make attacks of opportunity while flat-footed<br><strong>Dodge</strong> You gain a +1 dodge bonus to your AC. A condition that makes you lose your Dex bonus to AC also makes you lose the benefits of this feat<br><strong>Power Attack</strong> You can choose to take a –1 penalty on all melee attack rolls and combat maneuver checks to gain a +2 bonus on all melee damage rolls. This bonus to damage is increased by half (+50%) if you are making an attack with a two-handed weapon, a one handed weapon using two hands, or a primary natural weapon that adds 1-1/2 times your Strength modifier on damage rolls. This bonus to damage is halved (–50%) if you are making an attack with an off-hand weapon or secondary natural weapon. When your base attack bonus reaches +4, and every 4 points thereafter, the penalty increases by –1 and the bonus to damage increases by +2. You must choose to use this feat before making an attack roll, and its effects last until your next turn. The bonus damage does not apply to touch attacks or effects that do not deal hit point damage<br><strong>Combat Expertise</strong> You can choose to take a –1 penalty on melee attack rolls and combat maneuver checks to gain a +1 dodge bonus to your Armor Class. When your base attack bonus reaches +4, and every +4 thereafter, the penalty increases by –1 and the dodge bonus increases by +1. You can only choose to use this feat when you declare that you are making an attack or a full-attack action with a melee weapon. The effects of this feat last until your next turn<br><strong>Greater Trip</strong> You receive a +2 bonus on checks made to trip a foe. This bonus stacks with the bonus granted by Improved Trip. Whenever you successfully trip an opponent, that opponent provokes attacks of opportunity<br><strong>Improved Trip</strong> You do not provoke an attack of opportunity when performing a trip combat maneuver. In addition, you receive a +2 bonus on checks made to trip a foe. You also receive a +2 bonus to your Combat Maneuver Defense whenever an opponent tries to trip you<br><strong>Felling Smash</strong> If you use the attack action to make a single melee attack at your highest base attack bonus while using Power Attack and you hit an opponent, you can spend a swift action to attempt a trip combat maneuver against that opponent<br><strong>Greater Weapon Focus (Guisarme)</strong> You gain a +1 bonus on attack rolls you make using the selected weapon. This bonus stacks with other bonuses on attack rolls, including those from Weapon Focus.<br><strong>Weapon Specialization</strong> You gain a +2 bonus on all damage rolls you make using the selected weapon.<br><strong>Furious Focus</strong> When you are wielding a two-handed weapon or a one-handed weapon with two hands, and using the Power Attack feat, you do not suffer Power Attack's penalty on melee attack rolls on the first attack you make each turn. You still suffer the penalty on any additional attacks, including attacks of opportunity."
      }, {
        note: "<strong>Bonus feat (5)</strong> At 1st level, and at every even level thereafter, a fighter gains a bonus feat in addition to those gained from normal advancement (meaning that the fighter gains a feat at every level). These bonus feats must be selected from those listed as combat feats, sometimes also called \"fighter bonus feats.\" </span>Upon reaching 4th level, and every four levels thereafter (8th, 12th, and so on), a fighter can choose to learn a new bonus feat in place of a bonus feat he has already learned. In effect, the fighter loses the bonus feat in exchange for the new one. The old feat cannot be one that was used as a prerequisite for another feat, prestige class, or other ability. A fighter can only change one feat at any given level and must choose whether or not to swap the feat at the time he gains a new bonus feat for the level.<br><strong>Bravery (Ex)</strong> Starting at 2nd level, a fighter gains a +1 bonus on Will saves against fear. This bonus increases by +1 for every four levels beyond 2nd.<br><strong>Weapon training 2 (Pole Arms +2, Blades, Heavy +1)</strong> Starting at 5th level, a fighter can select one group of weapons, as noted below. Whenever he attacks with a weapon from this group, he gains a +1 bonus on attack and damage rolls. </span>Every four levels thereafter (9th, 13th, and 17th), a fighter becomes further trained in another group of weapons. He gains a +1 bonus on attack and damage rolls when using a weapon from this group. In addition, the bonuses granted by previous weapon groups increase by +1 each. For example, when a fighter reaches 9th level, he receives a +1 bonus on attack and damage rolls with one weapon group and a +2 bonus on attack and damage rolls with the weapon group selected at 5th level. Bonuses granted from overlapping groups do not stack. Take the highest bonus granted for a weapon if it resides in two or more groups. </span>A fighter also adds this bonus to any combat maneuver checks made with weapons from this group. This bonus also applies to the fighter's Combat Maneuver Defense when defending against disarm and sunder attempts made against weapons from this group.<br><strong>Armor Training (Ex)</strong> Starting at 3rd level, a fighter learns to be more maneuverable while wearing armor. Whenever he is wearing armor, he reduces the armor check penalty by 1 (to a minimum of 0) and increases the maximum Dexterity bonus allowed by his armor by 1. Every four levels thereafter (7th, 11th, and 15th), these bonuses increase by +1 each time, to a maximum –4 reduction of the armor check penalty and a +4 increase of the maximum Dexterity bonus allowed. In addition, a fighter can also move at his normal speed while wearing medium armor. At 7th level, a fighter can move at his normal speed while wearing heavy armor."
      }, {
        note: "<strong>Resilient</strong> Growing up in a poor neighborhood or in the unforgiving wilds often forced you to subsist on food and water from doubtful sources. You've built up your mettle as a result, and gain a +1 trait bonus on Fortitude saves<br><strong>Adopted (Elven Reflexes)</strong> You were adopted and raised by someone not of your actual race, and raised in a society not your own. As a result, you picked up a race trait from your adoptive parents and society, and may immediately select a race trait from your adoptive parents' race.<br>One of your parents was a member of a wild elven tribe, and you've inherited a portion of your elven parent's quick reflexes. You gain a +2 trait bonus on Initiative checks."
      }, {
        note: "Harrow point = +5 on all damage rolls for one combat"
      }],
      story: []
    },
    events: []
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
      level: "",
      classes: [{
        classname: "Wizard",
        level: 8,
        hp: 42,
        fortitude: 2,
        reflex: 2,
        will: 6,
        ranks: 16,
        bab: 4
      }],
      size: {
        category: "Medium",
        size_modifier: 0,
        special_size_modifier: 0,
        size_modifier_fly: 0,
        size_modifier_stealth: 0
      },
      alignment: "Lawful Neutral",
      deity: "",
      xp: 51330,
      height: "6'0",
      weight: "136 lbs",
      age: "120",
      gender: "Male",
      speed: "30ft",
      hero_points: "1",
      luck_points: "",
      character_description: "",
      initiative: {
        misc: "",
        temp: "",
        feat: "",
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
      }
    },
    statistics: {
      stats: {
        str: {
          score: 8,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        },
        dex: {
          score: 17,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        },
        con: {
          score: 14,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        },
        int: {
          score: 26,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        },
        wis: {
          score: 12,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        },
        cha: {
          score: 10,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        }
      },
      feats: "Alertness, Augment Summoning, Craft Wondrous Item, Greater Spell Focus (Conjuration), Scribe Scroll, Spell Focus (Conjuration), Combat Casting",
      traits: "Resilient",
      languages: "Aquan, Auran, Azlanti, Celestial, Common, Draconic, Dwarven, Elven, Giant, Gnome, Goblin, Ignan, Orc, Sylvan, Undercommon",
      special_abilities: "Arcane bond (Su), Bonus feats, Cantrips, Arcane schools, Teleportation sub school, Opposition arcane school, Elven Immunities (Ex), Elven Magic (Ex), Keen Senses (Ex), Low-Light Vision (Ex), Headband of Vast Intelligence skill (Use Magic Device, Fly), Linguistics Skill (Dwarven, Giant, Undercommon), Shift (Su), Summoner's Charm (Su), Weapon Familiarity (Ex)"
    },
    equipment: {
      gear: "Spellbook, Scroll case, Spell component pouch, Candle, Flint and Steel, Tindertwig, Ink, pen and paper, Belt Pouch, Backpack, Rations (5 days), Combat trained horse",
      magic_gear: "Handy Haversack<br><br>Viles:<br>Insect sap (14), Antitoxin(1), Holy Water(1), Yellow Mushroom Juice (3)<br><br>Potions:<br>Cure Light Wounds (0), Cure Moderate Wounds (1), Cure Serious Wounds (1), Protection from Evil (1), Adjustable Disguise (1), Aid (1), Displacement (1), Hide from Animals (1), Delay Poison (1), Bear's Endurance (1), Levitate (1)<br><br>Scrolls:<br>Acid Pit (2), Summon Monster III (2), Summon Monster IV (0), Invisibility (2), Create Pit (2), Web (3), Stinking Cloud (2), Grease (1), Mirror Image (3), Spiked Pit (6), Fly (1), Interposing Hand (0), Elemental Body 2 (0), Wall of Fire (0), Haste (1), Enlarge Person (2), Endure Elements (2), Acid Arrow (0), Gust of Wind (0), Animate Rope (0), False Life (2), Floating Disk (1), Comprehend Languages (0), Erase (1), Detect Secret Doors (1), Black Tentacles (2), Mage Armor (0)<br><br>Oils:<br>Magic Weapon (2)",
      item: [{
        name: "Flask of Oil",
        quantity: 5,
        weight: 5
      }, {
        name: "Sack",
        quantity: 1,
        weight: 0.5
      }, {
        name: "Waterskin",
        quantity: 1,
        weight: 4
      }, {
        name: "Bedroll",
        quantity: 1,
        weight: 5
      }, {
        name: "Blanket",
        quantity: 1,
        weight: 3
      }, {
        name: "Bloodblock",
        quantity: 2,
        weight: 2
      }, {
        name: "Healer's Kit",
        quantity: 2,
        weight: 2
      }, {
        name: "Rope (silk)",
        quantity: 1,
        weight: 5
      }, {
        name: "Mirror",
        quantity: 1,
        weight: 0.5
      }, {
        name: "Compass",
        quantity: 1,
        weight: 1
      }, {
        name: "Andorak spell book",
        quantity: 1,
        weight: 0.5
      }],
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
        headband: "Headband of Vast Intelligence +4",
        neck: "Amulet of Natural Armor +1",
        ring_left_hand: "Ring of Sustenance",
        ring_right_hand: "",
        shoulders: "Cloak of Resistance +2",
        wrist: ""
      },
      wealth: {
        platinum: "",
        gold: "1,027",
        silver: "",
        copper: "",
        total: ""
      },
      consumable: [{
        item: "Wand of Lightning Bolt",
        current: "",
        total: 50,
        used: 49
      }, {
        item: "Wand of Scorching Ray",
        current: "",
        total: 50,
        used: 42
      }, {
        item: "Wand of Swift Girding",
        current: "",
        total: 50,
        used: 30
      }, {
        item: "Wand of Carry Companion",
        current: "",
        total: 50,
        used: 40
      }, {
        item: "Shift",
        current: "",
        total: 11,
        used: 2
      }, {
        item: "Pearl of Power (1st Level)",
        current: "",
        total: 1,
        used: ""
      }, {
        item: "Wand of Purify Food and Drink",
        current: "",
        total: 50,
        used: ""
      }, {
        item: "Dimensional Step",
        current: "",
        total: 240,
        used: 50
      }]
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
        armor: 4,
        shield: "",
        deflect: "",
        dodge: "",
        natural: 1,
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
      ac_notes: "Mage Armor active",
      fortitude: {
        base: "",
        resistance: 2,
        feat: "",
        trait: 1,
        misc: 2,
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
        resistance: 2,
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
        resistance: 2,
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
      save_notes: "Immune to magic sleep effects. +2 saving throw against enchantment spells and effects.",
      dr: {
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
        melee: [{
          weapon: "Dagger (Master Work)",
          attack: "+4",
          damage: "1d6+1",
          critical: "19–20/x2"
        }],
        ranged: [{
          weapon: "Shortbow",
          attack: "+7",
          damage: "1d6",
          critical: "x3",
          range: "60 ft",
          ammo: "50"
        }]
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
      custom: [{
        name: "Spellcraft (Identify magic items)",
        ranks: 8,
        misc: 2,
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
      }],
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
        ranks: 1,
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
        ranks: 8,
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
          check_penalty: true,
          size_modifier_fly: true
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
        ranks: 4,
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
        ranks: 4,
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
        ranks: 4,
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
        ranks: 4,
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
        ranks: 4,
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
        ranks: 4,
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
        ranks: 4,
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
        ranks: 3,
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
        ranks: 4,
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
        ranks: 4,
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
        ranks: 8,
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
        ranks: 8,
        misc: 4,
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
        ranks: 8,
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
          check_penalty: true,
          size_modifier_stealth: true
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
        ranks: 8,
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
      }
    },
    spells: {
      concentration: {
        current: "",
        misc: "",
        temp: "",
        feat: 4,
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: true,
          wis_bonus: false,
          cha_bonus: false,
          level: true,
          half_level: false
        }
      },
      caster_level_check: {
        current: "",
        misc: "",
        temp: "",
        feat: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: true,
          half_level: false
        }
      },
      spell_notes: "<strong>Arcane school</strong> Conjuration (Teleportation).<br><strong>Opposition Arcane school</strong> Enchantment, Necromancy.<br>Conjuration spells +2 DC.",
      per_day: {
        level_0: 4,
        level_1: 7,
        level_2: 5,
        level_3: 5,
        level_4: 4,
        level_5: "",
        level_6: "",
        level_7: "",
        level_8: "",
        level_9: ""
      },
      dc: {
        level_0: 18,
        level_1: 19,
        level_2: 20,
        level_3: 21,
        level_4: 22,
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
        level_0: [{
          name: "Bleed",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Erase",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Daze",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Disrupt Undead",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Touch of Fatigue",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Prestidigitation",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Light",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Ghost Sound",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Spark",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Acid Splash",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Mage Hand",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Flare",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Detect Magic",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Detect Poison",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Dancing Lights",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Mending",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Arcane Mark",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Message",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Ray of Frost",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Read Magic",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Open/Close",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Resistance",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }]
      }, {
        level_1: [{
          name: "Comprehend Languages",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Enlarge Person",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Feather Fall",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Grease",
          prepared: 2,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Mage Armor",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Mount",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Obscuring Mist",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Protection from Chaos",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Protection from Evil",
          prepared: 2,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Shield",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Summon Monster I",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Unseen Servant",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Endure Elements",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Animate Rope",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Floating Disk",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Detect Secret Doors",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }]
      }, {
        level_2: [{
          name: "Blur",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Create Pit",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Flaming Sphere",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Glitterdust",
          prepared: 2,
          active: false,
          cast: 1,
          note: ""
        }, {
          name: "Invisibility",
          prepared: 2,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Levitate",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Mirror Image",
          prepared: 1,
          active: true,
          cast: 1,
          note: ""
        }, {
          name: "Resist Energy",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Stone Call",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Summon Monster II",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Web",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Create Treasure Map",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Gust of Wind",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Acid Arrow",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "False Life",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }]
      }, {
        level_3: [{
          name: "Stinking Cloud",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Summon Monster III",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Spiked Pit",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Aqueous Orb",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Fly",
          prepared: 1,
          active: false,
          cast: 1,
          note: ""
        }, {
          name: "Sleet Storm",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Haste",
          prepared: 2,
          active: false,
          cast: 1,
          note: ""
        }, {
          name: "Lightning Bolt",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Slow",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Dispel Magic",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }]
      }, {
        level_4: [{
          name: "Black Tentacles",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Wall of Fire",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Secure Shelter",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Summon Monster IV",
          prepared: 2,
          active: false,
          cast: 2,
          note: ""
        }, {
          name: "Heroism",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Dimension Door",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Greater Invisibility",
          prepared: 1,
          active: false,
          cast: 1,
          note: ""
        }]
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
      character: [{
        note: "<strong>Resilient</strong> (+1 trait bonus on Fortitude saves)<br><strong>Arcane bond (Su)</strong> Rat Bower, +2 Fortitude save.<br><strong>Bonus feats</strong>.<br><strong>Cantrips</strong>.<br><strong>Elven Immunities (Ex)</strong> Immune to magic sleep effects. +2 saving throw against enchantment spells and effects.<br><strong>Elven Magic (Ex)</strong> +2 caster level checks made to overcome SR. +2 Spellcraft check to identify properties of magic items.<br><strong>Keen Senses (Ex)</strong> +2 Perception checks.<br><strong>Low-Light Vision (Ex)</strong> See x2 as far as humans in low illumination.<br><strong>Shift (Su)</strong> Teleport 15 feet 9 times per day.<br><strong>Summoner's Charm (Su)</strong> +3 rounds duration for Conjuration (Summoning) spells.<br><strong>Weapon Familiarity (Ex)</strong> Proficient with longbows (including composite longbows), longswords, rapiers, and shortbows (including composite shortbows), treat weapon with \"elven\" in name as a martial weapon.<br><strong>Dimensional Steps (Sp)</strong> At 8th level, you can use this ability to teleport up to 30 feet per wizard level per day as a standard action. This teleportation must be used in 5-foot increments and such movement does not provoke an attack of opportunity. You can bring other willing creatures with you, but you must expend an equal amount of distance for each additional creature brought with you."
      }, {
        note: "Spells to find:<br>Scorching Ray<br>Lightning Bolt"
      }],
      story: [{
        note: "Baron Turbine Blackshield, lord of Thornkeep <br>Five factions in Thornkeep: Three Daggers (the thives), Iron jaws, Hunters guild, The Order (deal in magic), The Goblins, The Blue Basilisks (the muscle)"
      }, {
        note: "Andorak (Lich shade), wizard's apprentice, locked in tomb"
      }, {
        note: "Jonas the mail man, messenger of Thornkeep"
      }, {
        note: "Library reference: 957"
      }]
    },
    events: []
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
      level: "",
      classes: [{
        classname: "Rogue",
        level: 10,
        hp: 63,
        fortitude: 3,
        reflex: 7,
        will: 3,
        ranks: 90,
        bab: 7
      }],
      size: {
        category: "Medium",
        size_modifier: 0,
        special_size_modifier: 0,
        size_modifier_fly: 0,
        size_modifier_stealth: 0
      },
      alignment: "Lawful Evil",
      deity: "",
      xp: 90148,
      height: "6'0",
      weight: "206 lbs",
      age: "26",
      gender: "Male",
      speed: "30ft",
      hero_points: "",
      luck_points: "",
      character_description: "A energetic overweight man. Reddened medium-brown skin, round face, blue-green, wrinkled eyes, a double chin and wavy light brown hair. Very good reflexes and exceptional dexterity and coordination.",
      initiative: {
        misc: "",
        temp: "",
        feat: "",
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
      }
    },
    statistics: {
      stats: {
        str: {
          score: 13,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        },
        dex: {
          score: 24,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        },
        con: {
          score: 12,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        },
        int: {
          score: 16,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        },
        wis: {
          score: 12,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        },
        cha: {
          score: 7,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        }
      },
      feats: "Weapon Finesse, Dodge, Two-Weapon Fighting, Weapon focus (Rapier), Deft hands, Great Fortitude, Iron Will",
      traits: "Reactionary, Resilient",
      languages: "Common, Elven",
      special_abilities: "Sneak Attack (+5d6), Trapfinding, Evasion (Ex), Rogue Talent Trap spotter (Ex), Trap Sense +3 (Ex), Rogue Talent Finesse Rogue, Uncanny Dodge (Ex), Rogue Talent Fast Stealth (Ex), Improved Uncanny Dodge (Ex), Rogue Talent Combat Trick - Improved Two-Weapon Fighting, Rogue Talent Offensive Defense (Ex), Advanced Talent Knock-Out Blow (Ex)"
    },
    equipment: {
      gear: "Fur coat and cold weather outfit, Thieves' tools MW, Climber's kit, Magnifying glass, Merchant's scale, Backpack, Flask of Oil (3), Pouch (belt), Sack, Candle, Flint and Steel, Torch, Tindertwig (5), Rations (5 days), Waterskin, Bedroll, Blanket, Rope (silk), Mirror, Compass, Ink, Pen, Paper sheets, Dagger (2), Hide armor, 10ft pole in pieces",
      magic_gear: "Ioun Torch, Ioun Stones Dusty Rose, Rapier +1<br><br>Potions:<br>Cure Light Wounds (6), Endure Elements (1), Bless Weapon (4), Greese (1), Reduce Person (1), Stabilise (1), Cure Light Wounds (1), Jump (1), Protection from Good (1), Protection from Law (1), Protection from Evil (1), Remove Fear (1), Remove Sickness (1), Shield of Faith (1), Vanish (1), Gaseous Form (1)<br><br>Oils:<br>Dispel Magic",
      item: [{
        name: "Flask of Oil",
        quantity: 1,
        weight: 1
      }, {
        name: "Tanglefoot bag",
        quantity: 2,
        weight: 8
      }, {
        name: "Flat Bread",
        quantity: 10,
        weight: 2
      }, {
        name: "Bedrolls",
        quantity: 6,
        weight: 2
      }],
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
        armor: "Mithral Chain Shirt +2",
        check_penalty: "",
        max_dex: "",
        shield: ""
      },
      body_slots: {
        belts: "Belt of Dexterity +4",
        body: "",
        chest: "Vest of Escape",
        eyes: "Eyes of the Eagle",
        feet: "",
        hands: "Gloves of Reconnaissance",
        head: "Headband of Vast Intelligence +4",
        headband: "",
        neck: "Amulet of a Natural Armor +1",
        ring_left_hand: "Ring of Force Shield",
        ring_right_hand: "Ring of Protection +1",
        shoulders: "Cloak of Resistance +2",
        wrist: ""
      },
      wealth: {
        platinum: "3",
        gold: "13,009",
        silver: "5",
        copper: "",
        total: ""
      },
      consumable: [{
        item: "Gloves of Reconnaissance",
        current: "",
        total: 10,
        used: 1
      }, {
        item: "Wand of Magic Missile (CL5)",
        current: "",
        total: 50,
        used: 4
      }, {
        item: "Wand of Cure Light Wounds",
        current: "",
        total: 50,
        used: 1
      }, {
        item: "Knock-Out Blow",
        current: "",
        total: 1,
        used: ""
      }, {
        item: "Wand of Entangle",
        current: "",
        total: 50,
        used: ""
      }]
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
        misc: 1,
        temp: "",
        armor: 6,
        shield: 2,
        deflect: 1,
        dodge: 1,
        natural: 1,
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
        misc: 1,
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
        misc: 1,
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
      ac_notes: "+3 dodge bonus to AC against attacks made by traps.<br>+2 AC against incorporeal attacks.<br>+5 Dodge to AC for 1 round after Sneak Attack.",
      fortitude: {
        base: "",
        resistance: 2,
        feat: 2,
        trait: 1,
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
        resistance: 2,
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
        resistance: 2,
        feat: 2,
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
      save_notes: "+3 bonus on Reflex saves made to avoid traps.",
      dr: {
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
        melee: [{
          weapon: "Mithral Rapier +2",
          attack: "+17",
          damage: "1d6+3",
          critical: "18–20/×2"
        }, {
          weapon: "Rapier +1 Shocking",
          attack: "+15",
          damage: "1d6+2 + 1d6 Electrical",
          critical: "18-20/x2"
        }, {
          weapon: "Short Sword +1",
          attack: "+15",
          damage: "1d6+2",
          critical: "19–20/×2"
        }, {
          weapon: "Mithral Rapier +2, Short Sword +1",
          attack: "+15/+15/+8/+8",
          damage: "1d6+3, 1d6+2",
          critical: "18–20/×2, 19–20/×2"
        }, {
          weapon: "Silver Dagger",
          attack: "+14",
          damage: "1d6+1",
          critical: "19–20/×2"
        }, {
          weapon: "Sap",
          attack: "+14",
          damage: "1d6+1",
          critical: "x2"
        }, {
          weapon: "Punching Dagger +2 Shocking",
          attack: "+16",
          damage: "1d4+3 + 1d6 Electrical",
          critical: "x3"
        }, {
          weapon: "Mithral Rapier +2, Punching Dagger +2 Shocking",
          attack: "+15/+15/+9/+9",
          damage: "1d6+3, 1d4+3 + 1d6 Electrical",
          critical: "18–20/×2, x3"
        }],
        ranged: [{
          weapon: "Shortbow (MW)",
          attack: "+14/+9",
          damage: "1d6",
          critical: "x3",
          range: "60 ft",
          ammo: "50"
        }]
      },
      attack_notes: "+5d6 Sneak attack.<br>Knock-Out Blow DC 18."
    },
    skills: {
      ranks: {
        total: "",
        spent: {
          include_custom: false,
          current: ""
        }
      },
      custom: [{
        name: "Perception (Traps)",
        ranks: 10,
        misc: 5,
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: true,
          cha_bonus: false,
          class_skill: true,
          level: false,
          half_level: true,
          check_penalty: false
        }
      }, {
        name: "Disable Device (Traps)",
        ranks: 10,
        misc: 8,
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
          check_penalty: true
        }
      }],
      acrobatics: {
        ranks: 10,
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
        ranks: 4,
        misc: 2,
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
        ranks: 10,
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
        ranks: 5,
        misc: 2,
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
        ranks: 10,
        misc: 8,
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
        ranks: 10,
        misc: 6,
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
          check_penalty: true,
          size_modifier_fly: true
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
        ranks: 4,
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
        ranks: 4,
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
        ranks: 10,
        misc: 5,
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
        ranks: 3,
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
        ranks: 10,
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
        ranks: 10,
        misc: 2,
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
        ranks: 10,
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
        ranks: 10,
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
          check_penalty: true,
          size_modifier_stealth: true
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
        ranks: 10,
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
      }
    },
    spells: {
      concentration: {
        current: "",
        misc: "",
        temp: "",
        feat: "",
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
        feat: "",
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
      character: [{
        note: "<strong>+2 to One Ability Score</strong> Human characters get a +2 bonus to one ability score of their choice at creation to represent their varied nature.<br><strong>Medium</strong> Humans are Medium creatures and have no bonuses or penalties due to their size.<br><strong>Normal Speed</strong> Humans have a base speed of 30 feet.<br><strong>Bonus Feat</strong> Humans select one extra feat at 1st level.<br><strong>Skilled</strong> Humans gain an additional skill rank at first level and one additional rank whenever they gain a level.<br><strong>Languages</strong> Humans begin play speaking Common. Humans with high Intelligence scores can choose any languages they want (except secret languages, such as Druidic)."
      }, {
        note: "<strong>Sneak attack</strong> If a rogue can catch an opponent when he is unable to defend himself effectively from her attack, she can strike a vital spot for extra damage.<br>The rogue's attack deals extra damage anytime her target would be denied a Dexterity bonus to AC (whether the target actually has a Dexterity bonus or not), or when the rogue flanks her target. This extra damage is 1d6 at 1st level, and increases by 1d6 every two rogue levels thereafter. Should the rogue score a critical hit with a sneak attack, this extra damage is not multiplied. Ranged attacks can count as sneak attacks only if the target is within 30 feet.<br>With a weapon that deals nonlethal damage (like a sap, whip, or an unarmed strike), a rogue can make a sneak attack that deals nonlethal damage instead of lethal damage. She cannot use a weapon that deals lethal damage to deal nonlethal damage in a sneak attack, not even with the usual –4 penalty.<br>The rogue must be able to see the target well enough to pick out a vital spot and must be able to reach such a spot. A rogue cannot sneak attack while striking a creature with concealment.<br><strong>Trapfinding</strong> A rogue adds 1/2 her level to Perception skill checks made to locate traps and to Disable Device skill checks (minimum +1). A rogue can use Disable Device to disarm magic traps.<br><strong>Evasion (Ex)</strong> At 2nd level and higher, a rogue can avoid even magical and unusual attacks with great agility. If she makes a successful Reflex saving throw against an attack that normally deals half damage on a successful save, she instead takes no damage. Evasion can be used only if the rogue is wearing light armor or no armor. A helpless rogue does not gain the benefit of evasion.<br><strong>Rogue Talent Trap spotter (Ex)</strong> Whenever a rogue with this talent comes within 10 feet of a trap, she receives an immediate Perception skill check to notice the trap. This check should be made in secret by the GM.<br><strong>Trap Sense +3 (Ex)</strong> At 3rd level, a rogue gains an intuitive sense that alerts her to danger from traps, giving her a +1 bonus on Reflex saves made to avoid traps and a +1 dodge bonus to AC against attacks made by traps. These bonuses rise to +2 when the rogue reaches 6th level, to +3 when she reaches 9th level, to +4 when she reaches 12th level, to +5 at 15th, and to +6 at 18th level.<br><strong>Rogue Talent Finesse Rogue (Ex)</strong> A rogue that selects this talent gains Weapon Finesse as a bonus feat.<br><strong>Uncanny Dodge (Ex)</strong> Starting at 4th level, a rogue can react to danger before her senses would normally allow her to do so. She cannot be caught flat-footed, nor does she lose her Dex bonus to AC if the attacker is invisible. She still loses her Dexterity bonus to AC if immobilized. A rogue with this ability can still lose her Dexterity bonus to AC if an opponent successfully uses the feint action against her.<br><strong>Rogue Talent Fast Stealth (Ex)</strong> This ability allows a rogue to move at full speed using the Stealth skill without penalty.<br><strong>Improved Uncanny Dodge (Ex)</strong> A rogue of 8th level or higher can no longer be flanked.<br>This defense denies another rogue the ability to sneak attack the character by flanking her, unless the attacker has at least four more rogue levels than the target does.<br>If a character already has uncanny dodge (see above) from another class, the levels from the classes that grant uncanny dodge stack to determine the minimum rogue level required to flank the character.<br><strong>Rogue Talent Combat Trick - Improved Two-Weapon Fighting</strong> In addition to the standard single extra attack you get with an off-hand weapon, you get a second attack with it, albeit at a –5 penalty.<br><strong>Rogue Talent Offensive Defense</strong> When a rogue with this talent hits a creature with a melee attack that deals sneak attack damage, the rogue gains a +1 dodge bonus to AC for each sneak attack die rolled for 1 round.<br><strong>Advanced Talent Knock-Out Blow (Ex)</strong> Once per day, the rogue can forgo her sneak attack damage to attempt to knock out an opponent. She must declare the use of knock-out blow before she makes the attack. If the attack hits, it does normal damage, but instead of dealing sneak attack damage (and instead of any effect that triggers when the rogue deals sneak attack damage), the target falls unconscious for 1d4 rounds. A successful Fortitude save reduces this effect to staggered for 1 round. The DC of this save is equal to 10 + 1/2 the rogue's level + the rogue's Intelligence modifier."
      }, {
        note: "<strong>Reactionary</strong> You were bullied often as a child, but never quite developed an offensive response. Instead, you became adept at anticipating sudden attacks and reacting to danger quickly. You gain a +2 trait bonus on Initiative checks.<br><strong>Resilient</strong> Growing up in a poor neighborhood or in the unforgiving wilds often forced you to subsist on food and water from doubtful sources. You've built up your mettle as a result, and gain a +1 trait bonus on Fortitude saves.<br><strong>Weapon Finesse</strong> With a light weapon, rapier, whip, or spiked chain made for a creature of your size category, you may use your Dexterity modifier instead of your Strength modifier on attack rolls. If you carry a shield, its armor check penalty applies to your attack rolls.<br><strong>Dodge</strong> You gain a +1 dodge bonus to your AC. A condition that makes you lose your Dex bonus to AC also makes you lose the benefits of this feat.<br><strong>Two-Weapon Fighting</strong> Your penalties on attack rolls for fighting with two weapons are reduced. The penalty for your primary hand lessens by 2 and the one for your off hand lessens by 6. See Two-Weapon Fighting in Combat.<br><strong>Weapon focus</strong> You gain a +1 bonus on all attack rolls you make using the selected weapon.<br><strong>Deft hands</strong> You get a +2 bonus on Disable Device and Sleight of Hand skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill.<br><strong>Great Fortitude</strong> You get a +2 bonus on all Fortitude saving throws.<br><strong>Iron Will</strong> You get a +2 bonus on all Will saving throws."
      }, {
        note: "Headband of Vast Intelligence +4 Skills: Sense Motive, Spellcraft."
      }],
      story: []
    },
    events: []
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
      level: "7",
      classes: [{
        classname: "Magus Bladebound",
        level: 7,
        hp: 38,
        fortitude: 6,
        reflex: 2,
        will: 6,
        ranks: 14,
        bab: 5
      }],
      size: {
        category: "Medium",
        size_modifier: 0,
        special_size_modifier: 0,
        size_modifier_fly: 0,
        size_modifier_stealth: 0
      },
      alignment: "Lawful Evil",
      deity: "",
      xp: 29090,
      height: "6'0",
      weight: "",
      age: "120",
      gender: "Male",
      speed: "30ft",
      hero_points: "",
      luck_points: "",
      character_description: "",
      initiative: {
        misc: "",
        temp: "",
        feat: "",
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
      }
    },
    statistics: {
      stats: {
        str: {
          score: 12,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        },
        dex: {
          score: 21,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        },
        con: {
          score: 10,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        },
        int: {
          score: 18,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        },
        wis: {
          score: 10,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        },
        cha: {
          score: 7,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        }
      },
      feats: "Weapon Finesse, Dervish Dance, Alertness, Extra Arcane Pool, Weapon Focus (Black Blade), Intensified Spell",
      traits: "Magical Lineage (Shocking Grasp), Focused Mind (+2 on concentration checks)",
      languages: "Common, Draconic, Dwarven, Elven, Orc",
      special_abilities: "Low-Light Vision (Ex), Elven Immunities (Ex), Elven Magic (Ex), Weapon Familiarity (Ex), Keen Senses (Ex), Arcane Pool, Cantrips, Spell Combat (EX), Black Blade (Ex), Spell Recall (Su), Magus Arcana (Arcane Accuracy), Knowledge Pool (Su), Medium Armor (Ex)"
    },
    equipment: {
      gear: "Fur coat and cold weather outfit, Rapier, Spell component pouch, Spellbook, Backpack, Flask of Oil x3, Pouch (belt), Sack, Candle, Flint and Steel, Tindertwig, Rations (5 days), Waterskin, Bedroll, Blanket, Rope (silk), Mirror, Compass, Ink, Inkpen, Paper sheets, Case for maps/scrolls, Tent for 2, Trained Donkey (commands: come, down, stay heal, work), Alchemist Fire (3), Potion of CLW (3)",
      magic_gear: "Short Sword +1, Black Blade Scimitar +2",
      item: [],
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
        armor: "Mithral Chain Shirt +1",
        check_penalty: "",
        max_dex: "",
        shield: ""
      },
      body_slots: {
        belts: "Belt of Incredible Dexterity +2",
        body: "",
        chest: "",
        eyes: "",
        feet: "",
        hands: "",
        head: "Headband of Vast Intelligence +2",
        headband: "",
        neck: "",
        ring_left_hand: "",
        ring_right_hand: "",
        shoulders: "Cloak of Resistance  +1",
        wrist: ""
      },
      wealth: {
        platinum: "",
        gold: "1,570",
        silver: "",
        copper: "",
        total: ""
      },
      consumable: [{
        item: "Arcane Pool",
        current: "",
        total: 8,
        used: ""
      }, {
        item: "Black Blade Arcane Pool",
        current: "",
        total: 2,
        used: ""
      }, {
        item: "Alchemist Fire",
        current: "",
        total: 3,
        used: ""
      }, {
        item: "Potion of CLW",
        current: "",
        total: 3,
        used: ""
      }]
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
        armor: 5,
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
        resistance: 1,
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
        resistance: 1,
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
        resistance: 1,
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
      save_notes: "Immune to sleep effects, +2 against enchantment spells and effects, +7 against cold weather",
      dr: {
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
        melee: [{
          weapon: "Shortsword +1",
          attack: "+11",
          damage: "1d6+2",
          critical: "18–20/x2"
        }, {
          weapon: "Black Blade Scimitar +2",
          attack: "+13",
          damage: "1d6+7",
          critical: "18–20/x2"
        }, {
          weapon: "Spellstrike",
          attack: "+13",
          damage: "1d6+7",
          critical: "18–20/x2"
        }, {
          weapon: "Black Blade Scimitar +2/Spell Strike",
          attack: "+11/+11",
          damage: "1d6+7/Spell Effect",
          critical: "18–20/x2, 18–20/x2"
        }, {
          weapon: "Black Blade Scimitar +3 Keen",
          attack: "+14",
          damage: "1d6+8",
          critical: "15-20x2"
        }, {
          weapon: "Black Blade Scimitar +3 Keen/Spell Strike Keen",
          attack: "+12/+12",
          damage: "1d6+8/Spell Effect",
          critical: "15-20x2,  15-20x2"
        }, {
          weapon: "Black Blade Scimitar +3 Arcane Accuracy Keen/Spell Strike Arcane Accuracy Keen",
          attack: "+16/+16",
          damage: "1d6+8/Spell Effect",
          critical: "15-20x2,  15-20x2"
        }],
        ranged: [{
          weapon: "Shortbow",
          attack: "+10",
          damage: "1d6",
          critical: "x3",
          range: "60 ft",
          ammo: "50"
        }]
      },
      attack_notes: "1 Arcane pool point = Arcane Accuracy +4 to attack or +2 or +1 and Keen"
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
      acrobatics: {
        ranks: 4,
        misc: "",
        current: "",
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
        ranks: 2,
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
        ranks: 7,
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
          check_penalty: true,
          size_modifier_fly: true
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
        ranks: 1,
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
        ranks: 1,
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
        ranks: 1,
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
        ranks: 7,
        misc: 2,
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
        ranks: 2,
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
        ranks: 1,
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
        ranks: 7,
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
          check_penalty: true,
          size_modifier_stealth: true
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
        ranks: 2,
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
        ranks: 7,
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
      }
    },
    spells: {
      concentration: {
        current: "",
        misc: 2,
        temp: "",
        feat: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: true,
          wis_bonus: false,
          cha_bonus: false,
          level: true,
          half_level: false
        }
      },
      caster_level_check: {
        current: "",
        misc: 2,
        temp: "",
        feat: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: true,
          half_level: false
        }
      },
      spell_notes: "",
      per_day: {
        level_0: 6,
        level_1: 5,
        level_2: 4,
        level_3: 2,
        level_4: "",
        level_5: "",
        level_6: "",
        level_7: "",
        level_8: "",
        level_9: ""
      },
      dc: {
        level_0: 14,
        level_1: 15,
        level_2: 16,
        level_3: 17,
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
        level_0: [{
          name: "Acid Splash",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Arcane Mark",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Dancing Lights",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Daze",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Detect Magic",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Disrupt Undead",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Flare",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Ghost Sound",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Light",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Mage Hand",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Open Close",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Prestidigitation",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Ray of Frost",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Read Magic",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Spark",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }]
      }, {
        level_1: [{
          name: "Color Spray",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Grease",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Shocking Grasp",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "True Strike",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Magic Missile",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Shield",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Vanish",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Obscuring Mist",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Chill Touch",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Frostbite",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Infernal Healing",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Windy Escape",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Unerring Weapon",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Ray of Enfeeblement",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Burning Hands",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Expeditious Retreat",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Shocking Grasp Intensified",
          prepared: 3,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Reduce Person",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }]
      }, {
        level_2: [{
          name: "Mirror Image",
          prepared: 2,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Frigid Touch",
          prepared: 2,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Glitter Dust",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Web",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Scorching Ray",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Pyrotechnics",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Web",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }]
      }, {
        level_3: [{
          name: "Fly",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Haste",
          prepared: 1,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Force Hook Charge",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Ray of Exhaustion",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Vampiric Touch",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Stinking Cloud",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }, {
          name: "Slow",
          prepared: 0,
          active: false,
          cast: 0,
          note: ""
        }]
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
      character: [{
        note: "<strong>+2 Dexterity, +2 Intelligence, –2 Constitution</strong> Elves are nimble, both in body and mind, but their form is frail.<br><strong>Medium</strong> Elves are Medium creatures and have no bonuses or penalties due to their size.<br><strong>Normal Speed</strong> Elves have a base speed of 30 feet.<br><strong>Low-Light Vision</strong> Elves can see twice as far as humans in conditions of dim light. See Additional Rules.<br><strong>Elven Immunities</strong> Elves are immune to magic sleep effects and get a +2 racial saving throw bonus against enchantment spells and effects.<br><strong>Elven Magic</strong> Elves receive a +2 racial bonus on caster level checks made to overcome spell resistance. In addition, elves receive a +2 racial bonus on Spellcraft skill checks made to identify the properties of magic items.<br><strong>Keen Senses</strong> Elves receive a +2 racial bonus on Perception skill checks.<br><strong>Weapon Familiarity</strong> Elves are proficient with longbows (including composite longbows), longswords, rapiers, and shortbows (including composite shortbows), and treat any weapon with the word \"elven\" in its name as a martial weapon.<br><strong>Languages</strong> Elves begin play speaking Common and Elven. Elves with high Intelligence scores can choose from the following: Celestial, Draconic, Gnoll, Gnome, Goblin, Orc, and Sylvan."
      }, {
        note: "<strong>Weapon Finesse</strong> With a light weapon, rapier, whip, or spiked chain made for a creature of your size category, you may use your Dexterity modifier instead of your Strength modifier on attack rolls. If you carry a shield, its armor check penalty applies to your attack rolls.<br><strong>Dervish Dance</strong> When wielding a scimitar with one hand, you can use your Dexterity modifier instead of your Strength modifier on melee attack and damage rolls. You treat the scimitar as a one-handed piercing weapon for all feats and class abilities that require such a weapon (such as a duelist’s precise strike ability). The scimitar must be for a creature of your size. You cannot use this feat if you are carrying a weapon or shield in your off hand.<br><strong>Extra Arcane Pool</strong> Your arcane pool increases by 2.<br><strong>Weapon Focus (Black Blade)</strong> You gain a +1 bonus on all attack rolls you make using the selected weapon.<br><strong>Intensified Spell</strong> An intensified spell increases the maximum number of damage dice by 5 levels. You must actually have sufficient caster levels to surpass the maximum in order to benefit from this feat. No other variables of the spell are affected, and spells that inflict damage that is not modified by caster level are not affected by this feat. An intensified spell uses up a spell slot one level higher than the spell's actual level.<br><strong>Magical Lineage (Shocking Grasp)</strong> One of your parents was a gifted spellcaster who not only used metamagic often, but also developed many magical items and perhaps even a new spell or two—and you have inherited a fragment of this greatness. Pick one spell when you choose this trait. When you apply metamagic feats to this spell, treat its actual level as 1 lower for determining the spell's final adjusted level.<br><strong>Focused Mind</strong> Your childhood was either dominated by lessons of some sort (whether musical, academic, or other) or by a horrible home life that encouraged your ability to block out distractions and focus on the immediate task at hand. You gain a +2 trait bonus on concentration checks."
      }, {
        note: "<strong>Arcane Pool (Su)</strong> At 1st level, the magus gains a reservoir of mystical arcane energy that he can draw upon to fuel his powers and enhance his weapon. This arcane pool has a number of points equal to 1/2 his magus level (minimum 1) + his Intelligence modifier. The pool refreshes once per day when the magus prepares his spells.<br>At 1st level, a magus can expend 1 point from his arcane pool as a swift action to grant any weapon he is holding a +1 enhancement bonus for 1 minute. For every four levels beyond 1st, the weapon gains another +1 enhancement bonus, to a maximum of +5 at 17th level. These bonuses can be added to the weapon, stacking with existing weapon enhancement to a maximum of +5. Multiple uses of this ability do not stack with themselves.<br>At 5th level, these bonuses can be used to add any of the following weapon properties: dancing, flaming, flaming burst, frost, icy burst, keen, shock, shocking burst, speed, or vorpal. Adding these properties consumes an amount of bonus equal to the property's base price modifier (see the Magic Weapon Special Ability Descriptions). These properties are added to any the weapon already has, but duplicates do not stack. If the weapon is not magical, at least a +1 enhancement bonus must be added before any other properties can be added. These bonuses and properties are decided when the arcane pool point is spent and cannot be changed until the next time the magus uses this ability. These bonuses do not function if the weapon is wielded by anyone other than the magus.<br>A magus can only enhance one weapon in this way at one time. If he uses this ability again, the first use immediately ends.<br><strong>Cantrips</strong> A magus can prepare a number of cantrips, or 0-level spells, each day, as noted in the table above under “Spells per Day.” These spells are cast like any other spell, but they are not expended when cast and may be used again.<br><strong>Spell Combat (Ex)</strong> At 1st level, a magus learns to cast spells and wield his weapons at the same time. This functions much like two-weapon fighting, but the off-hand weapon is a spell that is being cast. To use this ability, the magus must have one hand free (even if the spell being cast does not have somatic components), while wielding a light or one-handed melee weapon in the other hand. As a full-round action, he can make all of his attacks with his melee weapon at a –2 penalty and can also cast any spell from the magus spell list with a casting time of 1 standard action (any attack roll made as part of this spell also takes this penalty). If he casts this spell defensively, he can decide to take an additional penalty on his attack rolls, up to his Intelligence bonus, and add the same amount as a circumstance bonus on his concentration check. If the check fails, the spell is wasted, but the attacks still take the penalty. A magus can choose to cast the spell first or make the weapon attacks first, but if he has more than one attack, he cannot cast the spell between weapon attacks.<br><strong>Spellstrike (Su)</strong> At 2nd level, whenever a magus casts a spell with a range of “touch” from the magus spell list, he can deliver the spell through any weapon he is wielding as part of a melee attack. Instead of the free melee touch attack normally allowed to deliver the spell, a magus can make one free melee attack with his weapon (at his highest base attack bonus) as part of casting this spell. If successful, this melee attack deals its normal damage as well as the effects of the spell. If the magus makes this attack in concert with spell combat, this melee attack takes all the penalties accrued by spell combat melee attacks. This attack uses the weapon's critical range (20, 19–20, or 18–20 and modified by the keen weapon property or similar effects), but the spell effect only deals ×2 damage on a successful critical hit, while the weapon damage uses its own critical modifier.<br><strong>Magus Arcana Arcane Accuracy (Su)</strong> The magus can expend 1 point from his arcane pool as a swift action to grant himself an insight bonus equal to his Intelligence bonus on all attack rolls until the end of his turn.<br><strong>Knowledge Pool (Su)</strong>At 7th level, when a magus prepares his magus spells, he can decide to expend 1 or more points from his arcane pool, up to his Intelligence bonus. For each point he expends, he can treat any one spell from the magus spell list as if it were in his spellbook and can prepare that spell as normal that day. If he does not cast spells prepared in this way before the next time he prepares spells, he loses those spells. He can also cast spells added in this way using his spell recall ability, but only until he prepares spells again.<br><strong>Medium Armor (Ex)</strong> At 7th level, a magus gains proficiency with medium armor. A magus can cast magus spells while wearing medium armor without incurring the normal arcane spell failure chance. Like any other arcane spellcaster, a magus wearing heavy armor or using a shield incurs a chance of arcane spell failure if the spell in question has a somatic component."
      }, {
        note: "<strong>Black Blade (Ex)</strong> At 3rd level, the bladebound magus' gains a powerful sentient weapon called a black blade, whose weapon type is chosen by the magus. A magus with this class feature cannot take the familiar magus arcana, and cannot have a familiar of any kind, even from another class.<br>Instead of the normal arcane pool amount, the bladebound magus's arcane pool has a number of points equal to 1/3 his level (minimum 1) plus his Intelligence bonus. This ability changes the Arcane Pool class feature and replaces the magus arcana gained at 3rd level.<br><strong>Black Blade Ability Descriptions</strong> Enhancement Bonus +2, Int 12, Wis 8, Cha 8 Ego 8. Cause: To protect the Evles.<br><strong>Alertness (Ex)</strong> While a magus is wielding his black blade, he gains the Alertness feat.<br><strong>Black Blade Strike (Sp)</strong> As a free action, the magus can spend a point from the black blade's arcane pool to grant the black blade a +1 bonus on damage rolls for 1 minute. For every four levels beyond 1st, this ability gives the black blade another +1 on damage rolls.<br><strong>Telepathy (Su)</strong> While a magus is wielding or carrying his black blade, he can communicate telepathically with the blade in a language that the magus and the black blade share.<br><strong>Unbreakable (Ex)</strong> As long as it has at least 1 point in its arcane pool, a black blade is immune to the broken condition. If broken, the black blade is unconscious and powerless until repaired. If destroyed, the black blade can be reforged 1 week later through a special ritual that costs 200 gp per magus level. The ritual takes 24 hours to complete.<br><strong>Energy Attunement (Su)</strong> At 5th level, as a free action, a magus can spend a point of his black blade's arcane pool to have it deal one of the following types of damage instead of weapon damage: cold, electricity, or fire. He can spend 2 points from the black blade's arcane pool to deal sonic or force damage instead of weapon damage. This effect lasts until the start of the magus's next turn."
      }, {
        note: "Headband of Vast Intelligence +2 skill: Use Magic Device."
      }],
      story: []
    },
    events: []
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
      level: "",
      classes: [{
        classname: "Monk",
        level: 8,
        hp: 46,
        fortitude: 6,
        reflex: 6,
        will: 6,
        ranks: 32,
        bab: 6
      }],
      size: {
        category: "Medium",
        size_modifier: 0,
        special_size_modifier: 0,
        size_modifier_fly: 0,
        size_modifier_stealth: 0
      },
      alignment: "Chaotic Neutral",
      deity: "",
      xp: 51000,
      height: "5'0",
      weight: "190 lbs",
      age: "40",
      gender: "Male",
      speed: "50ft",
      hero_points: "",
      luck_points: "",
      character_description: "",
      initiative: {
        misc: "",
        temp: "",
        feat: "",
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
      }
    },
    statistics: {
      stats: {
        str: {
          score: 19,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        },
        dex: {
          score: 14,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        },
        con: {
          score: 12,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        },
        int: {
          score: 10,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        },
        wis: {
          score: 18,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        },
        cha: {
          score: 7,
          modifier: "",
          temp_score: "",
          temp_modifier: ""
        }
      },
      feats: "Weapon Focus (Unarmed Strike), Improved Grapple, Dodge, Extra Ki, Improved Disarm, Extra Ki, Combat Reflexes, Great Fortitude",
      traits: "",
      languages: "Common, Dwarven",
      special_abilities: "Darkvision, Defensive Training, Greed, Hatred, Hardy, Stability, Stonecunning, Weapon Familiarity, Evasion, Flurry of Blows (Ex), Stunning Fist (Ex), Unarmed Strike, AC Bonus (Ex), Evasion (Ex), Fast Movement (Ex), Maneuver Training (Ex), Still Mind (Ex), Ki Pool (magic/cold iron/silver) (Su), Slow Fall 40ft (Ex), High Jump (Ex), Purity of Body (Ex), Wholeness of Body (Su)"
    },
    equipment: {
      gear: "Backpack, Pouch (belt), Sack, Candle, Flint And Steel, Tindertwig, Rations (5 Days), Waterskin, Bedroll, Blanket, Bloodblock, Rope (silk), Mirror, Compass, Ink, Inkpen, Paper Sheets, Case For Maps/scrolls, Torch, Rubbing Poweder, Rubbing Oils, Fine Cheese (1), Smelly Cheese (3), Wine (2), Wrestling Costume (2), Dagger, Lavendar soap, Soap bar",
      magic_gear: "Good Berries (5), Bracers of Armor +1, Ioun Stones Dusty Rose",
      item: [{
        name: "Alchemist Fire",
        quantity: 3,
        weight: ""
      }, {
        name: "Flask Of Oil",
        quantity: 3,
        weight: ""
      }, {
        name: "Potion of Cure Light Wounds",
        quantity: 1,
        weight: ""
      }, {
        name: "Potion of Cure Moderate Wounds",
        quantity: 1,
        weight: ""
      }, {
        name: "Potion of Cure Serious Wounds ",
        quantity: 1,
        weight: ""
      }, {
        name: "Potion of Owls Wisdom",
        quantity: 1,
        weight: ""
      }, {
        name: "Potion of Stabilise",
        quantity: 1,
        weight: ""
      }, {
        name: "Scented Oils",
        quantity: 5,
        weight: ""
      }],
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
        belts: "Belt of Giant Strength +2",
        body: "",
        chest: "",
        eyes: "",
        feet: "",
        hands: "",
        head: "Headband of Inspired Wisdom +2",
        headband: "",
        neck: "Amulet of Mighty Fists +1 (Shock)",
        ring_left_hand: "",
        ring_right_hand: "Ring of Protection +1",
        shoulders: "Cloak of Resistance +2",
        wrist: "Bracers of Armor +2"
      },
      wealth: {
        platinum: "",
        gold: "2,155",
        silver: "",
        copper: "",
        total: ""
      },
      consumable: [{
        item: "Ki Pool",
        current: "",
        total: 11,
        used: 2
      }, {
        item: "Stunning Fist",
        current: "",
        total: 10,
        used: 1
      }]
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
        misc: 3,
        temp: "",
        armor: 2,
        shield: "",
        deflect: 1,
        dodge: 1,
        natural: "",
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
          size: true,
          max_dex: true
        }
      },
      flat_footed: {
        misc: 3,
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
          size: true,
          ac_dodge: false
        }
      },
      touch: {
        misc: 3,
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
          size: true,
          max_dex: true,
          ac_armor: false,
          ac_shield: false,
          ac_natural: false
        }
      },
      ac_notes: "",
      fortitude: {
        base: "",
        resistance: 2,
        feat: 2,
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
        resistance: 2,
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
        resistance: 2,
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
      save_notes: "Immunity to all diseases, +2 against poison, spells, and spell-like abilities, +2 against enchantment spells and effects.",
      dr: {
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
          bab: false,
          special_size: true,
          level: true,
          half_level: false
        }
      },
      cmd: {
        misc: 1,
        temp: "",
        current: "",
        bonuses: {
          str_bonus: true,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: true,
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
        melee: [{
          weapon: "Flurry of Blows",
          attack: "+11/+11/+8/+8",
          damage: "1d10+4 + 1d6 electricity",
          critical: "20x2"
        }, {
          weapon: "Grapple",
          attack: "+14",
          damage: "1d10+4",
          critical: "20x2"
        }, {
          weapon: "Disarm ",
          attack: "+14",
          damage: "",
          critical: ""
        }, {
          weapon: "Stunning Fist",
          attack: "+11",
          damage: "1d10+4 + 1d6 electricity",
          critical: "20x2"
        }, {
          weapon: "Unarmed Strike",
          attack: "+11",
          damage: "1d10+4 + 1d6 electricity",
          critical: "20x2"
        }],
        ranged: [{
          weapon: "Shortbow",
          attack: "+8",
          damage: "1d6",
          critical: "x3",
          range: "60 ft",
          ammo: "50"
        }]
      },
      attack_notes: "+1 weapon focus (Unarmed strike). +2 grapple, +2 to resist grapple. +2 disarm, +2 CMD to resist disarm. Stunning Fist DC 18, Fortitude."
    },
    skills: {
      ranks: {
        total: "",
        spent: {
          include_custom: false,
          current: ""
        }
      },
      custom: [{
        name: "Acrobatics (Jump)",
        ranks: 8,
        misc: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          class_skill: true,
          level: true,
          half_level: false,
          check_penalty: false
        }
      }],
      acrobatics: {
        ranks: 8,
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
        misc: 2,
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
        ranks: 5,
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
          check_penalty: true,
          size_modifier_fly: true
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
        ranks: 8,
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
        ranks: 8,
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
          check_penalty: true,
          size_modifier_stealth: true
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
        ranks: 3,
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
      }
    },
    spells: {
      concentration: {
        current: "",
        misc: "",
        temp: "",
        feat: "",
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
        feat: "",
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
      character: [{
        note: "<strong>+2 Constitution, +2 Wisdom, –2 Charisma</strong> Dwarves are both tough and wise, but also a bit gruff.<br><strong>Medium</strong> Dwarves are Medium creatures and have no bonuses or penalties due to their size.<br><strong>Slow and Steady</strong> Dwarves have a base speed of 20 feet, but their speed is never modified by armor or encumbrance.<br><strong>Darkvision</strong> Dwarves can see in the dark up to 60 feet.<br><strong>Defensive Training</strong> Dwarves get a +4 dodge bonus to AC against monsters of the giant subtype.<br><strong>Greed</strong> Dwarves receive a +2 racial bonus on Appraise skill checks made to determine the price of nonmagical goods that contain precious metals or gemstones.<br><strong>Hatred</strong> Dwarves receive a +1 bonus on attack rolls against humanoid creatures of the orc and goblinoid subtypes due to special training against these hated foes.<br><strong>Hardy</strong> Dwarves receive a +2 racial bonus on saving throws against poison, spells, and spell-like abilities.<br><strong>Stability</strong> Dwarves receive a +4 racial bonus to their Combat Maneuver Defense when resisting a bull rush or trip attempt while standing on the ground.<br><strong>Stonecunning</strong> Dwarves receive a +2 bonus on Perception checks to potentially notice unusual stonework, such as traps and hidden doors located in stone walls or floors. They receive a check to notice such features whenever they pass within 10 feet of them, whether or not they are actively looking.<br><strong>Weapon Familiarity</strong> Dwarves are proficient with battleaxes, heavy picks, and warhammers, and treat any weapon with the word \"dwarven\" in its name as a martial weapon.<br><strong>Languages</strong> Dwarves begin play speaking Common and Dwarven. Dwarves with high Intelligence scores can choose from the following Giant, Gnome, Goblin, Orc, Terran, and Undercommon."
      }, {
        note: "<strong>Weapon and Armor Proficiency</strong> Monks are proficient with the club, crossbow (light or heavy), dagger, handaxe, javelin, kama, nunchaku, quarterstaff, sai, shortspear, short sword, shuriken, siangham, sling, and spear.<br>Monks are not proficient with any armor or shields.<br>When wearing armor, using a shield, or carrying a medium or heavy load, a monk loses his AC bonus, as well as his fast movement and flurry of blows abilities.<br><strong>AC Bonus (Ex)</strong> When unarmored and unencumbered, the monk adds his Wisdom bonus (if any) to his AC and his CMD. In addition, a monk gains a +1 bonus to AC and CMD at 4th level. This bonus increases by 1 for every four monk levels thereafter, up to a maximum of +5 at 20th level.<br>These bonuses to AC apply even against touch attacks or when the monk is flat-footed. He loses these bonuses when he is immobilized or helpless, when he wears any armor, when he carries a shield, or when he carries a medium or heavy load.<br><strong>Flurry of Blows (Ex)</strong> Starting at 1st level, a monk can make a flurry of blows as a full-attack action. When doing so, he may make on additional attack, taking a -2 penalty on all of his attack rolls, as if using the Two-Weapon Fighting feat. These attacks can be any combination of unarmed strikes and attacks with a monk special weapon (he does not need to use two weapons to use this ability). For the purpose of these attacks, the monk's base attack bonus from his monk class levels is equal to his monk level. For all Other purposes, such as qualifying for a feat or a prestige class, the monk uses his normal base attack bonus.<br>At 8th level, the monk can make two additional attacks when he uses flurry of blows, as if using Improved Two-Weapon Fighting (even if the monk does not meet the prerequisites for the feat).<br>At 15th level, the monk can make three additional attacks using flurry of blows, as if using Greater Two-Weapon Fighting (even if the monk does not meet the prerequisites for the feat).<br>A monk applies his full Strength bonus to his damage rolls for all successful attacks made with flurry of blows, whether the attacks are made with an off-hand or with a weapon wielded in both hands. A monk may substitute disarm, sunder, and trip combat maneuvers for unarmed attacks as part of a flurry of blows. A monk cannot use any weapon other than an unarmed strike or a special monk weapon as part of a flurry of blows. A monk with natural weapons cannot use such weapons as part of a flurry of blows, nor can he make natural attacks in addition to his flurry of blows attacks.<br><strong>Unarmed Strike</strong> At 1st level, a monk gains Improved Unarmed Strike as a bonus feat. A monk's attacks may be with fist, elbows, knees, and feet. This means that a monk may make unarmed strikes with his hands full. There is no such thing as an off-hand attack for a monk striking unarmed. A monk may thus apply his full Strength bonus on damage rolls for all his unarmed strikes.<br>Usually a monk's unarmed strikes deal lethal damage, but he can choose to deal nonlethal damage instead with no penalty on his attack roll. He has the same choice to deal lethal or nonlethal damage while grappling.<br>A monk's unarmed strike is treated as both a manufactured weapon and a natural weapon for the purpose of spells and effects that enhance or improve either manufactured weapons or natural weapons.<br>A monk also deals more damage with his unarmed strikes than a normal person would, as shown above on Table: Monk. The unarmed damage values listed on Table: Monk is for Medium monks. A Small monk deals less damage than the amount given there with his unarmed attacks, while a Large monk deals more damage; see Small or Large Monk Unarmed Damage on the table given below.<br><strong>Bonus Feat</strong> At 1st level, 2nd level, and every 4 levels thereafter, a monk may select a bonus feat. These feats must be taken from the following list: Catch Off-Guard, Combat Reflexes, Deflect Arrows, Dodge, Improved Grapple, Scorpion Style, and Throw Anything. At 6th level, the following feats are added to the list: Gorgon's Fist, Improved Bull Rush, Improved Disarm, Improved Feint, Improved Trip, and Mobility. At 10th level, the following feats are added to the list: Improved Critical, Medusa's Wrath, Snatch Arrows, and Spring Attack. A monk need not have any of the prerequisites normally required for these feats to select them.<br><strong>Stunning Fist (Ex)</strong> At 1st level, the monk gains Stunning Fist as a bonus feat, even if he does not meet the prerequisites. At 4th level, and every 4 levels thereafter, the monk gains the ability to apply a new condition to the target of his Stunning Fist. This condition replaces stunning the target for 1 round, and a successful saving throw still negates the effect. At 4th level, he can choose to make the target fatigued. At 8th level, he can make the target sickened for 1 minute. At 12th level, he can make the target staggered for 1d6+1 rounds. At 16th level, he can permanently blind or deafen the target. At 20th level, he can paralyze the target for 1d6+1 rounds. The monk must choose which condition will apply before the attack roll is made. These effects do not stack with themselves (a creature sickened by Stunning Fist cannot become nauseated if hit by Stunning Fist again), but additional hits do increase the duration.<br><strong>Evasion (Ex)</strong> At 2nd level or higher, a monk can avoid damage from many area-effect attacks. If a monk makes a successful Reflex saving throw against an attack that normally deals half damage on a successful save, he instead takes no damage. Evasion can be used only if a monk is wearing light armor or no armor. A helpless monk does not gain the benefit of evasion.<br><strong>Fast Movement (Ex)</strong> At 3rd level, a monk gains an enhancement bonus to his land speed, as shown on Table: Monk. A monk in armor or carrying a medium or heavy load loses this extra speed.<br><strong>Maneuver Training (Ex)</strong> At 3rd level, a monk uses his monk level in place of his base attack bonus when calculating his Combat Maneuver Bonus. Base attack bonuses granted from other classes are unaffected and are added normally.<br><strong>Still Mind (Ex)</strong> A monk of 3rd level or higher gains a +2 bonus on saving throws against enchantment spells and effects.<br><strong>Ki Pool (Su)</strong> At 4th level, a monk gains a pool of ki points, supernatural energy he can use to accomplish amazing feats. The number of points in a monk's ki pool is equal to 1/2 his monk level + his Wisdom modifier. As long as he has at least 1 point in his ki pool, he can make a ki strike. At 4th level, ki strike allows his unarmed attacks to be treated as magic weapons for the purpose of overcoming damage reduction. At 7th level, his unarmed attacks are also treated as cold iron and silver for the purpose of overcoming damage reduction. At 10th level, his unarmed attacks are also treated as lawful weapons for the purpose of overcoming damage reduction. At 16th level, his unarmed attacks are treated as adamantine weapons for the purpose of overcoming damage reduction and bypassing hardness.<br>By spending 1 point from his ki pool, a monk can make one additional attack at his highest attack bonus when making a flurry of blows attack. In addition, he can spend 1 point to increase his speed by 20 feet for 1 round. Finally, a monk can spend 1 point from his ki pool to give himself a +4 dodge bonus to AC for 1 round. Each of these powers is activated as a swift action. A monk gains additional powers that consume points from his ki pool as he gains levels.<br>The ki pool is replenished each morning after 8 hours of rest or meditation; these hours do not need to be consecutive.<br><strong>Slow Fall (Ex)</strong> At 4th level or higher, a monk within arm's reach of a wall can use it to slow his descent. When first gaining this ability, he takes damage as if the fall were 20 feet shorter than it actually is. The monk's ability to slow his fall (that is, to reduce the effective distance of the fall when next to a wall) improves with his monk level until at 20th level he can use a nearby wall to slow his descent and fall any distance without harm.<br><strong>High Jump (Ex)</strong> At 5th level, a monk adds his level to all Acrobatics checks made to jump, both for vertical jumps and horizontal jumps. In addition, he always counts as having a running start when making jump checks using Acrobatics. By spending 1 point from his ki pool as a swift action, a monk gains a +20 bonus on Acrobatics checks made to jump for 1 round.<br><strong>Purity of Body (Ex)</strong> At 5th level, a monk gains immunity to all diseases, including supernatural and magical diseases.<br><strong>Wholeness of Body (Su)</strong> At 7th level or higher, a monk can heal his own wounds as a standard action. He can heal a number of hit points of damage equal to his monk level by using 2 points from his ki pool."
      }, {
        note: "<strong>Improved Grapple</strong> You do not provoke an attack of opportunity when performing a grapple combat maneuver. In addition, you receive a +2 bonus on checks made to grapple a foe. You also receive a +2 bonus to your Combat Maneuver Defense whenever an opponent tries to grapple you.<br><strong>Weapon Focus</strong> You gain a +1 bonus on all attack rolls you make using the selected weapon.<br><strong>Dodge</strong> You gain a +1 dodge bonus to your AC. A condition that makes you lose your Dex bonus to AC also makes you lose the benefits of this feat.<br><strong>Extra Ki</strong> Your ki pool increases by 2.<br><strong>Improved Disarm</strong> You do not provoke an attack of opportunity when performing a disarm combat maneuver. In addition, you receive a +2 bonus on checks made to disarm a foe. You also receive a +2 bonus to your Combat Maneuver Defense whenever an opponent tries to disarm you.<br><strong>Combat Reflexes</strong> You may make a number of additional attacks of opportunity per round equal to your Dexterity bonus. With this feat, you may also make attacks of opportunity while flat-footed.<br><strong>Great Fortitude</strong> You get a +2 bonus on all Fortitude saving throws."
      }, {
        note: "Infected with lycanthropy."
      }, {
        note: "Pippin making Ioun Stones Dusty Rose for Vos (2,500gp spent on materials)."
      }],
      story: [{
        note: "Party gear Wand of Cure Light Wounds x2 (Pippin and Morin)."
      }, {
        note: "Prince's Wolves scarf, a toke to proof."
      }]
    },
    events: []
  };

  // exposed methods
  return {
    data: data
  };

})();

var hardCodedCharacters = (function() {

  var demoCharacters = [
    izlara.data,
    ravich.data
  ];

  var allCharacters = [
    izlara.data,
    ravich.data,
    nif.data,
    vos.data,
    orrin.data,
    nefi.data,
    ro.data,
    marika.data
  ];

  var singleCharacters = {
    izlara: izlara.data,
    ravich: ravich.data,
    nif: nif.data,
    vos: vos.data,
    orrin: orrin.data,
    nefi: nefi.data,
    ro: ro.data,
    marika: marika.data
  }

  function all() {
    return allCharacters
  };

  function demo() {
    return demoCharacters
  };

  function single() {
    return singleCharacters
  };

  // exposed methods
  return {
    demo: demo,
    all: all,
    single: single
  };

})();

var checkUrl = (function() {

  function render() {
    if (helper.getUrlParameter("sheet")) {
      _reset();
    };
    if (helper.getUrlParameter("character")) {
      _loadCharacter();
    };
  };

  function _reset() {
    if (helper.getUrlParameter("sheet") == "restore") {
      sheet.restore()
    } else if (helper.getUrlParameter("sheet") == "all") {
      sheet.all()
    } else if (helper.getUrlParameter("sheet") == "destroy") {
      sheet.destroy()
    };
  };

  function _loadCharacter() {
    var index;
    var characterParameter = helper.getUrlParameter("character");
    for (var i = 0; i < sheet.getAllCharacters().length; i++) {
      if (characterParameter == sheet.getAllCharacters()[i].basics.name.toLowerCase().split(" ")[0]) {
        index = i;
      };
    };
    if (typeof index !== "undefined") {
      sheet.switch(index);
    } else {
      if (hardCodedCharacters.single()[characterParameter]) {
        sheet.addCharacter(hardCodedCharacters.single()[characterParameter]);
      } else {
        snack.render("No character with that name.", false);
      };
    };
  }

  // exposed methods
  return {
    render: render
  };

})();

var classes = (function() {

  function _total(classObjects, key) {
    var currentTotal = 0;
    for (var i = 0; i < classObjects.length; i++) {
      currentTotal = currentTotal + classObjects[i][key];
    };
    return parseInt(currentTotal, 10);
  };

  function _makeBaseAttackBonuses(totalBab) {
    var allBab = [];
    if (totalBab < 100) {
      if (totalBab >= 5) {
        while (totalBab > 0) {
          allBab.push("+" + totalBab);
          totalBab = totalBab - 5;
        };
      } else {
        if (totalBab > 0) {
          allBab.push("+" + totalBab);
        } else {
          allBab.push(totalBab);
        };
      };
    } else {
      allBab.push("BAB exceeds maximum calculation");
    };
    if (allBab.length > 1) {
      allBab = allBab.join(" / ");
    } else {
      allBab = allBab[0];
    };
    return allBab;
  };

  function delayUpdate(element) {
    render();
    textBlock.render();
    totalBlock.render();
  };

  var delayUpdateTimer = null;

  function bind(inputBlock) {
    var input = inputBlock.querySelector(".js-input-block-field");
    if (input) {
      input.addEventListener("input", function() {
        clearTimeout(delayUpdateTimer);
        delayUpdateTimer = setTimeout(delayUpdate, 300, this);
      }, false);
    };
  };

  function render() {
    var all_classes = helper.getObject(sheet.getCharacter(), "basics.classes");
    var totalLevels = _total(all_classes, "level");
    var totalHP = _total(all_classes, "hp") + (totalLevels * stats.getMod("con"));
    var totalBab = _total(all_classes, "bab");
    var totalRanks = _total(all_classes, "ranks") + (totalLevels * stats.getMod("int"));
    var totalFortitude = _total(all_classes, "fortitude");
    var totalReflex = _total(all_classes, "reflex");
    var totalWill = _total(all_classes, "will");
    var baseAttackBonuses = _makeBaseAttackBonuses(totalBab);
    helper.setObject(sheet.getCharacter(), "basics.level", totalLevels);
    helper.setObject(sheet.getCharacter(), "defense.hp.total", totalHP);
    helper.setObject(sheet.getCharacter(), "offense.base_attack", totalBab);
    helper.setObject(sheet.getCharacter(), "offense.base_attack_bonuses", baseAttackBonuses);
    helper.setObject(sheet.getCharacter(), "skills.ranks.total", totalRanks);
    helper.setObject(sheet.getCharacter(), "defense.fortitude.base", totalFortitude);
    helper.setObject(sheet.getCharacter(), "defense.reflex.base", totalReflex);
    helper.setObject(sheet.getCharacter(), "defense.will.base", totalWill);
  };

  function _get_allClassLevel(characterObject) {
    var classAndLevel = "";
    var classes = characterObject.basics.classes;
    for (var i = 0; i < classes.length; i++) {
      var classname = classes[i].classname || "No class";
      var level = classes[i].level || "No level";
      classAndLevel = classAndLevel + classname + " " + level;
      if (i < (classes.length - 1)) {
        classAndLevel = classAndLevel + " / ";
      };
    };
    return classAndLevel;
  };

  // exposed methods
  return {
    bind: bind,
    render: render,
    getClassLevel: _get_allClassLevel
  };

})();

var clone = (function() {

  function render() {
    _render_all_clones("class");
    _render_all_clones("attack-melee");
    _render_all_clones("attack-ranged");
    _render_all_clones("consumable");
    _render_all_clones("item");
    _render_all_clones("skill");
    _render_all_clones("note-character");
    _render_all_clones("note-story");
    _update_clonePlaceholder("class");
    _update_clonePlaceholder("attack-melee");
    _update_clonePlaceholder("attack-ranged");
    _update_clonePlaceholder("consumable");
    _update_clonePlaceholder("item");
    _update_clonePlaceholder("skill");
    _update_clonePlaceholder("note-character");
    _update_clonePlaceholder("note-story");
    _update_clonePrefix("item");
    _update_cloneSuffix("item");
  };

  function _get_cloneObjects(cloneType) {
    var object;
    if (cloneType == "class") {
      object = sheet.getCharacter().basics.classes;
    };
    if (cloneType == "consumable") {
      object = sheet.getCharacter().equipment.consumable;
    };
    if (cloneType == "item") {
      object = sheet.getCharacter().equipment.item;
    };
    if (cloneType == "skill") {
      object = sheet.getCharacter().skills.custom;
    };
    if (cloneType == "attack-melee") {
      object = sheet.getCharacter().offense.attack.melee;
    };
    if (cloneType == "attack-ranged") {
      object = sheet.getCharacter().offense.attack.ranged;
    };
    if (cloneType == "note-character") {
      object = sheet.getCharacter().notes.character;
    };
    if (cloneType == "note-story") {
      object = sheet.getCharacter().notes.story;
    };
    return object;
  };

  function _get_cloneString(cloneType, cloneIndex) {
    var cloneString;
    if (cloneType == "class") {
      cloneString =
        '<div class="m-clone-block-content js-clone-block-content">' +
        '  <div class="m-edit-box-content m-edit-box-content-outline m-edit-box-content-margin-large">' +
        '    <div class="m-edit-box-item m-edit-box-group">' +
        '      <div class="m-edit-box-item-large">' +
        '        <div class="m-input-block js-input-block js-basics-class-level" data-clone="true" data-clone-count="' + cloneIndex + '">' +
        '          <label class="m-input-block-label js-input-block-label" for="class-classname-' + cloneIndex + '">Class Name</label>' +
        '          <input id="class-classname-' + cloneIndex + '" class="m-input-block-field u-full-width js-input-block-field" data-path="basics.classes" data-path-clone-key="classname" type="text" tabindex="1">' +
        '        </div>' +
        '      </div>' +
        '      <div class="m-edit-box-item-small">' +
        '        <div class="m-input-block js-input-block js-basics-class-level" data-clone="true" data-clone-count="' + cloneIndex + '">' +
        '          <label class="m-input-block-label js-input-block-label" for="class-level-' + cloneIndex + '">Levels</label>' +
        '          <input id="class-level-' + cloneIndex + '" class="m-input-block-field u-full-width js-input-block-field js-tip" data-path="basics.classes" data-path-clone-key="level" data-type="integer" data-clone="true" data-tip-show-on="focus" data-tip-message="Total number of Levels in this Class." type="text" tabindex="1">' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '    <div class="m-edit-box-item m-edit-box-group">' +
        '      <div class="m-edit-box-item-medium">' +
        '        <div class="m-input-block js-input-block" data-clone="true" data-clone-count="' + cloneIndex + '">' +
        '          <label class="m-input-block-label js-input-block-label" for="class-hp-' + cloneIndex + '">HP</label>' +
        '          <input id="class-hp-' + cloneIndex + '" class="m-input-block-field u-full-width js-input-block-field js-tip" data-path="basics.classes" data-path-clone-key="hp" data-type="integer" data-clone="true" data-tip-show-on="focus" data-tip-message="HP for all Levels in this Class, including favored class bonuses. CON bonuses will be automatically added." type="text" tabindex="1">' +
        '        </div>' +
        '      </div>' +
        '      <div class="m-edit-box-item-medium">' +
        '        <div class="m-input-block js-input-block" data-clone="true" data-clone-count="' + cloneIndex + '">' +
        '          <label class="m-input-block-label js-input-block-label" for="class-bab-' + cloneIndex + '">BAB</label>' +
        '          <input id="class-bab-' + cloneIndex + '" class="m-input-block-field u-full-width js-input-block-field js-tip" data-path="basics.classes" data-path-clone-key="bab" data-type="integer" data-clone="true" data-tip-show-on="focus" data-tip-message="The highest BAB for this Class. Additional attacks will be automatically added." type="text" tabindex="1">' +
        '        </div>' +
        '      </div>' +
        '      <div class="m-edit-box-item-medium">' +
        '        <div class="m-input-block js-input-block" data-clone="true" data-clone-count="' + cloneIndex + '">' +
        '          <label class="m-input-block-label js-input-block-label" for="class-ranks-' + cloneIndex + '">Ranks</label>' +
        '          <input id="class-ranks-' + cloneIndex + '" class="m-input-block-field u-full-width js-input-block-field js-tip" data-path="basics.classes" data-path-clone-key="ranks" data-type="integer" data-clone="true" data-tip-show-on="focus" data-tip-message="Skill Ranks for all Levels in this Class, including favored class bonuses. INT bonuses will be automatically added." type="text" tabindex="1">' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '    <div class="m-edit-box-item m-edit-box-group">' +
        '      <div class="m-edit-box-item-medium">' +
        '        <div class="m-input-block js-input-block" data-clone="true" data-clone-count="' + cloneIndex + '">' +
        '          <label class="m-input-block-label js-input-block-label" for="class-fortitude-' + cloneIndex + '">Base Fortitude</label>' +
        '          <input id="class-fortitude-' + cloneIndex + '" class="m-input-block-field u-full-width js-input-block-field" data-path="basics.classes" data-path-clone-key="fortitude" data-type="integer" type="text" tabindex="1">' +
        '        </div>' +
        '      </div>' +
        '      <div class="m-edit-box-item-medium">' +
        '        <div class="m-input-block js-input-block" data-clone="true" data-clone-count="' + cloneIndex + '">' +
        '          <label class="m-input-block-label js-input-block-label" for="class-reflex-' + cloneIndex + '">Base Reflex</label>' +
        '          <input id="class-reflex-' + cloneIndex + '" class="m-input-block-field u-full-width js-input-block-field" data-path="basics.classes" data-path-clone-key="reflex" data-type="integer" type="text" tabindex="1">' +
        '        </div>' +
        '      </div>' +
        '      <div class="m-edit-box-item-medium">' +
        '        <div class="m-input-block js-input-block" data-clone="true" data-clone-count="' + cloneIndex + '">' +
        '          <label class="m-input-block-label js-input-block-label" for="class-will-' + cloneIndex + '">Base Will</label>' +
        '          <input id="class-will-' + cloneIndex + '" class="m-input-block-field u-full-width js-input-block-field" data-path="basics.classes" data-path-clone-key="will" data-type="integer" type="text" tabindex="1">' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>' +
        '<div class="m-clone-block-delete-controls">' +
        '  <button class="button button-icon button-large button-primary js-clone-block-delete" tabindex="-1"><span class="icon-close"></span></button>' +
        '</div>';
    };
    if (cloneType == "consumable") {
      cloneString =
        '<div class="m-clone-block-content js-clone-block-content">' +
        '  <div class="js-total-block" data-total-path="equipment.consumable" data-total-path-addition="total" data-total-path-subtraction="used" data-clone="true" data-clone-count="' + cloneIndex + '">' +
        '    <div class="m-edit-box-content m-edit-box-content-outline m-edit-box-content-margin-large">' +
        '      <div class="m-edit-box-item-max m-edit-box-group">' +
        '        <div class="m-edit-box-item-large">' +
        '          <div class="m-input-block js-input-block" data-clone="true" data-clone-count="' + cloneIndex + '">' +
        '            <label class="m-input-block-label js-input-block-label" for="consumable-item-' + cloneIndex + '">Consumables</label>' +
        '            <input id="consumable-item-' + cloneIndex + '" class="m-input-block-field u-full-width js-input-block-field" data-path="equipment.consumable" data-path-clone-key="item" type="text" tabindex="1">' +
        '          </div>' +
        '        </div>' +
        '        <div class="m-edit-box-item-total">' +
        '          <p class="m-edit-box-label">Remaining</p>' +
        '          <p class="m-edit-box-total js-total-block-total">0</p>' +
        '        </div>' +
        '      </div>' +
        '      <div class="m-edit-box-item m-edit-box-group-control-set">' +
        '        <div class="m-edit-box-item-button-large">' +
        '          <a href="javascript:void(0)" class="u-inline-with-input u-no-margin button button-large button-icon button-thin js-input-block-increment" data-clone="true" data-clone-count="' + cloneIndex + '" data-path-clone-key="total" data-increment-target="consumable-total-' + cloneIndex + '" data-increment="subtraction" tabindex="1"><span class="icon-remove"></span></a>' +
        '        </div>' +
        '        <div class="m-edit-box-item-large">' +
        '          <div class="m-input-block js-input-block" data-clone="true" data-clone-count="' + cloneIndex + '">' +
        '            <label class="m-input-block-label js-input-block-label" for="consumable-total-' + cloneIndex + '">Total</label>' +
        '            <input id="consumable-total-' + cloneIndex + '" class="m-input-block-field u-full-width js-input-block-field" data-path="equipment.consumable" data-path-clone-key="total" data-type="integer" data-minimum="0" type="text" tabindex="1">' +
        '          </div>' +
        '        </div>' +
        '        <div class="m-edit-box-item-button-large">' +
        '          <a href="javascript:void(0)" class="u-inline-with-input u-no-margin button button-large button-icon button-thin js-input-block-increment" data-clone="true" data-clone-count="' + cloneIndex + '" data-path-clone-key="total" data-increment-target="consumable-total-' + cloneIndex + '" data-increment="addition" tabindex="1"><span class="icon-add"></span></a>' +
        '        </div>' +
        '        <div class="m-edit-box-item-button-large">' +
        '          <a href="javascript:void(0)" class="u-inline-with-input u-no-margin button button-large button-icon button-thin js-input-block-increment" data-clone="true" data-clone-count="' + cloneIndex + '" data-path-clone-key="total" data-increment-target="consumable-total-' + cloneIndex + '" data-increment="clear" tabindex="1"><span class="icon-close"></span></a>' +
        '        </div>' +
        '      </div>' +
        '      <div class="m-edit-box-item m-edit-box-group-control-set">' +
        '        <div class="m-edit-box-item-button-large">' +
        '          <a href="javascript:void(0)" class="u-inline-with-input u-no-margin button button-large button-icon button-thin js-input-block-increment" data-clone="true" data-clone-count="' + cloneIndex + '" data-path-clone-key="used" data-increment-target="consumable-used-' + cloneIndex + '" data-increment="subtraction" tabindex="1"><span class="icon-remove"></span></a>' +
        '        </div>' +
        '        <div class="m-edit-box-item-large">' +
        '          <div class="m-input-block js-input-block" data-clone="true" data-clone-count="' + cloneIndex + '">' +
        '            <label class="m-input-block-label js-input-block-label" for="consumable-used-' + cloneIndex + '">Used</label>' +
        '            <input id="consumable-used-' + cloneIndex + '" class="m-input-block-field u-full-width js-input-block-field" data-total="subtract" data-path="equipment.consumable" data-path-clone-key="used" data-type="integer" data-minimum="0" type="text" tabindex="1">' +
        '          </div>' +
        '        </div>' +
        '        <div class="m-edit-box-item-button-large">' +
        '          <a href="javascript:void(0)" class="u-inline-with-input u-no-margin button button-large button-icon button-thin js-input-block-increment" data-clone="true" data-clone-count="' + cloneIndex + '" data-path-clone-key="used" data-increment-target="consumable-used-' + cloneIndex + '" data-increment="addition" tabindex="1"><span class="icon-add"></span></a>' +
        '        </div>' +
        '        <div class="m-edit-box-item-button-large">' +
        '          <a href="javascript:void(0)" class="u-inline-with-input u-no-margin button button-large button-icon button-thin js-input-block-increment" data-clone="true" data-clone-count="' + cloneIndex + '" data-path-clone-key="used" data-increment-target="consumable-used-' + cloneIndex + '" data-increment="clear" tabindex="1"><span class="icon-close"></span></a>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>' +
        '<div class="m-clone-block-delete-controls">' +
        '  <button class="button button-icon button-large button-primary js-clone-block-delete" tabindex="-1"><span class="icon-close"></span></button>' +
        '</div>'
    };
    if (cloneType == "item") {
      cloneString =
        '<div class="m-clone-block-content js-clone-block-content">' +
        '  <div class="m-edit-box-content m-edit-box-content-margin-small">' +
        '    <div class="m-edit-box-item m-edit-box-group">' +
        '      <div class="m-edit-box-item-max">' +
        '        <div class="m-input-block js-input-block" data-clone="true" data-clone-count="' + cloneIndex + '">' +
        '          <input id="item-name-' + cloneIndex + '" class="m-input-block-field u-full-width js-input-block-field" data-path="equipment.item" data-path-clone-key="name" type="text" tabindex="1">' +
        '        </div>' +
        '      </div>' +
        '      <div class="m-edit-box-item-small">' +
        '        <div class="m-input-block js-input-block" data-clone="true" data-clone-count="' + cloneIndex + '">' +
        '          <input id="item-quantity-' + cloneIndex + '" class="m-input-block-field u-full-width js-input-block-field" data-path="equipment.item" data-path-clone-key="quantity" data-type="integer" type="text" tabindex="1">' +
        '        </div>' +
        '      </div>' +
        '      <div class="m-edit-box-item-small">' +
        '        <div class="m-input-block js-input-block" data-clone="true" data-clone-count="' + cloneIndex + '">' +
        '          <input id="item-weight-' + cloneIndex + '" class="m-input-block-field u-full-width js-input-block-field" data-path="equipment.item" data-path-clone-key="weight" data-type="float" type="text" tabindex="1">' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>' +
        '<div class="m-clone-block-delete-controls">' +
        '  <button class="button button-icon button-large button-primary js-clone-block-delete" tabindex="-1"><span class="icon-close"></span></button>' +
        '</div>';
    };
    if (cloneType == "skill") {
      cloneString =
        '<div class="m-clone-block-content js-clone-block-content">' +
        '  <div class="m-skill js-total-block" data-total-path="skills.custom" data-total-path-addition="ranks,misc" data-total-bonuses="true" data-total-bonuses="true" data-total-bonuses-include="str_bonus,dex_bonus,con_bonus,int_bonus,wis_bonus,cha_bonus,class_skill,level,half_level,check_penalty" data-clone="true" data-clone-count="' + cloneIndex + '">' +
        '    <div class="m-edit-box m-edit-box-indent m-edit-box-head-large m-edit-box-guides">' +
        '      <div class="m-edit-box-head">' +
        '        <div class="m-skill-name m-input-block js-input-block" data-clone="true" data-clone-count="' + cloneIndex + '">' +
        '          <input class="m-input-block-field u-full-width u-no-margin js-input-block-field" data-path="skills.custom" data-path-clone-key="name" type="text" tabindex="1" placeholder="Custom skill">' +
        '        </div>' +
        '      </div>' +
        '      <div class="m-edit-box-body">' +
        '        <div class="m-edit-box-content">' +
        '          <div class="m-edit-box-item m-edit-box-group">' +
        '            <div class="m-edit-box-item-total">' +
        '              <p class="m-edit-box-label hidden-sm hidden-md hidden-lg hidden-xl u-text-center">Total</p>' +
        '              <p class="m-edit-box-total js-total-block-total">0</p>' +
        '            </div>' +
        '            <div class="m-edit-box-item-small m-edit-box-item-grow">' +
        '              <div class="m-input-block js-input-block" data-clone="true" data-clone-count="' + cloneIndex + '">' +
        '                <p class="m-edit-box-label hidden-sm hidden-md hidden-lg hidden-xl u-text-center">Ranks</p>' +
        '                <input class="m-input-block-field u-full-width u-text-center js-input-block-field js-input-block-field-ranks" data-path="skills.custom" data-path-clone-key="ranks" data-type="integer" type="text" tabindex="1">' +
        '              </div>' +
        '            </div>' +
        '            <div class="m-edit-box-item-small m-edit-box-item-grow">' +
        '              <div class="m-input-block js-input-block" data-clone="true" data-clone-count="' + cloneIndex + '">' +
        '                <p class="m-edit-box-label hidden-sm hidden-md hidden-lg hidden-xl u-text-center">Misc</p>' +
        '                <input class="m-input-block-field u-full-width u-text-center js-input-block-field" data-path="skills.custom" data-path-clone-key="misc" data-type="integer" type="text" tabindex="1">' +
        '              </div>' +
        '            </div>' +
        '            <div class="m-edit-box-item-check">' +
        '              <div class="m-check-block">' +
        '                <p class="m-edit-box-label hidden-sm hidden-md hidden-lg hidden-xl u-text-center">Class Skill</p>' +
        '                <input class="m-check-block-check js-total-block-bonus-check" data-path="skills.custom" data-path-array="true" data-bonus-type="class-skill" type="checkbox" tabindex="1">' +
        '                <span class="m-check-block-check-icon"></span>' +
        '              </div>' +
        '            </div>' +
        '            <div class="m-edit-box-item-button-small">' +
        '              <a href="javascript:void(0)" class="u-inline-with-input u-no-margin button button-secondary button-large button-icon button-thin js-total-block-bonuses" data-clone="true" data-modal-heading="Custom Skill bonuses" tabindex="1"><span class="icon-more-vertical"></span></a>' +
        '            </div>' +
        '          </div>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>' +
        '<div class="m-clone-block-delete-controls m-clone-block-delete-controls-skill">' +
        '  <button class="button button-icon button-large button-primary js-clone-block-delete" tabindex="-1"><span class="icon-close"></span></button>' +
        '</div>';
    };
    if (cloneType == "attack-melee") {
      cloneString =
        '<div class="m-clone-block-content js-clone-block-content">' +
        '  <div class="m-edit-box-content m-edit-box-content-outline m-edit-box-content-margin-large">' +
        '    <div class="m-edit-box-item-max">' +
        '      <div class="m-input-block js-input-block" data-clone="true" data-clone-count="' + cloneIndex + '">' +
        '        <label class="m-input-block-label js-input-block-label" for="attack-melee-weapon-' + cloneIndex + '">Weapon</label>' +
        '        <input id="attack-melee-weapon-' + cloneIndex + '" class="m-input-block-field u-full-width js-input-block-field" data-path="offense.attack.melee" data-path-clone-key="weapon" type="text" tabindex="1">' +
        '      </div>' +
        '    </div>' +
        '    <div class="m-edit-box-item m-edit-box-group">' +
        '      <div class="m-edit-box-item-medium">' +
        '        <div class="m-input-block js-input-block" data-clone="true" data-clone-count="' + cloneIndex + '">' +
        '          <label class="m-input-block-label js-input-block-label" for="attack-melee-attack-' + cloneIndex + '">Attack</label>' +
        '          <input id="attack-melee-attack-' + cloneIndex + '" class="m-input-block-field u-full-width js-input-block-field" data-path="offense.attack.melee" data-path-clone-key="attack" type="text" tabindex="1">' +
        '        </div>' +
        '      </div>' +
        '      <div class="m-edit-box-item-medium">' +
        '        <div class="m-input-block js-input-block" data-clone="true" data-clone-count="' + cloneIndex + '">' +
        '          <label class="m-input-block-label js-input-block-label" for="attack-melee-damage-' + cloneIndex + '">Damage</label>' +
        '          <input id="attack-melee-damage-' + cloneIndex + '" class="m-input-block-field u-full-width js-input-block-field" data-path="offense.attack.melee" data-path-clone-key="damage" type="text" tabindex="1">' +
        '        </div>' +
        '      </div>' +
        '      <div class="m-edit-box-item-medium">' +
        '        <div class="m-input-block js-input-block" data-clone="true" data-clone-count="' + cloneIndex + '">' +
        '          <label class="m-input-block-label js-input-block-label" for="attack-melee-critical-' + cloneIndex + '">Critical</label>' +
        '          <input id="attack-melee-critical-' + cloneIndex + '" class="m-input-block-field u-full-width js-input-block-field" data-path="offense.attack.melee" data-path-clone-key="critical" type="text" tabindex="1">' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>' +
        '<div class="m-clone-block-delete-controls">' +
        '  <button class="button button-icon button-large button-primary js-clone-block-delete" tabindex="-1"><span class="icon-close"></span></button>' +
        '</div>';
    };
    if (cloneType == "attack-ranged") {
      cloneString =
        '<div class="m-clone-block-content js-clone-block-content">' +
        '  <div class="m-edit-box-content m-edit-box-content-outline m-edit-box-content-margin-large">' +
        '    <div class="m-edit-box-item-max">' +
        '      <div class="m-input-block js-input-block" data-clone="true" data-clone-count="' + cloneIndex + '">' +
        '        <label class="m-input-block-label js-input-block-label" for="attack-ranged-weapon-' + cloneIndex + '">Weapon</label>' +
        '        <input id="attack-ranged-weapon-' + cloneIndex + '" class="m-input-block-field u-full-width js-input-block-field" data-path="offense.attack.ranged" data-path-clone-key="weapon" type="text" tabindex="1">' +
        '      </div>' +
        '    </div>' +
        '    <div class="m-edit-box-item m-edit-box-group">' +
        '      <div class="m-edit-box-item-medium">' +
        '        <div class="m-input-block js-input-block" data-clone="true" data-clone-count="' + cloneIndex + '">' +
        '          <label class="m-input-block-label js-input-block-label" for="attack-ranged-attack-' + cloneIndex + '">Attack</label>' +
        '          <input id="attack-ranged-attack-' + cloneIndex + '" class="m-input-block-field u-full-width js-input-block-field" data-path="offense.attack.ranged" data-path-clone-key="attack" type="text" tabindex="1">' +
        '        </div>' +
        '      </div>' +
        '      <div class="m-edit-box-item-medium">' +
        '        <div class="m-input-block js-input-block" data-clone="true" data-clone-count="' + cloneIndex + '">' +
        '          <label class="m-input-block-label js-input-block-label" for="attack-ranged-damage-' + cloneIndex + '">Damage</label>' +
        '          <input id="attack-ranged-damage-' + cloneIndex + '" class="m-input-block-field u-full-width js-input-block-field" data-path="offense.attack.ranged" data-path-clone-key="damage" type="text" tabindex="1">' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '    <div class="m-edit-box-item m-edit-box-group">' +
        '      <div class="m-edit-box-item-medium">' +
        '        <div class="m-input-block js-input-block" data-clone="true" data-clone-count="' + cloneIndex + '">' +
        '          <label class="m-input-block-label js-input-block-label" for="attack-ranged-critical-' + cloneIndex + '">Critical</label>' +
        '          <input id="attack-ranged-critical-' + cloneIndex + '" class="m-input-block-field u-full-width js-input-block-field" data-path="offense.attack.ranged" data-path-clone-key="critical" type="text" tabindex="1">' +
        '        </div>' +
        '      </div>' +
        '      <div class="m-edit-box-item-medium">' +
        '        <div class="m-input-block js-input-block" data-clone="true" data-clone-count="' + cloneIndex + '">' +
        '          <label class="m-input-block-label js-input-block-label" for="attack-ranged-range-' + cloneIndex + '">Range</label>' +
        '          <input id="attack-ranged-range-' + cloneIndex + '" class="m-input-block-field u-full-width js-input-block-field" data-path="offense.attack.ranged" data-path-clone-key="range" type="text" tabindex="1">' +
        '        </div>' +
        '      </div>' +
        '      <div class="m-edit-box-item-medium">' +
        '        <div class="m-input-block js-input-block" data-clone="true" data-clone-count="' + cloneIndex + '">' +
        '          <label class="m-input-block-label js-input-block-label" for="attack-ranged-ammo-' + cloneIndex + '">Ammo</label>' +
        '          <input id="attack-ranged-ammo-' + cloneIndex + '" class="m-input-block-field u-full-width js-input-block-field" data-path="offense.attack.ranged" data-path-clone-key="ammo" type="text" tabindex="1">' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>' +
        '<div class="m-clone-block-delete-controls">' +
        '  <button class="button button-icon button-large button-primary js-clone-block-delete" tabindex="-1"><span class="icon-close"></span></button>' +
        '</div>';
    };
    if (cloneType == "note-character") {
      cloneString =
        '<div class="m-clone-block-content js-clone-block-content">' +
        '  <div class="m-edit-box-content m-edit-box-content-margin-large">' +
        '    <div class="m-edit-box-item-max">' +
        '      <div class="m-textarea-block js-textarea-block" data-clone="true" data-clone-count="' + cloneIndex + '">' +
        '        <label class="m-textarea-block-label js-textarea-block-label" for="note-character-' + cloneIndex + '">Note</label>' +
        '        <div id="note-character-' + cloneIndex + '" class="m-textarea-block-field textarea textarea-large u-full-width js-textarea-block-field" contentEditable="true" data-path="notes.character" data-path-clone-key="note" tabindex="1"></div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>' +
        '<div class="m-clone-block-delete-controls m-clone-block-delete-controls-note">' +
        '  <button class="button button-icon button-large button-primary js-clone-block-delete" tabindex="-1"><span class="icon-close"></span></button>' +
        '</div>';
    };
    if (cloneType == "note-story") {
      cloneString =
        '<div class="m-clone-block-content js-clone-block-content">' +
        '  <div class="m-edit-box-content m-edit-box-content-margin-large">' +
        '    <div class="m-edit-box-item-max">' +
        '      <div class="m-textarea-block js-textarea-block" data-clone="true" data-clone-count="' + cloneIndex + '">' +
        '        <label class="m-textarea-block-label js-textarea-block-label" for="note-story-' + cloneIndex + '">Note</label>' +
        '        <div id="note-story-' + cloneIndex + '" class="m-textarea-block-field textarea textarea-large u-full-width js-textarea-block-field" contentEditable="true" data-path="notes.story" data-path-clone-key="note" tabindex="1"></div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>' +
        '<div class="m-clone-block-delete-controls m-clone-block-delete-controls-note">' +
        '  <button class="button button-icon button-large button-primary js-clone-block-delete" tabindex="-1"><span class="icon-close"></span></button>' +
        '</div>';
    };
    return cloneString;
  };

  function _get_cloneBlock(cloneType) {
    var cloneBlock;
    if (cloneType == "class") {
      cloneBlock = helper.e(".js-clone-block-class");
    };
    if (cloneType == "attack-melee" || cloneType == "attack-ranged" || cloneType == "attack") {
      cloneBlock = helper.e(".js-clone-block-attack");
    };
    if (cloneType == "item") {
      cloneBlock = helper.e(".js-clone-block-item");
    };
    if (cloneType == "consumable") {
      cloneBlock = helper.e(".js-clone-block-consumable");
    };
    if (cloneType == "skill") {
      cloneBlock = helper.e(".js-clone-block-skill");
    };
    if (cloneType == "note-character" || cloneType == "note-story" || cloneType == "note") {
      cloneBlock = helper.e(".js-clone-block-note");
    };
    return cloneBlock;
  };

  function _get_cloneTarget(cloneType) {
    var cloneTarget;
    if (cloneType == "class") {
      cloneTarget = helper.e(".js-clone-block-target-class");
    };
    if (cloneType == "attack-melee") {
      cloneTarget = helper.e(".js-clone-block-target-attack-melee");
    };
    if (cloneType == "attack-ranged") {
      cloneTarget = helper.e(".js-clone-block-target-attack-ranged");
    };
    if (cloneType == "consumable") {
      cloneTarget = helper.e(".js-clone-block-target-consumable");
    };
    if (cloneType == "item") {
      cloneTarget = helper.e(".js-clone-block-target-item");
    };
    if (cloneType == "skill") {
      cloneTarget = helper.e(".js-clone-block-target-skills");
    };
    if (cloneType == "note-character") {
      cloneTarget = helper.e(".js-clone-block-target-note-character");
    };
    if (cloneType == "note-story") {
      cloneTarget = helper.e(".js-clone-block-target-note-story");
    };
    return cloneTarget;
  };

  function _get_cloneCount(cloneType, mixed) {
    var cloneCount;
    if (cloneType == "class") {
      cloneCount = helper.getObject(sheet.getCharacter(), "basics.classes").length;
    };
    if (cloneType == "attack-melee") {
      cloneCount = helper.getObject(sheet.getCharacter(), "offense.attack.melee").length;
    };
    if (cloneType == "attack-ranged") {
      cloneCount = helper.getObject(sheet.getCharacter(), "offense.attack.ranged").length;
    };
    if (cloneType == "consumable") {
      cloneCount = helper.getObject(sheet.getCharacter(), "equipment.consumable").length;
    };
    if (cloneType == "item") {
      cloneCount = helper.getObject(sheet.getCharacter(), "equipment.item").length;
    };
    if (cloneType == "skill") {
      cloneCount = helper.getObject(sheet.getCharacter(), "skills.custom").length;
    };
    if (cloneType == "note-character") {
      cloneCount = helper.getObject(sheet.getCharacter(), "notes.character").length;
    };
    if (cloneType == "note-story") {
      cloneCount = helper.getObject(sheet.getCharacter(), "notes.story").length;
    };
    if (cloneType == "note" || cloneType == "note-character" && mixed || cloneType == "note-story" && mixed) {
      cloneCount = helper.getObject(sheet.getCharacter(), "notes.story").length + helper.getObject(sheet.getCharacter(), "notes.character").length;
    };
    if (cloneType == "attack" || cloneType == "attack-melee" && mixed || cloneType == "attack-ranged" && mixed) {
      cloneCount = helper.getObject(sheet.getCharacter(), "offense.attack.melee").length + helper.getObject(sheet.getCharacter(), "offense.attack.ranged").length;
    };
    return cloneCount;
  };

  function _get_placeholderClone(cloneType) {
    var clonePlaceholder;
    if (cloneType == "class") {
      clonePlaceholder = helper.e(".js-placeholder-clone-class");
    };
    if (cloneType == "attack-melee") {
      clonePlaceholder = helper.e(".js-placeholder-clone-attack-melee");
    };
    if (cloneType == "attack-ranged") {
      clonePlaceholder = helper.e(".js-placeholder-clone-attack-ranged");
    };
    if (cloneType == "consumable") {
      clonePlaceholder = helper.e(".js-placeholder-clone-consumable");
    };
    if (cloneType == "item") {
      clonePlaceholder = helper.e(".js-placeholder-clone-item");
    };
    if (cloneType == "skill") {
      clonePlaceholder = helper.e(".js-placeholder-clone-skill");
    };
    if (cloneType == "note-character") {
      clonePlaceholder = helper.e(".js-placeholder-clone-note-character");
    };
    if (cloneType == "note-story") {
      clonePlaceholder = helper.e(".js-placeholder-clone-note-story");
    };
    return clonePlaceholder;
  };

  function _get_clonePrefix(cloneType) {
    var clonePrefix;
    if (cloneType == "class") {
      clonePrefix = helper.e(".js-clone-block-prefix-class");
    };
    if (cloneType == "attack-melee") {
      clonePrefix = helper.e(".js-clone-block-prefix-attack-melee");
    };
    if (cloneType == "attack-ranged") {
      clonePrefix = helper.e(".js-clone-block-prefix-attack-ranged");
    };
    if (cloneType == "consumable") {
      clonePrefix = helper.e(".js-clone-block-prefix-consumable");
    };
    if (cloneType == "item") {
      clonePrefix = helper.e(".js-clone-block-prefix-item");
    };
    if (cloneType == "skill") {
      clonePrefix = helper.e(".js-clone-block-prefix-skill");
    };
    if (cloneType == "note-character") {
      clonePrefix = helper.e(".js-clone-block-prefix-note-character");
    };
    if (cloneType == "note-story") {
      clonePrefix = helper.e(".js-clone-block-prefix-note-story");
    };
    return clonePrefix;
  };

  function _get_cloneSuffix(cloneType) {
    var cloneSuffix;
    if (cloneType == "class") {
      cloneSuffix = helper.e(".js-clone-block-suffix-class");
    };
    if (cloneType == "attack-melee") {
      cloneSuffix = helper.e(".js-clone-block-suffix-attack-melee");
    };
    if (cloneType == "attack-ranged") {
      cloneSuffix = helper.e(".js-clone-block-suffix-attack-ranged");
    };
    if (cloneType == "consumable") {
      cloneSuffix = helper.e(".js-clone-block-suffix-consumable");
    };
    if (cloneType == "item") {
      cloneSuffix = helper.e(".js-clone-block-suffix-item");
    };
    if (cloneType == "skill") {
      cloneSuffix = helper.e(".js-clone-block-suffix-skill");
    };
    if (cloneType == "note-character") {
      cloneSuffix = helper.e(".js-clone-block-suffix-note-character");
    };
    if (cloneType == "note-story") {
      cloneSuffix = helper.e(".js-clone-block-suffix-note-story");
    };
    return cloneSuffix;
  };

  function _get_maxCloneMessage(cloneType) {
    var message = "Max 200, do you need that many";
    if (cloneType == "class") {
      message = message + " Classes?";
    };
    if (cloneType == "attack-melee") {
      message = message + " Melee Attacks?";
    };
    if (cloneType == "attack-ranged") {
      message = message + " Ranged Attacks?";
    };
    if (cloneType == "consumable") {
      message = message + " Consumables?";
    };
    if (cloneType == "item") {
      message = message + " Items?";
    };
    if (cloneType == "skill") {
      message = message + " Skills?";
    };
    if (cloneType == "note-character") {
      message = message + " Character Notes?";
    };
    if (cloneType == "note-story") {
      message = message + " Story Notes?";
    };
    return message;
  };

  function _get_undoRemoveCloneMessage(cloneType) {
    var message = "removed.";
    if (cloneType == "class") {
      message = "Class " + message;
    };
    if (cloneType == "attack-melee") {
      message = "Melee attack " + message;
    };
    if (cloneType == "attack-ranged") {
      message = "Ranged attack " + message;
    };
    if (cloneType == "consumable") {
      message = "Consumable " + message;
    };
    if (cloneType == "item") {
      message = "Item " + message;
    };
    if (cloneType == "skill") {
      message = "Skill " + message;
    };
    if (cloneType == "note-character") {
      message = "Character note " + message;
    };
    if (cloneType == "note-story") {
      message = "Story note " + message;
    };
    return message;
  };

  function _get_newCloneObject(cloneType) {
    var object;
    if (cloneType == "class") {
      object = {
        classname: "",
        level: "",
        hp: "",
        fortitude: "",
        reflex: "",
        will: "",
        ranks: "",
        bab: ""
      };
    };
    if (cloneType == "attack-melee") {
      object = {
        weapon: "",
        attack: "",
        damage: "",
        critical: ""
      };
    };
    if (cloneType == "attack-ranged") {
      object = {
        weapon: "",
        attack: "",
        damage: "",
        critical: "",
        range: "",
        ammo: ""
      };
    };
    if (cloneType == "consumable") {
      object = {
        item: "",
        current: "",
        total: "",
        used: ""
      };
    };
    if (cloneType == "item") {
      object = {
        name: "",
        quantity: "",
        weight: ""
      };
    };
    if (cloneType == "skill") {
      object = {
        name: "",
        ranks: "",
        misc: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          class_skill: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      };
    };
    if (cloneType == "note-character") {
      object = {
        note: ""
      };
    };
    if (cloneType == "note-story") {
      object = {
        note: ""
      };
    };
    return object;
  };

  function _smoothScrollToClones(cloneType) {
    var cloneTarget = _get_cloneTarget(cloneType);
    var targetTop = cloneTarget.lastChild.getBoundingClientRect().top;
    var targetBottom = cloneTarget.lastChild.getBoundingClientRect().bottom;
    var windowHeight = window.innerHeight;
    var quickNavHeight;
    // if nav is on the left after 900px wide viewport
    if (document.documentElement.clientWidth >= 900) {
      quickNavHeight = 0;
    } else {
      quickNavHeight = parseInt(getComputedStyle(document.querySelector(".js-quick-nav")).height, 10);
    };
    if (body.dataset.displayMode == "false" || !body.dataset.displayMode) {
      if (targetTop > (windowHeight - (windowHeight / 10)) || targetBottom <= 0) {
        var offset = (windowHeight - (windowHeight / 2));
        var options = {
          speed: 300,
          offset: offset
        };
        smoothScroll.animateScroll(null, "#" + cloneTarget.lastChild.id, options);
      };
    };
  };

  function bind() {
    _bind_cloneControls();
  };

  function _bind_cloneControls() {
    var cloneBlockClass = _get_cloneBlock("class");
    var cloneBlockConsumable = _get_cloneBlock("consumable");
    var cloneBlockSkill = _get_cloneBlock("skill");
    var cloneBlockItem = _get_cloneBlock("item");
    var cloneBlockAttack = _get_cloneBlock("attack");
    var cloneBlockNote = _get_cloneBlock("note");

    var cloneAddClass = cloneBlockClass.querySelector(".js-clone-add-class");
    var cloneRemoveClass = cloneBlockClass.querySelector(".js-clone-remove");

    var cloneAddConsumable = cloneBlockConsumable.querySelector(".js-clone-add-consumable");
    var cloneRemoveConsumable = cloneBlockConsumable.querySelector(".js-clone-remove");

    var cloneAddItem = cloneBlockItem.querySelector(".js-clone-add-item");
    var cloneRemoveItem = cloneBlockItem.querySelector(".js-clone-remove");

    var cloneAddSkill = cloneBlockSkill.querySelector(".js-clone-add-skill");
    var cloneRemoveSkill = cloneBlockSkill.querySelector(".js-clone-remove");

    var cloneAddAttackMelee = cloneBlockAttack.querySelector(".js-clone-add-melee");
    var cloneAddAttackRanged = cloneBlockAttack.querySelector(".js-clone-add-ranged");
    var cloneRemoveAttack = cloneBlockAttack.querySelector(".js-clone-remove");

    var cloneAddCharacterNote = cloneBlockNote.querySelector(".js-clone-add-character-note");
    var cloneAddStoryNote = cloneBlockNote.querySelector(".js-clone-add-story-note");
    var cloneRemoveNote = cloneBlockNote.querySelector(".js-clone-remove");

    cloneAddClass.addEventListener("click", function() {
      _addNewClone("class");
      sheet.storeCharacters();
    }, false);

    cloneAddConsumable.addEventListener("click", function() {
      _addNewClone("consumable");
      sheet.storeCharacters();
    }, false);

    cloneAddItem.addEventListener("click", function() {
      _addNewClone("item");
      sheet.storeCharacters();
    }, false);

    cloneAddSkill.addEventListener("click", function() {
      _addNewClone("skill");
      sheet.storeCharacters();
    }, false);

    cloneAddAttackMelee.addEventListener("click", function() {
      _addNewClone("attack-melee");
      sheet.storeCharacters();
    }, false);

    cloneAddAttackRanged.addEventListener("click", function() {
      _addNewClone("attack-ranged");
      sheet.storeCharacters();
    }, false);

    cloneAddCharacterNote.addEventListener("click", function() {
      _addNewClone("note-character");
      sheet.storeCharacters();
    }, false);

    cloneAddStoryNote.addEventListener("click", function() {
      _addNewClone("note-story");
      sheet.storeCharacters();
    }, false);

    cloneRemoveClass.addEventListener("click", function() {
      _change_cloneState("class");
      _update_removeButtonTab("class");
    }, false);

    cloneRemoveAttack.addEventListener("click", function() {
      _change_cloneState("attack");
      _update_removeButtonTab("attack");
    }, false);

    cloneRemoveConsumable.addEventListener("click", function() {
      _change_cloneState("consumable");
      _update_removeButtonTab("consumable");
    }, false);

    cloneRemoveItem.addEventListener("click", function() {
      _change_cloneState("item");
      _update_removeButtonTab("item");
    }, false);

    cloneRemoveSkill.addEventListener("click", function() {
      _change_cloneState("skill");
      _update_removeButtonTab("skill");
    }, false);

    cloneRemoveNote.addEventListener("click", function() {
      _change_cloneState("note");
      _update_removeButtonTab("note");
    }, false);
  };

  function _bind_cloneRemoveButton(button, cloneType) {
    button.addEventListener("click", function() {
      _store_lastRemovedClone(this, cloneType);
      _remove_clone(this, cloneType);
      _update_removeButtonTab(cloneType);
      sheet.storeCharacters();
    }, false);
  };

  function _bind_clone(cloneType, newClone) {
    if (cloneType == "class") {
      _bind_inputBlock(newClone.querySelectorAll(".js-input-block"));
      _bind_classesInputBlock(newClone.querySelectorAll(".js-input-block"));
      _bind_classLevelInputBlock(newClone.querySelectorAll(".js-basics-class-level"));
      _bind_tip(newClone.querySelectorAll(".js-tip"));
    };
    if (cloneType == "consumable" || cloneType == "skill") {
      _bind_totalBlock(newClone.querySelector(".js-total-block"));
      _bind_inputBlockIncrement(newClone.querySelectorAll(".js-input-block-increment"));
    };
    if (cloneType == "consumable" || cloneType == "skill" || cloneType == "item" || cloneType == "attack-melee" || cloneType == "attack-ranged") {
      _bind_inputBlock(newClone.querySelectorAll(".js-input-block"));
    };
    if (cloneType == "note-character" || cloneType == "note-story") {
      _bind_textareaBlock(newClone.querySelectorAll(".js-textarea-block"));
    };
  };

  function _addNewClone(cloneType) {
    if (_get_cloneCount(cloneType) < 200) {
      _add_cloneObject(cloneType);
      _render_clone(cloneType);
      _update_clonePlaceholder(cloneType);
      _update_clonePrefix(cloneType);
      _update_cloneSuffix(cloneType);
      _smoothScrollToClones(cloneType);
    } else {
      _render_maxClonesSnack(cloneType);
    };
  };

  function _add_cloneObject(cloneType) {
    if (_get_cloneCount(cloneType) < 200) {
      _get_cloneObjects(cloneType).push(new _get_newCloneObject(cloneType));
    };
  };

  function _render_clone(cloneType) {
    var cloneTarget = _get_cloneTarget(cloneType);
    var cloneLength = _get_cloneCount(cloneType);
    var cloneIndex = cloneLength - 1;
    var cloneString = _get_cloneString(cloneType, cloneIndex);
    // make new clone node
    var newClone = document.createElement("div");
    // id needed for smooth scroll
    newClone.setAttribute("id", "clone-" + cloneType + "-" + cloneIndex);
    newClone.setAttribute("class", "m-clone js-clone");
    newClone.setAttribute("data-clone-count", cloneIndex);
    // add content
    newClone.innerHTML = cloneString;
    var newCloneFlash = document.createElement("span");
    newCloneFlash.setAttribute("class", "m-clone-flash m-clone-flash-" + cloneType.replace(/_+/g, "-"));
    newCloneFlash.addEventListener("animationend", function(event, elapsed) {
      this.remove();
    }.bind(newCloneFlash), false);
    var cloneBlockDelete = newClone.querySelector(".js-clone-block-delete");
    var cloneBlockContent = newClone.querySelector(".js-clone-block-content");
    helper.addClass(cloneBlockContent, "is-small");
    cloneBlockContent.appendChild(newCloneFlash);
    // append new clone
    cloneTarget.appendChild(newClone);
    getComputedStyle(cloneBlockContent).transform;
    helper.removeClass(cloneBlockContent, "is-small");
    // bind listeners
    _bind_clone(cloneType, newClone);
    _bind_cloneRemoveButton(cloneBlockDelete, cloneType);
  };

  function _render_all_clones(cloneType) {
    var cloneTarget = _get_cloneTarget(cloneType);
    var cloneLength = _get_cloneCount(cloneType);
    for (var i = 0; i < cloneLength; i++) {
      var cloneIndex = i;
      // make new clone node
      var cloneString = _get_cloneString(cloneType, cloneIndex);
      var newClone = document.createElement("div");
      // id needed for smooth scroll
      newClone.setAttribute("id", "clone-" + cloneType + "-" + cloneIndex);
      newClone.setAttribute("class", "m-clone js-clone");
      newClone.setAttribute("data-clone-count", cloneIndex);
      // add content
      newClone.innerHTML = cloneString;
      // append new clone
      cloneTarget.appendChild(newClone);
      // bind listeners
      _bind_clone(cloneType, newClone);
      _bind_cloneRemoveButton(newClone.querySelector(".js-clone-block-delete"), cloneType);
    };
  };

  function _render_maxClonesSnack(cloneType) {
    snack.render(_get_maxCloneMessage(cloneType));
  };

  function _update_cloneState(cloneType) {
    var cloneBlock = _get_cloneBlock(cloneType);
    var cloneTarget = _get_cloneTarget(cloneType);
    var cloneCount = _get_cloneCount(cloneType, true);
    var cloneControls = cloneBlock.querySelector(".js-clone-controls");
    var cloneRemoveButton = cloneControls.querySelector(".js-clone-remove");
    if (cloneCount == 0) {
      cloneBlock.dataset.deleteCloneState = "false";
      helper.removeClass(cloneBlock, "is-delete-state");
      helper.removeClass(cloneRemoveButton, "button-primary");
      helper.addClass(cloneRemoveButton, "button-secondary");
    };
  };

  function _update_all_clones(cloneType) {
    var target = _get_cloneTarget(cloneType);
    if (cloneType == "class") {
      var all_inputBlocks = target.querySelectorAll(".js-input-block");
      for (var i = 0; i < all_inputBlocks.length; i++) {
        inputBlock.render(all_inputBlocks[i]);
      };
      classes.render();
    };
    if (cloneType == "consumable" || cloneType == "item" || cloneType == "skill" || cloneType == "attack-melee" || cloneType == "attack-ranged") {
      var all_inputBlocks = target.querySelectorAll(".js-input-block");
      for (var i = 0; i < all_inputBlocks.length; i++) {
        inputBlock.render(all_inputBlocks[i]);
      };
    };
    if (cloneType == "note-story" || cloneType == "note-character") {
      var all_textareaBlock = target.querySelectorAll(".js-textarea-block");
      for (var i = 0; i < all_textareaBlock.length; i++) {
        textareaBlock.render(all_textareaBlock[i]);
      };
    };
  };

  function _remove_clone(button, cloneType) {
    var cloneIndex = parseInt(helper.getClosest(button, ".js-clone").dataset.cloneCount, 10);
    _remove_cloneObject(cloneType, cloneIndex);
    clear(cloneType);
    _render_all_clones(cloneType);
    _update_all_clones(cloneType);
    textBlock.render();
    totalBlock.render();
    _update_clonePlaceholder(cloneType);
    _update_clonePrefix(cloneType);
    _update_cloneSuffix(cloneType);
    _update_cloneState(cloneType);
    snack.render(_get_undoRemoveCloneMessage(cloneType), "Undo", _restore_lastRemovedClone, 8000);
  };

  function _restore_lastRemovedClone() {
    var undoData = JSON.parse(helper.read("lastRemovedClone"));
    _restore_cloneObject(undoData.cloneType, undoData.index, undoData.clone);
    clear(undoData.cloneType);
    _render_all_clones(undoData.cloneType);
    _update_all_clones(undoData.cloneType);
    textBlock.render();
    totalBlock.render();
    _update_clonePlaceholder(undoData.cloneType);
    _update_clonePrefix(undoData.cloneType);
    _update_cloneSuffix(undoData.cloneType);
    _update_cloneState(undoData.cloneType);
    _update_removeButtonTab(undoData.cloneType);
    _remove_lastRemovedClone();
    sheet.storeCharacters();
  };

  function _store_lastRemovedClone(button, cloneType) {
    var cloneIndex = parseInt(helper.getClosest(button, ".js-clone").dataset.cloneCount, 10);
    var removedCloneObject = {
      cloneType: cloneType,
      index: cloneIndex,
      clone: {}
    };
    removedCloneObject.clone = _get_cloneObjects(cloneType)[cloneIndex];
    helper.store("lastRemovedClone", JSON.stringify(removedCloneObject));
  };

  function _remove_lastRemovedClone() {
    helper.remove("lastRemovedClone");
  };

  function _remove_cloneObject(cloneType, index) {
    _get_cloneObjects(cloneType).splice(index, 1);
  };

  function _restore_cloneObject(cloneType, index, cloneObject) {
    _get_cloneObjects(cloneType).splice(index, 0, cloneObject);
  };

  function _bind_totalBlock(all_totalBlock) {
    totalBlock.bind(all_totalBlock);
  };

  function _bind_inputBlock(all_inputBlock) {
    for (var i = 0; i < all_inputBlock.length; i++) {
      inputBlock.bind(all_inputBlock[i]);
    };
  };

  function _bind_classesInputBlock(all_inputBlock) {
    for (var i = 0; i < all_inputBlock.length; i++) {
      classes.bind(all_inputBlock[i]);
    };
  };

  function _bind_classLevelInputBlock(all_inputBlock) {
    for (var i = 0; i < all_inputBlock.length; i++) {
      inputBlock.bind_classLevel(all_inputBlock[i]);
    };
  };

  function _bind_inputBlockIncrement(all_inputBlockIncrement) {
    for (var i = 0; i < all_inputBlockIncrement.length; i++) {
      inputBlock.bind_inputBlockIncrement(all_inputBlockIncrement[i]);
    };
  };

  function _bind_tip(all_tip) {
    for (var i = 0; i < all_tip.length; i++) {
      tip.bind(all_tip[i]);
    };
  };

  function _bind_textareaBlock(all_textareaBlock) {
    for (var i = 0; i < all_textareaBlock.length; i++) {
      textareaBlock.bind(all_textareaBlock[i]);
    };
  };

  function _change_cloneState(cloneType) {
    var cloneBlock = helper.e(".js-clone-block-" + cloneType);
    var cloneControls = cloneBlock.querySelector(".js-clone-controls");
    var cloneRemoveButton = cloneControls.querySelector(".js-clone-remove");
    var cloneTarget = _get_cloneTarget(cloneType);
    // change clone block state
    if (cloneBlock.dataset.deleteCloneState == "false" || !cloneBlock.dataset.deleteCloneState) {
      helper.addClass(cloneBlock, "is-delete-state");
      cloneBlock.dataset.deleteCloneState = "true";
      // change clone remove button
      // helper.toggleClass(cloneRemoveButton, "is-active");
      helper.addClass(cloneRemoveButton, "button-primary");
      helper.removeClass(cloneRemoveButton, "button-secondary");
    } else {
      helper.removeClass(cloneBlock, "is-delete-state");
      cloneBlock.dataset.deleteCloneState = "false";
      // change clone remove button
      // helper.removeClass(cloneRemoveButton, "is-active");
      helper.removeClass(cloneRemoveButton, "button-primary");
      helper.addClass(cloneRemoveButton, "button-secondary");
    };
    // if clone count is 0 restore all classes to normal
    if (_get_cloneCount(cloneType) == 0) {
      cloneBlock.dataset.deleteCloneState = "false";
      helper.removeClass(cloneBlock, "is-delete-state");
      // change clone remove button
      // helper.removeClass(cloneRemoveButton, "is-active");
      helper.removeClass(cloneRemoveButton, "button-primary");
      helper.addClass(cloneRemoveButton, "button-secondary");
    };
  };

  function _update_removeButtonTab(cloneType) {
    var cloneBlock = _get_cloneBlock(cloneType);
    var all_removeButtons = cloneBlock.querySelectorAll(".js-clone-block-delete");
    if (cloneBlock.dataset.deleteCloneState == "true") {
      for (var i = 0; i < all_removeButtons.length; i++) {
        all_removeButtons[i].setAttribute("tabindex", "1");
      };
    } else {
      for (var i = 0; i < all_removeButtons.length; i++) {
        all_removeButtons[i].setAttribute("tabindex", "-1");
      };
    };
  };

  function _update_clonePlaceholder(cloneType) {
    var clonePlaceholder = _get_placeholderClone(cloneType);
    if (_get_cloneCount(cloneType) == 0) {
      helper.removeClass(clonePlaceholder, "is-hidden");
    } else {
      helper.addClass(clonePlaceholder, "is-hidden");
    };
  };

  function _update_clonePrefix(cloneType) {
    var clonePrefix = _get_clonePrefix(cloneType);
    if (clonePrefix) {
      if (_get_cloneCount(cloneType) <= 0) {
        helper.addClass(clonePrefix, "is-hidden");
      } else {
        helper.removeClass(clonePrefix, "is-hidden");
      };
    };
  };

  function _update_cloneSuffix(cloneType) {
    var cloneSuffix = _get_cloneSuffix(cloneType);
    if (cloneSuffix) {
      if (_get_cloneCount(cloneType) <= 0) {
        helper.addClass(cloneSuffix, "is-hidden");
      } else {
        helper.removeClass(cloneSuffix, "is-hidden");
      };
    };
  };

  function clear(cloneType) {
    if (cloneType) {
      _clear_cloneTarget(cloneType);
    } else {
      _clear_cloneTarget("class");
      _clear_cloneTarget("attack-melee");
      _clear_cloneTarget("attack-ranged");
      _clear_cloneTarget("consumable");
      _clear_cloneTarget("item");
      _clear_cloneTarget("skill");
      _clear_cloneTarget("note-character");
      _clear_cloneTarget("note-story");
    };
  };

  function _clear_cloneTarget(cloneType) {
    var cloneTarget = _get_cloneTarget(cloneType);
    while (cloneTarget.lastChild) {
      cloneTarget.removeChild(cloneTarget.lastChild);
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
  };

  function _bind_fab() {
    var fabButton = helper.e(".js-fab-button");
    fabButton.addEventListener("click", function() {
      totalBlock.render();
      clear();
      render();
      toggle();
      themeColor.update();
    }, false);
  };

  function update() {
    _update_displayState();
    _update_displayPlaceholder();
  };

  function _update_displayState() {
    var quickNav = helper.e(".js-quick-nav");
    var fab = helper.e(".js-fab");
    var fabButton = helper.e(".js-fab-button");
    var fabIcon = helper.e(".js-fab-icon");
    var all_section = helper.eA(".js-section");
    var anySectionDisplay = false;
    var allSectionDisplay = 0;
    var _displayOn = function() {
      helper.addClass(fabIcon, "icon-edit");
      helper.removeClass(fabIcon, "icon-reader-mode");
      helper.removeClass(fabButton, "button-primary");
      helper.addClass(fabButton, "button-secondary");
      helper.addClass(quickNav, "is-display-mode");
    };
    var _displayOff = function() {
      helper.removeClass(fabIcon, "icon-edit");
      helper.addClass(fabIcon, "icon-reader-mode");
      helper.addClass(fabButton, "button-primary");
      helper.removeClass(fabButton, "button-secondary");
      helper.removeClass(quickNav, "is-display-mode");
    };
    for (var i = 0; i < all_section.length; i++) {
      if (all_section[i].dataset.displayMode == "true") {
        anySectionDisplay = true;
        allSectionDisplay++;
      };
    };
    if (anySectionDisplay) {
      if (allSectionDisplay == all_section.length) {
        fab.dataset.displayMode = true;
        fab.dataset.displayModeAll = true;
        _displayOn();
      } else {
        fab.dataset.displayMode = true;
        fab.dataset.displayModeAll = false;
        _displayOff();
      };
    } else {
      fab.dataset.displayMode = false;
      fab.dataset.displayModeAll = false;
      _displayOff();
    };
  };

  function _toggle_section(element, forceToggle) {
    var icon = element.querySelector(".js-card-toggle-icon");
    var section = helper.getClosest(element, ".js-section");
    var minimise = (section.dataset.minimise == "true");
    var edit = section.querySelector(".js-edit");
    var cardTabs = section.querySelector(".js-card-tabs");
    var all_display = section.querySelectorAll(".js-display");

    var _displayOn = function() {
      section.dataset.displayMode = "true";
      helper.addClass(section, "is-display-mode");
      helper.addClass(edit, "is-hidden");
      if (cardTabs && !minimise) {
        helper.addClass(cardTabs, "is-hidden");
      };
      for (var i = 0; i < all_display.length; i++) {
        helper.removeClass(all_display[i], "is-hidden");
      };
      helper.addClass(icon, "icon-edit");
      helper.removeClass(icon, "icon-reader-mode");
    };

    var _displayOff = function() {
      section.dataset.displayMode = "false";
      helper.removeClass(section, "is-display-mode");
      helper.removeClass(edit, "is-hidden");
      if (cardTabs && !minimise) {
        helper.removeClass(cardTabs, "is-hidden");
      };
      for (var i = 0; i < all_display.length; i++) {
        helper.addClass(all_display[i], "is-hidden");
      };
      helper.removeClass(icon, "icon-edit");
      helper.addClass(icon, "icon-reader-mode");
    };

    if (forceToggle == true) {
      _displayOn();
    } else if (forceToggle == false) {
      _displayOff();
    } else {
      if (section.dataset.displayMode == "true") {
        _displayOff();
      } else if (section.dataset.displayMode == "false" || !section.dataset.displayMode) {
        _displayOn();
      };
    };

  };

  function _toggle_all_section() {
    var fab = helper.e(".js-fab");
    var all_section = helper.eA(".js-section");
    if (fab.dataset.displayMode == "true") {
      fab.dataset.displayMode = "false";
      for (var i = 0; i < all_section.length; i++) {
        _toggle_section(all_section[i], false);
      };
    } else if (fab.dataset.displayMode == "false" || !fab.dataset.displayMode) {
      fab.dataset.displayMode = "true";
      for (var i = 0; i < all_section.length; i++) {
        _toggle_section(all_section[i], true);
      };
    };
    update();
  };

  function toggle(section, boolean) {
    if (section) {
      _toggle_section(section, boolean);
    } else {
      _toggle_all_section();
    };
  };

  function clear(section) {
    var _removeAllChildren = function(parent) {
      while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
      };
    };
    if (section) {
      var all_target = section.querySelectorAll(".js-display-block-target");
    } else {
      var all_target = helper.eA(".js-display-block-target");
    };
    for (var i = 0; i < all_target.length; i++) {
      var displayBlock = helper.getClosest(all_target[i], ".js-display-block");
      displayBlock.dataset.displayContent = false;
      _removeAllChildren(all_target[i]);
    };
  };

  function _get_all_spell(all_displayPath) {
    var all_node = [];
    for (var i = 0; i < all_displayPath.length; i++) {
      var bookPath = all_displayPath[i].split(".");
      var all_spells = sheet.getCharacter()[bookPath[0]][bookPath[1]][bookPath[2]]["level_" + bookPath[2]];
      if (all_spells.length == 0) {
        all_node.push(false);
      } else {
        for (var j = 0; j < all_spells.length; j++) {
          var spell = all_spells[j];
          all_node.push(_get_spell(spell, bookPath[2], j));
        };
      };
    };
    return all_node;
  };

  function _get_spell(spell, level, index) {
    var displayListItem = document.createElement("li");
    displayListItem.setAttribute("class", "m-display-list-item m-display-list-item-spell");
    var displayListItemPrefix = document.createElement("span");
    displayListItemPrefix.setAttribute("class", "m-display-list-item-spell-name");
    var spellName = document.createElement("span");
    spellName.textContent = spell.name;
    var displayListItemValue = document.createElement("span");
    displayListItemValue.setAttribute("class", "m-display-list-item-spell-count");
    displayListItemPrefix.appendChild(spellName);
    displayListItem.appendChild(displayListItemPrefix);
    displayListItem.appendChild(displayListItemValue);
    displayListItem.setAttribute("data-spell-level", level);
    displayListItem.setAttribute("data-spell-count", index);
    // prepared
    if (spell.prepared > 0) {
      // var marks = document.createElement("span");
      for (var j = 0; j < spell.prepared; j++) {
        var preparedIcon = document.createElement("span");
        preparedIcon.setAttribute("class", "icon-radio-button-checked");
        displayListItemValue.insertBefore(preparedIcon, displayListItemValue.firstChild);
      };
    };
    // cast
    if (spell.cast > 0) {
      var all_check = displayListItemValue.querySelectorAll(".icon-radio-button-checked");
      for (var j = 0; j < spell.cast; j++) {
        if (all_check[j]) {
          helper.toggleClass(all_check[j], "icon-radio-button-checked");
          helper.toggleClass(all_check[j], "icon-radio-button-unchecked");
        };
      };
    };
    // active
    if (spell.active) {
      var spellActive = document.createElement("span");
      spellActive.setAttribute("class", "m-display-list-item-spell-active");
      var activeIcon = document.createElement("span");
      activeIcon.setAttribute("class", "icon-play-arrow");
      spellActive.appendChild(activeIcon);
      spellName.insertBefore(spellActive, spellName.firstChild);
    };
    displayListItem.addEventListener("click", function() {
      spells.update(helper.e(".js-spell-book-known-level-" + level).querySelectorAll(".js-spell-col")[index].querySelector(".js-spell"), true);
    }, false);
    return displayListItem;
  };

  function _get_all_skill(all_displayPath, displayPrefix) {
    var all_node = [];
    for (var i = 0; i < all_displayPath.length; i++) {
      var path = all_displayPath[i];
      var prefix = displayPrefix[i];
      all_node.push(_get_skill(path, prefix));
    };
    return all_node;
  };

  function _get_skill(path, prefix) {
    var object = helper.getObject(sheet.getCharacter(), path);
    var displayListItem;
    if (typeof object != "undefined" && object != "") {

      if (object.ranks != "undefined" && object.ranks != "") {
        displayListItem = document.createElement("li");
        displayListItem.setAttribute("class", "m-display-list-item");
        var value = document.createElement("span");
        value.setAttribute("class", "m-display-list-item-value");
        value.textContent = "+" + object.current;
        if (prefix || object["name"] || object["variant_name"]) {
          var displayListItemPrefix = document.createElement("span");
          displayListItemPrefix.setAttribute("class", "m-display-list-item-prefix");
          if (object["name"]) {
            displayListItemPrefix.textContent = object["name"] + " ";
          } else if (object["variant_name"]) {
            displayListItemPrefix.textContent = object["variant_name"] + " ";
          } else {
            displayListItemPrefix.textContent = prefix;
          };
          displayListItem.appendChild(displayListItemPrefix);
        };
        displayListItem.appendChild(value);
      } else {
        displayListItem = false;
      };

    };
    return displayListItem;
  };

  function _get_all_clone(all_displayPath) {
    var all_node = [];

    for (var i = 0; i < all_displayPath.length; i++) {
      var all_clones = helper.getObject(sheet.getCharacter(), all_displayPath[i]);
      if (all_clones.length == 0) {
        all_node.push(false);
      } else {
        for (var j = 0; j < all_clones.length; j++) {
          var cloneType;
          if (all_displayPath[i] == "basics.classes") {
            cloneType = "class";
          };
          if (all_displayPath[i] == "equipment.consumable") {
            cloneType = "consumable";
          };
          if (all_displayPath[i] == "equipment.item") {
            cloneType = "item";
          };
          if (all_displayPath[i] == "skills.custom") {
            cloneType = "skill";
          };
          if (all_displayPath[i] == "offense.attack.melee") {
            cloneType = "attack-melee";
          };
          if (all_displayPath[i] == "offense.attack.ranged") {
            cloneType = "attack-ranged";
          };
          if (all_displayPath[i] == "notes.character") {
            cloneType = "note-character";
          };
          if (all_displayPath[i] == "notes.story") {
            cloneType = "note-story";
          };
          all_node.push(_get_clone(all_clones[j], cloneType));
        };
      };
    };
    return all_node;
  };

  function _get_clone(object, cloneType) {
    var _get_cloneItem = function(object, cloneType) {
      var displayListItem;

      if (cloneType == "class") {
        displayListItem = document.createElement("span");
        displayListItem.setAttribute("class", "m-display-item-text-snippet");
        for (var i in object) {
          if (i == "classname") {
            var data = object[i];
            if (typeof data != "undefined" && data != "") {
              var displayListItemPrefix = document.createElement("span");
              displayListItemPrefix.setAttribute("class", "m-display-item-text-snippet-prefix");
              displayListItemPrefix.textContent = data;
              displayListItem.appendChild(displayListItemPrefix);
            };
          } else if (i == "level") {
            var data = object[i];
            if (typeof data != "undefined" && data != "" || data == 0) {
              var displayListItemValue = document.createElement("span");
              displayListItemValue.setAttribute("class", "m-display-item-text-snippet-value");
              displayListItemValue.textContent = data;
              displayListItem.appendChild(displayListItemValue);
            };
          };
        };
      };

      if (cloneType == "consumable") {
        displayListItem = document.createElement("li");
        displayListItem.setAttribute("class", "m-display-list-item");
        for (var i in object) {
          if (i == "item") {
            var data = object[i];
            if (typeof data != "undefined" && data != "") {
              var displayListItemPrefix = document.createElement("span");
              displayListItemPrefix.setAttribute("class", "m-display-list-item-prefix");
              displayListItemPrefix.textContent = data;
              displayListItem.appendChild(displayListItemPrefix);
            };
          } else if (i == "current") {
            var data = object[i];
            if (typeof data != "undefined" && data != "" || data == 0) {
              var displayListItemValue = document.createElement("span");
              displayListItemValue.setAttribute("class", "m-display-list-item-value");
              if (typeof object.total != "undefined" && object.total != "") {
                data = data + "/" + object.total;
              };
              displayListItemValue.textContent = data;
              displayListItem.appendChild(displayListItemValue);
            };
          };
        };
        var percentage = parseFloat(((object.total - object.used) / object.total) * 100).toFixed(2);
        if (percentage < 0) {
          percentage = 0;
        };
        var percentageBar = document.createElement("span");
        percentageBar.setAttribute("class", "m-display-list-item-percentage");
        percentageBar.setAttribute("style", "width: " + percentage + "%;");
        displayListItem.appendChild(percentageBar);
        // console.log(object.item, object.total, object.used, percentage);
      };

      if (cloneType == "item") {
        displayListItem = document.createElement("li");
        displayListItem.setAttribute("class", "m-display-list-item");
        for (var i in object) {
          if (i == "name") {
            var data = object[i];
            if (typeof data != "undefined" && data != "") {
              var displayListItemPrefix = document.createElement("span");
              displayListItemPrefix.setAttribute("class", "m-display-list-item-prefix");
              displayListItemPrefix.textContent = data;
              displayListItem.appendChild(displayListItemPrefix);
            };
          } else if (i == "quantity") {
            var data = object[i];
            if (typeof data != "undefined" && data != "" || data == 0) {
              var displayListItemValue = document.createElement("span");
              displayListItemValue.setAttribute("class", "m-display-list-item-value");
              displayListItemValue.textContent = data;
              displayListItem.appendChild(displayListItemValue);
            };
          };
        };
      };

      if (cloneType == "skill") {
        if (object.ranks != "undefined" && object.ranks != "") {
          displayListItem = document.createElement("li");
          displayListItem.setAttribute("class", "m-display-list-item");
          var displayListItemValue = document.createElement("span");
          displayListItemValue.setAttribute("class", "m-display-list-item-value");
          displayListItemValue.textContent = "+" + object.current;
          if (object["name"]) {
            var displayListItemPrefix = document.createElement("span");
            displayListItemPrefix.setAttribute("class", "m-display-list-item-prefix");
            displayListItemPrefix.textContent = object["name"];
          } else {
            displayListItemPrefix.textContent = "Custom Skill";
          };
          displayListItem.appendChild(displayListItemPrefix);
          displayListItem.appendChild(displayListItemValue);
        } else {
          displayListItem = false;
        };
      };

      if (cloneType == "attack-melee" || cloneType == "attack-ranged") {
        displayListItem = document.createElement("li");
        displayListItem.setAttribute("class", "m-display-list-item-" + cloneType);
        for (var i in object) {
          if (i == "weapon" || i == "damage" || i == "critical" || i == "range" || i == "ammo") {
            var data = object[i];
            if (typeof data != "undefined" && data != "") {
              var displayListItemPrefix = document.createElement("span");
              displayListItemPrefix.setAttribute("class", "m-display-list-item-" + cloneType + "-" + i);
              displayListItemPrefix.textContent = data;
              displayListItem.appendChild(displayListItemPrefix);
            };
          } else if (i == "attack") {
            var data = object[i];
            if (typeof data != "undefined" && data != "") {
              var displayListItemValue = document.createElement("h2");
              displayListItemValue.setAttribute("class", "m-display-list-item-" + cloneType + "-" + i);
              displayListItemValue.textContent = data;
              displayListItem.appendChild(displayListItemValue);
            };
          };
        };
      };

      if (cloneType == "note-character" || cloneType == "note-story") {
        displayListItem = document.createElement("li");
        displayListItem.setAttribute("class", "m-display-list-item");
        for (var i in object) {
          var data = object[i];
          if (typeof data != "undefined" && data != "") {
            displayListItem.innerHTML = data;
          };
        };
      };

      return displayListItem;
    };

    for (var i in object) {
      var testForValues = false;
      for (var j in object[i]) {
        if (typeof object[i][j] != "undefined" && object[i][j] != "") {
          testForValues = true;
        };
      };
      if (testForValues) {
        return _get_cloneItem(object, cloneType);
      } else {
        return false;
      };
    };

  };

  function _get_all_list(all_displayPath, all_displayPrefix, all_displaySuffix, displayValueType) {
    var all_node = [];
    for (var i = 0; i < all_displayPath.length; i++) {
      var path = all_displayPath[i];
      var prefix = false;
      var suffix = false;
      var valueType = false;
      if (all_displayPrefix[i]) {
        prefix = all_displayPrefix[i];
      };
      if (all_displaySuffix[i]) {
        suffix = all_displaySuffix[i];
      };
      if (displayValueType[i]) {
        valueType = displayValueType[i];
      };
      all_node.push(_get_list(path, prefix, suffix, valueType));
    };
    return all_node;
  };

  function _get_list(path, prefix, suffix, valueType) {
    var data = helper.getObject(sheet.getCharacter(), path);
    var displayListItem;
    if (typeof data != "undefined" && data != "") {
      if (valueType == "bonus" && data > 0) {
        data = "+" + data;
      };
      displayListItem = document.createElement("li");
      displayListItem.setAttribute("class", "m-display-list-item");
      var displayListItemvalue = document.createElement("span");
      displayListItemvalue.setAttribute("class", "m-display-list-item-value");
      displayListItemvalue.textContent = data;
      if (prefix) {
        var displayListItemPrefix = document.createElement("span");
        displayListItemPrefix.setAttribute("class", "m-display-list-item-prefix");
        displayListItemPrefix.textContent = prefix;
        displayListItem.appendChild(displayListItemPrefix);
      };
      displayListItem.appendChild(displayListItemvalue);
      if (suffix) {
        var displayListItemSuffix = document.createElement("span");
        displayListItemSuffix.setAttribute("class", "m-display-list-item-suffix");
        displayListItemSuffix.textContent = prefix;
        displayListItem.appendChild(displayListItemSuffix);
      };
    } else {
      displayListItem = false;
    };
    return displayListItem;
  };

  function _get_all_modifier(all_displayPath, displayValueType) {
    var all_node = [];
    for (var i = 0; i < all_displayPath.length; i++) {
      var path = all_displayPath[i];
      all_node.push(_get_modifier(path, displayValueType));
    };
    return all_node;
  };

  function _get_modifier(path, displayValueType) {
    var displayItem;
    var data;
    var modifierPath = path.split(".");
    if (sheet.getCharacter()[modifierPath[0]][modifierPath[1]][modifierPath[2]].temp_modifier) {
      data = sheet.getCharacter()[modifierPath[0]][modifierPath[1]][modifierPath[2]].temp_modifier;
    } else {
      data = helper.getObject(sheet.getCharacter(), path);
    };
    if (typeof data != "undefined" && data != "") {
      displayItem = document.createElement("span");
      if (displayValueType) {
        if (displayValueType == "bonus" && data > 0) {
          data = "+" + data;
        };
      };
      displayItem.textContent = data;
    } else if (typeof data == "number" && data == 0) {
      displayItem = document.createElement("span");
      displayItem.textContent = data;
    } else {
      displayItem = false;
    };
    return displayItem;
  };

  function _get_all_stat(all_displayPath) {
    var all_node = [];
    for (var i = 0; i < all_displayPath.length; i++) {
      var path = all_displayPath[i];
      all_node.push(_get_stat(path));
    };
    return all_node;
  };

  function _get_stat(path) {
    var displayItem;
    var data;
    var statPath = path.split(".");
    if (sheet.getCharacter()[statPath[0]][statPath[1]][statPath[2]].temp_score) {
      data = sheet.getCharacter()[statPath[0]][statPath[1]][statPath[2]].temp_score
    } else {
      data = helper.getObject(sheet.getCharacter(), path);
    };
    if (typeof data != "undefined" && data != "") {
      displayItem = document.createElement("span");
      displayItem.textContent = data;
    } else if (typeof data == "number" && data == 0) {
      var displayItem = document.createElement("span");
      displayItem.textContent = data;
    } else {
      displayItem = false;
    };
    return displayItem;
  };

  function _get_all_textBlock(all_displayPath) {
    var all_node = [];
    for (var i = 0; i < all_displayPath.length; i++) {
      var path = all_displayPath[i];
      all_node.push(_get_textBlock(path));
    };
    return all_node;
  };

  function _get_textBlock(path, target) {
    var data = helper.getObject(sheet.getCharacter(), path);
    var displayItem;
    if (typeof data != "undefined" && data != "") {
      displayItem = document.createElement("span");
      displayItem.setAttribute("class", "m-display-item-text-block");
      var value = document.createElement("span");
      value.setAttribute("class", "m-display-item-text-block-value");
      value.innerHTML = data;
      displayItem.appendChild(value);
    } else {
      displayItem = false;
    };
    return displayItem;
  };

  function _get_all_textSnippet(all_displayPath, all_displayPrefix, all_displaySuffix, displayValueType) {
    var all_node = [];
    for (var i = 0; i < all_displayPath.length; i++) {
      var path = all_displayPath[i];
      var prefix = false;
      var suffix = false;
      var valueType = false;
      if (all_displayPrefix[i]) {
        prefix = all_displayPrefix[i];
      };
      if (all_displaySuffix[i]) {
        suffix = all_displaySuffix[i];
      };
      if (displayValueType[i]) {
        valueType = displayValueType[i];
      };
      all_node.push(_get_textSnippet(path, prefix, suffix, valueType));
    };
    // console.log("all_node", all_node);
    return all_node;
  };

  function _get_textSnippet(path, prefix, suffix, valueType) {
    var data = helper.getObject(sheet.getCharacter(), path);
    var displayItem;
    if (typeof data != "undefined" && data != "") {
      displayItem = document.createElement("span");
      displayItem.setAttribute("class", "m-display-item-text-snippet");
      var value = document.createElement("span");
      value.setAttribute("class", "m-display-item-text-snippet-value");
      if (valueType == "bonus" && data > 0) {
        data = "+" + data;
      } else if (valueType == "currency" && data > 0) {
        data = parseFloat(data).toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        });
      } else if (valueType == "number" && data > 0) {
        data = parseFloat(data).toLocaleString(undefined, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      };
      value.innerHTML = data;
      if (prefix) {
        var spanPrefix = document.createElement("span");
        spanPrefix.setAttribute("class", "m-display-item-text-snippet-prefix");
        spanPrefix.textContent = prefix;
        displayItem.appendChild(spanPrefix);
      };
      displayItem.appendChild(value);
      if (suffix) {
        var spanSuffix = document.createElement("span");
        spanSuffix.setAttribute("class", "m-display-item-text-snippet-suffix");
        spanSuffix.textContent = suffix;
        displayItem.appendChild(spanSuffix);
      };
    } else {
      displayItem = false;
    };
    // console.log(path, displayItem);
    return displayItem;
  };

  function _render_displayBlock(section) {
    // find all display blocks
    var all_displayBlock;
    if (section) {
      all_displayBlock = section.querySelectorAll(".js-display-block");
    } else {
      all_displayBlock = helper.eA(".js-display-block");
    };
    // loop all display blocks
    for (var i = 0; i < all_displayBlock.length; i++) {
      // find all targets in this display blocks
      var all_displayBlockTarget = all_displayBlock[i].querySelectorAll(".js-display-block-target");
      // start a "no data found at path" count
      var dataNotFoundAtPath = 0;
      var totalNodeLength = 0;
      var all_node = [];

      // loop over each target in this display blocks
      for (var j = 0; j < all_displayBlockTarget.length; j++) {

        // get all data from display blocks target
        var target = all_displayBlockTarget[j];
        // var display = helper.getClosest(all_displayBlockTarget[j], ".js-display");
        var displayType = all_displayBlockTarget[j].dataset.displayType;
        var all_displayPath;
        var all_displayPrefix = false;
        var all_displaySuffix = false;
        var displayValueType = false;

        if (all_displayBlockTarget[j].dataset.displayPath) {
          all_displayPath = all_displayBlockTarget[j].dataset.displayPath.split(",");
        };
        if (all_displayBlockTarget[j].dataset.displayPrefix) {
          all_displayPrefix = all_displayBlockTarget[j].dataset.displayPrefix.split(",");
        };
        if (all_displayBlockTarget[j].dataset.displaySuffix) {
          all_displaySuffix = all_displayBlockTarget[j].dataset.displaySuffix.split(",");
        };
        if (all_displayBlockTarget[j].dataset.displayValueType) {
          displayValueType = all_displayBlockTarget[j].dataset.displayValueType.split(",");
        };

        // get an array of nodes using the array of paths
        if (displayType == "stat") {
          all_node = _get_all_stat(all_displayPath);
        } else if (displayType == "modifier") {
          all_node = _get_all_modifier(all_displayPath, displayValueType);
        } else if (displayType == "text-snippet") {
          all_node = _get_all_textSnippet(all_displayPath, all_displayPrefix, all_displaySuffix, displayValueType);
        } else if (displayType == "text-block") {
          all_node = _get_all_textBlock(all_displayPath);
        } else if (displayType == "list") {
          all_node = _get_all_list(all_displayPath, all_displayPrefix, all_displaySuffix, displayValueType);
        } else if (displayType == "clone") {
          all_node = _get_all_clone(all_displayPath);
        } else if (displayType == "skill") {
          all_node = _get_all_skill(all_displayPath, all_displayPrefix);
        } else if (displayType == "spell") {
          all_node = _get_all_spell(all_displayPath);
        };

        // function for later use to check the element from node array for false or data
        var _appendToTarget = function(element) {
          if (element != false) {
            // append to target
            target.appendChild(element);
          } else {
            // or increment the "no data found at path" count
            dataNotFoundAtPath++;
          };
        };

        // loop over each node in array and append to target
        all_node.forEach(_appendToTarget);
        totalNodeLength = totalNodeLength + all_node.length;
      };
      // if the "no data found at path" count == total "path count" this display blocks target is empty so add a data vale to reflect this
      if (totalNodeLength > dataNotFoundAtPath) {
        all_displayBlock[i].dataset.displayContent = true;
      } else {
        all_displayBlock[i].dataset.displayContent = false;
      };

    };

  };

  function _update_displayPlaceholder(section) {
    var all_display
    if (section) {
      all_display = [section];
    } else {
      all_display = helper.eA(".js-display");
    };
    for (var i = 0; i < all_display.length; i++) {
      var placeholderDisplay = all_display[i].querySelector(".js-placeholder-display");
      var all_displayBlock = all_display[i].querySelectorAll(".js-display-block");
      var contentFound = false;
      var lastActiveDisplayBlock;

      for (var j = 0; j < all_displayBlock.length; j++) {
        if (all_displayBlock[j].dataset.displayContent == "true") {
          lastActiveDisplayBlock = all_displayBlock[j];
          contentFound = true;
          helper.removeClass(all_displayBlock[j], "is-hidden");
        } else {
          helper.addClass(all_displayBlock[j], "is-hidden");
        };
      };
      for (var j = 0; j < all_displayBlock.length; j++) {
        helper.removeClass(all_displayBlock[j], "m-display-block-last");
      };
      if (lastActiveDisplayBlock) {
        helper.addClass(lastActiveDisplayBlock, "m-display-block-last");
      };
      if (contentFound) {
        helper.addClass(placeholderDisplay, "is-hidden")
      } else {
        helper.removeClass(placeholderDisplay, "is-hidden")
      };
    };
  };

  function render(section) {
    _render_displayBlock(section);
    _update_displayPlaceholder(section);
  };

  function _get_displayState(anyOrSingle) {
    var fab = helper.e(".js-fab");
    if (anyOrSingle == "all") {
      return (fab.dataset.displayModeAll == "true");
    } else if (anyOrSingle == "any" || !anyOrSingle) {
      return (fab.dataset.displayMode == "true");
    };
  };

  // exposed methods
  return {
    toggle: toggle,
    bind: bind,
    update: update,
    render: render,
    clear: clear,
    state: _get_displayState
  };

})();

var encumbrance = (function() {

  var changeEncumbranceTimer = null;

  function bind(input) {
    var statsStrScore = helper.e("#statistics-stats-str-score");
    var statsStrTempScore = helper.e("#statistics-stats-str-temp-score");
    var equipmentEncumbranceEncumbranceStr = helper.e("#equipment-encumbrance-encumbrance-str");
    statsStrScore.addEventListener("input", function() {
      clearTimeout(changeEncumbranceTimer);
      changeEncumbranceTimer = setTimeout(update, 350);
    }, false);
    statsStrTempScore.addEventListener("input", function() {
      clearTimeout(changeEncumbranceTimer);
      changeEncumbranceTimer = setTimeout(update, 350);
    }, false);
    equipmentEncumbranceEncumbranceStr.addEventListener("input", function() {
      clearTimeout(changeEncumbranceTimer);
      changeEncumbranceTimer = setTimeout(update, 350);
    }, false);
  };

  function update() {
    render();
    totalBlock.render();
    textBlock.render();
    if (display.state()) {
      display.clear();
      display.render();
    };
  };

  function render() {
    var object = _create_encumbranceObject(stats.getScore("str"));
    helper.setObject(sheet.getCharacter(), "equipment.encumbrance.carry_move", object);
    sheet.storeCharacters();
  };

  function _create_encumbranceObject(value) {
    var encumbranceStr = sheet.getCharacter().equipment.encumbrance.encumbrance_str;
    if (sheet.getCharacter().equipment.encumbrance.encumbrance_str != "" && !isNaN(sheet.getCharacter().equipment.encumbrance.encumbrance_str)) {
      value = sheet.getCharacter().equipment.encumbrance.encumbrance_str;
    };
    if (!isNaN(value)) {
      var str = parseInt(value, 10);
    } else {
      str = value;
    };
    var allEncumbrance = {};
    if (str > 0 && str <= 200) {
      var maxLoad;
      var base = [25, 28.75, 32.5, 37.5, 43.75, 50, 57.5, 65, 75, 87.5];
      if (parseInt(str, 10) <= 10) {
        maxLoad = 10 * str;
      } else {
        var index = (1 + str - 10 * parseInt(str / 10)) - 1;
        maxLoad = base[index] * Math.pow(4, parseInt(str / 10));
      };
      // console.log("maxLoad", maxLoad);
      var lightUpper = parseInt(maxLoad / 3).toLocaleString();
      var mediumUpper = parseInt((2 * maxLoad) / 3).toLocaleString();
      var mediumLower = (parseInt(maxLoad / 3) + 1).toLocaleString();
      var heavyUpper = maxLoad.toLocaleString();
      var heavyLower = (parseInt((2 * maxLoad) / 3) + 1).toLocaleString();
      var lift = parseInt(2 * maxLoad).toLocaleString();
      var drag = parseInt(5 * maxLoad).toLocaleString();
      allEncumbrance.light = lightUpper + " lbs. or less";
      allEncumbrance.medium = mediumLower + " - " + mediumUpper + " lbs.";
      allEncumbrance.heavy = heavyLower + " - " + heavyUpper + " lbs.";
      allEncumbrance.lift = lift + " lbs.";
      allEncumbrance.drag = drag + " lbs.";
    } else if (isNaN(str) || str <= 0) {
      allEncumbrance.light = 0;
      allEncumbrance.medium = 0;
      allEncumbrance.heavy = 0;
      allEncumbrance.lift = 0;
      allEncumbrance.drag = 0;
    } else {
      allEncumbrance.light = "STR exceeds maximum calculation";
      allEncumbrance.medium = "STR exceeds maximum calculation";
      allEncumbrance.heavy = "STR exceeds maximum calculation";
      allEncumbrance.lift = "STR exceeds maximum calculation";
      allEncumbrance.drag = "STR exceeds maximum calculation";
    };
    return allEncumbrance;
  };

  // exposed methods
  return {
    bind: bind,
    render: render
  };

})();

var events = (function() {

  function bind() {
    var eventXp = helper.e(".js-evets-xp");
    var eventWealth = helper.e(".js-evets-wealth");
    eventXp.addEventListener("click", function() {
      event.stopPropagation();
      event.preventDefault();
      render("xp");
    }, false)
    eventWealth.addEventListener("click", function() {
      event.stopPropagation();
      event.preventDefault();
      render("wealth");
    }, false)
  };

  function _create_event(type, eventObject) {
    var newEvent = {
      type: type,
      event: eventObject,
      timestamp: helper.getDateTime()
    }
    return newEvent;
  };

  function store(type, eventObject) {
    sheet.getCharacter().events.unshift(_create_event(type, eventObject));
    sheet.storeCharacters();
  };

  function _timestampString(timestamp) {
    var _prefixMinutes = function(minutes) {
      if (minutes < 10) {
        minutes = "0" + minutes;
      };
      return minutes;
    };
    var days = ["Sun", "Mon", "Tue", 'Wed', "Thu", "Fri", "Sat"];
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var timestampString =
      timestamp.hours + ":" +
      _prefixMinutes(timestamp.minutes) + ", " +
      days[timestamp.day] + ", " +
      timestamp.date + " " +
      months[timestamp.month] + " " +
      timestamp.year;
    return timestampString;
  };

  function _create_eventTr(eventLogType, eventObject) {
    // console.log(eventLogType, eventObject);
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var para = document.createElement("p");
    var data;
    if ("aggregateValue" in eventObject.event) {
      data = eventObject.event.aggregateValue.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });
      if (eventObject.event.aggregateValue > 0) {
        data = "+" + data;
      };
      if (eventLogType == "xp") {
        data = data + " XP";
      } else if (eventLogType == "wealth") {
        if (eventObject.type == "platinum") {
          data = data + " PP";
        } else if (eventObject.type == "gold") {
          data = data + " GP";
        } else if (eventObject.type == "silver") {
          data = data + " SP";
        } else if (eventObject.type == "copper") {
          data = data + " CP";
        };
      };
    } else if ("note" in eventObject.event) {
      data = eventObject.event.note;
    };
    para.textContent = data;
    var timestamp = document.createElement("p");
    timestamp.setAttribute("class", "u-small-text u-text-right");
    timestamp.textContent = _timestampString(eventObject.timestamp);
    td2.appendChild(para);
    td1.appendChild(timestamp);
    tr.appendChild(td2);
    tr.appendChild(td1);
    return tr;
  };

  function _create_eventTable(eventLogType) {
    var table = document.createElement("table");
    var tbody = document.createElement("tbody");
    var all_events = helper.getObject(sheet.getCharacter(), "events");
    var all_eventsToRender = [];
    if (eventLogType == "xp") {
      all_events.forEach(function(object) {
        if (object.type == "xp") {
          all_eventsToRender.push(object);
        };
      });
    } else if (eventLogType == "wealth") {
      all_events.forEach(function(object) {
        if (object.type == "platinum" || object.type == "gold" || object.type == "silver" || object.type == "copper") {
          all_eventsToRender.push(object);
        };
      });
    };
    // console.log("all_eventsToRender", all_eventsToRender);
    if (all_eventsToRender.length > 0) {
      for (var i in all_eventsToRender) {
        var tr = _create_eventTr(eventLogType, all_eventsToRender[i]);
        tbody.appendChild(tr);
      };
    } else {
      var table = document.createElement("table");
      var tbody = document.createElement("tbody");
      var tr = document.createElement("tr");
      var td = document.createElement("td");
      var message = document.createElement("p");
      if (eventLogType == "xp") {
        message.textContent = "No XP logged yet. Why not add some?";
      } else if (eventLogType == "wealth") {
        message.textContent = "No wealth logged yet. Why not add some?";
      };
      td.appendChild(message);
      tr.appendChild(td);
      tbody.appendChild(tr);
    };
    table.appendChild(tbody);
    return table;
  };

  function render(eventLogType) {
    var heading;
    if (eventLogType == "xp") {
      heading = "XP log";
    } else if (eventLogType == "wealth") {
      heading = "Wealth log";
    };
    var body = _create_eventTable(eventLogType);
    modal.render(heading, body, "Close", false, "small");
  };

  function pop() {
    sheet.getCharacter().events.pop();
  };

  // exposed methods
  return {
    bind: bind,
    render: render,
    store: store,
    pop: pop
  };

})();

var fireball = (function() {

  function render() {

    var body = helper.e("body");
    var fireball = document.createElement("div");
    fireball.setAttribute("class", "m-fireball js-fireball");
    fireball.setAttribute("style", "left:" + helper.randomNumber(10,90) + "%");
    fireball.addEventListener("animationend", function(event, elapsed) {
      this.parentElement.removeChild(this);
    }.bind(fireball), false);

    body.appendChild(fireball);

  };

  // exposed methods
  return {
    render: render
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

var inputBlock = (function() {

  function _store(element) {
    var inputBlock = helper.getClosest(element, ".js-input-block");
    var inputBlockField = inputBlock.querySelector(".js-input-block-field");
    var path = inputBlockField.dataset.path;
    var type = inputBlockField.dataset.type;
    var clone = (inputBlock.dataset.clone == "true");
    var data;
    if (type == "integer") {
      data = parseInt(element.value, 10);
      if (isNaN(data) && type == "integer") {
        data = "";
      };
    } else if (type == "float") {
      data = parseFloat(element.value);
      if (isNaN(data)) {
        data = "";
      };
    } else {
      data = element.value;
    };
    if (path) {
      if (clone) {
        var pathCloneKey = inputBlockField.dataset.pathCloneKey;
        var cloneCount = parseInt(inputBlock.dataset.cloneCount, 10);
        var object = helper.getObject(sheet.getCharacter(), path, cloneCount);
        object[pathCloneKey] = data;
      } else {
        helper.setObject(sheet.getCharacter(), path, data);
      };
    };
  };

  var storeInputTimer = null;
  var updateNavTimer = null;

  function delayUpdate(element) {
    _store(element);
    sheet.storeCharacters();
    textBlock.render();
    totalBlock.render();
    if (display.state()) {
      display.clear();
      display.render();
    };
  };

  function _focus(element) {
    var inputBlock = helper.getClosest(element, ".js-input-block");
    if (element == document.activeElement) {
      helper.addClass(inputBlock, "is-focus");
    } else {
      helper.removeClass(inputBlock, "is-focus");
    };
  };

  function clear() {
    var all_inputBlock = helper.eA(".js-input-block");
    for (var i = 0; i < all_inputBlock.length; i++) {
      all_inputBlock[i].querySelector(".js-input-block-field").value = "";
    };
  };

  function _update_quickValueControls(button) {
    var target = button.dataset.quickValueTarget;
    var change = button.dataset.quickValueChange;
    var heading = button.dataset.modalHeading;
    var inputBlockField = helper.e("#" + target);
    var inputBlock = helper.getClosest(inputBlockField, ".js-input-block");
    var path = inputBlockField.dataset.path;

    function _render_count(quickValueControl) {
      var currentValue = parseInt(quickValueControl.dataset.quickValue, 10);
      var inputBlockQuickValue = quickValueControl.querySelector(".js-input-block-quick-value");
      inputBlockQuickValue.textContent = currentValue;
    };

    function _store_data(quickValueControl, value) {
      var currentValue = parseInt(quickValueControl.dataset.quickValue, 10);
      if (value == 0) {
        quickValueControl.dataset.quickValue = 0;
      } else {
        quickValueControl.dataset.quickValue = currentValue + value;
      };
    };

    function _create_button(quickValueControl, text, icon, value, size) {
      var button = document.createElement("button");
      if (size == "large") {
        button.setAttribute("class", "button button-icon button-large");
      } else if (size == "medium") {
        button.setAttribute("class", "button button-icon");
      } else if (size == "small") {
        button.setAttribute("class", "button button-icon button-small");
      };
      if (icon) {
        var buttonIcon = document.createElement("span");
        buttonIcon.setAttribute("class", icon);
        button.appendChild(buttonIcon);
      };
      if (text) {
        var buttonText = document.createElement("span");
        buttonText.setAttribute("class", "button-text");
        buttonText.textContent = text;
        button.appendChild(buttonText);
      };
      button.addEventListener("click", function() {
        _store_data(quickValueControl, value);
        _render_count(quickValueControl);
      }, false);
      return button;
    };

    function _create_editBoxItem(size, child) {
      var editBoxItem = document.createElement("div");
      editBoxItem.setAttribute("class", "m-edit-box-item-" + size);
      if (child) {
        editBoxItem.appendChild(child);
      };
      return editBoxItem;
    };

    function _update_value(quickValueControl) {
      var storedValue = parseInt(quickValueControl.dataset.quickValue, 10);
      var currentValue = parseInt(helper.getObject(sheet.getCharacter(), path), 10);
      var newValue;
      if (isNaN(currentValue)) {
        currentValue = 0;
      };

      // if negative healing is applied
      if (path == "defense.hp.damage" && change == "negative" && storedValue <= 0) {
        // console.log("negative healing found", " | stored", storedValue, " | old", currentValue);
        storedValue = 0;
      };

      if (change == "positive") {
        newValue = currentValue + storedValue;
      } else if (change == "negative") {
        newValue = currentValue - storedValue;
      };

      if (path == "defense.hp.damage" || path == "defense.hp.temp" || path == "defense.hp.non_lethal_damage") {
        if (newValue <= 0) {
          helper.setObject(sheet.getCharacter(), path, "");
        } else {
          helper.setObject(sheet.getCharacter(), path, newValue);
        };
      } else {
        if (newValue == 0) {
          helper.setObject(sheet.getCharacter(), path, "");
        } else {
          helper.setObject(sheet.getCharacter(), path, newValue);
        };
      };
    };

    function _create_quickValueModal() {
      var quickValueControl = document.createElement("div");
      quickValueControl.setAttribute("class", "m-input-block-quick-value");
      quickValueControl.setAttribute("data-quick-value", 0);
      quickValueControl.setAttribute("data-value-target", target);

      var editBox = document.createElement("div");
      editBox.setAttribute("class", "m-edit-box m-edit-box-head-small");
      var editBoxHead = document.createElement("div");
      editBoxHead.setAttribute("class", "m-edit-box-head");
      var editBoxHeadTitle = document.createElement("h2");
      editBoxHeadTitle.setAttribute("class", "m-edit-box-title");
      editBoxHeadTitle.textContent = "To apply";
      var editBoxBody = document.createElement("div");
      editBoxBody.setAttribute("class", "m-edit-box-body");
      var editBoxContent = document.createElement("div");
      editBoxContent.setAttribute("class", "m-edit-box-content m-edit-box-content-margin-large");
      var buttonGroup1 = document.createElement("div");
      buttonGroup1.setAttribute("class", "m-input-block-quick-value-button-group button-group button-group-line u-no-margin");
      var buttonGroup2 = document.createElement("div");
      buttonGroup2.setAttribute("class", "m-input-block-quick-value-button-group button-group button-group-line u-no-margin");

      var Count = document.createElement("p");
      Count.setAttribute("class", "m-edit-box-total js-input-block-quick-value");
      Count.textContent = 0;


      var clearButton = document.createElement("button");
      clearButton.setAttribute("class", "button button-icon button-large button-slim u-inline-with-input");
      var clearButtonIcon = document.createElement("span");
      clearButtonIcon.setAttribute("class", "icon-close");
      clearButton.appendChild(clearButtonIcon);
      clearButton.addEventListener("click", function() {
        _store_data(quickValueControl, 0);
        _render_count(quickValueControl);
      }, false);

      editBoxContent.appendChild(_create_editBoxItem("total", Count));
      editBoxContent.appendChild(_create_editBoxItem("button-large", clearButton));

      buttonGroup1.appendChild(_create_button(quickValueControl, 1, "icon-add", 1, "large"));
      buttonGroup1.appendChild(_create_button(quickValueControl, 2, "icon-add", 2, "large"));
      buttonGroup1.appendChild(_create_button(quickValueControl, 3, "icon-add", 3, "large"));
      buttonGroup1.appendChild(_create_button(quickValueControl, 5, "icon-add", 5, "large"));
      buttonGroup1.appendChild(_create_button(quickValueControl, 10, "icon-add", 10, "large"));
      buttonGroup1.appendChild(_create_button(quickValueControl, 20, "icon-add", 20, "large"));
      buttonGroup2.appendChild(_create_button(quickValueControl, 1, "icon-remove", -1, "large"));
      buttonGroup2.appendChild(_create_button(quickValueControl, 2, "icon-remove", -2, "large"));
      buttonGroup2.appendChild(_create_button(quickValueControl, 3, "icon-remove", -3, "large"));
      buttonGroup2.appendChild(_create_button(quickValueControl, 5, "icon-remove", -5, "large"));
      buttonGroup2.appendChild(_create_button(quickValueControl, 10, "icon-remove", -10, "large"));
      buttonGroup2.appendChild(_create_button(quickValueControl, 20, "icon-remove", -20, "large"));

      editBoxContent.appendChild(_create_editBoxItem("max", buttonGroup1));
      editBoxContent.appendChild(_create_editBoxItem("max", buttonGroup2));
      editBoxBody.appendChild(editBoxContent);
      editBoxHead.appendChild(editBoxHeadTitle);
      editBox.appendChild(editBoxHead);
      editBox.appendChild(editBoxBody);

      quickValueControl.appendChild(editBox);

      return quickValueControl;
    };

    var modalContent = _create_quickValueModal();

    modal.render(heading, modalContent, "Apply", function() {
      var defenceSection = helper.e(".js-section-defense");
      _update_value(this, change);
      sheet.storeCharacters();
      render(inputBlock);
      totalBlock.render();
      display.clear(defenceSection);
      display.render(defenceSection);
    }.bind(modalContent));
  };

  function _update_aggregateInput(input) {
    var path = input.dataset.aggregatePath;
    var message = input.dataset.aggregateSnackMessage;
    var valueToApply = parseInt(input.value.replace(/,/g, ""), 10);
    // if the value in the input is a number
    if (!isNaN(valueToApply)) {
      _aggregateGivenValue("aggregate", path, valueToApply, message);
      input.value = "";
      var type = path.split(".")[path.split(".").length - 1];
      var eventObject = {
        aggregateValue: valueToApply
      };
      events.store(type, eventObject);
    };
  };

  function _update_aggregateButton(button) {
    var source = button.dataset.source;
    var path = button.dataset.aggregatePath;
    var message = button.dataset.aggregateSnackMessage;
    var input = helper.e("#" + source);
    var valueToApply = parseInt(input.value.replace(/,/g, ""), 10);
    // if the value in the input is a number
    if (!isNaN(valueToApply)) {
      _aggregateGivenValue("aggregate", path, valueToApply, message);
      input.value = "";
      var type = path.split(".")[path.split(".").length - 1];
      var eventObject = {
        aggregateValue: valueToApply
      };
      events.store(type, eventObject);
    };
  };

  function _update_aggregateClear(button) {
    var path = button.dataset.aggregatePath;
    var promptHeading = button.dataset.aggregatePromptHeading;
    var promptMessage = button.dataset.aggregatePromptMessage;
    var snackMessage = button.dataset.aggregateSnackMessage;
    var clear = function() {
      _aggregateGivenValue("clear", path, false, snackMessage);
      var type = path.split(".")[path.split(".").length - 1];
      var note;
      if (type == "xp") {
        note = "XP cleared";
      } else if (type == "platinum") {
        note = "PP cleared";
      } else if (type == "gold") {
        note = "GP cleared";
      } else if (type == "silver") {
        note = "SP cleared";
      } else if (type == "copper") {
        note = "CP cleared";
      };
      var eventObject = {
        note: note
      };
      events.store(type, eventObject);
      wealth.update();
      textBlock.render();
    };
    prompt.render(promptHeading, promptMessage, "Clear", clear);
  };

  function _aggregateGivenValue(action, path, value, message) {
    var currentValue = parseInt(helper.getObject(sheet.getCharacter(), path), 10);
    if (isNaN(currentValue)) {
      currentValue = 0;
    };
    var newValue;
    if (action == "aggregate") {
      newValue = currentValue + value;
      if (value >= 0) {
        message = "+" + value.toLocaleString(undefined, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        }) + " " + message;
      } else {
        message = value.toLocaleString(undefined, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        }) + " " + message;
      };
    } else if (action == "clear") {
      newValue = "";
    };
    helper.setObject(sheet.getCharacter(), path, newValue);
    sheet.storeCharacters();
    _store_lastAggregate(path, currentValue);
    snack.render(message, "Undo", _restore_lastAggregate, 8000);
    wealth.update();
    textBlock.render();
  };

  function _store_lastAggregate(path, oldValue) {
    var object = {
      path: path,
      oldValue: oldValue
    };
    helper.store("lastAggregate", JSON.stringify(object));
  };

  function _restore_lastAggregate() {
    events.pop();
    var undoData = JSON.parse(helper.read("lastAggregate"));
    helper.setObject(sheet.getCharacter(), undoData.path, undoData.oldValue);
    wealth.update();
    textBlock.render();
    sheet.storeCharacters();
    _remove_lastRemovedAggregate();
  };

  function _remove_lastRemovedAggregate() {
    helper.remove("lastAggregate");
  };

  function _increment(button) {
    var increment = button.dataset.increment;
    var target = button.dataset.incrementTarget;
    var clone = (button.dataset.clone == "true");
    var cloneCount;
    var pathCloneKey;
    if (clone) {
      cloneCount = parseInt(button.dataset.cloneCount, 10);
      pathCloneKey = button.dataset.pathCloneKey;
    };
    var minimum;
    var inputBlockField = helper.e("#" + target);
    var inputBlock = helper.getClosest(inputBlockField, ".js-input-block");
    if (inputBlockField.dataset.minimum !== undefined) {
      minimum = parseInt(inputBlockField.dataset.minimum, 10);
    };
    var path = inputBlockField.dataset.path;
    var oldValue;
    if (clone) {
      var object = helper.getObject(sheet.getCharacter(), path, cloneCount);
      oldValue = parseInt(object[pathCloneKey], 10);
    } else {
      oldValue = parseInt(helper.getObject(sheet.getCharacter(), path), 10);
    };
    if (isNaN(oldValue)) {
      oldValue = 0;
    };

    var newValue;
    if (increment == "addition") {
      newValue = oldValue + 1;
    } else if (increment == "subtraction") {
      newValue = oldValue - 1;
    } else if (increment == "clear") {
      newValue = 0;
    };
    if (typeof minimum == "number") {
      if (newValue <= minimum) {
        newValue = "";
      };
    };
    if (newValue == 0) {
      newValue = "";
    };

    if (clone) {
      var object = helper.getObject(sheet.getCharacter(), path, cloneCount);
      object[pathCloneKey] = newValue;
    } else {
      helper.setObject(sheet.getCharacter(), path, newValue);
    };

    render(inputBlock);
    sheet.storeCharacters();
    totalBlock.render();
  };

  function bind(inputBlock) {
    if (inputBlock) {
      _bind_inputBlock(inputBlock);
    } else {
      _bind_all_inputBlock();
      _bind_all_inputBlockIncrement();
      _bind_inputBlockQuickValue();
      _bind_inputBlockAggregateButton();
      _bind_inputBlockAggregateInput();
      _bind_inputBlockAggregateClear();
      _bind_name();
    };
  };

  function _bind_all_inputBlockIncrement() {
    var all_inputBlockIncrement = helper.eA(".js-input-block-increment");
    for (var i = 0; i < all_inputBlockIncrement.length; i++) {
      if (all_inputBlockIncrement[i].dataset.clone != "true") {
        bind_inputBlockIncrement(all_inputBlockIncrement[i]);
      };
    };
  };

  function bind_inputBlockIncrement(inputBlockIncrement) {
    inputBlockIncrement.addEventListener("click", function() {
      _increment(this);
    }, false);
  };

  function _bind_inputBlockQuickValue() {
    var all_inputBlockQuickValues = helper.eA(".js-input-block-quick-value");
    for (var i = 0; i < all_inputBlockQuickValues.length; i++) {
      all_inputBlockQuickValues[i].addEventListener("click", function() {
        _update_quickValueControls(this);
      }, false);
    };
  };

  function _bind_inputBlockAggregateInput() {
    var all_inputBlockAggregateinput = helper.eA(".js-input-block-aggregate-input");
    for (var i = 0; i < all_inputBlockAggregateinput.length; i++) {
      all_inputBlockAggregateinput[i].addEventListener("keydown", function(event) {
        // if enter
        if (event.keyCode == 13) {
          _update_aggregateInput(this);
        };
      }, false);
    };
  };

  function _bind_inputBlockAggregateButton() {
    var all_inputBlockAggregateButton = helper.eA(".js-input-block-aggregate-button");
    for (var i = 0; i < all_inputBlockAggregateButton.length; i++) {
      all_inputBlockAggregateButton[i].addEventListener("click", function() {
        _update_aggregateButton(this);
      }, false);
    };
  };

  function _bind_inputBlockAggregateClear() {
    var all_inputBlockAggregateClear = helper.eA(".js-input-block-aggregate-clear");
    for (var i = 0; i < all_inputBlockAggregateClear.length; i++) {
      all_inputBlockAggregateClear[i].addEventListener("click", function() {
        _update_aggregateClear(this);
      }, false);
    };
  };

  function _bind_all_inputBlock() {
    var all_inputBlock = helper.eA(".js-input-block");
    for (var i = 0; i < all_inputBlock.length; i++) {
      if (all_inputBlock[i].dataset.clone != "true") {
        _bind_inputBlock(all_inputBlock[i]);
      };
    };
  };

  function _bind_inputBlock(inputBlock) {
    var input = inputBlock.querySelector(".js-input-block-field");
    if (input) {
      input.addEventListener("input", function() {
        clearTimeout(storeInputTimer);
        storeInputTimer = setTimeout(delayUpdate, 300, this);
      }, false);
      input.addEventListener("focus", function() {
        _focus(this);
      }, false);
      input.addEventListener("blur", function() {
        _store(this);
        _focus(this);
      }, false);
    };
  };

  function _bind_name() {
    var inputBlock = helper.e(".js-basics-name");
    var input = inputBlock.querySelector(".js-input-block-field");
    input.addEventListener("input", function() {
      clearTimeout(updateNavTimer);
      updateNavTimer = setTimeout(nav.update, 300, this);
    }, false);
    // input.addEventListener("keydown", function(event) {
    //   // enter
    //   if (event.keyCode == 13) {
    //     if (input.value == "restore all") {
    //       sheet.all();
    //     };
    //     _focus(this);
    //   };
    // }, false);
  };

  function bind_classLevel(inputBlock) {
    var input = inputBlock.querySelector(".js-input-block-field");
    input.addEventListener("input", function() {
      clearTimeout(updateNavTimer);
      updateNavTimer = setTimeout(nav.update, 300, this);
    }, false);
  };

  function _render_inputBlock(inputBlock) {
    // console.log(inputBlock);
    var inputBlockField = inputBlock.querySelector(".js-input-block-field");
    var path = inputBlockField.dataset.path;
    var clone = (inputBlock.dataset.clone == "true");
    if (path) {
      // console.log(inputBlock);
      if (clone) {
        // console.log("clone", path);
        var pathCloneKey = inputBlockField.dataset.pathCloneKey;
        var cloneCount = parseInt(inputBlock.dataset.cloneCount, 10);
        var object = helper.getObject(sheet.getCharacter(), path, cloneCount);
        // console.log("found clone input", path, pathCloneKey, inputBlock.dataset.cloneCount, inputBlock);
        inputBlockField.value = object[pathCloneKey];
      } else {
        // console.log("not clone", path);
        // console.log(inputBlock.dataset.cloneCount);
        var content = helper.getObject(sheet.getCharacter(), path);
        inputBlockField.value = content;
      };
    };
  };

  function render(inputBlock) {
    if (inputBlock) {
      _render_inputBlock(inputBlock);
    } else {
      var all_inputBlock = helper.eA(".js-input-block");
      for (var i = 0; i < all_inputBlock.length; i++) {
        _render_inputBlock(all_inputBlock[i]);
      };
    };
  };

  // exposed methods
  return {
    render: render,
    bind: bind,
    bind_classLevel: bind_classLevel,
    bind_inputBlockIncrement: bind_inputBlockIncrement,
    clear: clear
  };

})();

var log = (function() {

  var previousLog = null;

  function bind() {
    window.addEventListener("keydown", function(event) {
      if (event.keyCode == 27) {
        destroy();
      };
    }, false);
  };

  function destroy() {
    var log = helper.e(".js-log");
    var logWrapper = helper.e(".js-log-wrapper");
    if (log) {
      getComputedStyle(log).opacity;
      helper.removeClass(logWrapper, "is-unrotate-in");
      helper.addClass(logWrapper, "is-dropped-out");
      helper.removeClass(log, "is-opaque");
      helper.addClass(log, "is-transparent");
    };
  };

  function _render_logMessage(heading, logBodyContent, actionText, action) {

    prompt.destroy();
    modal.destroy();
    var body = helper.e("body");

    var logWrapper = document.createElement("div");
    logWrapper.setAttribute("class", "m-log-wrapper js-log-wrapper is-unrotate-out");

    var log = document.createElement("div");
    log.setAttribute("class", "m-log js-log");
    log.destroy = function() {
      helper.removeClass(logWrapper, "is-unrotate-in");
      helper.addClass(logWrapper, "is-dropped-out");
      helper.removeClass(log, "is-opaque");
      helper.addClass(log, "is-transparent");
    };

    var logHeading = document.createElement("h1");
    logHeading.setAttribute("tabindex", "1");
    logHeading.setAttribute("class", "m-log-heading");
    logHeading.textContent = heading;

    var logBody = document.createElement("div");
    logBody.setAttribute("class", "m-log-body u-clearfix");

    var logControls = document.createElement("div");
    logControls.setAttribute("class", "m-log-controls");

    var actionButton = document.createElement("a");
    actionButton.setAttribute("href", "javascript:void(0)");
    actionButton.setAttribute("tabindex", "1");
    actionButton.setAttribute("class", "button button-primary button-block button-large");
    actionButton.textContent = actionText || "Ok";

    logControls.appendChild(actionButton);

    if (heading != false) {
      logBody.appendChild(logHeading);
    };

    if (logBodyContent) {
      if (typeof logBodyContent == "string") {
        var container = document.createElement("div");
        container.setAttribute("class", "container");
        var para = document.createElement("p");
        para.textContent = logBodyContent;
        container.appendChild(para);
        logBody.appendChild(container);
      } else {
        logBody.appendChild(logBodyContent);
      };
    };

    logWrapper.appendChild(logBody);
    logWrapper.appendChild(logControls);
    log.appendChild(logWrapper);

    log.addEventListener("transitionend", function(event, elapsed) {
      if (event.propertyName === "opacity" && getComputedStyle(this).opacity == 0) {
        this.parentElement.removeChild(this);
      };
    }.bind(log), false);

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

    if (previousLog) {
      previousLog.destroy();
    };

    previousLog = log;

    body.appendChild(log);

    getComputedStyle(log).opacity;
    helper.removeClass(log, "is-transparent");
    helper.addClass(log, "is-opaque");
    helper.removeClass(logWrapper, "is-unrotate-out");
    helper.addClass(logWrapper, "is-unrotate-in");
    logHeading.focus(this);

  };

  function _create_fullChangeLogModal() {
    var container = document.createElement("div");
    container.setAttribute("class", "container");
    for (var i = 0; i < update.history.length; i++) {
      var row = document.createElement("div");
      row.setAttribute("class", "row");
      var col2 = document.createElement("div");
      col2.setAttribute("class", "col-xs-2");
      row.setAttribute("class", "row");
      var col10 = document.createElement("div");
      col10.setAttribute("class", "col-xs-10");
      row.setAttribute("class", "row");
      var hr = document.createElement("hr");
      var version = document.createElement("p");
      var versionNumber = document.createElement("strong");
      versionNumber.textContent = update.history[i].version;
      var list = document.createElement("ul");
      list.setAttribute("class", "m-log-list");
      for (var j = 0; j < update.history[i].list.length; j++) {
        var asterisk = "*";
        var listItem = document.createElement("li");
        listItem.setAttribute("class", "m-log-list-item");
        if (update.history[i].list[j].indexOf(asterisk) != -1) {
          helper.addClass(listItem, "m-log-list-item-alert");
          var listItemIcon = document.createElement("span");
          listItemIcon.setAttribute("class", "m-log-list-item-alert-icon icon-error-outline");
          listItem.textContent = update.history[i].list[j].substr(1);
          listItem.appendChild(listItemIcon);
        } else {
          listItem.textContent = update.history[i].list[j];
        };
        list.appendChild(listItem);
      };
      version.appendChild(versionNumber);
      col2.appendChild(version);
      col10.appendChild(list);
      row.appendChild(col2);
      row.appendChild(col10);
      container.appendChild(hr);
      container.appendChild(row);
    };
    return container;
  };

  function _create_fullChangeLog() {
    modal.render("Change Log", _create_fullChangeLogModal(), "Close");
  };

  function render() {
    var all_breakingChanges = [];
    var all_breakingChangesVersion = [];
    var changeVersion;
    var numberOfRecentChanges = 2;
    for (var i = 0; i < update.history.length; i++) {
      for (var j = 0; j < update.history[i].list.length; j++) {
        var asterisk = "*";
        if (update.history[i].list[j].indexOf(asterisk) != -1) {
          all_breakingChanges.push(update.history[i].list[j].substr(1));
          all_breakingChangesVersion.push(update.history[i].version);
        };
      };
    };
    for (var i = 0; i < numberOfRecentChanges; i++) {
      if (typeof changeVersion == "undefined") {
        changeVersion = all_breakingChangesVersion[i];
      } else {
        changeVersion = changeVersion + "/" + all_breakingChangesVersion[i];
      };
    };
    if (all_breakingChanges.length < numberOfRecentChanges) {
      numberOfRecentChanges = all_breakingChanges.length;
    };
    if (helper.read("latestVersionUpdate") != changeVersion) {
      var container = document.createElement("div");
      container.setAttribute("class", "container");
      var row = document.createElement("div");
      row.setAttribute("class", "row");
      var col = document.createElement("div");
      col.setAttribute("class", "col-xs-12");
      var list = document.createElement("ul");
      list.setAttribute("class", "m-log-list m-log-list-short");
      for (var i = 0; i < numberOfRecentChanges; i++) {
        var listItem = document.createElement("li");
        listItem.setAttribute("class", "m-log-list-item");
        listItem.textContent = all_breakingChanges[i];
        list.appendChild(listItem);
      };
      var seeAll = document.createElement("button");
      seeAll.setAttribute("class", "button button-medium button-tertiary u-no-margin");
      seeAll.textContent = "See complete Change Log"
      seeAll.addEventListener("click", function(event) {
        _create_fullChangeLog();
        destroy();
      }, false);
      col.appendChild(list);
      col.appendChild(seeAll);
      row.appendChild(col);
      container.appendChild(row);
      var heading = "Recent Changes";
      _render_logMessage(heading, container, "Don't show this again", function(){
        _store_confirmation(changeVersion);
      });
    };
  };

  function _store_confirmation(changeVersion) {
    helper.remove("latestVersionUpdate");
    helper.store("latestVersionUpdate", changeVersion);
  };

  // exposed methods
  return {
    changeLog: _create_fullChangeLog,
    render: render,
    bind: bind,
    destroy: destroy
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

  function checkForModal() {
    var modal = helper.e(".js-modal");
    if (modal) {
      body.dataset.modal = true;
    } else {
      body.dataset.modal = false;
    };
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

  function render(heading, modalBodyContent, actionText, action, size) {
    prompt.destroy();
    var body = helper.e("body");
    var displayMode = (helper.e(".js-fab").dataset.displayMode == "true");

    var modalShade = document.createElement("div");
    modalShade.setAttribute("class", "m-modal-shade js-modal-shade");
    if (displayMode) {
      helper.addClass(modalShade, "is-display-mode");
    };
    modalShade.destroy = function() {
      helper.removeClass(modalShade, "is-opaque");
      helper.addClass(modalShade, "is-transparent");
    };

    var modalWrapper = document.createElement("div");
    modalWrapper.setAttribute("class", "m-modal-wrapper js-modal-wrapper is-unrotate-out");

    var modal = document.createElement("div");
    if (size == "large") {
      modal.setAttribute("class", "m-modal m-modal-large js-modal");
    } else if (size == "small") {
      modal.setAttribute("class", "m-modal m-modal-small js-modal");
    } else {
      modal.setAttribute("class", "m-modal js-modal");
    };
    modal.destroy = function() {
      helper.removeClass(modalWrapper, "is-unrotate-in");
      helper.addClass(modalWrapper, "is-dropped-out");
      helper.removeClass(modal, "is-opaque");
      helper.addClass(modal, "is-transparent");
    };

    var modalHeading = document.createElement("h1");
    modalHeading.setAttribute("tabindex", "1");
    modalHeading.setAttribute("class", "m-modal-heading");
    modalHeading.textContent = heading;

    var modalBody = document.createElement("div");
    modalBody.setAttribute("class", "m-modal-body u-clearfix");

    var modalControls = document.createElement("div");
    modalControls.setAttribute("class", "m-modal-controls");

    var actionButton = document.createElement("a");
    actionButton.setAttribute("href", "javascript:void(0)");
    actionButton.setAttribute("tabindex", "1");
    actionButton.setAttribute("class", "button button-primary button-block button-large");
    actionButton.textContent = actionText || "Ok";

    modalControls.appendChild(actionButton);

    if (heading != false) {
      modalBody.appendChild(modalHeading);
    };

    if (modalBodyContent) {
      if (typeof modalBodyContent == "string") {
        var container = document.createElement("div");
        container.setAttribute("class", "container");
        var para = document.createElement("p");
        para.textContent = modalBodyContent;
        container.appendChild(para);
        modalBody.appendChild(container);
      } else {
        modalBody.appendChild(modalBodyContent);
      };
    };

    modalWrapper.appendChild(modalBody);
    modalWrapper.appendChild(modalControls);
    modal.appendChild(modalWrapper);

    modal.addEventListener("transitionend", function(event, elapsed) {
      if (event.propertyName === "opacity" && getComputedStyle(this).opacity == 0) {
        this.parentElement.removeChild(this);
        checkForModal();
        page.update();
      };
    }.bind(modal), false);

    modalShade.addEventListener("transitionend", function(event, elapsed) {
      if (event.propertyName === "opacity" && getComputedStyle(this).opacity == 0) {
        this.parentElement.removeChild(this);
        checkForModal();
        page.update();
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
    checkForModal();
    page.update();
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
    var body = helper.e("body");
    var displayMode = (helper.e(".js-fab").dataset.displayMode == "true");
    var navShade = document.createElement("div");

    navShade.setAttribute("class", "m-nav-shade js-nav-shade");
    if (displayMode) {
      helper.addClass(navShade, "is-display-mode");
    };
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

  function scrollToTop() {
    if (window.innerWidth < 550) {
      window.scrollTo(0, 0);
    } else {
      smoothScroll.animateScroll(null, "#body");
    };
  };

  function _bind_characterOption(characterLink) {
    var label = characterLink.querySelector(".js-nav-character-label");
    var input = characterLink.querySelector(".js-nav-character-input");
    input.addEventListener("change", function() {
      _switch_character(label);
      sheet.storeCharacters();
      navClose();
      scrollToTop();
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
    navClose();
  };


  function updateNavCharacters() {
    nav.clear();
    nav.render();
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
  };

  function _render_quickNav() {
    var body = helper.e("body");
    window.onscroll = function() {

      var quickNav = helper.e(".js-quick-nav");
      var all_quickNavLinks = helper.eA(".js-quick-nav-link");
      var all_section = helper.eA(".js-section");

      var offset = parseInt(getComputedStyle(quickNav).height, 10);
      // if nav is on the left after 900px wide viewport
      if (document.documentElement.clientWidth >= 900) {
        offset = 0;
      };

      var all_editControls = helper.eA(".js-edit-controls");

      for (var i = 0; i < all_editControls.length; i++) {
        var pinWatch = helper.e("." + all_editControls[i].dataset.pinWatch);
        var section = helper.getClosest(pinWatch, ".js-section");
        var fillWidth = parseInt(getComputedStyle(all_editControls[i]).width, 10);
        var fillHeight = parseInt(getComputedStyle(all_editControls[i]).height, 10) + parseInt(getComputedStyle(all_editControls[i]).marginTop, 10) + parseInt(getComputedStyle(all_editControls[i]).marginBottom, 10);
        if (section.dataset.minimise == "false" || !section.dataset.minimise && section.dataset.displayMode == "false" || !section.dataset.displayMode) {
          if (pinWatch.getBoundingClientRect().top <= (offset - fillHeight) && pinWatch.getBoundingClientRect().bottom >= (offset + fillHeight)) {
            // console.log("fire", pinWatch);
            helper.addClass(pinWatch, "is-pinned");
            if (!pinWatch.hasAttribute("style")) {
              all_editControls[i].setAttribute("style", "width: " + fillWidth + "px");
              pinWatch.setAttribute("style", "padding-top: " + fillHeight + "px");
            };
          } else {
            helper.removeClass(pinWatch, "is-pinned");
            pinWatch.removeAttribute("style");
            all_editControls[i].removeAttribute("style");
          };
        } else if (section.dataset.minimise == "true" || section.dataset.minimise && section.dataset.displayMode == "true" || section.dataset.displayMode) {
          helper.removeClass(pinWatch, "is-pinned");
          pinWatch.removeAttribute("style");
          all_editControls[i].removeAttribute("style");
        };
      };

      for (var i = 0; i < all_section.length; i++) {
        // console.log(all_section[i].id, "--- top", (all_section[i].getBoundingClientRect().top - parseInt(getComputedStyle(document.querySelector(".js-edit")).marginTop, 10)), "bottom", all_section[i].getBoundingClientRect().bottom);
        if ((all_section[i].getBoundingClientRect().top - parseInt(getComputedStyle(all_section[i]).marginTop, 10)) <= offset && (all_section[i].getBoundingClientRect().bottom + parseInt(getComputedStyle(all_section[i]).marginBottom, 10)) > offset) {
          for (var j = 0; j < all_quickNavLinks.length; j++) {
            helper.removeClass(all_quickNavLinks[j], "is-active");
          };
          helper.addClass(all_quickNavLinks[i], "is-active");
        } else {
          helper.removeClass(all_quickNavLinks[i], "is-active");
        };
      };

    };
  };

  function _createAllCharacter() {
    var characters = sheet.getAllCharacters();
    var navCharacters = helper.e(".js-nav-characters");
    for (var i in characters) {
      navCharacters.appendChild(_createNavCharacterItem(characters[i], i));
    };
    var all_navCharacterInput = helper.eA(".js-nav-character-input");
    all_navCharacterInput[sheet.getIndex()].checked = true;
  };

  function _get_name(characterObject) {
    var characterName = characterObject.basics.name;
    if (typeof characterName == "undefined" || characterName == "") {
      characterName = "New Character";
    };
    return characterName;
  };

  function _createNavCharacterItem(characterObject, characterIndex) {
    var classLevel = classes.getClassLevel(characterObject);
    var characterName = _get_name(characterObject);

    var uniqueId = helper.randomId(10);

    var navCharacter = document.createElement("li");
    navCharacter.setAttribute("class", "m-nav-character js-nav-character-" + characterIndex);

    var input = document.createElement("input");
    input.setAttribute("id", characterName.replace(/\s+/g, "-").toLowerCase() + "-" + uniqueId);
    input.setAttribute("name", "js-nav-all-characters");
    input.setAttribute("class", "js-nav-character-input");
    input.setAttribute("type", "radio");
    input.setAttribute("tabindex", 1);

    var label = document.createElement("label");
    label.setAttribute("for", characterName.replace(/\s+/g, "-").toLowerCase() + "-" + uniqueId);
    label.setAttribute("class", "u-full-width js-nav-character-label");
    label.setAttribute("data-character-index", characterIndex);

    var detailsSpan = document.createElement("span");
    detailsSpan.setAttribute("class", "m-nav-characters-details");

    var nameSpan = document.createElement("span");
    nameSpan.setAttribute("class", "m-nav-characters-name");
    nameSpan.textContent = characterName;

    var classLevelSpan = document.createElement("span");
    classLevelSpan.setAttribute("class", "m-nav-characters-class-level");
    classLevelSpan.textContent = classLevel;

    // build module
    detailsSpan.appendChild(nameSpan);
    detailsSpan.appendChild(classLevelSpan);
    label.appendChild(detailsSpan);
    navCharacter.appendChild(input);
    navCharacter.appendChild(label);

    // bind
    _bind_characterOption(navCharacter);
    return navCharacter;
  };

  function navClose() {
    var body = helper.e("body");
    var nav = helper.e(".js-nav");
    var hamburger = helper.e(".js-hamburger");
    helper.removeClass(nav, "is-open");
    helper.removeClass(hamburger, "is-open");
    body.dataset.navOpen = false;
    _destroy_navShade();
    page.update();
  };

  function navOpen() {
    var body = helper.e("body");
    var nav = helper.e(".js-nav");
    var hamburger = helper.e(".js-hamburger");
    helper.addClass(nav, "is-open");
    helper.addClass(hamburger, "is-open");
    body.dataset.navOpen = true;
    _render_navShade();
    page.update();
  };

  function toggle() {
    var body = helper.e("body");
    var nav = helper.e(".js-nav");
    var hamburger = helper.e(".js-hamburger");
    if (body.dataset.navOpen == "true") {
      helper.removeClass(nav, "is-open");
      helper.removeClass(hamburger, "is-open");
      body.dataset.navOpen = false;
      _destroy_navShade();
      page.update();
    } else {
      helper.addClass(nav, "is-open");
      helper.addClass(hamburger, "is-open");
      body.dataset.navOpen = true;
      _render_navShade();
      page.update();
    };
  };

  function _quickLinkSmoothScroll(element) {
    var id = element.dataset.link;
    var all_section = helper.eA(".js-section");
    var quickNav = helper.e(".js-quick-nav");
    var offset;
    var options;
    // if nav is on the left after 900px wide viewport
    if (document.documentElement.clientWidth >= 900) {
      offset = parseInt(getComputedStyle(all_section[1]).marginTop, 10);
    } else {
      offset = parseInt(getComputedStyle(all_section[1]).marginTop, 10) + parseInt(getComputedStyle(quickNav).height, 10);
    };
    if (window.innerWidth < 550) {
      options = {
        speed: 150,
        offset: offset
      };
    } else {
      options = {
        speed: 300,
        offset: offset
      };
    };
    navClose();
    smoothScroll.animateScroll(null, id, options);
  };

  function _bind_navLinks() {

    // var nav = helper.e(".js-nav");
    var navToggle = helper.e(".js-nav-toggle");
    var fullscreenModeToggle = helper.e(".js-fullscreen-mode");
    var nightMode = helper.e(".js-night-mode");
    var chnageLog = helper.e(".js-chnage-log");
    var clearAll = helper.e(".js-clear-all");
    var restoreDemoPcs = helper.e(".js-restore-demo-pcs");
    var characterAdd = helper.e(".js-character-add");
    var characterRemove = helper.e(".js-character-remove");
    var characterImport = helper.e(".js-character-import");
    var characterExport = helper.e(".js-character-export");

    navToggle.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      toggle();
    }, false);

    fullscreenModeToggle.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      fullscreen.toggle();
    }, false);

    nightMode.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      night.toggle();
    }, false);

    chnageLog.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      navClose();
      log.changeLog();
    }, false);

    clearAll.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      navClose();
      prompt.render("Clear all characters?", "All characters will be removed. This can not be undone.", "Remove all", sheet.destroy);
    }, false);

    restoreDemoPcs.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      navClose();
      prompt.render("Restore demo PCs?", "All characters will be removed and the demo characters will be restored. Have you backed up your characters by Exporting?", "Restore", sheet.restore);
    }, false);

    characterImport.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      navClose();
      sheet.import();
    }, false);

    characterExport.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      navClose();
      sheet.export();
    }, false);

    characterAdd.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      navClose();
      sheet.addCharacter();
      snack.render("New character added.", false);
    }, false);

    characterRemove.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      navClose();
      sheet.removeCharacter();
    }, false);

  };

  function _bind_quickNavLinks() {
    var all_quickNavLink = helper.eA(".js-quick-nav-link");
    for (var i = 0; i < all_quickNavLink.length; i++) {
      all_quickNavLink[i].addEventListener("click", function(event) {
        event.stopPropagation();
        event.preventDefault();
        navClose();
        _quickLinkSmoothScroll(this);
      }, false);
    };
  };

  function _bind_shortcutKeys() {

    window.addEventListener("keydown", function(event) {
      // ctrl+alt+delete
      if (event.ctrlKey && event.altKey && event.keyCode == 8) {
        prompt.render("Clear all characters?", "All characters will be removed. This can not be undone.", "Delete all", sheet.destroy);
        // navClose();
      };
      // ctrl+alt+i
      if (event.ctrlKey && event.altKey && event.keyCode == 73) {
        sheet.import();
        // navClose();
      };
      // ctrl+alt+e
      if (event.ctrlKey && event.altKey && event.keyCode == 69) {
        sheet.export();
        // navClose();
      };
      // ctrl+alt+m
      if (event.ctrlKey && event.altKey && event.keyCode == 77) {
        toggle();
        helper.e(".js-nav-title").focus(this);
      };
      // ctrl+alt+d
      if (event.ctrlKey && event.altKey && event.keyCode == 68) {
        display.clear();
        display.render();
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

    // window.addEventListener('click', function(event) {
    //   if (event.target != nav && event.target != navToggle && helper.getClosest(event.target, ".js-nav") != nav && helper.getClosest(event.target, ".js-nav-toggle") != navToggle) {
    //     navClose();
    //   };
    // }, false);

    // key debugging
    // window.addEventListener("keydown", function(event) {
    //   console.log(event.keyCode);
    //   console.log(event.metaKey);
    //   console.log(event);
    // });

  };

  function bind() {
    _bind_navLinks();
    _bind_shortcutKeys();
    _bind_quickNavLinks();
  };

  // exposed methods
  return {
    bind: bind,
    clear: clear,
    render: render,
    update: updateNavCharacters,
    open: navOpen,
    close: navClose,
    toggle: toggle,
    scrollToTop: scrollToTop
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

var page = (function() {

  function update() {
    var body = helper.e("body");
    var modal = (body.dataset.modal == "true");
    var prompt = (body.dataset.prompt == "true");
    var nav = (body.dataset.navOpen == "true");
    if (modal || prompt || nav) {
      helper.addClass(body, "is-scrolll-disabled");
    } else {
      helper.removeClass(body, "is-scrolll-disabled");
    };
  };

  function lock() {
    var body = helper.e("body");
    helper.addClass(body, "is-scrolll-disabled");
  };

  function unlock() {
    var body = helper.e("body");
    helper.removeClass(body, "is-scrolll-disabled");
  };

  // exposed methods
  return {
    lock: lock,
    unlock: unlock,
    update: update
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

  function checkForPrompt() {
    var prompt = helper.e(".js-prompt");
    if (prompt) {
      body.dataset.prompt = true;
    } else {
      body.dataset.prompt = false;
    };
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
    var displayMode = (helper.e(".js-fab").dataset.displayMode == "true");

    var promptShade = document.createElement("div");
    promptShade.setAttribute("class", "m-prompt-shade js-prompt-shade");
    if (displayMode) {
      helper.addClass(promptShade, "is-display-mode");
    };
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
    promptHeading.setAttribute("tabindex", "1");
    promptHeading.setAttribute("class", "m-prompt-heading");
    promptHeading.textContent = heading;

    var promptText = document.createElement("p");
    promptText.setAttribute("class", "m-prompt-text");
    promptText.textContent = message;

    var promptControls = document.createElement("div");
    promptControls.setAttribute("class", "m-prompt-controls button-group button-group-line button-group-equal");

    var actionButton = document.createElement("a");
    actionButton.setAttribute("href", "javascript:void(0)");
    actionButton.setAttribute("tabindex", "1");
    actionButton.setAttribute("class", "button button-primary button-large js-prompt-action");
    actionButton.textContent = actionText || "Ok";

    var cancelButton = document.createElement("a");
    cancelButton.setAttribute("href", "javascript:void(0)");
    cancelButton.setAttribute("tabindex", "1");
    cancelButton.setAttribute("class", "button button-large");
    cancelButton.textContent = "Cancel";

    promptControls.appendChild(cancelButton);
    promptControls.appendChild(actionButton);
    if (heading) {
      promptbody.appendChild(promptHeading);
    };
    if (message) {
      promptbody.appendChild(promptText);
    };
    promptWrapper.appendChild(promptbody);
    promptWrapper.appendChild(promptControls);

    prompt.appendChild(promptWrapper);

    prompt.addEventListener("transitionend", function(event, elapsed) {
      if (event.propertyName === "opacity" && getComputedStyle(this).opacity == 0) {
        this.parentElement.removeChild(this);
        checkForPrompt();
        page.update();
      };
    }.bind(prompt), false);

    promptShade.addEventListener("transitionend", function(event, elapsed) {
      if (event.propertyName === "opacity" && getComputedStyle(this).opacity == 0) {
        this.parentElement.removeChild(this);
        checkForPrompt();
        page.update();
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
    checkForPrompt();
    page.update();
  };

  // exposed methods
  return {
    bind: bind,
    destroy: destroy,
    render: render
  };

})();

var registerServiceWorker = (function() {

  function bind() {
    if ("serviceWorker" in navigator) {
      // Delay registration until after the page has loaded, to ensure that our
      // precaching requests don't degrade the first visit experience.
      // See https://developers.google.com/web/fundamentals/instant-and-offline/service-worker/registration
      window.addEventListener("load", function() {
        // Your service-worker.js *must* be located at the top-level directory relative to your site.
        // It won't be able to control pages unless it's located at the same level or higher than them.
        // *Don't* register service worker file in, e.g., a scripts/ sub-directory!
        // See https://github.com/slightlyoff/ServiceWorker/issues/468
        navigator.serviceWorker.register("service-worker.js").then(function(reg) {
          // updatefound is fired if service-worker.js changes.
          reg.onupdatefound = function() {
            // The updatefound event implies that reg.installing is set; see
            // https://w3c.github.io/ServiceWorker/#service-worker-registration-updatefound-event
            var installingWorker = reg.installing;

            installingWorker.onstatechange = function() {
              switch (installingWorker.state) {
                case "installed":
                  if (navigator.serviceWorker.controller) {
                    // At this point, the old content will have been purged and the fresh content will
                    // have been added to the cache.
                    // It's the perfect time to display a "New content is available; please refresh."
                    // message in the page's interface.
                    console.log("[Service Worker] New or updated content is available.");
                    window.location.reload(true);
                  } else {
                    // At this point, everything has been precached.
                    // It's the perfect time to display a "Content is cached for offline use." message.
                    console.log("[Service Worker] Content is now available offline!");
                  };
                  break;
                case "redundant":
                  console.error("[Service Worker] The installing service worker became redundant.");
                  break;
              };
            };
          };
        }).catch(function(e) {
          console.error("[Service Worker] Error during service worker registration:", e);
        });
      });
    };
  };

  // exposed methods
  return {
    bind: bind
  };

})();

var repair = (function() {

  function render(characterObject) {
    // console.log("fire repair update");
    // add events array
    if (!characterObject.hasOwnProperty("events")) {
      characterObject.events = [];
    };
    // udpate wealth
    if (typeof characterObject.equipment.wealth.platinum == "string" && !characterObject.equipment.wealth.platinum == "") {
      characterObject.equipment.wealth.platinum = parseInt(characterObject.equipment.wealth.platinum.replace(/,/g, ""), 10);
    };
    if (typeof characterObject.equipment.wealth.gold == "string" && !characterObject.equipment.wealth.gold == "") {
      characterObject.equipment.wealth.gold = parseInt(characterObject.equipment.wealth.gold.replace(/,/g, ""), 10);
    };
    if (typeof characterObject.equipment.wealth.silver == "string" && !characterObject.equipment.wealth.silver == "") {
      characterObject.equipment.wealth.silver = parseInt(characterObject.equipment.wealth.silver.replace(/,/g, ""), 10);
    };
    if (typeof characterObject.equipment.wealth.copper == "string" && !characterObject.equipment.wealth.copper == "") {
      characterObject.equipment.wealth.copper = parseInt(characterObject.equipment.wealth.copper.replace(/,/g, ""), 10);
    };
    // udpate xp
    if (typeof characterObject.basics.xp == "string" && !characterObject.basics.xp == "") {
      characterObject.basics.xp = parseInt(characterObject.basics.xp.replace(/,/g, ""), 10);
    };
    // udpate encumbrance
    if ("light" in characterObject.equipment.encumbrance || "medium" in characterObject.equipment.encumbrance || "heavy" in characterObject.equipment.encumbrance || "lift" in characterObject.equipment.encumbrance || "drag" in characterObject.equipment.encumbrance) {
      delete characterObject.equipment.encumbrance.light;
      delete characterObject.equipment.encumbrance.medium;
      delete characterObject.equipment.encumbrance.heavy;
      delete characterObject.equipment.encumbrance.lift;
      delete characterObject.equipment.encumbrance.drag;
    };
    // update caster level check
    if (!characterObject.spells.caster_level_check) {
      // console.log("--------\t\tupdate caster level check");
      characterObject.spells.caster_level_check = {
        current: "",
        misc: "",
        temp: "",
        feat: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: true,
          half_level: false
        }
      };
    };
    // update classes
    if (!characterObject.basics.classes) {
      // console.log("--------\t\tupdate classes");
      characterObject.basics.classes = [{
        classname: "",
        level: "",
        hp: "",
        fortitude: "",
        reflex: "",
        will: "",
        ranks: "",
        bab: ""
      }];
      // move class to classes
      if (characterObject.basics.class != "") {
        characterObject.basics.classes[0].classname = characterObject.basics.class;
      };
      // move level to classes
      if (characterObject.basics.level != "") {
        characterObject.basics.classes[0].level = parseInt(characterObject.basics.level, 10);
        characterObject.basics.level = "";
      };
      // remove con bonus from hp and add it to classes
      if (characterObject.defense.hp.total != "") {
        var conMod = 0;
        if (characterObject.statistics.stats.con.temp_score != "") {
          conMod = Math.floor((parseInt(characterObject.statistics.stats.con.temp_score, 10) - 10) / 2);
        } else {
          conMod = Math.floor((parseInt(characterObject.statistics.stats.con.score, 10) - 10) / 2);
        };
        var conHp = conMod * characterObject.basics.classes[0].level;
        characterObject.basics.classes[0].hp = characterObject.defense.hp.total - conHp;
        characterObject.defense.hp.total = "";
      };
      // move bab
      if (characterObject.offense.base_attack != "") {
        characterObject.basics.classes[0].bab = parseInt(characterObject.offense.base_attack, 10);
        characterObject.offense.base_attack = "";
        characterObject.offense.base_attack_bonuses = "";
      };
      // move base saves
      if (characterObject.defense.fortitude.base != "") {
        characterObject.basics.classes[0].fortitude = characterObject.defense.fortitude.base;
      };
      if (characterObject.defense.reflex.base != "") {
        characterObject.basics.classes[0].reflex = characterObject.defense.reflex.base;
      };
      if (characterObject.defense.will.base != "") {
        characterObject.basics.classes[0].will = characterObject.defense.will.base;
      };
      delete characterObject.basics.class;
    };
    // remove racial save bonuses
    ifRacial("racial", characterObject.defense.fortitude);
    ifRacial("racial", characterObject.defense.reflex);
    ifRacial("racial", characterObject.defense.will);

    function ifRacial(key, object) {
      if (key in object) {
        // console.log("\t\tremove racial save bonuses");
        if (object.racial != "" && !isNaN(object.racial)) {
          // console.log("racial found");
          // console.log(object, object.racial);
          if (object.misc != "" && !isNaN(object.misc)) {
            // console.log("misc found");
            // console.log(object.misc);
            object.misc = object.misc + object.racial;
          } else {
            object.misc = object.racial;
          };
        };
        delete object[key];
      };
    };
    // update armor
    if (typeof characterObject.equipment.armor != "object") {
      // console.log("\t\tupdate armor");
      characterObject.equipment.armor = {
        armor: "",
        check_penalty: "",
        max_dex: "",
        shield: ""
      };
      if (characterObject.equipment.body_slots.armor != "") {
        characterObject.equipment.armor.armor = characterObject.equipment.body_slots.armor;
      };
      if (characterObject.equipment.body_slots.shield != "") {
        characterObject.equipment.armor.shield = characterObject.equipment.body_slots.shield;
      };
      if (characterObject.defense.ac.max_dex != "") {
        characterObject.equipment.armor.max_dex = characterObject.defense.ac.max_dex;
      };
      if (characterObject.defense.ac.check_penalty != "") {
        characterObject.equipment.armor.check_penalty = characterObject.defense.ac.check_penalty;
      };
      delete characterObject.equipment.body_slots.armor;
      delete characterObject.equipment.body_slots.shield;
      delete characterObject.defense.ac.max_dex;
      delete characterObject.defense.ac.check_penalty;
    };
    // update alignment
    if (["Lawful Good", "Lawful Neutral", "Lawful Evil", "Neutral Good", "Neutral", "Neutral Evil", "Chaotic Good", "Chaotic Neutral", "Chaotic Evil"].indexOf(characterObject.basics.alignment) === -1) {
      if (["Lawful Good", "Lawful good", "lawful good", "LG", "Lg", "lg"].indexOf(characterObject.basics.alignment) > -1) {
        characterObject.basics.alignment = "Lawful Good";
      };
      if (["Lawful Neutral", "Lawful neutral", "lawful neutral", "LN", "Ln", "ln"].indexOf(characterObject.basics.alignment) > -1) {
        characterObject.basics.alignment = "Lawful Neutral";
      };
      if (["Lawful Evil", "Lawful evil", "lawful evil", "LE", "Le", "le"].indexOf(characterObject.basics.alignment) > -1) {
        characterObject.basics.alignment = "Lawful Evil";
      };
      if (["Neutral Good", "Neutral good", "neutral good", "NG", "Ng", "ng"].indexOf(characterObject.basics.alignment) > -1) {
        characterObject.basics.alignment = "Neutral Good";
      };
      if (["Neutral", "Neutral", "neutral", "N", "n"].indexOf(characterObject.basics.alignment) > -1) {
        characterObject.basics.alignment = "Neutral";
      };
      if (["Neutral Evil", "Neutral evil", "neutral evil", "NE", "Ne", "ne"].indexOf(characterObject.basics.alignment) > -1) {
        characterObject.basics.alignment = "Neutral Evil";
      };
      if (["Chaotic Good", "Chaotic good", "chaotic good", "CG", "Cg", "cg"].indexOf(characterObject.basics.alignment) > -1) {
        characterObject.basics.alignment = "Chaotic Good";
      };
      if (["Chaotic Neutral", "Chaotic neutral", "chaotic neutral", "CN", "Cn", "cn"].indexOf(characterObject.basics.alignment) > -1) {
        characterObject.basics.alignment = "Chaotic Neutral";
      };
      if (["Chaotic Evil", "Chaotic evil", "chaotic evil", "CE", "Ce", "ce"].indexOf(characterObject.basics.alignment) > -1) {
        characterObject.basics.alignment = "Chaotic Evil";
      };
    };
    // add size object
    if (typeof characterObject.basics.size != "object" || "size_bonus" in characterObject.defense.ac) {
      // console.log("\t\tadd size object");
      var size = characterObject.basics.size;
      if (size == "M" || size == "m" || size == "medium" || size == "Medium" || size != "") {
        size = "Medium";
      } else if (size == "") {
        size = false;
      };
      characterObject.basics.size = {
        category: "",
        size_modifier: 0,
        special_size_modifier: 0,
        size_modifier_fly: 0,
        size_modifier_stealth: 0
      };
      if (size) {
        characterObject.basics.size.category = size;
      };
      delete characterObject.defense.ac.size_bonus;
      delete characterObject.offense.cmb.size;
      delete characterObject.offense.cmd.size;
      delete characterObject.offense.melee_attack.size;
      delete characterObject.offense.ranged_attack.size;
      characterObject.offense.cmb.bonuses.special_size = true;
      characterObject.offense.cmd.bonuses.special_size = true;
      characterObject.offense.melee_attack.bonuses.size = true;
      characterObject.offense.ranged_attack.bonuses.size = true;
      characterObject.skills.fly.bonuses.size_modifier_fly = true;
      characterObject.skills.stealth.bonuses.size_modifier_stealth = true;
    };
    // add initiative object
    if (typeof characterObject.basics.initiative != "object" || typeof characterObject.basics.initiative.bonuses != "object" || !characterObject.basics.initiative.bonuses) {
      // console.log("\t\tadd initiative object");
      characterObject.basics.initiative = {
        misc: "",
        temp: "",
        feat: "",
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
      };
    };
    // add concentration bonus object
    if (typeof characterObject.spells.concentration.bonuses != "object" || !characterObject.spells.concentration.bonuses) {
      // console.log("\t\tadd concentration bonus object");
      characterObject.spells.concentration.bonuses = {
        str_bonus: false,
        dex_bonus: false,
        con_bonus: false,
        int_bonus: false,
        wis_bonus: false,
        cha_bonus: false,
        level: false,
        half_level: false
      };
    };
    // add custom skills array
    if (typeof characterObject.skills.custom == "string" || !characterObject.skills.custom) {
      // console.log("\t\tadd custom skills array");
      characterObject.skills.custom = [];
    };
    // move custom skills to new custom skills
    if (characterObject.skills.custom_1 || characterObject.skills.custom_2 || characterObject.skills.custom_3 || characterObject.skills.custom_4 || characterObject.skills.custom_5 || characterObject.skills.custom_6 || characterObject.skills.custom_7 || characterObject.skills.custom_8) {
      // console.log("\t\tmove custom skills to new custom skills");
      var skillKeys = ["custom_1", "custom_2", "custom_3", "custom_4", "custom_5", "custom_6", "custom_7", "custom_8"];
      for (var i = 0; i < skillKeys.length; i++) {
        if (characterObject.skills[skillKeys[i]].name != "" || characterObject.skills[skillKeys[i]].ranks || characterObject.skills[skillKeys[i]].misc) {
          var newSkill = characterObject.skills[skillKeys[i]];
          characterObject.skills.custom.push(newSkill);
        };
        delete characterObject.skills[skillKeys[i]];
      };
    };
    // add note array
    if (typeof characterObject.notes.character == "string" || typeof characterObject.notes.story == "string") {
      // console.log("\t\tadd note array");
      characterObject.notes.character = [];
      characterObject.notes.story = [];
    };
    // add item array
    if (typeof characterObject.equipment.item == "string" || !characterObject.equipment.item) {
      // console.log("\t\tadd item array");
      characterObject.equipment.item = [];
    };
    // add spell notes
    if (characterObject.spells.book) {
      for (var i in characterObject.spells.book) {
        for (var j in characterObject.spells.book[i]) {
          if (characterObject.spells.book[i][j].length > 0) {
            for (var k in characterObject.spells.book[i][j]) {
              if (typeof characterObject.spells.book[i][j][k].note != "string") {
                // console.log("\t\tadd spell notes");
                characterObject.spells.book[i][j][k].note = "";
              };
            };
          };
        };
      };
    };
    sheet.storeCharacters();
    return characterObject;
  };

  // exposed methods
  return {
    render: render
  };

})();

var selectBlock = (function() {

  function _store(element) {
    var selectBlock = helper.getClosest(element, ".js-select-block");
    var selectBlockDropdown = selectBlock.querySelector(".js-select-block-dropdown");
    var path = selectBlockDropdown.dataset.path;
    var data = selectBlockDropdown.options[selectBlockDropdown.selectedIndex].value;
    if (path) {
      helper.setObject(sheet.getCharacter(), path, data);
    };
  };

  var storeDropdownTimer = null;

  function delayUpdate(element) {
    _store(element);
    sheet.storeCharacters();
    textBlock.render();
    totalBlock.render();
    if (display.state()) {
      display.clear();
      display.render();
    };
  };

  function _focus(element) {
    var selectBlock = helper.getClosest(element, ".js-select-block");
    if (element == document.activeElement) {
      helper.addClass(selectBlock, "is-focus");
    } else {
      helper.removeClass(selectBlock, "is-focus");
    };
  };

  function clear() {
    var all_selectBlock = helper.eA(".js-select-block");
    for (var i = 0; i < all_selectBlock.length; i++) {
      all_selectBlock[i].querySelector(".js-select-block-dropdown").selectedIndex = 0;
    };
  };

  function bind(selectBlock) {
    if (selectBlock) {
      _bind_selectBlock(selectBlock);
    } else {
      var all_selectBlock = helper.eA(".js-select-block");
      for (var i = 0; i < all_selectBlock.length; i++) {
        if (all_selectBlock[i].dataset.clone != "true") {
          _bind_selectBlock(all_selectBlock[i]);
        };
      };
    };
  };

  function _bind_selectBlock(selectBlock) {
    var selectBlockDropdown = selectBlock.querySelector(".js-select-block-dropdown");
    if (selectBlockDropdown) {
      selectBlockDropdown.addEventListener("change", function() {
        clearTimeout(storeDropdownTimer);
        storeDropdownTimer = setTimeout(delayUpdate, 300, this);
      }, false);
    };
  };

  function _render_selectBlock(selectBlock) {
    var selectBlockDropdown = selectBlock.querySelector(".js-select-block-dropdown");
    var path = selectBlockDropdown.dataset.path;
    var selected = selectBlockDropdown.options.selectedIndex;
    if (path) {
      var selection = helper.getObject(sheet.getCharacter(), path);
      helper.setDropdown(selectBlockDropdown, selection);
    };
  };

  function render(selectBlock) {
    if (all_selectBlock) {
      _render_selectBlock(selectBlock);
    } else {
      var all_selectBlock = helper.eA(".js-select-block");
      for (var i = 0; i < all_selectBlock.length; i++) {
        _render_selectBlock(all_selectBlock[i]);
      };
    };
  };

  // exposed methods
  return {
    render: render,
    bind: bind,
    clear: clear
  };

})();

var sheet = (function() {

  var allCharacters = JSON.parse(JSON.stringify([blank.data]));

  var currentCharacterIndex = 0;

  var saveHardCodedCharacters = (function() {
    if (helper.read("allCharacters")) {
      allCharacters = JSON.parse(helper.read("allCharacters"));
    } else if (typeof hardCodedCharacters !== "undefined") {
      allCharacters = JSON.parse(JSON.stringify(hardCodedCharacters.demo())); // for demo load sample characters
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
    if (newCharacter) {
      newCharacter = repair.render(newCharacter);
    };
    var dataToAdd = newCharacter || JSON.parse(JSON.stringify(blank.data));
    allCharacters.push(dataToAdd);
    var newIndex = getAllCharacters().length - 1;
    setIndex(newIndex);
    storeCharacters();
    clear();
    render();
    nav.clear();
    nav.render();
    nav.scrollToTop();
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
      nav.scrollToTop();
      snack.render(helper.truncate(name, 50, true) + " removed.", false, false);
    };
  };

  function all() {
    localStorage.clear();
    prompt.destroy();
    snack.destroy();
    allCharacters = JSON.parse(JSON.stringify(hardCodedCharacters.all()));
    setIndex(0);
    storeCharacters();
    clear();
    render();
    nav.clear();
    nav.render();
    nav.scrollToTop();
    snack.render("All characters restored.", false, false);
  };

  function restore() {
    localStorage.clear();
    prompt.destroy();
    snack.destroy();
    allCharacters = JSON.parse(JSON.stringify(hardCodedCharacters.demo()));
    setIndex(0);
    storeCharacters();
    clear();
    render();
    nav.clear();
    nav.render();
    nav.scrollToTop();
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
    nav.scrollToTop();
    snack.render("All characters cleared.", false, false);
  };

  function _createImportModal() {
    var container = document.createElement("div");
    container.setAttribute("class", "container");
    var row = document.createElement("div");
    row.setAttribute("class", "row");
    var col = document.createElement("div");
    col.setAttribute("class", "col-xs-12");
    var importSelectWrapper = document.createElement("div");
    importSelectWrapper.setAttribute("class", "m-import-select-wrapper");
    var importSelect = document.createElement("div");
    importSelect.setAttribute("class", "m-import-select");
    var input = document.createElement("input");
    input.setAttribute("id", "import-select");
    input.setAttribute("type", "file");
    input.setAttribute("class", "m-import-select-input js-import-select-input");
    var label = document.createElement("label");
    label.setAttribute("tabindex", "1");
    label.setAttribute("for", "import-select");
    label.setAttribute("class", "m-import-select-label button button-icon button-large js-import-select-label");
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
    importSelectWrapper.appendChild(importSelect);
    col.appendChild(message);
    col.appendChild(importSelectWrapper);
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

    // if no JSON file is selected
    if (fileList.length <= 0) {
      snack.render("No file selected.", false, false);
      return false;
    };

    var readFile = new FileReader();
    readFile.onload = function(event) {
      // console.log(event);
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
    var classLevel = classes.getClassLevel(sheet.getCharacter());
    if (characterName != "") {
      fileName = characterName;
    } else {
      fileName = "New character";
    };
    if (classLevel != "") {
      fileName = fileName + ", " + classLevel;
    };
    prompt.render("Export " + characterName, "Download " + characterName + " as a JSON file. This file can later be imported on another deivce.", "Download", false, "data:" + "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(getCharacter()), null, " "), "download", fileName + ".json");
  };

  function render() {
    for (var i = 0; i < allCharacters.length; i++) {
      repair.render(allCharacters[i]);
    };
    stats.render();
    clone.render();
    classes.render();
    inputBlock.render();
    selectBlock.render();
    textareaBlock.render();
    skills.render();
    spells.render();
    encumbrance.render();
    size.render();
    wealth.render();
    totalBlock.render();
    textBlock.render();
    display.render();
  };

  function bind() {
    prompt.bind();
    modal.bind();
    snack.bind();
    stats.bind();
    inputBlock.bind();
    selectBlock.bind();
    textareaBlock.bind();
    clone.bind();
    spells.bind();
    skills.bind();
    encumbrance.bind();
    size.bind();
    totalBlock.bind();
    display.bind();
    card.bind();
    tip.bind();
    events.bind();
    registerServiceWorker.bind();
  };

  function clear() {
    stats.render();
    totalBlock.clear();
    clone.clear();
    textBlock.clear();
    inputBlock.clear();
    selectBlock.clear();
    textareaBlock.clear();
    spells.clear();
    display.clear();
  };

  function switchCharacter(index) {
    if (index >= 0 && index <= getAllCharacters().length) {
      setIndex(index);
      clear();
      render();
      nav.clear();
      nav.render();
      var name = sheet.getCharacter().basics.name;
      snack.render(helper.truncate(name, 50, true) + " now in the game.", false);
      nav.close();
    } else {
      snack.render("No character with that index.", false);
    };
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
    bind: bind,
    switch: switchCharacter
  };

})();

var size = (function() {

  var changeSizeTimer = null;

  function bind(input) {
    var size = helper.e(".js-size");
    var selectBlockDropdown = size.querySelector(".js-select-block-dropdown");
    selectBlockDropdown.addEventListener("change", function() {
      clearTimeout(changeSizeTimer);
      changeSizeTimer = setTimeout(update, 300, this);
    }, false);
  };

  function update() {
    render();
    totalBlock.render();
    textBlock.render();
    if (display.state()) {
      display.clear();
      display.render();
    };
  };

  function render() {
    var size = helper.e(".js-size");
    var selectBlockDropdown = size.querySelector(".js-select-block-dropdown");
    var index = selectBlockDropdown.selectedIndex;
    var object = _create_sizeObject(index);
    helper.setObject(sheet.getCharacter(), "basics.size.size_modifier", object.size_modifier);
    helper.setObject(sheet.getCharacter(), "basics.size.special_size_modifier", object.special_size_modifier);
    helper.setObject(sheet.getCharacter(), "basics.size.size_modifier_fly", object.size_modifier_fly);
    helper.setObject(sheet.getCharacter(), "basics.size.size_modifier_stealth", object.size_modifier_stealth);
    sheet.storeCharacters();
  };

  function _create_sizeObject(index) {
    var allSize = {};
    var all_size_modifier = [0, 8, 4, 2, 1, 0, -1, -2, -4, -8];
    var all_special_size_modifier = [0, -8, -4, -2, -1, 0, 1, 2, 4, 8];
    var all_size_modifier_fly = [0, 8, 6, 4, 2, 0, -2, -4, -6, -8];
    var all_size_modifier_stealth = [0, 16, 12, 8, 4, 0, -4, -8, -12, -16];
    allSize.size_modifier = all_size_modifier[index];
    allSize.special_size_modifier = all_special_size_modifier[index];
    allSize.size_modifier_fly = all_size_modifier_fly[index];
    allSize.size_modifier_stealth = all_size_modifier_stealth[index];
    return allSize;
  };

  function _create_encumbranceObject(str) {};

  // exposed methods
  return {
    bind: bind,
    render: render
  };

})();

var skills = (function() {

  var renderTimer = null;

  function bind() {
    var skillSpentRanksInput = helper.e(".js-skill-spent-ranks-input");
    var all_inputBlockFieldRanks = helper.eA(".js-input-block-field-ranks");
    var skillSpentRanksTotal = helper.e(".js-skill-spent-ranks-total");
    skillSpentRanksInput.addEventListener("change", function() {
      _store(skillSpentRanksInput, skillSpentRanksInput.checked);
      _store(skillSpentRanksTotal, parseInt(skillSpentRanksTotal.innerHTML, 10) || 0);
      _render_rankTotal();
    }, false);
    for (var i = 0; i < all_inputBlockFieldRanks.length; i++) {
      all_inputBlockFieldRanks[i].addEventListener("input", function() {
        clearTimeout(renderTimer);
        renderTimer = setTimeout(function() {
          _store(skillSpentRanksTotal, parseInt(skillSpentRanksTotal.innerHTML, 10) || 0);
          _render_rankTotal();
        }, 400, this);
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
    var skillSpentRanksInput = helper.e(".js-skill-spent-ranks-input");
    var path = skillSpentRanksInput.dataset.path;
    var state = helper.getObject(sheet.getCharacter(), path);
    skillSpentRanksInput.checked = state;
  };

  function _render_rankTotal() {
    var all_skills = helper.getObject(sheet.getCharacter(), "skills");
    var all_customSkills = helper.getObject(sheet.getCharacter(), "skills.custom");
    var skillSpentRanksTotal = helper.e(".js-skill-spent-ranks-total");
    var ranks = [];
    var ranksTotal;
    for (var i in all_skills) {
      ranks.push(parseInt(all_skills[i].ranks, 10) || 0);
    };
    if (helper.getObject(sheet.getCharacter(), "skills.ranks.spent.include_custom")) {
      for (var i = 0; i < all_customSkills.length; i++) {
        ranks.push(parseInt(all_customSkills[i].ranks, 10) || 0);
      };
    };
    ranksTotal = ranks.reduce(function(a, b) {
      return a + b;
    });
    skillSpentRanksTotal.textContent = ranksTotal;
  };

  // exposed methods
  return {
    bind: bind,
    render: render
  };

})();

var snack = (function() {

  var previousSnackBar = null;

  function destroy() {
    var all_snackBar = helper.eA(".js-snack-bar");
    for (var i = 0; i < all_snackBar.length; i++) {
      all_snackBar[i].destroy();
    };
  };

  function render(message, actionText, action, destroyDelay, postSnack) {

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
      var destroyAction = snackBar.destroy.bind(snackBar);
      var actionButton = document.createElement("a");
      actionButton.setAttribute("class", "button button-medium button-tertiary m-snack-bar-button");
      if (typeof actionText == "boolean") {
        helper.addClass(actionButton, "button-icon");
        var icon = document.createElement("span");
        icon.setAttribute("class", "icon icon-close");
        actionButton.appendChild(icon);
      } else if (typeof actionText == "string") {
        actionButton.textContent = actionText;
      };
      actionButton.addEventListener("click", destroyAction);
      snackBar.appendChild(actionButton);
    };
    if (action) {
      actionButton.addEventListener("click", function(event) {
        event.stopPropagation();
        event.preventDefault();
        action();
      }, false);
    };

    snackBar.addEventListener("transitionend", function(event, elapsed) {
      if (event.propertyName === "opacity" && this.style.opacity == 0) {
        this.parentElement.removeChild(this);
        _checkBodyForSnack();
        if (postSnack) {
          postSnack();
        };
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
    }.bind(snackBar), destroyDelay || 4000);

    body.appendChild(snackBar);
    getComputedStyle(snackBar).opacity;
    getComputedStyle(snackBar).transform;
    getComputedStyle(snackBar).margin;
    helper.addClass(snackBar, "is-reveal");
    _checkBodyForSnack();

  };

  function bind() {
    window.addEventListener("keydown", function(event) {
      if (event.keyCode == 27) {
        destroy();
      };
    }, false);
  };

  function _checkBodyForSnack() {
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
  };

})();

var spells = (function() {

  function bind() {
    var spellPrepareButton = helper.e(".js-spell-prepare");
    var spellUnprepareButton = helper.e(".js-spell-unprepare");
    var spellCastButton = helper.e(".js-spell-cast");
    var spellActiveButton = helper.e(".js-spell-active");
    var spellRemoveButton = helper.e(".js-spell-remove");
    var spellReset = helper.e(".js-spell-reset");
    var spellSort = helper.e(".js-spell-sort");
    var all_newSpellAdd = helper.eA(".js-new-spell-add");
    for (var i = 0; i < all_newSpellAdd.length; i++) {
      var spellBook = helper.getClosest(all_newSpellAdd[i], ".js-spell-book");
      var newSpellField = spellBook.querySelector(".js-new-spell-field");
      all_newSpellAdd[i].addEventListener("click", function() {
        _addNewSpell(helper.getClosest(this, ".js-spell-book").querySelector(".js-new-spell-field"));
        sheet.storeCharacters();
      }, false);
      newSpellField.addEventListener("keypress", function() {
        _addNewSpellOnEnter(this);
        sheet.storeCharacters();
      }, false);
    };
    spellPrepareButton.addEventListener("click", function() {
      _change_spellState(this);
    }, false);
    spellUnprepareButton.addEventListener("click", function() {
      _change_spellState(this);
    }, false);
    spellCastButton.addEventListener("click", function() {
      _change_spellState(this);
    }, false);
    spellActiveButton.addEventListener("click", function() {
      _change_spellState(this);
    }, false);
    spellRemoveButton.addEventListener("click", function() {
      _change_spellState(this);
    }, false);
    spellReset.addEventListener("click", function() {
      prompt.render("Reset all spells?", "All prepared, cast and active spells will be set to normal states.", "Reset", _resetAllSpells);
    }, false);
    spellSort.addEventListener("click", function() {
      prompt.render("Sort Spells", "Sort all Spells in alphabetical order?", "Sort", _sortAllSpells);
    }, false);
  };

  function _resetAllSpells() {
    var all_spells = helper.eA(".js-spell");
    if (all_spells.length > 0) {
      for (var i in sheet.getCharacter().spells.book) {
        for (var j in sheet.getCharacter().spells.book[i]) {
          for (var k in sheet.getCharacter().spells.book[i][j]) {
            sheet.getCharacter().spells.book[i][j][k].prepared = 0;
            sheet.getCharacter().spells.book[i][j][k].cast = 0;
            sheet.getCharacter().spells.book[i][j][k].active = false;
            // console.log(sheet.getCharacter().spells.book[i][j][k]);
          };
        };
      };
      clear();
      render();
      sheet.storeCharacters();
      snack.render("All spells reset.");
    };
  };

  function _sortAllSpells() {
    for (var i in sheet.getCharacter().spells.book) {
      for (var j in sheet.getCharacter().spells.book[i]) {
        helper.sortObject(sheet.getCharacter().spells.book[i][j], "name");
      };
    };
    sheet.storeCharacters();
    clear();
    render();
    snack.render("All spells alphabetically sorted.");
  };

  function _addNewSpell(element) {
    var spellLevel = helper.getClosest(element, ".js-spell-book").dataset.spellLevel;
    var spellName = element.value;
    var newSpell = new _create_spellObject(spellName, 0, false, 0);
    // if input value is not empty
    if (spellName !== "") {
      // add spell to current character known spells
      sheet.getCharacter().spells.book[spellLevel]["level_" + spellLevel].push(newSpell);
      var newSpellIndex = sheet.getCharacter().spells.book[spellLevel]["level_" + spellLevel].length - 1;
      _render_spell(sheet.getCharacter().spells.book[spellLevel]["level_" + spellLevel][newSpellIndex], spellLevel, newSpellIndex);
      // clear input field
      element.value = "";
    };
  };

  function _addNewSpellOnEnter(element) {
    var keystroke = event.keyCode || event.which;
    if (keystroke == 13) {
      _addNewSpell(element);
    };
  };

  function _bind_spellKnownItem(element) {
    element.addEventListener("click", function() {
      _update_spellObject(this);
      _update_spellButton(this);
      _update_spellControls(this);
      _checkSpellState();
      _castFireball(this);
    }, false);
  };

  function _castFireball(button) {
    var spellLevel = parseInt(button.dataset.spellLevel, 10);
    var spellCount = parseInt(button.dataset.spellCount, 10);
    var spellRoot = helper.getClosest(button, ".js-spells") || helper.e(".js-spells");
    var spellState = spellRoot.dataset.spellState;
    var spellObject = sheet.getCharacter().spells.book[spellLevel]["level_" + spellLevel][spellCount];

    if (spellState == "cast") {
      var fireballName = ["Fireball", "fireball", "Fire ball", "fire Ball", "fire ball", "Fire Ball", "FIREBALL", "FIREBALL!", "FIREBALL!!", "FIREBALL!!!", "FIREBALL!!!!"];
      if (fireballName.indexOf(spellObject.name) > -1) {
        // easter egg fireball!
        fireball.render();
      };
    };

  };

  function _update_spellControls(button, force) {

    var spellLevel = parseInt(button.dataset.spellLevel, 10);
    var spellCount = parseInt(button.dataset.spellCount, 10);
    var spellRoot = helper.getClosest(button, ".js-spells") || helper.e(".js-spells");
    var spellState = spellRoot.dataset.spellState;
    var spellObject = sheet.getCharacter().spells.book[spellLevel]["level_" + spellLevel][spellCount];

    function _render_count(spellControl) {
      var currentPreparedCount = parseInt(spellControl.dataset.spellPrepared, 10);
      var currentCastCount = parseInt(spellControl.dataset.spellCast, 10);
      var spellControlPreparedCount = spellControl.querySelector(".js-spell-control-prepared-count");
      var spellControlCastCount = spellControl.querySelector(".js-spell-control-cast-count");
      spellControlPreparedCount.textContent = currentPreparedCount;
      spellControlCastCount.textContent = currentCastCount;
    };

    function _store_data(spellControl, action, type) {
      var newCount;
      var currentActive = spellControl.dataset.spellActive;
      var currentPreparedCount = parseInt(spellControl.dataset.spellPrepared, 10);
      var currentCastCount = parseInt(spellControl.dataset.spellCast, 10);
      if (type == "prepared") {
        if (action == "plus" && currentPreparedCount < 50) {
          spellControl.dataset.spellPrepared = currentPreparedCount + 1;
        } else if (action == "minus" && currentPreparedCount > 0) {
          spellControl.dataset.spellPrepared = currentPreparedCount - 1;
        } else if (action == "clear" && currentPreparedCount > 0) {
          spellControl.dataset.spellPrepared = 0;
        };
        if (parseInt(spellControl.dataset.spellCast, 10) > parseInt(spellControl.dataset.spellPrepared, 10)) {
          spellControl.dataset.spellCast = parseInt(spellControl.dataset.spellPrepared, 10);
        };
      };
      if (type == "cast") {
        if (action == "plus" && currentCastCount < 50) {
          spellControl.dataset.spellCast = currentCastCount + 1;
        } else if (action == "minus" && currentCastCount > 0) {
          spellControl.dataset.spellCast = currentCastCount - 1;
        } else if (action == "clear" && currentCastCount > 0) {
          spellControl.dataset.spellCast = 0;
        };
        if (parseInt(spellControl.dataset.spellPrepared, 10) < parseInt(spellControl.dataset.spellCast, 10)) {
          spellControl.dataset.spellPrepared = parseInt(spellControl.dataset.spellCast, 10);
        };
      };
      if (type == "active" && action == "toggle") {
        if (currentActive == "true") {
          spellControl.dataset.spellActive = false;
        } else {
          spellControl.dataset.spellActive = true;
        };
      };
    };

    function _update_spellObject(spellControl) {
      var spellLevel = parseInt(spellControl.dataset.spellLevel, 10);
      var spellCount = parseInt(spellControl.dataset.spellCount, 10);
      var spellObject = sheet.getCharacter().spells.book[spellLevel]["level_" + spellLevel][spellCount];
      if (spellControl.dataset.spellActive == "true") {
        spellObject.active = true;
      } else {
        spellObject.active = false;
      };
      spellObject.prepared = parseInt(spellControl.dataset.spellPrepared, 10);
      spellObject.cast = parseInt(spellControl.dataset.spellCast, 10);
      spellObject.name = spellControl.querySelector(".js-spell-control-input-name").value;
      spellObject.note = spellControl.querySelector(".js-spell-control-textarea-note").innerHTML;
      if (spellObject.note == " " || spellObject.note == "&nbsp;" || spellObject.note == "<br/>" || spellObject.note == "<br>") {
        spellObject.note = "";
      };
    };

    function _create_editBoxItem(size, child) {
      var editBoxItem = document.createElement("div");
      editBoxItem.setAttribute("class", "m-edit-box-item-" + size);
      if (child) {
        editBoxItem.appendChild(child);
      };
      return editBoxItem;
    };

    function _create_spellControlModal() {
      var spellControl = document.createElement("div");
      spellControl.setAttribute("class", "m-spell-control js-spell-control");
      spellControl.setAttribute("data-spell-level", spellLevel);
      spellControl.setAttribute("data-spell-count", spellCount);
      spellControl.setAttribute("data-spell-name", spellObject.name);
      spellControl.setAttribute("data-spell-active", spellObject.active);
      spellControl.setAttribute("data-spell-prepared", spellObject.prepared);
      spellControl.setAttribute("data-spell-cast", spellObject.cast);

      var nameEditBox = document.createElement("div");
      nameEditBox.setAttribute("class", "m-edit-box m-edit-box-indent m-edit-box-head-small");
      var nameEditBoxHead = document.createElement("div");
      nameEditBoxHead.setAttribute("class", "m-edit-box-head");
      var nameEditBoxHeadTitle = document.createElement("h2");
      nameEditBoxHeadTitle.setAttribute("class", "m-edit-box-title");
      nameEditBoxHeadTitle.textContent = "Name";
      var nameEditBoxBody = document.createElement("div");
      nameEditBoxBody.setAttribute("class", "m-edit-box-body");
      var nameEditBoxContent = document.createElement("div");
      nameEditBoxContent.setAttribute("class", "m-edit-box-content m-edit-box-content-margin-large m-edit-box-content-nowrap");
      var nameEditBoxBodyInput = document.createElement("input");
      nameEditBoxBodyInput.setAttribute("class", "js-spell-control-input-name");
      nameEditBoxBodyInput.setAttribute("type", "text");
      nameEditBoxBodyInput.setAttribute("tabindex", "1");
      nameEditBoxBodyInput.value = spellObject.name;

      nameEditBoxContent.appendChild(_create_editBoxItem("max", nameEditBoxBodyInput));
      nameEditBoxBody.appendChild(nameEditBoxContent);
      nameEditBoxHead.appendChild(nameEditBoxHeadTitle);
      nameEditBox.appendChild(nameEditBoxHead);
      nameEditBox.appendChild(nameEditBoxBody);

      var preparedEditBox = document.createElement("div");
      preparedEditBox.setAttribute("class", "m-edit-box m-edit-box-indent m-edit-box-head-small");
      var preparedEditBoxHead = document.createElement("div");
      preparedEditBoxHead.setAttribute("class", "m-edit-box-head");
      var preparedEditBoxHeadTitle = document.createElement("h2");
      preparedEditBoxHeadTitle.setAttribute("class", "m-edit-box-title");
      preparedEditBoxHeadTitle.textContent = "Prepared";
      var preparedEditBoxBody = document.createElement("div");
      preparedEditBoxBody.setAttribute("class", "m-edit-box-body");
      var preparedEditBoxContent = document.createElement("div");
      preparedEditBoxContent.setAttribute("class", "m-edit-box-content m-edit-box-content-margin-large m-edit-box-content-nowrap");
      var preparedEditBoxGroup = document.createElement("div");
      preparedEditBoxGroup.setAttribute("class", "m-edit-box-item m-edit-box-group-control-set");
      var preparedCount = document.createElement("p");
      preparedCount.setAttribute("class", "m-edit-box-total js-spell-control-prepared-count");
      preparedCount.textContent = spellObject.prepared;
      var preparedPlus = document.createElement("button");
      preparedPlus.setAttribute("class", "u-inline-with-input button button-large button-thin button-icon");
      preparedPlus.setAttribute("tabindex", "1");
      var preparedPlusIcon = document.createElement("span");
      preparedPlusIcon.setAttribute("class", "icon-add");
      preparedPlus.addEventListener("click", function() {
        _store_data(spellControl, "plus", "prepared");
        _render_count(spellControl);
      }, false);
      var preparedMinus = document.createElement("button");
      preparedMinus.setAttribute("class", "u-inline-with-input button button-large button-thin button-icon");
      preparedMinus.setAttribute("tabindex", "1");
      var preparedMinusIcon = document.createElement("span");
      preparedMinusIcon.setAttribute("class", "icon-remove");
      preparedMinus.addEventListener("click", function() {
        _store_data(spellControl, "minus", "prepared");
        _render_count(spellControl);
      }, false);
      var preparedClear = document.createElement("button");
      preparedClear.setAttribute("class", "u-inline-with-input button button-large button-thin button-icon");
      preparedClear.setAttribute("tabindex", "1");
      var preparedClearIcon = document.createElement("span");
      preparedClearIcon.setAttribute("class", "icon-close");
      preparedClear.addEventListener("click", function() {
        _store_data(spellControl, "clear", "prepared");
        _render_count(spellControl);
      }, false);

      preparedMinus.appendChild(preparedMinusIcon);
      preparedPlus.appendChild(preparedPlusIcon);
      preparedClear.appendChild(preparedClearIcon);

      preparedEditBoxGroup.appendChild(_create_editBoxItem("button-large", preparedMinus));
      preparedEditBoxGroup.appendChild(_create_editBoxItem("max", preparedCount));
      preparedEditBoxGroup.appendChild(_create_editBoxItem("button-large", preparedPlus));
      preparedEditBoxContent.appendChild(preparedEditBoxGroup);
      preparedEditBoxContent.appendChild(_create_editBoxItem("button-large", preparedClear));
      preparedEditBoxBody.appendChild(preparedEditBoxContent);
      preparedEditBoxHead.appendChild(preparedEditBoxHeadTitle);
      preparedEditBox.appendChild(preparedEditBoxHead);
      preparedEditBox.appendChild(preparedEditBoxBody);

      var castEditBox = document.createElement("div");
      castEditBox.setAttribute("class", "m-edit-box m-edit-box-indent m-edit-box-head-small");
      var castEditBoxHead = document.createElement("div");
      castEditBoxHead.setAttribute("class", "m-edit-box-head");
      var castEditBoxHeadTitle = document.createElement("h2");
      castEditBoxHeadTitle.setAttribute("class", "m-edit-box-title");
      castEditBoxHeadTitle.textContent = "Cast";
      var castEditBoxBody = document.createElement("div");
      castEditBoxBody.setAttribute("class", "m-edit-box-body");
      var castEditBoxContent = document.createElement("div");
      castEditBoxContent.setAttribute("class", "m-edit-box-content m-edit-box-content-margin-large m-edit-box-content-nowrap");
      var castEditBoxGroup = document.createElement("div");
      castEditBoxGroup.setAttribute("class", "m-edit-box-item m-edit-box-group-control-set");
      var castCount = document.createElement("p");
      castCount.setAttribute("class", "m-edit-box-total js-spell-control-cast-count");
      castCount.textContent = spellObject.cast;
      var castPlus = document.createElement("button");
      castPlus.setAttribute("class", "u-inline-with-input button button-large button-thin button-icon");
      castPlus.setAttribute("tabindex", "1");
      var castPlusIcon = document.createElement("span");
      castPlusIcon.setAttribute("class", "icon-add");
      castPlus.addEventListener("click", function() {
        _store_data(spellControl, "plus", "cast");
        _render_count(spellControl);
      }, false);
      var castMinus = document.createElement("button");
      castMinus.setAttribute("class", "u-inline-with-input button button-large button-thin button-icon");
      castMinus.setAttribute("tabindex", "1");
      var castMinusIcon = document.createElement("span");
      castMinusIcon.setAttribute("class", "icon-remove");
      castMinus.addEventListener("click", function() {
        _store_data(spellControl, "minus", "cast");
        _render_count(spellControl);
      }, false);
      var castClear = document.createElement("button");
      castClear.setAttribute("class", "u-inline-with-input button button-large button-thin button-icon");
      castClear.setAttribute("tabindex", "1");
      var castClearIcon = document.createElement("span");
      castClearIcon.setAttribute("class", "icon-close");
      castClear.addEventListener("click", function() {
        _store_data(spellControl, "clear", "cast");
        _render_count(spellControl);
      }, false);

      castMinus.appendChild(castMinusIcon);
      castPlus.appendChild(castPlusIcon);
      castClear.appendChild(castClearIcon);

      castEditBoxGroup.appendChild(_create_editBoxItem("button-large", castMinus));
      castEditBoxGroup.appendChild(_create_editBoxItem("max", castCount));
      castEditBoxGroup.appendChild(_create_editBoxItem("button-large", castPlus));
      castEditBoxContent.appendChild(castEditBoxGroup);
      castEditBoxContent.appendChild(_create_editBoxItem("button-large", castClear));
      castEditBoxBody.appendChild(castEditBoxContent);
      castEditBoxHead.appendChild(castEditBoxHeadTitle);
      castEditBox.appendChild(castEditBoxHead);
      castEditBox.appendChild(castEditBoxBody);

      var activeEditBox = document.createElement("div");
      activeEditBox.setAttribute("class", "m-edit-box m-edit-box-indent m-edit-box-head-small");
      var activeEditBoxHead = document.createElement("div");
      activeEditBoxHead.setAttribute("class", "m-edit-box-head");
      var activeEditBoxHeadTitle = document.createElement("h2");
      activeEditBoxHeadTitle.setAttribute("class", "m-edit-box-title");
      activeEditBoxHeadTitle.textContent = "Active";
      var activeEditBoxBody = document.createElement("div");
      activeEditBoxBody.setAttribute("class", "m-edit-box-body");
      var activeEditBoxContent = document.createElement("div");
      activeEditBoxContent.setAttribute("class", "m-edit-box-content m-edit-box-content-margin-large m-edit-box-content-nowrap");
      var activeCheck = document.createElement("div");
      activeCheck.setAttribute("class", "m-check-block");
      var activeInput = document.createElement("input");
      activeInput.setAttribute("type", "checkbox");
      activeInput.setAttribute("id", "spell-active");
      activeInput.setAttribute("class", "m-check-block-check js-spell-control-active");
      activeInput.setAttribute("tabindex", "1");
      activeInput.checked = spellObject.active;
      activeInput.addEventListener("change", function() {
        _store_data(spellControl, "toggle", "active");
        _render_count(spellControl);
      }, false);
      var activeIcon = document.createElement("span");
      activeIcon.setAttribute("class", "m-check-block-check-icon");

      activeCheck.appendChild(activeInput);
      activeCheck.appendChild(activeIcon);
      activeEditBoxContent.appendChild(_create_editBoxItem("button-large", activeCheck));
      activeEditBoxBody.appendChild(activeEditBoxContent);
      activeEditBoxHead.appendChild(activeEditBoxHeadTitle);
      activeEditBox.appendChild(activeEditBoxHead);
      activeEditBox.appendChild(activeEditBoxBody);

      var noteEditBox = document.createElement("div");
      noteEditBox.setAttribute("class", "m-edit-box m-edit-box-indent m-edit-box-head-small");
      var noteEditBoxHead = document.createElement("div");
      noteEditBoxHead.setAttribute("class", "m-edit-box-head");
      var noteEditBoxHeadTitle = document.createElement("h2");
      noteEditBoxHeadTitle.setAttribute("class", "m-edit-box-title");
      noteEditBoxHeadTitle.textContent = "Spell Notes";
      var noteEditBoxBody = document.createElement("div");
      noteEditBoxBody.setAttribute("class", "m-edit-box-body");
      var noteEditBoxContent = document.createElement("div");
      noteEditBoxContent.setAttribute("class", "m-edit-box-content m-edit-box-content-margin-large m-edit-box-content-nowrap");
      var noteTextarea = document.createElement("div");
      noteTextarea.setAttribute("class", "m-textarea-block-field textarea textarea-large u-full-width js-spell-control-textarea-note");
      noteTextarea.setAttribute("contenteditable", "true");
      noteTextarea.setAttribute("tabindex", "1");
      noteTextarea.innerHTML = spellObject.note;
      noteTextarea.addEventListener("paste", function(event) {
        helper.pasteStrip(event);
      });

      noteEditBoxContent.appendChild(_create_editBoxItem("max", noteTextarea));
      noteEditBoxBody.appendChild(noteEditBoxContent);
      noteEditBoxHead.appendChild(noteEditBoxHeadTitle);
      noteEditBox.appendChild(noteEditBoxHead);
      noteEditBox.appendChild(noteEditBoxBody);

      spellControl.appendChild(nameEditBox);
      spellControl.appendChild(preparedEditBox);
      spellControl.appendChild(castEditBox);
      spellControl.appendChild(activeEditBox);
      spellControl.appendChild(noteEditBox);

      return spellControl;
    };

    if (spellState == "false" || force) {
      var modalContent = _create_spellControlModal();

      modal.render(spellObject.name, modalContent, "Save", function() {
        var spellSection = helper.e(".js-section-spells");
        _update_spellObject(this);
        _update_spellButton(button, true);
        sheet.storeCharacters();
        display.clear(spellSection);
        display.render(spellSection);
      }.bind(modalContent));
    };

  };

  function _update_spellButton(button, force) {
    var spellLevel = parseInt(button.dataset.spellLevel, 10);
    var spellCount = parseInt(button.dataset.spellCount, 10);
    var spellRoot = helper.getClosest(button, ".js-spells") || helper.e(".js-spells");
    var spellName = button.querySelector(".js-spell-name");
    var spellMarks = button.querySelector(".js-spell-marks");
    var spellActive = button.querySelector(".js-spell-active");
    var spellState = spellRoot.dataset.spellState;
    var spellObject = sheet.getCharacter().spells.book[spellLevel]["level_" + spellLevel][spellCount];
    if (spellState == "prepare" || spellState == "unprepare" || spellState == "cast" || spellState == "active" || force) {
      if (spellMarks.lastChild) {
        while (spellMarks.lastChild) {
          spellMarks.removeChild(spellMarks.lastChild);
        };
      };
      if (spellActive.lastChild) {
        while (spellActive.lastChild) {
          spellActive.removeChild(spellActive.lastChild);
        };
      };
      if (spellObject.prepared > 0) {
        for (var i = 0; i < spellObject.prepared; i++) {
          var preparedIcon = document.createElement("span");
          preparedIcon.setAttribute("class", "icon-radio-button-checked js-spell-mark-checked");
          spellMarks.insertBefore(preparedIcon, spellMarks.firstChild);
        };
      };
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
      };
      if (spellObject.active) {
        var activeIcon = document.createElement("span");
        activeIcon.setAttribute("class", "icon-play-arrow");
        if (spellObject.active) {
          spellActive.appendChild(activeIcon);
        };
      };
      spellName.textContent = spellObject.name;
    } else if (spellState == "remove") {
      _destroy_spellBook(spellLevel);
      _render_all_spells(sheet.getCharacter().spells.book[spellLevel]["level_" + spellLevel], spellLevel);
    };
  };

  function _update_spellObject(button) {
    var spellRoot = helper.getClosest(button, ".js-spells");
    var spellState = spellRoot.dataset.spellState;
    var spellLevel = parseInt(button.dataset.spellLevel, 10);
    var spellCount = parseInt(button.dataset.spellCount, 10);
    if (spellState == "prepare") {
      if (sheet.getCharacter().spells.book[spellLevel]["level_" + spellLevel][spellCount].prepared < 50) {
        sheet.getCharacter().spells.book[spellLevel]["level_" + spellLevel][spellCount].prepared++;
      };
      // console.log(sheet.getCharacter().spells.book[spellLevel]["level_" + spellLevel][spellCount]);
    } else if (spellState == "unprepare") {
      if (sheet.getCharacter().spells.book[spellLevel]["level_" + spellLevel][spellCount].prepared > 0) {
        sheet.getCharacter().spells.book[spellLevel]["level_" + spellLevel][spellCount].prepared--;
      };
      if (sheet.getCharacter().spells.book[spellLevel]["level_" + spellLevel][spellCount].prepared < sheet.getCharacter().spells.book[spellLevel]["level_" + spellLevel][spellCount].cast) {
        sheet.getCharacter().spells.book[spellLevel]["level_" + spellLevel][spellCount].cast = sheet.getCharacter().spells.book[spellLevel]["level_" + spellLevel][spellCount].prepared;
      };
      // console.log(sheet.getCharacter().spells.book[spellLevel]["level_" + spellLevel][spellCount]);
    } else if (spellState == "cast") {
      if (sheet.getCharacter().spells.book[spellLevel]["level_" + spellLevel][spellCount].cast < 50) {
        sheet.getCharacter().spells.book[spellLevel]["level_" + spellLevel][spellCount].cast++;
      };
      if (sheet.getCharacter().spells.book[spellLevel]["level_" + spellLevel][spellCount].cast > sheet.getCharacter().spells.book[spellLevel]["level_" + spellLevel][spellCount].prepared) {
        sheet.getCharacter().spells.book[spellLevel]["level_" + spellLevel][spellCount].prepared = sheet.getCharacter().spells.book[spellLevel]["level_" + spellLevel][spellCount].cast;
      };
      // console.log(sheet.getCharacter().spells.book[spellLevel]["level_" + spellLevel][spellCount]);
    } else if (spellState == "active") {
      if (sheet.getCharacter().spells.book[spellLevel]["level_" + spellLevel][spellCount].active) {
        sheet.getCharacter().spells.book[spellLevel]["level_" + spellLevel][spellCount].active = false;
      } else {
        sheet.getCharacter().spells.book[spellLevel]["level_" + spellLevel][spellCount].active = true;
      };
      // console.log(sheet.getCharacter().spells.book[spellLevel]["level_" + spellLevel][spellCount]);
    } else if (spellState == "remove") {
      // console.log(sheet.getCharacter().spells.book[spellLevel]["level_" + spellLevel][spellCount]);
      var spellName = sheet.getCharacter().spells.book[spellLevel]["level_" + spellLevel][spellCount].name;
      _store_lastRemovedSpell(spellLevel, spellCount, sheet.getCharacter().spells.book[spellLevel]["level_" + spellLevel][spellCount]);
      sheet.getCharacter().spells.book[spellLevel]["level_" + spellLevel].splice(spellCount, 1);
      snack.render(helper.truncate(spellName, 40, true) + " removed.", "Undo", _restore_lastRemovedSpell, 8000);
    };
    // console.log(sheet.getCharacter().spells.book[spellLevel]["level_" + spellLevel][spellCount]);
    sheet.storeCharacters();
  };

  function _store_lastRemovedSpell(spellLevel, spellCount, spell) {
    var object = {
      spellLevel: spellLevel,
      spellCount: spellCount,
      spell: spell
    };
    helper.store("lastRemovedSpell", JSON.stringify(object));
  };

  function _remove_lastRemovedSpell() {
    helper.remove("lastRemovedSpell");
  };

  function _restore_lastRemovedSpell() {
    var undoData = JSON.parse(helper.read("lastRemovedSpell"));
    _restore_spellObject(undoData.spellLevel, undoData.spellCount, undoData.spell);
    _remove_lastRemovedSpell();
    _checkSpellState();
  };

  function _restore_spellObject(spellLevel, spellCount, spell) {
    sheet.getCharacter().spells.book[spellLevel]["level_" + spellLevel].splice(spellCount, 0, spell);
    _destroy_spellBook(spellLevel);
    _render_all_spells(sheet.getCharacter().spells.book[spellLevel]["level_" + spellLevel], spellLevel);
    sheet.storeCharacters();
  };

  function _change_spellState(button) {
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

    var _normalStateSpellItems = function() {
      for (var i = 0; i < all_spellBookItem.length; i++) {
        helper.removeClass(all_spellBookItem[i], "button-primary");
        helper.removeClass(all_spellBookItem[i], "button-secondary");
      };
    };

    var _activeStateSpellItems = function() {
      for (var i = 0; i < all_spellBookItem.length; i++) {
        helper.addClass(all_spellBookItem[i], "button-secondary");
      };
    };

    var _remove_stateSpellItems = function() {
      for (var i = 0; i < all_spellBookItem.length; i++) {
        helper.addClass(all_spellBookItem[i], "button-primary");
      };
    };

    var _reset_allControls = function() {
      for (var i = 0; i < all_spellStateControls.length; i++) {
        helper.removeClass(all_spellStateControls[i], "is-live");
      };
    };

    // change spell state
    if (spellsFound) {
      if (button.dataset.state != spellRoot.dataset.spellState) {
        spellRoot.dataset.spellState = button.dataset.state;
        _reset_allControls();
        if (button.dataset.state == "prepare" || button.dataset.state == "unprepare" || button.dataset.state == "cast" || button.dataset.state == "active") {
          helper.addClass(button, "is-live");
        };
      } else {
        spellRoot.dataset.spellState = false;
        _reset_allControls();
      };
    };

    // change spells to reflect state
    if (spellRoot.dataset.spellState == "remove") {
      _normalStateSpellItems();
      _remove_stateSpellItems();
      helper.addClass(spellRoot, "is-state-remove");
      helper.addClass(spellRemoveButton, "button-primary");
      helper.removeClass(spellRemoveButton, "button-secondary");
    } else if (spellRoot.dataset.spellState != "false") {
      _activeStateSpellItems();
      helper.removeClass(spellRoot, "is-state-remove");
      helper.removeClass(spellRemoveButton, "button-primary");
      helper.addClass(spellRemoveButton, "button-secondary");
    } else {
      _normalStateSpellItems();
      helper.removeClass(spellRoot, "is-state-remove");
      helper.removeClass(spellRemoveButton, "button-primary");
      helper.addClass(spellRemoveButton, "button-secondary");
    };
  };

  function _checkSpellState() {
    var spellRoot = helper.e(".js-spells");
    var all_spellStateControls = spellRoot.querySelectorAll(".js-spell-state-control");
    var all_spellBookItem = helper.eA(".js-spell");
    var spellRemoveButton = helper.e(".js-spell-remove");
    if (all_spellBookItem.length == 0) {
      helper.removeClass(spellRoot, "is-state-remove");
      for (var i = 0; i < all_spellStateControls.length; i++) {
        helper.removeClass(all_spellStateControls[i], "is-live");
        helper.removeClass(spellRemoveButton, "button-primary");
        helper.addClass(spellRemoveButton, "button-secondary");
      };
      spellRoot.dataset.spellState = "false";
    };
  };

  function _create_spellObject(spellName, spellPrepared, spellActive, spellCast, spellNote) {
    return {
      name: this.name = spellName || "",
      prepared: this.prepared = spellPrepared || 0,
      active: this.active = spellActive || false,
      cast: this.cast = spellCast || 0,
      note: this.note = spellNote || ""
    };
  };

  function delayUpdate() {
    var spellRoot = helper.e(".js-spells");
    var spellState = spellRoot.dataset.spellState;
    if (spellState == "prepare" || spellState == "unprepare" || spellState == "cast" || spellState == "active" || spellState == "remove") {
      sheet.storeCharacters();
    };
    if (display.state()) {
      display.clear();
      display.render();
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
          _render_all_spells(spellsToRender, i);
        };
      };
    };
  };

  function _render_all_spells(array, level) {
    // console.log(array, level);
    // read spells and add them to spell lists
    for (var i = 0; i < array.length; i++) {
      var spellObject = array[i];
      var spellButtonCol = document.createElement("div");
      spellButtonCol.setAttribute("class", "m-spell-col js-spell-col");
      // find spell list to add too
      var knownListToSaveTo = helper.e(".js-spell-book-known-level-" + level);
      // append new spell to spell list
      var spellButton = _create_spellButton(spellObject, level, i);
      spellButtonCol.appendChild(spellButton);
      knownListToSaveTo.appendChild(spellButtonCol);
      _bind_spellKnownItem(spellButton);
    };
  };

  function _render_spell(spellObject, level, spellIndex) {
    // read spell and add them to spell lists
    var spellButtonCol = document.createElement("div");
    spellButtonCol.setAttribute("class", "m-spell-col js-spell-col");
    // find spell list to add too
    var knownListToSaveTo = helper.e(".js-spell-book-known-level-" + level);
    // append new spell to spell list
    var spellButton = _create_spellButton(spellObject, level, spellIndex, true);
    spellButtonCol.appendChild(spellButton);
    knownListToSaveTo.appendChild(spellButtonCol);
    _bind_spellKnownItem(spellButton);
  };

  function _create_spellButton(spellObject, level, index, newSpell) {
    var spellRoot = helper.e(".js-spells");
    var spellButton = document.createElement("button");
    spellButton.setAttribute("data-spell-level", level);
    spellButton.setAttribute("data-spell-count", index);
    spellButton.setAttribute("class", "m-spell button button-medium js-spell");
    spellButton.setAttribute("type", "button");
    spellButton.setAttribute("tabindex", "1");
    if (spellRoot.dataset.spellState == "remove") {
      helper.addClass(spellButton, "button-primary");
    };
    var spellActive = document.createElement("span");
    spellActive.setAttribute("class", "m-spell-active js-spell-active");
    spellButton.appendChild(spellActive);
    var spellNameSpan = document.createElement("span");
    spellNameSpan.setAttribute("class", "m-spell-name js-spell-name");
    spellNameSpan.textContent = spellObject.name;
    spellButton.appendChild(spellNameSpan);
    var spellMarks = document.createElement("span");
    spellMarks.setAttribute("class", "m-spell-marks js-spell-marks");
    spellButton.appendChild(spellMarks);
    if (spellObject.prepared > 0) {
      for (var i = 0; i < spellObject.prepared; i++) {
        var preparedIcon = document.createElement("span");
        preparedIcon.setAttribute("class", "icon-radio-button-checked js-spell-mark-checked");
        spellMarks.insertBefore(preparedIcon, spellMarks.firstChild);
      };
    };
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
    };
    if (spellObject.active) {
      var activeIcon = document.createElement("span");
      activeIcon.setAttribute("class", "icon-play-arrow");
      if (spellActive.children.length > 0) {
        spellActive.firstChild.remove();
      } else {
        spellActive.appendChild(activeIcon);
      };
    };
    var spellRemove = document.createElement("span");
    spellRemove.setAttribute("class", "m-spell-remove js-spell-remove");
    spellButton.appendChild(spellRemove);
    var spellRemoveIcon = document.createElement("span");
    spellRemoveIcon.setAttribute("class", "icon-close");
    spellRemove.appendChild(spellRemoveIcon);
    if (newSpell) {
      var newSpellFlash = document.createElement("span");
      newSpellFlash.setAttribute("class", "m-spell-flash");
      newSpellFlash.addEventListener("animationend", function(event, elapsed) {
        this.remove();
      }.bind(newSpellFlash), false);
      spellButton.appendChild(newSpellFlash);
    };
    return spellButton;
  };

  function _destroy_spellBook(level) {
    var spellBook = helper.e(".js-spell-book-known-level-" + level);
    while (spellBook.lastChild) {
      spellBook.removeChild(spellBook.lastChild);
    };
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
    render: render,
    update: _update_spellControls
  };

})();

var stats = (function() {

  function render() {
    var stats = helper.eA(".js-stats");
    for (var i = 0; i < stats.length; i++) {
      _render_stat(stats[i]);
    };
  };

  function _render_stat(element) {
    var statsScore = element.querySelector(".js-stats-score");
    var statsModifier = element.querySelector(".js-stats-modifier");
    var statsTempScore = element.querySelector(".js-stats-temp-score");
    var statsTempModifier = element.querySelector(".js-stats-temp-modifier");
    _changeModifer(statsScore, statsModifier);
    _changeModifer(statsTempScore, statsTempModifier);
  };

  function _changeModifer(scoreElement, totalElement) {
    var modifier = _calculateModifer(helper.getObject(sheet.getCharacter(), scoreElement.dataset.path));
    var path = totalElement.dataset.path;
    // store the modifier
    helper.setObject(sheet.getCharacter(), path, modifier);
    // add a + if greater than 0
    if (modifier > 0) {
      modifier = "+" + modifier
    };
    // render modifier
    totalElement.textContent = modifier;
  };

  function _calculateModifer(value) {
    var modifier = Math.floor((parseInt(value, 10) - 10) / 2);
    if (isNaN(modifier)) {
      modifier = "";
    };
    return modifier;
  };

  var changeModiferTimer = null;

  function delayUpdate(element) {
    _render_stat(element);
    classes.render();
    textBlock.render();
    totalBlock.render();
    if (display.state()) {
      display.clear();
      display.render();
    };
  };

  function bind() {
    _bind_all_stats();
  };

  function _bind_all_stats() {
    var score = helper.eA(".js-stats-score");
    var tempScore = helper.eA(".js-stats-temp-score");
    for (var i = 0; i < score.length; i++) {
      score[i].addEventListener("input", function() {
        clearTimeout(changeModiferTimer);
        changeModiferTimer = setTimeout(delayUpdate, 350, helper.getClosest(this, ".js-stats"));
      }, false);
    };
    for (var i = 0; i < tempScore.length; i++) {
      tempScore[i].addEventListener("input", function() {
        clearTimeout(changeModiferTimer);
        changeModiferTimer = setTimeout(delayUpdate, 350, helper.getClosest(this, ".js-stats"));
      }, false);
    };
  };

  function get_score(key) {
    var value = 0;
    if (sheet.getCharacter().statistics.stats[key].temp_score != "") {
      value = sheet.getCharacter().statistics.stats[key].temp_score;
    } else {
      value = sheet.getCharacter().statistics.stats[key].score;
    };
    return value;
  };

  function get_mod(key) {
    var value = 0;
    if (sheet.getCharacter().statistics.stats[key].temp_score != "") {
      value = sheet.getCharacter().statistics.stats[key].temp_modifier;
    } else {
      value = sheet.getCharacter().statistics.stats[key].modifier;
    };
    return value;
  };

  // exposed methods
  return {
    render: render,
    bind: bind,
    getMod: get_mod,
    getScore: get_score,
  };

})();

var tabs = (function() {

  function bind() {
    _bind_tabGroup();
    _bind_tabArrow();
  };

  function _bind_tabGroup() {
    var all_tabGroups = helper.eA(".js-tab-group");
    for (var i = 0; i < all_tabGroups.length; i++) {
      var all_tabItem = all_tabGroups[i].querySelectorAll(".js-tab-item");
      for (var j = 0; j < all_tabItem.length; j++) {
        all_tabItem[j].addEventListener("click", function() {
          _switchTabPanel(this);
        }, false);
      };
    };
  };

  function _bind_tabArrow() {
    var all_tabLeft = helper.eA(".js-tab-left");
    var all_tabRight = helper.eA(".js-tab-right");
    for (var i = 0; i < all_tabLeft.length; i++) {
      all_tabLeft[i].addEventListener("click", function() {
        _tabLeftRight(this);
      }, false);
    };
    for (var i = 0; i < all_tabRight.length; i++) {
      all_tabRight[i].addEventListener("click", function() {
        _tabLeftRight(this);
      }, false);
    };
  };

  function _tabLeftRight(arrowButton) {
    var direction;
    var tabGroup = helper.getClosest(arrowButton, ".js-tab-group");
    var tabRow = tabGroup.querySelector(".js-tab-row");
    if (arrowButton.classList.contains("js-tab-left")) {
      direction = "left";
    } else if (arrowButton.classList.contains("js-tab-right")) {
      direction = "right";
    };
    var all_tabItem = tabGroup.querySelectorAll(".js-tab-item");
    var currentIndex;
    var newIndex;
    for (var i = 0; i < all_tabItem.length; i++) {
      if (all_tabItem[i].dataset.tabActive == "true") {
        currentIndex = i;
      };
      helper.removeClass(all_tabItem[i], "is-active");
      all_tabItem[i].dataset.tabActive = false;
    };
    if (direction == "right") {
      newIndex = currentIndex + 1;
      if (newIndex > all_tabItem.length - 1) {
        newIndex = 0;
      };
    } else if (direction == "left") {
      newIndex = currentIndex - 1;
      if (newIndex < 0) {
        newIndex = all_tabItem.length - 1;
      };
    };
    helper.addClass(all_tabItem[newIndex], "is-active");
    all_tabItem[newIndex].dataset.tabActive = true;
    _scrollTabInToView(tabRow, all_tabItem[newIndex]);
    _switchTabPanel(all_tabItem[newIndex]);
  };

  function _scrollTabInToView(tabRow, tab) {
    var tabRowArea = tabRow.getBoundingClientRect();
    var tabArea = tab.getBoundingClientRect();
    if (tabArea.left < tabRowArea.left) {
      var left = tab.offsetLeft;
      tabRow.scrollLeft = left;
    } else if (tabArea.right > tabRowArea.right) {
      var right = Math.ceil(tab.offsetLeft - tabRowArea.width + tabArea.width, 10);
      tabRow.scrollLeft = right;
    };
  };

  function _switchTabPanel(tab) {
    var all_targetToReveal = tab.dataset.tabTarget.split(",");
    var tabGroup = helper.getClosest(tab, ".js-tab-group");
    var tabRow = tabGroup.querySelector(".js-tab-row");
    var all_tabItem = tabGroup.querySelectorAll(".js-tab-item");
    for (var i = 0; i < all_tabItem.length; i++) {
      var all_targetToHide = all_tabItem[i].dataset.tabTarget.split(",");
      for (var j = 0; j < all_targetToHide.length; j++) {
        var target = helper.e("." + all_targetToHide[j]);
        helper.addClass(target, "is-hidden");
      };
      helper.removeClass(all_tabItem[i], "is-active");
      all_tabItem[i].dataset.tabActive = false;
    };
    helper.addClass(tab, "is-active");
    for (var i = 0; i < all_targetToReveal.length; i++) {
      var target = helper.e("." + all_targetToReveal[i]);
      helper.removeClass(target, "is-hidden");
    };
    tab.dataset.tabActive = true;
    _scrollTabInToView(tabRow, tab);
  };

  // function render() {
  //   var all_tabGroup = helper.eA(".js-tab-group");
  //   for (var i = 0; i < all_tabGroup.length; i++) {
  //     var tabRow = all_tabGroup[i].querySelector(".js-tab-row");
  //     if (tabRow.scrollWidth > tabRow.clientWidth) {
  //     var tabLeft = document.createElement("button");
  //     tabLeft.setAttribute("class", "m-tab-arrow button button-tertiary button-icon js-tab-left");
  //     var tabLeftIcon = document.createElement("span");
  //     tabLeftIcon.setAttribute("class", "icon-chevron-left");
  //     tabLeft.appendChild(tabLeftIcon);
  //     tabLeft.addEventListener("click", function() {
  //       _tabLeftRight(this);
  //     }, false);
  //
  //     var tabRight = document.createElement("button");
  //     tabRight.setAttribute("class", "m-tab-arrow button button-tertiary button-icon js-tab-right");
  //     var tabRightIcon = document.createElement("span");
  //     tabRightIcon.setAttribute("class", "icon-chevron-right");
  //     tabRight.appendChild(tabRightIcon);
  //     tabRight.addEventListener("click", function() {
  //       _tabLeftRight(this);
  //     }, false);
  //
  //     all_tabGroup[i].insertBefore(tabLeft, all_tabGroup[i].firstChild);
  //     all_tabGroup[i].insertBefore(tabRight, all_tabGroup[i].lastChild);
  //     };
  //   };
  // };

  // exposed methods
  return {
    bind: bind
  };

})();

var textBlock = (function() {

  function clear() {
    var all_textBlock = helper.eA(".js-text-block");
    for (var i = 0; i < all_textBlock.length; i++) {
      all_textBlock[i].textContent = "";
    };
  };

  function _render_textBlock(textBlock) {
    var path = textBlock.dataset.path;
    var textType = textBlock.dataset.textType;
    var content;
    if (path) {
      content = helper.getObject(sheet.getCharacter(), path);
    };
    if (textType) {
      if (textType == "currency") {
        if (content != "") {
          content = parseFloat(content).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          }) + " GP";
        };
      } else if (textType == "number") {
        if (content != "") {
          content = parseFloat(content).toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          });
        } else {
          content = 0;
        };
      };
    };
    textBlock.textContent = content;
  };

  function render(textBlock) {
    if (textBlock) {
      _render_textBlock(textBlock);
    } else {
      var all_textBlock = helper.eA(".js-text-block");
      for (var i = 0; i < all_textBlock.length; i++) {
        _render_textBlock(all_textBlock[i]);
      };
    };
  };

  // exposed methods
  return {
    render: render,
    clear: clear
  };

})();

var textareaBlock = (function() {

  function _store(element) {
    var textareaBlock = helper.getClosest(element, ".js-textarea-block");
    var textareaBlockField = textareaBlock.querySelector(".js-textarea-block-field");
    var path = textareaBlockField.dataset.path;
    var type = textareaBlockField.dataset.type;
    var data = element.innerHTML;
    if (data == "<div><br></div>" || data == "<br>" || data == "<br><br>" || data == "<br><br><br>") {
      console.log("found");
      data = "";
    };
    if (path) {
      if (textareaBlock.dataset.clone == "true") {
        var pathCloneKey = textareaBlockField.dataset.pathCloneKey;
        var cloneCount = parseInt(textareaBlock.dataset.cloneCount, 10);
        var object = helper.getObject(sheet.getCharacter(), path, cloneCount);
        object[pathCloneKey] = data;
      } else {
        helper.setObject(sheet.getCharacter(), path, data);
      };
    };
  };

  var storeInputTimer = null;

  function delayUpdate(element) {
    _store(element);
    sheet.storeCharacters();
    totalBlock.render();
    if (display.state()) {
      display.clear();
      display.render();
    };
  };

  function _focus(element) {
    var textareaBlock = helper.getClosest(element, ".js-textarea-block");
    if (element == document.activeElement) {
      helper.addClass(textareaBlock, "is-focus");
    } else {
      helper.removeClass(textareaBlock, "is-focus");
    };
  };

  function clear() {
    var all_textareaBlock = helper.eA(".js-textarea-block");
    for (var i = 0; i < all_textareaBlock.length; i++) {
      all_textareaBlock[i].querySelector(".js-textarea-block-field").innerHTML = "";
    };
  };

  function bind(textareaBlock) {
    if (textareaBlock) {
      _bind_textareaBlock(textareaBlock);
    } else {
      var all_textareaBlock = helper.eA(".js-textarea-block");
      for (var i = 0; i < all_textareaBlock.length; i++) {
        if (all_textareaBlock[i].dataset.clone != "true") {
          _bind_textareaBlock(all_textareaBlock[i]);
        };
      };
    };
  };

  function _bind_textareaBlock(textareaBlock) {
    var field = textareaBlock.querySelector(".js-textarea-block-field");
    if (field) {
      field.addEventListener("input", function() {
        clearTimeout(storeInputTimer);
        storeInputTimer = setTimeout(delayUpdate, 300, this);
        sheet.storeCharacters();
      }, false);
      field.addEventListener("focus", function() {
        _focus(this);
      }, false);
      field.addEventListener("blur", function() {
        _store(this);
        _focus(this);
        sheet.storeCharacters();
      }, false);
      field.addEventListener("paste", function(event) {
        helper.pasteStrip(event);
      });
    };
  };

  function _render_textareaBlock(textareaBlock) {
    var textareaBlockField = textareaBlock.querySelector(".js-textarea-block-field");
    var path = textareaBlockField.dataset.path;
    if (path) {
      if (textareaBlock.dataset.clone == "true") {
        // console.log("clone", path);
        var pathCloneKey = textareaBlockField.dataset.pathCloneKey;
        var cloneCount = parseInt(textareaBlock.dataset.cloneCount, 10);
        var object = helper.getObject(sheet.getCharacter(), path, cloneCount);
        textareaBlockField.innerHTML = object[pathCloneKey];
        // console.log("found clone input", path, pathCloneKey, textareaBlock.dataset.cloneCount, textareaBlock);
      } else {
        // console.log("not clone", path);
        var content = helper.getObject(sheet.getCharacter(), path);
        textareaBlockField.innerHTML = content;
      };
    };
  };

  function render(textareaBlock) {
    if (textareaBlock) {
      _render_textareaBlock(textareaBlock);
    } else {
      var all_textareaBlock = helper.eA(".js-textarea-block");
      for (var i = 0; i < all_textareaBlock.length; i++) {
        _render_textareaBlock(all_textareaBlock[i]);
      };
    };
  };

  // exposed methods
  return {
    render: render,
    bind: bind,
    clear: clear
  };

})();

var themeColor = (function() {

  function update() {
    var themeMeta = document.getElementsByTagName("meta");
    if (display.state("all")) {
      for (var i = 0; i < themeMeta.length; i++) {
        if (themeMeta[i].getAttribute("name") == "theme-color") {
          themeMeta[i].setAttribute("content", "#b0002e");
        };
      };
    } else {
      for (var i = 0; i < themeMeta.length; i++) {
        if (themeMeta[i].getAttribute("name") == "theme-color") {
          themeMeta[i].setAttribute("content", "#245689");
        };
      };
    };
  };

  // exposed methods
  return {
    update: update
  };

})();

var tip = (function() {

  function bind(tip) {
    if (tip) {
      _bind_tip(tip);
    } else {
      var all_tip = helper.eA(".js-tip");
      for (var i = 0; i < all_tip.length; i++) {
        if (all_tip[i].dataset.clone != "true") {
          if (all_tip[i].dataset.clone != "true") {
            _bind_tip(all_tip[i]);
          };
        };
      };
    };
  };

  function _bind_tip(tip) {
    var showOn = tip.dataset.tipShowOn;
    if (showOn == "focus") {
      tip.addEventListener("focus", function() {
        render(tip);
      }, false);
      tip.addEventListener("blur", function() {
        destroy();
        clearTimeout(destroyTimer);
        destroyTimer = setTimeout(delayDestroy, 400, this);
      }, false);
    };
    if (showOn == "hover") {
      tip.addEventListener("mouseover", function() {
        render(tip);
      }, false);
      tip.addEventListener("mouseout", function() {
        destroy();
        clearTimeout(destroyTimer);
        destroyTimer = setTimeout(delayDestroy, 400, this);
      }, false);
    };
  };

  function delayDestroy() {
    var all_tipBox = helper.eA(".js-tip-box");
    for (var i = 0; i < all_tipBox.length; i++) {
      if (!all_tipBox[i].classList.contains("is-opaque")) {
        all_tipBox[i].parentElement.removeChild(all_tipBox[i]);
      };
    };
  };

  var destroyTimer = null;

  function destroy() {
    var all_tipBox = helper.eA(".js-tip-box");
    for (var i = 0; i < all_tipBox.length; i++) {
      all_tipBox[i].destroy();
    };
  };

  function render(tip) {
    // console.log(tip.getBoundingClientRect());
    var body = helper.e("body");
    var tipWrapper = document.createElement("div");
    tipWrapper.setAttribute("class", "m-tip js-tip-box is-transparent");
    var tipArrow = document.createElement("span");
    tipArrow.setAttribute("class", "m-tip-arrow");
    tipWrapper.setAttribute("class", "m-tip js-tip-box is-transparent");
    var tipMessage = document.createElement("p");
    tipMessage.setAttribute("class", "m-tip-message");
    tipMessage.textContent = tip.dataset.tipMessage;
    tipWrapper.destroy = function() {
      helper.removeClass(tipWrapper, "is-opaque");
      helper.addClass(tipWrapper, "is-transparent");
      helper.removeClass(tipWrapper, "m-tip-intro");
      helper.addClass(tipWrapper, "m-tip-outro");
    };
    tipWrapper.addEventListener("transitionend", function(event, elapsed) {
      if (event.propertyName === "opacity" && getComputedStyle(this).opacity == 0) {
        this.parentElement.removeChild(this);
      };
    }.bind(tipWrapper), false);

    tipWrapper.appendChild(tipMessage);
    tipWrapper.appendChild(tipArrow);
    body.appendChild(tipWrapper);
    tipWrapper.setAttribute("style", "width: " + parseInt(tipWrapper.getBoundingClientRect().width + 2, 10) + "px;");

    var width = parseInt(tipWrapper.getBoundingClientRect().width + 2);
    var top =
      parseInt(tip.getBoundingClientRect().top, 10) +
      parseInt(pageYOffset, 10) -
      parseInt(tipWrapper.getBoundingClientRect().height, 10) -
      parseInt(getComputedStyle(tipWrapper).marginTop, 10) -
      parseInt(getComputedStyle(tipWrapper).marginBottom, 10);
    var left =
      parseInt(tip.getBoundingClientRect().left, 10) +
      parseInt((tip.getBoundingClientRect().width / 2), 10) -
      parseInt(((width + parseInt(getComputedStyle(tipWrapper).marginLeft, 10) + parseInt(getComputedStyle(tipWrapper).marginRight, 10) + 2) / 2), 10);

    tipWrapper.setAttribute("style", "width: " + width + "px; top: " + top + "px; left: " + left + "px");

    if (!helper.inViewport(tipWrapper)) {
      // console.log(!helper.inViewport(tipWrapper), "outside viewport");

      if (tipWrapper.getBoundingClientRect().left < 10) {
        // console.log("too far left");
        var style = {
          top: tipWrapper.style.top,
          width: tipWrapper.style.width
        };
        tipWrapper.setAttribute("style", "width: " + style.width + "; top: " + style.top + "; left: " + 0 + "px;");
        tipArrow.setAttribute("style", "left: " +
          (
            parseInt(tip.getBoundingClientRect().left, 10) +
            parseInt((tip.getBoundingClientRect().width / 2), 10) -
            parseInt(getComputedStyle(tipWrapper).marginLeft, 10)
          ) +
          "px;");
      } else if (tipWrapper.getBoundingClientRect().right > document.documentElement.clientWidth) {
        // console.log("too far right");
        var style = {
          top: tipWrapper.style.top,
          width: tipWrapper.style.width
        };
        tipWrapper.setAttribute("style", "width: " + style.width + "; top: " + style.top + "; left: " +
          (
            document.documentElement.clientWidth - parseInt((parseInt(tipWrapper.getBoundingClientRect().width, 10) + parseInt(getComputedStyle(tipWrapper).marginLeft, 10) + parseInt(getComputedStyle(tipWrapper).marginRight, 10)), 10)
          ) +
          "px;");
        tipArrow.setAttribute("style", "left: " +
          (-parseInt(tipWrapper.getBoundingClientRect().left, 10) +
            parseInt(tip.getBoundingClientRect().left, 10) +
            (parseInt((tip.getBoundingClientRect().width), 10) / 2)
          ) +
          "px;");
      };
    };

    getComputedStyle(tipWrapper).opacity;
    helper.removeClass(tipWrapper, "is-transparent");
    helper.addClass(tipWrapper, "is-opaque");
    helper.addClass(tipWrapper, "m-tip-intro");
  };

  // exposed methods
  return {
    bind: bind
  };

})();

var totalBlock = (function() {

  function render(totalBlock) {
    if (totalBlock) {
      _render_totalBlock(totalBlock);
    } else {
      _render_all_totalBlock();
    };
  };

  function _render_totalBlock(totalBlock) {
    // console.log("---------------------------------------------------");
    // console.log(totalBlock);
    var _checkValue = function(data) {
      var value;
      if (typeof data == "number") {
        value = data;
      } else if (typeof data == "string") {
        value = parseInt(data, 10) || 0;
      };
      if (isNaN(value)) {
        value = 0;
      };
      return value;
    };
    var _checkClassSkill = function(totalObject) {
      var classSkill;
      if (totalObject.ranks > 0) {
        classSkill = 3;
      } else {
        classSkill = 0;
      };
      return classSkill;
    };
    var _get_externalBonus = function(key, totalObject) {
      var externalBouns;
      if (key == "str_bonus") {
        externalBouns = _checkValue(stats.getMod("str"));
      };
      // if dex data attribute is true
      if (key == "dex_bonus") {
        // if max dex is true
        if (totalObject.bonuses.max_dex) {
          if (sheet.getCharacter().equipment.armor.max_dex < _checkValue(stats.getMod("dex")) && sheet.getCharacter().equipment.armor.max_dex != "") {
            externalBouns = sheet.getCharacter().equipment.armor.max_dex;
          } else {
            externalBouns = _checkValue(stats.getMod("dex"));
          };
        } else {
          externalBouns = _checkValue(stats.getMod("dex"));
        };
      };
      // if con data attribute is true
      if (key == "con_bonus") {
        externalBouns = _checkValue(stats.getMod("con"));
      };
      // if int data attribute is true
      if (key == "int_bonus") {
        externalBouns = _checkValue(stats.getMod("int"));
      };
      // if wis data attribute is true
      if (key == "wis_bonus") {
        externalBouns = _checkValue(stats.getMod("wis"));
      };
      // if cha data attribute is true
      if (key == "cha_bonus") {
        externalBouns = _checkValue(stats.getMod("cha"));
      };
      // if bab data attribute is true
      if (key == "bab") {
        externalBouns = _checkValue(sheet.getCharacter().offense.base_attack);
      };
      // size
      if (key == "size") {
        externalBouns = _checkValue(sheet.getCharacter().basics.size.size_modifier);
      };
      // special size
      if (key == "special_size") {
        externalBouns = _checkValue(sheet.getCharacter().basics.size.special_size_modifier);
      };
      // level
      if (key == "level") {
        externalBouns = _checkValue(sheet.getCharacter().basics.level);
      };
      // half level
      if (key == "half_level") {
        externalBouns = Math.floor(_checkValue(sheet.getCharacter().basics.level) / 2);
      };
      // ac armor
      if (key == "ac_armor") {
        externalBouns = _checkValue(sheet.getCharacter().defense.ac.armor);
      };
      // ac shield
      if (key == "ac_shield") {
        externalBouns = _checkValue(sheet.getCharacter().defense.ac.shield);
      };
      // ac deflect
      if (key == "ac_deflect") {
        externalBouns = _checkValue(sheet.getCharacter().defense.ac.deflect);
      };
      // ac dodge
      if (key == "ac_dodge") {
        externalBouns = _checkValue(sheet.getCharacter().defense.ac.dodge);
      };
      // ac natural
      if (key == "ac_natural") {
        externalBouns = _checkValue(sheet.getCharacter().defense.ac.natural);
      };
      // armor check penalty
      if (key == "check_penalty") {
        externalBouns = _checkValue(sheet.getCharacter().equipment.armor.check_penalty);
      };
      // class skill
      if (key == "class_skill") {
        externalBouns = _checkClassSkill(totalObject);
      };
      // class skill
      if (key == "size_modifier_fly") {
        externalBouns = _checkValue(sheet.getCharacter().basics.size.size_modifier_fly);
      };
      // class skill
      if (key == "size_modifier_stealth") {
        externalBouns = _checkValue(sheet.getCharacter().basics.size.size_modifier_stealth);
      };
      // 10
      if (key == "plus_ten") {
        externalBouns = 10;
      };
      // console.log("\t\t\t", key, externalBouns);
      return externalBouns;
    };
    var _get_totalObject = function(character, totalPath, cloneCount, totalCloneSet) {
      var object;
      // console.log("cloneCount = ", cloneCount);
      // console.log("totalCloneSet = ", totalCloneSet);
      if (totalPath && !isNaN(cloneCount)) {
        // console.log("route ", 1);
        object = helper.getObject(character, totalPath, cloneCount);
      } else if (totalPath && totalCloneSet) {
        // console.log("route ", 2);
        object = helper.getObject(character, totalPath);
      } else if (totalPath) {
        // console.log("route ", 3);
        object = helper.getObject(character, totalPath);
      };
      // console.log(object);
      return object;
    };
    var _get_all_additionSubtractionPaths = function(addOrMinus) {
      if (addOrMinus == "add") {
        if (totalBlock.dataset.totalPathAddition) {
          return totalBlock.dataset.totalPathAddition.split(",");
        } else {
          return false;
        };
      } else if (addOrMinus == "minus"); {
        if (totalBlock.dataset.totalPathSubtraction) {
          return totalBlock.dataset.totalPathSubtraction.split(",");
        } else {
          return false;
        };
      };
    };
    var _addPrefixSuffix = function(grandTotal, totalType) {
      var total;
      if (totalType == "bonus" && grandTotal > 0) {
        total = grandTotal = "+" + grandTotal;
      } else if (totalType == "weight" && parseInt(grandTotal, 10) > 0) {
        total = grandTotal + " lbs";
      } else {
        total = grandTotal;
      };
      return total;
    };
    var _updateCheck = function(check, object) {
      var bonusType = check.dataset.bonusType.replace(/-+/g, "_");
      check.checked = object[bonusType];
    };
    var _updateAllCheck = function(allCheck, totalObject) {
      if (allCheck.length > 0) {
        for (var i = 0; i < allCheck.length; i++) {
          // console.log(totalObject, totalObject.bonuses);
          _updateCheck(allCheck[i], totalObject.bonuses);
          // if (totalObject.length > 0) {
          //   // console.log(totalObject.length);
          //   _updateCheck(allCheck[i], totalObject[0].bonuses);
          // } else {
          //   // console.log(totalObject);
          //   _updateCheck(allCheck[i], totalObject.bonuses);
          // };
        };
      };
    };

    // the total render target
    var totalElement = totalBlock.querySelector(".js-total-block-total");
    // prefix or suffix type
    var totalType = totalBlock.dataset.totalType;
    // total variable location
    var totalPath = totalBlock.dataset.totalPath;
    // is this a clone
    var cloneCount = parseInt(totalBlock.dataset.cloneCount, 10);
    // are we totalling variable from multiple clones
    var totalCloneSet = (totalBlock.dataset.totalCloneSet == "true");
    // check to see if there are total bonuses to include
    var totalBonuses = (totalBlock.dataset.totalBonuses == "true");
    // console.log("bonuses", totalBonuses);
    // are there exposed bonuses with checkboxes
    var all_bonusCheck = totalBlock.querySelectorAll(".js-total-block-bonus-check");
    // the paths to add
    var totalPathAddition = _get_all_additionSubtractionPaths("add");
    // the paths to subtract
    var totalPathSubtraction = _get_all_additionSubtractionPaths("false");

    var totalObject = _get_totalObject(sheet.getCharacter(), totalPath, cloneCount, totalCloneSet);
    // console.log(totalObject);
    var toSum = [];
    var grandTotal;

    _updateAllCheck(all_bonusCheck, totalObject);

    // push all external bonuses to sum array
    if (totalBonuses) {
      for (var key in totalObject.bonuses) {
        // max dex is not a bonus too add or subtract but a value to limit the dex modifier
        if (totalObject.bonuses[key] && key != "max_dex") {
          // console.log("\t\t\t  adding:", key, totalObject.bonuses[key]);
          toSum.push(_get_externalBonus(key, totalObject));
        };
      };
    };

    // if adding
    if (totalPathAddition && totalCloneSet) {
      // if adding a set of clones
      for (var i = 0; i < totalObject.length; i++) {
        for (var j = 0; j < totalPathAddition.length; j++) {
          toSum.push(parseFloat(totalObject[i][totalPathAddition[j]]) || 0);
        };
      };
    } else {
      for (var i = 0; i < totalPathAddition.length; i++) {
        toSum.push(parseInt(totalObject[totalPathAddition[i]], 10) || 0);
      };
    };

    // if subtracting
    if (totalPathSubtraction && totalCloneSet) {
      // if subtracting a set of clones
      for (var i = 0; i < totalObject.length; i++) {
        for (var j = 0; j < totalPathSubtraction.length; j++) {
          toSum.push(parseFloat(-totalObject[i][totalPathSubtraction[j]]) || 0);
        };
      };
    } else {
      for (var i = 0; i < totalPathSubtraction.length; i++) {
        toSum.push(parseInt(-totalObject[totalPathSubtraction[i]], 10) || 0);
      };
    };

    // console.log("\t\t\t", toSum);

    if (toSum.length > 0) {
      grandTotal = toSum.reduce(function(a, b) {
        return a + b;
      });
      // if not an integer
      if (grandTotal != parseInt(grandTotal, 10)) {
        grandTotal = grandTotal.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        });
        // parseFloat(grandTotal).toFixed(2);
      };
    } else {
      grandTotal = 0;
    };

    if (totalObject) {
      // if ("current" in totalObject) {
      totalObject.current = grandTotal;
      // };
    };

    totalElement.textContent = _addPrefixSuffix(grandTotal, totalType);
    // console.log("------------------------------");
  };

  function _render_all_totalBlock() {
    var all_totalBlock = helper.eA(".js-total-block");
    for (var i = 0; i < all_totalBlock.length; i++) {
      _render_totalBlock(all_totalBlock[i]);
    };
  };

  function _bonusTextLable(bonusType) {
    if (bonusType == "str-bonus" || bonusType == "str_bonus") {
      return "STR Bonus";
    } else if (bonusType == "dex-bonus" || bonusType == "dex_bonus") {
      return "DEX Bonus";
    } else if (bonusType == "con-bonus" || bonusType == "con_bonus") {
      return "CON Bonus";
    } else if (bonusType == "int-bonus" || bonusType == "int_bonus") {
      return "INT Bonus";
    } else if (bonusType == "wis-bonus" || bonusType == "wis_bonus") {
      return "WIS Bonus";
    } else if (bonusType == "cha-bonus" || bonusType == "cha_bonus") {
      return "CHA Bonus";
    } else if (bonusType == "bab") {
      return "Base Attack Bonus";
    } else if (bonusType == "size") {
      return "Size Bonus";
    } else if (bonusType == "special_size") {
      return "Special Size Bonus";
    } else if (bonusType == "size_modifier_fly") {
      return "Size Fly Bonus";
    } else if (bonusType == "size_modifier_stealth") {
      return "Size Stealth Bonus";
    } else if (bonusType == "level") {
      return "Level";
    } else if (bonusType == "half-level" || bonusType == "half_level") {
      return "Half Level";
    } else if (bonusType == "plus-ten" || bonusType == "plus_ten") {
      return "Plus 10";
    } else if (bonusType == "ac-armor" || bonusType == "ac_armor") {
      return "Armor Bonus";
    } else if (bonusType == "ac-shield" || bonusType == "ac_shield") {
      return "Shield Bonus";
    } else if (bonusType == "ac-deflect" || bonusType == "ac_deflect") {
      return "Deflect Bonus";
    } else if (bonusType == "ac-dodge" || bonusType == "ac_dodge") {
      return "Dodge Bonus";
    } else if (bonusType == "ac-natural" || bonusType == "ac_natural") {
      return "Natural Armor Bonus";
    } else if (bonusType == "class-skill" || bonusType == "class_skill") {
      return "Class Skill";
    } else if (bonusType == "check-penalty" || bonusType == "check_penalty") {
      return "Armor Check Penalty";
    } else if (bonusType == "max-dex" || bonusType == "max_dex") {
      return "Max Dex Bonus";
    } else {
      return bonusType;
    };
  };

  function _update_totalBlockControls(element) {
    var totalBlock = helper.getClosest(element, ".js-total-block");
    var totalPath = totalBlock.dataset.totalPath;
    var cloneCount = parseInt(totalBlock.dataset.cloneCount, 10);
    // collect all bonuses which should apply to this total block
    var totalBonuses = (totalBlock.dataset.totalBonuses == "true");
    var totalBonusesInclude = false;
    if (totalBonuses) {
      totalBonusesInclude = totalBlock.dataset.totalBonusesInclude.split(",");
    };
    // get the right total object or clone total object
    var object;
    if (totalPath && !isNaN(cloneCount)) {
      object = helper.getObject(sheet.getCharacter(), totalPath, cloneCount);
    } else if (totalPath) {
      object = helper.getObject(sheet.getCharacter(), totalPath);
    };
    // if no bonuses object found
    if (!object.bonuses) {
      object.bonuses = {};
    };
    // if a key is not in the object bonuses add it
    if (totalBonusesInclude.length > 0) {
      for (var i = 0; i < totalBonusesInclude.length; i++) {
        if (!(totalBonusesInclude[i] in object.bonuses)) {
          object.bonuses[totalBonusesInclude[i]] = false;
        };
      };
    };

    // get heading
    var heading = element.dataset.modalHeading || "Bonuses to add to this ability";

    function _update_objectBonuses(totalBlockControls) {
      var storedBonuses = JSON.parse(totalBlockControls.dataset.bonuses);
      object.bonuses = storedBonuses;
    };

    function _store_data(totalBlockControls, input, key) {
      var storedBonuses = JSON.parse(totalBlockControls.dataset.bonuses);
      storedBonuses[key] = input.checked;
      totalBlockControls.dataset.bonuses = JSON.stringify(storedBonuses);
    };

    function _create_check(totalBlockControls, key) {
      var checkBlock = document.createElement("div");
      checkBlock.setAttribute("class", "m-check-block");
      var checkBlockCheck = document.createElement("input");
      checkBlockCheck.setAttribute("class", "m-check-block-check");
      checkBlockCheck.setAttribute("type", "checkbox");
      checkBlockCheck.setAttribute("id", key);
      checkBlockCheck.checked = object.bonuses[key];
      var checkBlockCheckIcon = document.createElement("span");
      checkBlockCheckIcon.setAttribute("class", "m-check-block-check-icon");
      checkBlock.appendChild(checkBlockCheck);
      checkBlock.appendChild(checkBlockCheckIcon);
      checkBlockCheck.addEventListener("change", function() {
        _store_data(totalBlockControls, this, key);
      }, false);
      return checkBlock;
    };

    function _create_checkLabel(text, key) {
      var editBoxText = document.createElement("label");
      editBoxText.setAttribute("class", "m-edit-box-check-label");
      editBoxText.setAttribute("for", key);
      editBoxText.textContent = text;
      return editBoxText;
    };

    function _create_editBoxItem(size, child) {
      var editBoxItem = document.createElement("div");
      editBoxItem.setAttribute("class", "m-edit-box-item-" + size);
      if (child) {
        editBoxItem.appendChild(child);
      };
      return editBoxItem;
    };

    function _create_editBox(nodes) {
      var editBox = document.createElement("div");
      editBox.setAttribute("class", "m-edit-box");
      var editBoxHead = document.createElement("div");
      editBoxHead.setAttribute("class", "m-edit-box-head");
      var editBoxBody = document.createElement("div");
      editBoxBody.setAttribute("class", "m-edit-box-body");
      var editBoxContent = document.createElement("div");
      editBoxContent.setAttribute("class", "m-edit-box-content m-edit-box-content-margin-large");
      var editBoxGroup = document.createElement("div");
      editBoxGroup.setAttribute("class", "m-edit-box-item-max m-edit-box-group");
      for (var i = 0; i < arguments.length; i++) {
        editBoxGroup.appendChild(arguments[i]);
      };
      editBoxContent.appendChild(editBoxGroup);
      editBoxBody.appendChild(editBoxContent);
      editBox.appendChild(editBoxBody);
      return editBox;
    };

    function _create_totalBlockControls() {
      var totalBlockControls = document.createElement("div");
      totalBlockControls.setAttribute("data-bonuses", JSON.stringify(object.bonuses));
      if (object) {
        // order the bonuses for rendering in modal
        var orderedBonuses = [];
        if ("str_bonus" in object.bonuses) {
          orderedBonuses.push({
            "str_bonus": object.bonuses["str_bonus"]
          })
        };
        if ("dex_bonus" in object.bonuses) {
          orderedBonuses.push({
            "dex_bonus": object.bonuses["dex_bonus"]
          })
        };
        if ("con_bonus" in object.bonuses) {
          orderedBonuses.push({
            "con_bonus": object.bonuses["con_bonus"]
          })
        };
        if ("int_bonus" in object.bonuses) {
          orderedBonuses.push({
            "int_bonus": object.bonuses["int_bonus"]
          })
        };
        if ("wis_bonus" in object.bonuses) {
          orderedBonuses.push({
            "wis_bonus": object.bonuses["wis_bonus"]
          })
        };
        if ("cha_bonus" in object.bonuses) {
          orderedBonuses.push({
            "cha_bonus": object.bonuses["cha_bonus"]
          })
        };
        if ("bab" in object.bonuses) {
          orderedBonuses.push({
            "bab": object.bonuses["bab"]
          })
        };
        if ("level" in object.bonuses) {
          orderedBonuses.push({
            "level": object.bonuses["level"]
          })
        };
        if ("half_level" in object.bonuses) {
          orderedBonuses.push({
            "half_level": object.bonuses["half_level"]
          })
        };
        if ("class_skill" in object.bonuses) {
          orderedBonuses.push({
            "class_skill": object.bonuses["class_skill"]
          })
        };
        if ("max_dex" in object.bonuses) {
          orderedBonuses.push({
            "max_dex": object.bonuses["max_dex"]
          })
        };
        if ("check_penalty" in object.bonuses) {
          orderedBonuses.push({
            "check_penalty": object.bonuses["check_penalty"]
          })
        };
        if ("plus_ten" in object.bonuses) {
          orderedBonuses.push({
            "plus_ten": object.bonuses["plus_ten"]
          })
        };
        if ("ac_armor" in object.bonuses) {
          orderedBonuses.push({
            "ac_armor": object.bonuses["ac_armor"]
          })
        };
        if ("ac_shield" in object.bonuses) {
          orderedBonuses.push({
            "ac_shield": object.bonuses["ac_shield"]
          })
        };
        if ("ac_deflect" in object.bonuses) {
          orderedBonuses.push({
            "ac_deflect": object.bonuses["ac_deflect"]
          })
        };
        if ("ac_dodge" in object.bonuses) {
          orderedBonuses.push({
            "ac_dodge": object.bonuses["ac_dodge"]
          })
        };
        if ("ac_natural" in object.bonuses) {
          orderedBonuses.push({
            "ac_natural": object.bonuses["ac_natural"]
          })
        };
        if ("size" in object.bonuses) {
          orderedBonuses.push({
            "size": object.bonuses["size"]
          })
        };
        if ("special_size" in object.bonuses) {
          orderedBonuses.push({
            "special_size": object.bonuses["special_size"]
          })
        };
        if ("size_modifier_fly" in object.bonuses) {
          orderedBonuses.push({
            "size_modifier_fly": object.bonuses["size_modifier_fly"]
          })
        };
        if ("size_modifier_stealth" in object.bonuses) {
          orderedBonuses.push({
            "size_modifier_stealth": object.bonuses["size_modifier_stealth"]
          })
        };
        for (var i = 0; i < orderedBonuses.length; i++) {
          for (var key in orderedBonuses[i]) {
            var title = _bonusTextLable(key);
            var check = _create_check(totalBlockControls, key);
            var label = _create_checkLabel(title, key);
            var editBoxItem1 = _create_editBoxItem("large", label);
            var editBoxItem2 = _create_editBoxItem("check", check);
            var editBox = _create_editBox(editBoxItem1, editBoxItem2);
            totalBlockControls.appendChild(editBox);
          };
        };
      };
      return totalBlockControls;
    };

    var modalContent = _create_totalBlockControls();

    modal.render(heading, modalContent, "Apply", function() {
      _update_objectBonuses(this);
      sheet.storeCharacters();
      render();
      display.clear();
      display.render();
    }.bind(modalContent), "small");
  };

  function bind(totalBlock) {
    if (totalBlock) {
      _bind_totalBlock(totalBlock);
    } else {
      var all_totalBlock = helper.eA(".js-total-block");
      for (var i = 0; i < all_totalBlock.length; i++) {
        if (all_totalBlock[i].dataset.clone != "true") {
          _bind_totalBlock(all_totalBlock[i]);
        };
      };
    };
  };

  function _bind_totalBlock(totalBlock) {
    var totalBlockBonuses = totalBlock.querySelector(".js-total-block-bonuses");
    var totalBlockBonusCheck = totalBlock.querySelector(".js-total-block-bonus-check");
    if (totalBlockBonusCheck) {
      _bind_bonusCheck(totalBlockBonusCheck);
    };
    if (totalBlockBonuses) {
      _bind_bonusButton(totalBlockBonuses);
    };
  };

  function _bind_bonusCheck(check) {
    check.addEventListener("change", function() {
      _update_bonuses(this);
      render();
      sheet.storeCharacters();
    }, false);
  };

  function _bind_bonusButton(button) {
    button.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      _update_totalBlockControls(this);
    }, false);
  };

  function _update_bonuses(input) {
    var bonusType = input.dataset.bonusType.replace(/-+/g, "_");
    var totalBlock = helper.getClosest(input, ".js-total-block") || helper.getClosest(input, ".js-total-block-control");
    var totalPath = totalBlock.dataset.totalPath;
    var bonusesPath;
    var bonusesObject;
    var object;
    if (totalBlock.dataset.clone == "true") {
      // console.log(1);
      var cloneCount = parseInt(totalBlock.dataset.cloneCount, 10);
      object = helper.getObject(sheet.getCharacter(), totalPath, cloneCount);
      object.bonuses[bonusType] = input.checked;
    } else {
      // console.log(2);
      bonusesPath = totalPath + ".bonuses";
      bonusesObject = helper.getObject(sheet.getCharacter(), bonusesPath);
      bonusesObject[bonusType] = input.checked;
    };
  };

  function clear() {
    var all_total = helper.eA(".js-total-block-total");
    for (var i = 0; i < all_total.length; i++) {
      all_total[i].textContent = "";
    };
  };

  // exposed methods
  return {
    clear: clear,
    bind: bind,
    render: render
  };

})();

var update = (function() {

  var history = [{
    version: "3.23.0",
    list: [
      "*XP and Wealth is now tracked and can be viewd in logs."
    ]
  }, {
    version: "3.22.0",
    list: [
      "Added apply and clearing to XP and Wealth counts."
    ]
  }, {
    version: "3.21.1",
    list: [
      "Added missing 512x512 icon to manifest file."
    ]
  }, {
    version: "3.21.0",
    list: [
      "Added alternative STR score to calculation Encumbrance."
    ]
  }, {
    version: "3.20.1",
    list: [
      "Fixed an issue causing Clone Skills Bonuses not applying correctly."
    ]
  }, {
    version: "3.20.0",
    list: [
      "Adding SR, DR and Energy Resistance."
    ]
  }, {
    version: "3.19.2",
    list: [
      "Refactor Nav open and close logic and performance."
    ]
  }, {
    version: "3.19.1",
    list: [
      "Fix bug where invisible line breaks would cause empty Textarea Blocks to render in Display mode."
    ]
  }, {
    version: "3.19.0",
    list: [
      "Introduced Tabs to improve Edit layout."
    ]
  }, {
    version: "3.18.0",
    list: [
      "Added Character Description."
    ]
  }, {
    version: "3.17.0",
    list: [
      "*Added Wealth totaling.",
      "Improved Display layout.",
      "General UI fixes to Card design."
    ]
  }, {
    version: "3.16.1",
    list: [
      "*Added automatic Encumbrance calculation.",
      "Improved Display layout.",
      "Added more Tips.",
      "General refactoring and UI fixes."
    ]
  }, {
    version: "3.15.0",
    list: [
      "Added Alphabetical Spell sort."
    ]
  }, {
    version: "3.14.0",
    list: [
      "Improved Total Bonus modal layout."
    ]
  }, {
    version: "3.13.1",
    list: [
      "Added more Tips.",
      "Fixing bug where Tips would not be removed from the DOM."
    ]
  }, {
    version: "3.12.0",
    list: [
      "Added Caster Level Check support.",
      "Updated demo PCs."
    ]
  }, {
    version: "3.10.0",
    list: [
      "Improved Damage, Temp and Non Leathal HP controls."
    ]
  }, {
    version: "3.9.1",
    list: [
      "Update print styles to use columns."
    ]
  }, {
    version: "3.9.0",
    list: [
      "*Added Multi class support!",
      "Added areas for more than one Class.",
      "Added skill rank totals.",
      "Improved edit mode layout and general UI fixes."
    ]
  }, {
    version: "3.8.0",
    list: [
      "Redesigned layout of Display mode.",
      "Improved Log design."
    ]
  }, {
    version: "3.7.0",
    list: [
      "*Offline use feature added. AwesomeSheet will now work offline if it has been cached."
    ]
  }, {
    version: "3.6.1",
    list: [
      "Added Feat and Trait inputs to Saves, removing Racial inputs on Saves.",
      "*Added Size categories with auto calculation and Alignment dropdown. You may need to re-enter you size and Alignment.",
      "Moved Armor and Shield to Equipment section."
    ]
  }, {
    version: "3.5.2",
    list: [
      "Added Item list total weight.",
      "Updated character object repair for concentration bonuses."
    ]
  }, {
    version: "3.5.1",
    list: [
      "Improve Clone and Import UI."
    ]
  }, {
    version: "3.5.0",
    list: [
      "Refactored Clones, Input and Textarea modules.",
      "*New Items feature added.",
      "*New Custom Skills feature added."
    ]
  }, {
    version: "3.4.0",
    list: [
      "Redesigned edit mode layout and style for ease of reading."
    ]
  }, {
    version: "3.3.0",
    list: [
      "Optimise Consumable, Attack and Note modules for faster page load.",
      "Fixed a bug with Skill totals not recognising class skill."
    ]
  }, {
    version: "3.2.2",
    list: [
      "Refactored change log module.",
      "*Customisable Initiative block added. You will have to re-enter you Initiative bonuses if any.",
      "Fixed a bug with Update Prompt not hiding and Change Log control in the Nav not working.",
      "UI fixes and updates."
    ]
  }, {
    version: "3.1.0",
    list: [
      "Added a new feature Update Prompt. You're looking at it.",
      "UI fixes and updates."
    ]
  }, {
    version: "3.0.0",
    list: [
      "Improve edit and display modes and introduce card layout."
    ]
  }];

  function currentVersion() {
    return history[0].version;
  };

  // exposed methods
  return {
    ver: currentVersion,
    history: history
  };

})();

var wealth = (function() {

  function update() {
    render();
    totalBlock.render();
    textBlock.render();
    if (display.state()) {
      display.clear();
      display.render();
    };
  };

  function render() {
    var total = _create_goldTotal(helper.getObject(sheet.getCharacter(), "equipment.wealth"));
    helper.setObject(sheet.getCharacter(), "equipment.wealth.total", total);
    sheet.storeCharacters();
  };

  function _create_goldTotal(wealth) {
    var wealthInGp = [];
    if ("platinum" in wealth) {
      var platinum = wealth.platinum * 10;
      if (!isNaN(platinum)) {
        wealthInGp.push(platinum);
      };
    };
    if ("gold" in wealth) {
      var gold = wealth.gold;
      if (!isNaN(gold)) {
        wealthInGp.push(gold);
      };
    };
    if ("silver" in wealth) {
      var silver = wealth.silver / 10;
      if (!isNaN(silver)) {
        wealthInGp.push(silver);
      };
    };
    if ("copper" in wealth) {
      var copper = wealth.copper / 100;
      if (!isNaN(copper)) {
        wealthInGp.push(copper);
      };
    };
    var grandTotal;
    if (wealthInGp.length > 0) {
      grandTotal = wealthInGp.reduce(function(a, b) {
        return a + b;
      });
      grandTotal = parseFloat(grandTotal).toFixed(2);
    } else {
      grandTotal = 0;
    };
    return grandTotal;
  };

  // exposed methods
  return {
    update: update,
    render: render,
  };

})();

(function() {

})();

(function() {

  sheet.render();
  sheet.bind();
  nav.bind();
  nav.render();
  tabs.bind();
  log.bind();
  log.render();
  night.update();
  checkUrl.render();

})();
