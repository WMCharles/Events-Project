import { Link, Outlet } from 'react-router-dom'
import React from 'react'
import '../css/NavBar.css'

export default function NavBar() {
    return (
        <nav>
            <input type="checkbox" name="" id="check" />
            <label htmlFor="check" className="checkbtn"><i className="fas fa-bars"></i></label>
            <label className="logo">EVENT PLUGS</label>
            <ul>
                <li><Link href="index.html">Home</Link></li>
                <li><Link href="#events-container">Events</Link></li>
                <li><Link href="likes.html">Likes</Link></li>
                <li><Link href="#">Create Event</Link></li>
                <li><Link href="#">Logout</Link></li>
            </ul>
            <Outlet/>
        </nav>
    )
}
