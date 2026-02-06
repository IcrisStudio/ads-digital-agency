import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const teamMembers = [
    {
        id: 1,
        name: "Arun Sharma",
        positionEn: "Video Editor",
        positionNp: "भिडियो सम्पादक",
        rating: 5,
        reviewEn: "Expert in cinematic transitions and color grading. Creates viral-worthy content that captivates audiences.",
        reviewNp: "सिनेमाटिक ट्रान्जिसन र कलर ग्रेडिङमा विशेषज्ञ। दर्शकहरूलाई मोहित पार्ने भाइरल सामग्री सिर्जना गर्छ।",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    },
    {
        id: 2,
        name: "Priya Thapa",
        positionEn: "Content Creator",
        positionNp: "सामग्री सिर्जनाकर्ता",
        rating: 5,
        reviewEn: "Master storyteller who transforms brand messages into engaging narratives that resonate with target audiences.",
        reviewNp: "ब्रान्ड सन्देशहरूलाई आकर्षक कथाहरूमा रूपान्तरण गर्ने मास्टर कथावाचक।",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face",
    },
    {
        id: 3,
        name: "Bikash Gurung",
        positionEn: "Cameraman",
        positionNp: "क्यामेरामान",
        rating: 5,
        reviewEn: "Professional cinematographer with 5+ years experience in commercial and brand photography.",
        reviewNp: "व्यावसायिक र ब्रान्ड फोटोग्राफीमा ५+ वर्षको अनुभव भएको पेशेवर सिनेमेटोग्राफर।",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    },
    {
        id: 4,
        name: "Sita Rai",
        positionEn: "Script Writer",
        positionNp: "स्क्रिप्ट लेखक",
        rating: 4,
        reviewEn: "Creative scriptwriter specializing in hooks that stop the scroll and drive engagement.",
        reviewNp: "स्क्रोल रोक्ने र संलग्नता बढाउने हुकहरूमा विशेषज्ञता गर्ने रचनात्मक स्क्रिप्ट लेखक।",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    },
    {
        id: 5,
        name: "Rajan Maharjan",
        positionEn: "Web Designer",
        positionNp: "वेब डिजाइनर",
        rating: 5,
        reviewEn: "UI/UX specialist creating stunning, conversion-focused landing pages and brand websites.",
        reviewNp: "आकर्षक, रूपान्तरण-केन्द्रित ल्यान्डिङ पेज र ब्रान्ड वेबसाइटहरू सिर्जना गर्ने UI/UX विशेषज्ञ।",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    },
    {
        id: 6,
        name: "Manisha Shrestha",
        positionEn: "Ad Specialist",
        positionNp: "विज्ञापन विशेषज्ञ",
        rating: 5,
        reviewEn: "Meta & Google Ads expert with proven track record of 8x+ ROAS across diverse industries.",
        reviewNp: "विभिन्न उद्योगहरूमा ८x+ ROAS को प्रमाणित ट्र्याक रेकर्ड भएको Meta र Google Ads विशेषज्ञ।",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face",
    },
];

export const Team = () => {
    const { language } = useLanguage();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const goToPrevious = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
    };

    const goToNext = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    };

    const getVisibleMembers = () => {
        const members = [];
        for (let i = -1; i <= 1; i++) {
            const index = (currentIndex + i + teamMembers.length) % teamMembers.length;
            members.push({ ...teamMembers[index], position: i });
        }
        return members;
    };

    return (
        <section id="team" className="py-24 bg-muted/30">
            <div className="container-tight">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                        <Users className="w-4 h-4" />
                        {language === 'en' ? 'Our Team' : 'हाम्रो टोली'}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        {language === 'en' ? 'Meet The Experts.' : 'विशेषज्ञहरूलाई भेट्नुहोस्।'}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {language === 'en'
                            ? 'Our talented team of creative professionals dedicated to your brand\'s success.'
                            : 'तपाईंको ब्रान्डको सफलताको लागि समर्पित हाम्रो प्रतिभाशाली टोली।'}
                    </p>
                </motion.div>

                {/* Carousel Container */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Navigation Buttons */}
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={goToPrevious}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-background shadow-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={goToNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-background shadow-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </Button>

                    {/* Cards Container */}
                    <div className="relative h-[450px] flex items-center justify-center overflow-hidden">
                        {getVisibleMembers().map((member) => (
                            <motion.div
                                key={`${member.id}-${member.position}`}
                                initial={false}
                                animate={{
                                    x: member.position * 320,
                                    scale: member.position === 0 ? 1 : 0.85,
                                    opacity: member.position === 0 ? 1 : 0.5,
                                    zIndex: member.position === 0 ? 10 : 5,
                                }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="absolute w-[280px] md:w-[300px]"
                            >
                                <div className={`bg-card rounded-3xl p-6 shadow-card border border-border transition-all duration-500 ${member.position === 0 ? 'shadow-2xl' : ''
                                    }`}>
                                    {/* Profile Image */}
                                    <div className="relative mb-6">
                                        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        {/* Status Badge */}
                                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold shadow-md">
                                            {language === 'en' ? 'Active' : 'सक्रिय'}
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="text-center">
                                        <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                                        <p className="text-primary font-medium mb-3">
                                            {language === 'en' ? member.positionEn : member.positionNp}
                                        </p>

                                        {/* Rating */}
                                        <div className="flex items-center justify-center gap-1 mb-4">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-4 h-4 ${i < member.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
                                                        }`}
                                                />
                                            ))}
                                            <span className="text-sm text-muted-foreground ml-1">({member.rating}.0)</span>
                                        </div>

                                        {/* Review */}
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            "{language === 'en' ? member.reviewEn : member.reviewNp}"
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Dots Navigation */}
                    <div className="flex items-center justify-center gap-2 mt-8">
                        {teamMembers.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setIsAutoPlaying(false);
                                    setCurrentIndex(index);
                                }}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? 'bg-primary w-8'
                                        : 'bg-primary/30 hover:bg-primary/50'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
