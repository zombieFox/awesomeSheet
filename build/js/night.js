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
