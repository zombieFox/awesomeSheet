var inputBlock = (function() {

  function _store(element) {
    var inputBlock = helper.getClosest(element, ".js-input-block");
    var inputBlockField = inputBlock.querySelector(".js-input-block-field");
    var path = inputBlockField.dataset.path;
    var type = inputBlockField.dataset.type;
    var data;
    if (type == "number") {
      data = parseInt(element.value, 10 || 0);
      if (isNaN(data) && type == "number") {
        data = "";
      };
    } else {
      data = element.value;
    };
    if (path) {
      if (inputBlock.dataset.clone == "true") {
        var pathCloneKey = inputBlockField.dataset.pathCloneKey;
        var cloneCount = inputBlock.dataset.cloneCount;
        var object = helper.getObject(sheet.getCharacter(), path, cloneCount);
        object[pathCloneKey] = data;
      } else {
        helper.setObject(sheet.getCharacter(), path, data);
      };
    };
  };

  var storeInputTimer = null;
  var updateNavTimer = null;

  function delayUpdate(element) {
    _store(element);
    sheet.storeCharacters();
    totalBlock.render();
    if (body.dataset.displayMode == "true") {
      display.clear();
      display.render();
    };
  };

  function _focus(element) {
    var inputBlock = helper.getClosest(element, ".js-input-block");
    if (element == document.activeElement) {
      helper.addClass(inputBlock, "is-focus");
    } else {
      helper.removeClass(inputBlock, "is-focus");
    };
  };

  function clear() {
    var all_inputBlock = helper.eA(".js-input-block");
    for (var i = 0; i < all_inputBlock.length; i++) {
      all_inputBlock[i].querySelector(".js-input-block-field").value = "";
    };
  };

  function bind(inputBlock) {
    if (inputBlock) {
      _bind_inputBlock(inputBlock);
    } else {
      var all_inputBlock = helper.eA(".js-input-block");
      for (var i = 0; i < all_inputBlock.length; i++) {
        if (all_inputBlock[i].dataset.clone != "true") {
          _bind_inputBlock(all_inputBlock[i]);
        };
      };
    };
    _bind_name();
    _bind_class();
    _bind_level();
  };

  function _bind_inputBlock(inputBlock) {
    var input = inputBlock.querySelector(".js-input-block-field");
    if (input) {
      input.addEventListener("input", function() {
        clearTimeout(storeInputTimer);
        storeInputTimer = setTimeout(delayUpdate, 400, this);
      }, false);
      input.addEventListener("focus", function() {
        _focus(this);
      }, false);
      input.addEventListener("blur", function() {
        _store(this);
        _focus(this);
      }, false);
    };
  };

  function _bind_name() {
    var input = helper.e(".js-basics-name");
    input.addEventListener("input", function() {
      clearTimeout(updateNavTimer);
      updateNavTimer = setTimeout(nav.update, 400, this);
    }, false);
    input.addEventListener("keydown", function(event) {
      // enter
      if (event.keyCode == 13) {
        if (input.value == "restore all") {
          sheet.all();
        };
        _focus(this);
      };
    }, false);
  };

  function _bind_class() {
    var input = helper.e(".js-basics-class");
    input.addEventListener("input", function() {
      clearTimeout(updateNavTimer);
      updateNavTimer = setTimeout(nav.update, 400, this);
    }, false);
  };

  function _bind_level() {
    var input = helper.e(".js-basics-level");
    input.addEventListener("input", function() {
      clearTimeout(updateNavTimer);
      updateNavTimer = setTimeout(nav.update, 400, this);
    }, false);
  };

  function render() {
    var all_inputBlock = helper.eA(".js-input-block");
    for (var i = 0; i < all_inputBlock.length; i++) {
      var all_inputBlockField = all_inputBlock[i].querySelector(".js-input-block-field");
      var path = all_inputBlockField.dataset.path;
      if (path) {
        if (all_inputBlock[i].dataset.clone == "true") {
          var pathCloneKey = all_inputBlockField.dataset.pathCloneKey;
          var cloneCount = all_inputBlock[i].dataset.cloneCount;
          var object = helper.getObject(sheet.getCharacter(), path, cloneCount);
          // console.log("found clone input", path, pathCloneKey, all_inputBlock[i].dataset.cloneCount, all_inputBlock[i]);
          all_inputBlockField.value = object[pathCloneKey];
        } else {
          var content = helper.getObject(sheet.getCharacter(), path);
          all_inputBlockField.value = content;
        };
      };
    };
  };

  // exposed methods
  return {
    render: render,
    bind: bind,
    clear: clear
  };

})();
