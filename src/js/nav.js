var nav = (function() {

  var fullscreen = helper.e(".fullscreen");
  var addCharacter = helper.e(".add-character");

  function _fullscreen() {
    var root = window.document;
    var icon = fullscreen.querySelector("span");
    var rootElement = root.documentElement;
    var requestFullScreen = rootElement.requestFullscreen || rootElement.mozRequestFullScreen || rootElement.webkitRequestFullScreen || rootElement.msRequestFullscreen;
    var cancelFullScreen = root.exitFullscreen || root.mozCancelFullScreen || root.webkitExitFullscreen || root.msExitFullscreen;
    if (!root.fullscreenElement && !root.mozFullScreenElement && !root.webkitFullscreenElement && !root.msFullscreenElement) {
      requestFullScreen.call(rootElement);
      helper.toggleClass(fullscreen, "active");
      helper.toggleClass(icon, "icon-fullscreen-exit");
      helper.toggleClass(icon, "icon-fullscreen");
    } else {
      cancelFullScreen.call(root);
      helper.toggleClass(fullscreen, "active");
      helper.toggleClass(icon, "icon-fullscreen-exit");
      helper.toggleClass(icon, "icon-fullscreen");
    }
  };

  function _createNavAnchor(characterName, key) {
    var navLi = document.createElement("li");
    var icon = document.createElement("span");
    icon.setAttribute("class", "icon icon-check-box-unchecked");
    var name = document.createElement("span");
    name.textContent = characterName;
    var navAnchor = document.createElement("a");
    navAnchor.setAttribute("href", "javascript:void(0)");
    navAnchor.setAttribute("id", characterName.replace(/\s+/g, "-").toLowerCase());
    navAnchor.setAttribute("data-character-key", key);
    navAnchor.setAttribute("tabindex", 10);
    navAnchor.appendChild(icon);
    navAnchor.appendChild(name);
    navLi.appendChild(navAnchor);
    return navLi;
  };

  function addCharacter() {

  };

  function bind() {
    var nav = helper.e("nav");
    var toggleNav = helper.e("nav .toggle-nav");
    var clearAll = helper.e(".clear-all");
    fullscreen.addEventListener("click", function() {
      _fullscreen();
    }, false);
    clearAll.addEventListener("click", function() {
      prompt.render("Are you sure?", "All information will be removed. This can not be undone.", "clear all");
      helper.removeClass(nav, "open");
    }, false);
    toggleNav.addEventListener("click", function() {
      helper.toggleClass(nav, "open");
    }, false);
    window.addEventListener('click', function(event) {
      if (event.target != nav && helper.getClosest(event.target, "nav") != nav) {
        helper.removeClass(nav, "open");
      };
    }, false);
  };

  // exposed methods
  return {
    bind: bind,
    addCharacter: addCharacter
  }

})();
