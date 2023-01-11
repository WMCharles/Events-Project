import { Link, Outlet } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import React from 'react'
import '../css/NavBar.css'

export default function NavBar() {
    return (
        <nav>
            <input type="checkbox" name="" id="check" />
            <label htmlFor="check" className="checkbtn"><i className="fas fa-bars"></i></label>
            <label className="logo">EVENT PLUGS</label>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><HashLink to="/#events-container">Events</HashLink></li>
                <li><Link to="/favorites">Likes</Link></li>
                <li><Link to="/create">Create Event</Link></li>
                <li><Link to="#">Logout</Link></li>
            </ul>
            <Outlet/>
        </nav>
    )
}
