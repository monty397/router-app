import React from 'react'
import './navbar.css'
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="title">My Website</Link>
            <ul>
                <li><Link to="/login" className="nav-links">Login</Link></li>
                <li><Link to="/signup" className="nav-links">Sign Up</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
