var header = (function() {

  var previousPosition = window.pageYOffset;

  function scroll() {
    var body = helper.e("body");
    var header = helper.e(".js-header");
    var nav = helper.e(".js-nav");
    var currentPosition = window.pageYOffset;
    if (currentPosition > 100) {
      if (previousPosition > currentPosition) {
        helper.removeClass(header, "is-up");
        helper.removeClass(nav, "is-up");
        body.dataset.headerUp = false;
      } else {
        helper.addClass(header, "is-up");
        helper.addClass(nav, "is-up");
        body.dataset.headerUp = true;
      };
      previousPosition = currentPosition;
    };
  };

  // exposed methods
  return {
    scroll: scroll
  };

})();
