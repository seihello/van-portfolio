import { useState } from 'react'
import classes from './App.module.scss'
import Header from './Header'
import AboutMeSection from './AboutMeSection'
import ProjectSection from './ProjectSection'
import SkillSection from './SkillSection'
import WorkExperienceSection from './WorkExperienceSection'
import EducationSection from './EducationSection'
import ResumeSection from './ResumeSection'
import ContactSection from './ContactSection'

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
