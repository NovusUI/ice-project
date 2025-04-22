
interface Props {
    starImg:string;
    content: string[]
}

const ProjectShowcase = ({starImg,content}:Props) => {


    return (
      <section className="px-6 md:px-16 lg:px-32 py-20 bg-[#FDFDFC]">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Image */}
          <div className="flex-shrink-0 w-full lg:w-2/6">
            <img
              src={starImg} // replace with actual image path
              alt="Project"
              className="rounded-2xl w-full object-cover  transition-all duration-500 ease-in-out"
            />
          </div>
  
          {/* Text Content */}
          <div className="w-full lg:w-3/6">
            {/* The Idea */}
            <div className="space-y-4 text-left">
              <h3 className="font-semibold text-gray-700">The Idea</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                {
                    content.map(text=><>{text}<br /><br /></>)
                }
               
              </p>
            </div>
  
            {/* Project Details */}
            <div className="space-y-4">
              <h4 className="font-semibold">Project Details</h4>
              <hr className="border-gray-300" />
  
              <div className="flex justify-between text-sm">
                <span className="text-gray-700">Location</span>
                <span className="font-semibold">Loremipsuim</span>
              </div>
              <hr className="border-gray-300" />
  
              <div className="flex justify-between text-sm">
                <span className="text-gray-700">Project type</span>
                <span className="font-semibold">Loremipsuim</span>
              </div>
              <hr className="border-gray-300" />
  
              <div className="flex justify-between text-sm">
                <span className="text-gray-700">Completion date</span>
                <span className="font-semibold">2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  
export default ProjectShowcase