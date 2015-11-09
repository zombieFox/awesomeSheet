function awesomesheet() {

  var statistics = e("#statistics");
  var str_scrore = e(".str .scrore");
  var str_modifier = e(".str .modifier");

  function calculateModifer(element) {
    var modifier = Math.floor((element.value - 10) / 2);
    return modifier;
  };

  function changeMod(element, field) {
    var stat = checkValue(element);
    var modifier = calculateModifer(element);
    field.value = modifier;
  };

  function checkValue(element) {
    var value = parseInt(element.value, 10) || 0;
    return value;
  };

  // add listeners to saved formula buttons and inputs
  function addListenerTo_stats() {
    var stats = eA(".stats");
    var stats_scrore = eA(".stats .scrore");
    var stats_modifier = eA(".stats .modifier");
    var stats_tempScrore = eA(".stats .temp-scrore");
    var stats_tempModifier = eA(".stats .temp-modifier");

    for (var i = 0; i < stats.length; i++) {
      stats_scrore[i].addEventListener("input", function() {
        var parent = getClosest(this, ".stats");
        var modifier = parent.children[2];
        changeMod(this, modifier);
      }, false);
    };

    for (var i = 0; i < stats.length; i++) {
      stats_tempScrore[i].addEventListener("input", function() {
        var parent = getClosest(this, ".stats");
        var modifier = parent.children[4];
        changeMod(this, modifier);
      }, false);
    };

  };

  addListenerTo_stats();

  // get element by class or id
  function e(selector) {
    return document.querySelector(selector);
  };

  // get all elements by class or id
  function eA(selector) {
    return document.querySelectorAll(selector);
  };

  // toggle class
  function toggleClass(element, theClassName) {
    element.classList.toggle(theClassName);
  };

  // add class
  function addClass(element, theClassName) {
    element.classList.add(theClassName);
  };

  // remove class
  function removeClass(element, theClassName) {
    element.classList.remove(theClassName);
  };

  // get parent element
  var getClosest = function(element, selector) {
    var firstChar = selector.charAt(0);
    // Get closest match
    for (; element && element !== document; element = element.parentNode) {
      // If selector is a class
      if (firstChar === '.') {
        if (element.classList.contains(selector.substr(1))) {
          return element;
        };
      };
      // If selector is an ID
      if (firstChar === '#') {
        if (element.id === selector.substr(1)) {
          return element;
        };
      };
      // If selector is a data attribute
      if (firstChar === '[') {
        if (element.hasAttribute(selector.substr(1, selector.length - 2))) {
          return element;
        };
      };
      // If selector is a tag
      if (element.tagName.toLowerCase() === selector) {
        return element;
      };
    };
    return false;
  };

};

awesomesheet();
smoothScroll.init();