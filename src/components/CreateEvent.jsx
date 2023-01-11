import React, { useState } from 'react';
import './Event.css';

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


  const handleSubmit = (e) => {
    e.preventDefault();
    // API

    alert(`Event created`);
  };

  return (
    <form onSubmit={handleSubmit}>
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
        <div className='date1'>
          <label htmlFor="eventDate">Start Date</label>
          <input
            type="date"
            id="eventDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className='date2'>
          <label htmlFor="eventDate">End Date</label>
          <input
            type="date"
            id="eventDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
     
      
        <div className='time1'>
          <label htmlFor="startTime">Start Time</label>
          <input
            type="time"
            id="startTime"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>
        <div className='time2'>
          <label htmlFor="eventTime">End Time</label>
          <input
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
  );
};

export default EventForm;