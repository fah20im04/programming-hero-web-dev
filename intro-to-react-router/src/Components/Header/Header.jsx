import React from 'react';
import { Link, NavLink } from 'react-router';
import "./Header.css"

const Header = () => {
    return (
        <div>
            <h3>I am header</h3>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Mobiles">Mobiles</NavLink>
                <NavLink to="/Laptops">Laptops</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/Users2">Users2</NavLink>
                <NavLink to="/Posts">Posts</NavLink>

               
            </nav>
        </div>
    );
};

export default Header;<h3>I am header</h3>