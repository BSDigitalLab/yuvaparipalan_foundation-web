import React from 'react';
import { motion } from 'framer-motion';

export const VillageMistLayer: React.FC = () => {
  return (
    <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden will-change-transform">
      {/* Prominent High-Altitude Drifting Cloud Stream (40s cycle) */}
      <motion.div
        initial={{ x: '-20%', opacity: 0.40 }}
        animate={{
          x: ['-20%', '20%', '-20%'],
          opacity: [0.40, 0.70, 0.40],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.82) 0%, rgba(254, 240, 138, 0.42) 50%, transparent 80%)',
          filter: 'blur(45px)',
        }}
        className="absolute top-[10%] left-[-15%] w-[130%] h-[260px]"
      />

      {/* Prominent Paddy Field Low Dew Mist (35s cycle) */}
      <motion.div
        initial={{ x: '-15%', opacity: 0.45 }}
        animate={{
          x: ['-15%', '15%', '-15%'],
          opacity: [0.45, 0.75, 0.45],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background: 'linear-gradient(to top, rgba(255, 255, 255, 0.75) 0%, rgba(240, 250, 245, 0.30) 70%, transparent 100%)',
          filter: 'blur(35px)',
        }}
        className="absolute bottom-[14%] left-[-15%] w-[130%] h-[300px]"
      />
    </div>
  );
};
