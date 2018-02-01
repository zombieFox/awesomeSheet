var autoSuggest = (function() {

  var _timer_autoSuggest = null;
  var _activeInput;

  function _delayRender(input) {
    render({
      input: input,
      action: "render"
    });
  };

  function bind() {
    var all_autoSuggest = helper.eA(".js-auto-suggest");
    for (var i = 0; i < all_autoSuggest.length; i++) {
      _bind_autoSuggest(all_autoSuggest[i]);
    };
  };

  function _bind_autoSuggest(autoSuggest) {
    var input = autoSuggest.querySelector(".js-auto-suggest-field");
    if (input) {
      input.addEventListener("input", function() {
        clearTimeout(_timer_autoSuggest);
        _timer_autoSuggest = setTimeout(_delayRender, 300, this);
      }, false);
      input.addEventListener("keydown", function(event) {
        if (event.keyCode == 13) {
          destroy(this);
        };
      }, false);
    };
  };

  function _navigateResults(event) {
    var elementToFocus;
    var currentFocus = null;
    var all_anchor = helper.eA(".js-auto-suggest-link");
    var _findInput = function() {
      if (event.target.classList.contains("js-auto-suggest-field")) {
        _activeInput = event.target;
      };
    };
    var _findFocus = function() {
      for (var i = 0; i < all_anchor.length; i++) {
        if (all_anchor[i] == document.activeElement) {
          currentFocus = i;
        };
      };
    };
    _findInput();
    _findFocus();
    // down key or tab key
    if (event.keyCode == 40 || event.keyCode == 9) {
      event.preventDefault();
      if (currentFocus == null) {
        elementToFocus = all_anchor[0];
      } else {
        if (currentFocus < all_anchor.length - 1) {
          elementToFocus = all_anchor[currentFocus + 1];
        } else {
          elementToFocus = all_anchor[currentFocus];
        };
      };
      elementToFocus.focus();
    };
    // up key or tab and shift key
    if (event.keyCode == 38 || event.keyCode == 9 && event.shiftKey) {
      event.preventDefault();
      if (currentFocus == null) {
        elementToFocus = _activeInput;
      } else {
        if (currentFocus == 0) {
          elementToFocus = _activeInput;
        } else if (currentFocus > 0) {
          elementToFocus = all_anchor[currentFocus - 1];
        } else {
          elementToFocus = all_anchor[0];
        };
      };
      elementToFocus.focus();
    };
  };

  function _addDocumentEvent() {
    document.addEventListener("click", _checkClick, false);
    document.addEventListener("keydown", _navigateResults, false);
  };

  function _removeDocumentEvent() {
    document.removeEventListener("click", _checkClick, false);
    document.removeEventListener("keydown", _navigateResults, false);
  };

  function _checkClick(event) {
    if (!(event.target.classList.contains("js-auto-suggest-field"))) {
      destroy();
    };
  };

  function destroy() {
    var autoSuggestList = helper.e(".js-auto-suggest-list");
    if (autoSuggestList) {
      autoSuggestList.remove();
    };
    _removeDocumentEvent();
  };

  function render(options) {
    var defaultOptions = {
      input: null,
      action: null
    };
    if (options) {
      var defaultOptions = helper.applyOptions(defaultOptions, options);
    };
    var body = helper.e("body");
    var autoSuggest = helper.getClosest(options.input, ".js-auto-suggest");
    var autoSuggestOptions = helper.makeObject(autoSuggest.dataset.autoSuggestOptions);
    var suggestItems;
    var _render_autoSuggestList = function() {
      var autoSuggestList = helper.e(".js-auto-suggest-list");
      if (autoSuggestList) {
        while (autoSuggestList.lastChild) {
          autoSuggestList.removeChild(autoSuggestList.lastChild);
        };
        _populateList(autoSuggestList);
      } else {
        var style = {
          left: options.input.getBoundingClientRect().left,
          top: options.input.getBoundingClientRect().bottom + window.scrollY,
          width: options.input.getBoundingClientRect().width
        };
        var autoSuggestList = document.createElement("ul");
        autoSuggestList.setAttribute("class", "m-auto-suggest-list u-list-unstyled js-auto-suggest-list");
        body.appendChild(autoSuggestList);
        autoSuggestList.setAttribute("style", "width: " + style.width + "px; top: " + style.top + "px; left: " + style.left + "px;");
        _populateList(autoSuggestList);
        _addDocumentEvent();
      };
    };
    var _populateList = function(list) {
      for (var i = 0; i < suggestItems.length; i++) {
        var string;
        if (autoSuggestOptions.type == "spells") {
          string = suggestItems[i].name;
        };
        var li = document.createElement("li");
        li.setAttribute("class", "m-auto-suggest-list-item");
        var anchor = document.createElement("a");
        anchor.setAttribute("href", "javascript:void(0)");
        anchor.setAttribute("tabindex", 1);
        anchor.setAttribute("class", "m-auto-suggest-link js-auto-suggest-link");
        anchor.setAttribute("data-spells-data", "index:#" + suggestItems[i].index);
        anchor.addEventListener("click", function() {
          if (autoSuggestOptions.type == "spells") {
            spells.add(options.input, spellsData.get({
              index: helper.makeObject(this.dataset.spellsData).index
            }));
          };
          destroy();
          sheet.store();
        }, false);
        var partOneText = string.substr(0, (string.toLowerCase().indexOf(options.input.value.toLowerCase())));
        var strongText = string.substr((string.toLowerCase().indexOf(options.input.value.toLowerCase())), options.input.value.length);
        var partTwoText = string.substr(((string.toLowerCase().indexOf(options.input.value.toLowerCase())) + options.input.value.length));
        if (partOneText.length > 0) {
          var partOne = document.createElement("span");
          partOne.textContent = partOneText;
          anchor.appendChild(partOne);
        };
        if (strongText.length > 0) {
          var strong = document.createElement("strong");
          strong.setAttribute("class", "m-auto-suggest-strong");
          strong.textContent = strongText;
          anchor.appendChild(strong);
        };
        if (partTwoText.length > 0) {
          var partTwo = document.createElement("span");
          partTwo.textContent = partTwoText;
          anchor.appendChild(partTwo);
        };
        if (partOneText.length > 0 || strongText.length > 0 || partTwoText.length > 0) {
          li.appendChild(anchor);
          list.appendChild(li);
        };
      };
    };
    if (autoSuggestOptions.type == "spells") {
      suggestItems = spellsData.get({
        name: options.input.value
      });
    };
    if (suggestItems) {
      _render_autoSuggestList();
    } else {
      destroy();
    };
  };



  // exposed methods
  return {
    bind: bind,
    destroy: destroy
  };

})();
