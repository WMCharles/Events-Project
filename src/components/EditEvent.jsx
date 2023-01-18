import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';

export default function EditEvent() {

    const navigate = useNavigate()
    // Form inputs
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        address: "0",
        description: "",
        category: "",
        location: "",
        pricing: "",
        start_date: "",
        end_date: "",
        start_time: "",
        end_time: ""
    })

    // handling input change 
    function handleInputChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    const params = useParams()
    // eslint-disable-next-line no-unused-vars
    const [id, setId] = useState(params.id)

    // fetching data while editing
    useEffect(() => {
        if (id) {
            fetch(`https://event-plug.onrender.com/events/${id}`)
                .then(resp => resp.json())
                .then((item) => {
                    setFormData(item);
                })
        }
    }, [id]);

    function handleFormSubmit(e) {
        e.preventDefault()
        // console.log(formData)
        fetch(`https://event-plug.onrender.com/events/${id}`, {

            method: id ? "PATCH" : "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then((res) => {
                if (res.ok) {
                    alert('Event Successfully updated');
                    navigate(`/events/${id}`)
                } else {
                    alert('Something went wrong')
                }
            })
    }


    return (
        <div className="event-container">
            <h1>Event Information</h1>
            <hr />
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="fname">Event Title*</label>
                <input name='name' onChange={handleInputChange} value={formData.name} className="create-event-input" type="text" id="fname" placeholder="Make it precise as possible" />

                <label htmlFor="fname">Image Url*</label>
                <input className="create-event-input" type="text" id="image" name="image" onChange={handleInputChange} value={formData.image} placeholder="enter image url" />

                <label htmlFor="subject">Event Description*</label>
                <textarea name="description" onChange={handleInputChange} value={formData.description} className="create-event-textarea" id="subject" placeholder="Write a brief description of the event.." style={{ height: "200px" }}></textarea>

                <div className="cat-location">
                    <div className="sub-cat-location">
                        <label htmlFor="category">Category*</label>
                        <select name="category" onChange={handleInputChange} value={formData.category} className="create-event-select" id="category">
                            <option value="IT and Technology">Tech</option>
                            <option value="Food and Drinks">Food & Drinks</option>
                            <option value="Hiking and Adventure">Hiking & Adventure</option>
                            <option value="Music and Concert">Music</option>
                            <option value="Sports and Entertainment">Sports & Entertainment</option>
                            <option value="GEneral events">General</option>
                        </select>
                    </div>
                    <div className="sub-cat-location">
                        <label htmlFor="location">Location*</label>
                        <input name="location" onChange={handleInputChange} value={formData.location} className="create-event-input" type="text" id="location" placeholder="Let attendees know where the event will be.." />
                    </div>
                    <div className="sub-cat-location">
                        <label htmlFor="price">Price*</label>
                        <input name="price" onChange={handleInputChange} value={formData.price} className="create-event-input" type="text" id="price" placeholder="Enter Price.." />
                    </div>
                </div>

                <div className="date-time">
                    <div className="date">
                        <label htmlFor="start_date">Start Date*</label>
                        <input name="start_date" onChange={handleInputChange} value={formData.start_date} className="create-event-input" type="date" />
                    </div>
                    <div className="date">
                        <label htmlFor="end_date">End Date*</label>
                        <input name="end_date" onChange={handleInputChange} value={formData.end_date} className="create-event-input" type="date" />
                    </div>
                    <div className="time">
                        <label htmlFor="start_time">Start Time*</label>
                        <input name="start_time" onChange={handleInputChange} value={formData.start_time} className="create-event-input" type="time" />
                    </div>
                    <div className="time">
                        <label htmlFor="end_time">End Time*</label>
                        <input name="end_time" onChange={handleInputChange} value={formData.end_time} className="create-event-input" type="time" />
                    </div>
                </div>
                <input type="submit" value="Edit Event" className="create-event-btn" />
            </form>
        </div>
    )
}
