import React from "react";

const StopWatch = ({ hours, minutes, seconds }) => {
  return (
    <div className="flex justify-center items-center font-bold text-8xl">
      <div>{hours < 10 ? "0" + hours : hours}</div>
      <span> : </span>
      <div>{minutes < 10 ? "0" + minutes : minutes}</div>
      <span> : </span>
      <div>{seconds < 10 ? "0" + seconds : seconds}</div>
    </div>
  );
};

export default StopWatch;
