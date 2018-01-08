var onboarding = (function() {

  function _store() {
    helper.store("onboarding", true)
  };

  function render() {
    if (helper.getObject({
      object: sheet.getCharacter(),
      path: "demo"
    }) && (helper.read("onboarding") == undefined) || (helper.read("onboarding") == "false")) {

      var _render_onboardingModal = function() {
        var onboardingModal = document.createElement("div");
        onboardingModal.setAttribute("class", "m-onboarding");
        var para1 = document.createElement("p");
        para1.textContent = "Some advice before your next adventure -- awesomeSheet comes prepared with two example characters.";
        var para2 = document.createElement("p");
        para2.textContent = "Have a look around and learn what's possible. When you're ready, delete them and make your own.";
        var para3 = document.createElement("p");
        para3.textContent = "Calistria keeps all knowledge entered here safe with the power of her 'Cache-of-the-Browser' spell, so be wary not to fall foul of her trickery by clearing the cache and losing your heros.";
        var para4 = document.createElement("p");
        para4.textContent = "Cast 'Bigby's Export' every now and then to backup your heros.";

        var svg1 = document.createElement("svg");
        svg1.setAttribute("version", "1.1");
        svg1.setAttribute("baseProfile", "full");
        svg1.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svg1.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svg1.setAttribute("width", "500");
        svg1.setAttribute("height", "100");
        var rect1 = document.createElement("rect");
        rect1.setAttribute("width", "100%");
        rect1.setAttribute("height", "100%");
        rect1.setAttribute("fill", "red");

        svg1.appendChild(rect1);
        onboardingModal.appendChild(svg1);
        onboardingModal.appendChild(para1);
        onboardingModal.appendChild(para2);
        onboardingModal.appendChild(para3);
        onboardingModal.appendChild(para4);
        return onboardingModal;
      };

      var modalContent = _render_onboardingModal();

      modal.render({
        heading: "Hail fellow well met",
        content: modalContent,
        action: _store,
        actionText: "Roll initiative!",
        size: "small"
      });
    };
  };

  // exposed methods
  return {
    render: render
  };

})();
