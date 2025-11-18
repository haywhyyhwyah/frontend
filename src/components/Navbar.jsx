import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar" aria-label="Main navigation">
            <div className="nav-container">
                <div className="nav-brand">
                    <Link to="/" className="nav-logo">Haywhy</Link>
                </div>

                <ul className="nav-links">
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li><Link to="/about" className="nav-link">About</Link></li>
                    <li><Link to="/signin" className="nav-link">Sign In</Link></li>
                    <li><Link to="/signup" className="nav-link nav-cta">Sign Up</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar