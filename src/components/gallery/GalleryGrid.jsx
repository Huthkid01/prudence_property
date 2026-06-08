import { useState } from "react";
import { motion } from "framer-motion";
import { galleryImages, galleryCategories } from "../../data/content";
import Lightbox from "./Lightbox";
import { AnimatedSection } from "../ui/AnimatedSection";

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const navigateLightbox = (direction) => {
    setLightboxIndex(
      (prev) => (prev + direction + filteredImages.length) % filteredImages.length
    );
  };

  return (
    <>
      <AnimatedSection className="mb-10">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {galleryCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-secondary text-white shadow-lg shadow-secondary/20"
                  : "bg-surface text-primary hover:bg-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </AnimatedSection>

      <motion.div
        layout
        className="masonry-grid"
      >
        {filteredImages.map((image, index) => (
          <motion.div
            key={image.id}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="masonry-item group cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <div className="relative overflow-hidden rounded-xl shadow-md">
              <img
                src={image.src}
                alt={image.title}
                loading="lazy"
                className={`w-full object-cover ${image.height} transition-transform duration-500 group-hover:scale-110`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <div>
                  <p className="text-white font-semibold">{image.title}</p>
                  <p className="text-slate-300 text-sm">{image.category}</p>
                </div>
              </div>
              <div className="absolute inset-0 ring-2 ring-inset ring-accent/0 group-hover:ring-accent/50 rounded-xl transition-all duration-300" />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {lightboxIndex !== null && (
        <Lightbox
          images={filteredImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNavigate={navigateLightbox}
        />
      )}
    </>
  );
}
