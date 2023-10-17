// DOM element and attached preventDefault() to prevent the default form behavior, which would cause the page to reload.
const loginForm = document.querySelector('#login-form');
const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            window.location.replace('/');
        } else {
            alert('Failed to log in.');
        }
    }
};

if (loginForm) {
    loginForm.addEventListener('submit', loginFormHandler);
}

/////////////////// Refers to signUp.handlebars /////////////////////
const signupForm = document.querySelector('.signup-form');
const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to sign up.');
        }
    }
};

if (signupForm) {
    signupForm.addEventListener('submit', signupFormHandler);
}

/////////////////// Block commented out for now ////////////////////////////////////////////////////////////////////////////////////////////

// document
// .querySelector('.signup-form')
// .addEventListener('submit', signupFormHandler);
