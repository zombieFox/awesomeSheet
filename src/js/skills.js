var skills = (function() {

  var renderTimer = null;

  function bind() {
    var skillsRanksSpentIncludeCustom = helper.e(".js-skills-ranks-include-custom");
    var all_inputBlockFieldRanks = helper.eA(".js-input-block-field-ranks");

    skillsRanksSpentIncludeCustom.addEventListener("change", function() {
      renderTimer = setTimeout(function() {
        render();
        textBlock.render();
      }, 350, this);
    }, false);

    for (var i = 0; i < all_inputBlockFieldRanks.length; i++) {
      all_inputBlockFieldRanks[i].addEventListener("input", function() {
        clearTimeout(renderTimer);
        renderTimer = setTimeout(function() {
          render();
          textBlock.render();
        }, 350, this);
      }, false);
    };
  };

  function render() {
    var includeCustom = helper.getObject({
      object: sheet.get(),
      path: "skills.ranks.include_custom"
    });
    var all_skills = helper.getObject({
      object: sheet.get(),
      path: "skills.default"
    });
    var all_customSkills = helper.getObject({
      object: sheet.get(),
      path: "skills.custom.all"
    });
    var ranks = [];
    var ranksTotal;
    for (var i in all_skills) {
      ranks.push(parseInt(all_skills[i].ranks, 10) || 0);
    };
    if (includeCustom) {
      for (var i = 0; i < all_customSkills.length; i++) {
        ranks.push(parseInt(all_customSkills[i].ranks, 10) || 0);
      };
    };
    ranksTotal = ranks.reduce(function(a, b) {
      return a + b;
    });
    helper.setObject({
      object: sheet.get(),
      path: "skills.ranks.current",
      newValue: ranksTotal
    });
  };

  // exposed methods
  return {
    bind: bind,
    render: render
  };

})();
