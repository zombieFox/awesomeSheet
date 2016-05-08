var prompt = (function() {

  var previousPrompt = null;
  var previouspromptShade = null;

  function destroy() {
    var prompt = helper.e(".js-prompt");
    var promptShade = helper.e(".js-prompt-shade");
    if (prompt) {
      getComputedStyle(prompt).opacity;
      prompt.style.opacity = 0;
    };
    if (promptShade) {
      getComputedStyle(promptShade).opacity;
      promptShade.style.opacity = 0;
    };
  };

  function render(heading, message, actionText, action) {

    var body = helper.e("body");

    var promptShade = document.createElement("div");
    promptShade.setAttribute("class", "m-prompt-shade js-prompt-shade");
    promptShade.destroy = function() {
      helper.addClass(promptShade, "is-transparent");
    };

    var prompt = document.createElement("div");
    prompt.setAttribute("class", "m-prompt js-prompt");
    prompt.destroy = function() {
      helper.addClass(prompt, "is-transparent");
    };

    var promptMessage = document.createElement("div");
    promptMessage.setAttribute("class", "m-prompt-message");

    var promptHeading = document.createElement("h1");
    promptHeading.setAttribute("class", "m-prompt-heading");
    promptHeading.textContent = heading;

    var promptText = document.createElement("p");
    promptText.setAttribute("class", "m-prompt-text");
    promptText.textContent = message;

    var promptControls = document.createElement("div");
    promptControls.setAttribute("class", "m-prompt-controls");

    var actionButton = document.createElement("a");
    actionButton.className = "button button-primary button-block js-prompt-action";
    actionButton.textContent = actionText;

    var cancelButton = document.createElement("a");
    cancelButton.setAttribute("class", "button button-block");
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

    actionButton.addEventListener("click", destroy, false);
    cancelButton.addEventListener("click", destroy, false);
    promptShade.addEventListener("click", destroy, false);

    prompt.addEventListener("transitionend", function(event, elapsed) {
      if (event.propertyName === "opacity" && this.style.opacity == 0) {
        this.parentElement.removeChild(this);
      };
    }.bind(prompt), false);

    promptShade.addEventListener("transitionend", function(event, elapsed) {
      if (event.propertyName === "opacity" && this.style.opacity == 0) {
        this.parentElement.removeChild(this);
      };
    }.bind(promptShade), false);

    if (previousPrompt) {
      previousPrompt.destroy();
    };

    if (previouspromptShade) {
      previouspromptShade.destroy();
    };

    previouspromptShade = promptShade;
    previousPrompt = prompt;

    body.appendChild(promptShade);
    body.appendChild(prompt);
    // In order for the animations to trigger, I have to force the original style to be computed, and then change it.
    getComputedStyle(prompt).opacity;
    getComputedStyle(promptShade).opacity;
    prompt.style.opacity = 1;
    promptShade.style.opacity = 1;
    helper.addClass(prompt, "is-reveal");
    helper.addClass(promptShade, "is-reveal");

    window.addEventListener("keydown", function(event) {
      if (event.keyCode == 27) {
        destroy();
      };
    }, false);

  };

  // exposed methods
  return {
    destroy: destroy,
    render: render
  }

})();
