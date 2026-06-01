import {useState, useEffect} from "react";

export default function NameBadge() {
  const [name, setName] = useState("")
  const [jobTitle, setJobTitle] = useState("")

  useEffect(() => {
    document.title = name
  }, [name])

  return (
    <div>
      <h1 style={{color: "red"}}>Name Badge</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name..."
      />
      <input
        type="text"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
        placeholder="Enter your Job Title..."
      />
      <div>
        <h2>Name Badge</h2>
        <p>Name: {name}</p>
        <p>Job Title: {jobTitle}</p>
      </div>
    </div>
  );
}
