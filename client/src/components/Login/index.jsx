import React from 'react';

const Signup = () => {
    return (
        <div>
            <form name="login">
                <label for="email">Email</label>
                <input type="text" name="email"/>

                <label for="password">Password</label>
                <input type="text" id="password-signup" name="password"/>

                <button type="submit">Log In</button>
                <a href="/signup">No account? Sign up</a>
            </form>
        </div>
    );
}

export default Signup;