var checkUrl = (function() {

  function checkHttps() {
    var host = "zombiefox.github.io"
    if (window.location.host == host && window.location.protocol != "https:") {
      window.location.protocol = "https:"
    };
  };

  function render() {
    if (helper.getUrlParameter("sheet")) {
      _reset();
    };
    if (helper.getUrlParameter("character")) {
      _loadCharacter();
    };
  };

  function _reset() {
    if (helper.getUrlParameter("sheet") == "restore") {
      sheet.restore()
    } else if (helper.getUrlParameter("sheet") == "all") {
      sheet.all()
    } else if (helper.getUrlParameter("sheet") == "destroy") {
      sheet.destroy()
    };
  };

  function _loadCharacter() {
    var index;
    var characterParameter = helper.getUrlParameter("character");
    for (var i = 0; i < sheet.getAllCharacters().length; i++) {
      if (characterParameter == sheet.getAllCharacters()[i].basics.name.toLowerCase().split(" ")[0]) {
        index = i;
      };
    };
    if (typeof index !== "undefined") {
      sheet.switch(index);
    } else {
      if (hardCodedCharacters.single()[characterParameter]) {
        sheet.addCharacter(hardCodedCharacters.single()[characterParameter]);
      } else {
        snack.render("No character with that name.", false);
      };
    };
  }

  // exposed methods
  return {
    render: render,
    checkHttps: checkHttps,
  };

})();
