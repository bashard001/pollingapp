import React from 'react';
import "./navbar.css";

function Navbar() {
    return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<a className="navbar-brand namecss" href="#">WORLD NETWORK  </a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
    <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="#">Finance</a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="#">Science</a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="#">Business</a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="#">Sports</a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="#">Technology</a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="#">Entertainment</a>
    </li>
    </ul>

    <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
    </form>

</div>
</nav>
    )
}

export default  Navbar;