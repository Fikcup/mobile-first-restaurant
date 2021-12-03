import React, { useEffect, useState } from 'react';
import axios from 'axios';
import jwt from 'jsonwebtoken';

const Account = ({ token }) => {
    const [user, setUser] = useState();

    async function deleteAccount() {
        const verify = window.confirm('Are you sure you want to delete your account?');
        
        if (verify) {
            await axios.delete(`/api/users/${user.uuid}`);
            localStorage.removeItem('token');
            window.location.reload();
        }
    }

    const logout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }

    useEffect(() => {
        (async () => {
            let userId;
            jwt.verify(token, process.env.REACT_APP_SECRET, function(err, decoded) {
                if (err) {
                    localStorage.removeItem('token');
                    window.location.reload();
                }

                if (decoded) {
                    userId = decoded.id;
                }
            });

            const account = await axios.get(`/api/users/${userId}`);

            setUser(account.data);
        })();
    }, [])

    return(
        <div>
            <h1>Account</h1>

            <h2>Email: {user ? user.email : "" }</h2>
            <h2>Phone: {user ? user.phone : "" }</h2>

            <button onClick={logout}>Logout</button>
            <button onClick={deleteAccount}>Delete account</button>    
        </div>
    );
}

export default Account;