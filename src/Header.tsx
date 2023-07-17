import React from 'react'
import { useEffect, useState, useRef } from 'react'

export default function Header() {
  const intervalRef = useRef(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      console.log('3 seconds passed');
    }, 3000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <header>
      <img id="station-image" src="./station.jpg" />
        <div id="board">
          <div id="schedule">
          </div>
          <div id="info">
            <div id="announce">
            </div>
            <div id="current-time"></div>
          </div>
        </div>
    </header>
  )
}
