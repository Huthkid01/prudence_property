import { HiPhone, HiEnvelope, HiMapPin, HiClock } from "react-icons/hi2";
import PageMeta from "../components/ui/PageMeta";
import SectionHeading from "../components/ui/SectionHeading";
import ContactForm from "../components/forms/ContactForm";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { pageMeta, contactInfo } from "../data/content";

export default function Contact() {
  return (
    <>
      <PageMeta
        title={pageMeta.contact.title}
        description={pageMeta.contact.description}
        path="/contact"
      />

      {/* Page Hero */}
      <section className="relative bg-primary pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block text-accent text-sm font-semibold uppercase tracking-widest mb-4">
              Contact Us
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Ready to discuss your property management needs? Reach out to our
              team for consultations, proposals, and general inquiries.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <AnimatedSection className="lg:col-span-2">
              <SectionHeading
                eyebrow="Contact Information"
                title="We're Here to Help"
                description="Our team is available to answer your questions and provide expert guidance on all your property management needs."
                align="left"
              />

              <div className="space-y-6">
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="flex items-start gap-4 p-5 rounded-xl bg-surface border border-slate-100 hover:border-secondary/20 transition-colors group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-white shrink-0">
                    <HiPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted mb-1">Phone</p>
                    <p className="font-semibold text-primary group-hover:text-secondary transition-colors">
                      {contactInfo.phone}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-start gap-4 p-5 rounded-xl bg-surface border border-slate-100 hover:border-secondary/20 transition-colors group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-white shrink-0">
                    <HiEnvelope className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted mb-1">Email</p>
                    <p className="font-semibold text-primary group-hover:text-secondary transition-colors">
                      {contactInfo.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-5 rounded-xl bg-surface border border-slate-100">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-white shrink-0">
                    <HiMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted mb-1">Office Address</p>
                    <p className="font-semibold text-primary">
                      {contactInfo.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl bg-surface border border-slate-100">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-primary shrink-0">
                    <HiClock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted mb-1">Business Hours</p>
                    <p className="font-semibold text-primary">
                      Mon – Fri: 8:00 AM – 6:00 PM
                    </p>
                    <p className="text-muted text-sm">Sat: 9:00 AM – 2:00 PM</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-slate-100">
                <h2 className="font-display text-2xl font-bold text-primary mb-2">
                  Send Us a Message
                </h2>
                <p className="text-muted mb-8">
                  Complete the form below and a member of our team will respond
                  within one business day.
                </p>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="pb-20 lg:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Find Us"
              title="Visit Our Office"
              description="Located in the heart of Ikorodu, Lagos — we welcome property owners and partners to visit us in person."
            />
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-100 h-[400px] lg:h-[450px]">
              <iframe
                title="Prudence Property Office Location"
                src={contactInfo.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
