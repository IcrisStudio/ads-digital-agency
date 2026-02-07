"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Instagram,
  Facebook,
  Music2,
} from "lucide-react";

const WHATSAPP_NUMBER = "9779823974222";

const socials = [
  {
    name: "Instagram",
    icon: Instagram,
    color: "bg-pink-500",
    link: "https://www.instagram.com/ads.digital.agency/",
  },
  {
    name: "Facebook",
    icon: Facebook,
    color: "bg-blue-600",
    link: "https://www.facebook.com/profile.php?id=61553054409471",
  },
  {
    name: "TikTok",
    icon: Music2,
    color: "bg-black",
    link: "https://www.tiktok.com/@ads.digital.agenc3",
  },
];

export const WhatsAppButton = () => {
  const [expanded, setExpanded] = useState(false);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setExpanded(true);

    // auto-close after 1.2s
    closeTimer.current = setTimeout(() => {
      setExpanded(false);
    }, 1200);
  };

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      "Hi! I'm interested in your digital marketing services."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Social icons (always present) */}
      <div className="absolute inset-0 pointer-events-none">
        <AnimatePresence>
          {socials.map((social, index) => {
            const angle = (index + 1) * 35;
            const radius = expanded ? 90 : 46;

            return (
              <motion.a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={false}
                animate={{
                  x: -Math.cos((angle * Math.PI) / 180) * radius,
                  y: -Math.sin((angle * Math.PI) / 180) * radius,
                  scale: expanded ? 1 : 0.85,
                  opacity: 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                className={`absolute w-10 h-10 rounded-full ${social.color} text-white shadow-lg flex items-center justify-center pointer-events-auto`}
                aria-label={social.name}
              >
                <social.icon className="w-4.5 h-4.5" />
              </motion.a>
            );
          })}
        </AnimatePresence>
      </div>

      {/* WhatsApp main button */}
      <motion.button
        onClick={handleWhatsApp}
        onPointerDown={openMenu} // press & hold
        whileTap={{ scale: 0.92 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 220 }}
        className="relative w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white" />

        {/* Pulse */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-25 animate-ping" />
      </motion.button>

      {/* Tooltip */}
      <motion.div
        initial={false}
        animate={{ opacity: expanded ? 1 : 0, y: expanded ? 0 : 6 }}
        transition={{ duration: 0.25 }}
        className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur border border-white/[0.08] text-xs text-foreground whitespace-nowrap"
      >
        Hold to explore 👀
      </motion.div>
    </div>
  );
};
