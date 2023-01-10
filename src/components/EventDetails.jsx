import React from 'react'
import '../css/Details.css'

export default function EventDetails() {
    return (
        <div className="Details">
            <div className="details-header">
                <h2>Jan 15</h2>
                <h1>Surface Water and Ocean Topography (SWOT) Satelite</h1>
                <p>Event Organised by NASA Kenya</p>
            </div>
            <div className="map-image">
                <div></div>
                <div></div>
            </div>
            <div className="details-description">
                <h1>About This Event</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
                    distinctio, ipsa architecto fugiat repudiandae assumenda culpa est in
                    consequatur unde ipsam explicabo magnam quas. Molestiae rerum libero
                    molestias autem dolorem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
                    distinctio, ipsa architecto fugiat repudiandae assumenda culpa est in
                    consequatur unde ipsam explicabo magnam quas. Molestiae rerum libero
                    molestias autem dolorem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
                    distinctio, ipsa architecto fugiat repudiandae assumenda culpa est in
                    consequatur unde ipsam explicabo magnam quas. Molestiae rerum libero
                    molestias autem dolorem.
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
                            <p>Sunday, January 15, 2023</p>
                            <p>7:00 PM - 10:00 PM</p>
                        </div>
                    </div>
                    <div>
                        <div className="icons">
                            <h1><i className="fa-regular fa-map"></i></h1>
                        </div>
                        <div className="calendar-details">
                            <h3>Date and Time</h3>
                            <p>Sunday, January 15, 2023</p>
                            <p>7:00 PM - 10:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
