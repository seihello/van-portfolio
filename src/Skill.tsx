import React from 'react'

type Props = {
  skillName: string;
  proficiency: number;
};

export default function Skill(props: Props) {
  return (
    <div className="skill">
      <p className="skill-name">{props.skillName}</p>
      <div className="skill-rate-box">
        <div className={`skill-rate rate${props.proficiency}`}>
        </div>
      </div>
    </div>
  )
}
