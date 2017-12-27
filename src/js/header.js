var header = (function() {

  var scrollingDelay;
  var previousPosition = window.pageYOffset;
  var targetUp = null;
  var targetDown = null;

  function resize() {
    if (document.documentElement.clientWidth >= 900) {
      var body = helper.e("body");
      var header = helper.e(".js-header");
      var nav = helper.e(".js-nav");
      if (body.dataset.headerPinned == "true") {
        helper.removeClass(body, "is-header-pinned");
        helper.removeClass(header, "is-pinned");
        helper.removeClass(nav, "is-pinned");
        body.dataset.headerPinned = false;
      };
    };
  };

  function scroll() {
    if (document.documentElement.clientWidth >= 900) {
      _unpin();
    } else {
      _update_position();
    };
  };

  function _update_position() {
    var currentPosition = window.pageYOffset;
    if (previousPosition > currentPosition) {
      // console.log("scroll up");
      targetDown = null;
      if (targetUp == null) {
        targetUp = window.pageYOffset - 30;
      } else if (currentPosition <= targetUp || currentPosition <= 0) {
        // console.log("------ hit target up");
        _unpin();
      };
    } else {
      // console.log("scroll down");
      targetUp = null;
      if (targetDown == null) {
        targetDown = window.pageYOffset + 100;
      } else if (currentPosition >= targetDown) {
        // console.log("------ hit target down");
        _pin();
      };
    };
    clearTimeout(scrollingDelay);
    scrollingDelay = setTimeout(function() {
      // console.log("stop scrolling");
      targetDown = null;
      targetUp = null;
      // console.log("previous", previousPosition, "targetDown", targetDown, "targetUp", targetUp);
    }, 500);
    previousPosition = currentPosition;
    // console.log("previous", previousPosition, "targetDown", targetDown, "targetUp", targetUp);
  };

  function _unpin() {
    var body = helper.e("body");
    var header = helper.e(".js-header");
    var nav = helper.e(".js-nav");
    helper.removeClass(body, "is-header-pinned");
    helper.removeClass(header, "is-pinned");
    if (document.documentElement.clientWidth < 900) {
      helper.removeClass(nav, "is-pinned");
    };
    body.dataset.headerPinned = false;
  };

  function _pin() {
    var body = helper.e("body");
    var header = helper.e(".js-header");
    var nav = helper.e(".js-nav");
    helper.addClass(body, "is-header-pinned");
    helper.addClass(header, "is-pinned");
    if (document.documentElement.clientWidth < 900) {
      helper.addClass(nav, "is-pinned");
    };
    body.dataset.headerPinned = true;
  };

  // exposed methods
  return {
    scroll: scroll,
    resize: resize
  };

})();
