var body = document.querySelector('body');
var background = document.querySelector('.container')
var mario = document.querySelector('#mario');
var marioRunning = false;
var i = 0;
//var jumpIndex = 0;

body.addEventListener('keydown', keyDownHandler);
body.addEventListener('keyup', keyUpHandler);

function keyDownHandler(event) {
  if (event.code === 'ArrowRight') {
    if (!marioRunning) {
      marioRunning = true;
      mario.src = './images/mario_running.gif';
    }

    background.style.backgroundPosition = i + 'px 460px';

    i -= 10;
  }

  if (event.code === 'ArrowLeft') {
    if (!marioRunning) {
      marioRunning = true;
      mario.src = './images/mario_running_left.gif';
    }
    
    background.style.backgroundPosition = i + 'px 460px';

    i += 10;
  }

  if (event.code === 'ArrowUp') {
    // mario jump

    // var top = parseInt(mario.style.top);
    // if(top > 30) {
    //   mario.style.top = top - jumpIndex + '%';
    //   jumpIndex += 5;
    // }

    mario.style.top = 20 + '%';
  } 
}

function keyUpHandler(event) {
  marioRunning = false;
  mario.src = './images/mario.png';
  mario.style.top = 75 + '%';

  //jumpIndex = 0;
}