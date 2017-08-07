var themeColor = (function() {

  function update() {
    var themeMeta = document.getElementsByTagName("meta");
    if (display.state("all")) {
      for (var i = 0; i < themeMeta.length; i++) {
        if (themeMeta[i].getAttribute("name") == "theme-color") {
          themeMeta[i].setAttribute("content", "#b0002e");
        };
      };
    } else {
      for (var i = 0; i < themeMeta.length; i++) {
        if (themeMeta[i].getAttribute("name") == "theme-color") {
          themeMeta[i].setAttribute("content", "#2a5d84");
        };
      };
    };
  };

  // exposed methods
  return {
    update: update
  };

})();
