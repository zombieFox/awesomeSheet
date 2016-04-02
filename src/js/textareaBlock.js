var textareaBlock = (function() {

  function focus(element) {
    var textareaBlockRoot = helper.getClosest(element, ".textarea-block");
    var textareaBox = textareaBlockRoot.querySelector(".textarea-box");
    var textareaLabel;
    if (textareaBlockRoot.querySelector(".textarea-label")) {
      var textareaLabel = textareaBlockRoot.querySelector(".textarea-label");
    };
    if (textareaBlockRoot.querySelector(".textarea-label")) {
      if (textareaBox == document.activeElement) {
        helper.addClass(textareaLabel, "textarea-label-focus");
        helper.addClass(textareaLabel, "textarea-label-active");
      } else {
        helper.removeClass(textareaLabel, "textarea-label-focus");
        helper.removeClass(textareaLabel, "textarea-label-active");
      };
      if (element.innerHTML == "" && textareaBox != document.activeElement) {
        helper.removeClass(textareaLabel, "textarea-label-active");
      } else {
        helper.addClass(textareaLabel, "textarea-label-active");
      };
    };
  };

  function updateTextareaBlock(element) {
    focus(element);
  };

  function bind() {
    var all_textareaBlock = helper.eA(".textarea-block");
    for (var i = 0; i < all_textareaBlock.length; i++) {
      var textareaBox = all_textareaBlock[i].querySelector(".textarea-box");
      var textareaLabel = all_textareaBlock[i].querySelector(".textarea-label");
      if (textareaBox) {
        textareaBox.addEventListener("input", function() {
          _store(this);
          focus(this);
        }, false);
        textareaBox.addEventListener("focus", function() {
          _store(this);
          focus(this);
        }, false);
        textareaBox.addEventListener("blur", function() {
          _store(this);
          focus(this);
        }, false);
      };
      if (textareaLabel) {
        textareaLabel.addEventListener("click", function() {
          _textareaLabelshiftFocus(this);
        }, false);
      };
    };
  };

  function _textareaLabelshiftFocus(element) {
    var textareaBlockRoot = helper.getClosest(element, ".textarea-block");
    var textareaBox = textareaBlockRoot.querySelector(".textarea-box");
    textareaBox.focus();
  };

  function render() {
    var all_textareaBlock = helper.eA(".textarea-box");
    for (var i = 0; i < all_textareaBlock.length; i++) {
      var path = all_textareaBlock[i].dataset.path;
      var content = helper.getObject(sheet.getCharacter(), path);
      all_textareaBlock[i].innerHTML = content;
      updateTextareaBlock(all_textareaBlock[i]);
    };
  };

  function _store(element) {
    var path = element.dataset.path;
    helper.updateObject(sheet.getCharacter(), path, element.innerHTML);
    sheet.storeCharacters();
  };

  // exposed methods
  return {
    update: updateTextareaBlock,
    focus: focus,
    render: render,
    bind: bind
  };

})();
