var prompt = (function() {

  var previousPrompt = null;

  function destroy() {
    var all_prompt = helper.eA(".js-prompt");
    if (all_prompt[0]) {
      for (var i = 0; i < all_prompt.length; i++) {
        all_prompt[i].destroy();
      };
    };
  };

  function render(options) {
    var defaultOptions = {
      heading: "Prompt",
      message: "Message",
      actionText: "OK",
      cancelText: "Cancel",
      action: null,
      actionUrl: null,
      customAttribute: {
        key: null,
        value: null
      }
    };
    if (options) {
      defaultOptions = helper.applyOptions(defaultOptions, options);
    };
    var makePrompt = function() {
      var body = helper.e("body");
      body.dataset.prompt = true;
      var promptWrapper = document.createElement("div");
      promptWrapper.setAttribute("class", "m-prompt-wrapper is-jumping-up");
      var prompt = document.createElement("div");
      prompt.setAttribute("class", "m-prompt js-prompt");
      prompt.destroy = function() {
        if (prompt.classList.contains("is-opaque") || promptWrapper.classList.contains("is-sitting")) {
          helper.removeClass(prompt, "is-opaque");
          helper.addClass(prompt, "is-transparent");
          helper.removeClass(promptWrapper, "is-sitting");
          helper.addClass(promptWrapper, "is-droping-down");
        } else {
          prompt.remove();
        };
        body.dataset.prompt = false;
      };
      var promptbody = document.createElement("div");
      promptbody.setAttribute("class", "m-prompt-body");
      var promptControls = document.createElement("div");
      promptControls.setAttribute("class", "m-prompt-controls button-group button-group-line button-group-equal");
      var actionButton = document.createElement("a");
      actionButton.setAttribute("href", "javascript:void(0)");
      actionButton.setAttribute("tabindex", "1");
      actionButton.setAttribute("class", "button button-primary button-large");
      actionButton.textContent = defaultOptions.actionText;
      var cancelButton = document.createElement("a");
      cancelButton.setAttribute("href", "javascript:void(0)");
      cancelButton.setAttribute("tabindex", "1");
      cancelButton.setAttribute("class", "button button-large");
      cancelButton.textContent = defaultOptions.cancelText;
      promptControls.appendChild(cancelButton);
      promptControls.appendChild(actionButton);
      if (defaultOptions.heading != null) {
        var promptHeading = document.createElement("h1");
        promptHeading.setAttribute("tabindex", "1");
        promptHeading.setAttribute("class", "m-prompt-heading");
        promptHeading.textContent = defaultOptions.heading;
        promptbody.appendChild(promptHeading);
      };
      if (defaultOptions.message != null) {
        var promptText = document.createElement("p");
        promptText.setAttribute("class", "m-prompt-text");
        promptText.textContent = defaultOptions.message;
        promptbody.appendChild(promptText);
      };
      promptWrapper.appendChild(promptbody);
      promptWrapper.appendChild(promptControls);
      prompt.appendChild(promptWrapper);
      prompt.addEventListener("transitionend", function(event, elapsed) {
        if (event.propertyName === "opacity" && getComputedStyle(this).opacity == 0) {
          this.parentElement.removeChild(this);
        };
        if (event.propertyName === "opacity" && getComputedStyle(this).opacity == 1) {
          helper.addClass(this, "is-transition-end");
        };
      }.bind(prompt), false);
      actionButton.addEventListener("click", function(event) {
        event.stopPropagation();
        this.destroy();
        shade.destroy();
        if (defaultOptions.action) {
          defaultOptions.action();
        };
        page.update();
      }.bind(prompt), false);
      if (defaultOptions.actionUrl) {
        actionButton.href = defaultOptions.actionUrl;
      };
      if (defaultOptions.customAttribute.key && defaultOptions.customAttribute.value) {
        actionButton.setAttribute(defaultOptions.customAttribute.key, defaultOptions.customAttribute.value);
      };
      cancelButton.addEventListener("click", function(event) {
        event.stopPropagation();
        this.destroy();
        shade.destroy();
        page.update();
      }.bind(prompt), false);
      previousPrompt = prompt;
      shade.render({
        action: function() {
          prompt.destroy();
          page.update();
        },
        includeHeader: true
      });
      body.appendChild(prompt);
      getComputedStyle(prompt).opacity;
      helper.removeClass(prompt, "is-transparent");
      helper.addClass(prompt, "is-opaque");
      helper.removeClass(promptWrapper, "is-jumping-up");
      helper.addClass(promptWrapper, "is-sitting");
      promptHeading.focus(this);
    };
    characterSelect.close();
    modal.destroy();
    menu.close();
    characterSelect.close();
    if (previousPrompt != null) {
      destroy();
    };
    makePrompt();
  };

  // exposed methods
  return {
    destroy: destroy,
    render: render
  };

})();
