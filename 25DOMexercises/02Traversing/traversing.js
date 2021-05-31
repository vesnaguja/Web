// Traversing
// Create two unordered lists.
// Each list should be wrapped in a div element.
// One <li> element in the second list should have a class “active”, which sets its background color.

// Create a function that selects the <li> element with class “active”.
// Remove the class from that element, and then select the first <li> element in the first unordered list using node relations.
// Apply class to that newly selected <li> element

function addClass() {

  // select 3rd li of 2nd ul
  var elWithClassActive = document.querySelector('.active');

  // remove 'active' class from 3rd li of 2nd ul
  elWithClassActive.classList.remove('active')

  // select the first <li> element in the first unordered list
  var firstUl = elWithClassActive.parentElement.parentElement.previousElementSibling.firstElementChild;

  var firstLi = firstUl.firstElementChild.classList.add('active')

  //console.log(firstLi);
}
addClass();