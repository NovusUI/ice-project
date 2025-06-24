import { useEffect } from "react";
import LandScapeShowcase from "../../components/LandScapeShowcase"
import { ProjectShowcase } from "../../components/ProjectShowcase"
import ProjectsGrid from "./ProjectCardGrid"
import { useNavigate } from "react-router-dom";


const index = () => {

  const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0);
        
      }, []);
  return (
    <>
      <ProjectShowcase header="projects" backgroundImages={['/projects1.jpg','/projects2.jpg','projects3.jpg']}/>
      <ProjectsGrid/>
      <LandScapeShowcase color="bg-[#817569]" onClick={()=>navigate("/contacts")} textColor="text-[#ffffff]" header="Let’s start Creating" body="Have a project in mind? Let’s discuss how we can bring your vision to life with thoughtful, modern design. Reach out to us today!" buttonTitle="Contact us"/>
      
    </>
  )
}

export default index
