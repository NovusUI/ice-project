import { useState } from 'react';
import ImageModal from '../../components/ImageModal';
 // Make sure to create this component as shown previously

interface Props {
  header?: string;
  backgroundImages?: string[];
  starImg: string;
  content: string[];
  images: string[];
}

const ProjectShowcase = ({ starImg, content, images = [] }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length : prevIndex - 1
    );
  };

  // Combine starImg with other images for the modal
  const allImages = [starImg, ...images];

  return (
    <section className="px-6 md:px-16 lg:px-32 py-20 bg-[#FDFDFC]">
      {/* Header section if you want to keep it */}
      {/* {header && (
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold">{header}</h1>
        </div>
      )} */}

      <div className="flex flex-col md:flex-row gap-16 items-start">
        {/* Image - now clickable */}
        <div 
          className="flex-shrink-0 w-full md:w-2/6 cursor-pointer"
          onClick={() => openModal(0)} // starImg is the first image
        >
          <img
            src={starImg}
            alt="Project"
            className="rounded-2xl w-full object-cover transition-all duration-500 ease-in-out hover:opacity-90"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-3/6">
          {/* The Idea */}
          <div className="space-y-4 text-left">
            <h3 className="font-semibold text-gray-700">The Idea</h3>
            <p className="text-sm leading-relaxed text-gray-700">
              {content.map((text, index) => (
                <span key={index}>
                  {text}
                  <br /><br />
                </span>
              ))}
            </p>
          </div>

          {/* Project Details */}
          <div className="mt-12 space-y-4">
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

      {/* Modal for image viewing */}
      {isModalOpen && (
        <ImageModal
          images={allImages}
          currentIndex={currentImageIndex}
          onClose={closeModal}
          onNext={goToNext}
          onPrev={goToPrev}
        />
      )}
    </section>
  );
};

export default ProjectShowcase;