# Interactive 3D Los Angeles City Hall Map

Built for use in Los Angeles Interactive Kiosk project and LA Beacons project.

Developed by ITA Webservices.

## Managing Content in Handlebars

Currently content on this site is controlled by Handlebars and can be modified by editing the content arrays created in the _handlebars-content.js_ file.

## Query String Functionality

Additional functionality can be accessed by setting query string values.

Available fields are:
 - level
 - pin
 - xpos
 - ypos

level : If set will show given value on load. Note: The value given does not correspond with the shown or labeled level value but the functional level value. The functional level value is set numerically from the bottom level up.

pin : Should be used along with level field. The pin field can take two types of values. The first type is a number that corresponds with existing pins on the map, if set the function will highlight the pin selected and show the pin's corresponding description.  The second type is a set value of "here", if set a new pin will be generated on the level in the top left corner.

xpos : sets the left to right position of the "here" pin if the "here" pin is set.

ypos : sets the top to bottom position of the "here" pin if the "here" pin is set.

# License

Built upon for government use by ITA Webservices group.

Integrate or build upon it for free in your personal or commercial projects. Don't republish, redistribute or sell "as-is".

Read more here: [License](http://tympanus.net/codrops/licensing/)

# Credits

- [List.js](http://www.listjs.com/), the library that adds search, sort, filters and flexibility to plain HTML lists, tables, or anything
- [Font Awesome](https://fortawesome.github.io/Font-Awesome/) created by [Dave Gandy](https://twitter.com/davegandy). License: [Font Awesome license information](http://fontawesome.io/license).
- Other icons from [Flaticon](http://www.flaticon.com/) and [Freepik](http://www.freepik.com/).
- SVG icon system generated with [IcoMoon](https://icomoon.io/app)

# Misc

Initially developed by Codrops as an interactive 3D mall map concept with a sidebar search and pin indicators for every level.

[Article on Codrops](http://tympanus.net/codrops/?p=26692)

[Demo](http://tympanus.net/Development/Interactive3DMallMap/)


Follow Codrops: [Twitter](http://www.twitter.com/codrops), [Facebook](http://www.facebook.com/pages/Codrops/159107397912), [Google+](https://plus.google.com/101095823814290637419), [GitHub](https://github.com/codrops), [Pinterest](http://www.pinterest.com/codrops/)
