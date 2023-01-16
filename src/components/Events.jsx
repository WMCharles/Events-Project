import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/Events.css'

export default function Events() {

    const [events, setEvents] = useState([]);
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

    return (
        <div className="events-container" id="events-container">
            <div class="events-header">
                <h1>Upcoming Events</h1>
                <p>
                    Check out our list of events coming up in the next few months
                </p>
            </div>
            <div class="search-section">
                <div class="search-container">
                    <input
                        type="text"
                        class="search-bar"
                        placeholder="Search For an Event..."
                    />
                    <button class="search-button">Search</button>
                </div>
            </div>
            <div class="events">
                {events.map((event) =>
                    <div class="event" key={event.id}>
                        <div class="image">
                            <img
                                src={event.image}
                                alt=""
                            />
                        </div>
                        <div class="details">
                            <h3>{event.name}</h3>
                            <p>Date: {event.start_date}</p>
                            <p>Location: {event.location}</p>
                            <p>Price: {event.price}</p>
                        </div>
                    </div>
                )}
            </div>
            <div class="load-more">
                <button>Load More Events</button>
            </div>
        </div>
    )
}
