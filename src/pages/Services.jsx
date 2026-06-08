import { HiCheckCircle } from "react-icons/hi2";
import PageMeta from "../components/ui/PageMeta";
import CTABanner from "../components/ui/CTABanner";
import Icon from "../components/ui/Icon";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { pageMeta, servicesDetail } from "../data/content";

export default function Services() {
  return (
    <>
      <PageMeta
        title={pageMeta.services.title}
        description={pageMeta.services.description}
      />

      {/* Page Hero */}
      <section className="relative bg-primary pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block text-accent text-sm font-semibold uppercase tracking-widest mb-4">
              Our Services
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              Tailored Property Management Solutions
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Comprehensive services designed to protect your investment and
              deliver exceptional results for every property type.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24 lg:space-y-32">
            {servicesDetail.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 0.05}>
                <div
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center scroll-mt-28 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-72 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                      <div className="absolute bottom-6 left-6 flex h-14 w-14 items-center justify-center rounded-xl bg-accent text-primary">
                        <Icon name={service.icon} className="w-7 h-7" />
                      </div>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <span className="inline-block text-secondary text-sm font-semibold uppercase tracking-widest mb-3">
                      Service {index + 1}
                    </span>
                    <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted leading-relaxed mb-8">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-primary"
                        >
                          <HiCheckCircle className="w-5 h-5 text-accent shrink-0" />
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Need a Custom Management Plan?"
        description="Contact us today to discuss your property's specific requirements and receive a tailored proposal."
        buttonText="Request a Consultation"
        buttonTo="/contact"
      />
    </>
  );
}
