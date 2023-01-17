import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/Events.css'

export default function LikedEvents({ Events }) {

    const navigate = useNavigate()

    // load more events
    const [visible, setVisible] = useState(8)
    const loadMore = () => {
        setVisible((prev) => prev + 4)
    }

    return (
        <div className="events-container">
            {/* if there are no events */}
            {Events.length === 0 &&
                <div className="xxx">
                    <h1>You have no Favorite Events</h1>
                </div>
            }
            {/* if events exist */}
            {Events.length > 0 &&
                <>
                    <div className="events">
                        {Events.map((event) =>
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
                    {visible <= Events.length &&
                        <button onClick={loadMore}>Load More Events</button>
                    }
                </>
            }

        </div>
    )
}
