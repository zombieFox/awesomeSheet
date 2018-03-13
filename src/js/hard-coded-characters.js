var hardCodedCharacters = (function() {

  var demoCharacters = [
    blank.data,
    izlara.data,
    ravich.data
  ];

  var allCharacters = [
    izlara.data,
    ravich.data,
    nif.data,
    vos.data,
    orrin.data,
    nefi.data,
    ro.data,
    marika.data
  ];

  var singleCharacters = {
    izlara: izlara.data,
    ravich: ravich.data,
    nif: nif.data,
    vos: vos.data,
    orrin: orrin.data,
    nefi: nefi.data,
    ro: ro.data,
    marika: marika.data
  }

  function all() {
    return allCharacters
  };

  function demo() {
    demoCharacters[0].awesomeSheet.version = update.version();
    return demoCharacters
  };

  function single() {
    return singleCharacters
  };

  // exposed methods
  return {
    demo: demo,
    all: all,
    single: single
  };

})();
