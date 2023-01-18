import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Events.css'
import '../css/Likes.css'

export default function MyEvents({ user }) {

    const navigate = useNavigate()

    // load more events
    const [visible, setVisible] = useState(8)
    const loadMore = () => {
        setVisible((prev) => prev + 4)
    }

    return (
        <div>
            <div className="section">
                <div className="welcome-message">
                    <h1>Your Events</h1>
                    <p>Here are the events that you have created on our website. Click on an event to view more details.</p>
                </div>
            </div>
            <div className="events-container">
                {user.events.length === 0 &&
                    <div className="xxx">
                        <h1>You have not created any event</h1>
                    </div>
                }
                {user.events.length > 0 &&
                    <>
                        <div className="events">
                            {user.events.map((event) =>
                                <div className="event" key={event.id}>
                                    <div className="image">
                                        <img
                                            src={event.image}
                                            alt=""
                                            onClick={() => { navigate(`/events/${event.id}`); }}
                                        />
                                    </div>
                                    <div className="details">
                                        <h3>{event.name}</h3>
                                        <p>Date: {event.start_date}</p>
                                        <p>Location: {event.location}</p>
                                        <p>Price: {event.price}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                        {visible < user.events.length &&
                            <button onClick={loadMore}>Load More Events</button>
                        }
                    </>
                }
            </div>
        </div>
    )
}
