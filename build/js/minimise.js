var minimise = (function() {

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
        section: null
      };
      if (options) {
        defaultOptions = helper.applyOptions(defaultOptions, options);
      };
      if (defaultOptions.section != null) {
        return _state[defaultOptions.section];
      } else {
        return _state;
      };
    };
    var set = function(options) {
      var defaultOptions = {
        force: null,
        section: null
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
      } else if (defaultOptions.section != null) {
        if (_state[defaultOptions.section]) {
          _state[defaultOptions.section] = false;
        } else {
          _state[defaultOptions.section] = true;
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
    helper.store("minimiseState", JSON.stringify(state.get()));
  };

  function init() {
    if (helper.read("minimiseState")) {
      var savedState = JSON.parse(helper.read("minimiseState"));
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
  };

  function toggle(options) {
    var defaultOptions = {
      section: null,
      force: null
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
      } else {
        state.set({
          force: defaultOptions.force
        });
        _store();
        _render_all_section({
          all: true
        });
      };
    } else if (defaultOptions.section != null) {
      state.set({
        section: defaultOptions.section
      });
      _store();
      _render_section({
        section: helper.e("#" + defaultOptions.section)
      });
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
    var icon = section.querySelector(".js-card-minimise-icon");
    var cardTabs = section.querySelector(".js-card-tabs");
    var _on = function(section) {
      helper.addClass(section, "is-minimise");
      helper.addClass(icon, "icon-unfold-more");
      helper.removeClass(icon, "icon-unfold-less");
      if (cardTabs && !display.state.get({
          section: section.id
        })) {
        helper.addClass(cardTabs, "is-hidden");
      };
    };
    var _off = function(section) {
      helper.removeClass(section, "is-minimise");
      helper.removeClass(icon, "icon-unfold-more");
      helper.addClass(icon, "icon-unfold-less");
      if (cardTabs && !display.state.get({
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

  function reset() {
    var section = ["basics", "statistics", "equipment", "defense", "offense", "skills", "spells", "notes"];
    section.forEach(function(arrayItem) {
      toggle({
        section: arrayItem,
        force: false
      });
    });
  };

  function render(section) {};

  // exposed methods
  return {
    init: init,
    reset: reset,
    state: state,
    toggle: toggle
  };

})();
