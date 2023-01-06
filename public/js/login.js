// this is the login page. 

const loginFormHandler = async (e) => {
    e.preventDefault();
    console.log("loginFormHandler");
    //collecting values from the form
    const username = document.querySelector('#email-login').value
    const password = document.querySelector('#password-login').value
console.log(username);
console.log(password);
    if( username && password) {
        //where we are fetching the information from. 
        const response = await fetch ('./api/user-route',  {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            // where the info will be. 
            headers: { 'Content-Type': ''},
        });
        if (response.ok) {
            // will redirect to profile page, if login is good
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};

const signupFormHandler = async (e) => {
    e.preventDefault();
    const name = document.querySelector('#name-signup').value.trim();
    const username = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
console.log('signup')
    if ( name && username && password) {
        const response = await fetch('/models/user', {
            method: 'POST',
            body: JSON.stringify({ name, username, password }),
            headers: { ' Content-Type' : ' '},
        });
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('#login-submit')
    .addEventListener('click', (e) => {loginFormHandler(e)});

document
    .querySelector('#signup-submit')
    .addEventListener('click',(e) => {signupFormHandler(e)});    