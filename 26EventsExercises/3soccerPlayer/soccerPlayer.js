var isOn = true;
var field = document.querySelector('.field');
var button = document.querySelector('.btn-stop-moving');
var player = document.querySelector('.player');


function stopButtonHandler() {
  if (isOn) {
    button.textContent = 'Start Moving';
    isOn = false;
  } else {
    button.innerText = 'Stop Moving';
    isOn = true;
  }
}

function fieldHandler(event) {
  if (isOn) {
    player.style.top = event.y + 'px';
    player.style.left = event.x + 'px';
  }
}

//button.onclick = stopButtonHandler;
button.addEventListener('click', stopButtonHandler);
field.addEventListener('mousedown', fieldHandler);