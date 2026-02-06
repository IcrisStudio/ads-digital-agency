import { useState } from "react";
import { motion } from "framer-motion";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { ArrowRight, Check, Video, Sparkles, Image, Megaphone, FileText, Calendar } from "lucide-react";

const CustomPricing = () => {
    // Service quantities
    const [reels4K, setReels4K] = useState(2);
    const [aiVideos, setAiVideos] = useState(2);
    const [graphicPosts, setGraphicPosts] = useState(6);
    const [festivalPosters, setFestivalPosters] = useState(2);
    const [adBudget, setAdBudget] = useState(14);

    // Additional services
    const [includeManagement, setIncludeManagement] = useState(true);
    const [includeReporting, setIncludeReporting] = useState(true);
    const [includeCompetitorAnalysis, setIncludeCompetitorAnalysis] = useState(false);
    const [includeTargeting, setIncludeTargeting] = useState(false);

    // Pricing constants
    const PRICES = {
        reel4K_single: 5000,  // Price for 1 reel
        reel4K_bulk: 4000,     // Price for 2+ reels
        aiVideo: 1700,
        graphicPost: 500,
        festivalPoster: 500,
        adBudgetRate: 170,
        management: 4000,
        reporting: 2000,
        competitorAnalysis: 3000,
        targeting: 3000,
    };

    // Get the current price per 4K reel based on quantity
    const getReel4KPrice = () => {
        return reels4K === 1 ? PRICES.reel4K_single : PRICES.reel4K_bulk;
    };

    // Calculate total
    const calculateTotal = () => {
        let total = 0;
        // Tiered pricing for 4K reels: Rs. 5,000 for 1 reel, Rs. 4,000 per reel for 2+
        total += reels4K * getReel4KPrice();
        total += aiVideos * PRICES.aiVideo;
        total += graphicPosts * PRICES.graphicPost;
        total += festivalPosters * PRICES.festivalPoster;
        total += adBudget * PRICES.adBudgetRate;

        if (includeManagement) total += PRICES.management;
        if (includeReporting) total += PRICES.reporting;
        if (includeCompetitorAnalysis) total += PRICES.competitorAnalysis;
        if (includeTargeting) total += PRICES.targeting;

        return total;
    };

    const total = calculateTotal();

    const handleContactUs = () => {
        const selectedServices = [];
        if (reels4K > 0) selectedServices.push(`${reels4K} × 4K Reels`);
        if (aiVideos > 0) selectedServices.push(`${aiVideos} × AI Videos`);
        if (graphicPosts > 0) selectedServices.push(`${graphicPosts} × Graphic Posts`);
        if (festivalPosters > 0) selectedServices.push(`${festivalPosters} × Festival Posters`);
        if (adBudget > 0) selectedServices.push(`$${adBudget} Ad Budget`);
        if (includeManagement) selectedServices.push("Social Media Management");
        if (includeReporting) selectedServices.push("Monthly Reporting");
        if (includeCompetitorAnalysis) selectedServices.push("Competitor Analysis");
        if (includeTargeting) selectedServices.push("Advanced Targeting");

        const message = `Hi! I'd like a custom package:\n\n${selectedServices.join("\n")}\n\nEstimated Total: Rs. ${total.toLocaleString()}`;
        const whatsappUrl = `https://wa.me/9779840000000?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <LanguageProvider>
            <main className="min-h-screen bg-background">
                <Header />

                <section className="section-padding pt-32 bg-soft-white">
                    <div className="container max-w-6xl mx-auto">
                        {/* Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-12"
                        >
                            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                                Build Your Custom Package
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Select the services you need and see your monthly investment in real-time.
                                Our Meta & Instagram specialists will help you maximize ROI.
                            </p>
                        </motion.div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Left Column - Service Selector */}
                            <div className="lg:col-span-2 space-y-6">
                                {/* 4K Reels */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <Card>
                                        <CardHeader>
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-accent/10 rounded-lg">
                                                    <Video className="w-5 h-5 text-accent" />
                                                </div>
                                                <div>
                                                    <CardTitle className="text-base">4K Short Reels</CardTitle>
                                                    <CardDescription>
                                                        Rs. {getReel4KPrice().toLocaleString()} per reel
                                                        {reels4K === 1 && <span className="text-xs ml-1">(Bulk: Rs. 4,000)</span>}
                                                        {reels4K > 1 && <span className="text-xs ml-1">(Single: Rs. 5,000)</span>}
                                                    </CardDescription>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex items-center justify-between mb-2">
                                                <Label>Quantity: {reels4K}</Label>
                                                <span className="text-sm font-semibold text-accent">
                                                    Rs. {(reels4K * getReel4KPrice()).toLocaleString()}
                                                </span>
                                            </div>
                                            <Slider
                                                value={[reels4K]}
                                                onValueChange={(val) => setReels4K(val[0])}
                                                max={10}
                                                min={0}
                                                step={1}
                                                className="mt-2"
                                            />
                                        </CardContent>
                                    </Card>
                                </motion.div>

                                {/* AI Videos */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <Card>
                                        <CardHeader>
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-accent/10 rounded-lg">
                                                    <Sparkles className="w-5 h-5 text-accent" />
                                                </div>
                                                <div>
                                                    <CardTitle className="text-base">AI Voice / AI Videos</CardTitle>
                                                    <CardDescription>Rs. {PRICES.aiVideo.toLocaleString()} per video</CardDescription>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex items-center justify-between mb-2">
                                                <Label>Quantity: {aiVideos}</Label>
                                                <span className="text-sm font-semibold text-accent">
                                                    Rs. {(aiVideos * PRICES.aiVideo).toLocaleString()}
                                                </span>
                                            </div>
                                            <Slider
                                                value={[aiVideos]}
                                                onValueChange={(val) => setAiVideos(val[0])}
                                                max={10}
                                                min={0}
                                                step={1}
                                                className="mt-2"
                                            />
                                        </CardContent>
                                    </Card>
                                </motion.div>

                                {/* Graphic Posts */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <Card>
                                        <CardHeader>
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-accent/10 rounded-lg">
                                                    <Image className="w-5 h-5 text-accent" />
                                                </div>
                                                <div>
                                                    <CardTitle className="text-base">Graphic Design Posts</CardTitle>
                                                    <CardDescription>Rs. {PRICES.graphicPost.toLocaleString()} per post</CardDescription>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex items-center justify-between mb-2">
                                                <Label>Quantity: {graphicPosts}</Label>
                                                <span className="text-sm font-semibold text-accent">
                                                    Rs. {(graphicPosts * PRICES.graphicPost).toLocaleString()}
                                                </span>
                                            </div>
                                            <Slider
                                                value={[graphicPosts]}
                                                onValueChange={(val) => setGraphicPosts(val[0])}
                                                max={20}
                                                min={0}
                                                step={1}
                                                className="mt-2"
                                            />
                                        </CardContent>
                                    </Card>
                                </motion.div>

                                {/* Festival Posters */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <Card>
                                        <CardHeader>
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-accent/10 rounded-lg">
                                                    <Calendar className="w-5 h-5 text-accent" />
                                                </div>
                                                <div>
                                                    <CardTitle className="text-base">Festival Posters</CardTitle>
                                                    <CardDescription>Rs. {PRICES.festivalPoster.toLocaleString()} per poster</CardDescription>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex items-center justify-between mb-2">
                                                <Label>Quantity: {festivalPosters}</Label>
                                                <span className="text-sm font-semibold text-accent">
                                                    Rs. {(festivalPosters * PRICES.festivalPoster).toLocaleString()}
                                                </span>
                                            </div>
                                            <Slider
                                                value={[festivalPosters]}
                                                onValueChange={(val) => setFestivalPosters(val[0])}
                                                max={12}
                                                min={0}
                                                step={1}
                                                className="mt-2"
                                            />
                                        </CardContent>
                                    </Card>
                                </motion.div>

                                {/* Ad Budget */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <Card>
                                        <CardHeader>
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-accent/10 rounded-lg">
                                                    <Megaphone className="w-5 h-5 text-accent" />
                                                </div>
                                                <div>
                                                    <CardTitle className="text-base">Meta & Instagram Ad Budget</CardTitle>
                                                    <CardDescription>Rs. {PRICES.adBudgetRate} per dollar</CardDescription>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex items-center justify-between mb-2">
                                                <Label>Budget: ${adBudget}</Label>
                                                <span className="text-sm font-semibold text-accent">
                                                    Rs. {(adBudget * PRICES.adBudgetRate).toLocaleString()}
                                                </span>
                                            </div>
                                            <Slider
                                                value={[adBudget]}
                                                onValueChange={(val) => setAdBudget(val[0])}
                                                max={100}
                                                min={0}
                                                step={1}
                                                className="mt-2"
                                            />
                                        </CardContent>
                                    </Card>
                                </motion.div>

                                {/* Additional Services */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-base">Additional Services</CardTitle>
                                            <CardDescription>Enhance your package with these extras</CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <Switch
                                                        checked={includeManagement}
                                                        onCheckedChange={setIncludeManagement}
                                                    />
                                                    <Label className="cursor-pointer">
                                                        Social Media Management
                                                    </Label>
                                                </div>
                                                <span className="text-sm font-semibold">Rs. {PRICES.management.toLocaleString()}</span>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <Switch
                                                        checked={includeReporting}
                                                        onCheckedChange={setIncludeReporting}
                                                    />
                                                    <Label className="cursor-pointer">
                                                        Monthly Performance Report
                                                    </Label>
                                                </div>
                                                <span className="text-sm font-semibold">Rs. {PRICES.reporting.toLocaleString()}</span>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <Switch
                                                        checked={includeCompetitorAnalysis}
                                                        onCheckedChange={setIncludeCompetitorAnalysis}
                                                    />
                                                    <Label className="cursor-pointer">
                                                        Competitor Analysis
                                                    </Label>
                                                </div>
                                                <span className="text-sm font-semibold">Rs. {PRICES.competitorAnalysis.toLocaleString()}</span>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <Switch
                                                        checked={includeTargeting}
                                                        onCheckedChange={setIncludeTargeting}
                                                    />
                                                    <Label className="cursor-pointer">
                                                        Advanced Targeting & Retargeting
                                                    </Label>
                                                </div>
                                                <span className="text-sm font-semibold">Rs. {PRICES.targeting.toLocaleString()}</span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </div>

                            {/* Right Column - Summary */}
                            <div className="lg:col-span-1">
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="sticky top-24"
                                >
                                    <Card className="bg-primary text-primary-foreground">
                                        <CardHeader>
                                            <CardTitle>Your Custom Package</CardTitle>
                                            <CardDescription className="text-primary-foreground/70">
                                                Monthly Investment
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-6">
                                            {/* Breakdown */}
                                            <div className="space-y-3">
                                                {reels4K > 0 && (
                                                    <div className="flex justify-between text-sm">
                                                        <span className="text-primary-foreground/80">{reels4K} × 4K Reels</span>
                                                        <span className="font-semibold">Rs. {(reels4K * getReel4KPrice()).toLocaleString()}</span>
                                                    </div>
                                                )}
                                                {aiVideos > 0 && (
                                                    <div className="flex justify-between text-sm">
                                                        <span className="text-primary-foreground/80">{aiVideos} × AI Videos</span>
                                                        <span className="font-semibold">Rs. {(aiVideos * PRICES.aiVideo).toLocaleString()}</span>
                                                    </div>
                                                )}
                                                {graphicPosts > 0 && (
                                                    <div className="flex justify-between text-sm">
                                                        <span className="text-primary-foreground/80">{graphicPosts} × Graphic Posts</span>
                                                        <span className="font-semibold">Rs. {(graphicPosts * PRICES.graphicPost).toLocaleString()}</span>
                                                    </div>
                                                )}
                                                {festivalPosters > 0 && (
                                                    <div className="flex justify-between text-sm">
                                                        <span className="text-primary-foreground/80">{festivalPosters} × Festival Posters</span>
                                                        <span className="font-semibold">Rs. {(festivalPosters * PRICES.festivalPoster).toLocaleString()}</span>
                                                    </div>
                                                )}
                                                {adBudget > 0 && (
                                                    <div className="flex justify-between text-sm">
                                                        <span className="text-primary-foreground/80">${adBudget} Ad Budget</span>
                                                        <span className="font-semibold">Rs. {(adBudget * PRICES.adBudgetRate).toLocaleString()}</span>
                                                    </div>
                                                )}
                                                {includeManagement && (
                                                    <div className="flex justify-between text-sm">
                                                        <span className="text-primary-foreground/80">Management</span>
                                                        <span className="font-semibold">Rs. {PRICES.management.toLocaleString()}</span>
                                                    </div>
                                                )}
                                                {includeReporting && (
                                                    <div className="flex justify-between text-sm">
                                                        <span className="text-primary-foreground/80">Reporting</span>
                                                        <span className="font-semibold">Rs. {PRICES.reporting.toLocaleString()}</span>
                                                    </div>
                                                )}
                                                {includeCompetitorAnalysis && (
                                                    <div className="flex justify-between text-sm">
                                                        <span className="text-primary-foreground/80">Competitor Analysis</span>
                                                        <span className="font-semibold">Rs. {PRICES.competitorAnalysis.toLocaleString()}</span>
                                                    </div>
                                                )}
                                                {includeTargeting && (
                                                    <div className="flex justify-between text-sm">
                                                        <span className="text-primary-foreground/80">Advanced Targeting</span>
                                                        <span className="font-semibold">Rs. {PRICES.targeting.toLocaleString()}</span>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="h-px bg-primary-foreground/20" />

                                            {/* Total */}
                                            <div className="space-y-2">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-lg font-semibold">Total</span>
                                                    <span className="text-3xl font-bold text-accent">
                                                        Rs. {total.toLocaleString()}
                                                    </span>
                                                </div>
                                                <p className="text-xs text-primary-foreground/70">per month</p>
                                            </div>

                                            {/* What's Included */}
                                            <div className="space-y-2 pt-4">
                                                <p className="text-sm font-semibold mb-2">What's Included:</p>
                                                <div className="space-y-1.5">
                                                    <div className="flex items-start gap-2 text-xs">
                                                        <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                                                        <span className="text-primary-foreground/80">Meta & Instagram Ads Setup</span>
                                                    </div>
                                                    <div className="flex items-start gap-2 text-xs">
                                                        <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                                                        <span className="text-primary-foreground/80">Professional Content Creation</span>
                                                    </div>
                                                    <div className="flex items-start gap-2 text-xs">
                                                        <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                                                        <span className="text-primary-foreground/80">Dedicated Account Manager</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* CTA */}
                                            <Button
                                                onClick={handleContactUs}
                                                variant="accent"
                                                size="lg"
                                                className="w-full mt-6"
                                            >
                                                Get This Package
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </Button>

                                            <p className="text-xs text-center text-primary-foreground/60">
                                                Click to send us your custom package via WhatsApp
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
                <WhatsAppButton />
            </main>
        </LanguageProvider>
    );
};

export default CustomPricing;
