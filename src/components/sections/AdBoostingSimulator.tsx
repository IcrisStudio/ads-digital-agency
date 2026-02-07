import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  Zap,
  Users,
  TrendingUp,
  BadgePercent,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { useLanguage } from "@/contexts/LanguageContext";

/* ------------------ Data ------------------ */

const categories = [
  { id: "service", labelEn: "Service Based", labelNp: "सेवा आधारित" },
  { id: "product", labelEn: "Product Based", labelNp: "उत्पादन आधारित" },
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

/* ------------------ Component ------------------ */

export const AdSimulator = () => {
  const { language } = useLanguage();

  const [companyName, setCompanyName] = useState("");
  const [category, setCategory] = useState("");
  const [budget, setBudget] = useState(1);
  const [days, setDays] = useState(1);

  const calculations = useMemo(() => {
    const totalBudget = budget * days;
    const isDiscounted = totalBudget > 100;
    const rate = isDiscounted ? 175 : 180;
    const totalNPR = totalBudget * rate;
    const minReach = Math.round((totalBudget / 2) * 1000);
    const maxReach = Math.round((totalBudget / 2) * 3000);
    return { totalBudget, isDiscounted, rate, totalNPR, minReach, maxReach };
  }, [budget, days]);

  const handleWhatsAppSubmit = () => {
    const categoryLabel =
      categories.find(c => c.id === category)?.[
        language === "en" ? "labelEn" : "labelNp"
      ] || category;

    const message = `Hi ADS Digital Agency!

Company: ${companyName || "Not specified"}
Business Type: ${categoryLabel}

Daily Budget: $${budget}
Duration: ${days} days
Total Budget: $${calculations.totalBudget}
Total Cost: NPR ${calculations.totalNPR}

Estimated Reach:
${calculations.minReach} - ${calculations.maxReach} people`;

    window.open(
      `https://wa.me/9779823974222?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section id="simulator" className="relative py-16 md:py-24">
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
            <Calculator className="w-4 h-4" />
            {language === "en"
              ? "Ad Budget Simulator"
              : "विज्ञापन बजेट सिमुलेटर"}
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
            {language === "en"
              ? "Plan Your Ad Investment"
              : "आफ्नो विज्ञापन योजना बनाउनुहोस्"}
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground">
            {language === "en"
              ? "Estimate reach, cost, and scale your brand with confidence."
              : "लागत, पहुँच र परिणाम अनुमान गर्नुहोस्।"}
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {/* Left: Form */}
          <motion.div
            variants={itemVariants}
            className="p-6 rounded-2xl border border-white/[0.08] bg-white/5 backdrop-blur-sm"
          >
            <h3 className="flex items-center gap-3 text-lg font-semibold mb-6">
              <div className="p-2 rounded-xl bg-accent/10">
                <Zap className="w-5 h-5 text-accent" />
              </div>
              {language === "en" ? "Campaign Details" : "अभियान विवरण"}
            </h3>

            <div className="space-y-5">
              <Input
                placeholder={
                  language === "en"
                    ? "Company name"
                    : "कम्पनीको नाम"
                }
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="h-11"
              />

              <div className="grid grid-cols-2 gap-3">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setCategory(cat.id)}
                    className={`p-4 rounded-xl border text-sm transition-colors ${
                      category === cat.id
                        ? "border-accent bg-accent/10 text-accent"
                        : "border-white/[0.08] text-muted-foreground hover:border-accent"
                    }`}
                  >
                    {language === "en" ? cat.labelEn : cat.labelNp}
                  </button>
                ))}
              </div>

              <div>
                <div className="flex justify-between mb-2 text-sm">
                  <span>{language === "en" ? "Daily Budget" : "दैनिक बजेट"}</span>
                  <span className="font-semibold text-accent">${budget}</span>
                </div>
                <Slider
                  value={[budget]}
                  onValueChange={(v) => setBudget(v[0])}
                  min={1}
                  max={100}
                  step={1}
                />
              </div>

              <div>
                <div className="flex justify-between mb-2 text-sm">
                  <span>{language === "en" ? "Duration" : "अवधि"}</span>
                  <span className="font-semibold text-accent">
                    {days} {language === "en" ? "Days" : "दिन"}
                  </span>
                </div>
                <Slider
                  value={[days]}
                  onValueChange={(v) => setDays(v[0])}
                  min={1}
                  max={30}
                  step={1}
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Results */}
          <motion.div
            variants={itemVariants}
            className="p-6 rounded-2xl border border-white/[0.08] bg-white/5 backdrop-blur-sm"
          >
            <h3 className="flex items-center gap-3 text-lg font-semibold mb-6">
              <div className="p-2 rounded-xl bg-accent/10">
                <TrendingUp className="w-5 h-5 text-accent" />
              </div>
              {language === "en" ? "Estimated Results" : "अनुमानित नतिजा"}
            </h3>

            {calculations.isDiscounted && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-medium mb-4">
                <BadgePercent className="w-4 h-4" />
                Discount Applied
              </div>
            )}

            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-sm">
                <span>Total Budget</span>
                <span className="font-semibold">
                  ${calculations.totalBudget}
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span>Exchange Rate</span>
                <span className="font-semibold">
                  NPR {calculations.rate}/$
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span>Total Cost</span>
                <span className="font-semibold text-accent">
                  NPR {calculations.totalNPR.toLocaleString()}
                </span>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <Users className="w-4 h-4 text-accent" />
                {calculations.minReach.toLocaleString()} –{" "}
                {calculations.maxReach.toLocaleString()} reach
              </div>
            </div>

            <Button
              onClick={handleWhatsAppSubmit}
              disabled={calculations.totalBudget < 10}
              className="w-full"
            >
              {language === "en"
                ? "Scale My Brand"
                : "मेरो ब्रान्ड स्केल गर्नुहोस्"}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
