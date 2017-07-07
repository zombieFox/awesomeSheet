var selectBlock = (function() {

  function _store(element) {
    var selectBlock = helper.getClosest(element, ".js-select-block");
    var selectBlockDropdown = selectBlock.querySelector(".js-select-block-dropdown");
    var path = selectBlockDropdown.dataset.path;
    var type = selectBlockDropdown.dataset.type;
    var data;
    if (type == "integer") {
      data = parseInt(element.value, 10 || 0);
      if (isNaN(data) && type == "integer") {
        data = "";
      };
    } else if (type == "float") {
      data = parseFloat(element.value);
      if (isNaN(data)) {
        data = "";
      };
    } else {
      data = element.value;
    };
    if (path) {
      if (selectBlock.dataset.clone == "true") {
        var pathCloneKey = selectBlockDropdown.dataset.pathCloneKey;
        var cloneCount = selectBlock.dataset.cloneCount;
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
    var selectBlock = helper.getClosest(element, ".js-select-block");
    if (element == document.activeElement) {
      helper.addClass(selectBlock, "is-focus");
    } else {
      helper.removeClass(selectBlock, "is-focus");
    };
  };

  function clear() {
    var all_selectBlock = helper.eA(".js-select-block");
    for (var i = 0; i < all_selectBlock.length; i++) {
      all_selectBlock[i].querySelector(".js-select-block-dropdown").value = "";
    };
  };

  function bind(selectBlock) {
    if (selectBlock) {
      _bind_selectBlock(selectBlock);
    } else {
      var all_selectBlock = helper.eA(".js-select-block");
      for (var i = 0; i < all_selectBlock.length; i++) {
        if (all_selectBlock[i].dataset.clone != "true") {
          _bind_selectBlock(all_selectBlock[i]);
        };
      };
    };
    _bind_name();
    _bind_class();
    _bind_level();
  };

  function _bind_selectBlock(selectBlock) {
    var input = selectBlock.querySelector(".js-select-block-dropdown");
    if (input) {
      input.addEventListener("input", function() {
        clearTimeout(storeInputTimer);
        storeInputTimer = setTimeout(delayUpdate, 300, this);
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
      updateNavTimer = setTimeout(nav.update, 300, this);
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
      updateNavTimer = setTimeout(nav.update, 300, this);
    }, false);
  };

  function _bind_level() {
    var input = helper.e(".js-basics-level");
    input.addEventListener("input", function() {
      clearTimeout(updateNavTimer);
      updateNavTimer = setTimeout(nav.update, 300, this);
    }, false);
  };

  function render() {
    var all_selectBlock = helper.eA(".js-select-block");
    // console.log(all_selectBlock);
    // for (var i = 0; i < all_selectBlock.length; i++) {
    //   var all_selectBlockDropdown = all_selectBlock[i].querySelector(".js-select-block-dropdown");
    //   var path = all_selectBlockDropdown.dataset.path;
    //   // console.log(path);
    //   var selected = all_selectBlockDropdown.options.selectedIndex;
    //   // console.log(all_selectBlockDropdown.options[selected]);
    //   // if (path) {
    //   //   if (all_selectBlock[i].dataset.clone == "true") {
    //   //     var pathCloneKey = all_selectBlockDropdown.dataset.pathCloneKey;
    //   //     var cloneCount = all_selectBlock[i].dataset.cloneCount;
    //   //     var object = helper.getObject(sheet.getCharacter(), path, cloneCount);
    //   //     // console.log("found clone input", path, pathCloneKey, all_selectBlock[i].dataset.cloneCount, all_selectBlock[i]);
    //   //     all_selectBlockDropdown.value = object[pathCloneKey];
    //   //   } else {
    //   //     var content = helper.getObject(sheet.getCharacter(), path);
    //   //     all_selectBlockDropdown.value = content;
    //   //   };
    //   // };
    // };
  };

  // exposed methods
  return {
    render: render,
    bind: bind,
    clear: clear
  };

})();
