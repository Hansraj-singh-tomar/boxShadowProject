import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [Hori, setHori] = useState(10);
  const [Vert, setVert] = useState(10);
  const [Blur, setBlur] = useState(10);
  const [Color, setColor] = useState("black");
  const [CheckON, setCheckOn] = useState(false);

  return (
    <div className="App">
      <div className="controls">
        <input
          type="range"
          min="0"
          max="100"
          value={Hori}
          onChange={(event) => setHori(event.target.value)}
        />
        <label>Horizontal length</label>
        <input
          type="range"
          min="0"
          max="100"
          value={Vert}
          onChange={(event) => setVert(event.target.value)}
        />
        <label>Vertical length</label>
        <input
          type="range"
          min="0"
          max="100"
          value={Blur}
          onChange={(e) => setBlur(e.target.value)}
        />
        <label>Blur</label>
        <input
          type="color"
          value={Color}
          onChange={(e) => setColor(e.target.value)}
        />
        <label>color</label>
        <div className="switch">
          <label>
            Outline
            <input
              type="checkbox"
              checked={CheckON}
              onChange={() => setCheckOn(!CheckON)}
            />
            <span className="lever"></span>
            Inset
          </label>
        </div>
      </div>
      <div className="output">
        <div
          className="box"
          style={{
            boxShadow: `${
              CheckON ? "inset" : ""
            } ${Hori}px ${Vert}px ${Blur}px ${Color}`
          }}
        >
          <p>
            box-shadow: {Hori}px {Vert}px {Blur}px {Color}
          </p>
        </div>
      </div>
    </div>
  );
}
