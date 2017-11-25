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
      _reposition();
    }, false);
    characterImagePositionXIncrease.addEventListener("click", function() {
      _reposition();
    }, false);

    characterImagePositionYInput.addEventListener("input", function() {
      renderInputTimer = setTimeout(_delayPreposition, 300, this);
    }, false);
    characterImagePositionYDecrease.addEventListener("click", function() {
      _reposition();
    }, false);
    characterImagePositionYIncrease.addEventListener("click", function() {
      _reposition();
    }, false);

    characterImageScaleCover.addEventListener("click", function() {
      _resize("cover");
      _reposition("center");
      _update_all_input();
      sheet.storeCharacters();
    }, false);
    characterImageScaleContain.addEventListener("click", function() {
      _resize("contain");
      _reposition("center");
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
          _calculateSizes(reader.result);
          _clearInput();
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

  function _calculateSizes(imageBase64) {
    var scale;
    var cover;
    var contain;
    var orientation;
    var characterImagePreview = helper.e(".js-character-image-preview");
    var tempImage = new Image;
    var size = {
      imageWidth: 0,
      imageHeight: 0,
      containerWidth: 0,
      containerHeight: 0
    }
    tempImage.onload = function() {
      size.imageWidth = this.width;
      size.imageHeight = this.height;
      size.containerWidth = characterImagePreview.getBoundingClientRect().width;
      size.containerHeight = characterImagePreview.getBoundingClientRect().height;
      if (size.imageWidth > size.imageHeight) {
        cover = parseInt((size.containerHeight / ((size.containerWidth / size.imageWidth) * size.imageHeight)) * 100, 10) + 1;
        contain = 100;
        orientation = "landscape";
      } else if (size.imageWidth < size.imageHeight) {
        cover = 100;
        contain = parseInt((size.containerHeight / ((size.containerWidth / size.imageWidth) * size.imageHeight)) * 100, 10) + 1;
        orientation = "portrait";
      } else {
        cover = 100;
        contain = 100;
        orientation = "square";
      };
      scale = cover;
      // console.log("preview: ", "\t\tW: " + size.containerWidth, "\t\tH: " + size.containerHeight);
      // console.log((size.containerHeight / ((size.containerWidth / size.imageWidth) * size.imageHeight)) * 100);
      _storeImage(imageBase64);
      _storeScale(scale);
      _storeCover(cover);
      _storeContain(contain);
      _storeOrientation(orientation);
      _storeColor(helper.getAverageColor(imageBase64));
      _storePosition(50, 50);
      render();
      _resize();
      _reposition();
      _update_all_input();
      sheet.storeCharacters();
    };
    tempImage.src = imageBase64;
  };

  function _storePosition(axisX, axisY) {
    var position = {
      x: axisX,
      y: axisY
    };
    helper.setObject(sheet.getCharacter(), "basics.character_image.position", position);
  };

  function _storeColor(color) {
    helper.setObject(sheet.getCharacter(), "basics.character_image.color", color);
  };

  function _storeImage(imageBase64) {
    helper.setObject(sheet.getCharacter(), "basics.character_image.image", imageBase64);
  };

  function _storeScale(scale) {
    helper.setObject(sheet.getCharacter(), "basics.character_image.scale", scale);
  };

  function _storeCover(cover) {
    helper.setObject(sheet.getCharacter(), "basics.character_image.cover", cover);
  };

  function _storeContain(contain) {
    helper.setObject(sheet.getCharacter(), "basics.character_image.contain", contain);
  };

  function _storeOrientation(orientation) {
    helper.setObject(sheet.getCharacter(), "basics.character_image.orientation", orientation);
  };

  function render() {
    var characterImagePreview = helper.e(".js-character-image-preview");
    var imageBase64 = helper.getObject(sheet.getCharacter(), "basics.character_image.image");
    var scale = helper.getObject(sheet.getCharacter(), "basics.character_image.scale");
    var color = helper.getObject(sheet.getCharacter(), "basics.character_image.color");
    var position = helper.getObject(sheet.getCharacter(), "basics.character_image.position");
    if (imageBase64) {
      characterImagePreview.style.backgroundImage = "url(" + imageBase64 + ")";
      characterImagePreview.style.backgroundColor = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
      characterImagePreview.style.backgroundPosition = position.x + "% " + position.y + "%";
      characterImagePreview.style.backgroundSize = scale + "%";
    };
  };

  function _reposition(preset) {
    var characterImagePreview = helper.e(".js-character-image-preview");
    var x;
    var y;
    if (preset) {
      if (preset == "center") {
        x = 50;
        y = 50;
      };
      _storePosition(x, y);
    } else {
      x = helper.getObject(sheet.getCharacter(), "basics.character_image.position.x");
      y = helper.getObject(sheet.getCharacter(), "basics.character_image.position.y");
    };
    if (x == "" && x != 0) {
      console.log("x 50");
      x = 50;
    };
    if (y == "" && y != 0) {
      console.log("y 50");
      y = 50;
    };
    characterImagePreview.style.backgroundPosition = x + "% " + y + "%";
  };

  function _resize(preset) {
    var characterImagePreview = helper.e(".js-character-image-preview");
    var scale;
    if (preset) {
      if (preset == "contain") {
        scale = helper.getObject(sheet.getCharacter(), "basics.character_image.contain");
      } else if (preset == "cover") {
        scale = helper.getObject(sheet.getCharacter(), "basics.character_image.cover");
      };
      _storeScale(scale);
    } else {
      scale = helper.getObject(sheet.getCharacter(), "basics.character_image.scale");
    };
    if (scale == "") {
      scale = helper.getObject(sheet.getCharacter(), "basics.character_image.cover");
    };
    characterImagePreview.style.backgroundSize = scale + "%";
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
    characterImagePreview.removeAttribute("style");
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
