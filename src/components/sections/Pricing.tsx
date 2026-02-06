import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter Boost",
    subtitle: "Perfect for Local Businesses",
    price: "Rs. 19,999",
    period: "/ month",
    features: [
      "2 × 4K Short Reels",
      "2 × AI Voice / AI Videos",
      "6 Graphic Design Posts",
      "Meta & Instagram Page Handling",
      "Meta & Instagram Ads Setup",
      "Minimum Boosting Budget: $14",
      "Monthly Performance Report",
      "6 Festival Posters",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Growth Boost",
    subtitle: "Most Popular Choice",
    price: "Rs. 29,999",
    period: "/ month",
    features: [
      "4 × 4K Short Reels",
      "4 × AI Voice / AI Videos",
      "10 Graphic Design Posts",
      "Complete Meta & Instagram Management",
      "Meta & Instagram Ads Setup",
      "Minimum Boosting Budget: $28",
      "Audience & Engagement Optimization",
      "Monthly Performance Report",
      "8 Festival Posters",
    ],
    cta: "Start Growing",
    featured: true,
  },
  {
    name: "Scale Boost",
    subtitle: "For High-Visibility Brands",
    price: "Rs. 39,999",
    period: "/ month",
    features: [
      "6 × 4K Short Reels",
      "6 × AI Voice / AI Videos",
      "12 Graphic Design Posts",
      "Full Meta & Instagram Strategy",
      "Meta & Instagram Ads Setup",
      "Advanced Targeting & Retargeting",
      "Minimum Boosting Budget: $35",
      "Detailed Monthly Analytics Report",
      "12 Festival Posters",
    ],
    cta: "Scale Now",
    featured: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="section-padding bg-soft-white">
      <div className="container-tight">
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`p-6 rounded-2xl ${
                plan.featured
                  ? "bg-primary text-primary-foreground scale-[1.04]"
                  : "bg-white border"
              }`}
            >
              <h3 className="text-base font-bold text-accent">{plan.name}</h3>
              <p className="text-xs text-muted-foreground mb-4">
                {plan.subtitle}
              </p>

              <div className="mb-5">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-xs ml-1">{plan.period}</span>
              </div>

              <ul className="space-y-2 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2 text-xs">
                    <Check className="w-4 h-4 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button size="sm" className="w-full" asChild>
                <a href="#contact">
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Custom Plan CTA */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-3">
            Don’t see a plan that fits your needs?
          </p>
          <Button variant="outline" asChild>
            <a href="/custom-pricing">
              Build Your Own Package →
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
