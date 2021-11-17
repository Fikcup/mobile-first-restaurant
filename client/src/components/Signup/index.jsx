import React from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        console.log('Executing...');
        event.preventDefault();

        const name = document.querySelector('#name-signup').value.trim();
        const phone = document.querySelector('#phone-signup').value.trim();
        const email = document.querySelector('#email-signup').value.trim().toLowerCase();
        const password = document.querySelector('#password-signup').value.trim();

        await axios.post(`/api/users`, {
            name: name,
            phone: phone,
            email: email,
            password: password
        })
            .then(() => {
                alert('Your account has been created!');
                navigate('/menu');
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div>
            <form name="signup">
                <input type="hidden" name="uuid" />

                <label htmlFor="name-signup">Name</label>
                <input type="text" name="name-signup" id="name-signup"/>

                <label htmlFor="phone-signup">Phone</label>
                <input type="text" name="phone-signup" id="phone-signup"/>

                <label htmlFor="email-signup">Email</label>
                <input type="text" name="email-signup" id="email-signup"/>

                <label htmlFor="password-signup">Password</label>
                <input type="text" name="password" id="password-signup" />

                <NavLink to="/menu">
                    <button type="submit" onClick={handleSubmit}>Sign Up</button>
                </NavLink>

                <NavLink to="/me">
                    <p>Got an account? Log in</p>
                </NavLink>
            </form>
        </div>
    );
}

export default Signup;