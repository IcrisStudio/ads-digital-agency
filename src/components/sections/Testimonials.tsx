"use client";

import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { Star, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  { quote: "Best agency for reels in Nepal.", name: "Rajesh Shrestha", role: "CEO, Foodies Hub", rating: 5 },
  { quote: "My engagement tripled in 2 weeks.", name: "Anjali KC", role: "Fitness Coach", rating: 5 },
  { quote: "Quality leads that actually close.", name: "Suman Thapa", role: "Real Estate Lead", rating: 5 },
  { quote: "They made my brand look global.", name: "Pooja Gupta", role: "Boutique Owner", rating: 5 },
  { quote: "Unbeatable strategy and support.", name: "Nischal G.", role: "Tech Start-up", rating: 5 },
  { quote: "High ROAS on our Meta campaigns.", name: "Binita M.", role: "Jewelry Brand", rating: 5 },
  { quote: "The editing quality is world-class.", name: "Arjun L.", role: "Coffee Chain", rating: 5 },
  { quote: "Professional, creative, and fast.", name: "Deepa S.", role: "Skin Care", rating: 5 },
];

const extendedTestimonials = [...testimonials, ...testimonials];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(testimonials.length);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 4800);
    return () => clearInterval(timer);
  }, [isPaused]);

  // Infinite loop handling
  useEffect(() => {
    if (activeIndex >= testimonials.length * 2) {
      setActiveIndex(testimonials.length);
    }
  }, [activeIndex]);

  const goToPrev = () => {
    setActiveIndex((prev) => prev - 1);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  const goToNext = () => {
    setActiveIndex((prev) => prev + 1);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  const goToIndex = (index: number) => {
    setActiveIndex(testimonials.length + (index % testimonials.length));
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-background/90 to-background">
      {/* Floating subtle icons */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-16 left-12">
          <Sparkles className="w-5 h-5 text-accent/60" />
        </motion.div>
        <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 7, repeat: Infinity, delay: 1.2, ease: "easeInOut" }} className="absolute bottom-24 right-16">
          <Star className="w-4 h-4 text-accent/50" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium uppercase tracking-wide mb-5">
            <Star className="w-4 h-4" />
            Client Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real results from brands we've helped grow
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div
          className="relative h-[480px] sm:h-[520px] perspective-[1100px] md:perspective-[1400px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Cards */}
          <div className="relative w-full h-full flex items-center justify-center">
            <AnimatePresence mode="popLayout">
              {extendedTestimonials.slice(activeIndex - 2, activeIndex + 3).map((t, idx) => {
                const position = idx - 2;
                const isActive = position === 0;
                const distance = Math.abs(position);

                return (
                  <motion.div
                    key={`${t.name}-${activeIndex + idx}`}
                    className="absolute w-[320px] sm:w-[360px] md:w-[380px]"
                    initial={{ opacity: 0, scale: 0.75, rotateY: 0, x: 0, z: -150 }}
                    animate={{
                      opacity: isActive ? 1 : Math.max(0.4, 0.85 - distance * 0.25),
                      scale: isActive ? 1.06 : 0.88 - distance * 0.1,
                      rotateY: position * -22,
                      rotateX: isActive ? 0 : position * -4,
                      x: position * 140,
                      z: isActive ? 100 : -distance * 80,
                      filter: isActive ? "brightness(1.05)" : "brightness(0.8)",
                      zIndex: 10 - distance,
                    }}
                    exit={{ opacity: 0, scale: 0.7, z: -200 }}
                    transition={{ type: "spring", stiffness: 180, damping: 24 }}
                    whileHover={isActive ? { scale: 1.09, rotateY: 0, rotateX: 2 } : {}}
                  >
                    <div className="h-full p-7 sm:p-8 rounded-2xl bg-gradient-to-br from-white/8 via-white/4 to-white/2 backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-accent/15 transition-shadow duration-400">
                      {/* Stars - bright yellow */}
                      <div className="flex gap-1 mb-5">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5"
                            fill="#fbbf24"
                            stroke="#fbbf24"
                            strokeWidth={1.2}
                          />
                        ))}
                      </div>

                      <p className="text-foreground/95 font-medium text-base sm:text-lg leading-relaxed mb-6">
                        "{t.quote}"
                      </p>

                      <div>
                        <div className="font-semibold text-foreground text-base">{t.name}</div>
                        <div className="text-sm text-muted-foreground mt-0.5">{t.role}</div>
                      </div>

                      {isActive && (
                        <motion.div
                          className="absolute top-5 right-5 opacity-70"
                          animate={{ scale: [1, 1.25, 1], rotate: 360 }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        >
                          <Sparkles className="w-5 h-5 text-accent/80" />
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Navigation Arrows - subtle */}
          <button
            onClick={() => { goToPrev(); }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 backdrop-blur-lg border border-white/10 text-white/80 hover:bg-black/50 hover:text-white transition-all"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => { goToNext(); }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 backdrop-blur-lg border border-white/10 text-white/80 hover:bg-black/50 hover:text-white transition-all"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Minimal Dots Indicator */}
        <div className="flex justify-center gap-2.5 mt-10">
          {testimonials.map((_, idx) => {
            const isActiveDot = (activeIndex % testimonials.length) === idx;
            return (
              <button
                key={idx}
                onClick={() => goToIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-400 ${
                  isActiveDot
                    ? "bg-accent scale-125 shadow-md shadow-accent/40"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};