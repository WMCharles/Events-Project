import React from "react";
import styled from "styled-components";

const EventCard = (props) => {
    return (
        <EventCardStyle className="eventCard">
            <div className="image">
                <img src={props.image} alt={props.name}/>
            </div>
            <div className="event-description">
                <h3>{props.name}</h3>
                <p className="start-date">Date: {props.start_date}</p>
                <p>Location: <span className="location-tag">{props.location}</span></p>
                <p><span className="price-label">Price:</span> <span className="price-tag">{props.price}</span></p>
            </div>
        </EventCardStyle>
    )
}

const EventCardStyle = styled.div`
width: 350px;
height: 400px;
line-height: 2em;
margin: 30px auto;
padding: 10px;
cursor: pointer;`

export default EventCard;