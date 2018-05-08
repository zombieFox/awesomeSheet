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
        return _state[defaultOptions.section.id];
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
    // if (helper.read("minimiseState")) {
    //   var savedState = JSON.parse(helper.read("minimiseState"));
    //   for (var key in savedState) {
    //     state.set({
    //       force: savedState[key],
    //       section: key
    //     });
    //   };
    // };
    // render();
  };

  function toggle(options) {
    var defaultOptions = {
      force: null,
      section: null
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
        render();
      } else {
        state.set({
          force: defaultOptions.force
        });
        _store();
        render();
      };
    } else if (defaultOptions.section != null) {
      state.set({
        section: defaultOptions.section.id
      });
      _store();
      render();
    };
  };

  function render(section) {
    var all_section = helper.eA(".js-section");
    var _on = function(section) {
      var icon = section.querySelector(".js-card-minimise-icon");
      var cardTabs = section.querySelector(".js-card-tabs");
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
      var icon = section.querySelector(".js-card-minimise-icon");
      var cardTabs = section.querySelector(".js-card-tabs");
      helper.removeClass(section, "is-minimise");
      helper.removeClass(icon, "icon-unfold-more");
      helper.addClass(icon, "icon-unfold-less");
      if (cardTabs && !display.state.get({
          section: section.id
        })) {
        helper.removeClass(cardTabs, "is-hidden");
      };
    };
    all_section.forEach(function(arrayItem, index) {
      if (state.get({
          section: arrayItem
        })) {
        _on(arrayItem);
      } else {
        _off(arrayItem);
      };
    });
  };

  // exposed methods
  return {
    init: init,
    state: state,
    toggle: toggle
  };

})();
