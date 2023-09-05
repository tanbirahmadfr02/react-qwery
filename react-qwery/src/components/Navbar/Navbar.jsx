import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png';

const Navbar = () => {
return (
<nav id="navbar" className="navbar navbar-expand-lg">
    <div className="container">
        <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
            aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="togoller_icon"><i className="fa-solid fa-bars"></i></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Information</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Culture</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact Us</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
)
}

export default Navbar