import React from 'react'

type ArrivalProps = {
  destination: string;
  eta: string;
  style: string;
};
export default function Arrival({destination, eta, style}: ArrivalProps) {
  return (
    <div className="arrival" style={style}>
      <img className="train-icon" src="./train.png"/>
      <div className="destination">{destination}</div>
      <div className="eta">{eta}</div>
    </div>
  )
}
