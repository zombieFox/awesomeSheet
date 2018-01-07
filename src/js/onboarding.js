var onboarding = (function() {

  function store() {
    helper.store("allCharacters", JSON.stringify(allCharacters))
  };

  function render() {
    if (helper.getObject({
      object: sheet.getCharacter(),
      path: "demo"
    })) {
      console.log("onboarding");
      modal.render({
        heading: "Modal",
        content: "Body",
        action: null,
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
