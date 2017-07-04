var skills = (function() {

  var renderTimer = null;

  function bind() {
    var skillSpentRanksInput = helper.e(".js-skill-spent-ranks-input");
    var all_inputBlockFieldRanks = helper.eA(".js-input-block-field-ranks");
    var skillSpentRanksTotal = helper.e(".js-skill-spent-ranks-total");
    skillSpentRanksInput.addEventListener("change", function() {
      _store(skillSpentRanksInput, skillSpentRanksInput.checked);
      _store(skillSpentRanksTotal, parseInt(skillSpentRanksTotal.innerHTML, 10) || 0);
      _render_rankTotal();
    }, false);
    for (var i = 0; i < all_inputBlockFieldRanks.length; i++) {
      all_inputBlockFieldRanks[i].addEventListener("input", function() {
        clearTimeout(renderTimer);
        renderTimer = setTimeout(function() {
          _store(skillSpentRanksTotal, parseInt(skillSpentRanksTotal.innerHTML, 10) || 0);
          _render_rankTotal();
        }, 400, this);
      }, false);
    };
  };

  function _store(element, value) {
    var path = element.dataset.path;
    helper.setObject(sheet.getCharacter(), path, value);
    sheet.storeCharacters();
  };

  function render() {
    _render_includeCustomToggle();
    _render_rankTotal();
  };

  function _render_includeCustomToggle(argument) {
    var skillSpentRanksInput = helper.e(".js-skill-spent-ranks-input");
    var path = skillSpentRanksInput.dataset.path;
    var state = helper.getObject(sheet.getCharacter(), path);
    skillSpentRanksInput.checked = state;
  };

  function _render_rankTotal() {
    var all_skills = helper.getObject(sheet.getCharacter(), "skills");
    var all_customSkills = helper.getObject(sheet.getCharacter(), "skills.custom");
    var skillSpentRanksTotal = helper.e(".js-skill-spent-ranks-total");
    var ranks = [];
    var ranksTotal;
    for (var i in all_skills) {
      ranks.push(parseInt(all_skills[i].ranks, 10) || 0);
    };
    if (helper.getObject(sheet.getCharacter(), "skills.spent_ranks.include_custom")) {
      for (var i = 0; i < all_customSkills.length; i++) {
        ranks.push(parseInt(all_customSkills[i].ranks, 10) || 0);
      };
    };
    ranksTotal = ranks.reduce(function(a, b) {
      return a + b;
    });
    skillSpentRanksTotal.textContent = ranksTotal;
  };

  // exposed methods
  return {
    bind: bind,
    render: render
  };

})();
