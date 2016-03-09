var prompt = (function() {

  function render(promptType, heading, content, confirmAction) {
    var body = helper.e("body");
    var promptShade = document.createElement("div");
    promptShade.setAttribute("class", "prompt prompt-shade");
    var prompt = document.createElement("div");
    prompt.setAttribute("class", "prompt prompt-modal");
    var container = document.createElement("div");
    container.setAttribute("class", "container");
    var rowForMessage = document.createElement("div");
    rowForMessage.setAttribute("class", "row");
    var rowForActions = document.createElement("div");
    rowForActions.setAttribute("class", "row");
    var colForMessage = document.createElement("div");
    colForMessage.setAttribute("class", "col-xs-12");
    var colForCancel = document.createElement("div");
    colForCancel.setAttribute("class", "col-xs-6");
    var colForConfirm = document.createElement("div");
    colForConfirm.setAttribute("class", "col-xs-6");
    var colForConfirmOnly = document.createElement("div");
    colForConfirmOnly.setAttribute("class", "col-xs-12 col-sm-6 col-sm-offset-6");
    var promptMessage = document.createElement("div");
    promptMessage.setAttribute("class", "prompt-message");
    var promptHeading = document.createElement("h1");
    var promptPara = document.createElement("p");
    var promptAction = document.createElement("button");
    promptAction.setAttribute("class", "button button-primary button-block prompt-action");
    var promptDownload = document.createElement("a");
    promptDownload.setAttribute("class", "button button-primary button-block prompt-action");
    promptDownload.setAttribute("download", sheet.getCharacter(sheet.getIndex()).input.name + ".json");
    var promptCencel = document.createElement("button");
    promptCencel.setAttribute("class", "button button-secondary button-block prompt-cancel");
    var promptPre = document.createElement("pre");
    if (promptType == "confirm") {
      promptHeading.textContent = heading;
      promptPara.textContent = content;
      promptAction.textContent = "OK";
      promptCencel.textContent = "Cancel";
      promptMessage.appendChild(promptHeading);
      promptMessage.appendChild(promptPara);
      colForMessage.appendChild(promptMessage);
      rowForMessage.appendChild(colForMessage);
      colForCancel.appendChild(promptCencel);
      rowForActions.appendChild(colForCancel);
      colForConfirm.appendChild(promptAction);
      rowForActions.appendChild(colForConfirm);
      container.appendChild(rowForMessage);
      container.appendChild(rowForActions);
      prompt.appendChild(container);
    };
    if (promptType == "code") {
      promptHeading.textContent = heading;
      promptPre.textContent = content;
      promptDownload.textContent = "Download";
      promptCencel.textContent = "Cancel";
      promptMessage.appendChild(promptHeading);
      promptMessage.appendChild(promptPre);
      colForMessage.appendChild(promptMessage);
      rowForMessage.appendChild(colForMessage);
      colForCancel.appendChild(promptCencel);
      colForConfirm.appendChild(promptDownload);
      rowForActions.appendChild(colForCancel);
      rowForActions.appendChild(colForConfirm);
      container.appendChild(rowForMessage);
      container.appendChild(rowForActions);
      prompt.appendChild(container);
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
