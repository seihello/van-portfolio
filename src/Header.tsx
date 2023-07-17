import React from 'react'

export default function Header() {
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
