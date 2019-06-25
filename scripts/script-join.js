//want to make a script that logs user input in join form into console
//when user logs in, information should match what is in console
//if not, decline entry

const submit = document.getElementById("submitButton");

const username = document.getElementById("userName");
const doB = document.getElementById("userBirthDate");
const email = document.getElementById("userEmail");
const password = document.getElementById("userPassword");

const userData = []; /*list where user data is collected */

// const userInfo = [userName, userBirthDate, userEmail, userPassword];

/*adds user input fields to userData object*/

function insert () {

        const user = {
                username: username.value,
                dateOfBirth: doB.value,
                email: email.value,
                password: password.value
        }
        userData.push(user);

        console.log(userData);
        //stores each user object with attributes in local storage
        localStorage.setItem('userStored', JSON.stringify(user));
}

/*prevents submit button from actually submitting*/

submit.addEventListener('click', (event) =>{
        event.preventDefault();
        insert();
        });









      








