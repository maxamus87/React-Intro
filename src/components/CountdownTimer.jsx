import {useState, useEffect} from "react";

export default function CountdownTimer() {
  const [count, setCount] = useState(10)

  useEffect(() => {
    if (count === 0) return

    const interval = setInterval(() => {
      setCount(count - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [count])

  return (
    <div>
      <h1 style={{color: "red"}}>Countdown Timer</h1>
      <p>{count}</p>
      {count === 0 && <p>Time's up!</p>}
      <button className="btn btn-dark btn-lg mt-4">Hello</button>
    </div>
  );
}
