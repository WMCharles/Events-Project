import React from 'react'
import '../css/Billing.css'

export default function BillingPage() {
    return (
        <div className="checkout">
            <h1>Checkout Page</h1>
            <hr />
                <div className="row">
                    <div className="col-75">
                        <div className="checkout-container">
                            <form>
                                <div className="row">
                                    {/* <!-- General Information --> */}
                                    <div className="col-50">
                                        <h2>Billing Address</h2>
                                        <label htmlFor="fname"><i class="fa-solid fa-user"></i> Full Name</label>
                                        <input type="text" className="input-text" id="fname" name="firstname" placeholder="John M. Doe" />
                                        <div className="email-address-row">
                                            <div className="email-50">
                                                <label htmlFor="email"><i class="fa-solid fa-envelope"></i> Email</label>
                                                <input type="text" className="input-text" id="email" name="email" placeholder="john@example.com" />
                                            </div>
                                            <div className="email-50">
                                                <label htmlFor="address"><i class="fa-regular fa-address-card"></i> Address</label>
                                                <input type="text" className="input-text" id="address" name="address" placeholder="542 W. 15th Street" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card Information */}
                                    <div className="col-50">
                                        <h2>Card Information</h2>
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
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-25">
                        <div className="checkout-container">
                            <h2>
                                Order Summary
                                <span className="price" style={{color: "black"}}><i class="fa-solid fa-cart-shopping"></i> <b>1</b></span>
                            </h2>
                            <p>General X 1 <span className="price">$15</span></p>
                            <p>Admission Fees <span className="price">$5</span></p>
                            <hr />
                            <p>
                                Total <span className="price" style={{color: "black"}}><b>$20</b></span>
                            </p>
                        </div>
                    </div>
                    <div className="btn-column">
                        <button className="btn" >Place Order</button>
                    </div>
                </div>
        </div>
    )
}
