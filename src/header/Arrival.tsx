import styled from 'styled-components';
import styles from './header.module.scss'

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

type ArrivalDivProps = {
  index: number;
  animationState: AnimationState;
}

const ArrivalDiv = styled.div<ArrivalDivProps>`

  top: ${props => props.index * 33}%;
`

export default function Arrival({destination, eta, index, animationState}: ArrivalProps) {
  console.log(index, animationState)
  return (
    <ArrivalDiv className={styles.arrival} index={index} animationState={animationState}>
      <img className={styles.train_icon} src="./train.png"/>
      <div className={styles.destination}>{destination}</div>
      <div className={styles.eta}>{eta}</div>
    </ArrivalDiv>
  )
}
