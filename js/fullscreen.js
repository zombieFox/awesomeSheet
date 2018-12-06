var fullscreen = (function() {

  function toggle() {
    var root = window.document;
    var rootElement = root.documentElement;
    var requestFullScreen = rootElement.requestFullscreen || rootElement.mozRequestFullScreen || rootElement.webkitRequestFullScreen || rootElement.msRequestFullscreen;
    var cancelFullScreen = root.exitFullscreen || root.mozCancelFullScreen || root.webkitExitFullscreen || root.msExitFullscreen;
    var menuItem = helper.e(".js-menu-link-fullscreen-mode");
    if (!root.fullscreenElement && !root.mozFullScreenElement && !root.webkitFullscreenElement && !root.msFullscreenElement) {
      requestFullScreen.call(rootElement);
      menu.toggleMenuItem({
        menuItem: menuItem,
        state: "active"
      });
    } else {
      cancelFullScreen.call(root);
      menu.toggleMenuItem({
        menuItem: menuItem,
        state: "inactive"
      });
    };
  };

  // exposed methods
  return {
    toggle: toggle
  };

})();
