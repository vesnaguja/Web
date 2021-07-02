var player = document.querySelector('.player');
var field = document.querySelector('.field');
var button = document.querySelector('.button');

var isOn = true;

function toggle() {
  if (isOn) {
    button.innerHTML = 'Start Moving';
    isOn = false;
  } else {
    button.innerHTML = 'Stop Moving';
    isOn = true;
  }
}

function move(event) {
if (isOn){  
  player.style.left = event.x + 'px';
  player.style.top = event.y + 'px';
}
}

field.addEventListener('click', move);
button.addEventListener('click', toggle);