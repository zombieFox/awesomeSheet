var display = (function() {

  function update() {
  };

  function destroy() {
  };

  function render() {

    var all_displayItem = helper.eA(".js-display-item");
    for (var i = 0; i < all_displayItem.length; i++) {
      var path = all_displayItem[i].dataset.path;
      var target = all_displayItem[i].querySelector(".js-display-target");
      if (path) {
        var content = helper.getObject(sheet.getCharacter(), path);
        if (typeof content != "undefined" && content != "") {
          target.textContent = content;
          helper.removeClass(all_displayItem[i], "is-hidden");
        } else {
          target.textContent = "";
          helper.addClass(all_displayItem[i], "is-hidden");
        };
      };
    };

    var all_displayInnerHtml = helper.eA(".js-display-innter-html");
    for (var i = 0; i < all_displayInnerHtml.length; i++) {
      var path = all_displayInnerHtml[i].dataset.path;
      var target = all_displayInnerHtml[i].querySelector(".js-display-target");
      if (path) {
        var content = helper.getObject(sheet.getCharacter(), path);
        if (typeof content != "undefined" && content != "") {
          target.innerHTML = content;
          helper.removeClass(all_displayInnerHtml[i], "is-hidden");
        } else {
          target.innerHTML = "";
          helper.addClass(all_displayInnerHtml[i], "is-hidden");
        };
      };
    };

    var all_displayTotal = helper.eA(".js-display-total");
    for (var i = 0; i < all_displayTotal.length; i++) {
      var source = all_displayTotal[i].dataset.source;
      var target = all_displayTotal[i].querySelector(".js-display-target");
      if (source) {
        var content = helper.e("." + source).innerHTML;
        if (typeof content != "undefined" && content != "") {
          target.textContent = content;
          helper.removeClass(all_displayTotal[i], "is-hidden");
        } else {
          target.textContent = "";
          helper.addClass(all_displayTotal[i], "is-hidden");
        };
      };
    };

  };

  // exposed methods
  return {
    render: render,
    update: update,
    destroy: destroy
  };

})();
