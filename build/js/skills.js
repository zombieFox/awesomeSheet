var skills = (function() {

  var renderTimer = null;

  function bind() {
    var skillSpentRanksInput = helper.e(".js-skill-spent-ranks-input");
    var all_inputBlockFieldRanks = helper.eA(".js-input-block-field-ranks");
    var all_inputBlockFieldCustomRanks = helper.eA(".js-input-block-field-custom-ranks");
    var skillSpentRanksTotal = helper.e(".js-skill-spent-ranks-total");
    skillSpentRanksInput.addEventListener("change", function() {
      clearTimeout(renderTimer);
      renderTimer = setTimeout(function() {
        _render_rankTotal();
        _store(skillSpentRanksInput, skillSpentRanksInput.checked);
        _store(skillSpentRanksTotal, parseInt(skillSpentRanksTotal.innerHTML, 10) || 0);
      }, 200, this);
    }, false);
    for (var i = 0; i < all_inputBlockFieldRanks.length; i++) {
      all_inputBlockFieldRanks[i].addEventListener("input", function() {
        clearTimeout(renderTimer);
        renderTimer = setTimeout(function() {
          _render_rankTotal();
          _store(skillSpentRanksTotal, parseInt(skillSpentRanksTotal.innerHTML, 10) || 0);
        }, 1000, this);
      }, false);
    };
    for (var i = 0; i < all_inputBlockFieldCustomRanks.length; i++) {
      all_inputBlockFieldCustomRanks[i].addEventListener("input", function() {
        clearTimeout(renderTimer);
        renderTimer = setTimeout(function() {
          _render_rankTotal();
          _store(skillSpentRanksTotal, parseInt(skillSpentRanksTotal.innerHTML, 10) || 0);
        }, 1000, this);
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
    var all_inputBlockFieldRanks = helper.eA(".js-input-block-field-ranks");
    var all_inputBlockFieldCustomRanks = helper.eA(".js-input-block-field-custom-ranks");
    var skillSpentRanksInput = helper.e(".js-skill-spent-ranks-input");
    var skillSpentRanksTotal = helper.e(".js-skill-spent-ranks-total");
    var ranks = [];
    var ranksTotal;
    var customRanks = [];
    var customRanksTotal;
    for (var i = 0; i < all_inputBlockFieldRanks.length; i++) {
      ranks.push(parseInt(all_inputBlockFieldRanks[i].value, 10) || 0);
    };
    for (var i = 0; i < all_inputBlockFieldCustomRanks.length; i++) {
      customRanks.push(parseInt(all_inputBlockFieldCustomRanks[i].value, 10) || 0);
    };
    ranksTotal = ranks.reduce(function(a, b) {
      return a + b;
    });
    customRanksTotal = customRanks.reduce(function(a, b) {
      return a + b;
    });
    if (skillSpentRanksInput.checked) {
      skillSpentRanksTotal.textContent = ranksTotal + customRanksTotal;
    } else {
      skillSpentRanksTotal.textContent = ranksTotal;
    };
  };

  // exposed methods
  return {
    bind: bind,
    render: render
  };

})();
