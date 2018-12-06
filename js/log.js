var log = (function() {

  var previousLog = null;

  function destroy() {
    var all_log = helper.eA(".js-log");
    if (all_log[0]) {
      for (var i = 0; i < all_log.length; i++) {
        all_log[i].destroy();
      };
    };
  };

  function _render_logMessage(options) {
    var defaultOptions = {
      heading: false,
      content: "Body",
      actionText: "Close",
      action: null
    };
    if (options) {
      defaultOptions = helper.applyOptions(defaultOptions, options);
    };
    var _makeLog = function() {
      var body = helper.e("body");
      var logWrapper = document.createElement("div");
      logWrapper.setAttribute("class", "m-log-wrapper js-log-wrapper is-jumping-up");
      var log = document.createElement("div");
      log.setAttribute("class", "m-log js-log");
      log.destroy = function() {
        if (log.classList.contains("is-opaque") || logWrapper.classList.contains("is-sitting")) {
          helper.removeClass(log, "is-opaque");
          helper.addClass(log, "is-transparent");
          helper.removeClass(logWrapper, "is-sitting");
          helper.addClass(logWrapper, "is-droping-down");
        } else {
          log.remove();
        };
      };
      var logBody = document.createElement("div");
      logBody.setAttribute("class", "m-log-body u-clearfix");
      var logControls = document.createElement("div");
      logControls.setAttribute("class", "m-log-controls");
      var actionButton = document.createElement("a");
      actionButton.setAttribute("href", "javascript:void(0)");
      actionButton.setAttribute("tabindex", "1");
      actionButton.setAttribute("class", "button button-primary button-block button-medium");
      actionButton.textContent = defaultOptions.actionText;
      logControls.appendChild(actionButton);
      if (defaultOptions.heading != null) {
        var logHeading = document.createElement("h1");
        logHeading.setAttribute("tabindex", "1");
        logHeading.setAttribute("class", "m-log-heading");
        logHeading.textContent = defaultOptions.heading;
        logBody.appendChild(logHeading);
      };
      if (defaultOptions.content) {
        if (typeof defaultOptions.content == "string") {
          var container = document.createElement("div");
          container.setAttribute("class", "container");
          var para = document.createElement("p");
          para.textContent = defaultOptions.content;
          container.appendChild(para);
          logBody.appendChild(container);
        } else {
          logBody.appendChild(defaultOptions.content);
        };
      };
      logWrapper.appendChild(logBody);
      logWrapper.appendChild(logControls);
      log.appendChild(logWrapper);
      log.addEventListener("transitionend", function(event, elapsed) {
        if (event.propertyName === "opacity" && getComputedStyle(this).opacity == 0) {
          this.parentElement.removeChild(this);
        };
        if (event.propertyName === "opacity" && getComputedStyle(this).opacity == 1) {
          helper.addClass(this, "is-transition-end");
        };
      }.bind(log), false);
      actionButton.addEventListener("click", function(event) {
        event.stopPropagation();
        event.preventDefault();
        this.destroy();
        if (defaultOptions.action) {
          defaultOptions.action();
        };
      }.bind(log), false);
      previousLog = log;
      body.appendChild(log);
      getComputedStyle(log).opacity;
      helper.removeClass(log, "is-transparent");
      helper.addClass(log, "is-opaque");
      helper.removeClass(logWrapper, "is-jumping-up");
      helper.addClass(logWrapper, "is-sitting");
    };
    if (previousLog != null) {
      destroy();
    };
    _makeLog();
  };

  function _render_fullChangeLog() {
    var _modalContent = function() {
      var container = document.createElement("div");
      container.setAttribute("class", "container");
      for (var i = 0; i < update.history.length; i++) {
        var row = document.createElement("div");
        row.setAttribute("class", "row");
        var col2 = document.createElement("div");
        col2.setAttribute("class", "col-xs-2");
        row.setAttribute("class", "row");
        var col10 = document.createElement("div");
        col10.setAttribute("class", "col-xs-10");
        row.setAttribute("class", "row");
        var hr = document.createElement("hr");
        var version = document.createElement("p");
        var versionNumber = document.createElement("strong");
        versionNumber.textContent = update.history[i].version;
        var list = document.createElement("ul");
        list.setAttribute("class", "m-log-list");
        for (var j = 0; j < update.history[i].list.length; j++) {
          var asterisk = "*";
          var listItem = document.createElement("li");
          listItem.setAttribute("class", "m-log-list-item");
          if (update.history[i].list[j].indexOf(asterisk) != -1) {
            helper.addClass(listItem, "m-log-list-item-alert");
            var listItemIcon = document.createElement("span");
            listItemIcon.setAttribute("class", "m-log-list-item-alert-icon icon-error-outline");
            listItem.textContent = update.history[i].list[j].substr(1);
            if (update.history[i].link) {
              var link = document.createElement("a");
              link.textContent = update.history[i].link.text
              link.setAttribute("target", "_blank");
              link.href = update.history[i].link.url;
              listItem.appendChild(link);
            };
            listItem.appendChild(listItemIcon);
          } else {
            listItem.textContent = update.history[i].list[j];
          };
          list.appendChild(listItem);
        };
        version.appendChild(versionNumber);
        col2.appendChild(version);
        col10.appendChild(list);
        row.appendChild(col2);
        row.appendChild(col10);
        container.appendChild(hr);
        container.appendChild(row);
      };
      return container;
    };
    modal.render({
      heading: "Change Log",
      content: _modalContent(),
      actionText: "Close",
      size: "medium"
    });
    page.update();
  };

  function _render_changeLog() {
    var all_breakingChanges = [];
    var all_breakingChangesLink = [];
    var all_breakingChangesVersion = [];
    var changeVersion;
    var changesToDisplay = 1;
    var _modalContent = function() {
      var container = document.createElement("div");
      container.setAttribute("class", "container");
      var row = document.createElement("div");
      row.setAttribute("class", "row");
      var col = document.createElement("div");
      col.setAttribute("class", "col-xs-12");
      var list = document.createElement("ul");
      list.setAttribute("class", "m-log-list m-log-list-short");

      for (var i = 0; i < changesToDisplay; i++) {
        var listItem = document.createElement("li");
        listItem.setAttribute("class", "m-log-list-item");
        listItem.textContent = all_breakingChanges[i];

        if (all_breakingChangesLink[i]) {
          var link = document.createElement("a");
          link.textContent = all_breakingChangesLink[i].text
          link.setAttribute("target", "_blank");
          link.href = all_breakingChangesLink[i].url;
          listItem.appendChild(link);
        };

        list.appendChild(listItem);
      };

      // var seeAll = document.createElement("button");
      // seeAll.setAttribute("class", "button button-medium button-tertiary u-no-margin");
      // seeAll.textContent = "Change Log";
      // seeAll.addEventListener("click", function(event) {
      //   _render_fullChangeLog();
      //   destroy();
      // }, false);
      col.appendChild(list);
      // col.appendChild(seeAll);
      row.appendChild(col);
      container.appendChild(row);
      return container;
    };
    var _get_logData = function() {
      for (var i = 0; i < update.history.length; i++) {
        // console.log("----------------------------");
        // console.log(update.history[i]);
        for (var j = 0; j < update.history[i].list.length; j++) {
          // console.log(update.history[i].list[j]);
          var asterisk = "*";
          if (update.history[i].list[j].indexOf(asterisk) != -1) {
            // console.log(update.history[i].list[j]);
            if (update.history[i].link) {
              // console.log(update.history[i].link);
              all_breakingChangesLink.push(update.history[i].link);
            } else {
              all_breakingChangesLink.push(false);
            };
            all_breakingChanges.push(update.history[i].list[j].substr(1));
            all_breakingChangesVersion.push(update.history[i].version);
          };
        };
      };
      for (var i = 0; i < changesToDisplay; i++) {
        if (typeof changeVersion == "undefined") {
          changeVersion = all_breakingChangesVersion[i];
        } else {
          changeVersion = changeVersion + "/" + all_breakingChangesVersion[i];
        };
      };
      if (all_breakingChanges.length < changesToDisplay) {
        changesToDisplay = all_breakingChanges.length;
      };
    };
    var _render_log = function() {
      if (helper.read("latestVersionUpdate") != changeVersion) {
        var logAction = function() {
          _store(changeVersion);
        };
        _render_logMessage({
          heading: "Recent Changes",
          content: _modalContent(),
          actionText: "Don't show this again",
          action: logAction
        });
      };
    };
    _get_logData();
    _render_log();
  };

  function render() {
    if (!onboarding.state()) {
      _render_changeLog();
    };
  };

  function _store(changeVersion) {
    helper.remove("latestVersionUpdate");
    helper.store("latestVersionUpdate", changeVersion);
  };

  // exposed methods
  return {
    changeLog: _render_fullChangeLog,
    render: render,
    destroy: destroy
  };

})();
