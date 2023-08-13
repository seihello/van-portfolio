import HomePageHeader from './header/HomePageHeader'
import SubPageHeader from './header/SubPageHeader'
import Footer from './footer/Footer'
import HomePage from './home/HomePage'
import ProjectPage from './subpages/project/ProjectPage'
import SkillPage from './subpages/skill/SkillPage'
import ExperiencePage from './subpages/experience/ExperiencePage'
import ContactPage from './subpages/contact/ContactPage'
import MobileMenuOpen from './menu/MobileMenuOpen'
import MobileMenu from './menu/MobileMenu'
import { Routes, Route, useLocation } from 'react-router-dom'
import React, { createContext, useRef } from 'react';
import DesktopMenu from './menu/DesktopMenu'

export const mobileMenuContext = createContext<React.MutableRefObject<HTMLDivElement | null>>({current: null});

function App() {

  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation()  

  return (
    <>
      <mobileMenuContext.Provider value={mobileMenuRef}>
        <MobileMenu />
        <MobileMenuOpen />
      </mobileMenuContext.Provider>
      <DesktopMenu />
      {location.pathname === "/" ? <HomePageHeader /> : <SubPageHeader />}
      <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/skill" element={<SkillPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
