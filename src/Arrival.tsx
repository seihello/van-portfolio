import React from 'react'
import styled, { keyframes } from 'styled-components';

enum AnimationState {
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
  join, bottomToMiddle, middleToTop, leave
]

type ArrivalProps = {
  destination: string;
  eta: string;
};

const ArrivalDiv = styled.div`
  animation: ${animations[AnimationState.Join]} 2s forwards;
`

export default function Arrival({destination, eta}: ArrivalProps) {
  return (
    <ArrivalDiv className="arrival">
      <img className="train-icon" src="./train.png"/>
      <div className="destination">{destination}</div>
      <div className="eta">{eta}</div>
    </ArrivalDiv>
  )
}
