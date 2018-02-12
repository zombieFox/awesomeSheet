var snack = (function() {

  var previousSnackBar = null;

  function destroy() {
    var all_snackBar = helper.eA(".js-snack-bar");
    if (all_snackBar[0]) {
      for (var i = 0; i < all_snackBar.length; i++) {
        all_snackBar[i].destroy();
      };
    };
  };

  function render(options) {
    var defaultOptions = {
      message: "Snack",
      button: false,
      action: null,
      destroyDelay: 4000,
      postSnack: null
    };
    if (options) {
      defaultOptions = helper.applyOptions(defaultOptions, options);
    };

    var body = helper.e("body");

    var snackBar = document.createElement("aside");
    snackBar.setAttribute("class", "m-snack-bar js-snack-bar");
    snackBar.destroy = function() {
      helper.addClass(snackBar, "is-transparent");
    };
    if (defaultOptions.message != null) {
      var text = document.createElement("p");
      text.setAttribute("class", "m-snack-bar-message");
      text.textContent = defaultOptions.message;
      snackBar.appendChild(text);
    };

    if (defaultOptions.button) {
      var destroyAction = snackBar.destroy.bind(snackBar);
      var actionButton = document.createElement("button");
      actionButton.setAttribute("class", "button button-medium button-tertiary m-snack-bar-button");
      if (typeof defaultOptions.button == "boolean" && defaultOptions.button) {
        helper.addClass(actionButton, "button-icon");
        var icon = document.createElement("span");
        icon.setAttribute("class", "icon icon-close");
        actionButton.appendChild(icon);
      } else {
        actionButton.textContent = defaultOptions.button;
      };
      actionButton.addEventListener("click", destroyAction);
      snackBar.appendChild(actionButton);
      if (defaultOptions.action) {
        actionButton.addEventListener("click", function(event) {
          event.stopPropagation();
          event.preventDefault();
          defaultOptions.action();
        }, false);
      };
    };

    snackBar.addEventListener("transitionend", function(event, elapsed) {
      if (event.propertyName === "opacity" && this.style.opacity == 0) {
        this.parentElement.removeChild(this);
        _checkBodyForSnack();
        if (defaultOptions.postSnack) {
          defaultOptions.postSnack();
        };
      };
    }.bind(snackBar), false);

    if (previousSnackBar) {
      previousSnackBar.destroy();
    };

    previousSnackBar = snackBar;

    setTimeout(function() {
      if (previousSnackBar === this) {
        previousSnackBar.destroy();
      };
    }.bind(snackBar), defaultOptions.destroyDelay);

    body.appendChild(snackBar);
    getComputedStyle(snackBar).opacity;
    getComputedStyle(snackBar).transform;
    getComputedStyle(snackBar).margin;
    helper.addClass(snackBar, "is-reveal");
    _checkBodyForSnack();
  };

  function _checkBodyForSnack() {
    var body = helper.e("body");
    var snackBar = helper.e(".js-snack-bar");
    if (snackBar) {
      helper.addClass(body, "is-onscreen-snack");
    } else {
      helper.removeClass(body, "is-onscreen-snack");
    };
  };

  // exposed methods
  return {
    destroy: destroy,
    render: render
  };

})();
