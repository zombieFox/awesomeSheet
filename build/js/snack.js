var snack = (function() {

  var previousSnackBar = null;

  function destroy() {
    var all_snackBar = helper.eA(".js-snack-bar");
    for (var i = 0; i < all_snackBar.length; i++) {
      all_snackBar[i].destroy();
    };
  };

  function render(message, actionText) {

    var body = helper.e("body");

    var snackBar = document.createElement("aside");
    snackBar.setAttribute("class", "m-snack-bar js-snack-bar");
    snackBar.destroy = function() {
      helper.addClass(snackBar, "is-transparent");
    };
    var text = document.createElement("p");
    text.setAttribute("class", "m-snack-bar-message");
    text.textContent = (message);
    snackBar.appendChild(text);

    if (actionText) {
      var action = snackBar.destroy.bind(snackBar);
      var actionButton = document.createElement("a");
      actionButton.setAttribute("class", "button button-tertiary m-snack-bar-button");
      actionButton.textContent = actionText;
      actionButton.addEventListener("click", action);
      snackBar.appendChild(actionButton);
    };

    snackBar.addEventListener("transitionend", function(event, elapsed) {
      if (event.propertyName === "opacity" && this.style.opacity == 0) {
        this.parentElement.removeChild(this);
        checkBodyForSnack();
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
    }.bind(snackBar), 4000);

    body.appendChild(snackBar);
    getComputedStyle(snackBar).opacity;
    getComputedStyle(snackBar).transform;
    getComputedStyle(snackBar).margin;
    helper.addClass(snackBar, "is-reveal");
    checkBodyForSnack();

  };

  function bind() {
    window.addEventListener("keydown", function(event) {
      if (event.keyCode == 27) {
        destroy();
      };
    }, false);
  };

  function checkBodyForSnack() {
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
    bind: bind,
    destroy: destroy,
    render: render
  }

})();
