const { axios } = require('axios');

async function newUser(event) {
    event.preventDefault();

    const email = document.querySelector('#email-signup').value.trim().toLowerCase();
    const password = document.querySelector('#password-signup').value.trim();
    const phone = document.querySelector('#phone-signup').value.trim();
    const name = document.querySelector('#name-signup').value.trim();

    const signupRequest = {
        email: email,
        password: password,
        name: name,
        phone: phone
    };

    const response = await axios(`/signup/send`, {
        method: 'POST',
        body: JSON.stringify(signupRequest),
        headers: { 'Content-Type': 'application/json'}
    })

    if (response.ok) {
        // TODO: ensure data is sent to backend post request
    }
}

const submit = document.querySelector('#signup-btn');
submit.addEventListener('click', newUser);