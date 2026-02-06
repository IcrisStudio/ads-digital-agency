import { motion } from "framer-motion";
import {
  Facebook,
  TrendingUp,
  Video,
  Monitor,
  Zap,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

/* ------------------ Clean Service Data ------------------ */

const services = [
  {
    icon: Facebook,
    title: "Meta & Instagram Advertising",
    description:
      "We specialize in Meta and Instagram ads that actually convert. From audience research and creatives to boosting, scaling, and optimization — everything is handled to maximize reach, leads, and ROI.",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing & Growth",
    description:
      "Complete digital growth strategy focused on visibility, engagement, and sales. We align content, ads, and analytics to grow your brand consistently across Meta platforms.",
  },
  {
    icon: Video,
    title: "Content Creation & AI Media",
    description:
      "High-performing short reels, AI videos, scripts, captions, and creatives designed for ads and organic reach. Everything is optimized for Meta and Instagram performance.",
  },
  {
    icon: Monitor,
    title: "Web & Landing Pages",
    description:
      "Fast, modern websites and landing pages built to support ads and conversions. Clean UI, mobile-first design, and performance-focused layouts.",
  },
];

/* ------------------ Animation ------------------ */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

/* ------------------ Services Component ------------------ */

export const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="relative py-16 md:py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-services pointer-events-none" />

      <div className="container-tight relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-medium mb-4">
            <Zap className="w-4 h-4" />
            {t("ourExpertise")}
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
            What We Do Best
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground">
            Focused services designed for growth on Meta and Instagram.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group p-6 rounded-2xl border border-white/[0.08] bg-white/5 backdrop-blur-sm
                         hover:border-accent transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>

                <div className="flex-1">
                  <h3 className="text-base font-semibold mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              <Button
                variant="link"
                className="mt-3 px-0 text-accent text-sm"
              >
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
