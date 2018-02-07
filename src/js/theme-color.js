var themeColor = (function() {

  function update() {
    var themeMeta = document.getElementsByTagName("meta");
    if (display.state({
        all: true
      })) {
      for (var i = 0; i < themeMeta.length; i++) {
        if (themeMeta[i].getAttribute("name") == "theme-color") {
          themeMeta[i].setAttribute("content", "#970027");
        };
      };
    } else {
      for (var i = 0; i < themeMeta.length; i++) {
        if (themeMeta[i].getAttribute("name") == "theme-color") {
          themeMeta[i].setAttribute("content", "#1e4a76");
        };
      };
    };
  };

  // exposed methods
  return {
    update: update
  };

})();
