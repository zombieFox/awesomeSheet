var fireball = (function() {

  function render() {

    var body = helper.e("body");
    var fireball = document.createElement("div");
    fireball.setAttribute("class", "m-fireball js-fireball");
    fireball.setAttribute("style", "left:" + helper.randomNumber(10,90) + "%");
    fireball.addEventListener("animationend", function(event, elapsed) {
      this.parentElement.removeChild(this);
    }.bind(fireball), false);

    body.appendChild(fireball);

  };

  // exposed methods
  return {
    render: render
  };

})();
