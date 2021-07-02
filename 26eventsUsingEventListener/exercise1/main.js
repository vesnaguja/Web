var buttonElement = document.querySelector('.button');
var divElement = document.querySelector('div');
var button2Element = document.querySelector('.button-2')
var valAttr = button2Element.value;
var isOn = true;


function changeColor() {
  divElement.classList.toggle('black')
}


function turnOffOn() {  
 
  if (!isOn) {
    buttonElement.removeAttribute('disabled');
    button2Element.value = 'Turn Off';
    isOn = true
  } 
  else {
    buttonElement.setAttribute('disabled', true);
    button2Element.value = 'Turn On';    
    isOn = false;
  }

}


buttonElement.addEventListener('click', changeColor);
button2Element.addEventListener('click', turnOffOn);