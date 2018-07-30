var themeColor = (function() {

  function render() {
    var themeMeta = document.getElementsByTagName("meta");
    if (display.state.get({
        all: true
      })) {
      for (var i = 0; i < themeMeta.length; i++) {
        if (themeMeta[i].getAttribute("name") == "theme-color") {
          // display mode
          themeMeta[i].setAttribute("content", "#970027");
        };
      };
    } else {
      for (var i = 0; i < themeMeta.length; i++) {
        if (themeMeta[i].getAttribute("name") == "theme-color") {
          // edit mode
          themeMeta[i].setAttribute("content", "#1e4a76");
        };
      };
    };
  };

  // exposed methods
  return {
    render: render
  };

})();
