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
                "Aditu a visionary retail and lifestyle hub that redefines the ordinary shopping experience. Inspired by the Yoruba word for `mystery,` this destination invites you to explore, connect, and indulge.",
                "From sweeping glass façades that transform sunlight into a dynamic play of reflections, to its signature curvilinear emblem—a nod to the mystery and allure behind every turn—Aditu isn’t just a building; it’s an experience.",
                "Elevating convenience, our subterranean smart parking system ensures that your journey begins stress-free. Moving indoors, every detail is designed to captivate, with lush gardens, ambient lighting, and bold architectural elements that weave the interior with the exterior seamlessly."
            ]
        },
        "crux" : {
            title: 'crux, lekki',
            image: "/crux/cruxHero.jpg",
            starImg: "/crux/crux.jpg",
            images: ["/crux/crux1.jpg","/crux/crux2.jpg","/crux/crux3.jpg","/crux/crux4.jpg",],
            content: [
                "a retail and lifestyle destination where innovation meets sophistication. Designed to be more than a mall, Crux immerses visitors in a world of seamless luxury.",
                "From sleek glass expanses that invite natural light to architectural accents echoing Lekki's coastal charm, every detail of Crux tells a story. Its signature X-shaped emblem signifies connection and crossroads—a meeting point for culture, fashion, and fine living.",
                "Beneath the surface, an expansive underground parking system ensures hassle-free accessibility, while the upper levels offer meticulously curated spaces, blending local elegance with global grandeur."
            ]
        },
        "d23" : {
            title: 'd23 apartment',
            image: "/d23/d23Hero.jpg",
            starImg: "/d23/d23.jpg",
            images: ["/d23/d231.jpg","/d23/d232.jpg","/d23/d233.jpg", "/d23/d234.jpg"],
            content: [
                "a retail and lifestyle destination where innovation meets sophistication. Designed to be more than a mall, Crux immerses visitors in a world of seamless luxury.",
                "From sleek glass expanses that invite natural light to architectural accents echoing Lekki's coastal charm, every detail of Crux tells a story. Its signature X-shaped emblem signifies connection and crossroads—a meeting point for culture, fashion, and fine living.",
                "Beneath the surface, an expansive underground parking system ensures hassle-free accessibility, while the upper levels offer meticulously curated spaces, blending local elegance with global grandeur."
            ]
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
            ]
        },
        "quill":{
            title:"quill apartment",
            image:"/quill/quillHero.jpg",
            starImg: "/quill/quill.jpg",
            images: ["/quill/quill1.jpg","/quill/quill2.jpg","/quill/quill.jpg","/quill/quill4.jpg",],
            content: [
                "t’s a story waiting to unfold, where each detail has been crafted to inspire and elevate modern living. From its name, which evokes elegance and creativity, to its distinctive architectural design, Quill writes a narrative of sophistication and style.",
                "The exterior is a masterpiece of sleek lines and glass accents, reflecting the vibrant cityscape while inviting natural light to flow effortlessly indoors. The building’s signature feather-inspired emblem symbolizes grace and aspiration, perfectly capturing the essence of refined living.",
                "Beneath the surface, a state-of-the-art underground parking facility ensures residents’ comfort and convenience, blending practicality with cutting-edge design."
            ]
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
            ]

        },
        "splitvi":{
            title:"split vi",
            image: "/split/splitHero.jpg",
            starImg: "/split/split.jpg", 
            images: ["/split/split1.jpg","/split/split.jpg","/split/split3.jpg","/split/split4.jpg"],
            content:[
                "The Split VI Project invites you to explore what a grand version of home should feel like.",
                "As you’re ushered into this impeccably layered building, it’s easy to spot a sleek consistent design on the exterior.",
                "The textural elements in the interior are just as bold, with high-ceiling spaces that create a large illusion, spacious rooms, bright shining surfaces and carefully selected neutral tones that altogether create a timeless ambience that’s just perfect for a family!  "
            ]
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
            ]
        }
    }

    if (!id || !(id in data)) {
        // return <Navigate to="/404" />; // optional redirect
        return <div className="text-center mt-20 text-lg">Project not found.</div>;
      }

    
  return (
    <>
      <ProjectShowcase header={data[id].title} backgroundImages={[data[id].image]}/>
      <ProjectDetails starImg={data[id].starImg} content={data[id].content}/>
      <ProjectGallery images={data[id].images}/>
      <LandScapeShowcase color="bg-[#817569]" textColor="text-[#ffffff]" header="Let’s start Creating" body="Have a project in mind? Let’s discuss how we can bring your vision to life with thoughtful, modern design. Reach out to us today!" buttonTitle="Contact us"/>
    </>
  )
}

export default index
