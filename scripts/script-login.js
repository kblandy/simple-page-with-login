const submitLogin = document.getElementById("submit-login");

const usernameLogin = document.getElementById("name-login");
const passwordLogin = document.getElementById("password-login");
//ensures that each field is filled out and alerts when not//

//makes box red by adding .error 
function addError(inputField) {
    inputField.classList.add("error");
  }

function validateFormLogin() {
        if (!usernameLogin.value) {
          addError(usernameLogin);
        //   addError(); that highlights indicated field
        } else if (!passwordLogin.value) {
          addError(passwordLogin);
          //   addError(); that highlights indicated field
        } else if (!usernameLogin.value && !passwordLogin.value) {
            addError(usernameLogin);
            addError(passwordLogin);
        };
}

submitLogin.addEventListener('click', (event) =>{
    event.preventDefault(); /*prevents submit button from actually submitting*/
    validateFormLogin();
});        


//To add text will need to make a <thing> that appears
//make a little div slide up and then slide back down?