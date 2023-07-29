import styles from './header.module.scss'
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Power1 } from "gsap";

export enum AnimationState {
  None,
  Join,
  BottomToMiddle,
  MiddleToTop,
  Leave
}

type ArrivalProps = {
  destination: string;
  eta: string;
  index: number;
  animationState: AnimationState;
};

export default function Arrival({destination, eta, index, animationState}: ArrivalProps) {
  const arrival: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(arrival.current, { x: "100%", duration: 1, ease: Power1.easeIn });
      
    }, arrival);
    
    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.arrival} ref={arrival} style={{top: `${index*33}%`}}>
      <img className={styles.train_icon} src="./train.png" />
      <div className={styles.destination}>{destination}</div>
      <div className={styles.eta}>{eta}</div>
    </div>
  )
}
