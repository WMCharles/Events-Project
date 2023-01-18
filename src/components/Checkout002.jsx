import React from 'react'
import '../css/Checkout002.css'

export default function Checkout002({ handleClose, event }) {
    return (
        <>
            <form>
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
                                    placeholder="Enter your phone number"
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
