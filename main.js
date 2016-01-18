/* Author: Isaac Pugh
 * Last Modified: 17 Jan 2016
 */

// Location of file for list
var file = '/list.txt';
var itemsShown = 20;

// Grab data from document
var items;
var text = '';
var client = new XMLHttpRequest();
client.onreadystatechange = function() {
  if (client.readyState == 4 && client.status == 200) {
    text = client.responseText;
    items = cleanArray(text.split("\n"));
    events();
  }
};
client.open('GET', file, true);
client.send();

////////////////////////
//////// Functions
////////////////

/* Purpose: Cleans up the blank parts of an array
 * Pre: Array with null values in it
 * Return: Array with no null values in it
 * Params: Takes array "actual"
 */
function cleanArray(actual) {
  var newArray = new Array();
  for (var i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i]);
    }
  }
  return newArray;
}

/* Purpose: finds items in list similar to input
 */
var input, display;
function checkList(element) {
  display = new Array();
  var input = element.val();
  for (i = 0; i < items.length; i++) {
    if (items[i].substring(0, input.length).toLowerCase() == input.toLowerCase()) {
      display.push(items[i]);
    }
  }
  console.log(display);
  displayWords(element);
}

/* Purpose: Clears the list of items shown with given delay,
 *  allows for items do be clicked without list disappearing before
 *  inserting them into the input element
 */
function clearListDelay(element) {
  setTimeout(function () {
    $(element).siblings('.list').remove();
  }, 150);
}

/* Purpose: Clears the list of items shown
 */
function clearList(element) {
  $(element).siblings('.list').remove();
}

/* Purpose: Displays the top 20 matches
 */
function displayWords(element) {
  clearList(element);
  $(element).parent().append('<div class="list"></div>');
  offset = $(element).offset();
  for (i = 0; i < display.length && i < itemsShown; i++) {
    $('.list').append('<div class="listitem">' + display[i] + '</div>');
  }
  $('.listitem').click(function () {
    $(element).val($(this).text());
    checkList(element);
  });
}

/* Purpose: Finds when the list of items should be displayed
 */
function events() {
  $(".datalist").on('input', function () {
    checkList($(this));
  })

  $(".datalist").on('focus', function () {
    checkList($(this));
  })

  $(".datalist").on('blur', function () {
    clearListDelay($(this));
  })
}
