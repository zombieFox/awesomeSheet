var clone = (function() {

  function render() {
    _render_all_clones("attack-melee");
    _render_all_clones("attack-ranged");
    _render_all_clones("consumable");
    _render_all_clones("skill");
    _render_all_clones("note-character");
    _render_all_clones("note-story");
    _update_clonePlaceholder("attack-melee");
    _update_clonePlaceholder("attack-ranged");
    _update_clonePlaceholder("consumable");
    _update_clonePlaceholder("skill");
    _update_clonePlaceholder("note-character");
    _update_clonePlaceholder("note-story");
  };

  function _get_cloneObjects(cloneType) {
    var object;
    if (cloneType == "consumable") {
      object = sheet.getCharacter().equipment.consumable;
    };
    if (cloneType == "skill") {
      object = sheet.getCharacter().skills.custom;
    };
    if (cloneType == "attack-melee") {
      object = sheet.getCharacter().offense.attack.melee;
    };
    if (cloneType == "attack-ranged") {
      object = sheet.getCharacter().offense.attack.ranged;
    };
    if (cloneType == "note-character") {
      object = sheet.getCharacter().notes.character;
    };
    if (cloneType == "note-story") {
      object = sheet.getCharacter().notes.story;
    };
    return object;
  };

  function _get_cloneString(cloneType, cloneIndex) {
    var cloneString;
    if (cloneType == "consumable") {
      cloneString = _newConsumable(cloneIndex);
    };
    if (cloneType == "skill") {
      cloneString = _newSkill(cloneIndex);
    };
    if (cloneType == "attack-melee") {
      cloneString = _newAttackMelee(cloneIndex);
    };
    if (cloneType == "attack-ranged") {
      cloneString = _newAttackRanged(cloneIndex);
    };
    if (cloneType == "note-character") {
      cloneString = _newNoteCharacter(cloneIndex);
    };
    if (cloneType == "note-story") {
      cloneString = _newNoteStory(cloneIndex);
    };
    return cloneString;
  };

  function _get_cloneBlock(cloneType) {
    var cloneBlock;
    if (cloneType == "attack-melee") {
      cloneBlock = helper.e(".js-clone-block-attack");
    };
    if (cloneType == "attack-ranged") {
      cloneBlock = helper.e(".js-clone-block-attack");
    };
    if (cloneType == "consumable") {
      cloneBlock = helper.e(".js-clone-block-consumable");
    };
    if (cloneType == "skill") {
      cloneBlock = helper.e(".js-clone-block-skill");
    };
    if (cloneType == "note-character") {
      cloneBlock = helper.e(".js-clone-block-note");
    };
    if (cloneType == "note-story") {
      cloneBlock = helper.e(".js-clone-block-note");
    };
    return cloneBlock;
  };

  function _get_cloneTarget(cloneType) {
    var cloneTarget;
    if (cloneType == "attack-melee") {
      cloneTarget = helper.e(".js-clone-block-target-attack-melee");
    };
    if (cloneType == "attack-ranged") {
      cloneTarget = helper.e(".js-clone-block-target-attack-ranged");
    };
    if (cloneType == "consumable") {
      cloneTarget = helper.e(".js-clone-block-target-consumable");
    };
    if (cloneType == "skill") {
      cloneTarget = helper.e(".js-clone-block-target-skills");
    };
    if (cloneType == "note-character") {
      cloneTarget = helper.e(".js-clone-block-target-note-character");
    };
    if (cloneType == "note-story") {
      cloneTarget = helper.e(".js-clone-block-target-note-story");
    };
    return cloneTarget;
  };

  function _get_cloneCount(cloneType, mixed) {
    var cloneCount;
    if (cloneType == "attack-melee") {
      cloneCount = sheet.getCharacter().offense.attack.melee.length;
    };
    if (cloneType == "attack-ranged") {
      cloneCount = sheet.getCharacter().offense.attack.ranged.length;
    };
    if (cloneType == "consumable") {
      cloneCount = sheet.getCharacter().equipment.consumable.length;
    };
    if (cloneType == "skill") {
      cloneCount = sheet.getCharacter().skills.custom.length;
    };
    if (cloneType == "note-character") {
      cloneCount = sheet.getCharacter().notes.character.length;
    };
    if (cloneType == "note-story") {
      cloneCount = sheet.getCharacter().notes.story.length;
    };
    if (cloneType == "note" || cloneType == "note-character" && mixed || cloneType == "note-story" && mixed) {
      cloneCount = sheet.getCharacter().notes.story.length + sheet.getCharacter().notes.character.length;
    };
    if (cloneType == "attack" || cloneType == "attack-melee" && mixed || cloneType == "attack-ranged" && mixed) {
      cloneCount = sheet.getCharacter().offense.attack.melee.length + sheet.getCharacter().offense.attack.ranged.length;
    };
    return cloneCount;
  };

  function _get_placeholderClone(cloneType) {
    var clonePlaceholder;
    if (cloneType == "attack-melee") {
      clonePlaceholder = helper.e(".js-placeholder-clone-attack-melee");
    };
    if (cloneType == "attack-ranged") {
      clonePlaceholder = helper.e(".js-placeholder-clone-attack-ranged");
    };
    if (cloneType == "consumable") {
      clonePlaceholder = helper.e(".js-placeholder-clone-consumable");
    };
    if (cloneType == "skill") {
      clonePlaceholder = helper.e(".js-placeholder-clone-skill");
    };
    if (cloneType == "note-character") {
      clonePlaceholder = helper.e(".js-placeholder-clone-note-character");
    };
    if (cloneType == "note-story") {
      clonePlaceholder = helper.e(".js-placeholder-clone-note-story");
    };
    return clonePlaceholder;
  };

  function _get_maxCloneMessage(cloneType) {
    var message = "Max 100, do you need that many";
    if (cloneType == "attack-melee") {
      message = message + " Melee Attacks?";
    };
    if (cloneType == "attack-ranged") {
      message = message + " Ranged Attacks?";
    };
    if (cloneType == "consumable") {
      message = message + " Consumables?";
    };
    if (cloneType == "skill") {
      message = message + " Skills?";
    };
    if (cloneType == "note-character") {
      message = message + " Character Notes?";
    };
    if (cloneType == "note-story") {
      message = message + " Story Notes?";
    };
    return message;
  };

  function _get_undoRemoveCloneMessage(cloneType) {
    var message = "removed.";
    if (cloneType == "attack-melee") {
      message = "Melee attack " + message;
    };
    if (cloneType == "attack-ranged") {
      message = "Ranged attack " + message;
    };
    if (cloneType == "consumable") {
      message = "Consumable " + message;
    };
    if (cloneType == "skill") {
      message = "Skill " + message;
    };
    if (cloneType == "note-character") {
      message = "Character note " + message;
    };
    if (cloneType == "note-story") {
      message = "Story note " + message;
    };
    return message;
  };

  function _get_newCloneObject(cloneType) {
    var object;
    if (cloneType == "attack-melee") {
      object = {
        weapon: "",
        attack: "",
        damage: "",
        critical: ""
      };
    };
    if (cloneType == "attack-ranged") {
      object = {
        weapon: "",
        attack: "",
        damage: "",
        critical: "",
        range: "",
        ammo: ""
      };
    };
    if (cloneType == "consumable") {
      object = {
        item: "",
        current: "",
        total: "",
        used: ""
      };
    };
    if (cloneType == "skill") {
      object = {
        name: "",
        ranks: "",
        misc: "",
        bonuses: {
          class_skill: false,
          str_bonus: false,
          dex_bonus: false,
          con_bonus: false,
          int_bonus: false,
          wis_bonus: false,
          cha_bonus: false,
          level: false,
          half_level: false,
          check_penalty: false
        }
      };
    };
    if (cloneType == "note-character") {
      object = {
        note: ""
      };
    };
    if (cloneType == "note-story") {
      object = {
        note: ""
      };
    };
    return object;
  };

  function _smoothScrollToClones(cloneType) {
    var cloneTarget = _get_cloneTarget(cloneType);
    var targetTop = cloneTarget.lastChild.getBoundingClientRect().top;
    var targetBottom = cloneTarget.lastChild.getBoundingClientRect().bottom;
    var windowHeight = window.innerHeight;
    var quickNavHeight;
    // if nav is on the left after 900px wide viewport
    if (document.documentElement.clientWidth >= 900) {
      quickNavHeight = 0;
    } else {
      quickNavHeight = parseInt(getComputedStyle(document.querySelector(".js-quick-nav")).height, 10);
    };
    if (body.dataset.displayMode == "false" || !body.dataset.displayMode) {
      if (targetTop > (windowHeight - (windowHeight / 6)) || targetBottom <= 0) {
        var offset = (windowHeight - (windowHeight / 2));
        var options = {
          speed: 300,
          offset: offset
        };
        smoothScroll.animateScroll(null, "#" + cloneTarget.lastChild.id, options);
      };
    };
  };

  function _newConsumable(index) {
    var cloneString =
      '<div class="m-clone-block-content js-clone-block-content">' +
      '  <div class="js-total-block" data-total-path="equipment.consumable" data-total-path-addition="total" data-total-path-subtraction="used" data-clone="true" data-clone-count="' + index + '">' +
      '    <div class="m-edit-box-body m-edit-box-body-group m-edit-box-body-item-margin">' +
      '      <div class="m-edit-box-item-large">' +
      '        <div class="m-input-block js-input-block" data-clone="true" data-clone-count="' + index + '">' +
      '          <label class="m-input-block-label js-input-block-label" for="consumable-item-' + index + '">Item</label>' +
      '          <input id="consumable-item-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-consumable-item" data-path="equipment.consumable" data-path-clone-key="item" type="text" tabindex="3">' +
      '        </div>' +
      '      </div>' +
      '      <div class="m-edit-box-item-total">' +
      '        <p class="m-total-block-label">Total</p>' +
      '        <p class="u-text-center u-inline-with-input m-total-block-total js-total-block-total js-clone-consumable-current">0</p>' +
      '      </div>' +
      '      <div class="m-edit-box-item-small">' +
      '        <div class="m-input-block js-input-block" data-clone="true" data-clone-count="' + index + '">' +
      '          <label class="m-input-block-label js-input-block-label" for="consumable-total-' + index + '">Max</label>' +
      '          <input id="consumable-total-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-consumable-total" data-path="equipment.consumable" data-path-clone-key="total" data-type="number" type="text" tabindex="3">' +
      '        </div>' +
      '      </div>' +
      '      <div class="m-edit-box-item-small">' +
      '        <div class="m-input-block js-input-block" data-clone="true" data-clone-count="' + index + '">' +
      '          <label class="m-input-block-label js-input-block-label" for="consumable-used-' + index + '">Used</label>' +
      '          <input id="consumable-used-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-consumable-used" data-total="subtract" data-path="equipment.consumable" data-path-clone-key="used" data-type="number" type="text" tabindex="3">' +
      '        </div>' +
      '      </div>' +
      '    </div>' +
      '  </div>' +
      '  <div class="m-clone-block-delete-controls">' +
      '    <button class="button button-meidum button-primary js-clone-block-delete" tabindex="3"><span class="icon-close"></span></button>' +
      '  </div>' +
      '</div>';
    return cloneString;
  };

  function _newSkill(index) {
    var cloneString =
      '<div class="m-clone-block-content js-clone-block-content">' +
      '  <div class="js-total-block" data-total-path="skills.custom" data-total-path-addition="ranks,misc" data-total-bonuses="true" data-total-type="bonus" data-clone="true" data-clone-count="' + index + '">' +
      '    <div class="m-edit-box m-edit-box-guides">' +
      '      <div class="m-edit-box-head-large">' +
      '        <div class="m-skill-name m-input-block js-input-block" data-clone="true" data-clone-count="' + index + '">' +
      '          <input class="m-input-block-field u-full-width u-no-margin js-input-block-field js-clone-skill-name" data-path="skills.custom" data-path-clone-key="name" type="text" tabindex="3" placeholder="Custom skill">' +
      '        </div>' +
      '      </div>' +
      '      <div class="m-edit-box-body m-edit-box-body-group">' +
      '        <div class="m-edit-box-item-total">' +
      '          <p class="m-total-block-total js-total-block-total js-clone-skill-current">0</p>' +
      '        </div>' +
      '        <div class="m-edit-box-item-medium">' +
      '          <div class="m-input-block js-input-block" data-clone="true" data-clone-count="' + index + '">' +
      '            <input class="m-input-block-field u-full-width u-text-center js-input-block-field js-clone-skill-ranks js-input-block-field-ranks" data-path="skills.custom" data-path-clone-key="ranks" data-type="number" type="text" tabindex="3">' +
      '          </div>' +
      '        </div>' +
      '        <div class="m-edit-box-item-medium">' +
      '          <div class="m-input-block js-input-block" data-clone="true" data-clone-count="' + index + '">' +
      '            <input class="m-input-block-field u-full-width u-text-center js-input-block-field js-clone-skill-misc" data-path="skills.custom" data-path-clone-key="misc" data-type="number" type="text" tabindex="3">' +
      '          </div>' +
      '        </div>' +
      '        <div class="m-edit-box-item-check">' +
      '          <div class="m-check-block">' +
      '            <input class="m-check-block-check js-total-block-bonus-check js-clone-skill-check" data-path="skills.custom" data-path-array="true" data-bonus-type="class-skill" type="checkbox" tabindex="3">' +
      '            <span class="m-check-block-check-icon"></span>' +
      '          </div>' +
      '        </div>' +
      '        <div class="m-edit-box-item-button">' +
      '          <a href="javascript:void(0)" class="u-inline-with-input u-no-margin button button-secondary button-large button-icon js-total-block-bonuses" data-clone="true" data-clone="true" data-modal-heading="Custom Skill bonuses" tabindex="3"><span class="icon-more-vertical"></span></a>' +
      '        </div>' +
      '      </div>' +
      '    </div>' +
      '  </div>' +
      '  <div class="m-clone-block-delete-controls">' +
      '    <button class="button button-meidum button-primary js-clone-block-delete" tabindex="3"><span class="icon-close"></span></button>' +
      '  </div>' +
      '</div>';
    return cloneString;
  };

  function _newAttackMelee(index) {
    var cloneString =
      '<div class="m-clone-block-content m-clone-block-content-box js-clone-block-content">' +
      '  <div class="m-edit-box-body m-edit-box-body-group m-edit-box-body-item-margin">' +
      '    <div class="m-edit-box-item-max">' +
      '      <div class="m-input-block js-input-block" data-clone="true" data-clone-count="' + index + '">' +
      '        <label class="m-input-block-label js-input-block-label" for="attack-melee-weapon-' + index + '">Weapon</label>' +
      '        <input id="attack-melee-weapon-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-attack-melee-weapon" data-path="offense.attack.melee" data-path-clone-key="weapon" type="text" tabindex="3">' +
      '      </div>' +
      '    </div>' +
      '  </div>' +
      '  <div class="m-edit-box-body m-edit-box-body-group m-edit-box-body-item-margin">' +
      '    <div class="m-edit-box-item-medium">' +
      '      <div class="m-input-block js-input-block" data-clone="true" data-clone-count="' + index + '">' +
      '        <label class="m-input-block-label js-input-block-label" for="attack-melee-attack-' + index + '">Attack</label>' +
      '        <input id="attack-melee-attack-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-attack-melee-attack" data-path="offense.attack.melee" data-path-clone-key="attack" type="text" tabindex="3">' +
      '      </div>' +
      '    </div>' +
      '    <div class="m-edit-box-item-medium">' +
      '      <div class="m-input-block js-input-block" data-clone="true" data-clone-count="' + index + '">' +
      '        <label class="m-input-block-label js-input-block-label" for="attack-melee-damage-' + index + '">Damage</label>' +
      '        <input id="attack-melee-damage-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-attack-melee-damage" data-path="offense.attack.melee" data-path-clone-key="damage" type="text" tabindex="3">' +
      '      </div>' +
      '    </div>' +
      '    <div class="m-edit-box-item-medium">' +
      '      <div class="m-input-block js-input-block" data-clone="true" data-clone-count="' + index + '">' +
      '        <label class="m-input-block-label js-input-block-label" for="attack-melee-critical-' + index + '">Critical</label>' +
      '        <input id="attack-melee-critical-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-attack-melee-critical" data-path="offense.attack.melee" data-path-clone-key="critical" type="text" tabindex="3">' +
      '      </div>' +
      '    </div>' +
      '  </div>' +
      '  <div class="m-clone-block-delete-controls">' +
      '    <button class="button button-meidum button-primary js-clone-block-delete" tabindex="3"><span class="icon-close"></span></button>' +
      '  </div>' +
      '</div>';
    return cloneString;
  };

  function _newAttackRanged(index) {
    var cloneString =
      '<div class="m-clone-block-content m-clone-block-content-box js-clone-block-content">' +
      '  <div class="m-edit-box-body m-edit-box-body-group m-edit-box-body-item-margin">' +
      '    <div class="m-edit-box-item-max">' +
      '      <div class="m-input-block js-input-block" data-clone="true" data-clone-count="' + index + '">' +
      '        <label class="m-input-block-label js-input-block-label" for="attack-ranged-weapon-' + index + '">Weapon</label>' +
      '        <input id="attack-ranged-weapon-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-attack-ranged-weapon" data-path="offense.attack.ranged" data-path-clone-key="weapon" type="text" tabindex="3">' +
      '      </div>' +
      '    </div>' +
      '  </div>' +
      '  <div class="m-edit-box-body m-edit-box-body-group m-edit-box-body-item-margin">' +
      '    <div class="m-edit-box-item-medium">' +
      '      <div class="m-input-block js-input-block" data-clone="true" data-clone-count="' + index + '">' +
      '        <label class="m-input-block-label js-input-block-label" for="attack-ranged-attack-' + index + '">Attack</label>' +
      '        <input id="attack-ranged-attack-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-attack-ranged-attack" data-path="offense.attack.ranged" data-path-clone-key="attack" type="text" tabindex="3">' +
      '      </div>' +
      '    </div>' +
      '    <div class="m-edit-box-item-medium">' +
      '      <div class="m-input-block js-input-block" data-clone="true" data-clone-count="' + index + '">' +
      '        <label class="m-input-block-label js-input-block-label" for="attack-ranged-damage-' + index + '">Damage</label>' +
      '        <input id="attack-ranged-damage-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-attack-ranged-damage" data-path="offense.attack.ranged" data-path-clone-key="damage" type="text" tabindex="3">' +
      '      </div>' +
      '    </div>' +
      '    <div class="m-edit-box-item-medium">' +
      '      <div class="m-input-block js-input-block" data-clone="true" data-clone-count="' + index + '">' +
      '        <label class="m-input-block-label js-input-block-label" for="attack-ranged-critical-' + index + '">Critical</label>' +
      '        <input id="attack-ranged-critical-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-attack-ranged-critical" data-path="offense.attack.ranged" data-path-clone-key="critical" type="text" tabindex="3">' +
      '      </div>' +
      '    </div>' +
      '  </div>' +
      '  <div class="m-edit-box-body m-edit-box-body-group m-edit-box-body-item-margin">' +
      '    <div class="m-edit-box-item-medium">' +
      '      <div class="m-input-block js-input-block" data-clone="true" data-clone-count="' + index + '">' +
      '        <label class="m-input-block-label js-input-block-label" for="attack-ranged-range-' + index + '">Range</label>' +
      '        <input id="attack-ranged-range-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-attack-ranged-range" data-path="offense.attack.ranged" data-path-clone-key="range" type="text" tabindex="3">' +
      '      </div>' +
      '    </div>' +
      '    <div class="m-edit-box-item-medium">' +
      '      <div class="m-input-block js-input-block" data-clone="true" data-clone-count="' + index + '">' +
      '        <label class="m-input-block-label js-input-block-label" for="attack-ranged-ammo-' + index + '">Ammo</label>' +
      '        <input id="attack-ranged-ammo-' + index + '" class="m-input-block-field u-full-width js-input-block-field js-clone-attack-ranged-ammo" data-path="offense.attack.ranged" data-path-clone-key="ammo" type="text" tabindex="3">' +
      '      </div>' +
      '    </div>' +
      '  </div>' +
      '  <div class="m-clone-block-delete-controls">' +
      '    <button class="button button-meidum button-primary js-clone-block-delete" tabindex="3"><span class="icon-close"></span></button>' +
      '  </div>' +
      '</div>';
    return cloneString;
  };

  function _newNoteCharacter(index) {
    var cloneString =
      '<div class="m-clone-block-content js-clone-block-content">' +
      '  <div class="m-edit-box-body m-edit-box-body-group m-edit-box-body-item-margin">' +
      '    <div class="m-edit-box-item-max">' +
      '      <div class="m-textarea-block js-textarea-block" data-clone="true" data-clone-count="' + index + '">' +
      '        <label class="m-textarea-block-label js-textarea-block-label" for="note-character-' + index + '">Note</label>' +
      '        <div id="note-character-' + index + '" class="m-textarea-block-field textarea textarea-large u-full-width js-textarea-block-field" contentEditable="true" data-path="notes.character" data-path-clone-key="note" tabindex="3"></div>' +
      '      </div>' +
      '    </div>' +
      '  </div>' +
      '  <div class="m-clone-block-delete-controls">' +
      '    <button class="button button-meidum button-primary js-clone-block-delete" tabindex="3"><span class="icon-close"></span></button>' +
      '  </div>' +
      '</div>';
    return cloneString;
  };

  function _newNoteStory(index) {
    var cloneString =
      '<div class="m-clone-block-content js-clone-block-content">' +
      '  <div class="m-edit-box-body m-edit-box-body-group m-edit-box-body-item-margin">' +
      '    <div class="m-edit-box-item-max">' +
      '      <div class="m-textarea-block js-textarea-block" data-clone="true" data-clone-count="' + index + '">' +
      '        <label class="m-textarea-block-label js-textarea-block-label" for="note-story-' + index + '">Note</label>' +
      '        <div id="note-story-' + index + '" class="m-textarea-block-field textarea textarea-large u-full-width js-textarea-block-field" contentEditable="true" data-path="notes.story" data-path-clone-key="note" tabindex="3"></div>' +
      '      </div>' +
      '    </div>' +
      '  </div>' +
      '  <div class="m-clone-block-delete-controls">' +
      '    <button class="button button-meidum button-primary js-clone-block-delete" tabindex="3"><span class="icon-close"></span></button>' +
      '  </div>' +
      '</div>';
    return cloneString;
  };

  function bind() {
    _bind_cloneControls();
  };

  function _bind_cloneControls() {
    var cloneBlockConsumable = helper.e(".js-clone-block-consumable");
    var cloneBlockSkill = helper.e(".js-clone-block-skill");
    var cloneBlockAttack = helper.e(".js-clone-block-attack");
    var cloneBlockNote = helper.e(".js-clone-block-note");

    var cloneAddConsumable = cloneBlockConsumable.querySelector(".js-clone-add-consumable");
    var cloneRemoveConsumable = cloneBlockConsumable.querySelector(".js-clone-remove");

    var cloneAddSkill = cloneBlockSkill.querySelector(".js-clone-add-skill");
    var cloneRemoveSkill = cloneBlockSkill.querySelector(".js-clone-remove");

    var cloneAddAttackMelee = cloneBlockAttack.querySelector(".js-clone-add-melee");
    var cloneAddAttackRanged = cloneBlockAttack.querySelector(".js-clone-add-ranged");
    var cloneRemoveAttack = cloneBlockAttack.querySelector(".js-clone-remove");

    var cloneAddCharacterNote = cloneBlockNote.querySelector(".js-clone-add-character-note");
    var cloneAddStoryNote = cloneBlockNote.querySelector(".js-clone-add-story-note");
    var cloneRemoveNote = cloneBlockNote.querySelector(".js-clone-remove");

    cloneAddConsumable.addEventListener("click", function() {
      _addNewClone("consumable");
      sheet.storeCharacters();
    }, false);

    cloneAddSkill.addEventListener("click", function() {
      _addNewClone("skill");
      sheet.storeCharacters();
    }, false);

    cloneAddAttackMelee.addEventListener("click", function() {
      _addNewClone("attack-melee");
      sheet.storeCharacters();
    }, false);

    cloneAddAttackRanged.addEventListener("click", function() {
      _addNewClone("attack-ranged");
      sheet.storeCharacters();
    }, false);

    cloneAddCharacterNote.addEventListener("click", function() {
      _addNewClone("note-character");
      sheet.storeCharacters();
    }, false);

    cloneAddStoryNote.addEventListener("click", function() {
      _addNewClone("note-story");
      sheet.storeCharacters();
    }, false);

    cloneRemoveAttack.addEventListener("click", function() {
      _change_cloneState("attack");
    }, false);

    cloneRemoveConsumable.addEventListener("click", function() {
      _change_cloneState("consumable");
    }, false);

    cloneRemoveSkill.addEventListener("click", function() {
      _change_cloneState("skill");
    }, false);

    cloneRemoveNote.addEventListener("click", function() {
      _change_cloneState("note");
    }, false);
  };

  function _bind_cloneRemoveButton(button, cloneType) {
    button.addEventListener("click", function() {
      _store_lastRemovedClone(this, cloneType);
      _update_clones(this, cloneType);
      _checkCloneState(cloneType, true);
      _update_clonePlaceholder(cloneType);
      sheet.storeCharacters();
    }, false);
  };

  function _bind_clone(cloneType, newClone) {
    if (cloneType == "consumable") {
      _bind_totalBlock(newClone.querySelector(".js-total-block"));
      _bind_inputBlock(newClone.querySelectorAll(".js-input-block"));
    };
    if (cloneType == "skill") {
      _bind_totalBlock(newClone.querySelector(".js-total-block"));
      _bind_inputBlock(newClone.querySelectorAll(".js-input-block"));
    };
    if (cloneType == "attack-melee") {
      _bind_inputBlock(newClone.querySelectorAll(".js-input-block"));
    };
    if (cloneType == "attack-ranged") {
      _bind_inputBlock(newClone.querySelectorAll(".js-input-block"));
    };
    if (cloneType == "note-character") {
      _bind_textareaBlock(newClone.querySelectorAll(".js-textarea-block"));
    };
    if (cloneType == "note-story") {
      _bind_textareaBlock(newClone.querySelectorAll(".js-textarea-block"));
    };
  };

  function _addNewClone(cloneType) {
    if (_get_cloneCount(cloneType) <= 99) {
      _add_cloneObject(cloneType);
      _render_clone(cloneType);
      _update_clonePlaceholder(cloneType);
      _smoothScrollToClones(cloneType);
    } else {
      _render_maxClonesSnack(cloneType);
    };
  };

  function _render_clone(cloneType) {
    var cloneTarget = _get_cloneTarget(cloneType);
    var cloneLength = _get_cloneCount(cloneType);
    var cloneIndex = cloneLength - 1;
    var cloneString = _get_cloneString(cloneType, cloneIndex);
    // make new clone node
    var newClone = document.createElement("div");
    newClone.setAttribute("id", "clone-" + cloneType + "-" + cloneIndex);
    newClone.setAttribute("class", "m-clone js-clone");
    newClone.setAttribute("data-clone-count", cloneIndex);
    // add content
    newClone.innerHTML = cloneString;
    var newCloneFlash = document.createElement("span");
    newCloneFlash.setAttribute("class", "m-clone-flash");
    newCloneFlash.addEventListener("animationend", function(event, elapsed) {
      this.remove();
    }.bind(newCloneFlash), false);
    var cloneBlockDelete = newClone.querySelector(".js-clone-block-delete");
    var cloneBlockContent = newClone.querySelector(".js-clone-block-content");
    helper.addClass(cloneBlockContent, "is-small");
    cloneBlockContent.appendChild(newCloneFlash);
    // append new clone
    cloneTarget.appendChild(newClone);
    getComputedStyle(cloneBlockContent).transform;
    helper.removeClass(cloneBlockContent, "is-small");
    // bind listeners
    _bind_clone(cloneType, newClone);
    _bind_cloneRemoveButton(cloneBlockDelete, cloneType);
  };

  function _render_all_clones(cloneType) {
    var cloneTarget = _get_cloneTarget(cloneType);
    var cloneLength = _get_cloneCount(cloneType);
    for (var i = 0; i < cloneLength; i++) {
      var cloneIndex = i;
      // make new clone node
      var cloneString = _get_cloneString(cloneType, cloneIndex);
      var newClone = document.createElement("div");
      newClone.setAttribute("id", "clone-" + cloneType + "-" + cloneIndex);
      newClone.setAttribute("class", "m-clone js-clone");
      newClone.setAttribute("data-clone-count", cloneIndex);
      // add content
      newClone.innerHTML = cloneString;
      // append new clone
      cloneTarget.appendChild(newClone);
      _bind_cloneRemoveButton(newClone.querySelector(".js-clone-block-delete"), cloneType);
    };
  };

  function _render_maxClonesSnack(cloneType) {
    snack.render(_get_maxCloneMessage(cloneType));
  };

  function _update_cloneInput(array, cloneType) {
    var cloneBlock = _get_cloneBlock(cloneType);
    var cloneTarget = _get_cloneTarget(cloneType);
    for (var i = 0; i < array.length; i++) {
      for (var j in array[i]) {
        var input;
        if (cloneType == "consumable") {
          input = cloneTarget.querySelector("#consumable-" + j.replace(/_/g, "-") + "-" + i);
        };
        if (cloneType == "skill") {
          input = cloneTarget.querySelector("#skill-" + j.replace(/_/g, "-") + "-" + i);
        };
        if (cloneType == "attack-melee") {
          input = cloneTarget.querySelector("#attack-melee-" + j.replace(/_/g, "-") + "-" + i);
        };
        if (cloneType == "attack-ranged") {
          input = cloneTarget.querySelector("#attack-ranged-" + j.replace(/_/g, "-") + "-" + i);
        };
        if (input) {
          input.value = array[i][j];
        };
      };
    };
  };

  function _update_cloneTextarea(array, cloneType) {
    var cloneBlock = _get_cloneBlock(cloneType);
    var cloneTarget = _get_cloneTarget(cloneType);
    for (var i = 0; i < array.length; i++) {
      for (var j in array[i]) {
        var textarea;
        if (cloneType == "note-character") {
          textarea = cloneTarget.querySelector("#note-character-" + i);
        };
        if (cloneType == "note-story") {
          textarea = cloneTarget.querySelector("#note-story-" + i);
        };
        if (textarea) {
          textarea.innerHTML = array[i][j];
        };
      };
    };
  };

  function _checkCloneState(cloneType) {
    var cloneBlock = _get_cloneBlock(cloneType);
    var cloneTarget = _get_cloneTarget(cloneType);
    var cloneCount = _get_cloneCount(cloneType, true);
    var cloneControls = cloneBlock.querySelector(".js-clone-controls");
    var cloneRemoveButton = cloneControls.querySelector(".js-clone-remove");
    if (cloneCount == 0) {
      cloneBlock.dataset.deleteCloneState = "false";
      helper.removeClass(cloneBlock, "is-delete-state");
      helper.removeClass(cloneRemoveButton, "is-active");
    };
  };

  function _update_clones(button, cloneType) {
    var cloneIndex = parseInt(helper.getClosest(button, ".js-clone").dataset.cloneCount, 10);
    var undoMessage = _get_undoRemoveCloneMessage(cloneType);
    _remove_cloneObject(cloneType, cloneIndex);
    _clear_cloneTarget(cloneType);
    _render_all_clones(cloneType);
    // _update_cloneInput(_get_cloneObjects(cloneType), cloneType);
    // _update_cloneTextarea(_get_cloneObjects(cloneType), cloneType);
    _update_clonePlaceholder(undoData.cloneType);
    snack.render(undoMessage, "Undo", _restoreLastRemovedClone, 6000);
    totalBlock.render();
  };

  function _restoreLastRemovedClone() {
    var undoData = JSON.parse(helper.read("lastRemovedClone"));
    _restoreCloneObject(undoData.cloneType, undoData.index, undoData.clone);
    _clear_cloneTarget(undoData.cloneType);
    _render_all_clones(undoData.cloneType);
    // _update_cloneInput(_get_cloneObjects(undoData.cloneType), undoData.cloneType);
    // _update_cloneTextarea(_get_cloneObjects(undoData.cloneType), undoData.cloneType);
    _update_clonePlaceholder(undoData.cloneType);
    _remove_lastRemovedClone();
    totalBlock.render();
  };

  function _store_lastRemovedClone(button, cloneType) {
    var cloneIndex = parseInt(helper.getClosest(button, ".js-clone").dataset.cloneCount, 10);
    var object = {
      cloneType: cloneType,
      index: cloneIndex,
      clone: {}
    };
    if (cloneType == "consumable") {
      object.clone = sheet.getCharacter().equipment.consumable[cloneIndex];
    };
    if (cloneType == "skill") {
      object.clone = sheet.getCharacter().skills.custom[cloneIndex];
    };
    if (cloneType == "attack-melee") {
      object.clone = sheet.getCharacter().offense.attack.melee[cloneIndex];
    };
    if (cloneType == "attack-ranged") {
      object.clone = sheet.getCharacter().offense.attack.ranged[cloneIndex];
    };
    if (cloneType == "note-character") {
      object.clone = sheet.getCharacter().notes.character[cloneIndex];
    };
    if (cloneType == "note-story") {
      object.clone = sheet.getCharacter().notes.story[cloneIndex];
    };
    helper.store("lastRemovedClone", JSON.stringify(object));
  };

  function _remove_lastRemovedClone() {
    helper.remove("lastRemovedClone");
  };

  function _remove_cloneObject(cloneType, index) {
    if (cloneType == "consumable") {
      sheet.getCharacter().equipment.consumable.splice(index, 1);
    };
    if (cloneType == "skill") {
      sheet.getCharacter().skills.custom.splice(index, 1);
    };
    if (cloneType == "attack-melee") {
      sheet.getCharacter().offense.attack.melee.splice(index, 1);
    };
    if (cloneType == "attack-ranged") {
      sheet.getCharacter().offense.attack.ranged.splice(index, 1);
    };
    if (cloneType == "note-character") {
      sheet.getCharacter().notes.character.splice(index, 1);
    };
    if (cloneType == "note-story") {
      sheet.getCharacter().notes.story.splice(index, 1);
    };
  };

  function _restoreCloneObject(cloneType, index, cloneObject) {
    if (cloneType == "consumable") {
      sheet.getCharacter().equipment.consumable.splice(index, 0, cloneObject);
    };
    if (cloneType == "skill") {
      sheet.getCharacter().skills.custom.splice(index, 0, cloneObject);
    };
    if (cloneType == "attack-melee") {
      sheet.getCharacter().offense.attack.melee.splice(index, 0, cloneObject);
    };
    if (cloneType == "attack-ranged") {
      sheet.getCharacter().offense.attack.ranged.splice(index, 0, cloneObject);
    };
    if (cloneType == "note-character") {
      sheet.getCharacter().notes.character.splice(index, 0, cloneObject);
    };
    if (cloneType == "note-story") {
      sheet.getCharacter().notes.story.splice(index, 0, cloneObject);
    };
  };

  var storeInputTimer = null;
  var storeBlurTimer = null;

  function delayUpdate(cloneType, element) {
    var clone = helper.getClosest(element, ".js-clone");
    var cloneIndex = parseInt(clone.dataset.cloneCount, 10);
    _update_cloneObject(cloneType, cloneIndex, clone);
    totalBlock.render();
    sheet.storeCharacters();
    if (body.dataset.displayMode == "true") {
      display.clear();
      display.render();
    };
  };

  function _bind_totalBlock(totalBlockeElement) {
    totalBlock.bind(totalBlockeElement);
  };

  function _bind_inputBlock(inputBlockElement) {
    for (var i = 0; i < inputBlockElement.length; i++) {
      inputBlock.bind(inputBlockElement[i]);
    };
  };

  function _bind_textareaBlock(textareaBlockElement) {
    for (var i = 0; i < textareaBlockElement.length; i++) {
      textareaBlock.bind(textareaBlockElement[i]);
    };
  };

  function _change_cloneState(cloneType) {
    var cloneBlock = helper.e(".js-clone-block-" + cloneType);
    var cloneControls = cloneBlock.querySelector(".js-clone-controls");
    var cloneRemoveButton = cloneControls.querySelector(".js-clone-remove");
    var cloneCount = _get_cloneCount(cloneType);
    // change clone remove button
    helper.toggleClass(cloneRemoveButton, "is-active");
    // change clone block state
    if (cloneBlock.dataset.deleteCloneState == "false" || !cloneBlock.dataset.deleteCloneState) {
      helper.addClass(cloneBlock, "is-delete-state");
      cloneBlock.dataset.deleteCloneState = "true";
    } else {
      helper.removeClass(cloneBlock, "is-delete-state");
      cloneBlock.dataset.deleteCloneState = "false";
    };
    // if clone count is 0 restore all classes to normal
    if (cloneCount == 0) {
      helper.removeClass(cloneBlock, "is-delete-state");
      cloneBlock.dataset.deleteCloneState = "false";
      helper.removeClass(cloneRemoveButton, "is-active");
    };
  };

  function _create_attackMeleeObject(weapon, attack, damage, critical) {
    return {
      weapon: this.weapon = weapon || "",
      attack: this.attack = attack || "",
      damage: this.damage = damage || "",
      critical: this.critical = critical || ""
    };
  };

  function _create_attackRangedObject(weapon, attack, damage, critical, range, ammo) {
    return {
      weapon: this.weapon = weapon || "",
      attack: this.attack = attack || "",
      damage: this.damage = damage || "",
      critical: this.critical = critical || "",
      range: this.range = range || "",
      ammo: this.ammo = ammo || ""
    };
  };

  function _create_consumableObject(item, current, total, used) {
    return {
      item: this.item = item || "",
      current: this.current = current || "",
      total: this.total = total || "",
      used: this.used = used || ""
    };
  };

  function _create_skillObject(name, ranks, misc) {
    return {
      name: this.name = name || "",
      ranks: this.ranks = ranks || "",
      misc: this.misc = misc || "",
      bonuses: this.bonuses = {
        class_skill: false,
        str_bonus: false,
        dex_bonus: false,
        con_bonus: false,
        int_bonus: false,
        wis_bonus: false,
        cha_bonus: false,
        level: false,
        half_level: false,
        check_penalty: false
      }
    };
  };

  function _create_noteCharacter(data) {
    return {
      note: this.data = data || ""
    };
  };

  function _create_noteStory(data) {
    return {
      note: this.data = data || ""
    };
  };

  function _add_cloneObject(cloneType) {
    if (_get_cloneCount(cloneType) <= 99) {
      _get_cloneObjects(cloneType).push(new _get_newCloneObject(cloneType));
    };
  };

  function _update_cloneObject(cloneType, cloneIndex, clone) {
    if (cloneType == "attack-melee") {
      var weapon = clone.querySelector(".js-clone-attack-melee-weapon").value;
      var attack = clone.querySelector(".js-clone-attack-melee-attack").value;
      var damage = clone.querySelector(".js-clone-attack-melee-damage").value;
      var critical = clone.querySelector(".js-clone-attack-melee-critical").value;
      var newAttackMelee = new _create_attackMeleeObject(weapon, attack, damage, critical);
      sheet.getCharacter().offense.attack.melee[cloneIndex] = newAttackMelee;
    };
    if (cloneType == "attack-ranged") {
      var weapon = clone.querySelector(".js-clone-attack-ranged-weapon").value;
      var attack = clone.querySelector(".js-clone-attack-ranged-attack").value;
      var damage = clone.querySelector(".js-clone-attack-ranged-damage").value;
      var critical = clone.querySelector(".js-clone-attack-ranged-critical").value;
      var range = clone.querySelector(".js-clone-attack-ranged-range").value;
      var ammo = clone.querySelector(".js-clone-attack-ranged-ammo").value;
      var newAttackRanged = new _create_attackRangedObject(weapon, attack, damage, critical, range, ammo);
      sheet.getCharacter().offense.attack.ranged[cloneIndex] = newAttackRanged;
    };
    if (cloneType == "consumable") {
      var item = clone.querySelector(".js-clone-consumable-item").value;
      var current = clone.querySelector(".js-clone-consumable-current").innerHTML;
      var total = clone.querySelector(".js-clone-consumable-total").value;
      var used = clone.querySelector(".js-clone-consumable-used").value;
      var newConsumable = new _create_consumableObject(item, current, total, used);
      sheet.getCharacter().equipment.consumable[cloneIndex] = newConsumable;
    };
    if (cloneType == "skill") {
      var name = clone.querySelector(".js-clone-skill-name").value;
      var ranks = clone.querySelector(".js-clone-skill-ranks").value;
      var misc = clone.querySelector(".js-clone-skill-misc").value;
      var newSkill = new _create_skillObject(name, ranks, misc);
      sheet.getCharacter().skills.custom[cloneIndex] = newSkill;
    };
    if (cloneType == "note-character") {
      var textarea = clone.querySelector(".js-textarea-block-field").innerHTML;
      var newCharacterNote = new _create_noteCharacter(textarea);
      sheet.getCharacter().notes.character[cloneIndex] = newCharacterNote;
    };
    if (cloneType == "note-story") {
      var textarea = clone.querySelector(".js-textarea-block-field").innerHTML;
      var newStoryNote = new _create_noteStory(textarea);
      sheet.getCharacter().notes.story[cloneIndex] = newStoryNote;
    };
  };

  function _update_clonePlaceholder(cloneType) {
    var clonePlaceholder = _get_placeholderClone(cloneType);
    if (_get_cloneCount(cloneType) == 0) {
      helper.removeClass(clonePlaceholder, "is-hidden");
    } else {
      helper.addClass(clonePlaceholder, "is-hidden");
    };
  };

  function clear() {
    var all_cloneTarget = helper.eA(".js-clone-block-target");
    for (var i = 0; i < all_cloneTarget.length; i++) {
      // console.log(all_cloneTarget[i].classList[2], "cleared");
      while (all_cloneTarget[i].lastChild) {
        all_cloneTarget[i].removeChild(all_cloneTarget[i].lastChild);
      };
    };
  };

  function _clear_cloneTarget(cloneType) {
    var cloneTarget = _get_cloneTarget(cloneType);
    while (cloneTarget.lastChild) {
      cloneTarget.removeChild(cloneTarget.lastChild);
    };
  };

  // exposed methods
  return {
    bind: bind,
    clear: clear,
    render: render
  };

})();
