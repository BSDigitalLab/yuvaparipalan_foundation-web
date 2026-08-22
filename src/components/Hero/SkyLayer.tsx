import React from 'react';
import { motion, MotionValue } from 'framer-motion';

interface SkyLayerProps {
  scrollY: MotionValue<number>;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

export const SkyLayer: React.FC<SkyLayerProps> = ({ scrollY, mouseX, mouseY }) => {
  return (
    <motion.div
      style={{
        y: scrollY,
        x: mouseX,
        translateY: mouseY,
      }}
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden will-change-transform"
    >
      {/* 100% Solid Photorealistic Kerala Morning Sunrise Sky (Completely eliminates PNG checkerboards) */}
      <div 
        className="absolute inset-0 w-full h-full z-0"
        style={{
          background: 'linear-gradient(to bottom, #0284c7 0%, #38bdf8 18%, #7dd3fc 38%, #bae6fd 55%, #fef08a 76%, #fdba74 92%, #f97316 100%)',
        }}
      />

      {/* Soft Drifting Morning Cloud Haze Layer */}
      <motion.div
        animate={{
          x: ['-5%', '5%', '-5%'],
          opacity: [0.4, 0.65, 0.4],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 30%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 240, 200, 0.3) 50%, transparent 80%)',
          filter: 'blur(30px)',
        }}
      />
    </motion.div>
  );
};
