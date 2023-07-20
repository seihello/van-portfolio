import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { useSpring, animated } from 'react-spring';
import Arrival from './Arrival'

const introductions = [
	"Hello, I'm Seisuke!",
	"Full Stack Developer",
	"Eager to learn new things",
]

const AnimatedArrival = animated(Arrival)

export default function Header() {

  return (
    <header>
      <img id="station-image" src="./station.jpg" />
        <div id="board">
          <div id="schedule">
            <AnimatedArrival destination={introductions[0]} eta={getETA(0)} />
            <AnimatedArrival destination={introductions[1]} eta={getETA(1)} />
            <AnimatedArrival destination={introductions[2]} eta={getETA(2)} />
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

function getETA(index: number): string {
  switch (index) {
    case 0:
      return "Now"
		case 1:
			return `${Math.floor(Math.random() * 2) + 3}min`
		case 2:
			return `${Math.floor(Math.random() * 6) + 5}min`
    default:
      return ""
	}
}
