import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Login = () => {
    async function verifyUser(event) {
        event.preventDefault();
    
        const email = document.querySelector('#email-login').value.trim().toLowerCase();
        const password = document.querySelector('#password-login').value.trim();
    
        await axios.get(`/api/users/${email}`)
            .then((userData) => {
                console.log(userData);
            })
            .catch((err) => {
                console.log(err)
            });
    }

    return (
        <div>
            <form name="login">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email-login"/>

                <label htmlFor="password">Password</label>
                <input type="text" name="password" id="password-login"/>

                <NavLink to="/menu">
                    <button type="submit" onClick={verifyUser}>Log In</button>
                </NavLink>

                <NavLink to="/me/signup">
                    <p>No account? Sign up</p>
                </NavLink>
            </form>
        </div>
    );
}

export default Login;