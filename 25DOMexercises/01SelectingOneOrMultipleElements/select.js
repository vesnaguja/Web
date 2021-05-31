// Selecting One/Multiple Elements
// Create two unordered lists on the page.

// Create a function that selects the second list and applies a class that sets some background color to it.

// var rootElement = document.documentElement;
// var hasChildren = rootElement.hasChildNodes()
// console.log(hasChildren); // true

// var howManyChildren = rootElement.childNodes.length;
// console.log(howManyChildren); // 3

// var firstChild = rootElement.childNodes[0];
// console.log(firstChild); // head

// var secondChild = rootElement.childNodes[1];
// console.log(secondChild); // text

// var thirdChild = rootElement.childNodes[2];
// console.log(thirdChild); // body

// var bodyNode = rootElement.childNodes[2];
// var bodyChildren = bodyNode.childNodes.length;
// console.log(bodyChildren);

// // selektovaje druge liste
// var secondList = bodyNode.childNodes[3];
// console.log(secondList);

// dodavanje klase (koja vec postoji u css i boji bg u crveno) drugoj listi
function colorIt() {
  //var secondList = document.documentElement.childNodes[2].childNodes[3];
  //var secondList = document.querySelector('body>ul:nth-child(2)')
  var body = document.querySelector('body');
  var bodyChildren = body.childNodes;

  var counter = 1;
  var secondList = null;

  bodyChildren.forEach(function (child) {
    if (child.localName == 'ul' && counter == 2) {
      secondList = child;
      counter++
    } else if (child.localName == 'ul') {
      counter++
    }
  })

  //console.log(bodyChildren)
  var addClassToSecUL = secondList.classList.add('red');
  //return addClassToSecUL;
}
colorIt();

// Create a second function that, when triggered, selects all <li> elements on the page. 
// The function also sets a class that sets some bg color to every <li> element.

function selectLiElements(cssClass) {
  var allLiEl = document.querySelectorAll('li');
  //console.log(allLiEl);

  allLiEl.forEach(function (li) {
    li.classList.add(cssClass)
  })

  //console.log(addClassToLiEl);
  //return addClassToLiEl;
}
selectLiElements('green');


// Create one more unordered list and one more function

// The function should select only <li> elements from that last list
// Each <li> element should get a class that sets some bg color and transforms the text to uppercase.

function transformThirdUlLiEl() {
  var thirdUlLi = document.querySelectorAll('ul:last-Of-Type>li');
  for (var i = 0; i < thirdUlLi.length; i++) {

    thirdUlLi[i].classList.remove('green')
    thirdUlLi[i].classList.add('blue')

    //console.log(thirdUlLi[i].classList)

    thirdUlLi[i].childNodes[0].nodeValue =
    thirdUlLi[i].childNodes[0].nodeValue.toUpperCase()
  }
  
}

transformThirdUlLiEl();

