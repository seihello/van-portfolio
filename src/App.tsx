import HomePageHeader from './header/HomePageHeader'
import SubPageHeader from './header/SubPageHeader'
import Footer from './footer/Footer'
import HomePage from './home/HomePage'
import ProjectPage from './subpages/project/ProjectPage'
import SkillPage from './subpages/skill/SkillPage'
import ExperiencePage from './subpages/experience/ExperiencePage'
import ContactPage from './subpages/contact/ContactPage'
import Menu from './menu/Menu'
import MobileMenuToggle from './menu/MobileMenuToggle'
import Navigation from './menu/Navigation'
import { Routes, Route, useLocation } from 'react-router-dom'
import React, { createContext, useRef } from 'react';

export const mobileMenuContext = createContext<React.MutableRefObject<HTMLDivElement | null>>({current: null});

function App() {

  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation()  

  return (
    <>
      <mobileMenuContext.Provider value={mobileMenuRef}>
        <Navigation />
        <MobileMenuToggle />
      </mobileMenuContext.Provider>
      <main>
          <Menu />
          {location.pathname === "/" ? <HomePageHeader /> : <SubPageHeader />}
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
