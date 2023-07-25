import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { useSpring, animated } from 'react-spring';
import Arrival, { AnimationState } from './Arrival'
import BoardClock from './BoardClock'

import { log } from 'console';

const introductions = [
  "Hello, I'm Seisuke!",
  "Full Stack Developer",
  "Eager to learn new things",
]

const AnimatedArrival = animated(Arrival)

enum AnimationPhase {
  Start = 0,
  Remove = 5,
  Up = 10,
  Insert = 12,
  End = 14
}

export default function Header() {

  const [animationTimer, setAnimationTimer] = useState(AnimationPhase.Start)

  // useEffect(() => {
  //   const timeoutId = setInterval(() => {
  //     setAnimationTimer((prev) => prev + 1);
  //   }, 1000);

  //   return () => {
  //     clearTimeout(timeoutId);
  //   };
  // }, []);

  let nextAnimation: AnimationState[] = []
  switch (animationTimer) {
    case AnimationPhase.Remove:
      nextAnimation = [AnimationState.Leave, AnimationState.None, AnimationState.None]
      break
    case AnimationPhase.Up:
      nextAnimation = [AnimationState.None, AnimationState.MiddleToTop, AnimationState.BottomToMiddle]
      break
    case AnimationPhase.Insert:
      nextAnimation = [AnimationState.None, AnimationState.None, AnimationState.None]
      break
    default:
      nextAnimation = [AnimationState.None, AnimationState.None, AnimationState.None]
  }

  return (
    <header>
      <div id="board">
        <div id="schedule">
          {[...Array(3)].map((_, index) => (
            <AnimatedArrival key={index} destination={introductions[index]} eta={getETA(index)} index={index} animationState={nextAnimation[index]} />
          ))}
        </div>
        <div id="info">
          <div id="announce">
            <div id="announce-text">
              My interests are traveling, taking photos, watching musical, and playing Kalimba.
            </div>
          </div>
          <BoardClock />
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
