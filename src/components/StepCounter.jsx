import {useState} from "react";

export default function StepCounter() {
  const [steps, setSteps] = useState(0);

  function addStep() {
    setSteps(steps + 1)
  }

  function resetSteps() {
    setSteps(0);
  }

  return (
    <div>
      <h2>Step Counter</h2>
      <p>Steps: {steps}</p>
      <button onClick={addStep}>Add Step</button>
      <button onClick={resetSteps}>Reset</button>
      {steps >= 10 && <p>"Goal Reached!"</p>}
    </div>
  );
}
