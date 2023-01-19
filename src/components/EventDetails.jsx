import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import EventItem from "./EventItem";
import Checkout002 from "./Checkout002";
import "../css/Details.css";

export default function EventDetails({ addToLikes, user }) {

    // states
    const { id } = useParams();
    const [event, setEvent] = useState([]);
    const [loading, setLoading] = useState(true);
    const url = `https://maps.google.com/maps?q=${event.location}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

    const fetchProduct = async () => {
        fetch(`https://event-plug.onrender.com/events/${id}`)
            .then((res) => res.json())
            .then((item) => {
                setLoading(false);
                setEvent(item);
            });
    };

    useEffect(() => {
        fetchProduct();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // pop up
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    function handleAddToLikes(item) {
        addToLikes(item);
        fetch('https://event-plug.onrender.com/likes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
               user_id: user.id,
               event_id: event.id
            })
        })
        .then ((response) => {
            if (response.ok) {
                alert('Successfully added to your Favorites!')
            } else {
                alert('Failed to add event to favorites');
            }
        })
    }

    function reserveEvent() {
        
        fetch('https://event-plug.onrender.com/reservations', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
               user_id: user.id,
               event_id: event.id
            })
        })
        .then ((response) => {
            if (response.ok) {
                alert('Successfully reserved a spot!')
            } else {
                alert('Failed to reserve Event');
            }
        })
    }

    return (
        <>
            {isOpen && <Checkout002 handleClose={togglePopup} event={event} user={user}/>}
            {/* <EventItem user={user}
                handleAddToLikes={handleAddToLikes}
                event={event}
                url={url}
                togglePopup={togglePopup} /> */}
            {loading ? (
                <Loading />
            ) : (
                <EventItem
                    user={user}
                    handleAddToLikes={handleAddToLikes}
                    reserveEvent={reserveEvent}
                    event={event}
                    url={url}
                    togglePopup ={togglePopup}
                />
            )}
        </>
    );
}
