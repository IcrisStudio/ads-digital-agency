import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Instagram, Send, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    email: "",
    package: "",
    challenges: "",
  });

  useEffect(() => {
    const handleLocationChange = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const pkg = searchParams.get('package');
      if (pkg) {
        setFormData(prev => ({ ...prev, package: pkg }));
      }
    };

    handleLocationChange(); // Initial check
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const packageText = formData.package ? `\n*Interested Package:* ${formData.package}` : "";
    const message = `*New Contact Form Submission*${packageText}\n\n*Name:* ${formData.name}\n*Brand:* ${formData.brand}\n*Email:* ${formData.email}\n*Challenges:* ${formData.challenges}`;
    const encodedMessage = encodeURIComponent(message);

    window.open(`https://wa.me/9779823974222?text=${encodedMessage}`, '_blank');
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
                  <MessageCircle className="w-6 h-6 text-accent fill-current" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">WhatsApp Us</div>
                  <a href="https://wa.me/9779823974222" target="_blank" rel="noopener noreferrer">
                    <div className="font-semibold text-foreground underline text-blue-500">+977 982-3974222</div>
                  </a>
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
                  Interested Package (Optional)
                </label>
                <Select
                  value={formData.package}
                  onValueChange={(value) => setFormData({ ...formData, package: value })}
                >
                  <SelectTrigger className="h-12 rounded-xl border-border bg-white text-base">
                    <SelectValue placeholder="Select a package" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Starter Boost">Starter Boost</SelectItem>
                    <SelectItem value="Growth Boost">Growth Boost</SelectItem>
                    <SelectItem value="Scale Boost">Scale Boost</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
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
