import React from "react";
import { customAlphabet } from "nanoid";
import "../App.css";
import "../feature.js";



const nanoid = customAlphabet("1234567890abcdefghijklmnopqrstuvxyz", 5);



const Setup = () => {
    console.log("this is setup");
    return (
      <div >
         <h1>setup</h1>
      </div>
    );
  };

export default Setup