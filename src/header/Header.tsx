import { useLayoutEffect, useState, useEffect, useRef } from 'react'
import Arrival from './Arrival'
import BoardClock from './BoardClock'
import styles from './header.module.scss'
import { useAnimation } from "framer-motion";

const introductions = [
  "Hello, I'm Seisuke!",
  "Full Stack Developer",
  "Eager to learn new things",
]

export default function Header() {
  const [eta, setEta] = useState([getETA(0), getETA(1), getETA(2)])

  const controls = useAnimation();

  const startAnimation = async () => {
    // 要素Aのxのアニメーションを開始
    await controls.start({ x: "100%" });
  };

  useEffect(() => {
    startAnimation();
  }, []); 

  return (
    <header className={styles.header}>
      <div className={styles.board}>
        <div className={styles.schedule}>
          {<Arrival control={controls} key={0} destination={introductions[0]} eta={eta[0]} index={0} />}
          {<Arrival control={controls} key={1} destination={introductions[1]} eta={eta[1]} index={1} />}
          {<Arrival control={controls} key={2} destination={introductions[2]} eta={eta[2]} index={2} />}
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
