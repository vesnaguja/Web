// Attributes
// Create a form that contains multiple input elements with labels.
// Some of those elements should be required.

// Create a function that validates the form.
// The function checks each input element that belongs to the form.
// If the element has the required attribute and no data, it should get red borders.

// sva polja su u nizu | nacin 1
function validatesForm() {

  var field = ['fname', 'lname', 'password'];

  field.forEach(function (field) {
    var inputField = document.getElementById(field);

    if (inputField.hasAttribute('required') && inputField.value === '') {
      inputField.classList.add('border');
    } else {
      inputField.classList.remove('border');
    }
  });

}

// nacin 2 | prosledjivanje polja
function validateField(elementName) {
  var inputElement = document.getElementById(elementName);

  if (inputElement.hasAttribute('required') && inputElement.value.trim() === '') {
    inputElement.classList.add('border');
  } else {
    inputElement.classList.remove('border');
  }
}

//document.getElementById('submit').addEventListener('click', validatesForm)