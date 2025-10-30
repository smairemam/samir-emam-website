import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Samir Emam',
    'hero.subtitle': 'Social Media Marketing Specialist',
    'hero.tagline': 'Campaign-led content. Measurable engagement. Brand growth.',
    'hero.cta': 'Contact Me',
    'hero.location': 'Based in Dubai — open to opportunities across UAE & MENA',
    
    // About
    'about.title': 'About Me',
    'about.text1': "I'm Samir Emam — a Social Media Marketing Specialist with 13+ years of hands-on experience building engagement and brand growth across platforms (Facebook, Instagram, Twitter, YouTube, Google Ads). I've led social for enterprise and agency clients including e& UAE and Raya Contact Center, delivering campaign strategies, content creation, and performance optimization.",
    'about.text2': 'My expertise spans digital marketing, social media management, and campaign optimization. I combine creative content development with data-driven insights to deliver measurable results that drive business growth and brand awareness.',
    
    // Skills
    'skills.title': 'Core Skills',
    'skills.subtitle': 'Expertise across social media platforms, campaign strategy, and performance optimization',
    'skills.platforms': 'Platforms',
    
    // Experience
    'experience.title': 'Experience',
    'experience.subtitle': '13+ years of proven expertise across enterprise, agency, and freelance roles',
    
    // Projects
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'Proven track record of delivering measurable results through strategic social media campaigns',
    'projects.objective': 'Objective',
    'projects.action': 'Action',
    'projects.result': 'Result',
    
    // Contact
    'contact.title': "Let's Collaborate",
    'contact.subtitle': 'I usually respond within 1-2 business days',
    'contact.info': 'Contact Information',
    'contact.location': 'Location',
    'contact.locationText': 'Silicon Oasis, Dubai, UAE',
    'contact.opportunities': 'Open to opportunities across UAE & MENA region',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    
    // Footer
    'footer.description': 'Social Media Marketing Specialist with 13+ years of experience driving brand growth and engagement.',
    'footer.quickLinks': 'Quick Links',
    'footer.getInTouch': 'Get In Touch',
    'footer.copyright': 'All rights reserved.',
  },
  ar: {
    // Navigation
    'nav.about': 'نبذة عني',
    'nav.skills': 'المهارات',
    'nav.experience': 'الخبرات',
    'nav.projects': 'المشاريع',
    'nav.contact': 'تواصل معي',
    
    // Hero
    'hero.title': 'سمير إمام',
    'hero.subtitle': 'أخصائي تسويق عبر وسائل التواصل الاجتماعي',
    'hero.tagline': 'محتوى قائم على الحملات. تفاعل قابل للقياس. نمو العلامة التجارية.',
    'hero.cta': 'تواصل معي',
    'hero.location': 'مقره في دبي — منفتح على الفرص في الإمارات والمنطقة',
    
    // About
    'about.title': 'نبذة عني',
    'about.text1': 'أنا سمير إمام — أخصائي تسويق عبر وسائل التواصل الاجتماعي مع أكثر من 13 عامًا من الخبرة العملية في بناء التفاعل ونمو العلامة التجارية عبر المنصات (فيسبوك، إنستغرام، تويتر، يوتيوب، إعلانات جوجل). قدت وسائل التواصل الاجتماعي لعملاء المؤسسات والوكالات بما في ذلك e& الإمارات ومركز اتصالات رايا، وقدمت استراتيجيات الحملات وإنشاء المحتوى وتحسين الأداء.',
    'about.text2': 'تمتد خبرتي عبر التسويق الرقمي وإدارة وسائل التواصل الاجتماعي وتحسين الحملات. أجمع بين تطوير المحتوى الإبداعي والرؤى القائمة على البيانات لتقديم نتائج قابلة للقياس تدفع نمو الأعمال والوعي بالعلامة التجارية.',
    
    // Skills
    'skills.title': 'المهارات الأساسية',
    'skills.subtitle': 'خبرة متقدمة في منصات التواصل الاجتماعي، استراتيجيات الحملات، وتحسين الأداء',
    'skills.platforms': 'المنصات',
    'skills.socialMedia': 'التسويق عبر وسائل التواصل',
    'skills.digitalMarketing': 'التسويق الرقمي',
    'skills.campaignStrategy': 'استراتيجية الحملات',
    'skills.analytics': 'التحليلات والبيانات',
    'skills.contentCreation': 'إنشاء المحتوى',
    'skills.communityManagement': 'إدارة المجتمعات',
    'skills.paidAdvertising': 'الإعلانات المدفوعة',
    'skills.brandStrategy': 'استراتيجية العلامة التجارية',
    
    // Experience
    'experience.title': 'الخبرات العملية',
    'experience.subtitle': '+13 عامًا من الخبرة المثبتة في المؤسسات الكبرى، الوكالات، والعمل الحر',
    'experience.present': 'حتى الآن',
    'experience.years': 'سنوات',
    
    // Projects
    'projects.title': 'المشاريع المميزة',
    'projects.subtitle': 'سجل حافل بتقديم نتائج قابلة للقياس من خلال حملات استراتيجية عبر وسائل التواصل الاجتماعي',
    'projects.objective': 'الهدف',
    'projects.action': 'الإجراء',
    'projects.result': 'النتيجة',
    
    // Contact
    'contact.title': 'لنتعاون',
    'contact.subtitle': 'عادة أرد خلال 1-2 يوم عمل',
    'contact.info': 'معلومات الاتصال',
    'contact.location': 'الموقع',
    'contact.locationText': 'واحة دبي للسيليكون، دبي، الإمارات',
    'contact.opportunities': 'منفتح على الفرص في الإمارات ومنطقة الشرق الأوسط وشمال أفريقيا',
    'contact.name': 'الاسم',
    'contact.email': 'البريد الإلكتروني',
    'contact.message': 'الرسالة',
    'contact.send': 'إرسال الرسالة',
    'contact.sending': 'جاري الإرسال...',
    
    // Footer
    'footer.description': 'أخصائي تسويق عبر وسائل التواصل الاجتماعي مع +13 عامًا من الخبرة في تحقيق نمو العلامات التجارية وزيادة التفاعل.',
    'footer.quickLinks': 'روابط سريعة',
    'footer.getInTouch': 'تواصل معنا',
    'footer.copyright': 'جميع الحقوق محفوظة.',
    'footer.linkedinProfile': 'الملف الشخصي على لينكد إن',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Check URL parameter or localStorage
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang') as Language;
    const savedLang = localStorage.getItem('language') as Language;
    
    const initialLang = langParam || savedLang || 'en';
    setLanguage(initialLang);
    
    // Set document direction and lang attribute
    document.documentElement.lang = initialLang;
    document.documentElement.dir = initialLang === 'ar' ? 'rtl' : 'ltr';
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Update URL parameter
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    window.history.replaceState({}, '', url);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
