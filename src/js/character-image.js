var characterImage = (function() {

  var renderInputTimer = null;

  function bind() {
    var characterImageInput = helper.e(".js-character-image-input");
    var characterImageClear = helper.e(".js-character-image-clear");

    var characterImageScaleInput = helper.e(".js-character-image-scale-input");
    var characterImageScaleDecrease = helper.e(".js-character-image-scale-decrease");
    var characterImageScaleIncrease = helper.e(".js-character-image-scale-increase");

    var characterImagePositionXInput = helper.e(".js-character-image-position-x-input");
    var characterImagePositionXDecrease = helper.e(".js-character-image-position-x-decrease");
    var characterImagePositionXIncrease = helper.e(".js-character-image-position-x-increase");

    var characterImagePositionYInput = helper.e(".js-character-image-position-y-input");
    var characterImagePositionYDecrease = helper.e(".js-character-image-position-y-decrease");
    var characterImagePositionYIncrease = helper.e(".js-character-image-position-y-increase");

    var characterImageScaleCover = helper.e(".js-character-image-scale-cover");
    var characterImageScaleContain = helper.e(".js-character-image-scale-contain");

    characterImageInput.addEventListener("change", function() {
      _handleFiles(this);
    }, false);
    characterImageClear.addEventListener("click", function() {
      _removeCharacterImage();
    }, false);

    characterImageScaleInput.addEventListener("input", function() {
      renderInputTimer = setTimeout(_delayResize, 300, this);
    }, false);
    characterImageScaleDecrease.addEventListener("click", function() {
      _resize();
    }, false);
    characterImageScaleIncrease.addEventListener("click", function() {
      _resize();
    }, false);

    characterImagePositionXInput.addEventListener("input", function() {
      renderInputTimer = setTimeout(_delayPreposition, 300, this);
    }, false);
    characterImagePositionXDecrease.addEventListener("click", function() {
      _resize();
    }, false);
    characterImagePositionXIncrease.addEventListener("click", function() {
      _resize();
    }, false);

    characterImagePositionYInput.addEventListener("input", function() {
      renderInputTimer = setTimeout(_delayPreposition, 300, this);
    }, false);
    characterImagePositionYDecrease.addEventListener("click", function() {
      _resize();
    }, false);
    characterImagePositionYIncrease.addEventListener("click", function() {
      _resize();
    }, false);

    characterImageScaleCover.addEventListener("click", function() {
      _resize("cover", "center");
      _update_all_input();
      sheet.storeCharacters();
    }, false);
    characterImageScaleContain.addEventListener("click", function() {
      _resize("contain", "center");
      _update_all_input();
      sheet.storeCharacters();
    }, false);
  };

  function _delayResize() {
    _resize();
  };

  function _delayPreposition() {
    _reposition();
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
          _store_color(helper.getAverageColor(reader.result));
          _create_image();
          _calculateSizes();
          _resize();
          _update_all_input();
          _clearInput();
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

  function _calculateSizes() {
    var imageBase64 = helper.getObject(sheet.getCharacter(), "basics.character_image.image");
    var characterImagePreview = helper.e(".js-character-image-preview");
    var characterImage = helper.e(".js-character-image");
    var scale;
    var cover;
    var contain;
    var orientation;
    var size = {
      imageWidth: 0,
      imageHeight: 0,
      containerWidth: 0,
      containerHeight: 0
    }
    size.imageWidth = characterImage.width;
    size.imageHeight = characterImage.height;
    size.containerWidth = characterImagePreview.getBoundingClientRect().width;
    size.containerHeight = characterImagePreview.getBoundingClientRect().height;
    if (size.imageWidth > size.imageHeight) {
      orientation = "landscape";
      cover = parseInt((size.containerHeight / ((size.containerWidth / size.imageWidth) * size.imageHeight)) * 100, 10) + 1;
      contain = 100;
    } else if (size.imageWidth < size.imageHeight) {
      orientation = "portrait";
      cover = 100;
      contain = parseInt((size.containerHeight / ((size.containerWidth / size.imageWidth) * size.imageHeight)) * 100, 10) + 1;
    } else {
      orientation = "square";
      cover = 100;
      contain = 100;
    };
    scale = cover;
    // console.log(size);
    // console.log("scale = ", scale, "cover = ", cover, "contain = ", contain, "orientation = ", orientation);
    _store_orientation(orientation);
    _store_cover(cover);
    _store_contain(contain);
    _store_scale(scale);
    _store_position(0, 0);
  };

  function _create_image() {
    var characterImagePreview = helper.e(".js-character-image-preview");
    var color = helper.getObject(sheet.getCharacter(), "basics.character_image.color");
    var imageBase64 = helper.getObject(sheet.getCharacter(), "basics.character_image.image");
    if (imageBase64) {
      var image = new Image;
      image.setAttribute("class", "m-character-image js-character-image");
      image.src = imageBase64;
      characterImagePreview.style.backgroundColor = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
      characterImagePreview.appendChild(image);
    };
  };

  function render() {
    var characterImagePreview = helper.e(".js-character-image-preview");
    var color = helper.getObject(sheet.getCharacter(), "basics.character_image.color");
    var imageBase64 = helper.getObject(sheet.getCharacter(), "basics.character_image.image");
    if (imageBase64) {
      var image = new Image;
      image.setAttribute("class", "m-character-image js-character-image");
      image.src = imageBase64;
      characterImagePreview.appendChild(image);
      characterImagePreview.style.backgroundColor = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
      _resize();
    };
  };

  function _store_position(axisX, axisY) {
    var position = {
      x: axisX,
      y: axisY
    };
    helper.setObject(sheet.getCharacter(), "basics.character_image.position", position);
  };

  function _store_color(color) {
    helper.setObject(sheet.getCharacter(), "basics.character_image.color", color);
  };

  function _store_image(imageBase64) {
    helper.setObject(sheet.getCharacter(), "basics.character_image.image", imageBase64);
  };

  function _store_scale(scale) {
    helper.setObject(sheet.getCharacter(), "basics.character_image.scale", scale);
  };

  function _store_cover(cover) {
    helper.setObject(sheet.getCharacter(), "basics.character_image.cover", cover);
  };

  function _store_contain(contain) {
    helper.setObject(sheet.getCharacter(), "basics.character_image.contain", contain);
  };

  function _store_orientation(orientation) {
    helper.setObject(sheet.getCharacter(), "basics.character_image.orientation", orientation);
  };

  function _resize(presetSize, presetPosition) {
    var imageBase64 = helper.getObject(sheet.getCharacter(), "basics.character_image.image");
    var characterImage = helper.e(".js-character-image");
    var scale;
    var x;
    var y;
    if (imageBase64) {
      if (presetSize) {
        if (presetSize == "contain") {
          scale = helper.getObject(sheet.getCharacter(), "basics.character_image.contain");
        } else if (presetSize == "cover") {
          scale = helper.getObject(sheet.getCharacter(), "basics.character_image.cover");
        };
        _store_scale(scale);
      } else {
        scale = helper.getObject(sheet.getCharacter(), "basics.character_image.scale");
      };
      if (scale == "") {
        scale = helper.getObject(sheet.getCharacter(), "basics.character_image.cover");
      };
      if (presetPosition) {
        if (presetPosition == "center") {
          x = 0;
          y = 0;
        };
        _store_position(x, y);
      } else {
        x = helper.getObject(sheet.getCharacter(), "basics.character_image.position.x");
        y = helper.getObject(sheet.getCharacter(), "basics.character_image.position.y");
      };
      if (x == "" && x != 0) {
        console.log("x 50");
        x = -50;
      };
      if (y == "" && y != 0) {
        console.log("y 50");
        y = -50;
      };
      // characterImage.style.transform = "scale(" + scale + ") translate(" + x + "%, " + y + "%)";
      characterImage.style.width = scale + "%";
      characterImage.style.left = x + "%";
      characterImage.style.top = y + "%";
    };
  };

  function _update_all_input() {
    _update_input(helper.e(".js-character-image-scale-input"));
    _update_input(helper.e(".js-character-image-position-x-input"));
    _update_input(helper.e(".js-character-image-position-y-input"));
  };

  function _update_input(input) {
    var inputBlockElement = helper.getClosest(input, ".js-input-block");
    inputBlock.render(inputBlockElement);
  };

  function _clearInput(input) {
    var characterImageInput = helper.e(".js-character-image-input");
    characterImageInput.value = "";
  };

  function clear() {
    var characterImagePreview = helper.e(".js-character-image-preview");
    while (characterImagePreview.lastChild) {
      characterImagePreview.removeChild(characterImagePreview.lastChild);
    };
  };

  function destroy() {
    var object = {
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
      scale: ""
    };
    helper.setObject(sheet.getCharacter(), "basics.character_image", object);
    sheet.storeCharacters();
    _update_all_input();
    clear();
  };

  // exposed methods
  return {
    bind: bind,
    clear: clear,
    destroy: destroy,
    render: render
  };

})();
