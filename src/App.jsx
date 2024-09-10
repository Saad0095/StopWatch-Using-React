import { useEffect, useState } from "react";
import StopWatch from "./components/StopWatch";
import ControlButtons from "./components/ControlButtons";

function App() {
  const [start, setStart] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [stopwatch, setStopwatch] = useState(null);

  const handleStart = () => {
    setStart(true);
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
    setStopwatch(interval);
  };

  const handleStop = () => {
    setStart(false);
    clearInterval(stopwatch);
    setStopwatch(null);
  };

  const handleReset = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  useEffect(() => {
    if (seconds == 60) {
      setSeconds(0);
      setMinutes((prevMinutes) => prevMinutes + 1);
    } else if (minutes == 60) {
      setMinutes(0);
      setHours((prevHours) => prevHours + 1);
    }
  }, [seconds, minutes]);

  return (
    <div className="flex justify-center h-screen w-full flex-col">
      <StopWatch hours={hours} minutes={minutes} seconds={seconds} />
      <ControlButtons
        start={start}
        handleStart={handleStart}
        handleStop={handleStop}
        handleReset={handleReset}
      />
    </div>
  );
}

export default App;
