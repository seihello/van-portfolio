import React from 'react'

type Props = {
  projectName: string;
  projectLink: string;
  projectImage: string;
  projectLangs: string[];
};

export default function Project(props: Props) {
  return (
    <div className="project">
      <a className="project-link" href={props.projectLink}>
        <img className="project-image" src={props.projectImage}></img>
        <div className="project-filter">
          <div className="project-name">{props.projectName}</div>
          <div className="project-langs">
            {props.projectLangs.map((projectLang) => {
              return <div className="project-lang">{projectLang}</div>
            })}
          </div>
        </div>
      </a>
    </div>
  )
}
