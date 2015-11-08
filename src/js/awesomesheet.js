function awesomesheet() {

  var statistics = e("#statistics");
  var str_scrore = e(".str .scrore");
  var str_modifier = e(".str .modifier");

  function calculateModifer(stat) {
    return Math.floor((stat.value - 10) / 2);
  };

  str_scrore.addEventListener("input", function() {
    str_modifier.value = calculateModifer(str_scrore);
  }, false);

  str_scrore.addEventListener("click", function() {
    str_modifier.value = calculateModifer(str_scrore);
  }, false);

  str_modifier.addEventListener("input", function() {
    str_modifier.value = calculateModifer(str_scrore);
  }, false);

  str_modifier.addEventListener("click", function() {
    str_modifier.value = calculateModifer(str_scrore);
  }, false);

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
