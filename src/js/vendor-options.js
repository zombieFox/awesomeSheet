(function() {

  var quickNavHeight = parseInt(getComputedStyle(document.querySelector(".js-quick-nav")).height, 10) + 40;
  var quickNavWidth = parseInt(getComputedStyle(document.querySelector(".js-quick-nav")).width, 10) + 40;
  var quickNavOffset;
  if (quickNavHeight < quickNavWidth) {
    quickNavOffset = quickNavHeight;
  } else {
    quickNavOffset = quickNavWidth;
  };

  smoothScroll.init({
    speed: 500,
    offset: quickNavOffset
  });

})();
