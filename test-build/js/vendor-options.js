(function() {

  if (document.querySelector(".js-quick-nav")) {
    var quickNavHeight = parseInt(getComputedStyle(document.querySelector(".js-quick-nav")).height, 10);
  };

  smoothScroll.init({
    speed: 600,
    offset: quickNavHeight
  });

})();
