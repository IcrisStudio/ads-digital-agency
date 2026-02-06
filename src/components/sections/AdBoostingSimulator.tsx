import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, Zap, Users, TrendingUp, BadgePercent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { useLanguage } from "@/contexts/LanguageContext";

const categories = [
  { id: "service", labelEn: "Service Based", labelNp: "सेवा आधारित" },
  { id: "product", labelEn: "Product Based", labelNp: "उत्पादन आधारित" },
];

export const AdSimulator = () => {
  const { t, language } = useLanguage();
  const [companyName, setCompanyName] = useState("");
  const [category, setCategory] = useState<string>("");
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
    const categoryLabel = categories.find(c => c.id === category)?.[language === 'en' ? 'labelEn' : 'labelNp'] || category;
    const message = `Hi ADS Digital Agency!

📌 *Brand Details:*
• Company: ${companyName || 'Not specified'}
• Business Type: ${categoryLabel}

💰 *Ad Campaign Request:*
• Daily Budget: $${budget}
• Duration: ${days} days
• Total Budget: $${calculations.totalBudget}
• Total Cost: NPR ${calculations.totalNPR.toLocaleString()}
• Rate Used: NPR ${calculations.rate}/$1 ${calculations.isDiscounted ? '(Discounted!)' : ''}

📊 *Estimated Reach:*
${calculations.minReach.toLocaleString()} - ${calculations.maxReach.toLocaleString()} people

I'm interested in scaling my brand with your services!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/9779823974222?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="simulator" className="py-24 bg-soft-white">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
            <Calculator className="w-4 h-4" />
            {language === 'en' ? 'AD Boosting Simulator' : 'विज्ञापन बूस्टिङ सिमुलेटर'}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {language === 'en' ? 'Scale Your Brand.' : 'आफ्नो ब्रान्ड स्केल गर्नुहोस्।'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'en'
              ? 'Calculate your ad reach and investment instantly. Get real-time pricing based on your budget.'
              : 'तपाईंको विज्ञापन पहुँच र लगानी तुरुन्तै गणना गर्नुहोस्।'}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-3xl p-8 shadow-card border border-border"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              {language === 'en' ? 'Campaign Details' : 'अभियान विवरण'}
            </h3>

            {/* Company Name */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-2">
                {language === 'en' ? 'Company Name' : 'कम्पनीको नाम'}
              </label>
              <Input
                placeholder={language === 'en' ? 'Enter your brand name' : 'आफ्नो ब्रान्डको नाम लेख्नुहोस्'}
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="h-12"
              />
            </div>

            {/* Category Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-2">
                {language === 'en' ? 'Business Category' : 'व्यापार श्रेणी'}
              </label>
              <div className="grid grid-cols-2 gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setCategory(cat.id)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${category === cat.id
                        ? 'border-primary bg-primary/5 text-primary'
                        : 'border-border hover:border-primary/50 text-muted-foreground'
                      }`}
                  >
                    <span className="font-medium">
                      {language === 'en' ? cat.labelEn : cat.labelNp}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Budget Slider */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-foreground">
                  {language === 'en' ? 'Daily Budget' : 'दैनिक बजेट'}
                </label>
                <span className="text-2xl font-bold text-primary">${budget}</span>
              </div>
              <Slider
                value={[budget]}
                onValueChange={(value) => setBudget(value[0])}
                min={1}
                max={500}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>$1</span>
                <span>$500</span>
              </div>
            </div>

            {/* Days Slider */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-foreground">
                  {language === 'en' ? 'Campaign Duration' : 'अभियान अवधि'}
                </label>
                <span className="text-2xl font-bold text-primary">{days} {language === 'en' ? 'Days' : 'दिन'}</span>
              </div>
              <Slider
                value={[days]}
                onValueChange={(value) => setDays(value[0])}
                min={1}
                max={30}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>1 {language === 'en' ? 'Days' : 'दिन'}</span>
                <span>30 {language === 'en' ? 'Days' : 'दिन'}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Results */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-primary rounded-3xl p-8 shadow-float text-primary-foreground relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/30 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-accent" />
                </div>
                {language === 'en' ? 'Your Investment' : 'तपाईंको लगानी'}
              </h3>

              {/* Discount Badge */}
              {calculations.isDiscounted && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-bold mb-6"
                >
                  <BadgePercent className="w-4 h-4" />
                  {language === 'en' ? 'Discount Applied! NPR 175/$1' : 'छुट लागू! रु १७५/$१'}
                </motion.div>
              )}

              {/* Rate Display */}
              <div className="bg-accent/20 rounded-2xl p-4 mb-6 border border-accent/30">
                <div className="text-sm text-primary-foreground/80 mb-1">
                  {language === 'en' ? 'Exchange Rate' : 'विनिमय दर'}
                </div>
                <div className="text-3xl font-bold text-accent">
                  $1 = NPR {calculations.rate}
                </div>
                {!calculations.isDiscounted && (
                  <p className="text-xs text-primary-foreground/70 mt-1">
                    {language === 'en'
                      ? 'Spend $100+ total to get NPR 175/$1 rate!'
                      : 'रु १७५/$१ दर पाउन $१००+ खर्च गर्नुहोस्!'}
                  </p>
                )}
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                  <div className="text-sm text-primary-foreground/80 mb-1">
                    {language === 'en' ? 'Total Budget' : 'कुल बजेट'}
                  </div>
                  <div className="text-2xl font-bold text-accent">${calculations.totalBudget}</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                  <div className="text-sm text-primary-foreground/80 mb-1">
                    {language === 'en' ? 'Duration' : 'अवधि'}
                  </div>
                  <div className="text-2xl font-bold text-accent">{days} {language === 'en' ? 'Days' : 'दिन'}</div>
                </div>
              </div>

              {/* Total Price */}
              <div className="bg-accent/20 rounded-2xl p-6 mb-6 border border-accent/30 text-center">
                <div className="text-sm text-primary-foreground/80 mb-2">
                  {language === 'en' ? 'Total Investment' : 'कुल लगानी'}
                </div>
                <motion.div
                  key={calculations.totalNPR}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="text-4xl md:text-5xl font-bold text-white"
                >
                  NPR {calculations.totalNPR.toLocaleString()}
                </motion.div>
              </div>

              {/* Estimated Reach */}
              <div className="flex items-center gap-3 bg-white/10 rounded-xl p-4 mb-6 border border-white/10">
                <div className="w-10 h-10 rounded-full bg-accent/30 flex items-center justify-center">
                  <Users className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-primary-foreground/80">
                    {language === 'en' ? 'Estimated Reach' : 'अनुमानित पहुँच'}
                  </div>
                  <div className="text-xl font-bold text-white">
                    {calculations.minReach.toLocaleString()} - {calculations.maxReach.toLocaleString()} {language === 'en' ? 'people' : 'जना'}
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                onClick={handleWhatsAppSubmit}
                disabled={calculations.totalBudget < 10}
                className="w-full h-14 text-lg font-bold bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 shadow-lg"
              >
                {language === 'en' ? 'Scale My Brand Now' : 'मेरो ब्रान्ड स्केल गर्नुहोस्'}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
