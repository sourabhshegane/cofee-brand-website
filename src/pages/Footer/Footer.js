import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="col-one">
                <h1 className="footer-about-us">
                    About Us
                </h1>

                <h1 className="footer-about-us-content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <br/> eiusmod tempor incididunt ut labore dolore magna aliqua.
                </h1>

                <h1 className="footer-made-by-text">
                    Made with ❤️ by Sourabh Shegane
                </h1>
            </div>

            <div className="col-two">
                <h1 className="news-letter-title">
                    Newsletter
                </h1>
                <h1 className="stay-updated-title">
                    Stay updated with our latest
                </h1>
                <div className="news-letter-container">
                    <input type="email" placeholder="Enter your email" className="news-letter-email"/>
                    <button className="get-email">Go</button>
                </div>
            </div>
        </div>
    )
}
