var header = (function() {

  var previousPosition = window.pageYOffset;
  var target = null;

  function scroll() {
    var body = helper.e("body");
    var header = helper.e(".js-header");
    var nav = helper.e(".js-nav");
    var currentPosition = window.pageYOffset;
    if (previousPosition > currentPosition) {
      helper.removeClass(header, "is-pinned");
      helper.removeClass(nav, "is-pinned");
      body.dataset.headerPinned = false;
      target = null;
    } else {
      if (target == null) {
        if (body.dataset.headerPinned == "false" || !body.dataset.headerPinned) {
          target = window.pageYOffset + 199;
        };
      } else if (currentPosition == target || currentPosition >= target) {
        helper.addClass(header, "is-pinned");
        helper.addClass(nav, "is-pinned");
        body.dataset.headerPinned = true;
        target = null;
      };
    };
    previousPosition = currentPosition;
    // console.log("previous", previousPosition, "target", target);
  };

  // exposed methods
  return {
    scroll: scroll
  };

})();
