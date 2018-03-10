(function() {

  sheet.init();
  sheet.render();
  sheet.bind();
  onboarding.render();
  nav.bind();
  menu.bind();
  tabs.bind();
  log.render();
  checkUrl.render();
  sheet.load();

  display.toggle({
    all: true
  })

})();