var themeColor = (function() {

  function toggle() {
    var body = helper.e("body");
    var themeMeta = document.getElementsByTagName("meta");
    if (body.dataset.displayMode == "true") {
      for (var i = 0; i < themeMeta.length; i++) {
        if (themeMeta[i].getAttribute("name") == "theme-color") {
          themeMeta[i].setAttribute("content", "#b0002e");
        };
      };
    } else if (body.dataset.displayMode == "false" || !body.dataset.displayMode) {
      for (var i = 0; i < themeMeta.length; i++) {
        if (themeMeta[i].getAttribute("name") == "theme-color") {
          themeMeta[i].setAttribute("content", "#2a5d84");
        };
      };
    };
  };

  // exposed methods
  return {
    toggle: toggle
  };

})();
