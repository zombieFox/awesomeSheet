var onboarding = (function() {

  var onboardingState = false;

  function _get_onboardingState() {
    return onboardingState;
  };

  function _resetState() {
    onboardingState = false;
  };

  function _store() {
    helper.store("onboarding", true)
  };

  function render() {
    if (helper.getObject({
        object: sheet.get(),
        path: "awesomeSheet.demo"
      }) && (helper.read("onboarding") == undefined) || (helper.read("onboarding") == "false")) {

      var _render_onboardingModal = function() {
        var onboardingModal = document.createElement("div");
        onboardingModal.setAttribute("class", "m-onboarding");

        var para1 = document.createElement("p");
        var para1Text1 = document.createElement("span");
        para1Text1.textContent = "Some advice before the next adventure -- ";
        var strong1 = document.createElement("strong");
        strong1.setAttribute("class", "m-onboarding-bold");
        strong1.textContent = "awesomeSheet comes prepared with two example Heros. ";
        var para1Text2 = document.createElement("span");
        para1Text2.textContent = "Have a look around and learn what's possible. When you're ready, delete them and make your own.";
        para1.appendChild(para1Text1);
        para1.appendChild(strong1);
        para1.appendChild(para1Text2);

        var para2 = document.createElement("p");
        para2.textContent = "Calistria keeps all knowledge entered here safe with the power of her \"Cache-of-the-Browser\" spell, so be wary not to fall foul of her trickery by clearing the cache and losing your Heros.";

        var strong2 = document.createElement("strong");
        strong2.setAttribute("class", "m-onboarding-bold");
        strong2.textContent = "Export";
        var para3 = document.createElement("p");
        var para3Text1 = document.createElement("span");
        var para3Text2 = document.createElement("span");
        para3Text1.textContent = "Be sure to cast \"Bigby's ";
        para3Text2.textContent = "\" every now and then to backup your Heros.";
        para3.appendChild(para3Text1);
        para3.appendChild(strong2);
        para3.appendChild(para3Text2);

        onboardingModal.appendChild(para1);
        onboardingModal.appendChild(para2);
        onboardingModal.appendChild(para3);
        return onboardingModal;
      };

      var modalContent = _render_onboardingModal();
      var action = function() {
        _store();
        _resetState();
      };

      modal.render({
        heading: "Hail fellow well met.",
        content: modalContent,
        action: action,
        actionText: "Roll initiative!",
        size: "small"
      });
      onboardingState = true;
      page.update();
    };
  };

  // exposed methods
  return {
    render: render,
    state: _get_onboardingState
  };

})();
