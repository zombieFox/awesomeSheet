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
    var node = e(element);
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

  function truncate(string, length, dotDotDot) {
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

  function replaceAt(string, index, newCharacter) {
    if (index > string.length - 1) {
      return string;
    } else {
      return string.substring(0, index) + newCharacter + string.substring(index + 1);
    };
  };

  function toTitleCase(string) {
    return string.replace(/\w\S*/g, function(text) {
      return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
    });
  };

  function capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.substr(1);
  };

  function makeObject(string) {
    var _stringOrBooleanOrNumber = function(stringToTest) {
      if (stringToTest == "true") {
        return true;
      } else if (stringToTest == "false") {
        return false;
      } else if (stringToTest.indexOf("#") != -1) {
        return stringToTest.substr(1, kevValuePair[1].length);
      } else {
        return "\"" + stringToTest + "\"";
      };
    };
    // if argument is a string
    if (typeof string == "string") {
      // start building the object
      var objectString = "{";
      // split the string on comma not followed by a space
      // split on character if not followed by a space
      var items = string.split(/,(?=\S)/);
      // loop over each item
      for (var i = 0; i < items.length; i++) {
        // split each would be object key values pair
        // split on character if not followed by a space
        var kevValuePair = items[i].split(/:(?=\S)/);
        // get the key
        var key = "\"" + kevValuePair[0] + "\"";
        var value;
        // if the value has + with a space after it
        if (/\+(?=\S)/.test(kevValuePair[1])) {
          // remove first + symbol
          kevValuePair[1] = kevValuePair[1].substr(1, kevValuePair[1].length);
          // split the would be values
          // split on character if not followed by a space
          var all_value = kevValuePair[1].split(/\+(?=\S)/);
          // if there are multiple values make an array
          value = "["
          for (var q = 0; q < all_value.length; q++) {
            value += _stringOrBooleanOrNumber(all_value[q]) + ",";
          };
          // remove last comma
          value = value.substr(0, value.length - 1);
          // close array
          value += "]"
        } else {
          value = _stringOrBooleanOrNumber(kevValuePair[1]);
        };
        objectString += key + ":" + value + ",";
      };
      // remove last comma
      objectString = objectString.substr(0, objectString.length - 1);
      // close object
      objectString += "}";
      var object = JSON.parse(objectString);
      return object;
    } else {
      return false;
    };
  };

  function _makeAddress(path) {
    var array;
    if (path.indexOf("[") != -1 && path.indexOf("]") != -1) {
      array = path.split(".").join(",").split("[").join(",").split("]").join(",").split(",");
      for (var i = 0; i < array.length; i++) {
        if (array[i] == "") {
          array.splice(i, 1);
        };
        if (!isNaN(parseInt(array[i], 10))) {
          array[i] = parseInt(array[i], 10);
        };
      };
    } else {
      array = path.split(".");
    };
    return array;
  };

  function setObject(options) {
    var defaultOptions = {
      path: null,
      object: null,
      newValue: null
    };
    if (options) {
      var defaultOptions = applyOptions(defaultOptions, options);
    };
    var address = _makeAddress(defaultOptions.path);
    var _setData = function() {
      while (address.length > 1) {
        // shift off and store the first key
        var currentKey = address.shift();
        // if the key is not found make a new object
        if (!(currentKey in defaultOptions.object)) {
          // make an empty object in the current object level
          if (isNaN(currentKey)) {
            defaultOptions.object[currentKey] = {};
          } else {
            defaultOptions.object[currentKey] = [];
          };
        };
        // drill down the object with the first key
        defaultOptions.object = defaultOptions.object[currentKey];
      };
      var finalKey = address.shift();
      defaultOptions.object[finalKey] = defaultOptions.newValue;
    };
    if (defaultOptions.object != null && defaultOptions.path != null && defaultOptions.newValue != null) {
      _setData();
    } else {
      return false;
    };
  };

  function getObject(options) {
    var defaultOptions = {
      object: null,
      path: null
    };
    if (options) {
      var defaultOptions = applyOptions(defaultOptions, options);
    };
    var address = _makeAddress(defaultOptions.path);
    var _getData = function() {
      while (address.length > 1) {
        // shift off and store the first key
        var currentKey = address.shift();
        // if the key is not found make a new object
        if (!(currentKey in defaultOptions.object)) {
          // make an empty object in the current object level
          if (isNaN(currentKey)) {
            defaultOptions.object[currentKey] = {};
          } else {
            defaultOptions.object[currentKey] = [];
          };
        };
        // drill down the object with the first key
        defaultOptions.object = defaultOptions.object[currentKey];
      };
      var finalKey = address.shift();
      if (!(finalKey in defaultOptions.object)) {
        return "";
      } else {
        return defaultOptions.object[finalKey];
      };
    };
    if (defaultOptions.object != null && defaultOptions.path != null) {
      return _getData();
    } else {
      return false;
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

  function randomString(stringLength) {
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

  function getDateTime() {
    var dateStamp = new Date();
    var object = {
      // string: dateStamp.constructor(),
      // time: dateStamp.getTime()
      date: dateStamp.getDate(),
      day: dateStamp.getDay(),
      year: dateStamp.getFullYear(),
      hours: dateStamp.getHours(),
      milliseconds: dateStamp.getMilliseconds(),
      minutes: dateStamp.getMinutes(),
      month: dateStamp.getMonth(),
      seconds: dateStamp.getSeconds()
    }
    return object;
  };

  function getAverageColor(imageBase64) {
    // var imageUrl = elementWithBackgroundImage.style.backgroundImage.slice(4, -1).replace(/"/g, "");
    var tempImage = new Image;
    tempImage.src = imageBase64;
    var blockSize = 5, // only visit every 5 pixels
      defaultRGB = {
        r: 0,
        g: 0,
        b: 0
      }, // for non-supporting envs
      canvas = document.createElement("canvas"),
      context = canvas.getContext && canvas.getContext("2d"),
      data, width, height,
      i = -4,
      length,
      rgb = {
        r: 0,
        g: 0,
        b: 0
      },
      count = 0;
    if (!context) {
      return defaultRGB;
    };
    canvas.height = tempImage.naturalHeight || tempImage.offsetHeight || tempImage.height;
    canvas.width = tempImage.naturalWidth || tempImage.offsetWidth || tempImage.width;
    height = canvas.height;
    width = canvas.width;
    context.drawImage(tempImage, 0, 0);
    data = context.getImageData(0, 0, width, height);
    length = data.data.length;
    while ((i += blockSize * 4) < length) {
      ++count;
      rgb.r += data.data[i];
      rgb.g += data.data[i + 1];
      rgb.b += data.data[i + 2];
    };
    // ~~ used to floor values
    rgb.r = ~~(rgb.r / count);
    rgb.g = ~~(rgb.g / count);
    rgb.b = ~~(rgb.b / count);
    return rgb;
  };

  function applyOptions(defaultOptions, options) {
    if (defaultOptions && options) {
      if (options) {
        for (var key in options) {
          if (key in defaultOptions) {
            defaultOptions[key] = options[key];
          };
        };
      };
      return defaultOptions;
    } else {
      return null;
    };
  };

  function loadJSON(jsonPath, callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open("GET", jsonPath, true);
    xobj.onreadystatechange = function() {
      if (xobj.readyState == 4 && xobj.status == "200") {
        // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
        callback(xobj.responseText);
      };
    };
    xobj.send(null);
  };

  function loadCsv(csvPath, callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/csv");
    xobj.open("GET", csvPath, true);
    xobj.onreadystatechange = function() {
      if (xobj.readyState == 4 && xobj.status == "200") {
        // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
        callback(xobj.responseText);
      };
    };
    xobj.send(null);
  };

  function csvToJSON(csvString) {
    var lines = csvString.split(/\n|\r\n/);
    var result = [];
    var keys = lines[0].split("|");
    lines.splice(0, 1);
    lines.forEach(function(line) {
      var object = {};
      var currentline = line.split("|");
      keys.forEach(function(header, index) {
        object[header] = currentline[index];
      });
      result.push(object);
    });
    return result;
  };

  // function csvToJSON(string) {
  //   var lines = string.split("\n");
  //   // remove trailing spaces at end of each line
  //   for (var i = 0; i < lines.length; i++) {
  //     // lines[i] = lines[i].trim();
  //     lines[i] = lines[i].substr(0, (lines[i].length - 1));
  //   };
  //   var keys = lines[0].split(/\|(?=\S)/);
  //   var result = [];
  //   for (var i = 1; i < lines.length; i++) {
  //     var object = {};
  //     var currentline = lines[i].split(/\|(?=\S)/);
  //     // var currentline = lines[i].substr(0, (lines[i].length - 1)).split(/\|(?=\S)/);
  //     for (var j = 0; j < keys.length; j++) {
  //       object[keys[j]] = currentline[j];
  //     };
  //     result.push(object);
  //   };
  //   return JSON.parse(JSON.stringify(result));
  // };

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
    truncate: truncate,
    setDropdown: setDropdown,
    randomString: randomString,
    randomNumber: randomNumber,
    getRadioValue: getRadioValue,
    getUrlParameter: getUrlParameter,
    pasteStrip: pasteStrip,
    inViewport: inViewport,
    makeObject: makeObject,
    sortObject: sortObject,
    getDateTime: getDateTime,
    getAverageColor: getAverageColor,
    applyOptions: applyOptions,
    replaceAt: replaceAt,
    toTitleCase: toTitleCase,
    capFirstLetter: capFirstLetter,
    loadJSON: loadJSON,
    loadCsv: loadCsv,
    csvToJSON: csvToJSON
  };

})();
