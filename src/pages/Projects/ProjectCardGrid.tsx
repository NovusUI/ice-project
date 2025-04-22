import ProjectCard from "./ProjectCard";

const projects = [
  { image: "/aditu/adetu.jpg", title: "Aditu", path: "aditu" },
  { image: "/crux/crux.jpg", title: "Crux, Lekki", path: "crux"  },
  { image: "/d23/d23.jpg", title: "D23 Apartment", path: "d23"  },
  { image: "/hillsmall/hillmall.jpg", title: "Hills Mall, Abuja", path: "hillsmall"  },
  { image: "/quill/quill.jpg", title: "Quill Apartment" , path: "quill" },
  { image: "/remivilla/remivilla.jpg", title: "Remi Villa", path: "remivilla"  },
  { image: "/split/split.jpg", title: "Split V1", path: "splitvi"  },
  { image: "/christ/christ.jpg", title: "Christ Avenue", path: "christavanue"  },
  { image: "/aduro/aduro.jpg", title: "Aduro Court", path:"aduro" },
];

const ProjectsGrid = () => {
  return (
    <section className="px-4 md:px-10 lg:px-20 py-20 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} image={project.image} title={project.title} path={project.path}/>
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
