var edit = (function() {

  function scroll() {
    // var body = helper.e("body");
    // var header = helper.e(".js-header");
    // var nav = helper.e(".js-nav");
    // var all_editControls = helper.eA(".js-edit-controls");
    // var offset;
    // var headerHeight;
    // if (body.dataset.headerPinned == "true") {
    //   headerHeight = 0;
    // } else {
    //   headerHeight = parseInt(getComputedStyle(header).height, 10);
    // };
    // // if nav is on the left after 900px wide viewport
    // if (document.documentElement.clientWidth >= 900) {
    //   offset = headerHeight;
    // } else {
    //   offset = parseInt(getComputedStyle(nav).height, 10) + headerHeight;
    // };
    //
    // for (var i = 0; i < all_editControls.length; i++) {
    //   var pinWatch = helper.e("." + all_editControls[i].dataset.pinWatch);
    //   var section = helper.getClosest(pinWatch, ".js-section");
    //   var fillWidth = parseInt(getComputedStyle(all_editControls[i]).width, 10);
    //   var fillHeight = parseInt(getComputedStyle(all_editControls[i]).height, 10) + parseInt(getComputedStyle(all_editControls[i]).marginTop, 10) + parseInt(getComputedStyle(all_editControls[i]).marginBottom, 10);
    //
    //   if (section.dataset.minimise == "false" || !section.dataset.minimise && section.dataset.displayMode == "false" || !section.dataset.displayMode) {
    //
    //     if ((pinWatch.getBoundingClientRect().top + fillHeight) <= (offset) && pinWatch.getBoundingClientRect().bottom >= (offset + fillHeight)) {
    //
    //       // console.log("top: " + pinWatch.getBoundingClientRect().top, "botton: " + pinWatch.getBoundingClientRect().bottom);
    //
    //       helper.addClass(pinWatch, "is-pinned");
    //       if (!pinWatch.hasAttribute("style")) {
    //         all_editControls[i].setAttribute("style", "width: " + fillWidth + "px");
    //         pinWatch.setAttribute("style", "padding-top: " + fillHeight + "px");
    //       };
    //
    //     } else {
    //
    //       helper.removeClass(pinWatch, "is-pinned");
    //       pinWatch.removeAttribute("style");
    //       all_editControls[i].removeAttribute("style");
    //
    //     };
    //
    //   } else if (section.dataset.minimise == "true" || section.dataset.minimise && section.dataset.displayMode == "true" || section.dataset.displayMode) {
    //     helper.removeClass(pinWatch, "is-pinned");
    //     pinWatch.removeAttribute("style");
    //     all_editControls[i].removeAttribute("style");
    //   };
    //
    // };
  };

  // exposed methods
  return {
    scroll: scroll
  };

})();
