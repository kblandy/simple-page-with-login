//want to make a script that logs user input in join form into console
//when user logs in, information should match what is in console
//if not, decline entry

const submit = document.getElementById("submitButton");

const username = document.getElementById("userName");
const doB = document.getElementById("userBirthDate");
const email = document.getElementById("userEmail");
const password = document.getElementById("userPassword");

const userData = []; /*list where user data is collected */


//ensures that each field is filled out and alerts when not//

function validateForm() {
        if (!username.value) {
          alert("Enter username.");
        //   function(); that highlights indicated field
        } else if (!doB.value) {
          alert("Enter date of birth.");
          //   function(); that highlights indicated field
        } else if (!email.value) {
          alert("enter email");
          //   function(); that highlights indicated field
        } else if (!password.value) {
          alert("Password does not include a number. Password must include at least 1 number.");
          //   function(); that highlights indicated field
        }
}

function insert () {

        const user = {
                username: username.value,
                dateOfBirth: doB.value,
                email: email.value,
                password: password.value
        }
        validateForm(); //calls function to ensure values are met
        userData.push(user);

        console.log(userData);
        //stores each user object with attributes in local storage
        localStorage.setItem('userStored', JSON.stringify(user));
}

submit.addEventListener('click', (event) =>{
        event.preventDefault(); /*prevents submit button from actually submitting*/
        insert();

        
});        












      








