var autoSuggest = (function() {

  var _timer_autoSuggest = null;
  var _cuurentInput;

  function _delayRender(input) {
    render(input);
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
        _timer_autoSuggest = setTimeout(_delayRender, 150, this);
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
        _cuurentInput = event.target;
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
        elementToFocus = _cuurentInput;
      } else {
        if (currentFocus == 0) {
          elementToFocus = _cuurentInput;
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

  function render(input) {
    _cuurentInput = input;
    var searchTerm = _cuurentInput.value.replace(/^\s+/, "").replace(/\s+$/, "");
    var body = helper.e("body");
    var autoSuggest = helper.getClosest(_cuurentInput, ".js-auto-suggest");
    var autoSuggestOptions = helper.makeObject(autoSuggest.dataset.autoSuggestOptions);
    var suggestItems;

    var _populateList = function(list) {
      var _populateSpells = function() {
        suggestItems.forEach(function(arrayItem) {
          var li = document.createElement("li");
          li.setAttribute("class", "m-auto-suggest-list-item");

          var anchor = document.createElement("a");
          anchor.setAttribute("href", "javascript:void(0)");
          anchor.setAttribute("tabindex", 1);
          anchor.setAttribute("class", "m-auto-suggest-link js-auto-suggest-link");
          anchor.setAttribute("data-spells-data", "index:#" + arrayItem.index);
          anchor.addEventListener("click", function() {
            if (autoSuggestOptions.type == "spells") {
              spells.add(_cuurentInput, spellsData.get({
                index: helper.makeObject(this.dataset.spellsData).index
              }));
            };
            destroy();
            sheet.store();
          }, false);

          var string = arrayItem.name;

          var text = document.createElement("span");
          text.setAttribute("class", "m-auto-suggest-text");

          var result = document.createElement("span");
          result.setAttribute("class", "m-auto-suggest-result");

          var resultPartOneString = string.substr(0, (string.toLowerCase().indexOf(searchTerm.toLowerCase())));
          var resultPartHighlightString = string.substr((string.toLowerCase().indexOf(searchTerm.toLowerCase())), searchTerm.length);
          var resultPartTwoString = string.substr(((string.toLowerCase().indexOf(searchTerm.toLowerCase())) + searchTerm.length));

          if (resultPartOneString.length > 0) {
            var resultPartOne = document.createElement("strong");
            resultPartOne.setAttribute("class", "m-auto-suggest-part");
            resultPartOne.textContent = resultPartOneString;
            result.appendChild(resultPartOne);
          };

          if (resultPartHighlightString.length > 0) {
            var resultPartHighlight = document.createElement("strong");
            resultPartHighlight.setAttribute("class", "m-auto-suggest-highlight");
            resultPartHighlight.textContent = resultPartHighlightString;
            result.appendChild(resultPartHighlight);
          };

          if (resultPartTwoString.length > 0) {
            var resultPartTwo = document.createElement("strong");
            resultPartTwo.setAttribute("class", "m-auto-suggest-part");
            resultPartTwo.textContent = resultPartTwoString;
            result.appendChild(resultPartTwo);
          };

          if (resultPartOneString.length > 0 || resultPartHighlightString.length > 0 || resultPartTwoString.length > 0) {
            text.appendChild(result);
          };

          if (arrayItem.school) {
            var resultMeta = document.createElement("i");
            resultMeta.setAttribute("class", "m-auto-suggest-result-meta");
            resultMeta.textContent = helper.capFirstLetter(arrayItem.school);
            text.appendChild(resultMeta);
          };

          anchor.appendChild(text);

          if (arrayItem.description) {
            var textSub = document.createElement("span");
            textSub.setAttribute("class", "m-auto-suggest-text-sub");
            textSub.textContent = arrayItem.description;
            anchor.appendChild(textSub);
          };

          li.appendChild(anchor);
          list.appendChild(li);

        });
      };
      if (autoSuggestOptions.type == "spells") {
        _populateSpells();
      };
    };

    var _render_autoSuggestList = function() {
      var autoSuggestList = helper.e(".js-auto-suggest-list");
      if (autoSuggestList) {
        while (autoSuggestList.lastChild) {
          autoSuggestList.removeChild(autoSuggestList.lastChild);
        };
      } else {
        var style = {
          left: _cuurentInput.getBoundingClientRect().left,
          top: _cuurentInput.getBoundingClientRect().bottom + window.scrollY,
          width: _cuurentInput.getBoundingClientRect().width
        };
        var autoSuggestList = document.createElement("ul");
        autoSuggestList.setAttribute("class", "m-auto-suggest-list u-list-unstyled js-auto-suggest-list");
        body.appendChild(autoSuggestList);
        autoSuggestList.setAttribute("style", "width: " + style.width + "px; top: " + style.top + "px; left: " + style.left + "px;");
        _addDocumentEvent();
      };
      _populateList(autoSuggestList);
    };

    if (searchTerm != "") {
      if (autoSuggestOptions.type == "spells") {
        suggestItems = spellsData.get({
          name: searchTerm
        });
      };
      if (suggestItems) {
        _render_autoSuggestList();
      } else {
        destroy();
      };
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
