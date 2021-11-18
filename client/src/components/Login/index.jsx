import React from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';

const Login = () => {
    const navigate = useNavigate();

    async function verifyUser(event) {
        event.preventDefault();
    
        const email = document.querySelector('#email-login').value.trim().toLowerCase();
        const password = document.querySelector('#password-login').value.trim();
    
        await axios.post(`/api/users/${email}`, {
            email: email,
            password: password
        })
            .then((userData) => {
                if (!userData) {
                    alert('Your email or password is incorrect.');
                } else {
                    if (bcrypt.compareSync(password, userData.data.password)) {
                        // TODO: sign token
                        
                        alert('Successful login!');
                        navigate('/menu');
                    }
                }
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
                <input type="password" name="password" id="password-login" aria-autocomplete="list" />

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