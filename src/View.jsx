import React, {useState, useEffect} from 'react';
import './theme/countdown.less';

const View = ({data, isEditMode, className}) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    let countDown = new Date(data.countToDate).getTime();

    const interval = setInterval(() => {
      let now = new Date().getTime(),
        distance = countDown - now;

      setDays(Math.floor(distance / day));
      setHours(Math.floor((distance % day) / hour));
      setMinutes(Math.floor((distance % hour) / minute));
      setSeconds(Math.floor((distance % minute) / second));
    }, second);

    return () => clearInterval(interval);
  }, [data.countToDate]);

  return (

    <div className={"countdown " + data.emphasis}>
      {data.title && <h2>{data.title}</h2>}
      {seconds >= 0 ? (
        <ul>
          <li><span>{days}</span> days</li>
          {data.showHour && <li><span>{hours}</span> hours</li>}
          {data.showMinute && <li><span>{minutes}</span> minutes</li>}
          {data.showSecond && <li><span>{seconds}</span> seconds</li>}
        </ul>) : (<div>{data.endMessage}</div>)}
    </div>
  );
};

export default View;
