import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { ImpactCounter } from '../components/sections/ImpactCounter';
import { SuccessStories } from '../components/sections/SuccessStories';
import { FadeIn } from '../components/motion/FadeIn';
import { Target, Flag, ShieldCheck, Heart } from 'lucide-react';

export const ImpactPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="2035 Impact Dashboard - Yuvaparipalan Foundation"
        description="Explore Yuvaparipalan Foundation's bold 2035 impact vision: 10 Million empowered, 100,000 merit scholarships, 1 Million AI trained."
      />

      <div className="pt-32 pb-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="text-xs font-mono font-semibold tracking-widest text-emerald-400 uppercase bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                Nationwide Roadmap
              </span>
              <h1 className="font-heading text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
                2035 Impact Vision & Metrics
              </h1>
              <p className="text-slate-300 text-base sm:text-lg">
                Measurable, transparent, and transformative targets designed to elevate India's human potential over the coming decade.
              </p>
            </div>
          </FadeIn>

          <ImpactCounter />

          <div className="mt-20">
            <SuccessStories />
          </div>
        </div>
      </div>
    </>
  );
};
