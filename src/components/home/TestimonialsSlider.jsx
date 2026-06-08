import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { testimonials } from "../../data/content";

const SLIDE_INTERVAL = 5000;

function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 h-full flex flex-col">
      <div className="text-accent text-3xl sm:text-4xl font-display leading-none mb-3 sm:mb-4">
        &ldquo;
      </div>
      <p className="text-slate-200 leading-relaxed mb-6 text-base sm:text-lg flex-1">
        {testimonial.quote}
      </p>
      <div>
        <p className="text-white font-semibold text-sm sm:text-base">
          {testimonial.author}
        </p>
        <p className="text-slate-400 text-xs sm:text-sm">{testimonial.role}</p>
      </div>
    </div>
  );
}

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const updateVisible = () => {
      setVisibleCount(window.innerWidth >= 768 ? 2 : 1);
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  const next = useCallback(() => {
    setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrent((c) => (c <= 0 ? maxIndex : c - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  useEffect(() => {
    if (current > maxIndex) setCurrent(0);
  }, [current, maxIndex]);

  const slideWidth = 100 / visibleCount;

  return (
    <div
      className="relative max-w-5xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="overflow-hidden px-1">
        <motion.div
          className="flex"
          animate={{ x: `-${current * slideWidth}%` }}
          transition={{ duration: 0.65, ease: "easeInOut" }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="shrink-0 px-2 sm:px-3"
              style={{ width: `${slideWidth}%` }}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-8 sm:mt-10">
        <button
          type="button"
          onClick={prev}
          className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/10"
          aria-label="Previous testimonial"
        >
          <HiChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === current
                  ? "w-6 sm:w-8 bg-accent"
                  : "w-2 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to testimonial slide ${index + 1}`}
              aria-current={index === current ? "true" : undefined}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/10"
          aria-label="Next testimonial"
        >
          <HiChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
