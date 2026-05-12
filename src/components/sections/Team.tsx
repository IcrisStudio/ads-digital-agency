import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import laxmanPhoto from "@/assets/team-member-images/Laxman.png";
import salinaPhoto from "@/assets/team-member-images/salina.jpg";
import mukeshPhoto from "@/assets/team-member-images/mukesh.png";
import adsDigitalPhoto from "@/assets/team-member-images/ads-digital.png";

/** All portrait assets in `src/assets/team-member-images/` — order is display order only. */
const teamImages = [
  { id: "ads-digital", src: adsDigitalPhoto, altEn: "ADS Digital team", altNp: "ADS Digital टोली" },
  { id: "laxman", src: laxmanPhoto, altEn: "Team member portrait", altNp: "टोली सदस्य पोर्ट्रेट" },
  { id: "mukesh", src: mukeshPhoto, altEn: "Team member portrait", altNp: "टोली सदस्य पोर्ट्रेट" },
  { id: "salina", src: salinaPhoto, altEn: "Team member portrait", altNp: "टोली सदस्य पोर्ट्रेट" },
] as const;

type TeamImageItem = (typeof teamImages)[number];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export const Team = () => {
  const { language } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [active, setActive] = useState<TeamImageItem | null>(null);

  const openLightbox = useCallback((item: TeamImageItem) => {
    setActive(item);
    setLightboxOpen(true);
  }, []);

  const handleOpenChange = useCallback((open: boolean) => {
    setLightboxOpen(open);
    if (!open) setActive(null);
  }, []);

  return (
    <section id="team" className="py-16 md:py-24 bg-muted/30">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            {language === "en" ? "Our Team" : "हाम्रो टोली"}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            {language === "en" ? "Meet The Experts." : "विशेषज्ञहरूलाई भेट्नुहोस्।"}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-1">
            {language === "en"
              ? "Portrait cards from our studio — tap a card to view full size."
              : "हाम्रो स्टुडियोका पोर्ट्रेट कार्डहरू — पूर्ण आकार हेर्न कार्डमा ट्याप गर्नुहोस्।"}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-32px" }}
          className={cn(
            "grid w-full max-w-7xl mx-auto gap-3 sm:gap-5 md:gap-6",
            /* Fluid columns: 1 → 2 → 4 without oversized cards on huge screens */
            "grid-cols-[repeat(auto-fill,minmax(min(100%,9.5rem),1fr))]",
            "sm:grid-cols-[repeat(auto-fill,minmax(min(100%,11rem),1fr))]",
            "lg:grid-cols-4 lg:gap-7"
          )}
        >
          {teamImages.map((item) => (
            <motion.button
              key={item.id}
              type="button"
              variants={itemVariants}
              onClick={() => openLightbox(item)}
              className={cn(
                "group relative w-full text-left rounded-2xl sm:rounded-3xl border border-border bg-card shadow-card overflow-hidden",
                "ring-offset-background transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                "hover:shadow-lg active:scale-[0.99] touch-manipulation"
              )}
            >
              <div className="relative w-full aspect-[9/16] bg-muted">
                <img
                  src={item.src}
                  alt={language === "en" ? item.altEn : item.altNp}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] group-focus-visible:scale-[1.02]"
                />
              </div>
            </motion.button>
          ))}
        </motion.div>

        <Dialog open={lightboxOpen} onOpenChange={handleOpenChange}>
          <DialogContent
            className={cn(
              "left-1/2 top-1/2 z-[110] translate-x-[-50%] translate-y-[-50%]",
              "flex max-h-[min(92vh,900px)] w-[min(96vw,52rem)] max-w-none flex-col gap-0 overflow-hidden p-0",
              "border bg-card shadow-2xl sm:rounded-2xl"
            )}
            onOpenAutoFocus={(e) => e.preventDefault()}
          >
            {active && (
              <>
                <DialogTitle className="sr-only">
                  {language === "en" ? active.altEn : active.altNp}
                </DialogTitle>
                <div className="flex min-h-0 flex-1 items-center justify-center px-3 pb-4 pt-14 sm:px-6 sm:pb-6 sm:pt-16">
                  <img
                    src={active.src}
                    alt={language === "en" ? active.altEn : active.altNp}
                    className="max-h-[min(82vh,760px)] w-auto max-w-full object-contain"
                  />
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
