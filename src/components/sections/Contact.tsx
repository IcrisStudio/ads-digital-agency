import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Instagram, Send, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    email: "",
    challenges: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-tight">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Let's Connect
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Start Your Evolution.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Submit your details for a 15-minute high-impact brand audit. No strings attached.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Call Us</div>
                  <div className="font-semibold text-foreground">+977 982-3974222</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Instagram</div>
                  <a href="https://www.instagram.com/ads.digital.agency/" target="_blank">
                    <div className="font-semibold text-foreground underline text-blue-500">@ads.digital.agency</div>
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Facebook className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Facebook</div>
                  <a href="https://www.facebook.com/profile.php?id=61553054409471" target="_blank">
                    <div className="font-semibold text-foreground underline text-blue-500">ADS Digital Agency</div>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onSubmit={handleSubmit}
              className="lg:col-span-3 space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Full Name
                  </label>
                  <Input
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12 rounded-xl border-border bg-white"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Brand Name
                  </label>
                  <Input
                    placeholder="Acme Co."
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    className="h-12 rounded-xl border-border bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Work Email
                </label>
                <Input
                  type="email"
                  placeholder="john@brand.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12 rounded-xl border-border bg-white"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Current Challenges
                </label>
                <Textarea
                  placeholder="What's holding you back from 10X growth?"
                  value={formData.challenges}
                  onChange={(e) => setFormData({ ...formData, challenges: e.target.value })}
                  className="min-h-[120px] rounded-xl border-border bg-white resize-none"
                />
              </div>

              <Button variant="accent" size="xl" className="w-full" type="submit">
                Analyze My Brand Now
                <Send className="w-5 h-5" />
              </Button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};
