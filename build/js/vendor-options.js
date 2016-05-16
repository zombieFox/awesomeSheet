(function() {

  smoothScroll.init({
    speed: 600,
    offset: parseInt(getComputedStyle(document.querySelector(".js-quick-nav")).height, 10)
  });

})();
