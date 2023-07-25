import React from 'react'

type Props = {
  orgName: string;
  orgLink: string;
  duration: string;
  level: string;
}

export default function Education(props: Props) {
  return (
    <div>
      <div className="experience-first">
        <div className="org-name">
          <a className="link" href={props.orgLink} target="_blank"><h3>{props.orgName}</h3></a>
        </div>
        <h3>{props.duration}</h3>
      </div>
      <p className="role">{props.level}</p>
    </div>
  )
}
