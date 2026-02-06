import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 }}
      className="flex items-center gap-1 bg-secondary rounded-full p-1"
    >
      <Globe className="w-4 h-4 text-muted-foreground ml-2" />
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
          language === 'en'
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('np')}
        className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
          language === 'np'
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        नेपाली
      </button>
    </motion.div>
  );
};
