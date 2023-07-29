// import { useState } from 'react'
import { animated } from 'react-spring';
import Arrival from './Arrival'
import BoardClock from './BoardClock'
import styles from './header.module.scss'

const introductions = [
  "Hello, I'm Seisuke!",
  "Full Stack Developer",
  "Eager to learn new things",
]

const AnimatedArrival = animated(Arrival)

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.board}>
        <div className={styles.schedule}>
          {[...Array(3)].map((_, index) => (
            <AnimatedArrival key={index} destination={introductions[index]} eta={getETA(index)} index={index} animationState={1} />
          ))}
        </div>
        <div className={styles.info}>
          <div className={styles.announce}>
            <div className={styles.announce_text}>
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
