var textareaBlock = (function() {

  var storeInputTimer = null;

  function _store(textarea) {
    var textareaBlock = helper.getClosest(textarea, ".js-textarea-block");
    var textareaBlockOptions = helper.makeObject(textareaBlock.dataset.textareaBlockOptions);
    var newData = textarea.innerHTML;
    if (newData == "<div><br></div>" || newData == "<br>" || newData == "<br><br>" || newData == "<br><br><br>") {
      newData = "";
    };
    if (textareaBlockOptions.path) {
      helper.setObject({
        path: textareaBlockOptions.path,
        object: sheet.get(),
        newValue: newData
      });
    };
  };

  function delayUpdate(element) {
    _store(element);
    sheet.store();
    totalBlock.render();
    display.clear();
    display.render();
  };

  function _focus(element) {
    var textareaBlock = helper.getClosest(element, ".js-textarea-block");
    if (element == document.activeElement) {
      helper.addClass(textareaBlock, "is-focus");
    } else {
      helper.removeClass(textareaBlock, "is-focus");
    };
  };

  function clear() {
    var all_textareaBlock = helper.eA(".js-textarea-block");
    for (var i = 0; i < all_textareaBlock.length; i++) {
      all_textareaBlock[i].querySelector(".js-textarea-block-field").innerHTML = "";
    };
  };

  function bind(textareaBlock) {
    if (textareaBlock) {
      _bind_textareaBlock(textareaBlock);
    } else {
      var all_textareaBlock = helper.eA(".js-textarea-block");
      for (var i = 0; i < all_textareaBlock.length; i++) {
        var options = helper.makeObject(all_textareaBlock[i].dataset.inputBlockOptions);
        if (!options.clone) {
          _bind_textareaBlock(all_textareaBlock[i]);
        };
      };
    };
  };

  function _bind_textareaBlock(textareaBlock) {
    var field = textareaBlock.querySelector(".js-textarea-block-field");
    if (field) {
      field.addEventListener("input", function() {
        clearTimeout(storeInputTimer);
        storeInputTimer = setTimeout(delayUpdate, 300, this);
        sheet.store();
      }, false);
      field.addEventListener("focus", function() {
        _focus(this);
      }, false);
      field.addEventListener("blur", function() {
        _store(this);
        _focus(this);
        sheet.store();
      }, false);
      field.addEventListener("paste", function(event) {
        helper.pasteStrip(event);
      });
    };
  };

  function render(textareaBlock) {
    if (textareaBlock) {
      _render_textareaBlock(textareaBlock);
    } else {
      var all_textareaBlock = helper.eA(".js-textarea-block");
      for (var i = 0; i < all_textareaBlock.length; i++) {
        _render_textareaBlock(all_textareaBlock[i]);
      };
    };
  };

  function _render_textareaBlock(textareaBlock) {
    var textareaBlockField = textareaBlock.querySelector(".js-textarea-block-field");
    var options = helper.makeObject(textareaBlock.dataset.textareaBlockOptions);
    var data;
    if (options.path) {
      data = helper.getObject({
        object: sheet.get(),
        path: options.path
      });
      textareaBlockField.innerHTML = data;
    };
  };

  // exposed methods
  return {
    render: render,
    bind: bind,
    clear: clear
  };

})();
