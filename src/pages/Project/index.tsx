import { useEffect } from 'react'
import { ProjectShowcase } from '../../components/ProjectShowcase'
import { useParams } from 'react-router-dom';
import ProjectDetails from './ProjectShowcase';
import ProjectGallery from './ProjectGallery';
import LandScapeShowcase from '../../components/LandScapeShowcase';

const index = () => {

    const { id } = useParams<{ id?: keyof typeof data }>();

    useEffect(() => {
        window.scrollTo(0, 0);
        
      }, []);

  
      const data = {
        "aditu" : {
            title: "aditu",
            image: "/aditu/AdituHero.jpg",
            starImg: "/aditu/adetu.jpg",
            images: ["/aditu/adetu1.jpg","/aditu/adetu2.jpg","/aditu/adetu.jpg","/aditu/adetu4.jpg"],
            content: [
                "Located in one of Lekki’s most prestigious estates, where architectural uniformity is the norm,this residence redefines convention.",
                "Designed for a corner plot overlooking an adjacent park, the home maximizes its unique position by opening up to serene, green views",
                "While the design departs from the estate’s typical aesthetic, it maintains a sense of tradition and prioritizes functionality, achieving a refined balance between originality and familiarity"
            ],
            location: "Lekki",
            type: "Residential",
            completionDate: "2024"
        },
        "crux" : {
            title: 'crux, lekki',
            image: "/crux/cruxHero.jpg",
            starImg: "/crux/crux.jpg",
            images: ["/crux/crux1.jpg","/crux/crux2.jpg","/crux/crux3.jpg","/crux/crux4.jpg",],
            content: [
                `Crux is a bold residential development comprising four
                detached homes, located on one of the most sought-after
                streets in Lekki Phase 1`,
                `
                Designed to stand out, the
development is instantly recognizable by its large, patterned
feature wall and rooftop terraces, making a strong visual
statement in a neighborhood dominated by multi-residential
blocks.
                `,
                `Thoughtfully planned for families who love to host, each
                unit blends private living with generous social spaces, creating
a perfect balance of comfort and connection`
            ],
            location: "Lekki Phase 1, Lagos",
            type: "Residential Development (4 Detached Units)",
            completionDate: "2026"
        },
        "d23" : {
            title: 'd23 apartment',
            image: "/d23/d23Hero.jpg",
            starImg: "/d23/d23.jpg",
            images: ["/d23/d231.jpg","/d23/d232.jpg","/d23/d233.jpg", "/d23/d234.jpg"],
            content: [
                `D23 Apartments is a bold 7-floor residential development
                designed to make an impact, visually and experientially, while
                keeping costs efficient. `,
                `
                Positioned on a prime corner lot in
Victoria Island, the building offers over 60% of its residents
panoramic views of the Atlantic Ocean, the coastal road, and
stunning sunsets. Its identity is shaped by vibrant colors, clean
geometric patterns, and creative use of exposed steel pipe
details. 
                `,
                `With careful attention to natural ventilation, lighting, and
                internal circulation, D23 delivers a thoughtfully elevated living
                experience in the heart of the city.`
            ],
            location: "Victoria Island, Lagos",
            type: "Mid-Rise Multi-Residential",
            completionDate: "2025"
        },
        "hillsmall" : {
            
            title: 'hills mall',
            image: "/hillsmall/hillsmallHero.jpg",
            starImg: "/hillsmall/hillmall.jpg",
            images: ["/hillsmall/hillsmall1.jpg","/hillsmall/hillsmall2.jpg","/hillsmall/hillmall.jpg","/hillsmall/hillsmall4.jpg",],
            content: [
                "For Shoppers to walk in and truly experience more than a traditional retail feel, and the Hills Mall Project does exactly that.",
                "From grey spaces giving way to glass walls,  to an inverted V-shaped symbol that serves as a hill reference, ",
                "an under-building commercial parking lot that makes adequate provision for cars,",
                "to an exterior that’s incorporated with the exquisite interior of this building this high-end shopping mall was intentionally built to exude luxury and draw in the big spenders!"
            ],
            location: "Abuja",
            type: "commercial",
            completionDate: "TBD"
        },
        "quill":{
            title:"quill apartment",
            image:"/quill/quillHero.jpg",
            starImg: "/quill/quill.jpg",
            images: ["/quill/quill1.jpg","/quill/quill2.jpg","/quill/quill.jpg","/quill/quill4.jpg",],
            content: [
                `Quill Apartments is a private, six-floor luxury residential
                development positioned along the serene Lagos lagoon
                coastline.`,

                `Designed as a refined community of just 30
                residents, the building features stacked maisonnettes capped
                with an exclusive pent floor. The development is tailored for
                high-net-worth individuals seeking privacy, sophistication, and a
                sense of calm.`,

                `Amenities like a lagoon-facing pool and fully equipped gym
                enhance daily living, while the use of soft nude color palettes
                throughout the interiors evokes a warm, welcoming atmosphere
                from the moment of entry. Generous openings, natural
                ventilation, and landscaped green spaces complete the vision
                of elevated coastal living`
            ],
            location: "Lagoon Coastline, Lagos",
            type: "Luxury Residential (Maisonnette Apartments + Penthouse)",
            completionDate: "2027"
        },
        "remivilla":{
            title:"remi's villa",
            image: "/remivilla/remivillaHero.jpg",
            starImg: "/remivilla/remivilla.jpg",
            images: ["/remivilla/remivilla1.jpg","/remivilla/remivilla2.jpg","/remivilla/remivilla3.jpg","/remivilla/remivilla4.jpg",],
            content: [
                'Nestled in the heart of modern luxury, Remi Villa is more than a residence—it’s a sanctuary where sophistication and serenity converge. Inspired by the Yoruba name "Remi," meaning "to soothe" or "comfort," this villa embodies the essence of tranquil living and refined design.',
                'The exterior is a symphony of natural textures and contemporary accents, seamlessly integrating lush greenery with sleek architectural elements. Its signature R-shaped emblem subtly nods to resilience and harmony, setting the tone for the serene escape that lies beyond.',
                'Designed with both beauty and practicality in mind, Remi Villa boasts an under-building parking facility that caters to convenience without compromising aesthetics.'
            ],
            location: "Osun State",
            type: "Residential",
            completionDate: "",

        },
        "splitvi":{
            title:"split vi",
            image: "/split/splitHero.jpg",
            starImg: "/split/split.jpg", 
            images: ["/split/split1.jpg","/split/split.jpg","/split/split3.jpg","/split/split4.jpg"],
            content:[
                "The Split VI Project invites you to explore what a grand version of home should feel like.",
                "As youre ushered into this impeccably layered building, its easy to spot a sleek consistent design on the exterior.",
                "The textural elements in the interior are just as bold, with high-ceiling spaces that create a large illusion, spacious rooms, bright shining surfaces and carefully selected neutral tones that altogether create a timeless ambience thats just perfect for a family!"
            ],
            location: "Lekki, LAGOS",
            type: "Residential",
            completionDate: "2026",
        },
        "christavanue":{
            title:"Christ avenue",
            image:"/christ/christHero.jpg",
            starImg: "/christ/christ.jpg",
            images: ["/christ/christ1.jpg","/christ/christ2.jpg","/christ/christ3.jpg","/christ/christ4.jpg"],
            content: [
                "In the day, the white reflection from this structure emanates brightly,",
                "and at night, the lighting illuminates the luxurious design work, bringing this building to life!",
                "The tasteful Christ Avenue Project shows off an impeccable residential building that stretches high,",
                "with unorthodox layered designs, botanical aesthetics for a relaxing, natural feel and cool neutral colours coated over a mix of square-shaped elements;",
                "all of these evidently at play from top to bottom, establishing elegance in architectural form"
            ],
            location: "Lekki, LAGOS",
            type: "Residential",
            completionDate: "2023"
        },
        "aduro":{
            title:"aduro court",
            image: "/aduro/aduroHero.jpg",
            starImg: "/aduro/aduro.jpg",
            images: ["/aduro/aduro1.jpg","/aduro/aduro2.jpg","/aduro/aduro3.jpg","/aduro/aduro4.jpg",],
            content: [
                "Aduro Court is more than just a residence—it’s a vibrant sanctuary inspired by the Yoruba word 'Aduro', meaning to stand or stay. Designed to embody stability, warmth, and elegance, this architectural masterpiece invites you to live where modernity and comfort intersect",
                "The sleek exterior design tells a story of seamless harmony, with glass walls that illuminate the structure with natural light, creating a living, breathing connection between the indoors and the outdoors. A signature flame-shaped emblem crowns the building, symbolizing resilience, brilliance, and the spark of life that ignites every experience here.",
                "Underneath, an expansive underground parking system ensures convenience while preserving the aesthetic purity of the exterior."
            ],
            location: "Lekki, LAGOS",
            type: "Residential",
            completionDate: "2027"
        }
    }

    if (!id || !(id in data)) {
        // return <Navigate to="/404" />; // optional redirect
        return <div className="text-center mt-20 text-lg">Project not found.</div>;
      }

    
  return (
    <>
      <ProjectShowcase header={data[id].title} backgroundImages={[data[id].image]}/>
      <ProjectDetails starImg={data[id].starImg} content={data[id].content} location={data[id].location} type={data[id].type} completionDate={data[id].completionDate} images={data[id].images}/>
      <ProjectGallery images={data[id].images}/>
      <LandScapeShowcase color="bg-[#817569]" textColor="text-[#ffffff]" header="Let’s start Creating" body="Have a project in mind? Let’s discuss how we can bring your vision to life with thoughtful, modern design. Reach out to us today!" buttonTitle="Contact us"/>
    </>
  )
}

export default index
