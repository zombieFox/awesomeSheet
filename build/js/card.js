var card = (function() {

  function bind() {
    _bind_cardTitle();
    _bind_toggle();
    _bind_minimise();
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

  function _bind_minimise() {
    var all_cardMinimise = helper.eA(".js-card-minimise");
    for (var i = 0; i < all_cardMinimise.length; i++) {
      all_cardMinimise[i].addEventListener("click", function(event) {
        event.stopPropagation();
        event.preventDefault();
        _minimise(this);
      }, false);
    };
  };

  function _bind_toggle() {
    var all_cardDisplayToggle = helper.eA(".js-card-toggle");
    for (var i = 0; i < all_cardDisplayToggle.length; i++) {
      all_cardDisplayToggle[i].addEventListener("click", function(event) {
        event.stopPropagation();
        event.preventDefault();
        _toggle(this);
      }, false);
    };
  };

  function _linkSelf(element) {
    var id = "#" + helper.getClosest(element, ".js-section").id;
    var all_section = helper.eA(".js-section");
    var quickNav = helper.e(".js-quick-nav");
    var offset;
    // if nav is on the left after 900px wide viewport
    if (document.documentElement.clientWidth >= 900) {
      offset = parseInt(getComputedStyle(all_section[1]).marginTop, 10) - 10;
    } else {
      offset = parseInt(getComputedStyle(all_section[1]).marginTop, 10) + parseInt(getComputedStyle(quickNav).height, 10) - 10;
    };
    var options = {
      speed: 300,
      offset: offset
    };
    smoothScroll.animateScroll(null, id, options);
  };

  function _toggle(element) {
    var section = helper.getClosest(element, ".js-section");
    display.toggle(section);
    display.clear(section);
    display.render(section);
    display.update();
  };

  function _minimise(element) {
    var section = helper.getClosest(element, ".js-section");
    var icon = section.querySelector(".js-card-minimise-icon");

    function _minimise() {
      section.dataset.minimise = "true";
      helper.addClass(section, "is-minimise");
      helper.addClass(icon, "icon-unfold-more");
      helper.removeClass(icon, "icon-unfold-less");
    };

    function _maximise() {
      section.dataset.minimise = "false";
      helper.removeClass(section, "is-minimise");
      helper.removeClass(icon, "icon-unfold-more");
      helper.addClass(icon, "icon-unfold-less");
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
