import { motion } from "framer-motion";
import Button from "./Button";
import { AnimatedSection } from "./AnimatedSection";

export default function CTABanner({
  title,
  description,
  buttonText,
  buttonTo = "/contact",
  buttonVariant = "accent",
}) {
  return (
    <AnimatedSection className="py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          whileInView={{ scale: [0.98, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl bg-primary px-8 py-14 sm:px-12 sm:py-16 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-transparent" />
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />

          <div className="relative z-10">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              {title}
            </h2>
            {description && (
              <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
                {description}
              </p>
            )}
            <Button to={buttonTo} variant={buttonVariant} size="lg">
              {buttonText}
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
