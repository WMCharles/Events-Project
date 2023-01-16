import React from 'react'
import '../css/AddEvent.css'

export default function AddEvent() {
    return (
        <div className="event-container">
            <h1>Event Information</h1>
            <hr />
            <form>
                <label htmlFor="fname">Event Title*</label>
                <input className="create-event-input" type="text" id="fname" name="firstname" placeholder="Make it precise as possible" />

                <label htmlFor="fname">Image Url*</label>
                <input className="create-event-input" type="text" id="fname" name="firstname" placeholder="Make it precise as possible" />

                <label htmlFor="subject">Event Description*</label>
                <textarea className="create-event-textarea" id="subject" name="subject" placeholder="Write a brief description of the event.." style={{height: "200px"}}></textarea>

                <div className="cat-location">
                    <div className="sub-cat-location">
                        <label htmlFor="country">Category*</label>
                        <select className="create-event-select" id="country" name="country">
                            <option value="australia">IT & Technology</option>
                            <option value="canada">Agriculture</option>
                            <option value="usa">Sports</option>
                        </select>
                    </div>
                    <div className="sub-cat-location">
                        <label htmlFor="lname">Location*</label>
                        <input className="create-event-input" type="text" id="lname" name="lastname" placeholder="Let attendees know where the event will be.." />
                    </div>
                    <div className="sub-cat-location">
                        <label htmlFor="lname">Price*</label>
                        <input className="create-event-input" type="text" id="lname" name="lastname" placeholder="Enter Price.." />
                    </div>
                </div>

                <div className="date-time">
                    <div className="date">
                        <label htmlFor="lname">Start Date*</label>
                        <input className="create-event-input" type="date"/>
                    </div>
                    <div className="date">
                        <label htmlFor="lname">End Date*</label>
                        <input className="create-event-input" type="date"/>
                    </div>
                    <div className="time">
                        <label htmlFor="lname">Start Time*</label>
                        <input className="create-event-input" type="time"/>
                    </div>
                    <div className="time">
                        <label htmlFor="lname">End Time*</label>
                        <input className="create-event-input" type="time"/>
                    </div>
                </div>

                <input type="submit" value="Create Event" className="create-event-btn" />
            </form>
        </div>
    )
}
