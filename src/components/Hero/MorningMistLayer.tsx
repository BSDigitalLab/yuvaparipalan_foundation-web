import React from 'react';
import { motion } from 'framer-motion';

export const MorningMistLayer: React.FC = () => {
  return (
    <div className="absolute inset-0 z-[3] pointer-events-none overflow-hidden will-change-transform">
      {/* MistLayer 1 (Bottom Field Ground Dew Mist - 40s duration) */}
      <motion.div
        initial={{ x: '-15%', opacity: 0.12 }}
        animate={{
          x: ['-15%', '15%', '-15%'],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background: 'linear-gradient(to top, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.15) 60%, transparent 100%)',
          filter: 'blur(60px)',
        }}
        className="absolute bottom-0 left-[-10%] w-[120%] h-[250px] md:h-[300px]"
      />

      {/* MistLayer 2 (Mid-Level Village Mist - 50s duration, alternate direction) */}
      <motion.div
        initial={{ x: '15%', opacity: 0.14 }}
        animate={{
          x: ['15%', '-15%', '15%'],
          opacity: [0.14, 0.20, 0.14],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background: 'linear-gradient(to top, transparent 0%, rgba(255, 255, 255, 0.40) 50%, transparent 100%)',
          filter: 'blur(60px)',
        }}
        className="absolute top-[35%] left-[-10%] w-[120%] h-[250px]"
      />

      {/* MistLayer 3 (High Valley Drift - 65s duration) */}
      <motion.div
        initial={{ x: '-10%', opacity: 0.15 }}
        animate={{
          x: ['-10%', '10%', '-10%'],
          opacity: [0.15, 0.22, 0.15],
        }}
        transition={{
          duration: 65,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.35) 0%, rgba(255, 235, 200, 0.20) 70%, transparent 100%)',
          filter: 'blur(60px)',
        }}
        className="absolute top-[15%] left-[-10%] w-[120%] h-[250px]"
      />
    </div>
  );
};
