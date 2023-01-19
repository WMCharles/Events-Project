import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/Details.css'

export default function EventItem({ event, handleAddToLikes, user, url, togglePopup, reserveEvent }) {

    const navigate = useNavigate()

    // date formating
    const date = new Date(event.start_date);
    const event_date = date.toDateString();

    function handleDelete(event) {
        fetch(`https://event-plug.onrender.com/events/${event.id}`, {
            method: "DELETE",
        }).then((res) => res.json());
    }

    return (
        <div className="Details">
            <div className="details-header">
                <h2>{event_date}</h2>
                <h1>{event.name}</h1>
                <p>Event Organised by {event.user.name}</p>
            </div>
            <div className="map-image">
                <div>
                    <img src={event.image} alt="" />
                </div>
                <div className="mapouter">
                    <div className="gmap_canvas">
                        <iframe
                            title="Event Location"
                            id="gmap_canvas"
                            src={url}
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                        ></iframe>
                    </div>
                </div>
            </div>
            <div className="details-description">
                <div className='about'>
                    <h1>About This Event</h1>
                    <p className='like' onClick={() => handleAddToLikes(event)}>
                        <i className="fa-regular fa-heart"></i>
                        <span className='tooltiptext'>Like Event</span>
                    </p>

                </div>
                <p>
                    {event.description}
                </p>

            </div>
            <div className="tickets">
                <div className="date-location">
                    <p><span>When: </span> {event_date}</p>
                    <p><span>Where: </span> {event.location}</p>
                    <p><span>Time: </span> {`${event.start_time} - ${event.end_time}`} EAT</p>
                </div>
                {event.price === 0 &&
                    <div className='tiko'>
                        <p><span>Price: </span> Free</p>
                        <button onClick={() => reserveEvent()}>Reserve a spot</button>
                    </div>
                }
                {event.price !== 0 &&
                    <div className='tiko'>
                        <p><span>Price: </span>Kshs. {event.price}</p>
                        <button onClick={togglePopup}>Buy Tickets</button>
                    </div>
                }
            </div>

            {user.role === 'Admin' &&
                <>
                    <div className="delete">
                        <button className='delete-btn' onClick={() => { handleDelete(event); navigate(`/`) }}>Delete Event</button>
                    </div>
                    <hr />
                    <h3>Other Details</h3>
                    <p><span style={{ fontWeight: "bold" }}>Total Reservations:</span> {event.reservations.length}</p>
                </>
            }

            {user !== null && user.id === event.user.id &&
                <>
                    <div className="delete">
                        <div>
                            <button className='delete-btn' onClick={() => { handleDelete(event); navigate(`/`) }}>Delete Event</button>
                        </div>
                        <div>
                            <button className='edit-btn' onClick={() => navigate(`/edit/${event.id}`)}>Edit Event</button>
                        </div>

                    </div>
                    <hr />
                    <h3>Other Details</h3>
                    <p><span style={{ fontWeight: "bold" }}>Total Reservations:</span> {event.reservations.length}</p>
                </>
            }
        </div>
    )
}
