import React, { useState } from 'react'
import '../css/Checkout002.css'

export default function Checkout002({ handleClose, event }) {

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



    function handlePay(e) {
        e.preventDefault();
        fetch('https://e32e-41-212-11-139.eu.ngrok.io/stkpush', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                phoneNumber: '254795289737',
                amount: "10000"
            })

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
