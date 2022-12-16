import React, { useState, useEffect } from 'react';
import React from 'react';


function Countdown() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;

    let countDown = new Date('Jan 1, 2023 00:00:00').getTime();

    const interval = setInterval(() => {
      let now = new Date().getTime(),
          distance = countDown - now;

      setDays(Math.floor(distance / day));
      setHours(Math.floor((distance % day) / hour));
      setMinutes(Math.floor((distance % hour) / minute));
      setSeconds(Math.floor((distance % minute) / second));
    }, second);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="castle-tile-wrapper">
      <div className="countdown">
        <h2>Countdown to Fall Semester</h2>
        <ul>
          <li>{days} days</li>
          <li>{hours} hours</li>
          <li>{minutes} minutes</li>
          <li>{seconds} seconds</li>
        </ul>
      </div>
    </div>
  );
}

export default Countdown;
