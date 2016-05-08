var display = (function() {

  function update() {};

  function destroy() {};

  function render() {

    var all_displayItems = helper.eA(".js-display-items");
    for (var i = 0; i < all_displayItems.length; i++) {
      var itemsToDisplay = all_displayItems[i].dataset.display.split(',');
      for (var j = 0; j < itemsToDisplay.length; j++) {
        var path = itemsToDisplay[j];
        var data = helper.getObject(sheet.getCharacter(), path);

        var makeDisplayItem = function(addressToCompare, beforeString, afterString) {
          if (typeof data != "undefined" && data != "" && itemsToDisplay[j] == addressToCompare) {
            return data = beforeString + data + afterString;
          } else {
            return data;
          };
        };

        makeDisplayItem("basics.xp", "", " xp");
        makeDisplayItem("basics.age", "", " years old");
        makeDisplayItem("basics.hero_points", "", " hero points");
        makeDisplayItem("basics.luck_points", "", " luck points");

        makeDisplayItem("statistics.stats.str.score", "<strong>Str</strong> ", "");
        makeDisplayItem("statistics.stats.str.temp", "<strong>Str temp</strong> ", "");
        makeDisplayItem("statistics.stats.dex.score", "<strong>Dex</strong> ", "");
        makeDisplayItem("statistics.stats.dex.temp", "<strong>Dex temp</strong> ", "");
        makeDisplayItem("statistics.stats.con.score", "<strong>Con</strong> ", "");
        makeDisplayItem("statistics.stats.con.temp", "<strong>Con temp</strong> ", "");
        makeDisplayItem("statistics.stats.int.score", "<strong>Int</strong> ", "");
        makeDisplayItem("statistics.stats.int.temp", "<strong>Int temp</strong> ", "");
        makeDisplayItem("statistics.stats.wis.score", "<strong>Wis</strong> ", "");
        makeDisplayItem("statistics.stats.wis.temp", "<strong>Wis temp</strong> ", "");
        makeDisplayItem("statistics.stats.cha.score", "<strong>Cha</strong> ", "");
        makeDisplayItem("statistics.stats.cha.temp", "<strong>Cha temp</strong> ", "");
        makeDisplayItem("statistics.feats", "<strong>Feats</strong> ", "");
        makeDisplayItem("statistics.traits", "<strong>Traits</strong> ", "");
        makeDisplayItem("statistics.special_abilities", "<strong>Special Abilities</strong> ", "");
        makeDisplayItem("statistics.languages", "<strong>Languages</strong> ", "");

        if (typeof data != "undefined" && data != "") {
          var text = document.createElement("span");
          text.className = "m-display-item";
          text.innerHTML = (data);
          all_displayItems[i].appendChild(text);
        };
      };
    };

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

    // var all_displayTotal = helper.eA(".js-display-total");
    // for (var i = 0; i < all_displayTotal.length; i++) {
    //   var source = all_displayTotal[i].dataset.source;
    //   var target = all_displayTotal[i].querySelector(".js-display-target");
    //   if (source) {
    //     var content = helper.e("." + source).innerHTML;
    //     if (typeof content != "undefined" && content != "") {
    //       target.textContent = content;
    //       helper.removeClass(all_displayTotal[i], "is-hidden");
    //     } else {
    //       target.textContent = "";
    //       helper.addClass(all_displayTotal[i], "is-hidden");
    //     };
    //   };
    // };

  };

  // exposed methods
  return {
    render: render,
    update: update,
    destroy: destroy
  };

})();
