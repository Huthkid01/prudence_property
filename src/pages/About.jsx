import PageMeta from "../components/ui/PageMeta";
import SectionHeading from "../components/ui/SectionHeading";
import OptimizedImage from "../components/ui/OptimizedImage";
import Icon from "../components/ui/Icon";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "../components/ui/AnimatedSection";
import { pageMeta, coreValues } from "../data/content";

const aboutImage =
  "https://images.unsplash.com/photo-1497366216548-37526070297c";

export default function About() {
  return (
    <>
      <PageMeta title={pageMeta.about.title} description={pageMeta.about.description} path="/about" />

      {/* Page Hero */}
      <section className="relative bg-primary pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block text-accent text-sm font-semibold uppercase tracking-widest mb-4">
              About Us
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              Building Better Communities
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Discover the people, values, and commitment behind Prudence
              Property&apos;s trusted management services.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <OptimizedImage
                  src={aboutImage}
                  alt="Prudence Property team at work"
                  preset="content"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <SectionHeading
                eyebrow="Company Overview"
                title="Professional Management, Lasting Partnerships"
                align="left"
              />
              <div className="space-y-5 text-muted leading-relaxed">
                <p>
                  At Prudence Property, we specialize in professional property
                  management services designed to create well-managed, safe, and
                  financially stable communities.
                </p>
                <p>
                  Our approach combines responsive communication, operational
                  efficiency, and strong attention to detail to ensure every
                  property is managed with care and professionalism.
                </p>
                <p>
                  We work closely with property owners, tenants, and residents to
                  deliver reliable management solutions that protect investments
                  and enhance community living.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Our Values"
              title="The Principles That Guide Us"
              description="Our core values shape every decision we make and every interaction we have with property owners, tenants, and communities."
            />
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {coreValues.map((value) => (
              <StaggerItem key={value.title}>
                <div className="bg-white rounded-2xl p-8 lg:p-10 text-center shadow-sm border border-slate-100 h-full hover:shadow-lg transition-shadow">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-white mx-auto mb-6">
                    <Icon name={value.icon} className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-primary mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted leading-relaxed">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
