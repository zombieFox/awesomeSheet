var tabs = (function() {

  function bind() {
    _bind_tabGroup();
    _bind_tabArrow();
  };

  function _bind_tabGroup() {
    var all_tabGroup = helper.eA(".js-tab-group");
    for (var i = 0; i < all_tabGroup.length; i++) {
      var all_tabItem = all_tabGroup[i].querySelectorAll(".js-tab-item");
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
    var tabIndicator = tabRow.querySelector(".m-tab-indicator");
    var tabRowArea = tabRow.getBoundingClientRect();
    var tabArea = tab.getBoundingClientRect();
    var left = Math.ceil(tab.offsetLeft - (tabRowArea.width / 2) + (tabArea.width / 2), 10);
    tabRow.scroll({
      top: 0,
      left: left,
      behavior: 'smooth'
    });
    tabIndicator.setAttribute("style", "width:" + (tabArea.width - 10) + "px;left:" + (tab.offsetLeft + 5) + "px;");
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

  function render() {
    _render_all_rabRow();
  };

  function _render_all_rabRow() {
    var all_tabRow = helper.eA(".js-tab-row");
    for (var i = 0; i < all_tabRow.length; i++) {
      _render_rabRow(all_tabRow[i]);
    };
  };

  function _render_rabRow(rabRow) {
    var all_tabItem = rabRow.querySelectorAll(".js-tab-item");
    var tabIndicator = document.createElement("span");
    tabIndicator.setAttribute("class", "m-tab-indicator");
    tabIndicator.setAttribute("style", "width:" + (all_tabItem[0].getBoundingClientRect().width - 10) + "px;left:" + (all_tabItem[0].offsetLeft + 5) + "px;");
    rabRow.appendChild(tabIndicator);
  };

  // exposed methods
  return {
    bind: bind,
    render: render
  };

})();