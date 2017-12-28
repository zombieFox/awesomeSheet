var modal = (function() {

  var previousModal = null;

  function bind() {
    window.addEventListener("keydown", function(event) {
      if (event.keyCode == 27) {
        destroy();
        page.update();
      };
    }, false);
  };

  function destroy() {
    var all_modal = helper.eA(".js-modal");
    if (all_modal[0]) {
      for (var i = 0; i < all_modal.length; i++) {
        all_modal[i].destroy();
      };
    };
  };

  function render(options) {
    var defaultOptions = {
      heading: "Modal",
      content: "Body",
      action: null,
      actionText: "OK",
      size: "medium"
    };
    if (options) {
      var defaultOptions = helper.applyOptions(defaultOptions, options);
    };
    var makeModal = function() {
      var body = helper.e("body");
      body.dataset.modal = true;
      var modalWrapper = document.createElement("div");
      modalWrapper.setAttribute("class", "m-modal-wrapper js-modal-wrapper is-unrotate-out");
      var modal = document.createElement("div");
      if (defaultOptions.size == "large") {
        modal.setAttribute("class", "m-modal m-modal-large js-modal");
      } else if (defaultOptions.size == "small") {
        modal.setAttribute("class", "m-modal m-modal-small js-modal");
      } else if (defaultOptions.size) {
        modal.setAttribute("class", "m-modal js-modal");
      };
      modal.destroy = function() {
        if (modal.classList.contains("is-opaque") || modalWrapper.classList.contains("is-unrotate-in")) {
          helper.removeClass(modal, "is-opaque");
          helper.addClass(modal, "is-transparent");
          helper.removeClass(modalWrapper, "is-unrotate-in");
          helper.addClass(modalWrapper, "is-dropped-out");
        } else {
          modal.remove();
        };
        body.dataset.modal = false;
      };
      var modalBody = document.createElement("div");
      modalBody.setAttribute("class", "m-modal-body u-clearfix");
      var modalControls = document.createElement("div");
      modalControls.setAttribute("class", "m-modal-controls");
      var actionButton = document.createElement("a");
      actionButton.setAttribute("href", "javascript:void(0)");
      actionButton.setAttribute("tabindex", "1");
      actionButton.setAttribute("class", "button button-primary button-block button-large");
      actionButton.textContent = defaultOptions.actionText;
      modalControls.appendChild(actionButton);
      if (defaultOptions.heading != null) {
        var modalHeading = document.createElement("h1");
        modalHeading.setAttribute("tabindex", "1");
        modalHeading.setAttribute("class", "m-modal-heading");
        modalHeading.textContent = defaultOptions.heading;
        modalBody.appendChild(modalHeading);
      };
      if (defaultOptions.content) {
        if (typeof defaultOptions.content == "string") {
          var container = document.createElement("div");
          container.setAttribute("class", "container");
          var para = document.createElement("p");
          para.textContent = defaultOptions.content;
          container.appendChild(para);
          modalBody.appendChild(container);
        } else {
          modalBody.appendChild(defaultOptions.content);
        };
      };
      modalWrapper.appendChild(modalBody);
      modalWrapper.appendChild(modalControls);
      modal.appendChild(modalWrapper);
      modal.addEventListener("transitionend", function(event, elapsed) {
        if (event.propertyName === "opacity" && getComputedStyle(this).opacity == 0) {
          this.parentElement.removeChild(this);
        };
      }.bind(modal), false);
      actionButton.addEventListener("click", function(event) {
        event.stopPropagation();
        event.preventDefault();
        this.destroy();
        shade.destroy();
        page.update();
        if (defaultOptions.action) {
          defaultOptions.action();
        };
      }.bind(modal), false);
      previousModal = modal;
      shade.render({
        action: function() {
          modal.destroy();
          page.update();
        },
        includeHeader: true
      });
      body.appendChild(modal);
      getComputedStyle(modal).opacity;
      helper.removeClass(modal, "is-transparent");
      helper.addClass(modal, "is-opaque");
      helper.removeClass(modalWrapper, "is-unrotate-out");
      helper.addClass(modalWrapper, "is-unrotate-in");
      modalHeading.focus(this);
    };
    characterSelect.close();
    menu.close();
    prompt.destroy();
    characterSelect.close();
    if (previousModal != null) {
      destroy();
    };
    makeModal();
  };

  // exposed methods
  return {
    bind: bind,
    destroy: destroy,
    render: render
  };

})();
