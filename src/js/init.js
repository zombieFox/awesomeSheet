(function() {

  nav.bind();
  sheet.storeCharacter();
  inputBlock.bind(helper.eA(".input-block"));
  inputBlock.render();
  textareaBlock.bind(helper.eA(".textarea-block"));
  textareaBlock.render();
  spells.render();
  stats.render();
  stats.bind();
  totalBlock.render();

})();