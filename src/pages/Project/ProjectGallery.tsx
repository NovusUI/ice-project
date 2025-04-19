
interface Prop {
    images:string[]
}
const ProjectGallery = ({images}:Prop) => {
    
  
    return (
        <section className="bg-[#FDFDFC] px-6 md:px-16 lg:px-32 py-20">
        <div className="grid grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
          {/* Row 1 */}
          <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden group">
            <img
              src={images[0]}
              alt="Gallery 1"
              className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:scale-105 group-hover:grayscale"
            />
          </div>
          <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden group">
            <img
              src={images[1]}
              alt="Gallery 2"
              className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:scale-105 group-hover:grayscale"
            />
          </div>
  
          {/* Row 2 */}
          <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden group">
            <img
              src={images[2]}
              alt="Gallery 3"
              className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:scale-105 group-hover:grayscale"
            />
          </div>
          <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden group">
            <img
              src={images[3]}
              alt="Gallery 4"
              className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:scale-105 group-hover:grayscale"
            />
          </div>
        </div>
      </section>
    );
  };

export default ProjectGallery