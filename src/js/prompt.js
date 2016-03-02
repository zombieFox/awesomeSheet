var prompt = (function() {

  function render(heading, message, confirmAction) {
    var body = helper.e("body");
    var promptShade = document.createElement("div");
    promptShade.setAttribute("class", "prompt prompt-shade");
    var prompt = document.createElement("div");
    prompt.setAttribute("class", "prompt prompt-modal");
    var container = document.createElement("div");
    container.setAttribute("class", "container");
    var row1 = document.createElement("div");
    row1.setAttribute("class", "row");
    var row2 = document.createElement("div");
    row2.setAttribute("class", "row");
    var col1 = document.createElement("div");
    col1.setAttribute("class", "col-xs-12");
    var col2 = document.createElement("div");
    col2.setAttribute("class", "col-xs-6");
    var col3 = document.createElement("div");
    col3.setAttribute("class", "col-xs-6");
    var promptMessage = document.createElement("div");
    promptMessage.setAttribute("class", "prompt-message");
    var promptHeading = document.createElement("h1");
    promptHeading.textContent = heading;
    var promptPara = document.createElement("p");
    promptPara.textContent = message;
    var promptAction = document.createElement("button");
    promptAction.setAttribute("class", "button button-primary button-block prompt-action");
    promptAction.textContent = "OK";
    var promptCencel = document.createElement("button");
    promptCencel.setAttribute("class", "button button-secondary button-block prompt-cancel");
    promptCencel.textContent = "Cancel";
    // connect elements
    promptMessage.appendChild(promptHeading);
    promptMessage.appendChild(promptPara);
    col1.appendChild(promptMessage);
    col2.appendChild(promptCencel);
    col3.appendChild(promptAction);
    row1.appendChild(col1);
    row2.appendChild(col2);
    row2.appendChild(col3);
    container.appendChild(row1);
    container.appendChild(row2);
    prompt.appendChild(container);
    // append prompt and shade
    if (!body.querySelector(".prompt.prompt-shade") && !body.querySelector(".prompt.prompt-modal")) {
      body.appendChild(promptShade);
      body.appendChild(prompt);

      function _reveal_prompt() {
        helper.addClass(prompt, "reveal");
        helper.addClass(promptShade, "reveal");
      };
      helper.delayFunction(_reveal_prompt, 10);
      addListenerTo_prompt(confirmAction);
    };
  };

  function destroy() {
    var promptShade = helper.e(".prompt-shade");
    var promptModal = helper.e(".prompt-modal");
    var promptCancel = helper.e(".prompt-modal .prompt-cancel");
    if (promptShade && promptModal) {
      promptShade.style.opacity = 0;
      promptModal.style.opacity = 0;

      function delay_destroy() {
        promptShade.remove();
        promptModal.remove();
      }
      helper.delayFunction(delay_destroy, 500);
    };
  };

  function addListenerTo_prompt(confirmAction) {
    var promptShade = helper.e(".prompt-shade");
    var promptModal = helper.e(".prompt-modal");
    var promptAction = helper.e(".prompt-modal .prompt-action");
    var promptCancel = helper.e(".prompt-modal .prompt-cancel");
    promptShade.addEventListener('click', function() {
      destroy();
    });
    promptCancel.addEventListener('click', function() {
      destroy();
    });
    if (confirmAction == "clear all") {
      promptAction.addEventListener('click', function() {
        sheet.destroy();
      });
    };
  };

  return {
    render: render,
    destroy: destroy
  };

})();
