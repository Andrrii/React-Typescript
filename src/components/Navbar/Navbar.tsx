import React from 'react';
import { NavLink } from "react-router-dom"

const Navbar: React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper purple darken-2 px1">
                <a href="/" className="brand-logo">React + TypeScript</a>
                <ul className="right hide-on-med-and-down">
                    <li><NavLink to="/">Task list</NavLink></li>
                    <li><NavLink to="/about">About us</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar