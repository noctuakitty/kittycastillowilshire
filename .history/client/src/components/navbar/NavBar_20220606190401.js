import React from "react";

function NavBar() {
    return (
        <nav className="navbar navbar-light bg-light" style={{ height: 70, padding: 10 }}>
            <a href="/" className="navbar-left"><img  alt="...">
            </img></a>
            <ul className="nav-item">
                <a className="nav-link" style={{ color: 'gray' }} href="/">Home
                </a>
            </ul>
            <ul>
                <a className="nav-link" style={{ color: 'gray' }} href="/aboutme">About Me
                </a>
            </ul>
        </nav>
    );
};

export default NavBar;