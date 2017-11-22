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

  function _resizeCharacterImage() {
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
    // _getScalePercentage();
  };


  // function _getScalePercentage() {
  //
  //   var backgroundImage = new Image();
  //   var characterImagePreview = helper.e(".js-character-image-preview");
  //   backgroundImage.src = characterImagePreview.style.backgroundImage.replace(/"/g, "").replace(/url\(|\)$/ig, "");
  //
  //   backgroundImage.onload = function() {
  //     var width = this.width;
  //     var height = this.height;
  //     console.log(width);
  //     console.log(height);
  //
  //     // var object = characterImagePreview;
  //
  //     /* Step 1 - Get the ratio of the div + the image */
  //     var imageRatio = width / height;
  //     var coverRatio = characterImagePreview.getBoundingClientRect().width / characterImagePreview.getBoundingClientRect().height;
  //
  //     /* Step 2 - Work out which ratio is greater */
  //     if (imageRatio >= coverRatio) {
  //       /* The Height is our constant */
  //       var coverHeight = characterImagePreview.getBoundingClientRect().height;
  //       var scale = (coverHeight / height);
  //       var coverWidth = width * scale;
  //     } else {
  //       /* The Width is our constant */
  //       var coverWidth = characterImagePreview.getBoundingClientRect().width;
  //       var scale = (coverWidth / width);
  //       var coverHeight = height * scale;
  //     }
  //     var cover = coverWidth + 'px ' + coverHeight + 'px';
  //     console.log('scale: ' + scale + ', width: ' + coverWidth + ', height: ' + coverHeight + ', cover property: ' + cover);
  //   };
  //
  // };

  // exposed methods
  return {
    bind: bind,
    clear: clear,
    destroy: destroy,
    render: render
  };

})();
