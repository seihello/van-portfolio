import styles from './header.module.scss'
import { forwardRef } from 'react';


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
};


export default function Arrival(props: ArrivalProps) {
  return (
    <div className={styles.arrival} style={{top: `${props.index*33}%`}}>
      <img className={styles.train_icon} src="./train.png" />
      <div className={styles.destination}>{props.destination}</div>
      <div className={styles.eta}>{props.eta}</div>
    </div>
  )
};
