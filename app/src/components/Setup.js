import React, { useState } from "react";
import "../App.css";
import "../feature.js";
import { Link } from "wouter";

const Setup = () => {
  return (
    <div>
      <FeatureToggle text="Minus-Scoring" flagKey="minusScoring" />
      <FeatureToggle text="Tie-Screen" flagKey="tieScreen" />
      <FeatureToggle text="Improved-Flag" flagKey="improvedFlag" />
      <Link href="/" className="re-home link">
        Go to App
      </Link>
    </div>
  );
};
function FeatureToggle({ text, flagKey }) {
  const [featureFlags, setFeatureFlags] = useLocalStorage("featureFlags", {});
  console.log(featureFlags);
  const changeToggleOff = (flagKey) => {
    featureFlags[flagKey].value = false;

    setFeatureFlags(featureFlags);
    console.log("off", featureFlags);
  };
  const changeToggleOn = (flagKey) => {
    featureFlags[flagKey].value = true;

    setFeatureFlags(featureFlags);
    console.log("on", featureFlags);
  };
  return (
    <div>
      <p>{text}</p>
      <button onClick={() => changeToggleOn(flagKey)}>On</button>
      <button onClick={() => changeToggleOff(flagKey)}>Off</button>
    </div>
  );
}

function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };
  return [storedValue, setValue];
}
export default Setup;
