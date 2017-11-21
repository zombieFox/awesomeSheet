var characterImage = (function() {

  var renderInputTimer = null;

  function bind() {
    var characterImageInput = helper.e(".js-character-image-input");
    var characterImageClear = helper.e(".js-character-image-clear");
    var characterImageScaleInput = helper.e(".js-character-image-scale-input");
    var characterImageScaleDecrease = helper.e(".js-character-image-scale-decrease");
    var characterImageScaleIncrease = helper.e(".js-character-image-scale-increase");
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
      render();
    }, false);
    characterImageScaleIncrease.addEventListener("click", function() {
      render();
    }, false);
  };

  function delayRender(element) {
    render();
  };

  function _removeCharacterImage() {
    if (helper.getObject(sheet.getCharacter(), "basics.profile_image.image") != "") {
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
          helper.setObject(sheet.getCharacter(), "basics.profile_image.image", reader.result);
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
    var characterImage = helper.e(".js-character-image");
    characterImage.removeAttribute("style");
    helper.removeClass(characterImage, "m-character-image-preview-empty");
  };

  function destroy() {
    helper.setObject(sheet.getCharacter(), "basics.profile_image.image", "");
    sheet.storeCharacters();
    clear();
  };

  function render() {
    var characterImage = helper.e(".js-character-image");
    var imageBase64;
    if (helper.getObject(sheet.getCharacter(), "basics.profile_image.image")) {
      imageBase64 = helper.getObject(sheet.getCharacter(), "basics.profile_image.image");
      characterImage.style.backgroundImage = "url(" + imageBase64 + ")";
      helper.addClass(characterImage, "m-character-image-preview-empty");
    };
    if (helper.getObject(sheet.getCharacter(), "basics.profile_image.scale")) {
      characterImage.style.backgroundSize = helper.getObject(sheet.getCharacter(), "basics.profile_image.scale") + "%";
    } else {
      characterImage.style.backgroundSize = "cover";
    };
  };

  // exposed methods
  return {
    bind: bind,
    clear: clear,
    destroy: destroy,
    render: render
  };

})();
