import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../css/Details.css'

export default function EventDetails() {

    const { id } = useParams()
    const [event, setEvent] = useState([])
    const [loading, setLoading] = useState(true)
    const [reload, setReload] = useState(false)

    const navigate = useNavigate()


    const fetchProduct = async () => {
        fetch(`https://event-plug.onrender.com/events/${id}`)
            .then((res) => res.json())
            .then((item) => {
                setLoading(false)
                setEvent(item)
            })
    }
    useEffect(() => {
        fetchProduct()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reload])

    function handleDelete(product) {
        fetch(`https://event-plug.onrender.com/events/${product.id}`, {
            method: "DELETE"
        })
            .then((res) => res.json())
    }


    return (
        <div className="Details">
            <div className="details-header">
                <h2>{event.start_date}</h2>
                <h1>{event.name}</h1>
                <p>Event Organised by NASA Kenya</p>
            </div>
            <div className="map-image">
                <div>
                    <div className="map-image-image">
                        <img src={event.image} alt="" />
                    </div>
                </div>
                <div className='map'></div>
            </div>
            <div className="details-description">
                <h1>About This Event</h1>
                <p>
                    {event.description}
                </p>
            </div>
            <div className="date-location">
                <h2>When And Where</h2>
                <div className="content">
                    <div>
                        <div className="icons">
                            <h1><i className="fa-solid fa-calendar-days"></i></h1>
                        </div>
                        <div className="calendar-details">
                            <h3>Date and Time</h3>
                            <p>{event.start_date}</p>
                            <p>{event.start_time} - {event.end_time}</p>
                        </div>
                    </div>
                    <div>
                        <div className="icons">
                            <h1><i className="fa-regular fa-map"></i></h1>
                        </div>
                        <div className="calendar-details">
                            <h3>Location</h3>
                            <p>{event.location}</p>
                            <p>{event.start_time} - {event.end_time}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
