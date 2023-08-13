import WorkExperienceSection from './WorkExperienceSection'
import EducationSection from './EducationSection'
import usePageTransition from '../../hooks/usePageTransition'

export default function ExperiencePage() {

  usePageTransition()

  return (
    <>
      <WorkExperienceSection />
      <EducationSection />
    </>
  )
}
