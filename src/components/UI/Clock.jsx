import React, { useState, useEffect } from "react";
import "../../styles/clock.css";

function Clock() {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  let interval;
  // const countDown = () => {
  //   const destination = new Date("Mar 30,2023").getTime(); //gives time in ms

  //   interval = setInterval(() => {
  //     const now = new Date().getTime();
  //     const difference = destination - now;
  //     const days = Math.floor(difference / (1000 * 60 * 60 * 24)); //it will give days
  //     const hours = Math.floor(
  //       (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //     ); //it will give remaining hours
  //     const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  //     const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  //     if (destination < 0) clearInterval(interval.current);
  //     else {
  //       setDays(days);
  //       setHours(hours);
  //       setMinutes(minutes);
  //       setSeconds(seconds);
  //     }
  //   });
  // };
  const countDown = () => {
    let destination;

    // Check if there's already a saved countdown end time
    const savedTime = localStorage.getItem("countdownEndTime");

    if (savedTime) {
      destination = parseInt(savedTime, 10);
    } else {
      // Set a new destination time (4 days from now)
      destination = new Date().getTime() + 4 * 24 * 60 * 60 * 1000;
      localStorage.setItem("countdownEndTime", destination);
    }

    interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = destination - now;

      if (difference <= 0) {
        clearInterval(interval.current);
        localStorage.removeItem("countdownEndTime"); // optional: reset for next session
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000); // update every second
  };
  useEffect(() => {
    countDown();
  }, []);

  return (
    <div className="clock__wrapper d-flex align-items-center gap-3">
      <div className="clock__data d-flex align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 mb-2">{days}</h1>
          <h5 className="text-white fs-6">Days</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>
      <div className="clock__data d-flex align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 mb-2">{hours}</h1>
          <h5 className="text-white fs-6">Hours</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>
      <div className="clock__data d-flex align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 mb-2">{minutes}</h1>
          <h5 className="text-white fs-6">Minutes</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>
      <div className="clock__data d-flex align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 mb-2">{seconds}</h1>
          <h5 className="text-white fs-6">Seconds</h5>
        </div>
      </div>
    </div>
  );
}

export default Clock;
