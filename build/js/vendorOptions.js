(function() {

  function setOffset() {
    var offset;
    if (window.innerWidth < 550) {
      offset = 50;
    } else {
      offset = 70;
    };
    return offset;
  };

  smoothScroll.init({
    speed: 600,
    offset: setOffset()
  });

})();
