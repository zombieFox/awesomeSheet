var header = (function() {

  var delayScrollingTimer;
  var previousPosition = window.pageYOffset;
  var targetUp = null;
  var targetDown = null;

  function resize() {
    if (document.documentElement.clientWidth >= 900) {
      unpin();
      nav.unpin();
    };
  };

  function scroll() {
    if (document.documentElement.clientWidth >= 900) {
      if (body.dataset.headerPinned == "true") {
        unpin();
        nav.unpin();
      };
    } else {
      _update_position();
    };
  };

  function _update_position() {
    var currentPosition = window.pageYOffset;
    if (currentPosition < 10) {
      targetDown = null;
      targetUp == null;
      unpin();
      nav.unpin();
    } else if (previousPosition > currentPosition) {
      // console.log("scroll up");
      targetDown = null;
      if (targetUp == null) {
        targetUp = window.pageYOffset - 30;
      } else if (currentPosition <= targetUp || currentPosition <= 0) {
        // console.log("------ hit target up");
        unpin();
        nav.unpin();
      };
    } else {
      // console.log("scroll down");
      targetUp = null;
      if (targetDown == null) {
        targetDown = window.pageYOffset + 100;
      } else if (currentPosition >= targetDown) {
        // console.log("------ hit target down");
        pin();
        nav.pin();
      };
    };
    clearTimeout(delayScrollingTimer);
    delayScrollingTimer = setTimeout(function() {
      // console.log("stop scrolling");
      targetDown = null;
      targetUp = null;
      // console.log("previous", previousPosition, "targetDown", targetDown, "targetUp", targetUp);
    }, 500);
    previousPosition = currentPosition;
    // console.log("previous", previousPosition, "targetDown", targetDown, "targetUp", targetUp);
  };

  function unpin() {
    var body = helper.e("body");
    var header = helper.e(".js-header");
    helper.removeClass(body, "is-header-pinned");
    helper.removeClass(header, "is-pinned");
    body.dataset.headerPinned = false;
  };

  function pin() {
    var body = helper.e("body");
    var header = helper.e(".js-header");
    helper.addClass(body, "is-header-pinned");
    helper.addClass(header, "is-pinned");
    body.dataset.headerPinned = true;
  };

  // exposed methods
  return {
    pin: pin,
    unpin: unpin,
    scroll: scroll,
    resize: resize
  };

})();
