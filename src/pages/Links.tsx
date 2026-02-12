import { motion } from "framer-motion";
import {
    Instagram,
    Facebook,
    Twitter,
    Globe,
    MessageCircle,
    ExternalLink,
    Music2,
    ArrowRight
} from "lucide-react";
import Logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const SOCIAL_LINKS = [
    {
        name: "Website",
        icon: Globe,
        url: "https://adsdigitalagency.com",
        color: "bg-blue-600",
        description: "Official Website"
    },
    {
        name: "WhatsApp",
        icon: MessageCircle,
        url: "https://wa.me/9779823974222",
        color: "bg-[#25D366]",
        description: "Instant Consultation"
    },
    {
        name: "Instagram",
        icon: Instagram,
        url: "https://www.instagram.com/ads.digital.agency/",
        color: "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500",
        description: "Our Creative Portfolio"
    },
    {
        name: "Facebook",
        icon: Facebook,
        url: "https://www.facebook.com/profile.php?id=61553054409471",
        color: "bg-blue-700",
        description: "Community & Updates"
    },
    {
        name: "TikTok",
        icon: Music2,
        url: "https://www.tiktok.com/@ads.digital.agenc3",
        color: "bg-black",
        description: "Trending Content"
    }
];

const Links = () => {
    return (
        <div className="min-h-screen bg-background relative overflow-hidden flex flex-col items-center py-16 px-4">
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background pointer-events-none" />
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 w-full max-w-lg mx-auto flex flex-col items-center">
                {/* Profile Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center text-center mb-12"
                >
                    <div className="relative mb-6">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
                            className="w-24 h-24 rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl"
                        >
                            <img src={Logo} alt="ADS Digital" className="w-full h-full object-cover" />
                        </motion.div>
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white shadow-lg"
                        >
                            <Globe size={16} />
                        </motion.div>
                    </div>

                    <h1 className="text-3xl font-bold text-foreground mb-2 tracking-tight">
                        Ads Digital Agency
                    </h1>
                    <p className="text-muted-foreground font-medium max-w-xs px-4">
                        Transforming Brands with Cinematic Precision & Strategic Excellence
                    </p>
                </motion.div>

                {/* Links List */}
                <div className="w-full space-y-4">
                    {SOCIAL_LINKS.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 * index }}
                            className="group relative flex items-center p-4 w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 hover:border-accent/40 transition-all duration-300 shadow-lg overflow-hidden active:scale-95"
                        >
                            <div className={`w-12 h-12 ${link.color} rounded-xl flex items-center justify-center text-white mr-4 shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                                <link.icon size={24} />
                            </div>

                            <div className="flex-1 text-left">
                                <h3 className="font-bold text-foreground group-hover:text-accent transition-colors">
                                    {link.name}
                                </h3>
                                <p className="text-xs text-muted-foreground font-medium">
                                    {link.description}
                                </p>
                            </div>

                            <div className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground group-hover:text-accent transition-colors">
                                <ArrowRight size={18} />
                            </div>

                            {/* Hover Effect Light */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        </motion.a>
                    ))}
                </div>

                {/* Contact CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 text-center"
                >
                    <div className="p-1 rounded-2xl bg-gradient-to-r from-accent/40 via-primary/40 to-accent/40">
                        <div className="bg-background/90 backdrop-blur-xl rounded-[14px] p-6">
                            <p className="text-sm font-semibold mb-4 text-muted-foreground">Need a custom strategy?</p>
                            <Button variant="accent" size="lg" className="w-full gap-2" asChild>
                                <a href="/get-quote">
                                    Get a Free Quote <ExternalLink size={18} />
                                </a>
                            </Button>
                        </div>
                    </div>

                    <p className="mt-8 text-xs text-muted-foreground font-medium flex items-center justify-center gap-1 opacity-60">
                        © 2026 ADS Digital Agency • adsdigitalagency.com
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Links;
