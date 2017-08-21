var helper = (function() {

  // methods on this object
  function e(selector) {
    return document.querySelector(selector);
  };

  function eA(selector) {
    return document.querySelectorAll(selector);
  };

  function toggleClass(element, theClassName) {
    element.classList.toggle(theClassName);
  };

  function addClass(element, theClassName) {
    element.classList.add(theClassName);
  };

  function removeClass(element, theClassName) {
    element.classList.remove(theClassName);
  };

  function delayFunction(functionToDelay, time) {
    window.setTimeout(functionToDelay, time);
  };

  function isJsonString(string) {
    try {
      JSON.parse(string);
    } catch (e) {
      return false;
    }
    return true;
  };

  function selectText(element) {
    var node = helper.e(element);
    if (document.selection) {
      var range = document.body.createTextRange();
      range.moveToElementText(node);
      range.select();
    } else if (window.getSelection) {
      var range = document.createRange();
      range.selectNodeContents(node);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
    }
  };

  function truncateString(string, length, dotDotDot) {
    if (dotDotDot) {
      dotDotDot = "...";
    } else {
      dotDotDot = "";
    };
    if (string.length > length) {
      var newString = string.substring(0, length) + dotDotDot;
      return newString;
    };
    return string;
  };

  function setDropdown(dropdown, value) {
    for (var i = 0; i < dropdown.options.length; i++) {
      if (dropdown.options[i].text == value) {
        dropdown.selectedIndex = i;
        dropdown.options[i].selected = true;
        // console.log(dropdown, value, dropdown.options, dropdown.selectedIndex);
        return;
      };
    };
  };

  function setObject(object, path, newValue) {
    var address = path.split(".");
    while (address.length > 1) {
      var currentKey = address.shift();
      var parentObject = object;
      object = object[currentKey];
      if (!object) {
        object = parentObject;
        object = object[currentKey] = {};
      };
    };
    object[address.shift()] = newValue;
  };

  function getObject(object, path, arrayIndex) {
    // split path into array items
    var address = path.split(".");
    // while array has more than 1 item
    while (address.length > 1) {
      // shift off and store the first key
      var currentKey = address.shift();
      // copy the object
      var parentObject = object;
      // drill down the object with the first key
      object = object[currentKey];
      // if there is not object there make one
      if (!object || typeof object != "object") {
        object = parentObject;
        // object = object[currentKey] = {};
        object[currentKey] = {};
      };
    };
    var finalKey = address.shift();
    if (finalKey in object) {
      if (arrayIndex !== undefined && typeof arrayIndex == "number") {
        // if arrayIndex return index of array
        // console.log("returning array", 1);
        return object[finalKey][arrayIndex];
      } else {
        // return value
        // console.log("returning value", 2);
        return object[finalKey];
      };
    } else {
      // if nothing found set empty value and then return
      // console.log("set value and returning value", 3);
      object[finalKey] = "";
      return object[finalKey];
    };
  };

  function getClosest(element, selector) {
    var firstChar = selector.charAt(0);
    // Get closest match
    for (; element && element !== document; element = element.parentNode) {
      // If selector is a class
      if (firstChar === ".") {
        if (element.classList.contains(selector.substr(1))) {
          return element;
        };
      };
      // If selector is an ID
      if (firstChar === "#") {
        if (element.id === selector.substr(1)) {
          return element;
        };
      };
      // If selector is a data attribute
      if (firstChar === "[") {
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

  function randomId(stringLength) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < stringLength; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  };

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  function store(key, data) {
    if (localStorage.getItem) {
      localStorage.setItem(key, data);
    };
  };

  function remove(key) {
    if (localStorage.getItem) {
      localStorage.removeItem(key);
    };
  };

  function read(key) {
    if (localStorage.getItem(key) == "") {
      localStorage.removeItem(key);
    } else if (localStorage.getItem(key)) {
      return localStorage.getItem(key);
    };
  };

  function getRadioValue(form, radioGroupName) {
    var selectedDice;
    // get list of radio buttons with specified name
    var radios = form[radioGroupName];
    // radios can also be expressed with
    // console.log(e(".dice-form")["dice-select"]);
    // loop through list of radio buttons
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) { // radio checked?
        selectedDice = radios[i]; // if so, hold its value in selectedDice
      };
    };
    return selectedDice;
  };

  function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };

  function pasteStrip(event) {
    if (event.clipboardData) {
      event.preventDefault();
      var text = event.clipboardData.getData("text/plain");
      document.execCommand("insertText", false, text);
    } else {
      return true;
    };
  };

  function inViewport(element) {
    var rectangle = element.getBoundingClientRect();
    return (
      rectangle.top >= 0 && rectangle.left >= 0 && rectangle.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rectangle.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  function sortObject(object, key) {
    object.sort(function(a, b) {
      // console.log(a);
      // console.log(b);
      var textA = a[key].toUpperCase();
      var textB = b[key].toUpperCase();
      if (textA < textB) {
        return -1;
      } else if (textA > textB) {
        return 1;
      } else {
        return 0;
      };
      // return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    return object;
  };

  // exposed methods
  return {
    store: store,
    remove: remove,
    read: read,
    e: e,
    eA: eA,
    toggleClass: toggleClass,
    addClass: addClass,
    removeClass: removeClass,
    isJsonString: isJsonString,
    getClosest: getClosest,
    selectText: selectText,
    delayFunction: delayFunction,
    setObject: setObject,
    getObject: getObject,
    truncate: truncateString,
    setDropdown: setDropdown,
    randomId: randomId,
    randomNumber: randomNumber,
    getRadioValue: getRadioValue,
    getUrlParameter: getUrlParameter,
    pasteStrip: pasteStrip,
    inViewport: inViewport,
    sortObject: sortObject
  };

})();
