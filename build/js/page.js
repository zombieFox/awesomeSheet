var page = (function() {

  function update() {
    var body = helper.e("body");
    var modal = (body.dataset.modal == "true");
    var prompt = (body.dataset.prompt == "true");
    var nav = (body.dataset.navOpen == "true");
    if (modal || prompt || nav) {
      helper.addClass(body, "is-scrolll-disabled");
    } else {
      helper.removeClass(body, "is-scrolll-disabled");
    };
  };

  function lock() {
    var body = helper.e("body");
    helper.addClass(body, "is-scrolll-disabled");
  };

  function unlock() {
    var body = helper.e("body");
    helper.removeClass(body, "is-scrolll-disabled");
  };

  // exposed methods
  return {
    lock: lock,
    unlock: unlock,
    update: update
  };

})();
