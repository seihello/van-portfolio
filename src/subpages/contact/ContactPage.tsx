import usePageTransition from '../../hooks/usePageTransition'
import ContactSection from './ContactSection'
import ResumeSection from './ResumeSection'

export default function ContactPage() {

  usePageTransition()

  return (
    <>
      <ContactSection />
      <ResumeSection />
    </>
  )
}
