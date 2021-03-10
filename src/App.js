import React, { useState } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [ToggleOn, setToggleOn] = useState(true);
  const [input, setInput] = useState("");

  let inputStyle = {
    border: "4px solid black"
  };

  if (input.length > 4) {
    inputStyle.border = '6px solid red';
  }
  if (ToggleOn) {
    return (
      <div className="container">
        <button
          className="btn btn-success"
          onClick={() => setToggleOn(!ToggleOn)}
        >
          {ToggleOn ? "ON" : "OFF"}
        </button>
        <h1 className="text text-primary">We have Light</h1>
        <div>
          <h3 className="text-warning">Don't type too much</h3>
          <input
            placeholder="Tell us your about you...."
            type="text"
            style={inputStyle}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <button
          className="btn btn-danger"
          onClick={() => setToggleOn(!ToggleOn)}
        >
          {ToggleOn ? "ON" : "OFF"}
        </button>
        <h1 className="text text-secondary">We dont have Light</h1>
      </div>
    );
  }
}
