"use strict";

(function() {

  nav.bind();
  nav.render(sheet.getAllCharacters());
  nav.resize();
  hidableBlock.bind();
  inputBlock.bind(helper.eA(".input-block"));
  textareaBlock.bind(helper.eA(".textarea-block"));
  stats.bind();
  sheet.render();
  quickNav.render();

})();
