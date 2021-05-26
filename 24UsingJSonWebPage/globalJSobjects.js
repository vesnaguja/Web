// Global JavaScript Objects (homework)

// Math
// ●	Random
// Create a function that builds an array of 10 random numbers between 1 and 50.
// The function prints that array out in the console and then returns it.

function getRandomArbitrary(min, max) {
  var arrayLength = 10;
  var newArray = [];
  for (var i = 0; i < arrayLength; i++) {
    newArray.push(Math.random() * (max - min) + min);
  }
  return newArray;
}

var start = 1;
var end = 50;
var randomNum = getRandomArbitrary(start, end);
console.log(randomNum);

// ●	Round
// Create a function that uses the passed array of numbers and rounds all its elements to two decimals.
// Print out the modified array in the console.
// Use the first function for generating the input array.

function roundElOfArr(r) {
  return r.map(function (e) {
    return e.toFixed(2);
  })
}

console.log(roundElOfArr(randomNum));

// ●	Floor
// Create a function that uses the passed array of numbers and rounds all its elements to the nearest integer.
// Print out the modified array in the console.
// Use the first function for generating the input array.

function roundsAllElements(arr) {
  return arr.map(function (elem) {
    return Math.round(elem);    
  })
}

console.log(roundsAllElements(randomNum));


// ●	Max
// Create a function that finds and prints out the biggest element in the passed array of numbers

function findsTheBiggest(array) {
  var max = array.reduce(function(a,b){
    return Math.max(a,b);
  })
  return max;
}

console.log(findsTheBiggest(randomNum));


// Date    
// ●	Print out the whole date object in the console.

console.log(Date());


// ●	Print out the current time in the console.

console.log(new Date().getTime());


// ●	Print out the current date in the console.

var today = new Date();
console.log(today.getDate());


