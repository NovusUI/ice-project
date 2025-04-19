import { useEffect } from "react";
import { ProjectShowcase } from "../../components/ProjectShowcase"
import ContactSection from "./ContactSection"


const index = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, []);
  return (
    <>
      <ProjectShowcase header="let's start creating" backgroundImages={['startcreating.jpg','startcreating1.jpg','startcreating2.jpg']}/>
      <ContactSection/>
    </>
  )
}

export default index
