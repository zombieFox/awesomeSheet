var repair = (function() {

  function _update_character(characterObject) {
    // add initiative object
    if (typeof characterObject.basics.initiative != "object" || typeof characterObject.basics.initiative.bonuses != "object" || !characterObject.basics.initiative.bonuses) {
      characterObject.basics.initiative = {
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
      return characterObject;
    };
    // add custom skills array
    if (typeof characterObject.skills.custom == "string" || !characterObject.skills.custom) {
      characterObject.skills.custom = [];
    };
    // add spell notes
    if (sheet.getCharacter().spells.book) {
      for (var i in sheet.getCharacter().spells.book) {
        for (var j in sheet.getCharacter().spells.book[i]) {
          if (sheet.getCharacter().spells.book[i][j].length > 0) {
            for (var k in sheet.getCharacter().spells.book[i][j]) {
              if (!sheet.getCharacter().spells.book[i][j][k].note || sheet.getCharacter().spells.book[i][j][k].note == "" || sheet.getCharacter().spells.book[i][j][k].note == "undefined") {
                sheet.getCharacter().spells.book[i][j][k].note = "";
              };
            };
          };
        };
      };
    };
    sheet.storeCharacters();
  };

  function update(character) {
    return _update_character(character);
  };

  // exposed methods
  return {
    update: update
  };

})();
