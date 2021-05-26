// Window Methods
// ●	Create a function that shows the user a greeting message using alert
function alertText() {
  alert('Hello');
}

alertText();

// ●	Then a question is presented to the user using prompt

var answer = prompt('Kako se zoves?');

// ●	When the user provides the answer, that answer is used in the confirm dialog
// ●	The format of the message in the dialog should be: "We will submit this answer now! " + the answer

var isSubmeted = false;
if (answer) {
  isSubmeted = confirm("We will submit this answer now: " + answer)
} else {

};

// ●	If the user clicks OK, show alert with success message

if (isSubmeted) {
  confirm("Your answer is succesfully submited!")}

// ●	If the user clicks Cancel, don't show anything