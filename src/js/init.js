(function() {

  console.log("awesomeSheet loading");
  console.log("v", sheet.ver());
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
  console.log("loading complete");

})();
