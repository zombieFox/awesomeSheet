var card = (function() {

  function bind() {
    _bind_cardTitle();
    _bind_linkToggle();
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

  function _bind_linkToggle() {
    var all_cardDisplayToggle = helper.eA(".js-card-display-toggle");
    for (var i = 0; i < all_cardDisplayToggle.length; i++) {
      all_cardDisplayToggle[i].addEventListener("click", function(event) {
        event.stopPropagation();
        event.preventDefault();
        _linkToggle(this);
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

  function _linkToggle(element) {
    var section = helper.getClosest(element, ".js-section");
    display.toggle(section);
    display.clear(section);
    display.render(section);
  };

  // exposed methods
  return {
    bind: bind
  };

})();
