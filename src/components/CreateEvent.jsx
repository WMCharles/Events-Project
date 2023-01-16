import React, { useState } from 'react';
import '../css/CreateEvent.css';

const EventForm = () => {
  const [eventTitle, setEventTitle] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [pricing, setPricing] = useState('');
  const [eventCategory, setEventCategory] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const [formData, setFormData] = useState({});


  const handleSubmit = (e) => {
    e.preventDefault();
    // API
    fetch("https://event-plug.onrender.com/events", {
      method: 'POST',
      headers:{
      'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({
        eventTitle: formData.eventTitle,
        eventDescription: formData.eventDescription,
        eventLocation: formData.eventLocation,
        pricing: formData.pricing,
        eventCategory: formData.eventCategory,
        startDate: formData.startDate,
        endDate: formData.endDate,
        startTime: formData.startTime,
        endTime: formData.endTime
      })})
    .then((response) => response.json())
    .then((newEvent) => console.log(newEvent));

    alert(`Event created`);
  };

  return (
    <div className='create-event'>
      <form onSubmit={console.log("clicked")}>
        <h2>Event information</h2>
        <div>
          <label htmlFor="eventTitle">Event Title*</label>
          <input
            type="text"
            id="eventTitle"
            placeholder='Should be precise and descriptive'
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="eventDescription">Event Description*</label>
          <textarea placeholder='Write a brief description of the event' cols="25" rows="5"
            id="eventDescription"
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="eventLocation">Event Location</label>
          <input
            type="text"
            id="eventLocation"
            placeholder='Let attendees know where the event will be'
            value={eventLocation}
            onChange={(e) => setEventLocation(e.target.value)}
          />
        </div>
        <div>
          <label>
            Pricing
            <input type="text" value={pricing} onChange={e => setPricing(e.target.value)} />
          </label>
        </div>

        <div>
          <label htmlFor="eventCategory">Category</label>
          <br></br>
          <select name="dropdown">
            <option value="" selected >select</option>
            <option value="">Tech Hackton</option>
            <option value="">End year DevOps</option>
            <option value="">Tech summit</option>

            value={eventCategory}
            onChange={(e) => setEventCategory(e.target.value)}
          </select>
        </div>
        <div className='container'>
          <div className='time'>
            <label htmlFor="eventDate">Start Date</label>
            <input
              className='time2'
              type="date"
              id="eventDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className='time'>
            <label htmlFor="eventDate">End Date</label>
            <input
              className='time2'
              type="date"
              id="eventDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>


          <div className='time'>
            <label htmlFor="startTime">Start Time</label>
            <input
              className='time2'
              type="time"
              id="startTime"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </div>
          <div className='time'>
            <label htmlFor="eventTime">End Time</label>
            <input
              className='time2'
              type="time"
              id="eventTime"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </div>
        </div>
        <div className='btn'>
          <button type="submit">Create Event</button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;