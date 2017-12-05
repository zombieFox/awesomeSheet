var characterImage = (function() {

  var resizeTimer = null;
  var backgroundTimer = null;
  var storeTimer = null;

  function bind() {
    var characterImageInput = helper.e(".js-character-image-input");
    var characterImageClear = helper.e(".js-character-image-clear");

    var characterImageScaleCover = helper.e(".js-character-image-scale-cover");
    var characterImageScaleContain = helper.e(".js-character-image-scale-contain");
    var characterImageScaleCenter = helper.e(".js-character-image-scale-center");
    var characterImageScaleTop = helper.e(".js-character-image-scale-top");
    var characterImageScaleBottom = helper.e(".js-character-image-scale-bottom");
    var characterImageScaleLeft = helper.e(".js-character-image-scale-left");
    var characterImageScaleRight = helper.e(".js-character-image-scale-right");

    var characterImageScaleInput = helper.e(".js-character-image-scale-input");

    var characterBasicsImageScaleAverage = helper.e(".js-basics-character-image-background-average");
    var characterBasicsImageScaleBlack = helper.e(".js-basics-character-image-background-black");
    var characterBasicsImageScaleWhite = helper.e(".js-basics-character-image-background-white");

    characterImageInput.addEventListener("change", function() {
      _handleFiles(this);
    }, false);
    characterImageClear.addEventListener("click", function() {
      _removeCharacterImage();
    }, false);

    characterImageScaleCover.addEventListener("click", function() {
      _render_resize("cover");
      _render_position("center");
      _update_all_inputRangeBlock();
      sheet.storeCharacters();
    }, false);
    characterImageScaleContain.addEventListener("click", function() {
      _render_resize("contain");
      _render_position("center");
      _update_all_inputRangeBlock();
      sheet.storeCharacters();
    }, false);
    characterImageScaleCenter.addEventListener("click", function() {
      _render_position("center");
      _update_all_inputRangeBlock();
      sheet.storeCharacters();
    }, false);
    characterImageScaleTop.addEventListener("click", function() {
      _render_position("top");
      _update_all_inputRangeBlock();
      sheet.storeCharacters();
    }, false);
    characterImageScaleBottom.addEventListener("click", function() {
      _render_position("bottom");
      _update_all_inputRangeBlock();
      sheet.storeCharacters();
    }, false);
    characterImageScaleLeft.addEventListener("click", function() {
      _render_position("left");
      _update_all_inputRangeBlock();
      sheet.storeCharacters();
    }, false);
    characterImageScaleRight.addEventListener("click", function() {
      _render_position("right");
      _update_all_inputRangeBlock();
      sheet.storeCharacters();
    }, false);

    characterImageScaleInput.addEventListener("input", function() {
      _render_resize();
      _render_position();
    }, false);

    characterBasicsImageScaleAverage.addEventListener("click", function() {
      backgroundTimer = setTimeout(_delayBakcground, 350, this);
    }, false);
    characterBasicsImageScaleBlack.addEventListener("click", function() {
      backgroundTimer = setTimeout(_delayBakcground, 350, this);
    }, false);
    characterBasicsImageScaleWhite.addEventListener("click", function() {
      backgroundTimer = setTimeout(_delayBakcground, 350, this);
    }, false);
  };

  function _bind_drag() {
    var image = null;
    var cursorX = 0;
    var cursorY = 0;
    var imageX = 0;
    var imageY = 0;
    var newX;
    var newY;
    var dragStart = function(x, y) {
      image = helper.e(".js-character-image");
      if (image) {
        imageX = x - image.offsetLeft;
        imageY = y - image.offsetTop;
      };
    };
    var dragging = function(x, y) {
      if (image !== null) {
        var characterImagePreview = helper.e(".js-character-image-preview");
        var characterImage = helper.e(".js-character-image");
        x = (x - imageX);
        y = (y - imageY);
        // if image is outside the parent
        if (x > ((characterImagePreview.getBoundingClientRect().width) - 50)) {
          console.log("too far right");
          x = ((characterImagePreview.getBoundingClientRect().width) - 50);
        } else if (x < -(characterImage.width - 50)) {
          console.log("too far left");
          x = -(characterImage.width - 50);
        };
        if (y > ((characterImagePreview.getBoundingClientRect().height) - 50)) {
          console.log("too far bottom");
          y = ((characterImagePreview.getBoundingClientRect().height) - 50);
        } else if (y < -(characterImage.height - 50)) {
          console.log("too far top");
          y = -(characterImage.height - 50);
        };
        // convert x and y into percentages
        x = parseFloat((x / characterImagePreview.getBoundingClientRect().width) * 100).toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        });
        y = parseFloat((y / characterImagePreview.getBoundingClientRect().height) * 100).toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        });
        // set and store position
        image.style.left = x + "%";
        image.style.top = y + "%";
        newX = x
        newY = y
        _store_position(newX, newY);
        // console.log("image.x", x, "image.y", y);
      };
    };
    var dragStop = function() {
      image = null;
      sheet.storeCharacters();
    };
    var checkElement = function(event) {
      return event.target.classList.contains("js-character-image-preview");
    };
    helper.e(".js-character-image-preview").addEventListener("mousedown", function(event) {
      dragStart(event.clientX, event.clientY);
    });
    helper.e("body").addEventListener("mousemove", function(event) {
      dragging(event.clientX, event.clientY);
    });
    helper.e("body").addEventListener("mouseup", function(event) {
      dragStop();
    });
    helper.e(".js-character-image-preview").addEventListener("touchstart", function(event) {
      dragStart(event.touches[0].clientX, event.touches[0].clientY);
    });
    helper.e(".js-character-image-preview").addEventListener("touchmove", function(event) {
      dragging(event.touches[0].clientX, event.touches[0].clientY);
    });
    helper.e(".js-character-image-preview").addEventListener("touchend", function(event) {
      dragStop();
    });
  };

  function _delayBakcground() {
    _render_background();
  };

  function _removeCharacterImage() {
    if (helper.getObject(sheet.getCharacter(), "basics.character_image.image") != "") {
      prompt.render("Remove Character Image?", "This can not be undone.", "Remove", destroy);
    };
  };

  function _handleFiles(input) {
    var files = input.files;
    if (files && files[0]) {
      for (var i = 0; i < files.length; i++) {
        _loadImage(files[i]);
      };
    };
  };

  function _loadImage(file) {
    var reader = new FileReader;
    reader.onload = function() {
      var tempImage = new Image;
      tempImage.onload = function() {
        // check width and height
        if (tempImage.width <= 2000 || tempImage.height <= 2000) {
          destroy();
          _store_image(reader.result);
          _store_background("average");
          // _store_position(0, 0);
          _calculate_color(reader.result);
          _calculate_size(tempImage);
          _calculate_orientation();
          _calculate_scale();
          _render_image();
          _render_background();
          _render_resize("cover");
          _render_position("center");
          _update_all_inputRangeBlock();
          _update_all_radio();
          _clear_inputUpload();
          _store_uploaded(true);
          sheet.storeCharacters();
        } else {
          snack.render("Image too large, max 2000x2000px.", false, false);
        };
      };
      tempImage.src = reader.result;
    };
    // check size
    if (file.size <= 500000) {
      // check type
      if (file.type == "image/jpeg" || file.type == "image/jpg" || file.type == "image/gif" || file.type == "image/png") {
        reader.readAsDataURL(file);
      } else {
        snack.render("Not an image file.", false, false);
      };
    } else {
      snack.render("File too big, max 500KB.", false, false);
    };
  };

  function _calculate_color(imageBase64) {
    var color = helper.getAverageColor(imageBase64);
    _store_color(color);
  };

  function _calculate_size(image) {
    var width = image.width;
    var height = image.height;
    _store_size(width, height);
  };

  function _calculate_orientation() {
    var imageWidth = helper.getObject(sheet.getCharacter(), "basics.character_image.size.width");
    var imageHeight = helper.getObject(sheet.getCharacter(), "basics.character_image.size.height");
    var orientation;
    if (imageWidth > imageHeight) {
      orientation = "landscape";
    } else if (imageWidth < imageHeight) {
      orientation = "portrait";
    } else {
      orientation = "square";
    };
    _store_orientation(orientation);
  };

  function _calculate_scale() {
    var imageBase64 = helper.getObject(sheet.getCharacter(), "basics.character_image.image");
    var imageWidth = helper.getObject(sheet.getCharacter(), "basics.character_image.size.width");
    var imageHeight = helper.getObject(sheet.getCharacter(), "basics.character_image.size.height");
    var orientation = helper.getObject(sheet.getCharacter(), "basics.character_image.orientation");
    var characterImagePreview = helper.e(".js-character-image-preview");
    var containerWidth = characterImagePreview.getBoundingClientRect().width;
    var containerHeight = characterImagePreview.getBoundingClientRect().height;
    var scale;
    // cover = parseInt((containerHeight / ((containerWidth / imageWidth) * imageHeight)) * 100, 10);
    // contain = parseInt((containerHeight / ((containerWidth / imageWidth) * imageHeight)) * 100, 10);
    if (orientation == "landscape") {
      scale = parseInt((containerHeight / ((containerWidth / imageWidth) * imageHeight)) * 100, 10);
    } else if (orientation == "portrait" || orientation == "square") {
      scale = 100;
    };
    _store_scale(scale);
  };

  function _update_all_inputRangeBlock() {
    _update_inputRangeBlock(helper.e(".js-character-image-scale-input"));
  };

  function _update_inputRangeBlock(input) {
    var inputBlockElement = helper.getClosest(input, ".js-input-range-block");
    inputRangeBlock.render(inputBlockElement);
  };

  function _update_all_radio() {
    _update_radio(helper.e(".js-basics-character-image-background-average"));
    _update_radio(helper.e(".js-basics-character-image-background-black"));
    _update_radio(helper.e(".js-basics-character-image-background-white"));
  };

  function _update_radio(radio) {
    var radioBlockElement = helper.getClosest(radio, ".js-radio-block");
    radioBlock.render(radioBlockElement);
  };

  function _clear_inputUpload(input) {
    var characterImageInput = helper.e(".js-character-image-input");
    characterImageInput.value = "";
  };

  function clear() {
    var characterImageBackground = helper.e(".js-character-image-background");
    var characterImage = helper.e(".js-character-image");
    if (characterImage) {
      characterImageBackground.removeAttribute("style");
      characterImage.remove();
    };
  };

  function destroy() {
    var object = {
      uploaded: false,
      background: "",
      color: {
        r: "",
        g: "",
        b: ""
      },
      contain: "",
      cover: "",
      image: "",
      orientation: "",
      position: {
        x: "",
        y: ""
      },
      size: {
        width: "",
        height: ""
      },
      scale: ""
    };
    helper.setObject(sheet.getCharacter(), "basics.character_image", object);
    sheet.storeCharacters();
    _update_all_inputRangeBlock();
    _update_all_radio();
    clear();
  };

  function render() {
    if (helper.getObject(sheet.getCharacter(), "basics.character_image.uploaded")) {
      _render_image();
      _render_resize();
      _render_position();
      _render_background();
    };
  };

  function _render_image() {
    // console.log("render image");
    var characterImagePreview = helper.e(".js-character-image-preview");
    var imageBase64 = helper.getObject(sheet.getCharacter(), "basics.character_image.image");
    if (imageBase64) {
      var image = new Image;
      image.setAttribute("class", "m-character-image js-character-image");
      image.src = imageBase64;
      characterImagePreview.appendChild(image);
    };
    _bind_drag();
  };

  function _render_background() {
    // console.log("render background");
    var background = helper.getObject(sheet.getCharacter(), "basics.character_image.background");
    var characterImageBackground = helper.e(".js-character-image-background");
    var color = helper.getObject(sheet.getCharacter(), "basics.character_image.color");
    if (background == "black") {
      color = "rgb(0,0,0)";
    } else if (background == "white") {
      color = "rgb(255,255,255)";
    } else if (background == "average") {
      color = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
    };
    characterImageBackground.style.backgroundColor = color;
  };

  function _render_position(presetPosition) {
    // console.log("render position");
    var characterImagePreview = helper.e(".js-character-image-preview");
    var characterImagePreview = helper.e(".js-character-image-preview");
    var characterImage = helper.e(".js-character-image");
    var x;
    var y;
    var moveImage = function(image) {
      if (presetPosition) {
        // console.log("-- position preset passed");
        if (presetPosition == "center") {
          x = -parseInt(((image.width - characterImagePreview.getBoundingClientRect().width) / 2), 10);
          y = -parseInt(((image.height - characterImagePreview.getBoundingClientRect().height) / 2), 10);
        } else if (presetPosition == "top") {
          x = helper.getObject(sheet.getCharacter(), "basics.character_image.position.x");
          y = 0;
        } else if (presetPosition == "bottom") {
          x = helper.getObject(sheet.getCharacter(), "basics.character_image.position.x");
          y = -parseInt((image.height - characterImagePreview.getBoundingClientRect().height), 10);
        } else if (presetPosition == "left") {
          x = 0;
          y = helper.getObject(sheet.getCharacter(), "basics.character_image.position.y");
        } else if (presetPosition == "right") {
          x = -parseInt((image.width - characterImagePreview.getBoundingClientRect().width), 10);
          y = helper.getObject(sheet.getCharacter(), "basics.character_image.position.y");
        };
        // if image is outside the parent
        if (x > ((characterImagePreview.getBoundingClientRect().width) - 50)) {
          console.log("too far right");
          x = ((characterImagePreview.getBoundingClientRect().width) - 50);
        } else if (x < -(characterImage.width - 50)) {
          console.log("too far left");
          x = -(characterImage.width - 50);
        };
        if (y > ((characterImagePreview.getBoundingClientRect().height) - 50)) {
          console.log("too far bottom");
          y = ((characterImagePreview.getBoundingClientRect().height) - 50);
        } else if (y < -(characterImage.height - 50)) {
          console.log("too far top");
          y = -(characterImage.height - 50);
        };
        // convert x and y into percentages
        x = parseFloat((x / characterImagePreview.getBoundingClientRect().width) * 100).toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        });
        y = parseFloat((y / characterImagePreview.getBoundingClientRect().height) * 100).toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        });
      } else {
        // console.log("-- position as stored values");
        x = helper.getObject(sheet.getCharacter(), "basics.character_image.position.x");
        y = helper.getObject(sheet.getCharacter(), "basics.character_image.position.y");
      };
      image.style.left = x + "%";
      image.style.top = y + "%";
      _store_position(x, y);
    };
    // if the image is ready move it or wait until it is loaded to move it
    if (characterImage) {
      if (characterImage.complete && characterImage.height > 0) {
        moveImage(characterImage);
      } else {
        characterImage.onload = function(event) {
          moveImage(characterImage);
        };
      };
    };
  };

  function _render_resize(presetSize) {
    // console.log("render resize");
    var imageBase64 = helper.getObject(sheet.getCharacter(), "basics.character_image.image");
    var imageWidth = helper.getObject(sheet.getCharacter(), "basics.character_image.size.width");
    var imageHeight = helper.getObject(sheet.getCharacter(), "basics.character_image.size.height");
    var orientation = helper.getObject(sheet.getCharacter(), "basics.character_image.orientation");
    var characterImagePreview = helper.e(".js-character-image-preview");
    var containerWidth = characterImagePreview.getBoundingClientRect().width;
    var containerHeight = characterImagePreview.getBoundingClientRect().height;
    var characterImage = helper.e(".js-character-image");
    var scale;
    if (imageBase64 && characterImage) {
      if (presetSize) {
        if (presetSize == "contain") {
          if (orientation == "landscape") {
            scale = 100;
          } else if (orientation == "portrait" || orientation == "square") {
            scale = parseInt((containerHeight / ((containerWidth / imageWidth) * imageHeight)) * 100, 10);
          };
        } else if (presetSize == "cover") {
          if (orientation == "landscape") {
            scale = parseInt((containerHeight / ((containerWidth / imageWidth) * imageHeight)) * 100, 10);
          } else if (orientation == "portrait" || orientation == "square") {
            scale = 100;
          };
        };
        // _store_scale(scale);
      } else {
        scale = helper.getObject(sheet.getCharacter(), "basics.character_image.scale");
      };
      characterImage.style.width = scale + "%";
      // console.log("image.width", characterImage.width, "image.height", characterImage.height);
    };
  };

  function _store_position(axisX, axisY) {
    // console.log("store position");
    var position = {
      x: axisX,
      y: axisY
    };
    helper.setObject(sheet.getCharacter(), "basics.character_image.position", position);
  };

  function _store_background(background) {
    // console.log("store background");
    helper.setObject(sheet.getCharacter(), "basics.character_image.background", background);
  };

  function _store_color(color) {
    // console.log("store color");
    helper.setObject(sheet.getCharacter(), "basics.character_image.color", color);
  };

  function _store_image(imageBase64) {
    // console.log("store image");
    helper.setObject(sheet.getCharacter(), "basics.character_image.image", imageBase64);
  };

  function _store_scale(scale) {
    // console.log("store scale");
    helper.setObject(sheet.getCharacter(), "basics.character_image.scale", scale);
  };

  function _store_orientation(orientation) {
    // console.log("store orientation");
    helper.setObject(sheet.getCharacter(), "basics.character_image.orientation", orientation);
  };

  function _store_size(imageWidth, imageHeight) {
    // console.log("store size");
    var size = {
      width: imageWidth,
      height: imageHeight
    };
    helper.setObject(sheet.getCharacter(), "basics.character_image.size", size);
  };

  function _store_uploaded(boolean) {
    // console.log("store uploaded");
    helper.setObject(sheet.getCharacter(), "basics.character_image.uploaded", boolean);
  };

  // exposed methods
  return {
    bind: bind,
    clear: clear,
    destroy: destroy,
    render: render
  };

})();
