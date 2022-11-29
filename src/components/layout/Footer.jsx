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
          <div >
            <img src={home} className="image-home" />
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page whenters.
            </p>
            <div >
              <img src={twitter} className="image-home" />
              <img src={facebook} className="image-home" />
              <img src={instagram} className="image-home" />
            </div>
          </div>
          </div>
  
          <div className="content-columns">
            <h1>About us</h1>
            <ul>
              <li>About</li>
              <li>Privacy & Policy</li>
              <li>Terms & Conditions</li>
              <li>Faq</li>
            </ul>
       
          </div>
    
          <div className="content-columns">
            <h1>About us</h1>
            <ul>
              <li>About</li>
              <li>Privacy & Policy</li>
              <li>Terms & Conditions</li>
              <li>Faq</li>
            </ul>

          </div>
       
          <div className="content-columns">
            <h1>Contact us</h1>
            <ul>
              <li>Ricardo Margain 444</li>
              <li>Call: +52 81 1234 5678</li>
              <li>Terms & Conditions</li>
              <li>Faq</li>
            </ul>
            <div>
            <img src={whatsaap} className="whatsaap" />
            </div>
            
          </div>
   
        </div>
      </footer>
    </div>
  );
};
