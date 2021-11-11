const { axios } = require('axios');

async function verifyUser(event) {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim().toLowerCase();
    const password = document.querySelector('#password-login').value.trim();

    const loginRequest = {
        email: email,
        password: password
    };

    const response = await axios(`/signup/send`, {
        method: 'POST',
        body: JSON.stringify(loginRequest),
        headers: { 'Content-Type': 'application/json'}
    });

    if (response.ok) {
        // TODO: ensure data is sent to backend post request
    }
}

const submit = document.querySelector('#login-btn');
submit.addEventListener('click', verifyUser);