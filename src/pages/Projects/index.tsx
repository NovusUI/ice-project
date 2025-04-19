import LandScapeShowcase from "../../components/LandScapeShowcase"
import { ProjectShowcase } from "../../components/ProjectShowcase"
import ProjectsGrid from "./ProjectCardGrid"


const index = () => {
  return (
    <>
      <ProjectShowcase header="projects" backgroundImages={['/projects1.jpg','/projects2.jpg','projects3.jpg']}/>
      <ProjectsGrid/>
      <LandScapeShowcase color="bg-[#817569]" textColor="text-[#ffffff]" header="Let’s start Creating" body="Have a project in mind? Let’s discuss how we can bring your vision to life with thoughtful, modern design. Reach out to us today!" buttonTitle="Contact us"/>
      
    </>
  )
}

export default index
