//VARIABLES

const submitLogin = document.getElementById("submit-login");
const usernameLogin = document.getElementById("name-login");
const passwordLogin = document.getElementById("password-login");
const errorMessage1 = document.getElementById("error-message1");
const errorMessage2 = document.getElementById("error-message2");


//FUNCTIONS

//hides error messages
function hideErrorMessage1 () {
  errorMessage1.style.display = 'none';
}

function hideErrorMessage2 () {
  errorMessage2.style.display = 'none';
}


//shows error message divs
function showErrorMessage1 () {
  errorMessage1.style.display = 'block';
}

function showErrorMessage2 () {
  errorMessage2.style.display= 'block';
}

//calls above functions
hideErrorMessage1();
hideErrorMessage2();

//adds a red error border (class="error") 
function addError(inputField) {
    inputField.classList.add("error");
  }

//removes a red error border (class="error") 
function removeError(inputField) {
    inputField.classList.remove("error");
}  

//validates form and adds error and errorMessages
function validateFormLogin() {
        if (!usernameLogin.value) {
          addError(usernameLogin);
          showErrorMessage1();
        } 
        if (!passwordLogin.value) {
          addError(passwordLogin);
          showErrorMessage2();
        }
        if (!usernameLogin.value && !passwordLogin.value) {
            addError(usernameLogin);
            showErrorMessage1();
            addError(passwordLogin);
            showErrorMessage2();
        } 
}

//CLICK LISTENERS

//when username field is clicked, error is removed
usernameLogin.addEventListener('click', (event) => {
  removeError(event.target);
  hideErrorMessage1();
});

//when password field is clicked, error is removed
passwordLogin.addEventListener('click', (event) => {
  removeError(event.target);
  hideErrorMessage2();
});

//when submit is clicked, prevents default and 
//performs form validation
submitLogin.addEventListener('click', (event) =>{
    event.preventDefault(); /*prevents submit button from actually submitting*/
    validateFormLogin();
});        



