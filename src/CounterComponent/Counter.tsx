import { useState } from "react";

function Counter() {
  const [counterStatus, setcounterStatus] = useState(false);
  const [counter, setCounter] = useState(0);
  const [id, setId] = useState(0);

  const handleStart = () => {
    setcounterStatus(true);

    setId( window.setInterval(() => setCounter((counter) => counter + 1), 1000));
  };
  const handlePause = () => {
    clearInterval(id);
    setcounterStatus(false);

    console.log(counter);
  };

  const handleReset = () => {
    setCounter(0);
    clearInterval(id);
  };
  return (
    <div className="">
      <h1>Counter</h1>

      <div className="m2">{counter}</div>
      <div className="m2">
        {counterStatus === false ? (
          <button className="m2 p2" onClick={handleStart}>
            Start
          </button>
        ) : (
          <button className="m2 p2" onClick={handlePause}>
            Pause
          </button>
        )}
        <button className="m2 p2" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
