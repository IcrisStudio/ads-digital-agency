import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Users,
  Target,
  Zap,
  BarChart3,
  MousePointer,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCountUp } from "@/hooks/useCountUp";
import { useLanguage } from "@/contexts/LanguageContext";
import marketerImage from "@/assets/hero.png";

/* ------------------ helpers ------------------ */

const generateRandomPosition = (radius = 170) => {
  const angle = (Math.random() - 0.3) * Math.PI;
  const distance = radius * (0.7 + Math.random() * 0.3);
  return {
    x: Math.cos(angle) * distance,
    y: Math.sin(angle) * distance - 30,
  };
};

/* ------------------ floating metrics ------------------ */

const orbitingMetrics = [
  { icon: TrendingUp, labelKey: "revenue", value: "+32%", delay: 0.2, color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { icon: Users, labelKey: "leads", value: "2.4K+", delay: 0.4, color: "text-blue-500", bg: "bg-blue-500/10" },
  { icon: Target, labelKey: "roas", value: "8.2x", delay: 0.6, color: "text-orange-500", bg: "bg-orange-500/10" },
  { icon: Zap, labelKey: "ctr", value: "12.8%", delay: 0.8, color: "text-purple-500", bg: "bg-purple-500/10" },
  { icon: BarChart3, labelKey: "impressions", value: "50L+", delay: 1, color: "text-rose-500", bg: "bg-rose-500/10" },
].map((metric) => ({
  ...metric,
  position: generateRandomPosition(),
}));

/* ------------------ count up components ------------------ */

const CountUpStat = ({ end, suffix, label }: { end: number; suffix: string; label: string }) => {
  const { formattedCount, ref } = useCountUp({ end, suffix, duration: 2500 });
  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl sm:text-3xl font-bold text-foreground">{formattedCount}</div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
};

const AccentCountUpStat = ({ end, suffix, label }: { end: number; suffix: string; label: string }) => {
  const { formattedCount, ref } = useCountUp({ end, suffix, duration: 2500, decimals: 1 });
  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl sm:text-3xl font-bold text-accent">{formattedCount}</div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
};

/* ------------------ main hero ------------------ */

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 md:pt-24 md:pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23000000'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-tight relative z-10 px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 mx-auto lg:mx-0"
            >
              <Zap className="w-4 h-4" />
              Performance-Driven Digital Marketing
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6"
            >
              Grow Your Business with
              <br className="hidden sm:block" />
              <span className="text-accent">Predictable Leads & Sales</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              We help brands scale using data-driven digital marketing.
              Not just views or clicks, but real, measurable revenue that grows month after month.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 lg:mb-12"
            >
              <Button variant="hero" size="xl" asChild className="w-full sm:w-auto">
                <a href="/get-quote">
                  Get Free Consultation <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button variant="hero-outline" size="xl" asChild className="w-full sm:w-auto">
                <a href="#portfolio">{t("viewPortfolio")}</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-10"
            >
              <CountUpStat end={75} suffix="+" label={t("brandsTransformed")} />
              <div className="w-px h-12 bg-border hidden sm:block" />
              <CountUpStat end={50} suffix="L+" label={t("impressions")} />
              <div className="w-px h-12 bg-border hidden sm:block" />
              <AccentCountUpStat end={98.4} suffix="%" label={t("successRate")} />
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="relative hidden lg:flex lg:order-2 items-center justify-center h-[500px] xl:h-[620px]">
            <div className="relative w-[420px] xl:w-[500px] h-[420px] xl:h-[500px]">
              <motion.img
                src={marketerImage}
                alt="Digital Marketing Expert"
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute inset-0 z-10 w-full h-full object-contain drop-shadow-2xl pointer-events-none"
              />

              {orbitingMetrics.map((metric) => (
                <motion.div
                  key={metric.labelKey}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: [metric.position.x - 8, metric.position.x + 8, metric.position.x - 8],
                    y: [metric.position.y + 8, metric.position.y - 8, metric.position.y + 8],
                  }}
                  transition={{
                    opacity: { duration: 0.5, delay: metric.delay },
                    scale: { duration: 0.5, delay: metric.delay },
                    x: { duration: 7 + Math.random() * 5, repeat: Infinity, ease: "easeInOut" },
                    y: { duration: 7 + Math.random() * 5, repeat: Infinity, ease: "easeInOut" },
                  }}
                  className="absolute left-1/2 top-1/2 z-20"
                  style={{ transform: "translate(-50%, -50%)" }}
                >
                  <div className="flex items-center gap-3 bg-white/90 dark:bg-black/70 backdrop-blur-md shadow-lg rounded-2xl px-4 py-3 border border-white/10">
                    <div className={`w-10 h-10 rounded-xl ${metric.bg} flex items-center justify-center`}>
                      <metric.icon className={`w-5 h-5 ${metric.color}`} />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">{t(metric.labelKey)}</div>
                      <div className="text-lg font-bold">{metric.value}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-muted-foreground text-sm">
              <MousePointer className="w-4 h-4 animate-bounce" />
              <span>Live performance metrics</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
