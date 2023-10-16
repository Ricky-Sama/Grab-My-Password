const e = require("express");
const express = require("express"); /// ! Is this supposed to be here ! ///

////// DOM element and attached preventDefault() to prevent the default form behavior, which would cause the page to reload. /////////////////////
const loginForm = document.querySelector('#login-form');
const loginFormHandler = async (event) => {
event.preventDefault();

if (username && email && password) {
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();


    const response = await fetch('/api/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    }   else { 
        alert('Failed to log in.');
    }
}
}; 
/////////////////// Defines the loginFormHandler() function to handle form for submission  ////////////////////////////////////////////////////////////////////////////////////////////
function loginFormHandler(event) {
    event.preventDefault();     // Prevent page reload //    
  }
  
  if (loginForm) {
    loginForm.addEventListener('submit', loginFormHandler);
  };

/////////////////// Refers to signUp.handlebars ////////////////////////////////////////////////////////////////////////////////////////////
const signupForm = document.querySelector('.signup-form');
const signupFormHandler = async (event) => {
event.preventDefault();

const username = document.querySelector('#username-signup').value.trim();
const email = document.querySelector('#email-signup').value.trim();
const password = document.querySelector('#password-signup').value.trim();

if (username && email && password) {
    // const response = await fetch('/api/user', {
    // method: 'POST',
    // body: JSON.stringify({ username, email, password }),
    // headers: { 'Content-Type': 'application/json' },
    // });
    const response = await fetch('/api/website', {
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
/////////////////// Defines the signupFormHandler() function to handle form for submission  ////////////////////////////////////////////////////////////////////////////////////////////
function signupFormHandler(event) {
    event.preventDefault();
}

if (signupForm) {
    signupForm.addEventListener('submit', signupFormHandler);
}

/////////////////// Block commented out for now ////////////////////////////////////////////////////////////////////////////////////////////

// document
// .querySelector('.signup-form')
// .addEventListener('submit', signupFormHandler);
