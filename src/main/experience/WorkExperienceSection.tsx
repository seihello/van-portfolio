import React from 'react'
import WorkExperience from './WorkExperience'
import styles from './experience.module.scss'

const sandmanmediaDescription = [
  "Built web pages using a CMS, utilizing HTML and CSS to ensure optimal design and layout across different devices and screen sizes",
  "Utilized JavaScript to implement interactive features and functionality, such as API calling and smooth animations",
  "Created CMS components and modules using PHP, to enhance the efficiency of development process",
  "Collaborated with designers and developers to refine designs and achieve user-friendly websites"
]

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
      <div className={styles.work_list}>
        <WorkExperience companyName="Sandman Media" companyLink="https://www.sandmanmedia.com/" duration="Jun. 2023 - Jul. 2023" position="Web Developer Internship" description={sandmanmediaDescription} image="./webdev.jpg" />
        <WorkExperience companyName="Muratec Machinery" companyLink="https://www.muratec.jp/" duration="Apr. 2017 - Aug. 2022" position="Software Engineer" description={muratecDescription} image="./semicon.jpg" />
      </div>
    </div>
  )
}
