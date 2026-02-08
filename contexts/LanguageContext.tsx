'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pl' | 'en';

interface Translations {
  [key: string]: string;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Translations> = {
  pl: {
    // Navigation
    'nav.home': 'Start',
    'nav.about': 'O mnie',
    'nav.technologies': 'Technologie',
    'nav.projects': 'Projekty',
    'nav.ai': 'AI & Innowacje',
    'nav.contact': 'Kontakt',
    
    // Hero Section
    'hero.title': 'Full-Stack Developer',
    'hero.subtitle': 'Aspirujący inżynier zainteresowany full-stack development, automatyzacją i sztuczną inteligencją',
    'hero.cta.projects': 'Zobacz Projekty',
    'hero.cta.contact': 'Skontaktuj się',
    'hero.scroll': 'Przewiń w dół',
    
    // About Section
    'about.title': 'O mnie',
    'about.intro': 'Jestem pasjonatem technologii z doświadczeniem w full-stack development. Interesuję się tworzeniem nowoczesnych aplikacji webowych, automatyzacją procesów oraz implementacją rozwiązań AI.',
    'about.experience.title': 'Doświadczenie',
    'about.experience.position': 'Analityk operacyjny',
    'about.experience.duration': '09.2022 - Obecnie',
    'about.passions.title': 'Pasje',
    'about.passion.fullstack': 'Full-Stack Development',
    'about.passion.fullstack.desc': 'Tworzenie kompleksowych aplikacji webowych',
    'about.passion.automation': 'Automatyzacja',
    'about.passion.automation.desc': 'Optymalizacja procesów biznesowych',
    'about.passion.ai': 'Sztuczna Inteligencja',
    'about.passion.ai.desc': 'Eksploracja możliwości AI w aplikacjach',
    
    // Technologies Section
    'tech.title': 'Technologie',
    'tech.subtitle': 'Narzędzia i technologie, z którymi pracuję',
    'tech.frontend': 'Frontend',
    'tech.backend': 'Backend',
    'tech.tools': 'Narzędzia',
    'tech.automation': 'Automatyzacja',
    
    // Projects Section
    'projects.title': 'Projekty',
    'projects.subtitle': 'Wybrane realizacje',
    'projects.tasksystem.title': 'TaskSystem',
    'projects.tasksystem.desc': 'Kompleksowy system zarządzania zadaniami z zaawansowanymi funkcjami organizacji pracy',
    'projects.barberapp.title': 'BarberApp',
    'projects.barberapp.desc': 'Aplikacja do zarządzania salonem fryzjerskim z systemem rezerwacji i zarządzaniem klientami',
    'projects.viewCode': 'Zobacz Kod',
    'projects.liveDemo': 'Demo',
    
    // AI Section
    'ai.title': 'AI & Innowacje',
    'ai.subtitle': 'Eksploracja AI w aplikacjach webowych',
    'ai.intro': 'Interesuję się integracją sztucznej inteligencji z aplikacjami webowymi oraz wykorzystaniem AI do optymalizacji procesów biznesowych.',
    'ai.integration.title': 'Integracja AI',
    'ai.integration.desc': 'Implementacja rozwiązań AI w aplikacjach webowych',
    'ai.automation.title': 'Automatyzacja AI',
    'ai.automation.desc': 'Wykorzystanie AI do optymalizacji procesów biznesowych',
    'ai.ml.title': 'Machine Learning',
    'ai.ml.desc': 'Eksploracja algorytmów ML w praktycznych zastosowaniach',
    
    // Contact Section
    'contact.title': 'Kontakt',
    'contact.subtitle': 'Skontaktuj się ze mną',
    'contact.email': 'Email',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.location': 'Lokalizacja',
    'contact.location.value': 'Polska',
    
    // Loading
    'loading.text': 'Ładowanie...',
    
    // Theme
    'theme.dark': 'Ciemny motyw',
    'theme.light': 'Jasny motyw',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.technologies': 'Technologies',
    'nav.projects': 'Projects',
    'nav.ai': 'AI & Innovations',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Full-Stack Developer',
    'hero.subtitle': 'Aspiring engineer interested in full-stack development, automation, and artificial intelligence',
    'hero.cta.projects': 'View Projects',
    'hero.cta.contact': 'Get in Touch',
    'hero.scroll': 'Scroll down',
    
    // About Section
    'about.title': 'About Me',
    'about.intro': 'I am a technology enthusiast with experience in full-stack development. I am interested in creating modern web applications, process automation, and implementing AI solutions.',
    'about.experience.title': 'Experience',
    'about.experience.position': 'Operation Analyst',
    'about.experience.duration': '09.2022 - Present',
    'about.passions.title': 'Passions',
    'about.passion.fullstack': 'Full-Stack Development',
    'about.passion.fullstack.desc': 'Building comprehensive web applications',
    'about.passion.automation': 'Automation',
    'about.passion.automation.desc': 'Optimizing business processes',
    'about.passion.ai': 'Artificial Intelligence',
    'about.passion.ai.desc': 'Exploring AI possibilities in applications',
    
    // Technologies Section
    'tech.title': 'Technologies',
    'tech.subtitle': 'Tools and technologies I work with',
    'tech.frontend': 'Frontend',
    'tech.backend': 'Backend',
    'tech.tools': 'Tools',
    'tech.automation': 'Automation',
    
    // Projects Section
    'projects.title': 'Projects',
    'projects.subtitle': 'Selected works',
    'projects.tasksystem.title': 'TaskSystem',
    'projects.tasksystem.desc': 'Comprehensive task management system with advanced work organization features',
    'projects.barberapp.title': 'BarberApp',
    'projects.barberapp.desc': 'Barbershop management application with booking system and client management',
    'projects.viewCode': 'View Code',
    'projects.liveDemo': 'Live Demo',
    
    // AI Section
    'ai.title': 'AI & Innovations',
    'ai.subtitle': 'Exploring AI in web applications',
    'ai.intro': 'I am interested in integrating artificial intelligence with web applications and using AI to optimize business processes.',
    'ai.integration.title': 'AI Integration',
    'ai.integration.desc': 'Implementing AI solutions in web applications',
    'ai.automation.title': 'AI Automation',
    'ai.automation.desc': 'Using AI to optimize business processes',
    'ai.ml.title': 'Machine Learning',
    'ai.ml.desc': 'Exploring ML algorithms in practical applications',
    
    // Contact Section
    'contact.title': 'Contact',
    'contact.subtitle': 'Get in touch',
    'contact.email': 'Email',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.location': 'Location',
    'contact.location.value': 'Poland',
    
    // Loading
    'loading.text': 'Loading...',
    
    // Theme
    'theme.dark': 'Dark mode',
    'theme.light': 'Light mode',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
