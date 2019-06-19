//want to make a script that logs user input in join form into console
//when user logs in, information should match what is in console
//if not, decline entry


const submit = document.getElementById("submitButton");

const username = document.getElementById("userName");
const doB = document.getElementById("userBirthDate");
const email = document.getElementById("userEmail");
const password = document.getElementById("userPassword");

const userData = []; /*object where user data is collected */

// const userInfo = [userName, userBirthDate, userEmail, userPassword];

/*adds user input fields to userData list*/

function insert () {
        userData.push(username.value);
        userData.push(doB.value);
        userData.push(email.value);
        userData.push(password.value);
}

/*prevents submit button from actually submitting*/

submit.addEventListener('click', (event) =>{
        event.preventDefault();
        insert();
        console.log(userData);  
        });
      








