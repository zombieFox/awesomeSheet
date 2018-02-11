var themeColor = (function() {

  function update() {
    var themeMeta = document.getElementsByTagName("meta");
    if (display.state({
        all: true
      })) {
      for (var i = 0; i < themeMeta.length; i++) {
        if (themeMeta[i].getAttribute("name") == "theme-color") {
          // display mode
          themeMeta[i].setAttribute("content", "#7d0021");
        };
      };
    } else {
      for (var i = 0; i < themeMeta.length; i++) {
        if (themeMeta[i].getAttribute("name") == "theme-color") {
          // edit mode
          themeMeta[i].setAttribute("content", "#1b3d5f");
        };
      };
    };
  };

  // exposed methods
  return {
    update: update
  };

})();
