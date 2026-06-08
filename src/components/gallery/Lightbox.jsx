import { motion, AnimatePresence } from "framer-motion";
import { HiXMark, HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useEffect } from "react";

export default function Lightbox({ images, currentIndex, onClose, onNavigate }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate(-1);
      if (e.key === "ArrowRight") onNavigate(1);
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onNavigate]);

  const image = images[currentIndex];
  if (!image) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
        onClick={onClose}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          aria-label="Close lightbox"
        >
          <HiXMark className="w-6 h-6" />
        </button>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onNavigate(-1);
              }}
              className="absolute left-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Previous image"
            >
              <HiChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onNavigate(1);
              }}
              className="absolute right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Next image"
            >
              <HiChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        <motion.div
          key={image.id}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative max-h-[85vh] max-w-5xl w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={image.src}
            alt={image.title}
            className="w-full max-h-[85vh] object-contain rounded-lg"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
            <p className="text-white font-semibold text-lg">{image.title}</p>
            <p className="text-slate-300 text-sm">{image.category}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
