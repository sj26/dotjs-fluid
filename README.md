# Dotjs Fluid (dotjs.user.js)

Userscript to put [dotjs][dotjs] into your [Fluid][fluid] browsers. It may also work in [other][opera] [browsers][ie], possibly with [some help][trixie].

## Installation

 1. Make sure you've already installed [dotjs][dotjs] (it doesn't matter if you haven't installed the chrome extension).
 2. [Download jQuery][jquery.js] into ~/.js/jquery.js (minified is fine)
 3. Add [userscript][dotjs.user.js] to Fluid
     1. Open your Fluid browser.
     2. From the menu, select the script icon -> "Open Userscripts Folder" (Ctrl + Command + O).
     3. Put [the userscript][dotjs.user.js] inside the opened folder.
     4. From the menu, select the script icon -> "Reload All Userscripts" (Ctrl + Command + R).

Not working yet?

 * Double check "dotjs" is checked in the menu under the script icon.

## Rationale

This one's a little more complex than the original dotjs; we can't include multiple scripts via userscripts, and embedding jQuery means it will interfere with the window because we're running in the same context in most poor-man's userscript implementations (like Fluid's). Instead, jQuery should be put in ~/.js/jquery.js (minified is fine) and it will be included without affecting the page using [noConflict][jquery-noconflict] unless jQuery is already on the page.

## Problem?

Add an issue on the github issues page:

  https://github.com/sj26/dotjs-fluid/issues

## License

The MIT License, see [LICENSE][license].

[dotjs]: https://github.com/defunkt/dotjs
[dotjs.user.js]: https://github.com/sj26/dotjs-fluid/raw/master/dotjs.user.js
[fluid]: http://fluidapp.com
[jquery.js]: http://code.jquery.com/jquery.js
[jquery]: http://jquery.com/
[jquery-noconflict]: http://api.jquery.com/jQuery.noConflict/
[license]: https://github.com/sj26/dotjs-fluid/raw/master/LICENSE
[opera]: http://opera.com
[ie]: http://microsoft.com/windows/ie
[trixie]: http://bhelpuri.net/trixie
