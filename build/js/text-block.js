var textBlock = (function() {

  function clear() {
    var all_textBlock = helper.eA(".js-text-block");
    for (var i = 0; i < all_textBlock.length; i++) {
      all_textBlock[i].textContent = "";
    };
  };

  function _render_textBlock(textBlock) {
    var options = helper.makeObject(textBlock.dataset.textBlockOptions);
    var data;
    var _get_data = function() {
      if (options.path) {
        data = helper.getObject({
          object: sheet.get(),
          path: options.path
        });
      };
    };
    var _addPrefixSuffix = function() {
      if (options.type) {
        if (options.type == "currency") {
          if (data != "" && data != undefined) {
            data = parseFloat(data).toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            });
            if (data.indexOf(".00") !== -1) {
              data = data.substr(0, data.indexOf("."));
            };
            data = data + " GP";
          };
        } else if (options.type == "number") {
          if (data != "" && data != undefined) {
            data = parseFloat(data).toLocaleString(undefined, {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0
            });
          } else {
            data = 0;
          };
        } else if (options.type == "percentage") {
          if (data != "" && data != undefined) {
            data = parseFloat(data).toLocaleString(undefined, {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0
            }) + "%";
          } else {
            data = "0%";
          };
        } else if (options.type == "weight") {
          if (data != "" && data != undefined) {
            data = parseFloat(data).toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            });
            if (data.indexOf(".00") !== -1) {
              data = data.substr(0, data.indexOf("."));
            };
            data = data + " lbs";
          };
        } else if (options.type == "bonus") {
          if (data != "" && data > 0) {
            data = "+" + data;
          };
        };
      };
    };
    var _checkForNull = function() {
      if (options.check) {
        if (options.check == "null") {
          if (data == "" && data !== 0) {
            data = "None"
          };
        };
      };
    };
    var _render = function() {
      textBlock.textContent = data;
    };
    _get_data();
    _addPrefixSuffix();
    _checkForNull();
    _render();
  };

  function render(textBlock) {
    if (textBlock) {
      _render_textBlock(textBlock);
    } else {
      var all_textBlock = helper.eA(".js-text-block");
      for (var i = 0; i < all_textBlock.length; i++) {
        _render_textBlock(all_textBlock[i]);
      };
    };
  };

  // exposed methods
  return {
    render: render,
    clear: clear
  };

})();
