import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <form name="login">
                <label htmlFor="email">Email</label>
                <input type="text" name="email"/>

                <label htmlFor="password">Password</label>
                <input type="text" id="password-signup" name="password"/>

                <NavLink to="/me/login/submit">
                    <button type="submit">Log In</button>
                </NavLink>

                <NavLink to="/me/signup">
                    <p>No account? Sign up</p>
                </NavLink>
            </form>
        </div>
    );
}

export default Login;