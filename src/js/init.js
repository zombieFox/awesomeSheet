(function() {

  sheet.render();
  sheet.bind();
  sheet.scroll();
  nav.bind();
  // nav.render();
  tabs.bind();
  log.bind();
  log.render();
  night.update();
  checkUrl.render();
  // disbaled for now
  // checkUrl.checkHttps();

})();
