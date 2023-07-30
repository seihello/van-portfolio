import { useLayoutEffect, useState, useEffect, useRef } from 'react'
import { ForwardArrival } from './Arrival'
import BoardClock from './BoardClock'
import styles from './header.module.scss'
import gsap from 'gsap';
import { Power1 } from "gsap";

const introductions = [
  "Hello, I'm Seisuke!",
  "Full Stack Developer",
  "Eager to learn new things",
]

export default function Header() {

  console.log("Reder")

  const [eta, setEta] = useState([getETA(0), getETA(1), getETA(2)])

  const headerRef = useRef(null);

  let arrivals = [useRef(null), useRef(null), useRef(null)]
  // const arrival0 = useRef<typeof ForwardArrival | null>(null);


  // const arrival0 = (<Arrival ref={arrival0Ref} key={0} destination={introductions[0]} eta={getETA(0)} index={0} />)
  // const arrival1 = (<Arrival ref={arrival1Ref} key={1} destination={introductions[1]} eta={getETA(1)} index={1} />)
  // const arrival2 = (<Arrival ref={arrival2Ref} key={2} destination={introductions[2]} eta={getETA(2)} index={2} />)


  // useEffect(() => {
  //   console.log("ref", arrival0Ref)
  //   let ctx = gsap.context(() => {
  //     gsap.to(arrival0Ref.current, { x: "100%", duration: 1, ease: Power1.easeIn });
      
  //   }, headerRef);
    
  //   return () => ctx.revert();
  // }, []);

  // useLayoutEffect(() => {

  //   let ctx = gsap.context(() => {
  //     const tl1 = gsap.timeline({ repeat: 3, repeatDelay: 10 });
  //     tl1.to(arrival0Ref.current, { left: "10%", duration: 0.5 })
  //     .to([arrival1Ref.current, arrival2Ref.current], { transform: "translateY(-100%)", duration: 1 })
      
  //   }, headerRef);
    
  //   return () => ctx.revert();
  // }, []);

  useEffect(() => {
    const tl1 = gsap.timeline({delay: 3});
    tl1.to(arrivals[0].current, { left: "100%", duration: 2 })
    .to(arrivals[0].current, { left: "-100%", top: "66%", duration: 1}, 2)
    .to(arrivals[1].current, { top: `0px`, duration: 2 }, 2)
    .to(arrivals[2].current, { top: `33%`, duration: 2 }, 2)
    .to(arrivals[0].current, { left: "0px" }, 4)


    const tl2 = gsap.timeline({delay: 3});
    tl2.to(arrivals[1].current, { left: "100%", duration: 2 })
    .to(arrivals[1].current, { left: "-100%", top: "66%" }, 2)
    .to(arrivals[2].current, { top: `0px`, duration: 2 }, 2)
    .to(arrivals[0].current, { top: `33%`, duration: 2 }, 2)
    .to(arrivals[1].current, { left: "0px" }, 4)

    const tl3 = gsap.timeline({delay: 3});
    tl3.to(arrivals[2].current, { left: "100%", duration: 2 })
    .to(arrivals[2].current, { left: "-100%", top: "66%" }, 2)
    .to(arrivals[0].current, { top: `0px`, duration: 2 }, 2)
    .to(arrivals[1].current, { top: `33%`, duration: 2 }, 2)
    .to(arrivals[2].current, { left: "0px" }, 4)


    const mainTimeline = gsap.timeline({repeat: -1, onComplete: () => {
      gsap.set(arrivals[2].current, { top: `66%`, left: "0px" });
      gsap.set(arrivals[0].current, { top: `0px`, left: "0px"  });
      gsap.set(arrivals[1].current, { top: `33%`, left: "0px"  });

    }});
    mainTimeline.add(tl1).add(tl2).add(tl3);
    
  });

  return (
    <header ref={headerRef} className={styles.header}>
      <div className={styles.board}>
        <div className={styles.schedule}>
          {<ForwardArrival ref={arrivals[0]} key={0} destination={introductions[0]} eta={eta[0]} index={0} />}
          {<ForwardArrival ref={arrivals[1]} key={1} destination={introductions[1]} eta={eta[1]} index={1} />}
          {<ForwardArrival ref={arrivals[2]} key={2} destination={introductions[2]} eta={eta[2]} index={2} />}
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
