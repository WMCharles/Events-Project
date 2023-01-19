import React, { useState } from 'react'
import '../css/Checkout002.css'

export default function Checkout002({ handleClose, event, user }) {

    const [formData, setFormData] = useState({
        phoneNumber: "",
        amount: `${event.price}`
    })

    // handling input change 
    function handleInputChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    function reserve() {
        fetch('https://event-plug.onrender.com/reservations', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                user_id: user.id,
                event_id: event.id
            })
        })
            .then((response) => response.json())
    }



    function handlePay(e) {
        e.preventDefault();
        console.log(formData)
        fetch('https://2c97-41-212-11-139.eu.ngrok.io/stkpush', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        }).then((res) => {
            if (res.ok) {
                alert('Successfully Bought Tickets.');
                reserve();
            } else {
                alert('Something went wrong')
            }
        })
    }

    return (
        <>
            <form onSubmit={handlePay}>
                <div className="popup-box">
                    <div className="box">
                        <span className="close-icon" onClick={handleClose}>
                            x
                        </span>
                        <div className="payment-box">
                            <h3>You are one step to attending this event</h3>
                            <div className="payment-details">
                                <div className="ticket-details">
                                    <label className="form-label">Ticket Amount</label>
                                    <p>Price: Sh.{event.price}</p>
                                </div>
                                <label className="form-label">Phone Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="e.g 25471234567"
                                    name='phoneNumber' onChange={handleInputChange} value={formData.phoneNumber}
                                />
                                <div className="form-text">
                                    We'll never share your phone number with anyone else.
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Make Payment
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
