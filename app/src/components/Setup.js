import React, { useState } from 'react';
import { customAlphabet } from "nanoid";
import "../App.css";
import "../feature.js";







const Setup = () => {
  const [toggle, setToggle] = useState(true);
  const triggerToggle = () => {
    setToggle( !toggle )
}
const changeToggle = () => {
  setToggle( !toggle )
}
  return(
    <div onChange={triggerToggle} className={`wrg-toggle ${toggle ? 'wrg-toggle--checked' : ''}`}>
          <div className="wrg-toggle-container">
              <div onClick ={changeToggle} className="wrg-toggle-check">
                  <span>🌜</span>
              </div>
              <div onClick ={changeToggle} className="wrg-toggle-uncheck">
                  <span>🌞</span>
              </div>
          </div>
          <div className="wrg-toggle-circle"></div>
          <input className="wrg-toggle-input" type="checkbox" aria-label="Toggle Button" />
      </div>
  )
}

export default Setup;