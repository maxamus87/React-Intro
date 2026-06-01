import {useState} from "react";

export default function MoodTracker() {
  const [mood, setMood] = useState("Happy")
  const [color, setColor] = useState("green")

  function cycleMood() {
    if (mood === "Happy") {
      setMood("Neutral")
      setColor("grey")
    } else if (mood === "Neutral") {
      setMood("Sad")
      setColor("blue")
    } else {
      setMood("Happy")
      setColor("green")
    }
  }

  return (
    <div>
      <h2>Mood Tracker</h2>
      <p>{mood}</p>
      <button onClick={cycleMood} style={{backgroundColor: color}}>Change Mood</button>
    </div>
  );
}
