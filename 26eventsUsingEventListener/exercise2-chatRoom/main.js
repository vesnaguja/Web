var inputMessageElement = document.querySelector('.input-message');
var buttonElement = document.querySelector('.button');
var messageArea = document.querySelector('.area-with-messages');
var inputMessageValue = inputMessageElement.value;



function sendMessage() {

  if (inputMessageElement.value.trim() === '') {
    inputMessageElement.value = '';
    return;
  } else {
    var pElement = document.createElement('p');  
    var lineBreak = document.createElement('br');  
    pElement.classList.add('paragraph');
    var content = document.createTextNode(inputMessageElement.value);
    pElement.appendChild(content);
    messageArea.append(pElement);
    messageArea.append(lineBreak);
    inputMessageElement.value = '';
  } 
}


buttonElement.addEventListener('click', sendMessage);