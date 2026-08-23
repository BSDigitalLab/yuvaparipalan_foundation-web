import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { Hero } from '../components/sections/Hero';
import { FlagshipPrograms } from '../components/sections/FlagshipPrograms';
import { ImpactCounter } from '../components/sections/ImpactCounter';
import { MissionVision } from '../components/sections/MissionVision';
import { FocusAreas } from '../components/sections/FocusAreas';
import { SuccessStories } from '../components/sections/SuccessStories';
import { GalleryTeaser } from '../components/sections/GalleryTeaser';
import { JoinCTA } from '../components/sections/JoinCTA';

export const HomePage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Yuvaparipalan Foundation | India's Youth Empowerment Movement"
        description="Transformative youth empowerment movement in India: AI literacy, merit scholarships, Shepreneurs women entrepreneurship, and leadership."
      />
      <main className="overflow-hidden">
        <Hero />
        <FlagshipPrograms />
        <ImpactCounter />
        <MissionVision />
        <FocusAreas />
        <SuccessStories />
        <GalleryTeaser />
        <JoinCTA />
      </main>
    </>
  );
};
