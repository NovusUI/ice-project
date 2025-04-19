import { useEffect } from "react";
import LandScapeShowcase from "../../components/LandScapeShowcase"
import { ProjectShowcase } from "../../components/ProjectShowcase"

import Section2 from "./Section2"



const index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, []);
  return (
    <>
        <ProjectShowcase backgroundImages={["/arch.jpg","/arch1.jpg","/arch2.jpg"]} header="architecture"/>
        <LandScapeShowcase body="We specialize in modern, high end architecture, seamlessly
blending innovation, functionality, and timeless design to create spaces that are
both visually striking and highly functional."/>
      <Section2/>
      <ProjectShowcase backgroundImages={["/construction.jpg","/construction1.jpg","/construction2.jpg"]} header="construction"/>
      <LandScapeShowcase body="Our construction expertise is defined 
      by precision, quality, and efficiency. 
      We integrate innovative building techniques with high-quality materials to deliver durable, 
      functional, and architecturally refined structures. From concept to completion, our team upholds the 
      highest industry standards, ensuring meticulous attention to detail and flawless execution."

body2="With a strong focus on sustainability, craftsmanship, and efficiency, we create spaces that are built 
to endure and designed to inspire. Whether residential, commercial, or bespoke projects, 
our commitment to excellence ensures every structure meets the highest levels of durability, 
functionality, and aesthetic sophistication."
/>
<ProjectShowcase backgroundImages={["/interior.jpg","/interior1.jpg","/interior2.jpg"]} header="interior design"/>

<LandScapeShowcase body="Crafting spaces that embody elegance, functionality, and timeless design, each interior is thoughtfully curated to enhance form and purpose. Meticulous attention to materials, textures, and lighting ensures a seamless connection between architecture and interior elements. "

body2="A balance of modern minimalism and refined sophistication creates environments that are both visually striking and effortlessly livable. Whether for residential, commercial, or bespoke projects, every space is designed to elevate experiences, harmonizing aesthetics with everyday practicality."
/>
    </>
  )
}

export default index
