var night = (function() {

  function toggle() {
    var body = helper.e("body");
    var menuItem = helper.e(".js-menu-link-night-mode");
    var _nightModeOn = function() {
      helper.addClass(body, "is-night-mode");
      menu.toggleMenuItem({
        menuItem: menuItem,
        state: "active"
      });
    };
    var _nightModeOff = function() {
      helper.removeClass(body, "is-night-mode");
      menu.toggleMenuItem({
        menuItem: menuItem,
        state: "inactive"
      });
    };
    if (body.dataset.nightMode == "true") {
      body.dataset.nightMode = "false";
      _nightModeOff();
    } else if (body.dataset.nightMode == "false" || !body.dataset.nightMode) {
      body.dataset.nightMode = "true";
      _nightModeOn();
    };
  };

  // exposed methods
  return {
    toggle: toggle
  };

})();
