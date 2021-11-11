import React from "react";
import "../App.css";
import { Link} from "wouter";

const CookieList = () => {
   

    return (
        <div className="cookie">
            <h2> Cookies being in used</h2>
            <p> We are using Google Analytics for analysing user behaviour.</p>
            <h2> Sub processor list</h2>
            <p> Google Analytics - web analytics service</p>
            <Link href="/" className="re-home link">home</Link>
        </div>
    );
};

export default CookieList