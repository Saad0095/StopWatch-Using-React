import { useEffect, useState } from "react";
import ControlButtons from "./components/ControlButtons";
import StopWatch from "./components/StopWatch";

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
      const id = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
      setIntervalId(id);
    }
  };

  const handleStop = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
      setIsRunning(false);
    }
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

  useEffect(() => {
    handleStart();
  }, []);

  return (
    <div className="flex justify-center h-screen w-full flex-col">
      <StopWatch hours={hours} minutes={minutes} seconds={seconds} />
      <ControlButtons
        isRunning={isRunning}
        handleStart={handleStart}
        handleStop={handleStop}
        handleReset={handleReset}
      />
    </div>
  );
}

export default App;
