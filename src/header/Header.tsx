import { useLayoutEffect, useEffect, useRef } from 'react'
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

  const headerRef = useRef(null);

  const arrival0Ref = useRef(null);
  // const arrival1Ref = useRef(null);
  // const arrival2Ref = useRef(null);


  // const arrival0 = (<Arrival ref={arrival0Ref} key={0} destination={introductions[0]} eta={getETA(0)} index={0} />)
  // const arrival1 = (<Arrival ref={arrival1Ref} key={1} destination={introductions[1]} eta={getETA(1)} index={1} />)
  // const arrival2 = (<Arrival ref={arrival2Ref} key={2} destination={introductions[2]} eta={getETA(2)} index={2} />)


  useEffect(() => {
    console.log("ref", arrival0Ref)
    let ctx = gsap.context(() => {
      gsap.to(arrival0Ref.current, { x: "100%", duration: 1, ease: Power1.easeIn });
      
    }, headerRef);
    
    return () => ctx.revert();
  }, []);

  // useLayoutEffect(() => {

  //   let ctx = gsap.context(() => {
  //     const tl1 = gsap.timeline();
  //     tl1.to(arrival0Ref.current, { left: "100%", duration: 0.5 })
  //     .to(arrival1Ref.current, { top: "0%", duration: 1 })
  //     .to(arrival2Ref.current, { top: "33%", duration: 1 })
  
  //     const tl2 = gsap.timeline();
  //     tl2.to(arrival1Ref.current, { left: "100%", duration: 0.5 })
  //     .to(arrival2Ref.current, { top: "0%", duration: 1 })
  //     .to(arrival0Ref.current, { top: "33%", duration: 1 })
  
  //     const tl3 = gsap.timeline();
  //     tl3.to(arrival2Ref.current, { left: "100%", duration: 0.5 })
  //     .to(arrival0Ref.current, { top: "0%", duration: 1 })
  //     .to(arrival1Ref.current, { top: "33%", duration: 1 })
  
  //     // タイムライン1, 2, 3を連結して1つのタイムラインを作成
  //     const mainTimeline = gsap.timeline({ repeat: -1, repeatDelay: 6 });
  //     mainTimeline.add(tl1).add(tl2).add(tl3);
      
  //   }, headerRef);
    
  //   return () => ctx.revert();
  // }, []);

  

  return (
    <header ref={headerRef} className={styles.header}>
      <div className={styles.board}>
        <div className={styles.schedule}>
          {<ForwardArrival ref={arrival0Ref} key={0} destination={introductions[0]} eta={getETA(0)} index={0} />}
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
