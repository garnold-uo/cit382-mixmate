import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const handleLogin = () => {
    console.log("Login button clicked!");
  };

  return (
    <div className="App">
      <div className="Logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <div className="Header">
        <h2>Welcome to</h2>
        <h1>MixMate</h1>
        <h3>Discover new music and create custom playlists in seconds</h3>
      </div>
      <br />
      <div className="Steps">
        <div className="Step1">
          <button>Login to Spotify</button> <br />
          <p>Step 1</p>
        </div>
        <div className="Step2">
          <button>Select Mood</button> <br />
          <p>Step 2</p>
        </div>
        <div className="Step3">
          <button>Generate Playlist</button> <br />
          <p>Step 3</p>
        </div>
        <div className="Step4">
          <button>Save and Listen</button> <br />
          <p>Step 4</p>
        </div>
      </div>
      <div className="Login">
        <button onClick={handleLogin}>Login to Start</button>
      </div>
    </div>
  );
}
