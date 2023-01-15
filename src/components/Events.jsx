import React from 'react'
import '../css/Events.css'
import { useEffect, useState } from "react";
import EventCard from './EventCard';



function Events() {

    const [ events, setEvents ] = useState([])

    useEffect(() => {
        fetch("https://event-plug.onrender.com/events")
        .then((response) => response.json())
        // .then((events) => console.log(events));
        .then((events) => setEvents(events));
    }, [])

    return (
        <div className='events'>

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


            {events.length > 0 ? (
            <ul className="event-cards">
                {events.map((event) => {

            const {id, image, location, name, price, start_date } = event

            return <EventCard key={id} 
            id={id}
            image={image}
            location={location}
            name={name}
            price={price}
            start_date={start_date}
            />;
        })}
        </ul>
        ) : (
        <>
        <h2>No events Found</h2>
        </>
    )}

    <div className="load-more">
        <button>Load More Events</button>
    </div>

    </div>
);
}

export default Events;
