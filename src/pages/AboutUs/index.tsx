import { useEffect } from "react"
import LandScapeShowcase from "../../components/LandScapeShowcase"
import { ProjectShowcase } from "../../components/ProjectShowcase"
import LongTermPlan from "./LongTermPlan"
import USPs from "./USPs"


const index = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, []);

  return (
    <>
      <ProjectShowcase backgroundImages={['/arch1.jpg','/projects2.jpg','arch.jpg']} header="about us"/>
      <LandScapeShowcase body="ICE is a private Design and Innovations company registered in the year 2019. Right 
from inception, we’ve offered our services to clients within and outside Nigeria. ICE is
headed by our Chairman, Architect Adeleye Mustapha and our MD/CEO, Oladapo Mustapha, 
with a physical office located in Lagos, Nigeria"
 body2="Made up of a carefully appointed team of certified professionals in the design, engineering
 and architecture field, with a cumulative experience of almost 40 years, the strength and
 efficiency of our collective effort as a company is evident in the skillfulness we show,
 the brilliant results we achieve and how our work standards and ethics meet global benchmarks."
/>
<USPs/>
<LandScapeShowcase header="what we do" body="Harnessing the concepts of Imagine, Create and Execute, the framework of ICE is modeled around 
conceiving ideas and concepts in line with the unique needs of our target audience,
assessing and then assembling  these ideas into practical concepts that preserve
the client’s initial vision, and implementation or execution — whether by providing design
solutions, executing architectural works, interior decor or project management. 
We bring plans to life; and we ensure it’s even better than envisioned.
"/>
<LongTermPlan/>
<LandScapeShowcase color="bg-[#000000]" textColor="text-[#ffffff]" header="why choose us" body="With a track record of delivering high-value, modern, and minimalist architecture, we are more than just designers—we are storytellers, shaping the future of spaces with a clear vision and an uncompromising commitment to excellence. Whether residential, commercial, or bespoke projects, we create environments that inspire, function flawlessly, and leave a lasting impression.
"/>
    </>
  )
}

export default index
