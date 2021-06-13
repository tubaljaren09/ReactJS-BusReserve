import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return(
        <div className="navbar-main">
            <div className="navbar-container">
                <div className="navbar-top">
                    <h1>BUS TICKET RESERVATION</h1>
                    <h2>WITH MEDICAL APPREHENSION</h2>
                </div>
                <div className="navbar-down">
                    <ul>
                        <li><NavLink exact to="/home" className="navbar" activeClassName="navbar-active">HOMEPAGE</NavLink></li>
                        <li><NavLink exact to="/book" className="navbar" activeClassName="navbar-active">BOOK TICKET</NavLink></li>
                        <li><NavLink exact to="/about" className="navbar" activeClassName="navbar-active">ABOUT</NavLink></li>
                        <li><NavLink exact to="/admin" className="navbar" activeClassName="navbar-active">ADMIN</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;