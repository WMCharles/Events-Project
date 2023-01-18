import { Link, Outlet } from 'react-router-dom'
// import { HashLink } from 'react-router-hash-link'
import React from 'react'
import '../css/NavBar.css'

export default function NavBar({ setUser, user }) {

    function handleLogoutClick() {
        fetch("https://event-plug.onrender.com/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setUser(null);
            }
        });
    }

    return (
        <nav>
            <input type="checkbox" name="" id="check" />
            <label htmlFor="check" className="checkbtn"><i className="fas fa-bars"></i></label>
            <label className="logo">EVENT PLUGS</label>
            <ul>
                <li><Link to="/">Home</Link></li>
                {/* <li><HashLink to="/#events-container">Events</HashLink></li> */}
                <li><Link to="/favorites">Likes</Link></li>
                {user.role === 'Admin' &&
                    <>
                        <li><Link to="/myevents">My Events</Link></li>
                        <li><Link to="/create">Create Event</Link></li>
                    </>
                }
                {user.role === 'Organizer' &&
                    <>
                        <li><Link to="/myevents">My Events</Link></li>
                        <li><Link to="/create">Create Event</Link></li>
                    </>
                }
                <li><Link to="/profile">Profile</Link></li>

                <li><Link to="#" onClick={handleLogoutClick}>Logout</Link></li>
            </ul>
            <Outlet />
        </nav>
    )
}
