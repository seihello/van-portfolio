import React from 'react'
import WorkExperience from './WorkExperience'
type Props = {
  companyName: string;
  companyLink: string;
  duration: string;
  position: string;
  description: string[];
  image?: string;
}

const muratecDescription = [
  "Developed a large-scale software for controlling machines which work in semiconductor factories",
  "Designed the architecture, created C++ codes, conducted testing",
  "Managed external development teams and reviewed their deliverables",
  "Communicated with our clients and local workers to arrange schedules and report problems"
]

export default function WorkExperienceSection() {
  return (
    <div className="section">
      <h2>Work Experience</h2>
      <hr />
      <WorkExperience companyName="Muratec Machinery" companyLink="https://www.muratec.jp/" duration="Apr. 2017 - Aug. 2022" position="Software Engineer" description={muratecDescription} image="./semicon.jpg"/>
    </div>
  )
}
