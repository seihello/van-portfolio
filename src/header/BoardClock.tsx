import React from 'react'
import { useState, useEffect } from 'react'
import styles from './header.module.scss'

function toAMPM(hour: number, minute: number) {

  let strMinute: string;
  if (minute < 10) {
    strMinute = "0" + minute
  } else {
    strMinute = String(minute)
  }

  if (hour === 0) {
    return `${12}:${strMinute}a.m.`
  }
  else if (hour < 12) {
    return `${hour}:${strMinute}a.m.`
  }
  else if (hour === 12) {
    return `${12}:${strMinute}p.m.`
  }
  else if (hour > 12) {
    return `${hour - 12}:${strMinute}p.m.`
  }
}

export default function BoardClock() {

  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setDate(new Date())
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className={styles.current_time}>
      {`${toAMPM(date.getHours(), date.getMinutes())}`}
    </div>
  )
}
