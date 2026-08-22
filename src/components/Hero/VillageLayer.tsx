import React from 'react';
import { motion, MotionValue } from 'framer-motion';

interface VillageLayerProps {
  scrollY: MotionValue<number>;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

export const VillageLayer: React.FC<VillageLayerProps> = ({ scrollY, mouseX, mouseY }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, delay: 0.6, ease: 'easeOut' }}
      style={{
        y: scrollY,
        x: mouseX,
        translateY: mouseY,
      }}
      className="absolute inset-0 w-full h-full z-[4] pointer-events-none overflow-hidden will-change-transform flex items-end justify-center"
    >
      <img
        src="/bg_images/bg_home_village.png"
        alt="Kerala Awakening Village"
        loading="eager"
        decoding="async"
        className="w-full w-screen h-full min-w-full min-h-full object-cover object-bottom"
        onError={(e) => {
          (e.target as HTMLImageElement).src = '/bg_images/village.png';
        }}
      />
    </motion.div>
  );
};
