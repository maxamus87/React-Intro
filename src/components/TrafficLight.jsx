import {useState} from "react";

export default function TrafficLight() {
  const [light, setLight] = useState("red");

  function nextLight() {
    if (color === "red") {
      setLight("yellow")
    } else if (color === "yellow") {
      setLight("green")
    } else {
      setLight("red");
    }
  }

  return (
    <div>
      <h2>TrafficLight</h2>
      <Light current={light} />
      <button onClick={nextLight}>Next</button>
    </div>
  );
}

function Light({ current }) {
  return (
    <div>
      <p>{current}</p>
    </div>
  );
}
