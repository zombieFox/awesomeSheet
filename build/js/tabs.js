var tabs = (function() {

  var state = (function() {
    var tabState = {
      basics: {
        character: true,
        experience: false,
        classes: false,
        senses: false,
        initiative: false,
        speed: false,
        image: false
      },
      statistics: {
        stats: true,
        abilities: false,
        feats: false,
        traits: false,
        languages: false,
        power: false
      },
      equipment: {
        possessions: true,
        armor: false,
        body_slots: false,
        item: false,
        encumbrance: false,
        consumable: false,
        wealth: false
      },
      defense: {
        hp: true,
        ac: false,
        cmd: false,
        saves: false,
        dr: false,
        sr: false,
        resistance: false
      },
      offense: {
        stats: true,
        cmb: false,
        attack: false
      },
      skills: {
        all: true,
        custom: false
      },
      spells: {
        stats: true,
        level_0: false,
        level_1: false,
        level_2: false,
        level_3: false,
        level_4: false,
        level_5: false,
        level_6: false,
        level_7: false,
        level_8: false,
        level_9: false
      },
      notes: {
        character: true,
        story: false
      }
    };
    var get = function(options) {
      var defaultOptions = {
        section: null,
        tab: null,
        all: null
      };
      if (options) {
        defaultOptions = helper.applyOptions(defaultOptions, options);
      };
      if (defaultOptions.all) {
        return tabState;
      } else if (defaultOptions.section != null && defaultOptions.tab == null) {
        return tabState[defaultOptions.section];
      } else if (defaultOptions.section != null && defaultOptions.tab != null) {
        return tabState[defaultOptions.section][defaultOptions.tab];
      };
    };
    var set = function(options) {
      var defaultOptions = {
        section: null,
        tab: null,
        boolean: null
      };
      if (options) {
        defaultOptions = helper.applyOptions(defaultOptions, options);
      };
      if (defaultOptions.boolean != null) {
        if (defaultOptions.section != null && defaultOptions.tab != null) {
          tabState[defaultOptions.section][defaultOptions.tab] = defaultOptions.boolean;
        };
      } else {
        if (defaultOptions.section != null && defaultOptions.tab != null) {
          for (var key in tabState[defaultOptions.section]) {
            tabState[defaultOptions.section][key] = false;
          };
          if (tabState[defaultOptions.section][defaultOptions.tab]) {
            tabState[defaultOptions.section][defaultOptions.tab] = false;
          } else {
            tabState[defaultOptions.section][defaultOptions.tab] = true;
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
    helper.store("tabState", JSON.stringify(state.get({
      all: true
    })));
  };

  function bind() {
    _bind_tabGroup();
    _bind_tabArrow();
  };

  function _bind_tabGroup() {
    var all_tabGroup = helper.eA(".js-tab-group");
    for (var i = 0; i < all_tabGroup.length; i++) {
      var all_tabItem = all_tabGroup[i].querySelectorAll(".js-tab-item");
      for (var j = 0; j < all_tabItem.length; j++) {
        all_tabItem[j].addEventListener("click", function() {
          _changeState(this);
          _store();
          render();
        }, false);
      };
    };
  };

  function _bind_tabArrow() {
    var all_tabArrow = helper.eA(".js-tab-arrow");
    for (var i = 0; i < all_tabArrow.length; i++) {
      all_tabArrow[i].addEventListener("click", function() {
        _singleStepChangeState(this);
        _store();
        render();
      }, false);
    };
  };

  function _singleStepChangeState(arrow) {
    var tabOrder = {
      basics: ["character", "experience", "classes", "senses", "initiative", "speed", "image"],
      statistics: ["stats", "abilities", "feats", "traits", "languages", "power"],
      equipment: ["possessions", "armor", "body_slots", "item", "encumbrance", "consumable", "wealth"],
      defense: ["hp", "ac", "cmd", "saves", "dr", "sr", "resistance"],
      offense: ["stats", "cmb", "attack"],
      skills: ["all", "custom"],
      spells: ["stats", "level_0", "level_1", "level_2", "level_3", "level_4", "level_5", "level_6", "level_7", "level_8", "level_9"],
      notes: ["character", "story"]
    };
    var options = helper.makeObject(arrow.dataset.tabArrowOptions);
    var newIndex = 0;
    tabOrder[options.tabGroup].forEach(function(arrayItem, index) {
      if (state.get({
          section: options.tabGroup,
          tab: arrayItem
        })) {
        if (options.action == "right") {
          newIndex = index + 1;
        };
        if (options.action == "left") {
          newIndex = index - 1;
        };
        if (newIndex > (tabOrder[options.tabGroup].length - 1)) {
          newIndex = 0;
        };
        if (newIndex < 0) {
          newIndex = (tabOrder[options.tabGroup].length - 1);
        };
      };
    });
    state.set({
      section: options.tabGroup,
      tab: tabOrder[options.tabGroup][newIndex]
    });
  };

  function _changeState(tab) {
    var options = helper.makeObject(tab.dataset.tabOptions);
    state.set({
      section: options.tabGroup,
      tab: options.tab
    });
  };

  function init() {
    if (helper.read("tabState")) {
      var savedState = JSON.parse(helper.read("tabState"));
      for (var section in savedState) {
        for (var tab in savedState[section]) {
          state.set({
            section: section,
            tab: tab,
            boolean: savedState[section][tab]
          });
        };
      };
    };
    render();
  };

  function render() {
    _render_all_tabRow();
  };

  function _render_all_tabRow() {
    var all_tabRow = helper.eA(".js-tab-row");
    for (var i = 0; i < all_tabRow.length; i++) {
      _render_tabIndicator(all_tabRow[i]);
      _render_tabPanel(all_tabRow[i]);
      render_scroll(all_tabRow[i]);
    };
  };

  function _render_tabIndicator(tabRow) {
    var tabIndicator = tabRow.querySelector(".m-tab-indicator");
    var all_tabItem = tabRow.querySelectorAll(".js-tab-item");
    all_tabItem.forEach(function(arrayItem, index) {
      var options = helper.makeObject(arrayItem.dataset.tabOptions);
      if (state.get({
          section: options.tabGroup,
          tab: options.tab
        })) {
        var tabArea = arrayItem.getBoundingClientRect();
        var width = (tabArea.width - 10).toFixed(0);
        var left = (arrayItem.offsetLeft + 5).toFixed(0);
        tabIndicator.setAttribute("style", "width:" + width + "px;left:" + left + "px;");
      };
    });
  };

  function _render_tabPanel(tabRow) {
    var all_tabItem = tabRow.querySelectorAll(".js-tab-item");
    all_tabItem.forEach(function(arrayItem, index) {
      var options = helper.makeObject(arrayItem.dataset.tabOptions);
      if (state.get({
          section: options.tabGroup,
          tab: options.tab
        })) {
        helper.addClass(arrayItem, "is-active");
        helper.removeClass(helper.e("." + options.target), "is-hidden");
      } else {
        helper.removeClass(arrayItem, "is-active");
        helper.addClass(helper.e("." + options.target), "is-hidden");
      };
    });
  };

  function render_scroll(tabRow) {
    var tabRowArea = tabRow.getBoundingClientRect();
    var all_tabItem = tabRow.querySelectorAll(".js-tab-item");
    all_tabItem.forEach(function(arrayItem, index) {
      var options = helper.makeObject(arrayItem.dataset.tabOptions);
      if (state.get({
          section: options.tabGroup,
          tab: options.tab
        })) {
        var tabArea = arrayItem.getBoundingClientRect();
        var left = Math.ceil(arrayItem.offsetLeft - (tabRowArea.width / 2) + (tabArea.width / 2), 10);
        if (tabRow.scroll) {
          tabRow.scroll({
            top: 0,
            left: left,
            behavior: 'smooth'
          });
        } else {
          if (tabArea.left < tabRowArea.left) {
            var left = arrayItem.offsetLeft;
            tabRow.scrollLeft = left;
          } else if (tabArea.right > tabRowArea.right) {
            var right = Math.ceil(arrayItem.offsetLeft - tabRowArea.width + tabArea.width, 10);
            tabRow.scrollLeft = right;
          };
        };
      };
    });
  };

  function toggle(options) {
    var defaultOptions = {
      section: null,
      tab: null
    };
    if (options) {
      defaultOptions = helper.applyOptions(defaultOptions, options);
    };
    if (options.section != null && options.tab != null) {
      state.set({
        section: options.section,
        tab: options.tab
      });
      _store();
      render();
    };
  };

  function reset() {
    var defaultState = [{
      section: "basics",
      tab: "character"
    }, {
      section: "statistics",
      tab: "stats"
    }, {
      section: "equipment",
      tab: "possessions"
    }, {
      section: "defense",
      tab: "hp"
    }, {
      section: "offense",
      tab: "stats"
    }, {
      section: "skills",
      tab: "all"
    }, {
      section: "spells",
      tab: "stats"
    }, {
      section: "notes",
      tab: "character"
    }];
    defaultState.forEach(function(arrayItem) {
      toggle({
        section: arrayItem.section,
        tab: arrayItem.tab
      });
    });
  };

  // exposed methods
  return {
    init: init,
    reset: reset,
    toggle: toggle,
    state: state,
    bind: bind,
    render: render,
    render_scroll: render_scroll
  };

})();
