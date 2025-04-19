import { ProjectShowcase } from "../../components/ProjectShowcase"
import ContactSection from "./ContactSection"


const index = () => {
  return (
    <>
      <ProjectShowcase header="let's start creating" backgroundImages={['startcreating.jpg','startcreating1.jpg','startcreating2.jpg']}/>
      <ContactSection/>
    </>
  )
}

export default index
