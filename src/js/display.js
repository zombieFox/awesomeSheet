var display = (function() {

  function update(element) {
    // var display = helper.e(".display-" + element.id);
    // var content = element.textContent || element.value;
    // if (typeof content == "undefined" || content == "") {
    //   content = " - "
    // };
    // if (display) {
    //   display.textContent = content;
    // };
  };

  function destroy() {
    // var all_displayItem = helper.eA(".display-item");
    // for (var i = 0; i < all_displayItem.length; i++) {
    //   all_displayItem[i].textContent = "";
    // };
  };

  // function render() {
  //   var all_displayItem = helper.eA(".display-item");
  //   for (var i = 0; i < all_displayItem.length; i++) {
  //     if (typeof content == "undefined" || content == "") {
  //       console.log("found undefined");
  //     };
  //     var source = all_displayItem[i].dataset.source;
  //     var content = helper.e("#" + source).textContent || helper.e("#" + source).value;
  //     if (typeof content == "undefined" || content == "") {
  //       content = "-"
  //     };
  //     all_displayItem[i].textContent = content;
  //   };
  // };

  function render() {
    var all_displayBlock = helper.eA(".js-display-block");

    for (var i = 0; i < all_displayBlock.length; i++) {

      var all_displayItem = all_displayBlock[i].querySelectorAll(".js-display-item");

      for (var j = 0; j < all_displayItem.length; j++) {
        var path = all_displayItem[j].dataset.path;
        var target = all_displayItem[j].querySelector(".js-display-target");

        if (path) {
          var content = helper.getObject(sheet.getCharacter(), path);
          if (typeof content != "undefined" && content != "") {
            target.textContent = content;
            helper.removeClass(all_displayItem[j], "is-hidden");
          } else {
            target.textContent = "";
            helper.addClass(all_displayItem[j], "is-hidden");
          };
        };

      };


    };
  };

  // if (typeof content == "undefined" || content == "") {
  //   console.log("found undefined");
  // };
  // var source = all_displayBlock[i].dataset.source;
  // var content = helper.e("#" + source).textContent || helper.e("#" + source).value;
  // if (typeof content == "undefined" || content == "") {
  //   content = "-"
  // };
  // all_displayBlock[i].textContent = content;

  // exposed methods
  return {
    render: render,
    update: update,
    destroy: destroy
  };

})();
