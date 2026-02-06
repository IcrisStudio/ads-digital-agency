import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const traditionalItems = [
  "Low-quality stock footage reels",
  "Post-and-forget (No engagement)",
  "Generic templates used for every client",
  'Focus on "Likes", not "Leads"',
  "Monthly reports with vanity metrics",
  "Slow communication (Days for a reply)",
];

const eliteItems = [
  "High-end 4K cinematic production",
  "Viral hook research for every reel",
  "Custom-built identity & motion design",
  "Direct-response ads targeting sales",
  "Real-time lead CRM & dashboard",
  "Instant support via dedicated Slack/WA",
];

export const Comparison = () => {
  return (
    <section id="strategy" className="section-padding bg-soft-white">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The Strategic Difference.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Why "Posting" is failing and "Scaling" is the future.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Traditional Agencies */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl bg-white border border-border shadow-card"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
              <h3 className="text-xl font-bold text-muted-foreground">Traditional Agencies</h3>
            </div>
            <ul className="space-y-4">
              {traditionalItems.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-destructive" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Elite Strategy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl bg-primary text-primary-foreground shadow-float"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-accent" />
              <h3 className="text-xl font-bold">
                <span className="text-accent">Elite Strategy</span>
                <span className="text-primary-foreground/60 ml-2">ADS Digital Agency </span>
              </h3>
            </div>
            <ul className="space-y-4">
              {eliteItems.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <span className="text-primary-foreground/90">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
      <h1></h1>
    </section>
  );
};
