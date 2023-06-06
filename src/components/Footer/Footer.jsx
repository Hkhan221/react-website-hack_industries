import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faDiscord, faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import './Footer.scss'

function Footer(){
    return (
        <footer>
            <select className="footer-select">
                <option className="footer-option" value="">Select Language</option>
                <option className="footer-option" value="show">English</option>
                <option className="footer-option" value="pet">Spanish</option>
                <option className="footer-option" value="school">German</option>
            </select>
            <a id="contact" className="footer-links" href="#"><span>Contact Us</span></a>
            <div id="main">
                <h2 className="footer-header">Follow us:</h2>
                    <a href="##">
                        <FontAwesomeIcon icon={ faDiscord } className="footer-icons" />
                    </a>
                    <a href="###">
                        <FontAwesomeIcon icon={ faFacebook} className="footer-icons"/>
                    </a>
                    <a href="####">
                        <FontAwesomeIcon icon={ faInstagram} className="footer-icons"/>
                    </a>
                    <a href="######">
                        <FontAwesomeIcon icon={ faTwitter} className="footer-icons"/>
                    </a>
                    <a href="#######">
                        <FontAwesomeIcon icon={ faYoutube} className="footer-icons"/>
                    </a>
                <p className="footer-paragraph">@2022 HACK_INDUSTRIES, 3D, UK</p>
            </div>
            <div id="terms">
                <a className="footer-links" href="########">PRIVACY</a>
                    <span className="footer-line">|</span>
                <a className="footer-links" href="#########" >TERMS OF USE</a>
                    <span className="footer-line">|</span>
                <a className="footer-links" href="##########">CODE OF CONDUCT</a>
            </div>
        </footer>
    )
};


export default Footer;