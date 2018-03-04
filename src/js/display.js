var display = (function() {

  var _displayContent = {
    basics: {
      intro: [{
        type: "image",
        element: "div",
        classname: "m-display-image-wrapper",
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
        classname: "m-display-name",
        content: [{
          path: "basics.character.name"
        }]
      }, {
        type: "snippet",
        element: "p",
        classname: "m-display-class",
        content: [{
          path: "basics.classes.string"
        }]
      }],
      all: [{
        type: "snippet",
        element: "p",
        content: [{
          path: "basics.initiative.current",
          prefix: "Initiative",
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
        }, {
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
        content: [{
          path: "basics.character.description",
          prefix: "Description"
        }]
      }]
    },
    statistics: {
      stats: [{
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
      }],
      abilities: [{
        type: "pill",
        element: "ul",
        head: "Abilities",
        content: [{
          path: "statistics.abilities.all",
        }]
      }, {
        type: "block",
        element: "p",
        content: [{
          path: "statistics.abilities.notes",
          prefix: "Notes"
        }]
      }],
      feats: [{
        type: "pill",
        head: "Feats",
        element: "ul",
        content: [{
          path: "statistics.feats.all",
        }]
      }, {
        type: "block",
        element: "p",
        content: [{
          path: "statistics.feats.notes",
          prefix: "Notes"
        }]
      }],
      traits: [{
        type: "pill",
        head: "Traits",
        element: "ul",
        content: [{
          path: "statistics.traits.all",
        }]
      }, {
        type: "block",
        element: "p",
        content: [{
          path: "statistics.traits.notes",
          prefix: "Notes"
        }]
      }],
      languages: [{
        type: "pill",
        head: "languages",
        element: "ul",
        content: [{
          path: "statistics.languages.all",
        }]
      }, {
        type: "block",
        element: "p",
        content: [{
          path: "statistics.languages.notes",
          prefix: "Notes"
        }]
      }],
      power: [{
        type: "clone",
        head: "Powers",
        element: "ul",
        cloneType: "power",
        content: [{
          path: "statistics.power.all",
        }]
      }]
    },
    equipment: {
      gear: [{
        type: "block",
        head: "Gear",
        element: "p",
        content: [{
          path: "equipment.possessions.gear",
        }]
      }],
      magic_gear: [{
        type: "block",
        head: "Magic Gear",
        element: "p",
        content: [{
          path: "equipment.possessions.magic_gear",
        }]
      }],
      potion_viles_oils: [{
        type: "block",
        head: "Potions/Viles/Oils",
        element: "p",
        content: [{
          path: "equipment.possessions.potion_viles_oils",
        }]
      }],
      scrolls: [{
        type: "block",
        head: "Scrolls",
        element: "p",
        content: [{
          path: "equipment.possessions.scrolls",
        }]
      }]
    }
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
      options.sections.forEach(function(arrayItem) {

        var content = helper.getObject({
          object: _displayContent,
          path: arrayItem
        });
        var displayArea = document.createElement("div");
        displayArea.setAttribute("class", "m-display-area");
        var displayAreaContent = false;

        content.forEach(function(arrayItem, index) {
          var elementToAdd = _render_content(arrayItem);
          // console.log(options.sections, elementToAdd);
          if (elementToAdd) {
            if (elementToAdd.length > 0) {
              elementToAdd.forEach(function(arrayItem) {
                if (arrayItem) {
                  displayAreaContent = true;
                  displayArea.appendChild(arrayItem);
                };
              });
            };
          };
        });

        if (displayAreaContent) {
          displayBlock.appendChild(displayArea);
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
        if (displayObject.classname) {
          helper.addClass(element, displayObject.classname);
        };
        var contentFound = 0;
        displayObject.content.forEach(function(arrayItem, index) {
          var data = helper.getObject({
            object: sheet.get(),
            path: arrayItem.path
          });
          if (data != "") {
            contentFound++;
            var displayImageItem = new Image;
            displayImageItem.setAttribute("class", "m-display-image");
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
        if (displayObject.classname) {
          helper.addClass(element, displayObject.classname);
        };
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
        if (displayObject.classname) {
          helper.addClass(element, displayObject.classname);
        };
        var contentFound = 0;
        var head;
        if (displayObject.head) {
          head = document.createElement("p");
          head.setAttribute("class", "m-display-prefix");
          head.textContent = displayObject.head;
        };
        displayObject.content.forEach(function(arrayItem, index) {
          var data = helper.getObject({
            object: sheet.get(),
            path: arrayItem.path
          });
          if (data != "") {
            contentFound++;
            if (head) {
              all_element.push(head);
            };
            if (arrayItem.prefix) {
              var prefix = document.createElement("span");
              prefix.setAttribute("class", "m-display-prefix");
              prefix.textContent = arrayItem.prefix;
              element.appendChild(prefix);
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
        element.setAttribute("class", "m-display-list-dash u-list-unstyled");
        var contentFound = 0;
        var head;
        if (displayObject.head) {
          head = document.createElement("p");
          head.setAttribute("class", "m-display-prefix");
          head.textContent = displayObject.head;
        };
        displayObject.content.forEach(function(arrayItem, index) {
          var all_pill = helper.getObject({
            object: sheet.get(),
            path: arrayItem.path
          });
          if (all_pill.length > 0) {
            all_pill.forEach(function(arrayItem) {
              contentFound++;
              if (head) {
                all_element.push(head);
              };
              var listItem = document.createElement("li");
              listItem.setAttribute("class", "m-display-list-item");
              var pillName = document.createElement("span");
              pillName.setAttribute("class", "m-display-list-item-name");
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
      },
      clone: function(displayObject) {
        var all_element = [];
        var element = document.createElement(displayObject.element);
        element.setAttribute("class", "m-display-list u-list-unstyled");
        var contentFound = 0;
        var head;
        if (displayObject.head) {
          head = document.createElement("p");
          head.setAttribute("class", "m-display-prefix");
          head.textContent = displayObject.head;
        };
        var cloneVariant = {
          class: function() {},
          consumable: function() {},
          power: function() {
            displayObject.content.forEach(function(arrayItem, index) {
              var all_clone = helper.getObject({
                object: sheet.get(),
                path: arrayItem.path
              });
              if (all_clone.length > 0) {
                all_clone.forEach(function(arrayItem) {
                  helper.addClass(element, "m-display-list-responsive");
                  contentFound++;
                  if (head) {
                    all_element.push(head);
                  };
                  var listItem = document.createElement("li");
                  listItem.setAttribute("class", "m-display-list-item");
                  var listItemName = document.createElement("span");
                  listItemName.setAttribute("class", "m-display-list-item-name");
                  listItemName.textContent = arrayItem.name;
                  var listItemValue = document.createElement("span");
                  listItemValue.setAttribute("class", "m-display-list-item-value");
                  listItemValue.textContent = arrayItem.current + "/" + arrayItem.total;
                  var percentage = parseFloat(((arrayItem.total - arrayItem.used) / arrayItem.total) * 100).toFixed(2);
                  if (percentage < 0) {
                    percentage = 0;
                  };
                  var percentageBar = document.createElement("span");
                  percentageBar.setAttribute("class", "m-display-list-item-percentage");
                  percentageBar.setAttribute("style", "width: " + percentage + "%;");
                  listItem.appendChild(listItemName);
                  listItem.appendChild(listItemValue);
                  listItem.appendChild(percentageBar);
                  element.appendChild(listItem);
                });
              };
            })
          },
          item: function() {},
          skill: function() {},
          attack_melee: function() {},
          attack_ranged: function() {},
          note_character: function() {},
          note_story: function() {}
        };

        cloneVariant[displayObject.cloneType]();

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

  function _render_all_placeholderDisplay() {
    var all_display = helper.eA(".js-display");
    all_display.forEach(function(arrayItem) {
      _render_placeholderDisplay(arrayItem);
    });
  };

  function _render_placeholderDisplay(displayElement) {
    var placeholderDisplay = displayElement.querySelector(".js-placeholder-display");
    var displayBlock = displayElement.querySelector(".js-display-block");
    if (displayBlock && placeholderDisplay) {
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
