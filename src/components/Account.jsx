import React from 'react'
import '../css/Billing.css'

export default function Account() {
    return (
        <div className="checkout">
            <h1>Account Information</h1>
            <hr />
            <div className="row">
                <div className="col-75">
                    <div className="checkout-container">
                        <form>
                            <div className="row">
                                {/* <!-- General Information --> */}
                                <div className="col-50">
                                    <h2>Contact Information</h2>
                                    <label htmlFor="fname">Full Name</label>
                                    <input type="text" className="input-text" id="fname" name="firstname" placeholder="John M. Doe" />
                                    <div className="email-address-row">
                                        <div className="email-50">
                                            <label htmlFor="email">Cell Phone</label>
                                            <input type="text" className="input-text" id="email" name="email" placeholder="+254 712345678" />
                                        </div>
                                        <div className="email-50">
                                            <label htmlFor="address"> Home Phone</label>
                                            <input type="text" className="input-text" id="address" name="address" placeholder="+254 712345678" />
                                        </div>
                                    </div>
                                </div>

                                {/* Card Information */}
                                <div className="col-50">
                                    <h2>Billing Information</h2>
                                    <label htmlFor="ccnum">Credit card number</label>
                                    <input type="text" className="input-text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
                                    <div className="email-address-row">
                                        <div className="email-50">
                                            <label htmlFor="expyear">Expiry</label>
                                            <input type="text" className="input-text" id="expyear" name="expyear" placeholder="12/24" />
                                        </div>
                                        <div className="email-50">
                                            <label htmlFor="cvv">CVV</label>
                                            <input type="text" className="input-text" id="cvv" name="cvv" placeholder="352" />
                                        </div>
                                    </div>
                                    <div className="email-address-row">
                                        <div className="email-50">
                                            <label htmlFor="expyear">City</label>
                                            <input type="text" className="input-text" id="expyear" name="city" placeholder="e.g Thika" />
                                        </div>
                                        <div className="email-50">
                                            <label htmlFor="cvv">County</label>
                                            <input type="text" className="input-text" id="cvv" name="county" placeholder="e.g Kiambu" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="btn-column-account">
                    <button className="btn" >Save</button>
                </div>
            </div>
        </div>
    )
}
