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
    if ((helper.read("onboarding") == undefined) || (helper.read("onboarding") == "false")) {

      var _render_onboardingModal = function() {
        var onboardingModal = document.createElement("div");
        onboardingModal.setAttribute("class", "m-onboarding");

        var para1 = document.createElement("p");
        para1.innerHTML = "Some advice before the next adventure -- <strong>awesomeSheet</strong> comes prepared with two Demo Characters found in the <strong>Character Select</strong> menu.";

        var para2 = document.createElement("p");
        para2.innerHTML = "This webapp saves all information in the local cache. Be sure to <strong>Export and backup</strong> every now and then.";

        onboardingModal.appendChild(para1);
        onboardingModal.appendChild(para2);

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
