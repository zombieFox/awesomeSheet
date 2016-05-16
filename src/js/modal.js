var modal = (function() {

  var previousModal = null;
  var previousModalShade = null;

  function bind() {

    var container = document.createElement("div");
    container.setAttribute("class", "container");
    var row = document.createElement("div");
    row.setAttribute("class", "row");
    var col = document.createElement("div");
    col.setAttribute("class", "col-xs-12");

    var xxx = '<div class="m-total-block-toggle js-total-block-toggle"><input id="defense-ac-str-bonus" class="m-total-block-toggle-check js-total-block-toggle-check" data-bonus-type="str-bonus" data-path="defense.ac.str_bonus" type="checkbox" tabindex="3"><label for="defense-ac-str-bonus" class="u-full-width">Str</label></div><div class="m-total-block-toggle js-total-block-toggle"><input id="defense-ac-dex-bonus" class="m-total-block-toggle-check js-total-block-toggle-check" data-bonus-type="dex-bonus" data-path="defense.ac.dex_bonus" type="checkbox" tabindex="3"><label for="defense-ac-dex-bonus" class="u-full-width">Dex</label></div><div class="m-total-block-toggle js-total-block-toggle"><input id="defense-ac-con-bonus" class="m-total-block-toggle-check js-total-block-toggle-check" data-bonus-type="con-bonus" data-path="defense.ac.con_bonus" type="checkbox" tabindex="3"><label for="defense-ac-con-bonus" class="u-full-width">Con</label></div><div class="m-total-block-toggle js-total-block-toggle"><input id="defense-ac-int-bonus" class="m-total-block-toggle-check js-total-block-toggle-check" data-bonus-type="int-bonus" data-path="defense.ac.int_bonus" type="checkbox" tabindex="3"><label for="defense-ac-int-bonus" class="u-full-width">Int</label></div><div class="m-total-block-toggle js-total-block-toggle"><input id="defense-ac-wis-bonus" class="m-total-block-toggle-check js-total-block-toggle-check" data-bonus-type="wis-bonus" data-path="defense.ac.wis_bonus" type="checkbox" tabindex="3"><label for="defense-ac-wis-bonus" class="u-full-width">Wis</label></div><div class="m-total-block-toggle js-total-block-toggle"><input id="defense-ac-cha-bonus" class="m-total-block-toggle-check js-total-block-toggle-check" data-bonus-type="cha-bonus" data-path="defense.ac.cha_bonus" type="checkbox" tabindex="3"><label for="defense-ac-cha-bonus" class="u-full-width u-margin-with-input">Cha</label></div>';
    
    col.innerHTML = xxx;
    row.appendChild(col);
    container.appendChild(row);


    var all_modalOpen = helper.eA(".js-modal-open");
    for (var i = 0; i < all_modalOpen.length; i++) {
      all_modalOpen[i].addEventListener("click", function() {
        render(container);
      }, false);
    };
  };

  function destroy() {
    var modal = helper.e(".js-modal");
    var modalShade = helper.e(".js-modal-shade");
    if (modal) {
      getComputedStyle(modal).opacity;
      helper.removeClass(modal, "is-opaque");
      helper.addClass(modal, "is-transparent");
    };
    if (modalShade) {
      getComputedStyle(modalShade).opacity;
      helper.removeClass(modalShade, "is-opaque");
      helper.addClass(modalShade, "is-transparent");
    };
  };

  function render(modalBody, action) {

    var body = helper.e("body");

    // make new shade
    var modalShade = document.createElement("div");
    modalShade.setAttribute("class", "m-modal-shade js-modal-shade");
    modalShade.destroy = function() {
      helper.removeClass(modalShade, "is-opaque");
      helper.addClass(modalShade, "is-transparent");
    };


    
    var modalWrapper = document.createElement("div");
    modalWrapper.setAttribute("class", "m-modal-wrapper");


    var modal = document.createElement("div");
    modal.setAttribute("class", "m-modal js-modal");
    modal.destroy = function() {
      helper.removeClass(modal, "is-opaque");
      helper.addClass(modal, "is-transparent");
    };

    var modalControls = document.createElement("div");
    modalControls.setAttribute("class", "m-modal-controls");

    var okButton = document.createElement("a");
    okButton.setAttribute("href", "javascript:void(0)");
    okButton.setAttribute("tabindex", "3");
    okButton.setAttribute("class", "button button-primary button-block button-large");
    okButton.textContent = "OK";

    if (modalBody) {
      modalWrapper.appendChild(modalBody);
    };
    modalControls.appendChild(okButton);
    modalWrapper.appendChild(modalControls);
    modal.appendChild(modalWrapper);

    modal.addEventListener("transitionend", function(event, elapsed) {
      if (event.propertyName === "opacity" && getComputedStyle(this).opacity == 0) {
        this.parentElement.removeChild(this);
      };
    }.bind(modal), false);

    modalShade.addEventListener("transitionend", function(event, elapsed) {
      if (event.propertyName === "opacity" && getComputedStyle(this).opacity == 0) {
        this.parentElement.removeChild(this);
      };
    }.bind(modalShade), false);

    okButton.addEventListener("click", destroy, false);
    modalShade.addEventListener("click", destroy, false);

    if (previousModal) {
      previousModal.destroy();
    };

    if (previousModalShade) {
      previousModalShade.destroy();
    };

    previousModal = modal;
    previousModalShade = modalShade;

    body.appendChild(modalShade);
    body.appendChild(modal);

    // console.log(getcomputedstyle(modal).transform);

    getComputedStyle(modal).opacity;
    getComputedStyle(modalShade).opacity;
    helper.removeClass(modal, "is-transparent");
    helper.addClass(modal, "is-opaque");
    helper.addClass(modal, "is-rotate-up");
    helper.removeClass(modalShade, "is-transparent");
    helper.addClass(modalShade, "is-opaque");

  };

  return {
    bind: bind,
    render: render
  };

})();
