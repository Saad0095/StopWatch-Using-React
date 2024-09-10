import React from "react";

const ControlButtons = ({ start, handleStart, handleStop, handleReset }) => {
  return (
    <div className="flex justify-center items-center mt-5">
      <button
        className={`m-4 px-8 py-3  rounded text-white font-semibold text-base ${
          start ? `bg-green-900 cursor-not-allowed` : `bg-green-600`
        }`}
        onClick={handleStart}
        disabled={start}
      >
        Start
      </button>
      <button
        className={`m-4 px-8 py-3 rounded text-white font-semibold text-base ${
          !start ? `bg-red-900` : `bg-red-700`
        }`}
        onClick={handleStop}
        disabled={!start}
      >
        Stop
      </button>
      <button
        className={`m-4 px-8 py-3  rounded text-white font-semibold text-base ${
          start ? `bg-blue-900 cursor-not-allowed` : `bg-blue-700`
        }`}
        onClick={handleReset}
        disabled={start}
      >
        Reset
      </button>
    </div>
  );
};

export default ControlButtons;
