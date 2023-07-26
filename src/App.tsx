import Header from './header/Header'
import AboutMeSection from './main/about-me/AboutMeSection'
import ProjectSection from './main/project/ProjectSection'
import SkillSection from './main/skill/SkillSection'
import WorkExperienceSection from './main/experience/WorkExperienceSection'
import EducationSection from './main/experience/EducationSection'
import ResumeSection from './main/resume/ResumeSection'
import ContactSection from './main/contact/ContactSection'

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
