var themeColor = (function() {

  function update() {
    var fab = helper.e(".js-fab");
    var themeMeta = document.getElementsByTagName("meta");
    if (fab.dataset.displayMode == "true") {
      for (var i = 0; i < themeMeta.length; i++) {
        if (themeMeta[i].getAttribute("name") == "theme-color") {
          themeMeta[i].setAttribute("content", "#b0002e");
        };
      };
    } else if (fab.dataset.displayMode == "false" || !fab.dataset.displayMode) {
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
