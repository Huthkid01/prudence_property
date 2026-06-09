import PageMeta from "../components/ui/PageMeta";
import SectionHeading from "../components/ui/SectionHeading";
import GalleryGrid from "../components/gallery/GalleryGrid";
import CTABanner from "../components/ui/CTABanner";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { pageMeta } from "../data/content";

export default function Gallery() {
  return (
    <>
      <PageMeta
        title={pageMeta.gallery.title}
        description={pageMeta.gallery.description}
        path="/gallery"
      />

      {/* Page Hero */}
      <section className="relative bg-primary pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block text-accent text-sm font-semibold uppercase tracking-widest mb-4">
              Gallery
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              Property Showcase
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Explore a selection of residential, commercial, and managed
              properties that reflect our commitment to quality and excellence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Our Portfolio"
              title="Managed Properties & Communities"
              description="Browse our gallery by category. Click any image to view it in full detail."
            />
          </AnimatedSection>

          <GalleryGrid />
        </div>
      </section>

      <CTABanner
        title="Interested in Our Management Services?"
        description="Let us help you achieve the same level of excellence for your property portfolio."
        buttonText="Request a Consultation"
        buttonTo="/contact"
      />
    </>
  );
}
