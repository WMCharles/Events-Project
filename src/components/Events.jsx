import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/Events.css'

export default function Events() {

    const [events, setEvents] = useState([]);
    const [visible, setVisible] = useState(8)
    // const [filter, setFilter] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // navigation
    const navigate = useNavigate()

    useEffect(() => {
        fetch("https://event-plug.onrender.com/events")
            .then((res) => res.json())
            .then((data) => {
                setEvents(data);
                setIsLoading(false);
            });
    }, [isLoading]);

    const loadMore = () => {
        setVisible((prev) => prev + 4)
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
                    />
                    <button className="search-button">Search</button>
                </div>
            </div>
            <div class="events">
                {events.slice(0,visible).map((event) =>
                    <div class="event" key={event.id}>
                        <div class="image">
                            <img
                                src={event.image}
                                alt=""
                            />
                        </div>
                        <div class="details">
                            <h3 onClick={() => { navigate(`/events/${event.id}`); }}>{event.name}</h3>
                            <p>Date: {event.start_date}</p>
                            <p>Location: {event.location}</p>
                            <p>Price: {event.price}</p>
                        </div>
                    </div>
                )}
            </div>
            <div className="load-more">
                <button onClick={loadMore}>Load More Events</button>
            </div>
        </div>
    )
}
