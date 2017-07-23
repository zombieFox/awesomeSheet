var tip = (function() {

  function bind(tip) {
    if (tip) {
      _bind_tip(tip);
    } else {
      var all_tip = helper.eA(".js-tip");
      for (var i = 0; i < all_tip.length; i++) {
        if (all_tip[i].dataset.clone != "true") {
          _bind_tip(all_tip[i]);
        };
      };
    };
  };

  function _bind_tip(tip) {
    tip.addEventListener("focus", function() {
      render(tip);
    }, false);
    tip.addEventListener("blur", function() {
      destroy();
    }, false);
  };

  function destroy() {
    var all_tipBox = helper.eA(".js-tip-box");
    for (var i = 0; i < all_tipBox.length; i++) {
      all_tipBox[i].destroy();
    };
  };

  function render(tip) {
    // console.log(tip.getBoundingClientRect());
    var body = helper.e("body");
    var tipWrapper = document.createElement("div");
    tipWrapper.setAttribute("class", "m-tip js-tip-box is-transparent");
    var tipBox = document.createElement("p");
    tipBox.setAttribute("class", "m-tip-box");
    tipBox.textContent = tip.dataset.tip;
    tipWrapper.destroy = function() {
      helper.removeClass(tipWrapper, "is-opaque");
      helper.addClass(tipWrapper, "is-transparent");
    };
    tipWrapper.addEventListener("transitionend", function(event, elapsed) {
      if (event.propertyName === "opacity" && getComputedStyle(this).opacity == 0) {
        this.parentElement.removeChild(this);
      };
    }.bind(tipWrapper), false);

    tipWrapper.appendChild(tipBox);
    body.appendChild(tipWrapper);

    var top = tip.getBoundingClientRect().top - tipWrapper.getBoundingClientRect().height + pageYOffset - 20;
    var left = tip.getBoundingClientRect().left + (tip.getBoundingClientRect().width / 2) - (tipWrapper.getBoundingClientRect().width / 2);

    tipWrapper.setAttribute("style", "top:" + parseFloat(top).toFixed(2) + "px; left:" + parseFloat(left).toFixed(2) + "px");
    if (tipWrapper.getBoundingClientRect().right > (document.documentElement.clientWidth + 10)) {
      tipWrapper.setAttribute("style", "top:" + top + "px, left:" + parseFloat((document.documentElement.clientWidth - tipWrapper.getBoundingClientRect().width - 10)).toFixed(2) + "px)");
    } else if (tipWrapper.getBoundingClientRect().left < 10) {
      tipWrapper.setAttribute("style", "top:" + parseFloat(top).toFixed(2) + "px; left:" + 10 + "px");
    };

    getComputedStyle(tipWrapper).opacity;
    helper.removeClass(tipWrapper, "is-transparent");
    helper.addClass(tipWrapper, "is-opaque");
  };

  function _create_tip(message) {

    return tipBox;
  }

  // exposed methods
  return {
    bind: bind
  };

})();
