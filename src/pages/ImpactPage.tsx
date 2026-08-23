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
          
          {/* Header Banner */}
          <FadeIn direction="up">
            <div className="text-center max-w-2xl mx-auto space-y-2.5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100/90 text-emerald-950 border border-emerald-300 text-[11px] font-mono font-bold uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3 h-3 text-emerald-700" />
                <span>Nationwide Roadmap</span>
              </div>

              <h1 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                2035 Impact Vision &{' '}
                <span className="relative inline-block text-[#15803d] pb-0.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-[#15803d] after:rounded-full">
                  Metrics Dashboard
                </span>
              </h1>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium max-w-xl mx-auto">
                Measurable, transparent, and transformative targets designed to elevate India's human potential over the coming decade.
              </p>
            </div>
          </FadeIn>

          <ImpactCounter />

          <div className="pt-4">
            <ExpertVoice />
          </div>

        </div>
      </div>
    </>
  );
};
