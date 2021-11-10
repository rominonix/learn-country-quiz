import React, { useEffect } from "react";

import { Route } from "wouter";
import { customAlphabet } from "nanoid";
import "./App.css";
import StartPage from "./components/StartPage";
import ConsentCookies from "./components/CookieConsent";
import GamePage from "./components/GamePage";
import Setup from "./components/Setup";
import "./feature.js";
import { db } from "./init";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { ref, getDatabase, set, update } from "firebase/database";
import { useObject } from "react-firebase-hooks/database";

const nanoid = customAlphabet("1234567890abcdefghijklmnopqrstuvxyz", 5);

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

function App() {
  const { improvedHeader } = JSON.parse(localStorage.getItem("featureFlags"));
  return (
    <div className="app">
      <div className="header">
        {improvedHeader.value ? "COUNTRY FLAG QUIZZ" : "THE FLAG GAME"}
      </div>
      <div className="middle">
        <Route path="/">
      <ConsentCookies />
          <StartPage />
        </Route>
        <Route path="/game/:gameId/:playerId">
          {(params) => {
            return (
              <GamePage gameId={params.gameId} playerId={params.playerId} />
            );
          }}
        </Route>
        <Route path="/setup">
          <Setup />
        </Route>
      </div>
      <div className="footer"></div>
    </div>
  );
}
export default App;
