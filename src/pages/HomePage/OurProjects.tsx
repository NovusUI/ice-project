
import { useNavigate } from 'react-router-dom'
import { ProjectShowcase } from '../../components/ProjectShowcase'

const OurProjects = () => {
  const navigate = useNavigate()
  return (
    <ProjectShowcase onClick={()=>navigate("/projects")}  backgroundImages={["/heroimg1.jpg","/heroimg2.jpg","/heroimg.jpg"]} header='our project' body='We create thoughtfully designed, high-end projects that seamlessly integrate form and function, with a strong commitment to modern and minimalist aesthetics.' isButton/>
  )
}

export default OurProjects
