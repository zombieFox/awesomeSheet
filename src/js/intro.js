var intro = (function() {

  var previousIntro = null;

  function bind() {
    window.addEventListener("keydown", function(event) {
      if (event.keyCode == 27) {
        destroy();
      };
    }, false);
  };

  function destroy() {
    var intro = helper.e(".js-intro");
    var introWrapper = helper.e(".js-intro-wrapper");
    if (intro) {
      getComputedStyle(intro).opacity;
      helper.removeClass(introWrapper, "is-unrotate-in");
      helper.addClass(introWrapper, "is-dropped-out");
      helper.removeClass(intro, "is-opaque");
      helper.addClass(intro, "is-transparent");
    };
  };

  function _render_introMessage(heading, introBodyContent, actionText, action) {

    prompt.destroy();
    modal.destroy();
    var body = helper.e("body");

    var introWrapper = document.createElement("div");
    introWrapper.setAttribute("class", "m-intro-wrapper js-intro-wrapper is-unrotate-out");

    var intro = document.createElement("div");
    intro.setAttribute("class", "m-intro js-intro");
    intro.destroy = function() {
      helper.removeClass(introWrapper, "is-unrotate-in");
      helper.addClass(introWrapper, "is-dropped-out");
      helper.removeClass(intro, "is-opaque");
      helper.addClass(intro, "is-transparent");
    };

    var introHeading = document.createElement("h1");
    introHeading.setAttribute("tabindex", "3");
    introHeading.setAttribute("class", "m-intro-heading");
    introHeading.textContent = heading;

    var introBody = document.createElement("div");
    introBody.setAttribute("class", "m-intro-body u-clearfix");

    var introControls = document.createElement("div");
    introControls.setAttribute("class", "m-intro-controls");

    var actionButton = document.createElement("a");
    actionButton.setAttribute("href", "javascript:void(0)");
    actionButton.setAttribute("tabindex", "3");
    actionButton.setAttribute("class", "button button-secondary button-block button-large");
    actionButton.textContent = actionText || "Ok";

    introControls.appendChild(actionButton);

    if (heading != false) {
      introBody.appendChild(introHeading);
    };

    if (introBodyContent) {
      if (typeof introBodyContent == "string") {
        var container = document.createElement("div");
        container.setAttribute("class", "container");
        var para = document.createElement("p");
        para.textContent = introBodyContent;
        container.appendChild(para);
        introBody.appendChild(container);
      } else {
        introBody.appendChild(introBodyContent);
      };
    };

    introWrapper.appendChild(introBody);
    introWrapper.appendChild(introControls);
    intro.appendChild(introWrapper);

    intro.addEventListener("transitionend", function(event, elapsed) {
      if (event.propertyName === "opacity" && getComputedStyle(this).opacity == 0) {
        this.parentElement.removeChild(this);
      };
    }.bind(intro), false);

    actionButton.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      destroy();
    }, false);
    if (action) {
      actionButton.addEventListener("click", function(event) {
        event.stopPropagation();
        event.preventDefault();
        action();
      }, false);
    };

    if (previousIntro) {
      previousIntro.destroy();
    };

    previousIntro = intro;

    body.appendChild(intro);

    getComputedStyle(intro).opacity;
    helper.removeClass(intro, "is-transparent");
    helper.addClass(intro, "is-opaque");
    helper.removeClass(introWrapper, "is-unrotate-out");
    helper.addClass(introWrapper, "is-unrotate-in");
    introHeading.focus(this);

  };

  function _create_fullChangeLogModal() {
    var container = document.createElement("div");
    container.setAttribute("class", "container");
    var row = document.createElement("div");
    row.setAttribute("class", "row");
    var col = document.createElement("div");
    col.setAttribute("class", "col-xs-12");
    var version = document.createElement("p");
    var versionNumber = document.createElement("strong");
    versionNumber.textContent = update.message.version;
    var list = document.createElement("ul");
    for (var i = 0; i < update.message.list.length; i++) {
      var listItem = document.createElement("li");
      listItem.textContent = update.message.list[i];
      list.appendChild(listItem);
    };
    version.appendChild(versionNumber);
    col.appendChild(version);
    col.appendChild(list);
    for (var i = 0; i < update.history.length; i++) {
      var version = document.createElement("p");
      var versionNumber = document.createElement("strong");
      versionNumber.textContent = update.history[i].version;
      var list = document.createElement("ul");
      for (var j = 0; j < update.history[i].list.length; j++) {
        var listItem = document.createElement("li");
        listItem.textContent = update.history[i].list[j];
        list.appendChild(listItem);
      };
      version.appendChild(versionNumber);
      col.appendChild(version);
      col.appendChild(list);
    };
    row.appendChild(col);
    container.appendChild(row);
    return container;
  };

  function _create_fullChangeLog() {
    modal.render("Complete change log", _create_fullChangeLogModal(), "Close");
  };

  function render() {
    if (helper.read("intro") != update.message.version) {
      var container = document.createElement("div");
      container.setAttribute("class", "container");
      var row = document.createElement("div");
      row.setAttribute("class", "row");
      var col = document.createElement("div");
      col.setAttribute("class", "col-xs-12");
      var list = document.createElement("ul");
      for (var i = 0; i < update.message.list.length; i++) {
        var listItem = document.createElement("li");
        listItem.textContent = update.message.list[i];
        list.appendChild(listItem);
      };
      var seeAll = document.createElement("button");
      seeAll.setAttribute("class", "button button-medium button-tertiary-link u-no-margin");
      seeAll.textContent = "See full change log"
      seeAll.addEventListener("click", function(event) {
        _create_fullChangeLog();
        destroy();
      }, false);
      col.appendChild(list);
      col.appendChild(seeAll);
      row.appendChild(col);
      container.appendChild(row);
      var heading = "Change log - " + update.message.version;
      _render_introMessage(heading, container, "Don't show again", _store_confirmation);
    };
  };

  function _store_confirmation() {
    helper.remove("intro");
    helper.store("intro", update.message.version);
  };

  // exposed methods
  return {
    changeLog: _create_fullChangeLog,
    render: render,
    bind: bind
  };

})();
