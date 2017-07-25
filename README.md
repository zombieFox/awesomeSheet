# awesomeSheet - Pathfinder Character Sheet
**A dynamic character sheet which auto calculates many scores and bonuses.**
### [See it in action](http://zombiefox.github.io/awesomeSheet/)

[<img src="https://github.com/zombieFox/awesomeSheet/raw/master/screenshots/demo.gif">](http://zombiefox.github.io/awesomeSheet/)

## Features

- Responsive web based app. (Can be "saved to home screen" on Android Chrome for app like experience)
- Offline use (Service Worker browsers [Chrome, Firefox]).
- Add multiple characters
- Export and Import characters as JSON file.
- Display mode for reading when not editing.
- Night mode.
- Keyboard shortcuts.
- Edit stats and key abilities will auto update.
- Multi class support.
- Automatic size and special size calculations.
- Dynamically add attack, item and consumables.
- Dynamically add custom skills.
- Track consumables with total and used/spent values.
- Track spells with prepared, cast and active markers and new direct spell control modal.
- Locally store all edits that will persist after page reload.

## JS/UI modular features
- Snack bars
- Tooltips
- Slide nav
- Modal prompts
- Night mode
- Input blocks
- Total blocks
- Static text blocks
- Clone blocks

### Development

Dependencies:
NodeJS, Bower, Grunt

1. Clone repo, navigate to root and run
2. run `npm install`
3. run `bower install`

Then run:

`grunt dev` for live development

`grunt build` to build project into build directory 
