import {useState, useEffect} from "react";

export default function CharacterTracker() {
  const [text, setText] = useState("")
  const [message, setMessage] = useState("You have 50 characters left")
  const limit = 50

  useEffect(() => {
    const remaining = limit - text.length
    if (text.length < 40 && text.length < 50) {
      setMessage("You have " + remaining + " characters left.")
    } else if (text.length >= 40 && text.length < 50) {
      setMessage("Getting close!")
    } else {
      setMessage("Character limit reached!")
    }
  }, [text]);

  return (
    <div>
      <h1 style={{color: "red"}}>Character Tracker</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength={50}
        placeholder="Say something..."
      />
      <p>Character count: {text.length}</p>
      <p>{message}</p>
    </div>
  );
}
