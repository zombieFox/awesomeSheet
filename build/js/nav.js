var nav = (function() {

  var fullscreenToggle = helper.e(".toggle-fullscreen");

  function _fullscreen() {
    var root = window.document;
    var icon = fullscreenToggle.querySelector("span");
    var rootElement = root.documentElement;
    var requestFullScreen = rootElement.requestFullscreen || rootElement.mozRequestFullScreen || rootElement.webkitRequestFullScreen || rootElement.msRequestFullscreen;
    var cancelFullScreen = root.exitFullscreen || root.mozCancelFullScreen || root.webkitExitFullscreen || root.msExitFullscreen;
    if (!root.fullscreenElement && !root.mozFullScreenElement && !root.webkitFullscreenElement && !root.msFullscreenElement) {
      requestFullScreen.call(rootElement);
      helper.toggleClass(fullscreenToggle, "active");
      helper.toggleClass(icon, "icon-fullscreen-exit");
      helper.toggleClass(icon, "icon-fullscreen");
    } else {
      cancelFullScreen.call(root);
      helper.toggleClass(fullscreenToggle, "active");
      helper.toggleClass(icon, "icon-fullscreen-exit");
      helper.toggleClass(icon, "icon-fullscreen");
    }
  };

  function bind() {
    var nav = helper.e("nav");
    var nav_toggle = helper.e("nav .toggle-nav");
    var nav_clearAll = helper.e(".clear-all");
    fullscreenToggle.addEventListener("click", function() {
      _fullscreen();
    }, false);
    nav_clearAll.addEventListener("click", function() {
      prompt.render("Are you sure?", "All information will be removed. This can not be undone.", "clear all");
      helper.removeClass(nav, "open");
    }, false);
    nav_toggle.addEventListener("click", function() {
      helper.toggleClass(nav, "open");
    }, false);
    window.addEventListener('click', function(event) {
      if (event.target != nav && helper.getClosest(event.target, "nav") != nav) {
        helper.removeClass(nav, "open");
      };
    }, false);
  };

  // exposed methods
  return {
    bind: bind
  }

})();
