var tabs = (function() {

  function bind() {
    _bind_tabGroup();
    _bind_tabArrow();
  };

  function _bind_tabGroup() {
    var all_tabGroups = helper.eA(".js-tab-group");
    for (var i = 0; i < all_tabGroups.length; i++) {
      var all_tabItem = all_tabGroups[i].querySelectorAll(".js-tab-item");
      for (var j = 0; j < all_tabItem.length; j++) {
        all_tabItem[j].addEventListener("click", function() {
          _switchTabPanel(this);
        }, false);
      };
    };
  };

  function _bind_tabArrow() {
    var all_tabLeft = helper.eA(".js-tab-left");
    var all_tabRight = helper.eA(".js-tab-right");
    for (var i = 0; i < all_tabLeft.length; i++) {
      all_tabLeft[i].addEventListener("click", function() {
        _tabLeftRight(this);
      }, false);
    };
    for (var i = 0; i < all_tabRight.length; i++) {
      all_tabRight[i].addEventListener("click", function() {
        _tabLeftRight(this);
      }, false);
    };
  };

  function _tabLeftRight(arrowButton) {
    var direction;
    var tabGroup = helper.getClosest(arrowButton, ".js-tab-group");
    var tabRow = tabGroup.querySelector(".js-tab-row");
    if (arrowButton.classList.contains("js-tab-left")) {
      direction = "left";
    } else if (arrowButton.classList.contains("js-tab-right")) {
      direction = "right";
    };
    var all_tabItem = tabGroup.querySelectorAll(".js-tab-item");
    var currentIndex;
    var newIndex;
    for (var i = 0; i < all_tabItem.length; i++) {
      if (all_tabItem[i].dataset.tabActive == "true") {
        currentIndex = i;
      };
      helper.removeClass(all_tabItem[i], "is-active");
      all_tabItem[i].dataset.tabActive = false;
    };
    if (direction == "right") {
      newIndex = currentIndex + 1;
      if (newIndex > all_tabItem.length - 1) {
        newIndex = 0;
      };
    } else if (direction == "left") {
      newIndex = currentIndex - 1;
      if (newIndex < 0) {
        newIndex = all_tabItem.length - 1;
      };
    };
    helper.addClass(all_tabItem[newIndex], "is-active");
    all_tabItem[newIndex].dataset.tabActive = true;
    _scrollTabInToView(tabRow, all_tabItem[newIndex]);
    _switchTabPanel(all_tabItem[newIndex]);
  };

  function _scrollTabInToView(tabRow, tab) {
    var tabRowArea = tabRow.getBoundingClientRect();
    var tabArea = tab.getBoundingClientRect();
    if (tabArea.left < tabRowArea.left) {
      var left = tab.offsetLeft;
      tabRow.scrollLeft = left;
    } else if (tabArea.right > tabRowArea.right) {
      var right = Math.ceil(tab.offsetLeft - tabRowArea.width + tabArea.width, 10);
      tabRow.scrollLeft = right;
    };
  };

  function _switchTabPanel(tab) {
    var all_targetToReveal = tab.dataset.tabTarget.split(",");
    var tabGroup = helper.getClosest(tab, ".js-tab-group");
    var tabRow = tabGroup.querySelector(".js-tab-row");
    var all_tabItem = tabGroup.querySelectorAll(".js-tab-item");
    for (var i = 0; i < all_tabItem.length; i++) {
      var all_targetToHide = all_tabItem[i].dataset.tabTarget.split(",");
      for (var j = 0; j < all_targetToHide.length; j++) {
        var target = helper.e("." + all_targetToHide[j]);
        helper.addClass(target, "is-hidden");
      };
      helper.removeClass(all_tabItem[i], "is-active");
      all_tabItem[i].dataset.tabActive = false;
    };
    helper.addClass(tab, "is-active");
    for (var i = 0; i < all_targetToReveal.length; i++) {
      var target = helper.e("." + all_targetToReveal[i]);
      helper.removeClass(target, "is-hidden");
    };
    tab.dataset.tabActive = true;
    _scrollTabInToView(tabRow, tab);
  };

  // function render() {
  //   var all_tabGroup = helper.eA(".js-tab-group");
  //   for (var i = 0; i < all_tabGroup.length; i++) {
  //     var tabRow = all_tabGroup[i].querySelector(".js-tab-row");
  //     if (tabRow.scrollWidth > tabRow.clientWidth) {
  //     var tabLeft = document.createElement("button");
  //     tabLeft.setAttribute("class", "m-tab-arrow button button-tertiary button-icon js-tab-left");
  //     var tabLeftIcon = document.createElement("span");
  //     tabLeftIcon.setAttribute("class", "icon-chevron-left");
  //     tabLeft.appendChild(tabLeftIcon);
  //     tabLeft.addEventListener("click", function() {
  //       _tabLeftRight(this);
  //     }, false);
  //
  //     var tabRight = document.createElement("button");
  //     tabRight.setAttribute("class", "m-tab-arrow button button-tertiary button-icon js-tab-right");
  //     var tabRightIcon = document.createElement("span");
  //     tabRightIcon.setAttribute("class", "icon-chevron-right");
  //     tabRight.appendChild(tabRightIcon);
  //     tabRight.addEventListener("click", function() {
  //       _tabLeftRight(this);
  //     }, false);
  //
  //     all_tabGroup[i].insertBefore(tabLeft, all_tabGroup[i].firstChild);
  //     all_tabGroup[i].insertBefore(tabRight, all_tabGroup[i].lastChild);
  //     };
  //   };
  // };

  // exposed methods
  return {
    bind: bind
  };

})();
