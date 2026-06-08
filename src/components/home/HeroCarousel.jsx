import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import Button from "../ui/Button";
import OptimizedImage from "../ui/OptimizedImage";
import { heroSlides } from "../../data/content";
import { preloadImages } from "../../utils/images";

const SLIDE_INTERVAL = 3000;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback((index, dir) => {
    setDirection(dir);
    setCurrent((index + heroSlides.length) % heroSlides.length);
  }, []);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % heroSlides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  useEffect(() => {
    preloadImages(heroSlides.map((s) => s.image));
  }, []);

  const slide = heroSlides[current];

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-primary"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Featured property management highlights"
    >
      {/* Background slides — crossfade, no gap */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <OptimizedImage
              src={slide.image}
              alt={slide.alt}
              preset="hero"
              priority={current === 0}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/75 to-primary/40" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content — enters after image, slides from left or right */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-36 sm:pb-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, x: direction * 80 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.4, duration: 0.5, ease: "easeOut" },
            }}
            exit={{
              opacity: 0,
              x: direction * -40,
              transition: { duration: 0.25, ease: "easeIn" },
            }}
            className="max-w-3xl"
          >
            <span className="inline-block text-accent text-sm font-semibold uppercase tracking-widest mb-4">
              {slide.eyebrow}
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {slide.headline}
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-4">
              {slide.subheadline}
            </p>
            {slide.supportingText && (
              <p className="text-slate-300 leading-relaxed mb-8 max-w-2xl">
                {slide.supportingText}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to={slide.primaryCta.to} variant="accent" size="lg">
                {slide.primaryCta.text}
              </Button>
              <Button to={slide.secondaryCta.to} variant="secondary" size="lg">
                {slide.secondaryCta.text}
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Desktop side arrows */}
      <button
        type="button"
        onClick={prev}
        className="hidden md:flex absolute left-6 lg:left-8 top-1/2 -translate-y-1/2 z-10 h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 transition-colors border border-white/10"
        aria-label="Previous slide"
      >
        <HiChevronLeft className="w-6 h-6" />
      </button>
      <button
        type="button"
        onClick={next}
        className="hidden md:flex absolute right-6 lg:right-8 top-1/2 -translate-y-1/2 z-10 h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 transition-colors border border-white/10"
        aria-label="Next slide"
      >
        <HiChevronRight className="w-6 h-6" />
      </button>

      {/* Mobile + dot navigation */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3 sm:gap-4">
        <button
          type="button"
          onClick={prev}
          className="md:hidden flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 transition-colors border border-white/10"
          aria-label="Previous slide"
        >
          <HiChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2">
          {heroSlides.map((s, index) => (
            <button
              key={s.id}
              type="button"
              onClick={() => goTo(index, index >= current ? 1 : -1)}
              className={`relative h-2 rounded-full transition-all duration-300 ${
                index === current
                  ? "w-7 sm:w-8 bg-accent"
                  : "w-2 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}: ${s.headline}`}
              aria-current={index === current ? "true" : undefined}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          className="md:hidden flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 transition-colors border border-white/10"
          aria-label="Next slide"
        >
          <HiChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
