(function() {

  nav.bind();
  nav.render(sheet.getAllCharacters());
  nav.resize();
  hidableBlock.bind();
  inputBlock.bind();
  textareaBlock.bind();
  checkBlock.bind();
  stats.bind();
  sheet.render();

})();
