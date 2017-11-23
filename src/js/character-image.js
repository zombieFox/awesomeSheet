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
      _resizeCharacterImage();
    }, false);
    characterImageScaleIncrease.addEventListener("click", function() {
      _resizeCharacterImage();
    }, false);
    characterImageScaleCover.addEventListener("click", function() {
      _characterImageSizePreset("cover");
    }, false);
    characterImageScaleContain.addEventListener("click", function() {
      _characterImageSizePreset("contain");
    }, false);
  };

  function delayRender(element) {
    _resizeCharacterImage();
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
          helper.setObject(sheet.getCharacter(), "basics.character_image.image", reader.result);
          sheet.storeCharacters();
          render();
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

  function render() {
    var characterImagePreview = helper.e(".js-character-image-preview");
    var imageBase64 = helper.getObject(sheet.getCharacter(), "basics.character_image.image");
    if (imageBase64) {
      characterImagePreview.style.backgroundImage = "url(" + imageBase64 + ")";
    };
    _resizeCharacterImage();
  };

  function _resizeCharacterImage() {
    _calculateCoverSize();
    var characterImagePreview = helper.e(".js-character-image-preview");
    var value = helper.getObject(sheet.getCharacter(), "basics.character_image.scale");
    if (value && !isNaN(value)) {
      characterImagePreview.style.backgroundSize = value + "%";
    } else if (value && typeof value == "string" && value != "") {
      characterImagePreview.style.backgroundSize = value;
    } else {
      characterImagePreview.style.backgroundSize = "cover";
    };
  };

  function _calculateCoverSize() {
    var imageBase64 = helper.getObject(sheet.getCharacter(), "basics.character_image.image");
    var characterImagePreview = helper.e(".js-character-image-preview");
    var tempImage = new Image;
    var size = {
      w: 0,
      h: 0,
      bigW: 0,
      bigH: 0
    }
    var landscapeOrPortrait;
    tempImage.onload = function() {
      size.w = this.width;
      size.h = this.height;
      size.bigW = characterImagePreview.getBoundingClientRect().width;
      size.bigH = characterImagePreview.getBoundingClientRect().height;
      if (size.w > size.h) {
        landscapeOrPortrait = "landscape";
      } else if (size.w == size.h) {
        landscapeOrPortrait = "portrait";
      } else {
        landscapeOrPortrait = "square";
      };
      console.log("preview: ", "\t\tW: " + size.bigW, "\t\tH: " + size.bigH);
      console.log("image: ", "\t\tw: " + size.w, "\t\t\th: " + size.h, "\t\t" + landscapeOrPortrait);
      console.log((size.bigH / ((size.bigW / size.w) * size.h)) * 100);
    };
    tempImage.src = imageBase64;
  };

  // exposed methods
  return {
    bind: bind,
    clear: clear,
    destroy: destroy,
    render: render
  };

})();
