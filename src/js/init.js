(function() {

  // bind nav controls
  nav.bind();
  // save current character object to local storage
  sheet.storeCharacter();
  // bind all inputs
  inputBlock.bind(helper.eA(".input-block"));
  // fill in all inputs
  inputBlock.render();
  // bind all teaxtareas
  textareaBlock.bind(helper.eA(".textarea-block"));
  // fill in all textareas
  textareaBlock.render();
  // render spells
  spells.render();
  // render stat mods
  stats.render();
  // bind stats
  stats.bind();
  // sum all total blocks
  totalBlock.total();

})();