import React, { useEffect, useState } from 'react'
import HeroHome from './HeroHome'
import Events from './Events'

export default function Home() {

    const [loading, setLoading] = useState(true)
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch("https://event-plug.onrender.com/events")
          .then((res) => res.json())
          .then((data) => {
            setEvents(data);
            setLoading(false)
          });
      }, []);

    return (
        <div>
            <HeroHome />
            <Events events={events} loading={loading}/>
        </div>
    )
}
