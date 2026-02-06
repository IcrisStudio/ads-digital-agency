import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'np';

interface Translations {
  [key: string]: {
    en: string;
    np: string;
  };
}

export const translations: Translations = {
  // Navigation
  services: { en: 'Services', np: 'सेवाहरू' },
  portfolio: { en: 'Portfolio', np: 'पोर्टफोलियो' },
  strategy: { en: 'Strategy', np: 'रणनीति' },
  pricing: { en: 'Pricing', np: 'मूल्य निर्धारण' },
  adBoosting: { en: 'Ad Boosting', np: 'एड बुस्टिङ' },
  freeAudit: { en: 'Free Audit', np: 'निःशुल्क अडिट' },
  
  // Hero
  premierGrowth: { en: 'Premier Digital Growth Engine', np: 'प्रिमियर डिजिटल ग्रोथ इन्जिन' },
  beyondLimits: { en: 'Beyond Limits.', np: 'सीमाभन्दा पर।' },
  salesOptimized: { en: 'Sales Optimized.', np: 'बिक्री अनुकूलित।' },
  heroDescription: { 
    en: "We don't just manage accounts; we build digital monopolies for our clients in Nepal and beyond.",
    np: 'हामी खाताहरू मात्र व्यवस्थापन गर्दैनौं; हामी नेपाल र बाहिरका ग्राहकहरूको लागि डिजिटल मोनोपोली निर्माण गर्छौं।'
  },
  scaleMyBrand: { en: 'Scale My Brand', np: 'मेरो ब्राण्ड बढाउनुहोस्' },
  viewPortfolio: { en: 'View Portfolio', np: 'पोर्टफोलियो हेर्नुहोस्' },
  brandsTransformed: { en: 'Brands Transformed', np: 'ब्राण्डहरू रूपान्तरित' },
  impressions: { en: 'Impressions', np: 'इम्प्रेशनहरू' },
  successRate: { en: 'Success Rate', np: 'सफलता दर' },
  
  // Services
  coreEcosystem: { en: 'Core Ecosystem', np: 'कोर इकोसिस्टम' },
  howWeDominate: { en: 'How We Dominate.', np: 'हामी कसरी हावी हुन्छौं।' },
  cinematicContent: { en: 'Cinematic Content', np: 'सिनेमाटिक सामग्री' },
  cinematicDesc: { 
    en: '4K reel production that makes your brand look like an international leader.',
    np: '४के रील उत्पादन जसले तपाईंको ब्राण्डलाई अन्तर्राष्ट्रिय नेता जस्तो देखाउँछ।'
  },
  precisionAds: { en: 'Precision Ads', np: 'प्रेसिजन विज्ञापन' },
  precisionDesc: {
    en: 'Hyper-targeted Meta & Google ads designed for ROAS and customer acquisition.',
    np: 'ROAS र ग्राहक अधिग्रहणको लागि डिजाइन गरिएको हाइपर-लक्षित मेटा र गुगल विज्ञापनहरू।'
  },
  brandIdentity: { en: 'Brand Identity', np: 'ब्राण्ड पहिचान' },
  brandDesc: {
    en: 'Premium logo design, color theory, and full social media visual systems.',
    np: 'प्रिमियम लोगो डिजाइन, रंग सिद्धान्त, र पूर्ण सामाजिक सञ्जाल भिजुअल प्रणालीहरू।'
  },
  
  // Stats labels
  revenue: { en: 'Revenue', np: 'राजस्व' },
  leads: { en: 'Leads', np: 'लिड्स' },
  roas: { en: 'ROAS', np: 'ROAS' },
  ctr: { en: 'CTR', np: 'CTR' },
  
  // Contact
  letsConnect: { en: "Let's Connect", np: 'सम्पर्क गरौं' },
  startEvolution: { en: 'Start Your Evolution.', np: 'तपाईंको विकास सुरु गर्नुहोस्।' },
  analyzeNow: { en: 'Analyze My Brand Now', np: 'मेरो ब्राण्ड अहिले विश्लेषण गर्नुहोस्' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) return key;
    return translation[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
