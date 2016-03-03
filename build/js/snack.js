var snack = (function() {

  function render(message, close) {
    var element_snackBars = helper.e(".snacks .snack-bars");
    // make snack bar elements
    var snackBar = document.createElement("div");
    snackBar.setAttribute("class", "snack-bar");
    var row = document.createElement("div");
    row.setAttribute("class", "row");
    var col1 = document.createElement("div");
    col1.setAttribute("class", "col-xs-7");
    var col2 = document.createElement("div");
    col2.setAttribute("class", "col-xs-5");
    var snackClose = document.createElement("button");
    snackClose.setAttribute("class", "button button-dark button-small snack-clear");
    // var snackUndo = document.createElement("button");
    // snackUndo.setAttribute("class", "button button-dark button-small snack-undo");
    // snackUndo.textContent = "Undo";
    var iconClose = document.createElement("span");
    iconClose.setAttribute("class", "icon-close");
    var snackMessage = document.createElement("p");
    snackMessage.setAttribute("class", "snack-message");
    snackMessage.textContent = message;
    snackClose.appendChild(iconClose);
    // connect elements
    if (close) {
      col2.appendChild(snackClose);
    };
    // if (undo) {
    //   col2.appendChild(snackUndo);
    // };
    col1.appendChild(snackMessage);
    row.appendChild(col1);
    row.appendChild(col2);
    // container.appendChild(row);
    snackBar.appendChild(row);
    // mark current snack bars for removal
    var allSnackBars = element_snackBars.querySelectorAll(".snack-bar");
    for (var i = 0; i < allSnackBars.length; i++) {
      var snackBarToRemove = allSnackBars[i];

      var _removeReveal = function() {
        helper.removeClass(snackBarToRemove, "reveal");
      };
      helper.delayFunction(_removeReveal, 100);

      var _deleteSnackBar = function() {
        snackBarToRemove.remove();
      };
      helper.delayFunction(_deleteSnackBar, 400);
    };
    // append snack bar
    element_snackBars.appendChild(snackBar);
    // add listners
    _bind(snackBar);
    // reveal snack bar
    var _revealSnackBar = function() {
      helper.addClass(snackBar, "reveal");
    };
    helper.delayFunction(_revealSnackBar, 10);
    // auto clear snack bar
    var _delay_destroy = function() {
      // if the snack bar hasn't been dismised or undone
      if (snackBar) {
        destroy(snackBar);
      };
    };
    helper.delayFunction(_delay_destroy, 5000);
  };

  // add listeners to snack bar buttons
  function _bind(element) {
    var snack = helper.getClosest(element, ".snack-bar");
    var clear = snack.querySelector(".snack-clear");
    // var undo = snack.querySelector(".snack-undo");
    // add listner to clear
    if (clear) {
      clear.addEventListener("click", function() {
        destroy(this);
      }, false);
    };
    // add listner to undo
    // if (undo) {
    //   undo.addEventListener("click", function() {
    //     undoSnackBar(this);
    //     checkListListState();
    //   }, false);
    // };
    window.addEventListener("keydown", function(event) {
      if (event.keyCode == 27) {
        destroy();
      };
    }, false);
  };

  // snack bar clear
  function destroy(element) {
    if (element) {
      var snackBar = helper.getClosest(element, ".snack-bar");
    } else {
      var snackBar = helper.e(".snack-bar");
    };
    if (snackBar) {
      var _removeReveal = function() {
        helper.removeClass(snackBar, "reveal");
      };
      helper.delayFunction(_removeReveal, 10);

      var _deleteSnackBar = function() {
        snackBar.remove();
      };
      helper.delayFunction(_deleteSnackBar, 500);
    };
  };

  // exposed methods
  return {
    render: render,
    destroy: destroy
  }

})();
