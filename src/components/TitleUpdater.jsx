import {useState, useEffect} from "react";

export default function TitleUpdater() {
  const [title, setTitle] = useState("")

  useEffect(() => {
    document.title = title
  }, [title])

  return (
    <div>
      <h1 style={{color: "red"}}>Title Updater</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Type something..."
      />
      <p style={{color: title === "bear with me" ? "green" : "white"}}>{title}</p>
    </div>
  );
}
