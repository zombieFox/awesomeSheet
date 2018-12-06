var characterImage = (function() {

  var _timer_background = null;

  function bind() {
    var imageInput = helper.e(".js-image-input");
    var imageClear = helper.e(".js-image-clear");
    var imageScaleCover = helper.e(".js-image-scale-cover");
    var imageScaleContain = helper.e(".js-image-scale-contain");
    var imageScaleCenter = helper.e(".js-image-scale-center");
    var imageScaleTop = helper.e(".js-image-scale-top");
    var imageScaleBottom = helper.e(".js-image-scale-bottom");
    var imageScaleLeft = helper.e(".js-image-scale-left");
    var imageScaleRight = helper.e(".js-image-scale-right");
    var imageScaleInput = helper.e(".js-image-scale-input");
    var imageScaleAverage = helper.e(".js-image-background-average");
    var imageScaleBlack = helper.e(".js-image-background-black");
    var imageScaleWhite = helper.e(".js-image-background-white");

    imageInput.addEventListener("change", function() {
      _handleFiles(this);
    }, false);
    imageClear.addEventListener("click", function() {
      _removeCharacterImage();
    }, false);
    imageScaleCover.addEventListener("click", function() {
      _render_size("cover");
      _render_position("center");
      _update_all_inputRangeBlock();
      sheet.store();
    }, false);
    imageScaleContain.addEventListener("click", function() {
      _render_size("contain");
      _render_position("center");
      _update_all_inputRangeBlock();
      sheet.store();
    }, false);
    imageScaleCenter.addEventListener("click", function() {
      _render_position("center");
      _update_all_inputRangeBlock();
      sheet.store();
    }, false);
    imageScaleTop.addEventListener("click", function() {
      _render_position("top");
      _update_all_inputRangeBlock();
      sheet.store();
    }, false);
    imageScaleBottom.addEventListener("click", function() {
      _render_position("bottom");
      _update_all_inputRangeBlock();
      sheet.store();
    }, false);
    imageScaleLeft.addEventListener("click", function() {
      _render_position("left");
      _update_all_inputRangeBlock();
      sheet.store();
    }, false);
    imageScaleRight.addEventListener("click", function() {
      _render_position("right");
      _update_all_inputRangeBlock();
      sheet.store();
    }, false);
    imageScaleInput.addEventListener("input", function() {
      _render_size();
      _calculate_positionXY();
      _render_position();
    }, false);
    imageScaleAverage.addEventListener("click", function() {
      _timer_background = setTimeout(_delay_bakcground, 350, this);
    }, false);
    imageScaleBlack.addEventListener("click", function() {
      _timer_background = setTimeout(_delay_bakcground, 350, this);
    }, false);
    imageScaleWhite.addEventListener("click", function() {
      _timer_background = setTimeout(_delay_bakcground, 350, this);
    }, false);
  };

  function _bind_image() {
    var body = helper.e("body");
    var imagePreview = helper.e(".js-image-preview");
    var image = null;
    var cursorX = 0;
    var cursorY = 0;
    var imageX = 0;
    var imageY = 0;
    var dragStart = function(x, y) {
      // console.log("dragStart");
      image = helper.e(".js-image");
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
    imagePreview.addEventListener("mousedown", function(event) {
      dragStart(event.clientX, event.clientY);
    });
    body.addEventListener("mousemove", function(event) {
      dragging(event.clientX, event.clientY);
    });
    body.addEventListener("mouseup", function(event) {
      dragStop();
    });
    imagePreview.addEventListener("touchstart", function(event) {
      dragStart(event.touches[0].clientX, event.touches[0].clientY);
    });
    imagePreview.addEventListener("touchmove", function(event) {
      dragging(event.touches[0].clientX, event.touches[0].clientY);
    });
    imagePreview.addEventListener("touchend", function(event) {
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
      var image = helper.e(".js-image");
      var x = image.offsetLeft;
      var y = image.offsetTop;
      _store_position(_calculate_positionX(x), _calculate_positionY(y));
    };
  };

  function _calculate_positionX(x) {
    var imagePreview = helper.e(".js-image-preview");
    var image = helper.e(".js-image");
    if (x < -(image.width / 2) + 40) {
      // console.log("too far left");
      x = -(image.width / 2) + 40;
    } else if (x > ((imagePreview.getBoundingClientRect().width) + (image.width / 2)) - 40) {
      // console.log("too far right");
      x = ((imagePreview.getBoundingClientRect().width) + (image.width / 2)) - 40;
    };
    // convert x and y into percentages
    x = parseFloat((x / imagePreview.getBoundingClientRect().width) * 100).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    return x;
  };

  function _calculate_positionY(y) {
    var imagePreview = helper.e(".js-image-preview");
    var image = helper.e(".js-image");
    if (y < -(image.height / 2) + 40) {
      // console.log("too far top");
      y = -(image.height / 2) + 40;
    } else if (y > ((imagePreview.getBoundingClientRect().height) + (image.height / 2)) - 40) {
      // console.log("too far bottom");
      y = ((imagePreview.getBoundingClientRect().height) + (image.height / 2)) - 40;
    };
    y = parseFloat((y / imagePreview.getBoundingClientRect().height) * 100).toLocaleString(undefined, {
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
      path: "basics.image.size"
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
    var imageObject = helper.getObject({
      object: sheet.get(),
      path: "basics.image"
    });
    var imagePreview = helper.e(".js-image-preview");
    var containerWidth = imagePreview.getBoundingClientRect().width;
    var containerHeight = imagePreview.getBoundingClientRect().height;
    var scale;
    // cover = parseInt((containerHeight / ((containerWidth / imageObject.size.width) * imageObject.size.width)) * 100, 10);
    // contain = parseInt((containerHeight / ((containerWidth / imageObject.size.width) * imageObject.size.width)) * 100, 10);
    if (imageObject.orientation == "landscape") {
      scale = parseInt((containerHeight / ((containerWidth / imageObject.size.width) * imageObject.size.width)) * 100, 10);
    } else if (imageObject.orientation == "portrait" || imageObject.orientation == "square") {
      scale = 100;
    };
    _store_scale(scale);
  };

  function _update_all_inputRangeBlock() {
    _update_inputRangeBlock(helper.e(".js-image-scale-input"));
  };

  function _update_inputRangeBlock(input) {
    var inputBlockElement = helper.getClosest(input, ".js-input-range-block");
    inputRangeBlock.render(inputBlockElement);
  };

  function _update_all_radio() {
    _update_radio(helper.e(".js-image-background-average"));
    _update_radio(helper.e(".js-image-background-black"));
    _update_radio(helper.e(".js-image-background-white"));
  };

  function _update_radio(radio) {
    var radioBlockElement = helper.getClosest(radio, ".js-radio-block");
    radioBlock.render(radioBlockElement);
  };

  function _clear_inputUpload(input) {
    var characterImageInput = helper.e(".js-image-input");
    characterImageInput.value = "";
  };

  function clear() {
    var characterImageBackground = helper.e(".js-image-background");
    var characterImage = helper.e(".js-image");
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
      data: "",
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
      path: "basics.image",
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
      var characterImagePreview = helper.e(".js-image-preview");
      var characterImageObject = helper.getObject({
        object: sheet.get(),
        path: "basics.image"
      });
      var image = new Image;
      image.setAttribute("class", "m-character-image js-image");
      image.src = characterImageObject.data;
      characterImagePreview.appendChild(image);
      _bind_image();
    };
  };

  function _render_background() {
    if (_get_uploadedState()) {
      // console.log("render background");
      var characterImageObject = helper.getObject({
        object: sheet.get(),
        path: "basics.image"
      });
      var characterImageBackground = helper.e(".js-image-background");
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
        path: "basics.image"
      });
      var characterImagePreview = helper.e(".js-image-preview");
      var characterImage = helper.e(".js-image");
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
        path: "basics.image"
      });
      var characterImage = helper.e(".js-image");
      var characterImagePreview = helper.e(".js-image-preview");
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
      path: "basics.image.position",
      newValue: position
    });
  };

  function _store_background(background) {
    // console.log("store background");
    helper.setObject({
      object: sheet.get(),
      path: "basics.image.background",
      newValue: background
    });
  };

  function _store_color(color) {
    // console.log("store color");
    helper.setObject({
      object: sheet.get(),
      path: "basics.image.color",
      newValue: color
    });
  };

  function _store_image(imageBase64) {
    // console.log("store image");
    helper.setObject({
      object: sheet.get(),
      path: "basics.image.data",
      newValue: imageBase64
    });
  };

  function _store_scale(scale) {
    // console.log("store scale");
    helper.setObject({
      object: sheet.get(),
      path: "basics.image.scale",
      newValue: scale
    });
  };

  function _store_orientation(orientation) {
    // console.log("store orientation");
    helper.setObject({
      object: sheet.get(),
      path: "basics.image.orientation",
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
      path: "basics.image.size",
      newValue: size
    });
  };

  function _store_uploaded(boolean) {
    // console.log("store uploaded");
    helper.setObject({
      object: sheet.get(),
      path: "basics.image.uploaded",
      newValue: boolean
    });
  };

  function _get_uploadedState() {
    var uploaded = helper.getObject({
      object: sheet.get(),
      path: "basics.image.uploaded"
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
