"use strict";

(function() {

  nav.bind();
  nav.render(sheet.getAllCharacters());
  nav.resize();
  hidableBlock.bind();
  inputBlock.bind(helper.eA(".input-block"));
  textareaBlock.bind(helper.eA(".textarea-block"));
  checkBlock.bind(helper.eA(".check-block"));
  stats.bind();
  sheet.render();

})();
