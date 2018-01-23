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
    var all_tabArrow = helper.eA(".js-tab-arrow");
    for (var i = 0; i < all_tabArrow.length; i++) {
      all_tabArrow[i].addEventListener("click", function() {
        _tabArrow(this);
      }, false);
    };
  };

  function _tabArrow(button) {
    var options = helper.makeObject(button.dataset.tabArrowOptions);
    var tabGroup = helper.getClosest(button, ".js-tab-group");
    var tabRow = tabGroup.querySelector(".js-tab-row");
    var all_tabItem = tabGroup.querySelectorAll(".js-tab-item");
    var currentIndex;
    var newIndex;
    for (var i = 0; i < all_tabItem.length; i++) {
      if (all_tabItem[i].dataset.tabState == "true") {
        currentIndex = i;
      };
      helper.removeClass(all_tabItem[i], "is-active");
      all_tabItem[i].dataset.tabState = false;
    };
    if (options.action == "right") {
      newIndex = currentIndex + 1;
      if (newIndex > all_tabItem.length - 1) {
        newIndex = 0;
      };
    } else if (options.action == "left") {
      newIndex = currentIndex - 1;
      if (newIndex < 0) {
        newIndex = all_tabItem.length - 1;
      };
    };
    helper.addClass(all_tabItem[newIndex], "is-active");
    all_tabItem[newIndex].dataset.tabState = true;
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
    var options = helper.makeObject(tab.dataset.tabOptions);
    var all_targetToShow = options.target.split(",");
    var tabGroup = helper.getClosest(tab, ".js-tab-group");
    var tabRow = tabGroup.querySelector(".js-tab-row");
    var all_tabItem = tabGroup.querySelectorAll(".js-tab-item");
    var _hideAllTabPanel = function() {
      for (var i = 0; i < all_tabItem.length; i++) {
        all_tabItem[i].dataset.tabState = false;
        helper.removeClass(all_tabItem[i], "is-active");
        var tabItemOptions = helper.makeObject(all_tabItem[i].dataset.tabOptions);
        var all_targetToHide = tabItemOptions.target.split(",");
        for (var j = 0; j < all_targetToHide.length; j++) {
          helper.addClass(helper.e("." + all_targetToHide[j]), "is-hidden");
        };
      };
    };
    var _showPanel = function() {
      tab.dataset.tabState = true;
      helper.addClass(tab, "is-active");
      for (var i = 0; i < all_targetToShow.length; i++) {
        var target = helper.e("." + all_targetToShow[i]);
        helper.removeClass(target, "is-hidden");
      };
    };
    _hideAllTabPanel();
    _showPanel();
    _scrollTabInToView(tabRow, tab);
  };

  // exposed methods
  return {
    bind: bind
  };

})();
