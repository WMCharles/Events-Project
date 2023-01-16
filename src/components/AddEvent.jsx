import React, { useState } from 'react';
import '../css/AddEvent.css'

export default function AddEvent() {

    const [eventTitle, setEventTitle] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [eventLocation, setEventLocation] = useState('');
    const [pricing, setPricing] = useState('');
    const [eventCategory, setEventCategory] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // API
        fetch("https://event-plug.onrender.com/events", {
            method: "POST",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                eventTitle: eventTitle,
                eventDescription: eventDescription,
                eventCategory: eventCategory,
                eventLocation: eventLocation,
                pricing: pricing,
                startDate: startDate,
                endDate: endDate,
                startTime: startTime,
                endTime: endTime
            }
            )
        })
            .then((response) => response.json())
            .then((newEvent) => console.log(newEvent));
        };


    return (
        <div className="event-container">
            <h1>Event Information</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <label htmlFor="fname">Event Title*</label>
                <input onChange={(e) => setEventTitle(e.target.value)} value={eventTitle} className="create-event-input" type="text" id="fname" name="firstname" placeholder="Make it precise as possible" />

                <label htmlFor="subject">Event Description*</label>
                <textarea onChange={(e) => setEventDescription(e.target.value)} value={eventDescription} className="create-event-textarea" id="subject" name="subject" placeholder="Write a brief description of the event.." style={{height: "200px"}}></textarea>

                <div className="cat-location">
                    <div className="sub-cat-location">
                        <label htmlFor="category">Category*</label>
                        <select onChange={(e) => setEventCategory(e.target.value)} value={eventCategory} className="create-event-select" id="country" name="country">
                            <option value="IT & Technology">IT & Technology</option>
                            <option value="Agriculture">Agriculture</option>
                            <option value="Sports">Sports</option>
                        </select>
                    </div>
                    <div className="sub-cat-location">
                        <label htmlFor="lname">Location*</label>
                        <input onChange={(e) => setEventLocation(e.target.value)}  value={eventLocation} className="create-event-input" type="text" id="lname" name="lastname" placeholder="Let attendees know where the event will be.." />
                    </div>
                    <div className="sub-cat-location">
                        <label htmlFor="lname">Price*</label>
                        <input onChange={(e) => setPricing(e.target.value)} value={pricing} className="create-event-input" type="text" id="lname" name="lastname" placeholder="Enter Price.." />
                    </div>
                </div>

                <div className="date-time">
                    <div className="date">
                        <label htmlFor="lname">Start Date*</label>
                        <input onChange={(e) => setStartDate(e.target.value)} value={startDate} className="create-event-input" type="date"/>
                    </div>
                    <div className="date">
                        <label htmlFor="lname">End Date*</label>
                        <input onChange={(e) => setEndDate(e.target.value)} value={endDate} className="create-event-input" type="date"/>
                    </div>
                    <div className="time">
                        <label htmlFor="lname">Start Time*</label>
                        <input onChange={(e) => setStartTime(e.target.value)} value={startTime} className="create-event-input" type="time"/>
                    </div>
                    <div className="time">
                        <label htmlFor="lname">End Time*</label>
                        <input onChange={(e) => setEndTime(e.target.value)} value={endTime} className="create-event-input" type="time"/>
                    </div>
                </div>

                <input type="submit" value="Create Event" className="create-event-btn" />
            </form>
        </div>
    )
}
