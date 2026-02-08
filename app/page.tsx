'use client';

import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { LoadingScreen } from '@/components/LoadingScreen';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Technologies } from '@/components/sections/Technologies';
import { Projects } from '@/components/sections/Projects';
import { AIInnovations } from '@/components/sections/AIInnovations';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      <Navigation />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <AIInnovations />
        <Contact />
      </main>
    </>
  );
}
