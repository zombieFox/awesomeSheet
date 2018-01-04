var fullscreen = (function() {

  function toggle() {
    var menuLinkFullscreenMode = helper.e(".js-menu-link-fullscreen-mode");
    var root = window.document;
    var rootElement = root.documentElement;
    var requestFullScreen = rootElement.requestFullscreen || rootElement.mozRequestFullScreen || rootElement.webkitRequestFullScreen || rootElement.msRequestFullscreen;
    var cancelFullScreen = root.exitFullscreen || root.mozCancelFullScreen || root.webkitExitFullscreen || root.msExitFullscreen;
    if (!root.fullscreenElement && !root.mozFullScreenElement && !root.webkitFullscreenElement && !root.msFullscreenElement) {
      requestFullScreen.call(rootElement);
    } else {
      cancelFullScreen.call(root);
    };
  };

  // exposed methods
  return {
    toggle: toggle
  };

})();
