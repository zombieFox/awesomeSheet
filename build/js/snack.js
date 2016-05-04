var snack = (function() {

  var previousSnackBar = null;

  function destroy() {
    var snackBar = helper.e(".js-snack-bar");
    if (snackBar) {
      getComputedStyle(snackBar).opacity;
      snackBar.style.opacity = 0;
    };
  };

  function render(message, actionText) {

    if (previousSnackBar) {
      previousSnackBar.destroy();
    };

    var snackBar = document.createElement("aside");
    snackBar.setAttribute("class", "m-snack-bar js-snack-bar");
    snackBar.destroy = function() {
      this.style.opacity = 0;
    };

    snackBar.addEventListener("transitionend", function(event, elapsed) {
      if (event.propertyName === "opacity" && this.style.opacity == 0) {
        this.parentElement.removeChild(this);
        if (previousSnackBar === this) {
          previousSnackBar = null;
        };
      };
    }.bind(snackBar), false);

    var text = document.createElement("p");
    text.className = "m-snack-bar-message";
    text.textContent = (message);
    snackBar.appendChild(text);

    if (actionText) {
      var action = snackBar.destroy.bind(snackBar);
      var actionButton = document.createElement("a");
      actionButton.className = "button button-tertiary m-snack-bar-button";
      actionButton.textContent = actionText;
      actionButton.addEventListener("click", action);
      snackBar.appendChild(actionButton);
    };

    setTimeout(function() {
      if (previousSnackBar === this) {
        previousSnackBar.destroy();
      };
    }.bind(snackBar), 5000);

    previousSnackBar = snackBar;

    document.body.appendChild(snackBar);
    // In order for the animations to trigger, I have to force the original style to be computed, and then change it.
    getComputedStyle(snackBar).opacity;
    snackBar.style.opacity = 1;
    helper.addClass(snackBar, "is-reveal");

  };

  // exposed methods
  return {
    destroy: destroy,
    render: render
  }

})();
