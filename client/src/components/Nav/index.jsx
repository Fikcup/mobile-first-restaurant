import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <ul>
                <NavLink exact to='/' activeClassName='main-nav-active'>
                    <li>Home</li>
                </NavLink>
                <NavLink to='/menu' activeClassName='main-nav-active'>
                    <li>Menu</li>
                </NavLink>
                <NavLink to='/me' activeClassName='main-nav-active'>
                    <li>Me</li>
                </NavLink>
                <NavLink to='/cart' activeClassName='main-nav-active'>
                    <li>Cart</li>
                </NavLink>
            </ul>
        </nav>
    );
}

export default Nav;