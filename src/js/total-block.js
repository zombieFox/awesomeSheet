var totalBlock = (function() {

  function _bonusTextLable(label) {
    if (label == "str-bonus" || label == "str_bonus") {
      return "STR Bonus";
    } else if (label == "dex-bonus" || label == "dex_bonus") {
      return "DEX Bonus";
    } else if (label == "con-bonus" || label == "con_bonus") {
      return "CON Bonus";
    } else if (label == "int-bonus" || label == "int_bonus") {
      return "INT Bonus";
    } else if (label == "wis-bonus" || label == "wis_bonus") {
      return "WIS Bonus";
    } else if (label == "cha-bonus" || label == "cha_bonus") {
      return "CHA Bonus";
    } else if (label == "bab") {
      return "Base Attack Bonus";
    } else if (label == "size") {
      return "Size Bonus";
    } else if (label == "special_size") {
      return "Special Size Bonus";
    } else if (label == "size_modifier_fly") {
      return "Size Fly Bonus";
    } else if (label == "size_modifier_stealth") {
      return "Size Stealth Bonus";
    } else if (label == "level") {
      return "Level";
    } else if (label == "half-level" || label == "half_level") {
      return "Half Level";
    } else if (label == "plus-ten" || label == "plus_ten") {
      return "Plus 10";
    } else if (label == "ac-armor" || label == "ac_armor") {
      return "Armor Bonus";
    } else if (label == "ac-shield" || label == "ac_shield") {
      return "Shield Bonus";
    } else if (label == "ac-deflect" || label == "ac_deflect") {
      return "Deflect Bonus";
    } else if (label == "ac-dodge" || label == "ac_dodge") {
      return "Dodge Bonus";
    } else if (label == "ac-natural" || label == "ac_natural") {
      return "Natural Armor Bonus";
    } else if (label == "class-skill" || label == "class_skill") {
      return "Class Skill";
    } else if (label == "check-penalty" || label == "check_penalty") {
      return "Armor Check Penalty";
    } else if (label == "max-dex" || label == "max_dex") {
      return "Max Dex Bonus";
    } else {
      return label;
    };
  };

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
    var totalBlockBonuses = totalBlock.querySelector(".js-total-block-bonuses");
    var all_totalBlockCheck = totalBlock.querySelectorAll(".js-total-block-check");
    if (all_totalBlockCheck) {
      for (var i = 0; i < all_totalBlockCheck.length; i++) {
        _bind_totalBlockCheck(all_totalBlockCheck[i]);
      };
    };
    if (totalBlockBonuses) {
      _bind_totalBlockBonuses(totalBlockBonuses);
    };
  };

  function _bind_totalBlockCheck(check) {
    check.addEventListener("change", function() {
      _render_totalBlockCheck(this);
      render();
      sheet.storeCharacters();
    }, false);
  };

  function _bind_totalBlockBonuses(button) {
    button.addEventListener("click", function(event) {
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
    if (totalBlock.dataset.totalBlockOptions) {
      var options = helper.makeObject(totalBlock.dataset.totalBlockOptions);
      var totalElement = totalBlock.querySelector(".js-total-block-total");
      var objectToTotal;
      var toSum = [];
      var _update_missingBonusKey = function() {
        if (options.bonuses) {
          for (var i = 0; i < options.bonuses.length; i++) {
            if (!(options.bonuses[i] in objectToTotal.bonuses)) {
              objectToTotal.bonuses[options.bonuses[i]] = false;
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
      var _get_objectToTotal = function() {
        var totalObject;
        if (options.clone != null && options.cloneIndex != null && options.cloneSet != null) {
          totalObject = helper.xxx_getObject({
            object: sheet.getCharacter(),
            path: options.path,
            cloneIndex: parseInt(options.cloneIndex, 10),
            cloneSet: options.cloneSet
          });
        } else if (options.clone != null && options.cloneIndex != null) {
          totalObject = helper.xxx_getObject({
            object: sheet.getCharacter(),
            path: options.path,
            cloneIndex: parseInt(options.cloneIndex, 10),
          });
        } else {
          totalObject = helper.xxx_getObject({
            object: sheet.getCharacter(),
            path: options.path
          });
        };
        objectToTotal = totalObject;
      };
      var _push_internalValues = function(array, addOrMinus) {
        if (array && array.length > 0) {
          for (var i = 0; i < array.length; i++) {
            if (objectToTotal[array[i]] && objectToTotal[array[i]] != "" && !isNaN(objectToTotal[array[i]])) {
              if (addOrMinus == "add") {
                toSum.push(objectToTotal[array[i]]);
              } else if (addOrMinus == "minus") {
                toSum.push(-objectToTotal[array[i]]);
              };
            };
          };
        };
      };
      var _push_externalValues = function(objectToTotal) {
        // loop over bonuses in objectToTotal
        for (var key in objectToTotal.bonuses) {
          // if external bonuse is true
          // max dex is not a bonus too add or subtract but a value to limit the dex modifier
          if (objectToTotal.bonuses[key] && key != "max_dex") {
            var externalBouns;
            if (key == "str_bonus") {
              externalBouns = _checkValue(stats.getMod("str"));
            };
            if (key == "dex_bonus") {
              // if max dex is true
              if (objectToTotal.bonuses.max_dex) {
                if (helper.xxx_getObject({
                    object: sheet.getCharacter(),
                    path: "equipment.armor.max_dex"
                  }) != "" && helper.xxx_getObject({
                    object: sheet.getCharacter(),
                    path: "equipment.armor.max_dex"
                  }) < _checkValue(stats.getMod("dex"))) {
                  externalBouns = helper.xxx_getObject({
                    object: sheet.getCharacter(),
                    path: "equipment.armor.max_dex"
                  });
                } else {
                  externalBouns = _checkValue(stats.getMod("dex"));
                };
              } else {
                externalBouns = _checkValue(stats.getMod("dex"));
              };
            };
            if (key == "con_bonus") {
              externalBouns = _checkValue(stats.getMod("con"));
            };
            if (key == "int_bonus") {
              externalBouns = _checkValue(stats.getMod("int"));
            };
            if (key == "wis_bonus") {
              externalBouns = _checkValue(stats.getMod("wis"));
            };
            if (key == "cha_bonus") {
              externalBouns = _checkValue(stats.getMod("cha"));
            };
            if (key == "bab") {
              externalBouns = _checkValue(helper.xxx_getObject({
                object: sheet.getCharacter(),
                path: "offense.base_attack"
              }));
            };
            if (key == "size") {
              externalBouns = _checkValue(helper.xxx_getObject({
                object: sheet.getCharacter(),
                path: "basics.size.size_modifier"
              }));
            };
            if (key == "special_size") {
              externalBouns = _checkValue(helper.xxx_getObject({
                object: sheet.getCharacter(),
                path: "basics.size.special_size_modifier"
              }));
            };
            if (key == "level") {
              externalBouns = _checkValue(helper.xxx_getObject({
                object: sheet.getCharacter(),
                path: "basics.level"
              }));
            };
            if (key == "half_level") {
              externalBouns = Math.floor(_checkValue(helper.xxx_getObject({
                object: sheet.getCharacter(),
                path: "basics.level"
              }))) / 2;
            };
            if (key == "ac_armor") {
              externalBouns = _checkValue(helper.xxx_getObject({
                object: sheet.getCharacter(),
                path: "defense.ac.armor"
              }));
            };
            if (key == "ac_shield") {
              externalBouns = _checkValue(helper.xxx_getObject({
                object: sheet.getCharacter(),
                path: "defense.ac.shield"
              }));
            };
            if (key == "ac_deflect") {
              externalBouns = _checkValue(helper.xxx_getObject({
                object: sheet.getCharacter(),
                path: "defense.ac.deflect"
              }));
            };
            if (key == "ac_dodge") {
              externalBouns = _checkValue(helper.xxx_getObject({
                object: sheet.getCharacter(),
                path: "defense.ac.dodge"
              }));
            };
            if (key == "ac_natural") {
              externalBouns = _checkValue(helper.xxx_getObject({
                object: sheet.getCharacter(),
                path: "defense.ac.natural"
              }));
            };
            if (key == "check_penalty") {
              externalBouns = _checkValue(helper.xxx_getObject({
                object: sheet.getCharacter(),
                path: "equipment.armor.check_penalty"
              }));
            };
            if (key == "class_skill") {
              externalBouns = _checkClassSkill(objectToTotal);
            };
            if (key == "size_modifier_fly") {
              externalBouns = _checkValue(helper.xxx_getObject({
                object: sheet.getCharacter(),
                path: "basics.size.size_modifier_fly"
              }));
            };
            if (key == "size_modifier_stealth") {
              externalBouns = _checkValue(helper.xxx_getObject({
                object: sheet.getCharacter(),
                path: "basics.size.size_modifier_stealth"
              }));
            };
            if (key == "plus_ten") {
              externalBouns = 10;
            };
            toSum.push(externalBouns);
            // console.log("added", key);
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
      var _addPrefixSuffix = function(grandTotal, type) {
        var total;
        if (type == "bonus" && grandTotal > 0) {
          total = grandTotal = "+" + grandTotal;
        } else if (type == "weight" && parseInt(grandTotal, 10) > 0) {
          total = grandTotal + " lbs";
        } else {
          total = grandTotal;
        };
        return total;
      };
      var _render_allCheck = function(objectToTotal) {
        var all_bonusCheck = totalBlock.querySelectorAll(".js-total-block-check");
        if (all_bonusCheck.length > 0) {
          for (var i = 0; i < all_bonusCheck.length; i++) {
            var options = helper.makeObject(all_bonusCheck[i].dataset.totalBlockCheckOptions);
            all_bonusCheck[i].checked = objectToTotal.bonuses[options.type];
          };
        };
      };
      _get_objectToTotal();
      _update_missingBonusKey();
      _push_internalValues(options.addition, "add");
      _push_internalValues(options.subtraction, "minus");
      _push_externalValues(objectToTotal);
      _render_allCheck(objectToTotal)
      var grandTotal = _reduceSum(toSum);
      if (totalElement) {
        totalElement.textContent = _addPrefixSuffix(grandTotal, options.type);
        objectToTotal.current = grandTotal;
      };
    };
  };

  function _render_totalBlockCheck(input) {
    var options = helper.makeObject(input.dataset.totalBlockCheckOptions);
    var totalBlock = helper.getClosest(input, ".js-total-block") || helper.getClosest(input, ".js-total-block-control");
    var bonusesObject;
    var object;
    if (totalBlock.dataset.clone == "true") {
      var cloneCount = parseInt(totalBlock.dataset.cloneCount, 10);
      object = helper.xxx_getObject({
        object: sheet.getCharacter(),
        path: options.path,
        cloneIndex: options.cloneIndex,
        cloneKey: options.cloneKey
      });
      object.bonuses[options.type] = input.checked;
    } else {
      bonusesObject = helper.xxx_getObject({
        object: sheet.getCharacter(),
        path: options.path + ".bonuses"
      });
      bonusesObject[options.type] = input.checked;
    };
  };

  function _render_totalBlockBonuses(button) {
    var options = helper.makeObject(button.dataset.totalBlockBonusesOptions);
    var totalBlock = helper.getClosest(button, ".js-total-block");
    var totalBlockOptions = helper.makeObject(totalBlock.dataset.totalBlockOptions);
    var bonusObject;
    var _get_bonusObject = function() {
      var totalObjectBonuses;
      if (totalBlockOptions.clone != null && totalBlockOptions.cloneIndex != null) {
        totalObjectBonuses = helper.xxx_getObject({
          object: sheet.getCharacter(),
          path: totalBlockOptions.path + ".bonuses",
          cloneIndex: parseInt(totalBlockOptions.cloneIndex, 10),
        });
      } else {
        totalObjectBonuses = helper.xxx_getObject({
          object: sheet.getCharacter(),
          path: totalBlockOptions.path + ".bonuses"
        });
      };
      bonusObject = totalObjectBonuses;
    };
    _get_bonusObject();
    var _store_data = function(input, key) {
      bonusObject[key] = input.checked;
    };
    var _render_check = function(key) {
      var checkBlock = document.createElement("div");
      checkBlock.setAttribute("class", "m-check-block");
      var checkBlockCheck = document.createElement("input");
      checkBlockCheck.setAttribute("class", "m-check-block-check");
      checkBlockCheck.setAttribute("type", "checkbox");
      checkBlockCheck.setAttribute("id", key);
      checkBlockCheck.checked = bonusObject[key];
      var checkBlockCheckIcon = document.createElement("span");
      checkBlockCheckIcon.setAttribute("class", "m-check-block-check-icon");
      checkBlock.appendChild(checkBlockCheck);
      checkBlock.appendChild(checkBlockCheckIcon);
      checkBlockCheck.addEventListener("change", function() {
        _store_data(this, key);
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
      editBoxContent.setAttribute("class", "m-edit-box-content m-edit-box-content-margin-large");
      var editBoxGroup = document.createElement("div");
      editBoxGroup.setAttribute("class", "m-edit-box-item-max m-edit-box-group");
      for (var i = 0; i < arguments.length; i++) {
        editBoxGroup.appendChild(arguments[i]);
      };
      editBoxContent.appendChild(editBoxGroup);
      editBoxBody.appendChild(editBoxContent);
      editBox.appendChild(editBoxBody);
      return editBox;
    };
    var _render_totalBlockBonusesModal = function() {
      var totalBlockControls = document.createElement("div");
      if (bonusObject) {
        // order the bonuses for rendering in modal
        var orderedBonuses = [];
        if ("str_bonus" in bonusObject) {
          orderedBonuses.push({
            "str_bonus": bonusObject["str_bonus"]
          })
        };
        if ("dex_bonus" in bonusObject) {
          orderedBonuses.push({
            "dex_bonus": bonusObject["dex_bonus"]
          })
        };
        if ("con_bonus" in bonusObject) {
          orderedBonuses.push({
            "con_bonus": bonusObject["con_bonus"]
          })
        };
        if ("int_bonus" in bonusObject) {
          orderedBonuses.push({
            "int_bonus": bonusObject["int_bonus"]
          })
        };
        if ("wis_bonus" in bonusObject) {
          orderedBonuses.push({
            "wis_bonus": bonusObject["wis_bonus"]
          })
        };
        if ("cha_bonus" in bonusObject) {
          orderedBonuses.push({
            "cha_bonus": bonusObject["cha_bonus"]
          })
        };
        if ("bab" in bonusObject) {
          orderedBonuses.push({
            "bab": bonusObject["bab"]
          })
        };
        if ("level" in bonusObject) {
          orderedBonuses.push({
            "level": bonusObject["level"]
          })
        };
        if ("half_level" in bonusObject) {
          orderedBonuses.push({
            "half_level": bonusObject["half_level"]
          })
        };
        if ("class_skill" in bonusObject) {
          orderedBonuses.push({
            "class_skill": bonusObject["class_skill"]
          })
        };
        if ("max_dex" in bonusObject) {
          orderedBonuses.push({
            "max_dex": bonusObject["max_dex"]
          })
        };
        if ("check_penalty" in bonusObject) {
          orderedBonuses.push({
            "check_penalty": bonusObject["check_penalty"]
          })
        };
        if ("plus_ten" in bonusObject) {
          orderedBonuses.push({
            "plus_ten": bonusObject["plus_ten"]
          })
        };
        if ("ac_armor" in bonusObject) {
          orderedBonuses.push({
            "ac_armor": bonusObject["ac_armor"]
          })
        };
        if ("ac_shield" in bonusObject) {
          orderedBonuses.push({
            "ac_shield": bonusObject["ac_shield"]
          })
        };
        if ("ac_deflect" in bonusObject) {
          orderedBonuses.push({
            "ac_deflect": bonusObject["ac_deflect"]
          })
        };
        if ("ac_dodge" in bonusObject) {
          orderedBonuses.push({
            "ac_dodge": bonusObject["ac_dodge"]
          })
        };
        if ("ac_natural" in bonusObject) {
          orderedBonuses.push({
            "ac_natural": bonusObject["ac_natural"]
          })
        };
        if ("size" in bonusObject) {
          orderedBonuses.push({
            "size": bonusObject["size"]
          })
        };
        if ("special_size" in bonusObject) {
          orderedBonuses.push({
            "special_size": bonusObject["special_size"]
          })
        };
        if ("size_modifier_fly" in bonusObject) {
          orderedBonuses.push({
            "size_modifier_fly": bonusObject["size_modifier_fly"]
          })
        };
        if ("size_modifier_stealth" in bonusObject) {
          orderedBonuses.push({
            "size_modifier_stealth": bonusObject["size_modifier_stealth"]
          })
        };
        for (var i = 0; i < orderedBonuses.length; i++) {
          for (var key in orderedBonuses[i]) {
            var title = _bonusTextLable(key);
            var check = _render_check(key);
            var label = _render_checkLabel(title, key);
            var editBoxItem1 = _render_editBoxItem("large", label);
            var editBoxItem2 = _render_editBoxItem("check", check);
            var editBox = _render_editBox(editBoxItem1, editBoxItem2);
            totalBlockControls.appendChild(editBox);
          };
        };
      };
      return totalBlockControls;
    };
    var modalContent = _render_totalBlockBonusesModal();
    var modalAction = function() {
      sheet.storeCharacters();
      render();
      display.clear();
      display.render();
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
    render: render
  };

})();
