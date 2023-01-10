import React from 'react'
import '../css/Events.css'

export default function LikedEvents() {
    return (
        <div className="events-container">
            <div className="events">
                <div className="event">
                    <div className="image">
                        <img
                            src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F399230799%2F457305528494%2F1%2Foriginal.20221124-083510?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C1280%2C640&s=d551e10f9ca64edea8da0a16c80bfc97"
                            alt=""
                        />
                    </div>
                    <div className="details">
                        <h3>Tech Hackathon: Lorem ipsum dolor sit amet</h3>
                        <p>Date: Fri, Jan 7, 5:00PM</p>
                        <p>Location: Hilton</p>
                        <p>Price: 59995</p>
                    </div>
                </div>
                <div className="event">
                    <div className="image">
                        <img
                            src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F393879509%2F184713249715%2F1%2Foriginal.20221115-163041?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=11f64622212c851f2a8f6bb7d1f9523e"
                            alt=""
                        />
                    </div>
                    <div className="details">
                        <h3>The Last Supper</h3>
                        <p>Date: Fri, Jan 7, 5:00PM</p>
                        <p>Location: Hilton</p>
                        <p>Price: Free</p>
                    </div>
                </div>
                <div className="event">
                    <div className="image">
                        <img
                            src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F417744729%2F204719258295%2F1%2Foriginal.20230104-115202?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=1%2C34%2C738%2C369&s=d8743b1148edba4b1caa985b9503d639"
                            alt=""
                        />
                    </div>
                    <div className="details">
                        <h3>KE CLIMATE CHANGE SUMMIT 2023</h3>
                        <p>Date: Fri, Jan 7, 5:00PM</p>
                        <p>Location: Hilton</p>
                        <p>Price: 59995</p>
                    </div>
                </div>
                <div className="event">
                    <div className="image">
                        <img
                            src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F416903209%2F311613982936%2F1%2Foriginal.20230103-040932?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C680%2C340&s=f3a8a601ada980fcf20801fb437f358c"
                            alt=""
                        />
                    </div>
                    <div className="details">
                        <h3>
                            E-BANKING | FOREIGN EXCHANGE | CRYPTOS | GLOBAL INDICES | STOCKS
                        </h3>
                        <p>Date: Fri, Jan 7, 5:00PM</p>
                        <p>Location: Hilton</p>
                        <p>Price: 59995</p>
                    </div>
                </div>
            </div>
            <div className="load-more">
                <button>Load More Events</button>
            </div>
        </div>
    )
}