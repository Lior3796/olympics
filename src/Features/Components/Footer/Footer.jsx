import React from 'react';
import './Footer.css';
import UnorderList from '../UnorderList/UnorderList';
import NavBar from '../NavBar/NavBar';
import { whileStatement } from '@babel/types';
function Footer() {
    const footerDataObject = {
        main:{
            headline:"Olympic channel",
            data:["Olympic games","Tokyo 2020","Results & Medals","Replays & Highlights","All Olympic Games"]
        }
    }
    return (
        <div className="Footer-container">
            <div className="Footer-links">
                <img className="logo" src="https://olympics.com/en/images/static/logo-b2p-white-v2.svg" alt="" />
               <UnorderList details={footerDataObject.main} />
               <UnorderList details={footerDataObject.main} />
               <UnorderList details={footerDataObject.main} />
               <UnorderList details={footerDataObject.main} />
            </div>
           
            <div className="olympic-info">
                <ul >
                    <li>International Olympic Committee</li>
                    <li>Museum</li>
                    <li>About Us</li>
                    <li>Sitemap</li>
                    <li>Contact Centre</li>
                </ul>
            </div>
            <div className="social-links">
            <div className="olympic-info">
                <ul>
                    <li>Cookie Policy</li>
                    <li>Cookie Settings</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                </ul>
            </div>
            <div>     
            <a href=""><i class="fab fa-facebook"></i></a> 
            <a href=""><i class="fab fa-facebook-f"></i></a>
            <a href=""><i class="fab fa-instagram"></i></a>
            <a href=""><i class="fab fa-youtube"></i></a>
            <a href=""><i class="fab fa-twitter"></i></a>
            </div>
            </div>

        </div>
    );
}

export default Footer;