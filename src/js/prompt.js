var prompt = (function() {

  function render(promptType, heading, text, confirmAction) {
    var body = helper.e("body");
    var promptShade = document.createElement("div");
    promptShade.setAttribute("class", "prompt prompt-shade");
    var prompt = document.createElement("div");
    var promptControls = document.createElement("div");
    promptControls.setAttribute("class", "prompt-controls");
    var promptMessage = document.createElement("div");
    promptMessage.setAttribute("class", "prompt-message");
    var promptHeading = document.createElement("h1");
    promptHeading.setAttribute("class", "prompt-heading");
    var promptText = document.createElement("p");
    promptText.setAttribute("class", "prompt-text");
    var promptCode = document.createElement("pre");
    promptCode.setAttribute("class", "prompt-code");
    var promptAction = document.createElement("button");
    promptAction.setAttribute("class", "button button-primary button-block prompt-action");
    var promptCencel = document.createElement("button");
    promptCencel.setAttribute("class", "button button-secondary button-block prompt-cancel");
    var promptDownload = document.createElement("a");
    promptDownload.setAttribute("class", "button button-primary button-block prompt-action");
    promptDownload.setAttribute("download", sheet.getCharacter().basics.name + ".json");
    if (promptType == "confirm") {
      promptHeading.textContent = heading;
      promptText.textContent = text;
      promptAction.textContent = "OK";
      promptCencel.textContent = "Cancel";
      promptMessage.appendChild(promptHeading);
      promptMessage.appendChild(promptText);
      prompt.appendChild(promptMessage);
      promptControls.appendChild(promptCencel);
      promptControls.appendChild(promptAction);
      prompt.appendChild(promptControls);
      prompt.setAttribute("class", "prompt prompt-modal confirm");
    };
    if (promptType == "code") {
      promptHeading.textContent = heading;
      promptCode.textContent = text;
      promptDownload.textContent = "Download";
      promptCencel.textContent = "Cancel";
      promptMessage.appendChild(promptHeading);
      prompt.appendChild(promptMessage);
      prompt.appendChild(promptCode);
      promptControls.appendChild(promptCencel);
      promptControls.appendChild(promptDownload);
      prompt.appendChild(promptControls);
      prompt.setAttribute("class", "prompt prompt-modal code");
    };
    // append prompt and shade
    if (!body.querySelector(".prompt.prompt-shade") && !body.querySelector(".prompt.prompt-modal")) {
      body.appendChild(promptShade);
      body.appendChild(prompt);
      var _reveal_prompt = function() {
        helper.addClass(prompt, "reveal");
        helper.addClass(promptShade, "reveal");
      };
      helper.delayFunction(_reveal_prompt, 10);
      _bind(confirmAction);
    };
  };

  function destroy() {
    var promptShade = helper.e(".prompt-shade");
    var promptModal = helper.e(".prompt-modal");
    var promptCancel = helper.e(".prompt-modal .prompt-cancel");
    if (promptShade && promptModal) {
      promptShade.style.opacity = 0;
      promptModal.style.opacity = 0;

      var _delay_destroy = function() {
        promptShade.remove();
        promptModal.remove();
      }
      helper.delayFunction(_delay_destroy, 500);
    };
  };

  function _bind(confirmAction) {
    var promptShade = helper.e(".prompt-shade");
    var promptModal = helper.e(".prompt-modal");
    var promptAction = helper.e(".prompt-modal .prompt-action");
    var promptCancel = helper.e(".prompt-modal .prompt-cancel");
    promptShade.addEventListener('click', function() {
      destroy();
    });
    if (confirmAction == "clear all") {
      promptAction.addEventListener('click', function() {
        destroy();
        sheet.destroy();
      }, false);
    };
    if (confirmAction == "clear character") {
      promptAction.addEventListener('click', function() {
        sheet.removeCharacter();
        destroy();
      }, false);
    };
    if (confirmAction == "download") {
      promptAction.addEventListener('click', function() {
        destroy();
        sheet.download(this);
      }, false);
    };
    promptCancel.addEventListener('click', function() {
      destroy();
    }, false);
    window.addEventListener("keydown", function(event) {
      if (event.keyCode == 27) {
        destroy();
      };
    }, false);
  };

  // exposed methods
  return {
    render: render,
    destroy: destroy
  };

})();
