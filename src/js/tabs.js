var tabs = (function() {

  function bind() {
    var all_tabGroups = helper.eA(".js-tab-group");
    for (var i = 0; i < all_tabGroups.length; i++) {
      var all_tabItem = all_tabGroups[i].querySelectorAll(".js-tab-item");
      for (var j = 0; j < all_tabItem.length; j++) {
        all_tabItem[j].addEventListener("click", function() {
          _switchTab(this);
        }, false);
      };
    };
  };

  function _scrollTabRow(arrow) {
    var direction;
    var tabGroups = helper.getClosest(arrow, ".js-tab-group");
    var tabRow = tabGroups.querySelector(".js-tab-row");
    if (arrow.classList.contains("js-tab-left")) {
      direction = -100;
    } else if (arrow.classList.contains("js-tab-right")) {
      direction = 100;
    };
    tabRow.scrollLeft = tabRow.scrollLeft + direction;
  };

  function render() {
    var all_tabGroups = helper.eA(".js-tab-group");
    for (var i = 0; i < all_tabGroups.length; i++) {
      var tabRow = all_tabGroups[i].querySelector(".js-tab-row");
      // console.log(tabRow.scrollWidth > tabRow.clientWidth);
      if (tabRow.scrollWidth > tabRow.clientWidth) {
        var tabLeft = document.createElement("button");
        tabLeft.setAttribute("class", "m-tab-arrow button button-tertiary button-icon js-tab-left");
        var tabLeftIcon = document.createElement("span");
        tabLeftIcon.setAttribute("class", "icon-chevron-left");
        var tabRight = document.createElement("button");
        tabRight.setAttribute("class", "m-tab-arrow button button-tertiary button-icon js-tab-right");
        var tabRightIcon = document.createElement("span");
        tabRightIcon.setAttribute("class", "icon-chevron-right");
        tabLeft.appendChild(tabLeftIcon);
        tabRight.appendChild(tabRightIcon);

        tabLeft.addEventListener("click", function() {
          _scrollTabRow(this);
        }, false);
        tabRight.addEventListener("click", function() {
          _scrollTabRow(this);
        }, false);

        all_tabGroups[i].insertBefore(tabLeft, all_tabGroups[i].firstChild);
        all_tabGroups[i].insertBefore(tabRight, all_tabGroups[i].lastChild);
      };
    };
  };

  function _switchTab(tab) {
    var tabTarget = helper.e("." + tab.dataset.tabTarget);
    var tabGroup = helper.getClosest(tab, ".js-tab-group");
    var all_tabItem = tabGroup.querySelectorAll(".js-tab-item");
    for (var i = 0; i < all_tabItem.length; i++) {
      helper.removeClass(all_tabItem[i], "is-active");
      helper.addClass(helper.e("." + all_tabItem[i].dataset.tabTarget), "is-hidden");
    };
    helper.addClass(tab, "is-active");
    helper.removeClass(tabTarget, "is-hidden");
  };

  // exposed methods
  return {
    bind: bind,
    render: render
  };

})();
