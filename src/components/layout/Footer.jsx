import React from "react";
import home from "../images/home.svg";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import twitter from "../images/twitter.svg";
import whatsaap from "../images/whatsaap.svg";

export const Footer = () => {
  return (

    <div className="background-footer">
      <footer>
        <div className="columns">
          <div className="content-columns">
            <div className="header-column">
            <img src={home} className="image-home" />
            </div>
            <div className="column-body">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page whenters.
            </p>
            <div className="social-media">
              <img src={twitter}  />
              <img src={facebook} />
              <img src={instagram}  />
            </div>
          </div>
          </div>
  
          <div className="content-columns">
          <div className="header-column">
            <h1>About us</h1>
            </div>
            <div className="column-body">
            <ul>
              <li>About</li>
              <li>Privacy & Policy</li>
              <li>Terms & Conditions</li>
              <li>Faq</li>
            </ul>
       
          </div>
          </div>
    
          <div className="content-columns">
          <div className="header-column">
            <h1>Navigate</h1>
            </div>
            <div className="column-body">
            <ul>
              <li>How we work</li>
              <li>Services</li>
              <li>Faq</li>
              <li>Contact</li>
              <li>Free Quote</li>
            </ul>

          </div>
          </div>
       
          <div className="content-columns">
          <div className="header-column">
            <h1>Contact us</h1>
            </div>
            <div className="column-body">
            <ul>
              <li>Ricardo Margain 444</li>
              <li>Call: +52 81 1234 5678</li>
              <li>Email: info@challenge.com</li>
            </ul>
            <div>
            <img src={whatsaap} className="whatsaap" />
            </div>
            
          </div>
          </div>
   
        </div>
      </footer>
    </div>
  );
};
