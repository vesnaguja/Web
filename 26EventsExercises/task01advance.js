

var isOn = true;
var body = document.querySelector('body');
var automatic = document.querySelector('#automatic');

var changeBackground = function () {
  body.classList.toggle('bg-color');
}

var handler = changeBackground;

var turnOffHandler = function () {
  if (!isOn) {
    handler = changeBackground;
    automatic.textContent = 'Turn Off';
    isOn = true;
  } else {
    handler = null;
    automatic.textContent = 'Turn On';
    isOn = false;
  }
}