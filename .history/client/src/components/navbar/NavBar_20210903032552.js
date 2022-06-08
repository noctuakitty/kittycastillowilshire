import React from "react";
import Trinity from '../../res/trinity.png';

function NavBar() {
    return (
        <nav className="navbar navbar-light bg-light" style={{ height: 70, padding: 10 }}>
            <a href="/" className="navbar-left"><img style={{ height: 50, marginBottom: 15 }} src={Trinity} alt="Sun">
            </img></a>
            <ul className="nav-item">
                <a className="nav-link" style={{ color: 'gray' }} href="/">Home
                </a>
            </ul>
            <ul>
                <a className="nav-link" style={{ color: 'gray' }} href="/aboutaa">About AA
                </a>
            </ul>
            <ul>
                <a className="nav-link" style={{ color: 'gray' }} href="/aboutus">About Us
                </a>
            </ul>
        </nav>
    );
};

export default NavBar;