import React from 'react'
import '../css/Footer.css'

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-details">
                <div>
                    <h2>Contacts</h2>
                    <p><span><i className="fa-regular fa-envelope"></i> </span> events.plug@gmail.com</p>
                    <p><span><i className="fa-brands fa-linkedin"></i> </span> linkedin.com/eventsplug/</p>
                    <p><span><i className="fa-brands fa-twitter"></i> </span> @eventsplug</p>
                    <p><span><i className="fa-brands fa-facebook"></i> </span> events.plug</p>
                </div>
                <div>
                    <h2>Features</h2>
                    <p>Company</p>
                    <p>Blog</p>
                    <p>Become an Event Holder</p>
                </div>
            </div>
            <div className="copyright">
                <p><span><i className="fa-regular fa-copyright"></i>  </span>2023 Event Plugs</p>
            </div>
        </div>
    )
}
