var textareaBlock = (function() {

  function _store(element) {
    var path = element.dataset.path;
    if (path) {
      helper.setObject(sheet.getCharacter(), path, element.innerHTML);
      sheet.storeCharacters();
    };
  };

  var storeInputTimer = null;
  var storeBlurTimer = null;

  function delayUpdate(element) {
    _store(element);
    if (body.dataset.displayMode == "true") {
      display.clear();
      display.render();
    };
  };

  function focus(element) {
    var textareaBlock = helper.getClosest(element, ".js-textarea-block");
    var textareaBlockField = textareaBlock.querySelector(".js-textarea-block-field");
    var textareaBlockLabel;
    if (textareaBlock.querySelector(".js-textarea-block-label")) {
      textareaBlockLabel = textareaBlock.querySelector(".js-textarea-block-label");
    };
    if (textareaBlock.querySelector(".js-textarea-block-label")) {
      if (textareaBlockField == document.activeElement) {
        helper.addClass(textareaBlockLabel, "is-active");
      } else {
        helper.removeClass(textareaBlockLabel, "is-active");
      };
      if (element.innerHTML == "" && textareaBlockField != document.activeElement) {
        helper.removeClass(textareaBlockLabel, "is-active");
      } else {
        helper.addClass(textareaBlockLabel, "is-active");
      };
    };
  };

  function clear() {
    var all_textareaBlock = helper.eA(".js-textarea-block");
    for (var i = 0; i < all_textareaBlock.length; i++) {
      all_textareaBlock[i].querySelector(".js-textarea-block-field").innerHTML = "";
      var textareaBlockLabel;
      if (all_textareaBlock[i].querySelector(".js-textarea-block-label")) {
        textareaBlockLabel = all_textareaBlock[i].querySelector(".js-textarea-block-label");
        helper.removeClass(textareaBlockLabel, "is-active");
      };
    };
  };

  function update(element) {
    focus(element);
  };

  function bind() {
    var all_textareaBlock = helper.eA(".js-textarea-block");
    for (var i = 0; i < all_textareaBlock.length; i++) {
      var textareaBlockField = all_textareaBlock[i].querySelector(".js-textarea-block-field");
      var textareaBlockLabel = all_textareaBlock[i].querySelector(".js-textarea-block-label");
      if (textareaBlockField) {
        textareaBlockField.addEventListener("input", function() {
          clearTimeout(storeBlurTimer);
          storeBlurTimer = setTimeout(delayUpdate, 1000, this);
        }, false);
        textareaBlockField.addEventListener("focus", function() {
          focus(this);
        }, false);
        textareaBlockField.addEventListener("blur", function() {
          _store(this);
          focus(this);
        }, false);
        textareaBlockField.addEventListener("paste", function(event) {
          helper.pasteStrip(event);
        });
      };
      if (textareaBlockLabel) {
        textareaBlockLabel.addEventListener("click", function() {
          focusLabel(this);
        }, false);
      };
    };
  };

  function focusLabel(element) {
    var textareaBlock = helper.getClosest(element, ".js-textarea-block");
    var textareaBlockField = textareaBlock.querySelector(".js-textarea-block-field");
    textareaBlockField.focus();
  };

  function render() {
    var all_textareaBlockField = helper.eA(".js-textarea-block-field");
    for (var i = 0; i < all_textareaBlockField.length; i++) {
      var path = all_textareaBlockField[i].dataset.path;
      if (path) {
        var content = helper.getObject(sheet.getCharacter(), path);
        all_textareaBlockField[i].innerHTML = content;
        update(all_textareaBlockField[i]);
      };
    };
  };

  // exposed methods
  return {
    update: update,
    focus: focus,
    focusLabel: focusLabel,
    render: render,
    clear: clear,
    bind: bind
  };

})();
