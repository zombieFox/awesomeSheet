var header = (function() {

  var delayScrollingTimer;
  var previousPosition = window.pageYOffset;
  var targetUp = null;
  var targetDown = null;

  var state = (function() {
    var _state = false;
    var get = function(options) {
      return _state;
    };
    var set = function(options) {
      var defaultOptions = {
        force: null,
        toggle: null
      };
      if (options) {
        defaultOptions = helper.applyOptions(defaultOptions, options);
      };
      if (defaultOptions.force != null) {
        _state = defaultOptions.force;
      } else if (defaultOptions.toggle != null) {
        if (_state) {
          _state = false;
        } else {
          _state = true;
        };
      };
    };
    // exposed methods
    return {
      set: set,
      get: get
    };
  })();

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

  var _timer_scroll = null;

  function _update_position() {
    var startingPoint = 0;
    var currentPosition = window.pageYOffset;
    var header = helper.e(".js-header");
    var top = header.getBoundingClientRect().top;
    var height = header.getBoundingClientRect().height;


    if (top >= (-height) || top <= 0) {

      startingPoint = top;

      if (top >= (-height) && top <= 0) {
        startingPoint = startingPoint + (previousPosition - currentPosition);
      };

      if (previousPosition < currentPosition) {
        // down
        if (startingPoint < (-height)) {
          startingPoint = -header;
        };
      } else if (previousPosition > currentPosition) {
        // up
        if (startingPoint > 0) {
          startingPoint = 0
        };
      };
      
      header.style.transition = "none";
      header.style.top = startingPoint + "px";

      clearTimeout(_timer_scroll);
      _timer_scroll = setTimeout(delayScroll, 300, this);

      // console.log(currentPosition);
      // console.log(top);

    };

    function delayScroll() {
      var header = helper.e(".js-header");
      var top = header.getBoundingClientRect().top;
      var height = header.getBoundingClientRect().height;
      if (top <= -(height / 2)) {
        header.style.transition = "top 0.1s ease";
        header.style.top = -height + "px";
      } else {
        header.style.transition = "top 0.1s ease";
        header.style.top = 0 + "px";
      };
    };



    // if (top > -height) {
    // 
    //   if (previousPosition > currentPosition) {
    //     console.log("up");
    //     header.style.top = -currentPosition + "px";
    //   } else {
    //     console.log("down");
    //     header.style.top = -currentPosition + "px";
    //   };
    // 
    // } else {
    // 
    //   if (previousPosition > currentPosition) {
    //     console.log("up");
    //     header.style.top = -currentPosition + "px";
    //   } else {
    //     console.log("down");
    //     header.style.top = -currentPosition + "px";
    //   };
    // 
    // };

    // if (currentPosition < 10) {
    //   targetDown = null;
    //   targetUp == null;
    //   unpin();
    //   nav.unpin();
    // } else if (previousPosition > currentPosition) {
    //   // console.log("scroll up");
    //   targetDown = null;
    //   if (targetUp == null) {
    //     targetUp = window.pageYOffset - 30;
    //   } else if (currentPosition <= targetUp || currentPosition <= 0) {
    //     // console.log("------ hit target up");
    //     unpin();
    //     nav.unpin();
    //   };
    // } else {
    //   // console.log("scroll down");
    //   targetUp = null;
    //   if (targetDown == null) {
    //     targetDown = window.pageYOffset + 100;
    //   } else if (currentPosition >= targetDown) {
    //     // console.log("------ hit target down");
    //     pin();
    //     nav.pin();
    //   };
    // };
    // clearTimeout(delayScrollingTimer);
    // delayScrollingTimer = setTimeout(function() {
    //   // console.log("stop scrolling");
    //   targetDown = null;
    //   targetUp = null;
    //   // console.log("previous", previousPosition, "targetDown", targetDown, "targetUp", targetUp);
    // }, 500);
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
    state: state,
    pin: pin,
    unpin: unpin,
    scroll: scroll,
    resize: resize
  };

})();
