
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
            <button onClick={denyCookie}>Deny cookies</button>
            <button onClick={allowCookie}>Allow all cookies</button>
            <Link href="/cookie-list" className="re-home link">Read more</Link>
        </div>
    );
};

export default CookieConsent
