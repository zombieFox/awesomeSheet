var fullscreen = (function() {

  function toggle() {
    var menuLinkFullscreenMode = helper.e(".js-menu-link-fullscreen-mode");
    var root = window.document;
    var menuLinkFullscreenModeIcon = menuLinkFullscreenMode.querySelector(".js-menu-link-fullscreen-mode-icon");
    var rootElement = root.documentElement;
    var requestFullScreen = rootElement.requestFullscreen || rootElement.mozRequestFullScreen || rootElement.webkitRequestFullScreen || rootElement.msRequestFullscreen;
    var cancelFullScreen = root.exitFullscreen || root.mozCancelFullScreen || root.webkitExitFullscreen || root.msExitFullscreen;
    if (!root.fullscreenElement && !root.mozFullScreenElement && !root.webkitFullscreenElement && !root.msFullscreenElement) {
      requestFullScreen.call(rootElement);
      helper.toggleClass(menuLinkFullscreenMode, "is-active");
      helper.toggleClass(menuLinkFullscreenModeIcon, "icon-fullscreen-exit");
      helper.toggleClass(menuLinkFullscreenModeIcon, "icon-fullscreen");
    } else {
      cancelFullScreen.call(root);
      helper.toggleClass(menuLinkFullscreenMode, "is-active");
      helper.toggleClass(menuLinkFullscreenModeIcon, "icon-fullscreen-exit");
      helper.toggleClass(menuLinkFullscreenModeIcon, "icon-fullscreen");
    };
  };

  // exposed methods
  return {
    toggle: toggle
  };

})();
