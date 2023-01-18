import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/Events.css'

export default function LikedEvents({ likes, user }) {


    const navigate = useNavigate()

    const [mylikes, setMyLikes] = useState([])

    useEffect(() => {
        fetch('https://event-plug.onrender.com/likes')
            .then((res) => res.json())
            .then((data) => setMyLikes(data))
    }, [])

    
    

    function findMyLikes(item) {
        if (item.user === user){
            return item
        }
    }

    const melikes = mylikes.filter((event) => findMyLikes(event))
    
    console.log(melikes)

    // load more events
    const [visible, setVisible] = useState(8)
    const loadMore = () => {
        setVisible((prev) => prev + 4)
    }

    return (
        <div>
            <div className="events-container">
                {likes.length === 0 &&
                    <div className="xxx">
                        <h1>You dont have any favorite events</h1>
                    </div>
                }
                {likes.length > 0 &&
                    <>
                        <div className="events">
                            {likes.map((event) =>
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
                        {visible < likes.length &&
                            <button onClick={loadMore}>Load More Events</button>
                        }
                    </>
                }
            </div>
        </div>
    )
}
