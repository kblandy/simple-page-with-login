const submitLogin = document.getElementById("submit-login");
const usernameLogin = document.getElementById("name-login");
const passwordLogin = document.getElementById("password-login");
const errorMessage1 = document.getElementById("error-message1");
const errorMessage2 = document.getElementById("error-message2");


//ensures that each field is filled out and alerts when not//

//hides error messages
function hideErrorMessage1 () {
  errorMessage1.style.display = 'none';
}

function hideErrorMessage2 () {
  errorMessage2.style.display = 'none';
}


//shows error messages
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

//validates forms and adds error and errorMessages
function validateFormLogin() {
        if (!usernameLogin.value) {
          addError(usernameLogin);
          showErrorMessage1();
        //   addError(); that highlights indicated field
        } else if (!passwordLogin.value) {
          addError(passwordLogin);
          showErrorMessage2();
          //   addError(); that highlights indicated field
        } else if (!usernameLogin.value && !passwordLogin.value) {
            addError(usernameLogin);
            showErrorMessage1();
            addError(passwordLogin);
            showErrorMessage2();
        };
}


//click event that targets input
// function hideMessageOnClick() {
//   usernameLogin.addEventListener('click', (event)  =>{
//     hideErrorMessage1();
//     removeError(usernameLogin);
//   });
// }



// removeError(usernameLogin);

//need to target input fields
usernameLogin.addEventListener('click', (event) => {
  removeError(event.target);
  hideErrorMessage1();
});

passwordLogin.addEventListener('click', (event) => {
  removeError(event.target);
  hideErrorMessage2();
});

submitLogin.addEventListener('click', (event) =>{
    event.preventDefault(); /*prevents submit button from actually submitting*/
    validateFormLogin();
});        


//click event that targets input



//To add text will need to make a <thing> that appears
//make a little div slide up and then slide back down?

