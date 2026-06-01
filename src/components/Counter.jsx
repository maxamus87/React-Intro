import {useState, useEffect} from "react";

export default function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("count changed to:", count)
  }, [count])

  return (
    <div>
      <h1></h1>
    </div>
  )
}
