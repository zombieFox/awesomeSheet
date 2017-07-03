var repair = (function() {

  function update(character) {
    if (typeof character.basics.initiative != "object" || typeof character.basics.initiative.bonuses != "object" || !character.basics.initiative.bonuses) {
      character.basics.initiative = {
        misc: "",
        temp: "",
        feat: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false
        }
      };
      return character;
    };
  };

  function render() {
    if (typeof sheet.getCharacter().basics.initiative != "object" || typeof sheet.getCharacter().basics.initiative.bonuses != "object" || !sheet.getCharacter().basics.initiative.bonuses) {
      // console.log("repaired", "basics.initiative");
      // helper.getObject(sheet.getCharacter(), "basics.initiative");
      sheet.getCharacter().basics.initiative = {
        misc: "",
        temp: "",
        feat: "",
        current: "",
        bonuses: {
          str_bonus: false,
          dex_bonus: true,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false
        }
      };
    };
    sheet.storeCharacters();
  };

  // exposed methods
  return {
    update: update,
    render: render
  };

})();
