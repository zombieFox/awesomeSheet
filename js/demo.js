var demo = (function() {

  var _demoState = (function() {
    var demoState = false;
    var get = function(state) {
      return demoState;
    };
    var set = function(state) {
      demoState = state;
    };
    // exposed methods
    return {
      set: set,
      get: get
    };
  })();

  function _createDemoNotice() {
    var section = document.createElement("section");
    section.setAttribute("class", "l-section m-demo js-demo");
    if (display.state.get({
        all: true
      })) {
      helper.addClass(section, "is-display-mode");
    };
    var card = document.createElement("div");
    card.setAttribute("class", "m-card");
    var cardBody = document.createElement("div");
    cardBody.setAttribute("class", "m-card-body");
    var demo = document.createElement("div");
    var heading = document.createElement("h1");
    heading.setAttribute("class", "m-demo-heading");
    heading.textContent = "Demo character";
    var description = document.createElement("p");
    description.setAttribute("class", "m-demo-description");
    description.innerHTML = "This <strong>Demo Character</strong> is for you to explore the webapp. To get started with your own, use the <strong>Character Select</strong> menu or:";
    var addButton = document.createElement("button");
    addButton.setAttribute("class", "m-demo-add-new-character button");
    addButton.textContent = "Add New Character";
    addButton.addEventListener("click", function() {
      sheet.add();
    }, false);
    var subDescription = document.createElement("p");
    subDescription.setAttribute("class", "m-demo-sub-description u-small-text");
    subDescription.textContent = "It is safe to remove this Demo Character.";
    demo.appendChild(heading);
    demo.appendChild(description);
    demo.appendChild(addButton);
    demo.appendChild(subDescription);
    cardBody.appendChild(demo);
    card.appendChild(cardBody);
    section.appendChild(card);
    return section;
  };

  function render() {
    var sectionWrapper = helper.e(".js-section-wrapper");
    var demoSection = helper.e(".js-demo");
    var demo = helper.getObject({
      object: sheet.get(),
      path: "awesomeSheet.demo"
    });
    if (demo) {
      if (!_demoState.get()) {
        sectionWrapper.insertBefore(_createDemoNotice(), sectionWrapper.firstChild);
        _demoState.set(true);
      };
    } else {
      if (_demoState.get()) {
        demoSection.remove();
        _demoState.set(false);
      };
    };
  };

  // exposed methods
  return {
    render: render
  };

})();
