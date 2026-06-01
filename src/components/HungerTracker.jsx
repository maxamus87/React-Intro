import {useState, useEffect} from "react";

export default function HungerTracker() {
  const [hungerLevel, setHungerLevel] = useState("neutral")

  useEffect(() => {
    console.log("Hunger level changed to: " + hungerLevel);
  }, [hungerLevel]);

  const handleHunger = (hunger) => {
    if (hunger === "hungry") {
      setHungerLevel("hungry")
    } else if (hunger === "full") {
      setHungerLevel("full")
    } else {
      setHungerLevel("neutral")
    }
  };

  return (
    <div>
      <h2>Hunger Tracker</h2>
      <button onClick={() => handleHunger("hungry")}>Hungry</button>
      <button onClick={() => handleHunger("full")}>Full</button>
      <button onClick={() => handleHunger("neutral")}>Neutral</button>
      <h2>Hunger Level: {hungerLevel}</h2>
    </div>
  )
}
