import React, { useEffect, useState } from 'react'
import '../css/Billing.css'

export default function Account({ user }) {

    console.log(user)

    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
        phone_number: user.phone_number,
        billing_address: user.billing_address,
        card_number: user.card_number,
        cvv: user.cvv,
        city: user.city,
        expiry_date: user.expiry_date
    })

    // handling input change 
    function handleInputChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    // fetching data while editing
    useEffect(() => {
        if (user.id) {
            fetch(`https://event-plug.onrender.com/users/${user.id}`)
                .then(resp => resp.json())
                .then((item) => {
                    setFormData(item);
                })
        }
    }, [user.id]);

    function handleFormSubmit(e) {
        e.preventDefault()
        fetch(`https://event-plug.onrender.com/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then((res) => {
                if (res.ok) {
                    alert('Account Successfully Updated');

                } else {
                    alert('Something went wrong')
                }
            })
    }


    return (
        <div className="checkout">
            <h1>Account Information</h1>
            <hr />
            <div className="row">
                <div className="col-75">
                    <div className="checkout-container">
                        <form onSubmit={handleFormSubmit}>
                            <div className="row">
                                {/* <!-- General Information --> */}
                                <div className="col-50">
                                    <h2>Contact Information</h2>
                                    <label htmlFor="fname">Full Name</label>
                                    <input type="text" className="input-text" id="fname" name='name' onChange={handleInputChange} value={formData.name} placeholder="John M. Doe" />
                                    <div className="email-address-row">
                                        <div className="email-50">
                                            <label htmlFor="email">Phone Number</label>
                                            <input type="text" className="input-text" id="email" name='phone_number' onChange={handleInputChange} value={formData.phone_number} placeholder="+254 712345678" />
                                        </div>
                                        <div className="email-50">
                                            <label htmlFor="address"> Email</label>
                                            <input type="text" className="input-text" id="address" name='email' onChange={handleInputChange} value={formData.email} placeholder="+254 712345678" />
                                        </div>
                                    </div>
                                </div>

                                {/* Card Information */}
                                <div className="col-50">
                                    <h2>Billing Information</h2>
                                    <label htmlFor="ccnum">Credit card number</label>
                                    <input type="text" className="input-text" id="ccnum" name='card_number' onChange={handleInputChange} value={formData.card_number} placeholder="1111-2222-3333-4444" />
                                    <div className="email-address-row">
                                        <div className="email-50">
                                            <label htmlFor="expyear">Expiry</label>
                                            <input type="text" className="input-text" id="expyear" name='expiry_date' onChange={handleInputChange} value={formData.expiry_date} placeholder="12/24" />
                                        </div>
                                        <div className="email-50">
                                            <label htmlFor="cvv">CVV</label>
                                            <input type="text" className="input-text" id="cvv" name='cvv' onChange={handleInputChange} value={formData.cvv} placeholder="352" />
                                        </div>
                                    </div>
                                    <div className="email-address-row">
                                        <div className="email-50">
                                            <label htmlFor="expyear">City</label>
                                            <input type="text" className="input-text" id="expyear" name='city' onChange={handleInputChange} value={formData.city} placeholder="e.g Thika" />
                                        </div>
                                        <div className="email-50">
                                            <label htmlFor="cvv">Address</label>
                                            <input type="text" className="input-text" id="cvv" name='billing_address' onChange={handleInputChange} value={formData.billing_address} placeholder="e.g Kiambu" />
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className='btn'>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
