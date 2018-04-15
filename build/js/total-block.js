var totalBlock = (function() {

  function bind(totalBlock) {
    if (totalBlock) {
      _bind_totalBlock(totalBlock);
    } else {
      var all_totalBlock = helper.eA(".js-total-block");
      for (var i = 0; i < all_totalBlock.length; i++) {
        if (all_totalBlock[i].dataset.clone != "true") {
          _bind_totalBlock(all_totalBlock[i]);
        };
      };
    };
  };

  function _bind_totalBlock(totalBlock) {
    var all_totalBlockBonuses = totalBlock.querySelectorAll(".js-total-block-bonuses");
    var all_totalBlockCheck = totalBlock.querySelectorAll(".js-total-block-check");
    if (all_totalBlockCheck) {
      for (var i = 0; i < all_totalBlockCheck.length; i++) {
        var options = helper.makeObject(all_totalBlockCheck[i].dataset.totalBlockCheckOptions);
        if (!options.clone) {
          bind_totalBlockCheck(all_totalBlockCheck[i]);
        };
      };
    };
    if (all_totalBlockBonuses) {
      for (var i = 0; i < all_totalBlockBonuses.length; i++) {
        var options = helper.makeObject(all_totalBlockBonuses[i].dataset.totalBlockBonusesOptions);
        if (!options.clone) {
          bind_totalBlockBonuses(all_totalBlockBonuses[i]);
        };
      };
    };
  };

  function bind_totalBlockCheck(totalBlockCheck) {
    totalBlockCheck.addEventListener("change", function() {
      _render_totalBlockCheck(this);
      render();
      textBlock.render();
      sheet.store();
    }, false);
  };

  function bind_totalBlockBonuses(totalBlockBonuses) {
    totalBlockBonuses.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      _render_totalBlockBonuses(this);
    }, false);
  };

  function render(totalBlock) {
    if (totalBlock) {
      _render_totalBlock(totalBlock);
    } else {
      _render_all_totalBlock();
    };
  };

  function _render_all_totalBlock() {
    var all_totalBlock = helper.eA(".js-total-block");
    for (var i = 0; i < all_totalBlock.length; i++) {
      _render_totalBlock(all_totalBlock[i]);
    };
  };

  function _render_totalBlock(totalBlock) {
    var options = helper.makeObject(totalBlock.dataset.totalBlockOptions);
    // var totalBlockTotalElement = totalBlock.querySelector(".js-total-block-total");
    var totalBlockObject;
    var toSum = [];
    var _get_totalBlockObject = function() {
      totalBlockObject = helper.getObject({
        object: sheet.get(),
        path: options.path
      });
    };
    var _update_missingBonusKey = function() {
      if (totalBlockObject != undefined) {
        // if the options has bonuses
        if (options.bonuses) {
          // if the total block is missing bonuses
          if (!totalBlockObject.bonuses) {
            totalBlockObject.bonuses = {};
          };
          // loop over the options.bonuses and add them to totalBlockObject.bonuses
          for (var i = 0; i < options.bonuses.length; i++) {
            if (!(options.bonuses[i] in totalBlockObject.bonuses)) {
              totalBlockObject.bonuses[options.bonuses[i]] = false;
            };
          };
        };
      };
    };
    var _checkValue = function(data) {
      var value;
      if (typeof data == "number") {
        value = data;
      } else if (typeof data == "string") {
        value = parseInt(data, 10) || 0;
      };
      if (isNaN(value)) {
        value = 0;
      };
      return value;
    };
    var _checkClassSkill = function(object) {
      var classSkill;
      if (object.ranks > 0) {
        classSkill = 3;
      } else {
        classSkill = 0;
      };
      return classSkill;
    };
    var _push_internalValues = function(array, addOrMinus, multiply) {

      var _push_cloneSetValues = function() {
        for (var i = 0; i < totalBlockObject.length; i++) {
          if (totalBlockObject[i].include) {
            for (var q = 0; q < array.length; q++) {
              if (totalBlockObject[i][array[q]] && totalBlockObject[i][array[q]] != "" && !isNaN(totalBlockObject[i][array[q]])) {
                var valueToPush = totalBlockObject[i][array[q]];
                if (multiply != undefined) {
                  valueToPush = valueToPush * totalBlockObject[i][multiply];
                };
                if (addOrMinus == "minus") {
                  valueToPush = -valueToPush;
                };
                toSum.push(valueToPush);
              };
            };
          };
        };
      };

      var _push_values = function() {
        if (array && array.length > 0) {
          for (var i = 0; i < array.length; i++) {
            if (totalBlockObject[array[i]] && totalBlockObject[array[i]] != "" && !isNaN(totalBlockObject[array[i]])) {
              var valueToPush = totalBlockObject[array[i]];
              if (addOrMinus == "minus") {
                valueToPush = -valueToPush;
              };
              toSum.push(valueToPush);
            };
          };
        };
      };

      if (array) {
        if (options.cloneSet) {
          _push_cloneSetValues();
        } else {
          _push_values();
        };
      };

    };
    var _getMaxDex = function() {
      var maxDex = helper.getObject({
        object: sheet.get(),
        path: "equipment.armor.stats.max_dex.current"
      });
      // if max dex
      if (maxDex != "" || maxDex === 0) {
        // if max dex is less than dex bonus
        if (maxDex < stats.get.mod("dex")) {
          return maxDex;
        } else {
          return stats.get.mod("dex");
        };
      } else {
        return stats.get.mod("dex");
      };
    };
    var _push_externalValues = function() {
      // loop over bonuses in totalBlockObject
      for (var key in totalBlockObject.bonuses) {
        // if external bonus is true
        // max dex is not a bonus too add or subtract but a value to limit the dex modifier
        if (totalBlockObject.bonuses[key] && key != "max_dex") {
          var externalBouns;
          if (key == "str") {
            externalBouns = _checkValue(stats.get.mod("str"));
          };
          if (key == "dex") {
            // if max dex is true
            if (totalBlockObject.bonuses.max_dex) {
              externalBouns = _getMaxDex();
            } else {
              externalBouns = _checkValue(stats.get.mod("dex"));
            };
          };
          if (key == "con") {
            externalBouns = _checkValue(stats.get.mod("con"));
          };
          if (key == "int") {
            externalBouns = _checkValue(stats.get.mod("int"));
          };
          if (key == "wis") {
            externalBouns = _checkValue(stats.get.mod("wis"));
          };
          if (key == "cha") {
            externalBouns = _checkValue(stats.get.mod("cha"));
          };
          if (key == "bab") {
            externalBouns = _checkValue(helper.getObject({
              object: sheet.get(),
              path: "offense.stats.base_attack.bonus"
            }));
          };
          if (key == "size_base") {
            externalBouns = _checkValue(helper.getObject({
              object: sheet.get(),
              path: "basics.character.size.modifier.base"
            }));
          };
          if (key == "size_fly") {
            externalBouns = _checkValue(helper.getObject({
              object: sheet.get(),
              path: "basics.character.size.modifier.fly"
            }));
          };
          if (key == "size_stealth") {
            externalBouns = _checkValue(helper.getObject({
              object: sheet.get(),
              path: "basics.character.size.modifier.stealth"
            }));
          };
          if (key == "size_special") {
            externalBouns = _checkValue(helper.getObject({
              object: sheet.get(),
              path: "basics.character.size.modifier.special"
            }));
          };
          if (key == "level") {
            externalBouns = _checkValue(helper.getObject({
              object: sheet.get(),
              path: "basics.experience.level.current"
            }));
          };
          if (key == "half_level") {
            externalBouns = Math.floor(_checkValue(helper.getObject({
              object: sheet.get(),
              path: "basics.experience.level.current"
            })) / 2);
          };
          if (key == "armor") {
            externalBouns = _checkValue(helper.getObject({
              object: sheet.get(),
              path: "defense.ac.stats.armor"
            }));
          };
          if (key == "shield") {
            externalBouns = _checkValue(helper.getObject({
              object: sheet.get(),
              path: "defense.ac.stats.shield"
            }));
          };
          if (key == "deflect") {
            externalBouns = _checkValue(helper.getObject({
              object: sheet.get(),
              path: "defense.ac.stats.deflect"
            }));
          };
          if (key == "dodge") {
            externalBouns = _checkValue(helper.getObject({
              object: sheet.get(),
              path: "defense.ac.stats.dodge"
            }));
          };
          if (key == "natural") {
            externalBouns = _checkValue(helper.getObject({
              object: sheet.get(),
              path: "defense.ac.stats.natural"
            }));
          };
          if (key == "check_penalty") {
            externalBouns = _checkValue(helper.getObject({
              object: sheet.get(),
              path: "equipment.armor.stats.check_penalty.current"
            }));
          };
          if (key == "class_skill") {
            externalBouns = _checkClassSkill(totalBlockObject);
          };
          if (key == "spell_level") {
            externalBouns = _checkValue(helper.getObject({
              object: sheet.get(),
              path: options.path + ".spell_level"
            }));
          };
          if (key == "ac_temp") {
            externalBouns = _checkValue(helper.getObject({
              object: sheet.get(),
              path: "defense.ac.stats.temp"
            }));
          };
          if (key == "ac_misc") {
            externalBouns = _checkValue(helper.getObject({
              object: sheet.get(),
              path: "defense.ac.stats.misc"
            }));
          };
          if (key == "ac_enhancement") {
            externalBouns = _checkValue(helper.getObject({
              object: sheet.get(),
              path: "defense.ac.stats.enhancement"
            }));
          };
          if (key == "ac_insight") {
            externalBouns = _checkValue(helper.getObject({
              object: sheet.get(),
              path: "defense.ac.stats.insight"
            }));
          };
          if (key == "ac_luck") {
            externalBouns = _checkValue(helper.getObject({
              object: sheet.get(),
              path: "defense.ac.stats.luck"
            }));
          };
          if (key == "ac_profane") {
            externalBouns = _checkValue(helper.getObject({
              object: sheet.get(),
              path: "defense.ac.stats.profane"
            }));
          };
          if (key == "ac_sacred") {
            externalBouns = _checkValue(helper.getObject({
              object: sheet.get(),
              path: "defense.ac.stats.sacred"
            }));
          };
          if (key == "ac_trait") {
            externalBouns = _checkValue(helper.getObject({
              object: sheet.get(),
              path: "defense.ac.stats.trait"
            }));
          };
          if (key == "plus_ten") {
            externalBouns = 10;
          };
          toSum.push(externalBouns);
        };
      };
    };
    var _reduceSum = function(array) {
      var total;
      if (array.length > 0) {
        total = array.reduce(function(a, b) {
          return a + b;
        });
      } else {
        total = 0;
      };
      return total;
    };
    var _render_allCheck = function() {
      var all_bonusCheck = totalBlock.querySelectorAll(".js-total-block-check");
      if (all_bonusCheck.length > 0) {
        for (var i = 0; i < all_bonusCheck.length; i++) {
          var options = helper.makeObject(all_bonusCheck[i].dataset.totalBlockCheckOptions);
          all_bonusCheck[i].checked = totalBlockObject.bonuses[options.type];
        };
      };
    };
    var _store = function(grandTotal) {
      if (options.cloneSet) {
        helper.setObject({
          object: sheet.get(),
          path: options.cloneSetPath + ".current",
          newValue: grandTotal
        });
      } else {
        helper.setObject({
          object: sheet.get(),
          path: options.path + ".current",
          newValue: grandTotal
        });
      };
    };
    _get_totalBlockObject();
    _update_missingBonusKey();
    _push_internalValues(options.addition, "add", options.multiply);
    _push_internalValues(options.subtraction, "minus", options.multiply);
    _push_externalValues();
    _render_allCheck();
    var grandTotal = _reduceSum(toSum);
    // console.log(options.path, toSum, grandTotal);
    _store(grandTotal);
  };

  function _render_totalBlockCheck(input) {
    var options = helper.makeObject(input.dataset.totalBlockCheckOptions);
    var totalBlock = helper.getClosest(input, ".js-total-block");
    var totalBlockOptions = helper.makeObject(totalBlock.dataset.totalBlockOptions);
    var totalBlockBonusesObject;
    var object;
    if (options.path) {
      totalBlockBonusesObject = helper.getObject({
        object: sheet.get(),
        path: options.path
      });
    };
    if (totalBlockBonusesObject) {
      totalBlockBonusesObject[options.type] = input.checked;
    };
  };

  function _render_totalBlockBonuses(button) {
    var options = helper.makeObject(button.dataset.totalBlockBonusesOptions);
    var totalBlock = helper.getClosest(button, ".js-total-block");
    var totalBlockOptions = helper.makeObject(totalBlock.dataset.totalBlockOptions);
    var totalBlockBonusesObject;
    var newBonusesObject;
    var _get_bonusObject = function() {
      if (options.path) {
        totalBlockBonusesObject = helper.getObject({
          object: sheet.get(),
          path: options.path
        });
      };
      // copy object
      newBonusesObject = JSON.parse(JSON.stringify(totalBlockBonusesObject));
    };
    var _store_data = function() {
      helper.setObject({
        object: sheet.get(),
        path: options.path,
        newValue: newBonusesObject
      });
    };
    var _hold_data = function(input, key) {
      newBonusesObject[key] = input.checked;
    };
    var _render_check = function(key) {
      var checkBlock = document.createElement("div");
      checkBlock.setAttribute("class", "m-check-block");
      var checkBlockCheck = document.createElement("input");
      checkBlockCheck.setAttribute("class", "m-check-block-check");
      checkBlockCheck.setAttribute("type", "checkbox");
      checkBlockCheck.setAttribute("id", key);
      checkBlockCheck.checked = totalBlockBonusesObject[key];
      var checkBlockCheckIcon = document.createElement("span");
      checkBlockCheckIcon.setAttribute("class", "m-check-block-check-icon");
      checkBlock.appendChild(checkBlockCheck);
      checkBlock.appendChild(checkBlockCheckIcon);
      checkBlockCheck.addEventListener("change", function() {
        _hold_data(this, key);
      }, false);
      return checkBlock;
    };
    var _render_checkLabel = function(text, key) {
      var editBoxText = document.createElement("label");
      editBoxText.setAttribute("class", "m-edit-box-check-label");
      editBoxText.setAttribute("for", key);
      editBoxText.textContent = text;
      return editBoxText;
    };
    var _render_editBoxItem = function(size, child) {
      var editBoxItem = document.createElement("div");
      editBoxItem.setAttribute("class", "m-edit-box-item-" + size);
      if (child) {
        editBoxItem.appendChild(child);
      };
      return editBoxItem;
    };
    var _render_editBox = function(nodes) {
      var editBox = document.createElement("div");
      editBox.setAttribute("class", "m-edit-box");
      var editBoxHead = document.createElement("div");
      editBoxHead.setAttribute("class", "m-edit-box-head");
      var editBoxBody = document.createElement("div");
      editBoxBody.setAttribute("class", "m-edit-box-body");
      var editBoxContent = document.createElement("div");
      editBoxContent.setAttribute("class", "m-edit-box-content m-edit-box-content-margin-small");
      var editBoxGroup = document.createElement("div");
      editBoxGroup.setAttribute("class", "m-edit-box-item-100 m-edit-box-group");
      for (var i = 0; i < arguments.length; i++) {
        editBoxGroup.appendChild(arguments[i]);
      };
      editBoxContent.appendChild(editBoxGroup);
      editBoxBody.appendChild(editBoxContent);
      editBox.appendChild(editBoxBody);
      return editBox;
    };
    var _bonusTextLable = function(label) {
      var _checkForNull = function(data) {
        if (data == "" && data !== 0) {
          return "None"
        } else {
          return data;
        };
      };
      var _addPrefix = function(data) {
        var newData;
        if (data != "" && data != undefined) {
          if (data > 0) {
            newData = "+" + data;
          } else {
            newData = data
          };
        } else {
          newData = 0;
        };
        return newData;
      };
      if (label == "str") {
        return "STR Bonus (" + _addPrefix(stats.get.mod("str")) + ")";
      } else if (label == "dex") {
        return "DEX Bonus (" + _addPrefix(stats.get.mod("dex")) + ")";
      } else if (label == "con") {
        return "CON Bonus (" + _addPrefix(stats.get.mod("con")) + ")";
      } else if (label == "int") {
        return "INT Bonus (" + _addPrefix(stats.get.mod("int")) + ")";
      } else if (label == "wis") {
        return "WIS Bonus (" + _addPrefix(stats.get.mod("wis")) + ")";
      } else if (label == "cha") {
        return "CHA Bonus (" + _addPrefix(stats.get.mod("cha")) + ")";
      } else if (label == "bab") {
        return "Base Attack Bonus (" + _addPrefix(helper.getObject({
          object: sheet.get(),
          path: "offense.stats.base_attack.bonus"
        })) + ")";
      } else if (label == "size_base") {
        return "Size Bonus (" + _addPrefix(helper.getObject({
          object: sheet.get(),
          path: "basics.character.size.modifier.base"
        })) + ")";
      } else if (label == "size_special") {
        return "Special Size Bonus (" + _addPrefix(helper.getObject({
          object: sheet.get(),
          path: "basics.character.size.modifier.special"
        })) + ")";
      } else if (label == "size_fly") {
        return "Size Fly Bonus (" + _addPrefix(helper.getObject({
          object: sheet.get(),
          path: "basics.character.size.modifier.fly"
        })) + ")";
      } else if (label == "size_stealth") {
        return "Size Stealth Bonus (" + _addPrefix(helper.getObject({
          object: sheet.get(),
          path: "basics.character.size.modifier.stealth"
        })) + ")";
      } else if (label == "level") {
        return "Level (" + _addPrefix(helper.getObject({
          object: sheet.get(),
          path: "basics.experience.level.current"
        })) + ")";
      } else if (label == "half_level") {
        return "Half Level (" + _addPrefix(Math.floor(helper.getObject({
          object: sheet.get(),
          path: "basics.experience.level.current"
        }) / 2)) + ")";
      } else if (label == "plus_ten") {
        return "Plus 10";
      } else if (label == "armor") {
        return "Armor Bonus (" + _addPrefix(helper.getObject({
          object: sheet.get(),
          path: "defense.ac.stats.armor"
        })) + ")";
      } else if (label == "shield") {
        return "Shield Bonus (" + _addPrefix(helper.getObject({
          object: sheet.get(),
          path: "defense.ac.stats.shield"
        })) + ")";
      } else if (label == "deflect") {
        return "Deflect Bonus (" + _addPrefix(helper.getObject({
          object: sheet.get(),
          path: "defense.ac.stats.deflect"
        })) + ")";
      } else if (label == "dodge") {
        return "Dodge Bonus (" + _addPrefix(helper.getObject({
          object: sheet.get(),
          path: "defense.ac.stats.dodge"
        })) + ")";
      } else if (label == "natural") {
        return "Natural Armor Bonus (" + _addPrefix(helper.getObject({
          object: sheet.get(),
          path: "defense.ac.stats.natural"
        })) + ")";
      } else if (label == "class_skill") {
        return "Class Skill (+3)";
      } else if (label == "check_penalty") {
        return "Armor Check Penalty (" + _addPrefix(helper.getObject({
          object: sheet.get(),
          path: "equipment.armor.stats.check_penalty.current"
        })) + ")";
      } else if (label == "max_dex") {
        return "Max Dex Bonus (" + _addPrefix(_checkForNull(helper.getObject({
          object: sheet.get(),
          path: "equipment.armor.stats.max_dex.current"
        }))) + ")";
      } else if (label == "spell_level") {
        return "Spell Level (" + _addPrefix(helper.getObject({
          object: sheet.get(),
          path: totalBlockOptions.path + ".spell_level"
        })) + ")";
      } else if (label == "ac_temp") {
        return "Temp Armor Bonus (" + _addPrefix(helper.getObject({
          object: sheet.get(),
          path: "defense.ac.stats.temp"
        })) + ")";
      } else if (label == "ac_misc") {
        return "Misc Armor Bonus (" + _addPrefix(helper.getObject({
          object: sheet.get(),
          path: "defense.ac.stats.misc"
        })) + ")";
      } else if (label == "ac_enhancement") {
        return "Enhancement (" + _addPrefix(helper.getObject({
          object: sheet.get(),
          path: "defense.ac.stats.enhancement"
        })) + ")";
      } else if (label == "ac_insight") {
        return "Insight (" + _addPrefix(helper.getObject({
          object: sheet.get(),
          path: "defense.ac.stats.insight"
        })) + ")";
      } else if (label == "ac_luck") {
        return "Luck (" + _addPrefix(helper.getObject({
          object: sheet.get(),
          path: "defense.ac.stats.luck"
        })) + ")";
      } else if (label == "ac_profane") {
        return "Profane (" + _addPrefix(helper.getObject({
          object: sheet.get(),
          path: "defense.ac.stats.profane"
        })) + ")";
      } else if (label == "ac_sacred") {
        return "Sacred (" + _addPrefix(helper.getObject({
          object: sheet.get(),
          path: "defense.ac.stats.sacred"
        })) + ")";
      } else if (label == "ac_trait") {
        return "Trait (" + _addPrefix(helper.getObject({
          object: sheet.get(),
          path: "defense.ac.stats.trait"
        })) + ")";
      } else {
        return label;
      };
    };
    var _render_totalBlockBonusesModal = function() {
      var totalBlockControls = document.createElement("div");
      if (totalBlockBonusesObject) {
        // order the bonuses for rendering in modal
        var orderedBonuses = [];
        if ("str" in totalBlockBonusesObject) {
          orderedBonuses.push({
            str: totalBlockBonusesObject["str"]
          })
        };
        if ("dex" in totalBlockBonusesObject) {
          orderedBonuses.push({
            dex: totalBlockBonusesObject["dex"]
          })
        };
        if ("con" in totalBlockBonusesObject) {
          orderedBonuses.push({
            con: totalBlockBonusesObject["con"]
          })
        };
        if ("int" in totalBlockBonusesObject) {
          orderedBonuses.push({
            int: totalBlockBonusesObject["int"]
          })
        };
        if ("wis" in totalBlockBonusesObject) {
          orderedBonuses.push({
            wis: totalBlockBonusesObject["wis"]
          })
        };
        if ("cha" in totalBlockBonusesObject) {
          orderedBonuses.push({
            cha: totalBlockBonusesObject["cha"]
          })
        };
        if ("bab" in totalBlockBonusesObject) {
          orderedBonuses.push({
            bab: totalBlockBonusesObject["bab"]
          })
        };
        if ("level" in totalBlockBonusesObject) {
          orderedBonuses.push({
            level: totalBlockBonusesObject["level"]
          })
        };
        if ("half_level" in totalBlockBonusesObject) {
          orderedBonuses.push({
            half_level: totalBlockBonusesObject["half_level"]
          })
        };
        if ("class_skill" in totalBlockBonusesObject) {
          orderedBonuses.push({
            class_skill: totalBlockBonusesObject["class_skill"]
          })
        };
        if ("max_dex" in totalBlockBonusesObject) {
          orderedBonuses.push({
            max_dex: totalBlockBonusesObject["max_dex"]
          })
        };
        if ("check_penalty" in totalBlockBonusesObject) {
          orderedBonuses.push({
            check_penalty: totalBlockBonusesObject["check_penalty"]
          })
        };
        if ("plus_ten" in totalBlockBonusesObject) {
          orderedBonuses.push({
            plus_ten: totalBlockBonusesObject["plus_ten"]
          })
        };
        if ("armor" in totalBlockBonusesObject) {
          orderedBonuses.push({
            armor: totalBlockBonusesObject["armor"]
          })
        };
        if ("shield" in totalBlockBonusesObject) {
          orderedBonuses.push({
            shield: totalBlockBonusesObject["shield"]
          })
        };
        if ("deflect" in totalBlockBonusesObject) {
          orderedBonuses.push({
            deflect: totalBlockBonusesObject["deflect"]
          })
        };
        if ("dodge" in totalBlockBonusesObject) {
          orderedBonuses.push({
            dodge: totalBlockBonusesObject["dodge"]
          })
        };
        if ("natural" in totalBlockBonusesObject) {
          orderedBonuses.push({
            natural: totalBlockBonusesObject["natural"]
          })
        };
        if ("size_base" in totalBlockBonusesObject) {
          orderedBonuses.push({
            size_base: totalBlockBonusesObject["size_base"]
          })
        };
        if ("size_special" in totalBlockBonusesObject) {
          orderedBonuses.push({
            size_special: totalBlockBonusesObject["size_special"]
          })
        };
        if ("size_fly" in totalBlockBonusesObject) {
          orderedBonuses.push({
            size_fly: totalBlockBonusesObject["size_fly"]
          })
        };
        if ("size_stealth" in totalBlockBonusesObject) {
          orderedBonuses.push({
            size_stealth: totalBlockBonusesObject["size_stealth"]
          })
        };
        if ("spell_level" in totalBlockBonusesObject) {
          orderedBonuses.push({
            spell_level: totalBlockBonusesObject["spell_level"]
          })
        };
        if ("ac_enhancement" in totalBlockBonusesObject) {
          orderedBonuses.push({
            ac_enhancement: totalBlockBonusesObject["ac_enhancement"]
          })
        };
        if ("ac_insight" in totalBlockBonusesObject) {
          orderedBonuses.push({
            ac_insight: totalBlockBonusesObject["ac_insight"]
          })
        };
        if ("ac_luck" in totalBlockBonusesObject) {
          orderedBonuses.push({
            ac_luck: totalBlockBonusesObject["ac_luck"]
          })
        };
        if ("ac_profane" in totalBlockBonusesObject) {
          orderedBonuses.push({
            ac_profane: totalBlockBonusesObject["ac_profane"]
          })
        };
        if ("ac_sacred" in totalBlockBonusesObject) {
          orderedBonuses.push({
            ac_sacred: totalBlockBonusesObject["ac_sacred"]
          })
        };
        if ("ac_trait" in totalBlockBonusesObject) {
          orderedBonuses.push({
            ac_trait: totalBlockBonusesObject["ac_trait"]
          })
        };
        if ("ac_temp" in totalBlockBonusesObject) {
          orderedBonuses.push({
            ac_temp: totalBlockBonusesObject["ac_temp"]
          })
        };
        if ("ac_misc" in totalBlockBonusesObject) {
          orderedBonuses.push({
            ac_misc: totalBlockBonusesObject["ac_misc"]
          })
        };
        for (var i = 0; i < orderedBonuses.length; i++) {
          for (var key in orderedBonuses[i]) {
            var title = _bonusTextLable(key);
            var check = _render_check(key);
            var label = _render_checkLabel(title, key);
            var editBoxItem1 = _render_editBoxItem("100", label);
            var editBoxItem2 = _render_editBoxItem("check", check);
            var editBox = _render_editBox(editBoxItem1, editBoxItem2);
            totalBlockControls.appendChild(editBox);
          };
        };
      };
      return totalBlockControls;
    };
    _get_bonusObject();
    var modalContent = _render_totalBlockBonusesModal();
    var modalAction = function() {
      _store_data();
      render();
      display.clear();
      display.render();
      textBlock.render();
      sheet.store();
    }.bind(modalContent);
    modal.render({
      heading: options.modalHeading,
      content: modalContent,
      action: modalAction,
      actionText: "Apply",
      size: "small"
    });
    page.update();
  };

  function clear() {
    var all_total = helper.eA(".js-total-block-total");
    for (var i = 0; i < all_total.length; i++) {
      all_total[i].textContent = "";
    };
  };

  // exposed methods
  return {
    clear: clear,
    bind: bind,
    bind_totalBlockCheck: bind_totalBlockCheck,
    bind_totalBlockBonuses: bind_totalBlockBonuses,
    render: render
  };

})();
