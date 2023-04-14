import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faDiscord, faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import './Footer.scss'
/* import { FiMenu } from "react-icons/fi"; */

function Footer(){
    return (
        <footer>
            <select>
                <option value="">Select Language</option>
                <option value="show">English</option>
                <option value="pet">Spanish</option>
                <option value="school">German</option>
            </select>
            <a id="contact" href="#"><span>Contact Us</span></a>
            <div id="main">
                <h2>Follow us:</h2>
                <div class="icons">
                    <a href="##">
                        <FontAwesomeIcon icon={ faDiscord } className="icons" />
                    </a>
                    <a href="###">
                        <FontAwesomeIcon icon={ faFacebook} className="icons"/>
                    </a>
                    <a href="####">
                        <FontAwesomeIcon icon={ faInstagram} className="icons"/>
                    </a>
                    <a href="######">
                        <FontAwesomeIcon icon={ faTwitter} className="icons"/>
                    </a>
                    <a href="#######">
                        <FontAwesomeIcon icon={ faYoutube} className="icons"/>
                    </a>
                </div>
                <p>@2022 HACK_INDUSTRIES, 3D, UK</p>
            </div>
            <div id="terms">
            <a href="########">PRIVACY</a>
            <span>|</span>
            <a href="#########" >TERMS OF USE</a>
            <span>|</span>
            <a href="##########">CODE OF CONDUCT</a>
            </div>
        </footer>
    )
};


export default Footer;