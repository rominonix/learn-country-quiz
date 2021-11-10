import React from "react";
import "../App.css";
import { Link} from "wouter";

const CookieList = () => {
   

    return (
        <div className="cookie">
            <h2>Preference cookies</h2>
            <p>Preference cookies enables the web site to remember information to customize how the web site looks or behaves for each user. This may include storing selected currency, region, language or color theme.</p>
            <h2>Analytical cookies</h2>
            <p>Analytical cookies are not necessary but are used to collect valuable information on how a web site is being used, identify issues and figure out what needs to be improved on the site and what content is useful. The information collected is in most cases anonymous, but some analytics services collect information that can be used to identify the user.</p>
            <Link href="/" className="re-home link">home</Link>
        </div>
    );
};

export default CookieList