import { useState } from "react";
import { motion } from "framer-motion";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
    ArrowRight,
    Phone,
    Mail,
    CheckCircle2,
    Clock,
    FileText,
    Rocket,
    Zap,
    Shield,
    Headphones,
    TrendingUp
} from "lucide-react";

const SERVICES = [
    "Meta Ads Boosting",
    "Content Creation",
    "Meta Verification Tick",
    "Post Designing",
    "Social Media Handling",
    "Video Editing",
    "Content Writing",
];

const BUDGET_RANGES = [
    "Below Rs. 20,000/month",
    "Rs. 20,000 - Rs. 40,000/month",
    "Rs. 40,000 - Rs. 60,000/month",
    "Rs. 60,000+/month",
];

const TIMELINES = [
    "ASAP (Within 1 week)",
    "1-2 weeks",
    "2-4 weeks",
    "Flexible timeline",
];

const GetQuote = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        company: "",
        website: "",
        phone: "",
        budgetRange: "",
        timeline: "",
        goals: "",
        currentMarketing: "",
        services: [] as string[],
    });

    const handleServiceToggle = (service: string) => {
        setFormData((prev) => ({
            ...prev,
            services: prev.services.includes(service)
                ? prev.services.filter((s) => s !== service)
                : [...prev.services, service],
        }));
    };

    const updateField = (field: keyof typeof formData, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Format the message for WhatsApp
        const message = `
🎯 *New Quote Request - Ads Digital Agency*

📋 *Contact Information:*
Name: ${formData.fullName}
Email: ${formData.email}
${formData.company ? `Company: ${formData.company}` : ''}
${formData.phone ? `Phone: ${formData.phone}` : ''}
${formData.website ? `Website: ${formData.website}` : ''}

✅ *Services Needed:*
${formData.services.length > 0 ? formData.services.map(s => `• ${s}`).join('\n') : 'None specified'}

💰 *Budget Range:*
${formData.budgetRange || 'Not specified'}

⏱ *Timeline:*
${formData.timeline || 'Not specified'}

🎯 *Project Goals:*
${formData.goals}

📊 *Current Marketing Efforts:*
${formData.currentMarketing || 'None mentioned'}
    `.trim();

        const whatsappUrl = `https://wa.me/9779823974222?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <LanguageProvider>
            <main className="min-h-screen bg-background">
                <Header />

                {/* Hero Section */}
                <section className="relative pt-32 pb-16 bg-gradient-to-br from-primary via-primary/95 to-accent overflow-hidden">
                    <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
                    <div className="container relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-3xl mx-auto text-center"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground mb-6">
                                <Zap className="w-4 h-4" />
                                <span className="text-sm font-semibold">Quick Quote Available</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                                Get Your Custom Strategy & Quote
                            </h1>

                            <p className="text-xl text-primary-foreground/90 mb-8">
                                Tell us about your project and we'll create a tailored proposal just for you
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <a href="tel:+9779823974222" className="inline-flex">
                                    <Button size="lg" variant="accent" className="gap-2">
                                        <Phone className="w-5 h-5" />
                                        Call +977 982-3974222
                                    </Button>
                                </a>
                                <a href="mailto:adsdigitalagency50@gmail.com" className="inline-flex">
                                    <Button size="lg" variant="outline" className="gap-2 bg-white/10 text-white border-white/20 hover:bg-white/20">
                                        <Mail className="w-5 h-5" />
                                        Email Us
                                    </Button>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Quote Form Section */}
                <section className="section-padding bg-soft-white">
                    <div className="container max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-3 gap-10">
                            {/* Form - Left Column */}
                            <div className="lg:col-span-2">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-2xl">Project Details</CardTitle>
                                            <CardDescription>
                                                The more details you provide, the more accurate your quote will be
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <form onSubmit={handleSubmit} className="space-y-6">
                                                {/* Basic Information */}
                                                <div>
                                                    <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
                                                    <div className="grid md:grid-cols-2 gap-4">
                                                        <div className="space-y-2">
                                                            <Label htmlFor="fullName">
                                                                Full Name <span className="text-destructive">*</span>
                                                            </Label>
                                                            <Input
                                                                id="fullName"
                                                                placeholder="John Doe"
                                                                value={formData.fullName}
                                                                onChange={(e) => updateField('fullName', e.target.value)}
                                                                required
                                                            />
                                                        </div>

                                                        <div className="space-y-2">
                                                            <Label htmlFor="email">
                                                                Email Address <span className="text-destructive">*</span>
                                                            </Label>
                                                            <Input
                                                                id="email"
                                                                type="email"
                                                                placeholder="john@company.com"
                                                                value={formData.email}
                                                                onChange={(e) => updateField('email', e.target.value)}
                                                                required
                                                            />
                                                        </div>

                                                        <div className="space-y-2">
                                                            <Label htmlFor="phone">Phone Number</Label>
                                                            <Input
                                                                id="phone"
                                                                type="tel"
                                                                placeholder="+977 98X-XXXXXXX"
                                                                value={formData.phone}
                                                                onChange={(e) => updateField('phone', e.target.value)}
                                                            />
                                                        </div>

                                                        <div className="space-y-2">
                                                            <Label htmlFor="company">Company Name</Label>
                                                            <Input
                                                                id="company"
                                                                placeholder="Your Company"
                                                                value={formData.company}
                                                                onChange={(e) => updateField('company', e.target.value)}
                                                            />
                                                        </div>

                                                        <div className="space-y-2 md:col-span-2">
                                                            <Label htmlFor="website">Website URL</Label>
                                                            <Input
                                                                id="website"
                                                                type="url"
                                                                placeholder="https://yourwebsite.com"
                                                                value={formData.website}
                                                                onChange={(e) => updateField('website', e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Services Needed */}
                                                <div>
                                                    <Label className="text-base mb-3 block">
                                                        Services Needed <span className="text-destructive">*</span>
                                                    </Label>
                                                    <div className="grid md:grid-cols-2 gap-3">
                                                        {SERVICES.map((service) => (
                                                            <div
                                                                key={service}
                                                                className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-accent/5 transition-colors cursor-pointer"
                                                                onClick={(e) => {
                                                                    // Only trigger if not clicking elements already handled by Label/Checkbox
                                                                    const target = e.target as HTMLElement;
                                                                    if (!['BUTTON', 'INPUT', 'LABEL', 'SPAN'].includes(target.tagName)) {
                                                                        handleServiceToggle(service);
                                                                    }
                                                                }}
                                                            >
                                                                <Checkbox
                                                                    id={service}
                                                                    checked={formData.services.includes(service)}
                                                                    onCheckedChange={() => handleServiceToggle(service)}
                                                                />
                                                                <Label
                                                                    htmlFor={service}
                                                                    className="cursor-pointer flex-1"
                                                                    onClick={(e) => e.stopPropagation()} // Prevent double trigger from label
                                                                >
                                                                    {service}
                                                                </Label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Budget and Timeline */}
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <Label htmlFor="budget">Monthly Budget Range</Label>
                                                        <select
                                                            id="budget"
                                                            className="w-full px-3 py-2 rounded-md border border-input bg-background"
                                                            value={formData.budgetRange}
                                                            onChange={(e) => updateField('budgetRange', e.target.value)}
                                                        >
                                                            <option value="">Select budget range</option>
                                                            {BUDGET_RANGES.map((range) => (
                                                                <option key={range} value={range}>
                                                                    {range}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>

                                                    <div className="space-y-2">
                                                        <Label htmlFor="timeline">Project Timeline</Label>
                                                        <select
                                                            id="timeline"
                                                            className="w-full px-3 py-2 rounded-md border border-input bg-background"
                                                            value={formData.timeline}
                                                            onChange={(e) => updateField('timeline', e.target.value)}
                                                        >
                                                            <option value="">Select timeline</option>
                                                            {TIMELINES.map((time) => (
                                                                <option key={time} value={time}>
                                                                    {time}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>

                                                {/* Project Goals */}
                                                <div className="space-y-2">
                                                    <Label htmlFor="goals">
                                                        Project Goals & Objectives <span className="text-destructive">*</span>
                                                    </Label>
                                                    <Textarea
                                                        id="goals"
                                                        placeholder="What are you hoping to achieve? (e.g., increase brand awareness, drive more sales, improve engagement...)"
                                                        rows={4}
                                                        value={formData.goals}
                                                        onChange={(e) => updateField('goals', e.target.value)}
                                                        required
                                                    />
                                                </div>

                                                {/* Current Marketing */}
                                                <div className="space-y-2">
                                                    <Label htmlFor="currentMarketing">Current Marketing Efforts</Label>
                                                    <Textarea
                                                        id="currentMarketing"
                                                        placeholder="Tell us about your current marketing activities, if any..."
                                                        rows={3}
                                                        value={formData.currentMarketing}
                                                        onChange={(e) => updateField('currentMarketing', e.target.value)}
                                                    />
                                                </div>

                                                {/* Submit Button */}
                                                <Button
                                                    type="submit"
                                                    size="lg"
                                                    className="w-full"
                                                    disabled={!formData.fullName || !formData.email || formData.services.length === 0 || !formData.goals}
                                                >
                                                    Get My Custom Quote
                                                    <ArrowRight className="w-5 h-5 ml-2" />
                                                </Button>
                                            </form>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </div>

                            {/* Info Sidebar - Right Column */}
                            <div className="lg:col-span-1 space-y-6">
                                {/* What Happens Next */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>What Happens Next?</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="flex gap-3">
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">
                                                    1
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold mb-1">Quote Analysis</h4>
                                                    <p className="text-sm text-muted-foreground">
                                                        We review your requirements in detail
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-3">
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">
                                                    2
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold mb-1">Custom Proposal</h4>
                                                    <p className="text-sm text-muted-foreground">
                                                        We create a tailored strategy and pricing
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-3">
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">
                                                    3
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold mb-1">Consultation Call</h4>
                                                    <p className="text-sm text-muted-foreground">
                                                        We discuss the proposal with you
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-3">
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">
                                                    4
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold mb-1">Project Kickoff</h4>
                                                    <p className="text-sm text-muted-foreground">
                                                        We start working on your success
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>

                                {/* Why Choose Us */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <Card className="bg-primary text-primary-foreground">
                                        <CardHeader>
                                            <CardTitle>Why Choose Us?</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-3">
                                            <div className="flex items-start gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                                <span className="text-sm">Free initial consultation</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <TrendingUp className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                                <span className="text-sm">Custom strategy for your industry</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <FileText className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                                <span className="text-sm">Transparent, competitive pricing</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <Rocket className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                                <span className="text-sm">Proven track record of success</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <Headphones className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                                <span className="text-sm">24/7 support and monitoring</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <Shield className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                                <span className="text-sm">No long-term contracts</span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>

                                {/* Quick Contact */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <Card className="bg-accent/10 border-accent/20">
                                        <CardContent className="pt-6">
                                            <div className="text-center space-y-4">
                                                <Clock className="w-12 h-12 mx-auto text-accent" />
                                                <div>
                                                    <h4 className="font-semibold mb-2">Need a Faster Response?</h4>
                                                    <p className="text-sm text-muted-foreground mb-4">
                                                        Call us directly for an immediate consultation
                                                    </p>
                                                </div>
                                                <a href="tel:+9779823974222">
                                                    <Button variant="default" size="lg" className="w-full gap-2">
                                                        <Phone className="w-5 h-5" />
                                                        Call +977 982-3974222
                                                    </Button>
                                                </a>
                                            </div>
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
        </LanguageProvider >
    );
};

export default GetQuote;
