var countryElement = document.querySelector('#country');
var buttonElement = document.querySelector('#button');
var inputElement = document.querySelector('#searchIP');
var inputValue = inputElement.value;

function getCountry() {
 
  var request = new XMLHttpRequest();
  request.open('GET', 'http://www.geoplugin.net/xml.gp?ip=' + inputElement.value);

  request.onload = function () {

    if (request.status >= 200 && request.status < 300) {
      var response = request.responseXML;
      var country = response.querySelector("geoplugin_countryName").textContent;
      countryElement.textContent = country;

    }
  }
  request.send();

}





buttonElement.addEventListener('click', getCountry)
//window.addEventListener('load', getCountry);