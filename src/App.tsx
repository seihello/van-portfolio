import { useState, useRef } from 'react'
import classes from './App.module.scss'
import Header from './header/Header'
import AboutMeSection from './about-me/AboutMeSection'
import ProjectSection from './project/ProjectSection'
import SkillSection from './skill/SkillSection'
import WorkExperienceSection from './experience/WorkExperienceSection'
import EducationSection from './experience/EducationSection'
import ResumeSection from './resume/ResumeSection'
import ContactSection from './contact/ContactSection'

function App() {
  
  return (
    <>
      <Header />
      <body>
        <AboutMeSection />
        <ProjectSection />
        <SkillSection />
        <WorkExperienceSection />
        <EducationSection />
        <ResumeSection />
        <ContactSection />
      </body>
    </>
  )
}

export default App
