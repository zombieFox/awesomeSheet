var characterImage = (function() {

  var backgroundTimer = null;

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
      _render_size("cover");
      _render_position("center");
      _update_all_inputRangeBlock();
      sheet.store();
    }, false);
    characterImageScaleContain.addEventListener("click", function() {
      _render_size("contain");
      _render_position("center");
      _update_all_inputRangeBlock();
      sheet.store();
    }, false);
    characterImageScaleCenter.addEventListener("click", function() {
      _render_position("center");
      _update_all_inputRangeBlock();
      sheet.store();
    }, false);
    characterImageScaleTop.addEventListener("click", function() {
      _render_position("top");
      _update_all_inputRangeBlock();
      sheet.store();
    }, false);
    characterImageScaleBottom.addEventListener("click", function() {
      _render_position("bottom");
      _update_all_inputRangeBlock();
      sheet.store();
    }, false);
    characterImageScaleLeft.addEventListener("click", function() {
      _render_position("left");
      _update_all_inputRangeBlock();
      sheet.store();
    }, false);
    characterImageScaleRight.addEventListener("click", function() {
      _render_position("right");
      _update_all_inputRangeBlock();
      sheet.store();
    }, false);

    characterImageScaleInput.addEventListener("input", function() {
      _render_size();
      _calculate_positionXY();
      _render_position();
    }, false);

    characterBasicsImageScaleAverage.addEventListener("click", function() {
      backgroundTimer = setTimeout(_delay_bakcground, 350, this);
    }, false);
    characterBasicsImageScaleBlack.addEventListener("click", function() {
      backgroundTimer = setTimeout(_delay_bakcground, 350, this);
    }, false);
    characterBasicsImageScaleWhite.addEventListener("click", function() {
      backgroundTimer = setTimeout(_delay_bakcground, 350, this);
    }, false);
  };

  function _bind_image() {
    var body = helper.e("body");
    var characterImagePreview = helper.e(".js-character-image-preview");
    var image = null;
    var cursorX = 0;
    var cursorY = 0;
    var imageX = 0;
    var imageY = 0;
    var dragStart = function(x, y) {
      // console.log("dragStart");
      image = helper.e(".js-character-image");
      if (image) {
        imageX = x - image.offsetLeft;
        imageY = y - image.offsetTop;
      };
    };
    var dragging = function(x, y) {
      // console.log("dragging");
      if (image !== null) {
        x = (x - imageX);
        y = (y - imageY);
        _store_position(_calculate_positionX(x), _calculate_positionY(y));
        _render_position();
      };
    };
    var dragStop = function() {
      // console.log("dragStop");
      image = null;
      sheet.store();
    };
    // var checkElement = function(event) {
    //   return event.target.classList.contains("js-character-image-preview");
    // };
    characterImagePreview.addEventListener("mousedown", function(event) {
      dragStart(event.clientX, event.clientY);
    });
    body.addEventListener("mousemove", function(event) {
      dragging(event.clientX, event.clientY);
    });
    body.addEventListener("mouseup", function(event) {
      dragStop();
    });
    characterImagePreview.addEventListener("touchstart", function(event) {
      dragStart(event.touches[0].clientX, event.touches[0].clientY);
    });
    characterImagePreview.addEventListener("touchmove", function(event) {
      dragging(event.touches[0].clientX, event.touches[0].clientY);
    });
    characterImagePreview.addEventListener("touchend", function(event) {
      dragStop();
    });
  };

  function _delay_bakcground() {
    _render_background();
  };

  function _removeCharacterImage() {
    if (_get_uploadedState()) {
      prompt.render({
        heading: "Remove Character Image?",
        message: "This can not be undone.",
        actionText: "Remove",
        action: destroy
      });
    } else {
      snack.render({
        message: "Nothing to clear."
      });
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
          _store_uploaded(true);
          _store_image(reader.result);
          _store_background("average");
          _calculate_color(reader.result);
          _calculate_size(tempImage);
          _calculate_orientation();
          _calculate_scale();
          _render_image();
          _render_background();
          _render_size("cover");
          _render_position("center");
          _update_all_inputRangeBlock();
          _update_all_radio();
          _clear_inputUpload();
          sheet.store();
        } else {
          snack.render({
            message: "Image too large, max 2000x2000px."
          });
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
        snack.render({
          message: "Not an image file."
        });
      };
    } else {
      snack.render({
        message: "File too big, max 500KB."
      });
    };
  };

  function _calculate_positionXY() {
    if (_get_uploadedState()) {
      var characterImagePreview = helper.e(".js-character-image-preview");
      var characterImage = helper.e(".js-character-image");
      var x = characterImage.offsetLeft;
      var y = characterImage.offsetTop;
      _store_position(_calculate_positionX(x), _calculate_positionY(y));
    };
  };

  function _calculate_positionX(x) {
    var characterImagePreview = helper.e(".js-character-image-preview");
    var characterImage = helper.e(".js-character-image");
    if (x < -(characterImage.width / 2) + 40) {
      // console.log("too far left");
      x = -(characterImage.width / 2) + 40;
    } else if (x > ((characterImagePreview.getBoundingClientRect().width) + (characterImage.width / 2)) - 40) {
      // console.log("too far right");
      x = ((characterImagePreview.getBoundingClientRect().width) + (characterImage.width / 2)) - 40;
    };
    // convert x and y into percentages
    x = parseFloat((x / characterImagePreview.getBoundingClientRect().width) * 100).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    return x;
  };

  function _calculate_positionY(y) {
    var characterImagePreview = helper.e(".js-character-image-preview");
    var characterImage = helper.e(".js-character-image");
    if (y < -(characterImage.height / 2) + 40) {
      // console.log("too far top");
      y = -(characterImage.height / 2) + 40;
    } else if (y > ((characterImagePreview.getBoundingClientRect().height) + (characterImage.height / 2)) - 40) {
      // console.log("too far bottom");
      y = ((characterImagePreview.getBoundingClientRect().height) + (characterImage.height / 2)) - 40;
    };
    y = parseFloat((y / characterImagePreview.getBoundingClientRect().height) * 100).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    return y;
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
    var size = helper.getObject({
      object: sheet.get(),
      path: "basics.character_image.size"
    });
    var imageWidth = size.width;
    var imageHeight = size.height;
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
    var characterImageObject = helper.getObject({
      object: sheet.get(),
      path: "basics.character_image"
    });
    var characterImagePreview = helper.e(".js-character-image-preview");
    var containerWidth = characterImagePreview.getBoundingClientRect().width;
    var containerHeight = characterImagePreview.getBoundingClientRect().height;
    var scale;
    // cover = parseInt((containerHeight / ((containerWidth / characterImageObject.size.width) * characterImageObject.size.width)) * 100, 10);
    // contain = parseInt((containerHeight / ((containerWidth / characterImageObject.size.width) * characterImageObject.size.width)) * 100, 10);
    if (characterImageObject.orientation == "landscape") {
      scale = parseInt((containerHeight / ((containerWidth / characterImageObject.size.width) * characterImageObject.size.width)) * 100, 10);
    } else if (characterImageObject.orientation == "portrait" || characterImageObject.orientation == "square") {
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
    helper.setObject({
      object: sheet.get(),
      path: "basics.character_image",
      newValue: object
    });
    sheet.store();
    _update_all_inputRangeBlock();
    _update_all_radio();
    clear();
  };

  function render() {
    if (_get_uploadedState()) {
      _render_image();
      _render_size();
      _render_position();
      _render_background();
    };
  };

  function _render_image() {
    if (_get_uploadedState()) {
      // console.log("render image");
      var characterImagePreview = helper.e(".js-character-image-preview");
      var characterImageObject = helper.getObject({
        object: sheet.get(),
        path: "basics.character_image"
      });
      var image = new Image;
      image.setAttribute("class", "m-character-image js-character-image");
      image.src = characterImageObject.image;
      characterImagePreview.appendChild(image);
      _bind_image();
    };
  };

  function _render_background() {
    if (_get_uploadedState()) {
      // console.log("render background");
      var characterImageObject = helper.getObject({
        object: sheet.get(),
        path: "basics.character_image"
      });
      var characterImageBackground = helper.e(".js-character-image-background");
      var newBackgroundColor;
      if (characterImageObject.background == "black") {
        newBackgroundColor = "rgb(0,0,0)";
      } else if (characterImageObject.background == "white") {
        newBackgroundColor = "rgb(255,255,255)";
      } else if (characterImageObject.background == "average") {
        newBackgroundColor = "rgb(" + characterImageObject.color.r + "," + characterImageObject.color.g + "," + characterImageObject.color.b + ")";
      };
      characterImageBackground.style.backgroundColor = newBackgroundColor;
    };
  };

  function _render_position(presetPosition) {
    if (_get_uploadedState()) {
      // console.log("render position");
      var characterImageObject = helper.getObject({
        object: sheet.get(),
        path: "basics.character_image"
      });
      var characterImagePreview = helper.e(".js-character-image-preview");
      var characterImage = helper.e(".js-character-image");
      var x;
      var y;
      var moveImage = function(image) {
        if (presetPosition) {
          if (presetPosition == "center") {
            x = 50;
            y = 50;
          } else if (presetPosition == "top") {
            x = characterImageObject.position.x;
            y = ((image.height / 2) / characterImagePreview.getBoundingClientRect().height) * 100;
          } else if (presetPosition == "bottom") {
            x = characterImageObject.position.x;
            y = ((characterImagePreview.getBoundingClientRect().height - (image.height / 2)) / characterImagePreview.getBoundingClientRect().height) * 100;
          } else if (presetPosition == "left") {
            x = ((image.width / 2) / characterImagePreview.getBoundingClientRect().width) * 100;
            y = characterImageObject.position.y;
          } else if (presetPosition == "right") {
            x = ((characterImagePreview.getBoundingClientRect().width - (image.width / 2)) / characterImagePreview.getBoundingClientRect().width) * 100;
            y = characterImageObject.position.y;
          };
          // // convert x and y into percentages
          x = parseFloat(x).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          });
          y = parseFloat(y).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          });
        } else {
          x = characterImageObject.position.x;
          y = characterImageObject.position.y;
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
  };

  function _render_size(presetSize) {
    if (_get_uploadedState()) {
      // console.log("render resize");
      var characterImageObject = helper.getObject({
        object: sheet.get(),
        path: "basics.character_image"
      });
      var characterImage = helper.e(".js-character-image");
      var characterImagePreview = helper.e(".js-character-image-preview");
      if (characterImageObject.size.width == "" || characterImageObject.size.height == "") {
        _calculate_size(characterImage);
      };
      var containerWidth = characterImagePreview.getBoundingClientRect().width;
      var containerHeight = characterImagePreview.getBoundingClientRect().height;
      var scale;
      if (characterImage) {
        if (presetSize) {
          if (presetSize == "contain") {
            if (characterImageObject.orientation == "landscape") {
              scale = 100;
            } else if (characterImageObject.orientation == "portrait" || characterImageObject.orientation == "square") {
              scale = parseInt((containerHeight / ((containerWidth / characterImageObject.size.width) * characterImageObject.size.height)) * 100, 10);
            };
          } else if (presetSize == "cover") {
            if (characterImageObject.orientation == "landscape") {
              scale = parseInt((containerHeight / ((containerWidth / characterImageObject.size.width) * characterImageObject.size.height)) * 100, 10);
            } else if (characterImageObject.orientation == "portrait" || characterImageObject.orientation == "square") {
              scale = 100;
            };
          };
          _store_scale(scale);
        } else {
          scale = characterImageObject.scale;
        };
        characterImage.style.width = scale + "%";
      };
    };
  };

  function _store_position(axisX, axisY) {
    // console.log("store position");
    var position = {
      x: axisX,
      y: axisY
    };
    helper.setObject({
      object: sheet.get(),
      path: "basics.character_image.position",
      newValue: position
    });
  };

  function _store_background(background) {
    // console.log("store background");
    helper.setObject({
      object: sheet.get(),
      path: "basics.character_image.background",
      newValue: background
    });
  };

  function _store_color(color) {
    // console.log("store color");
    helper.setObject({
      object: sheet.get(),
      path: "basics.character_image.color",
      newValue: color
    });
  };

  function _store_image(imageBase64) {
    // console.log("store image");
    helper.setObject({
      object: sheet.get(),
      path: "basics.character_image.image",
      newValue: imageBase64
    });
  };

  function _store_scale(scale) {
    // console.log("store scale");
    helper.setObject({
      object: sheet.get(),
      path: "basics.character_image.scale",
      newValue: scale
    });
  };

  function _store_orientation(orientation) {
    // console.log("store orientation");
    helper.setObject({
      object: sheet.get(),
      path: "basics.character_image.orientation",
      newValue: orientation
    });
  };

  function _store_size(imageWidth, imageHeight) {
    // console.log("store size");
    var size = {
      width: imageWidth,
      height: imageHeight
    };
    helper.setObject({
      object: sheet.get(),
      path: "basics.character_image.size",
      newValue: size
    });
  };

  function _store_uploaded(boolean) {
    // console.log("store uploaded");
    helper.setObject({
      object: sheet.get(),
      path: "basics.character_image.uploaded",
      newValue: boolean
    });
  };

  function _get_uploadedState() {
    var uploaded = helper.getObject({
      object: sheet.get(),
      path: "basics.character_image.uploaded"
    });
    if (uploaded == "") {
      uploaded = false;
    };
    return uploaded;
  };

  // exposed methods
  return {
    bind: bind,
    clear: clear,
    destroy: destroy,
    render: render
  };

})();
