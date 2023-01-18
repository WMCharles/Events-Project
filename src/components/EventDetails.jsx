import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import EventItem from "./EventItem";
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

    function handleAddToLikes(item) {
        addToLikes(item);
    }

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <EventItem
                    user={user}
                    handleAddToLikes={handleAddToLikes}
                    event={event}
                    url={url}
                />
            )}
        </>
    );
}
