import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.png";
import portfolio2 from "@/assets/portfolio-2.png";
import portfolio3 from "@/assets/portfolio-3.png";

const projects = [
  {
    image: portfolio1,
    category: "Social Media",
    title: "Analytics Dashboard Launch",
  },
  {
    image: portfolio2,
    category: "Video Campaign",
    title: "Elite Brand Reveal 2024",
  },
  {
    image: portfolio3,
    category: "Brand Identity",
    title: "Premium Rebrand Suite",
  },
  {
    image: portfolio2,
    category: "Paid Ads",
    title: "Meta Campaign Success",
  },
  {
    image: portfolio1,
    category: "Content Strategy",
    title: "Viral Reel Series",
  },
  {
    image: portfolio3,
    category: "Visual Design",
    title: "Corporate Identity System",
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Case Studies
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Recent Masterpieces.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden shadow-card cursor-pointer"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-accent text-sm font-medium">{project.category}</span>
                  <h3 className="text-white text-xl font-bold mt-1">{project.title}</h3>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <ExternalLink className="w-5 h-5 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
