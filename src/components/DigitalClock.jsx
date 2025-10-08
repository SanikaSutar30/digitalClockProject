// export default DigitalClock;
import React, { useState, useEffect } from "react";

function DigitalClock() {
  const [isShow, setIsShow] = useState(true);
  const [timer, setTimer] = useState(new Date());

  // Update timer every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(new Date());
    }, 1000);
    //   after every second timer is updated with new Date()

    return () => clearInterval(interval); // cleanup function when component unmount
  }, []);

  const handleShowTime = () => {
    setIsShow(true);
  };

  const handleHideTime = () => {
    setIsShow(false);
  };

  // Format time as HH:MM:SS
  const formattedTime = timer.toLocaleTimeString();

  // function formatTime() {
  //     let hr = timer.getHours();
  //     let min = timer.getMinutes();
  //     let sec = timer.getSeconds();
  //     // am or pm
  //     const meridiem = hr >= 12 ? "pm" : "am";
  //     hr = hr % 12;|| 12;
  //     return `addZero(${hr}):addZero(${min}):addZero(${sec}) ${meridiem}`;
  // }
  //   function addZero(number) {
  //     // if number is single digit then return single zero string else return empty string
  //     //   if single digit then it returns 0 and concat with number i.e. single didgit with zero
  //     return (number < 10 ? "0" : "") + number;
  //   }

  return (
    <div className="container">
      <h1 className="title">Digital Clock</h1>

      <div className="timerDisplay">
        {isShow ? (
          <h1 className="timerText">{formattedTime}</h1>
        ) : (
          <p className="hiddenMessage">Timer is hidden</p>
        )}
      </div>

      <div className="buttonGroup">
        <button className="button" onClick={handleShowTime}>
          Show Time
        </button>
        <button className="button" onClick={handleHideTime}>
          Hide Time
        </button>
      </div>
    </div>
  );
}

export default DigitalClock;
