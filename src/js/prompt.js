var prompt = (function() {

  var previousPrompt = null;
  var previouspromptShade = null;

  function destroy() {
    var prompt = helper.e(".js-prompt");
    var promptShade = helper.e(".js-prompt-shade");
    if (prompt) {
      getComputedStyle(prompt).opacity;
      helper.removeClass(prompt, "is-opaque");
      helper.addClass(prompt, "is-transparent");
    };
    if (promptShade) {
      getComputedStyle(promptShade).opacity;
      helper.removeClass(promptShade, "is-opaque");
      helper.addClass(promptShade, "is-transparent");
    };
  };

  function render(heading, message, actionText, action) {

    var body = helper.e("body");

    // make new shade
    var promptShade = document.createElement("div");
    promptShade.setAttribute("class", "m-prompt-shade js-prompt-shade");
    promptShade.destroy = function() {
      helper.removeClass(promptShade, "is-opaque");
      helper.addClass(promptShade, "is-transparent");
      // promptShade.style.opacity = 0;
    };

    var prompt = document.createElement("div");
    prompt.setAttribute("class", "m-prompt js-prompt");
    prompt.destroy = function() {
      helper.removeClass(prompt, "is-opaque");
      helper.addClass(prompt, "is-transparent");
    };

    var promptMessage = document.createElement("div");
    promptMessage.setAttribute("class", "m-prompt-message");

    var promptHeading = document.createElement("h1");
    promptHeading.setAttribute("tabindex", "3");
    promptHeading.setAttribute("class", "m-prompt-heading");
    promptHeading.textContent = heading;

    var promptText = document.createElement("p");
    promptText.setAttribute("class", "m-prompt-text");
    promptText.textContent = message;

    var promptControls = document.createElement("div");
    promptControls.setAttribute("class", "m-prompt-controls");

    var actionButton = document.createElement("a");
    actionButton.setAttribute("href", "javascript:void(0)");
    actionButton.setAttribute("tabindex", "3");
    actionButton.setAttribute("class", "button button-primary button-block button-large js-prompt-action");
    actionButton.textContent = actionText;

    var cancelButton = document.createElement("a");
    cancelButton.setAttribute("href", "javascript:void(0)");
    cancelButton.setAttribute("tabindex", "3");
    cancelButton.setAttribute("class", "button button-block button-large");
    cancelButton.textContent = "Cancel";

    promptControls.appendChild(cancelButton);
    promptControls.appendChild(actionButton);
    promptMessage.appendChild(promptHeading);
    if (message != false) {
      promptMessage.appendChild(promptText);
    };
    prompt.appendChild(promptMessage);
    prompt.appendChild(promptControls);

    if (action == "download") {
      actionButton.addEventListener("click", action, false);
      actionButton.setAttribute("download", sheet.getCharacter().basics.name + ".json");
      actionButton.href = "data:" + "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(sheet.getCharacter()), null, " ");
    } else {
      actionButton.addEventListener("click", action, false);
    };

    prompt.addEventListener("transitionend", function(event, elapsed) {
      if (event.propertyName === "opacity" && getComputedStyle(this).opacity == 0) {
        this.parentElement.removeChild(this);
      };
    }.bind(prompt), false);

    promptShade.addEventListener("transitionend", function(event, elapsed) {
      if (event.propertyName === "opacity" && getComputedStyle(this).opacity == 0) {
        this.parentElement.removeChild(this);
      };
    }.bind(promptShade), false);

    actionButton.addEventListener("click", destroy, false);
    cancelButton.addEventListener("click", destroy, false);
    promptShade.addEventListener("click", destroy, false);

    if (previousPrompt) {
      previousPrompt.destroy();
    };

    if (previouspromptShade) {
      previouspromptShade.destroy();
    };

    previousPrompt = prompt;
    previouspromptShade = promptShade;

    body.appendChild(promptShade);
    body.appendChild(prompt);

    getComputedStyle(prompt).opacity;
    getComputedStyle(promptShade).opacity;
    // prompt.style.opacity = 1;
    // promptShade.style.opacity = 1;
    helper.removeClass(prompt, "is-transparent");
    helper.addClass(prompt, "is-opaque");
    helper.removeClass(promptShade, "is-transparent");
    helper.addClass(promptShade, "is-opaque");
    promptHeading.focus(this);

  };

  function bind() {
    window.addEventListener("keydown", function(event) {
      if (event.keyCode == 27) {
        destroy();
      };
    }, false);
  };

  // exposed methods
  return {
    bind: bind,
    destroy: destroy,
    render: render
  }

})();
