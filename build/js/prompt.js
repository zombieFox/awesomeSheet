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

    if (previousPrompt) {
      previousPrompt.destroy();
    };

    if (previouspromptShade) {
      previouspromptShade.destroy();
    };

    var promptShade = document.createElement("div");
    promptShade.setAttribute("class", "m-prompt-shade js-prompt-shade");
    promptShade.destroy = function() {
      this.style.opacity = 0;
    };

    var prompt = document.createElement("div");
    prompt.setAttribute("class", "m-prompt js-prompt");
    prompt.destroy = function() {
      this.style.opacity = 0;
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
    actionButton.className = "button button-primary button-block";
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
        if (previousPrompt === this) {
          previousPrompt = null;
        };
      };
    }.bind(prompt), false);

    promptShade.addEventListener("transitionend", function(event, elapsed) {
      if (event.propertyName === "opacity" && this.style.opacity == 0) {
        this.parentElement.removeChild(this);
        if (previouspromptShade === this) {
          previouspromptShade = null;
        };
      };
    }.bind(promptShade), false);

    previouspromptShade = promptShade;
    previousPrompt = prompt;

    document.body.appendChild(promptShade);
    document.body.appendChild(prompt);
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



// var xxx_prompt = (function() {

//   function render(promptType, heading, text, confirmAction) {
//     var body = helper.e("body");
//     var promptShade = document.createElement("div");
//     promptShade.setAttribute("class", "m-prompt-shade js-prompt-shade");
//     var prompt = document.createElement("div");
//     var promptControls = document.createElement("div");
//     promptControls.setAttribute("class", "prompt-controls");
//     var promptMessage = document.createElement("div");
//     promptMessage.setAttribute("class", "prompt-message");
//     var promptHeading = document.createElement("h1");
//     promptHeading.setAttribute("class", "prompt-heading");
//     var promptText = document.createElement("p");
//     promptText.setAttribute("class", "prompt-text");
//     var promptCode = document.createElement("pre");
//     promptCode.setAttribute("class", "prompt-code");
//     var promptCencel = document.createElement("a");
//     promptCencel.setAttribute("class", "button button-block prompt-cancel");
//     if (promptType == "confirm") {
//       var promptAction = document.createElement("button");
//       promptAction.setAttribute("class", "button button-primary button-block prompt-action");
//       promptAction.textContent = "OK";
//       promptHeading.textContent = heading;
//       promptText.textContent = text;
//       promptCencel.textContent = "Cancel";
//       promptMessage.appendChild(promptHeading);
//       promptMessage.appendChild(promptText);
//       prompt.appendChild(promptMessage);
//       promptControls.appendChild(promptCencel);
//       promptControls.appendChild(promptAction);
//       prompt.appendChild(promptControls);
//       prompt.setAttribute("class", "prompt prompt-modal confirm");
//     };
//     if (promptType == "download") {
//       var promptAction = document.createElement("a");
//       promptAction.setAttribute("class", "button button-primary button-block prompt-action");
//       promptAction.setAttribute("download", sheet.getCharacter().basics.name + ".json");
//       promptAction.textContent = "Download";
//       promptAction.href = "data:" + "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(sheet.getCharacter()), null, " ");
//       promptHeading.textContent = heading;
//       promptCode.textContent = text;
//       promptCencel.textContent = "Cancel";
//       promptMessage.appendChild(promptHeading);
//       prompt.appendChild(promptMessage);
//       prompt.appendChild(promptCode);
//       promptControls.appendChild(promptCencel);
//       promptControls.appendChild(promptAction);
//       prompt.appendChild(promptControls);
//       prompt.setAttribute("class", "prompt prompt-modal code");
//     };
//     // append prompt and shade
//     if (!body.querySelector(".prompt.prompt-shade") && !body.querySelector(".prompt.prompt-modal")) {
//       body.appendChild(promptShade);
//       body.appendChild(prompt);
//       var _reveal_prompt = function() {
//         helper.addClass(prompt, "is-reveal");
//         helper.addClass(promptShade, "is-reveal");
//       };
//       helper.delayFunction(_reveal_prompt, 10);
//       _bind(confirmAction);
//     };
//     promptAction.focus();
//   };

//   function destroy() {
//     var promptShade = helper.e(".prompt-shade");
//     var promptModal = helper.e(".prompt-modal");
//     var promptCancel = helper.e(".prompt-modal .prompt-cancel");
//     if (promptShade && promptModal) {
//       promptShade.style.opacity = 0;
//       promptModal.style.opacity = 0;

//       var _delay_destroy = function() {
//         promptShade.remove();
//         promptModal.remove();
//       }
//       helper.delayFunction(_delay_destroy, 500);
//     };
//   };

//   function _bind(confirmAction) {
//     var promptShade = helper.e(".js-prompt-shade");
//     var promptModal = helper.e(".js-prompt-modal");
//     var promptAction = helper.e(".js-prompt-action");
//     var promptCancel = helper.e(".js-prompt-cancel");
//     promptShade.addEventListener('click', function() {
//       destroy();
//     });
//     if (confirmAction == "clear all") {
//       promptAction.addEventListener('click', function() {
//         destroy();
//         sheet.destroy();
//       }, false);
//     };
//     if (confirmAction == "clear character") {
//       promptAction.addEventListener('click', function() {
//         sheet.removeCharacter();
//         destroy();
//       }, false);
//     };
//     if (confirmAction == "download") {
//       promptAction.addEventListener('click', function() {
//         destroy();
//       }, false);
//     };
//     promptCancel.addEventListener('click', function() {
//       destroy();
//     }, false);
//     window.addEventListener("keydown", function(event) {
//       if (event.keyCode == 27) {
//         destroy();
//       };
//     }, false);
//   };

//   // exposed methods
//   return {
//     render: render,
//     destroy: destroy
//   };

// })();
