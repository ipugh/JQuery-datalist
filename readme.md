# A JQuery Implementation of <datalist>

## Usage
The JQuery implementation of the datalist tag is used by
1. Enclose an input element that has a class of "datalist" with a div that has a class of "container"
2. In the given directory (var file in the main.js file) the list of the wanted autofill options are placed, separated with newline characters.
3. In order for the list to properly appear on top of other elements, other items that could be affected should be set to either a relative or absolute position.

## Why?
A JQuery Implementation of the html datalist tag was created because currently the datalist tag is not supported in Safari.

## To Do
- Up/Down arrow keys to move
- Make list disappear synchronously
