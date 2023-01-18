import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import Loading from './Loading';
import HomeEvents from './HomeEvents';
import '../css/Events.css'

export default function Events({ events, loading }) {

    // navigation
    const navigate = useNavigate()

    // load more events
    const [visible, setVisible] = useState(8)
    const loadMore = () => {
        setVisible((prev) => prev + 4)
    }

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
        <>
            {loading ? <Loading /> : <HomeEvents loading={loading} events={events}/>}
        </>
    )
}