var characterImage = (function() {

  var renderInputTimer = null;

  function bind() {
    var characterImageInput = helper.e(".js-character-image-input");
    var characterImageClear = helper.e(".js-character-image-clear");
    var characterImageScaleInput = helper.e(".js-character-image-scale-input");
    var characterImageScaleDecrease = helper.e(".js-character-image-scale-decrease");
    var characterImageScaleIncrease = helper.e(".js-character-image-scale-increase");
    var characterImageScaleCover = helper.e(".js-character-image-scale-cover");
    var characterImageScaleContain = helper.e(".js-character-image-scale-contain");
    characterImageInput.addEventListener("change", function() {
      _handleFiles(this);
      _clearInput();
    }, false);
    characterImageClear.addEventListener("click", function() {
      _removeCharacterImage();
      render();
    }, false);
    characterImageScaleInput.addEventListener("input", function() {
      renderInputTimer = setTimeout(delayRender, 300, this);
    }, false);
    characterImageScaleDecrease.addEventListener("click", function() {
      _resize();
    }, false);
    characterImageScaleIncrease.addEventListener("click", function() {
      _resize();
    }, false);
    characterImageScaleCover.addEventListener("click", function() {
      _resize("cover");
    }, false);
    characterImageScaleContain.addEventListener("click", function() {
      _resize("contain");
    }, false);
  };

  function delayRender(element) {
    _resize();
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
          _calculateCoverSize(reader.result);
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

  function _calculateCoverSize(imageBase64) {
    var scale;
    var characterImagePreview = helper.e(".js-character-image-preview");
    var tempImage = new Image;
    var size = {
      imageWidth: 0,
      imageHeight: 0,
      containerWidth: 0,
      containerHeight: 0
    }
    var landscapeOrPortrait;
    tempImage.onload = function() {
      console.log("onload fire");
      size.imageWidth = this.width;
      size.imageHeight = this.height;
      size.containerWidth = characterImagePreview.getBoundingClientRect().width;
      size.containerHeight = characterImagePreview.getBoundingClientRect().height;
      if (size.imageWidth > size.imageHeight) {
        landscapeOrPortrait = "landscape";
      } else if (size.imageWidth == size.imageHeight) {
        landscapeOrPortrait = "portrait";
      } else {
        landscapeOrPortrait = "square";
      };
      // console.log("preview: ", "\t\tW: " + size.containerWidth, "\t\tH: " + size.containerHeight);
      // console.log("image: ", "\t\tw: " + size.imageWidth, "\t\t\th: " + size.imageHeight, "\t\t" + landscapeOrPortrait);
      // console.log((size.containerHeight / ((size.containerWidth / size.imageWidth) * size.imageHeight)) * 100);
      scale = parseInt((size.containerHeight / ((size.containerWidth / size.imageWidth) * size.imageHeight)) * 100, 10) + 1;
      _storeLoadedImage(imageBase64);
      _storeScale(scale);
      _storeCover(scale);
      _resize();
    };
    tempImage.src = imageBase64;
  };

  function _storeLoadedImage(imageBase64) {
    console.log("store fire");
    helper.setObject(sheet.getCharacter(), "basics.character_image.image", imageBase64);
    sheet.storeCharacters();
    render();
  };

  function _storeScale(scale) {
    helper.setObject(sheet.getCharacter(), "basics.character_image.scale", scale);
  };

  function _storeCover(cover) {
    helper.setObject(sheet.getCharacter(), "basics.character_image.cover", cover);
  };

  function render() {
    var characterImagePreview = helper.e(".js-character-image-preview");
    var imageBase64 = helper.getObject(sheet.getCharacter(), "basics.character_image.image");
    if (imageBase64) {
      characterImagePreview.style.backgroundImage = "url(" + imageBase64 + ")";
      _resize();
    };
  };

  function _resize(preset) {
    console.log("resize");
    var characterImagePreview = helper.e(".js-character-image-preview");
    var scale;
    var input = helper.e(".js-character-image-scale-input");
    var inputBlockElement = helper.getClosest(input, ".js-input-block");
    if (preset) {
      if (preset == "contain") {
        scale = 100;
      } else if (preset == "cover") {
        scale = helper.getObject(sheet.getCharacter(), "basics.character_image.cover");
      };
      _storeScale(scale);
    } else {
      scale = helper.getObject(sheet.getCharacter(), "basics.character_image.scale");
    };
    if (scale == "") {
      scale = 100;
    };
    characterImagePreview.style.backgroundSize = scale + "%";
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
    var input = helper.e(".js-character-image-scale-input");
    var inputBlockElement = helper.getClosest(input, ".js-input-block");
    helper.setObject(sheet.getCharacter(), "basics.character_image.image", "");
    helper.setObject(sheet.getCharacter(), "basics.character_image.scale", "");
    helper.setObject(sheet.getCharacter(), "basics.character_image.cover", "");
    sheet.storeCharacters();
    clear();
    inputBlock.render(inputBlockElement);
  };

  function _characterImageSizePreset(value) {
    var characterImagePreview = helper.e(".js-character-image-preview");
    helper.setObject(sheet.getCharacter(), "basics.character_image.scale", value);
    characterImagePreview.style.backgroundSize = value;
    sheet.storeCharacters();
  };

  // exposed methods
  return {
    bind: bind,
    clear: clear,
    destroy: destroy,
    render: render
  };

})();
