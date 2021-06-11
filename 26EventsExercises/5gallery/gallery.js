
var preview = document.querySelector('.preview');

// var images = [1,2,3,4,5,6].map(function(number) {
//   return document.querySelector('.img-' + number);
// });

// 6 brojeva jer imamo 6 slika
var imageNumbers = [1, 2, 3, 4, 5, 6];
var images = [];

// querySelector za svaku od 6 slika; smestanje elemenata u niz images[]
imageNumbers.forEach(function (number) {
  images.push(document.querySelector('#img-' + number));
});

// funkcija koju zelimo da pokrene eventListener
function addRedBorder(event) {
  if(images.includes(event.target) && event.target.width < 300) {
    event.stopPropagation();
  }
  // remove all previous
  images.forEach(function (imageElement) {
    if(imageElement !== event.target)
      imageElement.classList.remove('red-border');
  });

  // add new red-border
  event.target.classList.toggle('red-border');

  preview.innerHTML = '';
  var newImage = document.createElement('img');
  newImage.src = event.target.src.replace('thumbs', 'fullSizeImg');
  newImage.classList.add('preview-img');
  preview.appendChild(newImage);
}

// dodavanje eventListenera na svaku od 6 slika
images.forEach(function (imageElement) {
  imageElement.addEventListener('click', addRedBorder);
});

function clickHandler(event) {
  console.log(event);
}

document.querySelector('body').addEventListener('click', clickHandler);