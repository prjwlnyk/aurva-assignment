import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="p-3 bg-amber-400">
          <p className="text-base text-white">Food explorer Application</p>
        </div>
      </header>
    </div>
  );
}

export default App;
