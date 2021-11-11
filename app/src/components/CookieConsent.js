
import React from "react";
import "../App.css";
import { Link} from "wouter";


const CookieConsent = () => {
    const allowCookie=()=>{
        localStorage.setItem("allowCookie",JSON.stringify(true));
        location.reload()
    }
    const denyCookie=()=>{
        localStorage.setItem("allowCookie",JSON.stringify(false))
        location.reload()
    }


    return (
        <div className="cookie">
            <p>About cookies on this site
            We use cookies to collect and analyse information on site performance and usage, to provide social media features and to enhance and customise content and advertisements.</p>
            <button onClick={denyCookie} className='red-btn'>Deny cookies</button>
            <button onClick={allowCookie} className='blue-btn'>Allow all cookies</button>
            <br/>
            <Link href="/cookie-list" className="re-home link">Read more</Link>
        </div>
    );
};

export default CookieConsent
