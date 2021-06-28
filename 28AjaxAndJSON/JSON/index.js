var buttonElement = document.querySelector('#button');
var previousPuppy = document.querySelector('#previous-puppy');
var dogDiv = document.querySelector('#dog');
var dogs = [];
var buttonNames = ['another puppy', 'give me puppy', 'one more puppy', 'new puppy'];

function getImage() {

  var request = new XMLHttpRequest();
  request.open('GET', 'https://dog.ceo/api/breed/hound/images/random', true);

  request.onload = function () {
    if (request.status >= 200 && request.status < 300) {
      var dogs = JSON.parse(this.responseText);
      var output = '';
      output +=
        '<div class="dogs">' +
        '<img src="' + dogs.message + '"width="400">' +
        '</div>';

      dogDiv.innerHTML = output;

      var randomNum = Math.round(Math.random() * (buttonNames.length - 1));

      while (true) {
        if (buttonNames[randomNum] !== buttonElement.value) break;

        randomNum = Math.round(Math.random() * (buttonNames.length - 1));
      }

      buttonElement.value = buttonNames[randomNum];
    }
  }
  request.send();
}

buttonElement.addEventListener('click', getImage);