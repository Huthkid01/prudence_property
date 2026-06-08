import { Link } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import OptimizedImage from "../ui/OptimizedImage";
import { AnimatedSection, StaggerContainer, StaggerItem } from "../ui/AnimatedSection";
import { homeGalleryPreview } from "../../data/content";

export default function GalleryPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Our Portfolio"
            title="Homes, Apartments & Condominiums"
            description="A glimpse of the residential properties and multi-unit buildings we manage — from elegant family homes to modern blocks of flats."
          />
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 auto-rows-[140px] sm:auto-rows-[180px] lg:auto-rows-[200px]">
          {homeGalleryPreview.map((image, index) => (
            <StaggerItem
              key={image.id}
              className={`${image.span} group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-md`}
            >
              <Link to="/gallery" className="block h-full w-full">
                <OptimizedImage
                  src={image.src}
                  alt={image.title}
                  preset="preview"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block text-accent text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-1">
                    {image.category}
                  </span>
                  <p className="text-white font-semibold text-xs sm:text-sm leading-snug">
                    {image.title}
                  </p>
                </div>
                <div className="absolute inset-0 ring-2 ring-inset ring-accent/0 group-hover:ring-accent/40 rounded-xl sm:rounded-2xl transition-all duration-300" />
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection className="mt-10 flex justify-center" delay={0.2}>
          <Button to="/gallery" variant="outline" size="lg">
            See More
            <HiArrowLongRight className="w-5 h-5" />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
