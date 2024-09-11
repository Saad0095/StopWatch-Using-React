import React from "react";

const ControlButtons = ({ isRunning, handleStart, handleStop, handleReset }) => {
  return (
    <div className="flex justify-center items-center mt-5">
      <button
        className={`m-4 px-8 py-3  rounded text-white font-semibold text-base ${
          isRunning ? `bg-green-900 cursor-not-allowed` : `bg-green-600`
        }`}
        onClick={handleStart}
        disabled={isRunning}
      >
        Start
      </button>
      <button
        className={`m-4 px-8 py-3 rounded text-white font-semibold text-base ${
          !isRunning ? `bg-red-900` : `bg-red-700`
        }`}
        onClick={handleStop}
        disabled={!isRunning}
      >
        Stop
      </button>
      <button
        className={`m-4 px-8 py-3  rounded text-white font-semibold text-base ${
          isRunning ? `bg-blue-900 cursor-not-allowed` : `bg-blue-700`
        }`}
        onClick={handleReset}
        disabled={isRunning}
      >
        Reset
      </button>
    </div>
  );
};

export default ControlButtons;
