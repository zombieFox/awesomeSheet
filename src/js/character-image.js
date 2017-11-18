var characterImage = (function() {

  function render() {
    var characterImage = helper.e(".js-character-image");
    var imageBase64;
    if (helper.getObject(sheet.getCharacter(), "basics.profile_image")) {
      imageBase64 = helper.getObject(sheet.getCharacter(), "basics.profile_image");
      // console.log(helper.getObject(sheet.getCharacter(), "basics.profile_image"));
      characterImage.style.backgroundImage = "url(" + imageBase64 + ")";
    } else {
      console.log("no image found in character data");
    };
  };

  function bind() {
    var characterImageInput = helper.e(".js-character-image-input");
    characterImageInput.addEventListener("change", function() {
      _handleFiles(this);
    }, false);
  };

  function _handleFiles(element) {
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
      // console.log(reader.result);
      helper.setObject(sheet.getCharacter(), "basics.profile_image", reader.result);
      sheet.storeCharacters();
      render();
    }
    reader.readAsDataURL(file);
  };

  // exposed methods
  return {
    bind: bind,
    render: render
  };

})();
