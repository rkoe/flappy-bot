flappy-bot
==========

Bookmarklet to automatically play the "HTML5 flappy bird".

Written for/tested with: The Festo-variant "festy" of https://github.com/hyspace/flappy

Install:

- Create a new bookmark (ideally on the bookmark bar).
- Name: e.g. "flappy-bot"
- URL: contents of flappybot-bmlet.js

Run:

- Open the flappy-bird-page.
- Click on the flappy-bot-bookmark (while being on the the page directly
  before the start; it does not work on the game-over-page).
- Click on the flappy-bird-page to start the game.

Test run scores:

- 258
- 1294
- 783

Strategy:

- get next tube
- if no tube and bird near bottom: click
- if bird-position <= height-of-lower-tube + 5: click

This simple strategy works surprisingly well, but can fail e.g. at high
bird-y-velocities (=if dy > 5).  
(To solve this, the "5" could made dependent on the current velocity,
or the the next bird-position could be predicted;
but this would make the code much longer. ;))

Next steps:

- How to run bookmarklets on Android/iOS?
- Build an electromagnetic touchpen,
  connect it to a phone or a Raspberry Pi (with camera),  
  add some computer vision
  and let the phone/Raspberry Pi play. ;)

