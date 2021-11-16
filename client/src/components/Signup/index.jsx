import React from 'react';
import { NavLink } from 'react-router-dom';

const Signup = () => {
    return (
        <div>
            <form name="signup">
                <input type="hidden" name="uuid" />

                <label for="first-name-signup">Name</label>
                <input type="text" name="name" />

                <label for="last-name-signup">Phone</label>
                <input type="text" name="phone" />

                <label for="email">Email</label>
                <input type="text" name="email"/>

                <label for="password">Password</label>
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