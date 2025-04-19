
import { useNavigate } from 'react-router-dom'
import LandScapeShowcase from '../../components/LandScapeShowcase'

const AboutUs = () => {

  const navigate = useNavigate()

    return (
        <LandScapeShowcase onClick={()=>navigate("/about-us")} header='About us' 
        body='We are a design-driven architecture firm dedicated to creating timeless spaces that are both functional and visually striking. 
        With a deep appreciation for modern design, we blend precision, innovation, and excellence to craft sophisticated environments. 
        ' buttonTitle="Learn more" />
    
      )
  
}

export default AboutUs
