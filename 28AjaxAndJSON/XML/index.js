

function handlerFunction() {
 
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://www.geoplugin.net/xml.gp?ip=87.116.161.143', true);

  xhr.onload = function () {
    if(this.status === 200) {
      console.log('Hello');
    }
  }
  xhr.send();

}




window.addEventListener('load', handlerFunction);