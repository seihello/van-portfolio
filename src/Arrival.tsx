import { log } from 'console';
import React from 'react'
import styled, { keyframes } from 'styled-components';

export enum AnimationState {
  None,
  Join,
  BottomToMiddle,
  MiddleToTop,
  Leave
}

const join = keyframes`
  from {
    left: -100%;
  }
  to {
    left: 0px;
  }
`

const bottomToMiddle = keyframes`
  from {
    top: 66%;
  }
  to {
    top: 33%;
  }
`

const middleToTop = keyframes`
  from {
    top: 33%;
  }
  to {
    top: 0%;
  }
`

const leave = keyframes`
  from {
    left: 0px;
  }
  to {
    left: 100%;
  }
`

const animations = [
  null, join, bottomToMiddle, middleToTop, leave
]

const translateDistance = [
  [0, 0],
  []
]

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
    <ArrivalDiv className="arrival" index={index} animationState={animationState}>
      <img className="train-icon" src="./train.png"/>
      <div className="destination">{destination}</div>
      <div className="eta">{eta}</div>
    </ArrivalDiv>
  )
}
