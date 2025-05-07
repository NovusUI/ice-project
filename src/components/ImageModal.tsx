// ImageModal.tsx
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageModalProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const ImageModal = ({ images, currentIndex, onClose, onNext, onPrev }: ImageModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, onNext, onPrev]);

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log(e.target, e.currentTarget);
    
    // Close only if clicking on the background (not the content)
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
        onClick={handleBackgroundClick}
      >
        <motion.button 
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-4 right-4 text-white text-2xl p-2 z-10"
        >
          &times;
        </motion.button>
        
        <div className="relative max-w-4xl w-full flex items-center justify-center" >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              initial={{ opacity: 0, x:  -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x:  100  }}
              transition={{ duration: 0.3 }}
              src={images[currentIndex]} 
              alt={`Gallery ${currentIndex + 1}`}
              className="w-full h-auto max-h-[90vh] object-contain pointer-events-none"
            />
          </AnimatePresence>
          
          {images.length > 1 && (
            <>
              <motion.button 
                onClick={onPrev}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center z-10"
                disabled={currentIndex === 0}
              >
                &larr;
              </motion.button>
              <motion.button 
                onClick={onNext}
                whileHover={currentIndex === images.length - 1 ?{backgroundColor:"#FF000080"}:{ scale: 1.1 }}
                whileTap={currentIndex === images.length - 1 ?{backgroundColor:"#FF000080"}:{ scale: 0.9 }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center z-10"
                disabled={currentIndex === images.length - 1}
              >
                &rarr;
              </motion.button>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-4 left-0 right-0 text-center text-white bg-black/50 rounded-full py-1 px-4 mx-auto w-fit pointer-events-none"
              >
                {currentIndex + 1} / {images.length}
              </motion.div>
            </>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageModal;