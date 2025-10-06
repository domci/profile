'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    'hero.title': 'Passionate about AI and Data.',
    'hero.summary': '+10 years of industry experience in collecting, organizing, analyzing, visualizing data, and deploying various AI- and Data-Products. Customer-oriented, curious, and fast-learning engineer, determined to build amazing data products.',
    'hero.availableFor': 'Currently Available For:',
    'hero.consulting': 'Consulting Services',
    'hero.freelance': 'Freelance Projects',
    'hero.fullTime': 'Full-Time Remote/Hybrid',
    'hero.contactMe': 'Contact Me',
    'sections.petProjects': 'Pet Projects',
    'sections.skills': 'Skills',
    'sections.workExperience': 'Work Experience',
    'sections.education': 'Education',
    'skills.generativeAI': 'Generative AI',
    'skills.cloudPlatforms': 'Cloud Platforms',
    'skills.programmingLanguages': 'Programming Languages',
    'skills.databasesAndQuerying': 'Databases & Querying',
    'skills.dataOrchestrationTools': 'Data Orchestration Tools',
    'skills.visualizationTools': 'Visualization Tools',
    'skills.versionControlAndWorkflow': 'Version Control & Workflow',
    'skills.containersAndOS': 'Containers & OS',
    'skills.languages': 'Languages',
    'skills.softSkills': 'Soft Skills',
    'common.present': 'Present',
    'footer.copyright': '© 2023 Dominik C. All rights reserved.',
    'chat.title': 'Chat with AI Assistant',
    'chat.close': 'Close chat',
    'chat.initialMessage': 'Hi! I can help you learn more about 🔥 Dominik 🔥. What would you like to know?',
    'chat.placeholder': 'Ask me anything...',
    'chat.send': 'Send'
  },
  de: {
    'hero.title': 'Leidenschaft für KI und Daten.',
    'hero.summary': '+10 Jahre Berufserfahrung in der Erfassung, Organisation, Analyse, Visualisierung von Daten und Bereitstellung verschiedener KI- und Datenprodukte. Kundenorientierter, neugieriger und schnell lernender Spezialist, entschlossen, erstaunliche Datenprodukte zu entwickeln.',
    'hero.availableFor': 'Derzeit verfügbar für:',
    'hero.consulting': 'Beratungsdienstleistungen',
    'hero.freelance': 'Freiberufliche Projekte',
    'hero.fullTime': 'Vollzeit Remote/Hybrid',
    'hero.contactMe': 'Kontakt aufnehmen',
    'sections.petProjects': 'Nebenprojekte',
    'sections.skills': 'Fähigkeiten',
    'sections.workExperience': 'Berufserfahrung',
    'sections.education': 'Bildung',
    'skills.generativeAI': 'Generative KI',
    'skills.cloudPlatforms': 'Cloud-Plattformen',
    'skills.programmingLanguages': 'Programmiersprachen',
    'skills.databasesAndQuerying': 'Datenbanken & Abfragen',
    'skills.dataOrchestrationTools': 'Daten-Orchestrierung',
    'skills.visualizationTools': 'Visualisierung',
    'skills.versionControlAndWorkflow': 'Versionskontrolle & Workflow',
    'skills.containersAndOS': 'Container & OS',
    'skills.languages': 'Sprachen',
    'skills.softSkills': 'Soft Skills',
    'common.present': 'Gegenwart',
    'footer.copyright': '© 2023 Dominik C. Alle Rechte vorbehalten.',
    'chat.title': 'Chatte mit KI-Assistenten',
    'chat.close': 'Chat schließen',
    'chat.initialMessage': 'Hallo! Ich kann dir helfen, mehr über 🔥 Dominik 🔥 zu erfahren. Was möchtest du wissen?',
    'chat.placeholder': 'Frag mich was...',
    'chat.send': 'Senden'
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Check if there's a saved language preference
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'de')) {
      setLanguage(savedLang);
    }
  }, []);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  const updateLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: updateLanguage, t }}>
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