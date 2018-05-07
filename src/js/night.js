var night = (function() {

  var state = (function() {
    var _state = false;
    var get = function(options) {
      return _state;
    };
    var set = function(options) {
      var defaultOptions = {
        force: null,
        toggle: null
      };
      if (options) {
        defaultOptions = helper.applyOptions(defaultOptions, options);
      };
      if (defaultOptions.force != null) {
        _state = defaultOptions.force;
      } else if (defaultOptions.toggle != null) {
        if (_state) {
          _state = false;
        } else {
          _state = true;
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
    helper.store("nightModeState", JSON.stringify(state.get()));
  };

  function init() {
    if (helper.read("nightModeState")) {
      var savedState = JSON.parse(helper.read("nightModeState"));
      state.set({
        force: savedState
      });
    };
    render();
  };

  function toggle(options) {
    var defaultOptions = {
      force: null
    };
    if (options) {
      defaultOptions = helper.applyOptions(defaultOptions, options);
    };
    if (defaultOptions.force != null) {
      state.set({
        force: defaultOptions.force
      });
      _store();
      render();
    } else {
      state.set({
        toggle: true
      });
      _store();
      render();
    };
  };

  function render() {
    var body = helper.e("body");
    var menuItem = helper.e(".js-menu-link-night-mode");
    var _on = function() {
      helper.addClass(body, "is-night-mode");
      menu.toggleMenuItem({
        menuItem: menuItem,
        state: "active"
      });
    };
    var _off = function() {
      helper.removeClass(body, "is-night-mode");
      menu.toggleMenuItem({
        menuItem: menuItem,
        state: "inactive"
      });
    };
    if (state.get()) {
      _on();
    } else {
      _off();
    };
  };

  // exposed methods
  return {
    init: init,
    state: state,
    toggle: toggle,
    render: render
  };

})();
