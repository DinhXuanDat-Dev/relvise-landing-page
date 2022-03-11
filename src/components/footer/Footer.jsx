import "./Footer.scss"
import {tel, location, send, facebook, twitter, instagram, youtube } from "./import"

const Footer = () => {
    return (
        <>
            <div className="relvise__footer-contact">
                <div className="relvise__footer-contact_title">
                    <h1>Consulting Agency For Your Business</h1>
                    <p> the quick fox jumped over the lazy dog</p>
                </div>
                <button type="button" className="relvise__footer-contact_btn">
                    Contact Us
                </button>
            </div>
            <div className="relvise__footer">
                <div className="relvise__footer-container">
                    <div className="relvise__footer--col">
                        <h5>Company Info</h5>
                        <ul>
                            <li><a href="#home">About Us</a></li>
                            <li><a href="#home">Carier</a></li>
                            <li><a href="#home">We are hiring</a></li>
                            <li><a href="#home">Blog</a></li>
                        </ul>   
                    </div>
                    <div className="relvise__footer--col">
                        <h5>Company Info</h5>
                        <ul>
                            <li><a href="#product">About Us</a></li>
                            <li><a href="#product">Carier</a></li>
                            <li><a href="#product">We are hiring</a></li>
                            <li><a href="#product">Blog</a></li>
                        </ul>   
                    </div>
                    <div className="relvise__footer--col">
                        <h5>Company Info</h5>
                        <ul>
                            <li><a href="#pricing">Business Marketing</a></li>
                            <li><a href="#pricing">User Analytic</a></li>
                            <li><a href="#pricing">Live Chat</a></li>
                            <li><a href="#pricing">Unlimited Support</a></li>
                        </ul>   
                    </div>
                    <div className="relvise__footer--col">
                        <h5>Company Info</h5>
                        <ul>
                            <li><a href="#contact">IOS & Android</a></li>
                            <li><a href="#contact">Watch a Demo</a></li>
                            <li><a href="#contact">Customer</a></li>
                            <li><a href="#contact">API</a></li>
                        </ul>   
                    </div>
                    <div className="relvise__footer--col2">
                        <h5>Get In Touch</h5>
                        <ul>
                            <li>
                                <img src={tel} alt="icon-footer"></img>
                                <a href="#contact">(480) 555-0103</a>
                            </li>
                            <li>
                                <img src={location} alt="icon-footer"></img>
                                <a href="#contact">4517 Washington Ave.</a>
                            </li>
                            <li>
                                <img src={send} alt="icon-footer"></img>
                                <a href="#contact">debra.holt@expample.com</a>
                            </li>
                        </ul>   
                    </div>
                </div>
            </div>
            <div className="relvise__footer-copyright">
                <div className="relvise__footer-copyright_title">
                    <h3>Made With Love By Dat Dinh Xuan <br/> © 2022 All rights reserved</h3>
                </div>
                <div className="relvise__footer-socials">
                    <img src={facebook} alt="footer-icon"></img>
                    <img src={instagram} alt="footer-icon"></img>
                    <img src={twitter} alt="footer-icon"></img>
                    <img src={youtube} alt="footer-icon"></img>
                </div>
            </div>
        </>
    )
}

export default Footer