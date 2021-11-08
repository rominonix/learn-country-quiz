import React from "react";
import { customAlphabet } from "nanoid";
import "../App.css";
import "../feature.js";



const nanoid = customAlphabet("1234567890abcdefghijklmnopqrstuvxyz", 5);



const QuickResults = ({ you, opponent }) => {
    return (
      <div className="quick-results">
        YOU {you} - {opponent} OPPONENT
      </div>
    );
  };

export default QuickResults