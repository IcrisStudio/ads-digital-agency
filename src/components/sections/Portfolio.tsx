import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Volume2, VolumeX } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import video1 from "@/assets/Videos/1.mp4";
import video2 from "@/assets/Videos/2.mp4";
import video3 from "@/assets/Videos/3.mp4";
import video4 from "@/assets/Videos/4.mp4";

const videoShowcase = [
  {
    src: video1,
    category: "Commercial",
    title: "Brand Storytelling",
  },
  {
    src: video2,
    category: "Product",
    title: "Elite Product Reveal",
  },
  {
    src: video3,
    category: "Social Media",
    title: "Viral Motion Content",
  },
  {
    src: video4,
    category: "Production",
    title: "Cinematic Experience",
  },
];

export const Portfolio = () => {
  const [unmutedIndex, setUnmutedIndex] = useState<number | null>(null);

  const toggleMute = (index: number) => {
    setUnmutedIndex(unmutedIndex === index ? null : index);
  };

  return (
    <section id="portfolio" className="section-padding overflow-hidden">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Video Showcase
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Digital Suitcase.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience our handpicked selection of cinematic masterpieces and high-impact digital campaigns.
          </p>
        </motion.div>

        <div className="relative px-12 md:px-4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {videoShowcase.map((video, index) => (
                <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative rounded-3xl overflow-hidden shadow-2xl bg-black aspect-[9/16] md:aspect-[3/4] lg:aspect-[9/16]"
                  >
                    <video
                      src={video.src}
                      autoPlay
                      muted={unmutedIndex !== index}
                      loop
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Mute Toggle */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMute(index);
                      }}
                      className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-white/20 hover:bg-black/60 transition-all shadow-lg"
                      aria-label={unmutedIndex === index ? "Mute" : "Unmute"}
                    >
                      {unmutedIndex === index ? (
                        <Volume2 size={18} className="text-accent" />
                      ) : (
                        <VolumeX size={18} />
                      )}
                    </button>

                    {/* Glassmorphism Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-all duration-500">
                      <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="inline-block px-3 py-1 bg-accent/20 backdrop-blur-md border border-accent/30 rounded-full text-accent text-xs font-semibold mb-3">
                          {video.category}
                        </span>
                        <h3 className="text-white text-2xl font-bold leading-tight">
                          {video.title}
                        </h3>

                        <div className="mt-6 flex items-center gap-2 text-white/70 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white">
                            <Play size={16} fill="currentColor" />
                          </div>
                          Watch Project
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="hidden md:block">
              <CarouselPrevious className="-left-12 h-12 w-12 border-none bg-accent/10 hover:bg-accent text-accent hover:text-white transition-all backdrop-blur-sm" />
              <CarouselNext className="-right-12 h-12 w-12 border-none bg-accent/10 hover:bg-accent text-accent hover:text-white transition-all backdrop-blur-sm" />
            </div>

            {/* Mobile Controls */}
            <div className="flex justify-center gap-4 mt-8 md:hidden">
              <CarouselPrevious className="static translate-y-0 h-10 w-10 border-none bg-accent/20 text-accent hover:bg-accent hover:text-white transition-all" />
              <CarouselNext className="static translate-y-0 h-10 w-10 border-none bg-accent/20 text-accent hover:bg-accent hover:text-white transition-all" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
