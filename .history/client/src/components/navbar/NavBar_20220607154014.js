import React from "react";

function NavBar() {
    return (
        <nav className="navbar navbar-light bg-light" >
            <ul className="nav-item">
                <a className="nav-link" href="/">Home
                </a>
            </ul>
            <ul>
                <a className="nav-link" style={{ color: 'gray' }} href="/aboutpage">About
                </a>
            </ul>
        </nav>
    );
};

export default NavBar;