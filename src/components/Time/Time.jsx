import { useState } from 'react';
import classes from './Time.module.scss';
const Time = () => {
  const date = new Date();
  const [time, setTime] = useState(date);
  setTimeout(
    () => {
      setTime(date);
    },
    1000,
    date
  );
  let minutes = time.getMinutes();
  if (minutes < 10) {
    minutes = '0' + minutes.toString();
  }
  const hours = time.getHours();
  let timeStr = `${hours % 12}:${minutes} `;
  timeStr += time >= 12 ? 'PM' : 'AM';
  //   console.log(timeStr);
  return <p className={classes.time}>{timeStr}</p>;
};

export default Time;
