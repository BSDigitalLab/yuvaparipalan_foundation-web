import React from 'react';
import { useParallax } from './useParallax';
import { SkyLayer } from './SkyLayer';
import { SunGlowLayer } from './SunGlowLayer';
import { MountainLayer } from './MountainLayer';
import { MountainMistLayer } from './MountainMistLayer';
import { BacksideMistLayer } from './BacksideMistLayer';
import { BirdsFlock } from './BirdsFlock';
import { VillageLayer } from './VillageLayer';
import { VillageMistLayer } from './VillageMistLayer';
import { BigSpreadCloudLayer } from './BigSpreadCloudLayer';
import { CoconutTreeLayer } from './CoconutTreeLayer';
import { ForegroundMistLayer } from './ForegroundMistLayer';
import { HeroContent } from './HeroContent';

export const Hero: React.FC = () => {
  const {
    skyY,
    mountainY,
    villageY,
    coconutTreeY,
    skyMouseX,
    skyMouseY,
    mountainMouseX,
    mountainMouseY,
    villageMouseX,
    villageMouseY,
    coconutTreeMouseX,
    coconutTreeMouseY,
  } = useParallax();

  return (
    <section
      style={{
        filter: 'brightness(1.05) contrast(1.02) saturate(1.08)',
      }}
      className="relative w-full min-h-[850px] lg:h-screen lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#0284c7] will-change-transform"
    >
      {/* Layer 1: Photorealistic Sky Layer (Solid Morning Sunrise Fill) */}
      <SkyLayer scrollY={skyY} mouseX={skyMouseX} mouseY={skyMouseY} />

      {/* Radiant Compact Golden Morning Sun Disc & Sunbeams */}
      <SunGlowLayer />

      {/* Layer 2: Mountain Layer */}
      <MountainLayer scrollY={mountainY} mouseX={mountainMouseX} mouseY={mountainMouseY} />

      {/* Inter-Layer Mist 1: Mountain Ridge Haze */}
      <MountainMistLayer />

      {/* Moving Misty Clouds BEHIND Village Layer (z-[3]) */}
      <BacksideMistLayer />

      {/* Realistic Animated Flocks of Birds Flying BEHIND Village Image (z-[3]) */}
      <BirdsFlock />

      {/* Layer 3: Village Layer (village.png) (z-[4]) */}
      <VillageLayer scrollY={villageY} mouseX={villageMouseX} mouseY={villageMouseY} />

      {/* Inter-Layer Mist 2: Paddy Field Dew Mist (In Front of Village) (z-[5]) */}
      <VillageMistLayer />

      {/* Massive Volumetric Cloud Bank (In Front of Village Image z-[4], Behind Hero Content z-[10]) (z-[6]) */}
      <BigSpreadCloudLayer />

      {/* Layer 4: Coconut Tree Layer */}
      <CoconutTreeLayer scrollY={coconutTreeY} mouseX={coconutTreeMouseX} mouseY={coconutTreeMouseY} />

      {/* Inter-Layer Mist 3: Coastal Morning Stream */}
      <ForegroundMistLayer />

      {/* Layer 5: Hero Content (Text & Dual CTAs) */}
      <HeroContent />
    </section>
  );
};
