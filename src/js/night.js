var night = (function() {

  function toggle() {
    var body = helper.e("body");

    var _nightModeOn = function() {
      helper.addClass(body, "is-night-mode");
    };

    var _nightModeOff = function() {
      helper.removeClass(body, "is-night-mode");
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
