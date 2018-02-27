var display = (function() {

  var state = (function() {
    var displayState = {
      basics: false,
      statistics: false,
      equipment: false,
      defense: false,
      offense: false,
      skills: false,
      spells: false,
      notes: false
    };
    var get = function(options) {
      var defaultOptions = {
        section: null,
        all: null
      };
      if (options) {
        defaultOptions = helper.applyOptions(defaultOptions, options);
      };
      if (defaultOptions.all != null && defaultOptions.all) {
        var displayOnCount = 0;
        var sectionCount = 0;
        for (var key in displayState) {
          sectionCount++;
          if (displayState[key]) {
            displayOnCount++;
          };
        };
        // if no sections are in display mode
        if (displayOnCount == 0) {
          return false;
          // if all sections are in display mode
        } else if (displayOnCount == sectionCount) {
          return true;
          // if more than half the number of sections are in display mode
        } else if (displayOnCount >= (sectionCount / 2)) {
          return true;
        } else {
          // else restore to edit mode
          return false;
        };
      } else if (defaultOptions.section != null) {
        return displayState[defaultOptions.section.id];
      } else {
        return displayState;
      };
    };
    var set = function(options) {
      var defaultOptions = {
        section: null,
        all: null
      };
      if (options) {
        defaultOptions = helper.applyOptions(defaultOptions, options);
      };
      if (defaultOptions.all != null && defaultOptions.all) {
        var displayOnCount = 0;
        var sectionCount = 0;
        for (var key in displayState) {
          sectionCount++;
          if (displayState[key]) {
            displayOnCount++;
          };
        };
        // if no sections are in display mode
        if (displayOnCount == 0) {
          for (var key in displayState) {
            displayState[key] = true;
          };
          // if all sections are in display mode
        } else if (displayOnCount == sectionCount) {
          for (var key in displayState) {
            displayState[key] = false;
          };
          // if more than half the number of sections are in display mode
        } else if (displayOnCount >= (sectionCount / 2)) {
          for (var key in displayState) {
            displayState[key] = true;
          };
        } else {
          // else restore to edit mode
          for (var key in displayState) {
            displayState[key] = false;
          };
        };
      } else if (defaultOptions.section != null) {
        if (displayState[defaultOptions.section.id]) {
          displayState[defaultOptions.section.id] = false;
        } else {
          displayState[defaultOptions.section.id] = true;
        };
      };
    };
    // exposed methods
    return {
      set: set,
      get: get
    };
  })();

  function bind() {
    _bind_fab();
  };

  function _bind_fab() {
    var fabButton = helper.e(".js-fab-button");
    fabButton.addEventListener("click", function() {
      totalBlock.render();
      clear();
      render();
      toggle({
        all: true
      });
      themeColor.update();
    }, false);
  };

  function toggle(options) {
    var defaultOptions = {
      section: null,
      all: null
    };
    if (options) {
      defaultOptions = helper.applyOptions(defaultOptions, options);
    };
    if (defaultOptions.all != null && defaultOptions.all) {
      state.set({
        all: true
      });
      _toggle_all_section({
        all: true
      });
      _toggle_chrome();
    } else if (defaultOptions.section != null) {
      state.set({
        section: defaultOptions.section
      });
      _toggle_section({
        section: defaultOptions.section
      });
      _toggle_chrome();
    };
  };

  function _toggle_all_section(options) {
    var defaultOptions = {
      section: null,
      all: null
    };
    if (options) {
      defaultOptions = helper.applyOptions(defaultOptions, options);
    };
    if (defaultOptions.all != null && defaultOptions.all) {
      var all_section = helper.eA(".js-section");
      all_section.forEach(function(arrayItem) {
        _toggle_section({
          section: arrayItem
        });
      });
    } else if (defaultOptions.section != null) {
      _toggle_section({
        section: defaultOptions.section
      });
    };
  };

  function _toggle_section(options) {
    var defaultOptions = {
      section: null
    };
    if (options) {
      defaultOptions = helper.applyOptions(defaultOptions, options);
    };
    var display = defaultOptions.section.querySelector(".js-display");
    var icon = defaultOptions.section.querySelector(".js-card-toggle-icon");
    var edit = defaultOptions.section.querySelector(".js-edit");
    var cardTabs = defaultOptions.section.querySelector(".js-card-tabs");
    var minimise = (defaultOptions.section.dataset.minimise == "true");
    var _toggle_on = function() {
      helper.addClass(defaultOptions.section, "is-display-mode");
      helper.addClass(edit, "is-hidden");
      helper.removeClass(display, "is-hidden");
      helper.addClass(icon, "icon-edit");
      helper.removeClass(icon, "icon-reader");
      if (cardTabs && !minimise) {
        helper.addClass(cardTabs, "is-hidden");
      };
    };
    var _toggle_off = function() {
      helper.removeClass(defaultOptions.section, "is-display-mode");
      helper.removeClass(edit, "is-hidden");
      helper.addClass(display, "is-hidden");
      helper.removeClass(icon, "icon-edit");
      helper.addClass(icon, "icon-reader");
      if (cardTabs && !minimise) {
        helper.removeClass(cardTabs, "is-hidden");
      };
    };

    if (defaultOptions.section != null) {
      if (state.get({
          section: defaultOptions.section
        })) {
        _toggle_on();
      } else {
        _toggle_off();
      };
    };
  };

  function _toggle_chrome() {
    var header = helper.e(".js-header");
    var nav = helper.e(".js-nav");
    var menuElement = helper.e(".js-menu");
    var menuItem = helper.e(".js-menu-link-display-mode");
    var characterSelect = helper.e(".js-character-select");
    var shade = helper.e(".js-shade");
    var fab = helper.e(".js-fab");
    var fabButton = helper.e(".js-fab-button");
    var fabIcon = helper.e(".js-fab-icon");
    var all_section = helper.eA(".js-section");
    var anySectionDisplay = false;
    var allSectionDisplay = 0;
    var _toggle_on = function() {
      helper.addClass(fabIcon, "icon-edit");
      helper.removeClass(fabIcon, "icon-reader");
      helper.removeClass(fabButton, "button-primary");
      helper.addClass(fabButton, "button-secondary");
      helper.addClass(nav, "is-display-mode");
      helper.addClass(menuElement, "is-display-mode");
      helper.addClass(header, "is-display-mode");
      helper.addClass(characterSelect, "is-display-mode");
      if (shade) {
        helper.addClass(shade, "is-display-mode");
      };
      menu.toggleMenuItem({
        menuItem: menuItem,
        state: "active"
      });
    };
    var _toggle_off = function() {
      helper.removeClass(fabIcon, "icon-edit");
      helper.addClass(fabIcon, "icon-reader");
      helper.addClass(fabButton, "button-primary");
      helper.removeClass(fabButton, "button-secondary");
      helper.removeClass(nav, "is-display-mode");
      helper.removeClass(menuElement, "is-display-mode");
      helper.removeClass(header, "is-display-mode");
      helper.removeClass(characterSelect, "is-display-mode");
      if (shade) {
        helper.removeClass(shade, "is-display-mode");
      };
      menu.toggleMenuItem({
        menuItem: menuItem,
        state: "inactive"
      });
    };
    if (state.get({
        all: true
      })) {
      _toggle_on();
    } else {
      _toggle_off();
    };
  };







  function clear(display) {
    var _removeAllChildren = function(parent) {
      while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
      };
    };
    if (display) {
      var all_displayBlock = display.querySelectorAll(".js-display-block");
    } else {
      var all_displayBlock = helper.eA(".js-display-block");
    };
    for (var i = 0; i < all_displayBlock.length; i++) {
      all_displayBlock[i].dataset.displayContent = false;
      _removeAllChildren(all_displayBlock[i]);
    };
  };

  function render(display) {
    _render_all_display(display);
    _render_all_placeholderDisplay(display);
  };

  function _render_all_display(display) {
    if (display) {
      _render_display(display);
    } else {
      var all_display = helper.eA(".js-display");
      all_display.forEach(function(arrayItem) {
        _render_display(arrayItem);
      });
    };
  };

  function _render_display(display) {
    var all_displayArea = display.querySelectorAll(".js-display-area");
    all_displayArea.forEach(function(arrayItem) {
      _render_all_displayArea(arrayItem);
    });
    var all_displayGuide = display.querySelectorAll(".js-display-guide");
    if (all_displayGuide.length > 0) {
      helper.removeClass(all_displayGuide[all_displayGuide.length - 1], "m-display-guide");
      helper.removeClass(all_displayGuide[all_displayGuide.length - 1], "js-display-guide");
    };
  };

  function _render_all_displayArea(displayArea) {
    var all_displayBlock = displayArea.querySelectorAll(".js-display-block");
    all_displayBlock.forEach(function(arrayItem) {
      _render_displayBlock(arrayItem);
    });
  };

  function _render_displayBlock(displayBlock) {
    var options = helper.makeObject(displayBlock.dataset.displayOptions);
    var displayArea = helper.getClosest(displayBlock, ".js-display-area");
    var elementCount = 0;
    var all_element = [];

    var getElements = {
      image: function(options) {
        // console.log("display block image");
        options.path.forEach(function(arrayItem, index) {
          var config = {
            path: arrayItem
          };
          all_element.push(_create_element().image(config));
        });
      },
      snippet: function(options) {
        // console.log("display block snippet");
        options.path.forEach(function(arrayItem, index) {
          var config = {
            path: arrayItem
          };
          if ("dependency" in options) {
            if (options.dependency[index]) {
              config.dependency = options.dependency[index];
            } else {
              config.dependency = false;
            };
          };
          if ("valueType" in options) {
            if (options.valueType[index]) {
              config.valueType = options.valueType[index];
            } else {
              config.valueType = false;
            };
          };
          if ("prefix" in options) {
            if (options.prefix[index]) {
              config.prefix = options.prefix[index];
            } else {
              config.prefix = false;
            };
          };
          if ("suffix" in options) {
            if (options.suffix[index]) {
              config.suffix = options.suffix[index];
            } else {
              config.suffix = false;
            };
          };
          all_element.push(_create_element().snippet(config));
        });
      },
      block: function(options) {
        // console.log("display block block");
        options.path.forEach(function(arrayItem, index) {
          var config = {
            path: arrayItem
          };
          if ("prefix" in options) {
            if (options.prefix[index]) {
              config.prefix = options.prefix[index];
            } else {
              config.prefix = false;
            };
          };
          if ("suffix" in options) {
            if (options.suffix[index]) {
              config.suffix = options.suffix[index];
            } else {
              config.suffix = false;
            };
          };
          all_element.push(_create_element().block(config));
        });
      },
      pill: function(options) {
        // console.log("display block pill");
        options.path.forEach(function(arrayItem, index, options) {
          var array = helper.getObject({
            object: sheet.get(),
            path: arrayItem
          });
          array.forEach(function(arrayItem) {
            all_element.push(_create_element().pill(arrayItem));
          });
        });
      }
    };

    getElements[options.type](options);

    if (all_element.length > 0) {
      all_element.forEach(function(arrayItem, index) {
        if (arrayItem) {
          elementCount++;
          displayBlock.appendChild(arrayItem);
        };
      });
    };

    if (elementCount > 0) {
      displayArea.dataset.displayContent = true;
      helper.removeClass(displayArea, "is-hidden");
      helper.addClass(displayArea, "m-display-guide");
      helper.addClass(displayArea, "js-display-guide");
    } else {
      displayArea.dataset.displayContent = false;
      helper.addClass(displayArea, "is-hidden");
      helper.removeClass(displayArea, "m-display-guide");
      helper.removeClass(displayArea, "js-display-guide");
    };
  };

  function _create_element() {

    function image(config) {
      var data = helper.getObject({
        object: sheet.get(),
        path: config.path + ".data"
      });
      var displayImage;
      if (typeof data != undefined && data != "") {
        var displayImage = document.createElement("div");
        displayImage.setAttribute("class", "m-display-item-image-wrapper");
        var displayImageItem = new Image;
        // displayImage.setAttribute("class", "m-character-image js-character-image");
        displayImageItem.setAttribute("class", "m-display-item-image");
        displayImageItem.src = data;
        var scale = helper.getObject({
          object: sheet.get(),
          path: config.path + ".scale"
        });
        var position = helper.getObject({
          object: sheet.get(),
          path: config.path + ".position"
        });
        var background = helper.getObject({
          object: sheet.get(),
          path: config.path + ".background"
        });
        var color;
        if (background == "black") {
          color = "rgb(0,0,0)";
        } else if (background == "white") {
          color = "rgb(255,255,255)";
        } else if (background == "average") {
          color = helper.getObject({
            object: sheet.get(),
            path: config.path + ".color"
          });
          color = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
        };
        displayImage.style.backgroundColor = color;
        displayImageItem.style.width = scale + "%";
        displayImageItem.style.left = position.x + "%";
        displayImageItem.style.top = position.y + "%";
        displayImage.appendChild(displayImageItem);
      } else {
        displayImage = false;
      };
      return displayImage;
    };

    function snippet(config) {
      var data = helper.getObject({
        object: sheet.get(),
        path: config.path
      });
      var displaySnippet;
      if (typeof data != undefined && data != "") {
        displaySnippet = document.createElement("span");
        displaySnippet.setAttribute("class", "m-display-item-snippet");
        var displayValue = document.createElement("span");
        displayValue.setAttribute("class", "m-display-item-value");
        if (config.valueType == "bonus" && data > 0) {
          data = "+" + data;
        } else if (config.valueType == "currency" && data > 0) {
          data = parseFloat(data).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          });
          if (data.indexOf(".00") !== -1) {
            data = data.substr(0, data.indexOf("."));
          };
        } else if (config.valueType == "number" && data > 0) {
          data = parseFloat(data).toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          });
        } else if (config.valueType == "weight" && data > 0) {
          data = parseFloat(data).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          });
          if (data.indexOf(".00") !== -1) {
            data = data.substr(0, data.indexOf("."));
          };
        };
        if (config.dependency) {
          var dependencyData = helper.getObject({
            object: sheet.get(),
            path: config.dependency
          });
          if (dependencyData != "") {
            data = data + " / " + dependencyData;
          };
        };
        displayValue.textContent = data;
        if (config.prefix) {
          var displayPrefix = document.createElement("span");
          displayPrefix.setAttribute("class", "m-display-item-prefix");
          displayPrefix.textContent = config.prefix;
          displaySnippet.appendChild(displayPrefix);
        };
        displaySnippet.appendChild(displayValue);
        if (config.suffix) {
          var displaySuffix = document.createElement("span");
          displaySuffix.setAttribute("class", "m-display-item-suffix");
          displaySuffix.textContent = config.suffix;
          displaySnippet.appendChild(displaySuffix);
        };
      } else {
        displaySnippet = false;
      };
      return displaySnippet;
    };

    function block(config) {
      var data = helper.getObject({
        object: sheet.get(),
        path: config.path
      });
      var displayBlock;
      if (typeof data != undefined && data != "") {
        displayBlock = document.createElement("span");
        displayBlock.setAttribute("class", "m-display-item-block");
        var displayValue = document.createElement("span");
        displayValue.setAttribute("class", "m-display-value");
        displayValue.innerHTML = data;
        if (config.prefix) {
          var displayPrefix = document.createElement("span");
          displayPrefix.setAttribute("class", "m-display-item-prefix");
          displayPrefix.textContent = config.prefix;
          displayBlock.appendChild(displayPrefix);
        };
        displayBlock.appendChild(displayValue);
        if (config.suffix) {
          var displaySuffix = document.createElement("span");
          displaySuffix.setAttribute("class", "m-display-item-suffix");
          displaySuffix.textContent = config.suffix;
          displayBlock.appendChild(displaySuffix);
        };
      } else {
        displayBlock = false;
      };
      return displayBlock;
    };

    function pill(object) {
      var displayListItem = document.createElement("li");
      displayListItem.setAttribute("class", "m-display-list-item m-display-list-item-pill");
      var pillName = document.createElement("span");
      pillName.textContent = object.name;
      displayListItem.appendChild(pillName);
      return displayListItem;
    };

    return {
      image: image,
      snippet: snippet,
      block: block,
      pill: pill
    };
  };

  function _render_all_placeholderDisplay(display) {
    if (display) {
      _render_displayPlaceholder(display);
    } else {
      var all_display = helper.eA(".js-display");
      all_display.forEach(function(arrayItem) {
        _render_displayPlaceholder(arrayItem);
      });
    };
  };

  function _render_displayPlaceholder(display) {
    var placeholderDisplay = display.querySelector(".js-placeholder-display");
    var all_displayArea = display.querySelectorAll(".js-display-area");
    var contentFound = false;
    all_displayArea.forEach(function(arrayItem) {
      if (arrayItem.dataset.displayContent == "true") {
        contentFound = true;
      };
    });
    if (contentFound) {
      helper.addClass(placeholderDisplay, "is-hidden")
    } else {
      helper.removeClass(placeholderDisplay, "is-hidden")
    };
  };

  // exposed methods
  return {
    toggle: toggle,
    bind: bind,
    render: render,
    clear: clear,
    state: state
  };

})();