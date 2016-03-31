var checkBlock = (function() {

  function _store(element) {
    var totalBlock = helper.getClosest(element, ".input-total-block");
    var checkbox = totalBlock.querySelector(".input-check");
    var path = checkbox.dataset.path;
    helper.updateObject(sheet.getCharacter(), path, checkbox.checked);
    sheet.storeCharacters();
  };

  function toggle(element) {
    var totalBlock = helper.getClosest(element, ".input-total-block");
    var toggleState = totalBlock.dataset.classSkill;
    var icon = totalBlock.querySelector(".class-skill-icon");
    if (toggleState == "true") {
      totalBlock.dataset.classSkill = "false";
      helper.addClass(icon, "icon-check-box-unchecked");
      helper.removeClass(icon, "icon-check-box-checked");
    } else {
      totalBlock.dataset.classSkill = "true";
      helper.addClass(icon, "icon-check-box-checked");
      helper.removeClass(icon, "icon-check-box-unchecked");
    };
  };

  function bind(array) {
    for (var i = 0; i < array.length; i++) {
      var inputCheck = array[i].querySelector(".input-check");
      if (inputCheck) {
        inputCheck.addEventListener("click", function() {
          toggle(this);
          _store(this);
          totalBlock.render();
        }, false);
      };
    };
  };

  function render() {
    var all_inputCheck = helper.eA(".input-check");
    for (var i = 0; i < all_inputCheck.length; i++) {
      var path = all_inputCheck[i].dataset.path;
      var status = helper.getObject(sheet.getCharacter(), path);
      var totalBlock = helper.getClosest(all_inputCheck[i], ".input-total-block");
      var icon = totalBlock.querySelector(".class-skill-icon");
      all_inputCheck[i].checked = status;
      totalBlock.dataset.classSkill = status;
      if (status == true) {
        helper.addClass(icon, "icon-check-box-checked");
        helper.removeClass(icon, "icon-check-box-unchecked");
      } else {
        helper.addClass(icon, "icon-check-box-unchecked");
        helper.removeClass(icon, "icon-check-box-checked");
      };
    };
  };

  // exposed methods
  return {
    render: render,
    bind: bind
  };

})();