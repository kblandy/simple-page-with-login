//want to make a script that logs user input in join form into console
//when user logs in, information should match what is in console
//if not, decline entry

//VARIABLES

const submit = document.getElementById("submitButton");
const username = document.getElementById("userName");
const doB = document.getElementById("userBirthDate");
const email = document.getElementById("userEmail");
const password = document.getElementById("userPassword");
const errorName = document.getElementById("errorMessageName");
const errorDob = document.getElementById("errorMessageDob");
const errorEmail = document.getElementById("errorMessageEmail");
const errorPassword = document.getElementById("errorMessagePassword");
const userData = []; /*list where user data is collected */


//FUNCTIONS

//hides error messages
function hideErrorName () {
  errorName.style.display = 'none';
}

function hideErrorDob () {
  errorDob.style.display = 'none';
}

function hideErrorEmail () {
  errorEmail.style.display = 'none';
}

function hideErrorPassword () {
  errorPassword.style.display = 'none';
}


//shows error message divs
function showErrorName () {
  errorName.style.display = 'block';
}

function showErrorDob () {
  errorDob.style.display= 'block';
}

function showErrorEmail () {
  errorEmail.style.display = 'block';
}

function showErrorPassword () {
  errorPassword.style.display= 'block';
}

//calls above functions
hideErrorName();
hideErrorDob();
hideErrorEmail();
hideErrorPassword();

//adds a red error border (class="error") 
function addErrorJoin(inputField) {
  inputField.classList.add("error");
}

//removes a red error border (class="error") 
function removeErrorJoin(inputField) {
  inputField.classList.remove("error");
}  

//validates form
//note, does not validate for type (i.e. making sure email has '@');
//further validation will need to be added in future versions
function validateFormJoin() {
        if (!username.value) {
          addErrorJoin(username);
          showErrorName();
        }
        if (!doB.value) {
          addErrorJoin(doB);
          showErrorDob();
        }
        if (!email.value) {
          addErrorJoin(email);
          showErrorEmail();
        }
        if (!password.value) {
          addErrorJoin(password);
          showErrorPassword();
        }
}

//Saves User Data to Local Storage, viewed via console
function insert () {

        const user = {
                username: username.value,
                dateOfBirth: doB.value,
                email: email.value,
                password: password.value
        }
        validateFormJoin(); //calls function to ensure values are met
        userData.push(user);

        console.log(userData);
        //stores each user object with attributes in local storage
        localStorage.setItem('userStored', JSON.stringify(user));
}

//CLICK LISTENERS

//when username field is clicked, error is removed
username.addEventListener('click', (event) => {
  removeErrorJoin(event.target);
  hideErrorName();
});

//when DoB field is clicked, error is removed
doB.addEventListener('click', (event) => {
  removeErrorJoin(event.target);
  hideErrorDob();
});

//when email field is clicked, error is removed
email.addEventListener('click', (event) => {
  removeErrorJoin(event.target);
  hideErrorEmail();
});

//when password field is clicked, error is removed
password.addEventListener('click', (event) => {
  removeErrorJoin(event.target);
  hideErrorPassword();
});

//when submit is clicked, prevents default and 
//performs form validation
submit.addEventListener('click', (event) =>{
        event.preventDefault(); /*prevents submit button from actually submitting*/
        validateFormJoin();
        insert();       
});        












      








