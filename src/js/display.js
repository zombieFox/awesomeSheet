var display = (function() {

  var _displayContent = {
    basics: [{
      type: "image",
      element: "div",
      content: [{
        path: "basics.image.data",
        scale: "basics.image.scale",
        position: "basics.image.position",
        background: "basics.image.background",
        color: "basics.image.color"
      }]
    }, {
      type: "snippet",
      element: "h1",
      content: [{
        path: "basics.character.name"
      }]
    }, {
      type: "snippet",
      element: "p",
      content: [{
        path: "basics.classes.string",
        prefix: "Class & Level"
      }, {
        path: "basics.initiative.current",
        prefix: "Initiative",
        valueType: "bonus"
      }, {
        path: "skills.default.perception.current",
        prefix: "Perception",
        valueType: "bonus"
      }, {
        path: "basics.speed.land",
        prefix: "Land Speed"
      }, {
        path: "basics.speed.swim",
        prefix: "Swim Speed"
      }, {
        path: "basics.speed.climb",
        prefix: "Climb Speed"
      }, {
        path: "basics.speed.burrow",
        prefix: "Burrow Speed"
      }, {
        path: "basics.speed.fly",
        prefix: "Fly Speed",
        dependency: "basics.speed.maneuverability"
      }]
    }, {
      type: "snippet",
      element: "p",
      content: [{
        path: "basics.character.deity",
        prefix: "Deity"
      }, {
        path: "basics.character.gender",
        prefix: "Gender"
      }, {
        path: "basics.character.race",
        prefix: "Race"
      }, {
        path: "basics.experience.total",
        prefix: "EXP",
        valueType: "number"
      }, {
        path: "basics.character.alignment",
        prefix: "Alignment"
      }, {
        path: "basics.character.size.category",
        prefix: "Size"
      }, {
        path: "basics.character.height",
        prefix: "Height"
      }, {
        path: "basics.character.weight",
        prefix: "Weight"
      }, {
        path: "basics.character.age",
        prefix: "Age"
      }, {
        path: "basics.character.hero_points",
        prefix: "Hero Points"
      }]
    }, {
      type: "block",
      element: "p",
      head: "Description",
      content: [{
        path: "basics.character.description"
      }]
    }],
    statistics: [{
      type: "stat",
      element: "ul",
      content: [{
        statPath: "statistics.stats.str.current",
        modPath: "statistics.stats.str.modifier",
        prefix: "STR"
      }, {
        statPath: "statistics.stats.dex.current",
        modPath: "statistics.stats.dex.modifier",
        prefix: "DEX"
      }, {
        statPath: "statistics.stats.con.current",
        modPath: "statistics.stats.con.modifier",
        prefix: "CON"
      }, {
        statPath: "statistics.stats.int.current",
        modPath: "statistics.stats.int.modifier",
        prefix: "INT"
      }, {
        statPath: "statistics.stats.wis.current",
        modPath: "statistics.stats.wis.modifier",
        prefix: "WIS"
      }, {
        statPath: "statistics.stats.con.current",
        modPath: "statistics.stats.con.modifier",
        prefix: "CHA"
      }]
    }, {
      type: "pill",
      element: "ul",
      head: "Abilities",
      content: [{
        path: "statistics.abilities.all",
      }]
    }, {
      type: "pill",
      head: "Feats",
      element: "ul",
      content: [{
        path: "statistics.feats.all",
      }]
    }, {
      type: "pill",
      head: "Traits",
      element: "ul",
      content: [{
        path: "statistics.traits.all",
      }]
    }, {
      type: "pill",
      head: "languages",
      element: "ul",
      content: [{
        path: "statistics.languages.all",
      }]
    }]
  };

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
    all_displayBlock.forEach(function(arrayItem) {
      _removeAllChildren(arrayItem);
    });
  };

  function render(displayBlock) {
    _render_all_displayBlock(displayBlock);
    _render_all_placeholderDisplay();
  };

  function _render_all_displayBlock(displayBlock) {
    if (displayBlock) {
      _render_displayBlock(displayBlock);
    } else {
      var all_displayBlock = helper.eA(".js-display-block");
      all_displayBlock.forEach(function(arrayItem) {
        _render_displayBlock(arrayItem);
      });
    };
  };

  function _render_displayBlock(displayBlock) {
    var options = helper.makeObject(displayBlock.dataset.displayOptions);
    if (options) {
      _displayContent[options.section].forEach(function(arrayItem, index) {
        var elementToAdd = _render_content(arrayItem);
        if (elementToAdd.length > 0) {
          elementToAdd.forEach(function(arrayItem) {
            if (arrayItem) {
              displayBlock.appendChild(arrayItem);
            };
          });
        };
      });
    };
  };

  function _render_content(displayObject) {
    var dataFormat = {
      number: function(data) {
        if (data > 0) {
          data = parseFloat(data).toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          });
        };
        return data;
      },
      bonus: function(data) {
        if (data > 0) {
          data = "+" + data;
        };
        return data;
      },
      currency: function(data) {
        data = parseFloat(data).toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        });
        if (data.indexOf(".00") !== -1) {
          data = data.substr(0, data.indexOf("."));
        };
        return data;
      },
      weight: function(data) {
        data = parseFloat(data).toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        });
        if (data.indexOf(".00") !== -1) {
          data = data.substr(0, data.indexOf("."));
        };
        return data;
      }
    };
    var createElement = {
      image: function(displayObject) {
        var all_element = [];
        var element = document.createElement(displayObject.element);
        var contentFound = 0;
        displayObject.content.forEach(function(arrayItem, index) {
          var data = helper.getObject({
            object: sheet.get(),
            path: arrayItem.path
          });
          if (data != "") {
            contentFound++;
            element.setAttribute("class", "m-display-item-image-wrapper");
            // var displayImageItem = document.createElement("img");
            var displayImageItem = new Image;
            displayImageItem.setAttribute("class", "m-display-item-image");
            displayImageItem.src = data;
            var scale = helper.getObject({
              object: sheet.get(),
              path: arrayItem.scale
            });
            var position = helper.getObject({
              object: sheet.get(),
              path: arrayItem.position
            });
            var background = helper.getObject({
              object: sheet.get(),
              path: arrayItem.background
            });
            var color;
            if (background == "black") {
              color = "rgb(0,0,0)";
            } else if (background == "white") {
              color = "rgb(255,255,255)";
            } else if (background == "average") {
              color = helper.getObject({
                object: sheet.get(),
                path: arrayItem.color
              });
              color = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
            };
            element.style.backgroundColor = color;
            displayImageItem.style.width = scale + "%";
            displayImageItem.style.left = position.x + "%";
            displayImageItem.style.top = position.y + "%";
            element.appendChild(displayImageItem);
          };
        });
        if (contentFound > 0) {
          all_element.push(element);
        } else {
          all_element.push(false);
        };
        return all_element;
      },
      snippet: function(displayObject) {
        var all_element = [];
        var element = document.createElement(displayObject.element);
        element.setAttribute("class", "m-display-snippet");
        var contentFound = 0;
        displayObject.content.forEach(function(arrayItem, index) {
          var data = helper.getObject({
            object: sheet.get(),
            path: arrayItem.path
          });
          if (data != "") {
            if (arrayItem.valueType) {
              data = dataFormat[arrayItem.valueType](data);
            };
            if (arrayItem.dependency) {
              var dependencyData = helper.getObject({
                object: sheet.get(),
                path: arrayItem.dependency
              });
              if (dependencyData != "") {
                data = data + " / " + dependencyData;
              };
            };
            contentFound++;
            var snippet = document.createElement("span");
            snippet.setAttribute("class", "m-display-snippet-item");
            if (arrayItem.prefix) {
              var prefix = document.createElement("span");
              prefix.setAttribute("class", "m-display-prefix");
              prefix.textContent = arrayItem.prefix;
              snippet.appendChild(prefix);
            };
            var value = document.createElement("span");
            value.setAttribute("class", "m-display-value");
            value.textContent = data;
            snippet.appendChild(value);
            if (arrayItem.suffix) {
              var suffix = document.createElement("span");
              suffix.setAttribute("class", "m-display-suffix");
              suffix.textContent = arrayItem.suffix;
              snippet.appendChild(suffix);
            };
            element.appendChild(snippet);
          };
        });
        if (contentFound > 0) {
          all_element.push(element);
        } else {
          all_element.push(false);
        };
        return all_element;
      },
      block: function(displayObject) {
        var all_element = [];
        var element = document.createElement(displayObject.element);
        element.setAttribute("class", "m-display-text-block");
        var contentFound = 0;
        if (displayObject.head) {
          var head = document.createElement("p");
          head.setAttribute("class", "m-display-prefix");
          head.textContent = displayObject.head;
          all_element.push(head);
        };
        displayObject.content.forEach(function(arrayItem, index) {
          var data = helper.getObject({
            object: sheet.get(),
            path: arrayItem.path
          });
          if (data != "") {
            contentFound++;
            if (arrayItem.valueType) {
              data = dataFormat[arrayItem.valueType](data);
            };
            var value = document.createElement("span");
            value.setAttribute("class", "m-display-value");
            value.innerHTML = data;
            element.appendChild(value);
            if (arrayItem.suffix) {
              var suffix = document.createElement("span");
              suffix.setAttribute("class", "m-display-suffix");
              suffix.textContent = arrayItem.suffix;
              element.appendChild(suffix);
            };
          };
        });
        if (contentFound > 0) {
          all_element.push(element);
        } else {
          all_element.push(false);
        };
        return all_element;
      },
      stat: function(displayObject) {
        var all_element = [];
        var element = document.createElement(displayObject.element);
        element.setAttribute("class", "m-display-stats u-list-unstyled");
        var contentFound = 0;
        displayObject.content.forEach(function(arrayItem, index) {
          contentFound++;
          var listItem = document.createElement("li");
          listItem.setAttribute("class", "m-display-stats-item");
          var stat = document.createElement("span");
          stat.setAttribute("class", "m-display-stat");
          var statName = document.createElement("span");
          statName.setAttribute("class", "m-display-stat-name");
          var statValue = document.createElement("strong");
          statValue.setAttribute("class", "m-display-stat-value");
          var mod = document.createElement("h1");
          mod.setAttribute("class", "m-display-mod");
          var statData = helper.getObject({
            object: sheet.get(),
            path: arrayItem.statPath
          });
          var modData = dataFormat.bonus(helper.getObject({
            object: sheet.get(),
            path: arrayItem.modPath
          }));
          statName.textContent = arrayItem.prefix;
          statValue.textContent = statData;
          mod.textContent = modData;
          stat.appendChild(statName);
          stat.appendChild(statValue);
          listItem.appendChild(stat);
          listItem.appendChild(mod);
          element.appendChild(listItem);
        });
        if (contentFound > 0) {
          all_element.push(element);
        } else {
          all_element.push(false);
        };
        return all_element;
      },
      pill: function(displayObject) {
        var all_element = [];
        var element = document.createElement(displayObject.element);
        element.setAttribute("class", "m-display-pills u-list-unstyled");
        var contentFound = 0;
        if (displayObject.head) {
          var head = document.createElement("p");
          head.setAttribute("class", "m-display-prefix");
          head.textContent = displayObject.head;
          all_element.push(head);
        };
        displayObject.content.forEach(function(arrayItem, index) {
          var all_pills = helper.getObject({
            object: sheet.get(),
            path: arrayItem.path
          });
          if (all_pills.length > 0) {
            all_pills.forEach(function(arrayItem) {
              contentFound++;
              var listItem = document.createElement("li");
              listItem.setAttribute("class", "m-display-pills-item");
              var pillName = document.createElement("span");
              pillName.setAttribute("class", "m-display-pills-name");
              pillName.textContent = arrayItem.name;
              listItem.appendChild(pillName);
              element.appendChild(listItem);
            });
          };
        });
        if (contentFound > 0) {
          all_element.push(element);
        } else {
          all_element.push(false);
        };
        return all_element;
      }
    };
    if (displayObject.type in createElement) {
      return createElement[displayObject.type](displayObject);
    } else {
      return false;
    };
  };

  // function clear(display) {
  //   var _removeAllChildren = function(parent) {
  //     while (parent.lastChild) {
  //       parent.removeChild(parent.lastChild);
  //     };
  //   };
  //   if (display) {
  //     var all_displayBlock = display.querySelectorAll(".js-display-block");
  //     var all_areaBlock = display.querySelectorAll(".js-display-area");
  //   } else {
  //     var all_displayBlock = helper.eA(".js-display-block");
  //     var all_areaBlock = helper.eA(".js-display-area");
  //   };
  //   var displayInsert = helper.eA(".js-display-insert");
  //   all_displayBlock.forEach(function(arrayItem) {
  //     _removeAllChildren(arrayItem);
  //   });
  //   all_areaBlock.forEach(function(arrayItem) {
  //     arrayItem.dataset.displayContent = false;
  //   });
  //   displayInsert.forEach(function(arrayItem) {
  //     arrayItem.remove();
  //   });
  // };
  //
  // function render(display) {
  //   _render_all_display(display);
  //   _render_all_placeholderDisplay(display);
  // };
  //
  // function _render_all_display(display) {
  //   if (display) {
  //     _render_display(display);
  //   } else {
  //     var all_display = helper.eA(".js-display");
  //     all_display.forEach(function(arrayItem) {
  //       _render_display(arrayItem);
  //     });
  //   };
  // };
  //
  // function _render_display(display) {
  //   var all_displayArea = display.querySelectorAll(".js-display-area");
  //   all_displayArea.forEach(function(arrayItem) {
  //     _render_all_displayArea(arrayItem);
  //   });
  //   all_displayArea.forEach(function(arrayItem, index, displayArea) {
  //     var contentFound = false;
  //     var all_displayBlock = arrayItem.querySelectorAll(".js-display-block");
  //     all_displayBlock.forEach(function(arrayItem, index, displayArea) {
  //       if ((arrayItem.dataset.displayContent == "true")) {
  //         contentFound = true;
  //       };
  //     });
  //     if (contentFound) {
  //       arrayItem.dataset.displayContent = true;
  //       helper.removeClass(arrayItem, "is-hidden");
  //       helper.addClass(arrayItem, "m-display-guide");
  //       helper.addClass(arrayItem, "js-display-guide");
  //     } else {
  //       arrayItem.dataset.displayContent = false;
  //       helper.addClass(arrayItem, "is-hidden");
  //       helper.removeClass(arrayItem, "m-display-guide");
  //       helper.removeClass(arrayItem, "js-display-guide");
  //     };
  //   });
  //   var all_displayGuide = display.querySelectorAll(".js-display-guide");
  //   if (all_displayGuide.length > 0) {
  //     helper.removeClass(all_displayGuide[all_displayGuide.length - 1], "m-display-guide");
  //     helper.removeClass(all_displayGuide[all_displayGuide.length - 1], "js-display-guide");
  //   };
  // };
  //
  // function _render_all_displayArea(displayArea) {
  //   var all_displayBlock = displayArea.querySelectorAll(".js-display-block");
  //   all_displayBlock.forEach(function(arrayItem) {
  //     _render_displayBlock(arrayItem);
  //   });
  // };
  //
  // function _render_displayBlock(displayBlock) {
  //   var options = helper.makeObject(displayBlock.dataset.displayOptions);
  //   // var displayArea = helper.getClosest(displayBlock, ".js-display-area");
  //   var elementCount = 0;
  //   var all_element = [];
  //
  //   var getElements = {
  //     image: function(options) {
  //       // console.log("------ image");
  //       options.path.forEach(function(arrayItem, index) {
  //         var config = {
  //           path: arrayItem
  //         };
  //         all_element.push(_create_element().image(config));
  //       });
  //     },
  //     snippet: function(options) {
  //       // console.log("------ snippet");
  //       options.path.forEach(function(arrayItem, index) {
  //         var config = {
  //           path: arrayItem
  //         };
  //         if ("dependency" in options) {
  //           if (options.dependency[index]) {
  //             config.dependency = options.dependency[index];
  //           } else {
  //             config.dependency = false;
  //           };
  //         };
  //         if ("valueType" in options) {
  //           if (options.valueType[index]) {
  //             config.valueType = options.valueType[index];
  //           } else {
  //             config.valueType = false;
  //           };
  //         };
  //         if ("prefix" in options) {
  //           if (options.prefix[index]) {
  //             config.prefix = options.prefix[index];
  //           } else {
  //             config.prefix = false;
  //           };
  //         };
  //         if ("suffix" in options) {
  //           if (options.suffix[index]) {
  //             config.suffix = options.suffix[index];
  //           } else {
  //             config.suffix = false;
  //           };
  //         };
  //         all_element.push(_create_element().snippet(config));
  //       });
  //     },
  //     block: function(options) {
  //       // console.log("------ block");
  //       options.path.forEach(function(arrayItem, index) {
  //         var config = {
  //           path: arrayItem
  //         };
  //         if ("prefix" in options) {
  //           if (options.prefix[index]) {
  //             config.prefix = options.prefix[index];
  //           } else {
  //             config.prefix = false;
  //           };
  //         };
  //         if ("suffix" in options) {
  //           if (options.suffix[index]) {
  //             config.suffix = options.suffix[index];
  //           } else {
  //             config.suffix = false;
  //           };
  //         };
  //         all_element.push(_create_element().block(config));
  //       });
  //     },
  //     pill: function(options) {
  //       // console.log("------ pill");
  //       options.path.forEach(function(arrayItem, index) {
  //         var all_data = helper.getObject({
  //           object: sheet.get(),
  //           path: arrayItem
  //         });
  //         all_data.forEach(function(arrayItem) {
  //           all_element.push(_create_element().pill(arrayItem));
  //         });
  //         if (all_element.length > 0) {
  //           if ("prefix" in options) {
  //             if (options.prefix[index]) {
  //               var displayPrefix = document.createElement("span");
  //               displayPrefix.setAttribute("class", "m-display-item-prefix js-display-insert");
  //               displayPrefix.textContent = options.prefix[index];
  //               displayBlock.parentNode.insertBefore(displayPrefix, displayBlock);
  //             };
  //           };
  //         };
  //       });
  //     }
  //   };
  //
  //   getElements[options.type](options);
  //
  //   if (all_element.length > 0) {
  //     all_element.forEach(function(arrayItem, index) {
  //       if (arrayItem) {
  //         elementCount++;
  //         displayBlock.appendChild(arrayItem);
  //       };
  //     });
  //   };
  //
  //   if (elementCount > 0) {
  //     displayBlock.dataset.displayContent = true;
  //     helper.removeClass(displayBlock, "is-hidden");
  //     // helper.addClass(displayBlock, "m-display-guide");
  //     // helper.addClass(displayBlock, "js-display-guide");
  //   } else {
  //     displayBlock.dataset.displayContent = false;
  //     helper.addClass(displayBlock, "is-hidden");
  //     // helper.removeClass(displayBlock, "m-display-guide");
  //     // helper.removeClass(displayBlock, "js-display-guide");
  //   };
  // };
  //
  // function _create_element() {
  //
  //   function image(config) {
  //     var data = helper.getObject({
  //       object: sheet.get(),
  //       path: config.path + ".data"
  //     });
  //     var displayImage;
  //     if (typeof data != undefined && data != "") {
  //       var displayImage = document.createElement("div");
  //       displayImage.setAttribute("class", "m-display-item-image-wrapper");
  //       var displayImageItem = new Image;
  //       // displayImage.setAttribute("class", "m-character-image js-character-image");
  //       displayImageItem.setAttribute("class", "m-display-item-image");
  //       displayImageItem.src = data;
  //       var scale = helper.getObject({
  //         object: sheet.get(),
  //         path: config.path + ".scale"
  //       });
  //       var position = helper.getObject({
  //         object: sheet.get(),
  //         path: config.path + ".position"
  //       });
  //       var background = helper.getObject({
  //         object: sheet.get(),
  //         path: config.path + ".background"
  //       });
  //       var color;
  //       if (background == "black") {
  //         color = "rgb(0,0,0)";
  //       } else if (background == "white") {
  //         color = "rgb(255,255,255)";
  //       } else if (background == "average") {
  //         color = helper.getObject({
  //           object: sheet.get(),
  //           path: config.path + ".color"
  //         });
  //         color = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
  //       };
  //       displayImage.style.backgroundColor = color;
  //       displayImageItem.style.width = scale + "%";
  //       displayImageItem.style.left = position.x + "%";
  //       displayImageItem.style.top = position.y + "%";
  //       displayImage.appendChild(displayImageItem);
  //     } else {
  //       displayImage = false;
  //     };
  //     return displayImage;
  //   };
  //
  //   function snippet(config) {
  //     var data = helper.getObject({
  //       object: sheet.get(),
  //       path: config.path
  //     });
  //     var displaySnippet;
  //     if (typeof data != undefined && data != "") {
  //       displaySnippet = document.createElement("span");
  //       displaySnippet.setAttribute("class", "m-display-item-snippet");
  //       var displayValue = document.createElement("span");
  //       displayValue.setAttribute("class", "m-display-item-value");
  //       if (config.valueType == "bonus" && data > 0) {
  //         data = "+" + data;
  //       } else if (config.valueType == "currency" && data > 0) {
  //         data = parseFloat(data).toLocaleString(undefined, {
  //           minimumFractionDigits: 2,
  //           maximumFractionDigits: 2
  //         });
  //         if (data.indexOf(".00") !== -1) {
  //           data = data.substr(0, data.indexOf("."));
  //         };
  //       } else if (config.valueType == "number" && data > 0) {
  //         data = parseFloat(data).toLocaleString(undefined, {
  //           minimumFractionDigits: 0,
  //           maximumFractionDigits: 0
  //         });
  //       } else if (config.valueType == "weight" && data > 0) {
  //         data = parseFloat(data).toLocaleString(undefined, {
  //           minimumFractionDigits: 2,
  //           maximumFractionDigits: 2
  //         });
  //         if (data.indexOf(".00") !== -1) {
  //           data = data.substr(0, data.indexOf("."));
  //         };
  //       };
  //       if (config.dependency) {
  //         var dependencyData = helper.getObject({
  //           object: sheet.get(),
  //           path: config.dependency
  //         });
  //         if (dependencyData != "") {
  //           data = data + " / " + dependencyData;
  //         };
  //       };
  //       displayValue.textContent = data;
  //       if (config.prefix) {
  //         var displayPrefix = document.createElement("span");
  //         displayPrefix.setAttribute("class", "m-display-item-prefix");
  //         displayPrefix.textContent = config.prefix;
  //         displaySnippet.appendChild(displayPrefix);
  //       };
  //       displaySnippet.appendChild(displayValue);
  //       if (config.suffix) {
  //         var displaySuffix = document.createElement("span");
  //         displaySuffix.setAttribute("class", "m-display-item-suffix");
  //         displaySuffix.textContent = config.suffix;
  //         displaySnippet.appendChild(displaySuffix);
  //       };
  //     } else {
  //       displaySnippet = false;
  //     };
  //     return displaySnippet;
  //   };
  //
  //   function block(config) {
  //     var data = helper.getObject({
  //       object: sheet.get(),
  //       path: config.path
  //     });
  //     var displayBlock;
  //     if (typeof data != undefined && data != "") {
  //       displayBlock = document.createElement("span");
  //       displayBlock.setAttribute("class", "m-display-item-block");
  //       var displayValue = document.createElement("span");
  //       displayValue.setAttribute("class", "m-display-value");
  //       displayValue.innerHTML = data;
  //       if (config.prefix) {
  //         var displayPrefix = document.createElement("span");
  //         displayPrefix.setAttribute("class", "m-display-item-prefix");
  //         displayPrefix.textContent = config.prefix;
  //         displayBlock.appendChild(displayPrefix);
  //       };
  //       displayBlock.appendChild(displayValue);
  //       if (config.suffix) {
  //         var displaySuffix = document.createElement("span");
  //         displaySuffix.setAttribute("class", "m-display-item-suffix");
  //         displaySuffix.textContent = config.suffix;
  //         displayBlock.appendChild(displaySuffix);
  //       };
  //     } else {
  //       displayBlock = false;
  //     };
  //     return displayBlock;
  //   };
  //
  //   function pill(object) {
  //     var displayListItem = document.createElement("li");
  //     displayListItem.setAttribute("class", "m-display-list-item m-display-list-item-pill");
  //     var pillName = document.createElement("span");
  //     pillName.textContent = object.name;
  //     displayListItem.appendChild(pillName);
  //     return displayListItem;
  //   };
  //
  //   return {
  //     image: image,
  //     snippet: snippet,
  //     block: block,
  //     pill: pill
  //   };
  // };

  function _render_all_placeholderDisplay() {
    var all_display = helper.eA(".js-display");
    all_display.forEach(function(arrayItem) {
      _render_placeholderDisplay(arrayItem);
    });
  };

  function _render_placeholderDisplay(displayElement) {
    var placeholderDisplay = displayElement.querySelector(".js-placeholder-display");
    var displayBlock = displayElement.querySelector(".js-display-block");
    if (displayBlock) {
      if (displayBlock.hasChildNodes()) {
        helper.addClass(placeholderDisplay, "is-hidden")
      } else {
        helper.removeClass(placeholderDisplay, "is-hidden")
      };
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
