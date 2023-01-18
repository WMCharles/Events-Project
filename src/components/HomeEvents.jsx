import React, { useState } from 'react'
import { useNavigate } from 'react-router';

export default function HomeEvents({ events }) {
    // load more events
    const [visible, setVisible] = useState(8)
    const loadMore = () => {
        setVisible((prev) => prev + 4)
    }

    // navigation
    const navigate = useNavigate()

    // Implementing search functionality
    const [query, setQuery] = useState('')
    const search = (data) => {
        return data.filter((item) =>
            item.name.toLowerCase().includes(query) ||
            item.location.toLowerCase().includes(query)
        )
    }

    function tarehe(event) {
        const date = new Date(event.start_date);
        const event_date = date.toDateString()
        return event_date
    }

    return (
        <div className="events-container" id="events-container">
            <div className="events-header">
                <h1>Upcoming Events</h1>
                <p>
                    Check out our list of events coming up in the next few months
                </p>
            </div>
            <div className="search-section">
                <div className="search-container">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search For an Event..."
                        onChange={(e) => { setQuery(e.target.value) }}
                    />
                    <button className="search-button">Search</button>
                </div>
            </div>
            <div className="events">
                {search(events).slice(0, visible).map((event) =>
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
                            <p>Date: {tarehe(event)}</p>
                            <p>Location: {event.location.substring(0, 35)}</p>
                            <p>Price: {event.price}</p>
                        </div>
                    </div>
                )}
            </div>
            <div className="load-more">
                {visible < events.length &&
                    <button onClick={loadMore}>Load More Events</button>
                }
            </div>
        </div>
    )
}
