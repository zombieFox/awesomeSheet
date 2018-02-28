var card = (function() {

  function bind() {
    _bind_cardTitle();
    _bind_displayToggle();
    _bind_minimiseToggle();
  };

  function _bind_cardTitle() {
    var all_cardTitle = helper.eA(".js-card-title");
    for (var i = 0; i < all_cardTitle.length; i++) {
      all_cardTitle[i].addEventListener("click", function(event) {
        event.stopPropagation();
        event.preventDefault();
        _linkSelf(this);
      }, false);
    };
  };

  function _bind_minimiseToggle() {
    var all_cardMinimise = helper.eA(".js-card-minimise");
    for (var i = 0; i < all_cardMinimise.length; i++) {
      all_cardMinimise[i].addEventListener("click", function(event) {
        event.stopPropagation();
        event.preventDefault();
        _minimiseToggle(this);
      }, false);
    };
  };

  function _bind_displayToggle() {
    var all_cardDisplayToggle = helper.eA(".js-card-toggle");
    for (var i = 0; i < all_cardDisplayToggle.length; i++) {
      all_cardDisplayToggle[i].addEventListener("click", function(event) {
        event.stopPropagation();
        event.preventDefault();
        _displayToggle(this);
      }, false);
    };
  };

  function _linkSelf(element) {
    var section = helper.getClosest(element, ".js-section");
    var id = "#" + section.id;
    nav.scrollToSection(id);
  };

  function _displayToggle(element) {
    var section = helper.getClosest(element, ".js-section");
    display.clear();
    display.render();
    display.toggle({
      section: section
    });
    themeColor.update();
  };

  function _minimiseToggle(element) {
    var section = helper.getClosest(element, ".js-section");
    var icon = section.querySelector(".js-card-minimise-icon");
    var cardTabs = section.querySelector(".js-card-tabs");

    var _minimise = function() {
      section.dataset.minimise = "true";
      helper.addClass(section, "is-minimise");
      helper.addClass(icon, "icon-unfold-more");
      helper.removeClass(icon, "icon-unfold-less");
      if (cardTabs && !display.state.get({
          section: section
        })) {
        helper.addClass(cardTabs, "is-hidden");
      };
    };

    var _maximise = function() {
      section.dataset.minimise = "false";
      helper.removeClass(section, "is-minimise");
      helper.removeClass(icon, "icon-unfold-more");
      helper.addClass(icon, "icon-unfold-less");
      if (cardTabs && !display.state.get({
          section: section
        })) {
        helper.removeClass(cardTabs, "is-hidden");
      };
    };

    if (section.dataset.minimise == "true") {
      _maximise();
    } else if (section.dataset.minimise == "false" || !section.dataset.minimise) {
      _minimise();
    };
  };

  // exposed methods
  return {
    bind: bind
  };

})();