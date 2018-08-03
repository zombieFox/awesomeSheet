var clone = (function() {

  function render() {
    _render_all_clones("class");
    _render_all_clones("attack-melee");
    _render_all_clones("attack-ranged");
    _render_all_clones("consumable");
    _render_all_clones("power");
    _render_all_clones("item");
    _render_all_clones("skill");
    _render_all_clones("note-character");
    _render_all_clones("note-story");
    _update_clonePlaceholder("class");
    _update_clonePlaceholder("attack-melee");
    _update_clonePlaceholder("attack-ranged");
    _update_clonePlaceholder("consumable");
    _update_clonePlaceholder("power");
    _update_clonePlaceholder("item");
    _update_clonePlaceholder("skill");
    _update_clonePlaceholder("note-character");
    _update_clonePlaceholder("note-story");
    _update_clonePrefix("item");
    _update_cloneSuffix("item");
  };

  function _get_cloneObjects(cloneType) {
    var object;
    if (cloneType == "class") {
      object = helper.getObject({
        object: sheet.get(),
        path: "basics.classes.all"
      });
    };
    if (cloneType == "consumable") {
      object = helper.getObject({
        object: sheet.get(),
        path: "equipment.consumable.all"
      });
    };
    if (cloneType == "power") {
      object = helper.getObject({
        object: sheet.get(),
        path: "statistics.power.all"
      });
    };
    if (cloneType == "item") {
      object = helper.getObject({
        object: sheet.get(),
        path: "equipment.item.all"
      });
    };
    if (cloneType == "skill") {
      object = helper.getObject({
        object: sheet.get(),
        path: "skills.custom.all"
      });
    };
    if (cloneType == "attack-melee") {
      object = helper.getObject({
        object: sheet.get(),
        path: "offense.attack.melee.all"
      });
    };
    if (cloneType == "attack-ranged") {
      object = helper.getObject({
        object: sheet.get(),
        path: "offense.attack.ranged.all"
      });
    };
    if (cloneType == "note-character") {
      object = helper.getObject({
        object: sheet.get(),
        path: "notes.character.all"
      });
    };
    if (cloneType == "note-story") {
      object = helper.getObject({
        object: sheet.get(),
        path: "notes.story.all"
      });
    };
    return object;
  };

  function _get_cloneString(cloneType, cloneIndex) {
    var cloneString;
    if (cloneType == "class") {
      cloneString =
        '<div class="m-clone-block-content js-clone-block-content">' +
        '  <div class="m-edit-box-content m-edit-box-content-outline m-edit-box-content-margin-large">' +
        '    <div class="m-edit-box-item-20 m-edit-box-group">' +
        '      <div class="m-edit-box-item-100">' +
        '        <div class="m-input-block js-input-block js-basics-class-level" data-input-block-options="path:basics.classes.all[' + cloneIndex + ']name,clone:true">' +
        '          <label class="m-input-block-label js-input-block-label" for="basics-classes-all-' + cloneIndex + '-name">Class Name</label>' +
        '          <input id="basics-classes-all-' + cloneIndex + '-name" class="m-input-block-field u-full-width js-input-block-field" type="text" tabindex="1">' +
        '        </div>' +
        '      </div>' +
        '      <div class="m-edit-box-item-8">' +
        '        <div class="m-input-block js-input-block js-basics-class-level" data-input-block-options="path:basics.classes.all[' + cloneIndex + ']level,type:integer,clone:true">' +
        '          <label class="m-input-block-label js-input-block-label" for="basics-classes-all-' + cloneIndex + '-level">Levels</label>' +
        '          <input id="basics-classes-all-' + cloneIndex + '-level" class="m-input-block-field u-full-width u-text-center js-input-block-field js-tip" data-tip-options="message:Total number of Levels in this Class.,state:focus,clone:true" type="number" tabindex="1">' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '    <div class="m-edit-box-item-12 m-edit-box-group">' +
        '      <div class="m-edit-box-item">' +
        '        <div class="m-input-block js-input-block" data-input-block-options="path:basics.classes.all[' + cloneIndex + ']hp.base,type:integer,clone:true">' +
        '          <label class="m-input-block-label js-input-block-label" for="basics-classes-all-' + cloneIndex + '-hp-base">HP</label>' +
        '          <input id="basics-classes-all-' + cloneIndex + '-hp-base" class="m-input-block-field u-full-width u-text-center js-input-block-field js-tip" data-tip-options="message:HP for all Levels in this Class. CON bonuses will automatically ba added.,state:focus,clone:true" type="number" tabindex="1">' +
        '        </div>' +
        '      </div>' +
        '      <div class="m-edit-box-item">' +
        '        <div class="m-input-block js-input-block" data-input-block-options="path:basics.classes.all[' + cloneIndex + ']hp.favoured,type:integer,clone:true">' +
        '          <label class="m-input-block-label js-input-block-label" for="basics-classes-all-' + cloneIndex + '-hp-favoured">Favoured HP</label>' +
        '          <input id="basics-classes-all-' + cloneIndex + '-hp-favoured" class="m-input-block-field u-full-width u-text-center js-input-block-field js-tip" data-tip-options="message:Favored Class HP for all Levels in this Class.,state:focus,clone:true" type="number" tabindex="1">' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '    <div class="m-edit-box-item-12 m-edit-box-group">' +
        '      <div class="m-edit-box-item">' +
        '        <div class="m-input-block js-input-block" data-input-block-options="path:basics.classes.all[' + cloneIndex + ']ranks.base,type:integer,clone:true">' +
        '          <label class="m-input-block-label js-input-block-label" for="basics-classes-all-' + cloneIndex + '-ranks-base">Ranks</label>' +
        '          <input id="basics-classes-all-' + cloneIndex + '-ranks-base" class="m-input-block-field u-full-width u-text-center js-input-block-field js-tip" data-tip-options="message:Skill Ranks for all Levels in this Class. INT bonuses will automatically be added.,state:focus,clone:true" type="number" tabindex="1">' +
        '        </div>' +
        '      </div>' +
        '      <div class="m-edit-box-item">' +
        '        <div class="m-input-block js-input-block" data-input-block-options="path:basics.classes.all[' + cloneIndex + ']ranks.favoured,type:integer,clone:true">' +
        '          <label class="m-input-block-label js-input-block-label" for="basics-classes-all-' + cloneIndex + '-ranks-favoured">Favoured Ranks</label>' +
        '          <input id="basics-classes-all-' + cloneIndex + '-ranks-favoured" class="m-input-block-field u-full-width u-text-center js-input-block-field js-tip" data-tip-options="message:Favored Class Skill Ranks for all Levels in this Class.,state:focus,clone:true" type="number" tabindex="1">' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '    <div class="m-edit-box-item-4">' +
        '      <div class="m-input-block js-input-block" data-input-block-options="path:basics.classes.all[' + cloneIndex + ']bab,type:integer,clone:true">' +
        '        <label class="m-input-block-label js-input-block-label" for="basics-classes-all-' + cloneIndex + '-bab">Highest BAB</label>' +
        '        <input id="basics-classes-all-' + cloneIndex + '-bab" class="m-input-block-field u-full-width u-text-center js-input-block-field js-tip" data-tip-options="message:The highest BAB for this Class at this Level. Additional attacks will automatically be added.,state:focus,clone:true" type="number" tabindex="1">' +
        '      </div>' +
        '    </div>' +
        '    <div class="m-edit-box-item-20 m-edit-box-group">' +
        '      <div class="m-edit-box-item">' +
        '        <div class="m-input-block js-input-block" data-input-block-options="path:basics.classes.all[' + cloneIndex + ']saves.fortitude,type:integer,clone:true">' +
        '          <label class="m-input-block-label js-input-block-label" for="basics-classes-all-' + cloneIndex + '-saves-fortitude">Fortitude Base</label>' +
        '          <input id="basics-classes-all-' + cloneIndex + '-saves-fortitude" class="m-input-block-field u-full-width u-text-center js-input-block-field js-tip" data-tip-options="message:Fortitude base save for this Class at this Level.,state:focus,clone:true" type="number" tabindex="1">' +
        '        </div>' +
        '      </div>' +
        '      <div class="m-edit-box-item">' +
        '        <div class="m-input-block js-input-block" data-input-block-options="path:basics.classes.all[' + cloneIndex + ']saves.reflex,type:integer,clone:true">' +
        '          <label class="m-input-block-label js-input-block-label" for="basics-classes-all-' + cloneIndex + '-saves-reflex">Reflex Base</label>' +
        '          <input id="basics-classes-all-' + cloneIndex + '-saves-reflex" class="m-input-block-field u-full-width u-text-center js-input-block-field js-tip" data-tip-options="message:Reflex base save for this Class at this Level.,state:focus,clone:true" type="number" tabindex="1">' +
        '        </div>' +
        '      </div>' +
        '      <div class="m-edit-box-item">' +
        '        <div class="m-input-block js-input-block" data-input-block-options="path:basics.classes.all[' + cloneIndex + ']saves.will,type:integer,clone:true">' +
        '          <label class="m-input-block-label js-input-block-label" for="basics-classes-all-' + cloneIndex + '-saves-will">Will Base</label>' +
        '          <input id="basics-classes-all-' + cloneIndex + '-saves-will" class="m-input-block-field u-full-width u-text-center js-input-block-field js-tip" data-tip-options="message:Will base save for this Class at this Level.,state:focus,clone:true" type="number" tabindex="1">' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>' +
        '<div class="m-clone-block-delete-controls">' +
        '  <button class="u-inline-with-input u-no-margin button button-icon button-large button-primary js-clone-block-delete" tabindex="-1"><span class="icon-close"></span></button>' +
        '</div>';
    };
    if (cloneType == "consumable") {
      cloneString =
        '<div class="m-clone-block-content js-clone-block-content">' +
        '  <div class="js-total-block" data-total-block-options="path:equipment.consumable.all[' + cloneIndex + '],addition:+total,subtraction:+used,clone:true">' +
        '    <div class="m-edit-box-content m-edit-box-content-outline m-edit-box-content-margin-large">' +
        '      <div class="m-edit-box-item-100 m-edit-box-group">' +
        '        <div class="m-edit-box-item-100">' +
        '          <div class="m-input-block js-input-block" data-input-block-options="path:equipment.consumable.all[' + cloneIndex + ']name,clone:true">' +
        '            <label class="m-input-block-label js-input-block-label" for="consumable-name-' + cloneIndex + '">Consumables</label>' +
        '            <input id="consumable-name-' + cloneIndex + '" class="m-input-block-field u-full-width js-input-block-field" type="text" tabindex="1">' +
        '          </div>' +
        '        </div>' +
        '        <div class="m-edit-box-item-total">' +
        '          <p class="m-edit-box-label">Remaining</p>' +
        '          <p class="m-edit-box-total js-text-block" data-text-block-options="path:equipment.consumable.all[' + cloneIndex + ']current,clone:true"></p>' +
        '        </div>' +
        '      </div>' +
        '      <div class="m-edit-box-item-16 m-edit-box-group">' +
        '        <div class="m-edit-box-item-button-md">' +
        '          <a href="javascript:void(0)" class="u-inline-with-input u-no-margin button button-large button-icon button-thin js-input-block-increment" data-input-block-increment-options="target:consumable-total-' + cloneIndex + ',clone:true,action:subtraction" tabindex="1"><span class="icon-remove"></span></a>' +
        '        </div>' +
        '        <div class="m-edit-box-item">' +
        '          <div class="m-input-block js-input-block" data-input-block-options="path:equipment.consumable.all[' + cloneIndex + ']total,type:integer,minimum:0,noZero:true,clone:true">' +
        '            <label class="m-input-block-label js-input-block-label" for="consumable-total-' + cloneIndex + '">Total</label>' +
        '            <input id="consumable-total-' + cloneIndex + '" class="m-input-block-field u-full-width u-text-center js-input-block-field" type="number" tabindex="1">' +
        '          </div>' +
        '        </div>' +
        '        <div class="m-edit-box-item-button-md">' +
        '          <a href="javascript:void(0)" class="u-inline-with-input u-no-margin button button-large button-icon button-thin js-input-block-increment" data-input-block-increment-options="target:consumable-total-' + cloneIndex + ',clone:true,action:addition" tabindex="1"><span class="icon-add"></span></a>' +
        '        </div>' +
        '        <div class="m-edit-box-item-button-md">' +
        '          <a href="javascript:void(0)" class="u-inline-with-input u-no-margin button button-large button-icon button-thin js-input-block-increment" data-input-block-increment-options="target:consumable-total-' + cloneIndex + ',clone:true,action:clear,promptHeading:Clear Consumable Total?,promptMessage:Are you sure you want to clear the Consumable Total count?" tabindex="1"><span class="icon-close"></span></a>' +
        '        </div>' +
        '      </div>' +
        '      <div class="m-edit-box-item-16 m-edit-box-group">' +
        '        <div class="m-edit-box-item-button-md">' +
        '          <a href="javascript:void(0)" class="u-inline-with-input u-no-margin button button-large button-icon button-thin js-input-block-increment" data-input-block-increment-options="target:consumable-used-' + cloneIndex + ',clone:true,action:subtraction" tabindex="1"><span class="icon-remove"></span></a>' +
        '        </div>' +
        '        <div class="m-edit-box-item">' +
        '          <div class="m-input-block js-input-block" data-input-block-options="path:equipment.consumable.all[' + cloneIndex + ']used,type:integer,minimum:0,noZero:true,clone:true">' +
        '            <label class="m-input-block-label js-input-block-label" for="consumable-used-' + cloneIndex + '">Used</label>' +
        '            <input id="consumable-used-' + cloneIndex + '" class="m-input-block-field u-full-width u-text-center js-input-block-field" type="number" tabindex="1">' +
        '          </div>' +
        '        </div>' +
        '        <div class="m-edit-box-item-button-md">' +
        '          <a href="javascript:void(0)" class="u-inline-with-input u-no-margin button button-large button-icon button-thin js-input-block-increment" data-input-block-increment-options="target:consumable-used-' + cloneIndex + ',clone:true,action:addition" tabindex="1"><span class="icon-add"></span></a>' +
        '        </div>' +
        '        <div class="m-edit-box-item-button-md">' +
        '          <a href="javascript:void(0)" class="u-inline-with-input u-no-margin button button-large button-icon button-thin js-input-block-increment" data-input-block-increment-options="target:consumable-used-' + cloneIndex + ',clone:true,action:clear,promptHeading:Clear Consumable Used?,promptMessage:Are you sure you want to clear the Consumable Used count?" tabindex="1"><span class="icon-close"></span></a>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>' +
        '<div class="m-clone-block-delete-controls">' +
        '  <button class="u-inline-with-input u-no-margin button button-icon button-large button-primary js-clone-block-delete" tabindex="-1"><span class="icon-close"></span></button>' +
        '</div>'
    };
    if (cloneType == "power") {
      cloneString =
        '<div class="m-clone-block-content js-clone-block-content">' +
        '  <div class="js-total-block" data-total-block-options="path:statistics.power.all[' + cloneIndex + '],addition:+total,subtraction:+used,clone:true">' +
        '    <div class="m-edit-box-content m-edit-box-content-outline m-edit-box-content-margin-large">' +
        '      <div class="m-edit-box-item-100 m-edit-box-group">' +
        '        <div class="m-edit-box-item-100">' +
        '          <div class="m-input-block js-input-block" data-input-block-options="path:statistics.power.all[' + cloneIndex + ']name,clone:true">' +
        '            <label class="m-input-block-label js-input-block-label" for="power-name-' + cloneIndex + '">Power</label>' +
        '            <input id="power-name-' + cloneIndex + '" class="m-input-block-field u-full-width js-input-block-field" type="text" tabindex="1">' +
        '          </div>' +
        '        </div>' +
        '        <div class="m-edit-box-item-total">' +
        '          <p class="m-edit-box-label">Remaining</p>' +
        '          <p class="m-edit-box-total js-text-block" data-text-block-options="path:statistics.power.all[' + cloneIndex + ']current,clone:true"></p>' +
        '        </div>' +
        '      </div>' +
        '      <div class="m-edit-box-item-16 m-edit-box-group">' +
        '        <div class="m-edit-box-item-button-md">' +
        '          <a href="javascript:void(0)" class="u-inline-with-input u-no-margin button button-large button-icon button-thin js-input-block-increment" data-input-block-increment-options="target:power-total-' + cloneIndex + ',clone:true,action:subtraction" tabindex="1"><span class="icon-remove"></span></a>' +
        '        </div>' +
        '        <div class="m-edit-box-item">' +
        '          <div class="m-input-block js-input-block" data-input-block-options="path:statistics.power.all[' + cloneIndex + ']total,type:integer,minimum:0,noZero:true,clone:true">' +
        '            <label class="m-input-block-label js-input-block-label" for="power-total-' + cloneIndex + '">Total</label>' +
        '            <input id="power-total-' + cloneIndex + '" class="m-input-block-field u-full-width u-text-center js-input-block-field" type="number" tabindex="1">' +
        '          </div>' +
        '        </div>' +
        '        <div class="m-edit-box-item-button-md">' +
        '          <a href="javascript:void(0)" class="u-inline-with-input u-no-margin button button-large button-icon button-thin js-input-block-increment" data-input-block-increment-options="target:power-total-' + cloneIndex + ',clone:true,action:addition" tabindex="1"><span class="icon-add"></span></a>' +
        '        </div>' +
        '        <div class="m-edit-box-item-button-md">' +
        '          <a href="javascript:void(0)" class="u-inline-with-input u-no-margin button button-large button-icon button-thin js-input-block-increment" data-input-block-increment-options="target:power-total-' + cloneIndex + ',clone:true,action:clear,promptHeading:Clear Power Total?,promptMessage:Are you sure you want to clear the Power Total count?" tabindex="1"><span class="icon-close"></span></a>' +
        '        </div>' +
        '      </div>' +
        '      <div class="m-edit-box-item-16 m-edit-box-group">' +
        '        <div class="m-edit-box-item-button-md">' +
        '          <a href="javascript:void(0)" class="u-inline-with-input u-no-margin button button-large button-icon button-thin js-input-block-increment" data-input-block-increment-options="target:power-used-' + cloneIndex + ',clone:true,action:subtraction" tabindex="1"><span class="icon-remove"></span></a>' +
        '        </div>' +
        '        <div class="m-edit-box-item">' +
        '          <div class="m-input-block js-input-block" data-input-block-options="path:statistics.power.all[' + cloneIndex + ']used,type:integer,minimum:0,noZero:true,clone:true">' +
        '            <label class="m-input-block-label js-input-block-label" for="power-used-' + cloneIndex + '">Used</label>' +
        '            <input id="power-used-' + cloneIndex + '" class="m-input-block-field u-full-width u-text-center js-input-block-field" type="number" tabindex="1">' +
        '          </div>' +
        '        </div>' +
        '        <div class="m-edit-box-item-button-md">' +
        '          <a href="javascript:void(0)" class="u-inline-with-input u-no-margin button button-large button-icon button-thin js-input-block-increment" data-input-block-increment-options="target:power-used-' + cloneIndex + ',clone:true,action:addition" tabindex="1"><span class="icon-add"></span></a>' +
        '        </div>' +
        '        <div class="m-edit-box-item-button-md">' +
        '          <a href="javascript:void(0)" class="u-inline-with-input u-no-margin button button-large button-icon button-thin js-input-block-increment" data-input-block-increment-options="target:power-used-' + cloneIndex + ',clone:true,action:clear,promptHeading:Clear Power Used?,promptMessage:Are you sure you want to clear the Power Used count?" tabindex="1"><span class="icon-close"></span></a>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>' +
        '<div class="m-clone-block-delete-controls">' +
        '  <button class="u-inline-with-input u-no-margin button button-icon button-large button-primary js-clone-block-delete" tabindex="-1"><span class="icon-close"></span></button>' +
        '</div>'
    };
    if (cloneType == "item") {
      cloneString =
        '<div class="m-clone-block-content js-clone-block-content">' +
        '  <div class="m-edit-box-content m-edit-box-content-margin-small">' +
        '    <div class="m-edit-box-item-100 m-edit-box-group">' +
        '      <div class="m-edit-box-item-100">' +
        '        <div class="m-input-block js-input-block" data-input-block-options="path:equipment.item.all[' + cloneIndex + ']name,clone:true">' +
        '          <input id="item-name-' + cloneIndex + '" class="m-input-block-field u-full-width js-input-block-field" type="text" tabindex="1">' +
        '        </div>' +
        '      </div>' +
        '      <div class="m-edit-box-item-12">' +
        '        <div class="m-input-block js-input-block" data-input-block-options="path:equipment.item.all[' + cloneIndex + ']weight,type:float,clone:true">' +
        '          <input id="item-weight-' + cloneIndex + '" class="m-input-block-field u-full-width u-text-center js-input-block-field" type="number" tabindex="1">' +
        '        </div>' +
        '      </div>' +
        '      <div class="m-edit-box-item-12">' +
        '        <div class="m-input-block js-input-block" data-input-block-options="path:equipment.item.all[' + cloneIndex + ']value,type:float,clone:true">' +
        '          <input id="item-value-' + cloneIndex + '" class="m-input-block-field u-full-width u-text-center js-input-block-field" type="number" tabindex="1">' +
        '        </div>' +
        '      </div>' +
        '      <div class="m-edit-box-item-12">' +
        '        <div class="m-input-block js-input-block" data-input-block-options="path:equipment.item.all[' + cloneIndex + ']quantity,type:integer,clone:true">' +
        '          <input id="item-quantity-' + cloneIndex + '" class="m-input-block-field u-full-width u-text-center js-input-block-field" type="number" tabindex="1">' +
        '        </div>' +
        '      </div>' +
        '      <div class="m-edit-box-item-check">' +
        '        <div class="m-check-block js-check-block" data-check-block-options="path:equipment.item.all[' + cloneIndex + '].include,clone:true">' +
        '          <input class="m-check-block-check js-check-block-input" type="checkbox" tabindex="1">' +
        '          <span class="m-check-block-check-icon"></span>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>' +
        '<div class="m-clone-block-delete-controls">' +
        '  <button class="u-inline-with-input u-no-margin button button-icon button-large button-primary js-clone-block-delete" tabindex="-1"><span class="icon-close"></span></button>' +
        '</div>';
    };
    if (cloneType == "skill") {
      cloneString =
        '<div class="m-clone-block-content js-clone-block-content">' +
        '  <div class="m-edit-box m-edit-box-indent m-edit-box-head-small m-edit-box-labels js-total-block" data-total-block-options="path:skills.custom.all[' + cloneIndex + '],addition:+ranks+misc+racial+feat+trait,bonuses:+str+dex+con+int+wis+cha+class_skill+level+half_level+check_penalty+size_stealth+size_fly,clone:true">' +
        '    <div class="m-edit-box-head">' +
        '      <div class="m-edit-box-content m-edit-box-content-nowrap m-edit-box-content-margin-large">' +
        '        <div class="m-edit-box-item-100">' +
        '          <div class="m-input-block js-input-block" data-input-block-options="path:skills.custom.all[' + cloneIndex + ']name,clone:true">' +
        '            <input class="m-input-block-field u-full-width u-no-margin js-input-block-field" type="text" tabindex="1" placeholder="Custom skill">' +
        '          </div>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '    <div class="m-edit-box-body">' +
        '      <div class="m-edit-box-content m-edit-box-content-margin-large">' +
        '        <div class="m-edit-box-item-100 m-edit-box-group">' +
        '          <div class="m-edit-box-item-total">' +
        '            <p class="m-edit-box-label">Total</p>' +
        '            <p class="m-edit-box-total js-text-block" data-text-block-options="path:skills.custom.all[' + cloneIndex + ']current,type:bonus,clone:true"></p>' +
        '          </div>' +
        '          <div class="m-edit-box-item">' +
        '            <div class="m-input-block js-input-block" data-input-block-options="path:skills.custom.all[' + cloneIndex + ']ranks,type:integer,clone:true">' +
        '              <label class="m-input-block-label js-input-block-label" for="skills-custom-' + cloneIndex + '-ranks">Ranks</label>' +
        '              <input id="skills-custom-' + cloneIndex + '-ranks" class="m-input-block-field u-full-width u-text-center js-input-block-field js-input-block-field-ranks" type="number" tabindex="1">' +
        '            </div>' +
        '          </div>' +
        '          <div class="m-edit-box-item">' +
        '            <div class="m-input-block js-input-block" data-input-block-options="path:skills.custom.all[' + cloneIndex + ']racial,type:integer,clone:true">' +
        '              <label class="m-input-block-label js-input-block-label" for="skills-custom-' + cloneIndex + '-racial">Racial</label>' +
        '              <input id="skills-custom-' + cloneIndex + '-racial" class="m-input-block-field u-full-width u-text-center js-input-block-field" type="number" tabindex="1">' +
        '            </div>' +
        '          </div>' +
        '          <div class="m-edit-box-item">' +
        '            <div class="m-input-block js-input-block" data-input-block-options="path:skills.custom.all[' + cloneIndex + ']feat,type:integer,clone:true">' +
        '              <label class="m-input-block-label js-input-block-label" for="skills-custom-' + cloneIndex + '-feat">Feat</label>' +
        '              <input id="skills-custom-' + cloneIndex + '-feat" class="m-input-block-field u-full-width u-text-center js-input-block-field" type="number" tabindex="1">' +
        '            </div>' +
        '          </div>' +
        '          <div class="m-edit-box-item">' +
        '            <div class="m-input-block js-input-block" data-input-block-options="path:skills.custom.all[' + cloneIndex + ']trait,type:integer,clone:true">' +
        '              <label class="m-input-block-label js-input-block-label" for="skills-custom-' + cloneIndex + '-trait">Trait</label>' +
        '              <input id="skills-custom-' + cloneIndex + '-trait" class="m-input-block-field u-full-width u-text-center js-input-block-field" type="number" tabindex="1">' +
        '            </div>' +
        '          </div>' +
        '          <div class="m-edit-box-item">' +
        '            <div class="m-input-block js-input-block" data-input-block-options="path:skills.custom.all[' + cloneIndex + ']misc,type:integer,clone:true">' +
        '              <label class="m-input-block-label js-input-block-label" for="skills-custom-' + cloneIndex + '-misc">Misc</label>' +
        '              <input id="skills-custom-' + cloneIndex + '-misc" class="m-input-block-field u-full-width u-text-center js-input-block-field" type="number" tabindex="1">' +
        '            </div>' +
        '          </div>' +
        '          <div class="m-edit-box-item-check">' +
        '            <div class="m-check-block">' +
        '              <label for="skills-custom-' + cloneIndex + '-class-skill" class="m-check-block-label">Class <span class="hidden-xs hidden-sm hidden-md">Skill</span></label>' +
        '              <input id="skills-custom-' + cloneIndex + '-class-skill" class="m-check-block-check m-check-block-check-with-label js-total-block-check" data-total-block-check-options="path:skills.custom.all[' + cloneIndex + ']bonuses,type:class_skill,clone:true" type="checkbox" tabindex="1">' +
        '              <span class="m-check-block-check-icon"></span>' +
        '            </div>' +
        '          </div>' +
        '          <div class="m-edit-box-item-button-sm">' +
        '            <a href="javascript:void(0)" class="u-inline-with-input u-no-margin button button-secondary button-large button-icon button-thin js-total-block-bonuses" data-total-block-bonuses-options="path:skills.custom.all[' + cloneIndex + ']bonuses,modalHeading:Custom Skill bonuses,clone:true" tabindex="1"><span class="icon-more-vertical"></span></a>' +
        '          </div>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>' +
        '<div class="m-clone-block-delete-controls m-clone-block-delete-controls-skill">' +
        '  <button class="u-inline-with-input u-no-margin button button-icon button-large button-primary js-clone-block-delete" tabindex="-1"><span class="icon-close"></span></button>' +
        '</div>';
    };
    if (cloneType == "attack-melee") {
      cloneString =
        '<div class="m-clone-block-content js-clone-block-content">' +
        '  <div class="m-edit-box-content m-edit-box-content-outline m-edit-box-content-margin-large">' +
        '    <div class="m-edit-box-item-100 m-edit-box-group">' +
        '      <div class="m-edit-box-item-100">' +
        '        <div class="m-input-block js-input-block" data-input-block-options="path:offense.attack.melee.all[' + cloneIndex + ']weapon,clone:true">' +
        '          <label class="m-input-block-label js-input-block-label" for="attack-melee-weapon-' + cloneIndex + '">Weapon</label>' +
        '          <input id="attack-melee-weapon-' + cloneIndex + '" class="m-input-block-field u-full-width js-input-block-field" type="text" tabindex="1">' +
        '        </div>' +
        '      </div>' +
        '      <div class="m-edit-box-item-check">' +
        '        <div class="m-check-block js-check-block" data-check-block-options="path:offense.attack.melee.all[' + cloneIndex + '].equipped,clone:true">' +
        '          <label for="attack-melee-' + cloneIndex + '-equipped" class="m-check-block-label">Equipped</label>' +
        '          <input id="attack-melee-' + cloneIndex + '-equipped" class="m-check-block-check m-check-block-check-with-label js-check-block-input" type="checkbox" tabindex="1">' +
        '          <span class="m-check-block-check-icon"></span>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '    <div class="m-edit-box-item-12">' +
        '      <div class="m-input-block js-input-block" data-input-block-options="path:offense.attack.melee.all[' + cloneIndex + ']attack,clone:true">' +
        '        <label class="m-input-block-label js-input-block-label" for="attack-melee-attack-' + cloneIndex + '">Attack</label>' +
        '        <input id="attack-melee-attack-' + cloneIndex + '" class="m-input-block-field u-full-width js-input-block-field" type="text" tabindex="1">' +
        '      </div>' +
        '    </div>' +
        '    <div class="m-edit-box-item-12">' +
        '      <div class="m-input-block js-input-block" data-input-block-options="path:offense.attack.melee.all[' + cloneIndex + ']damage,clone:true">' +
        '        <label class="m-input-block-label js-input-block-label" for="attack-melee-damage-' + cloneIndex + '">Damage</label>' +
        '        <input id="attack-melee-damage-' + cloneIndex + '" class="m-input-block-field u-full-width js-input-block-field" type="text" tabindex="1">' +
        '      </div>' +
        '    </div>' +
        '    <div class="m-edit-box-item-8">' +
        '      <div class="m-input-block js-input-block" data-input-block-options="path:offense.attack.melee.all[' + cloneIndex + ']critical,clone:true">' +
        '        <label class="m-input-block-label js-input-block-label" for="attack-melee-critical-' + cloneIndex + '">Critical</label>' +
        '        <input id="attack-melee-critical-' + cloneIndex + '" class="m-input-block-field u-full-width js-input-block-field" type="text" tabindex="1">' +
        '      </div>' +
        '    </div>' +
        '    <div class="m-edit-box-item-8">' +
        '      <div class="m-input-block js-input-block" data-input-block-options="path:offense.attack.melee.all[' + cloneIndex + ']type,clone:true">' +
        '        <label class="m-input-block-label js-input-block-label" for="attack-melee-type-' + cloneIndex + '">Type</label>' +
        '        <input id="attack-melee-type-' + cloneIndex + '" class="m-input-block-field u-full-width js-input-block-field" type="text" tabindex="1">' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>' +
        '<div class="m-clone-block-delete-controls">' +
        '  <button class="u-inline-with-input u-no-margin button button-icon button-large button-primary js-clone-block-delete" tabindex="-1"><span class="icon-close"></span></button>' +
        '</div>';
    };
    if (cloneType == "attack-ranged") {
      cloneString =
        '<div class="m-clone-block-content js-clone-block-content">' +
        '  <div class="m-edit-box-content m-edit-box-content-outline m-edit-box-content-margin-large">' +
        '    <div class="m-edit-box-item-100 m-edit-box-group">' +
        '      <div class="m-edit-box-item-100">' +
        '        <div class="m-input-block js-input-block" data-input-block-options="path:offense.attack.ranged.all[' + cloneIndex + ']weapon,clone:true">' +
        '          <label class="m-input-block-label js-input-block-label" for="attack-ranged-weapon-' + cloneIndex + '">Weapon</label>' +
        '          <input id="attack-ranged-weapon-' + cloneIndex + '" class="m-input-block-field u-full-width js-input-block-field" type="text" tabindex="1">' +
        '        </div>' +
        '      </div>' +
        '      <div class="m-edit-box-item-check">' +
        '        <div class="m-check-block js-check-block" data-check-block-options="path:offense.attack.ranged.all[' + cloneIndex + '].equipped,clone:true">' +
        '          <label for="attack-ranged-' + cloneIndex + '-equipped" class="m-check-block-label">Equipped</label>' +
        '          <input id="attack-ranged-' + cloneIndex + '-equipped" class="m-check-block-check m-check-block-check-with-label js-check-block-input" type="checkbox" tabindex="1">' +
        '          <span class="m-check-block-check-icon"></span>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '    <div class="m-edit-box-item-12">' +
        '      <div class="m-input-block js-input-block" data-input-block-options="path:offense.attack.ranged.all[' + cloneIndex + ']attack,clone:true">' +
        '        <label class="m-input-block-label js-input-block-label" for="attack-ranged-attack-' + cloneIndex + '">Attack</label>' +
        '        <input id="attack-ranged-attack-' + cloneIndex + '" class="m-input-block-field u-full-width js-input-block-field" type="text" tabindex="1">' +
        '      </div>' +
        '    </div>' +
        '    <div class="m-edit-box-item-12">' +
        '      <div class="m-input-block js-input-block" data-input-block-options="path:offense.attack.ranged.all[' + cloneIndex + ']damage,clone:true">' +
        '        <label class="m-input-block-label js-input-block-label" for="attack-ranged-damage-' + cloneIndex + '">Damage</label>' +
        '        <input id="attack-ranged-damage-' + cloneIndex + '" class="m-input-block-field u-full-width js-input-block-field" type="text" tabindex="1">' +
        '      </div>' +
        '    </div>' +
        '    <div class="m-edit-box-item-8">' +
        '      <div class="m-input-block js-input-block" data-input-block-options="path:offense.attack.ranged.all[' + cloneIndex + ']critical,clone:true">' +
        '        <label class="m-input-block-label js-input-block-label" for="attack-ranged-critical-' + cloneIndex + '">Critical</label>' +
        '        <input id="attack-ranged-critical-' + cloneIndex + '" class="m-input-block-field u-full-width js-input-block-field" type="text" tabindex="1">' +
        '      </div>' +
        '    </div>' +
        '    <div class="m-edit-box-item-8">' +
        '      <div class="m-input-block js-input-block" data-input-block-options="path:offense.attack.ranged.all[' + cloneIndex + ']range,clone:true">' +
        '        <label class="m-input-block-label js-input-block-label" for="attack-ranged-range-' + cloneIndex + '">Range</label>' +
        '        <input id="attack-ranged-range-' + cloneIndex + '" class="m-input-block-field u-full-width js-input-block-field" type="text" tabindex="1">' +
        '      </div>' +
        '    </div>' +
        '    <div class="m-edit-box-item-8">' +
        '      <div class="m-input-block js-input-block" data-input-block-options="path:offense.attack.ranged.all[' + cloneIndex + ']ammo,clone:true">' +
        '        <label class="m-input-block-label js-input-block-label" for="attack-ranged-ammo-' + cloneIndex + '">Ammo</label>' +
        '        <input id="attack-ranged-ammo-' + cloneIndex + '" class="m-input-block-field u-full-width js-input-block-field" type="text" tabindex="1">' +
        '      </div>' +
        '    </div>' +
        '    <div class="m-edit-box-item-8">' +
        '      <div class="m-input-block js-input-block" data-input-block-options="path:offense.attack.ranged.all[' + cloneIndex + ']type,clone:true">' +
        '        <label class="m-input-block-label js-input-block-label" for="attack-ranged-type-' + cloneIndex + '">Type</label>' +
        '        <input id="attack-ranged-type-' + cloneIndex + '" class="m-input-block-field u-full-width js-input-block-field" type="text" tabindex="1">' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>' +
        '<div class="m-clone-block-delete-controls">' +
        '  <button class="u-inline-with-input u-no-margin button button-icon button-large button-primary js-clone-block-delete" tabindex="-1"><span class="icon-close"></span></button>' +
        '</div>';
    };
    if (cloneType == "note-character") {
      cloneString =
        '<div class="m-clone-block-content js-clone-block-content">' +
        '  <div class="m-edit-box-content m-edit-box-content-margin-large">' +
        '    <div class="m-edit-box-item-100">' +
        '      <div class="m-textarea-block js-textarea-block" data-textarea-block-options="path:notes.character.all[' + cloneIndex + ']note,clone:true">' +
        '        <label class="m-textarea-block-label js-textarea-block-label" for="note-character-' + cloneIndex + '">Note</label>' +
        '        <div id="note-character-' + cloneIndex + '" class="m-textarea-block-field textarea textarea-large u-full-width js-textarea-block-field" contentEditable="true" tabindex="1"></div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>' +
        '<div class="m-clone-block-delete-controls m-clone-block-delete-controls-note">' +
        '  <button class="u-inline-with-input u-no-margin button button-icon button-large button-primary js-clone-block-delete" tabindex="-1"><span class="icon-close"></span></button>' +
        '</div>';
    };
    if (cloneType == "note-story") {
      cloneString =
        '<div class="m-clone-block-content js-clone-block-content">' +
        '  <div class="m-edit-box-content m-edit-box-content-margin-large">' +
        '    <div class="m-edit-box-item-100">' +
        '      <div class="m-textarea-block js-textarea-block" data-textarea-block-options="path:notes.story.all[' + cloneIndex + ']note,clone:true">' +
        '        <label class="m-textarea-block-label js-textarea-block-label" for="note-story-' + cloneIndex + '">Note</label>' +
        '        <div id="note-story-' + cloneIndex + '" class="m-textarea-block-field textarea textarea-large u-full-width js-textarea-block-field" contentEditable="true" tabindex="1"></div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>' +
        '<div class="m-clone-block-delete-controls m-clone-block-delete-controls-note">' +
        '  <button class="u-inline-with-input u-no-margin button button-icon button-large button-primary js-clone-block-delete" tabindex="-1"><span class="icon-close"></span></button>' +
        '</div>';
    };
    return cloneString;
  };

  function _get_cloneBlock(cloneType) {
    var cloneBlock;
    if (cloneType == "class") {
      cloneBlock = helper.e(".js-clone-block-class");
    };
    if (cloneType == "attack-melee" || cloneType == "attack-ranged" || cloneType == "attack") {
      cloneBlock = helper.e(".js-clone-block-attack");
    };
    if (cloneType == "item") {
      cloneBlock = helper.e(".js-clone-block-item");
    };
    if (cloneType == "consumable") {
      cloneBlock = helper.e(".js-clone-block-consumable");
    };
    if (cloneType == "power") {
      cloneBlock = helper.e(".js-clone-block-power");
    };
    if (cloneType == "skill") {
      cloneBlock = helper.e(".js-clone-block-skill");
    };
    if (cloneType == "note-character") {
      cloneBlock = helper.e(".js-clone-block-note-character");
    };
    if (cloneType == "note-story") {
      cloneBlock = helper.e(".js-clone-block-note-story");
    };
    return cloneBlock;
  };

  function _get_cloneTarget(cloneType) {
    var cloneTarget;
    if (cloneType == "class") {
      cloneTarget = helper.e(".js-clone-block-target-class");
    };
    if (cloneType == "attack-melee") {
      cloneTarget = helper.e(".js-clone-block-target-attack-melee");
    };
    if (cloneType == "attack-ranged") {
      cloneTarget = helper.e(".js-clone-block-target-attack-ranged");
    };
    if (cloneType == "consumable") {
      cloneTarget = helper.e(".js-clone-block-target-consumable");
    };
    if (cloneType == "power") {
      cloneTarget = helper.e(".js-clone-block-target-power");
    };
    if (cloneType == "item") {
      cloneTarget = helper.e(".js-clone-block-target-item");
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
    if (mixed || cloneType == "attack") {
      if (cloneType == "attack") {
        return _get_cloneObjects("attack-melee").length + _get_cloneObjects("attack-ranged").length;
      } else {
        return _get_cloneObjects(cloneType).length;
      };
    } else {
      return _get_cloneObjects(cloneType).length;
    };
  };

  function _get_placeholderClone(cloneType) {
    var clonePlaceholder;
    if (cloneType == "class") {
      clonePlaceholder = helper.e(".js-placeholder-clone-class");
    };
    if (cloneType == "attack-melee") {
      clonePlaceholder = helper.e(".js-placeholder-clone-attack-melee");
    };
    if (cloneType == "attack-ranged") {
      clonePlaceholder = helper.e(".js-placeholder-clone-attack-ranged");
    };
    if (cloneType == "consumable") {
      clonePlaceholder = helper.e(".js-placeholder-clone-consumable");
    };
    if (cloneType == "power") {
      clonePlaceholder = helper.e(".js-placeholder-clone-power");
    };
    if (cloneType == "item") {
      clonePlaceholder = helper.e(".js-placeholder-clone-item");
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

  function _get_clonePrefix(cloneType) {
    var clonePrefix;
    if (cloneType == "class") {
      clonePrefix = helper.e(".js-clone-block-prefix-class");
    };
    if (cloneType == "attack-melee") {
      clonePrefix = helper.e(".js-clone-block-prefix-attack-melee");
    };
    if (cloneType == "attack-ranged") {
      clonePrefix = helper.e(".js-clone-block-prefix-attack-ranged");
    };
    if (cloneType == "consumable") {
      clonePrefix = helper.e(".js-clone-block-prefix-consumable");
    };
    if (cloneType == "power") {
      clonePrefix = helper.e(".js-clone-block-prefix-power");
    };
    if (cloneType == "item") {
      clonePrefix = helper.e(".js-clone-block-prefix-item");
    };
    if (cloneType == "skill") {
      clonePrefix = helper.e(".js-clone-block-prefix-skill");
    };
    if (cloneType == "note-character") {
      clonePrefix = helper.e(".js-clone-block-prefix-note-character");
    };
    if (cloneType == "note-story") {
      clonePrefix = helper.e(".js-clone-block-prefix-note-story");
    };
    return clonePrefix;
  };

  function _get_cloneSuffix(cloneType) {
    var cloneSuffix;
    if (cloneType == "class") {
      cloneSuffix = helper.e(".js-clone-block-suffix-class");
    };
    if (cloneType == "attack-melee") {
      cloneSuffix = helper.e(".js-clone-block-suffix-attack-melee");
    };
    if (cloneType == "attack-ranged") {
      cloneSuffix = helper.e(".js-clone-block-suffix-attack-ranged");
    };
    if (cloneType == "consumable") {
      cloneSuffix = helper.e(".js-clone-block-suffix-consumable");
    };
    if (cloneType == "power") {
      cloneSuffix = helper.e(".js-clone-block-suffix-power");
    };
    if (cloneType == "item") {
      cloneSuffix = helper.e(".js-clone-block-suffix-item");
    };
    if (cloneType == "skill") {
      cloneSuffix = helper.e(".js-clone-block-suffix-skill");
    };
    if (cloneType == "note-character") {
      cloneSuffix = helper.e(".js-clone-block-suffix-note-character");
    };
    if (cloneType == "note-story") {
      cloneSuffix = helper.e(".js-clone-block-suffix-note-story");
    };
    return cloneSuffix;
  };

  function _get_maxCloneMessage(cloneType) {
    var message = "Max 200";
    if (cloneType == "class") {
      message = message + " Classes.";
    };
    if (cloneType == "attack-melee") {
      message = message + " Melee Attacks.";
    };
    if (cloneType == "attack-ranged") {
      message = message + " Ranged Attacks.";
    };
    if (cloneType == "consumable") {
      message = message + " Consumables.";
    };
    if (cloneType == "power") {
      message = message + " Powers.";
    };
    if (cloneType == "item") {
      message = message + " Items.";
    };
    if (cloneType == "skill") {
      message = message + " Skills.";
    };
    if (cloneType == "note-character") {
      message = message + " Character Notes.";
    };
    if (cloneType == "note-story") {
      message = message + " Story Notes.";
    };
    return message;
  };

  function _get_undoRemoveCloneMessage(cloneType) {
    var message = "removed.";
    if (cloneType == "class") {
      message = "Class " + message;
    };
    if (cloneType == "attack-melee") {
      message = "Melee attack " + message;
    };
    if (cloneType == "attack-ranged") {
      message = "Ranged attack " + message;
    };
    if (cloneType == "consumable") {
      message = "Consumable " + message;
    };
    if (cloneType == "power") {
      message = "Power " + message;
    };
    if (cloneType == "item") {
      message = "Item " + message;
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
    if (cloneType == "class") {
      object = {
        classname: "",
        level: "",
        bab: "",
        hp: {
          base: "",
          favoured: ""
        },
        ranks: {
          base: "",
          favoured: ""
        },
        saves: {
          fortitude: "",
          reflex: "",
          will: ""
        }
      };
    };
    if (cloneType == "attack-melee") {
      object = {
        weapon: "",
        attack: "",
        damage: "",
        critical: "",
        type: "",
        equipped: false
      };
    };
    if (cloneType == "attack-ranged") {
      object = {
        weapon: "",
        attack: "",
        damage: "",
        critical: "",
        range: "",
        ammo: "",
        type: "",
        equipped: false
      };
    };
    if (cloneType == "consumable") {
      object = {
        name: "",
        current: "",
        total: "",
        used: ""
      };
    };
    if (cloneType == "power") {
      object = {
        name: "",
        current: "",
        total: "",
        used: ""
      };
    };
    if (cloneType == "item") {
      object = {
        name: "",
        quantity: "",
        weight: "",
        value: "",
        include: true
      };
    };
    if (cloneType == "skill") {
      object = {
        name: "",
        ranks: "",
        misc: "",
        racial: "",
        feat: "",
        trait: "",
        bonuses: {
          str: false,
          dex: false,
          con: false,
          int: false,
          wis: false,
          cha: false,
          class_skill: false,
          level: false,
          half_level: false,
          check_penalty: false,
          size_modifier_stealth: false,
          size_modifier_fly: false
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
    if (!display.state.get({
        all: true
      })) {
      if (targetTop > (windowHeight - (windowHeight / 10)) || targetBottom <= 0) {
        var offset = (windowHeight - (windowHeight / 2));
        var options = {
          speed: 300,
          offset: offset,
          easing: "easeInOutQuad"
        };
        var scroll = new SmoothScroll();
        scroll.animateScroll(helper.e("#" + cloneTarget.lastChild.id), null, options);
      };
    };
  };

  function bind() {
    _bind_cloneControls();
  };

  function _bind_cloneControls() {
    var cloneBlockClass = _get_cloneBlock("class");
    var cloneBlockConsumable = _get_cloneBlock("consumable");
    var cloneBlockPower = _get_cloneBlock("power");
    var cloneBlockSkill = _get_cloneBlock("skill");
    var cloneBlockItem = _get_cloneBlock("item");
    var cloneBlockAttack = _get_cloneBlock("attack");
    var cloneBlockNoteCharacter = _get_cloneBlock("note-character");
    var cloneBlockNoteStory = _get_cloneBlock("note-story");

    var cloneAddClass = cloneBlockClass.querySelector(".js-clone-add-class");
    var cloneRemoveClass = cloneBlockClass.querySelector(".js-clone-remove");

    var cloneAddConsumable = cloneBlockConsumable.querySelector(".js-clone-add-consumable");
    var cloneRemoveConsumable = cloneBlockConsumable.querySelector(".js-clone-remove");

    var cloneAddPower = cloneBlockPower.querySelector(".js-clone-add-power");
    var cloneRemovePower = cloneBlockPower.querySelector(".js-clone-remove");

    var cloneAddItem = cloneBlockItem.querySelector(".js-clone-add-item");
    var cloneRemoveItem = cloneBlockItem.querySelector(".js-clone-remove");

    var cloneAddSkill = cloneBlockSkill.querySelector(".js-clone-add-skill");
    var cloneRemoveSkill = cloneBlockSkill.querySelector(".js-clone-remove");

    var cloneAddAttackMelee = cloneBlockAttack.querySelector(".js-clone-add-melee");
    var cloneAddAttackRanged = cloneBlockAttack.querySelector(".js-clone-add-ranged");
    var cloneRemoveAttack = cloneBlockAttack.querySelector(".js-clone-remove");

    var cloneAddNoteCharacter = cloneBlockNoteCharacter.querySelector(".js-clone-add-note-character");
    var cloneRemoveNoteCharacter = cloneBlockNoteCharacter.querySelector(".js-clone-remove");

    var cloneAddNoteStory = cloneBlockNoteStory.querySelector(".js-clone-add-note-story");
    var cloneRemoveNoteStory = cloneBlockNoteStory.querySelector(".js-clone-remove");

    cloneAddClass.addEventListener("click", function() {
      _addNewClone("class");
      characterSelect.update();
      sheet.store();
    }, false);

    cloneAddConsumable.addEventListener("click", function() {
      _addNewClone("consumable");
      sheet.store();
    }, false);

    cloneAddPower.addEventListener("click", function() {
      _addNewClone("power");
      sheet.store();
    }, false);

    cloneAddItem.addEventListener("click", function() {
      _addNewClone("item");
      sheet.store();
    }, false);

    cloneAddSkill.addEventListener("click", function() {
      _addNewClone("skill");
      sheet.store();
    }, false);

    cloneAddAttackMelee.addEventListener("click", function() {
      _addNewClone("attack-melee");
      sheet.store();
    }, false);

    cloneAddAttackRanged.addEventListener("click", function() {
      _addNewClone("attack-ranged");
      sheet.store();
    }, false);

    cloneAddNoteCharacter.addEventListener("click", function() {
      _addNewClone("note-character");
      sheet.store();
    }, false);

    cloneAddNoteStory.addEventListener("click", function() {
      _addNewClone("note-story");
      sheet.store();
    }, false);

    cloneRemoveNoteCharacter.addEventListener("click", function() {
      _change_cloneState("note-character");
      _update_removeButtonTab("note-character");
    }, false);
    cloneRemoveNoteStory.addEventListener("click", function() {
      _change_cloneState("note-story");
      _update_removeButtonTab("note-story");
    }, false);

    cloneRemoveClass.addEventListener("click", function() {
      _change_cloneState("class");
      _update_removeButtonTab("class");
    }, false);

    cloneRemoveAttack.addEventListener("click", function() {
      _change_cloneState("attack");
      _update_removeButtonTab("attack");
    }, false);

    cloneRemoveConsumable.addEventListener("click", function() {
      _change_cloneState("consumable");
      _update_removeButtonTab("consumable");
    }, false);

    cloneRemovePower.addEventListener("click", function() {
      _change_cloneState("power");
      _update_removeButtonTab("power");
    }, false);

    cloneRemoveItem.addEventListener("click", function() {
      _change_cloneState("item");
      _update_removeButtonTab("item");
    }, false);

    cloneRemoveSkill.addEventListener("click", function() {
      _change_cloneState("skill");
      _update_removeButtonTab("skill");
    }, false);
  };

  function _bind_cloneRemoveButton(button, cloneType) {
    button.addEventListener("click", function() {
      _store_lastRemovedClone(this, cloneType);
      _remove_clone(this, cloneType);
      _update_removeButtonTab(cloneType);
      sheet.store();
    }, false);
    if (cloneType == "class") {
      button.addEventListener("click", function() {
        characterSelect.update();
      }, false);
    };
  };

  function _bind_clone(cloneType, newClone) {
    if (cloneType == "class") {
      _bind_inputBlock(newClone.querySelectorAll(".js-input-block"));
      _bind_classesInputBlock(newClone.querySelectorAll(".js-input-block"));
      _bind_classLevelInputBlock(newClone.querySelectorAll(".js-basics-class-level"));
      _bind_tip(newClone.querySelectorAll(".js-tip"));
    };
    if (cloneType == "consumable" || cloneType == "power") {
      _bind_inputBlock(newClone.querySelectorAll(".js-input-block"));
      _bind_inputBlockIncrement(newClone.querySelectorAll(".js-input-block-increment"));
      _bind_totalBlock(newClone.querySelector(".js-total-block"));
    };
    if (cloneType == "skill") {
      _bind_inputBlock(newClone.querySelectorAll(".js-input-block"));
      _bind_inputBlockIncrement(newClone.querySelectorAll(".js-input-block-increment"));
      _bind_totalBlock(newClone.querySelector(".js-total-block"));
      _bind_totalBlockCheck(newClone.querySelectorAll(".js-total-block-check"));
      _bind_totalBlockBonuses(newClone.querySelectorAll(".js-total-block-bonuses"));
    };
    if (cloneType == "attack-melee" || cloneType == "attack-ranged") {
      _bind_inputBlock(newClone.querySelectorAll(".js-input-block"));
      _bind_checkBlock(newClone.querySelectorAll(".js-check-block"));
    };
    if (cloneType == "note-character" || cloneType == "note-story") {
      _bind_textareaBlock(newClone.querySelectorAll(".js-textarea-block"));
    };
    if (cloneType == "item") {
      _bind_inputBlock(newClone.querySelectorAll(".js-input-block"));
      _bind_checkBlock(newClone.querySelectorAll(".js-check-block"));
      _bind_wealth(newClone.querySelectorAll(".js-input-block"));
      _bind_tip(newClone.querySelectorAll(".js-tip"));
    };
  };

  function _addNewClone(cloneType) {
    if (_get_cloneCount(cloneType) < 200) {
      _add_cloneObject(cloneType);
      _render_clone(cloneType);
      _update_clonePlaceholder(cloneType);
      _update_clonePrefix(cloneType);
      _update_cloneSuffix(cloneType);
      _smoothScrollToClones(cloneType);
      _update_all_clones(cloneType);
      totalBlock.render();
      textBlock.render();
    } else {
      _render_maxClonesSnack(cloneType);
    };
  };

  function _add_cloneObject(cloneType) {
    if (_get_cloneCount(cloneType) < 200) {
      _get_cloneObjects(cloneType).push(new _get_newCloneObject(cloneType));
    };
  };

  function _render_clone(cloneType) {
    var cloneTarget = _get_cloneTarget(cloneType);
    var cloneLength = _get_cloneCount(cloneType);
    var cloneIndex = cloneLength - 1;
    var cloneString = _get_cloneString(cloneType, cloneIndex);
    // make new clone node
    var newClone = document.createElement("div");
    // id needed for smooth scroll
    newClone.setAttribute("id", "clone-" + cloneType + "-" + cloneIndex);
    newClone.setAttribute("class", "m-clone js-clone");
    newClone.setAttribute("data-clone-count", cloneIndex);
    // add content
    newClone.innerHTML = cloneString;
    var newCloneFlash = document.createElement("span");
    newCloneFlash.setAttribute("class", "m-clone-flash m-clone-flash-" + cloneType.replace(/_+/g, "-"));
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
      // id needed for smooth scroll
      newClone.setAttribute("id", "clone-" + cloneType + "-" + cloneIndex);
      newClone.setAttribute("class", "m-clone js-clone");
      newClone.setAttribute("data-clone-count", cloneIndex);
      // add content
      newClone.innerHTML = cloneString;
      // append new clone
      cloneTarget.appendChild(newClone);
      // bind listeners
      _bind_clone(cloneType, newClone);
      _bind_cloneRemoveButton(newClone.querySelector(".js-clone-block-delete"), cloneType);
    };
  };

  function _render_maxClonesSnack(cloneType) {
    snack.render({
      message: _get_maxCloneMessage(cloneType)
    });
  };

  function _update_cloneState(cloneType) {
    var cloneBlock = _get_cloneBlock(cloneType);
    var cloneCount = _get_cloneCount(cloneType, true);
    var cloneControls = cloneBlock.querySelector(".js-clone-controls");
    var cloneRemoveButton = cloneControls.querySelector(".js-clone-remove");
    if (cloneCount == 0) {
      cloneBlock.dataset.deleteCloneState = "false";
      helper.removeClass(cloneBlock, "is-delete-state");
      helper.removeClass(cloneRemoveButton, "button-primary");
      helper.addClass(cloneRemoveButton, "button-secondary");
    };
  };

  function _update_all_clones(cloneType) {
    var target = _get_cloneTarget(cloneType);
    if (cloneType == "class") {
      var all_inputBlocks = target.querySelectorAll(".js-input-block");
      for (var i = 0; i < all_inputBlocks.length; i++) {
        inputBlock.render(all_inputBlocks[i]);
      };
      classes.render();
    };
    if (cloneType == "consumable" || cloneType == "power") {
      var all_inputBlocks = target.querySelectorAll(".js-input-block");
      for (var i = 0; i < all_inputBlocks.length; i++) {
        inputBlock.render(all_inputBlocks[i]);
      };
    };
    if (cloneType == "skill") {
      var all_inputBlocks = target.querySelectorAll(".js-input-block");
      for (var i = 0; i < all_inputBlocks.length; i++) {
        inputBlock.render(all_inputBlocks[i]);
      };
    };
    if (cloneType == "attack-melee" || cloneType == "attack-ranged") {
      var all_inputBlocks = target.querySelectorAll(".js-input-block");
      for (var i = 0; i < all_inputBlocks.length; i++) {
        inputBlock.render(all_inputBlocks[i]);
      };
      var all_checkBlock = target.querySelectorAll(".js-check-block");
      for (var i = 0; i < all_checkBlock.length; i++) {
        checkBlock.render(all_checkBlock[i]);
      };
    };
    if (cloneType == "note-character" || cloneType == "note-story") {
      var all_textareaBlock = target.querySelectorAll(".js-textarea-block");
      for (var i = 0; i < all_textareaBlock.length; i++) {
        textareaBlock.render(all_textareaBlock[i]);
      };
    };
    if (cloneType == "item") {
      var all_inputBlocks = target.querySelectorAll(".js-input-block");
      for (var i = 0; i < all_inputBlocks.length; i++) {
        inputBlock.render(all_inputBlocks[i]);
      };
      var all_checkBlock = target.querySelectorAll(".js-check-block");
      for (var i = 0; i < all_checkBlock.length; i++) {
        checkBlock.render(all_checkBlock[i]);
      };
    };
  };

  function _remove_clone(button, cloneType) {
    var cloneIndex = parseInt(helper.getClosest(button, ".js-clone").dataset.cloneCount, 10);
    _remove_cloneObject(cloneType, cloneIndex);
    clear(cloneType);
    _render_all_clones(cloneType);
    _update_all_clones(cloneType);
    _update_clonePlaceholder(cloneType);
    _update_clonePrefix(cloneType);
    _update_cloneSuffix(cloneType);
    _update_cloneState(cloneType);
    totalBlock.render();
    if (cloneType == "class") {
      characterSelect.update();
    };
    if (cloneType == "item") {
      wealth.render();
    };
    textBlock.render();
    snack.render({
      message: _get_undoRemoveCloneMessage(cloneType),
      button: "Undo",
      action: _restore_lastRemovedClone,
      destroyDelay: 8000
    });
  };

  function _restore_lastRemovedClone() {
    var undoData = JSON.parse(helper.read("lastRemovedClone"));
    _restore_cloneObject(undoData.cloneType, undoData.index, undoData.clone);
    clear(undoData.cloneType);
    _render_all_clones(undoData.cloneType);
    _update_all_clones(undoData.cloneType);
    _update_clonePlaceholder(undoData.cloneType);
    _update_clonePrefix(undoData.cloneType);
    _update_cloneSuffix(undoData.cloneType);
    _update_cloneState(undoData.cloneType);
    _update_removeButtonTab(undoData.cloneType);
    _remove_lastRemovedClone();
    totalBlock.render();
    if (undoData.cloneType == "class") {
      characterSelect.update();
    };
    if (undoData.cloneType == "item") {
      wealth.render();
    };
    textBlock.render();
    sheet.store();
  };

  function _store_lastRemovedClone(button, cloneType) {
    var cloneIndex = parseInt(helper.getClosest(button, ".js-clone").dataset.cloneCount, 10);
    var removedCloneObject = {
      cloneType: cloneType,
      index: cloneIndex,
      clone: {}
    };
    removedCloneObject.clone = _get_cloneObjects(cloneType)[cloneIndex];
    helper.store("lastRemovedClone", JSON.stringify(removedCloneObject));
  };

  function _remove_lastRemovedClone() {
    helper.remove("lastRemovedClone");
  };

  function _remove_cloneObject(cloneType, index) {
    _get_cloneObjects(cloneType).splice(index, 1);
  };

  function _restore_cloneObject(cloneType, index, cloneObject) {
    _get_cloneObjects(cloneType).splice(index, 0, cloneObject);
  };

  function _bind_totalBlock(all_totalBlock) {
    totalBlock.bind(all_totalBlock);
  };

  function _bind_totalBlockCheck(all_totalBlockCheck) {
    for (var i = 0; i < all_totalBlockCheck.length; i++) {
      totalBlock.bind_totalBlockCheck(all_totalBlockCheck[i]);
    };
  };

  function _bind_totalBlockBonuses(all_totalBlockBonuses) {
    for (var i = 0; i < all_totalBlockBonuses.length; i++) {
      totalBlock.bind_totalBlockBonuses(all_totalBlockBonuses[i]);
    };
  };

  function _bind_inputBlock(all_inputBlock) {
    for (var i = 0; i < all_inputBlock.length; i++) {
      inputBlock.bind(all_inputBlock[i]);
    };
  };

  function _bind_checkBlock(all_checkBlock) {
    for (var i = 0; i < all_checkBlock.length; i++) {
      checkBlock.bind(all_checkBlock[i]);
    };
  };

  function _bind_classesInputBlock(all_inputBlock) {
    for (var i = 0; i < all_inputBlock.length; i++) {
      classes.bind(all_inputBlock[i]);
    };
  };

  function _bind_classLevelInputBlock(all_inputBlock) {
    for (var i = 0; i < all_inputBlock.length; i++) {
      inputBlock.bind_classLevel(all_inputBlock[i]);
    };
  };

  function _bind_inputBlockIncrement(all_inputBlockIncrement) {
    for (var i = 0; i < all_inputBlockIncrement.length; i++) {
      inputBlock.bind_inputBlockIncrement(all_inputBlockIncrement[i]);
    };
  };

  function _bind_tip(all_tip) {
    for (var i = 0; i < all_tip.length; i++) {
      tip.bind(all_tip[i]);
    };
  };

  function _bind_textareaBlock(all_textareaBlock) {
    for (var i = 0; i < all_textareaBlock.length; i++) {
      textareaBlock.bind(all_textareaBlock[i]);
    };
  };

  function _bind_wealth(all_inputBlock) {
    for (var i = 0; i < all_inputBlock.length; i++) {
      inputBlock.bind_wealth(all_inputBlock[i]);
    };
  };

  function _change_cloneState(cloneType) {
    var cloneBlock = helper.e(".js-clone-block-" + cloneType);
    var cloneControls = cloneBlock.querySelector(".js-clone-controls");
    var cloneRemoveButton = cloneControls.querySelector(".js-clone-remove");
    var cloneTarget = _get_cloneTarget(cloneType);
    // change clone block state
    if (cloneBlock.dataset.deleteCloneState == "false" || !cloneBlock.dataset.deleteCloneState) {
      helper.addClass(cloneBlock, "is-delete-state");
      cloneBlock.dataset.deleteCloneState = "true";
      // change clone remove button
      helper.addClass(cloneRemoveButton, "button-primary");
      helper.removeClass(cloneRemoveButton, "button-secondary");
    } else {
      helper.removeClass(cloneBlock, "is-delete-state");
      cloneBlock.dataset.deleteCloneState = "false";
      // change clone remove button
      helper.removeClass(cloneRemoveButton, "button-primary");
      helper.addClass(cloneRemoveButton, "button-secondary");
    };
    // if clone count is 0 restore all classes to normal
    if (_get_cloneCount(cloneType) == 0) {
      cloneBlock.dataset.deleteCloneState = "false";
      helper.removeClass(cloneBlock, "is-delete-state");
      // change clone remove button
      helper.removeClass(cloneRemoveButton, "button-primary");
      helper.addClass(cloneRemoveButton, "button-secondary");
    };
  };

  function _update_removeButtonTab(cloneType) {
    var cloneBlock = _get_cloneBlock(cloneType);
    var all_removeButtons = cloneBlock.querySelectorAll(".js-clone-block-delete");
    if (cloneBlock.dataset.deleteCloneState == "true") {
      for (var i = 0; i < all_removeButtons.length; i++) {
        all_removeButtons[i].setAttribute("tabindex", "1");
      };
    } else {
      for (var i = 0; i < all_removeButtons.length; i++) {
        all_removeButtons[i].setAttribute("tabindex", "-1");
      };
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

  function _update_clonePrefix(cloneType) {
    var clonePrefix = _get_clonePrefix(cloneType);
    if (clonePrefix) {
      if (_get_cloneCount(cloneType) <= 0) {
        helper.addClass(clonePrefix, "is-hidden");
      } else {
        helper.removeClass(clonePrefix, "is-hidden");
      };
    };
  };

  function _update_cloneSuffix(cloneType) {
    var cloneSuffix = _get_cloneSuffix(cloneType);
    if (cloneSuffix) {
      if (_get_cloneCount(cloneType) <= 0) {
        helper.addClass(cloneSuffix, "is-hidden");
      } else {
        helper.removeClass(cloneSuffix, "is-hidden");
      };
    };
  };

  function clear(cloneType) {
    if (cloneType) {
      _clear_cloneTarget(cloneType);
    } else {
      _clear_cloneTarget("class");
      _clear_cloneTarget("attack-melee");
      _clear_cloneTarget("attack-ranged");
      _clear_cloneTarget("consumable");
      _clear_cloneTarget("power");
      _clear_cloneTarget("item");
      _clear_cloneTarget("skill");
      _clear_cloneTarget("note-character");
      _clear_cloneTarget("note-story");
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
