// this is the login page. 

const loginFormHandler = async (event) => {
    event.preventDefault();
    
    //collecting values from the form
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if( username && password) {
        //where we are fetching the information from. 
        const response = await fetch ('/models/user',  {
            method: 'POST',
            body: JSON.stringify({ email, password }),
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

const signupFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#name-signup').value.trim();
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

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
    .querySelector('.login-form')
    .addEventListener('.submit', loginFormHandler);

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);    