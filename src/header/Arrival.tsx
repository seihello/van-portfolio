import styles from './header.module.scss'
import { motion, AnimationControls } from "framer-motion";

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
  control: AnimationControls;
};


export default function Arrival(props: ArrivalProps) {
  return (
    <motion.div animate={props.control} className={styles.arrival} style={{top: `${props.index*33}%`}}>
      <img className={styles.train_icon} src="/img/train.png" />
      <div className={styles.destination}>{props.destination}</div>
      <div className={styles.eta}>{props.eta}</div>
    </motion.div>
  )
};
