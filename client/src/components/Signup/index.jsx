import React from 'react';
import { NavLink } from 'react-router-dom';

const Signup = () => {
    return (
        <div>
            <form name="signup">
                <input type="hidden" name="uuid" />

                <label htmlFor="first-name-signup">Name</label>
                <input type="text" name="name" />

                <label htmlFor="last-name-signup">Phone</label>
                <input type="text" name="phone" />

                <label htmlFor="email">Email</label>
                <input type="text" name="email"/>

                <label htmlFor="password">Password</label>
                <input type="text" id="password-signup" name="password"/>

                <NavLink to="/me/signup/submit">
                <button type="submit">Sign Up</button>
                </NavLink>

                <NavLink to="/me">
                    <p>Got an account? Log in</p>
                </NavLink>
            </form>
        </div>
    );
}

export default Signup;