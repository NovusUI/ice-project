import ProjectCard from "./ProjectCard";

const projects = [
  { image: "/adetu.jpg", title: "Aditu" },
  { image: "/crux.jpg", title: "Crux, Lekki" },
  { image: "/d23.jpg", title: "D23 Apartment" },
  { image: "/hillmall.jpg", title: "Hills Mall, Abuja" },
  { image: "/quill.jpg", title: "Quill Apartment" },
  { image: "/remivilla.jpg", title: "Remi Villa" },
  { image: "/splitvi.jpg", title: "Split V1" },
  { image: "/christavenue.jpg", title: "Christ Avenue" },
  { image: "/adurocourt.jpg", title: "Aduro Court" },
];

const ProjectsGrid = () => {
  return (
    <section className="px-4 md:px-10 lg:px-20 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} image={project.image} title={project.title} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
