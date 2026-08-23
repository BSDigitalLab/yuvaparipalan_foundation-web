import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { ImpactCounter } from '../components/sections/ImpactCounter';
import { ExpertVoice } from '../components/sections/ExpertVoice';
import { FadeIn } from '../components/motion/FadeIn';
import { Sparkles } from 'lucide-react';

export const ImpactPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="2035 Impact Dashboard - Yuvaparipalan Foundation"
        description="Explore Yuvaparipalan Foundation's bold 2035 impact vision: 10 Million empowered, 100,000 merit scholarships, 1 Million AI trained."
      />

      <div className="pt-20 sm:pt-24 pb-14 sm:pb-16 bg-[#f8faf8] relative overflow-hidden">
        {/* Background Ambient Radial Lighting */}
        <div 
          className="absolute top-1/6 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(21, 128, 61, 0.35) 0%, rgba(16, 185, 129, 0.08) 50%, transparent 80%)',
            filter: 'blur(80px)',
          }}
        />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 space-y-12">
          
          <ImpactCounter />

          <div className="pt-4">
            <ExpertVoice />
          </div>

        </div>
      </div>
    </>
  );
};
