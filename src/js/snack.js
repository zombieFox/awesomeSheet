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

      function removeReveal() {
        helper.removeClass(snackBarToRemove, "reveal");
      };
      helper.delayFunction(removeReveal, 100);

      function deleteSnackBar() {
        snackBarToRemove.remove();
      };
      helper.delayFunction(deleteSnackBar, 400);
    };
    // append snack bar
    element_snackBars.appendChild(snackBar);
    // add listners
    addListenerTo_snackBar(snackBar);
    // reveal snack bar
    var revealSnackBar = function() {
      helper.addClass(snackBar, "reveal");
    };
    helper.delayFunction(revealSnackBar, 10);
    // auto clear snack bar
    var delay_destroy = function() {
      // if the snack bar hasn't been dismised or undone
      if (snackBar) {
        destroy(snackBar);
      };
    };
    helper.delayFunction(delay_destroy, 5000);
  };

  // add listeners to snack bar buttons
  function addListenerTo_snackBar(element) {
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
  };

  // snack bar clear
  function destroy(element) {
    if (element) {
      var snackBar = helper.getClosest(element, ".snack-bar");
    } else {
      var snackBar = helper.e(".snack-bar");
    };
    if (snackBar) {
      function removeReveal() {
        helper.removeClass(snackBar, "reveal");
      };
      helper.delayFunction(removeReveal, 10);

      function deleteSnackBar() {
        snackBar.remove();
      };
      helper.delayFunction(deleteSnackBar, 500);
    };
  };

  return {
    render: render,
    destroy: destroy
  }

})();
