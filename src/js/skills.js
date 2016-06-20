var skills = (function() {

  var renderTimer = null;

  function bind() {
    var spentSkillRankInput = helper.e(".js-spent-skill-rank-input");
    var all_rankInput = helper.eA(".js-input-block-field-ranks");
    var all_customRankInput = helper.eA(".js-input-block-field-custom-ranks");
    var spentSkillRankTotal = helper.e(".js-spent-skill-rank-total");
    spentSkillRankInput.addEventListener("change", function() {
      clearTimeout(renderTimer);
      renderTimer = setTimeout(function() {
        _render_rankTotal();
        _store(spentSkillRankInput, spentSkillRankInput.checked);
        _store(spentSkillRankTotal, parseInt(spentSkillRankTotal.innerHTML, 10) || 0);
      }, 200, this);
    }, false);
    for (var i = 0; i < all_rankInput.length; i++) {
      all_rankInput[i].addEventListener("input", function() {
        clearTimeout(renderTimer);
        renderTimer = setTimeout(function() {
          _render_rankTotal();
          _store(spentSkillRankTotal, parseInt(spentSkillRankTotal.innerHTML, 10) || 0);
        }, 1000, this);
      }, false);
    };
    for (var i = 0; i < all_customRankInput.length; i++) {
      all_customRankInput[i].addEventListener("input", function() {
        clearTimeout(renderTimer);
        renderTimer = setTimeout(function() {
          _render_rankTotal();
          _store(spentSkillRankTotal, parseInt(spentSkillRankTotal.innerHTML, 10) || 0);
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
    var spentSkillRankInput = helper.e(".js-spent-skill-rank-input");
    var path = spentSkillRankInput.dataset.path;
    var state = helper.getObject(sheet.getCharacter(), path);
    spentSkillRankInput.checked = state;
  };

  function _render_rankTotal() {
    var all_rankInput = helper.eA(".js-input-block-field-ranks");
    var all_customRankInput = helper.eA(".js-input-block-field-custom-ranks");
    var spentSkillRankInput = helper.e(".js-spent-skill-rank-input");
    var spentSkillRankTotal = helper.e(".js-spent-skill-rank-total");
    var ranks = [];
    var ranksTotal;
    var customRanks = [];
    var customRanksTotal;
    for (var i = 0; i < all_rankInput.length; i++) {
      ranks.push(parseInt(all_rankInput[i].value, 10) || 0);
    };
    for (var i = 0; i < all_customRankInput.length; i++) {
      customRanks.push(parseInt(all_customRankInput[i].value, 10) || 0);
    };
    ranksTotal = ranks.reduce(function(a, b) {
      return a + b;
    });
    customRanksTotal = customRanks.reduce(function(a, b) {
      return a + b;
    });
    if (spentSkillRankInput.checked) {
      spentSkillRankTotal.textContent = ranksTotal + customRanksTotal;
    } else {
      spentSkillRankTotal.textContent = ranksTotal;
    };
  };

  // exposed methods
  return {
    bind: bind,
    render: render
  }

})();
