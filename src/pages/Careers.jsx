import { HiBriefcase } from "react-icons/hi2";
import PageMeta from "../components/ui/PageMeta";
import SectionHeading from "../components/ui/SectionHeading";
import CareerForm from "../components/forms/CareerForm";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "../components/ui/AnimatedSection";
import { pageMeta, careerPositions } from "../data/content";

export default function Careers() {
  return (
    <>
      <PageMeta
        title={pageMeta.careers.title}
        description={pageMeta.careers.description}
      />

      {/* Page Hero */}
      <section className="relative bg-primary pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block text-accent text-sm font-semibold uppercase tracking-widest mb-4">
              Careers
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              Build Your Career With Prudence Property
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed mb-4">
              At Prudence Property, we believe great communities start with
              great people.
            </p>
            <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
              We are always looking for motivated, professional, and
              customer-focused individuals to join our growing team.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Open Positions"
              title="Current Opportunities"
              description="Explore our current openings and find the role that matches your skills and career aspirations."
            />
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {careerPositions.map((position) => (
              <StaggerItem key={position}>
                <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-secondary/20 transition-all h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary mb-4">
                    <HiBriefcase className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-primary">{position}</h3>
                  <p className="text-muted text-sm mt-2">Full-time · Lagos, Nigeria</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <AnimatedSection>
              <SectionHeading
                eyebrow="Apply Now"
                title="Submit Your Application"
                description="Fill out the form below and upload your resume. Our HR team will review your application and contact qualified candidates."
              />
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-slate-100">
                <CareerForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
