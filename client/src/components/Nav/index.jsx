import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <ul>
                <NavLink exact to='/'>
                    <li>Home</li>
                </NavLink>
                <NavLink to='/menu'>
                    <li>Menu</li>
                </NavLink>
                <NavLink to='/me'>
                    <li>Me</li>
                </NavLink>
                <NavLink to='/cart'>
                    <li>Cart</li>
                </NavLink>
            </ul>
        </nav>
    );
}

export default Nav;