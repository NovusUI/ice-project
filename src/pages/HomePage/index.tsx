
import HeroSection from './HeroSection'
import OurApproachSection from './OurApproachSection'
import OurProjects from './OurProjects'
import IntimateClientApproach from './IntimateClientApproach'
import AboutUs from './AboutUs'
import ContactForm from './ContactForm'
import { useEffect } from 'react'

const index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, []);
  return (
    <>
        <HeroSection/>
        <OurApproachSection/>
        <OurProjects/>
        <IntimateClientApproach/>
        <AboutUs/>
        <ContactForm/>
    </>
  )
}

export default index
