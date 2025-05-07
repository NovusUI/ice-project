// ProjectGallery.tsx
import { useState } from 'react';
import ImageModal from '../../components/ImageModal';

interface Prop {
  images: string[];
}

const ProjectGallery = ({ images }: Prop) => {
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
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-[#FDFDFC] px-6 md:px-16 lg:px-32 py-20">
      <div className="grid sm:grid-cols-3 gap-2 sm:gap-6 auto-rows-[300px] md:auto-rows-[400px]">
        {/* Row 1 */}
        <div 
          className="col-span-2 row-span-1 rounded-2xl overflow-hidden group cursor-pointer"
          onClick={() => openModal(0)}
        >
          <img
            src={images[0]}
            alt="Gallery 1"
            className="w-full h-full object-cover object-top transition duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
        <div 
          className="col-span-1 row-span-1 rounded-2xl overflow-hidden group cursor-pointer"
          onClick={() => openModal(1)}
        >
          <img
            src={images[1]}
            alt="Gallery 2"
            className="w-full h-full object-cover object-top transition duration-300 ease-in-out group-hover:scale-105"
          />
        </div>

        {/* Row 2 */}
        <div 
          className="col-span-1 row-span-1 rounded-2xl overflow-hidden group cursor-pointer"
          onClick={() => openModal(2)}
        >
          <img
            src={images[2]}
            alt="Gallery 3"
            className="w-full h-full object-cover object-top transition duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
        <div 
          className="col-span-2 row-span-1 rounded-2xl overflow-hidden group cursor-pointer"
          onClick={() => openModal(3)}
        >
          <img
            src={images[3]}
            alt="Gallery 4"
            className="w-full h-full object-cover object-top transition duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
      </div>

      {isModalOpen && (
        <ImageModal
          images={images}
          currentIndex={currentImageIndex}
          onClose={closeModal}
          onNext={goToNext}
          onPrev={goToPrev}
        />
      )}
    </section>
  );
};

export default ProjectGallery;