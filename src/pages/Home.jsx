import { Link } from "react-router-dom";
import { HiArrowRight, HiArrowLongRight } from "react-icons/hi2";
import PageMeta from "../components/ui/PageMeta";
import Button from "../components/ui/Button";
import SectionHeading from "../components/ui/SectionHeading";
import CTABanner from "../components/ui/CTABanner";
import Icon from "../components/ui/Icon";
import HeroCarousel from "../components/home/HeroCarousel";
import GalleryPreview from "../components/home/GalleryPreview";
import TestimonialsSlider from "../components/home/TestimonialsSlider";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "../components/ui/AnimatedSection";
import {
  pageMeta,
  servicesPreview,
  whyChooseUs,
} from "../data/content";

export default function Home() {
  return (
    <>
      <PageMeta title={pageMeta.home.title} description={pageMeta.home.description} path="/" />

      <HeroCarousel />

      {/* Services Preview */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Our Services"
              title="Comprehensive Property Solutions"
              description="From residential communities to commercial assets, we deliver end-to-end management services tailored to your property's unique needs."
            />
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {servicesPreview.map((service) => (
              <StaggerItem key={service.title}>
                <Link
                  to={service.path}
                  className="group block h-full bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 text-secondary mb-5 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                    <Icon name={service.icon} className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-secondary text-sm font-semibold">
                    Learn more
                    <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Gallery Preview */}
      <GalleryPreview />

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <SectionHeading
                eyebrow="Why Choose Us"
                title="Trusted Management, Proven Results"
                description="We combine industry expertise with a client-first approach to deliver property management that protects your investment and elevates the resident experience."
                align="left"
              />
              <Button to="/about" variant="outline" className="mt-2">
                About Our Company
                <HiArrowLongRight className="w-5 h-5" />
              </Button>
            </AnimatedSection>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {whyChooseUs.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="bg-surface rounded-xl p-6 h-full border border-slate-100 hover:border-secondary/20 transition-colors">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/15 text-accent mb-4">
                      <Icon name={item.icon} className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Testimonials"
              title="What Our Clients Say"
              description="Hear from property owners and community leaders who trust Prudence Property with their most valuable assets."
              light
            />
          </AnimatedSection>

          <TestimonialsSlider />
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Simplify Property Management?"
        description="Let our experienced team handle the complexities of property management so you can focus on what matters most."
        buttonText="Request Proposal"
        buttonTo="/contact"
      />
    </>
  );
}
