import React from 'react'

type Props = {
  companyName: string;
  companyLink: string;
  duration: string;
  position: string;
  description: string[];
  image?: string;
}

export default function WorkExperience(props: Props) {
  return (
    <>
      <div className="experience-first">
        <div className="org-name">
          <a className="link" href={props.companyLink} target="_blank">
            <h3>{props.companyName}</h3>
          </a>
        </div>
        <h3>{props.duration}</h3>
      </div>
      <div className="work-item">
        <div className="work-description">
          <p className="role">{props.position}</p>
          <ul>
            {props.description.map((description) => {
              return <li>{description}</li>
            })}
          </ul>
        </div>
        <img className="work-image" src={props.image} />
      </div>
    </>
  )
}
